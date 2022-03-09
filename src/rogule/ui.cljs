(ns rogule.ui
  (:require
    [clojure.set :refer [difference]]
    [reagent.core :as r]
    [reagent.dom :as rdom]
    [sitefox.ui :refer [log]]
    [rogule.emoji :refer [tile tile-mem]]
    [rogule.map :refer [make-digger-map]]))

(defonce state (r/atom {}))
(defonce keymap (r/atom {}))

(def size 32)
(def visible-dist 9)
(def visible-dist-sq (js/Math.pow visible-dist 2))
(def clear-dist 7)
(def clear-dist-sq (js/Math.pow clear-dist 2))

(def key-dir-map
  {37 [0 dec]
   72 [0 dec]
   39 [0 inc]
   76 [0 inc]
   38 [1 dec]
   75 [1 dec]
   40 [1 inc]
   74 [1 inc]})

(defn entities-by-pos [entities]
  (reduce (fn [es [id e]] (assoc es (conj (:pos e) (:layer e)) (assoc e :id id))) {} entities))

(def entities-by-pos-mem (memoize entities-by-pos))

(defn room-center [room]
  [(int (/ (+ (:_x2 room)
              (:_x1 room))
           2))
   (int (/ (+ (:_y2 room)
              (:_y1 room))
           2))])

(defn distance-sq [[x1 y1] [x2 y2]]
  (+
   (js/Math.pow (- x2 x1) 2) 
   (js/Math.pow (- y2 y1) 2)))

(defn distance [a b]
  (js/Math.sqrt
    (distance-sq a b)))

(defn make-player-look-range [pos lookup dist]
  (range (- (lookup pos) dist) (+ (lookup pos) dist)))

(defn can-pass-fn [types]
  (fn [floor-tiles pos]
    (let [tile-type (get floor-tiles pos)]
      (print "passable?" pos tile-type types)
      (contains? (set types) tile-type))))

(defn make-player [stuff]
  {:player
   (merge
     stuff
     {:char "1F9DD"
      :name "you"
      :layer :occupy
      :fns {:update (fn [])
            :passable (can-pass-fn [:room :door :corridor])}})})

(defn make-thing [stuff]
  {(random-uuid)
   (merge
     stuff
     {:char "1F344"
      :layer :floor
      :name "mushroom"})})

(defn make-entities [game-map]
  (merge
    (make-player {:pos (-> game-map :rooms first room-center)})
    (make-thing {:pos (-> game-map :rooms second room-center)})))

(defn move-to [state id new-pos]
  (let [game-map (:map @state)
        floor-tiles (:floor-tiles game-map)
        entity (get-in @state [:entities id])
        passable-fn (-> entity :fns :passable)
        passable? (if passable-fn (passable-fn floor-tiles new-pos) true)]
    (when passable?
      (swap! state assoc-in [:entities id :pos] new-pos))))

(defn process-arrow-key [state ev]
  ; key down -> if not already pressed, push that key onto queue
  ; after a time out
  ;   if any keys are still down duplicate the end of the queue
  (let [code (aget ev "keyCode")
        down? (= (aget ev "type") "keydown")
        dir (get key-dir-map code)]
    (when dir
      (cond (and down?
                 (nil? (-> @keymap :held (get code))))
            (do
              (js/console.log "keyCode" code)
              (swap! keymap update-in [:held] (fn [held] (conj (set held) code)))
              (let [dir-idx (first dir)
                    dir-fn (second dir)
                    new-pos (-> @state
                                (get-in [:entities :player :pos])
                                (update-in [dir-idx] dir-fn))]
                (move-to state :player new-pos)))
            (not down?)
            (swap! keymap update-in [:held] (fn [held] (difference (set held) #{code})))))
    (js/console.log "keymap" (clj->js @keymap))))

(defn install-arrow-key-handler [state el]
  (if el
    (let [arrow-handler-fn #(process-arrow-key state %)]
      (.addEventListener js/window "keydown" arrow-handler-fn)
      (.addEventListener js/window "keyup" arrow-handler-fn)
      (aset js/window "_game-key-handler" arrow-handler-fn))
    (let [arrow-handler-fn (aget js/window "_game-key-handler")]
      (.removeEventListener js/window "keydown" arrow-handler-fn)
      (.removeEventListener js/window "keyup" arrow-handler-fn)
      (js-delete js/window "_game-key-handler"))))

(defn component-cell [floor-tiles entities x y opacity]
  [:span.grid {:key x
               :style {:opacity opacity}}
   (when (> opacity 0)
     (cond 
       (= (get floor-tiles [x y]) :door)
       (tile "2B1C" "door")
       (= (get floor-tiles [x y]) :room)
       (tile "2B1C" "room")
       (= (get floor-tiles [x y]) :wall)
       (tile "2B1B" "wall")
       (= (get floor-tiles [x y]) :corridor)
       (tile "1F7EB" "corridor")
       :else nil))
   (for [layer [:floor :occupy]]
     (let [entity (get entities [x y layer])]
       (when entity
         (tile-mem (:char entity) (:name entity) {:opacity opacity}))))])

(defn component-main [state]
  (let [game-map (:map @state)
        floor-tiles (:floor-tiles game-map)
        entities (entities-by-pos-mem (-> @state :entities))
        player (-> @state :entities :player)
        player-pos (:pos player)]
    [:span
    [:div#game {:ref #(install-arrow-key-handler state %)}
     (for [y (range (- (second player-pos) visible-dist)
                    (+ (second player-pos) visible-dist))]
       [:div.row {:key y}
        (for [x (range (- (first player-pos) visible-dist)
                       (+ (first player-pos) visible-dist))]
          (let [dist (distance-sq player-pos [x y])
                opacity (cond
                          (> dist visible-dist-sq) 0
                          (> dist clear-dist-sq) 0.75
                          :else 1)]
            (component-cell floor-tiles entities x y opacity)))])]]))

(defn start {:dev/after-load true} []
  (let [m (make-digger-map (js/Math.random) size size)
        entities (make-entities m)]
    (log "map" m)
    (swap! state assoc
           :map m
           :entities entities))
  (rdom/render [component-main state]
               (js/document.getElementById "app")))

(defn main! []
  (start))

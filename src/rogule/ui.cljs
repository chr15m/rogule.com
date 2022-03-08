(ns rogule.ui
  (:require
    [shadow.resource :as rc]
    [reagent.core :as r]
    [reagent.dom :as rdom]
    [sitefox.ui :refer [log]]
    [rogule.emoji :refer [tile]]
    [rogule.map :refer [make-digger-map]]))

(defonce state (r/atom {}))

(def size 32)
(def visible-dist 9)
(def visible-dist-sq (js/Math.pow visible-dist 2))
(def clear-dist 7)
(def clear-dist-sq (js/Math.pow clear-dist 2))

(defn entities-by-pos [entity-layer]
  (reduce (fn [es [id e]] (assoc es (:pos e) (assoc e :id id))) {} entity-layer))

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

(def distance-sq-mem (memoize distance-sq))

(defn distance [a b]
  (js/Math.sqrt
    (distance-sq a b)))

(defn make-player-look-range [pos lookup dist]
  (range (- (lookup pos) dist) (+ (lookup pos) dist)))

(defn make-entities [game-map]
  {:floor {} ; floor layer
   :occupy {:player {:char "1F9DD"
                     :pos (-> game-map :rooms first room-center)}
            (random-uuid) {:char "1F344"
                           :pos (-> game-map :rooms second room-center)}}})

(defn process-game-key [state ev]
  (js/console.log (aget ev "keyCode"))
  (case (aget ev "keyCode")
    ;27 (swap! state assoc :screen :menu)
    37 (swap! state update-in [:entities :occupy :player :pos 0] dec)
    39 (swap! state update-in [:entities :occupy :player :pos 0] inc)
    38 (swap! state update-in [:entities :occupy :player :pos 1] dec)
    40 (swap! state update-in [:entities :occupy :player :pos 1] inc)
    nil))

(defn component-cell [floor-tiles entities x y opacity]
  [:span.grid {:key x
               :style {;:background-color "#fff"
                       :opacity opacity}}
   (print "opacity" opacity)
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
   (let [entity (get entities [x y])]
     (when entity
       (tile (:char entity) "")))])

(defn component-main [_state]
  (let [game-map (:map @state)
        floor-tiles (:floor-tiles game-map)
        entities (entities-by-pos (-> @state :entities :occupy))
        player (-> @state :entities :occupy :player)
        player-pos (:pos player)]
    [:div#game {:on-key-down #(process-game-key state %)}
     (for [y (make-player-look-range player-pos second visible-dist)]
       [:div.row {:key y}
        (for [x (make-player-look-range player-pos first visible-dist)]
          (let [dist (distance-sq player-pos [x y])
                opacity (cond
                               (> dist visible-dist-sq) 0
                               (> dist clear-dist-sq) 0.75
                               :else 1)]
            (component-cell floor-tiles entities x y opacity)))])]))

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
  (.addEventListener js/window "keydown" #(process-game-key state %))
  (start))

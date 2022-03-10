(ns rogule.ui
  (:require
    [clojure.set :refer [difference]]
    [reagent.core :as r]
    [reagent.dom :as rdom]
    [sitefox.ui :refer [log]]
    [rogule.emoji :refer [tile tile-mem]]
    [rogule.map :refer [make-digger-map]]
    ["rot-js" :as ROT]))

(defonce state (r/atom {:message {:expires 5
                                  :text "Press ? for help."}}))
(defonce keymap (r/atom {}))

(def size 32)
(def visible-dist 9)
(def visible-dist-sq (js/Math.pow visible-dist 2))
(def clear-dist 7)
(def clear-dist-sq (js/Math.pow clear-dist 2))

(def forage-items
  [{:char "1F33F"
    :name "herbs"
    :value 1}
   {:char "1FAB6"
    :name "feather"
    :value 1}
   {:char "1F9B4"
    :name "bone"
    :value 1}
   {:char "1FAD2"
    :name "olive sprig"
    :value 1}

   {:char "1F95A"
    :name "egg"
    :value 2}
   {:char "1F347"
    :name "grapes"
    :value 2}
   {:char "1F356"
    :name "meat on bone"
    :value 2}

   {:char "1F344"
    :name "mushroom"
    :value 4}
   {:char "1F330"
    :name "chestnut"
    :value 4}

   {:char "1F48E"
    :name "gem"
    :value 8}])

(def item-covers
  [{:char "1F573"
    :name "hole"}
   {:char "1FAA8"
    :name "rock"}
   {:char "1FAB5"
    :name "wood block"}])

(def indoor-scenery
  [{:char "26F2"
    :name "fountain"}
   {:char "1FAB4"
    :name "pot plant"}
   {:char "1F5FF"
    :name "statue"}])

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

(defn make-id []
  (-> (random-uuid) str (.slice 0 8)))

(defn get-random-entity-by-value [entity-template-table]
  (let [weighted-table (->> entity-template-table
                            (map (fn [i] {(:name i) (/ 1 (:value i))}))
                            (into {})
                            clj->js)
        item-name (ROT/RNG.getWeightedValue weighted-table)]
    (->> entity-template-table
         (filter #(= (:name %) item-name))
         first)))

(defn can-pass-fn [types]
  (fn [floor-tiles pos]
    (let [tile-type (get floor-tiles pos)]
      (contains? (set types) tile-type))))

(defn remove-entity [*state id]
  (log "remove-entity" id (get-in *state [:entities]))
  (update-in *state [:entities] dissoc id))

(defn add-entity [*state entity]
  (assoc-in *state [:entities (:id entity)] (dissoc entity :id)))

(defn add-to-inventory [*state id item-id entity]
  (update-in *state [:entities id :inventory] conj (assoc entity :id item-id)))

; ***** item interaction functions ***** ;

(defn add-item-to-inventory [*state their-id item-id]
  (let [them (get-in *state [:entities their-id])
        item (get-in *state [:entities item-id])]
    (if (:inventory them)
      [false (-> *state
                 (add-to-inventory their-id item-id item)
                 (remove-entity item-id))]
      [false *state])))

(defn uncover-item [*state _their-id item-id]
  (let [item (get-in *state [:entities item-id])]
    [true (-> *state
              (remove-entity item-id)
              (add-entity (:hidden-item item)))]))

; ***** create different types of things ***** ;

(defn make-player [[entities game-map free-tiles]]
  (let [pos (rand-nth (keys free-tiles))
        player {:char "1F9DD"
                :name "you"
                :layer :occupy
                :pos pos
                :stats {}
                :inventory []
                :fns {:update (fn [])
                      :passable (can-pass-fn [:room :door :corridor])}}]
    [(assoc entities :player player)
     (dissoc free-tiles pos)
     game-map]))

(defn make-thing [[entities free-tiles game-map]]
  (let [pos (rand-nth (keys free-tiles))
        item-template (get-random-entity-by-value forage-items)
        item (merge
               item-template
               {:pos pos
                :id (make-id)
                :layer :floor
                :fns {:encounter add-item-to-inventory}})
        cover (merge
                (rand-nth item-covers)
                {:pos pos
                 :layer :floor
                 :hidden-item item
                 :fns {:encounter uncover-item}})]
    [(assoc entities (make-id) cover)
     (dissoc free-tiles pos)
     game-map]))

(defn make-entities [game-map]
  (let [tiles (:tiles game-map)
        free-tiles (merge
                     (:room tiles)
                     (:corridor tiles))
        entities-free-tiles (make-player [{} game-map free-tiles])
        [entities] (reduce
                     (fn [entities-free-tiles _i]
                       (make-thing entities-free-tiles))
                     entities-free-tiles
                     (range 10))]
    entities))

(defn create-level! []
  (let [m (make-digger-map (js/Math.random) size size)
        entities (make-entities m)]
    (log "map" m)
    (log "entities" entities)
    (swap! state assoc
           :map m
           :entities entities)))

; ***** game engine ***** ;

(defn move-to [*state id new-pos]
  (let [game-map (:map *state)
        floor-tiles (:floor-tiles game-map)
        entity (get-in *state [:entities id])
        passable-fn (-> entity :fns :passable)
        passable-tile? (if passable-fn (passable-fn floor-tiles new-pos) true)
        entities-at-pos (filter (fn [[_id entity]] (= (:pos entity) new-pos)) (:entities *state))
        [item-blocks? state-after-encounters] (reduce (fn [[item-blocks? *state] [entity-id e]]
                                                        (let [encounter-fn (-> e :fns :encounter)]
                                                          (if encounter-fn
                                                            (let [[this-item-blocks? *state] (encounter-fn *state id entity-id)]
                                                              [(or item-blocks? this-item-blocks?) *state])
                                                            [item-blocks? *state])))
                                                      [false *state] entities-at-pos)]
    (if (and passable-tile? (not item-blocks?))
      (assoc-in state-after-encounters [:entities id :pos] new-pos)
      state-after-encounters)))

(defn expire-messages [*state]
  (update-in *state [:message]
             (fn [{:keys [expires text]}]
               (let [display? (not= expires 0)]
                 (when display?
                   {:expires (dec expires)
                    :text text})))))

(defn process-arrow-key! [state ev]
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
              (swap! keymap update-in [:held] (fn [held] (conj (set held) code)))
              (let [dir-idx (first dir)
                    dir-fn (second dir)
                    new-pos (-> @state
                                (get-in [:entities :player :pos])
                                (update-in [dir-idx] dir-fn))]
                (swap! state #(-> %
                                  (move-to :player new-pos)
                                  (expire-messages)))))
            (not down?)
            (swap! keymap update-in [:held] (fn [held] (difference (set held) #{code})))))
    ;(js/console.log "keymap" (clj->js @keymap))
    ))

(defn install-arrow-key-handler [state el]
  (if el
    (let [arrow-handler-fn #(process-arrow-key! state %)]
      (.addEventListener js/window "keydown" arrow-handler-fn)
      (.addEventListener js/window "keyup" arrow-handler-fn)
      (aset js/window "_game-key-handler" arrow-handler-fn))
    (let [arrow-handler-fn (aget js/window "_game-key-handler")]
      (.removeEventListener js/window "keydown" arrow-handler-fn)
      (.removeEventListener js/window "keyup" arrow-handler-fn)
      (js-delete js/window "_game-key-handler"))))

(defn key-handler [ev]
  (let [code (aget ev "keyCode")]
    (print "keyCode" code)
    (case code
      81 (create-level!)
      191 (swap! state update-in [:modal] #(when (not %) :help))
      27 (swap! state dissoc :modal)
      nil)))

; ***** rendering ***** ;

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

(defn component-inventory [inventory]
  [:ul#inventory
   (for [e inventory]
     [:li (tile-mem (:char e) (:name e) {:width "64px"})])])

(defn component-help [show-help]
  (when show-help
    [:div.modal
     [:h2 "Rogule"]
     [:p "Try to obtain the best hand by collecting items."]]))

(defn component-messages [message]
  [:div.message message])

(defn component-main [state]
  (let [game-map (:map @state)
        floor-tiles (:floor-tiles game-map)
        entities (entities-by-pos-mem (-> @state :entities))
        player (-> @state :entities :player)
        player-pos (:pos player)
        player-inventory (:inventory player)]
    [:span#game
     [:div {:ref #(install-arrow-key-handler state %)}
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
             (component-cell floor-tiles entities x y opacity)))])]
     [component-inventory player-inventory]
     [component-help (= (:modal @state) :help)]
     [component-messages (-> @state :message :text)]]))

(defn start {:dev/after-load true} []
  (rdom/render [component-main state]
               (js/document.getElementById "app")))

(defn main! []
  (create-level!)
  (.addEventListener js/window "keydown" #(key-handler %))
  (start))

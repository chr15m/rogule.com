(ns rogule.map
  (:require
    ["rot-js" :as ROT]
    ["djb2a$default" :as djb2a]
    [sitefox.ui :refer [log]]
    [clojure.set :refer [intersection]])
  (:require-macros
    [rogule.loader :refer [load-sprite]]))

(log "rogule.map loaded")

(def shrine-template {:sprite (load-sprite :shinto-shrine)
                      :name "shrine"})

(def forage-items
  [{:name "chestnut"
    :sprite (load-sprite :chestnut)
    :fns {:encounter :add-item-to-inventory}
    :value 1}
   {:name "mushroom"
    :sprite (load-sprite :mushroom)
    :fns {:encounter :add-item-to-inventory}
    :value 2}
   {:name "gem-stone"
    :sprite (load-sprite :gem-stone)
    :fns {:encounter :add-item-to-inventory}
    :value 8}

   {:name "health"
    :sprite (load-sprite :green-heart)
    :fns {:encounter :increase-hp}
    :value 2}

   #_ {:name "shield"
    :sprite (load-sprite :shield)
    :armour 2
    :fns {:encounter :add-item-to-inventory}
    :value 1}

   #_ {:name "dagger"
    :sprite (load-sprite :dagger)
    :fns {:encounter :add-item-to-inventory}
    :dmg 1
    :value 3}
   #_ {:name "axe"
    :sprite (load-sprite :axe)
    :fns {:encounter :add-item-to-inventory}
    :dmg 3
    :value 2}])

(def item-covers
  [{:sprite (load-sprite :potted-plant)
    :fns {:encounter :uncover-item}
    :name "potted plant"}
   {:sprite (load-sprite :rock)
    :fns {:encounter :uncover-item}
    :name "rock"}
   {:sprite (load-sprite :wood)
    :fns {:encounter :uncover-item}
    :name "wood block"}])

(def monster-table
  [{:sprite (load-sprite :rat)
    :activation 3
    :stats {:xp 1 :hp [2 2]}
    :name "the rat"}
   {:sprite (load-sprite :bat)
    :activation 10
    :stats {:xp 2 :hp [3 3]}
    :name "the bat"}

   {:sprite (load-sprite :ghost)
    :activation 10
    :stats {:xp 3 :hp [3 3]}
    :name "the ghost"}
   {:sprite (load-sprite :boar)
    :activation 15
    :stats {:xp 3 :hp [4 4]}
    :name "the boar"}
   {:sprite (load-sprite :wolf)
    :activation 20
    :stats {:xp 4 :hp [5 5]}
    :name "the wolf"}
   {:sprite (load-sprite :ogre)
    :activation 10
    :stats {:xp 4 :hp [7 7]}
    :name "the ogre"}

   {:sprite (load-sprite :zombie)
    :activation 5
    :stats {:xp 5 :hp [9 9]}
    :name "the zombie"}
   {:sprite (load-sprite :vampire)
    :activation 15
    :stats {:xp 6 :hp [8 8]}
    :name "the vampire"}
   {:sprite (load-sprite :genie)
    :activation 20
    :stats {:xp 6 :hp [10 10]}
    :name "the genie"}

   {:sprite (load-sprite :dragon)
    :activation 10
    :stats {:xp 8 :hp [15 15]}
    :name "the dragon"}
   {:sprite (load-sprite :t-rex)
    :activation 15
    :stats {:xp 10 :hp [12 12]}
    :name "the t-rex"}])

(def smoke-juice-template
  {:sprite (load-sprite :cloud)
   :name "smoke"
   :animation [:grow-and-fade :destroy]})

#_ (def indoor-scenery
     [{:sprite (load-sprite :fountain)
       :name "fountain"}
      {:sprite (load-sprite :potted-plant)
       :name "pot plant"}
      {:sprite (load-sprite :moai)
       :name "statue"}])

; ***** rng fns ***** ;

(defn hash-seed [& args]
  (djb2a (.join (clj->js args) "-")))

(defn make-rng [& args]
  (js/console.log "make-rng" (.join (clj->js args) "-"))
  (-> (ROT/RNG.clone) (.setSeed (djb2a (.join (clj->js args) "-")))))

(defn make-id []
  (-> (random-uuid) str (.slice 0 8)))

; ***** tile fns ***** ;

(defn is-adjacent-tile [[x y] tiles]
  (>
   (count
     (filter identity
             (for [ox [-1 0 1]
                   oy [-1 0 1]]
               (get tiles [(+ ox x) (+ oy y)]))))
   0))

(defn range-around [x dist]
  (range (- x dist) (+ x dist)))

(defn tiles-for-room [room]
  (apply merge
         (for [x (range (:_x1 room) (inc (:_x2 room)))
               y (range (:_y1 room) (inc (:_y2 room)))]
           {[x y] :room})))

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

(defn find-path [[x1 y1] [x2 y2] passable-fn]
  (let [p (ROT/Path.AStar. x1 y1 passable-fn #js {:topology 4})
        path (atom [])]
    (.compute p x2 y2 (fn [x y] (swap! path conj [x y])))
    (-> @path reverse vec)))

(defn can-pass-tile [floor-tiles pos allowed-tiles]
  (let [tile-type (get floor-tiles pos)]
       (contains? (set allowed-tiles) tile-type)))

(defn pos-to-difficulty [player pos paths-to-rooms player-path-find-fn]
  (let [furthest-room-path-length (count (:path (last paths-to-rooms)))
        path-to-item (find-path
                       (:pos player) pos
                       player-path-find-fn)
        path-to-item-length (count path-to-item)]
    (/ path-to-item-length furthest-room-path-length)))

; ***** entity fns ***** ;

(defn entities-by-pos [entities]
  (reduce (fn [es [id e]]
            (update-in es [(conj (:pos e) (:layer e))] conj (assoc e :id id)))
          {} entities))

(def entities-by-pos-mem (memoize entities-by-pos))

(defn count-entities [entities k v]
  (count (filter #(or (= (k %) v)
                      (= (-> % :drop k) v))
                 entities)))

(defn get-random-entity-by-value [entity-template-table]
  (let [weighted-table (->> entity-template-table
                            (map (fn [i] {(:name i) (/ 1 (:value i))}))
                            (into {})
                            clj->js)
        item-name (ROT/RNG.getWeightedValue weighted-table)]
    (->> entity-template-table
         (filter #(= (:name %) item-name))
         first)))

; ***** create different map elements ***** ;

(defn make-digger-map [seed w h]
  (js/console.log "make-digger-map" seed w h)
  (ROT/RNG.setSeed (hash-seed "map" seed w h))
  (let [digger (ROT/Map.Digger. w h
                                (clj->js {:corridorLength [1 5]
                                          ;:roomWidth [4 8]
                                          ;:roomHeight [4 8]
                                          ;:dugPercentage 0.15 ;TODO: increase this as you go deeper
                                          }))
        positions (atom {})]
    ;(js/console.log digger)
    (.create digger
             (fn [x y v]
               ; (js/console.log (clj->js args))
               (when (= v 0)
                 (swap! positions assoc [x y] :floor))))
    ;(js/console.log "digger:" digger)
    ;(js/console.log (clj->js positions))
    ;(js/console.log (aget digger "_rooms"))
    ;(js/console.log (aget digger "_corridors"))
    (let [rooms (-> digger (aget "_rooms") js/JSON.stringify js/JSON.parse (js->clj :keywordize-keys true))
          corridors (-> digger (aget "_corridors") js/JSON.stringify js/JSON.parse (js->clj :keywordize-keys true))
          room-tiles (->> rooms
                          (map tiles-for-room)
                          (apply concat)
                          (into {}))
          door-tiles (->> rooms
                          (map (fn [room]
                                 (apply merge
                                        (for [[xy _v] (:_doors room)]
                                          (let [pos (vec (.map (.split (name xy) ",") int))]
                                            {pos :door})))))
                          (apply concat)
                          (into {}))
          room-wall-tiles (apply merge
                                 (for [x (range w)
                                       y (range h)]
                                   (when (and
                                           (is-adjacent-tile [x y] room-tiles)
                                           (not (get @positions [x y]))
                                           (not (get room-tiles [x y])))
                                     {[x y] :wall})))
          corridor-tiles (->> @positions
                              (map (fn [[pos _kind]]
                                     (when (not (get room-tiles pos))
                                       {pos :corridor})))
                              (apply concat)
                              (into {}))
          corridor-wall-tiles (apply merge
                                     (for [x (range w)
                                           y (range h)]
                                       (when (and
                                               (is-adjacent-tile [x y] corridor-tiles)
                                               (not (get @positions [x y]))
                                               (not (get room-tiles [x y]))
                                               (not (get corridor-tiles [x y])))
                                         {[x y] :wall})))]
      {:tiles {:raw @positions
               :room room-tiles
               :room-wall room-wall-tiles
               :corridor corridor-tiles
               :corridor-wall corridor-wall-tiles
               :door door-tiles}
       :floor-tiles (merge room-tiles room-wall-tiles corridor-wall-tiles corridor-tiles door-tiles)
       :rooms rooms
       :corridors corridors
       :size [(aget digger "_width") (aget digger "_height")]})))

(defn make-player [entities free-tiles]
  (let [pos (rand-nth (keys free-tiles))
        player {:sprite (load-sprite :elf)
                :name "you"
                :layer :occupy
                :pos pos
                :stats {:hp [10 10]
                        :xp 4}
                :inventory []
                :fns {:encounter :combat
                      :passable :player-passable-wrapper}}]
    [(assoc entities :player player)
     (dissoc free-tiles pos)]))

(defn make-shrine [entities free-tiles paths-to-rooms]
  (let [pos (:center-pos (last paths-to-rooms))
        shrine (merge shrine-template
                      {:pos pos
                       :layer :occupy
                       :fns {:encounter :finish-game}})]
    [(assoc entities :shrine shrine)
     (dissoc free-tiles pos)]))

(defn make-covered-item [entities free-tiles paths-to-rooms player-path-find-fn]
  (let [{:keys [room]} (rand-nth paths-to-rooms)
        room-tiles (tiles-for-room room)
        free-room-tiles (intersection (set (keys room-tiles)) (set (keys free-tiles)))
        pos (rand-nth (vec free-room-tiles))
        difficulty (-> (pos-to-difficulty (:player entities) pos paths-to-rooms player-path-find-fn)
                       (* 0.9))
        item-template (get-random-entity-by-value forage-items)
        item (when
               (> (js/Math.random) difficulty)
               (merge
                 item-template
                 {:pos pos
                  :id (make-id)
                  :layer :floor}))
        cover (merge
                (rand-nth item-covers)
                {:pos pos
                 :layer :floor
                 :drop item
                 :juice (assoc smoke-juice-template 
                               :id (make-id)
                               :pos pos
                               :layer :between)})]
    [(assoc entities (make-id) cover)
     (dissoc free-tiles pos)]))

(defn make-monster [entities free-tiles paths-to-rooms player-path-find-fn]
  (let [pos (rand-nth (keys free-tiles))
        difficulty (-> (pos-to-difficulty (:player entities) pos paths-to-rooms player-path-find-fn)
                       (* 0.75)
                       (js/Math.min 1))
        min-index 0
        max-index (dec (count monster-table))
        monster-difficulty-index (js/Math.floor (* difficulty max-index))
        monster-sub-table {monster-difficulty-index 6
                           (js/Math.min (+ monster-difficulty-index 1) max-index) 2
                           (js/Math.max (- monster-difficulty-index 1) min-index) 2
                           (js/Math.min (+ monster-difficulty-index 2) max-index) 1
                           (js/Math.max (- monster-difficulty-index 2) min-index) 1}
        monster-index (js/parseInt (ROT/RNG.getWeightedValue (clj->js monster-sub-table)))
        monster (merge
                  (nth monster-table monster-index)
                  {:pos pos
                   :layer :occupy
                   :fns {:encounter :combat
                         :update :chase-player
                         :passable :make-monster-passable-fn}})]
    [(assoc entities (make-id) monster)
     (dissoc free-tiles pos)]))

(defn make-entities [game-map entity-count monster-count]
  (let [tiles (:tiles game-map)
        free-tiles (merge
                     (:room tiles)
                     (:corridor tiles))
        [entities free-tiles] (make-player {} free-tiles)
        player (:player entities)
        floor-tiles (:floor-tiles game-map)
        player-path-find-fn (fn [x y] (can-pass-tile floor-tiles [x y] [:room :door :corridor]))
        paths-to-rooms (->> (:rooms game-map)
                            (map (fn [room] [room (room-center room)]))
                            (map (fn [[room room-center-pos]]
                                   (let [path (find-path
                                                (:pos player) room-center-pos
                                                player-path-find-fn)]
                                     {:center-pos room-center-pos
                                      :room room
                                      :path path})))
                            (sort-by (juxt :path count)))
        [entities free-tiles] (make-shrine entities free-tiles paths-to-rooms)
        [entities free-tiles] (reduce
                                (fn [[entities free-tiles] _i]
                                  (make-covered-item entities free-tiles paths-to-rooms player-path-find-fn))
                                [entities free-tiles]
                                (range entity-count))
        [entities] (reduce
                     (fn [[entities free-tiles] _i]
                       (make-monster entities free-tiles paths-to-rooms player-path-find-fn))
                     [entities free-tiles]
                     (range monster-count))]
    entities))

(defn make-level [*state seed size]
  (let [m (make-digger-map (js/Math.random) size size)
        entities (make-entities m 20 5)
        counts (into {} (for [t [:mushroom :chestnut :gem-stone]]
                          {t (count-entities (vals entities) :name (name t))}))]
    (log "ents" (vals entities))
    (log "map" m)
    (log "entities" entities)
    (log "counts" counts)
    (assoc *state
           :seed seed
           :map m
           :entities entities
           :counts counts)))

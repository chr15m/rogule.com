(ns rogule.map
  (:require
    ["rot-js" :as ROT]
    ["djb2a$default" :as djb2a]
    [sitefox.ui :refer [log]]))

(log "rogule.map loaded")

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

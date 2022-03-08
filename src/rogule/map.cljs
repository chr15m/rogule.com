(ns rogule.map
  (:require
    ["rot-js" :as ROT]
    ["djb2a$default" :as djb2a]))

(defn hash-seed [& args]
  (djb2a (.join (clj->js args) "-")))

(defn make-rng [& args]
  (js/console.log "make-rng" (.join (clj->js args) "-"))
  (-> (ROT/RNG.clone) (.setSeed (djb2a (.join (clj->js args) "-")))))

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

(defn make-digger-map [seed w h]
  (js/console.log "make-digger-map" seed w h)
  (ROT/RNG.setSeed (hash-seed "map" seed w h))
  (let [digger (ROT/Map.Digger. w h
                                (clj->js {:corridorLength [1 7]
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
                          (map (fn [room]
                                 (apply merge
                                        (for [x (range (:_x1 room) (inc (:_x2 room)))
                                              y (range (:_y1 room) (inc (:_y2 room)))]
                                          {[x y] :room}))))
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
                                   (when (and (is-adjacent-tile [x y] room-tiles)
                                              (not (get @positions [x y]))
                                              (not (get room-tiles [x y])))
                                     {[x y] :wall})))
          corridor-tiles (->> @positions
                              (map (fn [[pos _kind]]
                                     (when (not (get room-tiles pos))
                                       {pos :corridor})))
                              (apply concat)
                              (into {}))]
      {:tiles {:raw @positions
               :room room-tiles
               :room-wall room-wall-tiles
               :corridor corridor-tiles}
       :floor-tiles (merge room-tiles room-wall-tiles corridor-tiles door-tiles)
       :rooms rooms
       :corridors corridors
       :size [(aget digger "_width") (aget digger "_height")]
       :digger digger})))

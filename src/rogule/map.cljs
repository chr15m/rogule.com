(ns rogule.map
  (:require
    ["rot-js" :as ROT]
    ["djb2a$default" :as djb2a]))

(defn hash-seed [& args]
  (djb2a (.join (clj->js args) "-")))

(defn make-rng [& args]
  (js/console.log "make-rng" (.join (clj->js args) "-"))
  (-> (ROT/RNG.clone) (.setSeed (djb2a (.join (clj->js args) "-")))))

#_ (defn make-digger-map [seed w h]
     (let [r (make-rng "map" seed w h)
           m (ROT/Map.Digger. w h)
           v (.create m (fn [x y v] (js/console.log x y v)))]
       (js/console.log "v" v)))

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
               (swap! positions assoc [x y] v)))
    ;(js/console.log "digger:" digger)
    ;(js/console.log (clj->js positions))
    ;(js/console.log (aget digger "_rooms"))
    ;(js/console.log (aget digger "_corridors"))
    {:tiles @positions
     :rooms (-> digger (aget "_rooms") js/JSON.stringify js/JSON.parse (js->clj :keywordize-keys true))
     :corridors (-> digger (aget "_corridors") js/JSON.stringify js/JSON.parse (js->clj :keywordize-keys true))
     :size [(aget digger "_width") (aget digger "_height")]
     :digger digger}))

(defn is-adjacent-tile [[x y] tiles]
  (>
   (count
     (filter identity
             (for [ox [-1 0 1]
                   oy [-1 0 1]]
               (= (get tiles [(+ ox x) (+ oy y)]) 0))))
   0))

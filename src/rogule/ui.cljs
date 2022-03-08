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

(defn entities-by-pos [entity-layer]
  (reduce (fn [es e] (assoc es (:pos e) e)) {} entity-layer))

(defn room-center [room]
  [(int (/ (+ (:_x2 room)
              (:_x1 room))
           2))
   (int (/ (+ (:_y2 room)
              (:_y1 room))
           2))])

(defn make-entities [game-map]
  {:floor [] ; floor layer
   :air [{:char "1F9DD"
          :pos (-> game-map :rooms first room-center)
          :id :player}
         {:char "1F344"
          :pos (-> game-map :rooms second room-center)}]})

(defn process-game-key [state ev]
  (js/console.log (aget ev "keyCode"))
  (case (aget ev "keyCode")
    ;27 (swap! state assoc :screen :menu)
    37 (swap! state update-in [:entities :air 0 :pos 0] dec)
    39 (swap! state update-in [:entities :air 0 :pos 0] inc)
    38 (swap! state update-in [:entities :air 0 :pos 1] dec)
    40 (swap! state update-in [:entities :air 0 :pos 1] inc)
    nil))

(defn component-cell [floor-tiles entities x y]
  [:span.grid {:key x
               :style {:background-color "#fff"}}
   (cond 
     (= (get floor-tiles [x y]) :door)
     (tile "1F7E5" "door")
     (= (get floor-tiles [x y]) :room)
     (tile "2B1C" "room")
     (= (get floor-tiles [x y]) :wall)
     (tile "2B1B" "wall")
     (= (get floor-tiles [x y]) :corridor)
     (tile "1F7EB" "corridor")
     :else nil)
   (let [entity (get entities [x y])]
     (when entity
       (tile (:char entity) "")))])

(defn component-main [_state]
  (let [game-map (:map @state)
        floor-tiles (:floor-tiles game-map)
        entities (entities-by-pos (-> @state :entities :air))]
  [:div#game {:on-key-down #(process-game-key state %)}
   (for [y (range size)]
     [:div.row {:key y}
      (for [x (range size)]
        (component-cell floor-tiles entities x y))])]))

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

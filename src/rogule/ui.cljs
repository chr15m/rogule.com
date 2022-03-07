(ns rogule.ui
  (:require
    [shadow.resource :as rc]
    [reagent.core :as r]
    [reagent.dom :as rdom]
    [sitefox.ui :refer [log]]
    [rogule.emoji :refer [tile]]
    [rogule.map :refer [make-digger-map]]))

(defonce state (r/atom {}))

(defn entities-by-pos [entity-layer]
  (reduce (fn [es e] (assoc es (:pos e) e)) {} entity-layer))

(defn room-center [room]
  [(int (/ (+ (:_x2 room)
              (:_x1 room))
           2))
   (int (/ (+ (:_y2 room)
              (:_y1 room))
           2))])

(defn component-main [_state]
  (let [tiles (-> @state :map :tiles)
        entities (entities-by-pos (-> @state :entities :air))]
  [:div#game
   (for [y (range 32)]
     [:div.row
      (for [x (range 32)]
        [:span.grid #_ {:style {:background-color "#f00"}}
         (when (= (get tiles [x y]) 0)
           (tile "1F7EB" "")
           ;(tile "2B1C" "")
           )
         (let [entity (get entities [x y])]
           (when entity
             (tile (:char entity) "")))])])]))

(defn start {:dev/after-load true} []
  (let [m (make-digger-map (js/Math.random) 32 32)
        first-room (first (:rooms m))
        first-room-center (room-center first-room)]
    (log "map" m)
    (swap! state assoc
           :map m
           :entities {:floor [] ; floor layer
                      :air [{:char "1F9DD" :pos first-room-center}]}))
  (rdom/render [component-main state]
               (js/document.getElementById "app")))

(defn main! []
  (start))

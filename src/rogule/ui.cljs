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

(defn process-game-key [state ev]
  (js/console.log (aget ev "keyCode"))
  (case (aget ev "keyCode")
    ;27 (swap! state assoc :screen :menu)
    37 (swap! state update-in [:entities :air 0 :pos 0] dec)
    39 (swap! state update-in [:entities :air 0 :pos 0] inc)
    38 (swap! state update-in [:entities :air 0 :pos 1] dec)
    40 (swap! state update-in [:entities :air 0 :pos 1] inc)
    nil))

(defn component-main [_state]
  (let [tiles (-> @state :map :tiles)
        entities (entities-by-pos (-> @state :entities :air))]
  [:div#game {:on-key-down #(process-game-key state %)}
   (for [y (range 20)]
     [:div.row
      (for [x (range 20)]
        [:span.grid #_ {:style {:background-color "#f00"}}
         (when (= (get tiles [x y]) 0)
           (tile "1F7E9" ""))
         (let [entity (get entities [x y])]
           (when entity
             (tile (:char entity) "")))])])]))

(defn start {:dev/after-load true} []
  (let [m (make-digger-map (js/Math.random) 20 20)
        first-room (first (:rooms m))
        first-room-center (room-center first-room)]
    (log "map" m)
    (swap! state assoc
           :map m
           :entities {:floor [] ; floor layer
                      :air [{:char "1F9DD"
                             :pos first-room-center
                             :id :player}
                            {:char "1F344"
                             :pos (-> m :rooms second room-center)}]}))
  (rdom/render [component-main state]
               (js/document.getElementById "app")))

(defn main! []
  (.addEventListener js/window "keydown" #(process-game-key state %))
  (start))

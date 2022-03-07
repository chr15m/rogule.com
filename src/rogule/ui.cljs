(ns rogule.ui
  (:require
    [shadow.resource :as rc]
    [reagent.core :as r]
    [reagent.dom :as rdom]
    [rogule.emoji :refer [tile]]))

(defonce state (r/atom {}))

(defn rnd []
  (rand-nth ["1F338" "1F339" "1F940" "1F33C" "1F337"
             "1F331" "1F332" "1F333" "1F33F" "2618"
             "1F331" "1F332" "1F333" "1F33F" "2618"
             "1F331" "1F332" "1F333" "1F33F" "2618"
             "1F332" "1F333" "1F332" "1F333" "1F332" "1F333" "1F332" "1F333" "1F332" "1F333" "1F332" "1F333"
             "1FAA8" "1FAA8"
             "1F47B"
             nil nil nil nil nil
             nil nil nil nil nil
             nil nil nil nil nil
             nil nil nil nil nil
             nil nil nil nil nil
             nil nil nil nil nil
             nil nil nil nil nil
             nil nil nil nil nil
             nil nil nil nil nil
             nil nil nil nil nil
             nil nil nil nil nil
             nil nil nil nil nil
             nil nil nil nil nil
             nil nil nil nil nil
             nil nil nil nil nil
             nil nil nil nil nil
             nil nil nil nil nil
             nil nil nil nil nil
             nil nil nil nil nil
             nil nil nil nil nil
             nil nil nil nil nil
             nil nil nil nil nil
             nil nil nil nil nil
             ]))

(defn component-main [state]
  [:div
   [:pre (:time @state)]
   [:div#game
    (for [_y (range 20)]
      [:div.row
       (for [_x (range 20)]
         [:span.grid #_ {:style {:background-color "#f00"}}
          ;(tile "2B1C" "")
          (let [r (rnd)]
            (when (not (nil? r))
              (tile r "")))])])]])

(defn start {:dev/after-load true} []
  (rdom/render [component-main state]
               (js/document.getElementById "app")))

(defn timer [state]
  (swap! state update-in [:time] inc)
  (js/setTimeout #(timer state) 100))

(defn main! []
  (timer state)
  (start))

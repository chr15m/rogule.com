(ns rogule.twemojisearch
  (:require
    [shadow.resource :as rc]
    [reagent.core :as r]
    [reagent.dom :as rdom]
    [rogule.emoji :refer [tile alt-from-codes select-me codes-to-img-mem]]
    [rogule.twemojis :refer [name-to-key]]))

(def twemojis (js/JSON.parse (rc/inline "emoji.json")))

(def twemojis-url (if (not= (.indexOf (aget js/document "location" "href") "localhost") -1)
                    "/twemoji/svg/"  
                    "https://twemoji.maxcdn.com/v/latest/svg/"))

(defonce state (r/atom {}))

(defn field-match [t term field]
  (let [lookup (.toLowerCase (aget t field))]
    (>= (.indexOf lookup term) 0)))

(defn matches [term t]
  (let [term (.toLowerCase term)]
    (and (not (field-match t "skin tone" "name"))
         (not (field-match t "man " "name"))
         (not (field-match t "woman " "name"))
         (or
           (field-match t term "char")
           (field-match t term "name")
           (field-match t term "category")
           (field-match t term "group")
           (field-match t term "subgroup")))))

(defn initiate-search [state ev]
  (let [term (aget ev "target" "value")
        match-fn (partial matches term)]
    (swap! state
           #(-> %
                (assoc :term term)
                (update-in [:results] (fn [_]
                                        (when
                                          (>= (count term) 3)
                                          (.filter twemojis match-fn))))))))

(defn component-main [state]
  [:div
   [:h1 "rogule"]
   [:h2 "twemoji search"]
   [:input {:on-change (partial initiate-search state)
            :value (:term @state)}]
   (when-let [results (:results @state)]
     [:pre (count results)]
     [:ul
      (for [r (.slice results 0 100)]
        [:li
         [:span {:on-click select-me}
          (tile (assoc (js->clj r) "src" (str twemojis-url (codes-to-img-mem (aget r "codes"))))
                (when (aget r "codes") (alt-from-codes (aget r "codes"))))]
         " "
         [:span {:on-click select-me} ":" (name-to-key (aget r "name"))]])])])

(defn start {:dev/after-load true} []
  (rdom/render [component-main state]
               (js/document.getElementById "app")))

(defn main! []
  (start))

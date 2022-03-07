(ns rogule.emoji)

(def re-spaces (js/RegExp. " " "g"))

(defn codes-to-img [codes]
  (-> codes
      (.toLowerCase)
      (.replace re-spaces "-")))

(def codes-to-img-mem (memoize codes-to-img))

(defn tile [codes tile-name]
  (let [c (codes-to-img-mem codes)]
    [:img {:title tile-name
           :alt tile-name
           :width "32px"
           :src (str "twemojis/svg/" c ".svg")}]))

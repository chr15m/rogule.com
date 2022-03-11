(ns rogule.emoji)

(def re-spaces (js/RegExp. " " "g"))

(defn codes-to-img [codes]
  (-> codes
      (.toLowerCase)
      (.replace re-spaces "-")))

(def codes-to-img-mem (memoize codes-to-img))

(defn select-me [ev]
  (let [selection (.getSelection js/window)]
    (.selectAllChildren selection (aget ev "target"))))

(defn alt-from-codes [codes]
  (js/String.fromCodePoint.apply nil (.map (.split codes " ") #(str "0x" %))))

(defn tile [sprite & [tile-name extra]]
  (let [src (get sprite "src")]
    [:img (merge {:title (or tile-name (get sprite "name"))
                  ; :alt (alt-from-codes (get sprite "codes"))
                  :width "32px"
                  :src (if (= (.indexOf src "/") 0)
                         (str src ".svg")
                         (str "data:image/svg+xml;base64," src))}
                 extra)]))

(def tile-mem (memoize tile))

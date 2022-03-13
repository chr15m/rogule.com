(ns rogule.emoji
  (:require
    [rogule.twemojis :refer [codes-to-filename]]))

(def re-spaces (js/RegExp. " " "g"))

(def codes-to-img-mem (memoize codes-to-filename))

(defn select-me [ev]
  (let [selection (.getSelection js/window)]
    (.selectAllChildren selection (aget ev "target"))))

(defn alt-from-codes [codes]
  (js/String.fromCodePoint.apply nil (.map (.split codes " ") #(str "0x" %))))

(defn emoj [sprite]
  (alt-from-codes (get sprite "codes")))

(defn tile [sprite & [tile-name extra]]
  (let [src (get sprite "src")]
    [:img.tile (merge {:title (or tile-name (get sprite "name"))
                       :alt (when (get sprite "codes") (alt-from-codes (get sprite "codes")))
                       :width "32px"
                       :src (if (or (= (.indexOf src "/") 0)
                                    (= (.indexOf src "http") 0))
                              (str src ".svg")
                              (str "data:image/svg+xml;base64," src))}
                      extra)]))

(def tile-mem (memoize tile))

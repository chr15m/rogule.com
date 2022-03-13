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

(defn replay-pop-animation-on-change [el]
  (when el
    (aset el "onload"
          (fn []
            (when (not= (.indexOf (aget el "className") "pop") -1)
              (let [cl (aget el "classList")]
                (.remove cl "pop")
                (aget el "offsetHeight")
                (.add cl "pop")))))))

(defn tile [sprite & [tile-name extra]]
  (let [src (get sprite "src")]
    [:img.tile (merge {:ref replay-pop-animation-on-change
                       :title (or tile-name (get sprite "name"))
                       :alt (when (get sprite "codes") (alt-from-codes (get sprite "codes")))
                       :width "32px"
                       :src (if (or (= (.indexOf src "/") 0)
                                    (= (.indexOf src "http") 0))
                              (str src ".svg")
                              (str "data:image/svg+xml;base64," src))}
                      extra)]))

(def tile-mem (memoize tile))

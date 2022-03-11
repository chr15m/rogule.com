(ns rogule.loader
  (:require
    [clojure.data.json :as json]
    [rogule.twemojis :refer [name-to-key codes-to-filename]])
  (:import java.util.Base64))

(defonce twemojis (json/read-str (slurp (str "./node_modules/emoji.json/emoji.json"))))

(defn b64 [to-encode]
  (.encodeToString (Base64/getEncoder) (.getBytes to-encode)))

(defn lookup-twemoji [which]
  (->> twemojis
    (filter #(= which (name-to-key (get % "name"))))
    last))

(defmacro get-twemojis []
  twemojis)

(defmacro load-sprite [which]
  (let [twemoji (lookup-twemoji which)]
    (assoc twemoji "src" (b64 (slurp (str "./node_modules/twemoji-emojis/vendor/svg/" (codes-to-filename (get twemoji "codes")) ".svg"))))))

(defmacro load-sprites [sprites]
  (into {}
        (for [[k n] sprites]
          {k (slurp (str "./node_modules/twemoji-emojis/vendor/svg/" (codes-to-filename n) ".svg"))})))

(ns rogule.loader
  (:require
    [clojure.string :as s]
    [clojure.data.json :as json])
  (:import java.util.Base64))

(defonce twemojis (json/read-str (slurp (str "./node_modules/emoji.json/emoji.json"))))

(defn b64 [to-encode]
  (.encodeToString (Base64/getEncoder) (.getBytes to-encode)))

(defn name-to-key [n]
  (-> n
      (s/lower-case)  
      (s/replace " " "-")
      (s/replace #"[^\-\w]+" "")
      keyword))

(defn convert-codes [c]
  (-> c
      (s/lower-case)
      (s/replace " " "-")))

(defn lookup-twemoji [which]
  (->> twemojis
    (filter #(= which (name-to-key (get % "name"))))
    last))

(defmacro get-twemojis []
  twemojis)

(defmacro load-sprite [which]
  (let [twemoji (lookup-twemoji which)]
    (assoc twemoji "src" (b64 (slurp (str "./node_modules/twemoji-emojis/vendor/svg/" (convert-codes (get twemoji "codes")) ".svg"))))))

(defmacro load-sprites [sprites]
  (into {}
        (for [[k n] sprites]
          {k (slurp (str "./node_modules/twemoji-emojis/vendor/svg/" (convert-codes n) ".svg"))})))

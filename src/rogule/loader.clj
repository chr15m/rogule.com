(ns rogule.loader
  (:require
    [clojure.string :refer [blank?]]
    [clojure.java.io :refer [copy input-stream]]
    [clojure.data.json :as json]
    [rogule.twemojis :refer [name-to-key codes-to-filename]])
  (:import java.util.Base64))

(defonce twemojis (json/read-str (slurp (str "./node_modules/emoji.json/emoji.json"))))

(defn b64 [to-encode]
  (.encodeToString (Base64/getEncoder) to-encode))

(defn lookup-twemoji [which]
  (->> twemojis
    (filter #(= which (name-to-key (get % "name"))))
    last))

(defmacro get-twemojis []
  twemojis)

; https://stackoverflow.com/a/26372677
(defn slurp-bytes
  "Slurp the bytes from a slurpable thing"
  [x]
  (with-open [out (java.io.ByteArrayOutputStream.)]
    (copy (input-stream x) out)
    (.toByteArray out)))

(defmacro load-sprite [which]
  (let [twemoji (lookup-twemoji which)
        sprite-path (first (remove blank? [(System/getenv "SPRITE_PATH") "./node_modules/twemoji-emojis/vendor/svg/"]))
        sprite-extension (first (remove blank? [(System/getenv "SPRITE_EXT") "svg"]))
        file-name (str sprite-path (codes-to-filename (get twemoji "codes")) "." sprite-extension)
        file (slurp-bytes file-name)
        content-type (get {"svg" "image/svg+xml"
                           "png" "image/png"}
                          sprite-extension)]
    (assoc twemoji
           "src" (b64 file)
           "content-type" content-type)))

(defmacro load-sprites [sprites]
  (into {}
        (for [[k n] sprites]
          {k (slurp (str "./node_modules/twemoji-emojis/vendor/svg/" (codes-to-filename n) ".svg"))})))

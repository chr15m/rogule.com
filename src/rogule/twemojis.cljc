(ns rogule.twemojis
  (:require
    [clojure.string :as s]))

(defn name-to-key [n]
  (-> n
      (s/lower-case)  
      (s/replace " " "-")
      (s/replace #"[^\-\w]+" "")
      keyword))

(defn codes-to-filename [c]
  (-> c
      (s/lower-case)
      (s/replace " " "-")))

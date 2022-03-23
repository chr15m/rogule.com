(ns rn
  (:require
    ["fs" :as fs]
    [rogule.twemojis :refer [codes-to-filename name-to-key]]
    ))

(try
  (fs/mkdirSync "MiniDawn/mapped")
  (catch :default _e (print "Skipped mkdir.")))

(def emojis
  (into {}
        (-> (fs/readFileSync "node_modules/emoji.json/emoji.json")
            .toString
            js/JSON.parse
            (.map (fn [i] [(name-to-key (aget i "name")) (codes-to-filename (aget i "codes"))])))))

(def sprite-list
  (-> (fs/readFileSync "MiniDawn/graphicsList.txt") .toString))

(doseq [i (.split sprite-list "\r\n")]
  (let [[lookup filename] (.split i ", ")]
    (fs/copyFile (str "MiniDawn/Graphics/" (.trim filename) ".png")
                 (str "MiniDawn/mapped/" (get emojis (keyword (.trim lookup))) ".png")
                 (fn [err] (when err (print err))))
    (print lookup "->" filename)))

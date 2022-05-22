(ns rogule.util
  (:require
    [clojure.test :refer-macros [is]]))  

(def day-ms (* 1000 60 60 24))

(defn zero-pad [n]
  (.slice (str "0" n) -2))

(defn time-until [date-string & [now]]
  (let [now (if now (js/Date. now) (js/Date.))
        since-epoch (-> date-string (js/Date.) .getTime)
        s (js/Math.floor (/ (- since-epoch now) 1000))
        minutes (zero-pad (mod (js/Math.floor (/ s 60)) 60))
        hours (zero-pad (js/Math.floor (/ s 3600)))
        seconds (zero-pad (mod s 60))]
    [hours minutes seconds]))

(defn date-token [& [d]]
  (let [today (if d (js/Date. d) (js/Date.))]
    (str (.getFullYear today) "-"
         (inc (.getMonth today)) "-"
         (.getDate today))))

(defn iso [d]
  (-> d
      (js/Date.)
      (.toISOString)))

(defn tomorrow
  {:test
   (fn []
     ; western australia test
     (is (= (iso (tomorrow "2020-04-13T13:00:00.000+08:00" -480))
            "2020-04-13T16:00:00.000Z"))
     (is (= (iso (tomorrow "2020-04-13T21:23:00.000+08:00" -480))
            "2020-04-13T16:00:00.000Z"))
     (is (= (iso (tomorrow "2020-04-13T06:15:00.000+08:00" -480))
            "2020-04-13T16:00:00.000Z"))
     ; turkey test
     (is (= (iso (tomorrow "2020-04-13T01:05:00.000+03:00" -180))
            "2020-04-13T21:00:00.000Z"))
     (is (= (iso (tomorrow "2020-04-13T23:00:00.000+03:00" -180))
            "2020-04-13T21:00:00.000Z"))
     ; san francisco test
     (is (= (iso (tomorrow "2020-04-13T01:05:00.000-07:00" +420))
            "2020-04-14T07:00:00.000Z"))
     (is (= (iso (tomorrow "2020-04-13T23:00:00.000-07:00" +420))
            "2020-04-14T07:00:00.000Z"))
     (is (= (iso (tomorrow "2020-04-13T14:50:00.000-07:00" +420))
            "2020-04-14T07:00:00.000Z")))}
  [& [now tz-offset]]
  (let [now (if now (js/Date. now) (js/Date.))
        tz-offset (* (or tz-offset (.getTimezoneOffset now)) 60 1000 -1)]
    (-> now
        (.getTime)
        (+ tz-offset)
        (/ day-ms)
        int
        inc
        (* day-ms)
        (- tz-offset))))


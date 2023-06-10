(ns rogule.server 
  (:require
    ["fs" :as fs]
    [applied-science.js-interop :as j]
    [promesa.core :as p]
    ;[clojure.test :refer-macros [is]]
    [sitefox.web :as web]
    [sitefox.util :refer [env env-required]]
    [sitefox.tracebacks :refer [install-traceback-handler]]
    [sitefox.db :refer [kv ls client]]
    [sitefox.auth :refer [make-hmac-token]]
    [sitefox.html :refer [render-into parse $]]
    [sitefox.ui :refer [log]]
    [rogule.util :refer [date-token zero-pad]]
    ["express-slow-down" :as slow]
    ["express-basic-auth" :as basic-auth]))

(log "server.cljs")

(let [admin-email (env "ADMIN_EMAIL")]
  (when admin-email
    (install-traceback-handler admin-email)))

(def admin-password (env-required "ADMIN_PASSWORD"))

(def rate-limiter (slow #js {:windowMs (* 1000 60 5)
                             :delayAfter 60
                             :delayMs 200}))

(defonce server (atom nil))

(def template (fs/readFileSync "public/index.html"))

(defn to-minutes [ms]
  (let [minutes (-> ms (/ 60000) int)
        seconds (-> ms (/ 1000) int (mod 60))]
    (str minutes ":" (zero-pad seconds))))

(defn median [coll]
  (when (seq coll)
    (let [size (count coll)
          sorted (sort coll)]
      (if (odd? size)
        (nth sorted (int (/ size 2)))
        (/ (+ (nth sorted (int (/ size 2)))
              (nth sorted (dec (int (/ size 2)))))
           2)))))

(defn compute-win-percent [plays]
  (let [outcomes (->> plays
                      (map #(last %))
                      (map #(j/get % :outcome)))]
    (->
      (count (filter #(= % "ascended") outcomes))
      (/ (count outcomes))
      (* 100)
      int)))

(defn get-duration [play]
  (- (j/get (last play) :timestamp)
     (j/get (first play) :timestamp)))

(defn compute-median-play-time [plays]
  (let [durations (map get-duration plays)]
    (median durations)))

; ***** views ***** ;

(defn component-playthrough
  [playthrough]
  (let [duration (get-duration playthrough)
        start (first playthrough)
        end (last playthrough)
        outcome-icon (get {"ascended" "shinto-shrine"
                           "died" "skull-and-crossbones"}
                          (j/get end :outcome))
        items (->> playthrough
                   (filter #(= (j/get % :type) "item"))
                   (map #(j/get-in % [:item :name])))]
    [:li (j/get start :client-id) " " (to-minutes duration) " "
     [:i {:class (str "twa twa-" outcome-icon)}] " "
     (for [i (range (count items))]
       [:i {:key i :class (str "twa twa-" (nth items i))}])]
    #_ (for [play playthrough]
         [:p [:pre (js/JSON.stringify play)]])))

(defn component-admin
  [_req past-seven-dates data]
  [:div
   [:link {:rel "stylesheet" :href "https://cdn.jsdelivr.net/gh/SebastianAigner/twemoji-amazing@1.0.0/twemoji-amazing.css"}]
   [:a {:href "/analytics/"} "Analytics"]
   [:h1 "Rogule Admin"]
   (for [d (range (count past-seven-dates))]
     (let [date (nth past-seven-dates d)
           link-date (date-token date)
           plays (nth data d)]
       [:div {:key d}
        [:h3
         [:a {:href (str "/game.html?" link-date)
              :target "_BLANK"}
          (date-token date true)]
         " (" (count plays)
         ") "
         (compute-win-percent plays) "% wins ~"
         (to-minutes (compute-median-play-time plays))]
        #_ [:ul
            (for [p (range (count plays))]
              (let [play (nth plays p)]
                (with-meta [component-playthrough play] {:key p})))]]))])

(defn admin-page
  ; TODO: compute the win rate across 30 days of games
  [req res]
  (p/let [now (-> (js/Date.) .getTime)
          day (* 1000 60 60 24)
          past-seven-dates (map #(js/Date. (- now (* day %))) (range 7))
          data (p/all (map #(ls "game-records" (str (date-token % true) ":")) past-seven-dates))
          html (render-into template "main" [component-admin req past-seven-dates data])
          parsed (parse html)
          body ($ parsed "body")]
    (j/call-in body [:classList :add] "admin")
    (.send res (.toString parsed))))

(defn store-game-record
  [req res]
  (p/let [game-records (kv "game-records")
          game-data (j/get req :body)
          date (-> (js/Date.) .toISOString (.split "T") first)
          id (-> (random-uuid) .toString (.split "-") first)
          ip (or (j/get-in req [:headers :x-forwarded-for])
                 (j/get-in req [:connection :remoteAddress]))
          ua (j/get-in req [:headers :user-agent])
          k (str date ":" id)
          size (count (js/JSON.stringify game-data))
          size-limit 100000
          client-id (make-hmac-token (str "rogule-client-id:" ip ":" ua) 8)
          game-data (j/assoc-in! game-data [0 :client-id] client-id)]
    ;(js/console.log "store-game-record" k game-data size)
    ;(js/console.log "store-game-record" ip ua client-id)
    (if (> size size-limit)
      (-> res
          (.status 403)
          (.send "Forbidden"))
      (do
        (.set game-records k game-data)
        (.json res game-data)))))

(defn setup-routes [app]
  (let [admin-auth (basic-auth (j/lit {:users {:admin admin-password}
                                       :challenge true}))]
    (web/reset-routes app)
    (j/call app :use rate-limiter)
    (j/call app :post "/share" store-game-record)
    (j/call app :get "/admin" admin-auth admin-page)
    (web/static-folder app "/twemoji" "node_modules/twemoji-emojis/vendor")
    (web/static-folder app "/" "public")))

(defn main! []
  (p/let [[app host port] (web/start)
          c (client)
          wal-mode (.query c "PRAGMA journal_mode=WAL;")]
    (js/console.log "WAL MODE" wal-mode)
    (reset! server app)
    (setup-routes app)
    (println "Serving on" (str "http://" host ":" port))))

(defn ^:dev/after-load reload []
  (js/console.log "Reloading.")
  (setup-routes @server))

(ns rogule.server 
  (:require
    ["fs" :as fs]
    [applied-science.js-interop :as j]
    [promesa.core :as p]
    ;[clojure.test :refer-macros [is]]
    [sitefox.web :as web]
    [sitefox.util :refer [env]]
    [sitefox.tracebacks :refer [install-traceback-emailer]]
    [sitefox.db :refer [kv]]
    [sitefox.auth :refer [make-hmac-token]]
    ["express-slow-down" :as slow]))

(let [admin-email (env "ADMIN_EMAIL")]
  (when admin-email
    (install-traceback-emailer admin-email)))

(def rate-limiter (slow #js {:windowMs (* 1000 60 5)
                             :delayAfter 60
                             :delayMs 200}))

(defonce server (atom nil))

(def template (fs/readFileSync "public/index.html"))

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
  (web/reset-routes app)
  (j/call app :post "/share" store-game-record)
  (j/call app :use rate-limiter)
  (web/static-folder app "/twemoji" "node_modules/twemoji-emojis/vendor")
  (web/static-folder app "/" "public"))

(defn main! []
  (p/let [[app host port] (web/start)]
    (reset! server app)
    (setup-routes app)
    (println "Serving on" (str "http://" host ":" port))))

(defn ^:dev/after-load reload []
  (js/console.log "Reloading.")
  (setup-routes @server))

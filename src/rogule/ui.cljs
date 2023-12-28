(ns rogule.ui
  (:require
    [clojure.string :refer [join]]
    [reagent.core :as r]
    [reagent.dom :as rdom]
    [shadow.resource :as rc]
    [alandipert.storage-atom :refer [local-storage]]
    [sitefox.ui :refer [log]]
    [rogule.emoji :refer [tile-mem emoj]]
    [rogule.map :refer [distance-sq entities-by-pos-mem count-entities]]
    [rogule.generator :refer [make-level]]
    [rogule.engine :refer [install-arrow-key-handler trigger-key remove-entity]]
    [rogule.util :refer [time-until tomorrow date-token]]
    ["seedrandom" :as seedrandom])
  (:require-macros
    [rogule.loader :refer [load-sprite]]))

(log "main loaded")

(def initial-state {})

(defonce state (local-storage (r/atom initial-state) :game-state))

(log (:game-log @state))

(def size 32)
(def visible-dist 9)
(def visible-dist-sq (js/Math.pow visible-dist 2))
(def clear-dist 7)
(def clear-dist-sq (js/Math.pow clear-dist 2))

; ***** rendering ***** ;

(defn component-cell [floor-tiles entities x y opacity]
  [:span.grid {:key x
               :style {:opacity opacity}}
   (when (> opacity 0)
     (cond
       (= (get floor-tiles [x y]) :door)
       (tile-mem (load-sprite :white-large-square) "door")
       (= (get floor-tiles [x y]) :wall)
       (tile-mem (load-sprite :black-large-square) "wall")
       ;(= (get floor-tiles [x y]) :corridor)
       ;(tile-mem (load-sprite :brown-square) "corridor")
       :else nil))
   (for [layer [:floor :between :occupy :above]
         entity (get entities [x y layer])]
     (let [[animation disposal frame] (:animation entity)
           animation-callback (when (= disposal :destroy) (fn [] (swap! state remove-entity (:id entity))))]
       (when entity
         [:span {:key [(:id entity) frame]}
          (tile-mem (:sprite entity) (:name entity) {:opacity opacity} animation animation-callback)
          (when (and (:stats entity) (not (:dead entity)) (not= (:id entity) :player))
            [:span.stat (-> entity :stats :xp)])])))])

(defn component-inventory [inventory]
  (let [inventory (sort-by (juxt :value :name) inventory)]
    [:div#inventory
     [:ul
      (for [i (range (count inventory))
            :let [e (nth inventory i)]]
        [:li.pop {:key i} (tile-mem (:sprite e) (:name e))])]]))

(defn component-health-bar [entity]
  [:div
   (tile-mem (:sprite entity))
   [:span.xp [:span (-> entity :stats :xp)]]
   (let [stats (:stats entity)
         hp (-> stats :hp first)]
     (for [i (range (-> stats :hp second))]
       (if (>= i hp)
         (tile-mem (load-sprite :white-large-square) nil {:key i :class "pop"})
         (tile-mem (load-sprite :green-square) nil {:key i :class "pop"}))))])

(defn component-health-bars [player combatants]
  [:div#health-bars
   [component-health-bar player]
   (for [[id entity] combatants]
     [:span {:key id}
      (let [stats (:stats entity)] [component-health-bar entity stats])])])

(def component-health-bars-mem (memoize component-health-bars))

(defn component-help [show-help]
  (if show-help
    [:div.modal
     [:button#help.key {:on-click #(trigger-key 27)} "esc"]
     [:h2 "Rogule"]
     [:p "Use the arrow keys to move. Press the " [:button.key "."]  " key to rest."]
     [:p "Move onto items and " (tile-mem (load-sprite :ghost)) " monsters to interact."]
     [:p "The number above each monster's head is the maximum damage they can deal to you."]
     [:p "Health bars show up at the top of the screen during combat."]
     [:p "Collect all the " (tile-mem (load-sprite :mushroom)) " items."]
     [:p "Shields " (tile-mem (load-sprite :shield)) " give you protection."]
     [:p "Weapons " (tile-mem (load-sprite :dagger)) " add to your hits."]
     [:p "Get to the shrine " (tile-mem (load-sprite :shinto-shrine) "shrine") " to ascend and win the game."]]
    [:button#help.key {:on-click #(trigger-key 191)} "?"]))

(defn component-messages [message]
  [:div.message message])

(defn component-arrow [key-code sprite]
  [:button.key {:on-mouse-down #(trigger-key key-code)
                :on-mouse-up #(trigger-key key-code "keyup")}
   [:span {:ref (fn [el] (when el (aset el "innerHTML" sprite)))}]])

(defn component-arrow-buttons []
  [:div#arrow-buttons
   [:div
    [component-arrow 38 (rc/inline "arrow-up.svg")]]
   [:div
    [component-arrow 37 (rc/inline "arrow-left.svg")]
    [component-arrow 190 (rc/inline "circle.svg")]
    [component-arrow 39 (rc/inline "arrow-right.svg")]]
   [:div
    [component-arrow 40 (rc/inline "arrow-down.svg")]]])

(defn component-event-modal [{:keys [id sprites]}]
  [:div#event-modal {:key id}
   (for [s sprites]
     (tile-mem s "door"))])

(defn component-game [state]
  (let [game-map (:map @state)
        floor-tiles (:floor-tiles game-map)
        entities (entities-by-pos-mem (-> @state :entities))
        player (-> @state :entities :player)
        player-pos (:pos player)
        player-inventory (:inventory player)
        combatants (:combatants @state)
        event-modal (:event-modal @state)]
    (when-let [m (-> @state :message :text)]
      (print m))
    [:span#game
     [:div {:ref #(install-arrow-key-handler state %)}
      (for [y (range (- (second player-pos) visible-dist)
                     (+ (second player-pos) visible-dist))]
        [:div.row {:key y}
         (for [x (range (- (first player-pos) visible-dist)
                        (+ (first player-pos) visible-dist))]
           (let [dist (distance-sq player-pos [x y])
                 opacity (cond
                           (> dist visible-dist-sq) 0
                           (> dist clear-dist-sq) 0.75
                           :else 1)]
             (component-cell floor-tiles entities x y opacity)))])]
     (when event-modal
       [component-event-modal event-modal])
     (component-health-bars-mem player combatants)
     [component-arrow-buttons]
     [component-inventory player-inventory]
     [component-help (= (:modal @state) :help)]
     ;[component-messages (-> @state :message :text)]
     ]))

(defn copy-text [txt]
  (->
    (js/navigator.clipboard.writeText txt)
    (.then (fn [] (js/alert "copied results to clipboard")))))

(defn emoj-bar [emoj-fn inventory counts k blank-sprite sprite break]
  (let [c (count-entities inventory :name (name k))]
    (concat
      (for [x (range (k counts))]
        (if (>= x c)
          (emoj-fn blank-sprite)
          (emoj-fn sprite)))
      (when (> c 0)
        [break]))))

(defn make-share-string [emoj-fn break *state]
  (let [{:keys [outcome entities counts seed moves statistics]} *state
        {:keys [player]} entities
        {:keys [inventory kills stats killed-by]} player
        death-sprite (load-sprite :skull-and-crossbones)
        blank-sprite (load-sprite :white-large-square)]
    (concat
      ["#Rogule " seed break
       (emoj-fn (load-sprite :elf)) " "
       (:xp stats) "xp" " "]

      [(if (= outcome :ascended) (emoj-fn (load-sprite :shinto-shrine)) (emoj-fn death-sprite))
       (when (and (not= outcome :ascended) killed-by) (emoj-fn (:sprite killed-by)))
       " "
       moves " " (emoj-fn (load-sprite :footprints)) " "
       break]

      ["streak: " (:streak statistics)]
      [break]

      (let [hp (/ (-> stats :hp first) 2)]
        (for [i (range (/ (-> stats :hp second) 2))]
          (if (>= i hp)
            (emoj-fn blank-sprite)
            (emoj-fn (load-sprite :green-square)))))
      [break]

      [(emoj-fn (load-sprite :crossed-swords)) " "]
      (for [entity (reverse kills)]
        (emoj-fn (:sprite entity)))
      [break]
      (emoj-bar emoj-fn inventory counts :chestnut blank-sprite (load-sprite :chestnut) break)
      (emoj-bar emoj-fn inventory counts :mushroom blank-sprite (load-sprite :mushroom) break)
      (emoj-bar emoj-fn inventory counts :gem-stone blank-sprite (load-sprite :gem-stone) break)
      (when (= break "\n")
        [break "https://rogule.com"]))))

(defn component-countdown []
  (let [n (r/atom nil)]
    (js/setInterval #(swap! n inc) 100)
    (fn []
      (let [until (time-until (tomorrow (:seed @state)))
            past-tomorrow (->> until
                               (map js/parseInt)
                               (some neg?))]
        (if past-tomorrow
          [:p
           [:button {:on-click #(-> js/window .-location .reload)}
            "Play next rogule"]]
          [:p {:nothing @n}
           "Next rogule" [:br]
           (join ":" until)])))))

(defn component-tombstone [state]
  (let [text-share-string (apply str (make-share-string emoj "\n" @state))]
    [:div#tombstone.pop
     ;[:pre (-> (:statistics @state) clj->js (js/JSON.stringify nil 2))]
     [:div (concat [] (map-indexed (fn [idx i] [:span {:key idx} i])
                                   (make-share-string tile-mem [:br] @state)))]
     [:button {:autoFocus true :on-click #(copy-text text-share-string)} "share"]
     (let [stats (:statistics @state)
           plays (+ (:ascended stats) (:died stats))]
       [:div#stats
        [:p "Plays: " plays]
        [:p "Wins: " (-> (:ascended stats) (/ plays) (* 100) int) "%"]
        [:p (str "Streak: " (:streak stats))]
        [:p (str "Longest: " (:max-streak stats))]])
     [component-countdown]
     [:p [:a
          {:href (str "https://twitter.com/search?q=rogule%20" (-> (js/Date.) .getFullYear) "&src=spelling_expansion_revert_click&f=live")
           :target "_BLANK"}
          "See other player scores"]]
     [:p.donations
      [:a {:href "https://patreon.com/chr15m" :target "_blank" :class "donation-patreon"}
       [:svg {:viewBox "0 0 569 546"
              :xmlns "http://www.w3.org/2000/svg"}
        [:g
         [:circle {:cx 362.589996
                   :cy 204.589996
                   :r 204.589996}]
         [:rect {:height 545.799988
                 :width 100
                 :x 0
                 :y 0}]]]
       [:span.patreon-extended-message "Support on "] "Patreon"]
      [:a {:href "https://ko-fi.com/chr15m" :target "_blank"}
       [:span {:ref (fn [el] (when el (aset el "innerHTML" (rc/inline "ko-fi.svg"))))}]]
      (emoj (load-sprite :folded-hands))]
     [:p [:a {:href "mailto:chris@rogule.com"} "Send feedback"]]]))

(defn component-main [state]
  (if (:outcome @state)
    [component-tombstone state]
    [component-game state]))

(defn reset-game! [old-seed seed]
  (seedrandom (str "Rogule-" seed) #js {:global true})
  (when (not= old-seed seed)
    (let [statistics (get @state :statistics)
          new-game-state (-> (make-level initial-state seed size)
                             (assoc :game-log [{:type :start
                                                :seed seed
                                                :timestamp (-> (js/Date.) .getTime)}]))]
      (reset! state (assoc new-game-state :statistics statistics)))))

(defn general-key-handler [ev]
  (let [code (aget ev "keyCode")]
    (print "keyCode" code)
    (case code
      ;81 (reset! state (make-level initial-state size))
      191 (swap! state update-in [:modal] #(when (not %) :help))
      27 (swap! state dissoc :modal)
      8 (when (not= (.indexOf (aget js/document "location" "href") "localhost") -1)
          (reset-game! nil (js/Math.random)))
      nil)))

(defn prevent-zoom []
  (.addEventListener js/document "gesturestart"
                     (fn [ev]
                       (.preventDefault ev))))

(defn start {:dev/after-load true} []
  (rdom/render [component-main state]
               (js/document.getElementById "app")))

(defn main! []
  (let [url (js/URL. (aget js/document "location" "href"))
        q (aget url "search")
        sp (js/URLSearchParams. (.replace q "?" ""))
        seed (or (first (filter #(= (.get sp %) "") (.keys sp))) (date-token))
        existing-seed (:seed @state)]
    (log "seed" seed)
    (log "existing-seed" existing-seed)
    (reset-game! existing-seed seed))
  (.addEventListener js/window "keydown" #(general-key-handler %))
  (prevent-zoom)
  (start))

(ns rogule.ui
  (:require
    [clojure.set :refer [intersection]]
    [clojure.string :refer [join]]
    [reagent.core :as r]
    [reagent.dom :as rdom]
    [alandipert.storage-atom :refer [local-storage]]
    [sitefox.ui :refer [log]]
    [rogule.emoji :refer [tile-mem emoj]]
    [rogule.map :refer [make-digger-map distance-sq room-center
                        tiles-for-room find-path entities-by-pos-mem]]
    [rogule.engine :refer [install-arrow-key-handler trigger-key remove-entity
                           get-random-entity-by-value make-id can-pass-tile]]
    ["rot-js" :as ROT]
    ["seedrandom" :as seedrandom])
  (:require-macros
    [rogule.loader :refer [load-sprite]]))

(def initial-state {})

(defonce state (local-storage (r/atom initial-state) :game-state))

(def size 32)
(def visible-dist 9)
(def visible-dist-sq (js/Math.pow visible-dist 2))
(def clear-dist 7)
(def clear-dist-sq (js/Math.pow clear-dist 2))

(def forage-items
  [{:name "chestnut"
    :sprite (load-sprite :chestnut)
    :fns {:encounter :add-item-to-inventory}
    :value 1}
   {:name "mushroom"
    :sprite (load-sprite :mushroom)
    :fns {:encounter :add-item-to-inventory}
    :value 2}
   {:name "gem-stone"
    :sprite (load-sprite :gem-stone)
    :fns {:encounter :add-item-to-inventory}
    :value 8}

   {:name "health"
    :sprite (load-sprite :green-heart)
    :fns {:encounter :increase-hp}
    :value 2}])

(def item-covers
  [{:sprite (load-sprite :hole)
    :fns {:encounter :uncover-item}
    :name "hole"}
   {:sprite (load-sprite :rock)
    :fns {:encounter :uncover-item}
    :name "rock"}
   {:sprite (load-sprite :wood)
    :fns {:encounter :uncover-item}
    :name "wood block"}])

(def indoor-scenery
  [{:sprite (load-sprite :fountain)
    :name "fountain"}
   {:sprite (load-sprite :potted-plant)
    :name "pot plant"}
   {:sprite (load-sprite :moai)
    :name "statue"}])

(def shrine-template {:sprite (load-sprite :shinto-shrine)
                      :name "shrine"})

(def weapons
  [{:sprite (load-sprite :dagger)
    :dmg 1}
   {:sprite (load-sprite :pick)
    :dmg 2}
   {:sprite (load-sprite :axe)
    :dmg 4}])

(def shield {:sprite (load-sprite :shield)})

(def monster-table
  [{:sprite (load-sprite :rat)
    :activation 3
    :stats {:xp 1 :hp [2 2]}
    :name "the rat"}
   {:sprite (load-sprite :bat)
    :activation 10
    :stats {:xp 1 :hp [3 3]}
    :name "the bat"}

   {:sprite (load-sprite :ghost)
    :activation 10
    :stats {:xp 2 :hp [3 3]}
    :name "the ghost"}
   {:sprite (load-sprite :boar)
    :activation 15
    :stats {:xp 2 :hp [4 4]}
    :name "the boar"}
   {:sprite (load-sprite :wolf)
    :activation 20
    :stats {:xp 2 :hp [5 5]}
    :name "the wolf"}
   {:sprite (load-sprite :ogre)
    :activation 10
    :stats {:xp 2 :hp [7 7]}
    :name "the ogre"}

   {:sprite (load-sprite :vampire)
    :activation 15
    :stats {:xp 3 :hp [8 8]}
    :name "the vampire"}
   {:sprite (load-sprite :zombie)
    :activation 5
    :stats {:xp 3 :hp [9 9]}
    :name "the zombie"}
   {:sprite (load-sprite :genie)
    :activation 20
    :stats {:xp 3 :hp [10 10]}
    :name "the genie"}

   {:sprite (load-sprite :dragon)
    :activation 10
    :stats {:xp 4 :hp [15 15]}
    :name "the dragon"}
   {:sprite (load-sprite :t-rex)
    :activation 15
    :stats {:xp 4 :hp [12 12]}
    :name "the t-rex"}])

(def smoke-juice-template
  {:sprite (load-sprite :cloud)
   :name "smoke"
   :animation :grow-and-fade})

; ***** utility functions ***** ;

(defn count-entities [entities k v]
  (count (filter #(or (= (k %) v)
                      (= (-> % :drop k) v))
                 entities)))

(defn zero-pad [n]
  (.slice (str "0" n) -2))

(defn time-until [date-string]
  (let [since-epoch (-> date-string (js/Date.))
        s (js/Math.floor (/ (- since-epoch (js/Date.) (* (.getTimezoneOffset since-epoch) 60 1000 -1)) 1000))
        minutes (zero-pad (mod (js/Math.floor (/ s 60)) 60))
        hours (zero-pad (js/Math.floor (/ s 3600)))
        seconds (zero-pad (mod s 60))]
    [hours minutes seconds]))

(defn date-token [& [d]]
  (let [today (if d (js/Date. d) (js/Date.))]
    (str (.getFullYear today) "-"
         (inc (.getMonth today)) "-"
         (.getDate today))))

(defn tomorrow []
  (-> (js/Date.)
      (.getTime)
      (+ (* 1000 60 60 24))
      date-token))

; ***** create different types of things ***** ;

(defn make-player [entities free-tiles]
  (let [pos (rand-nth (keys free-tiles))
        player {:sprite (load-sprite :elf)
                :name "you"
                :layer :occupy
                :pos pos
                :stats {:hp [10 10]
                        :xp 2}
                :inventory []
                :fns {:encounter :combat
                      :passable :player-passable-wrapper}}]
    [(assoc entities :player player)
     (dissoc free-tiles pos)]))

(defn make-shrine [entities free-tiles paths-to-rooms]
  (let [pos (:center-pos (last paths-to-rooms))
        shrine (merge shrine-template
                      {:pos pos
                       :layer :occupy
                       :fns {:encounter :finish-game}})]
    [(assoc entities :shrine shrine)
     (dissoc free-tiles pos)]))

(defn pos-to-difficulty [player pos paths-to-rooms player-path-find-fn]
  (let [furthest-room-path-length (count (:path (last paths-to-rooms)))
        path-to-item (find-path
                       (:pos player) pos
                       player-path-find-fn)
        path-to-item-length (count path-to-item)]
    (/ path-to-item-length furthest-room-path-length)))

(defn make-covered-item [entities free-tiles paths-to-rooms player-path-find-fn]
  (let [{:keys [room]} (rand-nth paths-to-rooms)
        room-tiles (tiles-for-room room)
        free-room-tiles (intersection (set (keys room-tiles)) (set (keys free-tiles)))
        pos (rand-nth (vec free-room-tiles))
        difficulty (-> (pos-to-difficulty (:player entities) pos paths-to-rooms player-path-find-fn)
                       (* 0.9))
        item-template (get-random-entity-by-value forage-items)
        item (when
               (> (js/Math.random) difficulty)
               (merge
                 item-template
                 {:pos pos
                  :id (make-id)
                  :layer :floor}))
        cover (merge
                (rand-nth item-covers)
                {:pos pos
                 :layer :floor
                 :drop item
                 :juice (assoc smoke-juice-template 
                               :id (make-id)
                               :pos pos
                               :layer :between)})]
    [(assoc entities (make-id) cover)
     (dissoc free-tiles pos)]))

(defn make-monster [entities free-tiles paths-to-rooms player-path-find-fn]
  (let [pos (rand-nth (keys free-tiles))
        difficulty (-> (pos-to-difficulty (:player entities) pos paths-to-rooms player-path-find-fn)
                       (* 0.75)
                       (js/Math.min 1))
        min-index 0
        max-index (dec (count monster-table))
        monster-difficulty-index (js/Math.floor (* difficulty max-index))
        monster-sub-table {monster-difficulty-index 6
                           (js/Math.min (+ monster-difficulty-index 1) max-index) 2
                           (js/Math.max (- monster-difficulty-index 1) min-index) 2
                           (js/Math.min (+ monster-difficulty-index 2) max-index) 1
                           (js/Math.max (- monster-difficulty-index 2) min-index) 1}
        monster-index (js/parseInt (ROT/RNG.getWeightedValue (clj->js monster-sub-table)))
        monster (merge
                  (nth monster-table monster-index)
                  {:pos pos
                   :layer :occupy
                   :fns {:encounter :combat
                         :update :chase-player
                         :passable :make-monster-passable-fn}})]
    [(assoc entities (make-id) monster)
     (dissoc free-tiles pos)]))

(defn make-entities [game-map entity-count monster-count]
  (let [tiles (:tiles game-map)
        free-tiles (merge
                     (:room tiles)
                     (:corridor tiles))
        [entities free-tiles] (make-player {} free-tiles)
        player (:player entities)
        floor-tiles (:floor-tiles game-map)
        player-path-find-fn (fn [x y] (can-pass-tile floor-tiles [x y] [:room :door :corridor]))
        paths-to-rooms (->> (:rooms game-map)
                            (map (fn [room] [room (room-center room)]))
                            (map (fn [[room room-center-pos]]
                                   (let [path (find-path
                                                (:pos player) room-center-pos
                                                player-path-find-fn)]
                                     {:center-pos room-center-pos
                                      :room room
                                      :path path})))
                            (sort-by (juxt :path count)))
        [entities free-tiles] (make-shrine entities free-tiles paths-to-rooms)
        [entities free-tiles] (reduce
                                (fn [[entities free-tiles] _i]
                                  (make-covered-item entities free-tiles paths-to-rooms player-path-find-fn))
                                [entities free-tiles]
                                (range entity-count))
        [entities] (reduce
                     (fn [[entities free-tiles] _i]
                       (make-monster entities free-tiles paths-to-rooms player-path-find-fn))
                     [entities free-tiles]
                     (range monster-count))]
    entities))

(defn make-level [*state seed size]
  (let [m (make-digger-map (js/Math.random) size size)
        entities (make-entities m 20 5)
        counts (into {} (for [t [:mushroom :chestnut :gem-stone]]
                          {t (count-entities (vals entities) :name (name t))}))]
    (log "ents" (vals entities))
    (log "map" m)
    (log "entities" entities)
    (log "counts" counts)
    (assoc *state
           :seed seed
           :map m
           :entities entities
           :counts counts)))

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
       (= (get floor-tiles [x y]) :corridor)
       (tile-mem (load-sprite :brown-square) "corridor")
       :else nil))
   (for [layer [:floor :between :occupy :above]
         entity (get entities [x y layer])]
     (let [animation (:animation entity)
           animation-callback (when animation (fn [] (log "END" (:name entity)) (swap! state remove-entity (:id entity))))]
       (when entity
         [:span {:key (:id entity)}
          (tile-mem (:sprite entity) (:name entity) {:opacity opacity} animation animation-callback)
          (when (and (:stats entity) (not (:dead entity)) (not= (:id entity) :player))
            [:span.stat (-> entity :stats :xp)])])))])

(defn component-inventory [inventory]
  [:div#inventory
   [:ul
    (for [i (range (count inventory))
          :let [e (nth inventory i)]]
      [:li.pop {:key i} (tile-mem (:sprite e) (:name e))])]])

(defn component-health-bar [entity]
  [:div
   (tile-mem (:sprite entity))
   [:span.xp [:span (-> entity :stats :xp)]]
   (let [stats (:stats entity)
         hp (-> stats :hp first)]
     (for [i (range (-> stats :hp second))]
       (if (> i hp)
         (tile-mem (load-sprite :white-large-square) nil {:key i :class "pop"})
         (tile-mem (load-sprite :green-square) nil {:key i :class "pop"}))))])

(defn component-health-bars [player combatants]
  [:div#health-bars
   [component-health-bar player]
   (for [[_id entity] combatants]
     (let [stats (:stats entity)] [component-health-bar entity stats]))])

(def component-health-bars-mem (memoize component-health-bars))

(defn component-help [show-help]
  (if show-help
    [:div.modal
     [:h2 "Rogule"]
     [:p "Use the arrow keys to move."]
     [:p "Move over items and " (tile-mem (load-sprite :ghost)) " monsters to interact."]
     [:p "Collect all the " (tile-mem (load-sprite :mushroom)) " items."]
     [:p "Get to the shrine " (tile-mem (load-sprite :shinto-shrine) "shrine") " to ascend and win the game."]
     [:button#help.key {:on-click #(trigger-key 27)} "esc"]]
    [:button#help.key {:on-click #(trigger-key 191)} "?"]))

(defn component-messages [message]
  [:div.message message])

(defn component-game [state]
  (let [game-map (:map @state)
        floor-tiles (:floor-tiles game-map)
        entities (entities-by-pos-mem (-> @state :entities))
        player (-> @state :entities :player)
        player-pos (:pos player)
        player-inventory (:inventory player)
        combatants (:combatants @state)]
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
     (component-health-bars-mem player combatants)
     [component-inventory player-inventory]
     [component-help (= (:modal @state) :help)]
     ;[component-messages (-> @state :message :text)]
     ]))

(defn copy-text [txt]
  (->
    (js/navigator.clipboard.writeText txt)
    (.then (fn [] (js/alert "copied results to clipboard")))))

(defn emoj-bar [emoj-fn inventory counts k blank-sprite sprite]
  (for [x (range (k counts))]
        (if (> x (count-entities inventory :name (name k)))
          (emoj-fn blank-sprite)
          (emoj-fn sprite))))

(defn make-share-string [emoj-fn break *state]
  (let [{:keys [outcome entities moves counts seed]} *state
        {:keys [player]} entities
        {:keys [inventory kills stats]} player
        death-sprite (load-sprite :skull-and-crossbones)
        blank-sprite (load-sprite :white-large-square)]
    (concat
      ["Rogule " seed break
       (emoj-fn (load-sprite :elf)) " "
       (:xp stats) " "]

      [(if (= outcome :ascended) (emoj-fn (load-sprite :shinto-shrine)) (emoj-fn death-sprite)) " "
       moves " " (emoj-fn (load-sprite :down-arrow)) " " break]

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
      (emoj-bar emoj-fn inventory counts :chestnut blank-sprite (load-sprite :chestnut)) [break]
      (emoj-bar emoj-fn inventory counts :mushroom blank-sprite (load-sprite :mushroom)) [break]
      (emoj-bar emoj-fn inventory counts :gem-stone blank-sprite (load-sprite :gem-stone)))))

(defn component-countdown []
  (let [n (r/atom nil)]
    (js/setInterval #(swap! n inc) 100)
    (fn []
      (let [until (time-until (tomorrow))]
        [:p {:nothing @n}
         "next rogule" [:br]
         (join ":" until)]))))

(defn component-tombstone [state]
  (let [text-share-string (apply str (make-share-string emoj "\n" @state))]
    [:div#tombstone.pop
     [:div (concat [] (make-share-string tile-mem [:br] @state))]
     [component-countdown]
     [:button {:autoFocus true :on-click #(copy-text text-share-string)} "share"]
     [:p [:a
          {:href "https://twitter.com/search?q=rogule%202022&src=spelling_expansion_revert_click&f=live"
           :target "_BLANK"}
          "see other player scores"]]]))

(defn component-main [state]
  (if (:outcome @state)
    [component-tombstone state]
    [component-game state]))

(defn key-handler [ev]
  (let [code (aget ev "keyCode")]
    (print "keyCode" code)
    (case code
      ;81 (reset! state (make-level initial-state size))
      191 (swap! state update-in [:modal] #(when (not %) :help))
      27 (swap! state dissoc :modal)
      nil)))

(defn start {:dev/after-load true} []
  (rdom/render [component-main state]
               (js/document.getElementById "app")))

(defn main! []
  (let [url (js/URL. (aget js/document "location" "href"))
        q (aget url "search")
        seed (if (seq q) (last (.split q "?")) (date-token))
        existing-seed (:seed @state)]
    (log "existing-seed" existing-seed)
    (seedrandom (str "Rogule-" seed) #js {:global true})
    (when (not= existing-seed seed)
      (reset! state (make-level initial-state seed size))))
  (.addEventListener js/window "keydown" #(key-handler %))
  (start))

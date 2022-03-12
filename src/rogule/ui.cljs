(ns rogule.ui
  (:require
    [clojure.set :refer [intersection]]
    [reagent.core :as r]
    [reagent.dom :as rdom]
    [sitefox.ui :refer [log]]
    [rogule.emoji :refer [tile tile-mem]]
    [rogule.map :refer [make-digger-map distance-sq room-center tiles-for-room find-path]]
    [rogule.engine :refer [install-arrow-key-handler move-to]]
    ["rot-js" :as ROT]
    ["seedrandom" :as seedrandom])
  (:require-macros
    [rogule.loader :refer [load-sprite]]))

(def initial-state
  {:message {:expires 5
             :text "Press ? for help."}})

(defonce state (r/atom initial-state))

(def size 32)
(def visible-dist 9)
(def visible-dist-sq (js/Math.pow visible-dist 2))
(def clear-dist 7)
(def clear-dist-sq (js/Math.pow clear-dist 2))

(def forage-items
  [{:name "herbs"
    :sprite (load-sprite :herb)
    :value 1}
   {:name "feather"
    :sprite (load-sprite :feather)
    :value 1}
   {:name "bone"
    :sprite (load-sprite :bone)
    :value 1}
   {:name "olive sprig"
    :sprite (load-sprite :olive)
    :value 1}

   {:name "egg"
    :sprite (load-sprite :egg)
    :value 2}
   {:name "grapes"
    :sprite (load-sprite :grapes)
    :value 2}
   {:name "shell"
    :sprite (load-sprite :spiral-shell)
    :value 2}

   {:name "mushroom"
    :sprite (load-sprite :mushroom)
    :value 4}
   {:name "chestnut"
    :sprite (load-sprite :chestnut)
    :value 4}

   {:name "gem"
    :sprite (load-sprite :gem-stone)
    :value 8}])

(def item-covers
  [{:sprite (load-sprite :hole)
    :name "hole"}
   {:sprite (load-sprite :rock)
    :name "rock"}
   {:sprite (load-sprite :wood)
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

(def monster-table
  [{:sprite (load-sprite :rat)
    :name "rat"}
   {:sprite (load-sprite :bat)
    :name "bat"}

   {:sprite (load-sprite :ghost)
    :name "ghost"}
   {:sprite (load-sprite :bat)
    :name "bat"}
   {:sprite (load-sprite :wolf)
    :name "wolf"}
   {:sprite (load-sprite :boar)
    :name "boar"}

   {:sprite (load-sprite :ogre)
    :name "ogre"}
   {:sprite (load-sprite :vampire)
    :name "vampire"}
   {:sprite (load-sprite :zombie)
    :name "zombie"}
   {:sprite (load-sprite :genie)
    :name "genie"}

   {:sprite (load-sprite :dragon)
    :name "dragon"}
   {:sprite (load-sprite :t-rex)
    :name "t-rex"}])

; ***** utility functions ***** ;

(defn entities-by-pos [entities]
  (reduce (fn [es [id e]] (assoc es (conj (:pos e) (:layer e)) (assoc e :id id))) {} entities))

(def entities-by-pos-mem (memoize entities-by-pos))

(defn date-token []
  (let [today (js/Date.)]
    (str (.getFullYear today) "-"
         (inc (.getMonth today)) "-"
         (.getDate today))))

(defn make-id []
  (-> (random-uuid) str (.slice 0 8)))

(defn get-random-entity-by-value [entity-template-table]
  (let [weighted-table (->> entity-template-table
                            (map (fn [i] {(:name i) (/ 1 (:value i))}))
                            (into {})
                            clj->js)
        item-name (ROT/RNG.getWeightedValue weighted-table)]
    (->> entity-template-table
         (filter #(= (:name %) item-name))
         first)))

(defn calculate-max-score [entities]
  (reduce (fn [score [_id e]]
            (let [value (some identity [(:value e) (-> e :drop :value) 0])]
              (+ score value)))
          0 entities))

; ***** state manipulation functions ***** ;

(defn remove-entity [*state id]
  (update-in *state [:entities] dissoc id))

(defn add-entity [*state entity]
  (if entity
    (assoc-in *state [:entities (:id entity)] (dissoc entity :id))
    *state))

(defn add-to-inventory [*state id item-id entity]
  (update-in *state [:entities id :inventory] conj (assoc entity :id item-id)))

(defn add-message [*state message]
  (assoc *state :message {:text message
                          :expires 3}))

(defn finish-game [*state _their-id _item-id]
  [true (assoc *state :outcome :ascended)])

; ***** item interaction functions ***** ;

(defn add-item-to-inventory [*state their-id item-id]
  (let [them (get-in *state [:entities their-id])
        item (get-in *state [:entities item-id])]
    (if (:inventory them)
      [false (-> *state
                 (add-to-inventory their-id item-id item)
                 (remove-entity item-id)
                 (add-message (str "you found the " (:name item))))]
      [false *state])))

(defn uncover-item [*state their-id item-id]
  (let [item (get-in *state [:entities item-id])]
    (if (not= their-id :player)
      [false *state]
      [true (-> *state
                (remove-entity item-id)
                (add-entity (:drop item)))])))

(defn check-for-endgame [*state]
  (let [player (-> *state :entities :player)]
    (if (:dead player)
      (assoc *state :outcome :died)
      *state)))

(defn combat [*state their-id my-id]
  (let [them (get-in *state [:entities their-id])
        me (get-in *state [:entities my-id])]
    (log "combat" (:name them) "hit" (:name me))
    [true
     ; TODO:
     ; roll dice
     ; reduce their hitpints
     ; add a message
     (-> *state
         (update-in [:entities my-id] assoc
                    :dead true
                    :layer :floor
                    :sprite (load-sprite :skull-and-crossbones))
         (update-in [:entities my-id :fns] dissoc :update :encounter)
         (check-for-endgame))]))

(defn can-pass-tile [floor-tiles pos allowed-tiles]
  (let [tile-type (get floor-tiles pos)]
       (contains? (set allowed-tiles) tile-type)))

(defn player-passable-fn [*state x y]
  (let [floor-tiles (-> *state :map :floor-tiles)]
    (can-pass-tile floor-tiles [x y] [:room :door :corridor])))

(defn make-monster-passable-fn [*state monster-id _monster]
  (let [floor-tiles (-> *state :map :floor-tiles)
        entities (-> *state :entities)
        entities-to-avoid (->>
                            entities
                            (filter (fn [[id e]] (and
                                                   (= (:layer e) :occupy)
                                                   (not= id monster-id)
                                                   (not= id :player))))
                            entities-by-pos-mem)]
    (fn [x y]
      (and
        (can-pass-tile floor-tiles [x y] [:room :door :corridor])
        (nil? (get entities-to-avoid [x y :occupy]))))))

(defn chase-player [{:keys [entities] :as *state} monster-id monster]
  (log "update" (:name monster) monster-id)
  (let [player (:player entities)
        passable-fn ((-> monster :fns :passable) *state monster-id monster)
        path-to-player (when player
                         (find-path
                           (:pos monster) (:pos player)
                           passable-fn))]
    (if (and player (< (count path-to-player) 10))
      (move-to *state monster-id (second path-to-player))
      *state)))

; ***** create different types of things ***** ;

(defn make-player [entities free-tiles]
  (let [pos (rand-nth (keys free-tiles))
        player {:sprite (load-sprite :elf)
                :name "you"
                :layer :occupy
                :pos pos
                :stats {:hp [6 10]
                        :xp 3
                        :dmg 2}
                :inventory []
                :fns {:encounter #'combat
                      :passable (fn [*state _player-id _player]
                                  (partial player-passable-fn *state))}}]
    [(assoc entities :player player)
     (dissoc free-tiles pos)]))

(defn make-shrine [entities free-tiles paths-to-rooms]
  (let [furthest-room-center-pos (:center-pos (last paths-to-rooms))
        shrine (merge shrine-template
                      {:pos furthest-room-center-pos
                       :layer :occupy
                       :fns {:encounter #'finish-game}})]
    [(assoc entities :shrine shrine)
     (dissoc free-tiles furthest-room-center-pos)]))

(defn make-covered-item [entities free-tiles paths-to-rooms player-path-find-fn]
  (let [{:keys [room]} (rand-nth paths-to-rooms)
        player (:player entities)
        room-tiles (tiles-for-room room)
        free-room-tiles (intersection (set (keys room-tiles)) (set (keys free-tiles)))
        pos (rand-nth (vec free-room-tiles))
        furthest-room-path-length (count (:path (last paths-to-rooms)))
        path-to-item (find-path
                       (:pos player) pos
                       player-path-find-fn)
        path-to-item-length (count path-to-item)
        difficulty (* (/ path-to-item-length furthest-room-path-length) 0.9)
        item-template (get-random-entity-by-value forage-items)
        item (when
               (> (js/Math.random) difficulty)
               (merge
                 item-template
                 {:pos pos
                  :id (make-id)
                  :layer :floor
                  :fns {:encounter #'add-item-to-inventory}}))
        cover (merge
                (rand-nth item-covers)
                {:pos pos
                 :layer :floor
                 :drop item
                 :fns {:encounter #'uncover-item}})]
    [(assoc entities (make-id) cover)
     (dissoc free-tiles pos)]))

(defn make-monster [entities free-tiles _game-map _paths-to-rooms]
  (let [pos (rand-nth (keys free-tiles))
        monster (merge
                  (rand-nth monster-table)
                  {:pos pos
                   :layer :occupy
                   :fns {:encounter #'combat
                         :update #'chase-player
                         :passable #'make-monster-passable-fn}})]
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
                       (make-monster entities free-tiles game-map paths-to-rooms))
                     [entities free-tiles]
                     (range monster-count))]
    entities))

(defn make-level [*state size]
  (let [m (make-digger-map (js/Math.random) size size)
        entities (make-entities m 20 5)
        max-score (calculate-max-score entities)]
    (log "map" m)
    (log "entities" entities)
    (log "max-score" max-score)
    (assoc *state
           :map m
           :entities entities
           :max-score max-score)))

; ***** rendering ***** ;

(defn component-cell [floor-tiles entities x y opacity]
  [:span.grid {:key x
               :style {:opacity opacity}}
   (when (> opacity 0)
     (cond 
       (= (get floor-tiles [x y]) :door)
       (tile (load-sprite :white-large-square) "door")
       (= (get floor-tiles [x y]) :room)
       (tile (load-sprite :white-large-square) "room")
       (= (get floor-tiles [x y]) :wall)
       (tile (load-sprite :black-large-square) "wall")
       (= (get floor-tiles [x y]) :corridor)
       (tile (load-sprite :brown-square) "corridor")
       :else nil))
   (for [layer [:floor :occupy]]
     (let [entity (get entities [x y layer])]
       (when entity
         (tile-mem (:sprite entity) (:name entity) {:opacity opacity}))))])

(defn component-inventory [inventory]
  [:div#inventory
   [:div#score (apply + (map :value inventory))]
   [:ul
    (for [e (sort-by (juxt :value :name) inventory)]
      [:li (tile-mem (:sprite e) (:name e) {:width "48px"})])]])

(defn component-health [stats]
  [:div#player-stats
   (let [hp (-> stats :hp first)]
     (for [i (range (-> stats :hp second))]
       (if (> i hp)
         (tile-mem (load-sprite :white-large-square))
         (tile-mem (load-sprite :green-square)))))])

(defn component-help [show-help]
  (when show-help
    [:div.modal
     [:h2 "Rogule"]
     [:p "Find items to obtain the best score."]
     [:p "Get to the shrine " (tile-mem (load-sprite :shinto-shrine) "shrine") " to ascend."]]))

(defn component-messages [message]
  [:div.message message])

(defn component-game [state]
  (let [game-map (:map @state)
        floor-tiles (:floor-tiles game-map)
        entities (entities-by-pos-mem (-> @state :entities))
        player (-> @state :entities :player)
        player-pos (:pos player)
        player-inventory (:inventory player)
        stats (-> player :stats)]
    [:span#game
     [component-health stats]
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
     [component-inventory player-inventory]
     [component-help (= (:modal @state) :help)]
     [component-messages (-> @state :message :text)]]))

(defn copy-element [selector]
  (let [el (.querySelector js/document selector)]
    (->
      (js/navigator.clipboard.writeText (aget el "innerText"))
      (.then (fn [] (js/alert "copied"))))))

(defn component-tombstone [state]
  (let [{:keys [outcome entities]} @state
        {:keys [player]} entities
        {:keys [inventory]} player]
    [:div#tombstone
     [:p "Rogule " (date-token)]
     [:div "Score: " (apply + (map :value inventory)) " / " (:max-score @state)]
     [:p
      (tile (load-sprite :elf) "you") " "
      (name outcome) " "
      (if (= outcome :ascended)
        (tile (load-sprite :glowing-star))
        (tile (load-sprite :skull-and-crossbones)))]
     [:p
      (for [e (sort-by (juxt :value :name) inventory)]
        [:span (tile-mem (:sprite e) (:name e) {:width "48px"})])]
     [:button {:autoFocus true
               :on-click #(reset! state (make-level initial-state size))}
      "restart"]
     [:button {:on-click #(copy-element "#tombstone")} "share"]]))

(defn component-main [state]
  (if (:outcome @state)
    [component-tombstone state]
    [component-game state]))

(defn key-handler [ev]
  (let [code (aget ev "keyCode")]
    (print "keyCode" code)
    (case code
      81 (reset! state (make-level initial-state size))
      191 (swap! state update-in [:modal] #(when (not %) :help))
      27 (swap! state dissoc :modal)
      nil)))

(defn start {:dev/after-load true} []
  (rdom/render [component-main state]
               (js/document.getElementById "app")))

(defn main! []
  (seedrandom (str "Rogule-" (date-token)) #js {:global true})
  (reset! state (make-level initial-state size))
  (.addEventListener js/window "keydown" #(key-handler %))
  (start))

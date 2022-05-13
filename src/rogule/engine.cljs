(ns rogule.engine
  (:require
    [clojure.set :refer [difference]]
    [reagent.core :as r]
    [sitefox.ui :refer [log]]
    ["rot-js" :as ROT]
    [rogule.map :refer [entities-by-pos-mem find-path make-id can-pass-tile]])
  (:require-macros
    [rogule.loader :refer [load-sprite]]))

(log "rogule.engine loaded")

(defonce keymap (r/atom {}))
; dirty hack to avoid functions in serialized state
(def fn-table (atom {}))

(def key-dir-map
  {37 [0 dec]
   72 [0 dec]
   39 [0 inc]
   76 [0 inc]
   38 [1 dec]
   75 [1 dec]
   40 [1 inc]
   74 [1 inc]
   190 []})

(def rejuvination-rate 27)

; ***** rng fns ***** ;

(defonce combat-dice (ROT/RNG.clone))
(def coin #js [0 1])

(defn coin-flip []
  (.getItem combat-dice coin))

; ***** state update ***** ;

(defn move-to [*state id new-pos]
  (if new-pos
    (let [move (:moves *state)
          entity (get-in *state [:entities id])
          pos (-> entity :pos)
          passable-fn-maker (-> entity :fns :passable)
          passable-fn (when passable-fn-maker ((passable-fn-maker @fn-table) *state id entity))
          passable-tile? (if passable-fn (passable-fn (first new-pos) (second new-pos)) true)
          entities-at-pos (filter (fn [[_id entity]] (= (:pos entity) new-pos)) (:entities *state))
          [item-blocks? state-after-encounters] (reduce (fn [[item-blocks? *state] [entity-id e]]
                                                          (let [encounter-fn (-> e :fns :encounter)]
                                                            (if encounter-fn
                                                              (let [[this-item-blocks? *state] ((encounter-fn @fn-table) *state id entity-id)]
                                                                [(or item-blocks? this-item-blocks?) *state])
                                                              [item-blocks? *state])))
                                                        [false *state] entities-at-pos)
          relative-move [(- (first new-pos) (first pos))
                         (- (second new-pos) (second pos))]
          animation (str "bump-" (get {[-1 0] "left"
                                       [1 0] "right"
                                       [0 -1] "up"
                                       [0 1] "down"} relative-move))]
      (cond
        item-blocks?
        (update-in state-after-encounters [:entities id] assoc :animation [animation nil move] relative-move :moved true)
        passable-tile?
        (update-in state-after-encounters [:entities id] assoc :animation nil :pos new-pos :moved true)
        :else
        (update-in state-after-encounters [:entities id] assoc :animation nil :moved false)))
    *state))

(defn update-monsters [*state]
  (->> *state
      :entities
      (filter (fn [[_id entity]] (-> entity :fns :update)))
      (reduce
        (fn [*state [id entity]]
          (let [update-fn ((-> entity :fns :update) @fn-table)]
            (update-fn *state id entity)))
        *state)))

(defn expire-messages [*state]
  (update-in *state [:message]
             (fn [{:keys [expires text]}]
               (let [display? (not= expires 0)]
                 (when display?
                   {:expires (dec expires)
                    :text text})))))

(defn restore-player-health [*state]
  (update-in *state [:entities :player :stats]
             (fn [stats]
               (let [hp (:hp stats)]
                 (if (< (first hp) (second hp))
                   (let [hp-inc (inc (:hp-inc stats))
                         add (>= hp-inc rejuvination-rate)]
                     (when add (log "hp increase to" (inc (first hp))))
                     (if add
                       (-> stats
                           (assoc :hp-inc 0)
                           (update-in [:hp 0] inc))
                       (update-in stats [:hp-inc] inc)))
                   (assoc stats :hp-inc 0))))))

(defn reset-combat-list [*state]
  (assoc *state :combatants {}))

(defn add-killed-by [*state id entity]
  (assoc-in *state [:entities id :killed-by] entity))

(defn add-to-combat-list [*state id entity]
  (if (not= id :player)
    (assoc-in *state [:combatants id] entity)
    *state))

(defn add-to-inventory [*state id item-id entity]
  (update-in *state [:entities id :inventory] conj (assoc entity :id item-id)))

(defn remove-entity [*state id]
  (update-in *state [:entities] dissoc id))

(defn add-entity [*state entity]
  (if entity
    (assoc-in *state [:entities (:id entity)] (dissoc entity :id))
    *state))

(defn add-message [*state message]
  (assoc *state :message {:text message
                          :expires 3}))

(defn update-statistics [*state]
  (let [outcome (:outcome *state)]
    (-> *state
        (update-in [:statistics outcome] inc)
        (update-in [:statistics :streak]
                   (fn [streak]
                     (if (= outcome :died)
                       0
                       (inc streak))))
        (update-in [:statistics]
                   (fn [statistics]
                     (if (> (:streak statistics) (:max-streak statistics))
                       (assoc statistics :max-streak (:streak statistics))
                       statistics))))))

(defn finish-game [*state _their-id _item-id]
  [true
   (-> *state
       (assoc :outcome :ascended)
       update-statistics)])

(defn check-for-endgame [*state]
  (let [player (-> *state :entities :player)]
    (if (:dead player)
      (-> *state
          (assoc :outcome :died)
          update-statistics)
      *state)))

; ***** item encounter fns ***** ;

(defn increase-hp [*state their-id item-id]
  (let [hp (get-in *state [:entities their-id :stats :hp])
        add-hp (< (first hp) (second hp))]
    [false
     (if add-hp
       (-> *state
           (update-in [:entities their-id :stats :hp 0] (fn [old-hp] (js/Math.min (+ old-hp 3) (second hp))))
           (remove-entity item-id)
           (add-message "You feel better."))
       (add-message *state "You already have full health."))]))

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
                (add-entity (:juice item))
                (add-entity (:drop item)))])))

(defn get-weapons-dmg [entity]
  (or
    (apply + (map :dmg (:inventory entity)))
    0))

(defn get-armour-hp [entity]
  (or
    (apply + (map :armour (:inventory entity)))
    0))

(defn combat [*state their-id my-id]
  ; hit goes them -> me
  (let [them (get-in *state [:entities their-id])
        me (get-in *state [:entities my-id])
        their-xp (-> them :stats :xp)
        my-hp (-> me :stats :hp first)
        my-pos (-> me :pos)
        hit (.getItem combat-dice #js [0 1 1 1 1 1])
        hp-hit (.getItem combat-dice (to-array (range their-xp)))
        hp-weapons (get-weapons-dmg them)
        hp-armour (get-armour-hp me)
        hp-reduction (-> hp-hit (+ hp-weapons) (- hp-armour) (* hit) (js/Math.max 0))
        ; TODO: animate armour taking a hit
        updated-hp (js/Math.max 0 (- my-hp hp-reduction))
        hit-miss-msg (if (<= hp-reduction 0) "missed" "hit")
        killed (= updated-hp 0)
        *state (assoc-in *state [:entities my-id :stats :hp 0] updated-hp)
        *state (add-message *state (str (:name them) " " hit-miss-msg " " (:name me)))
        *state (if (and killed (= their-id :player))
                 (update-in *state [:entities their-id :kills] conj (get-in *state [:entities my-id]))
                 *state)
        kills (count (get-in *state [:entities their-id :kills]))
        *state (if (and killed (= their-id :player) (= (mod kills 2) 0)) ; every 2 kills add XP
                 (-> *state
                     (update-in [:entities their-id :stats :xp] inc)
                     (add-message "You gained xp."))
                 *state)
        *state (if killed
                 (-> *state
                     (add-message (str (:name them) " killed " (:name me)))
                     (add-killed-by my-id (get-in *state [:entities their-id])))
                 (-> *state
                     (add-to-combat-list their-id (get-in *state [:entities their-id]))
                     (add-to-combat-list my-id (get-in *state [:entities my-id]))))
        *state (if (> hp-reduction 0)
                 (do
                   (log "adding collision entity")
                   (add-entity *state
                               {:id (make-id)
                                :sprite (load-sprite :collision)
                                :name "collision"
                                :animation [:grow-and-fade :destroy]
                                :pos my-pos
                                :layer :above}))
                 *state)]
    (when (> hit 0)
      (log "combat" (:name them) "hit" (:name me) hit hp-hit hp-weapons hp-armour hp-reduction " hp:" my-hp updated-hp)
      (log "hp" "hit:" hp-hit "weapons:" hp-weapons "armour:" hp-armour "reduction:" hp-reduction)
      (log "hp change:" my-hp updated-hp))
    [true
     (if (= updated-hp 0)
       (-> *state ; entity dies
           (update-in [:entities my-id] assoc
                      :dead true
                      :layer :floor
                      :sprite (load-sprite :skull-and-crossbones))
           (update-in [:entities my-id :fns] dissoc :update :encounter)
           (check-for-endgame))
       *state)]))

; ***** player movement functions ***** ;

(defn player-passable-fn [*state x y]
  (let [floor-tiles (-> *state :map :floor-tiles)]
    (can-pass-tile floor-tiles [x y] [:room :door :corridor])))

(defn make-player-passable-fn [*state _player-id _player]
  (partial player-passable-fn *state))

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
  (let [player (:player entities)
        passable-fn (make-monster-passable-fn *state monster-id monster)
        path-to-player (when player
                         (find-path
                           (:pos monster) (:pos player)
                           passable-fn))]
    (if (and player
             (< (count path-to-player) (:activation monster))
             ; every now and then just don't move
             (< (.getUniform combat-dice) 0.9))
      (move-to *state monster-id (second path-to-player))
      *state)))

; ***** function lookup table (serialization friendly) ***** ;

; dirty hack
; TODO: use a multimethod instead
(reset! fn-table
  {:add-item-to-inventory add-item-to-inventory
   :increase-hp increase-hp
   :uncover-item uncover-item
   :finish-game finish-game
   :combat combat
   :chase-player chase-player
   :player-passable-wrapper make-player-passable-fn
   :make-monster-passable-fn make-monster-passable-fn})

; ***** event handling ***** ;

(defn trigger-key [key-code & [key-event]]
  (.dispatchEvent js/window
                  (js/KeyboardEvent.
                    (or key-event "keydown")
                    #js {:keyCode key-code})))

(defn process-arrow-key! [state ev]
  ; NOTE: currently the retrigger is turned off as it felt janky
  ; key down -> if not already pressed, push that key onto queue
  ; after a time out
  ;   if any keys are still down duplicate the end of the queue
  (let [code (aget ev "keyCode")
        down? (= (aget ev "type") "keydown")
        dir (get key-dir-map code)]
    (when dir
      (cond (and down?
                 (nil? (-> @keymap :held (get code))))
            (do
              (swap! keymap update-in [:held] (fn [held] (conj (set held) code)))
              (let [dir-idx (first dir)
                    dir-fn (second dir)
                    new-pos (when dir-idx
                              (-> @state
                                  (get-in [:entities :player :pos])
                                  (update-in [dir-idx] dir-fn)))]
                (swap! state (fn [*state]
                               (let [player-updated-state
                                     (-> *state
                                         (reset-combat-list)
                                         (update-in [:moves] inc)
                                         (move-to :player new-pos))
                                     player-moved (get-in player-updated-state [:entities :player :moved])
                                     game-outcome (get player-updated-state :outcome)]
                                 (if (and (not game-outcome) player-moved)
                                   (-> player-updated-state
                                       (restore-player-health)
                                       (update-monsters)
                                       (expire-messages))
                                   player-updated-state))))))
            (not down?)
            (swap! keymap update-in [:held] (fn [held] (difference (set held) #{code})))))
    ;(js/console.log "keymap" (clj->js @keymap))
    ))

(defn install-arrow-key-handler [state el]
  (if el
    (let [arrow-handler-fn #(process-arrow-key! state %)]
      (.addEventListener js/window "keydown" arrow-handler-fn)
      (.addEventListener js/window "keyup" arrow-handler-fn)
      (aset js/window "_game-key-handler" arrow-handler-fn))
    (let [arrow-handler-fn (aget js/window "_game-key-handler")]
      (.removeEventListener js/window "keydown" arrow-handler-fn)
      (.removeEventListener js/window "keyup" arrow-handler-fn)
      (js-delete js/window "_game-key-handler"))))

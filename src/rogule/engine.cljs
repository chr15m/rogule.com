(ns rogule.engine
  (:require
    [clojure.set :refer [difference]]
    [clojure.string :refer [join]]
    [reagent.core :as r]
    [sitefox.ui :refer [log]]
    ["rot-js" :as ROT])
  (:require-macros
    [rogule.loader :refer [load-sprite]]))

(log "rogule.engine loaded")

(defonce keymap (r/atom {}))

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

(def rejuvination-rate 13)

; ***** rng fns ***** ;

(defonce combat-dice (ROT/RNG.clone))
(def coin #js [0 1])

(defn make-id []
  (-> (random-uuid) str (.slice 0 8)))

(defn coin-flip []
  (.getItem combat-dice coin))

(defn get-random-entity-by-value [entity-template-table]
  (let [weighted-table (->> entity-template-table
                            (map (fn [i] {(:name i) (/ 1 (:value i))}))
                            (into {})
                            clj->js)
        item-name (ROT/RNG.getWeightedValue weighted-table)]
    (->> entity-template-table
         (filter #(= (:name %) item-name))
         first)))

; ***** state update ***** ;

(defn move-to [*state id new-pos]
  (if new-pos
    (let [entity (get-in *state [:entities id])
          passable-fn-maker (-> entity :fns :passable)
          passable-fn (when passable-fn-maker (passable-fn-maker *state id entity))
          passable-tile? (if passable-fn (passable-fn (first new-pos) (second new-pos)) true)
          entities-at-pos (filter (fn [[_id entity]] (= (:pos entity) new-pos)) (:entities *state))
          [item-blocks? state-after-encounters] (reduce (fn [[item-blocks? *state] [entity-id e]]
                                                          (let [encounter-fn (-> e :fns :encounter)]
                                                            (if encounter-fn
                                                              (let [[this-item-blocks? *state] (encounter-fn *state id entity-id)]
                                                                [(or item-blocks? this-item-blocks?) *state])
                                                              [item-blocks? *state])))
                                                        [false *state] entities-at-pos)]
      (if (and passable-tile? (not item-blocks?))
        (assoc-in state-after-encounters [:entities id :pos] new-pos)
        state-after-encounters))
    *state))

(defn update-monsters [*state]
  (->> *state
      :entities
      (filter (fn [[_id entity]] (-> entity :fns :update)))
      (reduce
        (fn [*state [id entity]]
          (let [update-fn (-> entity :fns :update)]
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
                   (let [hp-inc (inc (:hp-inc stats))]
                     (if (>= hp-inc rejuvination-rate)
                       (-> stats
                           (assoc :hp-inc 0)
                           (update-in [:hp 0] inc))
                       (update-in stats [:hp-inc] inc)))
                   (assoc stats :hp-inc 0))))))

(defn reset-combat-list [*state]
  (assoc *state :combatants {}))

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

(defn finish-game [*state _their-id _item-id]
  [true (assoc *state :outcome :ascended)])

(defn check-for-endgame [*state]
  (let [player (-> *state :entities :player)]
    (if (:dead player)
      (assoc *state :outcome :died)
      *state)))

; ***** item encounter fns ***** ;

(defn increase-hp [*state their-id item-id]
  (let [hp (get-in *state [:entities their-id :stats :hp])
        add-hp (< (first hp) (second hp))
        *state (remove-entity *state item-id)]
    [false
     (if add-hp
       (-> *state
           (update-in [:entities their-id :stats :hp 0] (fn [old-hp] (js/Math.min (+ old-hp 3) (second hp))))
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
                (add-entity (:drop item)))])))

(defn combat [*state their-id my-id]
  ; hit goes them -> me
  (let [them (get-in *state [:entities their-id])
        me (get-in *state [:entities my-id])
        their-xp (-> them :stats :xp)
        my-hp (-> me :stats :hp first)
        ; flip a coin for every xp and compute the boolean
        hits (map (fn [_] (coin-flip)) (range their-xp))
        hp-reduction (-> hits join (js/parseInt 2))
        updated-hp (js/Math.max 0 (- my-hp hp-reduction))
        hit-miss-msg (if (= hp-reduction 0) "missed" "hit")
        killed (= updated-hp 0)
        *state (assoc-in *state [:entities my-id :stats :hp 0] updated-hp)
        *state (add-message *state (str (:name them) " " hit-miss-msg " " (:name me)))
        *state (if (and killed (= their-id :player))
                 (update-in *state [:entities their-id :kills] conj (get-in *state [:entities my-id]))
                 *state)
        kills (count (get-in *state [:entities their-id :kills]))
        *state (if (and killed (= their-id :player) (= (mod kills 3) 0)) ; every 3 kills add XP
                 (-> *state
                     (update-in [:entities their-id :stats :xp] inc)
                     (add-message "You gained xp."))
                 *state)
        *state (if killed
                 (add-message *state (str (:name them) " killed " (:name me)))
                 (-> *state
                     (add-to-combat-list their-id (get-in *state [:entities their-id]))
                     (add-to-combat-list my-id (get-in *state [:entities my-id]))))]
    (log "combat" (:name them) "hit" (:name me) hits hp-reduction " hp:" my-hp updated-hp)
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

; ***** event handling ***** ;

(defn trigger-key [key-code]
  (.dispatchEvent js/window
                  (js/KeyboardEvent.
                    "keydown"
                    #js {:keyCode key-code})))

(defn process-arrow-key! [state ev]
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
                (swap! state #(-> %
                                  ; TODO: if player move was rejected
                                  ; don't update monsters
                                  (reset-combat-list)
                                  (update-in [:moves] inc)
                                  (move-to :player new-pos)
                                  (restore-player-health)
                                  (update-monsters)
                                  (expire-messages)))))
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

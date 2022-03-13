(ns rogule.engine
  (:require
    [reagent.core :as r]
    [clojure.set :refer [difference]]
    [sitefox.ui :refer [log]]))

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

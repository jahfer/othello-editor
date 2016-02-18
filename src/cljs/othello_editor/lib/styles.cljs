(ns othello-editor.lib.styles)

(defn- range-sort [[[a _] _] [[b _] _]]
  (compare a b))

(defn- range-overlap [[a-start a-end :as a] [b-start b-end :as b]]
  (when (<= 0 (- a-end b-start))
    [(if (identical? a-start b-start) [] [a-start (dec b-start)])
     [b-start (min a-end b-end)]
     (if (identical? a-end b-end) [] [(inc (min a-end b-end)) (max a-end b-end)])]))

(defn- merge-ranges [{:keys [set] :as acc} [[this-start this-end] this-styles :as attribute]]
  (let [sorted-set (sort range-sort set)
        [[last-start last-end] last-styles] (last sorted-set) ;; slow!
        [pre overlap post] (range-overlap [last-start last-end] [this-start this-end])]
    (cond-> acc
      (empty? overlap) (update :set conj attribute)
      ;; else
      (seq overlap)    (update :set rest)
      (seq pre)        (update :set conj  [pre last-styles])
      (seq overlap)    (update :set conj  [overlap (merge this-styles last-styles)])
      (seq post)       (update :remainder conj [post (cond-> {}
                                                       (->> post (range-overlap [this-start this-end]) second seq) (merge this-styles)
                                                       (->> post (range-overlap [last-start last-end]) second seq) (merge last-styles))]))))

(defn style-ranges [attributes]
  (loop [{:keys [set remainder] :as acc} {:set (list) :remainder attributes}]
    (if (seq remainder)
      (as-> acc $
        (into (:set $) (:remainder $))
        (sort range-sort $)
        (reduce merge-ranges {:set (list (first $))} (rest $))
        (recur $))
      (sort range-sort set))))

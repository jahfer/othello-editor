(ns othello-editor.lib.dom)

(defn- styles-from-attributes
  [{:keys [bold italic underline]}]
  (cond-> {}
    bold      (assoc :font-weight     "bold")
    italic    (assoc :font-style      "italic")
    underline (assoc :text-decoration "underline")))

(defn- chars-after
  [str pos]
  (when (> (count str) pos)
    (subs str pos (count str))))

(defn- spans-over-range
  [body last-end this-start this-end styles key]
  (let [filler-row  ^{:key [key last-end this-start]} [:span (subs body last-end this-start)]
        current-row ^{:key [key this-start this-end]} [:span {:style styles} (subs body this-start this-end)]]
    (cond-> (list current-row)
      (not= this-start last-end) (conj filler-row))))

(defn styles->spans
  [body attributes key]
  (let [last-end (atom 0)]
    (->> attributes
      (reduce
       (fn [acc [[start end] attrs]]
         (let [last-end' @last-end
               styles (styles-from-attributes attrs)]
           (reset! last-end end)
           (into acc (spans-over-range body last-end' start end styles key))))
       (list))
      (#(conj % ^{:key [key "tail"]} [:span (chars-after body @last-end)]))
      (reverse))))

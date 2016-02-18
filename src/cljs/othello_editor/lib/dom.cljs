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

(defn- tagged-span
  ([id range-start range-end body]
   (tagged-span id range-start range-end {} body))
  ([id range-start range-end styles body]
   (let [key (str id "-" range-start ":" range-end)]
     ^{:key key} [:span (into {:id key} styles) body])))

(defn- spans-over-range
  [body last-end this-start this-end styles key]
  (let [filler-row (tagged-span key last-end this-start (subs body last-end this-start))
        current-row (tagged-span key this-start this-end {:style styles} (subs body this-start this-end))]
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
      (#(conj % (tagged-span key "tail" "tail" (chars-after body @last-end))))
      (reverse))))

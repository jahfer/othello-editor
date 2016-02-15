(ns othello-editor.lib.diff
  (:require
   [clojure.string :refer [index-of last-index-of]]))

(defn diff-start
  [old-str new-str]
  (loop [from-index 0 values (seq new-str)]
    (let [value (first values)
          idx (index-of old-str value from-index)]
      (if (= from-index idx)
        (recur (inc idx) (rest values))
        from-index))))

(defn diff-end
  [old-str new-str]
  (loop [from-index (dec (count new-str)) values (reverse (seq old-str))]
    (let [value (first values)
          idx (last-index-of new-str value from-index)]
      (if (= from-index idx)
        (recur (dec idx) (rest values))
        from-index))))

(defn diff-range [old-str new-str]
  "returns inclusive range"
  ((juxt diff-start diff-end) old-str new-str))

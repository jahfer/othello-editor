(ns othello-editor.scratch)

(def attributes
  [[[1 7]   {:underline true}]
   [[2 5]   {:italic true}]
   [[4 12]  {:bold true}]
   [[13 15] {:italic true}]])

(def attributes
  [[[6 11]  {:bold true}]
   [[6 7]   {:italic true}]
   [[18 20] {:underline true}]])

;;; ------

(defn range-sort [[[a _] _] [[b _] _]]
  (compare a b))

(defn range-overlap [[a-start a-end :as a] [b-start b-end :as b]]
  (when (<= 0 (- a-end b-start))
    [(if (identical? a-start b-start) [] [a-start (dec b-start)])
     [b-start (min a-end b-end)]
     (if (identical? a-end b-end) [] [(inc (min a-end b-end)) (max a-end b-end)])]))

(range-overlap [6 11] [6 7])

(defn merge-ranges [{:keys [set] :as acc} [[this-start this-end] this-styles :as attribute]]
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

(loop [{:keys [set remainder] :as acc} {:set (list) :remainder attributes}]
  (if (seq remainder)
    (as-> acc $
      (into (:set $) (:remainder $))
      (sort range-sort $)
      (reduce merge-ranges {:set (list (first $))} (rest $))
      (recur $))
    (sort range-sort set)))

(comment
  [[[6 7]   {:bold true :italic true}]
   [[8 11]  {:bold true}]
   [[18 20] {:underline true}])

(comment
  {[1 1]   [:underline]
   [2 3]   [:underline :italic]
   [4 5]   [:underline :italic :bold]q
   [6 7]   [:underline :bold]
   [8 12]  [:bold]
   [13 15] [:italic]})

;; (loop [out (list)
;;        in  (sort range-sort attributes)]
;;   (if (seq in)
;;     (if (seq out)
;;       (let [[last-span last-data] (first out)
;;             cur-span (:span (first in))]
;;         (if (pos? (- (second last-span) (first cur-span)))
;;           (let [rmin (first cur-span)
;;                 rmax (min (second cur-span) (second last-span))
;;                 entry [[rmin rmax] (merge (styles (first in)) (styles last-data))]
;;                 remaining (if (< rmax (second last-span))
;;                             (sort range-sort (conj (rest in) (merge {:span [(inc rmax) (second last-span)]} (styles last-data))))
;;                             (rest in))]
;;             (recur (conj (rest out) entry) remaining))
;;           (recur (conj out [cur-span (styles (first in))]) (rest in))))
;;       (recur (conj out [(:span (first in)) (styles (first in))]) (rest in)))
;;     out))

;; From: https://github.com/mobiusinversion/interval-tree/blob/master/src/interval_tree/core.clj
;; This namespace defines interval trees and functions
;; for working with them.  The interval trees are implemented 
;; as augmented red-black trees following the approach laid out in 
;; Introduction to Algorithms (2009) by Cormen, Leiserson, Rivest and Stein (CLRS).  Interval trees
;; are binary search trees that stores real valued intervals, for example [3.5, 5.7].  The node keys
;; are the low end of the interval, and each node also contain the 
;; the maximum of the high values of itself and its branches.  This allows
;; for logarithmic time searches of all intervals that contain a point
;; and all interval that overlap a given interval.

[1 3] -> :underline
[2 4] -> :italic
[4 4] -> :bold
< ???
[1 1] -> :underline
[2 3] -> :underline :italic
[4 4] -> :italic :bold

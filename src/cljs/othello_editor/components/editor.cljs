(ns othello-editor.components.editor
  (:require
   [taoensso.encore :as enc :refer (tracef debugf infof warnf errorf)]
   [reagent.core :as reagent]
   [re-frame.core :refer [register-handler
                          register-sub
                          dispatch
                          subscribe
                          trim-v
                          debug]]
   [othello-editor.lib.styles :as styles]
   [clojure.string :refer [index-of last-index-of]])
  (:require-macros
   [reagent.ratom :refer (reaction)]))

(enable-console-print!)

(defn handle-input
  [id]
  (fn [event]
    (dispatch [::content-editable-input id event])
    (.preventDefault event)))

(defn dispatch-preventing-default
  [dom-event dispatch-event]
  (.persist dom-event)
  (dispatch dispatch-event)
  (.preventDefault dom-event))

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

(defn range-sort [[[a _] _] [[b _] _]]
  (compare a b))

(defn styles-from-attributes
  [{:keys [bold italic underline]}]
  (cond-> {}
    bold      (assoc :font-weight     "bold")
    italic    (assoc :font-style      "italic")
    underline (assoc :text-decoration "underline")))

(defn chars-after
  [str pos]
  (when (> (count str) pos)
    (subs str pos (count str))))

(defn spans-over-range
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

(defn active-element [] (.-activeElement js/document))

(defn current-selection []
  (let [range (.getRangeAt (.getSelection js/window) 0)]
    {:start-offset (.-startOffset range) :end-offset (.-endOffset range)}))

(def keydown-blacklist [8 37 38 39 40])

;; ----

(register-sub
 ::visible-blocks
 (fn [db _]
   (let [block-order (reaction (get-in @db [:editor :block-order]))
         blocks      (reaction (get-in @db [:editor :blocks]))]
     (reaction (map (partial get @blocks) @block-order)))))

;; ----

(register-handler
 :ot/insert
 [trim-v debug]
 (fn [db [char start-offset]]
   db))

(register-handler
 ::content-editable-input
 [trim-v debug]
 (fn [db [id event]]
   (let [old-body (get-in db [:editor :blocks id :block/body])
         new-body (.-textContent (.-target event))
         range (diff-range old-body new-body)]
     (println range (subs new-body (first range) (inc (second range))))
     (assoc-in db [:editor :blocks id :block/body] new-body))))

(register-handler
 ::focus-block
 trim-v
 (fn [db [id]]
   (assoc-in db [:editor :active-block-id] id)))

(defn apply-style
  [db {:keys [start-offset end-offset]} style]
  (let [active-author-id (get-in db [:editor :active-author-id])
        active-block-id  (get-in db [:editor :authors active-author-id :active-block-id])
        current-attrs    (get-in db [:editor :blocks active-block-id :block/attributes])]
    (as-> current-attrs $
      (conj $ [[start-offset end-offset] style])
      (sort range-sort $)
      (assoc-in db [:editor :blocks active-block-id :block/attributes] $))))

(register-handler
 :selection/bold
 trim-v
 (fn [db [range]]
   (apply-style db range {:bold true})))

(register-handler
 :selection/italic
 trim-v
 (fn [db [range]]
   (apply-style db range {:italic true})))

(register-handler
 :selection/underline
 trim-v
 (fn [db [range]]
   (apply-style db range {:underline true})))

;; ----

(defn text-node [id attributes body]
  [:p {:contentEditable true
       :on-focus #(dispatch [::focus-block id])
       :on-input #(dispatch-preventing-default % [::content-editable-input id %])}
   (styles->spans body attributes id)])

(defn title-node [id attributes body]
  [:h1 {:contentEditable true
        :on-focus #(dispatch [::focus-block id])
        :on-input #(dispatch-preventing-default % [::content-editable-input id %])}
   body])

(defn buttons
  []
  [:div
   [:button {:on-click #(dispatch [:selection/bold (current-selection)])} "Bold"]
   [:button {:on-click #(dispatch [:selection/italic (current-selection)])} "Italic"]
   [:button {:on-click #(dispatch [:selection/underline (current-selection)])} "Underline"]])

(defn content
  []
  (let [blocks (subscribe [::visible-blocks])]
    (fn editor-render [_]
      [:div
       (doall (for [{type       :block/type
                     attributes :block/attributes
                     id         :block/id
                     body       :block/body
                     :as node} @blocks]
                (condp = type
                  :block-type/title ^{:key id} [title-node id attributes body]
                  :block-type/text  ^{:key id} [text-node  id attributes body]
                  [:p "???"])))])))

(defn editor
  []
  [:div
   [buttons]
   [content]])

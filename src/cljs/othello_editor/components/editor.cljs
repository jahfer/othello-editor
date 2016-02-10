(ns othello-editor.components.editor
  (:require
   [taoensso.encore :as enc :refer (tracef debugf infof warnf errorf)]
   [reagent.core :as reagent]
   [re-frame.core :refer [register-handler
                          register-sub
                          dispatch
                          subscribe]]
   [othello-editor.lib.styles :as styles])
  (:require-macros
   [reagent.ratom :refer (reaction)]))

(enable-console-print!)

(defn handle-input [id]
  (fn [event]
    (dispatch [:content-editable-input id event])
    (.preventDefault event)))

(defn styles-from-attributes [{:keys [bold italic underline]}]
  (cond-> {}
    bold      (assoc :font-weight     "bold")
    italic    (assoc :font-style      "italic")
    underline (assoc :text-decoration "underline")))

(defn styles->spans [body attributes]
  (let [last-end* (atom 0)]
    (->> attributes
         (reduce
          (fn [acc [[start end] styles]]
            (let [last-end    @last-end*
                  filler-row  [:span (subs body last-end start)]
                  current-row [:span {:style (styles-from-attributes styles)} (subs body start end)]]
              (reset! last-end* end)
              (cond-> acc
                (not= start last-end) (conj filler-row)
                true                  (conj current-row))))
          (list))
         ((fn [nodes]
            (if (> (count body) @last-end*)
              (conj nodes [:span (subs body @last-end* (count body))])
              nodes)))
         (reverse))))

;; ----

(register-sub
 :visible-blocks
 (fn [db _]
   (let [block-order (reaction (get-in @db [:editor :block-order]))
         blocks      (reaction (get-in @db [:editor :blocks]))]
     (reaction (map (partial get @blocks) @block-order)))))

;; ----

(register-handler
 :content-editable-input
 (fn [db [_ id event]]
   (let [text-content (.-textContent (.-target event))]
     (assoc-in db [:editor :blocks id :block/body] text-content))))

;; ----

(defn text-node [id attributes body]
  [:p {:contentEditable true
       :on-input (handle-input id)}
   (styles->spans body attributes)])

;; (for [[[start end] styles] attributes]
;;   ^{:key [id start end]} [:span {:style (styles-from-attributes styles)} (subs body start end)])

(defn title-node [id attributes body]
  [:h1 {:contentEditable true
        :on-input (handle-input id)} body])

(defn editor
  []
  (let [blocks (subscribe [:visible-blocks])]
    (fn editor-render [_]
      (.table js/console (clj->js @blocks))
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

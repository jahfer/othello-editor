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
   [othello-editor.lib.diff :refer [diff-range]]
   [othello-editor.components.nodes :as nodes])
  (:require-macros
   [reagent.ratom :refer (reaction)]))

(enable-console-print!)

(defn range-sort [[[a _] _] [[b _] _]]
  (compare a b))

(defn active-element [] (.-activeElement js/document))

(defn current-selection []
  (let [range (.getRangeAt (.getSelection js/window) 0)]
    {:start-offset (.-startOffset range) :end-offset (.-endOffset range)}))

(def keydown-blacklist [8 37 38 39 40])

;; ----

(register-sub
 :visible-blocks
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
 :content-editable-input
 [trim-v debug]
 (fn [db [id event]]
   (let [old-body (get-in db [:editor :blocks id :block/body])
         new-body (.-textContent (.-target event))
         range (diff-range old-body new-body)]
     (println range (subs new-body (first range) (inc (second range))))
     (assoc-in db [:editor :blocks id :block/body] new-body))))

(register-handler
 :focus-block
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

(defn buttons
  []
  [:div
   [:button
    {:on-click #(dispatch [:selection/bold (current-selection)])} "Bold"]
   [:button
    {:on-click #(dispatch [:selection/italic (current-selection)])} "Italic"]
   [:button
    {:on-click #(dispatch [:selection/underline (current-selection)])} "Underline"]])

(defn content
  []
  (let [blocks (subscribe [:visible-blocks])]
    (fn editor-render [_]
      [:div
       (doall (for [{type       :block/type
                     attributes :block/attributes
                     id         :block/id
                     body       :block/body
                     :as node} @blocks]
                (condp = type
                  :block-type/title ^{:key id} [nodes/title-node id attributes body]
                  :block-type/text  ^{:key id} [nodes/text-node  id attributes body]
                  [:p "???"])))])))

(defn editor
  []
  [:div
   [buttons]
   [content]])

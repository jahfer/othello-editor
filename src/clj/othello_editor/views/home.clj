(ns othello-editor.views.home
  (:require [hiccup.core :as hiccup]))

(def index
  (hiccup/html
   [:div#app
    [:script {:src "js/index.js"}]]))

;; (def index
;;   (hiccup/html
;;    [:h1 "Hello world"]
;;    [:button#btn2 {:type "button"} "chsk-send! (with reply)"]
;;    [:hr]
;;    [:h2 "Login with a user-id"]
;;    [:p  "The server can use this id to send events to *you* specifically."]
;;    [:p [:input#input-login {:type :text :placeholder "User-id"}]
;;     [:button#btn-login {:type "button"} "Secure login!"]]
;;    [:script {:src "js/index.js"}]))

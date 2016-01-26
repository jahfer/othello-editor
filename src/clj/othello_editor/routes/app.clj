(ns othello-editor.routes.app
  (:require
   [taoensso.timbre :as timbre :refer (tracef debugf infof warnf errorf)]
   [compojure.core :as comp :refer (GET POST defroutes)]
   [othello-editor.views.home :as home]))

(defn home-handler [req] home/index)

(defn login! [req]
  (let [{:keys [session params]} req
        {:keys [user-id]} params]
    (debugf "Login request: %s" params)
    {:status 200 :session (assoc session :uid user-id)}))

(defroutes routes
  (GET "/" req (home-handler req))
  (POST "/login" req (login! req)))

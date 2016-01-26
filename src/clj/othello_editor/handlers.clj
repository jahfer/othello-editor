(ns othello-editor.handlers
  (:require
   [clojure.string :as str]
   [ring.middleware.defaults :refer [site-defaults]]
   [compojure.core :as comp :refer (defroutes GET POST)]
   [compojure.route :as route]
   [clojure.core.async :as async :refer (<! <!! >! >!! put! chan go go-loop)]
   [taoensso.timbre :as timbre :refer (tracef debugf infof warnf errorf)]
   [taoensso.sente :as sente]
   [org.httpkit.server :as http-kit]
   [reloaded.repl :refer [system]]
   ;; routes
   [othello-editor.routes.app :as app]
   [othello-editor.routes.ws :as ws]))

(sente/set-logging-level! :debug)

(defroutes app-routes
  ws/routes
  app/routes)

(def ring-handler
  (let [ring-defaults-config
        (-> site-defaults
            (assoc-in [:static :resources] "/public")
            (assoc-in [:security :anti-forgery]
                      {:read-token (fn [req] (-> req :params :csrf-token))}))]
    (ring.middleware.defaults/wrap-defaults app-routes ring-defaults-config)))

(def event-handler ws/event-msg-handler*)

;; (defn start-broadcaster! []
;;   (go-loop [i 0]
;;     (<! (async/timeout 10000))
;;     (println (format "Broadcasting server>user: %s" @(:connected-uids (:sente system))))
;;     (doseq [uid (:any @(:connected-uids (:sente system)))]
;;       ((:chsk-send! (:sente system)) uid
;;        [:some/broadcast
;;         {:what-is-this "A broadcast pushed from server"
;;          :how-often "every 10 seconds"
;;          :to-whom uid
;;          :i i}]))
;;     (recur (inc i))))

;; (defn start! []
;;   (start-broadcaster!))

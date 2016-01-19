(ns othello-editor.handlers
  (:require
   [clojure.string :as str]
   [ring.middleware.defaults :refer [site-defaults]]
   [compojure.core :as comp :refer (defroutes GET POST)]
   [compojure.route :as route]
   [hiccup.core :as hiccup]
   [clojure.core.async :as async :refer (<! <!! >! >!! put! chan go go-loop)]
   [taoensso.timbre :as timbre :refer (tracef debugf infof warnf errorf)]
   [taoensso.sente :as sente]
   [org.httpkit.server :as http-kit]
   [reloaded.repl :refer [system]]))

(sente/set-logging-level! :info)

(defn home-handler [req]
  (hiccup/html
   [:h1 "Hello world"]
   [:button#btn2 {:type "button"} "chsk-send! (with reply)"]
   [:hr]
   [:h2 "Login with a user-id"]
   [:p  "The server can use this id to send events to *you* specifically."]
   [:p [:input#input-login {:type :text :placeholder "User-id"}]
    [:button#btn-login {:type "button"} "Secure login!"]]
   [:script {:src "main.js"}]))

(defn login!
  [ring-request]
  (let [{:keys [session params]} ring-request
        {:keys [user-id]} params]
    (debugf "Login request: %s" params)
    {:status 200 :session (assoc session :uid user-id)}))

(defroutes app-routes
  (GET "/" req (home-handler req))
  (GET "/chsk" req ((:ring-ajax-get-or-ws-handshake (:sente system)) req))
  (POST "/chsk" req ((:ring-ajax-post (:sente system)) req))
  (POST "/login" req (login! req))
  (route/not-found (hiccup/html [:h1 "Page not found"])))

(def ring-handler
  (let [ring-defaults-config
        (-> site-defaults
            (assoc-in [:static :resources] "/")
            (assoc-in [:security :anti-forgery]
                      {:read-token (fn [req] (-> req :params :csrf-token))}))]
    (ring.middleware.defaults/wrap-defaults app-routes ring-defaults-config)))

(defmulti event-msg-handler :id)
(defn event-msg-handler* [{:as ev-msg :keys [id ?data event]}]
  (debugf "Event: %s" event)
  (event-msg-handler ev-msg))

(defmethod event-msg-handler :default
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  (let [session (:session ring-req)
        uid (:uid session)]
    (infof "Unhandled event: %s" event)
    (when ?reply-fn
      (?reply-fn {:unmatched-event-as-echoed-from-server event}))))

(defmethod event-msg-handler :chsk/ws-ping [ev-msg])
(defmethod event-msg-handler :chsk/uidport-open [ev-msg])
(defmethod event-msg-handler :chsk/uidport-close [ev-msg])

(defn start-broadcaster! []
  (go-loop [i 0]
    (<! (async/timeout 10000))
    (println (format "Broadcasting server>user: %s" @(:connected-uids (:sente system))))
    (doseq [uid (:any @(:connected-uids (:sente system)))]
      ((:chsk-send! (:sente system)) uid
       [:some/broadcast
        {:what-is-this "A broadcast pushed from server"
         :how-often "every 10 seconds"
         :to-whom uid
         :i i}]))
    (recur (inc i))))

(defn start! []
  (start-broadcaster!))

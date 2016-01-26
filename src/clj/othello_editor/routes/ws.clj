(ns othello-editor.routes.ws
  (:require
   [reloaded.repl :refer [system]]
   [compojure.core :as comp :refer (GET POST defroutes)]
   [taoensso.timbre :as timbre :refer (tracef debugf infof warnf errorf)]))

(defroutes routes
  (comp/context "/ws" []
    (GET "/chsk" req ((:ring-ajax-get-or-ws-handshake (:sente system)) req))
    (POST "/chsk" req ((:ring-ajax-post (:sente system)) req))))

(defmulti event-msg-handler :id)
(defn event-msg-handler* [{:as ev-msg :keys [id ?data event]}]
  (debugf "Event: %s" event)
  (event-msg-handler ev-msg))

(defmethod event-msg-handler :default
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  (let [session (:session ring-req)
        uid (:uid session)]
    (warnf "Unhandled event: %s" event)
    (when ?reply-fn
      (?reply-fn {:unhandled-event event}))))

(defmethod event-msg-handler :chsk/ws-ping [ev-msg])
(defmethod event-msg-handler :chsk/uidport-open [ev-msg])
(defmethod event-msg-handler :chsk/uidport-close [ev-msg])

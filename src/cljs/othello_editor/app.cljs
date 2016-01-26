(ns othello-editor.app
  (:require [cljs.core.async :as async :refer (<! >! put! chan)]
            [clojure.string :as str]
            [clojure.string :as string]
            [reagent.core :as reagent]
            [re-frame.core :refer [register-handler
                          path
                          register-sub
                          dispatch
                          dispatch-sync
                                   subscribe]]
            [taoensso.encore :as enc :refer (tracef debugf infof warnf errorf)]
            [taoensso.sente :as sente :refer (cb-success?)]
            [taoensso.sente.packers.transit :as sente-transit])
  (:require-macros
   [cljs.core.async.macros :as acyncm :refer (go go-loop)]
   [reagent.ratom :refer (reaction)]))

(def initial-state {:counter 1 :title "Hello"})

;; handlers
(register-handler
 :initialize
 (fn [db _]
   (merge db initial-state)))

(register-handler
 :inc
 (fn [db _]
   (update db :counter inc)))

;; subscription handlers
(register-sub
 :inc
 (fn [db _]
   (reaction (:counter @db))))

;; view components
(defn counter
  []
  (let [count (subscribe [:inc])]
    (fn counter-render [_]
      [:div
       [:p (str/join ["The counter is currently at " @count])]
       [:button {:on-click #(dispatch [:inc])} "Click"]])))

(defn root
  []
  [:div
   [:h1 "Hello!"]
   [counter]])

;; public interface
(defn run
  []
  (dispatch-sync [:initialize])
  (reagent/render [root]
                  (js/document.getElementById "app")))

;; old stuff
;; (sente/set-logging-level! :debug)
;; (def packer (sente-transit/get-flexi-packer :edn))

;; (let [{:keys [chsk ch-recv send-fn state]} (sente/make-channel-socket! "/ws/chsk" {:type :auto})]
;;   (def chsk chsk)
;;   (def ch-chsk ch-recv)
;;   (def chsk-send! send-fn)
;;   (def chsk-state state))

;; (defmulti event-msg-handler :id)
;; (defn event-msg-handler* [{:as ev-msg :keys [id ?data event]}]
;;   (debugf "Event: %s" event)
;;   (event-msg-handler ev-msg))

;; (defmethod event-msg-handler :default
;;   [{:as ev-msg :keys [event]}]
;;   (infof "Unhandled event: %s" event))

;; (defmethod event-msg-handler :chsk/state
;;   [{:as ev-msg :keys [?data]}]
;;   (if (= ?data {:first-open? true})
;;     (debugf "Channel socket successfully established!")
;;     (debugf "Channel socket state change: %s" ?data)))

;; (defmethod event-msg-handler :chsk/recv
;;   [{:as ev-msg :keys [?data]}]
;;   (infof "Push event from server: %s" ?data))

;; (defmethod event-msg-handler :chsk/handshake
;;   [{:as ev-msg :keys [?data]}]
;;   (let [[?uid ?csrf-token ?handshake-data] ?data]
;;     (debugf "Handshake: %s" ?data)))

;; (when-let [target-el (.getElementById js/document "btn2")]
;;   (.addEventListener target-el "click"
;;                      (fn [ev]
;;                        (debugf "Button 2 was clicked (will receive reply from server)")
;;                        (chsk-send! [:example/button2 {:had-a-callback? "indeed"}] 5000
;;                                    (fn [cb-reply] (debugf "Callback reply: %s" cb-reply))))))

;; (when-let [target-el (.getElementById js/document "btn-login")]
;;   (.addEventListener target-el "click"
;;                      (fn [ev]
;;                        (let [user-id (.-value (.getElementById js/document "input-login"))]
;;                          (if (str/blank? user-id)
;;                            (js/alert "Please enter a user-id first")
;;                            (do
;;                              (debugf "Logging in with user-id %s" user-id)
;;                              (sente/ajax-call "/login"
;;                                               {:method :post
;;                                                :params {:user-id    (str user-id)
;;                                                         :csrf-token (:csrf-token @chsk-state)}}
;;                                               (fn [ajax-resp]
;;                                                 (debugf "Ajax login response: %s" ajax-resp)
;;                                                 (let [login-successful? true]
;;                                                   (if-not login-successful?
;;                                                     (debugf "Login failed")
;;                                                     (do
;;                                                       (debugf "Login successful")
;;                                                       (sente/chsk-reconnect! chsk))))))))))))

;; (def router_ (atom nil))
;; (defn stop-router! [] (when-let [stop-f @router_] (stop-f)))
;; (defn start-router! []
;;   (stop-router!)
;;   (reset! router_ (sente/start-chsk-router! ch-chsk event-msg-handler*)))

;; (defn start! [] (start-router!))

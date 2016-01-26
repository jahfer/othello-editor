(ns othello-editor.systems
  (:require
   [othello-editor.handlers :refer [event-handler ring-handler]]
   [taoensso.sente.server-adapters.http-kit :refer (sente-web-server-adapter)]
   [taoensso.sente.packers.transit :as sente-transit]
   [environ.core :refer [env]]
   [system.core :refer [defsystem]]
   (system.components
    [http-kit :refer [new-web-server]]
    [sente :refer [new-channel-sockets]]
    [repl-server :refer [new-repl-server]])))

(defsystem dev-system
  [:web (new-web-server (Integer. (env :http-port)) ring-handler)
   :sente (new-channel-sockets event-handler sente-web-server-adapter)])

(defsystem prod-system
  [:web (new-web-server (Integer. (env :http-port)) ring-handler)
   :sente (new-channel-sockets event-handler sente-web-server-adapter
                               {:packet (sente-transit/get-flexi-packer :edn)})
   :repl-server (new-repl-server (Integer. (env :repl-port)))])

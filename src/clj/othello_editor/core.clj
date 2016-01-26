(ns othello-editor.core
  (:gen-class)
  (:require [othello-editor.systems :refer [prod-system]]
            [reloaded.repl :refer [set-init! go]]))

(defn -main
  "Start a production system, unless a system is passed as argument."
  [& args]
  (let [candidate (first args)
        system (condp #(%1 %2) candidate
                 fn? candidate
                 var? candidate
                 #'prod-system)]
    (set-init! system)
    (go)))

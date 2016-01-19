(set-env!
 :source-paths #{"src/clj" "src/cljs"}
 :dependencies '[[org.clojure/clojure         "1.7.0"]
                 [org.clojure/clojurescript   "1.7.145"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]

                 [adzerk/boot-test            "1.0.5"          :scope "test"]
                 [adzerk/boot-cljs            "1.7.170-2"      :scope "test"]
                 [crisptrutski/boot-cljs-test "0.2.0-SNAPSHOT" :scope "test"]
                 [adzerk/boot-reload          "0.3.1"          :scope "test"]

                 [org.clojure/tools.nrepl     "0.2.10"]
                 [environ                     "1.0.0"]
                 [danielsz/boot-environ       "0.0.4"]

                 [org.danielsz/system         "0.2.0"]
                 [com.taoensso/sente          "1.5.0"]
                 [http-kit                    "2.1.19"]
                 [ring                        "1.4.0-RC1"]
                 [ring/ring-defaults          "0.1.5"]
                 [compojure                   "1.3.4"]
                 [hiccup                      "1.0.5"]

                 [com.cognitect/transit-clj  "0.8.275"]
                 [com.cognitect/transit-cljs "0.8.220"]])

(require '[adzerk.boot-cljs :refer [cljs]]
         '[crisptrutski.boot-cljs-test :refer [test-cljs]]
         '[adzerk.boot-test :refer [test]]
         '[adzerk.boot-reload :refer [reload]]
         '[othello-editor.core :refer :all]
         '[reloaded.repl :refer [init start stop go reset]]
         '[othello-editor.systems :refer [dev-system prod-system]]
         '[danielsz.boot-environ :refer [environ]]
         '[system.boot :refer [system run]])

(task-options!
 pom {:project 'othello-editor
      :version "0.1.0"}
 aot {:namespace '#{othello-editor.core}}
 jar {:main 'othello-editor.core}
 test-cljs {:js-env :phantom})

(deftask dev
  "Run a restartable system in the REPL"
  []
  (comp (environ :env {:http-port 3000})
     (watch)
     (system :sys #'dev-system :auto-start true :hot-reload true :files ["src/clj" "src/cljs"])
     (reload)
     (cljs :source-map true)
     (repl :server true)))

(deftask dev-run
  "Run a dev system from the command line"
  []
  (comp
   (environ :env {:http-port 3000})
   (run :main-namespace "othello-editor.core" :arguments [#'dev-system])
   (wait)))

(deftask prod-run
  []
  (comp (environ :env {:http-port 8000 :repl-port 8001})
     (cljs :optimizations :advanced)
     (run :main-namespace "othello-editor.core" :arguments [#'prod-system])
     (wait)))

(deftask build
  []
  (comp (cljs :optimizations :advanced)
     (aot)
     (pom)
     (uber)
     (jar)))

(deftask testing
  "Profile setup for running tests."
  []
  (set-env! :source-paths #(conj % test))
  identity)

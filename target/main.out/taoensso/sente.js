// Compiled by ClojureScript 1.7.145 {}
goog.provide('taoensso.sente');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('taoensso.encore');
goog.require('taoensso.sente.interfaces');
taoensso.sente.set_logging_level_BANG_ = (function taoensso$sente$set_logging_level_BANG_(level){
return taoensso.encore._STAR_log_level_STAR_ = level;
});
/**
 * Alpha - subject to change.
 *   Simple+lightweight Ajax via Google Closure. Returns nil, or the xhr instance.
 *   Ref. https://developers.google.com/closure/library/docs/xhrio.
 * 
 *   (ajax-call "/my-post-route"
 *  {:method     :post
 *   :params     {:username "Rich Hickey"
 *                :type     "Awesome"}
 *   :headers    {"Foo" "Bar"}
 *   :resp-type  :text
 *   :timeout-ms 7000
 *   :with-credentials? false ; Enable if using CORS (requires xhr v2+)
 *  }
 *  (fn async-callback [resp-map]
 *    (let [{:keys [success? ?status ?error ?content ?content-type]} resp-map]
 *      ;; ?status  - 200, 404, ..., or nil on no response
 *      ;; ?error   - e/o #{:xhr-pool-depleted :exception :http-error :abort
 *      ;;                  :timeout :no-content <http-error-status> nil}
 *      (js/alert (str "Ajax response: " resp-map)))))
 */
taoensso.sente.ajax_call = taoensso.encore.ajax_lite;
taoensso.sente.validate_event = (function taoensso$sente$validate_event(x){
if(!(cljs.core.vector_QMARK_.call(null,x))){
return new cljs.core.Keyword(null,"wrong-type","wrong-type",929556915);
} else {
if(cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null).call(null,cljs.core.count.call(null,x)))){
return new cljs.core.Keyword(null,"wrong-length","wrong-length",1367572281);
} else {
var vec__19075 = x;
var ev_id = cljs.core.nth.call(null,vec__19075,(0),null);
var _ = cljs.core.nth.call(null,vec__19075,(1),null);
if(!((ev_id instanceof cljs.core.Keyword))){
return new cljs.core.Keyword(null,"wrong-id-type","wrong-id-type",-1213601689);
} else {
if(cljs.core.not.call(null,cljs.core.namespace.call(null,ev_id))){
return new cljs.core.Keyword(null,"unnamespaced-id","unnamespaced-id",1976189772);
} else {
return null;

}
}

}
}
});
/**
 * Valid [ev-id ?ev-data] form?
 */
taoensso.sente.event_QMARK_ = (function taoensso$sente$event_QMARK_(x){
return (taoensso.sente.validate_event.call(null,x) == null);
});
taoensso.sente.as_event = (function taoensso$sente$as_event(x){
if(cljs.core.truth_(taoensso.sente.event_QMARK_.call(null,x))){
return x;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-event","chsk/bad-event",-565206930),x], null);
}
});
taoensso.sente.assert_event = (function taoensso$sente$assert_event(x){
var temp__4425__auto__ = taoensso.sente.validate_event.call(null,x);
if(cljs.core.truth_(temp__4425__auto__)){
var _QMARK_err = temp__4425__auto__;
var err_fmt = [cljs.core.str((function (){var G__19077 = (((_QMARK_err instanceof cljs.core.Keyword))?_QMARK_err.fqn:null);
switch (G__19077) {
case "wrong-type":
return "Malformed event (wrong type).";

break;
case "wrong-length":
return "Malformed event (wrong length).";

break;
case "wrong-id-type":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "unnamespaced-id":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "else":
return "Malformed event (unknown error).";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(_QMARK_err)].join('')));

}
})()),cljs.core.str(" Event should be of `[ev-id ?ev-data]` form: %s")].join('');
throw cljs.core.ex_info.call(null,taoensso.encore.format.call(null,err_fmt,[cljs.core.str(x)].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"malformed-event","malformed-event",-2090896605),x], null));
} else {
return null;
}
});
taoensso.sente.event_msg_QMARK_ = (function taoensso$sente$event_msg_QMARK_(x){
var and__4902__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__4902__auto__){
var and__4902__auto____$1 = taoensso.encore.keys_EQ_.call(null,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null));
if(cljs.core.truth_(and__4902__auto____$1)){
var map__19081 = x;
var map__19081__$1 = ((((!((map__19081 == null)))?((((map__19081.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19081.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19081):map__19081);
var ch_recv = cljs.core.get.call(null,map__19081__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__19081__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__19081__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.call(null,map__19081__$1,new cljs.core.Keyword(null,"event","event",301435442));
var and__4902__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(cljs.core.truth_(and__4902__auto____$2)){
var and__4902__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__4902__auto____$3){
var and__4902__auto____$4 = taoensso.encore.atom_QMARK_.call(null,state);
if(cljs.core.truth_(and__4902__auto____$4)){
return taoensso.sente.event_QMARK_.call(null,event);
} else {
return and__4902__auto____$4;
}
} else {
return and__4902__auto____$3;
}
} else {
return and__4902__auto____$2;
}
} else {
return and__4902__auto____$1;
}
} else {
return and__4902__auto__;
}
});
/**
 * Note that cb reply need _not_ be `event` form!
 */
taoensso.sente.cb_success_QMARK_ = (function taoensso$sente$cb_success_QMARK_(cb_reply_clj){
return cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264),null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439),null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489),null], null), null).call(null,cb_reply_clj));
});
/**
 * pstr->clj
 */
taoensso.sente.unpack_STAR_ = (function taoensso$sente$unpack_STAR_(packer,pstr){
try{return taoensso.sente.interfaces.unpack.call(null,packer,taoensso.encore.hcond.call(null,false,"taoensso.sente",215,(new cljs.core.Delay((function (){
return pstr;
}),null)),new cljs.core.Symbol(null,"pstr","pstr",221763868,null),cljs.core.string_QMARK_,new cljs.core.Symbol(null,"string?","string?",-1129175764,null)));
}catch (e19084){var t = e19084;
taoensso.encore.debugf.call(null,"Bad package: %s (%s)",pstr,t);

throw t;
}});
taoensso.sente.with__QMARK_meta = (function taoensso$sente$with__QMARK_meta(x,_QMARK_m){
if(cljs.core.seq.call(null,_QMARK_m)){
return cljs.core.with_meta.call(null,x,_QMARK_m);
} else {
return x;
}
});
/**
 * clj->prefixed-pstr
 */
taoensso.sente.pack_STAR_ = (function taoensso$sente$pack_STAR_(var_args){
var args19085 = [];
var len__5972__auto___19088 = arguments.length;
var i__5973__auto___19089 = (0);
while(true){
if((i__5973__auto___19089 < len__5972__auto___19088)){
args19085.push((arguments[i__5973__auto___19089]));

var G__19090 = (i__5973__auto___19089 + (1));
i__5973__auto___19089 = G__19090;
continue;
} else {
}
break;
}

var G__19087 = args19085.length;
switch (G__19087) {
case 3:
return taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19085.length)].join('')));

}
});

taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (packer,_QMARK_packer_meta,clj){
return [cljs.core.str("-"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,clj,_QMARK_packer_meta)))].join('');
});

taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (packer,_QMARK_packer_meta,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
return [cljs.core.str("+"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,wrapped_clj,_QMARK_packer_meta)))].join('');
});

taoensso.sente.pack_STAR_.cljs$lang$maxFixedArity = 4;
taoensso.sente.pack = (function taoensso$sente$pack(var_args){
var args__5979__auto__ = [];
var len__5972__auto___19093 = arguments.length;
var i__5973__auto___19094 = (0);
while(true){
if((i__5973__auto___19094 < len__5972__auto___19093)){
args__5979__auto__.push((arguments[i__5973__auto___19094]));

var G__19095 = (i__5973__auto___19094 + (1));
i__5973__auto___19094 = G__19095;
continue;
} else {
}
break;
}

var argseq__5980__auto__ = ((((0) < args__5979__auto__.length))?(new cljs.core.IndexedSeq(args__5979__auto__.slice((0)),(0))):null);
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(argseq__5980__auto__);
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var pstr = cljs.core.apply.call(null,taoensso.sente.pack_STAR_,args);
taoensso.encore.tracef.call(null,"Packing: %s -> %s",args,pstr);

return pstr;
});

taoensso.sente.pack.cljs$lang$maxFixedArity = (0);

taoensso.sente.pack.cljs$lang$applyTo = (function (seq19092){
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19092));
});
/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
taoensso.encore.hcond.call(null,false,"taoensso.sente",null,(new cljs.core.Delay((function (){
return prefixed_pstr;
}),null)),new cljs.core.Symbol(null,"prefixed-pstr","prefixed-pstr",-515747107,null),cljs.core.string_QMARK_,new cljs.core.Symbol(null,"string?","string?",-1129175764,null));


var prefix = taoensso.encore.substr.call(null,prefixed_pstr,(0),(1));
var pstr = taoensso.encore.substr.call(null,prefixed_pstr,(1));
var clj = taoensso.sente.unpack_STAR_.call(null,packer,pstr);
var wrapped_QMARK_ = (function (){var G__19099 = prefix;
switch (G__19099) {
case "-":
return false;

break;
case "+":
return true;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(prefix)].join('')));

}
})();
var vec__19098 = (cljs.core.truth_(wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.call(null,vec__19098,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__19098,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,(0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.encore.tracef.call(null,"Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});

/**
 * @interface
 */
taoensso.sente.IChSocket = function(){};

/**
 * Implementation detail.
 */
taoensso.sente.chsk_init_BANG_ = (function taoensso$sente$chsk_init_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$chsk_init_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$chsk_init_BANG_$arity$1(chsk);
} else {
var x__5569__auto__ = (((chsk == null))?null:chsk);
var m__5570__auto__ = (taoensso.sente.chsk_init_BANG_[goog.typeOf(x__5569__auto__)]);
if(!((m__5570__auto__ == null))){
return m__5570__auto__.call(null,chsk);
} else {
var m__5570__auto____$1 = (taoensso.sente.chsk_init_BANG_["_"]);
if(!((m__5570__auto____$1 == null))){
return m__5570__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-init!",chsk);
}
}
}
});

/**
 * Kills socket, stops auto-reconnects.
 */
taoensso.sente.chsk_destroy_BANG_ = (function taoensso$sente$chsk_destroy_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1(chsk);
} else {
var x__5569__auto__ = (((chsk == null))?null:chsk);
var m__5570__auto__ = (taoensso.sente.chsk_destroy_BANG_[goog.typeOf(x__5569__auto__)]);
if(!((m__5570__auto__ == null))){
return m__5570__auto__.call(null,chsk);
} else {
var m__5570__auto____$1 = (taoensso.sente.chsk_destroy_BANG_["_"]);
if(!((m__5570__auto____$1 == null))){
return m__5570__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-destroy!",chsk);
}
}
}
});

/**
 * Drops connection, allows auto-reconnect. Useful for reauthenticating after login/logout.
 */
taoensso.sente.chsk_reconnect_BANG_ = (function taoensso$sente$chsk_reconnect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1(chsk);
} else {
var x__5569__auto__ = (((chsk == null))?null:chsk);
var m__5570__auto__ = (taoensso.sente.chsk_reconnect_BANG_[goog.typeOf(x__5569__auto__)]);
if(!((m__5570__auto__ == null))){
return m__5570__auto__.call(null,chsk);
} else {
var m__5570__auto____$1 = (taoensso.sente.chsk_reconnect_BANG_["_"]);
if(!((m__5570__auto____$1 == null))){
return m__5570__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-reconnect!",chsk);
}
}
}
});

/**
 * Implementation detail.
 */
taoensso.sente.chsk_send_BANG__STAR_ = (function taoensso$sente$chsk_send_BANG__STAR_(chsk,ev,opts){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$chsk_send_BANG__STAR_$arity$3 == null)))){
return chsk.taoensso$sente$IChSocket$chsk_send_BANG__STAR_$arity$3(chsk,ev,opts);
} else {
var x__5569__auto__ = (((chsk == null))?null:chsk);
var m__5570__auto__ = (taoensso.sente.chsk_send_BANG__STAR_[goog.typeOf(x__5569__auto__)]);
if(!((m__5570__auto__ == null))){
return m__5570__auto__.call(null,chsk,ev,opts);
} else {
var m__5570__auto____$1 = (taoensso.sente.chsk_send_BANG__STAR_["_"]);
if(!((m__5570__auto____$1 == null))){
return m__5570__auto____$1.call(null,chsk,ev,opts);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-send!*",chsk);
}
}
}
});

/**
 * Sends `[ev-id ev-?data :as event]`, returns true on apparent success.
 */
taoensso.sente.chsk_send_BANG_ = (function taoensso$sente$chsk_send_BANG_(var_args){
var args19101 = [];
var len__5972__auto___19104 = arguments.length;
var i__5973__auto___19105 = (0);
while(true){
if((i__5973__auto___19105 < len__5972__auto___19104)){
args19101.push((arguments[i__5973__auto___19105]));

var G__19106 = (i__5973__auto___19105 + (1));
i__5973__auto___19105 = G__19106;
continue;
} else {
}
break;
}

var G__19103 = args19101.length;
switch (G__19103) {
case 2:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19101.length)].join('')));

}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.encore.tracef.call(null,"Chsk send: (%s) %s",cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev);

return taoensso.sente.chsk_send_BANG__STAR_.call(null,chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event.call(null,x);

if(cljs.core.truth_((function (){var or__4914__auto__ = ((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null));
if(or__4914__auto__){
return or__4914__auto__;
} else {
return taoensso.encore.nneg_int_QMARK_.call(null,_QMARK_timeout_ms);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(taoensso.encore.format.call(null,"cb requires a timeout; timeout-ms should be a +ive integer: %s",_QMARK_timeout_ms)),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"?timeout-ms","?timeout-ms",-651193632,null)),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null))),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol("enc","nneg-int?","enc/nneg-int?",803640858,null),new cljs.core.Symbol(null,"?timeout-ms","?timeout-ms",-651193632,null))))))].join('')));
}

if(cljs.core.truth_((function (){var or__4914__auto__ = (_QMARK_cb == null);
if(or__4914__auto__){
return or__4914__auto__;
} else {
var or__4914__auto____$1 = cljs.core.ifn_QMARK_.call(null,_QMARK_cb);
if(or__4914__auto____$1){
return or__4914__auto____$1;
} else {
return taoensso.encore.chan_QMARK_.call(null,_QMARK_cb);
}
}
})())){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(taoensso.encore.format.call(null,"cb should be nil, an ifn, or a channel: %s",cljs.core.type.call(null,_QMARK_cb))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null)),cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null)),cljs.core.list(new cljs.core.Symbol("enc","chan?","enc/chan?",1377166,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null)))))].join('')));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function taoensso$sente$pull_unused_cb_fn_BANG_(cbs_waiting_,_QMARK_cb_uuid){
var temp__4425__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4425__auto__)){
var cb_uuid = temp__4425__auto__;
return taoensso.encore.swap_in_BANG_.call(null,cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid], null),((function (cb_uuid,temp__4425__auto__){
return (function (_QMARK_f){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),_QMARK_f);
});})(cb_uuid,temp__4425__auto__))
);
} else {
return null;
}
});
taoensso.sente.merge_GT_chsk_state_BANG_ = (function taoensso$sente$merge_GT_chsk_state_BANG_(p__19108,merge_state){
var map__19112 = p__19108;
var map__19112__$1 = ((((!((map__19112 == null)))?((((map__19112.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19112.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19112):map__19112);
var chsk = map__19112__$1;
var chs = cljs.core.get.call(null,map__19112__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var state_ = cljs.core.get.call(null,map__19112__$1,new cljs.core.Keyword(null,"state_","state_",957667102));
var vec__19114 = taoensso.encore.swap_in_BANG_.call(null,state_,cljs.core.PersistentVector.EMPTY,((function (map__19112,map__19112__$1,chsk,chs,state_){
return (function (old_state){
var new_state = cljs.core.merge.call(null,old_state,merge_state);
var new_state__$1 = ((cljs.core.not.call(null,(function (){var and__4902__auto__ = new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116).cljs$core$IFn$_invoke$arity$1(old_state);
if(cljs.core.truth_(and__4902__auto__)){
var and__4902__auto____$1 = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state);
if(cljs.core.truth_(and__4902__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(old_state));
} else {
return and__4902__auto____$1;
}
} else {
return and__4902__auto__;
}
})()))?new_state:cljs.core.assoc.call(null,cljs.core.dissoc.call(null,new_state,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116)),new cljs.core.Keyword(null,"requested-reconnect?","requested-reconnect?",-1504983666),true));
return taoensso.encore.swapped.call(null,new_state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$1], null));
});})(map__19112,map__19112__$1,chsk,chs,state_))
);
var old_state = cljs.core.nth.call(null,vec__19114,(0),null);
var new_state = cljs.core.nth.call(null,vec__19114,(1),null);
if(cljs.core.not_EQ_.call(null,old_state,new_state)){
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(chs),new_state);

return new_state;
} else {
return null;
}
});
/**
 * Experimental, undocumented. Allows a core.async channel to be provided
 *   instead of a cb-fn. The channel will receive values of form
 *   [<event-id>.cb <reply>].
 */
taoensso.sente.cb_chan_as_fn = (function taoensso$sente$cb_chan_as_fn(_QMARK_cb,ev){
if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb))){
return _QMARK_cb;
} else {
taoensso.encore.hcond.call(null,false,"taoensso.sente",null,(new cljs.core.Delay((function (){
return _QMARK_cb;
}),null)),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null),taoensso.encore.chan_QMARK_,new cljs.core.Symbol("enc","chan?","enc/chan?",1377166,null));


taoensso.sente.assert_event.call(null,ev);

var vec__19116 = ev;
var ev_id = cljs.core.nth.call(null,vec__19116,(0),null);
var _ = cljs.core.nth.call(null,vec__19116,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__19116,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(taoensso.encore.fq_name.call(null,ev_id)),cljs.core.str(".cb")].join('')),reply], null));
});
;})(vec__19116,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.encore.tracef.call(null,"receive-buffered-evs!: %s",clj);

var buffered_evs = taoensso.encore.hcond.call(null,false,"taoensso.sente",739,(new cljs.core.Delay((function (){
return clj;
}),null)),new cljs.core.Symbol(null,"clj","clj",980036099,null),cljs.core.vector_QMARK_,new cljs.core.Symbol(null,"vector?","vector?",-61367869,null));
var seq__19121 = cljs.core.seq.call(null,buffered_evs);
var chunk__19122 = null;
var count__19123 = (0);
var i__19124 = (0);
while(true){
if((i__19124 < count__19123)){
var ev = cljs.core._nth.call(null,chunk__19122,i__19124);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__19125 = seq__19121;
var G__19126 = chunk__19122;
var G__19127 = count__19123;
var G__19128 = (i__19124 + (1));
seq__19121 = G__19125;
chunk__19122 = G__19126;
count__19123 = G__19127;
i__19124 = G__19128;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__19121);
if(temp__4425__auto__){
var seq__19121__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19121__$1)){
var c__5717__auto__ = cljs.core.chunk_first.call(null,seq__19121__$1);
var G__19129 = cljs.core.chunk_rest.call(null,seq__19121__$1);
var G__19130 = c__5717__auto__;
var G__19131 = cljs.core.count.call(null,c__5717__auto__);
var G__19132 = (0);
seq__19121 = G__19129;
chunk__19122 = G__19130;
count__19123 = G__19131;
i__19124 = G__19132;
continue;
} else {
var ev = cljs.core.first.call(null,seq__19121__$1);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__19133 = cljs.core.next.call(null,seq__19121__$1);
var G__19134 = null;
var G__19135 = (0);
var G__19136 = (0);
seq__19121 = G__19133;
chunk__19122 = G__19134;
count__19123 = G__19135;
i__19124 = G__19136;
continue;
}
} else {
return null;
}
}
break;
}
});
taoensso.sente.handle_when_handshake_BANG_ = (function taoensso$sente$handle_when_handshake_BANG_(chsk,chs,clj){
var handshake_QMARK_ = (cljs.core.vector_QMARK_.call(null,clj)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,clj),new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686)));
taoensso.encore.tracef.call(null,"handle-when-handshake (%s): %s",((handshake_QMARK_)?new cljs.core.Keyword(null,"handshake","handshake",68079331):new cljs.core.Keyword(null,"non-handshake","non-handshake",576986062)),clj);

if(handshake_QMARK_){
var vec__19139 = clj;
var _ = cljs.core.nth.call(null,vec__19139,(0),null);
var vec__19140 = cljs.core.nth.call(null,vec__19139,(1),null);
var _QMARK_uid = cljs.core.nth.call(null,vec__19140,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__19140,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__19140,(2),null);
var handshake_ev = vec__19139;
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,_QMARK_csrf_token))){
taoensso.encore.warnf.call(null,"SECURITY WARNING: no CSRF token available for use by Sente");
} else {
}

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),_QMARK_csrf_token], null));

taoensso.sente.assert_event.call(null,handshake_ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(chs),handshake_ev);

return new cljs.core.Keyword(null,"handled","handled",1889700151);
} else {
return null;
}
});
taoensso.sente.set_exp_backoff_timeout_BANG_ = (function taoensso$sente$set_exp_backoff_timeout_BANG_(var_args){
var args__5979__auto__ = [];
var len__5972__auto___19145 = arguments.length;
var i__5973__auto___19146 = (0);
while(true){
if((i__5973__auto___19146 < len__5972__auto___19145)){
args__5979__auto__.push((arguments[i__5973__auto___19146]));

var G__19147 = (i__5973__auto___19146 + (1));
i__5973__auto___19146 = G__19147;
continue;
} else {
}
break;
}

var argseq__5980__auto__ = ((((1) < args__5979__auto__.length))?(new cljs.core.IndexedSeq(args__5979__auto__.slice((1)),(0))):null);
return taoensso.sente.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5980__auto__);
});

taoensso.sente.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,p__19143){
var vec__19144 = p__19143;
var nattempt = cljs.core.nth.call(null,vec__19144,(0),null);
return window.setTimeout(nullary_f,taoensso.encore.exp_backoff.call(null,(function (){var or__4914__auto__ = nattempt;
if(cljs.core.truth_(or__4914__auto__)){
return or__4914__auto__;
} else {
return (0);
}
})()));
});

taoensso.sente.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq19141){
var G__19142 = cljs.core.first.call(null,seq19141);
var seq19141__$1 = cljs.core.next.call(null,seq19141);
return taoensso.sente.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19142,seq19141__$1);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChWebSocket = (function (client_id,url,chs,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,nattempt_,cbs_waiting_,state_,packer,__meta,__extmap,__hash){
this.client_id = client_id;
this.url = url;
this.chs = chs;
this.socket_ = socket_;
this.kalive_ms = kalive_ms;
this.kalive_timer_ = kalive_timer_;
this.kalive_due_QMARK__ = kalive_due_QMARK__;
this.nattempt_ = nattempt_;
this.cbs_waiting_ = cbs_waiting_;
this.state_ = state_;
this.packer = packer;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5528__auto__,k__5529__auto__){
var self__ = this;
var this__5528__auto____$1 = this;
return cljs.core._lookup.call(null,this__5528__auto____$1,k__5529__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5530__auto__,k19149,else__5531__auto__){
var self__ = this;
var this__5530__auto____$1 = this;
var G__19151 = (((k19149 instanceof cljs.core.Keyword))?k19149.fqn:null);
switch (G__19151) {
case "client-id":
return self__.client_id;

break;
case "kalive-ms":
return self__.kalive_ms;

break;
case "nattempt_":
return self__.nattempt_;

break;
case "packer":
return self__.packer;

break;
case "chs":
return self__.chs;

break;
case "socket_":
return self__.socket_;

break;
case "url":
return self__.url;

break;
case "kalive-due?_":
return self__.kalive_due_QMARK__;

break;
case "cbs-waiting_":
return self__.cbs_waiting_;

break;
case "kalive-timer_":
return self__.kalive_timer_;

break;
case "state_":
return self__.state_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k19149,else__5531__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5542__auto__,writer__5543__auto__,opts__5544__auto__){
var self__ = this;
var this__5542__auto____$1 = this;
var pr_pair__5545__auto__ = ((function (this__5542__auto____$1){
return (function (keyval__5546__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5543__auto__,cljs.core.pr_writer,""," ","",opts__5544__auto__,keyval__5546__auto__);
});})(this__5542__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5543__auto__,pr_pair__5545__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__5544__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),self__.nattempt_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19148){
var self__ = this;
var G__19148__$1 = this;
return (new cljs.core.RecordIter((0),G__19148__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"packer","packer",66077544)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5526__auto__){
var self__ = this;
var this__5526__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5522__auto__){
var self__ = this;
var this__5522__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5532__auto__){
var self__ = this;
var this__5532__auto____$1 = this;
return (11 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5523__auto__){
var self__ = this;
var this__5523__auto____$1 = this;
var h__5349__auto__ = self__.__hash;
if(!((h__5349__auto__ == null))){
return h__5349__auto__;
} else {
var h__5349__auto____$1 = cljs.core.hash_imap.call(null,this__5523__auto____$1);
self__.__hash = h__5349__auto____$1;

return h__5349__auto____$1;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5524__auto__,other__5525__auto__){
var self__ = this;
var this__5524__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4902__auto__ = other__5525__auto__;
if(cljs.core.truth_(and__4902__auto__)){
var and__4902__auto____$1 = (this__5524__auto____$1.constructor === other__5525__auto__.constructor);
if(and__4902__auto____$1){
return cljs.core.equiv_map.call(null,this__5524__auto____$1,other__5525__auto__);
} else {
return and__4902__auto____$1;
}
} else {
return and__4902__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5537__auto__,k__5538__auto__){
var self__ = this;
var this__5537__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),null,new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__5538__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5537__auto____$1),self__.__meta),k__5538__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5538__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5535__auto__,k__5536__auto__,G__19148){
var self__ = this;
var this__5535__auto____$1 = this;
var pred__19152 = cljs.core.keyword_identical_QMARK_;
var expr__19153 = k__5536__auto__;
if(cljs.core.truth_(pred__19152.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__19153))){
return (new taoensso.sente.ChWebSocket(G__19148,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19152.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__19153))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__19148,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19152.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__19153))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,G__19148,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19152.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__19153))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,G__19148,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19152.call(null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),expr__19153))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,G__19148,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19152.call(null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),expr__19153))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,G__19148,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19152.call(null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),expr__19153))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,G__19148,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19152.call(null,new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),expr__19153))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,G__19148,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19152.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__19153))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,G__19148,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19152.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__19153))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,G__19148,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19152.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__19153))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,G__19148,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5536__auto__,G__19148),null));
}
}
}
}
}
}
}
}
}
}
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5540__auto__){
var self__ = this;
var this__5540__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),self__.nattempt_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5527__auto__,G__19148){
var self__ = this;
var this__5527__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,G__19148,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5533__auto__,entry__5534__auto__){
var self__ = this;
var this__5533__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5534__auto__)){
return cljs.core._assoc.call(null,this__5533__auto____$1,cljs.core._nth.call(null,entry__5534__auto__,(0)),cljs.core._nth.call(null,entry__5534__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5533__auto____$1,entry__5534__auto__);
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_send_BANG__STAR_$arity$3 = (function (chsk,ev,p__19155){
var self__ = this;
var map__19156 = p__19155;
var map__19156__$1 = ((((!((map__19156 == null)))?((((map__19156.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19156.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19156):map__19156);
var opts = map__19156__$1;
var _QMARK_timeout_ms = cljs.core.get.call(null,map__19156__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__19156__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__19156__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var chsk__$1 = this;
taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
taoensso.encore.warnf.call(null,"Chsk send against closed chsk.");

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
return null;
}
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.call(null,(6)):null);
var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,_QMARK_cb_uuid);
var temp__4425__auto___19190 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4425__auto___19190)){
var cb_uuid_19191 = temp__4425__auto___19190;
taoensso.encore.reset_in_BANG_.call(null,self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_19191], null),taoensso.encore.hcond.call(null,false,"taoensso.sente",804,(new cljs.core.Delay(((function (cb_uuid_19191,temp__4425__auto___19190,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__19156,map__19156__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return _QMARK_cb_fn;
});})(cb_uuid_19191,temp__4425__auto___19190,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__19156,map__19156__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),new cljs.core.Symbol(null,"?cb-fn","?cb-fn",-1734331361,null),taoensso.encore.nnil_QMARK_,new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null)));

var temp__4425__auto___19192__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__4425__auto___19192__$1)){
var timeout_ms_19193 = temp__4425__auto___19192__$1;
var c__7440__auto___19194 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7440__auto___19194,timeout_ms_19193,temp__4425__auto___19192__$1,cb_uuid_19191,temp__4425__auto___19190,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__19156,map__19156__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
var f__7441__auto__ = (function (){var switch__7375__auto__ = ((function (c__7440__auto___19194,timeout_ms_19193,temp__4425__auto___19192__$1,cb_uuid_19191,temp__4425__auto___19190,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__19156,map__19156__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (state_19168){
var state_val_19169 = (state_19168[(1)]);
if((state_val_19169 === (1))){
var inst_19158 = cljs.core.async.timeout.call(null,timeout_ms_19193);
var state_19168__$1 = state_19168;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19168__$1,(2),inst_19158);
} else {
if((state_val_19169 === (2))){
var inst_19161 = (state_19168[(7)]);
var inst_19160 = (state_19168[(2)]);
var inst_19161__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
var state_19168__$1 = (function (){var statearr_19170 = state_19168;
(statearr_19170[(8)] = inst_19160);

(statearr_19170[(7)] = inst_19161__$1);

return statearr_19170;
})();
if(cljs.core.truth_(inst_19161__$1)){
var statearr_19171_19195 = state_19168__$1;
(statearr_19171_19195[(1)] = (3));

} else {
var statearr_19172_19196 = state_19168__$1;
(statearr_19172_19196[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19169 === (3))){
var inst_19161 = (state_19168[(7)]);
var inst_19163 = inst_19161.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_19168__$1 = state_19168;
var statearr_19173_19197 = state_19168__$1;
(statearr_19173_19197[(2)] = inst_19163);

(statearr_19173_19197[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19169 === (4))){
var state_19168__$1 = state_19168;
var statearr_19174_19198 = state_19168__$1;
(statearr_19174_19198[(2)] = null);

(statearr_19174_19198[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19169 === (5))){
var inst_19166 = (state_19168[(2)]);
var state_19168__$1 = state_19168;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19168__$1,inst_19166);
} else {
return null;
}
}
}
}
}
});})(c__7440__auto___19194,timeout_ms_19193,temp__4425__auto___19192__$1,cb_uuid_19191,temp__4425__auto___19190,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__19156,map__19156__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
;
return ((function (switch__7375__auto__,c__7440__auto___19194,timeout_ms_19193,temp__4425__auto___19192__$1,cb_uuid_19191,temp__4425__auto___19190,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__19156,map__19156__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function() {
var taoensso$sente$state_machine__7376__auto__ = null;
var taoensso$sente$state_machine__7376__auto____0 = (function (){
var statearr_19178 = [null,null,null,null,null,null,null,null,null];
(statearr_19178[(0)] = taoensso$sente$state_machine__7376__auto__);

(statearr_19178[(1)] = (1));

return statearr_19178;
});
var taoensso$sente$state_machine__7376__auto____1 = (function (state_19168){
while(true){
var ret_value__7377__auto__ = (function (){try{while(true){
var result__7378__auto__ = switch__7375__auto__.call(null,state_19168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7378__auto__;
}
break;
}
}catch (e19179){if((e19179 instanceof Object)){
var ex__7379__auto__ = e19179;
var statearr_19180_19199 = state_19168;
(statearr_19180_19199[(5)] = ex__7379__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7377__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19200 = state_19168;
state_19168 = G__19200;
continue;
} else {
return ret_value__7377__auto__;
}
break;
}
});
taoensso$sente$state_machine__7376__auto__ = function(state_19168){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__7376__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__7376__auto____1.call(this,state_19168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__7376__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__7376__auto____0;
taoensso$sente$state_machine__7376__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__7376__auto____1;
return taoensso$sente$state_machine__7376__auto__;
})()
;})(switch__7375__auto__,c__7440__auto___19194,timeout_ms_19193,temp__4425__auto___19192__$1,cb_uuid_19191,temp__4425__auto___19190,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__19156,map__19156__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
})();
var state__7442__auto__ = (function (){var statearr_19181 = f__7441__auto__.call(null);
(statearr_19181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7440__auto___19194);

return statearr_19181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7442__auto__);
});})(c__7440__auto___19194,timeout_ms_19193,temp__4425__auto___19192__$1,cb_uuid_19191,temp__4425__auto___19190,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__19156,map__19156__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
);

} else {
}
} else {
}

try{cljs.core.deref.call(null,self__.socket_).send(ppstr);

cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,false);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e19182){if((e19182 instanceof Error)){
var e = e19182;
taoensso.encore.errorf.call(null,"Chsk send error: %s",e);

var temp__4425__auto___19201 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4425__auto___19201)){
var cb_uuid_19202 = temp__4425__auto___19201;
var cb_fn_STAR__19203 = (function (){var or__4914__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid_19202);
if(cljs.core.truth_(or__4914__auto__)){
return or__4914__auto__;
} else {
return taoensso.encore.hcond.call(null,false,"taoensso.sente",818,(new cljs.core.Delay(((function (or__4914__auto__,cb_uuid_19202,temp__4425__auto___19201,e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__19156,map__19156__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return _QMARK_cb_fn;
});})(or__4914__auto__,cb_uuid_19202,temp__4425__auto___19201,e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__19156,map__19156__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),new cljs.core.Symbol(null,"?cb-fn","?cb-fn",-1734331361,null),taoensso.encore.nnil_QMARK_,new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null));
}
})();
cb_fn_STAR__19203.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
}

return false;
} else {
throw e19182;

}
}}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116),true], null));

var temp__4425__auto__ = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__4425__auto__)){
var s = temp__4425__auto__;
return s.close((3000),"SENTE_RECONNECT");
} else {
return null;
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064),true], null));

var temp__4425__auto__ = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__4425__auto__)){
var s = temp__4425__auto__;
return s.close((1000),"CLOSE_NORMAL");
} else {
return null;
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_init_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4425__auto__ = (function (){var or__4914__auto__ = (window["WebSocket"]);
if(cljs.core.truth_(or__4914__auto__)){
return or__4914__auto__;
} else {
return (window["MozWebSocket"]);
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var WebSocket = temp__4425__auto__;
((function (WebSocket,temp__4425__auto__,chsk__$1){
return (function taoensso$sente$connect_BANG_(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return null;
} else {
var retry_BANG_ = ((function (WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
var nattempt_STAR_ = cljs.core.swap_BANG_.call(null,self__.nattempt_,cljs.core.inc);
window.clearInterval(cljs.core.deref.call(null,self__.kalive_timer_));

taoensso.encore.warnf.call(null,"Chsk is closed: will try reconnect (%s).",nattempt_STAR_);

return taoensso.sente.set_exp_backoff_timeout_BANG_.call(null,taoensso$sente$connect_BANG_,nattempt_STAR_);
});})(WebSocket,temp__4425__auto__,chsk__$1))
;
var temp__4423__auto__ = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string.call(null,self__.url,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null))));
}catch (e19186){if((e19186 instanceof Error)){
var e = e19186;
taoensso.encore.errorf.call(null,"WebSocket js/Error: %s",e);

return null;
} else {
throw e19186;

}
}})();
if(cljs.core.truth_(temp__4423__auto__)){
var socket = temp__4423__auto__;
return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__19187 = socket;
(G__19187["onerror"] = ((function (G__19187,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1){
return (function (ws_ev){
return taoensso.encore.errorf.call(null,"WebSocket error: %s",ws_ev);
});})(G__19187,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1))
);

(G__19187["onmessage"] = ((function (G__19187,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = (ws_ev["data"]);
var vec__19188 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__19188,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__19188,(1),null);
var or__4914__auto__ = (function (){var and__4902__auto__ = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,self__.chs,clj);
if(cljs.core.truth_(and__4902__auto__)){
return cljs.core.reset_BANG_.call(null,self__.nattempt_,(0));
} else {
return and__4902__auto__;
}
})();
if(cljs.core.truth_(or__4914__auto__)){
return or__4914__auto__;
} else {
var temp__4423__auto____$1 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4423__auto____$1)){
var cb_uuid = temp__4423__auto____$1;
var temp__4423__auto____$2 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__4423__auto____$2)){
var cb_fn = temp__4423__auto____$2;
return cb_fn.call(null,clj);
} else {
return taoensso.encore.warnf.call(null,"Cb reply w/o local cb-fn: %s",clj);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
});})(G__19187,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1))
);

(G__19187["onopen"] = ((function (G__19187,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1){
return (function (_ws_ev){
return cljs.core.reset_BANG_.call(null,self__.kalive_timer_,window.setInterval(((function (G__19187,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,self__.kalive_due_QMARK__))){
taoensso.sente.chsk_send_BANG_.call(null,chsk__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));
} else {
}

return cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,true);
});})(G__19187,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1))
,self__.kalive_ms));
});})(G__19187,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1))
);

(G__19187["onclose"] = ((function (G__19187,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1){
return (function (_ws_ev){
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_BANG_.call(null);
});})(G__19187,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1))
);

return G__19187;
})());
} else {
return retry_BANG_.call(null);
}
}
});})(WebSocket,temp__4425__auto__,chsk__$1))
.call(null);

return chsk__$1;
} else {
return null;
}
});

taoensso.sente.ChWebSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"socket_","socket_",1279482619,null),new cljs.core.Symbol(null,"kalive-ms","kalive-ms",1851265548,null),new cljs.core.Symbol(null,"kalive-timer_","kalive-timer_",-1096022620,null),new cljs.core.Symbol(null,"kalive-due?_","kalive-due?_",1679969599,null),new cljs.core.Symbol(null,"nattempt_","nattempt_",-674239217,null),new cljs.core.Symbol(null,"cbs-waiting_","cbs-waiting_",121502466,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null)], null);
});

taoensso.sente.ChWebSocket.cljs$lang$type = true;

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__5562__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__5562__auto__,writer__5563__auto__){
return cljs.core._write.call(null,writer__5563__auto__,"taoensso.sente/ChWebSocket");
});

taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,url,chs,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,nattempt_,cbs_waiting_,state_,packer){
return (new taoensso.sente.ChWebSocket(client_id,url,chs,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,nattempt_,cbs_waiting_,state_,packer,null,null,null));
});

taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__19150){
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__19150),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__19150),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__19150),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__19150),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021).cljs$core$IFn$_invoke$arity$1(G__19150),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149).cljs$core$IFn$_invoke$arity$1(G__19150),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072).cljs$core$IFn$_invoke$arity$1(G__19150),new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552).cljs$core$IFn$_invoke$arity$1(G__19150),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__19150),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__19150),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__19150),null,cljs.core.dissoc.call(null,G__19150,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"packer","packer",66077544)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAjaxSocket = (function (client_id,url,chs,timeout_ms,ajax_opts,curr_xhr_,state_,packer,__meta,__extmap,__hash){
this.client_id = client_id;
this.url = url;
this.chs = chs;
this.timeout_ms = timeout_ms;
this.ajax_opts = ajax_opts;
this.curr_xhr_ = curr_xhr_;
this.state_ = state_;
this.packer = packer;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5528__auto__,k__5529__auto__){
var self__ = this;
var this__5528__auto____$1 = this;
return cljs.core._lookup.call(null,this__5528__auto____$1,k__5529__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5530__auto__,k19205,else__5531__auto__){
var self__ = this;
var this__5530__auto____$1 = this;
var G__19207 = (((k19205 instanceof cljs.core.Keyword))?k19205.fqn:null);
switch (G__19207) {
case "client-id":
return self__.client_id;

break;
case "url":
return self__.url;

break;
case "chs":
return self__.chs;

break;
case "timeout-ms":
return self__.timeout_ms;

break;
case "ajax-opts":
return self__.ajax_opts;

break;
case "curr-xhr_":
return self__.curr_xhr_;

break;
case "state_":
return self__.state_;

break;
case "packer":
return self__.packer;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k19205,else__5531__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5542__auto__,writer__5543__auto__,opts__5544__auto__){
var self__ = this;
var this__5542__auto____$1 = this;
var pr_pair__5545__auto__ = ((function (this__5542__auto____$1){
return (function (keyval__5546__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5543__auto__,cljs.core.pr_writer,""," ","",opts__5544__auto__,keyval__5546__auto__);
});})(this__5542__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5543__auto__,pr_pair__5545__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__5544__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19204){
var self__ = this;
var G__19204__$1 = this;
return (new cljs.core.RecordIter((0),G__19204__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"packer","packer",66077544)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5526__auto__){
var self__ = this;
var this__5526__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5522__auto__){
var self__ = this;
var this__5522__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5532__auto__){
var self__ = this;
var this__5532__auto____$1 = this;
return (8 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5523__auto__){
var self__ = this;
var this__5523__auto____$1 = this;
var h__5349__auto__ = self__.__hash;
if(!((h__5349__auto__ == null))){
return h__5349__auto__;
} else {
var h__5349__auto____$1 = cljs.core.hash_imap.call(null,this__5523__auto____$1);
self__.__hash = h__5349__auto____$1;

return h__5349__auto____$1;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5524__auto__,other__5525__auto__){
var self__ = this;
var this__5524__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4902__auto__ = other__5525__auto__;
if(cljs.core.truth_(and__4902__auto__)){
var and__4902__auto____$1 = (this__5524__auto____$1.constructor === other__5525__auto__.constructor);
if(and__4902__auto____$1){
return cljs.core.equiv_map.call(null,this__5524__auto____$1,other__5525__auto__);
} else {
return and__4902__auto____$1;
}
} else {
return and__4902__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5537__auto__,k__5538__auto__){
var self__ = this;
var this__5537__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__5538__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5537__auto____$1),self__.__meta),k__5538__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5538__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5535__auto__,k__5536__auto__,G__19204){
var self__ = this;
var this__5535__auto____$1 = this;
var pred__19208 = cljs.core.keyword_identical_QMARK_;
var expr__19209 = k__5536__auto__;
if(cljs.core.truth_(pred__19208.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__19209))){
return (new taoensso.sente.ChAjaxSocket(G__19204,self__.url,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19208.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__19209))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__19204,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19208.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__19209))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,G__19204,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19208.call(null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),expr__19209))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,G__19204,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19208.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__19209))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,G__19204,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19208.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__19209))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.ajax_opts,G__19204,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19208.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__19209))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,G__19204,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19208.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__19209))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,G__19204,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5536__auto__,G__19204),null));
}
}
}
}
}
}
}
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5540__auto__){
var self__ = this;
var this__5540__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5527__auto__,G__19204){
var self__ = this;
var this__5527__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,G__19204,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5533__auto__,entry__5534__auto__){
var self__ = this;
var this__5533__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5534__auto__)){
return cljs.core._assoc.call(null,this__5533__auto____$1,cljs.core._nth.call(null,entry__5534__auto__,(0)),cljs.core._nth.call(null,entry__5534__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5533__auto____$1,entry__5534__auto__);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_send_BANG__STAR_$arity$3 = (function (chsk,ev,p__19211){
var self__ = this;
var map__19212 = p__19211;
var map__19212__$1 = ((((!((map__19212 == null)))?((((map__19212.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19212.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19212):map__19212);
var opts = map__19212__$1;
var _QMARK_timeout_ms = cljs.core.get.call(null,map__19212__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__19212__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__19212__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var chsk__$1 = this;
taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
taoensso.encore.warnf.call(null,"Chsk send against closed chsk.");

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
return null;
}
} else {
taoensso.sente.ajax_call.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),(function (){var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,(cljs.core.truth_(_QMARK_cb_fn)?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):null));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"_","_",1453416199),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)),new cljs.core.Keyword(null,"ppstr","ppstr",1557495252),ppstr], null);
})()], null)),((function (_QMARK_cb_fn,chsk__$1,map__19212,map__19212__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function taoensso$sente$ajax_cb(p__19214){
var map__19218 = p__19214;
var map__19218__$1 = ((((!((map__19218 == null)))?((((map__19218.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19218.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19218):map__19218);
var _QMARK_error = cljs.core.get.call(null,map__19218__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__19218__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
} else {
return null;
}
} else {
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__19220 = taoensso.sente.unpack.call(null,self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.call(null,vec__19220,(0),null);
var _ = cljs.core.nth.call(null,vec__19220,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,resp_clj);
} else {
if(cljs.core.not_EQ_.call(null,resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.encore.warnf.call(null,"Cb reply w/o local cb-fn: %s",resp_clj);
} else {
}
}

return taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}
});})(_QMARK_cb_fn,chsk__$1,map__19212,map__19212__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116),true], null));

var temp__4425__auto__ = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__4425__auto__)){
var x = temp__4425__auto__;
return x.abort();
} else {
return null;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064),true], null));

var temp__4425__auto__ = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__4425__auto__)){
var x = temp__4425__auto__;
return x.abort();
} else {
return null;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_init_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
((function (chsk__$1){
return (function taoensso$sente$async_poll_for_update_BANG_(nattempt){
taoensso.encore.tracef.call(null,"async-poll-for-update!");

if(cljs.core.truth_(new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return null;
} else {
var retry_BANG_ = ((function (chsk__$1){
return (function (){
var nattempt_STAR_ = (nattempt + (1));
taoensso.encore.warnf.call(null,"Chsk is closed: will try reconnect (%s).",nattempt_STAR_);

return taoensso.sente.set_exp_backoff_timeout_BANG_.call(null,cljs.core.partial.call(null,taoensso$sente$async_poll_for_update_BANG_,nattempt_STAR_),nattempt_STAR_);
});})(chsk__$1))
;
return cljs.core.reset_BANG_.call(null,self__.curr_xhr_,taoensso.sente.ajax_call.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"_","_",1453416199),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handshake?","handshake?",-423743093),true], null)))], null)),((function (retry_BANG_,chsk__$1){
return (function taoensso$sente$async_poll_for_update_BANG__$_ajax_cb(p__19228){
var map__19232 = p__19228;
var map__19232__$1 = ((((!((map__19232 == null)))?((((map__19232.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19232.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19232):map__19232);
var _QMARK_error = cljs.core.get.call(null,map__19232__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__19232__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return taoensso$sente$async_poll_for_update_BANG_.call(null,(0));
} else {
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_BANG_.call(null);

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__19234 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__19234,(0),null);
var _ = cljs.core.nth.call(null,vec__19234,(1),null);
var or__4914__auto___19236 = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,self__.chs,clj);
if(cljs.core.truth_(or__4914__auto___19236)){
} else {
var buffered_evs_19237 = clj;
taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs_19237);

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}

return taoensso$sente$async_poll_for_update_BANG_.call(null,(0));
}
});})(retry_BANG_,chsk__$1))
));
}
});})(chsk__$1))
.call(null,(0));

return chsk__$1;
});

taoensso.sente.ChAjaxSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"timeout-ms","timeout-ms",-1900214363,null),new cljs.core.Symbol(null,"ajax-opts","ajax-opts",1122292418,null),new cljs.core.Symbol(null,"curr-xhr_","curr-xhr_",321757831,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null)], null);
});

taoensso.sente.ChAjaxSocket.cljs$lang$type = true;

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__5562__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__5562__auto__,writer__5563__auto__){
return cljs.core._write.call(null,writer__5563__auto__,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,url,chs,timeout_ms,ajax_opts,curr_xhr_,state_,packer){
return (new taoensso.sente.ChAjaxSocket(client_id,url,chs,timeout_ms,ajax_opts,curr_xhr_,state_,packer,null,null,null));
});

taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__19206){
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__19206),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__19206),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__19206),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(G__19206),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__19206),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__19206),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__19206),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__19206),null,cljs.core.dissoc.call(null,G__19206,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"packer","packer",66077544)),null));
});

/**
 * (ƒ [path window-location websocket?]) -> server-side chsk route URL string.
 * 
 *  * path       - As provided to client-side `make-channel-socket!` fn
 *                 (usu. "/chsk").
 *  * websocket? - True for WebSocket connections, false for Ajax (long-polling)
 *                 connections.
 *  * window-location - Map with keys:
 *    :href     ; "http://www.example.org:80/foo/bar?q=baz#bang"
 *    :protocol ; "http:" ; Note the :
 *    :hostname ; "example.org"
 *    :host     ; "example.org:80"
 *    :pathname ; "/foo/bar"
 *    :search   ; "?q=baz"
 *    :hash     ; "#bang"
 * 
 *   Note that the *same* URL is used for: WebSockets, POSTs, GETs. Server-side
 *   routes should be configured accordingly.
 */
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__19238,websocket_QMARK_){
var map__19241 = p__19238;
var map__19241__$1 = ((((!((map__19241 == null)))?((((map__19241.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19241.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19241):map__19241);
var window_location = map__19241__$1;
var protocol = cljs.core.get.call(null,map__19241__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var host = cljs.core.get.call(null,map__19241__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.call(null,map__19241__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
return [cljs.core.str(((cljs.core.not.call(null,websocket_QMARK_))?protocol:((cljs.core._EQ_.call(null,protocol,"https:"))?"wss:":"ws:"))),cljs.core.str("//"),cljs.core.str(host),cljs.core.str((function (){var or__4914__auto__ = path;
if(cljs.core.truth_(or__4914__auto__)){
return or__4914__auto__;
} else {
return pathname;
}
})())].join('');
});
/**
 * Returns a map with keys:
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 *           ; May `put!` (inject) arbitrary `event`s to this channel.
 *  :send-fn ; (fn [event & [?timeout-ms ?cb-fn]]) for client>server send.
 *  :state   ; Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
 *  :chsk    ; IChSocket implementer. You can usu. ignore this.
 * 
 *   Common options:
 *  :type         ; e/o #{:auto :ws :ajax}. You'll usually want the default (:auto)
 *  :ws-kalive-ms ; Ping to keep a WebSocket conn alive if no activity w/in given
 *                ; number of milliseconds
 *  :lp-kalive-ms ; Ping to keep a long-polling (Ajax) conn alive ''
 *  :chsk-url-fn  ; Please see `default-chsk-url-fn` for details
 *  :packer       ; :edn (default), or an IPacker implementation (experimental)
 *  :ajax-opts    ; Base opts map provided to `ajax-call`
 */
taoensso.sente.make_channel_socket_BANG_ = (function taoensso$sente$make_channel_socket_BANG_(var_args){
var args__5979__auto__ = [];
var len__5972__auto___19251 = arguments.length;
var i__5973__auto___19252 = (0);
while(true){
if((i__5973__auto___19252 < len__5972__auto___19251)){
args__5979__auto__.push((arguments[i__5973__auto___19252]));

var G__19253 = (i__5973__auto___19252 + (1));
i__5973__auto___19252 = G__19253;
continue;
} else {
}
break;
}

var argseq__5980__auto__ = ((((1) < args__5979__auto__.length))?(new cljs.core.IndexedSeq(args__5979__auto__.slice((1)),(0))):null);
return taoensso.sente.make_channel_socket_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5980__auto__);
});

taoensso.sente.make_channel_socket_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__19245){
var vec__19246 = p__19245;
var map__19247 = cljs.core.nth.call(null,vec__19246,(0),null);
var map__19247__$1 = ((((!((map__19247 == null)))?((((map__19247.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19247.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19247):map__19247);
var opts = map__19247__$1;
var type = cljs.core.get.call(null,map__19247__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var recv_buf_or_n = cljs.core.get.call(null,map__19247__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));
var ws_kalive_ms = cljs.core.get.call(null,map__19247__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),(25000));
var lp_timeout_ms = cljs.core.get.call(null,map__19247__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),(25000));
var chsk_url_fn = cljs.core.get.call(null,map__19247__$1,new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294),taoensso.sente.default_chsk_url_fn);
var packer = cljs.core.get.call(null,map__19247__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var client_id = cljs.core.get.call(null,map__19247__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__4914__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4914__auto__)){
return or__4914__auto__;
} else {
return taoensso.encore.uuid_str.call(null);
}
})());
var ajax_opts = cljs.core.get.call(null,map__19247__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var _deprecated_more_opts = cljs.core.nth.call(null,vec__19246,(1),null);
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.sente",null,(new cljs.core.Delay(((function (vec__19246,map__19247,map__19247__$1,opts,type,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,chsk_url_fn,packer,client_id,ajax_opts,_deprecated_more_opts){
return (function (){
return type;
});})(vec__19246,map__19247,map__19247__$1,opts,type,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,chsk_url_fn,packer,client_id,ajax_opts,_deprecated_more_opts))
,null)),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)], null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)], null),new cljs.core.Symbol(null,"type","type",-1480165421,null))))].join('')));
}

if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.sente",null,(new cljs.core.Delay(((function (vec__19246,map__19247,map__19247__$1,opts,type,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,chsk_url_fn,packer,client_id,ajax_opts,_deprecated_more_opts){
return (function (){
return client_id;
});})(vec__19246,map__19247,map__19247__$1,opts,type,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,chsk_url_fn,packer,client_id,ajax_opts,_deprecated_more_opts))
,null)),new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),taoensso.encore.nblank_str_QMARK_,new cljs.core.Symbol("enc","nblank-str?","enc/nblank-str?",19952870,null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol("enc","nblank-str?","enc/nblank-str?",19952870,null),new cljs.core.Symbol(null,"client-id","client-id",1175909387,null))))].join('')));
}

if(!((_deprecated_more_opts == null))){
taoensso.encore.warnf.call(null,"`make-channel-socket!` fn signature CHANGED with Sente v0.10.0.");
} else {
}

if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.encore.warnf.call(null,":lp-timeout opt has CHANGED; please use :lp-timout-ms.");
} else {
}

var packer__$1 = taoensso.sente.interfaces.coerce_packer.call(null,packer);
var window_location = taoensso.encore.get_window_location.call(null);
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),cljs.core.async.chan.call(null,recv_buf_or_n)], null);
var ever_opened_QMARK__ = cljs.core.atom.call(null,false);
var state_STAR_ = ((function (packer__$1,window_location,private_chs,ever_opened_QMARK__,vec__19246,map__19247,map__19247__$1,opts,type,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,chsk_url_fn,packer,client_id,ajax_opts,_deprecated_more_opts){
return (function (state){
if(cljs.core.truth_((function (){var or__4914__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state));
if(or__4914__auto__){
return or__4914__auto__;
} else {
return cljs.core.deref.call(null,ever_opened_QMARK__);
}
})())){
return state;
} else {
cljs.core.reset_BANG_.call(null,ever_opened_QMARK__,true);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),true);
}
});})(packer__$1,window_location,private_chs,ever_opened_QMARK__,vec__19246,map__19247,map__19247__$1,opts,type,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,chsk_url_fn,packer,client_id,ajax_opts,_deprecated_more_opts))
;
var public_ch_recv = cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),cljs.core.async.map_LT_.call(null,((function (packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,vec__19246,map__19247,map__19247__$1,opts,type,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,chsk_url_fn,packer,client_id,ajax_opts,_deprecated_more_opts){
return (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),state_STAR_.call(null,state)], null);
});})(packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,vec__19246,map__19247,map__19247__$1,opts,type,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,chsk_url_fn,packer,client_id,ajax_opts,_deprecated_more_opts))
,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs)),cljs.core.async.map_LT_.call(null,((function (packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,vec__19246,map__19247,map__19247__$1,opts,type,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,chsk_url_fn,packer,client_id,ajax_opts,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,vec__19246,map__19247,map__19247__$1,opts,type,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,chsk_url_fn,packer,client_id,ajax_opts,_deprecated_more_opts))
,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs))], null));
var chsk = (function (){var or__4914__auto__ = (function (){var and__4902__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ajax","ajax",814345549));
if(and__4902__auto__){
return taoensso.sente.chsk_init_BANG_.call(null,taoensso.sente.map__GT_ChWebSocket.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"state_","state_",957667102)],[client_id,ws_kalive_ms,cljs.core.atom.call(null,(0)),packer__$1,private_chs,cljs.core.atom.call(null,null),chsk_url_fn.call(null,path,window_location,new cljs.core.Keyword(null,"ws","ws",86841443)),cljs.core.atom.call(null,true),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.call(null,null),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064),false], null))])));
} else {
return and__4902__auto__;
}
})();
if(cljs.core.truth_(or__4914__auto__)){
return or__4914__auto__;
} else {
var and__4902__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ws","ws",86841443));
if(and__4902__auto__){
return taoensso.sente.chsk_init_BANG_.call(null,taoensso.sente.map__GT_ChAjaxSocket.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"url","url",276297046),chsk_url_fn.call(null,path,window_location,cljs.core.not.call(null,new cljs.core.Keyword(null,"ws","ws",86841443))),new cljs.core.Keyword(null,"chs","chs",376886120),private_chs,new cljs.core.Keyword(null,"packer","packer",66077544),packer__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),lp_timeout_ms,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),ajax_opts,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064),false], null))], null)));
} else {
return and__4902__auto__;
}
}
})();
var _ = (cljs.core.truth_(chsk)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Failed to create channel socket"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"chsk","chsk",776828446,null)))].join('')))})());
var send_fn = cljs.core.partial.call(null,taoensso.sente.chsk_send_BANG_,chsk);
var public_ch_recv__$1 = cljs.core.async.map_LT_.call(null,((function (packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__19246,map__19247,map__19247__$1,opts,type,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,chsk_url_fn,packer,client_id,ajax_opts,_deprecated_more_opts){
return (function taoensso$sente$ev__GT_ev_msg(ev){
var vec__19250 = taoensso.sente.as_event.call(null,ev);
var ev_id = cljs.core.nth.call(null,vec__19250,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__19250,(1),null);
var ev__$1 = vec__19250;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__19246,map__19247,map__19247__$1,opts,type,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,chsk_url_fn,packer,client_id,ajax_opts,_deprecated_more_opts))
,public_ch_recv);
if(cljs.core.truth_(chsk)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return null;
}
});

taoensso.sente.make_channel_socket_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_BANG_.cljs$lang$applyTo = (function (seq19243){
var G__19244 = cljs.core.first.call(null,seq19243);
var seq19243__$1 = cljs.core.next.call(null,seq19243);
return taoensso.sente.make_channel_socket_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19244,seq19243__$1);
});
/**
 * Creates a go-loop to call `(event-msg-handler <event-msg>)` and returns a
 *   `(fn stop! [])`. Catches & logs errors. Advanced users may choose to instead
 *   write their own loop against `ch-recv`.
 */
taoensso.sente.start_chsk_router_BANG_ = (function taoensso$sente$start_chsk_router_BANG_(var_args){
var args__5979__auto__ = [];
var len__5972__auto___19382 = arguments.length;
var i__5973__auto___19383 = (0);
while(true){
if((i__5973__auto___19383 < len__5972__auto___19382)){
args__5979__auto__.push((arguments[i__5973__auto___19383]));

var G__19384 = (i__5973__auto___19383 + (1));
i__5973__auto___19383 = G__19384;
continue;
} else {
}
break;
}

var argseq__5980__auto__ = ((((2) < args__5979__auto__.length))?(new cljs.core.IndexedSeq(args__5979__auto__.slice((2)),(0))):null);
return taoensso.sente.start_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5980__auto__);
});

taoensso.sente.start_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__19257){
var vec__19258 = p__19257;
var map__19259 = cljs.core.nth.call(null,vec__19258,(0),null);
var map__19259__$1 = ((((!((map__19259 == null)))?((((map__19259.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19259.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19259):map__19259);
var opts = map__19259__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__19259__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var ch_ctrl = cljs.core.async.chan.call(null);
var c__7440__auto___19385 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7440__auto___19385,ch_ctrl,vec__19258,map__19259,map__19259__$1,opts,trace_evs_QMARK_){
return (function (){
var f__7441__auto__ = (function (){var switch__7375__auto__ = ((function (c__7440__auto___19385,ch_ctrl,vec__19258,map__19259,map__19259__$1,opts,trace_evs_QMARK_){
return (function (state_19333){
var state_val_19334 = (state_19333[(1)]);
if((state_val_19334 === (7))){
var inst_19272 = (state_19333[(2)]);
var inst_19273 = cljs.core.nth.call(null,inst_19272,(0),null);
var inst_19274 = cljs.core.nth.call(null,inst_19272,(1),null);
var inst_19275 = taoensso.encore.kw_identical_QMARK_.call(null,inst_19274,ch_ctrl);
var state_19333__$1 = (function (){var statearr_19335 = state_19333;
(statearr_19335[(7)] = inst_19273);

return statearr_19335;
})();
if(cljs.core.truth_(inst_19275)){
var statearr_19336_19386 = state_19333__$1;
(statearr_19336_19386[(1)] = (8));

} else {
var statearr_19337_19387 = state_19333__$1;
(statearr_19337_19387[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (20))){
var inst_19319 = (state_19333[(2)]);
var state_19333__$1 = state_19333;
var statearr_19338_19388 = state_19333__$1;
(statearr_19338_19388[(2)] = inst_19319);

(statearr_19338_19388[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (27))){
var inst_19298 = (state_19333[(8)]);
var inst_19315 = event_msg_handler.call(null,inst_19298);
var state_19333__$1 = state_19333;
var statearr_19339_19389 = state_19333__$1;
(statearr_19339_19389[(2)] = inst_19315);

(statearr_19339_19389[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (1))){
var state_19333__$1 = state_19333;
var statearr_19340_19390 = state_19333__$1;
(statearr_19340_19390[(2)] = null);

(statearr_19340_19390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (24))){
var state_19333__$1 = state_19333;
var statearr_19341_19391 = state_19333__$1;
(statearr_19341_19391[(2)] = null);

(statearr_19341_19391[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (4))){
var inst_19323 = (state_19333[(2)]);
var inst_19324 = taoensso.encore.kw_identical_QMARK_.call(null,new cljs.core.Keyword("taoensso.sente","stop","taoensso.sente/stop",-1361782571),inst_19323);
var state_19333__$1 = state_19333;
if(cljs.core.truth_(inst_19324)){
var statearr_19342_19392 = state_19333__$1;
(statearr_19342_19392[(1)] = (29));

} else {
var statearr_19343_19393 = state_19333__$1;
(statearr_19343_19393[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (15))){
var state_19333__$1 = state_19333;
var statearr_19344_19394 = state_19333__$1;
(statearr_19344_19394[(2)] = false);

(statearr_19344_19394[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (21))){
var inst_19299 = (state_19333[(9)]);
var inst_19300 = (state_19333[(2)]);
var inst_19301 = taoensso.encore.errorf.call(null,"Chsk router handling error (%s): %s",inst_19299,inst_19300);
var state_19333__$1 = state_19333;
var statearr_19345_19395 = state_19333__$1;
(statearr_19345_19395[(2)] = inst_19301);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19333__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (31))){
var inst_19329 = (state_19333[(2)]);
var state_19333__$1 = state_19333;
var statearr_19346_19396 = state_19333__$1;
(statearr_19346_19396[(2)] = inst_19329);

(statearr_19346_19396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (13))){
var inst_19293 = (state_19333[(2)]);
var state_19333__$1 = state_19333;
if(cljs.core.truth_(inst_19293)){
var statearr_19347_19397 = state_19333__$1;
(statearr_19347_19397[(1)] = (17));

} else {
var statearr_19348_19398 = state_19333__$1;
(statearr_19348_19398[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (22))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19333,(21),Error,null,(20));
var state_19333__$1 = state_19333;
if(cljs.core.truth_(trace_evs_QMARK_)){
var statearr_19349_19399 = state_19333__$1;
(statearr_19349_19399[(1)] = (23));

} else {
var statearr_19350_19400 = state_19333__$1;
(statearr_19350_19400[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (29))){
var state_19333__$1 = state_19333;
var statearr_19351_19401 = state_19333__$1;
(statearr_19351_19401[(2)] = null);

(statearr_19351_19401[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (6))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19333,(5),Error,null,(4));
var inst_19268 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19269 = [ch_recv,ch_ctrl];
var inst_19270 = (new cljs.core.PersistentVector(null,2,(5),inst_19268,inst_19269,null));
var state_19333__$1 = state_19333;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19333__$1,(7),inst_19270);
} else {
if((state_val_19334 === (28))){
var inst_19317 = (state_19333[(2)]);
var state_19333__$1 = (function (){var statearr_19352 = state_19333;
(statearr_19352[(10)] = inst_19317);

return statearr_19352;
})();
var statearr_19353_19402 = state_19333__$1;
(statearr_19353_19402[(2)] = null);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19333__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (25))){
var inst_19298 = (state_19333[(8)]);
var inst_19309 = (state_19333[(2)]);
var inst_19310 = taoensso.sente.event_msg_QMARK_.call(null,inst_19298);
var inst_19311 = cljs.core.not.call(null,inst_19310);
var state_19333__$1 = (function (){var statearr_19354 = state_19333;
(statearr_19354[(11)] = inst_19309);

return statearr_19354;
})();
if(inst_19311){
var statearr_19355_19403 = state_19333__$1;
(statearr_19355_19403[(1)] = (26));

} else {
var statearr_19356_19404 = state_19333__$1;
(statearr_19356_19404[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (17))){
var inst_19273 = (state_19333[(7)]);
var inst_19295 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19273);
var state_19333__$1 = state_19333;
var statearr_19357_19405 = state_19333__$1;
(statearr_19357_19405[(2)] = inst_19295);

(statearr_19357_19405[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (3))){
var inst_19331 = (state_19333[(2)]);
var state_19333__$1 = state_19333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19333__$1,inst_19331);
} else {
if((state_val_19334 === (12))){
var state_19333__$1 = state_19333;
var statearr_19358_19406 = state_19333__$1;
(statearr_19358_19406[(2)] = false);

(statearr_19358_19406[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (2))){
var state_19333__$1 = state_19333;
var statearr_19359_19407 = state_19333__$1;
(statearr_19359_19407[(2)] = null);

(statearr_19359_19407[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (23))){
var inst_19299 = (state_19333[(9)]);
var inst_19306 = taoensso.encore.tracef.call(null,"Pre-handler event: %s",inst_19299);
var state_19333__$1 = state_19333;
var statearr_19360_19408 = state_19333__$1;
(statearr_19360_19408[(2)] = inst_19306);

(statearr_19360_19408[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (19))){
var inst_19298 = (state_19333[(8)]);
var inst_19298__$1 = (state_19333[(2)]);
var inst_19299 = cljs.core.get.call(null,inst_19298__$1,new cljs.core.Keyword(null,"event","event",301435442));
var state_19333__$1 = (function (){var statearr_19361 = state_19333;
(statearr_19361[(9)] = inst_19299);

(statearr_19361[(8)] = inst_19298__$1);

return statearr_19361;
})();
var statearr_19362_19409 = state_19333__$1;
(statearr_19362_19409[(2)] = null);

(statearr_19362_19409[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (11))){
var inst_19273 = (state_19333[(7)]);
var inst_19283 = inst_19273.cljs$lang$protocol_mask$partition0$;
var inst_19284 = (inst_19283 & (64));
var inst_19285 = inst_19273.cljs$core$ISeq$;
var inst_19286 = (inst_19284) || (inst_19285);
var state_19333__$1 = state_19333;
if(cljs.core.truth_(inst_19286)){
var statearr_19363_19410 = state_19333__$1;
(statearr_19363_19410[(1)] = (14));

} else {
var statearr_19364_19411 = state_19333__$1;
(statearr_19364_19411[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (9))){
var inst_19273 = (state_19333[(7)]);
var inst_19280 = (inst_19273 == null);
var inst_19281 = cljs.core.not.call(null,inst_19280);
var state_19333__$1 = state_19333;
if(inst_19281){
var statearr_19365_19412 = state_19333__$1;
(statearr_19365_19412[(1)] = (11));

} else {
var statearr_19366_19413 = state_19333__$1;
(statearr_19366_19413[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (5))){
var inst_19262 = (state_19333[(2)]);
var inst_19263 = taoensso.encore.errorf.call(null,"Chsk router channel error (%s)!",inst_19262);
var state_19333__$1 = state_19333;
var statearr_19367_19414 = state_19333__$1;
(statearr_19367_19414[(2)] = inst_19263);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19333__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (14))){
var state_19333__$1 = state_19333;
var statearr_19368_19415 = state_19333__$1;
(statearr_19368_19415[(2)] = true);

(statearr_19368_19415[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (26))){
var inst_19299 = (state_19333[(9)]);
var inst_19313 = taoensso.encore.errorf.call(null,"Bad event: %s",inst_19299);
var state_19333__$1 = state_19333;
var statearr_19369_19416 = state_19333__$1;
(statearr_19369_19416[(2)] = inst_19313);

(statearr_19369_19416[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (16))){
var inst_19290 = (state_19333[(2)]);
var state_19333__$1 = state_19333;
var statearr_19370_19417 = state_19333__$1;
(statearr_19370_19417[(2)] = inst_19290);

(statearr_19370_19417[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (30))){
var state_19333__$1 = state_19333;
var statearr_19371_19418 = state_19333__$1;
(statearr_19371_19418[(2)] = null);

(statearr_19371_19418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (10))){
var inst_19321 = (state_19333[(2)]);
var state_19333__$1 = state_19333;
var statearr_19372_19419 = state_19333__$1;
(statearr_19372_19419[(2)] = inst_19321);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19333__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (18))){
var inst_19273 = (state_19333[(7)]);
var state_19333__$1 = state_19333;
var statearr_19373_19420 = state_19333__$1;
(statearr_19373_19420[(2)] = inst_19273);

(statearr_19373_19420[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (8))){
var state_19333__$1 = state_19333;
var statearr_19374_19421 = state_19333__$1;
(statearr_19374_19421[(2)] = new cljs.core.Keyword("taoensso.sente","stop","taoensso.sente/stop",-1361782571));

(statearr_19374_19421[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7440__auto___19385,ch_ctrl,vec__19258,map__19259,map__19259__$1,opts,trace_evs_QMARK_))
;
return ((function (switch__7375__auto__,c__7440__auto___19385,ch_ctrl,vec__19258,map__19259,map__19259__$1,opts,trace_evs_QMARK_){
return (function() {
var taoensso$sente$state_machine__7376__auto__ = null;
var taoensso$sente$state_machine__7376__auto____0 = (function (){
var statearr_19378 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19378[(0)] = taoensso$sente$state_machine__7376__auto__);

(statearr_19378[(1)] = (1));

return statearr_19378;
});
var taoensso$sente$state_machine__7376__auto____1 = (function (state_19333){
while(true){
var ret_value__7377__auto__ = (function (){try{while(true){
var result__7378__auto__ = switch__7375__auto__.call(null,state_19333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7378__auto__;
}
break;
}
}catch (e19379){if((e19379 instanceof Object)){
var ex__7379__auto__ = e19379;
var statearr_19380_19422 = state_19333;
(statearr_19380_19422[(5)] = ex__7379__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19379;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7377__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19423 = state_19333;
state_19333 = G__19423;
continue;
} else {
return ret_value__7377__auto__;
}
break;
}
});
taoensso$sente$state_machine__7376__auto__ = function(state_19333){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__7376__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__7376__auto____1.call(this,state_19333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__7376__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__7376__auto____0;
taoensso$sente$state_machine__7376__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__7376__auto____1;
return taoensso$sente$state_machine__7376__auto__;
})()
;})(switch__7375__auto__,c__7440__auto___19385,ch_ctrl,vec__19258,map__19259,map__19259__$1,opts,trace_evs_QMARK_))
})();
var state__7442__auto__ = (function (){var statearr_19381 = f__7441__auto__.call(null);
(statearr_19381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7440__auto___19385);

return statearr_19381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7442__auto__);
});})(c__7440__auto___19385,ch_ctrl,vec__19258,map__19259,map__19259__$1,opts,trace_evs_QMARK_))
);


return ((function (ch_ctrl,vec__19258,map__19259,map__19259__$1,opts,trace_evs_QMARK_){
return (function taoensso$sente$stop_BANG_(){
return cljs.core.async.close_BANG_.call(null,ch_ctrl);
});
;})(ch_ctrl,vec__19258,map__19259,map__19259__$1,opts,trace_evs_QMARK_))
});

taoensso.sente.start_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_chsk_router_BANG_.cljs$lang$applyTo = (function (seq19254){
var G__19255 = cljs.core.first.call(null,seq19254);
var seq19254__$1 = cljs.core.next.call(null,seq19254);
var G__19256 = cljs.core.first.call(null,seq19254__$1);
var seq19254__$2 = cljs.core.next.call(null,seq19254__$1);
return taoensso.sente.start_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19255,G__19256,seq19254__$2);
});
/**
 * DEPRECATED: Please use `start-chsk-router!` instead.
 */
taoensso.sente.start_chsk_router_loop_BANG_ = (function taoensso$sente$start_chsk_router_loop_BANG_(event_handler,ch_recv){
return taoensso.sente.start_chsk_router_BANG_.call(null,ch_recv,(function (ev_msg){
return event_handler.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(ev_msg),new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(ev_msg));
}));
});

//# sourceMappingURL=sente.js.map
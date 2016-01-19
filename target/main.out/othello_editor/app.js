// Compiled by ClojureScript 1.7.145 {}
goog.provide('othello_editor.app');
goog.require('cljs.core');
goog.require('taoensso.sente');
goog.require('taoensso.sente.packers.transit');
goog.require('cljs.core.async');
goog.require('taoensso.encore');
goog.require('clojure.string');
taoensso.sente.set_logging_level_BANG_.call(null,new cljs.core.Keyword(null,"info","info",-317069002));
othello_editor.app.packer = taoensso.sente.packers.transit.get_flexi_packer.call(null,new cljs.core.Keyword(null,"edn","edn",1317840885));
taoensso.encore.debugf.call(null,"ClojureScript loaded successfully");
var map__22296_22298 = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492)], null));
var map__22296_22299__$1 = ((((!((map__22296_22298 == null)))?((((map__22296_22298.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22296_22298.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22296_22298):map__22296_22298);
var chsk_22300 = cljs.core.get.call(null,map__22296_22299__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv_22301 = cljs.core.get.call(null,map__22296_22299__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn_22302 = cljs.core.get.call(null,map__22296_22299__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state_22303 = cljs.core.get.call(null,map__22296_22299__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
othello_editor.app.chsk = chsk_22300;

othello_editor.app.ch_chsk = ch_recv_22301;

othello_editor.app.chsk_send_BANG_ = send_fn_22302;

othello_editor.app.chsk_state = state_22303;
if(typeof othello_editor.app.event_msg_handler !== 'undefined'){
} else {
othello_editor.app.event_msg_handler = (function (){var method_table__5827__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5828__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5829__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5830__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5831__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"othello-editor.app","event-msg-handler"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5831__auto__,method_table__5827__auto__,prefer_table__5828__auto__,method_cache__5829__auto__,cached_hierarchy__5830__auto__));
})();
}
othello_editor.app.event_msg_handler_STAR_ = (function othello_editor$app$event_msg_handler_STAR_(p__22304){
var map__22307 = p__22304;
var map__22307__$1 = ((((!((map__22307 == null)))?((((map__22307.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22307.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22307):map__22307);
var ev_msg = map__22307__$1;
var id = cljs.core.get.call(null,map__22307__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _QMARK_data = cljs.core.get.call(null,map__22307__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var event = cljs.core.get.call(null,map__22307__$1,new cljs.core.Keyword(null,"event","event",301435442));
taoensso.encore.debugf.call(null,"Event: %s",event);

return othello_editor.app.event_msg_handler.call(null,ev_msg);
});
cljs.core._add_method.call(null,othello_editor.app.event_msg_handler,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__22309){
var map__22310 = p__22309;
var map__22310__$1 = ((((!((map__22310 == null)))?((((map__22310.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22310.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22310):map__22310);
var ev_msg = map__22310__$1;
var event = cljs.core.get.call(null,map__22310__$1,new cljs.core.Keyword(null,"event","event",301435442));
return taoensso.encore.infof.call(null,"Unhandled event: %s",event);
}));
cljs.core._add_method.call(null,othello_editor.app.event_msg_handler,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (p__22312){
var map__22313 = p__22312;
var map__22313__$1 = ((((!((map__22313 == null)))?((((map__22313.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22313.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22313):map__22313);
var ev_msg = map__22313__$1;
var _QMARK_data = cljs.core.get.call(null,map__22313__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
if(cljs.core._EQ_.call(null,_QMARK_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"first-open?","first-open?",396686530),true], null))){
return taoensso.encore.debugf.call(null,"Channel socket successfully established!");
} else {
return taoensso.encore.debugf.call(null,"Channel socket state change: %s",_QMARK_data);
}
}));
cljs.core._add_method.call(null,othello_editor.app.event_msg_handler,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (p__22315){
var map__22316 = p__22315;
var map__22316__$1 = ((((!((map__22316 == null)))?((((map__22316.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22316.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22316):map__22316);
var ev_msg = map__22316__$1;
var _QMARK_data = cljs.core.get.call(null,map__22316__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return taoensso.encore.infof.call(null,"Push event from server: %s",_QMARK_data);
}));
cljs.core._add_method.call(null,othello_editor.app.event_msg_handler,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),(function (p__22318){
var map__22319 = p__22318;
var map__22319__$1 = ((((!((map__22319 == null)))?((((map__22319.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22319.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22319):map__22319);
var ev_msg = map__22319__$1;
var _QMARK_data = cljs.core.get.call(null,map__22319__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var vec__22321 = _QMARK_data;
var _QMARK_uid = cljs.core.nth.call(null,vec__22321,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__22321,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__22321,(2),null);
return taoensso.encore.debugf.call(null,"Handshake: %s",_QMARK_data);
}));
var temp__4425__auto___22322 = document.getElementById("btn2");
if(cljs.core.truth_(temp__4425__auto___22322)){
var target_el_22323 = temp__4425__auto___22322;
target_el_22323.addEventListener("click",((function (target_el_22323,temp__4425__auto___22322){
return (function (ev){
taoensso.encore.debugf.call(null,"Button 2 was clicked (will receive reply from server)");

return othello_editor.app.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","button2","example/button2",-675598425),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"had-a-callback?","had-a-callback?",-512946762),"indeed"], null)], null),(5000),((function (target_el_22323,temp__4425__auto___22322){
return (function (cb_reply){
return taoensso.encore.debugf.call(null,"Callback reply: %s",cb_reply);
});})(target_el_22323,temp__4425__auto___22322))
);
});})(target_el_22323,temp__4425__auto___22322))
);
} else {
}
var temp__4425__auto___22324 = document.getElementById("btn-login");
if(cljs.core.truth_(temp__4425__auto___22324)){
var target_el_22325 = temp__4425__auto___22324;
target_el_22325.addEventListener("click",((function (target_el_22325,temp__4425__auto___22324){
return (function (ev){
var user_id = document.getElementById("input-login").value;
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,user_id))){
return alert("Please enter a user-id first");
} else {
taoensso.encore.debugf.call(null,"Logging in with user-id %s",user_id);

return taoensso.sente.ajax_call.call(null,"/login",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),[cljs.core.str(user_id)].join(''),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,othello_editor.app.chsk_state))], null)], null),((function (user_id,target_el_22325,temp__4425__auto___22324){
return (function (ajax_resp){
taoensso.encore.debugf.call(null,"Ajax login response: %s",ajax_resp);

var login_successful_QMARK_ = true;
if(!(login_successful_QMARK_)){
return taoensso.encore.debugf.call(null,"Login failed");
} else {
taoensso.encore.debugf.call(null,"Login successful");

return taoensso.sente.chsk_reconnect_BANG_.call(null,othello_editor.app.chsk);
}
});})(user_id,target_el_22325,temp__4425__auto___22324))
);
}
});})(target_el_22325,temp__4425__auto___22324))
);
} else {
}
othello_editor.app.router_ = cljs.core.atom.call(null,null);
othello_editor.app.stop_router_BANG_ = (function othello_editor$app$stop_router_BANG_(){
var temp__4425__auto__ = cljs.core.deref.call(null,othello_editor.app.router_);
if(cljs.core.truth_(temp__4425__auto__)){
var stop_f = temp__4425__auto__;
return stop_f.call(null);
} else {
return null;
}
});
othello_editor.app.start_router_BANG_ = (function othello_editor$app$start_router_BANG_(){
othello_editor.app.stop_router_BANG_.call(null);

return cljs.core.reset_BANG_.call(null,othello_editor.app.router_,taoensso.sente.start_chsk_router_BANG_.call(null,othello_editor.app.ch_chsk,othello_editor.app.event_msg_handler_STAR_));
});
othello_editor.app.start_BANG_ = (function othello_editor$app$start_BANG_(){
return othello_editor.app.start_router_BANG_.call(null);
});
othello_editor.app.start_BANG_.call(null);

//# sourceMappingURL=app.js.map
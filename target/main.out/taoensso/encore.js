// Compiled by ClojureScript 1.7.145 {}
goog.provide('taoensso.encore');
goog.require('cljs.core');
goog.require('goog.net.XhrIoPool');
goog.require('goog.events');
goog.require('clojure.set');
goog.require('goog.net.XhrIo');
goog.require('goog.Uri.QueryData');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.net.EventType');
goog.require('goog.structs');
goog.require('goog.string.format');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.net.ErrorCode');
taoensso.encore.format;
/**
 * Used for lib-consumer version assertions
 */
taoensso.encore.encore_version = 1.37;
taoensso.encore.assert_min_encore_version = (function taoensso$encore$assert_min_encore_version(min_version){
if((taoensso.encore.encore_version < min_version)){
throw cljs.core.ex_info.call(null,taoensso.encore.format.call(null,"Insufficient com.taoensso/encore version: %s < %s. You may have a Leiningen dependency conflict (see http://goo.gl/qBbLvC for solution).",taoensso.encore.encore_version,min_version),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-version","min-version",-1697197126),min_version,new cljs.core.Keyword(null,"this-version","this-version",355666086),taoensso.encore.encore_version], null));
} else {
return null;
}
});
taoensso.encore.read_edn = (function taoensso$encore$read_edn(s){
return cljs.reader.read_string.call(null,s);
});
/**
 * Handles optional docstrings & attr maps for a macro def's name.
 *   Stolen from `clojure.tools.macro`.
 */
taoensso.encore.name_with_attrs = (function taoensso$encore$name_with_attrs(name,macro_args){
var vec__18197 = ((typeof cljs.core.first.call(null,macro_args) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,macro_args),cljs.core.next.call(null,macro_args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,macro_args], null));
var docstring = cljs.core.nth.call(null,vec__18197,(0),null);
var macro_args__$1 = cljs.core.nth.call(null,vec__18197,(1),null);
var vec__18198 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,macro_args__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,macro_args__$1),cljs.core.next.call(null,macro_args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,macro_args__$1], null));
var attr = cljs.core.nth.call(null,vec__18198,(0),null);
var macro_args__$2 = cljs.core.nth.call(null,vec__18198,(1),null);
var attr__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):attr);
var attr__$2 = (cljs.core.truth_(cljs.core.meta.call(null,name))?cljs.core.conj.call(null,cljs.core.meta.call(null,name),attr__$1):attr__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta.call(null,name,attr__$2),macro_args__$2], null);
});
taoensso.encore.kw_identical_QMARK_ = cljs.core.keyword_identical_QMARK_;
taoensso.encore.stringy_QMARK_ = (function taoensso$encore$stringy_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || (typeof x === 'string');
});
taoensso.encore.atom_QMARK_ = (function taoensso$encore$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});
taoensso.encore.chan_QMARK_ = (function taoensso$encore$chan_QMARK_(x){
return (x instanceof cljs.core.async.impl.channels.ManyToManyChannel);
});
taoensso.encore.re_pattern_QMARK_ = (function taoensso$encore$re_pattern_QMARK_(x){
return (x instanceof RegExp);
});
taoensso.encore.error_QMARK_ = (function taoensso$encore$error_QMARK_(x){
return (x instanceof Error);
});
/**
 * Returns data map iff `x` is an error of any type on platform.
 */
taoensso.encore.error_data = (function taoensso$encore$error_data(x){
var temp__4425__auto__ = (function (){var or__4914__auto__ = cljs.core.ex_data.call(null,x);
if(cljs.core.truth_(or__4914__auto__)){
return or__4914__auto__;
} else {
if((x instanceof Error)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return null;
}
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var data_map = temp__4425__auto__;
return cljs.core.merge.call(null,(function (){var err = x;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"err-type","err-type",-116717722),cljs.core.type.call(null,err),new cljs.core.Keyword(null,"err-msg","err-msg",-1158512684),err.message,new cljs.core.Keyword(null,"err-cause","err-cause",897008749),err.cause], null);
})(),data_map);
} else {
return null;
}
});
taoensso.encore.nnil_QMARK_ = (function taoensso$encore$nnil_QMARK_(x){
return !((x == null));
});
taoensso.encore.nblank_QMARK_ = (function taoensso$encore$nblank_QMARK_(x){
return cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,x));
});
taoensso.encore.nneg_QMARK_ = (function taoensso$encore$nneg_QMARK_(x){
return !((x < (0)));
});
taoensso.encore.pos_int_QMARK_ = (function taoensso$encore$pos_int_QMARK_(x){
return (cljs.core.integer_QMARK_.call(null,x)) && ((x > (0)));
});
taoensso.encore.nneg_int_QMARK_ = (function taoensso$encore$nneg_int_QMARK_(x){
return (cljs.core.integer_QMARK_.call(null,x)) && (!((x < (0))));
});
taoensso.encore.nvec_QMARK_ = (function taoensso$encore$nvec_QMARK_(n,x){
return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),n));
});
taoensso.encore.set_STAR_;
taoensso.encore.udt_QMARK_ = taoensso.encore.nneg_int_QMARK_;
taoensso.encore.vec2_QMARK_ = (function taoensso$encore$vec2_QMARK_(x){
return taoensso.encore.nvec_QMARK_.call(null,(2),x);
});
taoensso.encore.vec3_QMARK_ = (function taoensso$encore$vec3_QMARK_(x){
return taoensso.encore.nvec_QMARK_.call(null,(3),x);
});
taoensso.encore.distinct_elements_QMARK_ = (function taoensso$encore$distinct_elements_QMARK_(x){
return (cljs.core.set_QMARK_.call(null,x)) || (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,taoensso.encore.set_STAR_.call(null,x))));
});
taoensso.encore.nblank_str_QMARK_ = (function taoensso$encore$nblank_str_QMARK_(x){
return (typeof x === 'string') && (cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,x)));
});
taoensso.encore.nneg_num_QMARK_ = (function taoensso$encore$nneg_num_QMARK_(x){
return (typeof x === 'number') && (!((x < (0))));
});
taoensso.encore.pos_num_QMARK_ = (function taoensso$encore$pos_num_QMARK_(x){
return (typeof x === 'number') && ((x > (0)));
});
taoensso.encore.zero_num_QMARK_ = (function taoensso$encore$zero_num_QMARK_(x){
return cljs.core._EQ_.call(null,(0),x);
});
taoensso.encore.as__QMARK_nblank = (function taoensso$encore$as__QMARK_nblank(x){
if(typeof x === 'string'){
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,x))){
return null;
} else {
return x;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_kw = (function taoensso$encore$as__QMARK_kw(x){
if((x instanceof cljs.core.Keyword)){
return x;
} else {
if(typeof x === 'string'){
return cljs.core.keyword.call(null,x);
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_name = (function taoensso$encore$as__QMARK_name(x){
if((x instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,x);
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_bool = (function taoensso$encore$as__QMARK_bool(x){
if((x == null)){
return null;
} else {
if((x === true) || (x === false)){
return x;
} else {
if((cljs.core._EQ_.call(null,x,(0))) || (cljs.core._EQ_.call(null,x,"false")) || (cljs.core._EQ_.call(null,x,"FALSE")) || (cljs.core._EQ_.call(null,x,"0"))){
return false;
} else {
if((cljs.core._EQ_.call(null,x,(1))) || (cljs.core._EQ_.call(null,x,"true")) || (cljs.core._EQ_.call(null,x,"TRUE")) || (cljs.core._EQ_.call(null,x,"1"))){
return true;
} else {
return null;
}
}
}
}
});
taoensso.encore.as__QMARK_int = (function taoensso$encore$as__QMARK_int(x){
if((x == null)){
return null;
} else {
if(typeof x === 'number'){
return cljs.core.long$.call(null,x);
} else {
if(typeof x === 'string'){
var x__$1 = parseInt(x,(10));
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
}
});
taoensso.encore.as__QMARK_float = (function taoensso$encore$as__QMARK_float(x){
if((x == null)){
return null;
} else {
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
var x__$1 = parseFloat(x);
if(cljs.core.truth_(isNan(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
}
});
taoensso.encore.nnil_EQ_ = (function taoensso$encore$nnil_EQ_(var_args){
var args18201 = [];
var len__5972__auto___18207 = arguments.length;
var i__5973__auto___18208 = (0);
while(true){
if((i__5973__auto___18208 < len__5972__auto___18207)){
args18201.push((arguments[i__5973__auto___18208]));

var G__18209 = (i__5973__auto___18208 + (1));
i__5973__auto___18208 = G__18209;
continue;
} else {
}
break;
}

var G__18206 = args18201.length;
switch (G__18206) {
case 2:
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5991__auto__ = (new cljs.core.IndexedSeq(args18201.slice((2)),(0)));
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5991__auto__);

}
});

taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
var and__4902__auto__ = taoensso.encore.nnil_QMARK_.call(null,x);
if(cljs.core.truth_(and__4902__auto__)){
return cljs.core._EQ_.call(null,x,y);
} else {
return and__4902__auto__;
}
});

taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
var and__4902__auto__ = taoensso.encore.nnil_QMARK_.call(null,x);
if(cljs.core.truth_(and__4902__auto__)){
return cljs.core.apply.call(null,cljs.core._EQ_,x,y,more);
} else {
return and__4902__auto__;
}
});

taoensso.encore.nnil_EQ_.cljs$lang$applyTo = (function (seq18202){
var G__18203 = cljs.core.first.call(null,seq18202);
var seq18202__$1 = cljs.core.next.call(null,seq18202);
var G__18204 = cljs.core.first.call(null,seq18202__$1);
var seq18202__$2 = cljs.core.next.call(null,seq18202__$1);
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic(G__18203,G__18204,seq18202__$2);
});

taoensso.encore.nnil_EQ_.cljs$lang$maxFixedArity = (2);
taoensso.encore.vec_STAR_ = (function taoensso$encore$vec_STAR_(x){
if(cljs.core.vector_QMARK_.call(null,x)){
return x;
} else {
return cljs.core.vec.call(null,x);
}
});
taoensso.encore.set_STAR_ = (function taoensso$encore$set_STAR_(x){
if(cljs.core.set_QMARK_.call(null,x)){
return x;
} else {
return cljs.core.set.call(null,x);
}
});
taoensso.encore.ks_EQ_ = (function taoensso$encore$ks_EQ_(ks,m){
return cljs.core._EQ_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_LT__EQ_ = (function taoensso$encore$ks_LT__EQ_(ks,m){
return clojure.set.subset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_GT__EQ_ = (function taoensso$encore$ks_GT__EQ_(ks,m){
return clojure.set.superset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_nnil_QMARK_ = (function taoensso$encore$ks_nnil_QMARK_(ks,m){
return cljs.core.every_QMARK_.call(null,(function (p1__18211_SHARP_){
return taoensso.encore.nnil_QMARK_.call(null,cljs.core.get.call(null,m,p1__18211_SHARP_));
}),ks);
});
taoensso.encore.format;
taoensso.encore.assertion_error = (function taoensso$encore$assertion_error(msg){
return (new Error(msg));
});
/**
 * Implementation detail.
 */
taoensso.encore.hthrow = (function taoensso$encore$hthrow(var_args){
var args__5979__auto__ = [];
var len__5972__auto___18220 = arguments.length;
var i__5973__auto___18221 = (0);
while(true){
if((i__5973__auto___18221 < len__5972__auto___18220)){
args__5979__auto__.push((arguments[i__5973__auto___18221]));

var G__18222 = (i__5973__auto___18221 + (1));
i__5973__auto___18221 = G__18222;
continue;
} else {
}
break;
}

var argseq__5980__auto__ = ((((5) < args__5979__auto__.length))?(new cljs.core.IndexedSeq(args__5979__auto__.slice((5)),(0))):null);
return taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5980__auto__);
});

taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic = (function (hard_QMARK_,ns_str,_QMARK_line,form,val,p__18218){
var vec__18219 = p__18218;
var _QMARK_err = cljs.core.nth.call(null,vec__18219,(0),null);
var pattern = "Condition failed in `%s:%s` [pred-form, val]: [%s, %s]";
var line_str = (function (){var or__4914__auto__ = _QMARK_line;
if(cljs.core.truth_(or__4914__auto__)){
return or__4914__auto__;
} else {
return "?";
}
})();
var form_str = [cljs.core.str((function (){var or__4914__auto__ = form;
if(cljs.core.truth_(or__4914__auto__)){
return or__4914__auto__;
} else {
return "<nil>";
}
})())].join('');
var val_str = [cljs.core.str((function (){var or__4914__auto__ = val;
if(cljs.core.truth_(or__4914__auto__)){
return or__4914__auto__;
} else {
return "<nil>";
}
})())].join('');
var _QMARK_err_str = (function (){var temp__4425__auto__ = _QMARK_err;
if(cljs.core.truth_(temp__4425__auto__)){
var e = temp__4425__auto__;
return [cljs.core.str(_QMARK_err)].join('');
} else {
return null;
}
})();
var msg = (function (){var m = taoensso.encore.format.call(null,pattern,ns_str,line_str,form_str,val_str);
if(cljs.core.not.call(null,_QMARK_err_str)){
return m;
} else {
return [cljs.core.str(m),cljs.core.str("\nPredicate error: "),cljs.core.str(_QMARK_err_str)].join('');
}
})();
throw ((cljs.core.not.call(null,hard_QMARK_))?taoensso.encore.assertion_error.call(null,msg):cljs.core.ex_info.call(null,msg,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ns","ns",441598760),ns_str,new cljs.core.Keyword(null,"?line","?line",-631853385),_QMARK_line,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"val","val",128701612),val,new cljs.core.Keyword(null,"?err","?err",549653299),_QMARK_err], null)));
});

taoensso.encore.hthrow.cljs$lang$maxFixedArity = (5);

taoensso.encore.hthrow.cljs$lang$applyTo = (function (seq18212){
var G__18213 = cljs.core.first.call(null,seq18212);
var seq18212__$1 = cljs.core.next.call(null,seq18212);
var G__18214 = cljs.core.first.call(null,seq18212__$1);
var seq18212__$2 = cljs.core.next.call(null,seq18212__$1);
var G__18215 = cljs.core.first.call(null,seq18212__$2);
var seq18212__$3 = cljs.core.next.call(null,seq18212__$2);
var G__18216 = cljs.core.first.call(null,seq18212__$3);
var seq18212__$4 = cljs.core.next.call(null,seq18212__$3);
var G__18217 = cljs.core.first.call(null,seq18212__$4);
var seq18212__$5 = cljs.core.next.call(null,seq18212__$4);
return taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic(G__18213,G__18214,G__18215,G__18216,G__18217,seq18212__$5);
});
taoensso.encore.non_throwing = (function taoensso$encore$non_throwing(pred){
return (function (x){
var vec__18225 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred.call(null,x)], null);
}catch (e18226){if((e18226 instanceof Error)){
var e__16225__auto__ = e18226;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,e__16225__auto__], null);
} else {
throw e18226;

}
}})();
var _QMARK_r = cljs.core.nth.call(null,vec__18225,(0),null);
var _ = cljs.core.nth.call(null,vec__18225,(1),null);
return _QMARK_r;
});
});
/**
 * Implementation detail.
 */
taoensso.encore.hpred = (function taoensso$encore$hpred(pred_form){
if(!(cljs.core.vector_QMARK_.call(null,pred_form))){
return pred_form;
} else {
var vec__18232 = pred_form;
var type = cljs.core.nth.call(null,vec__18232,(0),null);
var p1 = cljs.core.nth.call(null,vec__18232,(1),null);
var p2 = cljs.core.nth.call(null,vec__18232,(2),null);
var more = cljs.core.nthnext.call(null,vec__18232,(3));
var G__18233 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__18233) {
case "el":
return ((function (G__18233,vec__18232,type,p1,p2,more){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.encore.set_STAR_.call(null,p1),x);
});
;})(G__18233,vec__18232,type,p1,p2,more))

break;
case "not=":
return ((function (G__18233,vec__18232,type,p1,p2,more){
return (function (x){
return cljs.core.not_EQ_.call(null,p1,x);
});
;})(G__18233,vec__18232,type,p1,p2,more))

break;
case "ks-nnil?":
return ((function (G__18233,vec__18232,type,p1,p2,more){
return (function (x){
return taoensso.encore.ks_nnil_QMARK_.call(null,p1,x);
});
;})(G__18233,vec__18232,type,p1,p2,more))

break;
case "ks<=":
return ((function (G__18233,vec__18232,type,p1,p2,more){
return (function (x){
return taoensso.encore.ks_LT__EQ_.call(null,p1,x);
});
;})(G__18233,vec__18232,type,p1,p2,more))

break;
case "or":
return ((function (G__18233,vec__18232,type,p1,p2,more){
return (function (x){
var or__4914__auto__ = (cljs.core.truth_(p1)?taoensso.encore.non_throwing.call(null,taoensso$encore$hpred.call(null,p1)).call(null,x):null);
if(cljs.core.truth_(or__4914__auto__)){
return or__4914__auto__;
} else {
var or__4914__auto____$1 = (cljs.core.truth_(p2)?taoensso.encore.non_throwing.call(null,taoensso$encore$hpred.call(null,p2)).call(null,x):null);
if(cljs.core.truth_(or__4914__auto____$1)){
return or__4914__auto____$1;
} else {
return cljs.core.some.call(null,((function (or__4914__auto____$1,or__4914__auto__,G__18233,vec__18232,type,p1,p2,more){
return (function (p1__18228_SHARP_){
return taoensso.encore.non_throwing.call(null,taoensso$encore$hpred.call(null,p1__18228_SHARP_)).call(null,x);
});})(or__4914__auto____$1,or__4914__auto__,G__18233,vec__18232,type,p1,p2,more))
,more);
}
}
});
;})(G__18233,vec__18232,type,p1,p2,more))

break;
case "not":
return ((function (G__18233,vec__18232,type,p1,p2,more){
return (function (x){
var and__4902__auto__ = ((cljs.core.not.call(null,p1))?true:cljs.core.not.call(null,taoensso$encore$hpred.call(null,p1).call(null,x)));
if(and__4902__auto__){
var and__4902__auto____$1 = ((cljs.core.not.call(null,p2))?true:cljs.core.not.call(null,taoensso$encore$hpred.call(null,p2).call(null,x)));
if(and__4902__auto____$1){
return cljs.core.every_QMARK_.call(null,((function (and__4902__auto____$1,and__4902__auto__,G__18233,vec__18232,type,p1,p2,more){
return (function (p1__18227_SHARP_){
return cljs.core.not.call(null,taoensso$encore$hpred.call(null,p1__18227_SHARP_).call(null,x));
});})(and__4902__auto____$1,and__4902__auto__,G__18233,vec__18232,type,p1,p2,more))
,more);
} else {
return and__4902__auto____$1;
}
} else {
return and__4902__auto__;
}
});
;})(G__18233,vec__18232,type,p1,p2,more))

break;
case "ks=":
return ((function (G__18233,vec__18232,type,p1,p2,more){
return (function (x){
return taoensso.encore.ks_EQ_.call(null,p1,x);
});
;})(G__18233,vec__18232,type,p1,p2,more))

break;
case "and":
return ((function (G__18233,vec__18232,type,p1,p2,more){
return (function (x){
var and__4902__auto__ = ((cljs.core.not.call(null,p1))?true:taoensso$encore$hpred.call(null,p1).call(null,x));
if(cljs.core.truth_(and__4902__auto__)){
var and__4902__auto____$1 = ((cljs.core.not.call(null,p2))?true:taoensso$encore$hpred.call(null,p2).call(null,x));
if(cljs.core.truth_(and__4902__auto____$1)){
return cljs.core.every_QMARK_.call(null,((function (and__4902__auto____$1,and__4902__auto__,G__18233,vec__18232,type,p1,p2,more){
return (function (p1__18229_SHARP_){
return taoensso$encore$hpred.call(null,p1__18229_SHARP_).call(null,x);
});})(and__4902__auto____$1,and__4902__auto__,G__18233,vec__18232,type,p1,p2,more))
,more);
} else {
return and__4902__auto____$1;
}
} else {
return and__4902__auto__;
}
});
;})(G__18233,vec__18232,type,p1,p2,more))

break;
case "ks>=":
return ((function (G__18233,vec__18232,type,p1,p2,more){
return (function (x){
return taoensso.encore.ks_GT__EQ_.call(null,p1,x);
});
;})(G__18233,vec__18232,type,p1,p2,more))

break;
case "not-in":
return ((function (G__18233,vec__18232,type,p1,p2,more){
return (function (x){
return !(cljs.core.contains_QMARK_.call(null,taoensso.encore.set_STAR_.call(null,p1),x));
});
;})(G__18233,vec__18232,type,p1,p2,more))

break;
case "not-el":
return ((function (G__18233,vec__18232,type,p1,p2,more){
return (function (x){
return !(cljs.core.contains_QMARK_.call(null,taoensso.encore.set_STAR_.call(null,p1),x));
});
;})(G__18233,vec__18232,type,p1,p2,more))

break;
case "=":
return ((function (G__18233,vec__18232,type,p1,p2,more){
return (function (x){
return cljs.core._EQ_.call(null,p1,x);
});
;})(G__18233,vec__18232,type,p1,p2,more))

break;
case "set<=":
return ((function (G__18233,vec__18232,type,p1,p2,more){
return (function (x){
return clojure.set.subset_QMARK_.call(null,taoensso.encore.set_STAR_.call(null,x),taoensso.encore.set_STAR_.call(null,p1));
});
;})(G__18233,vec__18232,type,p1,p2,more))

break;
case "set>=":
return ((function (G__18233,vec__18232,type,p1,p2,more){
return (function (x){
return clojure.set.superset_QMARK_.call(null,taoensso.encore.set_STAR_.call(null,x),taoensso.encore.set_STAR_.call(null,p1));
});
;})(G__18233,vec__18232,type,p1,p2,more))

break;
case "set=":
return ((function (G__18233,vec__18232,type,p1,p2,more){
return (function (x){
return cljs.core._EQ_.call(null,taoensso.encore.set_STAR_.call(null,x),taoensso.encore.set_STAR_.call(null,p1));
});
;})(G__18233,vec__18232,type,p1,p2,more))

break;
case "in":
return ((function (G__18233,vec__18232,type,p1,p2,more){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.encore.set_STAR_.call(null,p1),x);
});
;})(G__18233,vec__18232,type,p1,p2,more))

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
}
});
/**
 * Implementation detail.
 */
taoensso.encore.hcond = (function taoensso$encore$hcond(hard_QMARK_,ns_str,line,x_,x_form,pred,pred_form){
var vec__18239 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,x_)], null);
}catch (e18241){if((e18241 instanceof Error)){
var e__16225__auto__ = e18241;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,e__16225__auto__], null);
} else {
throw e18241;

}
}})();
var _QMARK_x = cljs.core.nth.call(null,vec__18239,(0),null);
var _QMARK_x_err = cljs.core.nth.call(null,vec__18239,(1),null);
var have_x_QMARK_ = (_QMARK_x_err == null);
var vec__18240 = ((have_x_QMARK_)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,pred).call(null,_QMARK_x)], null);
}catch (e18242){if((e18242 instanceof Error)){
var e__16225__auto__ = e18242;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,e__16225__auto__], null);
} else {
throw e18242;

}
}})():null);
var pass_QMARK_ = cljs.core.nth.call(null,vec__18240,(0),null);
var _QMARK_pred_err = cljs.core.nth.call(null,vec__18240,(1),null);
if(cljs.core.truth_(pass_QMARK_)){
return _QMARK_x;
} else {
return taoensso.encore.hthrow.call(null,hard_QMARK_,ns_str,line,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,x_form),pred_form),((have_x_QMARK_)?_QMARK_x:_QMARK_x_err),_QMARK_pred_err);
}
});
/**
 * Like `name` but fully qualified: includes namespace in string when present.
 */
taoensso.encore.fq_name = (function taoensso$encore$fq_name(x){
if(typeof x === 'string'){
return x;
} else {
var n = cljs.core.name.call(null,x);
var temp__4423__auto__ = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(temp__4423__auto__)){
var ns = temp__4423__auto__;
return [cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(n)].join('');
} else {
return n;
}
}
});
taoensso.encore.explode_keyword = (function taoensso$encore$explode_keyword(k){
return clojure.string.split.call(null,taoensso.encore.fq_name.call(null,k),/[\.\/]/);
});
taoensso.encore.merge_keywords = (function taoensso$encore$merge_keywords(var_args){
var args__5979__auto__ = [];
var len__5972__auto___18247 = arguments.length;
var i__5973__auto___18248 = (0);
while(true){
if((i__5973__auto___18248 < len__5972__auto___18247)){
args__5979__auto__.push((arguments[i__5973__auto___18248]));

var G__18249 = (i__5973__auto___18248 + (1));
i__5973__auto___18248 = G__18249;
continue;
} else {
}
break;
}

var argseq__5980__auto__ = ((((1) < args__5979__auto__.length))?(new cljs.core.IndexedSeq(args__5979__auto__.slice((1)),(0))):null);
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5980__auto__);
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__18245){
var vec__18246 = p__18245;
var no_slash_QMARK_ = cljs.core.nth.call(null,vec__18246,(0),null);
var parts = cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.mapv.call(null,taoensso.encore.explode_keyword,cljs.core.filterv.call(null,cljs.core.identity,ks)));
if(cljs.core.empty_QMARK_.call(null,parts)){
return null;
} else {
if(cljs.core.truth_(no_slash_QMARK_)){
return cljs.core.keyword.call(null,clojure.string.join.call(null,".",parts));
} else {
var ppop = cljs.core.pop.call(null,parts);
return cljs.core.keyword.call(null,((cljs.core.empty_QMARK_.call(null,ppop))?null:clojure.string.join.call(null,".",ppop)),cljs.core.peek.call(null,parts));
}
}
});

taoensso.encore.merge_keywords.cljs$lang$maxFixedArity = (1);

taoensso.encore.merge_keywords.cljs$lang$applyTo = (function (seq18243){
var G__18244 = cljs.core.first.call(null,seq18243);
var seq18243__$1 = cljs.core.next.call(null,seq18243);
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic(G__18244,seq18243__$1);
});
taoensso.encore.clamp = (function taoensso$encore$clamp(nmin,nmax,n){
if((n < nmin)){
return nmin;
} else {
if((n > nmax)){
return nmax;
} else {
return n;
}
}
});
taoensso.encore.pow = (function taoensso$encore$pow(n,exp){
return Math.pow(n,exp);
});
taoensso.encore.abs = (function taoensso$encore$abs(n){
if((n < (0))){
return (- n);
} else {
return n;
}
});
taoensso.encore.round = (function taoensso$encore$round(var_args){
var args__5979__auto__ = [];
var len__5972__auto___18255 = arguments.length;
var i__5973__auto___18256 = (0);
while(true){
if((i__5973__auto___18256 < len__5972__auto___18255)){
args__5979__auto__.push((arguments[i__5973__auto___18256]));

var G__18257 = (i__5973__auto___18256 + (1));
i__5973__auto___18256 = G__18257;
continue;
} else {
}
break;
}

var argseq__5980__auto__ = ((((1) < args__5979__auto__.length))?(new cljs.core.IndexedSeq(args__5979__auto__.slice((1)),(0))):null);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5980__auto__);
});

taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__18252){
var vec__18253 = p__18252;
var type = cljs.core.nth.call(null,vec__18253,(0),null);
var nplaces = cljs.core.nth.call(null,vec__18253,(1),null);
var n__$1 = n;
var modifier = (cljs.core.truth_(nplaces)?Math.pow(10.0,nplaces):null);
var n_STAR_ = ((cljs.core.not.call(null,modifier))?n__$1:(n__$1 * modifier));
var rounded = (function (){var G__18254 = ((((function (){var or__4914__auto__ = type;
if(cljs.core.truth_(or__4914__auto__)){
return or__4914__auto__;
} else {
return new cljs.core.Keyword(null,"round","round",2009433328);
}
})() instanceof cljs.core.Keyword))?(function (){var or__4914__auto__ = type;
if(cljs.core.truth_(or__4914__auto__)){
return or__4914__auto__;
} else {
return new cljs.core.Keyword(null,"round","round",2009433328);
}
})().fqn:null);
switch (G__18254) {
case "round":
return Math.round(n_STAR_);

break;
case "floor":
return Math.floor(n_STAR_);

break;
case "ceil":
return Math.ceil(n_STAR_);

break;
case "trunc":
return cljs.core.long$.call(null,n_STAR_);

break;
default:
throw cljs.core.ex_info.call(null,"Unknown round type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),type], null));

}
})();
if(cljs.core.not.call(null,modifier)){
return cljs.core.long$.call(null,rounded);
} else {
return (rounded / modifier);
}
});

taoensso.encore.round.cljs$lang$maxFixedArity = (1);

taoensso.encore.round.cljs$lang$applyTo = (function (seq18250){
var G__18251 = cljs.core.first.call(null,seq18250);
var seq18250__$1 = cljs.core.next.call(null,seq18250);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic(G__18251,seq18250__$1);
});
taoensso.encore.round_STAR_ = taoensso.encore.round;
/**
 * Optimized common case.
 */
taoensso.encore.round1 = (function taoensso$encore$round1(n){
return (Math.round((n * 10.0)) / 10.0);
});
/**
 * Optimized common case.
 */
taoensso.encore.round2 = (function taoensso$encore$round2(n){
return (Math.round((n * 100.0)) / 100.0);
});
/**
 * Returns binary exponential backoff value.
 */
taoensso.encore.exp_backoff = (function taoensso$encore$exp_backoff(var_args){
var args__5979__auto__ = [];
var len__5972__auto___18265 = arguments.length;
var i__5973__auto___18266 = (0);
while(true){
if((i__5973__auto___18266 < len__5972__auto___18265)){
args__5979__auto__.push((arguments[i__5973__auto___18266]));

var G__18267 = (i__5973__auto___18266 + (1));
i__5973__auto___18266 = G__18267;
continue;
} else {
}
break;
}

var argseq__5980__auto__ = ((((1) < args__5979__auto__.length))?(new cljs.core.IndexedSeq(args__5979__auto__.slice((1)),(0))):null);
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5980__auto__);
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic = (function (nattempt,p__18261){
var vec__18262 = p__18261;
var map__18263 = cljs.core.nth.call(null,vec__18262,(0),null);
var map__18263__$1 = ((((!((map__18263 == null)))?((((map__18263.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18263.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18263):map__18263);
var min_SINGLEQUOTE_ = cljs.core.get.call(null,map__18263__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max_SINGLEQUOTE_ = cljs.core.get.call(null,map__18263__$1,new cljs.core.Keyword(null,"max","max",61366548));
var factor = cljs.core.get.call(null,map__18263__$1,new cljs.core.Keyword(null,"factor","factor",-2103172748),(1000));
var binary_exp = Math.pow((2),(nattempt - (1)));
var time = (((binary_exp + cljs.core.rand.call(null,binary_exp)) * 0.5) * factor);
return cljs.core.long$.call(null,(function (){var time__$1 = (cljs.core.truth_(min_SINGLEQUOTE_)?(function (){var x__5245__auto__ = min_SINGLEQUOTE_;
var y__5246__auto__ = time;
return ((x__5245__auto__ > y__5246__auto__) ? x__5245__auto__ : y__5246__auto__);
})():time);
var time__$2 = (cljs.core.truth_(max_SINGLEQUOTE_)?(function (){var x__5252__auto__ = max_SINGLEQUOTE_;
var y__5253__auto__ = time__$1;
return ((x__5252__auto__ < y__5253__auto__) ? x__5252__auto__ : y__5253__auto__);
})():time__$1);
return time__$2;
})());
});

taoensso.encore.exp_backoff.cljs$lang$maxFixedArity = (1);

taoensso.encore.exp_backoff.cljs$lang$applyTo = (function (seq18259){
var G__18260 = cljs.core.first.call(null,seq18259);
var seq18259__$1 = cljs.core.next.call(null,seq18259);
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic(G__18260,seq18259__$1);
});
taoensso.encore.now_dt = (function taoensso$encore$now_dt(){
return (new Date());
});
taoensso.encore.now_udt = (function taoensso$encore$now_udt(){
return (new Date()).getTime();
});
/**
 * Useful for testing.
 */
taoensso.encore.now_udt_mock_fn = (function taoensso$encore$now_udt_mock_fn(var_args){
var args__5979__auto__ = [];
var len__5972__auto___18271 = arguments.length;
var i__5973__auto___18272 = (0);
while(true){
if((i__5973__auto___18272 < len__5972__auto___18271)){
args__5979__auto__.push((arguments[i__5973__auto___18272]));

var G__18273 = (i__5973__auto___18272 + (1));
i__5973__auto___18272 = G__18273;
continue;
} else {
}
break;
}

var argseq__5980__auto__ = ((((0) < args__5979__auto__.length))?(new cljs.core.IndexedSeq(args__5979__auto__.slice((0)),(0))):null);
return taoensso.encore.now_udt_mock_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__5980__auto__);
});

taoensso.encore.now_udt_mock_fn.cljs$core$IFn$_invoke$arity$variadic = (function (p__18269){
var vec__18270 = p__18269;
var mock_udts = cljs.core.nth.call(null,vec__18270,(0),null);
var mock_udts__$1 = (function (){var or__4914__auto__ = mock_udts;
if(cljs.core.truth_(or__4914__auto__)){
return or__4914__auto__;
} else {
return cljs.core.range.call(null);
}
})();
var idx = cljs.core.atom.call(null,(-1));
return ((function (mock_udts__$1,idx,vec__18270,mock_udts){
return (function (){
return cljs.core.nth.call(null,mock_udts__$1,cljs.core.swap_BANG_.call(null,idx,cljs.core.inc));
});
;})(mock_udts__$1,idx,vec__18270,mock_udts))
});

taoensso.encore.now_udt_mock_fn.cljs$lang$maxFixedArity = (0);

taoensso.encore.now_udt_mock_fn.cljs$lang$applyTo = (function (seq18268){
return taoensso.encore.now_udt_mock_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18268));
});
taoensso.encore.secs__GT_ms = (function taoensso$encore$secs__GT_ms(secs){
return cljs.core.long$.call(null,(secs * 1000.0));
});
taoensso.encore.ms__GT_secs = (function taoensso$encore$ms__GT_secs(ms){
return cljs.core.quot.call(null,ms,(1000));
});
/**
 * Returns number of milliseconds in period defined by given args.
 */
taoensso.encore.ms = (function taoensso$encore$ms(var_args){
var args__5979__auto__ = [];
var len__5972__auto___18279 = arguments.length;
var i__5973__auto___18280 = (0);
while(true){
if((i__5973__auto___18280 < len__5972__auto___18279)){
args__5979__auto__.push((arguments[i__5973__auto___18280]));

var G__18281 = (i__5973__auto___18280 + (1));
i__5973__auto___18280 = G__18281;
continue;
} else {
}
break;
}

var argseq__5980__auto__ = ((((0) < args__5979__auto__.length))?(new cljs.core.IndexedSeq(args__5979__auto__.slice((0)),(0))):null);
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(argseq__5980__auto__);
});

taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__18275){
var map__18276 = p__18275;
var map__18276__$1 = ((((!((map__18276 == null)))?((((map__18276.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18276.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18276):map__18276);
var opts = map__18276__$1;
var years = cljs.core.get.call(null,map__18276__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var months = cljs.core.get.call(null,map__18276__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var weeks = cljs.core.get.call(null,map__18276__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var days = cljs.core.get.call(null,map__18276__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var hours = cljs.core.get.call(null,map__18276__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var mins = cljs.core.get.call(null,map__18276__$1,new cljs.core.Keyword(null,"mins","mins",467369676));
var secs = cljs.core.get.call(null,map__18276__$1,new cljs.core.Keyword(null,"secs","secs",1532330091));
var msecs = cljs.core.get.call(null,map__18276__$1,new cljs.core.Keyword(null,"msecs","msecs",1711980553));
var ms = cljs.core.get.call(null,map__18276__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
if(cljs.core.truth_(cljs.core.mapv.call(null,((function (map__18276,map__18276__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms){
return (function (have_in__18278){
return taoensso.encore.hcond.call(null,false,"taoensso.encore",666,(new cljs.core.Delay(((function (map__18276,map__18276__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms){
return (function (){
return have_in__18278;
});})(map__18276,map__18276__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms))
,null)),new cljs.core.Symbol(null,"have-in__18278","have-in__18278",596900337,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null));
});})(map__18276,map__18276__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms))
,cljs.core.keys.call(null,opts)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have","have",574419306,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null),new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)))))].join('')));
}

return taoensso.encore.round.call(null,(((((((((cljs.core.truth_(years)?(((((years * (1000)) * (60)) * (60)) * (24)) * (365)):0.0) + (cljs.core.truth_(months)?(((((months * (1000)) * (60)) * (60)) * (24)) * 29.53):0.0)) + (cljs.core.truth_(weeks)?(((((weeks * (1000)) * (60)) * (60)) * (24)) * (7)):0.0)) + (cljs.core.truth_(days)?((((days * (1000)) * (60)) * (60)) * (24)):0.0)) + (cljs.core.truth_(hours)?(((hours * (1000)) * (60)) * (60)):0.0)) + (cljs.core.truth_(mins)?((mins * (1000)) * (60)):0.0)) + (cljs.core.truth_(secs)?(secs * (1000)):0.0)) + (cljs.core.truth_(msecs)?msecs:0.0)) + (cljs.core.truth_(ms)?ms:0.0)));
});

taoensso.encore.ms.cljs$lang$maxFixedArity = (0);

taoensso.encore.ms.cljs$lang$applyTo = (function (seq18274){
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18274));
});
taoensso.encore.secs = cljs.core.comp.call(null,taoensso.encore.ms__GT_secs,taoensso.encore.ms);
taoensso.encore.singleton_QMARK_ = (function taoensso$encore$singleton_QMARK_(coll){
if(cljs.core.counted_QMARK_.call(null,coll)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),(1));
} else {
return cljs.core.not.call(null,cljs.core.next.call(null,coll));
}
});
taoensso.encore.__GT__QMARK_singleton = (function taoensso$encore$__GT__QMARK_singleton(coll){
if(cljs.core.truth_(taoensso.encore.singleton_QMARK_.call(null,coll))){
var vec__18287 = coll;
var c1 = cljs.core.nth.call(null,vec__18287,(0),null);
return c1;
} else {
return null;
}
});
taoensso.encore.__GT_vec = (function taoensso$encore$__GT_vec(x){
if(cljs.core.vector_QMARK_.call(null,x)){
return x;
} else {
if(cljs.core.sequential_QMARK_.call(null,x)){
return cljs.core.vec.call(null,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);

}
}
});
taoensso.encore.vsplit_first = (function taoensso$encore$vsplit_first(v){
var vec__18289 = v;
var v1 = cljs.core.nth.call(null,vec__18289,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1,(((cljs.core.count.call(null,v) > (1)))?cljs.core.subvec.call(null,v,(1)):null)], null);
});
taoensso.encore.nnil_set = (function taoensso$encore$nnil_set(x){
return cljs.core.disj.call(null,taoensso.encore.set_STAR_.call(null,x),null);
});
taoensso.encore.conj_some = (function taoensso$encore$conj_some(var_args){
var args18290 = [];
var len__5972__auto___18296 = arguments.length;
var i__5973__auto___18297 = (0);
while(true){
if((i__5973__auto___18297 < len__5972__auto___18296)){
args18290.push((arguments[i__5973__auto___18297]));

var G__18298 = (i__5973__auto___18297 + (1));
i__5973__auto___18297 = G__18298;
continue;
} else {
}
break;
}

var G__18295 = args18290.length;
switch (G__18295) {
case 2:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5991__auto__ = (new cljs.core.IndexedSeq(args18290.slice((2)),(0)));
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5991__auto__);

}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2 = (function (coll,_QMARK_x){
if(cljs.core.truth_(taoensso.encore.nnil_QMARK_.call(null,_QMARK_x))){
return cljs.core.conj.call(null,coll,_QMARK_x);
} else {
return coll;
}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic = (function (coll,_QMARK_x,_QMARK_xs){
return cljs.core.reduce.call(null,taoensso.encore.conj_some,taoensso.encore.conj_some.call(null,coll,_QMARK_x),_QMARK_xs);
});

taoensso.encore.conj_some.cljs$lang$applyTo = (function (seq18291){
var G__18292 = cljs.core.first.call(null,seq18291);
var seq18291__$1 = cljs.core.next.call(null,seq18291);
var G__18293 = cljs.core.first.call(null,seq18291__$1);
var seq18291__$2 = cljs.core.next.call(null,seq18291__$1);
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic(G__18292,G__18293,seq18291__$2);
});

taoensso.encore.conj_some.cljs$lang$maxFixedArity = (2);
/**
 * `run!` from Clojure 1.7+
 */
taoensso.encore.backport_run_BANG_ = (function taoensso$encore$backport_run_BANG_(proc,coll){
return cljs.core.reduce.call(null,(function (p1__18301_SHARP_,p2__18300_SHARP_){
return proc.call(null,p2__18300_SHARP_);
}),null,coll);
});
taoensso.encore.translate_signed_idx = (function taoensso$encore$translate_signed_idx(signed_idx,max_idx){
if((signed_idx >= (0))){
var x__5252__auto__ = signed_idx;
var y__5253__auto__ = max_idx;
return ((x__5252__auto__ < y__5253__auto__) ? x__5252__auto__ : y__5253__auto__);
} else {
var x__5245__auto__ = (0);
var y__5246__auto__ = (signed_idx + max_idx);
return ((x__5245__auto__ > y__5246__auto__) ? x__5245__auto__ : y__5246__auto__);
}
});
/**
 * Returns [<inclusive-start-idx*> <exclusive-end-idx*>] for counted 0-indexed
 *   input (str, vec, etc.) with support for:
 *  * Clamping of indexes beyond limits.
 *  * Max-length -> end-index.
 *  * -ive indexes (as +ive indexes but work from back of input):
 *    (+0) (+1) (+2) (+3) (+4)  ; inclusive +ive indexes
 *      h    e    l    l    o   ; 5 count
 *    (-5) (-4) (-3) (-2) (-1)  ; inclusive -ive indexes
 */
taoensso.encore.sub_indexes = (function taoensso$encore$sub_indexes(var_args){
var args__5979__auto__ = [];
var len__5972__auto___18308 = arguments.length;
var i__5973__auto___18309 = (0);
while(true){
if((i__5973__auto___18309 < len__5972__auto___18308)){
args__5979__auto__.push((arguments[i__5973__auto___18309]));

var G__18310 = (i__5973__auto___18309 + (1));
i__5973__auto___18309 = G__18310;
continue;
} else {
}
break;
}

var argseq__5980__auto__ = ((((2) < args__5979__auto__.length))?(new cljs.core.IndexedSeq(args__5979__auto__.slice((2)),(0))):null);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5980__auto__);
});

taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic = (function (x,start_idx,p__18305){
var map__18306 = p__18305;
var map__18306__$1 = ((((!((map__18306 == null)))?((((map__18306.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18306.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18306):map__18306);
var max_len = cljs.core.get.call(null,map__18306__$1,new cljs.core.Keyword(null,"max-len","max-len",-18846016));
var end_idx = cljs.core.get.call(null,map__18306__$1,new cljs.core.Keyword(null,"end-idx","end-idx",-85750788));
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay(((function (map__18306,map__18306__$1,max_len,end_idx){
return (function (){
return max_len;
});})(map__18306,map__18306__$1,max_len,end_idx))
,null)),new cljs.core.Symbol(null,"max-len","max-len",1621685511,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,taoensso.encore.nneg_int_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null)], null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null)], null),new cljs.core.Symbol(null,"max-len","max-len",1621685511,null))))].join('')));
}

var start_idx__$1 = start_idx;
var xlen = cljs.core.count.call(null,x);
var start_idx_STAR_ = taoensso.encore.translate_signed_idx.call(null,start_idx__$1,xlen);
var end_idx_STAR_ = (cljs.core.truth_(max_len)?(function (){var n1__16402__auto__ = (start_idx_STAR_ + max_len);
var n2__16403__auto__ = xlen;
if((n1__16402__auto__ > n2__16403__auto__)){
return n2__16403__auto__;
} else {
return n1__16402__auto__;
}
})():(cljs.core.truth_(end_idx)?(taoensso.encore.translate_signed_idx.call(null,end_idx,xlen) + (1)):xlen
));
if((start_idx_STAR_ > end_idx_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_idx_STAR_,end_idx_STAR_], null);
}
});

taoensso.encore.sub_indexes.cljs$lang$maxFixedArity = (2);

taoensso.encore.sub_indexes.cljs$lang$applyTo = (function (seq18302){
var G__18303 = cljs.core.first.call(null,seq18302);
var seq18302__$1 = cljs.core.next.call(null,seq18302);
var G__18304 = cljs.core.first.call(null,seq18302__$1);
var seq18302__$2 = cljs.core.next.call(null,seq18302__$1);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(G__18303,G__18304,seq18302__$2);
});
/**
 * Like `subvec` but uses `sub-indexes`.
 */
taoensso.encore.subvec_STAR_ = (function taoensso$encore$subvec_STAR_(var_args){
var args__5979__auto__ = [];
var len__5972__auto___18317 = arguments.length;
var i__5973__auto___18318 = (0);
while(true){
if((i__5973__auto___18318 < len__5972__auto___18317)){
args__5979__auto__.push((arguments[i__5973__auto___18318]));

var G__18319 = (i__5973__auto___18318 + (1));
i__5973__auto___18318 = G__18319;
continue;
} else {
}
break;
}

var argseq__5980__auto__ = ((((2) < args__5979__auto__.length))?(new cljs.core.IndexedSeq(args__5979__auto__.slice((2)),(0))):null);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5980__auto__);
});

taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (v,start_idx,p__18314){
var vec__18315 = p__18314;
var _QMARK_max_len = cljs.core.nth.call(null,vec__18315,(0),null);
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay(((function (vec__18315,_QMARK_max_len){
return (function (){
return v;
});})(vec__18315,_QMARK_max_len))
,null)),new cljs.core.Symbol(null,"v","v",1661996586,null),cljs.core.vector_QMARK_,new cljs.core.Symbol(null,"vector?","vector?",-61367869,null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"v","v",1661996586,null))))].join('')));
}

var vec__18316 = taoensso.encore.sub_indexes.call(null,v,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__18316,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__18316,(1),null);
return cljs.core.subvec.call(null,v,start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.subvec_STAR_.cljs$lang$maxFixedArity = (2);

taoensso.encore.subvec_STAR_.cljs$lang$applyTo = (function (seq18311){
var G__18312 = cljs.core.first.call(null,seq18311);
var seq18311__$1 = cljs.core.next.call(null,seq18311);
var G__18313 = cljs.core.first.call(null,seq18311__$1);
var seq18311__$2 = cljs.core.next.call(null,seq18311__$1);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__18312,G__18313,seq18311__$2);
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
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.encore.Swapped = (function (new_val,return_val,__meta,__extmap,__hash){
this.new_val = new_val;
this.return_val = return_val;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5528__auto__,k__5529__auto__){
var self__ = this;
var this__5528__auto____$1 = this;
return cljs.core._lookup.call(null,this__5528__auto____$1,k__5529__auto__,null);
});

taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5530__auto__,k18321,else__5531__auto__){
var self__ = this;
var this__5530__auto____$1 = this;
var G__18323 = (((k18321 instanceof cljs.core.Keyword))?k18321.fqn:null);
switch (G__18323) {
case "new-val":
return self__.new_val;

break;
case "return-val":
return self__.return_val;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k18321,else__5531__auto__);

}
});

taoensso.encore.Swapped.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5542__auto__,writer__5543__auto__,opts__5544__auto__){
var self__ = this;
var this__5542__auto____$1 = this;
var pr_pair__5545__auto__ = ((function (this__5542__auto____$1){
return (function (keyval__5546__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5543__auto__,cljs.core.pr_writer,""," ","",opts__5544__auto__,keyval__5546__auto__);
});})(this__5542__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5543__auto__,pr_pair__5545__auto__,"#taoensso.encore.Swapped{",", ","}",opts__5544__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-val","new-val",-738158599),self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-val","return-val",-512772489),self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IIterable$ = true;

taoensso.encore.Swapped.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18320){
var self__ = this;
var G__18320__$1 = this;
return (new cljs.core.RecordIter((0),G__18320__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"return-val","return-val",-512772489)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.encore.Swapped.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5526__auto__){
var self__ = this;
var this__5526__auto____$1 = this;
return self__.__meta;
});

taoensso.encore.Swapped.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5522__auto__){
var self__ = this;
var this__5522__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5532__auto__){
var self__ = this;
var this__5532__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5523__auto__){
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

taoensso.encore.Swapped.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5524__auto__,other__5525__auto__){
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

taoensso.encore.Swapped.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5537__auto__,k__5538__auto__){
var self__ = this;
var this__5537__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"return-val","return-val",-512772489),null,new cljs.core.Keyword(null,"new-val","new-val",-738158599),null], null), null),k__5538__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5537__auto____$1),self__.__meta),k__5538__auto__);
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5538__auto__)),null));
}
});

taoensso.encore.Swapped.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5535__auto__,k__5536__auto__,G__18320){
var self__ = this;
var this__5535__auto____$1 = this;
var pred__18324 = cljs.core.keyword_identical_QMARK_;
var expr__18325 = k__5536__auto__;
if(cljs.core.truth_(pred__18324.call(null,new cljs.core.Keyword(null,"new-val","new-val",-738158599),expr__18325))){
return (new taoensso.encore.Swapped(G__18320,self__.return_val,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18324.call(null,new cljs.core.Keyword(null,"return-val","return-val",-512772489),expr__18325))){
return (new taoensso.encore.Swapped(self__.new_val,G__18320,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5536__auto__,G__18320),null));
}
}
});

taoensso.encore.Swapped.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5540__auto__){
var self__ = this;
var this__5540__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-val","new-val",-738158599),self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-val","return-val",-512772489),self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5527__auto__,G__18320){
var self__ = this;
var this__5527__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,G__18320,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5533__auto__,entry__5534__auto__){
var self__ = this;
var this__5533__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5534__auto__)){
return cljs.core._assoc.call(null,this__5533__auto____$1,cljs.core._nth.call(null,entry__5534__auto__,(0)),cljs.core._nth.call(null,entry__5534__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5533__auto____$1,entry__5534__auto__);
}
});

taoensso.encore.Swapped.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-val","new-val",902372928,null),new cljs.core.Symbol(null,"return-val","return-val",1127759038,null)], null);
});

taoensso.encore.Swapped.cljs$lang$type = true;

taoensso.encore.Swapped.cljs$lang$ctorPrSeq = (function (this__5562__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.encore/Swapped");
});

taoensso.encore.Swapped.cljs$lang$ctorPrWriter = (function (this__5562__auto__,writer__5563__auto__){
return cljs.core._write.call(null,writer__5563__auto__,"taoensso.encore/Swapped");
});

taoensso.encore.__GT_Swapped = (function taoensso$encore$__GT_Swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val,null,null,null));
});

taoensso.encore.map__GT_Swapped = (function taoensso$encore$map__GT_Swapped(G__18322){
return (new taoensso.encore.Swapped(new cljs.core.Keyword(null,"new-val","new-val",-738158599).cljs$core$IFn$_invoke$arity$1(G__18322),new cljs.core.Keyword(null,"return-val","return-val",-512772489).cljs$core$IFn$_invoke$arity$1(G__18322),null,cljs.core.dissoc.call(null,G__18322,new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"return-val","return-val",-512772489)),null));
});

taoensso.encore.swapped = (function taoensso$encore$swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val,null,null,null));
});
taoensso.encore.swapped_QMARK_ = (function taoensso$encore$swapped_QMARK_(x){
return (x instanceof taoensso.encore.Swapped);
});
taoensso.encore.swapped_STAR_ = (function taoensso$encore$swapped_STAR_(x){
if(cljs.core.truth_(taoensso.encore.swapped_QMARK_.call(null,x))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-val","new-val",-738158599).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"return-val","return-val",-512772489).cljs$core$IFn$_invoke$arity$1(x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
}
});
taoensso.encore.dissoc_in;
/**
 * [<new-val> <return-val>]
 */
taoensso.encore.swapped_STAR__in = (function taoensso$encore$swapped_STAR__in(m,ks,f){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
return taoensso.encore.swapped_STAR_.call(null,taoensso.encore.dissoc_in.call(null,m,cljs.core.butlast.call(null,ks),cljs.core.last.call(null,ks)));
} else {
var old_val_in = cljs.core.get_in.call(null,m,ks);
var vec__18329 = taoensso.encore.swapped_STAR_.call(null,f.call(null,old_val_in));
var new_val_in = cljs.core.nth.call(null,vec__18329,(0),null);
var return_val = cljs.core.nth.call(null,vec__18329,(1),null);
var new_val = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,new_val_in,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))?taoensso.encore.dissoc_in.call(null,m,cljs.core.butlast.call(null,ks),cljs.core.last.call(null,ks)):cljs.core.assoc_in.call(null,m,ks,new_val_in));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_val,return_val], null);
}
});
/**
 * Reduces input with
 *   [<type> <ks> <reset-val-or-swap-fn>] or
 *       [<ks> <reset-val-or-swap-fn>] ops.
 */
taoensso.encore.replace_in_STAR_ = (function taoensso$encore$replace_in_STAR_(_QMARK_vf_type,m,ops){
return cljs.core.reduce.call(null,(function (accum,_QMARK_op){
if(cljs.core.not.call(null,_QMARK_op)){
return accum;
} else {
var vec__18332 = ((cljs.core.not.call(null,_QMARK_vf_type))?_QMARK_op:cljs.core.cons.call(null,_QMARK_vf_type,_QMARK_op));
var vf_type = cljs.core.nth.call(null,vec__18332,(0),null);
var ks = cljs.core.nth.call(null,vec__18332,(1),null);
var valf = cljs.core.nth.call(null,vec__18332,(2),null);
var G__18333 = (((vf_type instanceof cljs.core.Keyword))?vf_type.fqn:null);
switch (G__18333) {
case "reset":
if(cljs.core.empty_QMARK_.call(null,ks)){
return valf;
} else {
return cljs.core.assoc_in.call(null,accum,ks,valf);
}

break;
case "swap":
if(cljs.core.empty_QMARK_.call(null,ks)){
return valf.call(null,accum);
} else {
return cljs.core.nth.call(null,taoensso.encore.swapped_STAR__in.call(null,accum,ks,valf),(0));
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(vf_type)].join('')));

}
}
}),m,ops);
});
/**
 * Experimental. For use with `swap!`, etc.
 */
taoensso.encore.replace_in = (function taoensso$encore$replace_in(var_args){
var args__5979__auto__ = [];
var len__5972__auto___18337 = arguments.length;
var i__5973__auto___18338 = (0);
while(true){
if((i__5973__auto___18338 < len__5972__auto___18337)){
args__5979__auto__.push((arguments[i__5973__auto___18338]));

var G__18339 = (i__5973__auto___18338 + (1));
i__5973__auto___18338 = G__18339;
continue;
} else {
}
break;
}

var argseq__5980__auto__ = ((((1) < args__5979__auto__.length))?(new cljs.core.IndexedSeq(args__5979__auto__.slice((1)),(0))):null);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5980__auto__);
});

taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ops){
return taoensso.encore.replace_in_STAR_.call(null,null,m,ops);
});

taoensso.encore.replace_in.cljs$lang$maxFixedArity = (1);

taoensso.encore.replace_in.cljs$lang$applyTo = (function (seq18335){
var G__18336 = cljs.core.first.call(null,seq18335);
var seq18335__$1 = cljs.core.next.call(null,seq18335);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic(G__18336,seq18335__$1);
});
/**
 * More powerful version of `swap!`:
 *  * Supports optional `update-in` semantics.
 *  * Swap fn can return `(swapped <new-val> <return-val>)` rather than just
 *    <new-val>. This is useful when writing atomic pull fns, etc.
 */
taoensso.encore.swap_in_BANG_ = (function taoensso$encore$swap_in_BANG_(var_args){
var args18340 = [];
var len__5972__auto___18349 = arguments.length;
var i__5973__auto___18350 = (0);
while(true){
if((i__5973__auto___18350 < len__5972__auto___18349)){
args18340.push((arguments[i__5973__auto___18350]));

var G__18351 = (i__5973__auto___18350 + (1));
i__5973__auto___18350 = G__18351;
continue;
} else {
}
break;
}

var G__18346 = args18340.length;
switch (G__18346) {
case 3:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__5991__auto__ = (new cljs.core.IndexedSeq(args18340.slice((3)),(0)));
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5991__auto__);

}
});

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,f){
if(cljs.core.empty_QMARK_.call(null,ks)){
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var vec__18347 = taoensso.encore.swapped_STAR_.call(null,f.call(null,old_val));
var new_val = cljs.core.nth.call(null,vec__18347,(0),null);
var return_val = cljs.core.nth.call(null,vec__18347,(1),null);
if(cljs.core.not.call(null,cljs.core.compare_and_set_BANG_.call(null,atom_,old_val,new_val))){
continue;
} else {
return return_val;
}
break;
}
} else {
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var vec__18348 = taoensso.encore.swapped_STAR__in.call(null,old_val,ks,f);
var new_val = cljs.core.nth.call(null,vec__18348,(0),null);
var return_val = cljs.core.nth.call(null,vec__18348,(1),null);
if(cljs.core.not.call(null,cljs.core.compare_and_set_BANG_.call(null,atom_,old_val,new_val))){
continue;
} else {
return return_val;
}
break;
}
}
});

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom_,ks,f,more){
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay((function (){
return cljs.core.count.call(null,more);
}),null)),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"more","more",-418290273,null)),cljs.core.even_QMARK_,new cljs.core.Symbol(null,"even?","even?",-1827825394,null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"more","more",-418290273,null)))))].join('')));
}

var pairs = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks,f], null)], null),cljs.core.partition.call(null,(2),more));
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var new_val = taoensso.encore.replace_in_STAR_.call(null,new cljs.core.Keyword(null,"swap","swap",228675637),old_val,pairs);
if(cljs.core.not.call(null,cljs.core.compare_and_set_BANG_.call(null,atom_,old_val,new_val))){
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old_val,new cljs.core.Keyword(null,"new","new",-2085437848),new_val], null);
}
break;
}
});

taoensso.encore.swap_in_BANG_.cljs$lang$applyTo = (function (seq18341){
var G__18342 = cljs.core.first.call(null,seq18341);
var seq18341__$1 = cljs.core.next.call(null,seq18341);
var G__18343 = cljs.core.first.call(null,seq18341__$1);
var seq18341__$2 = cljs.core.next.call(null,seq18341__$1);
var G__18344 = cljs.core.first.call(null,seq18341__$2);
var seq18341__$3 = cljs.core.next.call(null,seq18341__$2);
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18342,G__18343,G__18344,seq18341__$3);
});

taoensso.encore.swap_in_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Is to `reset!` as `swap-in!` is to `swap!`.
 */
taoensso.encore.reset_in_BANG_ = (function taoensso$encore$reset_in_BANG_(var_args){
var args18353 = [];
var len__5972__auto___18360 = arguments.length;
var i__5973__auto___18361 = (0);
while(true){
if((i__5973__auto___18361 < len__5972__auto___18360)){
args18353.push((arguments[i__5973__auto___18361]));

var G__18362 = (i__5973__auto___18361 + (1));
i__5973__auto___18361 = G__18362;
continue;
} else {
}
break;
}

var G__18359 = args18353.length;
switch (G__18359) {
case 3:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__5991__auto__ = (new cljs.core.IndexedSeq(args18353.slice((3)),(0)));
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5991__auto__);

}
});

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,new_val){
if(cljs.core.empty_QMARK_.call(null,ks)){
return cljs.core.reset_BANG_.call(null,atom_,new_val);
} else {
return cljs.core.swap_BANG_.call(null,atom_,(function (old_val){
return cljs.core.assoc_in.call(null,old_val,ks,new_val);
}));
}
});

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom_,ks,new_val,more){
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay((function (){
return cljs.core.count.call(null,more);
}),null)),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"more","more",-418290273,null)),cljs.core.even_QMARK_,new cljs.core.Symbol(null,"even?","even?",-1827825394,null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"more","more",-418290273,null)))))].join('')));
}

var pairs = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks,new_val], null)], null),cljs.core.partition.call(null,(2),more));
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var new_val__$1 = taoensso.encore.replace_in_STAR_.call(null,new cljs.core.Keyword(null,"reset","reset",-800929946),old_val,pairs);
if(cljs.core.not.call(null,cljs.core.compare_and_set_BANG_.call(null,atom_,old_val,new_val__$1))){
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old_val,new cljs.core.Keyword(null,"new","new",-2085437848),new_val__$1], null);
}
break;
}
});

taoensso.encore.reset_in_BANG_.cljs$lang$applyTo = (function (seq18354){
var G__18355 = cljs.core.first.call(null,seq18354);
var seq18354__$1 = cljs.core.next.call(null,seq18354);
var G__18356 = cljs.core.first.call(null,seq18354__$1);
var seq18354__$2 = cljs.core.next.call(null,seq18354__$1);
var G__18357 = cljs.core.first.call(null,seq18354__$2);
var seq18354__$3 = cljs.core.next.call(null,seq18354__$2);
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18355,G__18356,G__18357,seq18354__$3);
});

taoensso.encore.reset_in_BANG_.cljs$lang$maxFixedArity = (3);
taoensso.encore.dissoc_in = (function taoensso$encore$dissoc_in(var_args){
var args__5979__auto__ = [];
var len__5972__auto___18367 = arguments.length;
var i__5973__auto___18368 = (0);
while(true){
if((i__5973__auto___18368 < len__5972__auto___18367)){
args__5979__auto__.push((arguments[i__5973__auto___18368]));

var G__18369 = (i__5973__auto___18368 + (1));
i__5973__auto___18368 = G__18369;
continue;
} else {
}
break;
}

var argseq__5980__auto__ = ((((2) < args__5979__auto__.length))?(new cljs.core.IndexedSeq(args__5979__auto__.slice((2)),(0))):null);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5980__auto__);
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,dissoc_ks){
if(cljs.core.empty_QMARK_.call(null,ks)){
return cljs.core.apply.call(null,cljs.core.dissoc,m,dissoc_ks);
} else {
return cljs.core.apply.call(null,cljs.core.update_in,m,ks,cljs.core.dissoc,dissoc_ks);
}
});

taoensso.encore.dissoc_in.cljs$lang$maxFixedArity = (2);

taoensso.encore.dissoc_in.cljs$lang$applyTo = (function (seq18364){
var G__18365 = cljs.core.first.call(null,seq18364);
var seq18364__$1 = cljs.core.next.call(null,seq18364);
var G__18366 = cljs.core.first.call(null,seq18364__$1);
var seq18364__$2 = cljs.core.next.call(null,seq18364__$1);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic(G__18365,G__18366,seq18364__$2);
});
taoensso.encore.contains_in_QMARK_ = (function taoensso$encore$contains_in_QMARK_(coll,ks){
return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,coll,cljs.core.butlast.call(null,ks)),cljs.core.last.call(null,ks));
});
/**
 * Assocs each kv iff its value is not nil.
 */
taoensso.encore.assoc_some = (function taoensso$encore$assoc_some(var_args){
var args__5979__auto__ = [];
var len__5972__auto___18380 = arguments.length;
var i__5973__auto___18381 = (0);
while(true){
if((i__5973__auto___18381 < len__5972__auto___18380)){
args__5979__auto__.push((arguments[i__5973__auto___18381]));

var G__18382 = (i__5973__auto___18381 + (1));
i__5973__auto___18381 = G__18382;
continue;
} else {
}
break;
}

var argseq__5980__auto__ = ((((1) < args__5979__auto__.length))?(new cljs.core.IndexedSeq(args__5979__auto__.slice((1)),(0))):null);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5980__auto__);
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay((function (){
return cljs.core.count.call(null,kvs);
}),null)),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)),cljs.core.even_QMARK_,new cljs.core.Symbol(null,"even?","even?",-1827825394,null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__4914__auto__ = m;
if(cljs.core.truth_(or__4914__auto__)){
return or__4914__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__5686__auto__ = (function taoensso$encore$iter__18372(s__18373){
return (new cljs.core.LazySeq(null,(function (){
var s__18373__$1 = s__18373;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__18373__$1);
if(temp__4425__auto__){
var s__18373__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18373__$2)){
var c__5684__auto__ = cljs.core.chunk_first.call(null,s__18373__$2);
var size__5685__auto__ = cljs.core.count.call(null,c__5684__auto__);
var b__18375 = cljs.core.chunk_buffer.call(null,size__5685__auto__);
if((function (){var i__18374 = (0);
while(true){
if((i__18374 < size__5685__auto__)){
var vec__18378 = cljs.core._nth.call(null,c__5684__auto__,i__18374);
var k = cljs.core.nth.call(null,vec__18378,(0),null);
var v = cljs.core.nth.call(null,vec__18378,(1),null);
if(!((v == null))){
cljs.core.chunk_append.call(null,b__18375,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__18383 = (i__18374 + (1));
i__18374 = G__18383;
continue;
} else {
var G__18384 = (i__18374 + (1));
i__18374 = G__18384;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18375),taoensso$encore$iter__18372.call(null,cljs.core.chunk_rest.call(null,s__18373__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18375),null);
}
} else {
var vec__18379 = cljs.core.first.call(null,s__18373__$2);
var k = cljs.core.nth.call(null,vec__18379,(0),null);
var v = cljs.core.nth.call(null,vec__18379,(1),null);
if(!((v == null))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),taoensso$encore$iter__18372.call(null,cljs.core.rest.call(null,s__18373__$2)));
} else {
var G__18385 = cljs.core.rest.call(null,s__18373__$2);
s__18373__$1 = G__18385;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5686__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

taoensso.encore.assoc_some.cljs$lang$maxFixedArity = (1);

taoensso.encore.assoc_some.cljs$lang$applyTo = (function (seq18370){
var G__18371 = cljs.core.first.call(null,seq18370);
var seq18370__$1 = cljs.core.next.call(null,seq18370);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic(G__18371,seq18370__$1);
});
/**
 * Assocs each kv iff its val is truthy.
 */
taoensso.encore.assoc_when = (function taoensso$encore$assoc_when(var_args){
var args__5979__auto__ = [];
var len__5972__auto___18396 = arguments.length;
var i__5973__auto___18397 = (0);
while(true){
if((i__5973__auto___18397 < len__5972__auto___18396)){
args__5979__auto__.push((arguments[i__5973__auto___18397]));

var G__18398 = (i__5973__auto___18397 + (1));
i__5973__auto___18397 = G__18398;
continue;
} else {
}
break;
}

var argseq__5980__auto__ = ((((1) < args__5979__auto__.length))?(new cljs.core.IndexedSeq(args__5979__auto__.slice((1)),(0))):null);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5980__auto__);
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay((function (){
return cljs.core.count.call(null,kvs);
}),null)),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)),cljs.core.even_QMARK_,new cljs.core.Symbol(null,"even?","even?",-1827825394,null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__4914__auto__ = m;
if(cljs.core.truth_(or__4914__auto__)){
return or__4914__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__5686__auto__ = (function taoensso$encore$iter__18388(s__18389){
return (new cljs.core.LazySeq(null,(function (){
var s__18389__$1 = s__18389;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__18389__$1);
if(temp__4425__auto__){
var s__18389__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18389__$2)){
var c__5684__auto__ = cljs.core.chunk_first.call(null,s__18389__$2);
var size__5685__auto__ = cljs.core.count.call(null,c__5684__auto__);
var b__18391 = cljs.core.chunk_buffer.call(null,size__5685__auto__);
if((function (){var i__18390 = (0);
while(true){
if((i__18390 < size__5685__auto__)){
var vec__18394 = cljs.core._nth.call(null,c__5684__auto__,i__18390);
var k = cljs.core.nth.call(null,vec__18394,(0),null);
var v = cljs.core.nth.call(null,vec__18394,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__18391,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__18399 = (i__18390 + (1));
i__18390 = G__18399;
continue;
} else {
var G__18400 = (i__18390 + (1));
i__18390 = G__18400;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18391),taoensso$encore$iter__18388.call(null,cljs.core.chunk_rest.call(null,s__18389__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18391),null);
}
} else {
var vec__18395 = cljs.core.first.call(null,s__18389__$2);
var k = cljs.core.nth.call(null,vec__18395,(0),null);
var v = cljs.core.nth.call(null,vec__18395,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),taoensso$encore$iter__18388.call(null,cljs.core.rest.call(null,s__18389__$2)));
} else {
var G__18401 = cljs.core.rest.call(null,s__18389__$2);
s__18389__$1 = G__18401;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5686__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

taoensso.encore.assoc_when.cljs$lang$maxFixedArity = (1);

taoensso.encore.assoc_when.cljs$lang$applyTo = (function (seq18386){
var G__18387 = cljs.core.first.call(null,seq18386);
var seq18386__$1 = cljs.core.next.call(null,seq18386);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__18387,seq18386__$1);
});
taoensso.encore.queue_QMARK_ = (function taoensso$encore$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns a PersistentQueue.
 */
taoensso.encore.queue = (function taoensso$encore$queue(var_args){
var args18402 = [];
var len__5972__auto___18405 = arguments.length;
var i__5973__auto___18406 = (0);
while(true){
if((i__5973__auto___18406 < len__5972__auto___18405)){
args18402.push((arguments[i__5973__auto___18406]));

var G__18407 = (i__5973__auto___18406 + (1));
i__5973__auto___18406 = G__18407;
continue;
} else {
}
break;
}

var G__18404 = args18402.length;
switch (G__18404) {
case 0:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18402.length)].join('')));

}
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.call(null,taoensso.encore.queue.call(null),coll);
});

taoensso.encore.queue.cljs$lang$maxFixedArity = 1;
taoensso.encore.queue_STAR_ = (function taoensso$encore$queue_STAR_(var_args){
var args__5979__auto__ = [];
var len__5972__auto___18410 = arguments.length;
var i__5973__auto___18411 = (0);
while(true){
if((i__5973__auto___18411 < len__5972__auto___18410)){
args__5979__auto__.push((arguments[i__5973__auto___18411]));

var G__18412 = (i__5973__auto___18411 + (1));
i__5973__auto___18411 = G__18412;
continue;
} else {
}
break;
}

var argseq__5980__auto__ = ((((0) < args__5979__auto__.length))?(new cljs.core.IndexedSeq(args__5979__auto__.slice((0)),(0))):null);
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__5980__auto__);
});

taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (items){
return taoensso.encore.queue.call(null,items);
});

taoensso.encore.queue_STAR_.cljs$lang$maxFixedArity = (0);

taoensso.encore.queue_STAR_.cljs$lang$applyTo = (function (seq18409){
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18409));
});
/**
 * (seq     {:a :A}) => ([:a :A])
 * (seq-kvs {:a :A}) => (:a :A)
 */
taoensso.encore.seq_kvs = cljs.core.partial.call(null,cljs.core.reduce,cljs.core.concat);
/**
 * Like `apply` but assumes last arg is a map whose elements should be applied
 *   to `f` as an unpaired seq:
 *  (mapply (fn [x & {:keys [y z]}] (str x y z)) 1 {:y 2 :z 3})
 *    where fn will receive args as: `(1 :y 2 :z 3)`.
 */
taoensso.encore.mapply = (function taoensso$encore$mapply(var_args){
var args__5979__auto__ = [];
var len__5972__auto___18415 = arguments.length;
var i__5973__auto___18416 = (0);
while(true){
if((i__5973__auto___18416 < len__5972__auto___18415)){
args__5979__auto__.push((arguments[i__5973__auto___18416]));

var G__18417 = (i__5973__auto___18416 + (1));
i__5973__auto___18416 = G__18417;
continue;
} else {
}
break;
}

var argseq__5980__auto__ = ((((1) < args__5979__auto__.length))?(new cljs.core.IndexedSeq(args__5979__auto__.slice((1)),(0))):null);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5980__auto__);
});

taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,f,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),taoensso.encore.seq_kvs.call(null,cljs.core.last.call(null,args))));
});

taoensso.encore.mapply.cljs$lang$maxFixedArity = (1);

taoensso.encore.mapply.cljs$lang$applyTo = (function (seq18413){
var G__18414 = cljs.core.first.call(null,seq18413);
var seq18413__$1 = cljs.core.next.call(null,seq18413);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic(G__18414,seq18413__$1);
});
/**
 * Workaround for Clojure versions [1.4, 1.5) that blow up on `reduce-kv`s
 *   against a nil coll, Ref. http://dev.clojure.org/jira/browse/CLJ-1098.
 */
taoensso.encore.clj1098 = (function taoensso$encore$clj1098(x){
var or__4914__auto__ = x;
if(cljs.core.truth_(or__4914__auto__)){
return or__4914__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
taoensso.encore.map_kvs = (function taoensso$encore$map_kvs(kf,vf,m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var kf__$1 = ((cljs.core.not.call(null,taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758))))?kf:(function (k,_){
return cljs.core.keyword.call(null,k);
}));
var vf__$1 = ((cljs.core.not.call(null,taoensso.encore.kw_identical_QMARK_.call(null,vf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758))))?vf:((function (kf__$1){
return (function (_,v){
return cljs.core.keyword.call(null,v);
});})(kf__$1))
);
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (kf__$1,vf__$1){
return (function (m__$1,k,v){
return cljs.core.assoc_BANG_.call(null,m__$1,(cljs.core.truth_(kf__$1)?kf__$1.call(null,k,v):k),(cljs.core.truth_(vf__$1)?vf__$1.call(null,k,v):v));
});})(kf__$1,vf__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
}
});
taoensso.encore.map_keys = (function taoensso$encore$map_keys(f,m){
return taoensso.encore.map_kvs.call(null,(function (k,_){
return f.call(null,k);
}),null,m);
});
taoensso.encore.map_vals = (function taoensso$encore$map_vals(f,m){
return taoensso.encore.map_kvs.call(null,null,(function (_,v){
return f.call(null,v);
}),m);
});
taoensso.encore.filter_kvs = (function taoensso$encore$filter_kvs(predk,predv,m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_((function (){var and__4902__auto__ = predk.call(null,k);
if(cljs.core.truth_(and__4902__auto__)){
return predv.call(null,v);
} else {
return and__4902__auto__;
}
})())){
return m__$1;
} else {
return cljs.core.dissoc.call(null,m__$1,k);
}
}),m,m);
}
});
taoensso.encore.filter_keys = (function taoensso$encore$filter_keys(pred,m){
return taoensso.encore.filter_kvs.call(null,pred,cljs.core.constantly.call(null,true),m);
});
taoensso.encore.filter_vals = (function taoensso$encore$filter_vals(pred,m){
return taoensso.encore.filter_kvs.call(null,cljs.core.constantly.call(null,true),pred,m);
});
/**
 * Smaller, common-case version of `filter-vals`. Esp useful with `nil?`/`blank?`
 *   pred when constructing maps: {:foo (when _ <...>) :bar (when _ <...>)} in a
 *   way that preservers :or semantics.
 */
taoensso.encore.remove_vals = (function taoensso$encore$remove_vals(pred,m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,v))){
return cljs.core.dissoc.call(null,m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});
taoensso.encore.keywordize_map = (function taoensso$encore$keywordize_map(m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
return cljs.core.assoc.call(null,m__$1,cljs.core.keyword.call(null,k),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
}
});
/**
 * Cross between `hash-map` & `map-kvs`.
 */
taoensso.encore.as_map = (function taoensso$encore$as_map(var_args){
var args__5979__auto__ = [];
var len__5972__auto___18426 = arguments.length;
var i__5973__auto___18427 = (0);
while(true){
if((i__5973__auto___18427 < len__5972__auto___18426)){
args__5979__auto__.push((arguments[i__5973__auto___18427]));

var G__18428 = (i__5973__auto___18427 + (1));
i__5973__auto___18427 = G__18428;
continue;
} else {
}
break;
}

var argseq__5980__auto__ = ((((1) < args__5979__auto__.length))?(new cljs.core.IndexedSeq(args__5979__auto__.slice((1)),(0))):null);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5980__auto__);
});

taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs,p__18420){
var vec__18421 = p__18420;
var kf = cljs.core.nth.call(null,vec__18421,(0),null);
var vf = cljs.core.nth.call(null,vec__18421,(1),null);
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay(((function (vec__18421,kf,vf){
return (function (){
return kvs;
});})(vec__18421,kf,vf))
,null)),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.sequential_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null)], null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null)], null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))].join('')));
}

if((function (){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay(((function (vec__18421,kf,vf){
return (function (){
return kf;
});})(vec__18421,kf,vf))
,null)),new cljs.core.Symbol(null,"kf","kf",-1046348180,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.ifn_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null)], null)),taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay(((function (vec__18421,kf,vf){
return (function (){
return vf;
});})(vec__18421,kf,vf))
,null)),new cljs.core.Symbol(null,"vf","vf",1319108258,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.ifn_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null)], null))], null);

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null)], null),new cljs.core.Symbol(null,"kf","kf",-1046348180,null),new cljs.core.Symbol(null,"vf","vf",1319108258,null))))].join('')));
}

var _PERCENT_ = ((cljs.core.empty_QMARK_.call(null,kvs))?cljs.core.PersistentArrayMap.EMPTY:(function (){var kf__$1 = ((cljs.core.not.call(null,taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758))))?kf:((function (vec__18421,kf,vf){
return (function (k,_){
return cljs.core.keyword.call(null,k);
});})(vec__18421,kf,vf))
);
var m = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var G__18423 = kvs;
var vec__18424 = G__18423;
var k = cljs.core.nth.call(null,vec__18424,(0),null);
var v = cljs.core.nth.call(null,vec__18424,(1),null);
var s = vec__18424;
var m__$1 = m;
var G__18423__$1 = G__18423;
while(true){
var m__$2 = m__$1;
var vec__18425 = G__18423__$1;
var k__$1 = cljs.core.nth.call(null,vec__18425,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__18425,(1),null);
var s__$1 = vec__18425;
var k__$2 = ((cljs.core.not.call(null,kf__$1))?k__$1:kf__$1.call(null,k__$1,v__$1));
var v__$2 = ((cljs.core.not.call(null,vf))?v__$1:vf.call(null,k__$2,v__$1));
var new_m = cljs.core.assoc_BANG_.call(null,m__$2,k__$2,v__$2);
var temp__4423__auto__ = cljs.core.nnext.call(null,s__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var n = temp__4423__auto__;
var G__18429 = new_m;
var G__18430 = n;
m__$1 = G__18429;
G__18423__$1 = G__18430;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,new_m);
}
break;
}
})());
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay(((function (_PERCENT_,vec__18421,kf,vf){
return (function (){
return _PERCENT_;
});})(_PERCENT_,vec__18421,kf,vf))
,null)),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.map_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)], null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)], null),new cljs.core.Symbol(null,"%","%",-950237169,null))))].join('')));
}

return _PERCENT_;
});

taoensso.encore.as_map.cljs$lang$maxFixedArity = (1);

taoensso.encore.as_map.cljs$lang$applyTo = (function (seq18418){
var G__18419 = cljs.core.first.call(null,seq18418);
var seq18418__$1 = cljs.core.next.call(null,seq18418);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic(G__18419,seq18418__$1);
});
/**
 * Faster `zipmap` using transients.
 */
taoensso.encore.fzipmap = (function taoensso$encore$fzipmap(ks,vs){
var m = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ks__$1 = cljs.core.seq.call(null,ks);
var vs__$1 = cljs.core.seq.call(null,vs);
while(true){
if(!((ks__$1) && (vs__$1))){
return cljs.core.persistent_BANG_.call(null,m);
} else {
var G__18431 = cljs.core.assoc_BANG_.call(null,m,cljs.core.first.call(null,ks__$1),cljs.core.first.call(null,vs__$1));
var G__18432 = cljs.core.next.call(null,ks__$1);
var G__18433 = cljs.core.next.call(null,vs__$1);
m = G__18431;
ks__$1 = G__18432;
vs__$1 = G__18433;
continue;
}
break;
}
});
/**
 * Like `into` but supports multiple "from"s.
 */
taoensso.encore.into_all = (function taoensso$encore$into_all(var_args){
var args18434 = [];
var len__5972__auto___18440 = arguments.length;
var i__5973__auto___18441 = (0);
while(true){
if((i__5973__auto___18441 < len__5972__auto___18440)){
args18434.push((arguments[i__5973__auto___18441]));

var G__18442 = (i__5973__auto___18441 + (1));
i__5973__auto___18441 = G__18442;
continue;
} else {
}
break;
}

var G__18439 = args18434.length;
switch (G__18439) {
case 2:
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5991__auto__ = (new cljs.core.IndexedSeq(args18434.slice((2)),(0)));
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5991__auto__);

}
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.into.call(null,to,from);
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic = (function (to,from,more){
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.into.call(null,to,from),more);
});

taoensso.encore.into_all.cljs$lang$applyTo = (function (seq18435){
var G__18436 = cljs.core.first.call(null,seq18435);
var seq18435__$1 = cljs.core.next.call(null,seq18435);
var G__18437 = cljs.core.first.call(null,seq18435__$1);
var seq18435__$2 = cljs.core.next.call(null,seq18435__$1);
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic(G__18436,G__18437,seq18435__$2);
});

taoensso.encore.into_all.cljs$lang$maxFixedArity = (2);
/**
 * Greedy version of `interleave`, Ref. http://goo.gl/KvzqWb.
 */
taoensso.encore.interleave_all = (function taoensso$encore$interleave_all(var_args){
var args18444 = [];
var len__5972__auto___18450 = arguments.length;
var i__5973__auto___18451 = (0);
while(true){
if((i__5973__auto___18451 < len__5972__auto___18450)){
args18444.push((arguments[i__5973__auto___18451]));

var G__18452 = (i__5973__auto___18451 + (1));
i__5973__auto___18451 = G__18452;
continue;
} else {
}
break;
}

var G__18449 = args18444.length;
switch (G__18449) {
case 0:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5991__auto__ = (new cljs.core.IndexedSeq(args18444.slice((2)),(0)));
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5991__auto__);

}
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.List.EMPTY;
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq.call(null,c1);
var s2 = cljs.core.seq.call(null,c2);
if((s1) && (s2)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s1),cljs.core.cons.call(null,cljs.core.first.call(null,s2),taoensso.encore.interleave_all.call(null,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2))));
} else {
if(s1){
return s1;
} else {
if(s2){
return s2;
} else {
return null;
}
}
}
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1)));
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss),cljs.core.apply.call(null,taoensso.encore.interleave_all,cljs.core.map.call(null,cljs.core.rest,ss)));
}),null,null));
});

taoensso.encore.interleave_all.cljs$lang$applyTo = (function (seq18445){
var G__18446 = cljs.core.first.call(null,seq18445);
var seq18445__$1 = cljs.core.next.call(null,seq18445);
var G__18447 = cljs.core.first.call(null,seq18445__$1);
var seq18445__$2 = cljs.core.next.call(null,seq18445__$1);
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic(G__18446,G__18447,seq18445__$2);
});

taoensso.encore.interleave_all.cljs$lang$maxFixedArity = (2);
taoensso.encore.takev = (function taoensso$encore$takev(n,coll){
if(cljs.core.vector_QMARK_.call(null,coll)){
return taoensso.encore.subvec_STAR_.call(null,coll,(0),n);
} else {
return cljs.core.vec.call(null,cljs.core.take.call(null,n,coll));
}
});
/**
 * Prefer `set` when order doesn't matter (much faster).
 */
taoensso.encore.distinctv = (function taoensso$encore$distinctv(var_args){
var args18454 = [];
var len__5972__auto___18461 = arguments.length;
var i__5973__auto___18462 = (0);
while(true){
if((i__5973__auto___18462 < len__5972__auto___18461)){
args18454.push((arguments[i__5973__auto___18462]));

var G__18463 = (i__5973__auto___18462 + (1));
i__5973__auto___18462 = G__18463;
continue;
} else {
}
break;
}

var G__18456 = args18454.length;
switch (G__18456) {
case 1:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18454.length)].join('')));

}
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.nth.call(null,cljs.core.reduce.call(null,(function (p__18457,in$){
var vec__18458 = p__18457;
var v = cljs.core.nth.call(null,vec__18458,(0),null);
var seen = cljs.core.nth.call(null,vec__18458,(1),null);
if(!(cljs.core.contains_QMARK_.call(null,seen,in$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,v,in$),cljs.core.conj.call(null,seen,in$)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll),(0)));
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.nth.call(null,cljs.core.reduce.call(null,(function (p__18459,in$){
var vec__18460 = p__18459;
var v = cljs.core.nth.call(null,vec__18460,(0),null);
var seen = cljs.core.nth.call(null,vec__18460,(1),null);
var in_STAR_ = keyfn.call(null,in$);
if(!(cljs.core.contains_QMARK_.call(null,seen,in_STAR_))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,v,in$),cljs.core.conj.call(null,seen,in_STAR_)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll),(0)));
});

taoensso.encore.distinctv.cljs$lang$maxFixedArity = 2;
/**
 * Like `sort-by` for distinct. Based on clojure.core/distinct.
 */
taoensso.encore.distinct_by = (function taoensso$encore$distinct_by(keyfn,coll){
var step = (function taoensso$encore$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__18471,seen__$1){
while(true){
var vec__18472 = p__18471;
var v = cljs.core.nth.call(null,vec__18472,(0),null);
var xs__$1 = vec__18472;
var temp__4425__auto__ = cljs.core.seq.call(null,xs__$1);
if(temp__4425__auto__){
var s = temp__4425__auto__;
var v_STAR_ = keyfn.call(null,v);
if(cljs.core.contains_QMARK_.call(null,seen__$1,v_STAR_)){
var G__18473 = cljs.core.rest.call(null,s);
var G__18474 = seen__$1;
p__18471 = G__18473;
seen__$1 = G__18474;
continue;
} else {
return cljs.core.cons.call(null,v,taoensso$encore$distinct_by_$_step.call(null,cljs.core.rest.call(null,s),cljs.core.conj.call(null,seen__$1,v_STAR_)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
taoensso.encore.removev = (function taoensso$encore$removev(pred,coll){
return cljs.core.filterv.call(null,cljs.core.complement.call(null,pred),coll);
});

/**
 * distinctv` transducer.
 */
taoensso.encore.xdistinct = (function taoensso$encore$xdistinct(var_args){
var args18479 = [];
var len__5972__auto___18482 = arguments.length;
var i__5973__auto___18483 = (0);
while(true){
if((i__5973__auto___18483 < len__5972__auto___18482)){
args18479.push((arguments[i__5973__auto___18483]));

var G__18484 = (i__5973__auto___18483 + (1));
i__5973__auto___18483 = G__18484;
continue;
} else {
}
break;
}

var G__18481 = args18479.length;
switch (G__18481) {
case 0:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18479.length)].join('')));

}
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0 = (function (){
return (function (rf){
var seen_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (seen_){
return (function() {
var G__18486 = null;
var G__18486__0 = (function (){
return rf.call(null);
});
var G__18486__1 = (function (acc){
return rf.call(null,acc);
});
var G__18486__2 = (function (acc,input){
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,seen_),input)){
return acc;
} else {
cljs.core.swap_BANG_.call(null,seen_,cljs.core.conj,input);

return rf.call(null,acc,input);
}
});
G__18486 = function(acc,input){
switch(arguments.length){
case 0:
return G__18486__0.call(this);
case 1:
return G__18486__1.call(this,acc);
case 2:
return G__18486__2.call(this,acc,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18486.cljs$core$IFn$_invoke$arity$0 = G__18486__0;
G__18486.cljs$core$IFn$_invoke$arity$1 = G__18486__1;
G__18486.cljs$core$IFn$_invoke$arity$2 = G__18486__2;
return G__18486;
})()
;})(seen_))
});
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1 = (function (keyfn){
return (function (rf){
var seen_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (seen_){
return (function() {
var G__18487 = null;
var G__18487__0 = (function (){
return rf.call(null);
});
var G__18487__1 = (function (acc){
return rf.call(null,acc);
});
var G__18487__2 = (function (acc,input){
var k = keyfn.call(null,input);
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,seen_),k)){
return acc;
} else {
cljs.core.swap_BANG_.call(null,seen_,cljs.core.conj,k);

return rf.call(null,acc,input);
}
});
G__18487 = function(acc,input){
switch(arguments.length){
case 0:
return G__18487__0.call(this);
case 1:
return G__18487__1.call(this,acc);
case 2:
return G__18487__2.call(this,acc,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18487.cljs$core$IFn$_invoke$arity$0 = G__18487__0;
G__18487.cljs$core$IFn$_invoke$arity$1 = G__18487__1;
G__18487.cljs$core$IFn$_invoke$arity$2 = G__18487__2;
return G__18487;
})()
;})(seen_))
});
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
return cljs.core.sequence.call(null,taoensso.encore.xdistinct.call(null,keyfn),coll);
});

taoensso.encore.xdistinct.cljs$lang$maxFixedArity = 2;
/**
 * Reverse comparator.
 */
taoensso.encore.rcompare = (function taoensso$encore$rcompare(x,y){
return cljs.core.compare.call(null,y,x);
});
taoensso.encore.nested_merge_with = (function taoensso$encore$nested_merge_with(var_args){
var args__5979__auto__ = [];
var len__5972__auto___18490 = arguments.length;
var i__5973__auto___18491 = (0);
while(true){
if((i__5973__auto___18491 < len__5972__auto___18490)){
args__5979__auto__.push((arguments[i__5973__auto___18491]));

var G__18492 = (i__5973__auto___18491 + (1));
i__5973__auto___18491 = G__18492;
continue;
} else {
}
break;
}

var argseq__5980__auto__ = ((((1) < args__5979__auto__.length))?(new cljs.core.IndexedSeq(args__5979__auto__.slice((1)),(0))):null);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5980__auto__);
});

taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps))){
var merge_entry = (function (m,e){
var k = cljs.core.key.call(null,e);
var rv = cljs.core.val.call(null,e);
if(!(cljs.core.contains_QMARK_.call(null,m,k))){
return cljs.core.assoc.call(null,m,k,rv);
} else {
var lv = cljs.core.get.call(null,m,k);
if((cljs.core.map_QMARK_.call(null,lv)) && (cljs.core.map_QMARK_.call(null,rv))){
return cljs.core.assoc.call(null,m,k,taoensso.encore.nested_merge_with.call(null,f,lv,rv));
} else {
return cljs.core.assoc.call(null,m,k,f.call(null,lv,rv));
}
}
});
var merge2 = ((function (merge_entry){
return (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry,(function (){var or__4914__auto__ = m1;
if(cljs.core.truth_(or__4914__auto__)){
return or__4914__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});})(merge_entry))
;
return cljs.core.reduce.call(null,merge2,maps);
} else {
return null;
}
});

taoensso.encore.nested_merge_with.cljs$lang$maxFixedArity = (1);

taoensso.encore.nested_merge_with.cljs$lang$applyTo = (function (seq18488){
var G__18489 = cljs.core.first.call(null,seq18488);
var seq18488__$1 = cljs.core.next.call(null,seq18488);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic(G__18489,seq18488__$1);
});
taoensso.encore.nested_merge = cljs.core.partial.call(null,taoensso.encore.nested_merge_with,(function (x,y){
if((cljs.core.map_QMARK_.call(null,x)) && ((y == null))){
return x;
} else {
return y;
}
}));
/**
 * Returns the 'greatest' element in coll in O(n) time.
 */
taoensso.encore.greatest = (function taoensso$encore$greatest(var_args){
var args__5979__auto__ = [];
var len__5972__auto___18499 = arguments.length;
var i__5973__auto___18500 = (0);
while(true){
if((i__5973__auto___18500 < len__5972__auto___18499)){
args__5979__auto__.push((arguments[i__5973__auto___18500]));

var G__18501 = (i__5973__auto___18500 + (1));
i__5973__auto___18500 = G__18501;
continue;
} else {
}
break;
}

var argseq__5980__auto__ = ((((1) < args__5979__auto__.length))?(new cljs.core.IndexedSeq(args__5979__auto__.slice((1)),(0))):null);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5980__auto__);
});

taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__18497){
var vec__18498 = p__18497;
var _QMARK_comparator = cljs.core.nth.call(null,vec__18498,(0),null);
var comparator = (function (){var or__4914__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__4914__auto__)){
return or__4914__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__18498,_QMARK_comparator){
return (function (p1__18493_SHARP_,p2__18494_SHARP_){
if((comparator.call(null,p1__18493_SHARP_,p2__18494_SHARP_) > (0))){
return p2__18494_SHARP_;
} else {
return p1__18493_SHARP_;
}
});})(comparator,vec__18498,_QMARK_comparator))
,coll);
});

taoensso.encore.greatest.cljs$lang$maxFixedArity = (1);

taoensso.encore.greatest.cljs$lang$applyTo = (function (seq18495){
var G__18496 = cljs.core.first.call(null,seq18495);
var seq18495__$1 = cljs.core.next.call(null,seq18495);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic(G__18496,seq18495__$1);
});
/**
 * Returns the 'least' element in coll in O(n) time.
 */
taoensso.encore.least = (function taoensso$encore$least(var_args){
var args__5979__auto__ = [];
var len__5972__auto___18508 = arguments.length;
var i__5973__auto___18509 = (0);
while(true){
if((i__5973__auto___18509 < len__5972__auto___18508)){
args__5979__auto__.push((arguments[i__5973__auto___18509]));

var G__18510 = (i__5973__auto___18509 + (1));
i__5973__auto___18509 = G__18510;
continue;
} else {
}
break;
}

var argseq__5980__auto__ = ((((1) < args__5979__auto__.length))?(new cljs.core.IndexedSeq(args__5979__auto__.slice((1)),(0))):null);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5980__auto__);
});

taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__18506){
var vec__18507 = p__18506;
var _QMARK_comparator = cljs.core.nth.call(null,vec__18507,(0),null);
var comparator = (function (){var or__4914__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__4914__auto__)){
return or__4914__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__18507,_QMARK_comparator){
return (function (p1__18502_SHARP_,p2__18503_SHARP_){
if((comparator.call(null,p1__18502_SHARP_,p2__18503_SHARP_) < (0))){
return p2__18503_SHARP_;
} else {
return p1__18502_SHARP_;
}
});})(comparator,vec__18507,_QMARK_comparator))
,coll);
});

taoensso.encore.least.cljs$lang$maxFixedArity = (1);

taoensso.encore.least.cljs$lang$applyTo = (function (seq18504){
var G__18505 = cljs.core.first.call(null,seq18504);
var seq18504__$1 = cljs.core.next.call(null,seq18504);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic(G__18505,seq18504__$1);
});
/**
 * Like `repeatedly` but faster and `conj`s items into given collection.
 */
taoensso.encore.repeatedly_into = (function taoensso$encore$repeatedly_into(coll,n,f){
if((coll instanceof clojure.lang.IEditableCollection)){
var v = cljs.core.transient$.call(null,coll);
var idx = (0);
while(true){
if((idx >= n)){
return cljs.core.persistent_BANG_.call(null,v);
} else {
var G__18511 = cljs.core.conj_BANG_.call(null,v,f.call(null));
var G__18512 = (idx + (1));
v = G__18511;
idx = G__18512;
continue;
}
break;
}
} else {
var v = coll;
var idx = (0);
while(true){
if((idx >= n)){
return v;
} else {
var G__18513 = cljs.core.conj.call(null,v,f.call(null));
var G__18514 = (idx + (1));
v = G__18513;
idx = G__18514;
continue;
}
break;
}
}
});
taoensso.encore.undefined__GT_nil = (function taoensso$encore$undefined__GT_nil(x){
if((void 0 === x)){
return null;
} else {
return x;
}
});
taoensso.encore.nil__GT_str = (function taoensso$encore$nil__GT_str(x){
if(((void 0 === x)) || ((x == null))){
return "nil";
} else {
return x;
}
});
taoensso.encore.spaced_str_with_nils = (function taoensso$encore$spaced_str_with_nils(xs){
return clojure.string.join.call(null," ",cljs.core.mapv.call(null,taoensso.encore.nil__GT_str,xs));
});
taoensso.encore.spaced_str = (function taoensso$encore$spaced_str(xs){
return clojure.string.join.call(null," ",cljs.core.mapv.call(null,taoensso.encore.undefined__GT_nil,xs));
});
taoensso.encore.format_STAR_ = (function taoensso$encore$format_STAR_(fmt,args){
var fmt__$1 = (function (){var or__4914__auto__ = fmt;
if(cljs.core.truth_(or__4914__auto__)){
return or__4914__auto__;
} else {
return "";
}
})();
var args__$1 = cljs.core.mapv.call(null,taoensso.encore.nil__GT_str,args);
return cljs.core.apply.call(null,goog.string.format,fmt__$1,args__$1);
});
/**
 * Like `clojure.core/format` but:
 *  * Returns "" when fmt is nil rather than throwing an NPE.
 *  * Formats nil as "nil" rather than "null".
 *  * Provides ClojureScript support via goog.string.format (this has fewer
 *    formatting options than Clojure's `format`!).
 */
taoensso.encore.format = (function taoensso$encore$format(var_args){
var args__5979__auto__ = [];
var len__5972__auto___18517 = arguments.length;
var i__5973__auto___18518 = (0);
while(true){
if((i__5973__auto___18518 < len__5972__auto___18517)){
args__5979__auto__.push((arguments[i__5973__auto___18518]));

var G__18519 = (i__5973__auto___18518 + (1));
i__5973__auto___18518 = G__18519;
continue;
} else {
}
break;
}

var argseq__5980__auto__ = ((((1) < args__5979__auto__.length))?(new cljs.core.IndexedSeq(args__5979__auto__.slice((1)),(0))):null);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5980__auto__);
});

taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return taoensso.encore.format_STAR_.call(null,fmt,args);
});

taoensso.encore.format.cljs$lang$maxFixedArity = (1);

taoensso.encore.format.cljs$lang$applyTo = (function (seq18515){
var G__18516 = cljs.core.first.call(null,seq18515);
var seq18515__$1 = cljs.core.next.call(null,seq18515);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic(G__18516,seq18515__$1);
});
/**
 * Workaround for http://dev.clojure.org/jira/browse/CLJS-794,
 *                http://dev.clojure.org/jira/browse/CLJS-911.
 */
taoensso.encore.str_replace = (function taoensso$encore$str_replace(s,match,replacement){
var replacement__$1 = ((!(cljs.core.fn_QMARK_.call(null,replacement)))?replacement:(function() { 
var G__18520__delegate = function (args){
return replacement.call(null,cljs.core.vec.call(null,args));
};
var G__18520 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18521__i = 0, G__18521__a = new Array(arguments.length -  0);
while (G__18521__i < G__18521__a.length) {G__18521__a[G__18521__i] = arguments[G__18521__i + 0]; ++G__18521__i;}
  args = new cljs.core.IndexedSeq(G__18521__a,0);
} 
return G__18520__delegate.call(this,args);};
G__18520.cljs$lang$maxFixedArity = 0;
G__18520.cljs$lang$applyTo = (function (arglist__18522){
var args = cljs.core.seq(arglist__18522);
return G__18520__delegate(args);
});
G__18520.cljs$core$IFn$_invoke$arity$variadic = G__18520__delegate;
return G__18520;
})()
);
if(typeof match === 'string'){
return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement__$1);
} else {
if((match instanceof RegExp)){
var flags = [cljs.core.str("g"),cljs.core.str((cljs.core.truth_(match.ignoreCase)?"i":null)),cljs.core.str((cljs.core.truth_(match.multiline)?"m":null))].join('');
return s.replace((new RegExp(match.source,flags)),replacement__$1);
} else {
throw [cljs.core.str("Invalid match arg: "),cljs.core.str(match)].join('');

}
}
});
/**
 * Gives a consistent, flexible, cross-platform substring API built on
 *   `sub-indexes`.
 */
taoensso.encore.substr = (function taoensso$encore$substr(var_args){
var args__5979__auto__ = [];
var len__5972__auto___18529 = arguments.length;
var i__5973__auto___18530 = (0);
while(true){
if((i__5973__auto___18530 < len__5972__auto___18529)){
args__5979__auto__.push((arguments[i__5973__auto___18530]));

var G__18531 = (i__5973__auto___18530 + (1));
i__5973__auto___18530 = G__18531;
continue;
} else {
}
break;
}

var argseq__5980__auto__ = ((((2) < args__5979__auto__.length))?(new cljs.core.IndexedSeq(args__5979__auto__.slice((2)),(0))):null);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5980__auto__);
});

taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic = (function (s,start_idx,p__18526){
var vec__18527 = p__18526;
var _QMARK_max_len = cljs.core.nth.call(null,vec__18527,(0),null);
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay(((function (vec__18527,_QMARK_max_len){
return (function (){
return s;
});})(vec__18527,_QMARK_max_len))
,null)),new cljs.core.Symbol(null,"s","s",-948495851,null),cljs.core.string_QMARK_,new cljs.core.Symbol(null,"string?","string?",-1129175764,null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"s","s",-948495851,null))))].join('')));
}

var vec__18528 = taoensso.encore.sub_indexes.call(null,s,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__18528,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__18528,(1),null);
return s.substring(start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.substr.cljs$lang$maxFixedArity = (2);

taoensso.encore.substr.cljs$lang$applyTo = (function (seq18523){
var G__18524 = cljs.core.first.call(null,seq18523);
var seq18523__$1 = cljs.core.next.call(null,seq18523);
var G__18525 = cljs.core.first.call(null,seq18523__$1);
var seq18523__$2 = cljs.core.next.call(null,seq18523__$1);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic(G__18524,G__18525,seq18523__$2);
});
taoensso.encore.str_contains_QMARK_ = (function taoensso$encore$str_contains_QMARK_(s,substr){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr));
});
taoensso.encore.str_starts_with_QMARK_ = (function taoensso$encore$str_starts_with_QMARK_(s,substr){
return (s.indexOf(substr) === (0));
});
taoensso.encore.str_ends_with_QMARK_ = (function taoensso$encore$str_ends_with_QMARK_(s,substr){
var s_len = s.length;
var substr_len = substr.length;
if((s_len >= substr_len)){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr,(s_len - substr_len)));
} else {
return null;
}
});
taoensso.encore.str__QMARK_index = (function taoensso$encore$str__QMARK_index(var_args){
var args__5979__auto__ = [];
var len__5972__auto___18537 = arguments.length;
var i__5973__auto___18538 = (0);
while(true){
if((i__5973__auto___18538 < len__5972__auto___18537)){
args__5979__auto__.push((arguments[i__5973__auto___18538]));

var G__18539 = (i__5973__auto___18538 + (1));
i__5973__auto___18538 = G__18539;
continue;
} else {
}
break;
}

var argseq__5980__auto__ = ((((2) < args__5979__auto__.length))?(new cljs.core.IndexedSeq(args__5979__auto__.slice((2)),(0))):null);
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5980__auto__);
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$variadic = (function (s,substr,p__18535){
var vec__18536 = p__18535;
var start_idx = cljs.core.nth.call(null,vec__18536,(0),null);
var last_QMARK_ = cljs.core.nth.call(null,vec__18536,(1),null);
var start_idx__$1 = ((function (){var or__4914__auto__ = start_idx;
if(cljs.core.truth_(or__4914__auto__)){
return or__4914__auto__;
} else {
return (0);
}
})() | (0));
var result = ((cljs.core.truth_(last_QMARK_)?s.lastIndexOf(substr,start_idx__$1):s.indexOf(substr,start_idx__$1)) | (0));
if(cljs.core.not_EQ_.call(null,result,(-1))){
return result;
} else {
return null;
}
});

taoensso.encore.str__QMARK_index.cljs$lang$maxFixedArity = (2);

taoensso.encore.str__QMARK_index.cljs$lang$applyTo = (function (seq18532){
var G__18533 = cljs.core.first.call(null,seq18532);
var seq18532__$1 = cljs.core.next.call(null,seq18532);
var G__18534 = cljs.core.first.call(null,seq18532__$1);
var seq18532__$2 = cljs.core.next.call(null,seq18532__$1);
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$variadic(G__18533,G__18534,seq18532__$2);
});
/**
 * Like `clojure.string/join` but ensures no double separators.
 */
taoensso.encore.join_once = (function taoensso$encore$join_once(var_args){
var args__5979__auto__ = [];
var len__5972__auto___18542 = arguments.length;
var i__5973__auto___18543 = (0);
while(true){
if((i__5973__auto___18543 < len__5972__auto___18542)){
args__5979__auto__.push((arguments[i__5973__auto___18543]));

var G__18544 = (i__5973__auto___18543 + (1));
i__5973__auto___18543 = G__18544;
continue;
} else {
}
break;
}

var argseq__5980__auto__ = ((((1) < args__5979__auto__.length))?(new cljs.core.IndexedSeq(args__5979__auto__.slice((1)),(0))):null);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5980__auto__);
});

taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic = (function (separator,coll){
return cljs.core.reduce.call(null,(function (s1,s2){
var s1__$1 = [cljs.core.str(s1)].join('');
var s2__$1 = [cljs.core.str(s2)].join('');
if(cljs.core.truth_(taoensso.encore.str_ends_with_QMARK_.call(null,s1__$1,separator))){
if(cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_.call(null,s2__$1,separator))){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1.substring((1)))].join('');
} else {
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
}
} else {
if(cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_.call(null,s2__$1,separator))){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
} else {
if((cljs.core._EQ_.call(null,s1__$1,"")) || (cljs.core._EQ_.call(null,s2__$1,""))){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
} else {
return [cljs.core.str(s1__$1),cljs.core.str(separator),cljs.core.str(s2__$1)].join('');
}
}
}
}),null,coll);
});

taoensso.encore.join_once.cljs$lang$maxFixedArity = (1);

taoensso.encore.join_once.cljs$lang$applyTo = (function (seq18540){
var G__18541 = cljs.core.first.call(null,seq18540);
var seq18540__$1 = cljs.core.next.call(null,seq18540);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic(G__18541,seq18540__$1);
});
/**
 * Joins string paths (URLs, file paths, etc.) ensuring correct "/"
 *   interposition.
 */
taoensso.encore.path = (function taoensso$encore$path(var_args){
var args__5979__auto__ = [];
var len__5972__auto___18546 = arguments.length;
var i__5973__auto___18547 = (0);
while(true){
if((i__5973__auto___18547 < len__5972__auto___18546)){
args__5979__auto__.push((arguments[i__5973__auto___18547]));

var G__18548 = (i__5973__auto___18547 + (1));
i__5973__auto___18547 = G__18548;
continue;
} else {
}
break;
}

var argseq__5980__auto__ = ((((0) < args__5979__auto__.length))?(new cljs.core.IndexedSeq(args__5979__auto__.slice((0)),(0))):null);
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(argseq__5980__auto__);
});

taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic = (function (parts){
return cljs.core.apply.call(null,taoensso.encore.join_once,"/",parts);
});

taoensso.encore.path.cljs$lang$maxFixedArity = (0);

taoensso.encore.path.cljs$lang$applyTo = (function (seq18545){
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18545));
});
/**
 * Converts all word breaks of any form and length (including line breaks of any
 *   form, tabs, spaces, etc.) to a single regular space.
 */
taoensso.encore.norm_word_breaks = (function taoensso$encore$norm_word_breaks(s){
return clojure.string.replace.call(null,[cljs.core.str(s)].join(''),/\s+/," ");
});
taoensso.encore.count_words = (function taoensso$encore$count_words(s){
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s))){
return (0);
} else {
return cljs.core.count.call(null,clojure.string.split.call(null,s,/\s+/));
}
});
/**
 * Returns a UUIDv4 string of form "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",
 *   Ref. http://www.ietf.org/rfc/rfc4122.txt,
 *     https://gist.github.com/franks42/4159427
 */
taoensso.encore.uuid_str = (function taoensso$encore$uuid_str(var_args){
var args18549 = [];
var len__5972__auto___18552 = arguments.length;
var i__5973__auto___18553 = (0);
while(true){
if((i__5973__auto___18553 < len__5972__auto___18552)){
args18549.push((arguments[i__5973__auto___18553]));

var G__18554 = (i__5973__auto___18553 + (1));
i__5973__auto___18553 = G__18554;
continue;
} else {
}
break;
}

var G__18551 = args18549.length;
switch (G__18551) {
case 1:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18549.length)].join('')));

}
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1 = (function (max_length){
return taoensso.encore.substr.call(null,taoensso.encore.uuid_str.call(null),(0),max_length);
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0 = (function (){
var hex = (function (){
return cljs.core.rand_int.call(null,(15)).toString((16));
});
var rhex = ((8) | ((3) & cljs.core.rand_int.call(null,(14)))).toString((16));
return [cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str("4"),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str(rhex),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null))].join('');
});

taoensso.encore.uuid_str.cljs$lang$maxFixedArity = 1;
taoensso.encore.gc_rate = (1.0 / (16000));
taoensso.encore.gc_now_QMARK_ = (function taoensso$encore$gc_now_QMARK_(){
return (cljs.core.rand.call(null) <= taoensso.encore.gc_rate);
});
/**
 * Swaps associative value at key and returns the new value.
 *   Specialized, fast `swap-in!` for use mostly by memoization utils.
 */
taoensso.encore.swap_val_BANG_ = (function taoensso$encore$swap_val_BANG_(atom_,k,f){
while(true){
var old_m = cljs.core.deref.call(null,atom_);
var new_v = f.call(null,cljs.core.get.call(null,old_m,k));
var new_m = cljs.core.assoc.call(null,old_m,k,new_v);
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,atom_,old_m,new_m))){
return new_v;
} else {
continue;
}
break;
}
});
/**
 * As `clojure.core/memoize` but uses delays to avoid write races.
 */
taoensso.encore.memoize_ = (function taoensso$encore$memoize_(f){
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__18556__delegate = function (args){
return cljs.core.deref.call(null,(function (){var or__4914__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args);
if(cljs.core.truth_(or__4914__auto__)){
return or__4914__auto__;
} else {
return taoensso.encore.swap_val_BANG_.call(null,cache_,args,((function (or__4914__auto__,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__4914__auto__,cache_){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(or__4914__auto__,cache_))
,null));
}
});})(or__4914__auto__,cache_))
);
}
})());
};
var G__18556 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18557__i = 0, G__18557__a = new Array(arguments.length -  0);
while (G__18557__i < G__18557__a.length) {G__18557__a[G__18557__i] = arguments[G__18557__i + 0]; ++G__18557__i;}
  args = new cljs.core.IndexedSeq(G__18557__a,0);
} 
return G__18556__delegate.call(this,args);};
G__18556.cljs$lang$maxFixedArity = 0;
G__18556.cljs$lang$applyTo = (function (arglist__18558){
var args = cljs.core.seq(arglist__18558);
return G__18556__delegate(args);
});
G__18556.cljs$core$IFn$_invoke$arity$variadic = G__18556__delegate;
return G__18556;
})()
;
;})(cache_))
});
/**
 * Great for Reactjs render op caching on mobile devices, etc.
 */
taoensso.encore.memoize1 = (function taoensso$encore$memoize1(f){
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__18559__delegate = function (args){
return cljs.core.deref.call(null,(function (){var or__4914__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args);
if(cljs.core.truth_(or__4914__auto__)){
return or__4914__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,cache_,((function (or__4914__auto__,cache_){
return (function (cache){
if(cljs.core.truth_(cljs.core.get.call(null,cache,args))){
return cache;
} else {
return cljs.core.PersistentArrayMap.fromArray([args,(new cljs.core.Delay(((function (or__4914__auto__,cache_){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(or__4914__auto__,cache_))
,null))], true, false);
}
});})(or__4914__auto__,cache_))
),args);
}
})());
};
var G__18559 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18560__i = 0, G__18560__a = new Array(arguments.length -  0);
while (G__18560__i < G__18560__a.length) {G__18560__a[G__18560__i] = arguments[G__18560__i + 0]; ++G__18560__i;}
  args = new cljs.core.IndexedSeq(G__18560__a,0);
} 
return G__18559__delegate.call(this,args);};
G__18559.cljs$lang$maxFixedArity = 0;
G__18559.cljs$lang$applyTo = (function (arglist__18561){
var args = cljs.core.seq(arglist__18561);
return G__18559__delegate(args);
});
G__18559.cljs$core$IFn$_invoke$arity$variadic = G__18559__delegate;
return G__18559;
})()
;
;})(cache_))
});
/**
 * Like `(memoize* f)` but takes an explicit cache atom (possibly nil)
 *   and immediately applies memoized f to given arguments.
 */
taoensso.encore.memoized = (function taoensso$encore$memoized(var_args){
var args__5979__auto__ = [];
var len__5972__auto___18566 = arguments.length;
var i__5973__auto___18567 = (0);
while(true){
if((i__5973__auto___18567 < len__5972__auto___18566)){
args__5979__auto__.push((arguments[i__5973__auto___18567]));

var G__18568 = (i__5973__auto___18567 + (1));
i__5973__auto___18567 = G__18568;
continue;
} else {
}
break;
}

var argseq__5980__auto__ = ((((2) < args__5979__auto__.length))?(new cljs.core.IndexedSeq(args__5979__auto__.slice((2)),(0))):null);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5980__auto__);
});

taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic = (function (cache,f,args){
if(cljs.core.not.call(null,cache)){
return cljs.core.apply.call(null,f,args);
} else {
return cljs.core.deref.call(null,taoensso.encore.swap_val_BANG_.call(null,cache,args,(function (p1__18562_SHARP_){
if(cljs.core.truth_(p1__18562_SHARP_)){
return p1__18562_SHARP_;
} else {
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,f,args);
}),null));
}
})));
}
});

taoensso.encore.memoized.cljs$lang$maxFixedArity = (2);

taoensso.encore.memoized.cljs$lang$applyTo = (function (seq18563){
var G__18564 = cljs.core.first.call(null,seq18563);
var seq18563__$1 = cljs.core.next.call(null,seq18563);
var G__18565 = cljs.core.first.call(null,seq18563__$1);
var seq18563__$2 = cljs.core.next.call(null,seq18563__$1);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic(G__18564,G__18565,seq18563__$2);
});
/**
 * Like `clojure.core/memoize` but:
 *  * Uses delays to prevent race conditions on writes.
 *  * Supports auto invalidation & gc with `ttl-ms` option.
 *  * Supports manual invalidation by prepending args with `:mem/del` or `:mem/fresh`.
 *  * Supports cache size limit & gc with `cache-size` option.
 */
taoensso.encore.memoize_STAR_ = (function taoensso$encore$memoize_STAR_(var_args){
var args18571 = [];
var len__5972__auto___18594 = arguments.length;
var i__5973__auto___18595 = (0);
while(true){
if((i__5973__auto___18595 < len__5972__auto___18594)){
args18571.push((arguments[i__5973__auto___18595]));

var G__18596 = (i__5973__auto___18595 + (1));
i__5973__auto___18595 = G__18596;
continue;
} else {
}
break;
}

var G__18573 = args18571.length;
switch (G__18573) {
case 1:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18571.length)].join('')));

}
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__18598__delegate = function (p__18574){
var vec__18575 = p__18574;
var arg1 = cljs.core.nth.call(null,vec__18575,(0),null);
var argn = cljs.core.nthnext.call(null,vec__18575,(1));
var args = vec__18575;
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,cache_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core.swap_BANG_.call(null,cache_,cljs.core.dissoc,argn);
}

return null;
} else {
var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
return cljs.core.deref.call(null,(function (){var or__4914__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args__$1);
if(cljs.core.truth_(or__4914__auto__)){
return or__4914__auto__;
} else {
return taoensso.encore.swap_val_BANG_.call(null,cache_,args__$1,((function (or__4914__auto__,fresh_QMARK_,args__$1,vec__18575,arg1,argn,args,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_((function (){var and__4902__auto__ = _QMARK_dv;
if(cljs.core.truth_(and__4902__auto__)){
return cljs.core.not.call(null,fresh_QMARK_);
} else {
return and__4902__auto__;
}
})())){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__4914__auto__,fresh_QMARK_,args__$1,vec__18575,arg1,argn,args,cache_){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(or__4914__auto__,fresh_QMARK_,args__$1,vec__18575,arg1,argn,args,cache_))
,null));
}
});})(or__4914__auto__,fresh_QMARK_,args__$1,vec__18575,arg1,argn,args,cache_))
);
}
})());
}
};
var G__18598 = function (var_args){
var p__18574 = null;
if (arguments.length > 0) {
var G__18599__i = 0, G__18599__a = new Array(arguments.length -  0);
while (G__18599__i < G__18599__a.length) {G__18599__a[G__18599__i] = arguments[G__18599__i + 0]; ++G__18599__i;}
  p__18574 = new cljs.core.IndexedSeq(G__18599__a,0);
} 
return G__18598__delegate.call(this,p__18574);};
G__18598.cljs$lang$maxFixedArity = 0;
G__18598.cljs$lang$applyTo = (function (arglist__18600){
var p__18574 = cljs.core.seq(arglist__18600);
return G__18598__delegate(p__18574);
});
G__18598.cljs$core$IFn$_invoke$arity$variadic = G__18598__delegate;
return G__18598;
})()
;
;})(cache_))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (ttl_ms,f){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay((function (){
return ttl_ms;
}),null)),new cljs.core.Symbol(null,"ttl-ms","ttl-ms",-1349172894,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,taoensso.encore.pos_int_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null)], null));


var cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache){
return (function() { 
var G__18601__delegate = function (p__18576){
var vec__18577 = p__18576;
var arg1 = cljs.core.nth.call(null,vec__18577,(0),null);
var argn = cljs.core.nthnext.call(null,vec__18577,(1));
var args = vec__18577;
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,cache,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core.swap_BANG_.call(null,cache,cljs.core.dissoc,argn);
}

return null;
} else {
if(cljs.core.truth_(taoensso.encore.gc_now_QMARK_.call(null))){
var instant_18602 = taoensso.encore.now_udt.call(null);
cljs.core.swap_BANG_.call(null,cache,((function (instant_18602,vec__18577,arg1,argn,args,cache){
return (function (m){
return cljs.core.reduce_kv.call(null,((function (instant_18602,vec__18577,arg1,argn,args,cache){
return (function (m_STAR_,k,p__18578){
var vec__18579 = p__18578;
var dv = cljs.core.nth.call(null,vec__18579,(0),null);
var udt = cljs.core.nth.call(null,vec__18579,(1),null);
var cv = vec__18579;
if(((instant_18602 - udt) > ttl_ms)){
return m_STAR_;
} else {
return cljs.core.assoc.call(null,m_STAR_,k,cv);
}
});})(instant_18602,vec__18577,arg1,argn,args,cache))
,cljs.core.PersistentArrayMap.EMPTY,taoensso.encore.clj1098.call(null,m));
});})(instant_18602,vec__18577,arg1,argn,args,cache))
);
} else {
}

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
var instant = taoensso.encore.now_udt.call(null);
var vec__18580 = taoensso.encore.swap_val_BANG_.call(null,cache,args__$1,((function (fresh_QMARK_,args__$1,instant,vec__18577,arg1,argn,args,cache){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__4902__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__4902__auto__)){
var and__4902__auto____$1 = cljs.core.not.call(null,fresh_QMARK_);
if(and__4902__auto____$1){
var vec__18582 = _QMARK_cv;
var _dv = cljs.core.nth.call(null,vec__18582,(0),null);
var udt = cljs.core.nth.call(null,vec__18582,(1),null);
return ((instant - udt) < ttl_ms);
} else {
return and__4902__auto____$1;
}
} else {
return and__4902__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (fresh_QMARK_,args__$1,instant,vec__18577,arg1,argn,args,cache){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,instant,vec__18577,arg1,argn,args,cache))
,null)),instant], null);
}
});})(fresh_QMARK_,args__$1,instant,vec__18577,arg1,argn,args,cache))
);
var dv = cljs.core.nth.call(null,vec__18580,(0),null);
return cljs.core.deref.call(null,dv);
}
};
var G__18601 = function (var_args){
var p__18576 = null;
if (arguments.length > 0) {
var G__18603__i = 0, G__18603__a = new Array(arguments.length -  0);
while (G__18603__i < G__18603__a.length) {G__18603__a[G__18603__i] = arguments[G__18603__i + 0]; ++G__18603__i;}
  p__18576 = new cljs.core.IndexedSeq(G__18603__a,0);
} 
return G__18601__delegate.call(this,p__18576);};
G__18601.cljs$lang$maxFixedArity = 0;
G__18601.cljs$lang$applyTo = (function (arglist__18604){
var p__18576 = cljs.core.seq(arglist__18604);
return G__18601__delegate(p__18576);
});
G__18601.cljs$core$IFn$_invoke$arity$variadic = G__18601__delegate;
return G__18601;
})()
;
;})(cache))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (cache_size,ttl_ms,f){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay((function (){
return ttl_ms;
}),null)),new cljs.core.Symbol(null,"ttl-ms","ttl-ms",-1349172894,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,taoensso.encore.pos_int_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null)], null));


taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay((function (){
return cache_size;
}),null)),new cljs.core.Symbol(null,"cache-size","cache-size",1049002054,null),taoensso.encore.pos_int_QMARK_,new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null));


var state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null));
return ((function (state){
return (function() { 
var G__18605__delegate = function (p__18583){
var vec__18584 = p__18583;
var arg1 = cljs.core.nth.call(null,vec__18584,(0),null);
var argn = cljs.core.nthnext.call(null,vec__18584,(1));
var args = vec__18584;
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null));
} else {
cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,argn);
}

return null;
} else {
if(cljs.core.truth_(taoensso.encore.gc_now_QMARK_.call(null))){
var instant_18606 = taoensso.encore.now_udt.call(null);
cljs.core.swap_BANG_.call(null,state,((function (instant_18606,vec__18584,arg1,argn,args,state){
return (function (m){
var m_STAR_ = cljs.core.dissoc.call(null,m,new cljs.core.Keyword(null,"tick","tick",-835886976));
var m_STAR___$1 = ((cljs.core.not.call(null,ttl_ms))?m_STAR_:cljs.core.reduce_kv.call(null,((function (m_STAR_,instant_18606,vec__18584,arg1,argn,args,state){
return (function (m_STAR___$1,k,p__18585){
var vec__18586 = p__18585;
var dv = cljs.core.nth.call(null,vec__18586,(0),null);
var udt = cljs.core.nth.call(null,vec__18586,(1),null);
var _ = cljs.core.nth.call(null,vec__18586,(2),null);
var ___$1 = cljs.core.nth.call(null,vec__18586,(3),null);
var cv = vec__18586;
if(((instant_18606 - udt) > ttl_ms)){
return m_STAR___$1;
} else {
return cljs.core.assoc.call(null,m_STAR___$1,k,cv);
}
});})(m_STAR_,instant_18606,vec__18584,arg1,argn,args,state))
,cljs.core.PersistentArrayMap.EMPTY,taoensso.encore.clj1098.call(null,m_STAR_)));
var n_to_prune = (cljs.core.count.call(null,m_STAR___$1) - cache_size);
var m_STAR___$2 = ((!((n_to_prune > (0))))?m_STAR___$1:cljs.core.apply.call(null,cljs.core.dissoc,m_STAR___$1,cljs.core.mapv.call(null,((function (m_STAR_,m_STAR___$1,n_to_prune,instant_18606,vec__18584,arg1,argn,args,state){
return (function (p1__18570_SHARP_){
return cljs.core.nth.call(null,p1__18570_SHARP_,(1));
});})(m_STAR_,m_STAR___$1,n_to_prune,instant_18606,vec__18584,arg1,argn,args,state))
,cljs.core.take.call(null,n_to_prune,cljs.core.sort_by.call(null,((function (m_STAR_,m_STAR___$1,n_to_prune,instant_18606,vec__18584,arg1,argn,args,state){
return (function (p1__18569_SHARP_){
return cljs.core.nth.call(null,p1__18569_SHARP_,(0));
});})(m_STAR_,m_STAR___$1,n_to_prune,instant_18606,vec__18584,arg1,argn,args,state))
,cljs.core.mapv.call(null,((function (m_STAR_,m_STAR___$1,n_to_prune,instant_18606,vec__18584,arg1,argn,args,state){
return (function (k){
var vec__18587 = m_STAR___$1.call(null,k);
var _ = cljs.core.nth.call(null,vec__18587,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__18587,(1),null);
var tick_lru = cljs.core.nth.call(null,vec__18587,(2),null);
var tick_lfu = cljs.core.nth.call(null,vec__18587,(3),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tick_lru + tick_lfu),k], null);
});})(m_STAR_,m_STAR___$1,n_to_prune,instant_18606,vec__18584,arg1,argn,args,state))
,cljs.core.keys.call(null,m_STAR___$1)))))));
return cljs.core.assoc.call(null,m_STAR___$2,new cljs.core.Keyword(null,"tick","tick",-835886976),new cljs.core.Keyword(null,"tick","tick",-835886976).cljs$core$IFn$_invoke$arity$1(m));
});})(instant_18606,vec__18584,arg1,argn,args,state))
);
} else {
}

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
var _QMARK_instant = (cljs.core.truth_(ttl_ms)?taoensso.encore.now_udt.call(null):null);
var tick_SINGLEQUOTE_ = new cljs.core.Keyword(null,"tick","tick",-835886976).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var vec__18588 = taoensso.encore.swap_val_BANG_.call(null,state,args__$1,((function (fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__18584,arg1,argn,args,state){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__4902__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__4902__auto__)){
var and__4902__auto____$1 = cljs.core.not.call(null,fresh_QMARK_);
if(and__4902__auto____$1){
var or__4914__auto__ = (_QMARK_instant == null);
if(or__4914__auto__){
return or__4914__auto__;
} else {
var vec__18592 = _QMARK_cv;
var _dv = cljs.core.nth.call(null,vec__18592,(0),null);
var udt = cljs.core.nth.call(null,vec__18592,(1),null);
return ((_QMARK_instant - udt) < ttl_ms);
}
} else {
return and__4902__auto____$1;
}
} else {
return and__4902__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__18584,arg1,argn,args,state){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__18584,arg1,argn,args,state))
,null)),_QMARK_instant,tick_SINGLEQUOTE_,(1)], null);
}
});})(fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__18584,arg1,argn,args,state))
);
var dv = cljs.core.nth.call(null,vec__18588,(0),null);
cljs.core.swap_BANG_.call(null,state,((function (fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__18588,dv,vec__18584,arg1,argn,args,state){
return (function (m){
var temp__4425__auto__ = cljs.core.get.call(null,m,args__$1);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__18593 = temp__4425__auto__;
var dv__$1 = cljs.core.nth.call(null,vec__18593,(0),null);
var _QMARK_udt = cljs.core.nth.call(null,vec__18593,(1),null);
var tick_lru = cljs.core.nth.call(null,vec__18593,(2),null);
var tick_lfu = cljs.core.nth.call(null,vec__18593,(3),null);
var cv = vec__18593;
return cljs.core.merge.call(null,m,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"tick","tick",-835886976),(tick_SINGLEQUOTE_ + (1)),args__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dv__$1,_QMARK_udt,tick_SINGLEQUOTE_,(tick_lfu + (1))], null)], true, false));
} else {
return null;
}
});})(fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__18588,dv,vec__18584,arg1,argn,args,state))
);

return cljs.core.deref.call(null,dv);
}
};
var G__18605 = function (var_args){
var p__18583 = null;
if (arguments.length > 0) {
var G__18607__i = 0, G__18607__a = new Array(arguments.length -  0);
while (G__18607__i < G__18607__a.length) {G__18607__a[G__18607__i] = arguments[G__18607__i + 0]; ++G__18607__i;}
  p__18583 = new cljs.core.IndexedSeq(G__18607__a,0);
} 
return G__18605__delegate.call(this,p__18583);};
G__18605.cljs$lang$maxFixedArity = 0;
G__18605.cljs$lang$applyTo = (function (arglist__18608){
var p__18583 = cljs.core.seq(arglist__18608);
return G__18605__delegate(p__18583);
});
G__18605.cljs$core$IFn$_invoke$arity$variadic = G__18605__delegate;
return G__18605;
})()
;
;})(state))
});

taoensso.encore.memoize_STAR_.cljs$lang$maxFixedArity = 3;
/**
 * Takes one or more rate specs of form [ncalls-limit window-ms ?spec-id] and
 *   returns a (fn [& [req-id])) that returns `nil` (=> all rate limits passed), or
 *   [<ms-wait> <worst-offending-spec-id>] / <ms-wait>.
 */
taoensso.encore.rate_limiter_STAR_ = (function taoensso$encore$rate_limiter_STAR_(specs){
if(cljs.core.empty_QMARK_.call(null,specs)){
return cljs.core.constantly.call(null,null);
} else {
var vspecs = cljs.core.vec.call(null,specs);
var vstates_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var max_win_ms = cljs.core.reduce.call(null,cljs.core.max,(0),cljs.core.mapv.call(null,((function (vspecs,vstates_){
return (function (p__18644){
var vec__18645 = p__18644;
var _ = cljs.core.nth.call(null,vec__18645,(0),null);
var win_ms = cljs.core.nth.call(null,vec__18645,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__18645,(2),null);
var spec = vec__18645;
return win_ms;
});})(vspecs,vstates_))
,vspecs));
var nspecs = cljs.core.count.call(null,vspecs);
var nid_specs = cljs.core.count.call(null,cljs.core.filterv.call(null,((function (vspecs,vstates_,max_win_ms,nspecs){
return (function (p__18646){
var vec__18647 = p__18646;
var _ = cljs.core.nth.call(null,vec__18647,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__18647,(1),null);
var id = cljs.core.nth.call(null,vec__18647,(2),null);
return id;
});})(vspecs,vstates_,max_win_ms,nspecs))
,vspecs));
var _ = ((((nid_specs === (0))) || (cljs.core._EQ_.call(null,nid_specs,nspecs)))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),new cljs.core.Symbol(null,"nid-specs","nid-specs",-1204406222,null)),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"nid-specs","nid-specs",-1204406222,null),new cljs.core.Symbol(null,"nspecs","nspecs",-1621596945,null)))))].join('')))})());
var return_ids_QMARK_ = !((nid_specs === (0)));
return ((function (vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function() { 
var taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate = function (p__18648){
var vec__18664 = p__18648;
var req_id = cljs.core.nth.call(null,vec__18664,(0),null);
var instant = taoensso.encore.now_udt.call(null);
if(cljs.core.truth_((function (){var and__4902__auto__ = req_id;
if(cljs.core.truth_(and__4902__auto__)){
return taoensso.encore.gc_now_QMARK_.call(null);
} else {
return and__4902__auto__;
}
})())){
taoensso.encore.swap_in_BANG_.call(null,vstates_,cljs.core.PersistentVector.EMPTY,((function (instant,vec__18664,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function taoensso$encore$rate_limiter_STAR__$_check_rate_limits_$_gc(m){
var m__$1 = taoensso.encore.clj1098.call(null,m);
return cljs.core.reduce_kv.call(null,((function (m__$1,instant,vec__18664,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (m_STAR_,req_id__$1,vstate){
var max_udt_win_start = cljs.core.reduce.call(null,((function (m__$1,instant,vec__18664,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (acc,p__18667){
var vec__18668 = p__18667;
var ___$1 = cljs.core.nth.call(null,vec__18668,(0),null);
var udt = cljs.core.nth.call(null,vec__18668,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__18668,(2),null);
var x__5245__auto__ = acc;
var y__5246__auto__ = udt;
return ((x__5245__auto__ > y__5246__auto__) ? x__5245__auto__ : y__5246__auto__);
});})(m__$1,instant,vec__18664,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,(0),vstate);
var min_win_ms_elapsed = (instant - max_udt_win_start);
if((min_win_ms_elapsed > max_win_ms)){
return cljs.core.dissoc.call(null,m_STAR_,req_id__$1);
} else {
return m_STAR_;
}
});})(m__$1,instant,vec__18664,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,m__$1,m__$1);
});})(instant,vec__18664,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
);
} else {
}

return taoensso.encore.swap_in_BANG_.call(null,vstates_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [req_id], null),((function (instant,vec__18664,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (_QMARK_vstate){
if(cljs.core.not.call(null,_QMARK_vstate)){
return taoensso.encore.swapped.call(null,cljs.core.vec.call(null,cljs.core.repeat.call(null,nspecs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),instant], null))),null);
} else {
var vec__18669 = (function (){var in_vspecs = vspecs;
var in_vstate = _QMARK_vstate;
var out_vstate = cljs.core.PersistentVector.EMPTY;
var _QMARK_worst_limit_offence = null;
while(true){
var vec__18670 = in_vspecs;
var vec__18671 = cljs.core.nth.call(null,vec__18670,(0),null);
var ncalls_limit = cljs.core.nth.call(null,vec__18671,(0),null);
var win_ms = cljs.core.nth.call(null,vec__18671,(1),null);
var _QMARK_spec_id = cljs.core.nth.call(null,vec__18671,(2),null);
var next_in_vspecs = cljs.core.nthnext.call(null,vec__18670,(1));
var vec__18672 = in_vstate;
var vec__18673 = cljs.core.nth.call(null,vec__18672,(0),null);
var ncalls = cljs.core.nth.call(null,vec__18673,(0),null);
var udt_win_start = cljs.core.nth.call(null,vec__18673,(1),null);
var next_in_vstate = cljs.core.nthnext.call(null,vec__18672,(1));
var win_ms_elapsed = (instant - udt_win_start);
var reset_due_QMARK_ = (win_ms_elapsed >= win_ms);
var rate_limited_QMARK_ = (!(reset_due_QMARK_)) && ((ncalls >= ncalls_limit));
var new_out_vstate = cljs.core.conj.call(null,out_vstate,((reset_due_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),instant], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls,udt_win_start], null)));
var new__QMARK_worst_limit_offence = ((!(rate_limited_QMARK_))?_QMARK_worst_limit_offence:(function (){var ms_wait = (win_ms - win_ms_elapsed);
if((function (){var or__4914__auto__ = (_QMARK_worst_limit_offence == null);
if(or__4914__auto__){
return or__4914__auto__;
} else {
var vec__18675 = _QMARK_worst_limit_offence;
var max_ms_wait = cljs.core.nth.call(null,vec__18675,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__18675,(1),null);
return (ms_wait > max_ms_wait);
}
})()){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms_wait,_QMARK_spec_id], null);
} else {
return _QMARK_worst_limit_offence;
}
})());
if(cljs.core.not.call(null,next_in_vspecs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_out_vstate,new__QMARK_worst_limit_offence], null);
} else {
var G__18679 = next_in_vspecs;
var G__18680 = next_in_vstate;
var G__18681 = new_out_vstate;
var G__18682 = new__QMARK_worst_limit_offence;
in_vspecs = G__18679;
in_vstate = G__18680;
out_vstate = G__18681;
_QMARK_worst_limit_offence = G__18682;
continue;
}
break;
}
})();
var vstate_with_resets = cljs.core.nth.call(null,vec__18669,(0),null);
var _QMARK_worst_limit_offence = cljs.core.nth.call(null,vec__18669,(1),null);
var all_limits_pass_QMARK_ = (_QMARK_worst_limit_offence == null);
var new_vstate = ((!(all_limits_pass_QMARK_))?vstate_with_resets:cljs.core.mapv.call(null,((function (vec__18669,vstate_with_resets,_QMARK_worst_limit_offence,all_limits_pass_QMARK_,instant,vec__18664,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (p__18676){
var vec__18677 = p__18676;
var ncalls = cljs.core.nth.call(null,vec__18677,(0),null);
var udt_win_start = cljs.core.nth.call(null,vec__18677,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ncalls + (1)),udt_win_start], null);
});})(vec__18669,vstate_with_resets,_QMARK_worst_limit_offence,all_limits_pass_QMARK_,instant,vec__18664,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,vstate_with_resets));
var result = (function (){var temp__4425__auto__ = _QMARK_worst_limit_offence;
if(cljs.core.truth_(temp__4425__auto__)){
var wlo = temp__4425__auto__;
if(return_ids_QMARK_){
return wlo;
} else {
var vec__18678 = wlo;
var ms_wait = cljs.core.nth.call(null,vec__18678,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__18678,(1),null);
return ms_wait;
}
} else {
return null;
}
})();
return taoensso.encore.swapped.call(null,new_vstate,result);
}
});})(instant,vec__18664,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
);
};
var taoensso$encore$rate_limiter_STAR__$_check_rate_limits = function (var_args){
var p__18648 = null;
if (arguments.length > 0) {
var G__18683__i = 0, G__18683__a = new Array(arguments.length -  0);
while (G__18683__i < G__18683__a.length) {G__18683__a[G__18683__i] = arguments[G__18683__i + 0]; ++G__18683__i;}
  p__18648 = new cljs.core.IndexedSeq(G__18683__a,0);
} 
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate.call(this,p__18648);};
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$lang$maxFixedArity = 0;
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$lang$applyTo = (function (arglist__18684){
var p__18648 = cljs.core.seq(arglist__18684);
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate(p__18648);
});
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate;
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits;
})()
;
;})(vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
}
});
taoensso.encore.rate_limit = (function taoensso$encore$rate_limit(specs,f){
var rl = taoensso.encore.rate_limiter_STAR_.call(null,specs);
return ((function (rl){
return (function() { 
var G__18685__delegate = function (args){
var temp__4423__auto__ = rl.call(null);
if(cljs.core.truth_(temp__4423__auto__)){
var backoff = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,backoff], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null),null], null);
}
};
var G__18685 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18686__i = 0, G__18686__a = new Array(arguments.length -  0);
while (G__18686__i < G__18686__a.length) {G__18686__a[G__18686__i] = arguments[G__18686__i + 0]; ++G__18686__i;}
  args = new cljs.core.IndexedSeq(G__18686__a,0);
} 
return G__18685__delegate.call(this,args);};
G__18685.cljs$lang$maxFixedArity = 0;
G__18685.cljs$lang$applyTo = (function (arglist__18687){
var args = cljs.core.seq(arglist__18687);
return G__18685__delegate(args);
});
G__18685.cljs$core$IFn$_invoke$arity$variadic = G__18685__delegate;
return G__18685;
})()
;
;})(rl))
});
taoensso.encore.nano_time = (function (){var temp__4423__auto__ = (function (){var and__4902__auto__ = typeof window !== 'undefined';
if(and__4902__auto__){
return (window["performance"]);
} else {
return and__4902__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var perf = temp__4423__auto__;
var temp__4423__auto____$1 = (function (){var or__4914__auto__ = (perf["now"]);
if(cljs.core.truth_(or__4914__auto__)){
return or__4914__auto__;
} else {
var or__4914__auto____$1 = (perf["mozNow"]);
if(cljs.core.truth_(or__4914__auto____$1)){
return or__4914__auto____$1;
} else {
var or__4914__auto____$2 = (perf["msNow"]);
if(cljs.core.truth_(or__4914__auto____$2)){
return or__4914__auto____$2;
} else {
var or__4914__auto____$3 = (perf["oNow"]);
if(cljs.core.truth_(or__4914__auto____$3)){
return or__4914__auto____$3;
} else {
return (perf["webkitNow"]);
}
}
}
}
})();
if(cljs.core.truth_(temp__4423__auto____$1)){
var f = temp__4423__auto____$1;
return ((function (f,temp__4423__auto____$1,perf,temp__4423__auto__){
return (function (){
return cljs.core.long$.call(null,(1000000.0 * f.call(perf)));
});
;})(f,temp__4423__auto____$1,perf,temp__4423__auto__))
} else {
return ((function (temp__4423__auto____$1,perf,temp__4423__auto__){
return (function (){
return (1000000.0 * taoensso.encore.now_udt.call(null));
});
;})(temp__4423__auto____$1,perf,temp__4423__auto__))
}
} else {
return ((function (temp__4423__auto__){
return (function (){
return (1000000.0 * taoensso.encore.now_udt.call(null));
});
;})(temp__4423__auto__))
}
})();
taoensso.encore.qb_min_times = (function taoensso$encore$qb_min_times(times){
return cljs.core.apply.call(null,cljs.core.min,times);
});
taoensso.encore.console_log = (function (){var temp__4423__auto__ = (function (){var and__4902__auto__ = typeof console !== 'undefined';
if(and__4902__auto__){
return console.log;
} else {
return and__4902__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return ((function (f,temp__4423__auto__){
return (function (xs){
return f.apply(console,cljs.core.into_array.call(null,xs));
});
;})(f,temp__4423__auto__))
} else {
return ((function (temp__4423__auto__){
return (function (xs){
return null;
});
;})(temp__4423__auto__))
}
})();

taoensso.encore.log = (function taoensso$encore$log(var_args){
var args__5979__auto__ = [];
var len__5972__auto___18695 = arguments.length;
var i__5973__auto___18696 = (0);
while(true){
if((i__5973__auto___18696 < len__5972__auto___18695)){
args__5979__auto__.push((arguments[i__5973__auto___18696]));

var G__18697 = (i__5973__auto___18696 + (1));
i__5973__auto___18696 = G__18697;
continue;
} else {
}
break;
}

var argseq__5980__auto__ = ((((0) < args__5979__auto__.length))?(new cljs.core.IndexedSeq(args__5979__auto__.slice((0)),(0))):null);
return taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic(argseq__5980__auto__);
});

taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.encore.console_log.call(null,xs);
});

taoensso.encore.log.cljs$lang$maxFixedArity = (0);

taoensso.encore.log.cljs$lang$applyTo = (function (seq18688){
return taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18688));
});

taoensso.encore.logp = (function taoensso$encore$logp(var_args){
var args__5979__auto__ = [];
var len__5972__auto___18698 = arguments.length;
var i__5973__auto___18699 = (0);
while(true){
if((i__5973__auto___18699 < len__5972__auto___18698)){
args__5979__auto__.push((arguments[i__5973__auto___18699]));

var G__18700 = (i__5973__auto___18699 + (1));
i__5973__auto___18699 = G__18700;
continue;
} else {
}
break;
}

var argseq__5980__auto__ = ((((0) < args__5979__auto__.length))?(new cljs.core.IndexedSeq(args__5979__auto__.slice((0)),(0))):null);
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(argseq__5980__auto__);
});

taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.encore.console_log.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.spaced_str.call(null,xs)], null));
});

taoensso.encore.logp.cljs$lang$maxFixedArity = (0);

taoensso.encore.logp.cljs$lang$applyTo = (function (seq18689){
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18689));
});

taoensso.encore.logf = (function taoensso$encore$logf(var_args){
var args__5979__auto__ = [];
var len__5972__auto___18701 = arguments.length;
var i__5973__auto___18702 = (0);
while(true){
if((i__5973__auto___18702 < len__5972__auto___18701)){
args__5979__auto__.push((arguments[i__5973__auto___18702]));

var G__18703 = (i__5973__auto___18702 + (1));
i__5973__auto___18702 = G__18703;
continue;
} else {
}
break;
}

var argseq__5980__auto__ = ((((1) < args__5979__auto__.length))?(new cljs.core.IndexedSeq(args__5979__auto__.slice((1)),(0))):null);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5980__auto__);
});

taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return taoensso.encore.console_log.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.format_STAR_.call(null,fmt,xs)], null));
});

taoensso.encore.logf.cljs$lang$maxFixedArity = (1);

taoensso.encore.logf.cljs$lang$applyTo = (function (seq18690){
var G__18691 = cljs.core.first.call(null,seq18690);
var seq18690__$1 = cljs.core.next.call(null,seq18690);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic(G__18691,seq18690__$1);
});

taoensso.encore.sayp = (function taoensso$encore$sayp(var_args){
var args__5979__auto__ = [];
var len__5972__auto___18704 = arguments.length;
var i__5973__auto___18705 = (0);
while(true){
if((i__5973__auto___18705 < len__5972__auto___18704)){
args__5979__auto__.push((arguments[i__5973__auto___18705]));

var G__18706 = (i__5973__auto___18705 + (1));
i__5973__auto___18705 = G__18706;
continue;
} else {
}
break;
}

var argseq__5980__auto__ = ((((0) < args__5979__auto__.length))?(new cljs.core.IndexedSeq(args__5979__auto__.slice((0)),(0))):null);
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(argseq__5980__auto__);
});

taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return alert(taoensso.encore.spaced_str.call(null,xs));
});

taoensso.encore.sayp.cljs$lang$maxFixedArity = (0);

taoensso.encore.sayp.cljs$lang$applyTo = (function (seq18692){
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18692));
});

taoensso.encore.sayf = (function taoensso$encore$sayf(var_args){
var args__5979__auto__ = [];
var len__5972__auto___18707 = arguments.length;
var i__5973__auto___18708 = (0);
while(true){
if((i__5973__auto___18708 < len__5972__auto___18707)){
args__5979__auto__.push((arguments[i__5973__auto___18708]));

var G__18709 = (i__5973__auto___18708 + (1));
i__5973__auto___18708 = G__18709;
continue;
} else {
}
break;
}

var argseq__5980__auto__ = ((((1) < args__5979__auto__.length))?(new cljs.core.IndexedSeq(args__5979__auto__.slice((1)),(0))):null);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5980__auto__);
});

taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return alert(taoensso.encore.format_STAR_.call(null,fmt,xs));
});

taoensso.encore.sayf.cljs$lang$maxFixedArity = (1);

taoensso.encore.sayf.cljs$lang$applyTo = (function (seq18693){
var G__18694 = cljs.core.first.call(null,seq18693);
var seq18693__$1 = cljs.core.next.call(null,seq18693);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic(G__18694,seq18693__$1);
});
/**
 * Returns browser window's current location. Forgeable.
 */
taoensso.encore.get_window_location = (function taoensso$encore$get_window_location(){
var loc_STAR_ = window.location;
var loc = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"href","href",-793805698),loc_STAR_.href,new cljs.core.Keyword(null,"protocol","protocol",652470118),loc_STAR_.protocol,new cljs.core.Keyword(null,"hostname","hostname",2105669933),loc_STAR_.hostname,new cljs.core.Keyword(null,"host","host",-1558485167),loc_STAR_.host,new cljs.core.Keyword(null,"pathname","pathname",-1420497528),loc_STAR_.pathname,new cljs.core.Keyword(null,"search","search",1564939822),loc_STAR_.search,new cljs.core.Keyword(null,"hash","hash",-13781596),loc_STAR_.hash], null);
return loc;
});
taoensso.encore.xhr_pool_ = (new cljs.core.Delay((function (){
return (new goog.net.XhrIoPool());
}),null));
/**
 * Returns an immediately available XhrIo instance, or nil. The instance must be
 *   released back to pool manually.
 */
taoensso.encore.get_pooled_xhr_BANG_ = (function taoensso$encore$get_pooled_xhr_BANG_(){
var result = cljs.core.deref.call(null,taoensso.encore.xhr_pool_).getObject();
if((void 0 === result)){
return null;
} else {
return result;
}
});
/**
 * [uri method get-or-post-params] -> [uri post-content]
 */
taoensso.encore.coerce_xhr_params = (function taoensso$encore$coerce_xhr_params(uri,method,params){
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay((function (){
return params;
}),null)),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.map_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)], null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)], null),new cljs.core.Symbol(null,"params","params",-1943919534,null))))].join('')));
}

var _QMARK_pstr = ((cljs.core.empty_QMARK_.call(null,params))?null:(function (){var s = goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s))){
return null;
} else {
return s;
}
})());
var G__18711 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__18711) {
case "get":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(_QMARK_pstr)?[cljs.core.str(uri),cljs.core.str("?"),cljs.core.str(_QMARK_pstr)].join(''):uri),null], null);

break;
case "post":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,_QMARK_pstr], null);

break;
case "put":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,_QMARK_pstr], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
});
/**
 * Alpha - subject to change.
 *   Simple+lightweight Ajax via Google Closure. Returns nil, or the xhr instance.
 *   Ref. https://developers.google.com/closure/library/docs/xhrio.
 * 
 *   (ajax-lite "/my-post-route"
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
taoensso.encore.ajax_lite = (function taoensso$encore$ajax_lite(uri,p__18715,callback){
var map__18733 = p__18715;
var map__18733__$1 = ((((!((map__18733 == null)))?((((map__18733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18733):map__18733);
var opts = map__18733__$1;
var method = cljs.core.get.call(null,map__18733__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));
var params = cljs.core.get.call(null,map__18733__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__18733__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout_ms = cljs.core.get.call(null,map__18733__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(10000));
var resp_type = cljs.core.get.call(null,map__18733__$1,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"auto","auto",-566279492));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__18733__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var progress_fn = cljs.core.get.call(null,map__18733__$1,new cljs.core.Keyword(null,"progress-fn","progress-fn",-1146547855));
var errorf = cljs.core.get.call(null,map__18733__$1,new cljs.core.Keyword(null,"errorf","errorf",-620376044),taoensso.encore.logf);
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay(((function (map__18733,map__18733__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (){
return timeout_ms;
});})(map__18733,map__18733__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
,null)),new cljs.core.Symbol(null,"timeout-ms","timeout-ms",-1900214363,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,taoensso.encore.nneg_int_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null)], null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null)], null),new cljs.core.Symbol(null,"timeout-ms","timeout-ms",-1900214363,null))))].join('')));
}

var temp__4423__auto__ = taoensso.encore.get_pooled_xhr_BANG_.call(null);
if(cljs.core.truth_(temp__4423__auto__)){
var xhr = temp__4423__auto__;
try{var timeout_ms__$1 = (function (){var or__4914__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4914__auto__)){
return or__4914__auto__;
} else {
return timeout_ms;
}
})();
var method_STAR_ = (function (){var G__18737 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__18737) {
case "get":
return "GET";

break;
case "post":
return "POST";

break;
case "put":
return "PUT";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
})();
var params__$1 = taoensso.encore.map_keys.call(null,cljs.core.name,params);
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["X-Requested-With","XMLHTTPRequest"], null),taoensso.encore.map_keys.call(null,cljs.core.name,headers));
var vec__18736 = taoensso.encore.coerce_xhr_params.call(null,uri,method,params__$1);
var uri_STAR_ = cljs.core.nth.call(null,vec__18736,(0),null);
var post_content_STAR_ = cljs.core.nth.call(null,vec__18736,(1),null);
var headers_STAR_ = cljs.core.clj__GT_js.call(null,((cljs.core.not.call(null,post_content_STAR_))?headers__$1:cljs.core.assoc.call(null,headers__$1,"Content-Type","application/x-www-form-urlencoded; charset=UTF-8")));
var G__18738_18751 = xhr;
goog.events.listenOnce(G__18738_18751,goog.net.EventType.READY,((function (G__18738_18751,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__18736,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__18733,map__18733__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (_){
return cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);
});})(G__18738_18751,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__18736,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__18733,map__18733__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
);

goog.events.listenOnce(G__18738_18751,goog.net.EventType.COMPLETE,((function (G__18738_18751,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__18736,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__18733,map__18733__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function taoensso$encore$ajax_lite_$_wrapped_callback(resp){
var status = xhr.getStatus();
var success_QMARK_ = xhr.isSuccess();
var _QMARK_http_status = ((cljs.core.not_EQ_.call(null,status,(-1)))?status:null);
var _QMARK_content_type = (cljs.core.truth_(_QMARK_http_status)?xhr.getResponseHeader("Content-Type"):null);
var _QMARK_content = (cljs.core.truth_(_QMARK_http_status)?(function (){var resp_type__$1 = ((!(cljs.core._EQ_.call(null,resp_type,new cljs.core.Keyword(null,"auto","auto",-566279492))))?resp_type:(function (){var pred__18744 = ((function (status,success_QMARK_,_QMARK_http_status,_QMARK_content_type,G__18738_18751,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__18736,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__18733,map__18733__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (p1__18714_SHARP_,p2__18713_SHARP_){
return taoensso.encore.str_contains_QMARK_.call(null,p2__18713_SHARP_,p1__18714_SHARP_);
});})(status,success_QMARK_,_QMARK_http_status,_QMARK_content_type,G__18738_18751,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__18736,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__18733,map__18733__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
;
var expr__18745 = [cljs.core.str(_QMARK_content_type)].join('');
if(cljs.core.truth_(pred__18744.call(null,"/edn",expr__18745))){
return new cljs.core.Keyword(null,"edn","edn",1317840885);
} else {
if(cljs.core.truth_(pred__18744.call(null,"/json",expr__18745))){
return new cljs.core.Keyword(null,"json","json",1279968570);
} else {
if(cljs.core.truth_(pred__18744.call(null,"/xml",expr__18745))){
return new cljs.core.Keyword(null,"xml","xml",-1170142052);
} else {
if(cljs.core.truth_(pred__18744.call(null,"/html",expr__18745))){
return new cljs.core.Keyword(null,"text","text",-1790561697);
} else {
return new cljs.core.Keyword(null,"text","text",-1790561697);
}
}
}
}
})());
try{var G__18748 = (((resp_type__$1 instanceof cljs.core.Keyword))?resp_type__$1.fqn:null);
switch (G__18748) {
case "text":
return xhr.getResponseText();

break;
case "json":
return xhr.getResponseJson();

break;
case "xml":
return xhr.getResponseXml();

break;
case "edn":
return cljs.reader.read_string.call(null,xhr.getResponseText());

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(resp_type__$1)].join('')));

}
}catch (e18747){if((e18747 instanceof Error)){
var e = e18747;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ajax","bad-response-type","ajax/bad-response-type",789441015),resp_type__$1,new cljs.core.Keyword("ajax","resp-as-text","ajax/resp-as-text",141416819),xhr.getResponseText()], null);
} else {
throw e18747;

}
}})():null);
var cb_arg = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"raw-resp","raw-resp",-1924342506),resp,new cljs.core.Keyword(null,"xhr","xhr",-177710851),xhr,new cljs.core.Keyword(null,"success?","success?",-122854052),success_QMARK_,new cljs.core.Keyword(null,"?content-type","?content-type",-2129759049),(cljs.core.truth_(_QMARK_http_status)?_QMARK_content_type:null),new cljs.core.Keyword(null,"?content","?content",1697782054),_QMARK_content,new cljs.core.Keyword(null,"?status","?status",938730360),_QMARK_http_status,new cljs.core.Keyword(null,"?error","?error",1070752222),(function (){var or__4914__auto__ = (cljs.core.truth_(_QMARK_http_status)?(function (){var n = _QMARK_http_status;
if(cljs.core.truth_(success_QMARK_)){
return null;
} else {
return _QMARK_http_status;
}
})():cljs.core.get.call(null,cljs.core.PersistentArrayMap.fromArray([goog.net.ErrorCode.EXCEPTION,new cljs.core.Keyword(null,"exception","exception",-335277064),goog.net.ErrorCode.HTTP_ERROR,new cljs.core.Keyword(null,"http-error","http-error",-1040049553),goog.net.ErrorCode.ABORT,new cljs.core.Keyword(null,"abort","abort",521193198),goog.net.ErrorCode.TIMEOUT,new cljs.core.Keyword(null,"timeout","timeout",-318625318)], true, false),xhr.getLastErrorCode(),new cljs.core.Keyword(null,"unknown","unknown",-935977881)));
if(cljs.core.truth_(or__4914__auto__)){
return or__4914__auto__;
} else {
if(((_QMARK_content == null)) && (cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(204),null,(1223),null], null), null).call(null,_QMARK_http_status)))){
return new cljs.core.Keyword(null,"no-content","no-content",-1860206018);
} else {
return null;
}
}
})()], null);
return callback.call(null,cb_arg);
});})(G__18738_18751,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__18736,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__18733,map__18733__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
);


var temp__4425__auto___18753 = progress_fn;
if(cljs.core.truth_(temp__4425__auto___18753)){
var pf_18754 = temp__4425__auto___18753;
goog.events.listen(xhr,goog.net.EventType.PROGRESS,((function (pf_18754,temp__4425__auto___18753,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__18736,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__18733,map__18733__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (ev){
var length_computable_QMARK_ = ev.lengthComputable;
var loaded = ev.loaded;
var total = ev.total;
var _QMARK_ratio = (cljs.core.truth_((function (){var and__4902__auto__ = length_computable_QMARK_;
if(cljs.core.truth_(and__4902__auto__)){
return cljs.core.not_EQ_.call(null,total,(0));
} else {
return and__4902__auto__;
}
})())?(loaded / total):null);
return pf_18754.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"?ratio","?ratio",-1275760831),_QMARK_ratio,new cljs.core.Keyword(null,"length-computable?","length-computable?",1915473276),length_computable_QMARK_,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),loaded,new cljs.core.Keyword(null,"total","total",1916810418),total,new cljs.core.Keyword(null,"ev","ev",-406827324),ev], null));
});})(pf_18754,temp__4425__auto___18753,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__18736,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__18733,map__18733__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
);
} else {
}

var G__18749_18755 = xhr;
var temp__4425__auto___18756 = new cljs.core.Keyword(null,"always","always",-1772028770);
if(cljs.core.truth_(temp__4425__auto___18756)){
var x_18757 = temp__4425__auto___18756;
G__18749_18755.setTimeoutInterval((function (){var or__4914__auto__ = timeout_ms__$1;
if(cljs.core.truth_(or__4914__auto__)){
return or__4914__auto__;
} else {
return (0);
}
})());
} else {
}

var temp__4425__auto___18758 = with_credentials_QMARK_;
if(cljs.core.truth_(temp__4425__auto___18758)){
var x_18759 = temp__4425__auto___18758;
G__18749_18755.setWithCredentials(true);
} else {
}

var temp__4425__auto___18760 = new cljs.core.Keyword(null,"always","always",-1772028770);
if(cljs.core.truth_(temp__4425__auto___18760)){
var x_18761 = temp__4425__auto___18760;
G__18749_18755.send(uri_STAR_,method_STAR_,post_content_STAR_,headers_STAR_);
} else {
}


return xhr;
}catch (e18735){if((e18735 instanceof Error)){
var e = e18735;
cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);

return null;
} else {
throw e18735;

}
}} else {
callback.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?error","?error",1070752222),new cljs.core.Keyword(null,"xhr-pool-depleted","xhr-pool-depleted",-1812092376)], null));

return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1.
 */
taoensso.encore.url_encode = (function taoensso$encore$url_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace.call(null,clojure.string.replace.call(null,encodeURIComponent([cljs.core.str(s)].join(''),s),"*","%2A"),"'","%27");
} else {
return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1.
 */
taoensso.encore.url_decode = (function taoensso$encore$url_decode(var_args){
var args__5979__auto__ = [];
var len__5972__auto___18766 = arguments.length;
var i__5973__auto___18767 = (0);
while(true){
if((i__5973__auto___18767 < len__5972__auto___18766)){
args__5979__auto__.push((arguments[i__5973__auto___18767]));

var G__18768 = (i__5973__auto___18767 + (1));
i__5973__auto___18767 = G__18768;
continue;
} else {
}
break;
}

var argseq__5980__auto__ = ((((1) < args__5979__auto__.length))?(new cljs.core.IndexedSeq(args__5979__auto__.slice((1)),(0))):null);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5980__auto__);
});

taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__18764){
var vec__18765 = p__18764;
var encoding = cljs.core.nth.call(null,vec__18765,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});

taoensso.encore.url_decode.cljs$lang$maxFixedArity = (1);

taoensso.encore.url_decode.cljs$lang$applyTo = (function (seq18762){
var G__18763 = cljs.core.first.call(null,seq18762);
var seq18762__$1 = cljs.core.next.call(null,seq18762);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(G__18763,seq18762__$1);
});
taoensso.encore.format_query_string = (function taoensso$encore$format_query_string(m){
var param = (function (k,v){
return [cljs.core.str(taoensso.encore.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(taoensso.encore.url_encode.call(null,v))].join('');
});
var join = ((function (param){
return (function (strs){
return clojure.string.join.call(null,"&",strs);
});})(param))
;
if(cljs.core.empty_QMARK_.call(null,m)){
return null;
} else {
return join.call(null,(function (){var iter__5686__auto__ = ((function (param,join){
return (function taoensso$encore$format_query_string_$_iter__18777(s__18778){
return (new cljs.core.LazySeq(null,((function (param,join){
return (function (){
var s__18778__$1 = s__18778;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__18778__$1);
if(temp__4425__auto__){
var s__18778__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18778__$2)){
var c__5684__auto__ = cljs.core.chunk_first.call(null,s__18778__$2);
var size__5685__auto__ = cljs.core.count.call(null,c__5684__auto__);
var b__18780 = cljs.core.chunk_buffer.call(null,size__5685__auto__);
if((function (){var i__18779 = (0);
while(true){
if((i__18779 < size__5685__auto__)){
var vec__18783 = cljs.core._nth.call(null,c__5684__auto__,i__18779);
var k = cljs.core.nth.call(null,vec__18783,(0),null);
var v = cljs.core.nth.call(null,vec__18783,(1),null);
cljs.core.chunk_append.call(null,b__18780,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__4914__auto__ = cljs.core.seq.call(null,v);
if(or__4914__auto__){
return or__4914__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)));

var G__18785 = (i__18779 + (1));
i__18779 = G__18785;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18780),taoensso$encore$format_query_string_$_iter__18777.call(null,cljs.core.chunk_rest.call(null,s__18778__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18780),null);
}
} else {
var vec__18784 = cljs.core.first.call(null,s__18778__$2);
var k = cljs.core.nth.call(null,vec__18784,(0),null);
var v = cljs.core.nth.call(null,vec__18784,(1),null);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__4914__auto__ = cljs.core.seq.call(null,v);
if(or__4914__auto__){
return or__4914__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)),taoensso$encore$format_query_string_$_iter__18777.call(null,cljs.core.rest.call(null,s__18778__$2)));
}
} else {
return null;
}
break;
}
});})(param,join))
,null,null));
});})(param,join))
;
return iter__5686__auto__.call(null,m);
})());
}
});
taoensso.encore.assoc_conj = (function taoensso$encore$assoc_conj(m,k,v){
return cljs.core.assoc.call(null,m,k,(function (){var temp__4423__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__4423__auto__)){
var cur = temp__4423__auto__;
if(cljs.core.vector_QMARK_.call(null,cur)){
return cljs.core.conj.call(null,cur,v);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur,v], null);
}
} else {
return v;
}
})());
});
/**
 * Based on `ring-codec/form-decode`.
 */
taoensso.encore.parse_query_params = (function taoensso$encore$parse_query_params(var_args){
var args__5979__auto__ = [];
var len__5972__auto___18791 = arguments.length;
var i__5973__auto___18792 = (0);
while(true){
if((i__5973__auto___18792 < len__5972__auto___18791)){
args__5979__auto__.push((arguments[i__5973__auto___18792]));

var G__18793 = (i__5973__auto___18792 + (1));
i__5973__auto___18792 = G__18793;
continue;
} else {
}
break;
}

var argseq__5980__auto__ = ((((1) < args__5979__auto__.length))?(new cljs.core.IndexedSeq(args__5979__auto__.slice((1)),(0))):null);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5980__auto__);
});

taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__18788){
var vec__18789 = p__18788;
var keywordize_QMARK_ = cljs.core.nth.call(null,vec__18789,(0),null);
var encoding = cljs.core.nth.call(null,vec__18789,(1),null);
var _PERCENT_ = (cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s))?cljs.core.PersistentArrayMap.EMPTY:(function (){var s__$1 = (cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_.call(null,s,"?"))?taoensso.encore.substr.call(null,s,(1)):s);
if(cljs.core.not.call(null,taoensso.encore.str_contains_QMARK_.call(null,s__$1,"="))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var m = cljs.core.reduce.call(null,((function (s__$1,vec__18789,keywordize_QMARK_,encoding){
return (function (m,param){
var temp__4423__auto__ = clojure.string.split.call(null,param,/=/,(2));
if(cljs.core.truth_(temp__4423__auto__)){
var vec__18790 = temp__4423__auto__;
var k = cljs.core.nth.call(null,vec__18790,(0),null);
var v = cljs.core.nth.call(null,vec__18790,(1),null);
return taoensso.encore.assoc_conj.call(null,m,taoensso.encore.url_decode.call(null,k,encoding),taoensso.encore.url_decode.call(null,v,encoding));
} else {
return m;
}
});})(s__$1,vec__18789,keywordize_QMARK_,encoding))
,cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,s__$1,/&/));
if(cljs.core.not.call(null,keywordize_QMARK_)){
return m;
} else {
return taoensso.encore.keywordize_map.call(null,m);
}
}
})());
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay(((function (_PERCENT_,vec__18789,keywordize_QMARK_,encoding){
return (function (){
return _PERCENT_;
});})(_PERCENT_,vec__18789,keywordize_QMARK_,encoding))
,null)),new cljs.core.Symbol(null,"%","%",-950237169,null),cljs.core.map_QMARK_,new cljs.core.Symbol(null,"map?","map?",-1780568534,null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))].join('')));
}

return _PERCENT_;
});

taoensso.encore.parse_query_params.cljs$lang$maxFixedArity = (1);

taoensso.encore.parse_query_params.cljs$lang$applyTo = (function (seq18786){
var G__18787 = cljs.core.first.call(null,seq18786);
var seq18786__$1 = cljs.core.next.call(null,seq18786);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic(G__18787,seq18786__$1);
});
taoensso.encore.merge_url_with_query_string = (function taoensso$encore$merge_url_with_query_string(url,m){
var vec__18795 = clojure.string.split.call(null,[cljs.core.str(url)].join(''),/\?/,(2));
var url__$1 = cljs.core.nth.call(null,vec__18795,(0),null);
var _QMARK_qstr = cljs.core.nth.call(null,vec__18795,(1),null);
var qmap = cljs.core.merge.call(null,(cljs.core.truth_(_QMARK_qstr)?taoensso.encore.keywordize_map.call(null,taoensso.encore.parse_query_params.call(null,_QMARK_qstr)):null),taoensso.encore.keywordize_map.call(null,m));
return [cljs.core.str(url__$1),cljs.core.str((function (){var temp__4425__auto__ = taoensso.encore.format_query_string.call(null,qmap);
if(cljs.core.truth_(temp__4425__auto__)){
var qstr = temp__4425__auto__;
return [cljs.core.str("?"),cljs.core.str(qstr)].join('');
} else {
return null;
}
})())].join('');
});
taoensso.encore.memoize_1 = taoensso.encore.memoize1;
taoensso.encore.logging_level = cljs.core.atom.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596));
taoensso.encore.set_exp_backoff_timeout_BANG_ = (function taoensso$encore$set_exp_backoff_timeout_BANG_(var_args){
var args__5979__auto__ = [];
var len__5972__auto___18800 = arguments.length;
var i__5973__auto___18801 = (0);
while(true){
if((i__5973__auto___18801 < len__5972__auto___18800)){
args__5979__auto__.push((arguments[i__5973__auto___18801]));

var G__18802 = (i__5973__auto___18801 + (1));
i__5973__auto___18801 = G__18802;
continue;
} else {
}
break;
}

var argseq__5980__auto__ = ((((1) < args__5979__auto__.length))?(new cljs.core.IndexedSeq(args__5979__auto__.slice((1)),(0))):null);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5980__auto__);
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,p__18798){
var vec__18799 = p__18798;
var nattempt = cljs.core.nth.call(null,vec__18799,(0),null);
return window.setTimeout(nullary_f,taoensso.encore.exp_backoff.call(null,(function (){var or__4914__auto__ = nattempt;
if(cljs.core.truth_(or__4914__auto__)){
return or__4914__auto__;
} else {
return (0);
}
})()));
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq18796){
var G__18797 = cljs.core.first.call(null,seq18796);
var seq18796__$1 = cljs.core.next.call(null,seq18796);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18797,seq18796__$1);
});
taoensso.encore.keys_EQ_ = (function taoensso$encore$keys_EQ_(m,ks){
return taoensso.encore.ks_EQ_.call(null,ks,m);
});
taoensso.encore.keys_LT__EQ_ = (function taoensso$encore$keys_LT__EQ_(m,ks){
return taoensso.encore.ks_LT__EQ_.call(null,ks,m);
});
taoensso.encore.keys_GT__EQ_ = (function taoensso$encore$keys_GT__EQ_(m,ks){
return taoensso.encore.ks_GT__EQ_.call(null,ks,m);
});
taoensso.encore.keys_EQ_nnil_QMARK_ = (function taoensso$encore$keys_EQ_nnil_QMARK_(m,ks){
return taoensso.encore.ks_nnil_QMARK_.call(null,ks,m);
});
taoensso.encore.parse_bool = taoensso.encore.as__QMARK_bool;
taoensso.encore.parse_int = taoensso.encore.as__QMARK_int;
taoensso.encore.parse_float = taoensso.encore.as__QMARK_float;
taoensso.encore.as_bool = (function taoensso$encore$as_bool(x){
if(cljs.core.truth_(x)){
return taoensso.encore.hcond.call(null,false,"taoensso.encore",2191,(new cljs.core.Delay((function (){
return taoensso.encore.as__QMARK_bool.call(null,x);
}),null)),cljs.core.list(new cljs.core.Symbol(null,"as-?bool","as-?bool",1645711161,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),taoensso.encore.nnil_QMARK_,new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null));
} else {
return null;
}
});
taoensso.encore.as_int = (function taoensso$encore$as_int(x){
if(cljs.core.truth_(x)){
return taoensso.encore.hcond.call(null,false,"taoensso.encore",2192,(new cljs.core.Delay((function (){
return taoensso.encore.as__QMARK_int.call(null,x);
}),null)),cljs.core.list(new cljs.core.Symbol(null,"as-?int","as-?int",2107097360,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),taoensso.encore.nnil_QMARK_,new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null));
} else {
return null;
}
});
taoensso.encore.as_float = (function taoensso$encore$as_float(x){
if(cljs.core.truth_(x)){
return taoensso.encore.hcond.call(null,false,"taoensso.encore",2193,(new cljs.core.Delay((function (){
return taoensso.encore.as__QMARK_float.call(null,x);
}),null)),cljs.core.list(new cljs.core.Symbol(null,"as-?float","as-?float",2124831706,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),taoensso.encore.nnil_QMARK_,new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null));
} else {
return null;
}
});
taoensso.encore.merge_deep_with = taoensso.encore.nested_merge_with;
taoensso.encore.merge_deep = taoensso.encore.nested_merge;
taoensso.encore.rate_limiter = (function taoensso$encore$rate_limiter(ncalls_limit,window_ms){
return taoensso.encore.rate_limiter_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
});
taoensso.encore.rate_limited = (function taoensso$encore$rate_limited(ncalls_limit,window_ms,f){
var rl = taoensso.encore.rate_limiter_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
return ((function (rl){
return (function() { 
var G__18803__delegate = function (args){
var temp__4423__auto__ = rl.call(null);
if(cljs.core.truth_(temp__4423__auto__)){
var backoff_ms = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backoff-ms","backoff-ms",1679281507),backoff_ms], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),f.call(null)], null);
}
};
var G__18803 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18804__i = 0, G__18804__a = new Array(arguments.length -  0);
while (G__18804__i < G__18804__a.length) {G__18804__a[G__18804__i] = arguments[G__18804__i + 0]; ++G__18804__i;}
  args = new cljs.core.IndexedSeq(G__18804__a,0);
} 
return G__18803__delegate.call(this,args);};
G__18803.cljs$lang$maxFixedArity = 0;
G__18803.cljs$lang$applyTo = (function (arglist__18805){
var args = cljs.core.seq(arglist__18805);
return G__18803__delegate(args);
});
G__18803.cljs$core$IFn$_invoke$arity$variadic = G__18803__delegate;
return G__18803;
})()
;
;})(rl))
});
if(typeof taoensso.encore._STAR_log_level_STAR_ !== 'undefined'){
} else {
/**
 * DEPRECATED
 */
taoensso.encore._STAR_log_level_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596);
}

taoensso.encore.log_QMARK_ = (function (){var __GT_n = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"trace","trace",-1082747415),(1),new cljs.core.Keyword(null,"debug","debug",-1608172596),(2),new cljs.core.Keyword(null,"info","info",-317069002),(3),new cljs.core.Keyword(null,"warn","warn",-436710552),(4),new cljs.core.Keyword(null,"error","error",-978969032),(5),new cljs.core.Keyword(null,"fatal","fatal",1874419888),(6),new cljs.core.Keyword(null,"report","report",1394055010),(7)], null);
return ((function (__GT_n){
return (function (level){
return (__GT_n.call(null,level) >= __GT_n.call(null,taoensso.encore._STAR_log_level_STAR_));
});
;})(__GT_n))
})();

taoensso.encore.tracef = (function taoensso$encore$tracef(var_args){
var args__5979__auto__ = [];
var len__5972__auto___18820 = arguments.length;
var i__5973__auto___18821 = (0);
while(true){
if((i__5973__auto___18821 < len__5972__auto___18820)){
args__5979__auto__.push((arguments[i__5973__auto___18821]));

var G__18822 = (i__5973__auto___18821 + (1));
i__5973__auto___18821 = G__18822;
continue;
} else {
}
break;
}

var argseq__5980__auto__ = ((((1) < args__5979__auto__.length))?(new cljs.core.IndexedSeq(args__5979__auto__.slice((1)),(0))):null);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5980__auto__);
});

taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"trace","trace",-1082747415)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.tracef.cljs$lang$maxFixedArity = (1);

taoensso.encore.tracef.cljs$lang$applyTo = (function (seq18806){
var G__18807 = cljs.core.first.call(null,seq18806);
var seq18806__$1 = cljs.core.next.call(null,seq18806);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic(G__18807,seq18806__$1);
});

taoensso.encore.debugf = (function taoensso$encore$debugf(var_args){
var args__5979__auto__ = [];
var len__5972__auto___18823 = arguments.length;
var i__5973__auto___18824 = (0);
while(true){
if((i__5973__auto___18824 < len__5972__auto___18823)){
args__5979__auto__.push((arguments[i__5973__auto___18824]));

var G__18825 = (i__5973__auto___18824 + (1));
i__5973__auto___18824 = G__18825;
continue;
} else {
}
break;
}

var argseq__5980__auto__ = ((((1) < args__5979__auto__.length))?(new cljs.core.IndexedSeq(args__5979__auto__.slice((1)),(0))):null);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5980__auto__);
});

taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.debugf.cljs$lang$maxFixedArity = (1);

taoensso.encore.debugf.cljs$lang$applyTo = (function (seq18808){
var G__18809 = cljs.core.first.call(null,seq18808);
var seq18808__$1 = cljs.core.next.call(null,seq18808);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic(G__18809,seq18808__$1);
});

taoensso.encore.infof = (function taoensso$encore$infof(var_args){
var args__5979__auto__ = [];
var len__5972__auto___18826 = arguments.length;
var i__5973__auto___18827 = (0);
while(true){
if((i__5973__auto___18827 < len__5972__auto___18826)){
args__5979__auto__.push((arguments[i__5973__auto___18827]));

var G__18828 = (i__5973__auto___18827 + (1));
i__5973__auto___18827 = G__18828;
continue;
} else {
}
break;
}

var argseq__5980__auto__ = ((((1) < args__5979__auto__.length))?(new cljs.core.IndexedSeq(args__5979__auto__.slice((1)),(0))):null);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5980__auto__);
});

taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"info","info",-317069002)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.infof.cljs$lang$maxFixedArity = (1);

taoensso.encore.infof.cljs$lang$applyTo = (function (seq18810){
var G__18811 = cljs.core.first.call(null,seq18810);
var seq18810__$1 = cljs.core.next.call(null,seq18810);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic(G__18811,seq18810__$1);
});

taoensso.encore.warnf = (function taoensso$encore$warnf(var_args){
var args__5979__auto__ = [];
var len__5972__auto___18829 = arguments.length;
var i__5973__auto___18830 = (0);
while(true){
if((i__5973__auto___18830 < len__5972__auto___18829)){
args__5979__auto__.push((arguments[i__5973__auto___18830]));

var G__18831 = (i__5973__auto___18830 + (1));
i__5973__auto___18830 = G__18831;
continue;
} else {
}
break;
}

var argseq__5980__auto__ = ((((1) < args__5979__auto__.length))?(new cljs.core.IndexedSeq(args__5979__auto__.slice((1)),(0))):null);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5980__auto__);
});

taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("WARN: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.warnf.cljs$lang$maxFixedArity = (1);

taoensso.encore.warnf.cljs$lang$applyTo = (function (seq18812){
var G__18813 = cljs.core.first.call(null,seq18812);
var seq18812__$1 = cljs.core.next.call(null,seq18812);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic(G__18813,seq18812__$1);
});

taoensso.encore.errorf = (function taoensso$encore$errorf(var_args){
var args__5979__auto__ = [];
var len__5972__auto___18832 = arguments.length;
var i__5973__auto___18833 = (0);
while(true){
if((i__5973__auto___18833 < len__5972__auto___18832)){
args__5979__auto__.push((arguments[i__5973__auto___18833]));

var G__18834 = (i__5973__auto___18833 + (1));
i__5973__auto___18833 = G__18834;
continue;
} else {
}
break;
}

var argseq__5980__auto__ = ((((1) < args__5979__auto__.length))?(new cljs.core.IndexedSeq(args__5979__auto__.slice((1)),(0))):null);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5980__auto__);
});

taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"error","error",-978969032)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("ERROR: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.errorf.cljs$lang$maxFixedArity = (1);

taoensso.encore.errorf.cljs$lang$applyTo = (function (seq18814){
var G__18815 = cljs.core.first.call(null,seq18814);
var seq18814__$1 = cljs.core.next.call(null,seq18814);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic(G__18815,seq18814__$1);
});

taoensso.encore.fatalf = (function taoensso$encore$fatalf(var_args){
var args__5979__auto__ = [];
var len__5972__auto___18835 = arguments.length;
var i__5973__auto___18836 = (0);
while(true){
if((i__5973__auto___18836 < len__5972__auto___18835)){
args__5979__auto__.push((arguments[i__5973__auto___18836]));

var G__18837 = (i__5973__auto___18836 + (1));
i__5973__auto___18836 = G__18837;
continue;
} else {
}
break;
}

var argseq__5980__auto__ = ((((1) < args__5979__auto__.length))?(new cljs.core.IndexedSeq(args__5979__auto__.slice((1)),(0))):null);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5980__auto__);
});

taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"fatal","fatal",1874419888)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("FATAL: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.fatalf.cljs$lang$maxFixedArity = (1);

taoensso.encore.fatalf.cljs$lang$applyTo = (function (seq18816){
var G__18817 = cljs.core.first.call(null,seq18816);
var seq18816__$1 = cljs.core.next.call(null,seq18816);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic(G__18817,seq18816__$1);
});

taoensso.encore.reportf = (function taoensso$encore$reportf(var_args){
var args__5979__auto__ = [];
var len__5972__auto___18838 = arguments.length;
var i__5973__auto___18839 = (0);
while(true){
if((i__5973__auto___18839 < len__5972__auto___18838)){
args__5979__auto__.push((arguments[i__5973__auto___18839]));

var G__18840 = (i__5973__auto___18839 + (1));
i__5973__auto___18839 = G__18840;
continue;
} else {
}
break;
}

var argseq__5980__auto__ = ((((1) < args__5979__auto__.length))?(new cljs.core.IndexedSeq(args__5979__auto__.slice((1)),(0))):null);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5980__auto__);
});

taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"report","report",1394055010)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.reportf.cljs$lang$maxFixedArity = (1);

taoensso.encore.reportf.cljs$lang$applyTo = (function (seq18818){
var G__18819 = cljs.core.first.call(null,seq18818);
var seq18818__$1 = cljs.core.next.call(null,seq18818);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic(G__18819,seq18818__$1);
});

//# sourceMappingURL=encore.js.map
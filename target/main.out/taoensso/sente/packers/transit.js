// Compiled by ClojureScript 1.7.145 {}
goog.provide('taoensso.sente.packers.transit');
goog.require('cljs.core');
goog.require('taoensso.sente.interfaces');
goog.require('cognitect.transit');
goog.require('taoensso.encore');
goog.require('clojure.string');
goog.require('cljs.reader');
taoensso.sente.packers.transit.get_charset = (function taoensso$sente$packers$transit$get_charset(transit_fmt){
if(cljs.core._EQ_.call(null,transit_fmt,new cljs.core.Keyword(null,"msgpack","msgpack",-860367492))){
return "ISO-8859-1";
} else {
return "UTF-8";
}
});

/**
* @constructor
 * @implements {taoensso.sente.interfaces.IPacker}
*/
taoensso.sente.packers.transit.TransitPacker = (function (transit_fmt){
this.transit_fmt = transit_fmt;
})
taoensso.sente.packers.transit.TransitPacker.prototype.taoensso$sente$interfaces$IPacker$ = true;

taoensso.sente.packers.transit.TransitPacker.prototype.taoensso$sente$interfaces$IPacker$pack$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,self__.transit_fmt),x);
});

taoensso.sente.packers.transit.TransitPacker.prototype.taoensso$sente$interfaces$IPacker$unpack$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,self__.transit_fmt),s);
});

taoensso.sente.packers.transit.TransitPacker.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transit-fmt","transit-fmt",913727703,null)], null);
});

taoensso.sente.packers.transit.TransitPacker.cljs$lang$type = true;

taoensso.sente.packers.transit.TransitPacker.cljs$lang$ctorStr = "taoensso.sente.packers.transit/TransitPacker";

taoensso.sente.packers.transit.TransitPacker.cljs$lang$ctorPrWriter = (function (this__5512__auto__,writer__5513__auto__,opt__5514__auto__){
return cljs.core._write.call(null,writer__5513__auto__,"taoensso.sente.packers.transit/TransitPacker");
});

taoensso.sente.packers.transit.__GT_TransitPacker = (function taoensso$sente$packers$transit$__GT_TransitPacker(transit_fmt){
return (new taoensso.sente.packers.transit.TransitPacker(transit_fmt));
});

taoensso.sente.packers.transit.edn_packer = taoensso.sente.interfaces.edn_packer;
taoensso.sente.packers.transit.json_packer = taoensso.sente.packers.transit.__GT_TransitPacker.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
taoensso.sente.packers.transit.max_flexi_format_QMARK_ = (function taoensso$sente$packers$transit$max_flexi_format_QMARK_(fmt){
return cljs.core._EQ_.call(null,fmt,new cljs.core.Keyword(null,"json","json",1279968570));
});
taoensso.sente.packers.transit.max_flexi_format = (function (){var ordered_formats = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"json","json",1279968570)], null);
var scored_formats = cljs.core.zipmap.call(null,ordered_formats,cljs.core.next.call(null,cljs.core.range.call(null)));
return ((function (ordered_formats,scored_formats){
return (function (xs){
return cljs.core.apply.call(null,cljs.core.max_key,scored_formats,xs);
});
;})(ordered_formats,scored_formats))
})();
taoensso.sente.packers.transit.auto_flexi_format = (function taoensso$sente$packers$transit$auto_flexi_format(x){
if(typeof x === 'string'){
var c = cljs.core.count.call(null,x);
if((c > (300))){
return new cljs.core.Keyword(null,"json","json",1279968570);
} else {
return null;
}
} else {
if((cljs.core.sequential_QMARK_.call(null,x)) && (cljs.core.counted_QMARK_.call(null,x))){
var c = cljs.core.count.call(null,x);
if((c > (20))){
return new cljs.core.Keyword(null,"json","json",1279968570);
} else {
return null;
}
} else {
return null;
}
}
});

/**
* @constructor
 * @implements {taoensso.sente.interfaces.IPacker}
*/
taoensso.sente.packers.transit.FlexiPacker = (function (default_fmt){
this.default_fmt = default_fmt;
})
taoensso.sente.packers.transit.FlexiPacker.prototype.taoensso$sente$interfaces$IPacker$ = true;

taoensso.sente.packers.transit.FlexiPacker.prototype.taoensso$sente$interfaces$IPacker$pack$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var _QMARK_meta_format = (function (){var temp__4425__auto__ = cljs.core.meta.call(null,x);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return taoensso.sente.packers.transit.max_flexi_format.call(null,cljs.core.filter.call(null,m,cljs.core.keys.call(null,m)));
} else {
return null;
}
})();
var _QMARK_auto_format = (cljs.core.truth_(_QMARK_meta_format)?null:taoensso.sente.packers.transit.auto_flexi_format.call(null,x));
var fmt = taoensso.sente.packers.transit.max_flexi_format.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_auto_format,_QMARK_meta_format,self__.default_fmt], null));
var G__18904 = (((fmt instanceof cljs.core.Keyword))?fmt.fqn:null);
switch (G__18904) {
case "json":
return [cljs.core.str("j"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,taoensso.sente.packers.transit.json_packer,x))].join('');

break;
case "edn":
return [cljs.core.str("e"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,taoensso.sente.packers.transit.edn_packer,x))].join('');

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(fmt)].join('')));

}
});

taoensso.sente.packers.transit.FlexiPacker.prototype.taoensso$sente$interfaces$IPacker$unpack$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
var prefix = taoensso.encore.substr.call(null,s,(0),(1));
var s_STAR_ = taoensso.encore.substr.call(null,s,(1));
var G__18905 = prefix;
switch (G__18905) {
case "j":
return taoensso.sente.interfaces.unpack.call(null,taoensso.sente.packers.transit.json_packer,s_STAR_);

break;
case "e":
return taoensso.sente.interfaces.unpack.call(null,taoensso.sente.packers.transit.edn_packer,s_STAR_);

break;
default:
throw cljs.core.ex_info.call(null,[cljs.core.str("Malformed FlexiPacker data: "),cljs.core.str(s)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"s","s",1705939918),s], null));

}
});

taoensso.sente.packers.transit.FlexiPacker.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-fmt","default-fmt",826835013,null)], null);
});

taoensso.sente.packers.transit.FlexiPacker.cljs$lang$type = true;

taoensso.sente.packers.transit.FlexiPacker.cljs$lang$ctorStr = "taoensso.sente.packers.transit/FlexiPacker";

taoensso.sente.packers.transit.FlexiPacker.cljs$lang$ctorPrWriter = (function (this__5512__auto__,writer__5513__auto__,opt__5514__auto__){
return cljs.core._write.call(null,writer__5513__auto__,"taoensso.sente.packers.transit/FlexiPacker");
});

taoensso.sente.packers.transit.__GT_FlexiPacker = (function taoensso$sente$packers$transit$__GT_FlexiPacker(default_fmt){
return (new taoensso.sente.packers.transit.FlexiPacker(default_fmt));
});

/**
 * Experimental (pre-alpha): subject to change.
 *   Returns an IPacker implementation that un/packs data with a variable format
 *   determined by the data's size, metadata, or the provided `default-fmt` when no
 *   metadata is present.
 * 
 *   (def fpack (partial pack (get-flexi-packer :edn)))
 *   (fpack ^:edn     {:a :A :b :B}) => "e{:a :A, :b :B}"
 *   (fpack ^:json    {:a :A :b :B}) => "j["^ ","~:a","~:A","~:b","~:B"]"
 *   (fpack ^:msgpack {:a :A :b :B}  => "m£~:a£~:A£~:b£~:B"
 */
taoensso.sente.packers.transit.get_flexi_packer = (function taoensso$sente$packers$transit$get_flexi_packer(var_args){
var args__5979__auto__ = [];
var len__5972__auto___18911 = arguments.length;
var i__5973__auto___18912 = (0);
while(true){
if((i__5973__auto___18912 < len__5972__auto___18911)){
args__5979__auto__.push((arguments[i__5973__auto___18912]));

var G__18913 = (i__5973__auto___18912 + (1));
i__5973__auto___18912 = G__18913;
continue;
} else {
}
break;
}

var argseq__5980__auto__ = ((((0) < args__5979__auto__.length))?(new cljs.core.IndexedSeq(args__5979__auto__.slice((0)),(0))):null);
return taoensso.sente.packers.transit.get_flexi_packer.cljs$core$IFn$_invoke$arity$variadic(argseq__5980__auto__);
});

taoensso.sente.packers.transit.get_flexi_packer.cljs$core$IFn$_invoke$arity$variadic = (function (p__18909){
var vec__18910 = p__18909;
var _QMARK_default_fmt = cljs.core.nth.call(null,vec__18910,(0),null);
var default_fmt = (function (){var or__4914__auto__ = _QMARK_default_fmt;
if(cljs.core.truth_(or__4914__auto__)){
return or__4914__auto__;
} else {
return new cljs.core.Keyword(null,"edn","edn",1317840885);
}
})();
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"json-verbose","json-verbose",-542533531),null,new cljs.core.Keyword(null,"edn","edn",1317840885),null,new cljs.core.Keyword(null,"json","json",1279968570),null], null), null).call(null,default_fmt))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"json-verbose","json-verbose",-542533531),null,new cljs.core.Keyword(null,"edn","edn",1317840885),null,new cljs.core.Keyword(null,"json","json",1279968570),null], null), null),new cljs.core.Symbol(null,"default-fmt","default-fmt",826835013,null))))].join('')));
}

return taoensso.sente.packers.transit.__GT_FlexiPacker.call(null,default_fmt);
});

taoensso.sente.packers.transit.get_flexi_packer.cljs$lang$maxFixedArity = (0);

taoensso.sente.packers.transit.get_flexi_packer.cljs$lang$applyTo = (function (seq18908){
return taoensso.sente.packers.transit.get_flexi_packer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18908));
});
taoensso.sente.packers.transit.default_flexi_packer = taoensso.sente.packers.transit.get_flexi_packer.call(null,new cljs.core.Keyword(null,"edn","edn",1317840885));

//# sourceMappingURL=transit.js.map
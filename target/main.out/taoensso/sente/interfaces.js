// Compiled by ClojureScript 1.7.145 {}
goog.provide('taoensso.sente.interfaces');
goog.require('cljs.core');
goog.require('cljs.reader');

/**
 * Extension pt. for client<->server comms data un/packers:
 *   arbitrary Clojure data <-> serialized strings.
 * @interface
 */
taoensso.sente.interfaces.IPacker = function(){};

taoensso.sente.interfaces.pack = (function taoensso$sente$interfaces$pack(_,x){
if((!((_ == null))) && (!((_.taoensso$sente$interfaces$IPacker$pack$arity$2 == null)))){
return _.taoensso$sente$interfaces$IPacker$pack$arity$2(_,x);
} else {
var x__5569__auto__ = (((_ == null))?null:_);
var m__5570__auto__ = (taoensso.sente.interfaces.pack[goog.typeOf(x__5569__auto__)]);
if(!((m__5570__auto__ == null))){
return m__5570__auto__.call(null,_,x);
} else {
var m__5570__auto____$1 = (taoensso.sente.interfaces.pack["_"]);
if(!((m__5570__auto____$1 == null))){
return m__5570__auto____$1.call(null,_,x);
} else {
throw cljs.core.missing_protocol.call(null,"IPacker.pack",_);
}
}
}
});

taoensso.sente.interfaces.unpack = (function taoensso$sente$interfaces$unpack(_,x){
if((!((_ == null))) && (!((_.taoensso$sente$interfaces$IPacker$unpack$arity$2 == null)))){
return _.taoensso$sente$interfaces$IPacker$unpack$arity$2(_,x);
} else {
var x__5569__auto__ = (((_ == null))?null:_);
var m__5570__auto__ = (taoensso.sente.interfaces.unpack[goog.typeOf(x__5569__auto__)]);
if(!((m__5570__auto__ == null))){
return m__5570__auto__.call(null,_,x);
} else {
var m__5570__auto____$1 = (taoensso.sente.interfaces.unpack["_"]);
if(!((m__5570__auto____$1 == null))){
return m__5570__auto____$1.call(null,_,x);
} else {
throw cljs.core.missing_protocol.call(null,"IPacker.unpack",_);
}
}
}
});


/**
* @constructor
 * @implements {taoensso.sente.interfaces.IPacker}
*/
taoensso.sente.interfaces.EdnPacker = (function (){
})
taoensso.sente.interfaces.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$ = true;

taoensso.sente.interfaces.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$pack$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.pr_str.call(null,x);
});

taoensso.sente.interfaces.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$unpack$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return cljs.reader.read_string.call(null,s);
});

taoensso.sente.interfaces.EdnPacker.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.sente.interfaces.EdnPacker.cljs$lang$type = true;

taoensso.sente.interfaces.EdnPacker.cljs$lang$ctorStr = "taoensso.sente.interfaces/EdnPacker";

taoensso.sente.interfaces.EdnPacker.cljs$lang$ctorPrWriter = (function (this__5512__auto__,writer__5513__auto__,opt__5514__auto__){
return cljs.core._write.call(null,writer__5513__auto__,"taoensso.sente.interfaces/EdnPacker");
});

taoensso.sente.interfaces.__GT_EdnPacker = (function taoensso$sente$interfaces$__GT_EdnPacker(){
return (new taoensso.sente.interfaces.EdnPacker());
});

/**
 * Default Edn packer.
 */
taoensso.sente.interfaces.edn_packer = taoensso.sente.interfaces.__GT_EdnPacker.call(null);
taoensso.sente.interfaces.coerce_packer = (function taoensso$sente$interfaces$coerce_packer(x){
if(cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"edn","edn",1317840885))){
return taoensso.sente.interfaces.edn_packer;
} else {
if(((!((x == null)))?(((false) || (x.taoensso$sente$interfaces$IPacker$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IPacker,x):false)):cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IPacker,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IPacker","IPacker",266151414,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

return x;
}
});

//# sourceMappingURL=interfaces.js.map
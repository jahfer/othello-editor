// Compiled by ClojureScript 1.7.145 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__18920_18924 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__18921_18925 = null;
var count__18922_18926 = (0);
var i__18923_18927 = (0);
while(true){
if((i__18923_18927 < count__18922_18926)){
var k_18928 = cljs.core._nth.call(null,chunk__18921_18925,i__18923_18927);
var v_18929 = (b[k_18928]);
(a[k_18928] = v_18929);

var G__18930 = seq__18920_18924;
var G__18931 = chunk__18921_18925;
var G__18932 = count__18922_18926;
var G__18933 = (i__18923_18927 + (1));
seq__18920_18924 = G__18930;
chunk__18921_18925 = G__18931;
count__18922_18926 = G__18932;
i__18923_18927 = G__18933;
continue;
} else {
var temp__4425__auto___18934 = cljs.core.seq.call(null,seq__18920_18924);
if(temp__4425__auto___18934){
var seq__18920_18935__$1 = temp__4425__auto___18934;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18920_18935__$1)){
var c__5717__auto___18936 = cljs.core.chunk_first.call(null,seq__18920_18935__$1);
var G__18937 = cljs.core.chunk_rest.call(null,seq__18920_18935__$1);
var G__18938 = c__5717__auto___18936;
var G__18939 = cljs.core.count.call(null,c__5717__auto___18936);
var G__18940 = (0);
seq__18920_18924 = G__18937;
chunk__18921_18925 = G__18938;
count__18922_18926 = G__18939;
i__18923_18927 = G__18940;
continue;
} else {
var k_18941 = cljs.core.first.call(null,seq__18920_18935__$1);
var v_18942 = (b[k_18941]);
(a[k_18941] = v_18942);

var G__18943 = cljs.core.next.call(null,seq__18920_18935__$1);
var G__18944 = null;
var G__18945 = (0);
var G__18946 = (0);
seq__18920_18924 = G__18943;
chunk__18921_18925 = G__18944;
count__18922_18926 = G__18945;
i__18923_18927 = G__18946;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__5512__auto__,writer__5513__auto__,opt__5514__auto__){
return cljs.core._write.call(null,writer__5513__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__5512__auto__,writer__5513__auto__,opt__5514__auto__){
return cljs.core._write.call(null,writer__5513__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args18947 = [];
var len__5972__auto___18950 = arguments.length;
var i__5973__auto___18951 = (0);
while(true){
if((i__5973__auto___18951 < len__5972__auto___18950)){
args18947.push((arguments[i__5973__auto___18951]));

var G__18952 = (i__5973__auto___18951 + (1));
i__5973__auto___18951 = G__18952;
continue;
} else {
}
break;
}

var G__18949 = args18947.length;
switch (G__18949) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18947.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__18954 = (i + (2));
var G__18955 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__18954;
ret = G__18955;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__5512__auto__,writer__5513__auto__,opt__5514__auto__){
return cljs.core._write.call(null,writer__5513__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__5512__auto__,writer__5513__auto__,opt__5514__auto__){
return cljs.core._write.call(null,writer__5513__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__18956_18960 = cljs.core.seq.call(null,v);
var chunk__18957_18961 = null;
var count__18958_18962 = (0);
var i__18959_18963 = (0);
while(true){
if((i__18959_18963 < count__18958_18962)){
var x_18964 = cljs.core._nth.call(null,chunk__18957_18961,i__18959_18963);
ret.push(x_18964);

var G__18965 = seq__18956_18960;
var G__18966 = chunk__18957_18961;
var G__18967 = count__18958_18962;
var G__18968 = (i__18959_18963 + (1));
seq__18956_18960 = G__18965;
chunk__18957_18961 = G__18966;
count__18958_18962 = G__18967;
i__18959_18963 = G__18968;
continue;
} else {
var temp__4425__auto___18969 = cljs.core.seq.call(null,seq__18956_18960);
if(temp__4425__auto___18969){
var seq__18956_18970__$1 = temp__4425__auto___18969;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18956_18970__$1)){
var c__5717__auto___18971 = cljs.core.chunk_first.call(null,seq__18956_18970__$1);
var G__18972 = cljs.core.chunk_rest.call(null,seq__18956_18970__$1);
var G__18973 = c__5717__auto___18971;
var G__18974 = cljs.core.count.call(null,c__5717__auto___18971);
var G__18975 = (0);
seq__18956_18960 = G__18972;
chunk__18957_18961 = G__18973;
count__18958_18962 = G__18974;
i__18959_18963 = G__18975;
continue;
} else {
var x_18976 = cljs.core.first.call(null,seq__18956_18970__$1);
ret.push(x_18976);

var G__18977 = cljs.core.next.call(null,seq__18956_18970__$1);
var G__18978 = null;
var G__18979 = (0);
var G__18980 = (0);
seq__18956_18960 = G__18977;
chunk__18957_18961 = G__18978;
count__18958_18962 = G__18979;
i__18959_18963 = G__18980;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__5512__auto__,writer__5513__auto__,opt__5514__auto__){
return cljs.core._write.call(null,writer__5513__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__5512__auto__,writer__5513__auto__,opt__5514__auto__){
return cljs.core._write.call(null,writer__5513__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__18981_18985 = cljs.core.seq.call(null,v);
var chunk__18982_18986 = null;
var count__18983_18987 = (0);
var i__18984_18988 = (0);
while(true){
if((i__18984_18988 < count__18983_18987)){
var x_18989 = cljs.core._nth.call(null,chunk__18982_18986,i__18984_18988);
ret.push(x_18989);

var G__18990 = seq__18981_18985;
var G__18991 = chunk__18982_18986;
var G__18992 = count__18983_18987;
var G__18993 = (i__18984_18988 + (1));
seq__18981_18985 = G__18990;
chunk__18982_18986 = G__18991;
count__18983_18987 = G__18992;
i__18984_18988 = G__18993;
continue;
} else {
var temp__4425__auto___18994 = cljs.core.seq.call(null,seq__18981_18985);
if(temp__4425__auto___18994){
var seq__18981_18995__$1 = temp__4425__auto___18994;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18981_18995__$1)){
var c__5717__auto___18996 = cljs.core.chunk_first.call(null,seq__18981_18995__$1);
var G__18997 = cljs.core.chunk_rest.call(null,seq__18981_18995__$1);
var G__18998 = c__5717__auto___18996;
var G__18999 = cljs.core.count.call(null,c__5717__auto___18996);
var G__19000 = (0);
seq__18981_18985 = G__18997;
chunk__18982_18986 = G__18998;
count__18983_18987 = G__18999;
i__18984_18988 = G__19000;
continue;
} else {
var x_19001 = cljs.core.first.call(null,seq__18981_18995__$1);
ret.push(x_19001);

var G__19002 = cljs.core.next.call(null,seq__18981_18995__$1);
var G__19003 = null;
var G__19004 = (0);
var G__19005 = (0);
seq__18981_18985 = G__19002;
chunk__18982_18986 = G__19003;
count__18983_18987 = G__19004;
i__18984_18988 = G__19005;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__5512__auto__,writer__5513__auto__,opt__5514__auto__){
return cljs.core._write.call(null,writer__5513__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__19006_19010 = cljs.core.seq.call(null,v);
var chunk__19007_19011 = null;
var count__19008_19012 = (0);
var i__19009_19013 = (0);
while(true){
if((i__19009_19013 < count__19008_19012)){
var x_19014 = cljs.core._nth.call(null,chunk__19007_19011,i__19009_19013);
ret.push(x_19014);

var G__19015 = seq__19006_19010;
var G__19016 = chunk__19007_19011;
var G__19017 = count__19008_19012;
var G__19018 = (i__19009_19013 + (1));
seq__19006_19010 = G__19015;
chunk__19007_19011 = G__19016;
count__19008_19012 = G__19017;
i__19009_19013 = G__19018;
continue;
} else {
var temp__4425__auto___19019 = cljs.core.seq.call(null,seq__19006_19010);
if(temp__4425__auto___19019){
var seq__19006_19020__$1 = temp__4425__auto___19019;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19006_19020__$1)){
var c__5717__auto___19021 = cljs.core.chunk_first.call(null,seq__19006_19020__$1);
var G__19022 = cljs.core.chunk_rest.call(null,seq__19006_19020__$1);
var G__19023 = c__5717__auto___19021;
var G__19024 = cljs.core.count.call(null,c__5717__auto___19021);
var G__19025 = (0);
seq__19006_19010 = G__19022;
chunk__19007_19011 = G__19023;
count__19008_19012 = G__19024;
i__19009_19013 = G__19025;
continue;
} else {
var x_19026 = cljs.core.first.call(null,seq__19006_19020__$1);
ret.push(x_19026);

var G__19027 = cljs.core.next.call(null,seq__19006_19020__$1);
var G__19028 = null;
var G__19029 = (0);
var G__19030 = (0);
seq__19006_19010 = G__19027;
chunk__19007_19011 = G__19028;
count__19008_19012 = G__19029;
i__19009_19013 = G__19030;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__5512__auto__,writer__5513__auto__,opt__5514__auto__){
return cljs.core._write.call(null,writer__5513__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__5512__auto__,writer__5513__auto__,opt__5514__auto__){
return cljs.core._write.call(null,writer__5513__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args19031 = [];
var len__5972__auto___19042 = arguments.length;
var i__5973__auto___19043 = (0);
while(true){
if((i__5973__auto___19043 < len__5972__auto___19042)){
args19031.push((arguments[i__5973__auto___19043]));

var G__19044 = (i__5973__auto___19043 + (1));
i__5973__auto___19043 = G__19044;
continue;
} else {
}
break;
}

var G__19033 = args19031.length;
switch (G__19033) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19031.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__19034 = obj;
G__19034.push(kfn.call(null,k),vfn.call(null,v));

return G__19034;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x19035 = cljs.core.clone.call(null,handlers);
x19035.forEach = ((function (x19035,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__19036 = cljs.core.seq.call(null,coll);
var chunk__19037 = null;
var count__19038 = (0);
var i__19039 = (0);
while(true){
if((i__19039 < count__19038)){
var vec__19040 = cljs.core._nth.call(null,chunk__19037,i__19039);
var k = cljs.core.nth.call(null,vec__19040,(0),null);
var v = cljs.core.nth.call(null,vec__19040,(1),null);
f.call(null,v,k);

var G__19046 = seq__19036;
var G__19047 = chunk__19037;
var G__19048 = count__19038;
var G__19049 = (i__19039 + (1));
seq__19036 = G__19046;
chunk__19037 = G__19047;
count__19038 = G__19048;
i__19039 = G__19049;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__19036);
if(temp__4425__auto__){
var seq__19036__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19036__$1)){
var c__5717__auto__ = cljs.core.chunk_first.call(null,seq__19036__$1);
var G__19050 = cljs.core.chunk_rest.call(null,seq__19036__$1);
var G__19051 = c__5717__auto__;
var G__19052 = cljs.core.count.call(null,c__5717__auto__);
var G__19053 = (0);
seq__19036 = G__19050;
chunk__19037 = G__19051;
count__19038 = G__19052;
i__19039 = G__19053;
continue;
} else {
var vec__19041 = cljs.core.first.call(null,seq__19036__$1);
var k = cljs.core.nth.call(null,vec__19041,(0),null);
var v = cljs.core.nth.call(null,vec__19041,(1),null);
f.call(null,v,k);

var G__19054 = cljs.core.next.call(null,seq__19036__$1);
var G__19055 = null;
var G__19056 = (0);
var G__19057 = (0);
seq__19036 = G__19054;
chunk__19037 = G__19055;
count__19038 = G__19056;
i__19039 = G__19057;
continue;
}
} else {
return null;
}
}
break;
}
});})(x19035,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x19035;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args19058 = [];
var len__5972__auto___19064 = arguments.length;
var i__5973__auto___19065 = (0);
while(true){
if((i__5973__auto___19065 < len__5972__auto___19064)){
args19058.push((arguments[i__5973__auto___19065]));

var G__19066 = (i__5973__auto___19065 + (1));
i__5973__auto___19065 = G__19066;
continue;
} else {
}
break;
}

var G__19060 = args19058.length;
switch (G__19060) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19058.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit19061 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit19061 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta19062){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta19062 = meta19062;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit19061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19063,meta19062__$1){
var self__ = this;
var _19063__$1 = this;
return (new cognitect.transit.t_cognitect$transit19061(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta19062__$1));
});

cognitect.transit.t_cognitect$transit19061.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19063){
var self__ = this;
var _19063__$1 = this;
return self__.meta19062;
});

cognitect.transit.t_cognitect$transit19061.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit19061.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit19061.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit19061.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit19061.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta19062","meta19062",-1051613276,null)], null);
});

cognitect.transit.t_cognitect$transit19061.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit19061.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit19061";

cognitect.transit.t_cognitect$transit19061.cljs$lang$ctorPrWriter = (function (this__5512__auto__,writer__5513__auto__,opt__5514__auto__){
return cljs.core._write.call(null,writer__5513__auto__,"cognitect.transit/t_cognitect$transit19061");
});

cognitect.transit.__GT_t_cognitect$transit19061 = (function cognitect$transit$__GT_t_cognitect$transit19061(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta19062){
return (new cognitect.transit.t_cognitect$transit19061(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta19062));
});

}

return (new cognitect.transit.t_cognitect$transit19061(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map
// Compiled by ClojureScript 1.7.145 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (new goog.Uri(window.location.href));
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.changed_href_QMARK_ = (function adzerk$boot_reload$reload$changed_href_QMARK_(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var uri = (new goog.Uri(href_or_uri));
var path = adzerk.boot_reload.reload.page_uri.resolve(uri).getPath();
if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (uri,path){
return (function (p1__18014_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__18014_SHARP_,path);
});})(uri,path))
,changed)))){
return uri;
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__18019 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__18020 = null;
var count__18021 = (0);
var i__18022 = (0);
while(true){
if((i__18022 < count__18021)){
var s = cljs.core._nth.call(null,chunk__18020,i__18022);
var temp__4425__auto___18023 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___18023)){
var sheet_18024 = temp__4425__auto___18023;
var temp__4425__auto___18025__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_18024.href,changed);
if(cljs.core.truth_(temp__4425__auto___18025__$1)){
var href_uri_18026 = temp__4425__auto___18025__$1;
sheet_18024.ownerNode.href = href_uri_18026.makeUnique().toString();
} else {
}
} else {
}

var G__18027 = seq__18019;
var G__18028 = chunk__18020;
var G__18029 = count__18021;
var G__18030 = (i__18022 + (1));
seq__18019 = G__18027;
chunk__18020 = G__18028;
count__18021 = G__18029;
i__18022 = G__18030;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__18019);
if(temp__4425__auto__){
var seq__18019__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18019__$1)){
var c__5717__auto__ = cljs.core.chunk_first.call(null,seq__18019__$1);
var G__18031 = cljs.core.chunk_rest.call(null,seq__18019__$1);
var G__18032 = c__5717__auto__;
var G__18033 = cljs.core.count.call(null,c__5717__auto__);
var G__18034 = (0);
seq__18019 = G__18031;
chunk__18020 = G__18032;
count__18021 = G__18033;
i__18022 = G__18034;
continue;
} else {
var s = cljs.core.first.call(null,seq__18019__$1);
var temp__4425__auto___18035__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___18035__$1)){
var sheet_18036 = temp__4425__auto___18035__$1;
var temp__4425__auto___18037__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_18036.href,changed);
if(cljs.core.truth_(temp__4425__auto___18037__$2)){
var href_uri_18038 = temp__4425__auto___18037__$2;
sheet_18036.ownerNode.href = href_uri_18038.makeUnique().toString();
} else {
}
} else {
}

var G__18039 = cljs.core.next.call(null,seq__18019__$1);
var G__18040 = null;
var G__18041 = (0);
var G__18042 = (0);
seq__18019 = G__18039;
chunk__18020 = G__18040;
count__18021 = G__18041;
i__18022 = G__18042;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__18047 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__18048 = null;
var count__18049 = (0);
var i__18050 = (0);
while(true){
if((i__18050 < count__18049)){
var s = cljs.core._nth.call(null,chunk__18048,i__18050);
var temp__4425__auto___18051 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___18051)){
var image_18052 = temp__4425__auto___18051;
var temp__4425__auto___18053__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_18052.src,changed);
if(cljs.core.truth_(temp__4425__auto___18053__$1)){
var href_uri_18054 = temp__4425__auto___18053__$1;
image_18052.src = href_uri_18054.makeUnique().toString();
} else {
}
} else {
}

var G__18055 = seq__18047;
var G__18056 = chunk__18048;
var G__18057 = count__18049;
var G__18058 = (i__18050 + (1));
seq__18047 = G__18055;
chunk__18048 = G__18056;
count__18049 = G__18057;
i__18050 = G__18058;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__18047);
if(temp__4425__auto__){
var seq__18047__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18047__$1)){
var c__5717__auto__ = cljs.core.chunk_first.call(null,seq__18047__$1);
var G__18059 = cljs.core.chunk_rest.call(null,seq__18047__$1);
var G__18060 = c__5717__auto__;
var G__18061 = cljs.core.count.call(null,c__5717__auto__);
var G__18062 = (0);
seq__18047 = G__18059;
chunk__18048 = G__18060;
count__18049 = G__18061;
i__18050 = G__18062;
continue;
} else {
var s = cljs.core.first.call(null,seq__18047__$1);
var temp__4425__auto___18063__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___18063__$1)){
var image_18064 = temp__4425__auto___18063__$1;
var temp__4425__auto___18065__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_18064.src,changed);
if(cljs.core.truth_(temp__4425__auto___18065__$2)){
var href_uri_18066 = temp__4425__auto___18065__$2;
image_18064.src = href_uri_18066.makeUnique().toString();
} else {
}
} else {
}

var G__18067 = cljs.core.next.call(null,seq__18047__$1);
var G__18068 = null;
var G__18069 = (0);
var G__18070 = (0);
seq__18047 = G__18067;
chunk__18048 = G__18068;
count__18049 = G__18069;
i__18050 = G__18070;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__18073){
var map__18076 = p__18073;
var map__18076__$1 = ((((!((map__18076 == null)))?((((map__18076.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18076.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18076):map__18076);
var on_jsload = cljs.core.get.call(null,map__18076__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__18076,map__18076__$1,on_jsload){
return (function (p1__18071_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__18071_SHARP_,".js");
});})(map__18076,map__18076__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__18076,map__18076__$1,on_jsload){
return (function (p1__18072_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__18072_SHARP_).makeUnique());
});})(js_files,map__18076,map__18076__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__18076,map__18076__$1,on_jsload){
return (function() { 
var G__18078__delegate = function (_){
return on_jsload.call(null);
};
var G__18078 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__18079__i = 0, G__18079__a = new Array(arguments.length -  0);
while (G__18079__i < G__18079__a.length) {G__18079__a[G__18079__i] = arguments[G__18079__i + 0]; ++G__18079__i;}
  _ = new cljs.core.IndexedSeq(G__18079__a,0);
} 
return G__18078__delegate.call(this,_);};
G__18078.cljs$lang$maxFixedArity = 0;
G__18078.cljs$lang$applyTo = (function (arglist__18080){
var _ = cljs.core.seq(arglist__18080);
return G__18078__delegate(_);
});
G__18078.cljs$core$IFn$_invoke$arity$variadic = G__18078__delegate;
return G__18078;
})()
;})(js_files,map__18076,map__18076__$1,on_jsload))
,((function (js_files,map__18076,map__18076__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__18076,map__18076__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_href_QMARK_.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__18085_18089 = cljs.core.seq.call(null,things_to_log);
var chunk__18086_18090 = null;
var count__18087_18091 = (0);
var i__18088_18092 = (0);
while(true){
if((i__18088_18092 < count__18087_18091)){
var t_18093 = cljs.core._nth.call(null,chunk__18086_18090,i__18088_18092);
console.log(t_18093);

var G__18094 = seq__18085_18089;
var G__18095 = chunk__18086_18090;
var G__18096 = count__18087_18091;
var G__18097 = (i__18088_18092 + (1));
seq__18085_18089 = G__18094;
chunk__18086_18090 = G__18095;
count__18087_18091 = G__18096;
i__18088_18092 = G__18097;
continue;
} else {
var temp__4425__auto___18098 = cljs.core.seq.call(null,seq__18085_18089);
if(temp__4425__auto___18098){
var seq__18085_18099__$1 = temp__4425__auto___18098;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18085_18099__$1)){
var c__5717__auto___18100 = cljs.core.chunk_first.call(null,seq__18085_18099__$1);
var G__18101 = cljs.core.chunk_rest.call(null,seq__18085_18099__$1);
var G__18102 = c__5717__auto___18100;
var G__18103 = cljs.core.count.call(null,c__5717__auto___18100);
var G__18104 = (0);
seq__18085_18089 = G__18101;
chunk__18086_18090 = G__18102;
count__18087_18091 = G__18103;
i__18088_18092 = G__18104;
continue;
} else {
var t_18105 = cljs.core.first.call(null,seq__18085_18099__$1);
console.log(t_18105);

var G__18106 = cljs.core.next.call(null,seq__18085_18099__$1);
var G__18107 = null;
var G__18108 = (0);
var G__18109 = (0);
seq__18085_18089 = G__18106;
chunk__18086_18090 = G__18107;
count__18087_18091 = G__18108;
i__18088_18092 = G__18109;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(opts,changed){
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed);

var G__18111 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__18111,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__18111);

adzerk.boot_reload.reload.reload_css.call(null,G__18111);

adzerk.boot_reload.reload.reload_img.call(null,G__18111);

return G__18111;
});

//# sourceMappingURL=reload.js.map
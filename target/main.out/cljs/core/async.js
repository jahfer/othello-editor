// Compiled by ClojureScript 1.7.145 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async19429 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19429 = (function (fn_handler,f,meta19430){
this.fn_handler = fn_handler;
this.f = f;
this.meta19430 = meta19430;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19431,meta19430__$1){
var self__ = this;
var _19431__$1 = this;
return (new cljs.core.async.t_cljs$core$async19429(self__.fn_handler,self__.f,meta19430__$1));
});

cljs.core.async.t_cljs$core$async19429.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19431){
var self__ = this;
var _19431__$1 = this;
return self__.meta19430;
});

cljs.core.async.t_cljs$core$async19429.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19429.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19429.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async19429.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta19430","meta19430",-1895428948,null)], null);
});

cljs.core.async.t_cljs$core$async19429.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19429.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19429";

cljs.core.async.t_cljs$core$async19429.cljs$lang$ctorPrWriter = (function (this__5512__auto__,writer__5513__auto__,opt__5514__auto__){
return cljs.core._write.call(null,writer__5513__auto__,"cljs.core.async/t_cljs$core$async19429");
});

cljs.core.async.__GT_t_cljs$core$async19429 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async19429(fn_handler__$1,f__$1,meta19430){
return (new cljs.core.async.t_cljs$core$async19429(fn_handler__$1,f__$1,meta19430));
});

}

return (new cljs.core.async.t_cljs$core$async19429(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args19434 = [];
var len__5972__auto___19437 = arguments.length;
var i__5973__auto___19438 = (0);
while(true){
if((i__5973__auto___19438 < len__5972__auto___19437)){
args19434.push((arguments[i__5973__auto___19438]));

var G__19439 = (i__5973__auto___19438 + (1));
i__5973__auto___19438 = G__19439;
continue;
} else {
}
break;
}

var G__19436 = args19434.length;
switch (G__19436) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19434.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args19441 = [];
var len__5972__auto___19444 = arguments.length;
var i__5973__auto___19445 = (0);
while(true){
if((i__5973__auto___19445 < len__5972__auto___19444)){
args19441.push((arguments[i__5973__auto___19445]));

var G__19446 = (i__5973__auto___19445 + (1));
i__5973__auto___19445 = G__19446;
continue;
} else {
}
break;
}

var G__19443 = args19441.length;
switch (G__19443) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19441.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_19448 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_19448);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_19448,ret){
return (function (){
return fn1.call(null,val_19448);
});})(val_19448,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args19449 = [];
var len__5972__auto___19452 = arguments.length;
var i__5973__auto___19453 = (0);
while(true){
if((i__5973__auto___19453 < len__5972__auto___19452)){
args19449.push((arguments[i__5973__auto___19453]));

var G__19454 = (i__5973__auto___19453 + (1));
i__5973__auto___19453 = G__19454;
continue;
} else {
}
break;
}

var G__19451 = args19449.length;
switch (G__19451) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19449.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5817__auto___19456 = n;
var x_19457 = (0);
while(true){
if((x_19457 < n__5817__auto___19456)){
(a[x_19457] = (0));

var G__19458 = (x_19457 + (1));
x_19457 = G__19458;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__19459 = (i + (1));
i = G__19459;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async19463 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19463 = (function (alt_flag,flag,meta19464){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta19464 = meta19464;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19465,meta19464__$1){
var self__ = this;
var _19465__$1 = this;
return (new cljs.core.async.t_cljs$core$async19463(self__.alt_flag,self__.flag,meta19464__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async19463.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19465){
var self__ = this;
var _19465__$1 = this;
return self__.meta19464;
});})(flag))
;

cljs.core.async.t_cljs$core$async19463.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19463.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async19463.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19463.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta19464","meta19464",813048646,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async19463.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19463.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19463";

cljs.core.async.t_cljs$core$async19463.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5512__auto__,writer__5513__auto__,opt__5514__auto__){
return cljs.core._write.call(null,writer__5513__auto__,"cljs.core.async/t_cljs$core$async19463");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async19463 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async19463(alt_flag__$1,flag__$1,meta19464){
return (new cljs.core.async.t_cljs$core$async19463(alt_flag__$1,flag__$1,meta19464));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async19463(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async19469 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19469 = (function (alt_handler,flag,cb,meta19470){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta19470 = meta19470;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19471,meta19470__$1){
var self__ = this;
var _19471__$1 = this;
return (new cljs.core.async.t_cljs$core$async19469(self__.alt_handler,self__.flag,self__.cb,meta19470__$1));
});

cljs.core.async.t_cljs$core$async19469.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19471){
var self__ = this;
var _19471__$1 = this;
return self__.meta19470;
});

cljs.core.async.t_cljs$core$async19469.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19469.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async19469.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async19469.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta19470","meta19470",731152850,null)], null);
});

cljs.core.async.t_cljs$core$async19469.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19469.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19469";

cljs.core.async.t_cljs$core$async19469.cljs$lang$ctorPrWriter = (function (this__5512__auto__,writer__5513__auto__,opt__5514__auto__){
return cljs.core._write.call(null,writer__5513__auto__,"cljs.core.async/t_cljs$core$async19469");
});

cljs.core.async.__GT_t_cljs$core$async19469 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async19469(alt_handler__$1,flag__$1,cb__$1,meta19470){
return (new cljs.core.async.t_cljs$core$async19469(alt_handler__$1,flag__$1,cb__$1,meta19470));
});

}

return (new cljs.core.async.t_cljs$core$async19469(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19472_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19472_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19473_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19473_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4914__auto__ = wport;
if(cljs.core.truth_(or__4914__auto__)){
return or__4914__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19474 = (i + (1));
i = G__19474;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4914__auto__ = ret;
if(cljs.core.truth_(or__4914__auto__)){
return or__4914__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__4902__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4902__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4902__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5979__auto__ = [];
var len__5972__auto___19480 = arguments.length;
var i__5973__auto___19481 = (0);
while(true){
if((i__5973__auto___19481 < len__5972__auto___19480)){
args__5979__auto__.push((arguments[i__5973__auto___19481]));

var G__19482 = (i__5973__auto___19481 + (1));
i__5973__auto___19481 = G__19482;
continue;
} else {
}
break;
}

var argseq__5980__auto__ = ((((1) < args__5979__auto__.length))?(new cljs.core.IndexedSeq(args__5979__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5980__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__19477){
var map__19478 = p__19477;
var map__19478__$1 = ((((!((map__19478 == null)))?((((map__19478.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19478.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19478):map__19478);
var opts = map__19478__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq19475){
var G__19476 = cljs.core.first.call(null,seq19475);
var seq19475__$1 = cljs.core.next.call(null,seq19475);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19476,seq19475__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args19483 = [];
var len__5972__auto___19533 = arguments.length;
var i__5973__auto___19534 = (0);
while(true){
if((i__5973__auto___19534 < len__5972__auto___19533)){
args19483.push((arguments[i__5973__auto___19534]));

var G__19535 = (i__5973__auto___19534 + (1));
i__5973__auto___19534 = G__19535;
continue;
} else {
}
break;
}

var G__19485 = args19483.length;
switch (G__19485) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19483.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__7440__auto___19537 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7440__auto___19537){
return (function (){
var f__7441__auto__ = (function (){var switch__7375__auto__ = ((function (c__7440__auto___19537){
return (function (state_19509){
var state_val_19510 = (state_19509[(1)]);
if((state_val_19510 === (7))){
var inst_19505 = (state_19509[(2)]);
var state_19509__$1 = state_19509;
var statearr_19511_19538 = state_19509__$1;
(statearr_19511_19538[(2)] = inst_19505);

(statearr_19511_19538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19510 === (1))){
var state_19509__$1 = state_19509;
var statearr_19512_19539 = state_19509__$1;
(statearr_19512_19539[(2)] = null);

(statearr_19512_19539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19510 === (4))){
var inst_19488 = (state_19509[(7)]);
var inst_19488__$1 = (state_19509[(2)]);
var inst_19489 = (inst_19488__$1 == null);
var state_19509__$1 = (function (){var statearr_19513 = state_19509;
(statearr_19513[(7)] = inst_19488__$1);

return statearr_19513;
})();
if(cljs.core.truth_(inst_19489)){
var statearr_19514_19540 = state_19509__$1;
(statearr_19514_19540[(1)] = (5));

} else {
var statearr_19515_19541 = state_19509__$1;
(statearr_19515_19541[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19510 === (13))){
var state_19509__$1 = state_19509;
var statearr_19516_19542 = state_19509__$1;
(statearr_19516_19542[(2)] = null);

(statearr_19516_19542[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19510 === (6))){
var inst_19488 = (state_19509[(7)]);
var state_19509__$1 = state_19509;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19509__$1,(11),to,inst_19488);
} else {
if((state_val_19510 === (3))){
var inst_19507 = (state_19509[(2)]);
var state_19509__$1 = state_19509;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19509__$1,inst_19507);
} else {
if((state_val_19510 === (12))){
var state_19509__$1 = state_19509;
var statearr_19517_19543 = state_19509__$1;
(statearr_19517_19543[(2)] = null);

(statearr_19517_19543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19510 === (2))){
var state_19509__$1 = state_19509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19509__$1,(4),from);
} else {
if((state_val_19510 === (11))){
var inst_19498 = (state_19509[(2)]);
var state_19509__$1 = state_19509;
if(cljs.core.truth_(inst_19498)){
var statearr_19518_19544 = state_19509__$1;
(statearr_19518_19544[(1)] = (12));

} else {
var statearr_19519_19545 = state_19509__$1;
(statearr_19519_19545[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19510 === (9))){
var state_19509__$1 = state_19509;
var statearr_19520_19546 = state_19509__$1;
(statearr_19520_19546[(2)] = null);

(statearr_19520_19546[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19510 === (5))){
var state_19509__$1 = state_19509;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19521_19547 = state_19509__$1;
(statearr_19521_19547[(1)] = (8));

} else {
var statearr_19522_19548 = state_19509__$1;
(statearr_19522_19548[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19510 === (14))){
var inst_19503 = (state_19509[(2)]);
var state_19509__$1 = state_19509;
var statearr_19523_19549 = state_19509__$1;
(statearr_19523_19549[(2)] = inst_19503);

(statearr_19523_19549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19510 === (10))){
var inst_19495 = (state_19509[(2)]);
var state_19509__$1 = state_19509;
var statearr_19524_19550 = state_19509__$1;
(statearr_19524_19550[(2)] = inst_19495);

(statearr_19524_19550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19510 === (8))){
var inst_19492 = cljs.core.async.close_BANG_.call(null,to);
var state_19509__$1 = state_19509;
var statearr_19525_19551 = state_19509__$1;
(statearr_19525_19551[(2)] = inst_19492);

(statearr_19525_19551[(1)] = (10));


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
});})(c__7440__auto___19537))
;
return ((function (switch__7375__auto__,c__7440__auto___19537){
return (function() {
var cljs$core$async$state_machine__7376__auto__ = null;
var cljs$core$async$state_machine__7376__auto____0 = (function (){
var statearr_19529 = [null,null,null,null,null,null,null,null];
(statearr_19529[(0)] = cljs$core$async$state_machine__7376__auto__);

(statearr_19529[(1)] = (1));

return statearr_19529;
});
var cljs$core$async$state_machine__7376__auto____1 = (function (state_19509){
while(true){
var ret_value__7377__auto__ = (function (){try{while(true){
var result__7378__auto__ = switch__7375__auto__.call(null,state_19509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7378__auto__;
}
break;
}
}catch (e19530){if((e19530 instanceof Object)){
var ex__7379__auto__ = e19530;
var statearr_19531_19552 = state_19509;
(statearr_19531_19552[(5)] = ex__7379__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19530;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7377__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19553 = state_19509;
state_19509 = G__19553;
continue;
} else {
return ret_value__7377__auto__;
}
break;
}
});
cljs$core$async$state_machine__7376__auto__ = function(state_19509){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7376__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7376__auto____1.call(this,state_19509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7376__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7376__auto____0;
cljs$core$async$state_machine__7376__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7376__auto____1;
return cljs$core$async$state_machine__7376__auto__;
})()
;})(switch__7375__auto__,c__7440__auto___19537))
})();
var state__7442__auto__ = (function (){var statearr_19532 = f__7441__auto__.call(null);
(statearr_19532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7440__auto___19537);

return statearr_19532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7442__auto__);
});})(c__7440__auto___19537))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__19737){
var vec__19738 = p__19737;
var v = cljs.core.nth.call(null,vec__19738,(0),null);
var p = cljs.core.nth.call(null,vec__19738,(1),null);
var job = vec__19738;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7440__auto___19920 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7440__auto___19920,res,vec__19738,v,p,job,jobs,results){
return (function (){
var f__7441__auto__ = (function (){var switch__7375__auto__ = ((function (c__7440__auto___19920,res,vec__19738,v,p,job,jobs,results){
return (function (state_19743){
var state_val_19744 = (state_19743[(1)]);
if((state_val_19744 === (1))){
var state_19743__$1 = state_19743;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19743__$1,(2),res,v);
} else {
if((state_val_19744 === (2))){
var inst_19740 = (state_19743[(2)]);
var inst_19741 = cljs.core.async.close_BANG_.call(null,res);
var state_19743__$1 = (function (){var statearr_19745 = state_19743;
(statearr_19745[(7)] = inst_19740);

return statearr_19745;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19743__$1,inst_19741);
} else {
return null;
}
}
});})(c__7440__auto___19920,res,vec__19738,v,p,job,jobs,results))
;
return ((function (switch__7375__auto__,c__7440__auto___19920,res,vec__19738,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7376__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7376__auto____0 = (function (){
var statearr_19749 = [null,null,null,null,null,null,null,null];
(statearr_19749[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7376__auto__);

(statearr_19749[(1)] = (1));

return statearr_19749;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7376__auto____1 = (function (state_19743){
while(true){
var ret_value__7377__auto__ = (function (){try{while(true){
var result__7378__auto__ = switch__7375__auto__.call(null,state_19743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7378__auto__;
}
break;
}
}catch (e19750){if((e19750 instanceof Object)){
var ex__7379__auto__ = e19750;
var statearr_19751_19921 = state_19743;
(statearr_19751_19921[(5)] = ex__7379__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7377__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19922 = state_19743;
state_19743 = G__19922;
continue;
} else {
return ret_value__7377__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7376__auto__ = function(state_19743){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7376__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7376__auto____1.call(this,state_19743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7376__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7376__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7376__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7376__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7376__auto__;
})()
;})(switch__7375__auto__,c__7440__auto___19920,res,vec__19738,v,p,job,jobs,results))
})();
var state__7442__auto__ = (function (){var statearr_19752 = f__7441__auto__.call(null);
(statearr_19752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7440__auto___19920);

return statearr_19752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7442__auto__);
});})(c__7440__auto___19920,res,vec__19738,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__19753){
var vec__19754 = p__19753;
var v = cljs.core.nth.call(null,vec__19754,(0),null);
var p = cljs.core.nth.call(null,vec__19754,(1),null);
var job = vec__19754;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__5817__auto___19923 = n;
var __19924 = (0);
while(true){
if((__19924 < n__5817__auto___19923)){
var G__19755_19925 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__19755_19925) {
case "compute":
var c__7440__auto___19927 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19924,c__7440__auto___19927,G__19755_19925,n__5817__auto___19923,jobs,results,process,async){
return (function (){
var f__7441__auto__ = (function (){var switch__7375__auto__ = ((function (__19924,c__7440__auto___19927,G__19755_19925,n__5817__auto___19923,jobs,results,process,async){
return (function (state_19768){
var state_val_19769 = (state_19768[(1)]);
if((state_val_19769 === (1))){
var state_19768__$1 = state_19768;
var statearr_19770_19928 = state_19768__$1;
(statearr_19770_19928[(2)] = null);

(statearr_19770_19928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19769 === (2))){
var state_19768__$1 = state_19768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19768__$1,(4),jobs);
} else {
if((state_val_19769 === (3))){
var inst_19766 = (state_19768[(2)]);
var state_19768__$1 = state_19768;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19768__$1,inst_19766);
} else {
if((state_val_19769 === (4))){
var inst_19758 = (state_19768[(2)]);
var inst_19759 = process.call(null,inst_19758);
var state_19768__$1 = state_19768;
if(cljs.core.truth_(inst_19759)){
var statearr_19771_19929 = state_19768__$1;
(statearr_19771_19929[(1)] = (5));

} else {
var statearr_19772_19930 = state_19768__$1;
(statearr_19772_19930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19769 === (5))){
var state_19768__$1 = state_19768;
var statearr_19773_19931 = state_19768__$1;
(statearr_19773_19931[(2)] = null);

(statearr_19773_19931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19769 === (6))){
var state_19768__$1 = state_19768;
var statearr_19774_19932 = state_19768__$1;
(statearr_19774_19932[(2)] = null);

(statearr_19774_19932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19769 === (7))){
var inst_19764 = (state_19768[(2)]);
var state_19768__$1 = state_19768;
var statearr_19775_19933 = state_19768__$1;
(statearr_19775_19933[(2)] = inst_19764);

(statearr_19775_19933[(1)] = (3));


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
});})(__19924,c__7440__auto___19927,G__19755_19925,n__5817__auto___19923,jobs,results,process,async))
;
return ((function (__19924,switch__7375__auto__,c__7440__auto___19927,G__19755_19925,n__5817__auto___19923,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7376__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7376__auto____0 = (function (){
var statearr_19779 = [null,null,null,null,null,null,null];
(statearr_19779[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7376__auto__);

(statearr_19779[(1)] = (1));

return statearr_19779;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7376__auto____1 = (function (state_19768){
while(true){
var ret_value__7377__auto__ = (function (){try{while(true){
var result__7378__auto__ = switch__7375__auto__.call(null,state_19768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7378__auto__;
}
break;
}
}catch (e19780){if((e19780 instanceof Object)){
var ex__7379__auto__ = e19780;
var statearr_19781_19934 = state_19768;
(statearr_19781_19934[(5)] = ex__7379__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7377__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19935 = state_19768;
state_19768 = G__19935;
continue;
} else {
return ret_value__7377__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7376__auto__ = function(state_19768){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7376__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7376__auto____1.call(this,state_19768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7376__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7376__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7376__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7376__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7376__auto__;
})()
;})(__19924,switch__7375__auto__,c__7440__auto___19927,G__19755_19925,n__5817__auto___19923,jobs,results,process,async))
})();
var state__7442__auto__ = (function (){var statearr_19782 = f__7441__auto__.call(null);
(statearr_19782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7440__auto___19927);

return statearr_19782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7442__auto__);
});})(__19924,c__7440__auto___19927,G__19755_19925,n__5817__auto___19923,jobs,results,process,async))
);


break;
case "async":
var c__7440__auto___19936 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19924,c__7440__auto___19936,G__19755_19925,n__5817__auto___19923,jobs,results,process,async){
return (function (){
var f__7441__auto__ = (function (){var switch__7375__auto__ = ((function (__19924,c__7440__auto___19936,G__19755_19925,n__5817__auto___19923,jobs,results,process,async){
return (function (state_19795){
var state_val_19796 = (state_19795[(1)]);
if((state_val_19796 === (1))){
var state_19795__$1 = state_19795;
var statearr_19797_19937 = state_19795__$1;
(statearr_19797_19937[(2)] = null);

(statearr_19797_19937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19796 === (2))){
var state_19795__$1 = state_19795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19795__$1,(4),jobs);
} else {
if((state_val_19796 === (3))){
var inst_19793 = (state_19795[(2)]);
var state_19795__$1 = state_19795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19795__$1,inst_19793);
} else {
if((state_val_19796 === (4))){
var inst_19785 = (state_19795[(2)]);
var inst_19786 = async.call(null,inst_19785);
var state_19795__$1 = state_19795;
if(cljs.core.truth_(inst_19786)){
var statearr_19798_19938 = state_19795__$1;
(statearr_19798_19938[(1)] = (5));

} else {
var statearr_19799_19939 = state_19795__$1;
(statearr_19799_19939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19796 === (5))){
var state_19795__$1 = state_19795;
var statearr_19800_19940 = state_19795__$1;
(statearr_19800_19940[(2)] = null);

(statearr_19800_19940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19796 === (6))){
var state_19795__$1 = state_19795;
var statearr_19801_19941 = state_19795__$1;
(statearr_19801_19941[(2)] = null);

(statearr_19801_19941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19796 === (7))){
var inst_19791 = (state_19795[(2)]);
var state_19795__$1 = state_19795;
var statearr_19802_19942 = state_19795__$1;
(statearr_19802_19942[(2)] = inst_19791);

(statearr_19802_19942[(1)] = (3));


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
});})(__19924,c__7440__auto___19936,G__19755_19925,n__5817__auto___19923,jobs,results,process,async))
;
return ((function (__19924,switch__7375__auto__,c__7440__auto___19936,G__19755_19925,n__5817__auto___19923,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7376__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7376__auto____0 = (function (){
var statearr_19806 = [null,null,null,null,null,null,null];
(statearr_19806[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7376__auto__);

(statearr_19806[(1)] = (1));

return statearr_19806;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7376__auto____1 = (function (state_19795){
while(true){
var ret_value__7377__auto__ = (function (){try{while(true){
var result__7378__auto__ = switch__7375__auto__.call(null,state_19795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7378__auto__;
}
break;
}
}catch (e19807){if((e19807 instanceof Object)){
var ex__7379__auto__ = e19807;
var statearr_19808_19943 = state_19795;
(statearr_19808_19943[(5)] = ex__7379__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19807;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7377__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19944 = state_19795;
state_19795 = G__19944;
continue;
} else {
return ret_value__7377__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7376__auto__ = function(state_19795){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7376__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7376__auto____1.call(this,state_19795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7376__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7376__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7376__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7376__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7376__auto__;
})()
;})(__19924,switch__7375__auto__,c__7440__auto___19936,G__19755_19925,n__5817__auto___19923,jobs,results,process,async))
})();
var state__7442__auto__ = (function (){var statearr_19809 = f__7441__auto__.call(null);
(statearr_19809[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7440__auto___19936);

return statearr_19809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7442__auto__);
});})(__19924,c__7440__auto___19936,G__19755_19925,n__5817__auto___19923,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__19945 = (__19924 + (1));
__19924 = G__19945;
continue;
} else {
}
break;
}

var c__7440__auto___19946 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7440__auto___19946,jobs,results,process,async){
return (function (){
var f__7441__auto__ = (function (){var switch__7375__auto__ = ((function (c__7440__auto___19946,jobs,results,process,async){
return (function (state_19831){
var state_val_19832 = (state_19831[(1)]);
if((state_val_19832 === (1))){
var state_19831__$1 = state_19831;
var statearr_19833_19947 = state_19831__$1;
(statearr_19833_19947[(2)] = null);

(statearr_19833_19947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19832 === (2))){
var state_19831__$1 = state_19831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19831__$1,(4),from);
} else {
if((state_val_19832 === (3))){
var inst_19829 = (state_19831[(2)]);
var state_19831__$1 = state_19831;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19831__$1,inst_19829);
} else {
if((state_val_19832 === (4))){
var inst_19812 = (state_19831[(7)]);
var inst_19812__$1 = (state_19831[(2)]);
var inst_19813 = (inst_19812__$1 == null);
var state_19831__$1 = (function (){var statearr_19834 = state_19831;
(statearr_19834[(7)] = inst_19812__$1);

return statearr_19834;
})();
if(cljs.core.truth_(inst_19813)){
var statearr_19835_19948 = state_19831__$1;
(statearr_19835_19948[(1)] = (5));

} else {
var statearr_19836_19949 = state_19831__$1;
(statearr_19836_19949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19832 === (5))){
var inst_19815 = cljs.core.async.close_BANG_.call(null,jobs);
var state_19831__$1 = state_19831;
var statearr_19837_19950 = state_19831__$1;
(statearr_19837_19950[(2)] = inst_19815);

(statearr_19837_19950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19832 === (6))){
var inst_19812 = (state_19831[(7)]);
var inst_19817 = (state_19831[(8)]);
var inst_19817__$1 = cljs.core.async.chan.call(null,(1));
var inst_19818 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19819 = [inst_19812,inst_19817__$1];
var inst_19820 = (new cljs.core.PersistentVector(null,2,(5),inst_19818,inst_19819,null));
var state_19831__$1 = (function (){var statearr_19838 = state_19831;
(statearr_19838[(8)] = inst_19817__$1);

return statearr_19838;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19831__$1,(8),jobs,inst_19820);
} else {
if((state_val_19832 === (7))){
var inst_19827 = (state_19831[(2)]);
var state_19831__$1 = state_19831;
var statearr_19839_19951 = state_19831__$1;
(statearr_19839_19951[(2)] = inst_19827);

(statearr_19839_19951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19832 === (8))){
var inst_19817 = (state_19831[(8)]);
var inst_19822 = (state_19831[(2)]);
var state_19831__$1 = (function (){var statearr_19840 = state_19831;
(statearr_19840[(9)] = inst_19822);

return statearr_19840;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19831__$1,(9),results,inst_19817);
} else {
if((state_val_19832 === (9))){
var inst_19824 = (state_19831[(2)]);
var state_19831__$1 = (function (){var statearr_19841 = state_19831;
(statearr_19841[(10)] = inst_19824);

return statearr_19841;
})();
var statearr_19842_19952 = state_19831__$1;
(statearr_19842_19952[(2)] = null);

(statearr_19842_19952[(1)] = (2));


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
});})(c__7440__auto___19946,jobs,results,process,async))
;
return ((function (switch__7375__auto__,c__7440__auto___19946,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7376__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7376__auto____0 = (function (){
var statearr_19846 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19846[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7376__auto__);

(statearr_19846[(1)] = (1));

return statearr_19846;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7376__auto____1 = (function (state_19831){
while(true){
var ret_value__7377__auto__ = (function (){try{while(true){
var result__7378__auto__ = switch__7375__auto__.call(null,state_19831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7378__auto__;
}
break;
}
}catch (e19847){if((e19847 instanceof Object)){
var ex__7379__auto__ = e19847;
var statearr_19848_19953 = state_19831;
(statearr_19848_19953[(5)] = ex__7379__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7377__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19954 = state_19831;
state_19831 = G__19954;
continue;
} else {
return ret_value__7377__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7376__auto__ = function(state_19831){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7376__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7376__auto____1.call(this,state_19831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7376__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7376__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7376__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7376__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7376__auto__;
})()
;})(switch__7375__auto__,c__7440__auto___19946,jobs,results,process,async))
})();
var state__7442__auto__ = (function (){var statearr_19849 = f__7441__auto__.call(null);
(statearr_19849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7440__auto___19946);

return statearr_19849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7442__auto__);
});})(c__7440__auto___19946,jobs,results,process,async))
);


var c__7440__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7440__auto__,jobs,results,process,async){
return (function (){
var f__7441__auto__ = (function (){var switch__7375__auto__ = ((function (c__7440__auto__,jobs,results,process,async){
return (function (state_19887){
var state_val_19888 = (state_19887[(1)]);
if((state_val_19888 === (7))){
var inst_19883 = (state_19887[(2)]);
var state_19887__$1 = state_19887;
var statearr_19889_19955 = state_19887__$1;
(statearr_19889_19955[(2)] = inst_19883);

(statearr_19889_19955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19888 === (20))){
var state_19887__$1 = state_19887;
var statearr_19890_19956 = state_19887__$1;
(statearr_19890_19956[(2)] = null);

(statearr_19890_19956[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19888 === (1))){
var state_19887__$1 = state_19887;
var statearr_19891_19957 = state_19887__$1;
(statearr_19891_19957[(2)] = null);

(statearr_19891_19957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19888 === (4))){
var inst_19852 = (state_19887[(7)]);
var inst_19852__$1 = (state_19887[(2)]);
var inst_19853 = (inst_19852__$1 == null);
var state_19887__$1 = (function (){var statearr_19892 = state_19887;
(statearr_19892[(7)] = inst_19852__$1);

return statearr_19892;
})();
if(cljs.core.truth_(inst_19853)){
var statearr_19893_19958 = state_19887__$1;
(statearr_19893_19958[(1)] = (5));

} else {
var statearr_19894_19959 = state_19887__$1;
(statearr_19894_19959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19888 === (15))){
var inst_19865 = (state_19887[(8)]);
var state_19887__$1 = state_19887;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19887__$1,(18),to,inst_19865);
} else {
if((state_val_19888 === (21))){
var inst_19878 = (state_19887[(2)]);
var state_19887__$1 = state_19887;
var statearr_19895_19960 = state_19887__$1;
(statearr_19895_19960[(2)] = inst_19878);

(statearr_19895_19960[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19888 === (13))){
var inst_19880 = (state_19887[(2)]);
var state_19887__$1 = (function (){var statearr_19896 = state_19887;
(statearr_19896[(9)] = inst_19880);

return statearr_19896;
})();
var statearr_19897_19961 = state_19887__$1;
(statearr_19897_19961[(2)] = null);

(statearr_19897_19961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19888 === (6))){
var inst_19852 = (state_19887[(7)]);
var state_19887__$1 = state_19887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19887__$1,(11),inst_19852);
} else {
if((state_val_19888 === (17))){
var inst_19873 = (state_19887[(2)]);
var state_19887__$1 = state_19887;
if(cljs.core.truth_(inst_19873)){
var statearr_19898_19962 = state_19887__$1;
(statearr_19898_19962[(1)] = (19));

} else {
var statearr_19899_19963 = state_19887__$1;
(statearr_19899_19963[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19888 === (3))){
var inst_19885 = (state_19887[(2)]);
var state_19887__$1 = state_19887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19887__$1,inst_19885);
} else {
if((state_val_19888 === (12))){
var inst_19862 = (state_19887[(10)]);
var state_19887__$1 = state_19887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19887__$1,(14),inst_19862);
} else {
if((state_val_19888 === (2))){
var state_19887__$1 = state_19887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19887__$1,(4),results);
} else {
if((state_val_19888 === (19))){
var state_19887__$1 = state_19887;
var statearr_19900_19964 = state_19887__$1;
(statearr_19900_19964[(2)] = null);

(statearr_19900_19964[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19888 === (11))){
var inst_19862 = (state_19887[(2)]);
var state_19887__$1 = (function (){var statearr_19901 = state_19887;
(statearr_19901[(10)] = inst_19862);

return statearr_19901;
})();
var statearr_19902_19965 = state_19887__$1;
(statearr_19902_19965[(2)] = null);

(statearr_19902_19965[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19888 === (9))){
var state_19887__$1 = state_19887;
var statearr_19903_19966 = state_19887__$1;
(statearr_19903_19966[(2)] = null);

(statearr_19903_19966[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19888 === (5))){
var state_19887__$1 = state_19887;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19904_19967 = state_19887__$1;
(statearr_19904_19967[(1)] = (8));

} else {
var statearr_19905_19968 = state_19887__$1;
(statearr_19905_19968[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19888 === (14))){
var inst_19867 = (state_19887[(11)]);
var inst_19865 = (state_19887[(8)]);
var inst_19865__$1 = (state_19887[(2)]);
var inst_19866 = (inst_19865__$1 == null);
var inst_19867__$1 = cljs.core.not.call(null,inst_19866);
var state_19887__$1 = (function (){var statearr_19906 = state_19887;
(statearr_19906[(11)] = inst_19867__$1);

(statearr_19906[(8)] = inst_19865__$1);

return statearr_19906;
})();
if(inst_19867__$1){
var statearr_19907_19969 = state_19887__$1;
(statearr_19907_19969[(1)] = (15));

} else {
var statearr_19908_19970 = state_19887__$1;
(statearr_19908_19970[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19888 === (16))){
var inst_19867 = (state_19887[(11)]);
var state_19887__$1 = state_19887;
var statearr_19909_19971 = state_19887__$1;
(statearr_19909_19971[(2)] = inst_19867);

(statearr_19909_19971[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19888 === (10))){
var inst_19859 = (state_19887[(2)]);
var state_19887__$1 = state_19887;
var statearr_19910_19972 = state_19887__$1;
(statearr_19910_19972[(2)] = inst_19859);

(statearr_19910_19972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19888 === (18))){
var inst_19870 = (state_19887[(2)]);
var state_19887__$1 = state_19887;
var statearr_19911_19973 = state_19887__$1;
(statearr_19911_19973[(2)] = inst_19870);

(statearr_19911_19973[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19888 === (8))){
var inst_19856 = cljs.core.async.close_BANG_.call(null,to);
var state_19887__$1 = state_19887;
var statearr_19912_19974 = state_19887__$1;
(statearr_19912_19974[(2)] = inst_19856);

(statearr_19912_19974[(1)] = (10));


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
});})(c__7440__auto__,jobs,results,process,async))
;
return ((function (switch__7375__auto__,c__7440__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7376__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7376__auto____0 = (function (){
var statearr_19916 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19916[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7376__auto__);

(statearr_19916[(1)] = (1));

return statearr_19916;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7376__auto____1 = (function (state_19887){
while(true){
var ret_value__7377__auto__ = (function (){try{while(true){
var result__7378__auto__ = switch__7375__auto__.call(null,state_19887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7378__auto__;
}
break;
}
}catch (e19917){if((e19917 instanceof Object)){
var ex__7379__auto__ = e19917;
var statearr_19918_19975 = state_19887;
(statearr_19918_19975[(5)] = ex__7379__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7377__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19976 = state_19887;
state_19887 = G__19976;
continue;
} else {
return ret_value__7377__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7376__auto__ = function(state_19887){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7376__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7376__auto____1.call(this,state_19887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7376__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7376__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7376__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7376__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7376__auto__;
})()
;})(switch__7375__auto__,c__7440__auto__,jobs,results,process,async))
})();
var state__7442__auto__ = (function (){var statearr_19919 = f__7441__auto__.call(null);
(statearr_19919[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7440__auto__);

return statearr_19919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7442__auto__);
});})(c__7440__auto__,jobs,results,process,async))
);

return c__7440__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args19977 = [];
var len__5972__auto___19980 = arguments.length;
var i__5973__auto___19981 = (0);
while(true){
if((i__5973__auto___19981 < len__5972__auto___19980)){
args19977.push((arguments[i__5973__auto___19981]));

var G__19982 = (i__5973__auto___19981 + (1));
i__5973__auto___19981 = G__19982;
continue;
} else {
}
break;
}

var G__19979 = args19977.length;
switch (G__19979) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19977.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args19984 = [];
var len__5972__auto___19987 = arguments.length;
var i__5973__auto___19988 = (0);
while(true){
if((i__5973__auto___19988 < len__5972__auto___19987)){
args19984.push((arguments[i__5973__auto___19988]));

var G__19989 = (i__5973__auto___19988 + (1));
i__5973__auto___19988 = G__19989;
continue;
} else {
}
break;
}

var G__19986 = args19984.length;
switch (G__19986) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19984.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args19991 = [];
var len__5972__auto___20044 = arguments.length;
var i__5973__auto___20045 = (0);
while(true){
if((i__5973__auto___20045 < len__5972__auto___20044)){
args19991.push((arguments[i__5973__auto___20045]));

var G__20046 = (i__5973__auto___20045 + (1));
i__5973__auto___20045 = G__20046;
continue;
} else {
}
break;
}

var G__19993 = args19991.length;
switch (G__19993) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19991.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__7440__auto___20048 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7440__auto___20048,tc,fc){
return (function (){
var f__7441__auto__ = (function (){var switch__7375__auto__ = ((function (c__7440__auto___20048,tc,fc){
return (function (state_20019){
var state_val_20020 = (state_20019[(1)]);
if((state_val_20020 === (7))){
var inst_20015 = (state_20019[(2)]);
var state_20019__$1 = state_20019;
var statearr_20021_20049 = state_20019__$1;
(statearr_20021_20049[(2)] = inst_20015);

(statearr_20021_20049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20020 === (1))){
var state_20019__$1 = state_20019;
var statearr_20022_20050 = state_20019__$1;
(statearr_20022_20050[(2)] = null);

(statearr_20022_20050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20020 === (4))){
var inst_19996 = (state_20019[(7)]);
var inst_19996__$1 = (state_20019[(2)]);
var inst_19997 = (inst_19996__$1 == null);
var state_20019__$1 = (function (){var statearr_20023 = state_20019;
(statearr_20023[(7)] = inst_19996__$1);

return statearr_20023;
})();
if(cljs.core.truth_(inst_19997)){
var statearr_20024_20051 = state_20019__$1;
(statearr_20024_20051[(1)] = (5));

} else {
var statearr_20025_20052 = state_20019__$1;
(statearr_20025_20052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20020 === (13))){
var state_20019__$1 = state_20019;
var statearr_20026_20053 = state_20019__$1;
(statearr_20026_20053[(2)] = null);

(statearr_20026_20053[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20020 === (6))){
var inst_19996 = (state_20019[(7)]);
var inst_20002 = p.call(null,inst_19996);
var state_20019__$1 = state_20019;
if(cljs.core.truth_(inst_20002)){
var statearr_20027_20054 = state_20019__$1;
(statearr_20027_20054[(1)] = (9));

} else {
var statearr_20028_20055 = state_20019__$1;
(statearr_20028_20055[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20020 === (3))){
var inst_20017 = (state_20019[(2)]);
var state_20019__$1 = state_20019;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20019__$1,inst_20017);
} else {
if((state_val_20020 === (12))){
var state_20019__$1 = state_20019;
var statearr_20029_20056 = state_20019__$1;
(statearr_20029_20056[(2)] = null);

(statearr_20029_20056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20020 === (2))){
var state_20019__$1 = state_20019;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20019__$1,(4),ch);
} else {
if((state_val_20020 === (11))){
var inst_19996 = (state_20019[(7)]);
var inst_20006 = (state_20019[(2)]);
var state_20019__$1 = state_20019;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20019__$1,(8),inst_20006,inst_19996);
} else {
if((state_val_20020 === (9))){
var state_20019__$1 = state_20019;
var statearr_20030_20057 = state_20019__$1;
(statearr_20030_20057[(2)] = tc);

(statearr_20030_20057[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20020 === (5))){
var inst_19999 = cljs.core.async.close_BANG_.call(null,tc);
var inst_20000 = cljs.core.async.close_BANG_.call(null,fc);
var state_20019__$1 = (function (){var statearr_20031 = state_20019;
(statearr_20031[(8)] = inst_19999);

return statearr_20031;
})();
var statearr_20032_20058 = state_20019__$1;
(statearr_20032_20058[(2)] = inst_20000);

(statearr_20032_20058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20020 === (14))){
var inst_20013 = (state_20019[(2)]);
var state_20019__$1 = state_20019;
var statearr_20033_20059 = state_20019__$1;
(statearr_20033_20059[(2)] = inst_20013);

(statearr_20033_20059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20020 === (10))){
var state_20019__$1 = state_20019;
var statearr_20034_20060 = state_20019__$1;
(statearr_20034_20060[(2)] = fc);

(statearr_20034_20060[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20020 === (8))){
var inst_20008 = (state_20019[(2)]);
var state_20019__$1 = state_20019;
if(cljs.core.truth_(inst_20008)){
var statearr_20035_20061 = state_20019__$1;
(statearr_20035_20061[(1)] = (12));

} else {
var statearr_20036_20062 = state_20019__$1;
(statearr_20036_20062[(1)] = (13));

}

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
});})(c__7440__auto___20048,tc,fc))
;
return ((function (switch__7375__auto__,c__7440__auto___20048,tc,fc){
return (function() {
var cljs$core$async$state_machine__7376__auto__ = null;
var cljs$core$async$state_machine__7376__auto____0 = (function (){
var statearr_20040 = [null,null,null,null,null,null,null,null,null];
(statearr_20040[(0)] = cljs$core$async$state_machine__7376__auto__);

(statearr_20040[(1)] = (1));

return statearr_20040;
});
var cljs$core$async$state_machine__7376__auto____1 = (function (state_20019){
while(true){
var ret_value__7377__auto__ = (function (){try{while(true){
var result__7378__auto__ = switch__7375__auto__.call(null,state_20019);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7378__auto__;
}
break;
}
}catch (e20041){if((e20041 instanceof Object)){
var ex__7379__auto__ = e20041;
var statearr_20042_20063 = state_20019;
(statearr_20042_20063[(5)] = ex__7379__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20019);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7377__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20064 = state_20019;
state_20019 = G__20064;
continue;
} else {
return ret_value__7377__auto__;
}
break;
}
});
cljs$core$async$state_machine__7376__auto__ = function(state_20019){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7376__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7376__auto____1.call(this,state_20019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7376__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7376__auto____0;
cljs$core$async$state_machine__7376__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7376__auto____1;
return cljs$core$async$state_machine__7376__auto__;
})()
;})(switch__7375__auto__,c__7440__auto___20048,tc,fc))
})();
var state__7442__auto__ = (function (){var statearr_20043 = f__7441__auto__.call(null);
(statearr_20043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7440__auto___20048);

return statearr_20043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7442__auto__);
});})(c__7440__auto___20048,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__7440__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7440__auto__){
return (function (){
var f__7441__auto__ = (function (){var switch__7375__auto__ = ((function (c__7440__auto__){
return (function (state_20111){
var state_val_20112 = (state_20111[(1)]);
if((state_val_20112 === (1))){
var inst_20097 = init;
var state_20111__$1 = (function (){var statearr_20113 = state_20111;
(statearr_20113[(7)] = inst_20097);

return statearr_20113;
})();
var statearr_20114_20129 = state_20111__$1;
(statearr_20114_20129[(2)] = null);

(statearr_20114_20129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20112 === (2))){
var state_20111__$1 = state_20111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20111__$1,(4),ch);
} else {
if((state_val_20112 === (3))){
var inst_20109 = (state_20111[(2)]);
var state_20111__$1 = state_20111;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20111__$1,inst_20109);
} else {
if((state_val_20112 === (4))){
var inst_20100 = (state_20111[(8)]);
var inst_20100__$1 = (state_20111[(2)]);
var inst_20101 = (inst_20100__$1 == null);
var state_20111__$1 = (function (){var statearr_20115 = state_20111;
(statearr_20115[(8)] = inst_20100__$1);

return statearr_20115;
})();
if(cljs.core.truth_(inst_20101)){
var statearr_20116_20130 = state_20111__$1;
(statearr_20116_20130[(1)] = (5));

} else {
var statearr_20117_20131 = state_20111__$1;
(statearr_20117_20131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20112 === (5))){
var inst_20097 = (state_20111[(7)]);
var state_20111__$1 = state_20111;
var statearr_20118_20132 = state_20111__$1;
(statearr_20118_20132[(2)] = inst_20097);

(statearr_20118_20132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20112 === (6))){
var inst_20097 = (state_20111[(7)]);
var inst_20100 = (state_20111[(8)]);
var inst_20104 = f.call(null,inst_20097,inst_20100);
var inst_20097__$1 = inst_20104;
var state_20111__$1 = (function (){var statearr_20119 = state_20111;
(statearr_20119[(7)] = inst_20097__$1);

return statearr_20119;
})();
var statearr_20120_20133 = state_20111__$1;
(statearr_20120_20133[(2)] = null);

(statearr_20120_20133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20112 === (7))){
var inst_20107 = (state_20111[(2)]);
var state_20111__$1 = state_20111;
var statearr_20121_20134 = state_20111__$1;
(statearr_20121_20134[(2)] = inst_20107);

(statearr_20121_20134[(1)] = (3));


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
});})(c__7440__auto__))
;
return ((function (switch__7375__auto__,c__7440__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__7376__auto__ = null;
var cljs$core$async$reduce_$_state_machine__7376__auto____0 = (function (){
var statearr_20125 = [null,null,null,null,null,null,null,null,null];
(statearr_20125[(0)] = cljs$core$async$reduce_$_state_machine__7376__auto__);

(statearr_20125[(1)] = (1));

return statearr_20125;
});
var cljs$core$async$reduce_$_state_machine__7376__auto____1 = (function (state_20111){
while(true){
var ret_value__7377__auto__ = (function (){try{while(true){
var result__7378__auto__ = switch__7375__auto__.call(null,state_20111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7378__auto__;
}
break;
}
}catch (e20126){if((e20126 instanceof Object)){
var ex__7379__auto__ = e20126;
var statearr_20127_20135 = state_20111;
(statearr_20127_20135[(5)] = ex__7379__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7377__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20136 = state_20111;
state_20111 = G__20136;
continue;
} else {
return ret_value__7377__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7376__auto__ = function(state_20111){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7376__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7376__auto____1.call(this,state_20111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__7376__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7376__auto____0;
cljs$core$async$reduce_$_state_machine__7376__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7376__auto____1;
return cljs$core$async$reduce_$_state_machine__7376__auto__;
})()
;})(switch__7375__auto__,c__7440__auto__))
})();
var state__7442__auto__ = (function (){var statearr_20128 = f__7441__auto__.call(null);
(statearr_20128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7440__auto__);

return statearr_20128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7442__auto__);
});})(c__7440__auto__))
);

return c__7440__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args20137 = [];
var len__5972__auto___20189 = arguments.length;
var i__5973__auto___20190 = (0);
while(true){
if((i__5973__auto___20190 < len__5972__auto___20189)){
args20137.push((arguments[i__5973__auto___20190]));

var G__20191 = (i__5973__auto___20190 + (1));
i__5973__auto___20190 = G__20191;
continue;
} else {
}
break;
}

var G__20139 = args20137.length;
switch (G__20139) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20137.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__7440__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7440__auto__){
return (function (){
var f__7441__auto__ = (function (){var switch__7375__auto__ = ((function (c__7440__auto__){
return (function (state_20164){
var state_val_20165 = (state_20164[(1)]);
if((state_val_20165 === (7))){
var inst_20146 = (state_20164[(2)]);
var state_20164__$1 = state_20164;
var statearr_20166_20193 = state_20164__$1;
(statearr_20166_20193[(2)] = inst_20146);

(statearr_20166_20193[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20165 === (1))){
var inst_20140 = cljs.core.seq.call(null,coll);
var inst_20141 = inst_20140;
var state_20164__$1 = (function (){var statearr_20167 = state_20164;
(statearr_20167[(7)] = inst_20141);

return statearr_20167;
})();
var statearr_20168_20194 = state_20164__$1;
(statearr_20168_20194[(2)] = null);

(statearr_20168_20194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20165 === (4))){
var inst_20141 = (state_20164[(7)]);
var inst_20144 = cljs.core.first.call(null,inst_20141);
var state_20164__$1 = state_20164;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20164__$1,(7),ch,inst_20144);
} else {
if((state_val_20165 === (13))){
var inst_20158 = (state_20164[(2)]);
var state_20164__$1 = state_20164;
var statearr_20169_20195 = state_20164__$1;
(statearr_20169_20195[(2)] = inst_20158);

(statearr_20169_20195[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20165 === (6))){
var inst_20149 = (state_20164[(2)]);
var state_20164__$1 = state_20164;
if(cljs.core.truth_(inst_20149)){
var statearr_20170_20196 = state_20164__$1;
(statearr_20170_20196[(1)] = (8));

} else {
var statearr_20171_20197 = state_20164__$1;
(statearr_20171_20197[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20165 === (3))){
var inst_20162 = (state_20164[(2)]);
var state_20164__$1 = state_20164;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20164__$1,inst_20162);
} else {
if((state_val_20165 === (12))){
var state_20164__$1 = state_20164;
var statearr_20172_20198 = state_20164__$1;
(statearr_20172_20198[(2)] = null);

(statearr_20172_20198[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20165 === (2))){
var inst_20141 = (state_20164[(7)]);
var state_20164__$1 = state_20164;
if(cljs.core.truth_(inst_20141)){
var statearr_20173_20199 = state_20164__$1;
(statearr_20173_20199[(1)] = (4));

} else {
var statearr_20174_20200 = state_20164__$1;
(statearr_20174_20200[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20165 === (11))){
var inst_20155 = cljs.core.async.close_BANG_.call(null,ch);
var state_20164__$1 = state_20164;
var statearr_20175_20201 = state_20164__$1;
(statearr_20175_20201[(2)] = inst_20155);

(statearr_20175_20201[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20165 === (9))){
var state_20164__$1 = state_20164;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20176_20202 = state_20164__$1;
(statearr_20176_20202[(1)] = (11));

} else {
var statearr_20177_20203 = state_20164__$1;
(statearr_20177_20203[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20165 === (5))){
var inst_20141 = (state_20164[(7)]);
var state_20164__$1 = state_20164;
var statearr_20178_20204 = state_20164__$1;
(statearr_20178_20204[(2)] = inst_20141);

(statearr_20178_20204[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20165 === (10))){
var inst_20160 = (state_20164[(2)]);
var state_20164__$1 = state_20164;
var statearr_20179_20205 = state_20164__$1;
(statearr_20179_20205[(2)] = inst_20160);

(statearr_20179_20205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20165 === (8))){
var inst_20141 = (state_20164[(7)]);
var inst_20151 = cljs.core.next.call(null,inst_20141);
var inst_20141__$1 = inst_20151;
var state_20164__$1 = (function (){var statearr_20180 = state_20164;
(statearr_20180[(7)] = inst_20141__$1);

return statearr_20180;
})();
var statearr_20181_20206 = state_20164__$1;
(statearr_20181_20206[(2)] = null);

(statearr_20181_20206[(1)] = (2));


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
});})(c__7440__auto__))
;
return ((function (switch__7375__auto__,c__7440__auto__){
return (function() {
var cljs$core$async$state_machine__7376__auto__ = null;
var cljs$core$async$state_machine__7376__auto____0 = (function (){
var statearr_20185 = [null,null,null,null,null,null,null,null];
(statearr_20185[(0)] = cljs$core$async$state_machine__7376__auto__);

(statearr_20185[(1)] = (1));

return statearr_20185;
});
var cljs$core$async$state_machine__7376__auto____1 = (function (state_20164){
while(true){
var ret_value__7377__auto__ = (function (){try{while(true){
var result__7378__auto__ = switch__7375__auto__.call(null,state_20164);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7378__auto__;
}
break;
}
}catch (e20186){if((e20186 instanceof Object)){
var ex__7379__auto__ = e20186;
var statearr_20187_20207 = state_20164;
(statearr_20187_20207[(5)] = ex__7379__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7377__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20208 = state_20164;
state_20164 = G__20208;
continue;
} else {
return ret_value__7377__auto__;
}
break;
}
});
cljs$core$async$state_machine__7376__auto__ = function(state_20164){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7376__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7376__auto____1.call(this,state_20164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7376__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7376__auto____0;
cljs$core$async$state_machine__7376__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7376__auto____1;
return cljs$core$async$state_machine__7376__auto__;
})()
;})(switch__7375__auto__,c__7440__auto__))
})();
var state__7442__auto__ = (function (){var statearr_20188 = f__7441__auto__.call(null);
(statearr_20188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7440__auto__);

return statearr_20188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7442__auto__);
});})(c__7440__auto__))
);

return c__7440__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__5569__auto__ = (((_ == null))?null:_);
var m__5570__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5569__auto__)]);
if(!((m__5570__auto__ == null))){
return m__5570__auto__.call(null,_);
} else {
var m__5570__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5570__auto____$1 == null))){
return m__5570__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__5569__auto__ = (((m == null))?null:m);
var m__5570__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5569__auto__)]);
if(!((m__5570__auto__ == null))){
return m__5570__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5570__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5570__auto____$1 == null))){
return m__5570__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5569__auto__ = (((m == null))?null:m);
var m__5570__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5569__auto__)]);
if(!((m__5570__auto__ == null))){
return m__5570__auto__.call(null,m,ch);
} else {
var m__5570__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5570__auto____$1 == null))){
return m__5570__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5569__auto__ = (((m == null))?null:m);
var m__5570__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5569__auto__)]);
if(!((m__5570__auto__ == null))){
return m__5570__auto__.call(null,m);
} else {
var m__5570__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5570__auto____$1 == null))){
return m__5570__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async20430 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20430 = (function (mult,ch,cs,meta20431){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta20431 = meta20431;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20430.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20432,meta20431__$1){
var self__ = this;
var _20432__$1 = this;
return (new cljs.core.async.t_cljs$core$async20430(self__.mult,self__.ch,self__.cs,meta20431__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async20430.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20432){
var self__ = this;
var _20432__$1 = this;
return self__.meta20431;
});})(cs))
;

cljs.core.async.t_cljs$core$async20430.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20430.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async20430.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async20430.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20430.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20430.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20430.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta20431","meta20431",-1959459970,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async20430.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20430.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20430";

cljs.core.async.t_cljs$core$async20430.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5512__auto__,writer__5513__auto__,opt__5514__auto__){
return cljs.core._write.call(null,writer__5513__auto__,"cljs.core.async/t_cljs$core$async20430");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async20430 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async20430(mult__$1,ch__$1,cs__$1,meta20431){
return (new cljs.core.async.t_cljs$core$async20430(mult__$1,ch__$1,cs__$1,meta20431));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async20430(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__7440__auto___20651 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7440__auto___20651,cs,m,dchan,dctr,done){
return (function (){
var f__7441__auto__ = (function (){var switch__7375__auto__ = ((function (c__7440__auto___20651,cs,m,dchan,dctr,done){
return (function (state_20563){
var state_val_20564 = (state_20563[(1)]);
if((state_val_20564 === (7))){
var inst_20559 = (state_20563[(2)]);
var state_20563__$1 = state_20563;
var statearr_20565_20652 = state_20563__$1;
(statearr_20565_20652[(2)] = inst_20559);

(statearr_20565_20652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (20))){
var inst_20464 = (state_20563[(7)]);
var inst_20474 = cljs.core.first.call(null,inst_20464);
var inst_20475 = cljs.core.nth.call(null,inst_20474,(0),null);
var inst_20476 = cljs.core.nth.call(null,inst_20474,(1),null);
var state_20563__$1 = (function (){var statearr_20566 = state_20563;
(statearr_20566[(8)] = inst_20475);

return statearr_20566;
})();
if(cljs.core.truth_(inst_20476)){
var statearr_20567_20653 = state_20563__$1;
(statearr_20567_20653[(1)] = (22));

} else {
var statearr_20568_20654 = state_20563__$1;
(statearr_20568_20654[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (27))){
var inst_20506 = (state_20563[(9)]);
var inst_20504 = (state_20563[(10)]);
var inst_20511 = (state_20563[(11)]);
var inst_20435 = (state_20563[(12)]);
var inst_20511__$1 = cljs.core._nth.call(null,inst_20504,inst_20506);
var inst_20512 = cljs.core.async.put_BANG_.call(null,inst_20511__$1,inst_20435,done);
var state_20563__$1 = (function (){var statearr_20569 = state_20563;
(statearr_20569[(11)] = inst_20511__$1);

return statearr_20569;
})();
if(cljs.core.truth_(inst_20512)){
var statearr_20570_20655 = state_20563__$1;
(statearr_20570_20655[(1)] = (30));

} else {
var statearr_20571_20656 = state_20563__$1;
(statearr_20571_20656[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (1))){
var state_20563__$1 = state_20563;
var statearr_20572_20657 = state_20563__$1;
(statearr_20572_20657[(2)] = null);

(statearr_20572_20657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (24))){
var inst_20464 = (state_20563[(7)]);
var inst_20481 = (state_20563[(2)]);
var inst_20482 = cljs.core.next.call(null,inst_20464);
var inst_20444 = inst_20482;
var inst_20445 = null;
var inst_20446 = (0);
var inst_20447 = (0);
var state_20563__$1 = (function (){var statearr_20573 = state_20563;
(statearr_20573[(13)] = inst_20447);

(statearr_20573[(14)] = inst_20444);

(statearr_20573[(15)] = inst_20446);

(statearr_20573[(16)] = inst_20481);

(statearr_20573[(17)] = inst_20445);

return statearr_20573;
})();
var statearr_20574_20658 = state_20563__$1;
(statearr_20574_20658[(2)] = null);

(statearr_20574_20658[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (39))){
var state_20563__$1 = state_20563;
var statearr_20578_20659 = state_20563__$1;
(statearr_20578_20659[(2)] = null);

(statearr_20578_20659[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (4))){
var inst_20435 = (state_20563[(12)]);
var inst_20435__$1 = (state_20563[(2)]);
var inst_20436 = (inst_20435__$1 == null);
var state_20563__$1 = (function (){var statearr_20579 = state_20563;
(statearr_20579[(12)] = inst_20435__$1);

return statearr_20579;
})();
if(cljs.core.truth_(inst_20436)){
var statearr_20580_20660 = state_20563__$1;
(statearr_20580_20660[(1)] = (5));

} else {
var statearr_20581_20661 = state_20563__$1;
(statearr_20581_20661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (15))){
var inst_20447 = (state_20563[(13)]);
var inst_20444 = (state_20563[(14)]);
var inst_20446 = (state_20563[(15)]);
var inst_20445 = (state_20563[(17)]);
var inst_20460 = (state_20563[(2)]);
var inst_20461 = (inst_20447 + (1));
var tmp20575 = inst_20444;
var tmp20576 = inst_20446;
var tmp20577 = inst_20445;
var inst_20444__$1 = tmp20575;
var inst_20445__$1 = tmp20577;
var inst_20446__$1 = tmp20576;
var inst_20447__$1 = inst_20461;
var state_20563__$1 = (function (){var statearr_20582 = state_20563;
(statearr_20582[(13)] = inst_20447__$1);

(statearr_20582[(14)] = inst_20444__$1);

(statearr_20582[(15)] = inst_20446__$1);

(statearr_20582[(17)] = inst_20445__$1);

(statearr_20582[(18)] = inst_20460);

return statearr_20582;
})();
var statearr_20583_20662 = state_20563__$1;
(statearr_20583_20662[(2)] = null);

(statearr_20583_20662[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (21))){
var inst_20485 = (state_20563[(2)]);
var state_20563__$1 = state_20563;
var statearr_20587_20663 = state_20563__$1;
(statearr_20587_20663[(2)] = inst_20485);

(statearr_20587_20663[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (31))){
var inst_20511 = (state_20563[(11)]);
var inst_20515 = done.call(null,null);
var inst_20516 = cljs.core.async.untap_STAR_.call(null,m,inst_20511);
var state_20563__$1 = (function (){var statearr_20588 = state_20563;
(statearr_20588[(19)] = inst_20515);

return statearr_20588;
})();
var statearr_20589_20664 = state_20563__$1;
(statearr_20589_20664[(2)] = inst_20516);

(statearr_20589_20664[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (32))){
var inst_20506 = (state_20563[(9)]);
var inst_20504 = (state_20563[(10)]);
var inst_20505 = (state_20563[(20)]);
var inst_20503 = (state_20563[(21)]);
var inst_20518 = (state_20563[(2)]);
var inst_20519 = (inst_20506 + (1));
var tmp20584 = inst_20504;
var tmp20585 = inst_20505;
var tmp20586 = inst_20503;
var inst_20503__$1 = tmp20586;
var inst_20504__$1 = tmp20584;
var inst_20505__$1 = tmp20585;
var inst_20506__$1 = inst_20519;
var state_20563__$1 = (function (){var statearr_20590 = state_20563;
(statearr_20590[(22)] = inst_20518);

(statearr_20590[(9)] = inst_20506__$1);

(statearr_20590[(10)] = inst_20504__$1);

(statearr_20590[(20)] = inst_20505__$1);

(statearr_20590[(21)] = inst_20503__$1);

return statearr_20590;
})();
var statearr_20591_20665 = state_20563__$1;
(statearr_20591_20665[(2)] = null);

(statearr_20591_20665[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (40))){
var inst_20531 = (state_20563[(23)]);
var inst_20535 = done.call(null,null);
var inst_20536 = cljs.core.async.untap_STAR_.call(null,m,inst_20531);
var state_20563__$1 = (function (){var statearr_20592 = state_20563;
(statearr_20592[(24)] = inst_20535);

return statearr_20592;
})();
var statearr_20593_20666 = state_20563__$1;
(statearr_20593_20666[(2)] = inst_20536);

(statearr_20593_20666[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (33))){
var inst_20522 = (state_20563[(25)]);
var inst_20524 = cljs.core.chunked_seq_QMARK_.call(null,inst_20522);
var state_20563__$1 = state_20563;
if(inst_20524){
var statearr_20594_20667 = state_20563__$1;
(statearr_20594_20667[(1)] = (36));

} else {
var statearr_20595_20668 = state_20563__$1;
(statearr_20595_20668[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (13))){
var inst_20454 = (state_20563[(26)]);
var inst_20457 = cljs.core.async.close_BANG_.call(null,inst_20454);
var state_20563__$1 = state_20563;
var statearr_20596_20669 = state_20563__$1;
(statearr_20596_20669[(2)] = inst_20457);

(statearr_20596_20669[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (22))){
var inst_20475 = (state_20563[(8)]);
var inst_20478 = cljs.core.async.close_BANG_.call(null,inst_20475);
var state_20563__$1 = state_20563;
var statearr_20597_20670 = state_20563__$1;
(statearr_20597_20670[(2)] = inst_20478);

(statearr_20597_20670[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (36))){
var inst_20522 = (state_20563[(25)]);
var inst_20526 = cljs.core.chunk_first.call(null,inst_20522);
var inst_20527 = cljs.core.chunk_rest.call(null,inst_20522);
var inst_20528 = cljs.core.count.call(null,inst_20526);
var inst_20503 = inst_20527;
var inst_20504 = inst_20526;
var inst_20505 = inst_20528;
var inst_20506 = (0);
var state_20563__$1 = (function (){var statearr_20598 = state_20563;
(statearr_20598[(9)] = inst_20506);

(statearr_20598[(10)] = inst_20504);

(statearr_20598[(20)] = inst_20505);

(statearr_20598[(21)] = inst_20503);

return statearr_20598;
})();
var statearr_20599_20671 = state_20563__$1;
(statearr_20599_20671[(2)] = null);

(statearr_20599_20671[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (41))){
var inst_20522 = (state_20563[(25)]);
var inst_20538 = (state_20563[(2)]);
var inst_20539 = cljs.core.next.call(null,inst_20522);
var inst_20503 = inst_20539;
var inst_20504 = null;
var inst_20505 = (0);
var inst_20506 = (0);
var state_20563__$1 = (function (){var statearr_20600 = state_20563;
(statearr_20600[(9)] = inst_20506);

(statearr_20600[(10)] = inst_20504);

(statearr_20600[(20)] = inst_20505);

(statearr_20600[(27)] = inst_20538);

(statearr_20600[(21)] = inst_20503);

return statearr_20600;
})();
var statearr_20601_20672 = state_20563__$1;
(statearr_20601_20672[(2)] = null);

(statearr_20601_20672[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (43))){
var state_20563__$1 = state_20563;
var statearr_20602_20673 = state_20563__$1;
(statearr_20602_20673[(2)] = null);

(statearr_20602_20673[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (29))){
var inst_20547 = (state_20563[(2)]);
var state_20563__$1 = state_20563;
var statearr_20603_20674 = state_20563__$1;
(statearr_20603_20674[(2)] = inst_20547);

(statearr_20603_20674[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (44))){
var inst_20556 = (state_20563[(2)]);
var state_20563__$1 = (function (){var statearr_20604 = state_20563;
(statearr_20604[(28)] = inst_20556);

return statearr_20604;
})();
var statearr_20605_20675 = state_20563__$1;
(statearr_20605_20675[(2)] = null);

(statearr_20605_20675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (6))){
var inst_20495 = (state_20563[(29)]);
var inst_20494 = cljs.core.deref.call(null,cs);
var inst_20495__$1 = cljs.core.keys.call(null,inst_20494);
var inst_20496 = cljs.core.count.call(null,inst_20495__$1);
var inst_20497 = cljs.core.reset_BANG_.call(null,dctr,inst_20496);
var inst_20502 = cljs.core.seq.call(null,inst_20495__$1);
var inst_20503 = inst_20502;
var inst_20504 = null;
var inst_20505 = (0);
var inst_20506 = (0);
var state_20563__$1 = (function (){var statearr_20606 = state_20563;
(statearr_20606[(30)] = inst_20497);

(statearr_20606[(9)] = inst_20506);

(statearr_20606[(10)] = inst_20504);

(statearr_20606[(20)] = inst_20505);

(statearr_20606[(21)] = inst_20503);

(statearr_20606[(29)] = inst_20495__$1);

return statearr_20606;
})();
var statearr_20607_20676 = state_20563__$1;
(statearr_20607_20676[(2)] = null);

(statearr_20607_20676[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (28))){
var inst_20522 = (state_20563[(25)]);
var inst_20503 = (state_20563[(21)]);
var inst_20522__$1 = cljs.core.seq.call(null,inst_20503);
var state_20563__$1 = (function (){var statearr_20608 = state_20563;
(statearr_20608[(25)] = inst_20522__$1);

return statearr_20608;
})();
if(inst_20522__$1){
var statearr_20609_20677 = state_20563__$1;
(statearr_20609_20677[(1)] = (33));

} else {
var statearr_20610_20678 = state_20563__$1;
(statearr_20610_20678[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (25))){
var inst_20506 = (state_20563[(9)]);
var inst_20505 = (state_20563[(20)]);
var inst_20508 = (inst_20506 < inst_20505);
var inst_20509 = inst_20508;
var state_20563__$1 = state_20563;
if(cljs.core.truth_(inst_20509)){
var statearr_20611_20679 = state_20563__$1;
(statearr_20611_20679[(1)] = (27));

} else {
var statearr_20612_20680 = state_20563__$1;
(statearr_20612_20680[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (34))){
var state_20563__$1 = state_20563;
var statearr_20613_20681 = state_20563__$1;
(statearr_20613_20681[(2)] = null);

(statearr_20613_20681[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (17))){
var state_20563__$1 = state_20563;
var statearr_20614_20682 = state_20563__$1;
(statearr_20614_20682[(2)] = null);

(statearr_20614_20682[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (3))){
var inst_20561 = (state_20563[(2)]);
var state_20563__$1 = state_20563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20563__$1,inst_20561);
} else {
if((state_val_20564 === (12))){
var inst_20490 = (state_20563[(2)]);
var state_20563__$1 = state_20563;
var statearr_20615_20683 = state_20563__$1;
(statearr_20615_20683[(2)] = inst_20490);

(statearr_20615_20683[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (2))){
var state_20563__$1 = state_20563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20563__$1,(4),ch);
} else {
if((state_val_20564 === (23))){
var state_20563__$1 = state_20563;
var statearr_20616_20684 = state_20563__$1;
(statearr_20616_20684[(2)] = null);

(statearr_20616_20684[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (35))){
var inst_20545 = (state_20563[(2)]);
var state_20563__$1 = state_20563;
var statearr_20617_20685 = state_20563__$1;
(statearr_20617_20685[(2)] = inst_20545);

(statearr_20617_20685[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (19))){
var inst_20464 = (state_20563[(7)]);
var inst_20468 = cljs.core.chunk_first.call(null,inst_20464);
var inst_20469 = cljs.core.chunk_rest.call(null,inst_20464);
var inst_20470 = cljs.core.count.call(null,inst_20468);
var inst_20444 = inst_20469;
var inst_20445 = inst_20468;
var inst_20446 = inst_20470;
var inst_20447 = (0);
var state_20563__$1 = (function (){var statearr_20618 = state_20563;
(statearr_20618[(13)] = inst_20447);

(statearr_20618[(14)] = inst_20444);

(statearr_20618[(15)] = inst_20446);

(statearr_20618[(17)] = inst_20445);

return statearr_20618;
})();
var statearr_20619_20686 = state_20563__$1;
(statearr_20619_20686[(2)] = null);

(statearr_20619_20686[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (11))){
var inst_20444 = (state_20563[(14)]);
var inst_20464 = (state_20563[(7)]);
var inst_20464__$1 = cljs.core.seq.call(null,inst_20444);
var state_20563__$1 = (function (){var statearr_20620 = state_20563;
(statearr_20620[(7)] = inst_20464__$1);

return statearr_20620;
})();
if(inst_20464__$1){
var statearr_20621_20687 = state_20563__$1;
(statearr_20621_20687[(1)] = (16));

} else {
var statearr_20622_20688 = state_20563__$1;
(statearr_20622_20688[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (9))){
var inst_20492 = (state_20563[(2)]);
var state_20563__$1 = state_20563;
var statearr_20623_20689 = state_20563__$1;
(statearr_20623_20689[(2)] = inst_20492);

(statearr_20623_20689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (5))){
var inst_20442 = cljs.core.deref.call(null,cs);
var inst_20443 = cljs.core.seq.call(null,inst_20442);
var inst_20444 = inst_20443;
var inst_20445 = null;
var inst_20446 = (0);
var inst_20447 = (0);
var state_20563__$1 = (function (){var statearr_20624 = state_20563;
(statearr_20624[(13)] = inst_20447);

(statearr_20624[(14)] = inst_20444);

(statearr_20624[(15)] = inst_20446);

(statearr_20624[(17)] = inst_20445);

return statearr_20624;
})();
var statearr_20625_20690 = state_20563__$1;
(statearr_20625_20690[(2)] = null);

(statearr_20625_20690[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (14))){
var state_20563__$1 = state_20563;
var statearr_20626_20691 = state_20563__$1;
(statearr_20626_20691[(2)] = null);

(statearr_20626_20691[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (45))){
var inst_20553 = (state_20563[(2)]);
var state_20563__$1 = state_20563;
var statearr_20627_20692 = state_20563__$1;
(statearr_20627_20692[(2)] = inst_20553);

(statearr_20627_20692[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (26))){
var inst_20495 = (state_20563[(29)]);
var inst_20549 = (state_20563[(2)]);
var inst_20550 = cljs.core.seq.call(null,inst_20495);
var state_20563__$1 = (function (){var statearr_20628 = state_20563;
(statearr_20628[(31)] = inst_20549);

return statearr_20628;
})();
if(inst_20550){
var statearr_20629_20693 = state_20563__$1;
(statearr_20629_20693[(1)] = (42));

} else {
var statearr_20630_20694 = state_20563__$1;
(statearr_20630_20694[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (16))){
var inst_20464 = (state_20563[(7)]);
var inst_20466 = cljs.core.chunked_seq_QMARK_.call(null,inst_20464);
var state_20563__$1 = state_20563;
if(inst_20466){
var statearr_20631_20695 = state_20563__$1;
(statearr_20631_20695[(1)] = (19));

} else {
var statearr_20632_20696 = state_20563__$1;
(statearr_20632_20696[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (38))){
var inst_20542 = (state_20563[(2)]);
var state_20563__$1 = state_20563;
var statearr_20633_20697 = state_20563__$1;
(statearr_20633_20697[(2)] = inst_20542);

(statearr_20633_20697[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (30))){
var state_20563__$1 = state_20563;
var statearr_20634_20698 = state_20563__$1;
(statearr_20634_20698[(2)] = null);

(statearr_20634_20698[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (10))){
var inst_20447 = (state_20563[(13)]);
var inst_20445 = (state_20563[(17)]);
var inst_20453 = cljs.core._nth.call(null,inst_20445,inst_20447);
var inst_20454 = cljs.core.nth.call(null,inst_20453,(0),null);
var inst_20455 = cljs.core.nth.call(null,inst_20453,(1),null);
var state_20563__$1 = (function (){var statearr_20635 = state_20563;
(statearr_20635[(26)] = inst_20454);

return statearr_20635;
})();
if(cljs.core.truth_(inst_20455)){
var statearr_20636_20699 = state_20563__$1;
(statearr_20636_20699[(1)] = (13));

} else {
var statearr_20637_20700 = state_20563__$1;
(statearr_20637_20700[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (18))){
var inst_20488 = (state_20563[(2)]);
var state_20563__$1 = state_20563;
var statearr_20638_20701 = state_20563__$1;
(statearr_20638_20701[(2)] = inst_20488);

(statearr_20638_20701[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (42))){
var state_20563__$1 = state_20563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20563__$1,(45),dchan);
} else {
if((state_val_20564 === (37))){
var inst_20522 = (state_20563[(25)]);
var inst_20531 = (state_20563[(23)]);
var inst_20435 = (state_20563[(12)]);
var inst_20531__$1 = cljs.core.first.call(null,inst_20522);
var inst_20532 = cljs.core.async.put_BANG_.call(null,inst_20531__$1,inst_20435,done);
var state_20563__$1 = (function (){var statearr_20639 = state_20563;
(statearr_20639[(23)] = inst_20531__$1);

return statearr_20639;
})();
if(cljs.core.truth_(inst_20532)){
var statearr_20640_20702 = state_20563__$1;
(statearr_20640_20702[(1)] = (39));

} else {
var statearr_20641_20703 = state_20563__$1;
(statearr_20641_20703[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (8))){
var inst_20447 = (state_20563[(13)]);
var inst_20446 = (state_20563[(15)]);
var inst_20449 = (inst_20447 < inst_20446);
var inst_20450 = inst_20449;
var state_20563__$1 = state_20563;
if(cljs.core.truth_(inst_20450)){
var statearr_20642_20704 = state_20563__$1;
(statearr_20642_20704[(1)] = (10));

} else {
var statearr_20643_20705 = state_20563__$1;
(statearr_20643_20705[(1)] = (11));

}

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
});})(c__7440__auto___20651,cs,m,dchan,dctr,done))
;
return ((function (switch__7375__auto__,c__7440__auto___20651,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__7376__auto__ = null;
var cljs$core$async$mult_$_state_machine__7376__auto____0 = (function (){
var statearr_20647 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20647[(0)] = cljs$core$async$mult_$_state_machine__7376__auto__);

(statearr_20647[(1)] = (1));

return statearr_20647;
});
var cljs$core$async$mult_$_state_machine__7376__auto____1 = (function (state_20563){
while(true){
var ret_value__7377__auto__ = (function (){try{while(true){
var result__7378__auto__ = switch__7375__auto__.call(null,state_20563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7378__auto__;
}
break;
}
}catch (e20648){if((e20648 instanceof Object)){
var ex__7379__auto__ = e20648;
var statearr_20649_20706 = state_20563;
(statearr_20649_20706[(5)] = ex__7379__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7377__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20707 = state_20563;
state_20563 = G__20707;
continue;
} else {
return ret_value__7377__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7376__auto__ = function(state_20563){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7376__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7376__auto____1.call(this,state_20563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__7376__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7376__auto____0;
cljs$core$async$mult_$_state_machine__7376__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7376__auto____1;
return cljs$core$async$mult_$_state_machine__7376__auto__;
})()
;})(switch__7375__auto__,c__7440__auto___20651,cs,m,dchan,dctr,done))
})();
var state__7442__auto__ = (function (){var statearr_20650 = f__7441__auto__.call(null);
(statearr_20650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7440__auto___20651);

return statearr_20650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7442__auto__);
});})(c__7440__auto___20651,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args20708 = [];
var len__5972__auto___20711 = arguments.length;
var i__5973__auto___20712 = (0);
while(true){
if((i__5973__auto___20712 < len__5972__auto___20711)){
args20708.push((arguments[i__5973__auto___20712]));

var G__20713 = (i__5973__auto___20712 + (1));
i__5973__auto___20712 = G__20713;
continue;
} else {
}
break;
}

var G__20710 = args20708.length;
switch (G__20710) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20708.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5569__auto__ = (((m == null))?null:m);
var m__5570__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5569__auto__)]);
if(!((m__5570__auto__ == null))){
return m__5570__auto__.call(null,m,ch);
} else {
var m__5570__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5570__auto____$1 == null))){
return m__5570__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5569__auto__ = (((m == null))?null:m);
var m__5570__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5569__auto__)]);
if(!((m__5570__auto__ == null))){
return m__5570__auto__.call(null,m,ch);
} else {
var m__5570__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5570__auto____$1 == null))){
return m__5570__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5569__auto__ = (((m == null))?null:m);
var m__5570__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5569__auto__)]);
if(!((m__5570__auto__ == null))){
return m__5570__auto__.call(null,m);
} else {
var m__5570__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5570__auto____$1 == null))){
return m__5570__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5569__auto__ = (((m == null))?null:m);
var m__5570__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5569__auto__)]);
if(!((m__5570__auto__ == null))){
return m__5570__auto__.call(null,m,state_map);
} else {
var m__5570__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5570__auto____$1 == null))){
return m__5570__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5569__auto__ = (((m == null))?null:m);
var m__5570__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5569__auto__)]);
if(!((m__5570__auto__ == null))){
return m__5570__auto__.call(null,m,mode);
} else {
var m__5570__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5570__auto____$1 == null))){
return m__5570__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5979__auto__ = [];
var len__5972__auto___20725 = arguments.length;
var i__5973__auto___20726 = (0);
while(true){
if((i__5973__auto___20726 < len__5972__auto___20725)){
args__5979__auto__.push((arguments[i__5973__auto___20726]));

var G__20727 = (i__5973__auto___20726 + (1));
i__5973__auto___20726 = G__20727;
continue;
} else {
}
break;
}

var argseq__5980__auto__ = ((((3) < args__5979__auto__.length))?(new cljs.core.IndexedSeq(args__5979__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5980__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__20719){
var map__20720 = p__20719;
var map__20720__$1 = ((((!((map__20720 == null)))?((((map__20720.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20720.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20720):map__20720);
var opts = map__20720__$1;
var statearr_20722_20728 = state;
(statearr_20722_20728[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__20720,map__20720__$1,opts){
return (function (val){
var statearr_20723_20729 = state;
(statearr_20723_20729[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20720,map__20720__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_20724_20730 = state;
(statearr_20724_20730[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq20715){
var G__20716 = cljs.core.first.call(null,seq20715);
var seq20715__$1 = cljs.core.next.call(null,seq20715);
var G__20717 = cljs.core.first.call(null,seq20715__$1);
var seq20715__$2 = cljs.core.next.call(null,seq20715__$1);
var G__20718 = cljs.core.first.call(null,seq20715__$2);
var seq20715__$3 = cljs.core.next.call(null,seq20715__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20716,G__20717,G__20718,seq20715__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async20894 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20894 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20895){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta20895 = meta20895;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20896,meta20895__$1){
var self__ = this;
var _20896__$1 = this;
return (new cljs.core.async.t_cljs$core$async20894(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20895__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20894.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20896){
var self__ = this;
var _20896__$1 = this;
return self__.meta20895;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20894.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20894.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20894.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async20894.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20894.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20894.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20894.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20894.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20894.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta20895","meta20895",1511498908,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20894.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20894.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20894";

cljs.core.async.t_cljs$core$async20894.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5512__auto__,writer__5513__auto__,opt__5514__auto__){
return cljs.core._write.call(null,writer__5513__auto__,"cljs.core.async/t_cljs$core$async20894");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async20894 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async20894(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20895){
return (new cljs.core.async.t_cljs$core$async20894(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20895));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async20894(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7440__auto___21057 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7440__auto___21057,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7441__auto__ = (function (){var switch__7375__auto__ = ((function (c__7440__auto___21057,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20994){
var state_val_20995 = (state_20994[(1)]);
if((state_val_20995 === (7))){
var inst_20912 = (state_20994[(2)]);
var state_20994__$1 = state_20994;
var statearr_20996_21058 = state_20994__$1;
(statearr_20996_21058[(2)] = inst_20912);

(statearr_20996_21058[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20995 === (20))){
var inst_20924 = (state_20994[(7)]);
var state_20994__$1 = state_20994;
var statearr_20997_21059 = state_20994__$1;
(statearr_20997_21059[(2)] = inst_20924);

(statearr_20997_21059[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20995 === (27))){
var state_20994__$1 = state_20994;
var statearr_20998_21060 = state_20994__$1;
(statearr_20998_21060[(2)] = null);

(statearr_20998_21060[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20995 === (1))){
var inst_20900 = (state_20994[(8)]);
var inst_20900__$1 = calc_state.call(null);
var inst_20902 = (inst_20900__$1 == null);
var inst_20903 = cljs.core.not.call(null,inst_20902);
var state_20994__$1 = (function (){var statearr_20999 = state_20994;
(statearr_20999[(8)] = inst_20900__$1);

return statearr_20999;
})();
if(inst_20903){
var statearr_21000_21061 = state_20994__$1;
(statearr_21000_21061[(1)] = (2));

} else {
var statearr_21001_21062 = state_20994__$1;
(statearr_21001_21062[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20995 === (24))){
var inst_20968 = (state_20994[(9)]);
var inst_20947 = (state_20994[(10)]);
var inst_20954 = (state_20994[(11)]);
var inst_20968__$1 = inst_20947.call(null,inst_20954);
var state_20994__$1 = (function (){var statearr_21002 = state_20994;
(statearr_21002[(9)] = inst_20968__$1);

return statearr_21002;
})();
if(cljs.core.truth_(inst_20968__$1)){
var statearr_21003_21063 = state_20994__$1;
(statearr_21003_21063[(1)] = (29));

} else {
var statearr_21004_21064 = state_20994__$1;
(statearr_21004_21064[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20995 === (4))){
var inst_20915 = (state_20994[(2)]);
var state_20994__$1 = state_20994;
if(cljs.core.truth_(inst_20915)){
var statearr_21005_21065 = state_20994__$1;
(statearr_21005_21065[(1)] = (8));

} else {
var statearr_21006_21066 = state_20994__$1;
(statearr_21006_21066[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20995 === (15))){
var inst_20941 = (state_20994[(2)]);
var state_20994__$1 = state_20994;
if(cljs.core.truth_(inst_20941)){
var statearr_21007_21067 = state_20994__$1;
(statearr_21007_21067[(1)] = (19));

} else {
var statearr_21008_21068 = state_20994__$1;
(statearr_21008_21068[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20995 === (21))){
var inst_20946 = (state_20994[(12)]);
var inst_20946__$1 = (state_20994[(2)]);
var inst_20947 = cljs.core.get.call(null,inst_20946__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20948 = cljs.core.get.call(null,inst_20946__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20949 = cljs.core.get.call(null,inst_20946__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_20994__$1 = (function (){var statearr_21009 = state_20994;
(statearr_21009[(12)] = inst_20946__$1);

(statearr_21009[(13)] = inst_20948);

(statearr_21009[(10)] = inst_20947);

return statearr_21009;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_20994__$1,(22),inst_20949);
} else {
if((state_val_20995 === (31))){
var inst_20976 = (state_20994[(2)]);
var state_20994__$1 = state_20994;
if(cljs.core.truth_(inst_20976)){
var statearr_21010_21069 = state_20994__$1;
(statearr_21010_21069[(1)] = (32));

} else {
var statearr_21011_21070 = state_20994__$1;
(statearr_21011_21070[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20995 === (32))){
var inst_20953 = (state_20994[(14)]);
var state_20994__$1 = state_20994;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20994__$1,(35),out,inst_20953);
} else {
if((state_val_20995 === (33))){
var inst_20946 = (state_20994[(12)]);
var inst_20924 = inst_20946;
var state_20994__$1 = (function (){var statearr_21012 = state_20994;
(statearr_21012[(7)] = inst_20924);

return statearr_21012;
})();
var statearr_21013_21071 = state_20994__$1;
(statearr_21013_21071[(2)] = null);

(statearr_21013_21071[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20995 === (13))){
var inst_20924 = (state_20994[(7)]);
var inst_20931 = inst_20924.cljs$lang$protocol_mask$partition0$;
var inst_20932 = (inst_20931 & (64));
var inst_20933 = inst_20924.cljs$core$ISeq$;
var inst_20934 = (inst_20932) || (inst_20933);
var state_20994__$1 = state_20994;
if(cljs.core.truth_(inst_20934)){
var statearr_21014_21072 = state_20994__$1;
(statearr_21014_21072[(1)] = (16));

} else {
var statearr_21015_21073 = state_20994__$1;
(statearr_21015_21073[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20995 === (22))){
var inst_20954 = (state_20994[(11)]);
var inst_20953 = (state_20994[(14)]);
var inst_20952 = (state_20994[(2)]);
var inst_20953__$1 = cljs.core.nth.call(null,inst_20952,(0),null);
var inst_20954__$1 = cljs.core.nth.call(null,inst_20952,(1),null);
var inst_20955 = (inst_20953__$1 == null);
var inst_20956 = cljs.core._EQ_.call(null,inst_20954__$1,change);
var inst_20957 = (inst_20955) || (inst_20956);
var state_20994__$1 = (function (){var statearr_21016 = state_20994;
(statearr_21016[(11)] = inst_20954__$1);

(statearr_21016[(14)] = inst_20953__$1);

return statearr_21016;
})();
if(cljs.core.truth_(inst_20957)){
var statearr_21017_21074 = state_20994__$1;
(statearr_21017_21074[(1)] = (23));

} else {
var statearr_21018_21075 = state_20994__$1;
(statearr_21018_21075[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20995 === (36))){
var inst_20946 = (state_20994[(12)]);
var inst_20924 = inst_20946;
var state_20994__$1 = (function (){var statearr_21019 = state_20994;
(statearr_21019[(7)] = inst_20924);

return statearr_21019;
})();
var statearr_21020_21076 = state_20994__$1;
(statearr_21020_21076[(2)] = null);

(statearr_21020_21076[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20995 === (29))){
var inst_20968 = (state_20994[(9)]);
var state_20994__$1 = state_20994;
var statearr_21021_21077 = state_20994__$1;
(statearr_21021_21077[(2)] = inst_20968);

(statearr_21021_21077[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20995 === (6))){
var state_20994__$1 = state_20994;
var statearr_21022_21078 = state_20994__$1;
(statearr_21022_21078[(2)] = false);

(statearr_21022_21078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20995 === (28))){
var inst_20964 = (state_20994[(2)]);
var inst_20965 = calc_state.call(null);
var inst_20924 = inst_20965;
var state_20994__$1 = (function (){var statearr_21023 = state_20994;
(statearr_21023[(7)] = inst_20924);

(statearr_21023[(15)] = inst_20964);

return statearr_21023;
})();
var statearr_21024_21079 = state_20994__$1;
(statearr_21024_21079[(2)] = null);

(statearr_21024_21079[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20995 === (25))){
var inst_20990 = (state_20994[(2)]);
var state_20994__$1 = state_20994;
var statearr_21025_21080 = state_20994__$1;
(statearr_21025_21080[(2)] = inst_20990);

(statearr_21025_21080[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20995 === (34))){
var inst_20988 = (state_20994[(2)]);
var state_20994__$1 = state_20994;
var statearr_21026_21081 = state_20994__$1;
(statearr_21026_21081[(2)] = inst_20988);

(statearr_21026_21081[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20995 === (17))){
var state_20994__$1 = state_20994;
var statearr_21027_21082 = state_20994__$1;
(statearr_21027_21082[(2)] = false);

(statearr_21027_21082[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20995 === (3))){
var state_20994__$1 = state_20994;
var statearr_21028_21083 = state_20994__$1;
(statearr_21028_21083[(2)] = false);

(statearr_21028_21083[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20995 === (12))){
var inst_20992 = (state_20994[(2)]);
var state_20994__$1 = state_20994;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20994__$1,inst_20992);
} else {
if((state_val_20995 === (2))){
var inst_20900 = (state_20994[(8)]);
var inst_20905 = inst_20900.cljs$lang$protocol_mask$partition0$;
var inst_20906 = (inst_20905 & (64));
var inst_20907 = inst_20900.cljs$core$ISeq$;
var inst_20908 = (inst_20906) || (inst_20907);
var state_20994__$1 = state_20994;
if(cljs.core.truth_(inst_20908)){
var statearr_21029_21084 = state_20994__$1;
(statearr_21029_21084[(1)] = (5));

} else {
var statearr_21030_21085 = state_20994__$1;
(statearr_21030_21085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20995 === (23))){
var inst_20953 = (state_20994[(14)]);
var inst_20959 = (inst_20953 == null);
var state_20994__$1 = state_20994;
if(cljs.core.truth_(inst_20959)){
var statearr_21031_21086 = state_20994__$1;
(statearr_21031_21086[(1)] = (26));

} else {
var statearr_21032_21087 = state_20994__$1;
(statearr_21032_21087[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20995 === (35))){
var inst_20979 = (state_20994[(2)]);
var state_20994__$1 = state_20994;
if(cljs.core.truth_(inst_20979)){
var statearr_21033_21088 = state_20994__$1;
(statearr_21033_21088[(1)] = (36));

} else {
var statearr_21034_21089 = state_20994__$1;
(statearr_21034_21089[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20995 === (19))){
var inst_20924 = (state_20994[(7)]);
var inst_20943 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20924);
var state_20994__$1 = state_20994;
var statearr_21035_21090 = state_20994__$1;
(statearr_21035_21090[(2)] = inst_20943);

(statearr_21035_21090[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20995 === (11))){
var inst_20924 = (state_20994[(7)]);
var inst_20928 = (inst_20924 == null);
var inst_20929 = cljs.core.not.call(null,inst_20928);
var state_20994__$1 = state_20994;
if(inst_20929){
var statearr_21036_21091 = state_20994__$1;
(statearr_21036_21091[(1)] = (13));

} else {
var statearr_21037_21092 = state_20994__$1;
(statearr_21037_21092[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20995 === (9))){
var inst_20900 = (state_20994[(8)]);
var state_20994__$1 = state_20994;
var statearr_21038_21093 = state_20994__$1;
(statearr_21038_21093[(2)] = inst_20900);

(statearr_21038_21093[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20995 === (5))){
var state_20994__$1 = state_20994;
var statearr_21039_21094 = state_20994__$1;
(statearr_21039_21094[(2)] = true);

(statearr_21039_21094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20995 === (14))){
var state_20994__$1 = state_20994;
var statearr_21040_21095 = state_20994__$1;
(statearr_21040_21095[(2)] = false);

(statearr_21040_21095[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20995 === (26))){
var inst_20954 = (state_20994[(11)]);
var inst_20961 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20954);
var state_20994__$1 = state_20994;
var statearr_21041_21096 = state_20994__$1;
(statearr_21041_21096[(2)] = inst_20961);

(statearr_21041_21096[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20995 === (16))){
var state_20994__$1 = state_20994;
var statearr_21042_21097 = state_20994__$1;
(statearr_21042_21097[(2)] = true);

(statearr_21042_21097[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20995 === (38))){
var inst_20984 = (state_20994[(2)]);
var state_20994__$1 = state_20994;
var statearr_21043_21098 = state_20994__$1;
(statearr_21043_21098[(2)] = inst_20984);

(statearr_21043_21098[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20995 === (30))){
var inst_20948 = (state_20994[(13)]);
var inst_20947 = (state_20994[(10)]);
var inst_20954 = (state_20994[(11)]);
var inst_20971 = cljs.core.empty_QMARK_.call(null,inst_20947);
var inst_20972 = inst_20948.call(null,inst_20954);
var inst_20973 = cljs.core.not.call(null,inst_20972);
var inst_20974 = (inst_20971) && (inst_20973);
var state_20994__$1 = state_20994;
var statearr_21044_21099 = state_20994__$1;
(statearr_21044_21099[(2)] = inst_20974);

(statearr_21044_21099[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20995 === (10))){
var inst_20900 = (state_20994[(8)]);
var inst_20920 = (state_20994[(2)]);
var inst_20921 = cljs.core.get.call(null,inst_20920,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20922 = cljs.core.get.call(null,inst_20920,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20923 = cljs.core.get.call(null,inst_20920,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20924 = inst_20900;
var state_20994__$1 = (function (){var statearr_21045 = state_20994;
(statearr_21045[(7)] = inst_20924);

(statearr_21045[(16)] = inst_20923);

(statearr_21045[(17)] = inst_20921);

(statearr_21045[(18)] = inst_20922);

return statearr_21045;
})();
var statearr_21046_21100 = state_20994__$1;
(statearr_21046_21100[(2)] = null);

(statearr_21046_21100[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20995 === (18))){
var inst_20938 = (state_20994[(2)]);
var state_20994__$1 = state_20994;
var statearr_21047_21101 = state_20994__$1;
(statearr_21047_21101[(2)] = inst_20938);

(statearr_21047_21101[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20995 === (37))){
var state_20994__$1 = state_20994;
var statearr_21048_21102 = state_20994__$1;
(statearr_21048_21102[(2)] = null);

(statearr_21048_21102[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20995 === (8))){
var inst_20900 = (state_20994[(8)]);
var inst_20917 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20900);
var state_20994__$1 = state_20994;
var statearr_21049_21103 = state_20994__$1;
(statearr_21049_21103[(2)] = inst_20917);

(statearr_21049_21103[(1)] = (10));


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
}
}
}
}
}
}
}
});})(c__7440__auto___21057,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7375__auto__,c__7440__auto___21057,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__7376__auto__ = null;
var cljs$core$async$mix_$_state_machine__7376__auto____0 = (function (){
var statearr_21053 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21053[(0)] = cljs$core$async$mix_$_state_machine__7376__auto__);

(statearr_21053[(1)] = (1));

return statearr_21053;
});
var cljs$core$async$mix_$_state_machine__7376__auto____1 = (function (state_20994){
while(true){
var ret_value__7377__auto__ = (function (){try{while(true){
var result__7378__auto__ = switch__7375__auto__.call(null,state_20994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7378__auto__;
}
break;
}
}catch (e21054){if((e21054 instanceof Object)){
var ex__7379__auto__ = e21054;
var statearr_21055_21104 = state_20994;
(statearr_21055_21104[(5)] = ex__7379__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7377__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21105 = state_20994;
state_20994 = G__21105;
continue;
} else {
return ret_value__7377__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7376__auto__ = function(state_20994){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7376__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7376__auto____1.call(this,state_20994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__7376__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7376__auto____0;
cljs$core$async$mix_$_state_machine__7376__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7376__auto____1;
return cljs$core$async$mix_$_state_machine__7376__auto__;
})()
;})(switch__7375__auto__,c__7440__auto___21057,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7442__auto__ = (function (){var statearr_21056 = f__7441__auto__.call(null);
(statearr_21056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7440__auto___21057);

return statearr_21056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7442__auto__);
});})(c__7440__auto___21057,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5569__auto__ = (((p == null))?null:p);
var m__5570__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5569__auto__)]);
if(!((m__5570__auto__ == null))){
return m__5570__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5570__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5570__auto____$1 == null))){
return m__5570__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5569__auto__ = (((p == null))?null:p);
var m__5570__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5569__auto__)]);
if(!((m__5570__auto__ == null))){
return m__5570__auto__.call(null,p,v,ch);
} else {
var m__5570__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5570__auto____$1 == null))){
return m__5570__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args21106 = [];
var len__5972__auto___21109 = arguments.length;
var i__5973__auto___21110 = (0);
while(true){
if((i__5973__auto___21110 < len__5972__auto___21109)){
args21106.push((arguments[i__5973__auto___21110]));

var G__21111 = (i__5973__auto___21110 + (1));
i__5973__auto___21110 = G__21111;
continue;
} else {
}
break;
}

var G__21108 = args21106.length;
switch (G__21108) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21106.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5569__auto__ = (((p == null))?null:p);
var m__5570__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5569__auto__)]);
if(!((m__5570__auto__ == null))){
return m__5570__auto__.call(null,p);
} else {
var m__5570__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5570__auto____$1 == null))){
return m__5570__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5569__auto__ = (((p == null))?null:p);
var m__5570__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5569__auto__)]);
if(!((m__5570__auto__ == null))){
return m__5570__auto__.call(null,p,v);
} else {
var m__5570__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5570__auto____$1 == null))){
return m__5570__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args21114 = [];
var len__5972__auto___21239 = arguments.length;
var i__5973__auto___21240 = (0);
while(true){
if((i__5973__auto___21240 < len__5972__auto___21239)){
args21114.push((arguments[i__5973__auto___21240]));

var G__21241 = (i__5973__auto___21240 + (1));
i__5973__auto___21240 = G__21241;
continue;
} else {
}
break;
}

var G__21116 = args21114.length;
switch (G__21116) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21114.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4914__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4914__auto__)){
return or__4914__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4914__auto__,mults){
return (function (p1__21113_SHARP_){
if(cljs.core.truth_(p1__21113_SHARP_.call(null,topic))){
return p1__21113_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__21113_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4914__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async21117 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21117 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta21118){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta21118 = meta21118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21119,meta21118__$1){
var self__ = this;
var _21119__$1 = this;
return (new cljs.core.async.t_cljs$core$async21117(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta21118__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21117.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21119){
var self__ = this;
var _21119__$1 = this;
return self__.meta21118;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21117.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21117.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21117.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async21117.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21117.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21117.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21117.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21117.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta21118","meta21118",1983100157,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21117.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21117.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21117";

cljs.core.async.t_cljs$core$async21117.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5512__auto__,writer__5513__auto__,opt__5514__auto__){
return cljs.core._write.call(null,writer__5513__auto__,"cljs.core.async/t_cljs$core$async21117");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async21117 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async21117(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21118){
return (new cljs.core.async.t_cljs$core$async21117(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21118));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async21117(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7440__auto___21243 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7440__auto___21243,mults,ensure_mult,p){
return (function (){
var f__7441__auto__ = (function (){var switch__7375__auto__ = ((function (c__7440__auto___21243,mults,ensure_mult,p){
return (function (state_21191){
var state_val_21192 = (state_21191[(1)]);
if((state_val_21192 === (7))){
var inst_21187 = (state_21191[(2)]);
var state_21191__$1 = state_21191;
var statearr_21193_21244 = state_21191__$1;
(statearr_21193_21244[(2)] = inst_21187);

(statearr_21193_21244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21192 === (20))){
var state_21191__$1 = state_21191;
var statearr_21194_21245 = state_21191__$1;
(statearr_21194_21245[(2)] = null);

(statearr_21194_21245[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21192 === (1))){
var state_21191__$1 = state_21191;
var statearr_21195_21246 = state_21191__$1;
(statearr_21195_21246[(2)] = null);

(statearr_21195_21246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21192 === (24))){
var inst_21170 = (state_21191[(7)]);
var inst_21179 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21170);
var state_21191__$1 = state_21191;
var statearr_21196_21247 = state_21191__$1;
(statearr_21196_21247[(2)] = inst_21179);

(statearr_21196_21247[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21192 === (4))){
var inst_21122 = (state_21191[(8)]);
var inst_21122__$1 = (state_21191[(2)]);
var inst_21123 = (inst_21122__$1 == null);
var state_21191__$1 = (function (){var statearr_21197 = state_21191;
(statearr_21197[(8)] = inst_21122__$1);

return statearr_21197;
})();
if(cljs.core.truth_(inst_21123)){
var statearr_21198_21248 = state_21191__$1;
(statearr_21198_21248[(1)] = (5));

} else {
var statearr_21199_21249 = state_21191__$1;
(statearr_21199_21249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21192 === (15))){
var inst_21164 = (state_21191[(2)]);
var state_21191__$1 = state_21191;
var statearr_21200_21250 = state_21191__$1;
(statearr_21200_21250[(2)] = inst_21164);

(statearr_21200_21250[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21192 === (21))){
var inst_21184 = (state_21191[(2)]);
var state_21191__$1 = (function (){var statearr_21201 = state_21191;
(statearr_21201[(9)] = inst_21184);

return statearr_21201;
})();
var statearr_21202_21251 = state_21191__$1;
(statearr_21202_21251[(2)] = null);

(statearr_21202_21251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21192 === (13))){
var inst_21146 = (state_21191[(10)]);
var inst_21148 = cljs.core.chunked_seq_QMARK_.call(null,inst_21146);
var state_21191__$1 = state_21191;
if(inst_21148){
var statearr_21203_21252 = state_21191__$1;
(statearr_21203_21252[(1)] = (16));

} else {
var statearr_21204_21253 = state_21191__$1;
(statearr_21204_21253[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21192 === (22))){
var inst_21176 = (state_21191[(2)]);
var state_21191__$1 = state_21191;
if(cljs.core.truth_(inst_21176)){
var statearr_21205_21254 = state_21191__$1;
(statearr_21205_21254[(1)] = (23));

} else {
var statearr_21206_21255 = state_21191__$1;
(statearr_21206_21255[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21192 === (6))){
var inst_21172 = (state_21191[(11)]);
var inst_21122 = (state_21191[(8)]);
var inst_21170 = (state_21191[(7)]);
var inst_21170__$1 = topic_fn.call(null,inst_21122);
var inst_21171 = cljs.core.deref.call(null,mults);
var inst_21172__$1 = cljs.core.get.call(null,inst_21171,inst_21170__$1);
var state_21191__$1 = (function (){var statearr_21207 = state_21191;
(statearr_21207[(11)] = inst_21172__$1);

(statearr_21207[(7)] = inst_21170__$1);

return statearr_21207;
})();
if(cljs.core.truth_(inst_21172__$1)){
var statearr_21208_21256 = state_21191__$1;
(statearr_21208_21256[(1)] = (19));

} else {
var statearr_21209_21257 = state_21191__$1;
(statearr_21209_21257[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21192 === (25))){
var inst_21181 = (state_21191[(2)]);
var state_21191__$1 = state_21191;
var statearr_21210_21258 = state_21191__$1;
(statearr_21210_21258[(2)] = inst_21181);

(statearr_21210_21258[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21192 === (17))){
var inst_21146 = (state_21191[(10)]);
var inst_21155 = cljs.core.first.call(null,inst_21146);
var inst_21156 = cljs.core.async.muxch_STAR_.call(null,inst_21155);
var inst_21157 = cljs.core.async.close_BANG_.call(null,inst_21156);
var inst_21158 = cljs.core.next.call(null,inst_21146);
var inst_21132 = inst_21158;
var inst_21133 = null;
var inst_21134 = (0);
var inst_21135 = (0);
var state_21191__$1 = (function (){var statearr_21211 = state_21191;
(statearr_21211[(12)] = inst_21132);

(statearr_21211[(13)] = inst_21134);

(statearr_21211[(14)] = inst_21157);

(statearr_21211[(15)] = inst_21133);

(statearr_21211[(16)] = inst_21135);

return statearr_21211;
})();
var statearr_21212_21259 = state_21191__$1;
(statearr_21212_21259[(2)] = null);

(statearr_21212_21259[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21192 === (3))){
var inst_21189 = (state_21191[(2)]);
var state_21191__$1 = state_21191;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21191__$1,inst_21189);
} else {
if((state_val_21192 === (12))){
var inst_21166 = (state_21191[(2)]);
var state_21191__$1 = state_21191;
var statearr_21213_21260 = state_21191__$1;
(statearr_21213_21260[(2)] = inst_21166);

(statearr_21213_21260[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21192 === (2))){
var state_21191__$1 = state_21191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21191__$1,(4),ch);
} else {
if((state_val_21192 === (23))){
var state_21191__$1 = state_21191;
var statearr_21214_21261 = state_21191__$1;
(statearr_21214_21261[(2)] = null);

(statearr_21214_21261[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21192 === (19))){
var inst_21172 = (state_21191[(11)]);
var inst_21122 = (state_21191[(8)]);
var inst_21174 = cljs.core.async.muxch_STAR_.call(null,inst_21172);
var state_21191__$1 = state_21191;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21191__$1,(22),inst_21174,inst_21122);
} else {
if((state_val_21192 === (11))){
var inst_21132 = (state_21191[(12)]);
var inst_21146 = (state_21191[(10)]);
var inst_21146__$1 = cljs.core.seq.call(null,inst_21132);
var state_21191__$1 = (function (){var statearr_21215 = state_21191;
(statearr_21215[(10)] = inst_21146__$1);

return statearr_21215;
})();
if(inst_21146__$1){
var statearr_21216_21262 = state_21191__$1;
(statearr_21216_21262[(1)] = (13));

} else {
var statearr_21217_21263 = state_21191__$1;
(statearr_21217_21263[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21192 === (9))){
var inst_21168 = (state_21191[(2)]);
var state_21191__$1 = state_21191;
var statearr_21218_21264 = state_21191__$1;
(statearr_21218_21264[(2)] = inst_21168);

(statearr_21218_21264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21192 === (5))){
var inst_21129 = cljs.core.deref.call(null,mults);
var inst_21130 = cljs.core.vals.call(null,inst_21129);
var inst_21131 = cljs.core.seq.call(null,inst_21130);
var inst_21132 = inst_21131;
var inst_21133 = null;
var inst_21134 = (0);
var inst_21135 = (0);
var state_21191__$1 = (function (){var statearr_21219 = state_21191;
(statearr_21219[(12)] = inst_21132);

(statearr_21219[(13)] = inst_21134);

(statearr_21219[(15)] = inst_21133);

(statearr_21219[(16)] = inst_21135);

return statearr_21219;
})();
var statearr_21220_21265 = state_21191__$1;
(statearr_21220_21265[(2)] = null);

(statearr_21220_21265[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21192 === (14))){
var state_21191__$1 = state_21191;
var statearr_21224_21266 = state_21191__$1;
(statearr_21224_21266[(2)] = null);

(statearr_21224_21266[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21192 === (16))){
var inst_21146 = (state_21191[(10)]);
var inst_21150 = cljs.core.chunk_first.call(null,inst_21146);
var inst_21151 = cljs.core.chunk_rest.call(null,inst_21146);
var inst_21152 = cljs.core.count.call(null,inst_21150);
var inst_21132 = inst_21151;
var inst_21133 = inst_21150;
var inst_21134 = inst_21152;
var inst_21135 = (0);
var state_21191__$1 = (function (){var statearr_21225 = state_21191;
(statearr_21225[(12)] = inst_21132);

(statearr_21225[(13)] = inst_21134);

(statearr_21225[(15)] = inst_21133);

(statearr_21225[(16)] = inst_21135);

return statearr_21225;
})();
var statearr_21226_21267 = state_21191__$1;
(statearr_21226_21267[(2)] = null);

(statearr_21226_21267[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21192 === (10))){
var inst_21132 = (state_21191[(12)]);
var inst_21134 = (state_21191[(13)]);
var inst_21133 = (state_21191[(15)]);
var inst_21135 = (state_21191[(16)]);
var inst_21140 = cljs.core._nth.call(null,inst_21133,inst_21135);
var inst_21141 = cljs.core.async.muxch_STAR_.call(null,inst_21140);
var inst_21142 = cljs.core.async.close_BANG_.call(null,inst_21141);
var inst_21143 = (inst_21135 + (1));
var tmp21221 = inst_21132;
var tmp21222 = inst_21134;
var tmp21223 = inst_21133;
var inst_21132__$1 = tmp21221;
var inst_21133__$1 = tmp21223;
var inst_21134__$1 = tmp21222;
var inst_21135__$1 = inst_21143;
var state_21191__$1 = (function (){var statearr_21227 = state_21191;
(statearr_21227[(12)] = inst_21132__$1);

(statearr_21227[(13)] = inst_21134__$1);

(statearr_21227[(17)] = inst_21142);

(statearr_21227[(15)] = inst_21133__$1);

(statearr_21227[(16)] = inst_21135__$1);

return statearr_21227;
})();
var statearr_21228_21268 = state_21191__$1;
(statearr_21228_21268[(2)] = null);

(statearr_21228_21268[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21192 === (18))){
var inst_21161 = (state_21191[(2)]);
var state_21191__$1 = state_21191;
var statearr_21229_21269 = state_21191__$1;
(statearr_21229_21269[(2)] = inst_21161);

(statearr_21229_21269[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21192 === (8))){
var inst_21134 = (state_21191[(13)]);
var inst_21135 = (state_21191[(16)]);
var inst_21137 = (inst_21135 < inst_21134);
var inst_21138 = inst_21137;
var state_21191__$1 = state_21191;
if(cljs.core.truth_(inst_21138)){
var statearr_21230_21270 = state_21191__$1;
(statearr_21230_21270[(1)] = (10));

} else {
var statearr_21231_21271 = state_21191__$1;
(statearr_21231_21271[(1)] = (11));

}

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
});})(c__7440__auto___21243,mults,ensure_mult,p))
;
return ((function (switch__7375__auto__,c__7440__auto___21243,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__7376__auto__ = null;
var cljs$core$async$state_machine__7376__auto____0 = (function (){
var statearr_21235 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21235[(0)] = cljs$core$async$state_machine__7376__auto__);

(statearr_21235[(1)] = (1));

return statearr_21235;
});
var cljs$core$async$state_machine__7376__auto____1 = (function (state_21191){
while(true){
var ret_value__7377__auto__ = (function (){try{while(true){
var result__7378__auto__ = switch__7375__auto__.call(null,state_21191);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7378__auto__;
}
break;
}
}catch (e21236){if((e21236 instanceof Object)){
var ex__7379__auto__ = e21236;
var statearr_21237_21272 = state_21191;
(statearr_21237_21272[(5)] = ex__7379__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7377__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21273 = state_21191;
state_21191 = G__21273;
continue;
} else {
return ret_value__7377__auto__;
}
break;
}
});
cljs$core$async$state_machine__7376__auto__ = function(state_21191){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7376__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7376__auto____1.call(this,state_21191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7376__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7376__auto____0;
cljs$core$async$state_machine__7376__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7376__auto____1;
return cljs$core$async$state_machine__7376__auto__;
})()
;})(switch__7375__auto__,c__7440__auto___21243,mults,ensure_mult,p))
})();
var state__7442__auto__ = (function (){var statearr_21238 = f__7441__auto__.call(null);
(statearr_21238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7440__auto___21243);

return statearr_21238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7442__auto__);
});})(c__7440__auto___21243,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args21274 = [];
var len__5972__auto___21277 = arguments.length;
var i__5973__auto___21278 = (0);
while(true){
if((i__5973__auto___21278 < len__5972__auto___21277)){
args21274.push((arguments[i__5973__auto___21278]));

var G__21279 = (i__5973__auto___21278 + (1));
i__5973__auto___21278 = G__21279;
continue;
} else {
}
break;
}

var G__21276 = args21274.length;
switch (G__21276) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21274.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args21281 = [];
var len__5972__auto___21284 = arguments.length;
var i__5973__auto___21285 = (0);
while(true){
if((i__5973__auto___21285 < len__5972__auto___21284)){
args21281.push((arguments[i__5973__auto___21285]));

var G__21286 = (i__5973__auto___21285 + (1));
i__5973__auto___21285 = G__21286;
continue;
} else {
}
break;
}

var G__21283 = args21281.length;
switch (G__21283) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21281.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args21288 = [];
var len__5972__auto___21359 = arguments.length;
var i__5973__auto___21360 = (0);
while(true){
if((i__5973__auto___21360 < len__5972__auto___21359)){
args21288.push((arguments[i__5973__auto___21360]));

var G__21361 = (i__5973__auto___21360 + (1));
i__5973__auto___21360 = G__21361;
continue;
} else {
}
break;
}

var G__21290 = args21288.length;
switch (G__21290) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21288.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__7440__auto___21363 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7440__auto___21363,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7441__auto__ = (function (){var switch__7375__auto__ = ((function (c__7440__auto___21363,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_21329){
var state_val_21330 = (state_21329[(1)]);
if((state_val_21330 === (7))){
var state_21329__$1 = state_21329;
var statearr_21331_21364 = state_21329__$1;
(statearr_21331_21364[(2)] = null);

(statearr_21331_21364[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (1))){
var state_21329__$1 = state_21329;
var statearr_21332_21365 = state_21329__$1;
(statearr_21332_21365[(2)] = null);

(statearr_21332_21365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (4))){
var inst_21293 = (state_21329[(7)]);
var inst_21295 = (inst_21293 < cnt);
var state_21329__$1 = state_21329;
if(cljs.core.truth_(inst_21295)){
var statearr_21333_21366 = state_21329__$1;
(statearr_21333_21366[(1)] = (6));

} else {
var statearr_21334_21367 = state_21329__$1;
(statearr_21334_21367[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (15))){
var inst_21325 = (state_21329[(2)]);
var state_21329__$1 = state_21329;
var statearr_21335_21368 = state_21329__$1;
(statearr_21335_21368[(2)] = inst_21325);

(statearr_21335_21368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (13))){
var inst_21318 = cljs.core.async.close_BANG_.call(null,out);
var state_21329__$1 = state_21329;
var statearr_21336_21369 = state_21329__$1;
(statearr_21336_21369[(2)] = inst_21318);

(statearr_21336_21369[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (6))){
var state_21329__$1 = state_21329;
var statearr_21337_21370 = state_21329__$1;
(statearr_21337_21370[(2)] = null);

(statearr_21337_21370[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (3))){
var inst_21327 = (state_21329[(2)]);
var state_21329__$1 = state_21329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21329__$1,inst_21327);
} else {
if((state_val_21330 === (12))){
var inst_21315 = (state_21329[(8)]);
var inst_21315__$1 = (state_21329[(2)]);
var inst_21316 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21315__$1);
var state_21329__$1 = (function (){var statearr_21338 = state_21329;
(statearr_21338[(8)] = inst_21315__$1);

return statearr_21338;
})();
if(cljs.core.truth_(inst_21316)){
var statearr_21339_21371 = state_21329__$1;
(statearr_21339_21371[(1)] = (13));

} else {
var statearr_21340_21372 = state_21329__$1;
(statearr_21340_21372[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (2))){
var inst_21292 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_21293 = (0);
var state_21329__$1 = (function (){var statearr_21341 = state_21329;
(statearr_21341[(9)] = inst_21292);

(statearr_21341[(7)] = inst_21293);

return statearr_21341;
})();
var statearr_21342_21373 = state_21329__$1;
(statearr_21342_21373[(2)] = null);

(statearr_21342_21373[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (11))){
var inst_21293 = (state_21329[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21329,(10),Object,null,(9));
var inst_21302 = chs__$1.call(null,inst_21293);
var inst_21303 = done.call(null,inst_21293);
var inst_21304 = cljs.core.async.take_BANG_.call(null,inst_21302,inst_21303);
var state_21329__$1 = state_21329;
var statearr_21343_21374 = state_21329__$1;
(statearr_21343_21374[(2)] = inst_21304);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21329__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (9))){
var inst_21293 = (state_21329[(7)]);
var inst_21306 = (state_21329[(2)]);
var inst_21307 = (inst_21293 + (1));
var inst_21293__$1 = inst_21307;
var state_21329__$1 = (function (){var statearr_21344 = state_21329;
(statearr_21344[(7)] = inst_21293__$1);

(statearr_21344[(10)] = inst_21306);

return statearr_21344;
})();
var statearr_21345_21375 = state_21329__$1;
(statearr_21345_21375[(2)] = null);

(statearr_21345_21375[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (5))){
var inst_21313 = (state_21329[(2)]);
var state_21329__$1 = (function (){var statearr_21346 = state_21329;
(statearr_21346[(11)] = inst_21313);

return statearr_21346;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21329__$1,(12),dchan);
} else {
if((state_val_21330 === (14))){
var inst_21315 = (state_21329[(8)]);
var inst_21320 = cljs.core.apply.call(null,f,inst_21315);
var state_21329__$1 = state_21329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21329__$1,(16),out,inst_21320);
} else {
if((state_val_21330 === (16))){
var inst_21322 = (state_21329[(2)]);
var state_21329__$1 = (function (){var statearr_21347 = state_21329;
(statearr_21347[(12)] = inst_21322);

return statearr_21347;
})();
var statearr_21348_21376 = state_21329__$1;
(statearr_21348_21376[(2)] = null);

(statearr_21348_21376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (10))){
var inst_21297 = (state_21329[(2)]);
var inst_21298 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_21329__$1 = (function (){var statearr_21349 = state_21329;
(statearr_21349[(13)] = inst_21297);

return statearr_21349;
})();
var statearr_21350_21377 = state_21329__$1;
(statearr_21350_21377[(2)] = inst_21298);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21329__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (8))){
var inst_21311 = (state_21329[(2)]);
var state_21329__$1 = state_21329;
var statearr_21351_21378 = state_21329__$1;
(statearr_21351_21378[(2)] = inst_21311);

(statearr_21351_21378[(1)] = (5));


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
});})(c__7440__auto___21363,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7375__auto__,c__7440__auto___21363,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__7376__auto__ = null;
var cljs$core$async$state_machine__7376__auto____0 = (function (){
var statearr_21355 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21355[(0)] = cljs$core$async$state_machine__7376__auto__);

(statearr_21355[(1)] = (1));

return statearr_21355;
});
var cljs$core$async$state_machine__7376__auto____1 = (function (state_21329){
while(true){
var ret_value__7377__auto__ = (function (){try{while(true){
var result__7378__auto__ = switch__7375__auto__.call(null,state_21329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7378__auto__;
}
break;
}
}catch (e21356){if((e21356 instanceof Object)){
var ex__7379__auto__ = e21356;
var statearr_21357_21379 = state_21329;
(statearr_21357_21379[(5)] = ex__7379__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7377__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21380 = state_21329;
state_21329 = G__21380;
continue;
} else {
return ret_value__7377__auto__;
}
break;
}
});
cljs$core$async$state_machine__7376__auto__ = function(state_21329){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7376__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7376__auto____1.call(this,state_21329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7376__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7376__auto____0;
cljs$core$async$state_machine__7376__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7376__auto____1;
return cljs$core$async$state_machine__7376__auto__;
})()
;})(switch__7375__auto__,c__7440__auto___21363,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7442__auto__ = (function (){var statearr_21358 = f__7441__auto__.call(null);
(statearr_21358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7440__auto___21363);

return statearr_21358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7442__auto__);
});})(c__7440__auto___21363,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args21382 = [];
var len__5972__auto___21438 = arguments.length;
var i__5973__auto___21439 = (0);
while(true){
if((i__5973__auto___21439 < len__5972__auto___21438)){
args21382.push((arguments[i__5973__auto___21439]));

var G__21440 = (i__5973__auto___21439 + (1));
i__5973__auto___21439 = G__21440;
continue;
} else {
}
break;
}

var G__21384 = args21382.length;
switch (G__21384) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21382.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7440__auto___21442 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7440__auto___21442,out){
return (function (){
var f__7441__auto__ = (function (){var switch__7375__auto__ = ((function (c__7440__auto___21442,out){
return (function (state_21414){
var state_val_21415 = (state_21414[(1)]);
if((state_val_21415 === (7))){
var inst_21393 = (state_21414[(7)]);
var inst_21394 = (state_21414[(8)]);
var inst_21393__$1 = (state_21414[(2)]);
var inst_21394__$1 = cljs.core.nth.call(null,inst_21393__$1,(0),null);
var inst_21395 = cljs.core.nth.call(null,inst_21393__$1,(1),null);
var inst_21396 = (inst_21394__$1 == null);
var state_21414__$1 = (function (){var statearr_21416 = state_21414;
(statearr_21416[(9)] = inst_21395);

(statearr_21416[(7)] = inst_21393__$1);

(statearr_21416[(8)] = inst_21394__$1);

return statearr_21416;
})();
if(cljs.core.truth_(inst_21396)){
var statearr_21417_21443 = state_21414__$1;
(statearr_21417_21443[(1)] = (8));

} else {
var statearr_21418_21444 = state_21414__$1;
(statearr_21418_21444[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21415 === (1))){
var inst_21385 = cljs.core.vec.call(null,chs);
var inst_21386 = inst_21385;
var state_21414__$1 = (function (){var statearr_21419 = state_21414;
(statearr_21419[(10)] = inst_21386);

return statearr_21419;
})();
var statearr_21420_21445 = state_21414__$1;
(statearr_21420_21445[(2)] = null);

(statearr_21420_21445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21415 === (4))){
var inst_21386 = (state_21414[(10)]);
var state_21414__$1 = state_21414;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21414__$1,(7),inst_21386);
} else {
if((state_val_21415 === (6))){
var inst_21410 = (state_21414[(2)]);
var state_21414__$1 = state_21414;
var statearr_21421_21446 = state_21414__$1;
(statearr_21421_21446[(2)] = inst_21410);

(statearr_21421_21446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21415 === (3))){
var inst_21412 = (state_21414[(2)]);
var state_21414__$1 = state_21414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21414__$1,inst_21412);
} else {
if((state_val_21415 === (2))){
var inst_21386 = (state_21414[(10)]);
var inst_21388 = cljs.core.count.call(null,inst_21386);
var inst_21389 = (inst_21388 > (0));
var state_21414__$1 = state_21414;
if(cljs.core.truth_(inst_21389)){
var statearr_21423_21447 = state_21414__$1;
(statearr_21423_21447[(1)] = (4));

} else {
var statearr_21424_21448 = state_21414__$1;
(statearr_21424_21448[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21415 === (11))){
var inst_21386 = (state_21414[(10)]);
var inst_21403 = (state_21414[(2)]);
var tmp21422 = inst_21386;
var inst_21386__$1 = tmp21422;
var state_21414__$1 = (function (){var statearr_21425 = state_21414;
(statearr_21425[(10)] = inst_21386__$1);

(statearr_21425[(11)] = inst_21403);

return statearr_21425;
})();
var statearr_21426_21449 = state_21414__$1;
(statearr_21426_21449[(2)] = null);

(statearr_21426_21449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21415 === (9))){
var inst_21394 = (state_21414[(8)]);
var state_21414__$1 = state_21414;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21414__$1,(11),out,inst_21394);
} else {
if((state_val_21415 === (5))){
var inst_21408 = cljs.core.async.close_BANG_.call(null,out);
var state_21414__$1 = state_21414;
var statearr_21427_21450 = state_21414__$1;
(statearr_21427_21450[(2)] = inst_21408);

(statearr_21427_21450[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21415 === (10))){
var inst_21406 = (state_21414[(2)]);
var state_21414__$1 = state_21414;
var statearr_21428_21451 = state_21414__$1;
(statearr_21428_21451[(2)] = inst_21406);

(statearr_21428_21451[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21415 === (8))){
var inst_21386 = (state_21414[(10)]);
var inst_21395 = (state_21414[(9)]);
var inst_21393 = (state_21414[(7)]);
var inst_21394 = (state_21414[(8)]);
var inst_21398 = (function (){var cs = inst_21386;
var vec__21391 = inst_21393;
var v = inst_21394;
var c = inst_21395;
return ((function (cs,vec__21391,v,c,inst_21386,inst_21395,inst_21393,inst_21394,state_val_21415,c__7440__auto___21442,out){
return (function (p1__21381_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__21381_SHARP_);
});
;})(cs,vec__21391,v,c,inst_21386,inst_21395,inst_21393,inst_21394,state_val_21415,c__7440__auto___21442,out))
})();
var inst_21399 = cljs.core.filterv.call(null,inst_21398,inst_21386);
var inst_21386__$1 = inst_21399;
var state_21414__$1 = (function (){var statearr_21429 = state_21414;
(statearr_21429[(10)] = inst_21386__$1);

return statearr_21429;
})();
var statearr_21430_21452 = state_21414__$1;
(statearr_21430_21452[(2)] = null);

(statearr_21430_21452[(1)] = (2));


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
});})(c__7440__auto___21442,out))
;
return ((function (switch__7375__auto__,c__7440__auto___21442,out){
return (function() {
var cljs$core$async$state_machine__7376__auto__ = null;
var cljs$core$async$state_machine__7376__auto____0 = (function (){
var statearr_21434 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21434[(0)] = cljs$core$async$state_machine__7376__auto__);

(statearr_21434[(1)] = (1));

return statearr_21434;
});
var cljs$core$async$state_machine__7376__auto____1 = (function (state_21414){
while(true){
var ret_value__7377__auto__ = (function (){try{while(true){
var result__7378__auto__ = switch__7375__auto__.call(null,state_21414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7378__auto__;
}
break;
}
}catch (e21435){if((e21435 instanceof Object)){
var ex__7379__auto__ = e21435;
var statearr_21436_21453 = state_21414;
(statearr_21436_21453[(5)] = ex__7379__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7377__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21454 = state_21414;
state_21414 = G__21454;
continue;
} else {
return ret_value__7377__auto__;
}
break;
}
});
cljs$core$async$state_machine__7376__auto__ = function(state_21414){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7376__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7376__auto____1.call(this,state_21414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7376__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7376__auto____0;
cljs$core$async$state_machine__7376__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7376__auto____1;
return cljs$core$async$state_machine__7376__auto__;
})()
;})(switch__7375__auto__,c__7440__auto___21442,out))
})();
var state__7442__auto__ = (function (){var statearr_21437 = f__7441__auto__.call(null);
(statearr_21437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7440__auto___21442);

return statearr_21437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7442__auto__);
});})(c__7440__auto___21442,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args21455 = [];
var len__5972__auto___21504 = arguments.length;
var i__5973__auto___21505 = (0);
while(true){
if((i__5973__auto___21505 < len__5972__auto___21504)){
args21455.push((arguments[i__5973__auto___21505]));

var G__21506 = (i__5973__auto___21505 + (1));
i__5973__auto___21505 = G__21506;
continue;
} else {
}
break;
}

var G__21457 = args21455.length;
switch (G__21457) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21455.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7440__auto___21508 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7440__auto___21508,out){
return (function (){
var f__7441__auto__ = (function (){var switch__7375__auto__ = ((function (c__7440__auto___21508,out){
return (function (state_21481){
var state_val_21482 = (state_21481[(1)]);
if((state_val_21482 === (7))){
var inst_21463 = (state_21481[(7)]);
var inst_21463__$1 = (state_21481[(2)]);
var inst_21464 = (inst_21463__$1 == null);
var inst_21465 = cljs.core.not.call(null,inst_21464);
var state_21481__$1 = (function (){var statearr_21483 = state_21481;
(statearr_21483[(7)] = inst_21463__$1);

return statearr_21483;
})();
if(inst_21465){
var statearr_21484_21509 = state_21481__$1;
(statearr_21484_21509[(1)] = (8));

} else {
var statearr_21485_21510 = state_21481__$1;
(statearr_21485_21510[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21482 === (1))){
var inst_21458 = (0);
var state_21481__$1 = (function (){var statearr_21486 = state_21481;
(statearr_21486[(8)] = inst_21458);

return statearr_21486;
})();
var statearr_21487_21511 = state_21481__$1;
(statearr_21487_21511[(2)] = null);

(statearr_21487_21511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21482 === (4))){
var state_21481__$1 = state_21481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21481__$1,(7),ch);
} else {
if((state_val_21482 === (6))){
var inst_21476 = (state_21481[(2)]);
var state_21481__$1 = state_21481;
var statearr_21488_21512 = state_21481__$1;
(statearr_21488_21512[(2)] = inst_21476);

(statearr_21488_21512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21482 === (3))){
var inst_21478 = (state_21481[(2)]);
var inst_21479 = cljs.core.async.close_BANG_.call(null,out);
var state_21481__$1 = (function (){var statearr_21489 = state_21481;
(statearr_21489[(9)] = inst_21478);

return statearr_21489;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21481__$1,inst_21479);
} else {
if((state_val_21482 === (2))){
var inst_21458 = (state_21481[(8)]);
var inst_21460 = (inst_21458 < n);
var state_21481__$1 = state_21481;
if(cljs.core.truth_(inst_21460)){
var statearr_21490_21513 = state_21481__$1;
(statearr_21490_21513[(1)] = (4));

} else {
var statearr_21491_21514 = state_21481__$1;
(statearr_21491_21514[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21482 === (11))){
var inst_21458 = (state_21481[(8)]);
var inst_21468 = (state_21481[(2)]);
var inst_21469 = (inst_21458 + (1));
var inst_21458__$1 = inst_21469;
var state_21481__$1 = (function (){var statearr_21492 = state_21481;
(statearr_21492[(8)] = inst_21458__$1);

(statearr_21492[(10)] = inst_21468);

return statearr_21492;
})();
var statearr_21493_21515 = state_21481__$1;
(statearr_21493_21515[(2)] = null);

(statearr_21493_21515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21482 === (9))){
var state_21481__$1 = state_21481;
var statearr_21494_21516 = state_21481__$1;
(statearr_21494_21516[(2)] = null);

(statearr_21494_21516[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21482 === (5))){
var state_21481__$1 = state_21481;
var statearr_21495_21517 = state_21481__$1;
(statearr_21495_21517[(2)] = null);

(statearr_21495_21517[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21482 === (10))){
var inst_21473 = (state_21481[(2)]);
var state_21481__$1 = state_21481;
var statearr_21496_21518 = state_21481__$1;
(statearr_21496_21518[(2)] = inst_21473);

(statearr_21496_21518[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21482 === (8))){
var inst_21463 = (state_21481[(7)]);
var state_21481__$1 = state_21481;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21481__$1,(11),out,inst_21463);
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
});})(c__7440__auto___21508,out))
;
return ((function (switch__7375__auto__,c__7440__auto___21508,out){
return (function() {
var cljs$core$async$state_machine__7376__auto__ = null;
var cljs$core$async$state_machine__7376__auto____0 = (function (){
var statearr_21500 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21500[(0)] = cljs$core$async$state_machine__7376__auto__);

(statearr_21500[(1)] = (1));

return statearr_21500;
});
var cljs$core$async$state_machine__7376__auto____1 = (function (state_21481){
while(true){
var ret_value__7377__auto__ = (function (){try{while(true){
var result__7378__auto__ = switch__7375__auto__.call(null,state_21481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7378__auto__;
}
break;
}
}catch (e21501){if((e21501 instanceof Object)){
var ex__7379__auto__ = e21501;
var statearr_21502_21519 = state_21481;
(statearr_21502_21519[(5)] = ex__7379__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7377__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21520 = state_21481;
state_21481 = G__21520;
continue;
} else {
return ret_value__7377__auto__;
}
break;
}
});
cljs$core$async$state_machine__7376__auto__ = function(state_21481){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7376__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7376__auto____1.call(this,state_21481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7376__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7376__auto____0;
cljs$core$async$state_machine__7376__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7376__auto____1;
return cljs$core$async$state_machine__7376__auto__;
})()
;})(switch__7375__auto__,c__7440__auto___21508,out))
})();
var state__7442__auto__ = (function (){var statearr_21503 = f__7441__auto__.call(null);
(statearr_21503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7440__auto___21508);

return statearr_21503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7442__auto__);
});})(c__7440__auto___21508,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21528 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21528 = (function (map_LT_,f,ch,meta21529){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21529 = meta21529;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21530,meta21529__$1){
var self__ = this;
var _21530__$1 = this;
return (new cljs.core.async.t_cljs$core$async21528(self__.map_LT_,self__.f,self__.ch,meta21529__$1));
});

cljs.core.async.t_cljs$core$async21528.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21530){
var self__ = this;
var _21530__$1 = this;
return self__.meta21529;
});

cljs.core.async.t_cljs$core$async21528.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21528.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21528.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21528.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21528.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async21531 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21531 = (function (map_LT_,f,ch,meta21529,_,fn1,meta21532){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21529 = meta21529;
this._ = _;
this.fn1 = fn1;
this.meta21532 = meta21532;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21533,meta21532__$1){
var self__ = this;
var _21533__$1 = this;
return (new cljs.core.async.t_cljs$core$async21531(self__.map_LT_,self__.f,self__.ch,self__.meta21529,self__._,self__.fn1,meta21532__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async21531.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21533){
var self__ = this;
var _21533__$1 = this;
return self__.meta21532;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21531.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21531.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21531.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__21521_SHARP_){
return f1.call(null,(((p1__21521_SHARP_ == null))?null:self__.f.call(null,p1__21521_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async21531.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21529","meta21529",-1221519094,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async21528","cljs.core.async/t_cljs$core$async21528",-969768518,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta21532","meta21532",-1086824379,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21531.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21531.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21531";

cljs.core.async.t_cljs$core$async21531.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5512__auto__,writer__5513__auto__,opt__5514__auto__){
return cljs.core._write.call(null,writer__5513__auto__,"cljs.core.async/t_cljs$core$async21531");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async21531 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21531(map_LT___$1,f__$1,ch__$1,meta21529__$1,___$2,fn1__$1,meta21532){
return (new cljs.core.async.t_cljs$core$async21531(map_LT___$1,f__$1,ch__$1,meta21529__$1,___$2,fn1__$1,meta21532));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async21531(self__.map_LT_,self__.f,self__.ch,self__.meta21529,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4902__auto__ = ret;
if(cljs.core.truth_(and__4902__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4902__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async21528.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21528.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async21528.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21529","meta21529",-1221519094,null)], null);
});

cljs.core.async.t_cljs$core$async21528.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21528.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21528";

cljs.core.async.t_cljs$core$async21528.cljs$lang$ctorPrWriter = (function (this__5512__auto__,writer__5513__auto__,opt__5514__auto__){
return cljs.core._write.call(null,writer__5513__auto__,"cljs.core.async/t_cljs$core$async21528");
});

cljs.core.async.__GT_t_cljs$core$async21528 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21528(map_LT___$1,f__$1,ch__$1,meta21529){
return (new cljs.core.async.t_cljs$core$async21528(map_LT___$1,f__$1,ch__$1,meta21529));
});

}

return (new cljs.core.async.t_cljs$core$async21528(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21537 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21537 = (function (map_GT_,f,ch,meta21538){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta21538 = meta21538;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21539,meta21538__$1){
var self__ = this;
var _21539__$1 = this;
return (new cljs.core.async.t_cljs$core$async21537(self__.map_GT_,self__.f,self__.ch,meta21538__$1));
});

cljs.core.async.t_cljs$core$async21537.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21539){
var self__ = this;
var _21539__$1 = this;
return self__.meta21538;
});

cljs.core.async.t_cljs$core$async21537.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21537.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21537.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21537.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21537.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21537.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async21537.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21538","meta21538",-946574536,null)], null);
});

cljs.core.async.t_cljs$core$async21537.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21537.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21537";

cljs.core.async.t_cljs$core$async21537.cljs$lang$ctorPrWriter = (function (this__5512__auto__,writer__5513__auto__,opt__5514__auto__){
return cljs.core._write.call(null,writer__5513__auto__,"cljs.core.async/t_cljs$core$async21537");
});

cljs.core.async.__GT_t_cljs$core$async21537 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async21537(map_GT___$1,f__$1,ch__$1,meta21538){
return (new cljs.core.async.t_cljs$core$async21537(map_GT___$1,f__$1,ch__$1,meta21538));
});

}

return (new cljs.core.async.t_cljs$core$async21537(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async21543 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21543 = (function (filter_GT_,p,ch,meta21544){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta21544 = meta21544;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21545,meta21544__$1){
var self__ = this;
var _21545__$1 = this;
return (new cljs.core.async.t_cljs$core$async21543(self__.filter_GT_,self__.p,self__.ch,meta21544__$1));
});

cljs.core.async.t_cljs$core$async21543.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21545){
var self__ = this;
var _21545__$1 = this;
return self__.meta21544;
});

cljs.core.async.t_cljs$core$async21543.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21543.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21543.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21543.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21543.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21543.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21543.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async21543.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21544","meta21544",-1068478921,null)], null);
});

cljs.core.async.t_cljs$core$async21543.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21543.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21543";

cljs.core.async.t_cljs$core$async21543.cljs$lang$ctorPrWriter = (function (this__5512__auto__,writer__5513__auto__,opt__5514__auto__){
return cljs.core._write.call(null,writer__5513__auto__,"cljs.core.async/t_cljs$core$async21543");
});

cljs.core.async.__GT_t_cljs$core$async21543 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async21543(filter_GT___$1,p__$1,ch__$1,meta21544){
return (new cljs.core.async.t_cljs$core$async21543(filter_GT___$1,p__$1,ch__$1,meta21544));
});

}

return (new cljs.core.async.t_cljs$core$async21543(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args21546 = [];
var len__5972__auto___21590 = arguments.length;
var i__5973__auto___21591 = (0);
while(true){
if((i__5973__auto___21591 < len__5972__auto___21590)){
args21546.push((arguments[i__5973__auto___21591]));

var G__21592 = (i__5973__auto___21591 + (1));
i__5973__auto___21591 = G__21592;
continue;
} else {
}
break;
}

var G__21548 = args21546.length;
switch (G__21548) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21546.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7440__auto___21594 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7440__auto___21594,out){
return (function (){
var f__7441__auto__ = (function (){var switch__7375__auto__ = ((function (c__7440__auto___21594,out){
return (function (state_21569){
var state_val_21570 = (state_21569[(1)]);
if((state_val_21570 === (7))){
var inst_21565 = (state_21569[(2)]);
var state_21569__$1 = state_21569;
var statearr_21571_21595 = state_21569__$1;
(statearr_21571_21595[(2)] = inst_21565);

(statearr_21571_21595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21570 === (1))){
var state_21569__$1 = state_21569;
var statearr_21572_21596 = state_21569__$1;
(statearr_21572_21596[(2)] = null);

(statearr_21572_21596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21570 === (4))){
var inst_21551 = (state_21569[(7)]);
var inst_21551__$1 = (state_21569[(2)]);
var inst_21552 = (inst_21551__$1 == null);
var state_21569__$1 = (function (){var statearr_21573 = state_21569;
(statearr_21573[(7)] = inst_21551__$1);

return statearr_21573;
})();
if(cljs.core.truth_(inst_21552)){
var statearr_21574_21597 = state_21569__$1;
(statearr_21574_21597[(1)] = (5));

} else {
var statearr_21575_21598 = state_21569__$1;
(statearr_21575_21598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21570 === (6))){
var inst_21551 = (state_21569[(7)]);
var inst_21556 = p.call(null,inst_21551);
var state_21569__$1 = state_21569;
if(cljs.core.truth_(inst_21556)){
var statearr_21576_21599 = state_21569__$1;
(statearr_21576_21599[(1)] = (8));

} else {
var statearr_21577_21600 = state_21569__$1;
(statearr_21577_21600[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21570 === (3))){
var inst_21567 = (state_21569[(2)]);
var state_21569__$1 = state_21569;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21569__$1,inst_21567);
} else {
if((state_val_21570 === (2))){
var state_21569__$1 = state_21569;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21569__$1,(4),ch);
} else {
if((state_val_21570 === (11))){
var inst_21559 = (state_21569[(2)]);
var state_21569__$1 = state_21569;
var statearr_21578_21601 = state_21569__$1;
(statearr_21578_21601[(2)] = inst_21559);

(statearr_21578_21601[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21570 === (9))){
var state_21569__$1 = state_21569;
var statearr_21579_21602 = state_21569__$1;
(statearr_21579_21602[(2)] = null);

(statearr_21579_21602[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21570 === (5))){
var inst_21554 = cljs.core.async.close_BANG_.call(null,out);
var state_21569__$1 = state_21569;
var statearr_21580_21603 = state_21569__$1;
(statearr_21580_21603[(2)] = inst_21554);

(statearr_21580_21603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21570 === (10))){
var inst_21562 = (state_21569[(2)]);
var state_21569__$1 = (function (){var statearr_21581 = state_21569;
(statearr_21581[(8)] = inst_21562);

return statearr_21581;
})();
var statearr_21582_21604 = state_21569__$1;
(statearr_21582_21604[(2)] = null);

(statearr_21582_21604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21570 === (8))){
var inst_21551 = (state_21569[(7)]);
var state_21569__$1 = state_21569;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21569__$1,(11),out,inst_21551);
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
});})(c__7440__auto___21594,out))
;
return ((function (switch__7375__auto__,c__7440__auto___21594,out){
return (function() {
var cljs$core$async$state_machine__7376__auto__ = null;
var cljs$core$async$state_machine__7376__auto____0 = (function (){
var statearr_21586 = [null,null,null,null,null,null,null,null,null];
(statearr_21586[(0)] = cljs$core$async$state_machine__7376__auto__);

(statearr_21586[(1)] = (1));

return statearr_21586;
});
var cljs$core$async$state_machine__7376__auto____1 = (function (state_21569){
while(true){
var ret_value__7377__auto__ = (function (){try{while(true){
var result__7378__auto__ = switch__7375__auto__.call(null,state_21569);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7378__auto__;
}
break;
}
}catch (e21587){if((e21587 instanceof Object)){
var ex__7379__auto__ = e21587;
var statearr_21588_21605 = state_21569;
(statearr_21588_21605[(5)] = ex__7379__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21569);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7377__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21606 = state_21569;
state_21569 = G__21606;
continue;
} else {
return ret_value__7377__auto__;
}
break;
}
});
cljs$core$async$state_machine__7376__auto__ = function(state_21569){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7376__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7376__auto____1.call(this,state_21569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7376__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7376__auto____0;
cljs$core$async$state_machine__7376__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7376__auto____1;
return cljs$core$async$state_machine__7376__auto__;
})()
;})(switch__7375__auto__,c__7440__auto___21594,out))
})();
var state__7442__auto__ = (function (){var statearr_21589 = f__7441__auto__.call(null);
(statearr_21589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7440__auto___21594);

return statearr_21589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7442__auto__);
});})(c__7440__auto___21594,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args21607 = [];
var len__5972__auto___21610 = arguments.length;
var i__5973__auto___21611 = (0);
while(true){
if((i__5973__auto___21611 < len__5972__auto___21610)){
args21607.push((arguments[i__5973__auto___21611]));

var G__21612 = (i__5973__auto___21611 + (1));
i__5973__auto___21611 = G__21612;
continue;
} else {
}
break;
}

var G__21609 = args21607.length;
switch (G__21609) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21607.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__7440__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7440__auto__){
return (function (){
var f__7441__auto__ = (function (){var switch__7375__auto__ = ((function (c__7440__auto__){
return (function (state_21779){
var state_val_21780 = (state_21779[(1)]);
if((state_val_21780 === (7))){
var inst_21775 = (state_21779[(2)]);
var state_21779__$1 = state_21779;
var statearr_21781_21822 = state_21779__$1;
(statearr_21781_21822[(2)] = inst_21775);

(statearr_21781_21822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21780 === (20))){
var inst_21745 = (state_21779[(7)]);
var inst_21756 = (state_21779[(2)]);
var inst_21757 = cljs.core.next.call(null,inst_21745);
var inst_21731 = inst_21757;
var inst_21732 = null;
var inst_21733 = (0);
var inst_21734 = (0);
var state_21779__$1 = (function (){var statearr_21782 = state_21779;
(statearr_21782[(8)] = inst_21756);

(statearr_21782[(9)] = inst_21731);

(statearr_21782[(10)] = inst_21733);

(statearr_21782[(11)] = inst_21732);

(statearr_21782[(12)] = inst_21734);

return statearr_21782;
})();
var statearr_21783_21823 = state_21779__$1;
(statearr_21783_21823[(2)] = null);

(statearr_21783_21823[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21780 === (1))){
var state_21779__$1 = state_21779;
var statearr_21784_21824 = state_21779__$1;
(statearr_21784_21824[(2)] = null);

(statearr_21784_21824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21780 === (4))){
var inst_21720 = (state_21779[(13)]);
var inst_21720__$1 = (state_21779[(2)]);
var inst_21721 = (inst_21720__$1 == null);
var state_21779__$1 = (function (){var statearr_21785 = state_21779;
(statearr_21785[(13)] = inst_21720__$1);

return statearr_21785;
})();
if(cljs.core.truth_(inst_21721)){
var statearr_21786_21825 = state_21779__$1;
(statearr_21786_21825[(1)] = (5));

} else {
var statearr_21787_21826 = state_21779__$1;
(statearr_21787_21826[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21780 === (15))){
var state_21779__$1 = state_21779;
var statearr_21791_21827 = state_21779__$1;
(statearr_21791_21827[(2)] = null);

(statearr_21791_21827[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21780 === (21))){
var state_21779__$1 = state_21779;
var statearr_21792_21828 = state_21779__$1;
(statearr_21792_21828[(2)] = null);

(statearr_21792_21828[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21780 === (13))){
var inst_21731 = (state_21779[(9)]);
var inst_21733 = (state_21779[(10)]);
var inst_21732 = (state_21779[(11)]);
var inst_21734 = (state_21779[(12)]);
var inst_21741 = (state_21779[(2)]);
var inst_21742 = (inst_21734 + (1));
var tmp21788 = inst_21731;
var tmp21789 = inst_21733;
var tmp21790 = inst_21732;
var inst_21731__$1 = tmp21788;
var inst_21732__$1 = tmp21790;
var inst_21733__$1 = tmp21789;
var inst_21734__$1 = inst_21742;
var state_21779__$1 = (function (){var statearr_21793 = state_21779;
(statearr_21793[(9)] = inst_21731__$1);

(statearr_21793[(10)] = inst_21733__$1);

(statearr_21793[(14)] = inst_21741);

(statearr_21793[(11)] = inst_21732__$1);

(statearr_21793[(12)] = inst_21734__$1);

return statearr_21793;
})();
var statearr_21794_21829 = state_21779__$1;
(statearr_21794_21829[(2)] = null);

(statearr_21794_21829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21780 === (22))){
var state_21779__$1 = state_21779;
var statearr_21795_21830 = state_21779__$1;
(statearr_21795_21830[(2)] = null);

(statearr_21795_21830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21780 === (6))){
var inst_21720 = (state_21779[(13)]);
var inst_21729 = f.call(null,inst_21720);
var inst_21730 = cljs.core.seq.call(null,inst_21729);
var inst_21731 = inst_21730;
var inst_21732 = null;
var inst_21733 = (0);
var inst_21734 = (0);
var state_21779__$1 = (function (){var statearr_21796 = state_21779;
(statearr_21796[(9)] = inst_21731);

(statearr_21796[(10)] = inst_21733);

(statearr_21796[(11)] = inst_21732);

(statearr_21796[(12)] = inst_21734);

return statearr_21796;
})();
var statearr_21797_21831 = state_21779__$1;
(statearr_21797_21831[(2)] = null);

(statearr_21797_21831[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21780 === (17))){
var inst_21745 = (state_21779[(7)]);
var inst_21749 = cljs.core.chunk_first.call(null,inst_21745);
var inst_21750 = cljs.core.chunk_rest.call(null,inst_21745);
var inst_21751 = cljs.core.count.call(null,inst_21749);
var inst_21731 = inst_21750;
var inst_21732 = inst_21749;
var inst_21733 = inst_21751;
var inst_21734 = (0);
var state_21779__$1 = (function (){var statearr_21798 = state_21779;
(statearr_21798[(9)] = inst_21731);

(statearr_21798[(10)] = inst_21733);

(statearr_21798[(11)] = inst_21732);

(statearr_21798[(12)] = inst_21734);

return statearr_21798;
})();
var statearr_21799_21832 = state_21779__$1;
(statearr_21799_21832[(2)] = null);

(statearr_21799_21832[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21780 === (3))){
var inst_21777 = (state_21779[(2)]);
var state_21779__$1 = state_21779;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21779__$1,inst_21777);
} else {
if((state_val_21780 === (12))){
var inst_21765 = (state_21779[(2)]);
var state_21779__$1 = state_21779;
var statearr_21800_21833 = state_21779__$1;
(statearr_21800_21833[(2)] = inst_21765);

(statearr_21800_21833[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21780 === (2))){
var state_21779__$1 = state_21779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21779__$1,(4),in$);
} else {
if((state_val_21780 === (23))){
var inst_21773 = (state_21779[(2)]);
var state_21779__$1 = state_21779;
var statearr_21801_21834 = state_21779__$1;
(statearr_21801_21834[(2)] = inst_21773);

(statearr_21801_21834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21780 === (19))){
var inst_21760 = (state_21779[(2)]);
var state_21779__$1 = state_21779;
var statearr_21802_21835 = state_21779__$1;
(statearr_21802_21835[(2)] = inst_21760);

(statearr_21802_21835[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21780 === (11))){
var inst_21731 = (state_21779[(9)]);
var inst_21745 = (state_21779[(7)]);
var inst_21745__$1 = cljs.core.seq.call(null,inst_21731);
var state_21779__$1 = (function (){var statearr_21803 = state_21779;
(statearr_21803[(7)] = inst_21745__$1);

return statearr_21803;
})();
if(inst_21745__$1){
var statearr_21804_21836 = state_21779__$1;
(statearr_21804_21836[(1)] = (14));

} else {
var statearr_21805_21837 = state_21779__$1;
(statearr_21805_21837[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21780 === (9))){
var inst_21767 = (state_21779[(2)]);
var inst_21768 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_21779__$1 = (function (){var statearr_21806 = state_21779;
(statearr_21806[(15)] = inst_21767);

return statearr_21806;
})();
if(cljs.core.truth_(inst_21768)){
var statearr_21807_21838 = state_21779__$1;
(statearr_21807_21838[(1)] = (21));

} else {
var statearr_21808_21839 = state_21779__$1;
(statearr_21808_21839[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21780 === (5))){
var inst_21723 = cljs.core.async.close_BANG_.call(null,out);
var state_21779__$1 = state_21779;
var statearr_21809_21840 = state_21779__$1;
(statearr_21809_21840[(2)] = inst_21723);

(statearr_21809_21840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21780 === (14))){
var inst_21745 = (state_21779[(7)]);
var inst_21747 = cljs.core.chunked_seq_QMARK_.call(null,inst_21745);
var state_21779__$1 = state_21779;
if(inst_21747){
var statearr_21810_21841 = state_21779__$1;
(statearr_21810_21841[(1)] = (17));

} else {
var statearr_21811_21842 = state_21779__$1;
(statearr_21811_21842[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21780 === (16))){
var inst_21763 = (state_21779[(2)]);
var state_21779__$1 = state_21779;
var statearr_21812_21843 = state_21779__$1;
(statearr_21812_21843[(2)] = inst_21763);

(statearr_21812_21843[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21780 === (10))){
var inst_21732 = (state_21779[(11)]);
var inst_21734 = (state_21779[(12)]);
var inst_21739 = cljs.core._nth.call(null,inst_21732,inst_21734);
var state_21779__$1 = state_21779;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21779__$1,(13),out,inst_21739);
} else {
if((state_val_21780 === (18))){
var inst_21745 = (state_21779[(7)]);
var inst_21754 = cljs.core.first.call(null,inst_21745);
var state_21779__$1 = state_21779;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21779__$1,(20),out,inst_21754);
} else {
if((state_val_21780 === (8))){
var inst_21733 = (state_21779[(10)]);
var inst_21734 = (state_21779[(12)]);
var inst_21736 = (inst_21734 < inst_21733);
var inst_21737 = inst_21736;
var state_21779__$1 = state_21779;
if(cljs.core.truth_(inst_21737)){
var statearr_21813_21844 = state_21779__$1;
(statearr_21813_21844[(1)] = (10));

} else {
var statearr_21814_21845 = state_21779__$1;
(statearr_21814_21845[(1)] = (11));

}

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
});})(c__7440__auto__))
;
return ((function (switch__7375__auto__,c__7440__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__7376__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__7376__auto____0 = (function (){
var statearr_21818 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21818[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7376__auto__);

(statearr_21818[(1)] = (1));

return statearr_21818;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7376__auto____1 = (function (state_21779){
while(true){
var ret_value__7377__auto__ = (function (){try{while(true){
var result__7378__auto__ = switch__7375__auto__.call(null,state_21779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7378__auto__;
}
break;
}
}catch (e21819){if((e21819 instanceof Object)){
var ex__7379__auto__ = e21819;
var statearr_21820_21846 = state_21779;
(statearr_21820_21846[(5)] = ex__7379__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7377__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21847 = state_21779;
state_21779 = G__21847;
continue;
} else {
return ret_value__7377__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7376__auto__ = function(state_21779){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7376__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7376__auto____1.call(this,state_21779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__7376__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7376__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7376__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7376__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7376__auto__;
})()
;})(switch__7375__auto__,c__7440__auto__))
})();
var state__7442__auto__ = (function (){var statearr_21821 = f__7441__auto__.call(null);
(statearr_21821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7440__auto__);

return statearr_21821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7442__auto__);
});})(c__7440__auto__))
);

return c__7440__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args21848 = [];
var len__5972__auto___21851 = arguments.length;
var i__5973__auto___21852 = (0);
while(true){
if((i__5973__auto___21852 < len__5972__auto___21851)){
args21848.push((arguments[i__5973__auto___21852]));

var G__21853 = (i__5973__auto___21852 + (1));
i__5973__auto___21852 = G__21853;
continue;
} else {
}
break;
}

var G__21850 = args21848.length;
switch (G__21850) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21848.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args21855 = [];
var len__5972__auto___21858 = arguments.length;
var i__5973__auto___21859 = (0);
while(true){
if((i__5973__auto___21859 < len__5972__auto___21858)){
args21855.push((arguments[i__5973__auto___21859]));

var G__21860 = (i__5973__auto___21859 + (1));
i__5973__auto___21859 = G__21860;
continue;
} else {
}
break;
}

var G__21857 = args21855.length;
switch (G__21857) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21855.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args21862 = [];
var len__5972__auto___21913 = arguments.length;
var i__5973__auto___21914 = (0);
while(true){
if((i__5973__auto___21914 < len__5972__auto___21913)){
args21862.push((arguments[i__5973__auto___21914]));

var G__21915 = (i__5973__auto___21914 + (1));
i__5973__auto___21914 = G__21915;
continue;
} else {
}
break;
}

var G__21864 = args21862.length;
switch (G__21864) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21862.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7440__auto___21917 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7440__auto___21917,out){
return (function (){
var f__7441__auto__ = (function (){var switch__7375__auto__ = ((function (c__7440__auto___21917,out){
return (function (state_21888){
var state_val_21889 = (state_21888[(1)]);
if((state_val_21889 === (7))){
var inst_21883 = (state_21888[(2)]);
var state_21888__$1 = state_21888;
var statearr_21890_21918 = state_21888__$1;
(statearr_21890_21918[(2)] = inst_21883);

(statearr_21890_21918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21889 === (1))){
var inst_21865 = null;
var state_21888__$1 = (function (){var statearr_21891 = state_21888;
(statearr_21891[(7)] = inst_21865);

return statearr_21891;
})();
var statearr_21892_21919 = state_21888__$1;
(statearr_21892_21919[(2)] = null);

(statearr_21892_21919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21889 === (4))){
var inst_21868 = (state_21888[(8)]);
var inst_21868__$1 = (state_21888[(2)]);
var inst_21869 = (inst_21868__$1 == null);
var inst_21870 = cljs.core.not.call(null,inst_21869);
var state_21888__$1 = (function (){var statearr_21893 = state_21888;
(statearr_21893[(8)] = inst_21868__$1);

return statearr_21893;
})();
if(inst_21870){
var statearr_21894_21920 = state_21888__$1;
(statearr_21894_21920[(1)] = (5));

} else {
var statearr_21895_21921 = state_21888__$1;
(statearr_21895_21921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21889 === (6))){
var state_21888__$1 = state_21888;
var statearr_21896_21922 = state_21888__$1;
(statearr_21896_21922[(2)] = null);

(statearr_21896_21922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21889 === (3))){
var inst_21885 = (state_21888[(2)]);
var inst_21886 = cljs.core.async.close_BANG_.call(null,out);
var state_21888__$1 = (function (){var statearr_21897 = state_21888;
(statearr_21897[(9)] = inst_21885);

return statearr_21897;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21888__$1,inst_21886);
} else {
if((state_val_21889 === (2))){
var state_21888__$1 = state_21888;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21888__$1,(4),ch);
} else {
if((state_val_21889 === (11))){
var inst_21868 = (state_21888[(8)]);
var inst_21877 = (state_21888[(2)]);
var inst_21865 = inst_21868;
var state_21888__$1 = (function (){var statearr_21898 = state_21888;
(statearr_21898[(10)] = inst_21877);

(statearr_21898[(7)] = inst_21865);

return statearr_21898;
})();
var statearr_21899_21923 = state_21888__$1;
(statearr_21899_21923[(2)] = null);

(statearr_21899_21923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21889 === (9))){
var inst_21868 = (state_21888[(8)]);
var state_21888__$1 = state_21888;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21888__$1,(11),out,inst_21868);
} else {
if((state_val_21889 === (5))){
var inst_21868 = (state_21888[(8)]);
var inst_21865 = (state_21888[(7)]);
var inst_21872 = cljs.core._EQ_.call(null,inst_21868,inst_21865);
var state_21888__$1 = state_21888;
if(inst_21872){
var statearr_21901_21924 = state_21888__$1;
(statearr_21901_21924[(1)] = (8));

} else {
var statearr_21902_21925 = state_21888__$1;
(statearr_21902_21925[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21889 === (10))){
var inst_21880 = (state_21888[(2)]);
var state_21888__$1 = state_21888;
var statearr_21903_21926 = state_21888__$1;
(statearr_21903_21926[(2)] = inst_21880);

(statearr_21903_21926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21889 === (8))){
var inst_21865 = (state_21888[(7)]);
var tmp21900 = inst_21865;
var inst_21865__$1 = tmp21900;
var state_21888__$1 = (function (){var statearr_21904 = state_21888;
(statearr_21904[(7)] = inst_21865__$1);

return statearr_21904;
})();
var statearr_21905_21927 = state_21888__$1;
(statearr_21905_21927[(2)] = null);

(statearr_21905_21927[(1)] = (2));


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
});})(c__7440__auto___21917,out))
;
return ((function (switch__7375__auto__,c__7440__auto___21917,out){
return (function() {
var cljs$core$async$state_machine__7376__auto__ = null;
var cljs$core$async$state_machine__7376__auto____0 = (function (){
var statearr_21909 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21909[(0)] = cljs$core$async$state_machine__7376__auto__);

(statearr_21909[(1)] = (1));

return statearr_21909;
});
var cljs$core$async$state_machine__7376__auto____1 = (function (state_21888){
while(true){
var ret_value__7377__auto__ = (function (){try{while(true){
var result__7378__auto__ = switch__7375__auto__.call(null,state_21888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7378__auto__;
}
break;
}
}catch (e21910){if((e21910 instanceof Object)){
var ex__7379__auto__ = e21910;
var statearr_21911_21928 = state_21888;
(statearr_21911_21928[(5)] = ex__7379__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7377__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21929 = state_21888;
state_21888 = G__21929;
continue;
} else {
return ret_value__7377__auto__;
}
break;
}
});
cljs$core$async$state_machine__7376__auto__ = function(state_21888){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7376__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7376__auto____1.call(this,state_21888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7376__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7376__auto____0;
cljs$core$async$state_machine__7376__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7376__auto____1;
return cljs$core$async$state_machine__7376__auto__;
})()
;})(switch__7375__auto__,c__7440__auto___21917,out))
})();
var state__7442__auto__ = (function (){var statearr_21912 = f__7441__auto__.call(null);
(statearr_21912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7440__auto___21917);

return statearr_21912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7442__auto__);
});})(c__7440__auto___21917,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args21930 = [];
var len__5972__auto___22000 = arguments.length;
var i__5973__auto___22001 = (0);
while(true){
if((i__5973__auto___22001 < len__5972__auto___22000)){
args21930.push((arguments[i__5973__auto___22001]));

var G__22002 = (i__5973__auto___22001 + (1));
i__5973__auto___22001 = G__22002;
continue;
} else {
}
break;
}

var G__21932 = args21930.length;
switch (G__21932) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21930.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7440__auto___22004 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7440__auto___22004,out){
return (function (){
var f__7441__auto__ = (function (){var switch__7375__auto__ = ((function (c__7440__auto___22004,out){
return (function (state_21970){
var state_val_21971 = (state_21970[(1)]);
if((state_val_21971 === (7))){
var inst_21966 = (state_21970[(2)]);
var state_21970__$1 = state_21970;
var statearr_21972_22005 = state_21970__$1;
(statearr_21972_22005[(2)] = inst_21966);

(statearr_21972_22005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (1))){
var inst_21933 = (new Array(n));
var inst_21934 = inst_21933;
var inst_21935 = (0);
var state_21970__$1 = (function (){var statearr_21973 = state_21970;
(statearr_21973[(7)] = inst_21934);

(statearr_21973[(8)] = inst_21935);

return statearr_21973;
})();
var statearr_21974_22006 = state_21970__$1;
(statearr_21974_22006[(2)] = null);

(statearr_21974_22006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (4))){
var inst_21938 = (state_21970[(9)]);
var inst_21938__$1 = (state_21970[(2)]);
var inst_21939 = (inst_21938__$1 == null);
var inst_21940 = cljs.core.not.call(null,inst_21939);
var state_21970__$1 = (function (){var statearr_21975 = state_21970;
(statearr_21975[(9)] = inst_21938__$1);

return statearr_21975;
})();
if(inst_21940){
var statearr_21976_22007 = state_21970__$1;
(statearr_21976_22007[(1)] = (5));

} else {
var statearr_21977_22008 = state_21970__$1;
(statearr_21977_22008[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (15))){
var inst_21960 = (state_21970[(2)]);
var state_21970__$1 = state_21970;
var statearr_21978_22009 = state_21970__$1;
(statearr_21978_22009[(2)] = inst_21960);

(statearr_21978_22009[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (13))){
var state_21970__$1 = state_21970;
var statearr_21979_22010 = state_21970__$1;
(statearr_21979_22010[(2)] = null);

(statearr_21979_22010[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (6))){
var inst_21935 = (state_21970[(8)]);
var inst_21956 = (inst_21935 > (0));
var state_21970__$1 = state_21970;
if(cljs.core.truth_(inst_21956)){
var statearr_21980_22011 = state_21970__$1;
(statearr_21980_22011[(1)] = (12));

} else {
var statearr_21981_22012 = state_21970__$1;
(statearr_21981_22012[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (3))){
var inst_21968 = (state_21970[(2)]);
var state_21970__$1 = state_21970;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21970__$1,inst_21968);
} else {
if((state_val_21971 === (12))){
var inst_21934 = (state_21970[(7)]);
var inst_21958 = cljs.core.vec.call(null,inst_21934);
var state_21970__$1 = state_21970;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21970__$1,(15),out,inst_21958);
} else {
if((state_val_21971 === (2))){
var state_21970__$1 = state_21970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21970__$1,(4),ch);
} else {
if((state_val_21971 === (11))){
var inst_21950 = (state_21970[(2)]);
var inst_21951 = (new Array(n));
var inst_21934 = inst_21951;
var inst_21935 = (0);
var state_21970__$1 = (function (){var statearr_21982 = state_21970;
(statearr_21982[(7)] = inst_21934);

(statearr_21982[(8)] = inst_21935);

(statearr_21982[(10)] = inst_21950);

return statearr_21982;
})();
var statearr_21983_22013 = state_21970__$1;
(statearr_21983_22013[(2)] = null);

(statearr_21983_22013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (9))){
var inst_21934 = (state_21970[(7)]);
var inst_21948 = cljs.core.vec.call(null,inst_21934);
var state_21970__$1 = state_21970;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21970__$1,(11),out,inst_21948);
} else {
if((state_val_21971 === (5))){
var inst_21934 = (state_21970[(7)]);
var inst_21943 = (state_21970[(11)]);
var inst_21938 = (state_21970[(9)]);
var inst_21935 = (state_21970[(8)]);
var inst_21942 = (inst_21934[inst_21935] = inst_21938);
var inst_21943__$1 = (inst_21935 + (1));
var inst_21944 = (inst_21943__$1 < n);
var state_21970__$1 = (function (){var statearr_21984 = state_21970;
(statearr_21984[(11)] = inst_21943__$1);

(statearr_21984[(12)] = inst_21942);

return statearr_21984;
})();
if(cljs.core.truth_(inst_21944)){
var statearr_21985_22014 = state_21970__$1;
(statearr_21985_22014[(1)] = (8));

} else {
var statearr_21986_22015 = state_21970__$1;
(statearr_21986_22015[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (14))){
var inst_21963 = (state_21970[(2)]);
var inst_21964 = cljs.core.async.close_BANG_.call(null,out);
var state_21970__$1 = (function (){var statearr_21988 = state_21970;
(statearr_21988[(13)] = inst_21963);

return statearr_21988;
})();
var statearr_21989_22016 = state_21970__$1;
(statearr_21989_22016[(2)] = inst_21964);

(statearr_21989_22016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (10))){
var inst_21954 = (state_21970[(2)]);
var state_21970__$1 = state_21970;
var statearr_21990_22017 = state_21970__$1;
(statearr_21990_22017[(2)] = inst_21954);

(statearr_21990_22017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (8))){
var inst_21934 = (state_21970[(7)]);
var inst_21943 = (state_21970[(11)]);
var tmp21987 = inst_21934;
var inst_21934__$1 = tmp21987;
var inst_21935 = inst_21943;
var state_21970__$1 = (function (){var statearr_21991 = state_21970;
(statearr_21991[(7)] = inst_21934__$1);

(statearr_21991[(8)] = inst_21935);

return statearr_21991;
})();
var statearr_21992_22018 = state_21970__$1;
(statearr_21992_22018[(2)] = null);

(statearr_21992_22018[(1)] = (2));


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
});})(c__7440__auto___22004,out))
;
return ((function (switch__7375__auto__,c__7440__auto___22004,out){
return (function() {
var cljs$core$async$state_machine__7376__auto__ = null;
var cljs$core$async$state_machine__7376__auto____0 = (function (){
var statearr_21996 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21996[(0)] = cljs$core$async$state_machine__7376__auto__);

(statearr_21996[(1)] = (1));

return statearr_21996;
});
var cljs$core$async$state_machine__7376__auto____1 = (function (state_21970){
while(true){
var ret_value__7377__auto__ = (function (){try{while(true){
var result__7378__auto__ = switch__7375__auto__.call(null,state_21970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7378__auto__;
}
break;
}
}catch (e21997){if((e21997 instanceof Object)){
var ex__7379__auto__ = e21997;
var statearr_21998_22019 = state_21970;
(statearr_21998_22019[(5)] = ex__7379__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7377__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22020 = state_21970;
state_21970 = G__22020;
continue;
} else {
return ret_value__7377__auto__;
}
break;
}
});
cljs$core$async$state_machine__7376__auto__ = function(state_21970){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7376__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7376__auto____1.call(this,state_21970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7376__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7376__auto____0;
cljs$core$async$state_machine__7376__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7376__auto____1;
return cljs$core$async$state_machine__7376__auto__;
})()
;})(switch__7375__auto__,c__7440__auto___22004,out))
})();
var state__7442__auto__ = (function (){var statearr_21999 = f__7441__auto__.call(null);
(statearr_21999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7440__auto___22004);

return statearr_21999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7442__auto__);
});})(c__7440__auto___22004,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args22021 = [];
var len__5972__auto___22095 = arguments.length;
var i__5973__auto___22096 = (0);
while(true){
if((i__5973__auto___22096 < len__5972__auto___22095)){
args22021.push((arguments[i__5973__auto___22096]));

var G__22097 = (i__5973__auto___22096 + (1));
i__5973__auto___22096 = G__22097;
continue;
} else {
}
break;
}

var G__22023 = args22021.length;
switch (G__22023) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22021.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7440__auto___22099 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7440__auto___22099,out){
return (function (){
var f__7441__auto__ = (function (){var switch__7375__auto__ = ((function (c__7440__auto___22099,out){
return (function (state_22065){
var state_val_22066 = (state_22065[(1)]);
if((state_val_22066 === (7))){
var inst_22061 = (state_22065[(2)]);
var state_22065__$1 = state_22065;
var statearr_22067_22100 = state_22065__$1;
(statearr_22067_22100[(2)] = inst_22061);

(statearr_22067_22100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22066 === (1))){
var inst_22024 = [];
var inst_22025 = inst_22024;
var inst_22026 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_22065__$1 = (function (){var statearr_22068 = state_22065;
(statearr_22068[(7)] = inst_22026);

(statearr_22068[(8)] = inst_22025);

return statearr_22068;
})();
var statearr_22069_22101 = state_22065__$1;
(statearr_22069_22101[(2)] = null);

(statearr_22069_22101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22066 === (4))){
var inst_22029 = (state_22065[(9)]);
var inst_22029__$1 = (state_22065[(2)]);
var inst_22030 = (inst_22029__$1 == null);
var inst_22031 = cljs.core.not.call(null,inst_22030);
var state_22065__$1 = (function (){var statearr_22070 = state_22065;
(statearr_22070[(9)] = inst_22029__$1);

return statearr_22070;
})();
if(inst_22031){
var statearr_22071_22102 = state_22065__$1;
(statearr_22071_22102[(1)] = (5));

} else {
var statearr_22072_22103 = state_22065__$1;
(statearr_22072_22103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22066 === (15))){
var inst_22055 = (state_22065[(2)]);
var state_22065__$1 = state_22065;
var statearr_22073_22104 = state_22065__$1;
(statearr_22073_22104[(2)] = inst_22055);

(statearr_22073_22104[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22066 === (13))){
var state_22065__$1 = state_22065;
var statearr_22074_22105 = state_22065__$1;
(statearr_22074_22105[(2)] = null);

(statearr_22074_22105[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22066 === (6))){
var inst_22025 = (state_22065[(8)]);
var inst_22050 = inst_22025.length;
var inst_22051 = (inst_22050 > (0));
var state_22065__$1 = state_22065;
if(cljs.core.truth_(inst_22051)){
var statearr_22075_22106 = state_22065__$1;
(statearr_22075_22106[(1)] = (12));

} else {
var statearr_22076_22107 = state_22065__$1;
(statearr_22076_22107[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22066 === (3))){
var inst_22063 = (state_22065[(2)]);
var state_22065__$1 = state_22065;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22065__$1,inst_22063);
} else {
if((state_val_22066 === (12))){
var inst_22025 = (state_22065[(8)]);
var inst_22053 = cljs.core.vec.call(null,inst_22025);
var state_22065__$1 = state_22065;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22065__$1,(15),out,inst_22053);
} else {
if((state_val_22066 === (2))){
var state_22065__$1 = state_22065;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22065__$1,(4),ch);
} else {
if((state_val_22066 === (11))){
var inst_22033 = (state_22065[(10)]);
var inst_22029 = (state_22065[(9)]);
var inst_22043 = (state_22065[(2)]);
var inst_22044 = [];
var inst_22045 = inst_22044.push(inst_22029);
var inst_22025 = inst_22044;
var inst_22026 = inst_22033;
var state_22065__$1 = (function (){var statearr_22077 = state_22065;
(statearr_22077[(7)] = inst_22026);

(statearr_22077[(11)] = inst_22043);

(statearr_22077[(8)] = inst_22025);

(statearr_22077[(12)] = inst_22045);

return statearr_22077;
})();
var statearr_22078_22108 = state_22065__$1;
(statearr_22078_22108[(2)] = null);

(statearr_22078_22108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22066 === (9))){
var inst_22025 = (state_22065[(8)]);
var inst_22041 = cljs.core.vec.call(null,inst_22025);
var state_22065__$1 = state_22065;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22065__$1,(11),out,inst_22041);
} else {
if((state_val_22066 === (5))){
var inst_22033 = (state_22065[(10)]);
var inst_22026 = (state_22065[(7)]);
var inst_22029 = (state_22065[(9)]);
var inst_22033__$1 = f.call(null,inst_22029);
var inst_22034 = cljs.core._EQ_.call(null,inst_22033__$1,inst_22026);
var inst_22035 = cljs.core.keyword_identical_QMARK_.call(null,inst_22026,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_22036 = (inst_22034) || (inst_22035);
var state_22065__$1 = (function (){var statearr_22079 = state_22065;
(statearr_22079[(10)] = inst_22033__$1);

return statearr_22079;
})();
if(cljs.core.truth_(inst_22036)){
var statearr_22080_22109 = state_22065__$1;
(statearr_22080_22109[(1)] = (8));

} else {
var statearr_22081_22110 = state_22065__$1;
(statearr_22081_22110[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22066 === (14))){
var inst_22058 = (state_22065[(2)]);
var inst_22059 = cljs.core.async.close_BANG_.call(null,out);
var state_22065__$1 = (function (){var statearr_22083 = state_22065;
(statearr_22083[(13)] = inst_22058);

return statearr_22083;
})();
var statearr_22084_22111 = state_22065__$1;
(statearr_22084_22111[(2)] = inst_22059);

(statearr_22084_22111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22066 === (10))){
var inst_22048 = (state_22065[(2)]);
var state_22065__$1 = state_22065;
var statearr_22085_22112 = state_22065__$1;
(statearr_22085_22112[(2)] = inst_22048);

(statearr_22085_22112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22066 === (8))){
var inst_22033 = (state_22065[(10)]);
var inst_22025 = (state_22065[(8)]);
var inst_22029 = (state_22065[(9)]);
var inst_22038 = inst_22025.push(inst_22029);
var tmp22082 = inst_22025;
var inst_22025__$1 = tmp22082;
var inst_22026 = inst_22033;
var state_22065__$1 = (function (){var statearr_22086 = state_22065;
(statearr_22086[(7)] = inst_22026);

(statearr_22086[(8)] = inst_22025__$1);

(statearr_22086[(14)] = inst_22038);

return statearr_22086;
})();
var statearr_22087_22113 = state_22065__$1;
(statearr_22087_22113[(2)] = null);

(statearr_22087_22113[(1)] = (2));


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
});})(c__7440__auto___22099,out))
;
return ((function (switch__7375__auto__,c__7440__auto___22099,out){
return (function() {
var cljs$core$async$state_machine__7376__auto__ = null;
var cljs$core$async$state_machine__7376__auto____0 = (function (){
var statearr_22091 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22091[(0)] = cljs$core$async$state_machine__7376__auto__);

(statearr_22091[(1)] = (1));

return statearr_22091;
});
var cljs$core$async$state_machine__7376__auto____1 = (function (state_22065){
while(true){
var ret_value__7377__auto__ = (function (){try{while(true){
var result__7378__auto__ = switch__7375__auto__.call(null,state_22065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7378__auto__;
}
break;
}
}catch (e22092){if((e22092 instanceof Object)){
var ex__7379__auto__ = e22092;
var statearr_22093_22114 = state_22065;
(statearr_22093_22114[(5)] = ex__7379__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22092;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7377__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22115 = state_22065;
state_22065 = G__22115;
continue;
} else {
return ret_value__7377__auto__;
}
break;
}
});
cljs$core$async$state_machine__7376__auto__ = function(state_22065){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7376__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7376__auto____1.call(this,state_22065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7376__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7376__auto____0;
cljs$core$async$state_machine__7376__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7376__auto____1;
return cljs$core$async$state_machine__7376__auto__;
})()
;})(switch__7375__auto__,c__7440__auto___22099,out))
})();
var state__7442__auto__ = (function (){var statearr_22094 = f__7441__auto__.call(null);
(statearr_22094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7440__auto___22099);

return statearr_22094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7442__auto__);
});})(c__7440__auto___22099,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map
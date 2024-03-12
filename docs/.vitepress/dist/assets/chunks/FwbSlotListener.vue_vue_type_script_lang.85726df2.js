import{f as X}from"./flatten.a0535777.js";import{i as d}from"./isArray.513c67aa.js";import{d as J}from"./framework.3f630664.js";var Y=typeof global=="object"&&global&&global.Object===Object&&global;const Z=Y;var q=typeof self=="object"&&self&&self.Object===Object&&self,V=Z||q||Function("return this")();const P=V;var Q=P.Symbol;const u=Q;var R=Object.prototype,W=R.hasOwnProperty,k=R.toString,h=u?u.toStringTag:void 0;function tt(t){var n=W.call(t,h),e=t[h];try{t[h]=void 0;var r=!0}catch{}var o=k.call(t);return r&&(n?t[h]=e:delete t[h]),o}var nt=Object.prototype,et=nt.toString;function rt(t){return et.call(t)}var ot="[object Null]",it="[object Undefined]",I=u?u.toStringTag:void 0;function C(t){return t==null?t===void 0?it:ot:I&&I in Object(t)?tt(t):rt(t)}function T(t){return t!=null&&typeof t=="object"}var at="[object Symbol]";function w(t){return typeof t=="symbol"||T(t)&&C(t)==at}function st(t,n){for(var e=-1,r=t==null?0:t.length,o=Array(r);++e<r;)o[e]=n(t[e],e,t);return o}var ut=1/0,F=u?u.prototype:void 0,A=F?F.toString:void 0;function G(t){if(typeof t=="string")return t;if(d(t))return st(t,G)+"";if(w(t))return A?A.call(t):"";var n=t+"";return n=="0"&&1/t==-ut?"-0":n}function v(t){var n=typeof t;return t!=null&&(n=="object"||n=="function")}function ct(t){return t}var lt="[object AsyncFunction]",ft="[object Function]",pt="[object GeneratorFunction]",ht="[object Proxy]";function gt(t){if(!v(t))return!1;var n=C(t);return n==ft||n==pt||n==lt||n==ht}var dt=P["__core-js_shared__"];const $=dt;var H=function(){var t=/[^.]+$/.exec($&&$.keys&&$.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function yt(t){return!!H&&H in t}var vt=Function.prototype,bt=vt.toString;function mt(t){if(t!=null){try{return bt.call(t)}catch{}try{return t+""}catch{}}return""}var _t=/[\\^$.*+?()[\]{}|]/g,St=/^\[object .+?Constructor\]$/,Ot=Function.prototype,$t=Object.prototype,Pt=Ot.toString,Ct=$t.hasOwnProperty,Tt=RegExp("^"+Pt.call(Ct).replace(_t,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function wt(t){if(!v(t)||yt(t))return!1;var n=gt(t)?Tt:St;return n.test(mt(t))}function Et(t,n){return t==null?void 0:t[n]}function E(t,n){var e=Et(t,n);return wt(e)?e:void 0}function Mt(t,n,e){switch(e.length){case 0:return t.call(n);case 1:return t.call(n,e[0]);case 2:return t.call(n,e[0],e[1]);case 3:return t.call(n,e[0],e[1],e[2])}return t.apply(n,e)}var xt=800,It=16,Ft=Date.now;function At(t){var n=0,e=0;return function(){var r=Ft(),o=It-(r-e);if(e=r,o>0){if(++n>=xt)return arguments[0]}else n=0;return t.apply(void 0,arguments)}}function Ht(t){return function(){return t}}var jt=function(){try{var t=E(Object,"defineProperty");return t({},"",{}),t}catch{}}();const b=jt;var zt=b?function(t,n){return b(t,"toString",{configurable:!0,enumerable:!1,value:Ht(n),writable:!0})}:ct;const Dt=zt;var Rt=At(Dt);const Gt=Rt;var Nt=9007199254740991,Bt=/^(?:0|[1-9]\d*)$/;function N(t,n){var e=typeof t;return n=n??Nt,!!n&&(e=="number"||e!="symbol"&&Bt.test(t))&&t>-1&&t%1==0&&t<n}function Lt(t,n,e){n=="__proto__"&&b?b(t,n,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[n]=e}function B(t,n){return t===n||t!==t&&n!==n}var Ut=Object.prototype,Kt=Ut.hasOwnProperty;function Xt(t,n,e){var r=t[n];(!(Kt.call(t,n)&&B(r,e))||e===void 0&&!(n in t))&&Lt(t,n,e)}var j=Math.max;function Jt(t,n,e){return n=j(n===void 0?t.length-1:n,0),function(){for(var r=arguments,o=-1,s=j(r.length-n,0),i=Array(s);++o<s;)i[o]=r[n+o];o=-1;for(var a=Array(n+1);++o<n;)a[o]=r[o];return a[n]=e(i),Mt(t,this,a)}}var Yt=9007199254740991;function Zt(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=Yt}var qt="[object Arguments]";function z(t){return T(t)&&C(t)==qt}var L=Object.prototype,Vt=L.hasOwnProperty,Qt=L.propertyIsEnumerable,Wt=z(function(){return arguments}())?z:function(t){return T(t)&&Vt.call(t,"callee")&&!Qt.call(t,"callee")};const U=Wt;var kt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,tn=/^\w*$/;function nn(t,n){if(d(t))return!1;var e=typeof t;return e=="number"||e=="symbol"||e=="boolean"||t==null||w(t)?!0:tn.test(t)||!kt.test(t)||n!=null&&t in Object(n)}var en=E(Object,"create");const g=en;function rn(){this.__data__=g?g(null):{},this.size=0}function on(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n}var an="__lodash_hash_undefined__",sn=Object.prototype,un=sn.hasOwnProperty;function cn(t){var n=this.__data__;if(g){var e=n[t];return e===an?void 0:e}return un.call(n,t)?n[t]:void 0}var ln=Object.prototype,fn=ln.hasOwnProperty;function pn(t){var n=this.__data__;return g?n[t]!==void 0:fn.call(n,t)}var hn="__lodash_hash_undefined__";function gn(t,n){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=g&&n===void 0?hn:n,this}function l(t){var n=-1,e=t==null?0:t.length;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}l.prototype.clear=rn;l.prototype.delete=on;l.prototype.get=cn;l.prototype.has=pn;l.prototype.set=gn;function dn(){this.__data__=[],this.size=0}function m(t,n){for(var e=t.length;e--;)if(B(t[e][0],n))return e;return-1}var yn=Array.prototype,vn=yn.splice;function bn(t){var n=this.__data__,e=m(n,t);if(e<0)return!1;var r=n.length-1;return e==r?n.pop():vn.call(n,e,1),--this.size,!0}function mn(t){var n=this.__data__,e=m(n,t);return e<0?void 0:n[e][1]}function _n(t){return m(this.__data__,t)>-1}function Sn(t,n){var e=this.__data__,r=m(e,t);return r<0?(++this.size,e.push([t,n])):e[r][1]=n,this}function p(t){var n=-1,e=t==null?0:t.length;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}p.prototype.clear=dn;p.prototype.delete=bn;p.prototype.get=mn;p.prototype.has=_n;p.prototype.set=Sn;var On=E(P,"Map");const $n=On;function Pn(){this.size=0,this.__data__={hash:new l,map:new($n||p),string:new l}}function Cn(t){var n=typeof t;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?t!=="__proto__":t===null}function _(t,n){var e=t.__data__;return Cn(n)?e[typeof n=="string"?"string":"hash"]:e.map}function Tn(t){var n=_(this,t).delete(t);return this.size-=n?1:0,n}function wn(t){return _(this,t).get(t)}function En(t){return _(this,t).has(t)}function Mn(t,n){var e=_(this,t),r=e.size;return e.set(t,n),this.size+=e.size==r?0:1,this}function f(t){var n=-1,e=t==null?0:t.length;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}f.prototype.clear=Pn;f.prototype.delete=Tn;f.prototype.get=wn;f.prototype.has=En;f.prototype.set=Mn;var xn="Expected a function";function M(t,n){if(typeof t!="function"||n!=null&&typeof n!="function")throw new TypeError(xn);var e=function(){var r=arguments,o=n?n.apply(this,r):r[0],s=e.cache;if(s.has(o))return s.get(o);var i=t.apply(this,r);return e.cache=s.set(o,i)||s,i};return e.cache=new(M.Cache||f),e}M.Cache=f;var In=500;function Fn(t){var n=M(t,function(r){return e.size===In&&e.clear(),r}),e=n.cache;return n}var An=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Hn=/\\(\\)?/g,jn=Fn(function(t){var n=[];return t.charCodeAt(0)===46&&n.push(""),t.replace(An,function(e,r,o,s){n.push(o?s.replace(Hn,"$1"):r||e)}),n});const zn=jn;function Dn(t){return t==null?"":G(t)}function S(t,n){return d(t)?t:nn(t,n)?[t]:zn(Dn(t))}var Rn=1/0;function x(t){if(typeof t=="string"||w(t))return t;var n=t+"";return n=="0"&&1/t==-Rn?"-0":n}function Gn(t,n){n=S(n,t);for(var e=0,r=n.length;t!=null&&e<r;)t=t[x(n[e++])];return e&&e==r?t:void 0}function Nn(t,n){for(var e=-1,r=n.length,o=t.length;++e<r;)t[o+e]=n[e];return t}var D=u?u.isConcatSpreadable:void 0;function Bn(t){return d(t)||U(t)||!!(D&&t&&t[D])}function K(t,n,e,r,o){var s=-1,i=t.length;for(e||(e=Bn),o||(o=[]);++s<i;){var a=t[s];n>0&&e(a)?n>1?K(a,n-1,e,r,o):Nn(o,a):r||(o[o.length]=a)}return o}function Ln(t){var n=t==null?0:t.length;return n?K(t,1):[]}function Un(t){return Gt(Jt(t,void 0,Ln),t+"")}function Kn(t,n){return t!=null&&n in Object(t)}function Xn(t,n,e){n=S(n,t);for(var r=-1,o=n.length,s=!1;++r<o;){var i=x(n[r]);if(!(s=t!=null&&e(t,i)))break;t=t[i]}return s||++r!=o?s:(o=t==null?0:t.length,!!o&&Zt(o)&&N(i,o)&&(d(t)||U(t)))}function Jn(t,n){return t!=null&&Xn(t,n,Kn)}function Yn(t,n,e,r){if(!v(t))return t;n=S(n,t);for(var o=-1,s=n.length,i=s-1,a=t;a!=null&&++o<s;){var c=x(n[o]),y=e;if(c==="__proto__"||c==="constructor"||c==="prototype")return t;if(o!=i){var O=a[c];y=r?r(O,c,a):void 0,y===void 0&&(y=v(O)?O:N(n[o+1])?[]:{})}Xt(a,c,y),a=a[c]}return t}function Zn(t,n,e){for(var r=-1,o=n.length,s={};++r<o;){var i=n[r],a=Gn(t,i);e(a,i)&&Yn(s,S(i,t),a)}return s}function qn(t,n){return Zn(t,n,function(e,r){return Jn(t,r)})}var Vn=Un(function(t,n){return t==null?{}:qn(t,n)});const Qn=Vn;function Wn(t,n="default",e=void 0){const r=t[n];if(!r)return console.warn("getFirstSlotVNode",`slot[${n}] is empty`),null;const o=X(r(e));return o.length===1?o[0]:(console.warn("getFirstSlotVNode",`slot[${n}] should have exactly one child`),null)}const kn={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"]};function te(t,n){Object.entries(kn).forEach(([,e])=>{e.forEach(r=>{t.props?t.props=Object.assign({},t.props):t.props={};const o=t.props[r],s=n[r];o?t.props[r]=(...i)=>{o(...i),s(...i)}:t.props[r]=s})})}const oe=J({name:"SlotListener",props:{trigger:{type:String,default:"click"}},emits:["click","focus","blur","mouseenter","mouseleave"],setup(t,{emit:n}){return{handleClick:a=>{n("click",a)},handleBlur:a=>{n("blur",a)},handleFocus:a=>{n("focus",a)},handleMouseLeave:a=>{n("mouseleave",a)},handleMouseEnter:a=>{n("mouseenter",a)}}},render(){const{$slots:t}=this,n={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur},e=Wn(t,"default"),r=[n];return e!=null&&e.props&&r.push(Qn(e.props,"onClick","onMouseenter","onMouseleave","onFocus","onBlur")),e&&te(e,{onBlur:s=>{r.forEach(i=>{var a;(a=i==null?void 0:i.onBlur)==null||a.call(i,s)})},onFocus:s=>{r.forEach(i=>{var a;(a=i==null?void 0:i.onFocus)==null||a.call(i,s)})},onClick:s=>{r.forEach(i=>{var a;(a=i==null?void 0:i.onClick)==null||a.call(i,s)})},onMouseenter:s=>{r.forEach(i=>{var a;(a=i==null?void 0:i.onMouseenter)==null||a.call(i,s)})},onMouseleave:s=>{r.forEach(i=>{var a;(a=i==null?void 0:i.onMouseleave)==null||a.call(i,s)})}}),e}});export{oe as _};

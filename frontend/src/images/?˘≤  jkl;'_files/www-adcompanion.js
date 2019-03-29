(function(){var k;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function ba(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
var ca="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},da;
if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var ea;a:{var fa={Pa:!0},ha={};try{ha.__proto__=fa;ea=ha.Pa;break a}catch(a){}ea=!1}da=ea?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ia=da,ja="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ka="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function la(a,b){if(b){for(var c=ka,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ja(c,d,{configurable:!0,writable:!0,value:f})}}
function ma(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
la("String.prototype.startsWith",function(a){return a?a:function(a,c){var b=ma(this,a,"startsWith");a+="";for(var e=b.length,f=a.length,g=Math.max(0,Math.min(c|0,b.length)),h=0;h<f&&g<e;)if(b[g++]!=a[h++])return!1;return h>=f}});
la("String.prototype.endsWith",function(a){return a?a:function(a,c){var b=ma(this,a,"endsWith");a+="";void 0===c&&(c=b.length);for(var e=Math.max(0,Math.min(c|0,b.length)),f=a.length;0<f&&0<e;)if(b[--e]!=a[--f])return!1;return 0>=f}});
function na(){na=function(){};
ka.Symbol||(ka.Symbol=oa)}
var oa=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
function pa(){na();var a=ka.Symbol.iterator;a||(a=ka.Symbol.iterator=ka.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ja(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return qa(aa(this))}});
pa=function(){}}
function qa(a){pa();a={next:a};a[ka.Symbol.iterator]=function(){return this};
return a}
function ra(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ta="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ra(d,e)&&(a[e]=d[e])}return a};
la("Object.assign",function(a){return a||ta});
var ua=function(){function a(){function a(){}
Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(a,d,e){a=b(a,d);e&&Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=ca(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}}();
la("Reflect.construct",function(){return ua});
la("WeakMap",function(a){function b(a){this.b=(g+=Math.random()+1).toString();if(a){a=ba(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}
function c(){}
function d(a){ra(a,f)||ja(a,f,{value:new c})}
function e(a){var b=Object[a];b&&(Object[a]=function(a){if(a instanceof c)return a;d(a);return b(a)})}
if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d["delete"](b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(p){return!1}}())return a;
var f="$jscomp_hidden_"+Math.random();e("freeze");e("preventExtensions");e("seal");var g=0;b.prototype.set=function(a,b){d(a);if(!ra(a,f))throw Error("WeakMap key fail: "+a);a[f][this.b]=b;return this};
b.prototype.get=function(a){return ra(a,f)?a[f][this.b]:void 0};
b.prototype.has=function(a){return ra(a,f)&&ra(a[f],this.b)};
b.prototype["delete"]=function(a){return ra(a,f)&&ra(a[f],this.b)?delete a[f][this.b]:!1};
return b});
la("Map",function(a){function b(){var a={};return a.previous=a.next=a.head=a}
function c(a,b){var c=a.b;return qa(function(){if(c){for(;c.head!=a.b;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}
function d(a,b){var c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++g,f.set(b,c)):c="p_"+b;var d=a.f[c];if(d&&ra(a.f,c))for(var e=0;e<d.length;e++){var h=d[e];if(b!==b&&h.key!==h.key||b===h.key)return{id:c,list:d,index:e,v:h}}return{id:c,list:d,index:-1,v:void 0}}
function e(a){this.f={};this.b=b();this.size=0;if(a){a=ba(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(ba([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(A){return!1}}())return a;
pa();var f=new WeakMap;e.prototype.set=function(a,b){a=0===a?0:a;var c=d(this,a);c.list||(c.list=this.f[c.id]=[]);c.v?c.v.value=b:(c.v={next:this.b,previous:this.b.previous,head:this.b,key:a,value:b},c.list.push(c.v),this.b.previous.next=c.v,this.b.previous=c.v,this.size++);return this};
e.prototype["delete"]=function(a){a=d(this,a);return a.v&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.f[a.id],a.v.previous.next=a.v.next,a.v.next.previous=a.v.previous,a.v.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.f={};this.b=this.b.previous=b();this.size=0};
e.prototype.has=function(a){return!!d(this,a).v};
e.prototype.get=function(a){return(a=d(this,a).v)&&a.value};
e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};
e.prototype.keys=function(){return c(this,function(a){return a.key})};
e.prototype.values=function(){return c(this,function(a){return a.value})};
e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
la("Set",function(a){function b(a){this.b=new Map;if(a){a=ba(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.b.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),d=new a(ba([b]));if(!d.has(b)||1!=d.size||d.add(b)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=b||f.value[1]!=b)return!1;f=e.next();return f.done||f.value[0]==b||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
pa();b.prototype.add=function(a){a=0===a?0:a;this.b.set(a,a);this.size=this.b.size;return this};
b.prototype["delete"]=function(a){a=this.b["delete"](a);this.size=this.b.size;return a};
b.prototype.clear=function(){this.b.clear();this.size=0};
b.prototype.has=function(a){return this.b.has(a)};
b.prototype.entries=function(){return this.b.entries()};
b.prototype.values=function(){return this.b.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(a,b){var c=this;this.b.forEach(function(d){return a.call(b,d,d,c)})};
return b});
la("Object.is",function(a){return a?a:function(a,c){return a===c?0!==a||1/a===1/c:a!==a&&c!==c}});
la("String.prototype.includes",function(a){return a?a:function(a,c){return-1!==ma(this,a,"includes").indexOf(a,c||0)}});
var n=this;function q(a){return void 0!==a}
function r(a){return"string"==typeof a}
function va(a){return"number"==typeof a}
function u(a,b){for(var c=a.split("."),d=b||n,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function wa(){}
function xa(a){a.Z=void 0;a.m=function(){return a.Z?a.Z:a.Z=new a}}
function ya(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function za(a){return"array"==ya(a)}
function Aa(a){var b=ya(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ba(a){return"function"==ya(a)}
function Ca(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Da(a){return a[Ea]||(a[Ea]=++Fa)}
var Ea="closure_uid_"+(1E9*Math.random()>>>0),Fa=0;function Ga(a,b,c){return a.call.apply(a.bind,arguments)}
function Ha(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function v(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v=Ga:v=Ha;return v.apply(null,arguments)}
function Ia(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var Ja=Date.now||function(){return+new Date};
function w(a,b){var c=a.split("."),d=n;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&q(b)?d[e]=b:d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}}
function x(a,b){function c(){}
c.prototype=b.prototype;a.o=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.mc=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;var y=window;function Ka(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ka);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
x(Ka,Error);Ka.prototype.name="CustomError";var La;var Ma=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(r(a))return r(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},z=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Na=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=r(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var l=g[h];
b.call(c,l,h,a)&&(e[f++]=l)}return e},Oa=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=r(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Pa=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
z(a,function(c,f){d=b.call(void 0,d,c,f,a)});
return d},Qa=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=r(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;
return!1};
function Ra(a,b){a:{var c=a.length;for(var d=r(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:r(a)?a.charAt(c):a[c]}
function Sa(a,b){return 0<=Ma(a,b)}
function Ta(a){return Array.prototype.concat.apply([],arguments)}
function Ua(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Va(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Aa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function Wa(a,b,c,d){return Array.prototype.splice.apply(a,Xa(arguments,1))}
function Xa(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function Ya(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if(za(d))for(var e=0;e<d.length;e+=8192)for(var f=Ya.apply(null,Xa(d,e,e+8192)),g=0;g<f.length;g++)b.push(f[g]);else b.push(d)}return b}
;var Za=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function $a(a,b){if(b)a=a.replace(ab,"&amp;").replace(bb,"&lt;").replace(cb,"&gt;").replace(db,"&quot;").replace(eb,"&#39;").replace(fb,"&#0;");else{if(!gb.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(ab,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(bb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(cb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(db,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(eb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(fb,"&#0;"))}return a}
var ab=/&/g,bb=/</g,cb=/>/g,db=/"/g,eb=/'/g,fb=/\x00/g,gb=/[\x00&<>"']/;
function hb(a,b){for(var c=0,d=Za(String(a)).split("."),e=Za(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var h=d[g]||"",l=e[g]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];if(0==h[0].length&&0==l[0].length)break;c=ib(0==h[1].length?0:parseInt(h[1],10),0==l[1].length?0:parseInt(l[1],10))||ib(0==h[2].length,0==l[2].length)||ib(h[2],l[2]);h=h[3];l=l[3]}while(0==c)}return c}
function ib(a,b){return a<b?-1:a>b?1:0}
;function jb(a){return a=$a(a,void 0)}
var kb=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};
function lb(a){a=q(void 0)?a.toFixed(void 0):String(a);var b=a.indexOf(".");-1==b&&(b=a.length);return kb("0",Math.max(0,2-b))+a}
function mb(a){return String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()})}
function nb(a){var b=r(void 0)?"undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"):"\\s";return a.replace(new RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(a,b,e){return b+e.toUpperCase()})}
;var ob;a:{var pb=n.navigator;if(pb){var qb=pb.userAgent;if(qb){ob=qb;break a}}ob=""}function B(a){return-1!=ob.indexOf(a)}
;function rb(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function sb(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function tb(a){var b=ub,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function vb(a){for(var b in a)return!1;return!0}
function wb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0}
function xb(a){var b=ya(a);if("object"==b||"array"==b){if(Ba(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=xb(a[c]);return b}return a}
var yb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function zb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<yb.length;f++)c=yb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Ab(){return B("Firefox")||B("FxiOS")}
function Bb(){return B("Safari")&&!(Cb()||B("Coast")||B("Opera")||B("Edge")||Ab()||B("Silk")||B("Android"))}
function Cb(){return(B("Chrome")||B("CriOS"))&&!B("Edge")}
function Db(){return B("Android")&&!(Cb()||Ab()||B("Opera")||B("Silk"))}
;function Eb(){return B("iPhone")&&!B("iPod")&&!B("iPad")}
function Fb(){return Eb()||B("iPad")||B("iPod")}
;function Gb(a){Gb[" "](a);return a}
Gb[" "]=wa;function Hb(a,b){var c=Ib;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var Jb=B("Opera"),C=B("Trident")||B("MSIE"),Kb=B("Edge"),Lb=Kb||C,Mb=B("Gecko")&&!(-1!=ob.toLowerCase().indexOf("webkit")&&!B("Edge"))&&!(B("Trident")||B("MSIE"))&&!B("Edge"),Nb=-1!=ob.toLowerCase().indexOf("webkit")&&!B("Edge"),Ob=B("Macintosh"),Pb=B("Windows"),Qb=B("Android"),Rb=Eb(),Sb=B("iPad"),Tb=B("iPod"),Ub=Fb();function Vb(){var a=n.document;return a?a.documentMode:void 0}
var Wb;a:{var Xb="",Yb=function(){var a=ob;if(Mb)return/rv:([^\);]+)(\)|;)/.exec(a);if(Kb)return/Edge\/([\d\.]+)/.exec(a);if(C)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Nb)return/WebKit\/(\S+)/.exec(a);if(Jb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Yb&&(Xb=Yb?Yb[1]:"");if(C){var Zb=Vb();if(null!=Zb&&Zb>parseFloat(Xb)){Wb=String(Zb);break a}}Wb=Xb}var $b=Wb,Ib={};function ac(a){return Hb(a,function(){return 0<=hb($b,a)})}
var bc;var cc=n.document;bc=cc&&C?Vb()||("CSS1Compat"==cc.compatMode?parseInt($b,10):5):void 0;var dc=Ab(),ec=Eb()||B("iPod"),fc=B("iPad"),gc=Db(),hc=Cb(),ic=Bb()&&!Fb();var jc=null,kc=null;function lc(a){this.b=a||{cookie:""}}
k=lc.prototype;k.isEnabled=function(){return navigator.cookieEnabled};
k.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');q(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Ja()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
k.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Za(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
k.remove=function(a,b,c){var d=q(this.get(a));this.set(a,"",0,b,c);return d};
k.isEmpty=function(){return!this.b.cookie};
k.clear=function(){for(var a=(this.b.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Za(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var mc=new lc("undefined"==typeof document?null:document);function nc(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var oc=!C||9<=Number(bc),pc=!Mb&&!C||C&&9<=Number(bc)||Mb&&ac("1.9.1"),qc=C&&!ac("9");function rc(){this.b="";this.f=sc}
rc.prototype.N=!0;rc.prototype.M=function(){return this.b};
rc.prototype.na=!0;rc.prototype.ja=function(){return 1};
function tc(a){if(a instanceof rc&&a.constructor===rc&&a.f===sc)return a.b;ya(a);return"type_error:SafeUrl"}
var uc=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function vc(a){if(a instanceof rc)return a;a="object"==typeof a&&a.N?a.M():String(a);uc.test(a)||(a="about:invalid#zClosurez");return wc(a)}
var sc={};function wc(a){var b=new rc;b.b=a;return b}
wc("about:blank");function xc(){this.b="";this.g=yc;this.f=null}
xc.prototype.na=!0;xc.prototype.ja=function(){return this.f};
xc.prototype.N=!0;xc.prototype.M=function(){return this.b};
function zc(a){if(a instanceof xc&&a.constructor===xc&&a.g===yc)return a.b;ya(a);return"type_error:SafeHtml"}
var yc={};function Ac(a,b){var c=new xc;c.b=a;c.f=b;return c}
Ac("<!DOCTYPE html>",0);Ac("",0);Ac("<br>",0);var Bc=nc(function(){var a=document.createElement("div");a.innerHTML="<div><div></div></div>";var b=a.firstChild.firstChild;a.innerHTML="";return!b.parentElement});
function Cc(a,b){if(Bc())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=b}
;function D(a,b){this.x=q(a)?a:0;this.y=q(b)?b:0}
k=D.prototype;k.clone=function(){return new D(this.x,this.y)};
k.equals=function(a){return a instanceof D&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
function Dc(a,b){return new D(a.x-b.x,a.y-b.y)}
k.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
k.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
k.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Ec(a,b){this.width=a;this.height=b}
k=Ec.prototype;k.clone=function(){return new Ec(this.width,this.height)};
k.aspectRatio=function(){return this.width/this.height};
k.isEmpty=function(){return!(this.width*this.height)};
k.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
k.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
k.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Fc(a){return a?new Gc(Hc(a)):La||(La=new Gc)}
function E(a){return r(a)?document.getElementById(a):a}
function Ic(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):Jc(document,"*",a,b)}
function F(a,b){var c=b||document;if(c.getElementsByClassName)c=c.getElementsByClassName(a)[0];else{c=document;var d=b||c;c=d.querySelectorAll&&d.querySelector&&a?d.querySelector(a?"."+a:""):Jc(c,"*",a,b)[0]||null}return c||null}
function Jc(a,b,c,d){a=d||a;b=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(b||c))return a.querySelectorAll(b+(c?"."+c:""));if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){d={};for(var e=0,f=0,g;g=a[f];f++)b==g.nodeName&&(d[e++]=g);d.length=e;return d}return a}a=a.getElementsByTagName(b||"*");if(c){d={};for(f=e=0;g=a[f];f++)b=g.className,"function"==typeof b.split&&Sa(b.split(/\s+/),c)&&(d[e++]=g);d.length=e;return d}return a}
function Kc(a,b){rb(b,function(b,d){b&&"object"==typeof b&&b.N&&(b=b.M());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Lc.hasOwnProperty(d)?a.setAttribute(Lc[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var Lc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function Mc(a){a=a.document;a=Nc(a)?a.documentElement:a.body;return new Ec(a.clientWidth,a.clientHeight)}
function Oc(a){var b=Pc(a);a=Qc(a);return C&&ac("10")&&a.pageYOffset!=b.scrollTop?new D(b.scrollLeft,b.scrollTop):new D(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function Pc(a){return a.scrollingElement?a.scrollingElement:!Nb&&Nc(a)?a.documentElement:a.body||a.documentElement}
function Qc(a){return a.parentWindow||a.defaultView}
function Rc(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!oc&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',jb(g.name),'"');if(g.type){f.push(' type="',jb(g.type),'"');var h={};zb(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=e.createElement(f);g&&(r(g)?f.className=g:za(g)?f.className=g.join(" "):Kc(f,g));2<d.length&&Sc(e,f,d);return f}
function Sc(a,b,c){function d(c){c&&b.appendChild(r(c)?a.createTextNode(c):c)}
for(var e=2;e<c.length;e++){var f=c[e];!Aa(f)||Ca(f)&&0<f.nodeType?d(f):z(Tc(f)?Ua(f):f,d)}}
function Nc(a){return"CSS1Compat"==a.compatMode}
function Uc(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function Vc(a){return pc&&void 0!=a.children?a.children:Na(a.childNodes,function(a){return 1==a.nodeType})}
function Wc(a){return Ca(a)&&1==a.nodeType}
function Xc(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function Hc(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function Yc(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else{for(var c;c=a.firstChild;)a.removeChild(c);a.appendChild(Hc(a).createTextNode(String(b)))}}
function Zc(a,b){var c=[];return $c(a,b,c,!0)?c[0]:void 0}
function $c(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||$c(a,b,c,d))return!0;a=a.nextSibling}return!1}
var ad={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},bd={IMG:" ",BR:"\n"};function cd(a){var b;if((b="A"==a.tagName||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!dd(a)||ed(a)):dd(a)&&ed(a))&&C){var c;!Ba(a.getBoundingClientRect)||C&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a}
function dd(a){return C&&!ac("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")}
function ed(a){a=a.tabIndex;return va(a)&&0<=a&&32768>a}
function fd(a){if(qc&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];gd(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");qc||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function gd(a,b,c){if(!(a.nodeName in ad))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in bd)b.push(bd[a.nodeName]);else for(a=a.firstChild;a;)gd(a,b,c),a=a.nextSibling}
function Tc(a){if(a&&"number"==typeof a.length){if(Ca(a))return"function"==typeof a.item||"string"==typeof a.item;if(Ba(a))return"function"==typeof a.item}return!1}
function hd(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return id(a,function(a){return(!e||a.nodeName==e)&&(!c||r(a.className)&&Sa(a.className.split(/\s+/),c))},!0,d)}
function G(a,b){return hd(a,null,b,void 0)}
function id(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function Gc(a){this.b=a||n.document||document}
Gc.prototype.getElementsByTagName=function(a,b){return(b||this.b).getElementsByTagName(String(a))};
Gc.prototype.createElement=function(a){return this.b.createElement(String(a))};
Gc.prototype.appendChild=function(a,b){a.appendChild(b)};
Gc.prototype.isElement=Wc;function jd(a){var b=kd;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function ld(){var a=[];jd(function(b){a.push(b)});
return a}
var kd={zb:"allow-forms",Ab:"allow-modals",Bb:"allow-orientation-lock",Cb:"allow-pointer-lock",Db:"allow-popups",Eb:"allow-popups-to-escape-sandbox",Fb:"allow-presentation",Gb:"allow-same-origin",Hb:"allow-scripts",Ib:"allow-top-navigation",Jb:"allow-top-navigation-by-user-activation"},md=nc(function(){return ld()});
function nd(){var a=document.createElement("IFRAME").sandbox,b=a&&a.supports;if(!b)return{};var c={};z(md(),function(d){b.call(a,d)&&(c[d]=!0)});
return c}
;function od(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
k=od.prototype;k.getHeight=function(){return this.bottom-this.top};
k.clone=function(){return new od(this.top,this.right,this.bottom,this.left)};
k.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
k.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
k.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function pd(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
pd.prototype.clone=function(){return new pd(this.left,this.top,this.width,this.height)};
pd.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
pd.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
pd.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function qd(a,b,c){if(r(b))(b=rd(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=rd(c,d);f&&(c.style[f]=e)}}
var sd={};function rd(a,b){var c=sd[b];if(!c){var d=mb(b);c=d;void 0===a.style[d]&&(d=(Nb?"Webkit":Mb?"Moz":C?"ms":Jb?"O":null)+nb(d),void 0!==a.style[d]&&(c=d));sd[b]=c}return c}
function td(a,b){var c=Hc(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function ud(a,b){return td(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function vd(a){try{var b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}C&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function wd(a){if(C&&!(8<=Number(bc)))return a.offsetParent;var b=Hc(a),c=ud(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=ud(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function xd(a){for(var b=new od(0,Infinity,Infinity,0),c=Fc(a),d=c.b.body,e=c.b.documentElement,f=Pc(c.b);a=wd(a);)if(!(C&&0==a.clientWidth||Nb&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=ud(a,"overflow")){var g=yd(a),h=new D(a.clientLeft,a.clientTop);g.x+=h.x;g.y+=h.y;b.top=Math.max(b.top,g.y);b.right=Math.min(b.right,g.x+a.clientWidth);b.bottom=Math.min(b.bottom,g.y+a.clientHeight);b.left=Math.max(b.left,g.x)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,d);b.top=Math.max(b.top,f);c=
Mc(Qc(c.b)||window);b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null}
function yd(a){var b=Hc(a),c=new D(0,0);var d=b?Hc(b):document;d=!C||9<=Number(bc)||Nc(Fc(d).b)?d.documentElement:d.body;if(a==d)return c;a=vd(a);b=Oc(Fc(b).b);c.x=a.left+b.x;c.y=a.top+b.y;return c}
function zd(a){a=vd(a);return new D(a.left,a.top)}
function Ad(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function Bd(a){var b=Cd;if("none"!=ud(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function Cd(a){var b=a.offsetWidth,c=a.offsetHeight,d=Nb&&!b&&!c;return q(b)&&!d||!a.getBoundingClientRect?new Ec(b,c):(a=vd(a),new Ec(a.right-a.left,a.bottom-a.top))}
function Dd(a){var b=yd(a);a=Bd(a);return new pd(b.x,b.y,a.width,a.height)}
function Ed(a){return"rtl"==ud(a,"direction")}
function Fd(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e}
function Gd(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?Fd(a,c):0}
var Hd={thin:2,medium:4,thick:6};function Id(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in Hd?Hd[c]:Fd(a,c)}
;var Jd=(new Date).getTime();function Kd(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Ld(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;p=m=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],h=e[3],l=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var m=h^d&(f^h);var p=1518500249}else m=d^f^h,p=1859775393;else 60>c?(m=d&f|h&(d|f),p=2400959708):(m=d^f^h,p=3395469782);m=((a<<5|a>>>27)&4294967295)+m+l+p+b[c]&4294967295;l=h;h=f;f=(d<<30|d>>>2)&4294967295;d=a;a=m}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+h&4294967295;e[4]=e[4]+l&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==m)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,p+=64;for(;d<c;)if(f[m++]=a[d++],p++,64==m)for(m=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,p+=64}
function d(){var a=[],d=8*p;56>m?c(h,56-m):c(h,64-(m-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var l=24;0<=l;l-=8)a[d++]=e[g]>>l&255;return a}
for(var e=[],f=[],g=[],h=[128],l=1;64>l;++l)h[l]=0;var m,p;a();return{reset:a,update:c,digest:d,Ra:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;function Md(a,b,c){var d=[],e=[];if(1==(za(c)?2:1))return e=[b,a],z(d,function(a){e.push(a)}),Nd(e.join(" "));
var f=[],g=[];z(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];z(d,function(a){e.push(a)});
a=Nd(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Nd(a){var b=Ld();b.update(a);return b.Ra().toLowerCase()}
;function Od(a){var b=Kd(String(n.location.href)),c=n.__OVERRIDE_SID;null==c&&(c=(new lc(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?n.__SAPISID:n.__APISID,null==b&&(b=(new lc(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(n.location.href);return d&&b&&c?[c,Md(Kd(d),b,a||null)].join(" "):null}return null}
;function Pd(a,b){this.g=a;this.i=b;this.f=0;this.b=null}
Pd.prototype.get=function(){if(0<this.f){this.f--;var a=this.b;this.b=a.next;a.next=null}else a=this.g();return a};
function Qd(a,b){a.i(b);100>a.f&&(a.f++,b.next=a.b,a.b=b)}
;function Rd(a){n.setTimeout(function(){throw a;},0)}
var Sd;
function Td(){var a=n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!B("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=v(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!B("Trident")&&!B("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(q(c.next)){c=c.next;var a=c.ea;c.ea=null;a()}};
return function(a){d.next={ea:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){n.setTimeout(a,0)}}
;function Ud(){this.f=this.b=null}
var Wd=new Pd(function(){return new Vd},function(a){a.reset()});
Ud.prototype.add=function(a,b){var c=Wd.get();c.set(a,b);this.f?this.f.next=c:this.b=c;this.f=c};
Ud.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function Vd(){this.next=this.scope=this.b=null}
Vd.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
Vd.prototype.reset=function(){this.next=this.scope=this.b=null};function Xd(a,b){Yd||Zd();$d||(Yd(),$d=!0);ae.add(a,b)}
var Yd;function Zd(){if(n.Promise&&n.Promise.resolve){var a=n.Promise.resolve(void 0);Yd=function(){a.then(be)}}else Yd=function(){var a=be;
!Ba(n.setImmediate)||n.Window&&n.Window.prototype&&!B("Edge")&&n.Window.prototype.setImmediate==n.setImmediate?(Sd||(Sd=Td()),Sd(a)):n.setImmediate(a)}}
var $d=!1,ae=new Ud;function be(){for(var a;a=ae.remove();){try{a.b.call(a.scope)}catch(b){Rd(b)}Qd(Wd,a)}$d=!1}
;function ce(){this.f=-1}
;function de(){this.f=-1;this.f=64;this.b=[];this.l=[];this.u=[];this.i=[];this.i[0]=128;for(var a=1;a<this.f;++a)this.i[a]=0;this.j=this.g=0;this.reset()}
x(de,ce);de.prototype.reset=function(){this.b[0]=1732584193;this.b[1]=4023233417;this.b[2]=2562383102;this.b[3]=271733878;this.b[4]=3285377520;this.j=this.g=0};
function ee(a,b,c){c||(c=0);var d=a.u;if(r(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.b[0];c=a.b[1];var g=a.b[2],h=a.b[3],l=a.b[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var m=1518500249}else f=c^g^h,m=1859775393;else 60>e?(f=c&g|h&(c|g),m=2400959708):(f=c^g^h,m=
3395469782);f=(b<<5|b>>>27)+f+l+m+d[e]&4294967295;l=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.b[0]=a.b[0]+b&4294967295;a.b[1]=a.b[1]+c&4294967295;a.b[2]=a.b[2]+g&4294967295;a.b[3]=a.b[3]+h&4294967295;a.b[4]=a.b[4]+l&4294967295}
de.prototype.update=function(a,b){if(null!=a){q(b)||(b=a.length);for(var c=b-this.f,d=0,e=this.l,f=this.g;d<b;){if(0==f)for(;d<=c;)ee(this,a,d),d+=this.f;if(r(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.f){ee(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.f){ee(this,e);f=0;break}}this.g=f;this.j+=b}};
de.prototype.digest=function(){var a=[],b=8*this.j;56>this.g?this.update(this.i,56-this.g):this.update(this.i,this.f-(this.g-56));for(var c=this.f-1;56<=c;c--)this.l[c]=b&255,b/=256;ee(this,this.l);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.b[c]>>d&255,++b;return a};var fe={Pb:["BC","AD"],Ob:["Before Christ","Anno Domini"],Rb:"JFMAMJJASOND".split(""),Yb:"JFMAMJJASOND".split(""),Qb:"January February March April May June July August September October November December".split(" "),Xb:"January February March April May June July August September October November December".split(" "),Ub:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),ac:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),fc:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
dc:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),Wb:"Sun Mon Tue Wed Thu Fri Sat".split(" "),cc:"Sun Mon Tue Wed Thu Fri Sat".split(" "),Sb:"SMTWTFS".split(""),Zb:"SMTWTFS".split(""),Vb:["Q1","Q2","Q3","Q4"],Tb:["1st quarter","2nd quarter","3rd quarter","4th quarter"],Kb:["AM","PM"],Mb:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],ec:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],Nb:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],Na:6,gc:[5,6],Oa:5},ge=fe;
ge=fe;function he(a,b,c){va(a)?(this.date=ie(a,b||0,c||1),je(this,c||1)):Ca(a)?(this.date=ie(a.getFullYear(),a.getMonth(),a.getDate()),je(this,a.getDate())):(this.date=new Date(Ja()),a=this.date.getDate(),this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),je(this,a))}
function ie(a,b,c){b=new Date(a,b,c);0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b}
k=he.prototype;k.P=ge.Na;k.R=ge.Oa;k.clone=function(){var a=new he(this.date);a.P=this.P;a.R=this.R;return a};
k.getFullYear=function(){return this.date.getFullYear()};
k.getMonth=function(){return this.date.getMonth()};
k.getDate=function(){return this.date.getDate()};
k.getTime=function(){return this.date.getTime()};
k.set=function(a){this.date=new Date(a.getFullYear(),a.getMonth(),a.getDate())};
k.add=function(a){if(a.f||a.b){var b=this.getMonth()+a.b+12*a.f,c=this.getFullYear()+Math.floor(b/12);b%=12;0>b&&(b+=12);a:{switch(b){case 1:var d=0!=c%4||0==c%100&&0!=c%400?28:29;break a;case 5:case 8:case 10:case 3:d=30;break a}d=31}d=Math.min(d,this.getDate());this.date.setDate(1);this.date.setFullYear(c);this.date.setMonth(b);this.date.setDate(d)}a.days&&(a=new Date((new Date(this.getFullYear(),this.getMonth(),this.getDate(),12)).getTime()+864E5*a.days),this.date.setDate(1),this.date.setFullYear(a.getFullYear()),
this.date.setMonth(a.getMonth()),this.date.setDate(a.getDate()),je(this,a.getDate()))};
k.V=function(a){return[this.getFullYear(),lb(this.getMonth()+1),lb(this.getDate())].join(a?"-":"")+""};
k.equals=function(a){return!(!a||this.getFullYear()!=a.getFullYear()||this.getMonth()!=a.getMonth()||this.getDate()!=a.getDate())};
k.toString=function(){return this.V()};
function je(a,b){a.getDate()!=b&&a.date.setUTCHours(a.date.getUTCHours()+(a.getDate()<b?1:-1))}
k.valueOf=function(){return this.date.valueOf()};
function ke(a,b,c,d,e,f,g){this.date=va(a)?new Date(a,b||0,c||1,d||0,e||0,f||0,g||0):new Date(a&&a.getTime?a.getTime():Ja())}
x(ke,he);k=ke.prototype;k.add=function(a){he.prototype.add.call(this,a);a.hours&&this.date.setUTCHours(this.date.getUTCHours()+a.hours);a.minutes&&this.date.setUTCMinutes(this.date.getUTCMinutes()+a.minutes);a.seconds&&this.date.setUTCSeconds(this.date.getUTCSeconds()+a.seconds)};
k.V=function(a){var b=he.prototype.V.call(this,a);return a?b+" "+lb(this.date.getHours())+":"+lb(this.date.getMinutes())+":"+lb(this.date.getSeconds()):b+"T"+lb(this.date.getHours())+lb(this.date.getMinutes())+lb(this.date.getSeconds())};
k.equals=function(a){return this.getTime()==a.getTime()};
k.toString=function(){return this.V()};
k.clone=function(){var a=new ke(this.date);a.P=this.P;a.R=this.R;return a};function le(){this.g=this.g;this.i=this.i}
le.prototype.g=!1;le.prototype.T=function(){return this.g};
le.prototype.dispose=function(){this.g||(this.g=!0,this.Y())};
le.prototype.Y=function(){if(this.i)for(;this.i.length;)this.i.shift()()};
function me(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function ne(a){if(a.classList)return a.classList;a=a.className;return r(a)&&a.match(/\S+/g)||[]}
function H(a,b){return a.classList?a.classList.contains(b):Sa(ne(a),b)}
function I(a,b){a.classList?a.classList.add(b):H(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function oe(a,b){if(a.classList)z(b,function(b){I(a,b)});
else{var c={};z(ne(a),function(a){c[a]=!0});
z(b,function(a){c[a]=!0});
a.className="";for(var d in c)a.className+=0<a.className.length?" "+d:d}}
function J(a,b){a.classList?a.classList.remove(b):H(a,b)&&(a.className=Na(ne(a),function(a){return a!=b}).join(" "))}
function pe(a,b){a.classList?z(b,function(b){J(a,b)}):a.className=Na(ne(a),function(a){return!Sa(b,a)}).join(" ")}
function qe(a,b,c){c?I(a,b):J(a,b)}
function re(a,b,c){H(a,b)&&(J(a,b),I(a,c))}
function se(a,b){var c=!H(a,b);qe(a,b,c)}
;var te=!C&&!Bb();function ue(a,b){if(/-[a-z]/.test(b))return null;if(te&&a.dataset){if(Db()&&!(b in a.dataset))return null;var c=a.dataset[b];return void 0===c?null:c}return a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())}
;var ve="StopIteration"in n?n.StopIteration:{message:"StopIteration",stack:""};function we(){}
we.prototype.next=function(){throw ve;};
we.prototype.D=function(){return this};
function xe(a){if(a instanceof we)return a;if("function"==typeof a.D)return a.D(!1);if(Aa(a)){var b=0,c=new we;c.next=function(){for(;;){if(b>=a.length)throw ve;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function ye(a,b){if(Aa(a))try{z(a,b,void 0)}catch(c){if(c!==ve)throw c;}else{a=xe(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==ve)throw c;}}}
function ze(a){if(Aa(a))return Ua(a);a=xe(a);var b=[];ye(a,function(a){b.push(a)});
return b}
;function Ae(a,b){this.g={};this.b=[];this.G=this.f=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Ae)for(c=Be(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Be(a){Ce(a);return a.b.concat()}
k=Ae.prototype;k.equals=function(a,b){if(this===a)return!0;if(this.f!=a.f)return!1;var c=b||De;Ce(this);for(var d,e=0;d=this.b[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function De(a,b){return a===b}
k.isEmpty=function(){return 0==this.f};
k.clear=function(){this.g={};this.G=this.f=this.b.length=0};
k.remove=function(a){return Object.prototype.hasOwnProperty.call(this.g,a)?(delete this.g[a],this.f--,this.G++,this.b.length>2*this.f&&Ce(this),!0):!1};
function Ce(a){if(a.f!=a.b.length){for(var b=0,c=0;b<a.b.length;){var d=a.b[b];Object.prototype.hasOwnProperty.call(a.g,d)&&(a.b[c++]=d);b++}a.b.length=c}if(a.f!=a.b.length){var e={};for(c=b=0;b<a.b.length;)d=a.b[b],Object.prototype.hasOwnProperty.call(e,d)||(a.b[c++]=d,e[d]=1),b++;a.b.length=c}}
k.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.g,a)?this.g[a]:b};
k.set=function(a,b){Object.prototype.hasOwnProperty.call(this.g,a)||(this.f++,this.b.push(a),this.G++);this.g[a]=b};
k.forEach=function(a,b){for(var c=Be(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
k.clone=function(){return new Ae(this)};
k.D=function(a){Ce(this);var b=0,c=this.G,d=this,e=new we;e.next=function(){if(c!=d.G)throw Error("The map has changed since the iterator was created");if(b>=d.b.length)throw ve;var e=d.b[b++];return a?e:d.g[e]};
return e};function Ee(a){var b=[];Fe(new Ge,a,b);return b.join("")}
function Ge(){}
function Fe(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(za(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Fe(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),He(d,c),c.push(":"),Fe(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":He(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Ie={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Je=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function He(a,b){b.push('"',a.replace(Je,function(a){var b=Ie[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Ie[a]=b);return b}),'"')}
;var Ke=function(){if(Pb){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(ob))?a[1]:"0"}return Ob?(a=/10[_.][0-9_.]+/,(a=a.exec(ob))?a[0].replace(/_/g,"."):"10"):Qb?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(ob))?a[1]:""):Rb||Sb||Tb?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(ob))?a[1].replace(/_/g,"."):""):""}();function Le(a){return(a=a.exec(ob))?a[1]:""}
var Me=function(){if(dc)return Le(/Firefox\/([0-9.]+)/);if(C||Kb||Jb)return $b;if(hc)return Fb()?Le(/CriOS\/([0-9.]+)/):Le(/Chrome\/([0-9.]+)/);if(ic&&!Fb())return Le(/Version\/([0-9.]+)/);if(ec||fc){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(ob);if(a)return a[1]+"."+a[2]}else if(gc)return(a=Le(/Android\s+([0-9.]+)/))?a:Le(/Version\/([0-9.]+)/);return""}();function Ne(a,b,c,d,e,f,g){var h;if(h=c.offsetParent){var l="HTML"==h.tagName||"BODY"==h.tagName;if(!l||"static"!=ud(h,"position")){var m=yd(h);if(!l){l=Ed(h);var p;if(p=l){if(p=ic)p=0<=hb(Me,10);var A;if(A=Ub)A=0<=hb(Ke,10);p=Mb||p||A}l=p?-h.scrollLeft:!l||Lb&&ac("8")||"visible"==ud(h,"overflowX")?h.scrollLeft:h.scrollWidth-h.clientWidth-h.scrollLeft;m=Dc(m,new D(l,h.scrollTop))}}}h=m||new D;m=Dd(a);if(l=xd(a)){var t=new pd(l.left,l.top,l.right-l.left,l.bottom-l.top);l=Math.max(m.left,t.left);p=
Math.min(m.left+m.width,t.left+t.width);l<=p&&(A=Math.max(m.top,t.top),t=Math.min(m.top+m.height,t.top+t.height),A<=t&&(m.left=l,m.top=A,m.width=p-l,m.height=t-A))}l=Fc(a);A=Fc(c);if(l.b!=A.b){p=l.b.body;A=Qc(A.b);t=new D(0,0);var T=(T=Hc(p))?Qc(T):window;b:{try{Gb(T.parent);var Q=!0;break b}catch(gl){}Q=!1}if(Q){Q=p;do{var eg=T==A?yd(Q):zd(Q);t.x+=eg.x;t.y+=eg.y}while(T&&T!=A&&T!=T.parent&&(Q=T.frameElement)&&(T=T.parent))}Q=Dc(t,yd(p));!C||9<=Number(bc)||Nc(l.b)||(Q=Dc(Q,Oc(l.b)));m.left+=Q.x;m.top+=
Q.y}a=Oe(a,b);b=m.left;a&4?b+=m.width:a&2&&(b+=m.width/2);b=new D(b,m.top+(a&1?m.height:0));b=Dc(b,h);e&&(b.x+=(a&4?-1:1)*e.x,b.y+=(a&1?-1:1)*e.y);var sa;g&&(sa=xd(c))&&(sa.top-=h.y,sa.right-=h.x,sa.bottom-=h.y,sa.left-=h.x);return Pe(b,c,d,f,sa,g,void 0)}
function Pe(a,b,c,d,e,f,g){a=a.clone();var h=Oe(b,c);c=Bd(b);g=g?g.clone():c.clone();a=a.clone();g=g.clone();var l=0;if(d||0!=h)h&4?a.x-=g.width+(d?d.right:0):h&2?a.x-=g.width/2:d&&(a.x+=d.left),h&1?a.y-=g.height+(d?d.bottom:0):d&&(a.y+=d.top);if(f){if(e){d=a;h=g;l=0;65==(f&65)&&(d.x<e.left||d.x>=e.right)&&(f&=-2);132==(f&132)&&(d.y<e.top||d.y>=e.bottom)&&(f&=-5);d.x<e.left&&f&1&&(d.x=e.left,l|=1);if(f&16){var m=d.x;d.x<e.left&&(d.x=e.left,l|=4);d.x+h.width>e.right&&(h.width=Math.min(e.right-d.x,
m+h.width-e.left),h.width=Math.max(h.width,0),l|=4)}d.x+h.width>e.right&&f&1&&(d.x=Math.max(e.right-h.width,e.left),l|=1);f&2&&(l|=(d.x<e.left?16:0)|(d.x+h.width>e.right?32:0));d.y<e.top&&f&4&&(d.y=e.top,l|=2);f&32&&(m=d.y,d.y<e.top&&(d.y=e.top,l|=8),d.y+h.height>e.bottom&&(h.height=Math.min(e.bottom-d.y,m+h.height-e.top),h.height=Math.max(h.height,0),l|=8));d.y+h.height>e.bottom&&f&4&&(d.y=Math.max(e.bottom-h.height,e.top),l|=2);f&8&&(l|=(d.y<e.top?64:0)|(d.y+h.height>e.bottom?128:0));e=l}else e=
256;l=e}f=new pd(0,0,0,0);f.left=a.x;f.top=a.y;f.width=g.width;f.height=g.height;e=l;if(e&496)return e;a=new D(f.left,f.top);a instanceof D?(g=a.x,a=a.y):(g=a,a=void 0);b.style.left=Ad(g,!1);b.style.top=Ad(a,!1);g=new Ec(f.width,f.height);c==g||c&&g&&c.width==g.width&&c.height==g.height||(c=g,a=Nc(Fc(Hc(b)).b),!C||ac("10")||a&&ac("8")?(b=b.style,Mb?b.MozBoxSizing="border-box":Nb?b.WebkitBoxSizing="border-box":b.boxSizing="border-box",b.width=Math.max(c.width,0)+"px",b.height=Math.max(c.height,0)+
"px"):(g=b.style,a?(C?(a=Gd(b,"paddingLeft"),f=Gd(b,"paddingRight"),d=Gd(b,"paddingTop"),h=Gd(b,"paddingBottom"),a=new od(d,f,h,a)):(a=td(b,"paddingLeft"),f=td(b,"paddingRight"),d=td(b,"paddingTop"),h=td(b,"paddingBottom"),a=new od(parseFloat(d),parseFloat(f),parseFloat(h),parseFloat(a))),!C||9<=Number(bc)?(f=td(b,"borderLeftWidth"),d=td(b,"borderRightWidth"),h=td(b,"borderTopWidth"),b=td(b,"borderBottomWidth"),b=new od(parseFloat(h),parseFloat(d),parseFloat(b),parseFloat(f))):(f=Id(b,"borderLeft"),
d=Id(b,"borderRight"),h=Id(b,"borderTop"),b=Id(b,"borderBottom"),b=new od(h,d,b,f)),g.pixelWidth=c.width-b.left-a.left-a.right-b.right,g.pixelHeight=c.height-b.top-a.top-a.bottom-b.bottom):(g.pixelWidth=c.width,g.pixelHeight=c.height)));return e}
function Oe(a,b){return(b&8&&Ed(a)?b^4:b)&-9}
;function Qe(a){this.b=0;this.u=void 0;this.i=this.f=this.g=null;this.j=this.l=!1;if(a!=wa)try{var b=this;a.call(void 0,function(a){Re(b,2,a)},function(a){Re(b,3,a)})}catch(c){Re(this,3,c)}}
function Se(){this.next=this.context=this.onRejected=this.f=this.b=null;this.g=!1}
Se.prototype.reset=function(){this.context=this.onRejected=this.f=this.b=null;this.g=!1};
var Te=new Pd(function(){return new Se},function(a){a.reset()});
function Ue(a,b,c){var d=Te.get();d.f=a;d.onRejected=b;d.context=c;return d}
Qe.prototype.then=function(a,b,c){return Ve(this,Ba(a)?a:null,Ba(b)?b:null,c)};
Qe.prototype.$goog_Thenable=!0;Qe.prototype.cancel=function(a){0==this.b&&Xd(function(){var b=new We(a);Xe(this,b)},this)};
function Xe(a,b){if(0==a.b)if(a.g){var c=a.g;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.g||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?Xe(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):Ye(c),Ze(c,e,3,b)))}a.g=null}else Re(a,3,b)}
function $e(a,b){a.f||2!=a.b&&3!=a.b||af(a);a.i?a.i.next=b:a.f=b;a.i=b}
function Ve(a,b,c,d){var e=Ue(null,null,null);e.b=new Qe(function(a,g){e.f=b?function(c){try{var e=b.call(d,c);a(e)}catch(m){g(m)}}:a;
e.onRejected=c?function(b){try{var e=c.call(d,b);!q(e)&&b instanceof We?g(b):a(e)}catch(m){g(m)}}:g});
e.b.g=a;$e(a,e);return e.b}
Qe.prototype.F=function(a){this.b=0;Re(this,2,a)};
Qe.prototype.X=function(a){this.b=0;Re(this,3,a)};
function Re(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;a:{var d=c,e=a.F,f=a.X;if(d instanceof Qe){$e(d,Ue(e||wa,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(m){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ca(d))try{var l=d.then;if(Ba(l)){bf(d,l,e,f,a);g=!0;break a}}catch(m){f.call(a,m);g=!0;break a}g=!1}}}g||(a.u=c,a.b=b,a.g=null,af(a),3!=b||c instanceof We||cf(a,c))}}
function bf(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}
function g(a){h||(h=!0,c.call(e,a))}
var h=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function af(a){a.l||(a.l=!0,Xd(a.A,a))}
function Ye(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.i=null);return b}
Qe.prototype.A=function(){for(var a;a=Ye(this);)Ze(this,a,this.b,this.u);this.l=!1};
function Ze(a,b,c,d){if(3==c&&b.onRejected&&!b.g)for(;a&&a.j;a=a.g)a.j=!1;if(b.b)b.b.g=null,df(b,c,d);else try{b.g?b.f.call(b.context):df(b,c,d)}catch(e){ef.call(null,e)}Qd(Te,b)}
function df(a,b,c){2==b?a.f.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function cf(a,b){a.j=!0;Xd(function(){a.j&&ef.call(null,b)})}
var ef=Rd;function We(a){Ka.call(this,a)}
x(We,Ka);We.prototype.name="cancel";function K(a){le.call(this);this.u=1;this.j=[];this.l=0;this.b=[];this.f={};this.A=!!a}
x(K,le);k=K.prototype;k.subscribe=function(a,b,c){var d=this.f[a];d||(d=this.f[a]=[]);var e=this.u;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.u=e+3;d.push(e);return e};
function ff(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(a){c||(c=!0,this.L(d),b.apply(void 0,arguments))},a)}
function gf(a,b,c){if(b=a.f[b]){var d=a.b;(b=Ra(b,function(a){return d[a+1]==c&&void 0==d[a+2]}))&&a.L(b)}}
k.L=function(a){var b=this.b[a];if(b){var c=this.f[b];if(0!=this.l)this.j.push(a),this.b[a+1]=wa;else{if(c){var d=Ma(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.b[a];delete this.b[a+1];delete this.b[a+2]}}return!!b};
k.C=function(a,b){var c=this.f[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];hf(this.b[g+1],this.b[g+2],d)}else{this.l++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.l--,0<this.j.length&&0==this.l)for(;c=this.j.pop();)this.L(c)}}return 0!=e}return!1};
function hf(a,b,c){Xd(function(){a.apply(b,c)})}
k.clear=function(a){if(a){var b=this.f[a];b&&(z(b,this.L,this),delete this.f[a])}else this.b.length=0,this.f={}};
function jf(a,b){if(b){var c=a.f[b];return c?c.length:0}c=0;for(var d in a.f)c+=jf(a,d);return c}
k.Y=function(){K.o.Y.call(this);this.clear();this.j.length=0};function kf(a){this.b=a}
kf.prototype.set=function(a,b){q(b)?this.b.set(a,Ee(b)):this.b.remove(a)};
kf.prototype.get=function(a){try{var b=this.b.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
kf.prototype.remove=function(a){this.b.remove(a)};function lf(a){this.b=a}
x(lf,kf);function mf(a){this.data=a}
function nf(a){return!q(a)||a instanceof mf?a:new mf(a)}
lf.prototype.set=function(a,b){lf.o.set.call(this,a,nf(b))};
lf.prototype.f=function(a){a=lf.o.get.call(this,a);if(!q(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
lf.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!q(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function of(a){this.b=a}
x(of,lf);of.prototype.set=function(a,b,c){if(b=nf(b)){if(c){if(c<Ja()){of.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Ja()}of.o.set.call(this,a,b)};
of.prototype.f=function(a){var b=of.o.f.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Ja()||c&&c>Ja())of.prototype.remove.call(this,a);else return b}};function pf(){}
;function qf(){}
x(qf,pf);qf.prototype.clear=function(){var a=ze(this.D(!0)),b=this;z(a,function(a){b.remove(a)})};function rf(a){this.b=a}
x(rf,qf);k=rf.prototype;k.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
k.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
k.get=function(a){a=this.b.getItem(a);if(!r(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.b.removeItem(a)};
k.D=function(a){var b=0,c=this.b,d=new we;d.next=function(){if(b>=c.length)throw ve;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!r(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
k.clear=function(){this.b.clear()};
k.key=function(a){return this.b.key(a)};function sf(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
x(sf,rf);function tf(a,b){this.f=a;this.b=null;if(C&&!(9<=Number(bc))){uf||(uf=new Ae);this.b=uf.get(a);this.b||(b?this.b=document.getElementById(b):(this.b=document.createElement("userdata"),this.b.addBehavior("#default#userData"),document.body.appendChild(this.b)),uf.set(a,this.b));try{this.b.load(this.f)}catch(c){this.b=null}}}
x(tf,qf);var vf={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},uf=null;function wf(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(a){return vf[a]})}
k=tf.prototype;k.isAvailable=function(){return!!this.b};
k.set=function(a,b){this.b.setAttribute(wf(a),b);xf(this)};
k.get=function(a){a=this.b.getAttribute(wf(a));if(!r(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.b.removeAttribute(wf(a));xf(this)};
k.D=function(a){var b=0,c=this.b.XMLDocument.documentElement.attributes,d=new we;d.next=function(){if(b>=c.length)throw ve;var d=c[b++];if(a)return decodeURIComponent(d.nodeName.replace(/\./g,"%")).substr(1);d=d.nodeValue;if(!r(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
k.clear=function(){for(var a=this.b.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);xf(this)};
function xf(a){try{a.b.save(a.f)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function yf(a,b){this.f=a;this.b=b+"::"}
x(yf,qf);yf.prototype.set=function(a,b){this.f.set(this.b+a,b)};
yf.prototype.get=function(a){return this.f.get(this.b+a)};
yf.prototype.remove=function(a){this.f.remove(this.b+a)};
yf.prototype.D=function(a){var b=this.f.D(!0),c=this,d=new we;d.next=function(){for(var d=b.next();d.substr(0,c.b.length)!=c.b;)d=b.next();return a?d.substr(c.b.length):c.f.get(d)};
return d};var zf=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Af(a){return a?decodeURI(a):a}
function Bf(a,b){return b.match(zf)[a]||null}
function Cf(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);c=[a.substr(0,d),e,a.substr(c)];d=c[1];c[1]=b?d?d+"&"+b:b:d;return c[0]+(c[1]?"?"+c[1]:"")+c[2]}
function Df(a,b,c){if(za(b))for(var d=0;d<b.length;d++)Df(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Ef(a,b){for(var c=[],d=b||0;d<a.length;d+=2)Df(a[d],a[d+1],c);return c.join("&")}
function Ff(a){var b=[],c;for(c in a)Df(c,a[c],b);return b.join("&")}
function Gf(a,b){var c=2==arguments.length?Ef(arguments[1],0):Ef(arguments,1);return Cf(a,c)}
function Hf(a,b){var c=Ff(b);return Cf(a,c)}
var If=/#|$/;function Jf(a,b){var c=a.search(If);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.substr(d,e-d).replace(/\+/g," "))}
;function Kf(){this.f=[];this.b=-1}
Kf.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.f[a]!=b&&(this.f[a]=b,this.b=-1)};
Kf.prototype.get=function(a){return!!this.f[a]};
function Lf(a){-1==a.b&&(a.b=Pa(a.f,function(a,c,d){return c?a+Math.pow(2,d):a},0));
return a.b}
;var Mf=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};var Nf=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};w("yt.config_",Nf);function Of(a){var b=arguments;if(1<b.length)Nf[b[0]]=b[1];else{b=b[0];for(var c in b)Nf[c]=b[c]}}
function L(a,b){return a in Nf?Nf[a]:b}
function Pf(a){return L(a,void 0)}
;function Qf(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Rf(b)}}:a}
function Rf(a,b){var c=u("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=L("ERRORS",[]),c.push([a,b,void 0,void 0,void 0]),Of("ERRORS",c))}
;function M(a,b){Ba(a)&&(a=Qf(a));return window.setTimeout(a,b)}
function Sf(a){window.clearTimeout(a)}
;var Tf=0;function Uf(a){var b=a.__yt_uid_key;b||(b=Vf(),a.__yt_uid_key=b);return b}
function Wf(a,b){a=E(a);b=E(b);return!!id(a,function(a){return a===b},!0,void 0)}
function Xf(a,b){var c=Jc(document,a,null,b);return c.length?c[0]:null}
function Yf(){var a=document,b;Qa(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
function Zf(){qe(document.body,"hide-players",!1);z(Ic("preserve-players"),function(a){J(a,"preserve-players")})}
var Vf=u("ytDomDomGetNextId")||function(){return++Tf};
w("ytDomDomGetNextId",Vf);var $f=u("ytPubsubPubsubInstance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.L;K.prototype.publish=K.prototype.C;K.prototype.clear=K.prototype.clear;w("ytPubsubPubsubInstance",$f);var ag=u("ytPubsubPubsubSubscribedKeys")||{};w("ytPubsubPubsubSubscribedKeys",ag);var bg=u("ytPubsubPubsubTopicToKeys")||{};w("ytPubsubPubsubTopicToKeys",bg);var cg=u("ytPubsubPubsubIsSynchronous")||{};w("ytPubsubPubsubIsSynchronous",cg);
function dg(a,b,c){var d=fg();if(d){var e=d.subscribe(a,function(){var d=arguments;var g=function(){ag[e]&&b.apply(c||window,d)};
try{cg[a]?g():M(g,0)}catch(h){Rf(h)}},c);
ag[e]=!0;bg[a]||(bg[a]=[]);bg[a].push(e);return e}return 0}
function gg(a){var b=fg();b&&(va(a)?a=[a]:r(a)&&(a=[parseInt(a,10)]),z(a,function(a){b.unsubscribeByKey(a);delete ag[a]}))}
function N(a,b){var c=fg();return c?c.publish.apply(c,arguments):!1}
function hg(a,b){cg[a]=!0;var c=fg();c&&c.publish.apply(c,arguments);cg[a]=!1}
function fg(){return u("ytPubsubPubsubInstance")}
;function ig(a,b){(a=E(a))&&a.style&&(a.style.display=b?"":"none",qe(a,"hid",!b))}
function jg(a){return(a=E(a))?"none"!=a.style.display&&!H(a,"hid"):!1}
function kg(a){z(arguments,function(a){!Aa(a)||a instanceof Element?ig(a,!0):z(a,function(a){kg(a)})})}
function lg(a){z(arguments,function(a){!Aa(a)||a instanceof Element?ig(a,!1):z(a,function(a){lg(a)})})}
;function mg(a,b,c){a&&(a.dataset?a.dataset[ng(b)]=String(c):a.setAttribute("data-"+b,c))}
function og(a,b){return a?a.dataset?a.dataset[ng(b)]:a.getAttribute("data-"+b):null}
function pg(a,b){a&&(a.dataset?delete a.dataset[ng(b)]:a.removeAttribute("data-"+b))}
var qg={};function ng(a){return qg[a]||(qg[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function O(a,b){this.version=a;this.args=b}
;function P(a,b){this.topic=a;this.b=b}
P.prototype.toString=function(){return this.topic};function rg(){}
function sg(){}
rg.prototype=ca(sg.prototype);rg.prototype.constructor=rg;if(ia)ia(rg,sg);else for(var tg in sg)if("prototype"!=tg)if(Object.defineProperties){var ug=Object.getOwnPropertyDescriptor(sg,tg);ug&&Object.defineProperty(rg,tg,ug)}else rg[tg]=sg[tg];rg.o=sg.prototype;function vg(a,b,c){isNaN(c)&&(c=void 0);var d=u("yt.scheduler.instance.addJob");d?d(a,b,c):void 0===c?a():M(a,c||0)}
rg.prototype.start=function(){var a=u("yt.scheduler.instance.start");a&&a()};
xa(rg);rg.m();var wg=u("ytPubsub2Pubsub2Instance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.L;K.prototype.publish=K.prototype.C;K.prototype.clear=K.prototype.clear;w("ytPubsub2Pubsub2Instance",wg);var xg=u("ytPubsub2Pubsub2SubscribedKeys")||{};w("ytPubsub2Pubsub2SubscribedKeys",xg);var yg=u("ytPubsub2Pubsub2TopicToKeys")||{};w("ytPubsub2Pubsub2TopicToKeys",yg);var zg=u("ytPubsub2Pubsub2IsAsync")||{};w("ytPubsub2Pubsub2IsAsync",zg);
w("ytPubsub2Pubsub2SkipSubKey",null);function R(a,b){var c=Ag();c&&c.publish.call(c,a.toString(),a,b)}
function Bg(a,b,c){var d=Ag();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,g){var f=u("ytPubsub2Pubsub2SkipSubKey");f&&f==e||(f=function(){if(xg[e])try{if(g&&a instanceof P&&a!=d)try{var f=a.b,h=g;if(!h.args||!h.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!f.G){var p=new f;f.G=p.version}var A=f.G}catch(t){}if(!A||h.version!=A)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{g=Reflect.construct(f,Ua(h.args))}catch(t){throw t.message=
"yt.pubsub2.Data.deserialize(): "+t.message,t;}}catch(t){throw t.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+t.message,t;}b.call(c||window,g)}catch(t){Rf(t)}},zg[a.toString()]?u("yt.scheduler.instance")?vg(f,1,void 0):M(f,0):f())});
xg[e]=!0;yg[a.toString()]||(yg[a.toString()]=[]);yg[a.toString()].push(e);return e}
function Cg(a){var b=Ag();b&&(va(a)&&(a=[a]),z(a,function(a){b.unsubscribeByKey(a);delete xg[a]}))}
function Ag(){return u("ytPubsub2Pubsub2Instance")}
;var Dg={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Eg(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Dg||(this[b]=a[b]);this.rotation=a.rotation;(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=
null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}
Eg.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Eg.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Eg.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var ub=u("ytEventsEventsListeners")||{};w("ytEventsEventsListeners",ub);var Fg=u("ytEventsEventsCounter")||{count:0};w("ytEventsEventsCounter",Fg);
function Gg(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return tb(function(e){var f="boolean"==typeof e[4]&&e[4]==!!d,g=Ca(e[4])&&Ca(d)&&wb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function S(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Gg(a,b,c,d);if(e)return e;e=++Fg.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(d){d=new Eg(d);if(!id(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new Eg(b);
b.currentTarget=a;return c.call(a,b)};
g=Qf(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Hg()||"boolean"==typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);ub[e]=[a,b,c,g,d];return e}
function Ig(a,b,c,d){var e=a||document;return S(e,b,function(a){var b=id(a.target,function(a){return a===e||d(a)},!0);
b&&b!==e&&!b.disabled&&(a.currentTarget=b,c.call(b,a))})}
function Jg(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a}
var Hg=nc(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Kg(a,b,c,d){return Ig(a,b,c,function(a){return H(a,d)})}
function Lg(a){if(document.createEvent){var b=document.createEvent("HTMLEvents");b.initEvent("click",!0,!0);a.dispatchEvent(b)}else b=document.createEventObject(),a.fireEvent("onclick",b)}
function U(a){a&&("string"==typeof a&&(a=[a]),z(a,function(a){if(a in ub){var b=ub[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?Hg()||"boolean"==typeof b?d.removeEventListener(e,f,b):d.removeEventListener(e,f,!!b.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete ub[a]}}))}
;var Mg={},Ng="ontouchstart"in document;function Og(a,b,c){b in Mg||(Mg[b]=new K);Mg[b].subscribe(a,c)}
function Pg(a,b,c){switch(a){case "mouseover":case "mouseout":var d=3;break;case "mouseenter":case "mouseleave":d=9}return id(c,function(a){return H(a,b)},!0,d)}
function V(a){var b="mouseover"==a.type&&"mouseenter"in Mg||"mouseout"==a.type&&"mouseleave"in Mg,c=a.type in Mg||b;if("HTML"!=a.target.tagName&&c){if(b){b="mouseover"==a.type?"mouseenter":"mouseleave";c=Mg[b];for(var d in c.f){var e=Pg(b,d,a.target);e&&!id(a.relatedTarget,function(a){return a==e},!0)&&c.C(d,e,b,a)}}if(b=Mg[a.type])for(d in b.f)(e=Pg(a.type,d,a.target))&&b.C(d,e,a.type,a)}}
S(document,"blur",V,!0);S(document,"change",V,!0);S(document,"click",V);S(document,"focus",V,!0);S(document,"mouseover",V);S(document,"mouseout",V);S(document,"mousedown",V);S(document,"keydown",V);S(document,"keyup",V);S(document,"keypress",V);S(document,"cut",V);S(document,"paste",V);Ng&&(S(document,"touchstart",V),S(document,"touchend",V),S(document,"touchcancel",V));function W(a){this.j=a;this.u={};this.F=[];this.A=[]}
k=W.prototype;k.w=function(a){return G(a,X(this))};
function X(a,b){return"yt-uix"+(a.j?"-"+a.j:"")+(b?"-"+b:"")}
k.unregister=function(){gg(this.F);this.F.length=0;Cg(this.A);this.A.length=0};
k.init=wa;k.dispose=wa;function Qg(a,b,c){a.F.push(dg(b,c,a))}
function Rg(a,b,c){a.A.push(Bg(b,c,a))}
function Y(a,b,c,d){d=X(a,d);var e=v(c,a);Og(d,b,e);a.u[c]=e}
function Z(a,b,c,d){if(b in Mg){var e=Mg[b];gf(e,X(a,d),a.u[c]);0>=jf(e)&&(e.dispose(),delete Mg[b])}delete a.u[c]}
k.K=function(a,b,c){var d=this.h(a,b);if(d&&(d=u(d))){var e=Xa(arguments,2);Wa(e,0,0,a);d.apply(null,e)}};
k.h=function(a,b){return og(a,b)};
function Sg(a,b){mg(a,"tooltip-text",b)}
;function Tg(a){W.call(this,a);this.g=null}
x(Tg,W);k=Tg.prototype;k.w=function(a){var b=W.prototype.w.call(this,a);return b?b:a};
k.register=function(){Qg(this,"yt-uix-kbd-nav-move-out-done",this.hide)};
k.dispose=function(){Ug(this);Tg.o.dispose.call(this)};
k.h=function(a,b){var c=Tg.o.h.call(this,a,b);return c?c:(c=Tg.o.h.call(this,a,"card-config"))&&(c=u(c))&&c[b]?c[b]:null};
k.show=function(a){var b=this.w(a);if(b){I(b,X(this,"active"));var c=Vg(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;Wg(this,a,c);var d=X(this,"card-visible"),e=this.h(a,"card-delegate-show")&&this.h(b,"card-action");this.K(b,"card-action",a);this.g=a;lg(c);M(v(function(){e||(kg(c),N("yt-uix-card-show",b,a,c));Xg(c);I(c,d);N("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
function Vg(a,b,c){var d=c||b,e=X(a,"card");c=Yg(a,d);var f=E(X(a,"card")+Uf(d));if(f)return a=F(X(a,"card-body"),f),Xc(a,c)||(Uc(c),a.appendChild(c)),f;f=document.createElement("div");f.id=X(a,"card")+Uf(d);f.className=e;(d=a.h(d,"card-class"))&&oe(f,d.split(/\s+/));d=document.createElement("div");d.className=X(a,"card-border");b=a.h(b,"orientation")||"horizontal";e=document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var g=document.createElement("div");
g.className=X(a,"card-body");a=document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;Uc(c);g.appendChild(c);d.appendChild(a);d.appendChild(g);f.appendChild(e);f.appendChild(d);document.body.appendChild(f);return f}
function Wg(a,b,c){var d=a.h(b,"orientation")||"horizontal",e=F(X(a,"anchor"),b)||b,f=a.h(b,"position"),g=!!a.h(b,"force-position"),h=a.h(b,"position-fixed");d="horizontal"==d;var l="bottomright"==f||"bottomleft"==f,m="topright"==f||"bottomright"==f;if(m&&l){var p=13;var A=8}else m&&!l?(p=12,A=9):!m&&l?(p=9,A=12):(p=8,A=13);var t=Ed(document.body);f=Ed(b);t!=f&&(p^=4);if(d){f=b.offsetHeight/2-12;var T=new D(-12,b.offsetHeight+6)}else f=b.offsetWidth/2-6,T=new D(b.offsetWidth+6,-12);var Q=Bd(c);f=
Math.min(f,(d?Q.height:Q.width)-24-6);6>f&&(f=6,d?T.y+=12-b.offsetHeight/2:T.x+=12-b.offsetWidth/2);Q=null;g||(Q=10);b=X(a,"card-flip");a=X(a,"card-reverse");qe(c,b,m);qe(c,a,l);Q=Ne(e,p,c,A,T,null,Q);!g&&Q&&(Q&48&&(m=!m,p^=4,A^=4),Q&192&&(l=!l,p^=1,A^=1),qe(c,b,m),qe(c,a,l),Ne(e,p,c,A,T));h&&(e=parseInt(c.style.top,10),g=Oc(document).y,qd(c,"position","fixed"),qd(c,"top",e-g+"px"));t&&(c.style.right="",e=Dd(c),e.left=e.left||parseInt(c.style.left,10),g=Mc(window),c.style.left="",c.style.right=g.width-
e.left-e.width+"px");e=F("yt-uix-card-body-arrow",c);g=F("yt-uix-card-border-arrow",c);d=d?l?"top":"bottom":!t&&m||t&&!m?"left":"right";e.setAttribute("style","");g.setAttribute("style","");e.style[d]=f+"px";g.style[d]=f+"px";l=F("yt-uix-card-arrow",c);m=F("yt-uix-card-arrow-background",c);l&&m&&(c="right"==d?Bd(c).width-f-13:f+11,f=c/Math.sqrt(2),l.style.left=c+"px",l.style.marginLeft="1px",m.style.marginLeft=-f+"px",m.style.marginTop=f+"px")}
k.hide=function(a){if(a=this.w(a)){var b=E(X(this,"card")+Uf(a));b&&(J(a,X(this,"active")),J(b,X(this,"card-visible")),lg(b),this.g=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&(Uc(b.cardMask),b.cardMask=null))}};
function Ug(a){a.g&&a.hide(a.g)}
k.vb=function(a,b){var c=this.w(a);if(c){if(b){var d=Yg(this,c);if(!d)return;b instanceof xc?Cc(d,zc(b)):Yc(d,b)}H(c,X(this,"active"))&&(c=Vg(this,a,c),Wg(this,a,c),kg(c),Xg(c))}};
k.isActive=function(a){return(a=this.w(a))?H(a,X(this,"active")):!1};
function Yg(a,b){var c=b.cardContentNode;if(!c){var d=X(a,"content"),e=X(a,"card-content");(c=(c=a.h(b,"card-id"))?E(c):F(d,b))||(c=document.createElement("div"));var f=c;J(f,d);I(f,e);b.cardContentNode=c}return c}
function Xg(a){var b=a.cardMask;b||(b=document.createElement("IFRAME"),b.src='javascript:""',oe(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";document.body.appendChild(b)}
;function Zg(){Tg.call(this,"hovercard")}
x(Zg,Tg);xa(Zg);k=Zg.prototype;k.register=function(){Y(this,"mouseenter",this.qa,"target");Y(this,"mouseleave",this.sa,"target");Y(this,"mouseenter",this.ra,"card");Y(this,"mouseleave",this.ta,"card")};
k.unregister=function(){Z(this,"mouseenter",this.qa,"target");Z(this,"mouseleave",this.sa,"target");Z(this,"mouseenter",this.ra,"card");Z(this,"mouseleave",this.ta,"card")};
k.qa=function(a){if($g!=a){$g&&(this.hide($g),$g=null);var b=v(this.show,this,a),c=parseInt(this.h(a,"delay-show"),10);b=M(b,-1<c?c:200);mg(a,"card-timer",b.toString());$g=a;a.alt&&(mg(a,"card-alt",a.alt),a.alt="");a.title&&(mg(a,"card-title",a.title),a.title="")}};
k.sa=function(a){var b=parseInt(this.h(a,"card-timer"),10);Sf(b);this.w(a).isCardHidable=!0;b=parseInt(this.h(a,"delay-hide"),10);b=-1<b?b:200;M(v(this.Za,this,a),b);if(b=this.h(a,"card-alt"))a.alt=b;if(b=this.h(a,"card-title"))a.title=b};
k.Za=function(a){this.w(a).isCardHidable&&(this.hide(a),$g=null)};
k.ra=function(a){a&&(a.cardRootNode.isCardHidable=!1)};
k.ta=function(a){a&&this.hide(a.cardTargetNode)};
var $g=null;var ah=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};w("yt.uix.widgets_",ah);function bh(a){a=a.m();var b=X(a);b in ah||(a.register(),Qg(a,"yt-uix-init-"+b,a.init),Qg(a,"yt-uix-dispose-"+b,a.dispose),ah[b]=a)}
;function ch(){var a=dh,b={};b.dt=Jd;b.flash="0";a:{try{var c=a.b.top.location.href}catch(f){a=2;break a}a=c?c===a.f.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?y:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!y.navigator&&"unknown"!==typeof y.navigator.javaEnabled&&!!y.navigator.javaEnabled&&y.navigator.javaEnabled();y.screen&&(b.u_h=y.screen.height,b.u_w=y.screen.width,b.u_ah=y.screen.availHeight,b.u_aw=y.screen.availWidth,b.u_cd=y.screen.colorDepth);
y.navigator&&y.navigator.plugins&&(b.u_nplug=y.navigator.plugins.length);y.navigator&&y.navigator.mimeTypes&&(b.u_nmime=y.navigator.mimeTypes.length);return b}
function eh(){var a=dh;var b=a.b;try{var c=b.screenX;var d=b.screenY}catch(m){}try{var e=b.outerWidth;var f=b.outerHeight}catch(m){}try{var g=b.innerWidth;var h=b.innerHeight}catch(m){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,h];c=a.b.top;try{var l=Mc(c||window).round()}catch(m){l=new Ec(-12245933,-12245933)}c=l;l={};d=new Kf;n.SVGElement&&n.document.createElementNS&&d.set(0);e=nd();e["allow-top-navigation-by-user-activation"]&&d.set(1);
e["allow-popups-to-escape-sandbox"]&&d.set(2);n.crypto&&n.crypto.subtle&&d.set(3);d=Lf(d);l.bc=d;l.bih=c.height;l.biw=c.width;l.brdim=b.join();a=a.f;return l.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,l.wgl=!!y.WebGLRenderingContext,l}
var dh=new function(){var a=window.document;this.b=window;this.f=a};Ja();function fh(a){return L("EXPERIMENT_FLAGS",{})[a]}
;var gh=q(XMLHttpRequest)?function(){return new XMLHttpRequest}:q(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function hh(){if(!gh)return null;var a=gh();return"open"in a?a:null}
;function ih(a){var b=[];rb(a,function(a,d){var c=encodeURIComponent(String(d)),f;za(a)?f=a:f=[a];z(f,function(a){""==a?b.push(c):b.push(c+"="+encodeURIComponent(String(a)))})});
return b.join("&")}
function jh(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," "));e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?za(b[f])?Va(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function kh(a,b){return lh(a,b||{},!0)}
function lh(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=jh(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return Hf(a,e)+d}
;var mh={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},nh="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
oh=!1;
function ph(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=Bf(1,a),e=Af(Bf(3,a));d&&e?(d=c,c=a.match(zf),d=d.match(zf),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Af(Bf(3,c))==e&&(Number(Bf(4,c))||null)==(Number(Bf(4,a))||null):!0;d=!!fh("web_ajax_ignore_global_headers_if_set");for(var f in mh)e=L(mh[f]),!e||!c&&!qh(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||qh(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=-(new Date).getTimezoneOffset();fh("pass_biscotti_id_in_header_ajax")&&(c||qh(a,
"X-YouTube-Ad-Signals"))&&(f=void 0,f=void 0===f?u("yt.ads.biscotti.lastId_")||"":f,c=Object.assign(ch(),eh()),c.ca_type="image",f&&(c.bid=f),b["X-YouTube-Ad-Signals"]=ih(c));return b}
function rh(a){var b=window.location.search,c=Af(Bf(3,a)),d=Af(Bf(5,a));d=(c=c&&c.endsWith("youtube.com"))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=jh(b),f={};z(nh,function(a){e[a]&&(f[a]=e[a])});
return lh(a,f||{},!1)}
function qh(a,b){var c=L("CORS_HEADER_WHITELIST")||{},d=Af(Bf(3,a));return d?(c=c[d])?Sa(c,b):!1:!0}
function sh(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=th(a,b);var d=uh(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(a){if(!e){e=!0;f&&Sf(f);var c=a.ok,d=function(d){d=d||{};var e=b.context||n;c?b.onSuccess&&b.onSuccess.call(e,d,a):b.onError&&b.onError.call(e,d,a);b.I&&b.I.call(e,d,a)};
"JSON"==(b.format||"JSON")&&(c||400<=a.status&&500>a.status)?a.json().then(d,function(){d(null)}):d(null)}});
b.xa&&0<b.timeout&&(f=M(function(){e||(e=!0,Sf(f),b.xa.call(b.context||n))},b.timeout))}else vh(a,b)}
function vh(a,b){var c=b.format||"JSON";a=th(a,b);var d=uh(a,b),e=!1,f,g=wh(a,function(a){if(!e){e=!0;f&&Sf(f);a:switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var d=!0;break a;default:d=!1}var g=null,h=400<=a.status&&500>a.status,A=500<=a.status&&600>a.status;if(d||h||A)g=xh(c,a,b.nc);if(d)a:if(a&&204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(g&&g.return_code,10);break a;case "RAW":d=!0;break a}d=!!g}g=g||{};h=b.context||n;
d?b.onSuccess&&b.onSuccess.call(h,a,g):b.onError&&b.onError.call(h,a,g);b.I&&b.I.call(h,a,g)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.Aa&&0<b.timeout&&(f=M(function(){e||(e=!0,g.abort(),Sf(f))},b.timeout))}
function th(a,b){b.pc&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=Pf("XSRF_FIELD_NAME"),d=b.ba;d&&(d[c]&&delete d[c],a=kh(a,d));return a}
function uh(a,b){var c=Pf("XSRF_FIELD_NAME"),d=Pf("XSRF_TOKEN"),e=b.postBody||"",f=b.B,g=Pf("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.oc||Af(Bf(3,a))&&!b.withCredentials&&Af(Bf(3,a))!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.B&&b.B[g]||(f||(f={}),f[c]=d);f&&r(e)&&(e=jh(e),zb(e,f),e=b.Ba&&"JSON"==b.Ba?JSON.stringify(e):Ff(e));f=e||f&&!vb(f);!oh&&f&&"POST"!=b.method&&(oh=!0,Rf(Error("AJAX request with postData should use POST")));
return e}
function xh(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?yh(b):null)d={},z(b.getElementsByTagName("*"),function(a){d[a.tagName]=zh(a)})}c&&Ah(d);
return d}
function Ah(a){if(Ca(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Ac(a[b],null);a[c]=d}else Ah(a[b])}}
function yh(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function zh(a){var b="";z(a.childNodes,function(a){b+=a.nodeValue});
return b}
function wh(a,b,c,d,e,f,g){function h(){4==(l&&"readyState"in l?l.readyState:0)&&b&&Qf(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var l=hh();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",h,!1):l.onreadystatechange=h;fh("debug_forward_web_query_parameters")&&(a=rh(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=ph(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);
return l}
;var Bh={},Ch=0;
function Dh(a,b,c){var d=void 0===d?"":d;if(a)if(c&&(c=ob,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c){if(a){a instanceof rc||(a="object"==typeof a&&a.N?a.M():String(a),uc.test(a)||(a="about:invalid#zClosurez"),a=wc(a));b=tc(a);if("about:invalid#zClosurez"===b)a="";else{if(b instanceof xc)a=b;else{var e="object"==typeof b;a=null;e&&b.na&&(a=b.ja());b=$a(e&&b.N?b.M():String(b));a=Ac(b,a)}a=zc(a);a=encodeURIComponent(String(Ee(a)))}/^[\s\xa0]*$/.test(a)||(a=Rc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+
'+"\\"></body>"',style:"display:none"}),Hc(a).body.appendChild(a))}}else if(d)wh(a,b,"POST",d,void 0);else if(L("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))wh(a,b,"GET","",void 0);else{if((d=Nf.EXPERIMENT_FLAGS)&&d.web_use_beacon_api_for_ad_click_server_pings&&-1!=Af(Bf(5,a)).indexOf("/aclk")&&"1"===Jf(a,"ae")&&"1"===Jf(a,"act")){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){e=!0;break b}}catch(f){}e=!1}e?(b&&b(),e=!0):e=!1}else e=!1;e||Eh(a,b)}}
function Eh(a,b){var c=new Image,d=""+Ch++;Bh[d]=c;c.onload=c.onerror=function(){b&&Bh[d]&&b();delete Bh[d]};
c.src=a}
;function Fh(a){O.call(this,1,arguments);this.b=a}
x(Fh,O);function Gh(a){O.call(this,1,arguments);this.b=a}
x(Gh,O);function Hh(a,b,c){O.call(this,3,arguments);this.g=a;this.f=b;this.b=null!=c?!!c:null}
x(Hh,O);function Ih(a,b,c,d,e){O.call(this,2,arguments);this.f=a;this.b=b;this.i=c||null;this.g=d||null;this.source=e||null}
x(Ih,O);function Jh(a,b,c){O.call(this,1,arguments);this.b=a;this.f=b}
x(Jh,O);function Kh(a,b,c,d,e,f,g){O.call(this,1,arguments);this.f=a;this.j=b;this.b=c;this.l=d||null;this.i=e||null;this.g=f||null;this.source=g||null}
x(Kh,O);
var Lh=new P("subscription-batch-subscribe",Fh),Mh=new P("subscription-batch-unsubscribe",Fh),Nh=new P("subscription-subscribe",Ih),Oh=new P("subscription-subscribe-loading",Gh),Ph=new P("subscription-subscribe-loaded",Gh),Qh=new P("subscription-subscribe-success",Jh),Rh=new P("subscription-subscribe-external",Ih),Sh=new P("subscription-unsubscribe",Kh),Th=new P("subscription-unsubscirbe-loading",Gh),Uh=new P("subscription-unsubscribe-loaded",Gh),Vh=new P("subscription-unsubscribe-success",Gh),Wh=
new P("subscription-external-unsubscribe",Kh),Xh=new P("subscription-enable-ypc",Gh),Yh=new P("subscription-disable-ypc",Gh),Zh=new P("subscription-prefs",Hh),$h=new P("subscription-prefs-success",Hh),ai=new P("subscription-prefs-failure",Hh);var bi=null,ci="";
function di(){function a(a){var b=a.data;if(/^\s*$/.test(b)?0:/^[\],:{}\s\u2028\u2029]*$/.test(b.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))){a:{b=new Map;try{var d=JSON.parse(a.data)}catch(g){Rf(g);bi=null;break a}d.clickthroughEndpoint&&d.clickthroughEndpoint.urlEndpoint&&d.clickthroughEndpoint.urlEndpoint.url&&b.set("video_click_to_advertiser_site",
[d.clickthroughEndpoint.urlEndpoint.url]);d.visitAdvertiserLinkClickCommands&&b.set("vw_cta_v2_bottom_bar_click",ei(d.visitAdvertiserLinkClickCommands[0]));d.channelInfoBarClickCommands&&b.set("vw_cta_v2_top_bar_click",ei(d.channelInfoBarClickCommands[0]));d.subscribeButtonClickCommands&&b.set("vw_subscribe_button_click",ei(d.subscribeButtonClickCommands[0]));if(d.thumbnailClickCommands)for(var e=a=1,f=0;f<d.thumbnailClickCommands.length;f++)b.set("vw_thumb_v2_"+a+"_of_"+e,ei(d.thumbnailClickCommands[f])),
a==e?(a=1,e++):a++;bi=b}(d=bi.get("video_click_to_advertiser_site"))&&d.length&&(1<d.length&&Rf(Error("Multiple click through urls are found."),"WARNING"),fi(d[0]))}else d=decodeURIComponent(a.data.replace(/,.*/,"")),b=decodeURIComponent(a.data.replace(/.*,/,"")),fi(d),d=b,d.match(/&label=[^&]*/)?d=d.replace(/&label=[^&]*/,""):d.match(/[?]label=[^&]*&/)&&(d=d.replace(/[?]label=[^&]*&/,"?")),ci=d}
try{window.addEventListener("message",a,!1),window.parent.postMessage("companion-setup-complete","*")}catch(b){}}
function gi(a){if(bi){if(a=bi.get(a))for(var b=0;b<a.length;b++)Dh(a[b],void 0,void 0)}else b=ci,/^[\s\xa0]*$/.test(null==b?"":String(b))||(a=kh(ci,{label:a}),Dh(a))}
function ei(a){return a&&a.loggingUrls?a.loggingUrls.map(function(a){return a.baseUrl}):[]}
function fi(a){if(a){var b=document.getElementById("bottom-bar-link");b&&!b.href&&(a=a instanceof rc?a:vc(a),b.href=tc(a))}}
function hi(a,b){a&&gi(b)}
;var ii=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};w("yt.msgs_",ii);function ji(a){var b=void 0===b?{}:b;a=(a=a in ii?ii[a]:void 0)||"";var c={},d;for(d in b)c.O=d,a=a.replace(new RegExp("\\$"+c.O,"gi"),function(a){return function(){return b[a.O]}}(c)),c={O:c.O};
return a}
;function ki(){var a=Yf();return a?a:null}
;function li(){W.call(this,"tooltip");this.b=0;this.f={}}
x(li,W);xa(li);k=li.prototype;k.register=function(){Y(this,"mouseover",this.U);Y(this,"mouseout",this.H);Y(this,"focus",this.ia);Y(this,"blur",this.da);Y(this,"click",this.H);Y(this,"touchstart",this.Ea);Y(this,"touchend",this.W);Y(this,"touchcancel",this.W)};
k.unregister=function(){Z(this,"mouseover",this.U);Z(this,"mouseout",this.H);Z(this,"focus",this.ia);Z(this,"blur",this.da);Z(this,"click",this.H);Z(this,"touchstart",this.Ea);Z(this,"touchend",this.W);Z(this,"touchcancel",this.W);this.dispose();li.o.unregister.call(this)};
k.dispose=function(){for(var a in this.f)this.H(this.f[a]);this.f={}};
k.U=function(a){if(!(this.b&&1E3>Ja()-this.b)){var b=parseInt(this.h(a,"tooltip-hide-timer"),10);b&&(pg(a,"tooltip-hide-timer"),Sf(b));b=v(function(){mi(this,a);pg(a,"tooltip-show-timer")},this);
var c=parseInt(this.h(a,"tooltip-show-delay"),10)||0;b=M(b,c);mg(a,"tooltip-show-timer",b.toString());a.title&&(Sg(a,ni(this,a)),a.title="");b=Da(a).toString();this.f[b]=a}};
k.H=function(a){var b=parseInt(this.h(a,"tooltip-show-timer"),10);b&&(Sf(b),pg(a,"tooltip-show-timer"));b=v(function(){if(a){var b=E(oi(this,a));b&&(pi(b),Uc(b),pg(a,"content-id"));b=E(oi(this,a,"arialabel"));Uc(b)}pg(a,"tooltip-hide-timer")},this);
b=M(b,50);mg(a,"tooltip-hide-timer",b.toString());if(b=this.h(a,"tooltip-text"))a.title=b;b=Da(a).toString();delete this.f[b]};
k.ia=function(a,b){this.b=0;this.U(a,b)};
k.da=function(a){this.b=0;this.H(a)};
k.Ea=function(a,b,c){c.changedTouches&&(this.b=0,(a=Pg(b,X(this),c.changedTouches[0].target))&&this.U(a,b))};
k.W=function(a,b,c){c.changedTouches&&(this.b=Ja(),(a=Pg(b,X(this),c.changedTouches[0].target))&&this.H(a))};
function qi(a,b,c){Sg(b,c);a=a.h(b,"content-id");(a=E(a))&&Yc(a,c)}
function ni(a,b){return a.h(b,"tooltip-text")||b.title}
function mi(a,b){if(b){var c=ni(a,b);if(c){var d=E(oi(a,b));if(!d){d=document.createElement("div");d.id=oi(a,b);d.className=X(a,"tip");var e=document.createElement("div");e.className=X(a,"tip-body");var f=document.createElement("div");f.className=X(a,"tip-arrow");var g=document.createElement("div");g.setAttribute("aria-hidden","true");g.className=X(a,"tip-content");var h=ri(a,b),l=oi(a,b,"content");g.id=l;mg(b,"content-id",l);e.appendChild(g);h&&d.appendChild(h);d.appendChild(e);d.appendChild(f);
var m=fd(b);l=oi(a,b,"arialabel");f=document.createElement("div");I(f,X(a,"arialabel"));f.id=l;m=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==document.body.getAttribute("dir")?c+" "+m:m+" "+c;Yc(f,m);b.setAttribute("aria-labelledby",l);l=ki()||document.body;l.appendChild(f);l.appendChild(d);qi(a,b,c);(c=parseInt(a.h(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",I(g,X(a,"normal-wrap")));g=H(b,X(a,"reverse"));si(a,b,d,e,h,g)||si(a,b,d,e,h,!g);var p=X(a,"tip-visible");
M(function(){I(d,p)},0)}}}}
function si(a,b,c,d,e,f){qe(c,X(a,"tip-reverse"),f);var g=0;f&&(g=1);var h=Bd(b);f=new D((h.width-10)/2,f?h.height:0);var l=yd(b);Pe(new D(l.x+f.x,l.y+f.y),c,g);f=Mc(window);if(1==c.nodeType)var m=zd(c);else c=c.changedTouches?c.changedTouches[0]:c,m=new D(c.clientX,c.clientY);c=Bd(d);var p=Math.floor(c.width/2);g=!!(f.height<m.y+h.height);h=!!(m.y<h.height);l=!!(m.x<p);f=!!(f.width<m.x+p);m=(c.width+3)/-2- -5;a=a.h(b,"force-tooltip-direction");if("left"==a||l)m=-5;else if("right"==a||f)m=20-c.width-
3;a=Math.floor(m)+"px";d.style.left=a;e&&(e.style.left=a,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(g||h)}
function oi(a,b,c){a=X(a)+Uf(b);c&&(a+="-"+c);return a}
function ri(a,b){var c=null;Pb&&H(b,X(a,"masked"))&&((c=E("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),kg(c)):(c=document.createElement("IFRAME"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=X(a,"tip-mask")));return c}
function pi(a){var b=E("yt-uix-tooltip-shared-mask"),c=b&&id(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),lg(b),document.body.appendChild(b))}
;function ti(a){ui("delete_from_watch_later_list",a)}
function ui(a,b){vh("/playlist_video_ajax?action_"+a+"=1",{method:"POST",ba:{feature:b.feature||null,authuser:b.kc||null,pageid:b.pageId||null},B:{video_ids:b.videoIds||null,source_playlist_id:b.sourcePlaylistId||null,full_list_id:b.fullListId||null,delete_from_playlists:b.sc||null,add_to_playlists:b.jc||null,plid:L("PLAYBACK_ID")||null},context:b.context,onError:b.onError,onSuccess:function(a,d){b.onSuccess.call(this,a,d)},
I:b.I,withCredentials:!1})}
;var vi=[],wi="";function xi(a){wi=og(a,"video-ids");var b=F("sign-in-link",E("shared-addto-watch-later-login"));b&&(I(a,"addto-wl-focused"),M(function(){b.focus()},0))}
function yi(){var a=F("addto-wl-focused");a&&(J(a,"addto-wl-focused"),M(function(){a.focus()},0))}
function zi(a){var b=kh("/addto_ajax",{action_redirect_to_signin_with_add:1,video_ids:wi,next_url:document.location}),c=document.createElement("form");c.action=b;c.method="POST";b=document.createElement("input");b.type="hidden";b.name=Pf("XSRF_FIELD_NAME");b.value=Pf("XSRF_TOKEN");c.appendChild(b);document.body.appendChild(c);c.submit();a.preventDefault()}
function Ai(a){re(a,"addto-watch-later-button","addto-watch-later-button-loading");Kc(a,{"aria-pressed":"true"});var b=og(a,"video-ids");ui("add_to_watch_later_list",{videoIds:b,onSuccess:function(c,d){var e=d.list_id;Bi(e,b,a);N("playlist-addto",b,e)},
onError:function(c,d){6==d.return_code?Bi(d.list_id,b,a):Ci(a,d)}})}
function Di(a){re(a,"addto-watch-later-button-success","addto-watch-later-button-loading");var b=og(a,"video-ids");ti({videoIds:b,onSuccess:function(){re(a,"addto-watch-later-button-loading","addto-watch-later-button");var b=ji("ADDTO_WATCH_LATER");qi(li.m(),a,b);N("WATCH_LATER_VIDEO_REMOVED")},
onError:function(b,d){Ci(a,d)}})}
function Ei(a){var b=og(a,"video-ids");ti({videoIds:b,onSuccess:function(b,d){N("WATCH_LATER_VIDEO_REMOVED",a,d.result.video_count)},
onError:function(b,d){Ci(a,d)}})}
function Bi(a,b,c){re(c,"addto-watch-later-button-loading","addto-watch-later-button-success");var d=ji("ADDTO_WATCH_LATER_ADDED");qi(li.m(),c,d);N("WATCH_LATER_VIDEO_ADDED",a,b.split(","))}
function Ci(a,b){re(a,"addto-watch-later-button-loading","addto-watch-later-button-error");var c=b.error_message||ji("ADDTO_WATCH_LATER_ERROR");qi(li.m(),a,c)}
;function Fi(a){O.call(this,1,arguments)}
x(Fi,O);function Gi(a,b){O.call(this,2,arguments);this.f=a;this.b=b}
x(Gi,O);function Hi(a,b,c,d){O.call(this,1,arguments);this.b=b;this.f=c||null;this.itemId=d||null}
x(Hi,O);function Ii(a,b){O.call(this,1,arguments);this.f=a;this.b=b||null}
x(Ii,O);function Ji(a){O.call(this,1,arguments)}
x(Ji,O);var Ki=new P("ypc-core-load",Fi),Li=new P("ypc-guide-sync-success",Gi),Mi=new P("ypc-purchase-success",Hi),Ni=new P("ypc-subscription-cancel",Ji),Oi=new P("ypc-subscription-cancel-success",Ii),Pi=new P("ypc-init-subscription",Ji);var Qi=!1,Ri=[];function Si(a){a.b?Qi?R(Rh,a):R(Ki,new Fi(function(){R(Pi,new Ji(a.b))})):Ti(a.f,a.i,a.g,a.source)}
function Ui(a){a.b?Qi?R(Wh,a):R(Ki,new Fi(function(){R(Ni,new Ji(a.b))})):Vi(a.f,a.j,a.i,a.g,a.source)}
function Wi(a){Xi(Ua(a.b))}
function Yi(a){Zi(Ua(a.b))}
function $i(a){aj(a.g,a.f,a.b)}
function bj(a){var b=a.itemId,c=a.b.subscriptionId;b&&c&&R(Qh,new Jh(b,c,a.b.channelInfo))}
function cj(a){var b=a.b;rb(a.f,function(a,d){R(Qh,new Jh(d,a,b[d]))})}
function dj(a){R(Vh,new Gh(a.f.itemId));a.b&&a.b.length&&(ej(a.b,Vh),ej(a.b,Xh))}
function Ti(a,b,c,d){var e=new Gh(a);R(Oh,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=L("PLAYBACK_ID"))&&(c.plid=d);(d=L("EVENT_ID"))&&(c.ei=d);b&&fj(b,c);vh("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",ba:f,B:c,onSuccess:function(b,c){var d=c.response;R(Qh,new Jh(a,d.id,d.channel_info));d.show_feed_privacy_dialog&&N("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a)},
I:function(){R(Ph,e)}})}
function Vi(a,b,c,d,e){var f=new Gh(a);R(Th,f);var g={};g.c=a;d&&(g.eurl=d);e&&(g.source=e);d={};d.c=a;d.s=b;(a=L("PLAYBACK_ID"))&&(d.plid=a);(a=L("EVENT_ID"))&&(d.ei=a);c&&fj(c,d);vh("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",ba:g,B:d,onSuccess:function(){R(Vh,f)},
I:function(){R(Uh,f)}})}
function aj(a,b,c){if(a){var d={};d.channel_id=a;switch(b){case "receive-all-updates":d.receive_all_updates=!0;break;case "receive-no-updates":d.receive_no_updates=!0;d.receive_post_updates=!1;break;case "receive-highlight-updates":d.receive_all_updates=!1;d.receive_no_updates=!1;break;default:return}null===c||d.receive_no_updates||(d.receive_post_updates=c);var e=new Hh(a,b,c);vh("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",B:d,onError:function(){R(ai,e)},
onSuccess:function(){R($h,e)}})}}
function Xi(a){if(a.length){var b=Wa(a,0,40);R("subscription-batch-subscribe-loading");ej(b,Oh);var c={};c.a=b.join(",");var d=function(){R("subscription-batch-subscribe-loaded");ej(b,Ph)};
vh("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",B:c,onSuccess:function(c,f){d();var e=f.response,h=e.id;if(za(h)&&h.length==b.length){var l=e.channel_info_map;z(h,function(a,c){var d=b[c];R(Qh,new Jh(d,a,l[d]))});
a.length?Xi(a):R("subscription-batch-subscribe-finished")}},
onError:function(){d();R("subscription-batch-subscribe-failure")}})}}
function Zi(a){if(a.length){var b=Wa(a,0,40);R("subscription-batch-unsubscribe-loading");ej(b,Th);var c={};c.c=b.join(",");var d=function(){R("subscription-batch-unsubscribe-loaded");ej(b,Uh)};
vh("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",B:c,onSuccess:function(){d();ej(b,Vh);a.length&&Zi(a)},
onError:function(){d()}})}}
function ej(a,b){z(a,function(a){R(b,new Gh(a))})}
function fj(a,b){var c=jh(a),d;for(d in c)b[d]=c[d]}
;function gj(a){var b=hj();if(b=window.open(b,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var c=dg("LOGGED_IN",function(b){gg(L("LOGGED_IN_PUBSUB_KEY",void 0));Of("LOGGED_IN",!0);a(b)});
Of("LOGGED_IN_PUBSUB_KEY",c);b.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
function hj(){var a=document.location.protocol+"//"+document.domain+"/post_login";a=Gf(a,"mode","subscribe");a=Gf("/signin?context=popup","next",a);return a=Gf(a,"feature","sub_button")}
w("yt.pubsub.publish",N);var ij=Math.pow(2,16)-1,jj=null,kj=0,lj={log_event:"events",log_interaction:"interactions"},mj=Object.create(null);mj.log_event="GENERIC_EVENT_LOGGING";mj.log_interaction="INTERACTION_LOGGING";var nj=new Set(["log_event"]),oj={},pj=0,qj=0,rj=u("ytLoggingTransportLogPayloadsQueue_")||{};w("ytLoggingTransportLogPayloadsQueue_",rj);var sj=u("ytLoggingTransportTokensToCttTargetIds_")||{};w("ytLoggingTransportTokensToCttTargetIds_",sj);var tj=u("ytLoggingTransportDispatchedStats_")||{};
w("ytLoggingTransportDispatchedStats_",tj);w("ytytLoggingTransportCapturedTime_",u("ytLoggingTransportCapturedTime_")||{});function uj(){Sf(pj);Sf(qj);qj=0;if(!vb(rj)){for(var a in rj){var b=oj[a];b&&(vj(a,b),delete rj[a])}vb(rj)||wj()}}
function wj(){fh("web_gel_timeout_cap")&&!qj&&(qj=M(uj,3E4));Sf(pj);pj=M(uj,L("LOGGING_BATCH_TIMEOUT",1E4))}
function xj(a,b){b=void 0===b?"":b;rj[a]=rj[a]||{};rj[a][b]=rj[a][b]||[];return rj[a][b]}
function vj(a,b){var c=lj[a],d=tj[a]||{};tj[a]=d;var e=Math.round(Mf());for(m in rj[a]){var f=xb,g=b.b;g={client:{hl:g.gb,gl:g.fb,clientName:g.cb,clientVersion:g.eb}};var h=window.devicePixelRatio;h&&1!=h&&(g.client.screenDensityFloat=String(h));L("DELEGATED_SESSION_ID")&&!fh("pageid_as_header_web")&&(g.user={onBehalfOfUser:L("DELEGATED_SESSION_ID")});f=f({context:g});f[c]=xj(a,m);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=f[c].length;if(g=sj[m])a:{var l=m;if(g.videoId)h=
"VIDEO";else if(g.playlistId)h="PLAYLIST";else break a;f.credentialTransferTokenTargetId=g;f.context=f.context||{};f.context.user=f.context.user||{};f.context.user.credentialTransferTokens=[{token:l,scope:h}]}delete sj[m];f.requestTimeMs=e;if(g=Pf("EVENT_ID"))h=(L("BATCH_CLIENT_COUNTER",void 0)||0)+1,h>ij&&(h=1),Of("BATCH_CLIENT_COUNTER",h),g={serializedEventId:g,clientCounter:h},f.serializedClientEventId=g,jj&&kj&&fh("log_gel_rtt_web")&&(f.previousBatchInfo={serializedClientEventId:jj,roundtripMs:kj}),
jj=g,kj=0;yj(b,a,f,{retry:nj.has(a),onSuccess:v(zj,this,Mf())})}if(d.previousDispatchMs){c=e-d.previousDispatchMs;var m=d.diffCount||0;d.averageTimeBetweenDispatchesMs=m?(d.averageTimeBetweenDispatchesMs*m+c)/(m+1):c;d.diffCount=m+1}d.previousDispatchMs=e}
function zj(a){kj=Math.round(Mf()-a)}
;function Aj(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||L("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.lc||L("AUTHORIZATION"))||(a?b="Bearer "+u("gapi.auth.getToken")().ic:b=Od([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=L("SESSION_INDEX",0),fh("pageid_as_header_web")&&(d["X-Goog-PageId"]=L("DELEGATED_SESSION_ID")));return d}
function Bj(a){a=Object.assign({},a);delete a.Authorization;var b=Od();if(b){var c=new de;c.update(Pf("INNERTUBE_API_KEY"));c.update(b);b=c.digest();Aa(b);if(!jc)for(jc={},kc={},c=0;65>c;c++)jc[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c),kc[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c);c=kc;for(var d=[],e=0;e<b.length;e+=3){var f=b[e],g=e+1<b.length,h=g?b[e+1]:0,l=e+2<b.length,m=l?b[e+2]:0,p=f>>2;f=(f&3)<<4|h>>4;h=(h&15)<<2|m>>
6;m&=63;l||(m=64,g||(h=64));d.push(c[p],c[f],c[h],c[m])}a.hash=d.join("")}return a}
;function Cj(){var a=new sf;(a=a.isAvailable()?new yf(a,"yt.innertube"):null)||(a=new tf("yt.innertube"),a=a.isAvailable()?a:null);this.b=a?new of(a):null;this.f=document.domain||window.location.hostname}
Cj.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.b)try{this.b.set(a,b,Ja()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Ee(b))}catch(f){return}else e=escape(b);b=this.f;mc.set(""+a,e,c,"/",void 0===b?"youtube.com":b,!1)};
Cj.prototype.get=function(a,b){var c=void 0,d=!this.b;if(!d)try{c=this.b.get(a)}catch(e){d=!0}if(d&&(c=mc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Cj.prototype.remove=function(a){this.b&&this.b.remove(a);var b=this.f;mc.remove(""+a,"/",void 0===b?"youtube.com":b)};var Dj=new Cj;function Ej(a,b,c,d){if(d)return null;d=Dj.get("nextId",!0)||1;var e=Dj.get("requests",!0)||{};e[d]={method:a,request:b,authState:Bj(c),requestTime:Math.round(Mf())};Dj.set("nextId",d+1,86400,!0);Dj.set("requests",e,86400,!0);return d}
function Fj(a){var b=Dj.get("requests",!0)||{};delete b[a];Dj.set("requests",b,86400,!0)}
function Gj(a){var b=Dj.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Mf())-d.requestTime)){var e=d.authState,f=Bj(Aj(!1));wb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Mf())),yj(a,d.method,e,{}));delete b[c]}}Dj.set("requests",b,86400,!0)}}
;function Hj(a){var b=this;this.b=a||{ab:Pf("INNERTUBE_API_KEY"),bb:Pf("INNERTUBE_API_VERSION"),cb:L("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),eb:Pf("INNERTUBE_CONTEXT_CLIENT_VERSION"),gb:Pf("INNERTUBE_CONTEXT_HL"),fb:Pf("INNERTUBE_CONTEXT_GL"),hb:Pf("INNERTUBE_HOST_OVERRIDE")||"",ib:!!L("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};vg(function(){Gj(b)},0,5E3)}
function yj(a,b,c,d){!L("VISITOR_DATA")&&.01>Math.random()&&Rf(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",B:c,Ba:"JSON",Aa:function(){},
xa:d.Aa,onSuccess:function(a,b){if(d.onSuccess)d.onSuccess(b)},
wa:function(a){if(d.onSuccess)d.onSuccess(a)},
onError:function(a,b){if(d.onError)d.onError(b)},
qc:function(a){if(d.onError)d.onError(a)},
timeout:d.timeout,withCredentials:!0},f="",g=a.b.hb;g&&(f=g);g=a.b.ib||!1;var h=Aj(g,f,d);Object.assign(e.headers,h);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var l=""+f+("/youtubei/"+a.b.bb+"/"+b)+"?alt=json&key="+a.b.ab,m;if(d.retry&&fh("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(m=Ej(b,c,h,g))){var p=e.onSuccess,A=e.wa;e.onSuccess=function(a,b){Fj(m);p(a,b)};
c.wa=function(a,b){Fj(m);A(a,b)}}try{fh("use_fetch_for_op_xhr")?sh(l,e):(e.method="POST",e.B||(e.B={}),vh(l,e))}catch(t){if("InvalidAccessError"==t)m&&(Fj(m),m=0),Rf(Error("An extension is blocking network request."),"WARNING");
else throw t;}m&&vg(function(){Gj(a)},0,5E3)}
;var Ij=Ja().toString();var Jj;
if(!(Jj=u("ytLoggingTimeDocumentNonce_"))){var Kj;a:{if(window.crypto&&window.crypto.getRandomValues)try{var Lj=Array(16),Mj=new Uint8Array(16);window.crypto.getRandomValues(Mj);for(var Nj=0;Nj<Lj.length;Nj++)Lj[Nj]=Mj[Nj];Kj=Lj;break a}catch(a){}for(var Oj=Array(16),Pj=0;16>Pj;Pj++){for(var Qj=Ja(),Rj=0;Rj<Qj%23;Rj++)Oj[Pj]=Math.random();Oj[Pj]=Math.floor(256*Math.random())}if(Ij)for(var Sj=1,Tj=0;Tj<Ij.length;Tj++)Oj[Sj%16]=Oj[Sj%16]^Oj[(Sj-1)%16]/4^Ij.charCodeAt(Tj),Sj++;Kj=Oj}for(var Uj=Kj,Vj=
[],Wj=0;Wj<Uj.length;Wj++)Vj.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(Uj[Wj]&63));Jj=Vj.join("")}var Xj=Jj;w("ytLoggingTimeDocumentNonce_",Xj);function Yj(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Zj(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
w("yt_logging_screen.getRootVeType",function(a){return L(Zj(void 0===a?0:a),void 0)});
w("yt_logging_screen.getCurrentCsn",function(a){a=void 0===a?0:a;var b=L(Yj(a));b||0!=a||(b=L("EVENT_ID"));return b?b:null});
w("yt_logging_screen.setCurrentScreen",function(a,b,c){c=void 0===c?0:c;if(a!==L(Yj(c))||b!==L(Zj(c)))Of(Yj(c),a),Of(Zj(c),b),0==c&&(b=function(){setTimeout(function(){if(a){var b={clientDocumentNonce:Xj,clientScreenNonce:a},c={};c.eventTimeMs=Math.round(Mf());c.foregroundHeartbeatScreenAssociated=b;b=String;var f=u("_lact",window);f=null==f?-1:Math.max(Ja()-f,0);c.context={lastActivityMs:b(f)};b=xj("log_event");b.push(c);Hj&&(oj.log_event=new Hj);b.length>=(Number(fh("web_logging_max_batch")||0)||
20)?uj():wj()}},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b())});function ak(){W.call(this,"button");this.b=null;this.g=[];this.f={}}
x(ak,W);xa(ak);k=ak.prototype;k.register=function(){Y(this,"click",this.Ga);Y(this,"keydown",this.oa);Y(this,"keypress",this.pa);Qg(this,"page-scroll",this.Xa)};
k.unregister=function(){Z(this,"click",this.Ga);Z(this,"keydown",this.oa);Z(this,"keypress",this.pa);bk(this);this.f={};ak.o.unregister.call(this)};
k.Ga=function(a){a&&!a.disabled&&(this.toggle(a),this.click(a))};
k.oa=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey||c.metaKey)&&(b=ck(this,a))){var d=function(a){var b="";a.tagName&&(b=a.tagName.toLowerCase());return"ul"==b||"table"==b},e;
d(b)?e=b:e=Zc(b,d);if(e){e=e.tagName.toLowerCase();if("ul"==e)var f=this.nb;else"table"==e&&(f=this.mb);f&&dk(this,a,b,c,v(f,this))}}};
k.Xa=function(){var a=this.f,b=0;for(d in a)b++;if(0!=b)for(var c in a){b=a[c];var d=G(b.activeButtonNode||b.parentNode,X(this));if(void 0==d||void 0==b)break;ek(this,d,b,!0)}};
function dk(a,b,c,d,e){var f=jg(c),g=9==d.keyCode;if(g||32==d.keyCode||13==d.keyCode)if(d=fk(a,c)){if(q(d.firstElementChild))b=d.firstElementChild;else for(b=d.firstChild;b&&1!=b.nodeType;)b=b.nextSibling;if("a"==b.tagName.toLowerCase()){var h=void 0===h?{}:h;var l=void 0===l?"":l;var m=void 0===m?window:m;m=m.location;h=Hf(b.href,h)+l;h=h instanceof rc?h:vc(h);m.href=tc(h)}else Lg(b)}else g&&gk(a,b);else f?27==d.keyCode?(fk(a,c),gk(a,b)):e(b,c,d):(h=H(b,X(a,"reverse"))?38:40,d.keyCode==h&&(Lg(b),
d.preventDefault()))}
k.pa=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||c.metaKey||(a=ck(this,a),jg(a)&&c.preventDefault())};
function fk(a,b){var c=X(a,"menu-item-highlight"),d=F(c,b);d&&J(d,c);return d}
function hk(a,b,c){I(c,X(a,"menu-item-highlight"));var d=c.getAttribute("id");d||(d=X(a,"item-id-"+Da(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)}
k.mb=function(a,b,c){var d=fk(this,b);if(d){var e=Xf("table",b);b=Jc(document,"td",null,e);d=ik(d,b,Jc(document,"td",null,Xf("tr",e)).length,c);-1!=d&&(hk(this,a,b[d]),c.preventDefault())}};
k.nb=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=fk(this,b);d&&(b=Na(Jc(document,"li",null,b),jg),hk(this,a,b[ik(d,b,1,c)]),c.preventDefault())}};
function ik(a,b,c,d){var e=b.length;a=Ma(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a}
function jk(a,b){var c=b.iframeMask;c||(c=document.createElement("IFRAME"),c.src='javascript:""',c.className=X(a,"menu-mask"),lg(c),b.iframeMask=c);return c}
function ek(a,b,c,d){var e=G(b,X(a,"group")),f=!!a.h(b,"button-menu-ignore-group");e=e&&!f?e:b;f=9;var g=8,h=Dd(b);if(H(b,X(a,"reverse"))){f=8;g=9;h=h.top+"px";try{c.style.maxHeight=h}catch(p){}}H(b,"flip")&&(H(b,X(a,"reverse"))?(f=12,g=13):(f=13,g=12));var l;a.h(b,"button-has-sibling-menu")?l=wd(e):a.h(b,"button-menu-root-container")&&(l=kk(a,b));C&&!ac("8")&&(l=null);if(l){var m=Dd(l);m=new od(-m.top,m.left,m.top,-m.left)}l=new D(0,1);H(b,X(a,"center-menu"))&&(l.x-=Math.round((Bd(c).width-Bd(b).width)/
2));d&&(l.y+=Oc(document).y);if(a=jk(a,b))b=Bd(c),a.style.width=b.width+"px",a.style.height=b.height+"px",Ne(e,f,a,g,l,m,197),d&&qd(a,"position","fixed");Ne(e,f,c,g,l,m,197)}
function kk(a,b){if(a.h(b,"button-menu-root-container")){var c=a.h(b,"button-menu-root-container");return G(b,c)}return document.body}
k.Ia=function(a){if(a){var b=ck(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.h(a,"button-has-sibling-menu")?c=a.parentNode:c=kk(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=jk(this,a);d&&c.appendChild(d);(c=!!this.h(a,"button-menu-fixed"))&&(this.f[Uf(a).toString()]=b);ek(this,a,b,c);hg("yt-uix-button-menu-before-show",a,b);kg(b);d&&kg(d);
this.K(a,"button-menu-action",!0);I(a,X(this,"active"));b=v(this.Ha,this,a,!1);d=v(this.Ha,this,a,!0);c=v(this.wb,this,a,void 0);this.b&&ck(this,this.b)==ck(this,a)||bk(this);N("yt-uix-button-menu-show",a);U(this.g);this.g=[S(document,"click",d),S(document,"contextmenu",b),S(window,"resize",c)];this.b=a}}};
function gk(a,b){if(b){var c=ck(a,b);if(c){a.b=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");lg(c);a.K(b,"button-menu-action",!1);var d=jk(a,b),e=Uf(c).toString();delete a.f[e];M(function(){d&&d.parentNode&&(lg(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}e=G(b,X(a,"group"));
var f=[X(a,"active")];e&&f.push(X(a,"group-active"));pe(b,f);N("yt-uix-button-menu-hide",b);U(a.g);a.g.length=0}}
k.wb=function(a,b){var c=ck(this,a);if(c){b&&(b instanceof xc?Cc(c,zc(b)):Yc(c,b));var d=!!this.h(a,"button-menu-fixed");ek(this,a,c,d)}};
k.Ha=function(a,b,c){c=Jg(c);var d=G(c,X(this));if(d){d=ck(this,d);var e=ck(this,a);if(d==e)return}d=G(c,X(this,"menu"));e=d==ck(this,a);var f=H(c,X(this,"menu-item")),g=H(c,X(this,"menu-close"));if(!d||e&&(f||g))gk(this,a),d&&b&&this.h(a,"button-menu-indicate-selected")&&((a=F(X(this,"content"),a))&&Yc(a,fd(c)),lk(this,d,c))};
function lk(a,b,c){var d=X(a,"menu-item-selected");z(Ic(d,b),function(a){J(a,d)});
I(c.parentNode,d)}
function ck(a,b){if(!b.widgetMenu){var c=a.h(b,"button-menu-id");c=c&&E(c);var d=X(a,"menu");c?oe(c,[d,X(a,"menu-external")]):c=F(d,b);b.widgetMenu=c}return b.widgetMenu}
k.isToggled=function(a){return H(a,X(this,"toggled"))};
k.toggle=function(a){if(this.h(a,"button-toggle")){var b=G(a,X(this,"group")),c=X(this,"toggled"),d=H(a,c);if(b&&this.h(b,"button-toggle-group")){var e=this.h(b,"button-toggle-group");z(Ic(X(this),b),function(b){b!=a||"optional"==e&&d?(J(b,c),b.removeAttribute("aria-pressed")):(I(a,c),b.setAttribute("aria-pressed","true"))})}else d?a.removeAttribute("aria-pressed"):a.setAttribute("aria-pressed","true"),se(a,c)}};
k.click=function(a){if(ck(this,a)){var b=ck(this,a);if(b){var c=G(b.activeButtonNode||b.parentNode,X(this));c&&c!=a?(gk(this,c),M(v(this.Ia,this,a),1)):jg(b)?gk(this,a):this.Ia(a)}a.focus()}this.K(a,"button-action")};
function bk(a){a.b&&gk(a,a.b)}
;function mk(){W.call(this,"kbd-nav")}
var nk;x(mk,W);xa(mk);k=mk.prototype;k.register=function(){Y(this,"keydown",this.la);Qg(this,"yt-uix-kbd-nav-move-in",this.ua);Qg(this,"yt-uix-kbd-nav-move-in-to",this.ob);Qg(this,"yt-uix-kbd-move-next",this.va);Qg(this,"yt-uix-kbd-nav-move-to",this.S)};
k.unregister=function(){Z(this,"keydown",this.la);U(nk)};
k.la=function(a,b,c){var d=c.keyCode;if(a=G(a,X(this)))switch(d){case 13:case 32:this.ua(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=ue(a,"kbdNavMoveOut");!c;){c=G(a.parentElement,X(this));if(!c)break a;c=ue(c,"kbdNavMoveOut")}c=E(c);this.S(c);N("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&H(a,X(this,"list")))switch(d){case 40:this.va(b,a);break;case 38:d=document.activeElement==a,a=ok(a),b=a.indexOf(b),0>b&&!d||(b=d?a.length-1:(a.length+b-
1)%a.length,a[b].focus(),pk(this,a[b]))}c.preventDefault()}};
k.ua=function(a){var b=ue(a,"kbdNavMoveIn");b=E(b);qk(this,a,b);this.S(b)};
k.ob=function(a){var b=document;try{var c=b&&b.activeElement;var d=c&&c.nodeName?c:null}catch(e){d=null}qk(this,d,a);this.S(a)};
k.S=function(a){if(a)if(cd(a))a.focus();else{var b=Zc(a,function(a){return Wc(a)?cd(a):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
function qk(a,b,c){if(b&&c)if(I(c,X(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,te&&c.dataset)c.dataset.kbdNavMoveOut=b;else{if(/-[a-z]/.test("kbdNavMoveOut"))throw Error("");c.setAttribute("data-"+"kbdNavMoveOut".replace(/([A-Z])/g,"-$1").toLowerCase(),b)}}
k.va=function(a,b){var c=document.activeElement==b,d=ok(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),pk(this,d[c]))};
function pk(a,b){if(b){var c=hd(b,"LI");c&&(I(c,X(a,"highlight")),nk=S(b,"blur",v(function(a){J(a,X(this,"highlight"));U(nk)},a,c)))}}
function ok(a){if("UL"!=a.tagName.toUpperCase())return[];a=Na(Vc(a),function(a){return"LI"==a.tagName.toUpperCase()});
return Na(Oa(a,function(a){return jg(a)?Zc(a,function(a){return Wc(a)?cd(a):!1}):!1}),function(a){return!!a})}
;function rk(){W.call(this,"menu");this.f=this.b=null;this.g={};this.l={};this.i=null}
x(rk,W);xa(rk);function sk(a){var b=rk.m();if(H(a,X(b)))return a;var c=b.w(a);return c?c:G(a,X(b,"content"))==b.b?b.f:null}
k=rk.prototype;k.register=function(){Y(this,"click",this.ka);Y(this,"mouseenter",this.Va);Qg(this,"page-scroll",this.Ya);Qg(this,"yt-uix-kbd-nav-move-out-done",function(a){a=this.w(a);tk(this,a)});
this.i=new K};
k.unregister=function(){Z(this,"click",this.ka);this.f=this.b=null;U(Ya(sb(this.g)));this.g={};rb(this.l,function(a){Uc(a)},this);
this.l={};me(this.i);this.i=null;rk.o.unregister.call(this)};
k.ka=function(a,b,c){a&&(b=uk(this,a),!b.disabled&&Wf(c.target,b)&&vk(this,a))};
k.Va=function(a,b,c){a&&H(a,X(this,"hover"))&&Wf(c.target,uk(this,a))&&vk(this,a,!0)};
k.Ya=function(){this.b&&this.f&&wk(this,this.f,this.b)};
function wk(a,b,c){var d=xk(a,b);if(d){var e=Bd(c);if(e instanceof Ec){var f=e.height;e=e.width}else throw Error("missing height argument");d.style.width=Ad(e,!0);d.style.height=Ad(f,!0)}c==a.b&&(e=9,f=8,H(b,X(a,"reversed"))&&(e^=1,f^=1),H(b,X(a,"flipped"))&&(e^=4,f^=4),a=new D(0,1),d&&Ne(b,e,d,f,a,null,197),Ne(b,e,c,f,a,null,197))}
function vk(a,b,c){yk(a,b)&&!c?tk(a,b):(zk(a,b),!a.b||Wf(b,a.b)?a.Ja(b):ff(a.i,v(a.Ja,a,b)))}
k.Ja=function(a){if(a){var b=Ak(this,a);if(b){hg("yt-uix-menu-before-show",a,b);this.b?Wf(a,this.b)||tk(this,this.f):(this.f=a,this.b=b,H(a,X(this,"sibling-content"))||(Uc(b),document.body.appendChild(b)),b.style.minWidth=uk(this,a).offsetWidth-2+"px");var c=xk(this,a);c&&b.parentNode&&b.parentNode.insertBefore(c,b.nextSibling);J(b,X(this,"content-hidden"));wk(this,a,b);oe(uk(this,a),[X(this,"trigger-selected"),"yt-uix-button-toggled"]);N("yt-uix-menu-show",a);Bk(b);Ck(this,a);N("yt-uix-kbd-nav-move-in-to",
b);var d=v(this.yb,this,a),e=v(this.kb,this,a);c=Da(a).toString();this.g[c]=[S(b,"click",e),S(document,"click",d)];H(a,X(this,"indicate-selected"))&&(d=v(this.lb,this,a),this.g[c].push(S(b,"click",d)));H(a,X(this,"hover"))&&(a=v(this.Wa,this,a),this.g[c].push(S(document,"mousemove",a)))}}};
k.Wa=function(a,b){var c=Jg(b);c&&(Wf(c,uk(this,a))||Dk(this,c)||Ek(this,a))};
k.yb=function(a,b){var c=Jg(b);if(c){if(Dk(this,c)){var d=G(c,X(this,"content")),e=hd(c,"LI");e&&d&&Xc(d,e)&&hg("yt-uix-menu-item-clicked",c);c=G(c,X(this,"close-on-select"));if(!c)return;d=sk(c)}tk(this,d||a)}};
function zk(a,b){if(b){var c=G(b,X(a,"content"));c&&z(Ic(X(a),c),function(a){!Wf(a,b)&&yk(this,a)&&Ek(this,a)},a)}}
function tk(a,b){if(b){var c=[];c.push(b);var d=Ak(a,b);d&&(d=Ic(X(a),d),d=Ua(d),c=c.concat(d),z(c,function(a){yk(this,a)&&Ek(this,a)},a))}}
function Ek(a,b){if(b){var c=Ak(a,b);pe(uk(a,b),[X(a,"trigger-selected"),"yt-uix-button-toggled"]);I(c,X(a,"content-hidden"));var d=Ak(a,b);d&&Kc(d,{"aria-expanded":"false"});(d=xk(a,b))&&d.parentNode&&Uc(d);c&&c==a.b&&(a.f.appendChild(c),a.b=null,a.f=null,a.i&&a.i.C("ROOT_MENU_REMOVED"));N("yt-uix-menu-hide",b);c=Da(b).toString();U(a.g[c]);delete a.g[c]}}
k.kb=function(a,b){var c=Jg(b);c&&Fk(this,a,c)};
k.lb=function(a,b){var c=Jg(b);if(c){var d=uk(this,a);if(d&&(c=hd(c,"LI")))if(c=fd(c).trim(),d.hasChildNodes()){var e=ak.m();(d=F(X(e,"content"),d))&&Yc(d,c)}else Yc(d,c)}};
function Ck(a,b){var c=Ak(a,b);if(c){z(c.children,function(a){"LI"==a.tagName&&Kc(a,{role:"menuitem"})});
Kc(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+Da(c),c.id=d);(c=uk(a,b))&&Kc(c,{"aria-controls":d})}}
function Fk(a,b,c){var d=Ak(a,b);d&&H(b,X(a,"checked"))&&(a=hd(c,"LI"))&&(a=F("yt-ui-menu-item-checked-hid",a))&&(z(Ic("yt-ui-menu-item-checked",d),function(a){re(a,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),re(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))}
function yk(a,b){var c=Ak(a,b);return c?!H(c,X(a,"content-hidden")):!1}
function Bk(a){z(Jc(document,"UL",null,a),function(a){a.tabIndex=0;var b=mk.m();oe(a,[X(b),X(b,"list")])})}
function Ak(a,b){var c=og(b,"menu-content-id");return c&&(c=E(c))?(oe(c,[X(a,"content"),X(a,"content-external")]),c):b==a.f?a.b:F(X(a,"content"),b)}
function xk(a,b){var c=Da(b).toString(),d=a.l[c];if(!d){d=document.createElement("IFRAME");d.src='javascript:""';var e=[X(a,"mask")];z(ne(b),function(a){e.push(a+"-mask")});
oe(d,e);a.l[c]=d}return d||null}
function uk(a,b){return F(X(a,"trigger"),b)}
function Dk(a,b){return Wf(b,a.b)||Wf(b,a.f)}
;function Gk(){Tg.call(this,"clickcard");this.b={};this.f={}}
x(Gk,Tg);xa(Gk);k=Gk.prototype;k.register=function(){Gk.o.register.call(this);Y(this,"click",this.ga,"target");Y(this,"click",this.fa,"close")};
k.unregister=function(){Gk.o.unregister.call(this);Z(this,"click",this.ga,"target");Z(this,"click",this.fa,"close");for(var a in this.b)U(this.b[a]);this.b={};for(a in this.f)U(this.f[a]);this.f={}};
k.ga=function(a,b,c){c.preventDefault();b=hd(c.target,"button");if(!b||!b.disabled){if(b=this.h(a,"card-target"))a=document,a=r(b)?a.getElementById(b):b;b=this.w(a);this.h(b,"disabled")||(H(b,X(this,"active"))?(this.hide(a),J(b,X(this,"active"))):(this.show(a),I(b,X(this,"active"))))}};
k.show=function(a){Gk.o.show.call(this,a);var b=this.w(a),c=Da(a).toString();if(!og(b,"click-outside-persists")){if(this.b[c])return;b=S(document,"click",v(this.ha,this,a));var d=S(window,"blur",v(this.ha,this,a));this.b[c]=[b,d]}a=S(window,"resize",v(this.vb,this,a,void 0));this.f[c]=a};
k.hide=function(a){Gk.o.hide.call(this,a);a=Da(a).toString();var b=this.b[a];b&&(U(b),this.b[a]=null);if(b=this.f[a])U(b),delete this.f[a]};
k.ha=function(a,b){var c="yt-uix"+(this.j?"-"+this.j:"")+"-card",d=null;b.target&&(d=G(b.target,c)||G(sk(b.target),c));(d=d||G(document.activeElement,c)||G(sk(document.activeElement),c))||this.hide(a)};
k.fa=function(a){(a=G(a,X(this,"card")))&&(a=a.cardTargetNode)&&this.hide(a)};function Hk(a,b,c,d,e,f){this.b=a;this.u=null;this.g=F("yt-dialog-fg",this.b)||this.b;if(a=F("yt-dialog-title",this.g)){var g="yt-dialog-title-"+Da(this.g);a.setAttribute("id",g);this.g.setAttribute("aria-labelledby",g)}this.g.setAttribute("tabindex","-1");this.X=F("yt-dialog-focus-trap",this.b);this.Fa=!1;this.i=new K;this.A=[];this.A.push(Kg(this.b,"click",v(this.pb,this),"yt-dialog-dismiss"));this.A.push(S(this.X,"focus",v(this.Ua,this),!0));Ik(this);this.xb=b;this.La=c;this.Ka=d;this.F=e;this.Ma=
f;this.l=this.j=null}
var Jk={LOADING:"loading",Lb:"content",hc:"working"};function Kk(a,b){a.T()||a.i.subscribe("post-all",b)}
function Ik(a){a=F("yt-dialog-fg-content",a.b);var b=[];rb(Jk,function(a){b.push("yt-dialog-show-"+a)});
pe(a,b);I(a,"yt-dialog-show-content")}
k=Hk.prototype;
k.show=function(){if(!this.T()){this.u=document.activeElement;if(!this.Ka){this.f||(this.f=E("yt-dialog-bg"),this.f||(this.f=document.createElement("div"),this.f.id="yt-dialog-bg",this.f.className="yt-dialog-bg",document.body.appendChild(this.f)));var a=window,b=a.document;var c=0;if(b){c=b.body;var d=b.documentElement;if(d&&c)if(a=Mc(a).height,Nc(b)&&d.scrollHeight)c=d.scrollHeight!=a?d.scrollHeight:d.offsetHeight;else{b=d.scrollHeight;var e=d.offsetHeight;d.clientHeight!=e&&(b=c.scrollHeight,e=
c.offsetHeight);c=b>a?b>e?b:e:b<e?b:e}else c=0}this.f.style.height=c+"px";kg(this.f)}this.ma();c=Lk(this);Mk(c);this.j=S(document,"keydown",v(this.jb,this));c=this.b;d=dg("player-added",this.ma,this);mg(c,"player-ready-pubsub-key",d);this.La&&(this.l=S(document,"click",v(this.ub,this)));kg(this.b);this.g.setAttribute("tabindex","0");Nk(this);this.F||I(document.body,"yt-dialog-active");bk(ak.m());Ug(Gk.m());Ug(Zg.m());N("yt-ui-dialog-show-complete",this)}};
function Ok(){return Qa(Ic("yt-dialog"),function(a){return jg(a)})}
k.ma=function(){if(!this.Ma){var a=this.b;qe(document.body,"hide-players",!0);a&&qe(a,"preserve-players",!0)}};
function Lk(a){var b=Jc(document,"iframe",null,a.b);z(b,function(a){var b=og(a,"onload");b&&(b=u(b))&&S(a,"load",b);if(b=og(a,"src"))a.src=b},a);
return Ua(b)}
function Mk(a){z(document.getElementsByTagName("iframe"),function(b){-1==Ma(a,b)&&I(b,"iframe-hid")})}
function Pk(){z(Ic("iframe-hid"),function(a){J(a,"iframe-hid")})}
k.pb=function(a){a=a.currentTarget;a.disabled||(a=og(a,"action")||"",this.dismiss(a))};
k.dismiss=function(a){if(!this.T()){this.i.C("pre-all");this.i.C("pre-"+a);lg(this.b);Ug(Gk.m());Ug(Zg.m());this.g.setAttribute("tabindex","-1");Ok()||(lg(this.f),this.F||J(document.body,"yt-dialog-active"),Zf(),Pk());this.j&&(U(this.j),this.j=null);this.l&&(U(this.l),this.l=null);var b=this.b;if(b){var c=og(b,"player-ready-pubsub-key");c&&(gg(c),pg(b,"player-ready-pubsub-key"))}this.i.C("post-all");N("yt-ui-dialog-hide-complete",this);"cancel"==a&&N("yt-ui-dialog-cancelled",this);this.i&&this.i.C("post-"+
a);this.u&&this.u.focus()}};
k.setTitle=function(a){Yc(F("yt-dialog-title",this.b),a)};
k.jb=function(a){M(v(function(){this.xb||27!=a.keyCode||this.dismiss("cancel")},this),0);
9==a.keyCode&&a.shiftKey&&H(document.activeElement,"yt-dialog-fg")&&a.preventDefault()};
k.ub=function(a){"yt-dialog-base"==a.target.className&&this.dismiss("cancel")};
k.T=function(){return this.Fa};
k.dispose=function(){jg(this.b)&&this.dismiss("dispose");U(this.A);this.A.length=0;M(v(function(){this.u=null},this),0);
this.X=this.g=null;this.i.dispose();this.i=null;this.Fa=!0};
k.Ua=function(a){a.stopPropagation();Nk(this)};
function Nk(a){M(v(function(){this.g&&this.g.focus()},a),0)}
w("yt.ui.Dialog",Hk);function Qk(){W.call(this,"overlay");this.i=this.f=this.g=this.b=null}
x(Qk,W);xa(Qk);k=Qk.prototype;k.register=function(){Y(this,"click",this.aa,"target");Y(this,"click",this.hide,"close");Rk(this)};
k.unregister=function(){Qk.o.unregister.call(this);Z(this,"click",this.aa,"target");Z(this,"click",this.hide,"close");this.i&&(gg(this.i),this.i=null);this.f&&(U(this.f),this.f=null)};
k.aa=function(a){if(!this.b||!jg(this.b.b)){var b=this.w(a);a=Sk(b,a);b||(b=a?a.overlayParentNode:null);if(b&&a){var c=!!this.h(b,"disable-shortcuts")||!1,d=!!this.h(b,"disable-outside-click-dismiss")||!1;this.b=new Hk(a,c);this.g=b;var e=F("yt-dialog-fg",a);if(e){var f=this.h(b,"overlay-class")||"",g=this.h(b,"overlay-style")||"default",h=this.h(b,"overlay-shape")||"default";f=f?f.split(" "):[];f.push(X(this,g));f.push(X(this,h));oe(e,f)}this.b.show();N("yt-uix-kbd-nav-move-to",e||a);Rk(this);c||
d||(c=v(function(a){H(a.target,"yt-dialog-base")&&Tk(this)},this),this.f=S(F("yt-dialog-base",a),"click",c));
this.K(b,"overlay-shown");N("yt-uix-overlay-shown",b)}}};
function Rk(a){a.i||(a.i=dg("yt-uix-overlay-hide",Uk));a.b&&Kk(a.b,function(){var a=Qk.m();a.g=null;a.b.dispose();a.b=null})}
function Tk(a){if(a.b){var b=a.g;a.b.dismiss("overlayhide");b&&a.K(b,"overlay-hidden");a.g=null;a.f&&(U(a.f),a.f=null);a.b=null}}
function Sk(a,b){var c;if(a)if(c=F("yt-dialog",a)){var d=E("body-container");d&&(d.appendChild(c),a.overlayContentNode=c,c.overlayParentNode=a)}else c=a.overlayContentNode;else b&&(c=G(b,"yt-dialog"));return c}
function Vk(){var a=Qk.m();if(a.g)a=F("yt-dialog-fg-content",a.g.overlayContentNode);else a:{if(a=Ic("yt-dialog-fg-content"))for(var b=0;b<a.length;b++){var c=G(a[b],"yt-dialog");if(jg(c)){a=a[b];break a}}a=null}return a}
k.hide=function(a){a&&a.disabled||N("yt-uix-overlay-hide")};
function Uk(){Tk(Qk.m())}
k.show=function(a){this.aa(a)};var Wk={},Xk=[];function Yk(a){a=G(a,"yt-uix-button-subscription-container");return F("yt-dialog",F("unsubscribe-confirmation-overlay-container",a))}
function Zk(a,b){U(Xk);Xk.length=0;Wk[b]||(Wk[b]=Yk(a));Qk.m().show(Wk[b]);var c=Vk();return new Qe(function(a){Xk.push(Kg(c,"click",function(){a()},"overlay-confirmation-unsubscribe-button"))})}
;function $k(){var a=L("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!L("SESSION_INDEX")&&!L("LOGGED_IN"))}
;function al(){W.call(this,"subscription-button")}
x(al,W);xa(al);k=al.prototype;k.register=function(){Y(this,"click",this.ca);Rg(this,Oh,this.za);Rg(this,Ph,this.ya);Rg(this,Qh,this.sb);Rg(this,Th,this.za);Rg(this,Uh,this.ya);Rg(this,Vh,this.tb);Rg(this,Xh,this.rb);Rg(this,Yh,this.qb)};
k.unregister=function(){Z(this,"click",this.ca);al.o.unregister.call(this)};
k.isSubscribed=function(a){return!!this.h(a,"is-subscribed")};
k.ca=function(a){var b=this.h(a,"href"),c=this.h(a,"insecure");if(b)a=this.h(a,"target")||"_self",window.open(b,a);else if(!c)if($k()){b=this.h(a,"channel-external-id");c=this.h(a,"clicktracking");var d=bl(this,a),e=this.h(a,"parent-url");if(this.h(a,"is-subscribed")){var f=this.h(a,"subscription-id"),g=new Kh(b,f,d,a,c,e);cl(this,a)?Zk(a,b).then(function(){R(Sh,g)}):R(Sh,g)}else R(Nh,new Ih(b,d,c,e))}else dl(this,a)};
k.za=function(a){this.J(a.b,this.Ca,!0)};
k.ya=function(a){this.J(a.b,this.Ca,!1)};
k.sb=function(a){this.J(a.b,this.Da,!0,a.f)};
k.tb=function(a){this.J(a.b,this.Da,!1)};
k.rb=function(a){this.J(a.b,this.Ta)};
k.qb=function(a){this.J(a.b,this.Sa)};
k.Da=function(a,b,c){b?(mg(a,"is-subscribed","true"),c&&mg(a,"subscription-id",c),this.h(a,"show-unsub-confirm-dialog")&&(b=new ke,mg(a,"subscribed-timestamp",(b.getTime()/1E3).toString()))):(pg(a,"is-subscribed"),pg(a,"subscribed-timestamp"),pg(a,"subscription-id"));el(this,a)};
function bl(a,b){if(!a.h(b,"ypc-enabled"))return null;var c=a.h(b,"ypc-item-type"),d=a.h(b,"ypc-item-id");return{itemType:c,itemId:d,subscriptionElement:b}}
k.Ca=function(a,b){var c=G(a,"yt-uix-button-subscription-container");qe(c,"yt-subscription-button-disabled-mask-container",b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function el(a,b){var c=a.h(b,"style-type"),d=!!a.h(b,"is-subscribed");c="-"+c;var e="yt-uix-button-subscribed"+c;qe(b,"yt-uix-button-subscribe"+c,!d);qe(b,e,d);a.h(b,"subscriber-count-tooltip")&&!a.h(b,"subscriber-count-show-when-subscribed")&&(c=X(li.m()),qe(b,c,!d),b.title=d?"":a.h(b,"subscriber-count-title"));d?M(function(){I(b,"hover-enabled")},1E3):J(b,"hover-enabled")}
k.Ta=function(a){var b=!!this.h(a,"ypc-item-type"),c=!!this.h(a,"ypc-item-id");!this.h(a,"ypc-enabled")&&b&&c&&(I(a,"ypc-enabled"),mg(a,"ypc-enabled","true"))};
k.Sa=function(a){this.h(a,"ypc-enabled")&&(J(a,"ypc-enabled"),pg(a,"ypc-enabled"))};
function fl(a,b){return Na(Ic(X(a)),function(a){return b==this.h(a,"channel-external-id")},a)}
k.Qa=function(a,b,c){var d=Xa(arguments,2);z(a,function(a){b.apply(this,Ta(a,d))},this)};
k.J=function(a,b,c){var d=fl(this,a);this.Qa.apply(this,Ta([d],Xa(arguments,1)))};
function dl(a,b){var c=v(function(a){a.discoverable_subscriptions&&Of("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);this.ca(b)},a);
gj(c)}
function cl(a,b){if(!a.h(b,"show-unsub-confirm-dialog"))return!1;var c=a.h(b,"show-unsub-confirm-time-frame");return"always"==c||"ten_minutes"==c&&(c=parseInt(a.h(b,"subscribed-timestamp"),10),(new ke).getTime()<1E3*(c+600))?!0:!1}
;w("yt.setConfig",Of);w("yt.config.set",Of);w("yt.www.ads.companion.pauseAndTrackClickWithLabel",function(a){try{window.parent.postMessage("pause-video","*")}catch(b){}gi(a)});
w("ytbin.www.adcompanion.init",function(a,b){Og("addto-watch-later-button","click",Ai);Og("addto-watch-later-button-success","click",Di);Og("addto-watch-later-button-remove","click",Ei);Og("addto-watch-later-button-sign-in","click",xi);var c=E("shared-addto-watch-later-login");vi.push(Kg(c,"click",zi,"sign-in-link"));vi.push(Kg(c,"focusout",yi,"sign-in-link"));Qi=!0;Ri.push(Bg(Nh,Si),Bg(Sh,Ui));Qi||Ri.push(Bg(Rh,Si),Bg(Wh,Ui),Bg(Lh,Wi),Bg(Mh,Yi),Bg(Zh,$i),Bg(Mi,bj),Bg(Oi,dj),Bg(Li,cj));bh(Zg);bh(al);
di();gi(a);b&&(Bg(Qh,Ia(hi,!0,b)),Bg(Vh,Ia(hi,!1,b)))});}).call(this);

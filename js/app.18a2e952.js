(function(e){function t(t){for(var r,o,u=t[0],c=t[1],f=t[2],s=0,d=[];s<u.length;s++)o=u[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,f||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function u(e){return c.p+"js/"+({about:"about",detail:"detail"}[e]||e)+"."+{about:"b95b90d3",detail:"47a71607"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1,detail:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about",detail:"detail"}[e]||e)+"."+{about:"b081dfd5",detail:"93a90c4f"}[e]+".css",a=c.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var f=i[u],s=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(s===r||s===a))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){f=d[u],s=f.getAttribute("data-href");if(s===r||s===a)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],l.parentNode.removeChild(l),n(i)},l.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(l)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var f,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=u(e);var d=new Error;f=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var l=setTimeout((function(){f({type:"timeout",target:s})}),12e4);s.onerror=s.onload=f,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],s=f.push.bind(f);f.push=t,f=f.slice();for(var d=0;d<f.length;d++)t(f[d]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3562:function(e,t,n){e.exports=n.p+"img/loading.43881122.gif"},"4b8d":function(e,t,n){"use strict";n("bb1f")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},a=[],i={name:"app",components:{},beforeCreate:function(){var e=this;this.$store.commit("setMiniInterface",window.innerWidth<750),window.onresize=function(){e.$store.commit("setMiniInterface",window.innerWidth<750)}}},u=i,c=(n("4b8d"),n("2877")),f=Object(c["a"])(u,o,a,!1,null,null,null),s=f.exports,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));r["default"].use(d["a"]);var l=d["a"].prototype.push;d["a"].prototype.push=function(e){return l.call(this,e).catch((function(e){return e}))};var p=[{path:"/",name:"index",component:function(){return n.e("about").then(n.bind(null,"d504"))}},{path:"/chapter",name:"Chapter",component:function(){return n.e("detail").then(n.bind(null,"537b"))}}],b=new d["a"]({base:"",routes:p}),g=b,h=(n("0fb7"),n("450d"),n("f529")),m=n.n(h),v=(n("9e1f"),n("6ed5")),y=n.n(v),w=(n("be4f"),n("896a")),C=n.n(w),S=(n("0c67"),n("299c")),O=n.n(S),j=(n("cbb5"),n("8bbc")),k=n.n(j),x=(n("10cb"),n("f3ad")),L=n.n(x),P=(n("06f1"),n("6ac9")),T=n.n(P),_=(n("5466"),n("ecdf")),A=n.n(_),E=(n("38a0"),n("ad41")),I=n.n(E),$=(n("b84d"),n("c216")),M=n.n($),B=(n("8f24"),n("76b9")),N=n.n(B),R=(n("e3ea"),n("7bc3")),V=n.n(R),U=(n("1951"),n("eedf")),W=n.n(U);r["default"].use(W.a),r["default"].use(V.a),r["default"].use(N.a),r["default"].use(M.a),r["default"].use(I.a),r["default"].use(A.a),r["default"].use(T.a),r["default"].use(L.a),r["default"].use(k.a),r["default"].use(O.a),r["default"].use(C.a.directive),r["default"].prototype.$msgbox=y.a,r["default"].prototype.$message=m.a,r["default"].prototype.$alert=y.a.alert,r["default"].prototype.$confirm=y.a.confirm,r["default"].prototype.$prompt=y.a.prompt,r["default"].prototype.$loading=C.a.service;var D=n("2f62");r["default"].use(D["a"]);var J=new D["a"].Store({state:{connectStatus:"正在连接后端服务器……",connectType:"",newConnect:!0,shelf:[],catalog:"",readingBook:{},popCataVisible:!1,contentLoading:!0,showContent:!1,config:{theme:0,font:0,fontSize:18,readWidth:800,infiniteLoading:!1},miniInterface:!1,readSettingsVisible:!1},mutations:{setConnectStatus:function(e,t){e.connectStatus=t},setConnectType:function(e,t){e.connectType=t},setNewConnect:function(e,t){e.newConnect=t},addBooks:function(e,t){e.shelf=t},setCatalog:function(e,t){e.catalog=t},setPopCataVisible:function(e,t){e.popCataVisible=t},setContentLoading:function(e,t){e.contentLoading=t},setReadingBook:function(e,t){e.readingBook=t},setConfig:function(e,t){e.config=t},setReadSettingsVisible:function(e,t){e.readSettingsVisible=t},setShowContent:function(e,t){e.showContent=t},setMiniInterface:function(e,t){e.miniInterface=t}}}),q=(n("be72"),n("b3f5")),z=n("caf9");n("ac1f"),n("00b4");function F(e,t){return/cover\?path=|data:/.test(e)?null:"../../image?path="+encodeURIComponent(e)+"&url="+encodeURIComponent(sessionStorage.getItem("bookUrl"))+"&width="+t}r["default"].config.productionTip=!1,new r["default"]({router:g,store:J,render:function(e){return e(s)}}).$mount("#app"),r["default"].use(z["a"],{preLoad:1.3,error:n("5943"),loading:n("3562"),attempt:1,adapter:{error:function(e){var t=e.src,n=e.el,r=J.state.config.readWidth,o=F(t,r);null!=o&&(n.src=o)}}}),q["a"].get("/getReadConfig").then((function(e){var t=e.data.data;if(t){var n=JSON.parse(t),r=J.state.config;n=Object.assign(r,n),J.commit("setConfig",n)}}))},5943:function(e,t,n){e.exports=n.p+"img/error.1238cf6b.png"},b3f5:function(e,t,n){"use strict";n("99af");var r=n("bc3a"),o=n.n(r),a=o.a.create({baseURL:""});t["a"]=a},bb1f:function(e,t,n){},be72:function(e,t,n){n("d3b7"),n("25f0"),String.prototype.MD5=function(e){var t=this;function n(e,t){return e<<t|e>>>32-t}function r(e,t){var n,r,o,a,i;return o=2147483648&e,a=2147483648&t,n=1073741824&e,r=1073741824&t,i=(1073741823&e)+(1073741823&t),n&r?2147483648^i^o^a:n|r?1073741824&i?3221225472^i^o^a:1073741824^i^o^a:i^o^a}function o(e,t,n){return e&t|~e&n}function a(e,t,n){return e&n|t&~n}function i(e,t,n){return e^t^n}function u(e,t,n){return t^(e|~n)}function c(e,t,a,i,u,c,f){return e=r(e,r(r(o(t,a,i),u),f)),r(n(e,c),t)}function f(e,t,o,i,u,c,f){return e=r(e,r(r(a(t,o,i),u),f)),r(n(e,c),t)}function s(e,t,o,a,u,c,f){return e=r(e,r(r(i(t,o,a),u),f)),r(n(e,c),t)}function d(e,t,o,a,i,c,f){return e=r(e,r(r(u(t,o,a),i),f)),r(n(e,c),t)}function l(e){var t,n=e.length,r=n+8,o=(r-r%64)/64,a=16*(o+1),i=Array(a-1),u=0,c=0;while(c<n)t=(c-c%4)/4,u=c%4*8,i[t]=i[t]|e.charCodeAt(c)<<u,c++;return t=(c-c%4)/4,u=c%4*8,i[t]=i[t]|128<<u,i[a-2]=n<<3,i[a-1]=n>>>29,i}function p(e){var t,n,r="",o="";for(n=0;n<=3;n++)t=e>>>8*n&255,o="0"+t.toString(16),r+=o.substr(o.length-2,2);return r}var b,g,h,m,v,y,w,C,S,O=Array(),j=7,k=12,x=17,L=22,P=5,T=9,_=14,A=20,E=4,I=11,$=16,M=23,B=6,N=10,R=15,V=21;for(O=l(t),y=1732584193,w=4023233417,C=2562383102,S=271733878,b=0;b<O.length;b+=16)g=y,h=w,m=C,v=S,y=c(y,w,C,S,O[b+0],j,3614090360),S=c(S,y,w,C,O[b+1],k,3905402710),C=c(C,S,y,w,O[b+2],x,606105819),w=c(w,C,S,y,O[b+3],L,3250441966),y=c(y,w,C,S,O[b+4],j,4118548399),S=c(S,y,w,C,O[b+5],k,1200080426),C=c(C,S,y,w,O[b+6],x,2821735955),w=c(w,C,S,y,O[b+7],L,4249261313),y=c(y,w,C,S,O[b+8],j,1770035416),S=c(S,y,w,C,O[b+9],k,2336552879),C=c(C,S,y,w,O[b+10],x,4294925233),w=c(w,C,S,y,O[b+11],L,2304563134),y=c(y,w,C,S,O[b+12],j,1804603682),S=c(S,y,w,C,O[b+13],k,4254626195),C=c(C,S,y,w,O[b+14],x,2792965006),w=c(w,C,S,y,O[b+15],L,1236535329),y=f(y,w,C,S,O[b+1],P,4129170786),S=f(S,y,w,C,O[b+6],T,3225465664),C=f(C,S,y,w,O[b+11],_,643717713),w=f(w,C,S,y,O[b+0],A,3921069994),y=f(y,w,C,S,O[b+5],P,3593408605),S=f(S,y,w,C,O[b+10],T,38016083),C=f(C,S,y,w,O[b+15],_,3634488961),w=f(w,C,S,y,O[b+4],A,3889429448),y=f(y,w,C,S,O[b+9],P,568446438),S=f(S,y,w,C,O[b+14],T,3275163606),C=f(C,S,y,w,O[b+3],_,4107603335),w=f(w,C,S,y,O[b+8],A,1163531501),y=f(y,w,C,S,O[b+13],P,2850285829),S=f(S,y,w,C,O[b+2],T,4243563512),C=f(C,S,y,w,O[b+7],_,1735328473),w=f(w,C,S,y,O[b+12],A,2368359562),y=s(y,w,C,S,O[b+5],E,4294588738),S=s(S,y,w,C,O[b+8],I,2272392833),C=s(C,S,y,w,O[b+11],$,1839030562),w=s(w,C,S,y,O[b+14],M,4259657740),y=s(y,w,C,S,O[b+1],E,2763975236),S=s(S,y,w,C,O[b+4],I,1272893353),C=s(C,S,y,w,O[b+7],$,4139469664),w=s(w,C,S,y,O[b+10],M,3200236656),y=s(y,w,C,S,O[b+13],E,681279174),S=s(S,y,w,C,O[b+0],I,3936430074),C=s(C,S,y,w,O[b+3],$,3572445317),w=s(w,C,S,y,O[b+6],M,76029189),y=s(y,w,C,S,O[b+9],E,3654602809),S=s(S,y,w,C,O[b+12],I,3873151461),C=s(C,S,y,w,O[b+15],$,530742520),w=s(w,C,S,y,O[b+2],M,3299628645),y=d(y,w,C,S,O[b+0],B,4096336452),S=d(S,y,w,C,O[b+7],N,1126891415),C=d(C,S,y,w,O[b+14],R,2878612391),w=d(w,C,S,y,O[b+5],V,4237533241),y=d(y,w,C,S,O[b+12],B,1700485571),S=d(S,y,w,C,O[b+3],N,2399980690),C=d(C,S,y,w,O[b+10],R,4293915773),w=d(w,C,S,y,O[b+1],V,2240044497),y=d(y,w,C,S,O[b+8],B,1873313359),S=d(S,y,w,C,O[b+15],N,4264355552),C=d(C,S,y,w,O[b+6],R,2734768916),w=d(w,C,S,y,O[b+13],V,1309151649),y=d(y,w,C,S,O[b+4],B,4149444226),S=d(S,y,w,C,O[b+11],N,3174756917),C=d(C,S,y,w,O[b+2],R,718787259),w=d(w,C,S,y,O[b+9],V,3951481745),y=r(y,g),w=r(w,h),C=r(C,m),S=r(S,v);return 32==e?p(y)+p(w)+p(C)+p(S):p(w)+p(C)}}});
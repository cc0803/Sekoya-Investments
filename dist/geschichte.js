(()=>{"use strict";var e,t,n,r,o,i,a,c,s,l,p,d,u,f,m={174:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(81),o=n.n(r),i=n(645),a=n.n(i),c=n(667),s=n.n(c),l=new URL(n(691),n.b),p=a()(o()),d=s()(l);p.push([e.id,`body{min-width:100vw;padding:0;margin:0}header{min-height:150px;width:100vw;position:fixed;top:0;background-color:#fff}nav.desktop-nav{flex-wrap:wrap;width:90%;display:grid;grid-template-columns:20% 1fr 15% 15% 15% 1fr 15%;margin:0 auto 0 auto}.logoContainer{min-width:9rem;min-height:9rem;background-image:url(${d});background-repeat:no-repeat;background-size:contain;align-self:center}.mobile{height:0;display:grid;grid-template-columns:minmax(2rem, 20%) 1fr minmax(2rem, 20%);place-items:center;opacity:0;pointer-events:none}.mobile .menu-bar{font-size:2rem}.mobile .dropdown-menu{grid-area:2/1/3/4;opacity:0;height:0}a{font-size:calc(1em + .3vw);text-decoration:none;color:#000;place-self:center;overflow:hidden;display:block;position:relative;padding:.2em 0}a::after{content:"";position:absolute;bottom:0;left:0;width:100%;height:.1em;background-color:#000;opacity:0;transition:opacity 300ms,transform 300ms;overflow:hidden;opacity:1;transform:translate3d(-101%, 0, 0)}a:hover::after,a:focus::after{transform:translate3d(0, 0, 0)}a:first-of-type::after{height:0}@media(max-width: 1000px){nav.desktop-nav{grid-template-columns:25% 1fr 15% 15% 15% 1fr 15%}a{font-size:calc(.8em + .4vw)}.logoContainer{min-width:8rem;min-height:8rem}}@media(max-width: 800px){.logoContainer{background-image:url(${d})}.logoContainer{min-width:7rem;min-height:7rem}}@media(max-width: 650px){.hidden{opacity:0;pointer-events:none;width:0px;height:0px}.mobile{min-height:7rem;opacity:1;pointer-events:all}.mobile .dropdown-menu{display:flex;flex-direction:column;justify-content:space-evenly;align-items:center;font-size:1.5rem;background-color:#fff}.mobile .visible{width:100%;height:50vh;opacity:1;pointer-events:all}.mobile a:first-of-type::after{height:.1em}}`,""]);const u=p},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<e.length;l++){var p=[].concat(e[l]);r&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),t.push(p))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],p=i[l]||0,d="".concat(l," ").concat(p);i[l]=p+1;var u=n(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var m=o(f,r);r.byIndex=c,t.splice(c,0,{identifier:d,updater:m,references:1})}a.push(d)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var s=r(e,o),l=0;l<i.length;l++){var p=n(i[l]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}i=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},691:(e,t,n)=>{e.exports=n.p+"images/Logo.631fca2247ab5585d77a.PNG"}},h={};function v(e){var t=h[e];if(void 0!==t)return t.exports;var n=h[e]={id:e,exports:{}};return m[e](n,n.exports,v),n.exports}v.m=m,v.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return v.d(t,{a:t}),t},v.d=(e,t)=>{for(var n in t)v.o(t,n)&&!v.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},v.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),v.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;v.g.importScripts&&(e=v.g.location+"");var t=v.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&!e;)e=n[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),v.p=e})(),v.b=document.baseURI||self.location.href,v.nc=void 0,e=v(379),t=v.n(e),n=v(795),r=v.n(n),o=v(569),i=v.n(o),a=v(565),c=v.n(a),s=v(216),l=v.n(s),p=v(589),d=v.n(p),u=v(174),(f={}).styleTagTransform=d(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),t()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals,console.log("Hello, Geschichte"),console.log("Hello World from History")})();
(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],l=0,d=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0c9409c5":"64341049","chunk-63172222":"671f457f","chunk-2d0e95df":"c9babe2d"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-0c9409c5":1,"chunk-63172222":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0c9409c5":"c05625b5","chunk-63172222":"c963aeb8","chunk-2d0e95df":"31d6cfe0"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],f.parentNode.removeChild(f),n(c)},f.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue-spa-contacts/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],c=(n("034f"),n("2877")),u={},i=Object(c["a"])(u,a,o,!1,null,null,null),s=i.exports,l=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));r["a"].use(l["a"]);var d=[{path:"/",name:"HomePage",component:function(){return Promise.all([n.e("chunk-0c9409c5"),n.e("chunk-63172222")]).then(n.bind(null,"f4a9"))}},{path:"/contact",name:"ContactPage",component:function(){return n.e("chunk-0c9409c5").then(n.bind(null,"0abc"))},props:!0,beforeEnter:function(e,t,n){localStorage.getItem("index")?(n(),localStorage.removeItem("index")):n({name:"HomePage"})}},{path:"*",name:"NotFound",component:function(){return n.e("chunk-2d0e95df").then(n.bind(null,"8cdb"))}}],f=new l["a"]({mode:"history",base:"/vue-spa-contacts/",routes:d}),m=f,p=n("2f62");r["a"].use(p["a"]);var h=new p["a"].Store({state:{contacts:[{firstName:"Andrew",lastName:"Sharanda",secondName:"Dmitrievich",telNumber:"89119508008",massiveOfValues:{Email:"andrew@yandex.ru",Work:"Junior Frontend Developer",Sex:"Male"}},{firstName:"Ariana",lastName:"Grande",secondName:"",telNumber:"89502223344",massiveOfValues:{Email:"Grande@yandex.ru",work:"Singer",Sex:"Female"}},{firstName:"Aleksander",lastName:"Petrov",secondName:"Andreevich",telNumber:"89119508008",massiveOfValues:{Email:"Petrov@yandex.ru",Work:"Actor",Sex:"Male"}},{firstName:"Kendall",lastName:"Jenner",secondName:"",telNumber:"89502223344",massiveOfValues:{Email:"Kendall@yandex.ru",work:"Model",Sex:"Female"}},{firstName:"Pavel",lastName:"Durov",secondName:"Valerievich",telNumber:"89119508008",massiveOfValues:{Email:"Durov@yandex.ru",Work:"Programmer",Sex:"Male"}},{firstName:"Selena",lastName:"Gomez",secondName:"",telNumber:"89502223344",massiveOfValues:{Email:"Gomez@yandex.ru",work:"Singer",Sex:"Female"}}],index:0},getters:{},mutations:{updateIndex:function(e,t){e.index=t},contactMassiveMutation:function(e,t){e.contacts[e.index].massiveOfValues={},Object.assign(e.contacts[e.index].massiveOfValues,t)},defaultFieldsMutation:function(e,t){e.contacts[e.index].firstName=t[0],e.contacts[e.index].lastName=t[1],e.contacts[e.index].secondName=t[2],e.contacts[e.index].telNumber=t[3]}},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:m,store:h,render:function(e){return e(s)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.74cf3283.js.map
(()=>{"use strict";var e={4001:(e,t,r)=>{r(5363),r(71);var o=r(8880),n=r(2686),a=r(3673);function i(e,t,r,o,n,i){const s=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(s)}const s=(0,a.aZ)({name:"App"});var l=r(4260);const c=(0,l.Z)(s,[["render",i]]),u=c;var d=r(4584),p=r(3340),f=r(8339);const h=[{path:"/",component:()=>Promise.all([r.e(736),r.e(683)]).then(r.bind(r,5683)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(917)]).then(r.bind(r,4917))}]},{path:"/sitios",component:()=>Promise.all([r.e(736),r.e(50)]).then(r.bind(r,7050))},{path:"/etiquetas",component:()=>Promise.all([r.e(736),r.e(770)]).then(r.bind(r,6770))},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(614)]).then(r.bind(r,5614))}],b=h,m=(0,p.BC)((function(){const e=f.r5,t=(0,f.p7)({scrollBehavior:()=>({left:0,top:0}),routes:b,history:e("")});return t}));async function v(e,t){const o="function"===typeof d["default"]?await(0,d["default"])({}):d["default"],{storeKey:a}=await Promise.resolve().then(r.bind(r,4584)),i="function"===typeof m?await m({store:o}):m;o.$router=i;const s=e(u);return s.use(n.Z,t),{app:s,store:o,storeKey:a,router:i}}const g={config:{}},y="";async function w({app:e,router:t,store:r,storeKey:o},n){let a=!1;const i=e=>{try{return t.resolve(e).href}catch(r){}return Object(e)===e?null:e},s=e=>{if(a=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=i(e);null!==t&&(window.location.href=t,window.location.reload())},l=window.location.href.replace(window.location.origin,"");for(let u=0;!1===a&&u<n.length;u++)try{await n[u]({app:e,router:t,store:r,ssrContext:null,redirect:s,urlPath:l,publicPath:y})}catch(c){return c&&c.url?void s(c.url):void console.error("[Quasar] boot error:",c)}!0!==a&&(e.use(t),e.use(r,o),e.mount("#q-app"))}v(o.ri,g).then((e=>Promise.all([Promise.resolve().then(r.bind(r,4112)),Promise.resolve().then(r.bind(r,5474)),Promise.resolve().then(r.bind(r,2490))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));w(e,r)}))))},5474:(e,t,r)=>{r.r(t),r.d(t,{api:()=>i,default:()=>s});var o=r(3340),n=r(52),a=r.n(n);const i=a().create({baseURL:"https://api.example.com"}),s=(0,o.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=i}))},2490:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c,firebase:()=>l});var o=r(3340),n=r(5720),a=r(9535);const i={apiKey:"AIzaSyBG5I8iSkSRRHtqqHj2RGrb6w5LKGyd5yA",authDomain:"turiba-18387.firebaseapp.com",projectId:"turiba-18387",storageBucket:"turiba-18387.appspot.com",messagingSenderId:"50685434499",appId:"1:50685434499:web:f697d20c7affb8f31e59b6",measurementId:"G-GNLWE1NRJ9"},s=(0,n.ZF)(i),l=(0,a.ad)(s),c=(0,o.xr)((async()=>{}))},4112:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var o=r(3340),n=r(5175);const a={failed:"Action failed",success:"Action was successful"},i={"en-US":a},s=(0,o.xr)((({app:e})=>{const t=(0,n.o)({locale:"en-US",messages:i});e.use(t)}))},4584:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});var o=r(3340),n=r(741);const a=(0,o.h)((function(){const e=(0,n.MT)({modules:{},strict:!1});return e}))}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,o,n,a)=>{if(!o){var i=1/0;for(u=0;u<e.length;u++){for(var[o,n,a]=e[u],s=!0,l=0;l<o.length;l++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](o[l])))?o.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,n,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{50:"85643b86",614:"6ad3c3ca",683:"04f23681",770:"48507954",917:"32aa9c1c"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{50:"ec58d82f",143:"31d6cfe0",736:"015cf231",770:"0245657d",917:"5334f7a3"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="admin-turiba:";r.l=(o,n,a,i)=>{if(e[o])e[o].push(n);else{var s,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+a),s.src=o),e[o]=[n];var p=(t,r)=>{s.onerror=s.onload=null,clearTimeout(f);var n=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(r))),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p=""})(),(()=>{var e=(e,t,r,o)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var a=a=>{if(n.onerror=n.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,n.parentNode.removeChild(n),o(l)}};return n.onerror=n.onload=a,n.href=t,document.head.appendChild(n),n},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var n=r[o],a=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(a===e||a===t))return n}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){n=i[o],a=n.getAttribute("data-href");if(a===e||a===t)return n}},o=o=>new Promise(((n,a)=>{var i=r.miniCssF(o),s=r.p+i;if(t(i,s))return n();e(o,s,n,a)})),n={143:0};r.f.miniCss=(e,t)=>{var r={50:1,770:1,917:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=o(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,o)=>{var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise(((r,o)=>n=e[t]=[r,o]));o.push(n[2]=a);var i=r.p+r.u(t),s=new Error,l=o=>{if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,n[1](s)}};r.l(i,l,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[i,s,l]=o,c=0;if(i.some((t=>0!==e[t]))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(l)var u=l(r)}for(t&&t(o);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},o=globalThis["webpackChunkadmin_turiba"]=globalThis["webpackChunkadmin_turiba"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[736],(()=>r(4001)));o=r.O(o)})();
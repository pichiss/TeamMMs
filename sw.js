if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const f=e=>i(e,r),l={module:{uri:r},exports:o,require:f};s[r]=Promise.all(n.map((e=>l[e]||f(e)))).then((e=>(t(...e),o)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-BHLgbHBH.css",revision:null},{url:"index.html",revision:"7b2f8e450e278375feaef7df61af1ace"},{url:"registerSW.js",revision:"5b17ed40c335ef76b5dc0db7d695bf9a"},{url:"manifest.webmanifest",revision:"15bdaf11eb3c85b19b0662b9487e45e8"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));

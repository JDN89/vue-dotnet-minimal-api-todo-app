if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let a={};const o=s=>i(s,n),t={module:{uri:n},exports:a,require:o};e[n]=Promise.all(l.map((s=>t[s]||o(s)))).then((s=>(r(...s),a)))}}define(["./workbox-455a0d7a"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...all_.af56b585.js",revision:null},{url:"assets/404.6bc6106b.js",revision:null},{url:"assets/about.5b76da44.js",revision:null},{url:"assets/about.759233b6.css",revision:null},{url:"assets/app.c27d086a.js",revision:null},{url:"assets/dashboard.ddbf59a3.js",revision:null},{url:"assets/login.754e08c9.js",revision:null},{url:"assets/login.8ec7bccd.css",revision:null},{url:"assets/main.577be5b4.css",revision:null},{url:"assets/main.d36dd3d5.js",revision:null},{url:"assets/myTodos.31f7a467.css",revision:null},{url:"assets/myTodos.e811d351.js",revision:null},{url:"assets/object.46396afd.js",revision:null},{url:"assets/README.14c8274a.js",revision:null},{url:"assets/register.0b1257a0.js",revision:null},{url:"assets/register.a1786c91.css",revision:null},{url:"assets/vendor.8a5c162a.js",revision:null},{url:"assets/virtual_pwa-register.149c0d5d.js",revision:null},{url:"index.html",revision:"28a3d2a76660f3e558fc1fe7edf293a6"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-192x192.png",revision:"65f6c00ff3d88d8371df0480c1ba0272"},{url:"pwa-512x512.png",revision:"20a2db7d5040eb315e6acf49c6983de9"},{url:"manifest.webmanifest",revision:"37e8d18026b05432f623fc5efac2b4b1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));

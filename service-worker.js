"use strict";var precacheConfig=[["/index.html","ee545e735d565009d537344904ad2216"],["/static/css/main.11017f07.css","854a448ea39174d5b6e234273d5eac89"],["/static/js/main.1ab8cb3a.js","6280974187b1b68ff5cfd1ec6314005e"],["/static/media/Brakeout.7b033afe.png","7b033afe5a0a052430b322dad4853492"],["/static/media/EasyDo.2e99b40b.png","2e99b40bfd0c030a50cbccbb52368fee"],["/static/media/ImageGallery.590ca717.png","590ca717c3bc2ce5b247f0c7d7d1db5e"],["/static/media/Pong.2e648a17.png","2e648a179028274a61dc95aa1cfc2f4a"],["/static/media/SpaceWar.d41be1b9.jpg","d41be1b98d80b53a69cb9540ae043325"],["/static/media/TicTac.b6a1c37d.png","b6a1c37d236844420b799623c742935d"],["/static/media/brainconcert.cd6b0db9.png","cd6b0db95e234d57249700b0bec18fa9"],["/static/media/github.icon.8e265b3a.svg","8e265b3a5ee6e3a2cdef354c879fdfe8"],["/static/media/iamrobbie.a9c7803f.png","a9c7803fb2c7d29544caecf2d2afca47"],["/static/media/knolyx.9ced86a1.png","9ced86a1212672c1f3f2b51561f70479"],["/static/media/linkedin.icon.680e75b5.svg","680e75b5630bc4c73c92eb433cac5330"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});
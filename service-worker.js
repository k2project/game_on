"use strict";var precacheConfig=[["/game_On/index.html","8a723cc51a6eb97c89f673ceb4cda98d"],["/game_On/static/css/main.8401fb76.css","a72ee37a238eae0e80a0845e00ecc33d"],["/game_On/static/js/main.8a9b6f76.js","ab25e2d0f509b5129400ebcda084e4af"],["/game_On/static/media/KrisKopczynskiResume.c80e54bc.pdf","c80e54bc0f476f7dfe4b329e92c7809c"],["/game_On/static/media/brick_black.9fde76f1.png","9fde76f1485add611b9d5786e059a42b"],["/game_On/static/media/brick_blue_full.2e9128db.png","2e9128dbadd1c45f7e675d073154a6db"],["/game_On/static/media/brick_green_full.08bd92d2.png","08bd92d256f13f5c11e85dee257bb0f8"],["/game_On/static/media/brick_pink_full.a5a155bd.png","a5a155bda9ff1485c0a6db0f186391af"],["/game_On/static/media/brick_yellow_full.fad48d36.png","fad48d366f5560b338b8f724fdf5e25a"],["/game_On/static/media/calvocoressi.0daded59.png","0daded59119438719b1f07d75477fa37"],["/game_On/static/media/chart2.26fcf32d.gif","26fcf32d61d4e2957ff3e847a9094225"],["/game_On/static/media/game.56c4e864.png","56c4e86490465781afff01bf2ddcf846"],["/game_On/static/media/heart_red.afec8787.png","afec8787040b478c966400298226ed4f"],["/game_On/static/media/mail.c79d8da6.png","c79d8da6dbf4cf4e8473e77e2c64f75e"],["/game_On/static/media/mcbride.a5ce567d.png","a5ce567d829048a24c0884ae61b7fb74"],["/game_On/static/media/mg.a82ccb4d.png","a82ccb4d3e602f62877cf746a0a1d288"],["/game_On/static/media/mobile.2609c629.png","2609c62907be024b719685047d229d50"],["/game_On/static/media/rte.045b57c5.png","045b57c531b61122ee5ecd62ea7f5ec4"],["/game_On/static/media/spm.bfb22110.png","bfb2211004cdc97eea473115ea813305"],["/game_On/static/media/wall.b7debfac.png","b7debfacf66f98c973646dfc86dbdc00"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/game_On/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});
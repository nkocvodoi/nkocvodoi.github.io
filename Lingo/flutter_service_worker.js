'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "8c4452c6493c7fa9ac847148ba8cd6af",
"assets/assets/16typh_on_the_mic.jpg": "55eef323ce0942f00d66b3260972bc1f",
"assets/assets/class/bee.png": "7d56e788d3ab3e3e4db6d562cda757b4",
"assets/assets/class/dot.png": "12ff8994208fd8e8982b1f861ed2f957",
"assets/assets/class/dot1.png": "7a72e0f77b5fa9854b9517a5a41d59eb",
"assets/assets/class/droplets.png": "f169475ca74ab6c06e77ae3ff7f8dd5d",
"assets/assets/class/face.png": "c0945423d541a842524154af4896a34e",
"assets/assets/class/face1.png": "986a491f077bb0a185b48a0a058f857f",
"assets/assets/class/picture.png": "1296c6625508223173a26bfbb26a2777",
"assets/assets/class/star.png": "25d174ce1068cf733350b3b8a8ee2a60",
"assets/assets/class_image/class1.png": "d2c6d650e8c104877e40162319a807a5",
"assets/assets/class_image/class10.png": "9e4bea1c527a368eb4d9864d3dc688ea",
"assets/assets/class_image/class11.png": "3213717e1208737a4f0db5fb1e5f125a",
"assets/assets/class_image/class12.png": "138000784318514fab4297a9b696eba6",
"assets/assets/class_image/class2.png": "e6db11d9f5251448987f64590b79bf03",
"assets/assets/class_image/class3.png": "edee5051859bdd929e419deabc326f30",
"assets/assets/class_image/class4.png": "ffc7d92118c1366cf045cb764a506122",
"assets/assets/class_image/class5.png": "8410a41901fc792a43207bb23890bfcc",
"assets/assets/class_image/class6.png": "c2d757cca2b7a6c7cb5ca28f4c586ea7",
"assets/assets/class_image/class7.png": "a8b4adbad073def8f878a8cbcfd15ba4",
"assets/assets/class_image/class8.png": "b43a3665818293c12608c3fc75a76375",
"assets/assets/class_image/class9.png": "77a9016624abf29d08f954ee66087dce",
"assets/assets/congrats.png": "0c2d33f1f69a088cf04d4d0442ec0f41",
"assets/assets/defaultAvatar.png": "5e439e3e8ebbf64d04500663452e0491",
"assets/assets/divider.jpg": "1173779a57cecec67fc9da7f8e596be6",
"assets/assets/error_image.png": "cae04f9cf003dc5f6da3bd525d461f84",
"assets/assets/fonts/Noyh%2520R%2520W01%2520SemiLight.ttf": "2ece2ca570f9b741d03cd6305ce9f8d5",
"assets/assets/fonts/Quicksand-Bold.ttf": "c1d0f36c2c3c71055c35da08abfe6240",
"assets/assets/fonts/Quicksand-Medium.ttf": "30b2cad3af7f2ca3686bbb94d8c767db",
"assets/assets/fonts/Quicksand-Regular.ttf": "f09f5fb975956d636590164e9491d874",
"assets/assets/hive2.jpg": "3ffb0d97e3390684ef6c6ced12812be1",
"assets/assets/honey_point.jpg": "fd0c2c6dde47daaf3b26971ad9f222ef",
"assets/assets/icon.png": "207bf25593f57bfe49b6fa2191f50151",
"assets/assets/login/facebook.png": "347f555db7764a66bab0defc036997ac",
"assets/assets/login/Google.png": "6ec98c6c49a9c19b82ab1c54a260f0b2",
"assets/assets/login/Lingo.png": "9a672bdae9e41dd5f93e95042b192119",
"assets/assets/login/logoApp.png": "d525a785bb21f4fc941142e9d85b8326",
"assets/assets/lottie/bee.json": "f0aedd9356eb08f7081eb302a0bd09c0",
"assets/assets/lottie/fireworks-background.json": "999d63b98c544b390e433e8341f2204d",
"assets/assets/lottie/glow.json": "ec8f3fa01b6d2c17450a154848154e7e",
"assets/assets/lottie/loading.json": "be5860bcd8124f63a28e3cb9680d10a5",
"assets/assets/lottie/waiting_dots.json": "26cba83302c772cf63e8e9ae7397ae80",
"assets/assets/medal.jpg": "49e51352986b1d1128e5ae5539c38f19",
"assets/assets/profile/1.png": "1e5e8b7b0d1db4fff178262541e404cf",
"assets/assets/profile/2.png": "b9df346f8661435515e6230b3057dc5b",
"assets/assets/profile/3.png": "fda3b7f1c3990fb5f9b9e66448620816",
"assets/assets/profile/setting.png": "011e42f9d02d39e1a9be66b1b82049f6",
"assets/assets/setting/bell.png": "41bf36a3d2d7d96dbb7817906da05cbe",
"assets/assets/setting/clock.png": "a2301a5df05ae02d7229657b16c803fc",
"assets/assets/setting/earth.png": "c61cc35a9e59fa720d9f33b035da2f5c",
"assets/assets/setting/hear.png": "48471023741797cf6b10455c57d7fb52",
"assets/assets/setting/help.png": "cf250d86fb61a654816625d98db30a54",
"assets/assets/setting/speak.png": "f0a45c9ae720d7bafaa3409a3615dfa4",
"assets/assets/setting/star.png": "b8d9d6a5baae9aea1e5ed5d53761a1d4",
"assets/assets/snail.jpg": "3b147526e9fb171124bed1b5d49bef69",
"assets/assets/sounds/correct_answer.mp3": "4b708693bdc8c9ebe7814ac37f3835fe",
"assets/assets/sounds/wrong.mp3": "d256682fb26f01e49c9ec6e39cf47ab9",
"assets/assets/splash/lingo.png": "290c4b8be8144aaa8f6d3cc20e77696d",
"assets/assets/splash/logoApp.png": "d525a785bb21f4fc941142e9d85b8326",
"assets/assets/star.jpg": "3ab336d92414308ea75d1697d5ede1da",
"assets/assets/waiting/back_01.png": "7662063a70d33723a84522b36cb70218",
"assets/assets/waiting/bee.json": "e99134736f9a07339ea90f1cdd3e9f9f",
"assets/assets/waiting/img_0.png": "8572e5356a98b31c9bf452d3ef0e7ded",
"assets/assets/waiting/img_1.png": "36fa60bcdd2f2def667c9064dbd454f0",
"assets/assets/waiting/img_2.png": "5e679e649653651583e1aae68b854bc0",
"assets/assets/waiting/img_3.png": "8fe6f1d738f4d48e82af5aa78559c888",
"assets/assets/waiting/img_d.png": "bd5b45325a5f1f3e07a945f0bda1d42f",
"assets/FontManifest.json": "69515209ef252cf8bc97fb0e78e12786",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "0eece261cd3c93f2fbafdaccf9b86f42",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/packages/fluttertoast/assets/toastify.css": "8beb4c67569fb90146861e66d94163d7",
"assets/packages/fluttertoast/assets/toastify.js": "8f5ac78dd0b9b5c9959ea1ade77f68ae",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "831eb40a2d76095849ba4aecd4340f19",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a126c025bab9a1b4d8ac5534af76a208",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d80ca32233940ebadc5ae5372ccd67f9",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter_facebook_auth.js": "3b3b32ad3973de3b393ef88861f3b72b",
"Icon%2016.png": "71fc0dadb5aa45ac773ea94652d2cc36",
"icons/Icon%20192.png": "2f1117b2570fd7cb0e03f90eedb8e925",
"icons/Icon%20512.png": "f1a1b31c5da2b5b070ecfdcc77700611",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "12b1599d459d1724fda71f2000cef85b",
"/": "12b1599d459d1724fda71f2000cef85b",
"main.dart.js": "84039d712ab35e11cfa2c4a27d898e40",
"manifest.json": "d029267b21b6da0e2608bb301c4e6bb4",
"version.json": "9b66ab684584a59d727d4742f067b61b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

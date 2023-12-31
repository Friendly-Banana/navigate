'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".idea/web.iml": "52db5efd0fe9f576a1302b8c4b5eac6c",
".idea/modules.xml": "1eb3b065c55895e347308e50cd717dee",
".idea/misc.xml": "e6b023077aa4876dbe12734108325458",
".idea/markdown.xml": "d2a687aa9f56638623cacfb89d5a461c",
".idea/vcs.xml": "7ebe5d8b4d3108102ad569a417d946c5",
".git/COMMIT_EDITMSG": "0f6435d4299a04885ad5642f21c654f3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/logs/HEAD": "0880776348b6f0153cf550ee73f99e18",
".git/logs/refs/heads/main": "0880776348b6f0153cf550ee73f99e18",
".git/logs/refs/remotes/origin/HEAD": "3cca9367d70f03eb68d9181957542a9e",
".git/logs/refs/remotes/origin/main": "c0981a997392e6e8377f808e2c5b4e03",
".git/config": "886c5d764f12071040f7459b8fe694be",
".git/refs/heads/main": "ff6ba0cae8e842fbb1b5c16c821b2485",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "ff6ba0cae8e842fbb1b5c16c821b2485",
".git/index": "7dcb755eeac569f44d8831f7b65b3d63",
".git/packed-refs": "482aab75425e711dabab579252bac4f8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/objects/e5/22f3740f7e3e1f36e9a3912c0472e06050dd98": "90c69a591b6ef1b406b719ffc3e3b33c",
".git/objects/df/aeec4e5fa99ac355f1c965b209b61713c31c65": "c6a423487bcdb97284ca312fe39fba14",
".git/objects/05/738142a90df7980654cd21703a0eedec6e2c9a": "24170bf3b87866fccb2eb825d353f797",
".git/objects/56/bf4bba3d8e40928230d1504b8a3cfbe1789236": "66a41807fa069856ffe62cca615206b7",
".git/objects/ac/21a7afcb71a4a5db7ddb53af2cbdc5ae744e9c": "025856ee312c59f77a2ddb37e9f73269",
".git/objects/8e/a454c26f5142f6b0f9b419d03f61db1e5764e8": "77490c0deab8795fd825fc6997d70dd9",
".git/objects/93/a1e2d1061c3a667acb538b7b2e226ff6645688": "3cb50d607e6a74108ae3b743b43d761f",
".git/objects/pack/pack-8ecb68d966bfccf09595e6a4a6104c6f12a04707.idx": "1eed7e79df266741a3e8b384a7eb95ad",
".git/objects/pack/pack-8ecb68d966bfccf09595e6a4a6104c6f12a04707.pack": "e384dd0411efd2bfd4c5762e2a92be0b",
".git/objects/cb/dbddc63930f195966a7b780a2e16423d04af7f": "d1df65f2076e37221795e9c335b504ed",
".git/objects/88/601372757d64d53837d9be97695dd7513c9182": "66082c10a55719543d817aa24e51cf61",
".git/objects/41/fcbd6a956fb298e4c581caeed984e045ba151f": "85bd09f8f9a3117f85c4928fb3ed276b",
".git/objects/69/3351b9828c605e7b4618d3f34bb89d6a206c65": "bff610e6ba5bc30316213c1ee6617768",
".git/objects/ea/4d0a2d690784e03736b107567de272bb67e2ab": "65a77364095c5f19fec1f0a08956908b",
".git/objects/0b/5fb8c8fa5c71e7db8f03bab6ac6df05e474a94": "d3271f111e450fd2dc428f3700c2aac4",
".git/objects/4f/9bb904e66f3ccf89ab1eeecdfe16d408de6b30": "7a23e58c605a0a7c96e93b7db6ff0cc9",
".git/objects/48/c6c60ca55d75b3ba3f0ab88001cf45c2dab6e5": "9fb0b88bf7cc98c02f7f916f75594adf",
".git/objects/97/819d3a55ba48c72e4c1ae942764adf29df0f8f": "2e28695815bbe73688408bdc004c2f5e",
".git/objects/86/7d9ddd53a635dc65afc0639698395a08132dc2": "c4055c396d8e2536043d0d24e788eba4",
".git/objects/fc/2a974786397867aeba4a39ecd5a1207241fac2": "a9059d6d8206f4740720caa84af461e4",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/e3/6c53c1d1a8ed4a5c58b752577ee8ec4fc1c583": "bb7a8194405c97a8ad4ad65e847d7928",
".git/objects/af/ddd290a4e5e07fea326fc05bc144cdb933c166": "a18c48274ff01acfaaa44333da431402",
".git/objects/07/880deb7d70c9bceaef48c30e1202f6b4f4bdab": "80bea14a7ae23e390fc86a63b6ad8dca",
".git/objects/50/42199158095487bc540c4e93bfe104157a9404": "e9e5039c67cc4934762338ff46cdf80e",
".git/objects/eb/e6461c07ff68cd306628cbd9783351dde18cfd": "5bbb262f9c107945b17edd394800d951",
".git/objects/dc/933db1798a66311981bd844a87d2976fdd2429": "03a36dec5c1575917666d04287103aed",
".git/objects/33/c29d498002abdb9e686d494059d28ad2f6ed5b": "e65e9423b5d2abec33140d0bba41a965",
".git/objects/52/21197ca36da074a98e1997af04d58a78370c99": "886c68f7a39e9d406d5653ede64bd07a",
".git/objects/b2/d3699156418d34f0f64288eb1c2e31340b5e3d": "56eaa076883a745566a6a9c76f0050a5",
".git/objects/c0/1cebd5ed4ca6b0e31d3e737acedc5d4fe036d8": "58f73c33a3b2c98a1470358e51ad6954",
".git/objects/9f/9576e3f8948b6a00e0ae8a0db45c80d292160f": "513a607c4d4f77972050f002d418aaea",
".git/objects/9f/529ea406bafa8a6b205cc747ab701263567bca": "fb071959906a85703d76c9a9d88a9f07",
".git/objects/3f/02363849325eaed596f81a64a74ba11dc9a53a": "491977b9dd785510b3d752e290fcbfc3",
".git/objects/12/dbd9131ff2243653ee1dfe3d718c38a3be2021": "21895690e2e0b0ca0c01c629563ccc84",
".git/objects/12/b9c99d1e28ee8237ac66f646316b29bf817d95": "9dce402f94dbe6d922f1693d1c6e5c84",
".git/objects/12/dff7fbe415911d9da37c04d0bab132746e2172": "5a58a63938013c5d44a4ab28f8547f98",
".git/objects/49/b691df5072d5d5e2593939fc1ce1c2a1f82e34": "1df5b52562cbf616cb770ef3271abadd",
".git/objects/e0/e131e4ce5f8fadc37c4b09fb0f1932ee19302a": "2ff399e6c2c54fe9b1ab92152f59db84",
".git/objects/e0/b9af8cfed48fdebf5cde0aa25180684a640507": "db23af87b5eb4d1b4237207bdc60e7bf",
".git/objects/1b/5f9bb8e3b30f722cc62e1a34f12d40362b62de": "af332721e9bd5fb0fcfbf879ba9e6bb2",
".git/objects/b7/0c2cd525672b520494bba5d5ac902090a3a2fa": "cff01df464a5ebcacb047b1072f71fcb",
".git/objects/16/82cd07655d7f65a23c6728177729ee247d2b92": "400de989d8950daeb32c1b3f4bbfbc1d",
".git/objects/45/63e78ca3945526e913ead70b346d20b40553f1": "e7e3a83d7a43d7de0a7623ac72e08acd",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.smcbin": "44519516709cbae8cccaa728228c6414",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "f4cf62e808f675366b005e6f4d439138",
"assets/assets/floorplans/0.png": "4ea1b459b074e59d45f8d880adc03303",
"assets/assets/floorplans/1.png": "8b27aa533c297122c50e8a0208c9f7ea",
"assets/assets/floorplans/2.png": "409ea2e8bdf321d3949935d095844cfb",
"assets/AssetManifest.json": "81ed3629a32e758b640c907683c4b535",
"assets/NOTICES": "04e77db05aa4bd8f000964e512c54ef8",
"assets/fonts/MaterialIcons-Regular.otf": "f8fb7e010529f16c3fa58f9a51e03761",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"main.dart.js": "987e2386804082fb7049863f3998ef3d",
"index.html": "e46145e89021abf637a0e2265b9138c2",
"/": "e46145e89021abf637a0e2265b9138c2",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"manifest.json": "e7ba5886e5741150f44c99b6786d266a",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"canvaskit/canvaskit.js": "45bec3a754fba62b2d8f23c38895f029",
"canvaskit/skwasm.js": "9265c6c0cdc6b28cff3e81701d8fd707",
"canvaskit/chromium/canvaskit.js": "6bdd0526762a124b0745c05281c8a53e",
"canvaskit/chromium/canvaskit.wasm": "adf6e872ecef974ac963dfbee4f041dc",
"canvaskit/canvaskit.wasm": "0d1971e11a8183c2f8043b5e686d4cc4",
"canvaskit/skwasm.wasm": "db1354e7167ab2d144fbf7cb788bb43d",
"version.json": "741e40ea7c87f1b36f380e64cbb13335"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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

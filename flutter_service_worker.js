'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".idea/misc.xml": "a4b7aad4eb88e478b3ebc4535e15b657",
".idea/modules.xml": "9e76b956e97dbf7d14a4b3d83c8c2375",
".idea/other.xml": "415f52f0400b7636c244416c2dd2448a",
".idea/vcs.xml": "1a16809a3a296b65911ab7b1b4ce2459",
".idea/web.iml": "24742e734b568c3f23d56498828ad0f3",
".idea/workspace.xml": "8131c6ae5e1b0e24ba5bcda4630f4ec9",
"assets/AssetManifest.bin": "4efad5185d795b9fc9a25f14eb8e3abf",
"assets/AssetManifest.bin.json": "d11f826260d3eac1895333a04f7720a9",
"assets/AssetManifest.json": "9e370b2e6ed7bced175f04c6cf236000",
"assets/assets/blog/Day%25201%2520-%2520Container.png": "d1fb4cfb5cdc095830ecff960a811ab5",
"assets/assets/blog/Day%252010%2520-%2520Padding.png": "429c746734ddf845e8ff46ba7f9771dd",
"assets/assets/blog/Day%252011%2520-%2520Align.png": "15715ad3d5ceebc4e62f6dbad95bda20",
"assets/assets/blog/Day%252012%2520-%2520SizedBox.png": "74ee0d58528e929a1d9aa4eeeec16a1d",
"assets/assets/blog/Day%252013%2520-%2520ElevatedButton.png": "adcdfbf8fecf24b51637eb9cb1be3059",
"assets/assets/blog/Day%252014%2520-%2520IconButton.png": "25bcac851bf2849680b472f624bb6401",
"assets/assets/blog/Day%252015%2520-%2520FloatingActionButton.png": "20a504c5590921cf27736d8a64a80c0b",
"assets/assets/blog/Day%252016%2520-%2520TextField.png": "3f20f0247e71ba57ed7c08766a43108d",
"assets/assets/blog/Day%252017%2520-%2520Form.png": "6b414d31c26959c3d9408880590ccf72",
"assets/assets/blog/Day%252018%2520-%2520CheckBox.png": "75902edc8bb854f93b03942ec084a4d6",
"assets/assets/blog/Day%252019%2520-%2520Switch.png": "b3d2ff805e0cd25acb4cb3adf6789d28",
"assets/assets/blog/Day%25202%2520-%2520Row.png": "127bde9913c6a7789ed5eb500c3cc7e2",
"assets/assets/blog/Day%252020%2520-%2520RadioListTile.png": "2eae4f305a1004af60c4f631ed50b545",
"assets/assets/blog/Day%25203%2520-%2520Column.png": "1dd2eb4af4706b4f662b7ea2408d48f0",
"assets/assets/blog/Day%25204%2520-%2520Stack.png": "de8b74d617d6556556539626ea72e26a",
"assets/assets/blog/Day%25205%2520-%2520Text.png": "94bada363f1cbe908561c23391589c62",
"assets/assets/blog/Day%25206%2520-%2520Image.png": "326c83069452f8c73f4b4410964fec9d",
"assets/assets/blog/Day%25207%2520-%2520ListView.png": "b54ed652c4cce4e40eca3db650216783",
"assets/assets/blog/Day%25208%2520-%2520GridView.png": "a7562c6be3acf01057d1c4257a97fd2c",
"assets/assets/blog/Day%25209%2520-%2520Expanded.png": "de4eed66966a414b26685fc4e1e7fbfc",
"assets/assets/images/profile.png": "e5f60b5f7153b0798f857cf19e1dfae8",
"assets/assets/portfolio.json": "f4895367ffd54138afc7cbbd2ee54ded",
"assets/assets/project_images/NihonGo(1).jpg": "c2d78e23bbbf0cc632bb93cdbd9e45e4",
"assets/assets/project_images/NihonGo(10).jpg": "8b8085d12b423bbaff5afc5e06261147",
"assets/assets/project_images/NihonGo(2).jpg": "5d94f0180a5ed58bf3736cbfb1e1daaa",
"assets/assets/project_images/NihonGo(3).jpg": "a616081f0652f10752e29d98398344f9",
"assets/assets/project_images/NihonGo(4).jpg": "d53c2a16f831a932956147c8060fb44c",
"assets/assets/project_images/NihonGo(5).jpg": "c4aa93631a50fd09b8eecf57c6666463",
"assets/assets/project_images/NihonGo(6).jpg": "4dac06104f827de45fedac32f0c2a64c",
"assets/assets/project_images/NihonGo(7).jpg": "2a83fa26fcdf66a4401cb2920cc7179e",
"assets/assets/project_images/NihonGo(8).jpg": "7be0ba2a832c258542dec7da1f65d056",
"assets/assets/project_images/NihonGo(9).jpg": "aad1fba6fa23ca21b5d6706c82454a17",
"assets/assets/project_images/Shiki(1).jpg": "77e7e20f2866776e2c215ac0aef6907d",
"assets/assets/project_images/Shiki(2).jpg": "d60efdc52ffdb10c0af53d8da32c2e8c",
"assets/assets/project_images/Shiki(3).jpg": "57675b15e9d4b4d528dd0d103bd29fc2",
"assets/assets/project_images/Shiki(4).jpg": "ece120b594d1bfc3648728d20aec0a13",
"assets/assets/project_images/Shiki(5).jpg": "8bdfc3ca0f4087636d2f6b3df5a3289b",
"assets/assets/project_images/Shiki(6).jpg": "7b51a87b80e53cfa27a39d00df570f01",
"assets/assets/project_images/Shiki(7).jpg": "e222341903cf5b5a3705d29c6c34e1b4",
"assets/assets/resume/Karthikeyan_R_Resume.pdf": "0ca3a67855d5210f50f3b2ed38eb60e8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "767df2f393593f83f11ad17fb5b92745",
"assets/NOTICES": "bbd2bc3be64925f229d11e491a211865",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5398ee3006cc8533efae5f3dd156c3fa",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "48c5919531c8284151a5bd5c8190429d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bbd62025fd26f4700a1413a2f7336038",
"/": "bbd62025fd26f4700a1413a2f7336038",
"main.dart.js": "b508c776327643aedcfed3b825e7206b",
"manifest.json": "e1e927d0994fb0f8edbeab1d309bf79d",
"version.json": "d88c1847c638492dd0e55ae37dafe67d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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

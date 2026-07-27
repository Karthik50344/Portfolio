'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2aa4eda082df3251af21d828185125f8",
"assets/AssetManifest.bin.json": "b956d879200cb5c1a82e2a8c997daba2",
"assets/AssetManifest.json": "1bbe8f05c8dc3f736fd87f95821b777c",
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
"assets/assets/blog/Day%252021%2520-%2520Slider.png": "a12ba8d3698c1353e8efc40a84989bcd",
"assets/assets/blog/Day%252022%2520-%2520Card.png": "4642134ae50ead2aefffadc139e6c582",
"assets/assets/blog/Day%252023%2520-%2520AlertDialog.png": "65518acfe32c87c015b090342508f96e",
"assets/assets/blog/Day%252024%2520-%2520BottomNavigationBar.png": "01cd87ef0e0059325563734a568605a0",
"assets/assets/blog/Day%252025%2520-%2520TabBar.png": "d9567c02a298f626093e2b11a4f3d3bf",
"assets/assets/blog/Day%252026%2520-%2520Drawer.png": "0f9d160fcc97617817d0cbee60b78415",
"assets/assets/blog/Day%252027%2520-%2520AppBar.png": "a6a47831fb510ba1884519a70f10bf78",
"assets/assets/blog/Day%252028%2520-%2520PageView.png": "51a11156882287f7fd6acf09cc46e4da",
"assets/assets/blog/Day%252029%2520-%2520FutureBuilder.png": "ac9f96de31f0400339eb1c3b5f6f6997",
"assets/assets/blog/Day%25203%2520-%2520Column.png": "1dd2eb4af4706b4f662b7ea2408d48f0",
"assets/assets/blog/Day%252030%2520-%2520Wrap.png": "77b983a6b9b0e0d478186431e9d1224f",
"assets/assets/blog/Day%252031%2520-%2520ClipRRect.png": "4db94cbaa179ecd42fba4708dbe8c262",
"assets/assets/blog/Day%252032%2520-%2520Divider.png": "574274f411c23552a147c5ff08a7f1d8",
"assets/assets/blog/Day%252033%2520-%2520Visibility.png": "4c3cd247af9bd469d5047fd6dc93542f",
"assets/assets/blog/Day%252034%2520-%2520Hero.png": "cca9d159510a24d0e083a35310bbec1b",
"assets/assets/blog/Day%252035%2520-%2520ListTile.png": "da3be1ace5cf4179052f9762a0489f10",
"assets/assets/blog/Day%252036%2520-%2520RichText.png": "a843fd9a0f7472aded232775a048597f",
"assets/assets/blog/Day%252037%2520-%2520DropdownButton.png": "70f02970855805a8cfd69f82891d3e3a",
"assets/assets/blog/Day%252038%2520-%2520DatePicker.png": "426eb1b0b05979b7af5031a5d493db22",
"assets/assets/blog/Day%252039%2520-%2520TimePicker.png": "edde1177b0a072a5c3318ff90b811a99",
"assets/assets/blog/Day%25204%2520-%2520Stack.png": "de8b74d617d6556556539626ea72e26a",
"assets/assets/blog/Day%252040%2520-%2520Progress%2520Indicator.png": "c7e2fd1a7af7b8b9bc363e97d9a995b1",
"assets/assets/blog/Day%25205%2520-%2520Text.png": "94bada363f1cbe908561c23391589c62",
"assets/assets/blog/Day%25206%2520-%2520Image.png": "326c83069452f8c73f4b4410964fec9d",
"assets/assets/blog/Day%25207%2520-%2520ListView.png": "b54ed652c4cce4e40eca3db650216783",
"assets/assets/blog/Day%25208%2520-%2520GridView.png": "a7562c6be3acf01057d1c4257a97fd2c",
"assets/assets/blog/Day%25209%2520-%2520Expanded.png": "de4eed66966a414b26685fc4e1e7fbfc",
"assets/assets/images/profile.png": "aec3ca9071d70a60249c7f970eaa7f12",
"assets/assets/images/profile1.png": "e5f60b5f7153b0798f857cf19e1dfae8",
"assets/assets/portfolio.json": "1451c653f59663649c83985b1398f954",
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
"assets/assets/resume/Karthikeyan_R_Resume.pdf": "3d75df0e34521ad3b699ff65c80bbc6f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "913d069e993615f152b3476c7f7407b4",
"assets/NOTICES": "c68bac7fcea7bf8da717f929aa6613c1",
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
"flutter_bootstrap.js": "b009b220bc9aba8a2083601b0b1afd24",
"icons/Icon-192.png": "e866296a130ebdc2811d8f11a14145e5",
"icons/Icon-512.png": "533f8e6ab4fe8d4daf4cf8aebaceae0a",
"icons/Icon-maskable-192.png": "1f20bde2861758b8c51c9c4ab47c9bfc",
"icons/Icon-maskable-512.png": "4792c486600013f0c7d4f37d76a74df6",
"index.html": "65c5c21e520323508976126b1302c473",
"/": "65c5c21e520323508976126b1302c473",
"main.dart.js": "4aa66bd1142d382a14a04947eea83f94",
"manifest.json": "6d6aa316e42ef121af8816cbd2f0081e",
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

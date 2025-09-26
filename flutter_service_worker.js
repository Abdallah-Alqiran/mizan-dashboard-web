'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "bd1a78ad32d9a19cf37c0812074780af",
".git/config": "920e1c1bc2a9df05a269e31814c26a5c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "804133c69e6ee5cc8ce1c64250a46925",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2837176ba051e718761602cb3f24e4ce",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d78decb1cc92723d27e499a4874f19da",
".git/logs/refs/heads/Main": "b26c9eac0c3342681e4920de76d131ec",
".git/logs/refs/remotes/origin/main": "15338d1acbff74a2989b3bc6efbaccca",
".git/objects/02/1c847c28ea201fbabd66afed0e23cff54c9046": "a259b51748f3cdc69f985eb7de880504",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/04/91c53d48429bdd3b535473adde046e18b792ed": "541fa43afa89abee196e33fe30f062d9",
".git/objects/09/ec8b99049dab45e144460a354259b0e5b906d8": "06ae95e3efa0965d6cabdefb245a2618",
".git/objects/0f/4474874a99731be09cf9d6911402077d342995": "a3ef3faa84fc4c092af886ac3cc57ccd",
".git/objects/10/5544125e2b0070779f8c20cb6a7ebc0ce5b0d6": "c584db5d018e27be29934132ac18889c",
".git/objects/14/6f62f72f0081d134dfa402f30f0de772791948": "941c42a82932a51d36e42acd37907452",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/21/88f525cef734c9f1e0060e9057a185c7709849": "6449d0244b50cfbae8a395d52b23cbf7",
".git/objects/23/7b2537557c32d34fb7bed96d859718c04d54ce": "97f062c5f96e30533a54b10c65d77439",
".git/objects/25/268b9b407b565d7df37873a787d26cdf8dce00": "062a0aa49f53bb3b68daa1d233b978df",
".git/objects/29/bb11f22f9846de5b4b113e0300bd9e4f41422d": "e0049aebad7d003df690269aed159ec3",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2d/0b3b66baba27b717595599948d43570061d154": "81f575d50e244670e5ac51de254c9907",
".git/objects/3d/18871b714b0ff65f133d6b2ef4f52e71bdc841": "685a720142e47a1994d910fb1405046f",
".git/objects/3e/7924206d1fbce5335645760302925143337002": "71f5a5e9638535677963bbac7bd26539",
".git/objects/45/f646222858e513f7d2374ebafafee08a3c0120": "50374de22864bbce0eba4e67fe5b80ec",
".git/objects/47/ffa666c8dba388cc86a293b80657a24aed7f14": "3320cc3039d4e8d98b7f80c5a786327c",
".git/objects/49/4ea6596f1dd64ba85e5405090711d5a331e332": "ab7d7c3ab6a86da2ff5b7ca44d3a9ef5",
".git/objects/4a/88ac6953c9290d598f4c77acb359c2801ddd57": "ecb73c838f87fd858ef2d971960338b3",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4e/9979f987b61f86a97e0a87a9760650c7cb7b5a": "f6cc5f66cf3815d1216ec057aaa911b3",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/56/9a95b324920b016a8058f4d0c0149b4b3ae6c1": "aa8424e27425de6ce4c695aceda928d3",
".git/objects/57/a57d6c2532f6a78adcda49dbc84013cf40bb71": "51fe7287e93fc70fdd296ddf68907e19",
".git/objects/5c/a3b96b8c2479de2f3f632ab8d472cd52cd4421": "1f6a15e1ae6883f4b17e4f9eb9fa11fb",
".git/objects/5d/6d852eb9a05d0c33286c42a993749d73b0a9bb": "9280bf9251b6ec6d45c81049fd0c5bcd",
".git/objects/5e/26e1a3e73d7d430d96adbca93775151a6670e6": "0688f91f35e4ba96e9a45b1633c7626c",
".git/objects/63/7989af0b9831f12df4cf06ab6874af375ce845": "3b0f68d8ec8dd18529bddcb0527a376a",
".git/objects/69/98478efcdf38b7f1de05fc8a8f8642e8579af0": "8c5c59c124935a0a485f6a4a27c1c7f9",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7c/e5faa475cbce5c382752999b8c2221ef0445dd": "506be58035514ca8fe1fb1a92468d8c2",
".git/objects/7d/48eef91ad96cd5a98f8d3ea6d28a8c41d4f1b2": "c765577a16570ab916d93ae52e8974c8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/a5dc0b9f9243abbbe1dcf1f33680992e8641eb": "714bb4970108e4b2800018d4b3dfc210",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/63fc45c59109c22df07085697021303ed3342b": "b0ef0fe2624cd0488c47eaf1222601f4",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9d/66032e940d6ad5f70c602a21b89d9f28a2bc6f": "d9687cff29991358bb80b49b3b5844ce",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a4/58adf42a4c3f8b27fa5b3c13ed7dde6597f02a": "1a7e23e03ad311d990dadb8e1b47400c",
".git/objects/a5/757cc272c62e5fd130ea6a752bb1fb45fe3833": "970ef5832fb2c8b4d57e21798b736e40",
".git/objects/a5/a2ac89f550f7dae326fe94a71ba2cb2ce3deae": "1357a911a6deb9efe3c025ef88c2b15d",
".git/objects/b0/2e4cf0ba02344303efcc9e8e6f105d8dfac535": "40448299290c94a69b40ca53f306ad36",
".git/objects/b2/fbe23f85f285408cc58699478888ca6796498c": "059107ee938d48eab85d3f17c143c95c",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/06fbaf277c3edb86ee3c8636585f0c323ee5cc": "4954c01c15e1e37748456482985f8c8c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c0/b86a1557d4c5db237a422d823aa6207fe93c54": "97467da519bfe4cf6f8f6c8e6946cb9d",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c4/17a0eb5a2e0503d9cefd092d082b4f557cdeb5": "2cdb95e9120971de8f1c2d3e1049aeab",
".git/objects/c4/1d8d9c52dfaf3b14452ac8c63426fccdbc7df4": "f6916b14d00e77b958625788795e595d",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/6bdba849f42170f5d140bc5f8bebad6dcb40c9": "f48cfd3e1445cd4ab631497b33b49558",
".git/objects/db/02e392f37ca35a212633a3a27921eeff42e9c2": "d5e739a07453ff979ad8560cfcaf54bd",
".git/objects/db/3e3c519429f543003e045cd9671af508c45660": "6ef8999c69a9313e6c3cae3a39e9044b",
".git/objects/e2/a8e1da21fa525f7c0a14ac9ab6501450eba480": "8f095d6348d35508d288e62f4b62fd3b",
".git/objects/e3/6a25db8ca40bd6d1d072914fb0b84887a5ac64": "89364b56e9df7f1143522da453c4186f",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e6/2933080427feb130a8baafbe4ef574bffd67db": "c7e9bb916fb1171e1c0320cbfc208b0f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ef/32b83ffedb00be88d59ff195df81938b2250c6": "d6348bd50cda4f1ee9749f5b0f97ca07",
".git/objects/ef/a23a62b5db952aaf8a7375f052ea7ca812f2ed": "39ba85c8c0546fd218136144df50e757",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/43e0ebfc2359c2c403058a672f12fed8fe932d": "758e862ad8439d18d2986d6c617baf6c",
".git/objects/f9/94a0d63215b60f4950f65dd459a72df37a134e": "a72f96e115d8e7977cd27d1a2134758e",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/fe/790951b81bdca380ecb9f97ed8376ee2d7ff10": "4106e6a401dfff7088a95ed50ada5b1f",
".git/refs/heads/Main": "74d3b1c58364e35237306786c2961334",
".git/refs/remotes/origin/main": "74d3b1c58364e35237306786c2961334",
"assets/AssetManifest.bin": "7710f2339ff3137cc7a1ccf9066479ca",
"assets/AssetManifest.bin.json": "92dd45347237a5ac155a658f9ab6a715",
"assets/AssetManifest.json": "3cb2217825b04bc39dd4e1ec85baaf5e",
"assets/assets/fonts/Cairo-Bold.ttf": "2bbe2088a8d666fa99b80554fdc6effd",
"assets/assets/fonts/Cairo-Medium.ttf": "cbf0e8f4625a63746797ef8709167c44",
"assets/assets/fonts/Cairo-Regular.ttf": "45aaa2b5f9de1d61c2d3fe1f40107ac8",
"assets/assets/fonts/Cairo-SemiBold.ttf": "d24823f3136e983e632a2d8e11c822b4",
"assets/assets/icons/assistant.svg": "28c61c6c4976e5532edc8261c5f1a0b8",
"assets/assets/icons/course.svg": "aadcd6ad9b8bbbe4f597a33d591bbfb8",
"assets/assets/icons/edit.svg": "cc8883185bef9ca1fdc9f261c23c54ba",
"assets/assets/icons/massages.svg": "1219bffbdc7303abfe7922021f359907",
"assets/assets/icons/offers.svg": "ca0d134f901798d4b52e34d2dcf0ee68",
"assets/assets/icons/plus.svg": "b3018f097c9885333dc3bc1107b6af71",
"assets/assets/icons/show_more.svg": "26c17acdd2559c9608d33b308da75edc",
"assets/assets/icons/studentsvg.svg": "de492db9e44b781c974485f65dcb2336",
"assets/assets/images/eye.svg": "018a979792040d91a3da1c93aefa13ab",
"assets/assets/images/login.png": "a0b5febaf366ce040a73360beaadd520",
"assets/assets/images/logo.png": "f941c1adc6332b2c3c646ba17a87e380",
"assets/assets/images/subject.png": "98d50abfd4315e2a6bc44136132d9e6c",
"assets/FontManifest.json": "f86e94fdde183b55d6576ca3f2ebcd43",
"assets/fonts/MaterialIcons-Regular.otf": "baf08d5a53a2aafea06826ae664f5717",
"assets/NOTICES": "82df1bec6ce0c479226ef940d91225e5",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "530bdf4e69560a96af273fe99f6ddaaf",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2f4a474d2f5ef206d40d581e9d041b8d",
"/": "2f4a474d2f5ef206d40d581e9d041b8d",
"main.dart.js": "4b9f53017415baf5f83472fca6f5511b",
"manifest.json": "a0ae587e9932f94c1cc40914faf1909c",
"version.json": "c7a2619ad8f87148bc92205b6696d920"};
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

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"9586d396701115074014567543a8f035/gen_dart_plugin_registrant.stamp": "436d2f2faeb7041740ee3f49a985d62a",
"9586d396701115074014567543a8f035/gen_localizations.stamp": "436d2f2faeb7041740ee3f49a985d62a",
"9586d396701115074014567543a8f035/_composite.stamp": "436d2f2faeb7041740ee3f49a985d62a",
"assets/asset/doctor/doc.png": "43b0c0f1baf365c0b6791584d626d80c",
"assets/asset/doctor/doc22.png": "235177eb2319654d6c55c06274519c3e",
"assets/asset/doctor/docicon.png": "79d413475c2156255057a77a259941d3",
"assets/asset/fonts/OFL.txt": "597905e10b8a5ed6e7d6cfc91a725b7f",
"assets/asset/fonts/Zain-Black.ttf": "5fa378f7f043cfe2f872502ea70f5f38",
"assets/asset/fonts/Zain-Bold.ttf": "123b5bd36bc6c465208b330f3081695b",
"assets/asset/fonts/Zain-ExtraBold.ttf": "e548f4397358aadf10529a1fb220567f",
"assets/asset/fonts/Zain-ExtraLight.ttf": "fac6672c450a3ba4b71129fadcb36adf",
"assets/asset/fonts/Zain-Italic.ttf": "3d30bea3644541fbb70cdb8247a21f51",
"assets/asset/fonts/Zain-Light.ttf": "df86a7cbffe45ba29cfdd86153d3f08f",
"assets/asset/fonts/Zain-LightItalic.ttf": "28615bcac8622195f14e8715fdf2aa3a",
"assets/asset/fonts/Zain-Regular.ttf": "c98c1ab3ed1f7a3d02df857402d3431b",
"assets/asset/halak/booking.png": "d65f400acca499952028786bdc619164",
"assets/asset/halak/icon.png": "6c5da4ca888f87a52a48da161156dcf6",
"assets/asset/halak/screens.png": "0faf3ec40e1f308bfb846d1a16f90560",
"assets/asset/images/3.jpg": "0d9c5be95034328df37467f310a467d0",
"assets/asset/images/app_store_badge.png": "9f4bcdcbd6ed549cf7c364225097a247",
"assets/asset/images/play_store_badge.png": "fdf8fe5c09ccfcb8a8105e385c5529bd",
"assets/asset/iti/adminview.png": "c16ee16c6c17682eac55d689b4b95ab0",
"assets/asset/iti/app_icon.jpg": "570f297b77c550e6d978d7b1f2e97507",
"assets/asset/iti/mangerview.png": "d12f4acdaa97f40de3e468cb7a6ea1c0",
"assets/asset/iti/st1.png": "fccacac344aeda55f74cac9c82ace8ea",
"assets/asset/iti/st2.png": "edc237ec6cd92e330ec99e50da6bc74f",
"assets/asset/iti/st3.png": "20601df386cf3f30628df6da54702556",
"assets/asset/khalik_maknak/kh1.png": "089d914271c1144268168f23e882c458",
"assets/asset/khalik_maknak/kh2.png": "df0737179c337c2b8fb46808145c275a",
"assets/asset/khalik_maknak/kh3.png": "8550de2060ac33de5f2cc8a9297c86d5",
"assets/asset/khalik_maknak/kh4.png": "e2d266ae1f8e065aa34d83f763dab3fb",
"assets/asset/khalik_maknak/logo.jpg": "63d77f4fb032340413134c5d8b59a64a",
"assets/asset/pos/ca1.png": "462aaa30b0ef71dd8669461e4b71ccc0",
"assets/asset/pos/ca2.png": "4afff9f11673273756598bdd682fc9fa",
"assets/asset/pos/p1.png": "8de082383fab86be22dc7027d6b65224",
"assets/asset/pos/p2.png": "1080f84b86543f3ab8fc9a833a47581f",
"assets/asset/pos/p3.png": "2573b4cecfc846102bafc2532f7769dd",
"assets/asset/pos/panda_logo.jpg": "210f6584b9df0ab0d46121cd47ee7136",
"assets/asset/routiner/r1.jpg": "991b108c739b9d5929a4d2036b8a3fd9",
"assets/asset/routiner/r2.jpg": "3f20c7d7df5a6c751d8db87a42245eff",
"assets/asset/routiner/r3.jpg": "938061ed72aed6ac203702d8badbc596",
"assets/asset/routiner/r4.jpg": "ab237ea77922bc8634d0a2b4a8600967",
"assets/asset/routiner/r5.jpg": "9ba914228e84089219dc24403bfca46b",
"assets/asset/routiner/r6.jpg": "9dca7308f697fb7e331d6ca007e6712e",
"assets/asset/routiner/rIcon.jpg": "25a323fa1126c21a367915860f73933b",
"assets/asset/sa3a/logo.png": "0cc86b0deee86c6e161c96e5a3260a7f",
"assets/asset/sa3a/s3a1.png": "813a31e873fca0bf1b2b235d667599df",
"assets/asset/sa3a/sa3a2.png": "a3fb36f2e9d256049e999ad6da7e377e",
"assets/asset/sa3a/sa3a3.png": "ab48582852e863ace1b42a1f325920bd",
"assets/asset/takka/dashboard.png": "f53190b18909c4206e3b885bbe2cecde",
"assets/asset/takka/eats.png": "6d75a9bedf52a58bc8b8fd073ec9be08",
"assets/asset/takka/info.png": "90a7c74998c3de282ebde55f3cd425d5",
"assets/asset/takka/login.png": "d40bef2ec2ef746cda42f807e42a44c4",
"assets/asset/takka/social.png": "b3c50585e39f6b041dd82a15c364fa2b",
"assets/asset/tazkira/10.png": "a37c8a7ad091c1b0e1d3614baae8572c",
"assets/asset/tazkira/7.png": "0a92c49e248a5d494395e6bf5d6a5c8e",
"assets/asset/tazkira/8.png": "55499703bc6b2db1eda12fed190632c7",
"assets/asset/tazkira/9.png": "5e5d18cb5032d8ba3cbaf2c85da1d919",
"assets/asset/tazkira/icon.png": "398bb6e3f38ebbf9e237182f41cae3e3",
"assets/AssetManifest.bin": "724f56cdcdfe4956e79761493f019839",
"assets/AssetManifest.bin.json": "e35372ae13b92cb5ad13bb6e2b03c72c",
"assets/AssetManifest.json": "86149e14ea05ec284ff88d5946a3d0a0",
"assets/FontManifest.json": "0ecc0282324860ef966ef4ad1315f3e7",
"assets/fonts/MaterialIcons-Regular.otf": "06d37ffdc6d5979076f7b46363971c77",
"assets/NOTICES": "e52fb57baa8a2e44a5927b7b3f80ff9b",
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
"d2976540244dba7be000c4f9690bfe66.cache.dill.track.dill": "9101e4443149897f4bc198f8488e9801",
"favicon.png": "fdaaddd38cfe3e814fea52299639dc9e",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_assets/asset/doctor/doc.png": "43b0c0f1baf365c0b6791584d626d80c",
"flutter_assets/asset/doctor/doc22.png": "235177eb2319654d6c55c06274519c3e",
"flutter_assets/asset/doctor/docicon.png": "79d413475c2156255057a77a259941d3",
"flutter_assets/asset/halak/booking.png": "f4c73afdafb0e3db8c6f34448ca56a7d",
"flutter_assets/asset/halak/icon.png": "6c5da4ca888f87a52a48da161156dcf6",
"flutter_assets/asset/halak/screens.png": "5e44686c0992dcde19c8a1315e72a5f3",
"flutter_assets/asset/images/3.jpg": "0d9c5be95034328df37467f310a467d0",
"flutter_assets/asset/images/aa.jpg": "cc333e5f110efe83f7cd20eb3f1965ee",
"flutter_assets/asset/images/app_store_badge.png": "9f4bcdcbd6ed549cf7c364225097a247",
"flutter_assets/asset/images/play_store_badge.png": "fdf8fe5c09ccfcb8a8105e385c5529bd",
"flutter_assets/asset/iti/adminview.png": "c16ee16c6c17682eac55d689b4b95ab0",
"flutter_assets/asset/iti/app_icon.jpg": "570f297b77c550e6d978d7b1f2e97507",
"flutter_assets/asset/iti/mangerview.png": "d12f4acdaa97f40de3e468cb7a6ea1c0",
"flutter_assets/asset/iti/st1.png": "fccacac344aeda55f74cac9c82ace8ea",
"flutter_assets/asset/iti/st2.png": "edc237ec6cd92e330ec99e50da6bc74f",
"flutter_assets/asset/iti/st3.png": "20601df386cf3f30628df6da54702556",
"flutter_assets/asset/pos/ca1.png": "462aaa30b0ef71dd8669461e4b71ccc0",
"flutter_assets/asset/pos/ca2.png": "4afff9f11673273756598bdd682fc9fa",
"flutter_assets/asset/pos/p1.png": "8de082383fab86be22dc7027d6b65224",
"flutter_assets/asset/pos/p2.png": "1080f84b86543f3ab8fc9a833a47581f",
"flutter_assets/asset/pos/p3.png": "2573b4cecfc846102bafc2532f7769dd",
"flutter_assets/asset/pos/panda_logo.jpg": "210f6584b9df0ab0d46121cd47ee7136",
"flutter_assets/asset/routiner/r1.jpg": "991b108c739b9d5929a4d2036b8a3fd9",
"flutter_assets/asset/routiner/r2.jpg": "3f20c7d7df5a6c751d8db87a42245eff",
"flutter_assets/asset/routiner/r3.jpg": "938061ed72aed6ac203702d8badbc596",
"flutter_assets/asset/routiner/r4.jpg": "ab237ea77922bc8634d0a2b4a8600967",
"flutter_assets/asset/routiner/r5.jpg": "9ba914228e84089219dc24403bfca46b",
"flutter_assets/asset/routiner/r6.jpg": "9dca7308f697fb7e331d6ca007e6712e",
"flutter_assets/asset/routiner/rIcon.jpg": "25a323fa1126c21a367915860f73933b",
"flutter_assets/asset/takka/dashboard.png": "f53190b18909c4206e3b885bbe2cecde",
"flutter_assets/asset/takka/eats.png": "6d75a9bedf52a58bc8b8fd073ec9be08",
"flutter_assets/asset/takka/info.png": "90a7c74998c3de282ebde55f3cd425d5",
"flutter_assets/asset/takka/login.png": "d40bef2ec2ef746cda42f807e42a44c4",
"flutter_assets/asset/takka/social.png": "b3c50585e39f6b041dd82a15c364fa2b",
"flutter_assets/asset/tazkira/10.png": "a37c8a7ad091c1b0e1d3614baae8572c",
"flutter_assets/asset/tazkira/7.png": "0a92c49e248a5d494395e6bf5d6a5c8e",
"flutter_assets/asset/tazkira/8.png": "55499703bc6b2db1eda12fed190632c7",
"flutter_assets/asset/tazkira/9.png": "5e5d18cb5032d8ba3cbaf2c85da1d919",
"flutter_assets/asset/tazkira/icon.png": "398bb6e3f38ebbf9e237182f41cae3e3",
"flutter_assets/AssetManifest.bin": "ef5de6586e61a0796cb5bb04ac30f172",
"flutter_assets/AssetManifest.bin.json": "16d1ca91b8dabb27ec47161b39fa84bf",
"flutter_assets/AssetManifest.json": "ae7c15074430bdb7a9c4a06b18af6392",
"flutter_assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"flutter_assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"flutter_assets/NOTICES": "e52fb57baa8a2e44a5927b7b3f80ff9b",
"flutter_assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"flutter_assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"flutter_bootstrap.js": "432dbf210500a6988e1e1e7f169211c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/pp.png": "fdaaddd38cfe3e814fea52299639dc9e",
"index.html": "378055bdbb38130c1016b3972c0b8bbd",
"/": "378055bdbb38130c1016b3972c0b8bbd",
"main.dart.js": "507bb01f99d77e22d62fcbf4aa54abe8",
"manifest.json": "2b8a5577aa2643f162a7e8c2e553ffb6",
"robots.txt": "fb49199fd45773283e632fb57cbfba68",
"sitemap.xml": "9801caad4730720231eae3c1a6d2c4f8",
"version.json": "cc1fa9cce5af273c0909d105387fee89",
"web/assets/asset/doctor/doc.png": "43b0c0f1baf365c0b6791584d626d80c",
"web/assets/asset/doctor/doc22.png": "235177eb2319654d6c55c06274519c3e",
"web/assets/asset/doctor/docicon.png": "79d413475c2156255057a77a259941d3",
"web/assets/asset/halak/booking.png": "f4c73afdafb0e3db8c6f34448ca56a7d",
"web/assets/asset/halak/icon.png": "6c5da4ca888f87a52a48da161156dcf6",
"web/assets/asset/halak/screens.png": "5e44686c0992dcde19c8a1315e72a5f3",
"web/assets/asset/images/3.jpg": "0d9c5be95034328df37467f310a467d0",
"web/assets/asset/images/app_store_badge.png": "9f4bcdcbd6ed549cf7c364225097a247",
"web/assets/asset/images/play_store_badge.png": "fdf8fe5c09ccfcb8a8105e385c5529bd",
"web/assets/asset/iti/adminview.png": "c16ee16c6c17682eac55d689b4b95ab0",
"web/assets/asset/iti/app_icon.jpg": "570f297b77c550e6d978d7b1f2e97507",
"web/assets/asset/iti/mangerview.png": "d12f4acdaa97f40de3e468cb7a6ea1c0",
"web/assets/asset/iti/st1.png": "fccacac344aeda55f74cac9c82ace8ea",
"web/assets/asset/iti/st2.png": "edc237ec6cd92e330ec99e50da6bc74f",
"web/assets/asset/iti/st3.png": "20601df386cf3f30628df6da54702556",
"web/assets/asset/pos/ca1.png": "462aaa30b0ef71dd8669461e4b71ccc0",
"web/assets/asset/pos/ca2.png": "4afff9f11673273756598bdd682fc9fa",
"web/assets/asset/pos/p1.png": "8de082383fab86be22dc7027d6b65224",
"web/assets/asset/pos/p2.png": "1080f84b86543f3ab8fc9a833a47581f",
"web/assets/asset/pos/p3.png": "2573b4cecfc846102bafc2532f7769dd",
"web/assets/asset/pos/panda_logo.jpg": "210f6584b9df0ab0d46121cd47ee7136",
"web/assets/asset/routiner/r1.jpg": "991b108c739b9d5929a4d2036b8a3fd9",
"web/assets/asset/routiner/r2.jpg": "3f20c7d7df5a6c751d8db87a42245eff",
"web/assets/asset/routiner/r3.jpg": "938061ed72aed6ac203702d8badbc596",
"web/assets/asset/routiner/r4.jpg": "ab237ea77922bc8634d0a2b4a8600967",
"web/assets/asset/routiner/r5.jpg": "9ba914228e84089219dc24403bfca46b",
"web/assets/asset/routiner/r6.jpg": "9dca7308f697fb7e331d6ca007e6712e",
"web/assets/asset/routiner/rIcon.jpg": "25a323fa1126c21a367915860f73933b",
"web/assets/asset/takka/dashboard.png": "f53190b18909c4206e3b885bbe2cecde",
"web/assets/asset/takka/eats.png": "6d75a9bedf52a58bc8b8fd073ec9be08",
"web/assets/asset/takka/info.png": "90a7c74998c3de282ebde55f3cd425d5",
"web/assets/asset/takka/login.png": "d40bef2ec2ef746cda42f807e42a44c4",
"web/assets/asset/takka/social.png": "b3c50585e39f6b041dd82a15c364fa2b",
"web/assets/asset/tazkira/10.png": "a37c8a7ad091c1b0e1d3614baae8572c",
"web/assets/asset/tazkira/7.png": "0a92c49e248a5d494395e6bf5d6a5c8e",
"web/assets/asset/tazkira/8.png": "55499703bc6b2db1eda12fed190632c7",
"web/assets/asset/tazkira/9.png": "5e5d18cb5032d8ba3cbaf2c85da1d919",
"web/assets/asset/tazkira/icon.png": "398bb6e3f38ebbf9e237182f41cae3e3",
"web/assets/AssetManifest.bin": "2456bbf7acda0a4f757211a910135473",
"web/assets/AssetManifest.bin.json": "e5f79942f64eada5bf90b02bf4bfdd93",
"web/assets/AssetManifest.json": "82b2fb7c1872f926c000c02a29fee51d",
"web/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"web/assets/fonts/MaterialIcons-Regular.otf": "3f6938297d7ea7cdd069797eab63e5c6",
"web/assets/NOTICES": "e52fb57baa8a2e44a5927b7b3f80ff9b",
"web/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"web/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"web/canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"web/canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"web/canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"web/canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"web/canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"web/canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"web/canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"web/canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"web/canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"web/canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"web/canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"web/canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"web/flutter.js": "888483df48293866f9f41d3d9274a779",
"web/flutter_bootstrap.js": "7322c754cbed596b3f4777cfc4e226cb",
"web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"web/icons/pp.png": "fdaaddd38cfe3e814fea52299639dc9e",
"web/index.html": "70ffffa5302c18cb4f7afe299549cbc8",
"web/main.dart.js": "ced789fb170f721bed053d620a88d209",
"web/manifest.json": "2b8a5577aa2643f162a7e8c2e553ffb6",
"web/version.json": "cc1fa9cce5af273c0909d105387fee89"};
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

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3782f94f02a1709c42771b4551b92655",
".git/config": "34871f37563755c7c820df45050a9151",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "f40413d0880c5e82a323e2244c8e0be2",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/index": "5afe775bb80a15224bb2e88d5c3cb04b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7d909e90f9e2d56e7505536e7e9242ab",
".git/logs/refs/heads/main": "92dcde063273fc213ab2e393bbb308a5",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/f1479efd557151cf88ced034e8e70cbffe7d96": "f16055536a84469baf4ab1673e668f9f",
".git/objects/0d/96f90592db6f9b49b7c4bf05867fc1af2528ff": "44ced9d4300e35b3b011ebf475133d10",
".git/objects/14/902783cbecfeaae70020d6701690bca5a207dd": "d42364d07edec42373aa50c60c253026",
".git/objects/14/d185dc0096b7fff99bc4f01b21a9bc6f7633ae": "6fbfdde2830fd02eaa061b75f27689bb",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/11cc768aff5f27b579cdc643451695d5c1016b": "b89a841055969d7f5ad48a2abf8c00e0",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/28/f0120240d95335e8e7b7dedd504b5b5d1ea0b3": "b0a84d3f108d9ff72e9a0719a7303172",
".git/objects/2e/53646eef07883400b2fb2ff82b6ccbb6cb6593": "5809aac1672150f988b2c7afb543e41f",
".git/objects/30/84a764e045494a780903522278188fd0f545ee": "858c2f107d55f5d7c3f9b066c619eafe",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/42/771fa2739e2bf26b4bbb8e14e389de94edd7a6": "5d46ed0b97871b8e870052acbd6da706",
".git/objects/42/c936bbc6d8846fb4b6f947e0944c16b6437829": "d61fbd9bd77017a52fece2a529685cd8",
".git/objects/43/6f377ca413e64a873a16b5fc985dfea4e4ee01": "6e17513cdb89b6390b673051aaa2ae07",
".git/objects/43/72a5d0f2c37f3ae891e72eff0b5f994824a1d2": "92576bbc5477971e2f4119f39198468c",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/45/e627711b4ade28e17941b5c7491349b314140a": "25b62f3ae86d1aec5a7dd56b6b684952",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/069fc4c82ac734928066969cb507c70ea7fa05": "69d26686370cba50f0283fcda30a4d11",
".git/objects/4b/fe94c13b57f0b9fa5cc5b529fb913626c5e4b0": "248dcb0aba8603b5a99ea90609f4ba3b",
".git/objects/4f/66ed25103a1192029f0dcd5d169fd34baa3f59": "cc296fcbef63c5206574518aafbba9ff",
".git/objects/51/f89d1180b203583851ecee4476db5485b60003": "7164ae0b58fbd594d4c7a8067f423585",
".git/objects/55/ee212dd9a174e31ed38c2590aeb1c54a5a42e1": "e40293cf70db82dcec3bb691b7d6b6a6",
".git/objects/5c/0bd5318f3e799de4f06806f83f36ffadbaed1f": "0947d558f34307caa534e87637cc75e7",
".git/objects/5c/1ea3e8f9ed88909ceb8f04ed1aa137f4972e42": "ca1e14652ecfbc5c6f0feabc0ee2c793",
".git/objects/5e/b0284108242ae80732d387008d9d7d7e09d1c9": "e41f784c510ad40f1d71e75f5c97ac38",
".git/objects/5f/2c78d004a485cfa15e92e6839c1dd1840fa7e3": "deea58080df261ebed402c7543737896",
".git/objects/5f/79fcc5dd6fa59f06db20fc64fb52e785579af9": "5761749a7e05b2669c0132374b62b5aa",
".git/objects/5f/e0f6a1a143628fd69c21929d1bf4063bc30022": "ba054e4da30c2d41e8dc6d19a759dda3",
".git/objects/60/57317863727152da1d16e6e0f2d5b873bcbd9f": "e6b7bf771d2ed1fb9b5b8b46e3223397",
".git/objects/63/48b174e7b1b9f28b7fca1815bd5dbf516e9f98": "4d4cd66937b9056adbaa0ee1c07edcb6",
".git/objects/6a/3ea35acc23898c0ffece8ec9f6feba23db8873": "07b0dd74825546ca40c6bb064605bc6b",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/c8f76f8f7ca27590b2e0d226a793eb26a640fc": "2de647e19b9c9aee347565751643dc91",
".git/objects/75/3d82f73eab20573cb3dafbd29f61ab2ee3fb78": "d24f2100aa287eab6da5a7361569b868",
".git/objects/76/aea07beeae5de4c283181060b329889b46a45b": "ace4cd637fd381538047fb558553048a",
".git/objects/76/c83d7a58650255f5a0c9504bdfd9879835c1cf": "5dccb4184f150cf4e273a874a0b01378",
".git/objects/78/2f39a80eaf00df9f6d4cfe32ee4852e44e57da": "84fafb700298282723e2d7fb9dfcbb59",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7c/5dbb2829e92511ae40f4ef8f661fbda3b2004b": "581be15cda9bbcf30a7a203237c3d458",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/1cd5e1d62201d530aabdf4c6ee62ce4fdf53ed": "a9e1cdfde0c4c9c93f879a0f0fbcbb17",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/a8cf856b73a2faf4b93c6c4fdea84d921f4840": "edd13b19cbd42942976caa5316b8ff67",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/08b29571651e3363fa00498c24116d0b63dfe2": "53e1665683a24a765def4a7dc2b0238e",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/91/11e705b49415e7100b918f8af9757567215b46": "d1f00c5017bd1ec6be9aa6362797184a",
".git/objects/95/35677522cd9d4122ff53310c962c35d36d1e78": "39054abe6e0843398260cfcaa89f0e8c",
".git/objects/96/a16934d2d5c84bb815e5429c2046f8da97be6b": "a39fda18c5e7cf7c5ee1526036f159c8",
".git/objects/97/5f34a9c8dc75ce522e773cb3573fee519dab2c": "fef35eaff35767ac0cd2a7eb52ae0f03",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9b/8d5434456c63fb8072df97734369562b1b1c65": "e606736b46fe549b0e57d5369d23d177",
".git/objects/a2/8a40457f9857da35d1a88c840f8a336f350249": "3afe3526b7c375578484e998650e9f45",
".git/objects/a8/2ec3dab491b73a0104c3e6c05db9a9e5e9a505": "4f039cda82df17dc4cc47d955260554e",
".git/objects/a8/718b2962ba8e4166421ad881c460950249982a": "f8f98280c60dfabd61da5743841cee5d",
".git/objects/ac/c8ad66f528602b103fe39992fdbfd0493c42a1": "92fd9ae69ec979834f14fd4129d51459",
".git/objects/af/7e5af83165bf82e5bb085a7c7f532e608a7715": "386e3036e9b719b6ce2560184f3a2874",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/e5f530c84bb9a87daff7f335c955ae1dc557d2": "9cd541c8f09732b6206393bea2ed9c7d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/8d5110ae06e2457ff8a8fa73298809808fad0a": "1bb15807c81af22170a59694e10a84f0",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/676a6dd2a8f41c2ef2893ca9aece52a613f19b": "928b96534e51b098bfd815cf77ee0faa",
".git/objects/ba/d3099a0ff15b4ffa554dee8f7d34541a733807": "e18f1411c9300ced39a0a95a9a7e5a5c",
".git/objects/bb/9855746c601f35a751294c3fa54a6ed2ff250f": "61397e97b633908e0d8f32139c3d4eff",
".git/objects/c1/8c530dde8b25a69206723f5b1c2ac17ff202b4": "237e8f1205acd5b4fa09db896343cb5e",
".git/objects/c2/f00033bd4b72ca70fdfb2785d53dab9c4b7ac4": "6db77957f4cf748a1e3c6a4adf2056f3",
".git/objects/c5/1ed6d47bc3276052ea8515bc4f7bbacc37d7b9": "8b8507c95c885dfb85d310c392edab77",
".git/objects/ca/5ff29addc8cec676f67379488b01c13ae48d3a": "303cf6adcfbea6b63e1dfdfa605fb430",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d1/bd57aadcc83c92611a51bff7b6bd6d7dd8924d": "6075647fa3c290f796566611f6dc176e",
".git/objects/d4/1a71c63845e91c723d83c4ede86109d5f75076": "59a636bbd594eac1736d9ec589306295",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dd/a3cabd200d89b2fea0d9da1ab6a1e37d3d66ae": "75dba1e20d6cd42349cf7abf6aab482b",
".git/objects/df/5c258e03c23f3a9cd2367bb7df768f050c96c8": "87c85fc76d506010f7f666af13be7a87",
".git/objects/e6/1480fe8d037a1bdd3289c8759b41b7c5dad041": "9214b8a82344dd82d5b94aa6910a85ec",
".git/objects/e6/d05b9d1926629cba0511fe4f2b5c09981b2ac6": "3bbf26ec3fd4e6acb5221c8829a22b06",
".git/objects/ea/2a8e8879c5a64bdb9130655ad580b067ff39ce": "c34c2e9736ec5658db9bcd090c03a155",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f9/5df919d8f7fe7c6f369e6a1f908170bd112c52": "c30c0d0c40c226ad15192d6216459095",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/ORIG_HEAD": "aa13b9fda55d721a59029cfd5ce0ad42",
".git/refs/heads/main": "deb00a822a0e582201307cdf3fd01a0e",
"assets/asset/images/aa.jpg": "cc333e5f110efe83f7cd20eb3f1965ee",
"assets/asset/images/book.png": "fbc7e83aa6435c255ac069bdf4ebbf4f",
"assets/asset/images/casheir.png": "78af7ef13616296f3d1a36c3a0fe48b5",
"assets/asset/images/doc.png": "487b2d53a39d78a67ec7c5f8f5f0bfcd",
"assets/asset/images/newsssss.png": "abec220c27937b9615ec67d6ef6b4238",
"assets/asset/images/notes.png": "76111da15fbbaefb492b1d7fd893feeb",
"assets/asset/images/poss.png": "da08478ca9bdb5dca299974cad658cd6",
"assets/asset/images/routiner.png": "991b108c739b9d5929a4d2036b8a3fd9",
"assets/asset/images/tazkirra.png": "4c990b6f4583faa84352781890ae2893",
"assets/AssetManifest.bin": "f6cca80f40041db003450be8d802531d",
"assets/AssetManifest.bin.json": "f3ca5b017d230920a3bab7a8fd1163c0",
"assets/AssetManifest.json": "179fc5eb868e4f2229cf669a14eb3f02",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "0d2ae80398ba47954e44251263ae1704",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "d60cfccd12e3f25b37f6d3376a82c0da",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/pp.png": "fdaaddd38cfe3e814fea52299639dc9e",
"index.html": "dac9641931ebe6c4147ea9dc7531065f",
"/": "dac9641931ebe6c4147ea9dc7531065f",
"main.dart.js": "678c254cc2551a13ac0f32367897c24a",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"version.json": "cc1fa9cce5af273c0909d105387fee89"};
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

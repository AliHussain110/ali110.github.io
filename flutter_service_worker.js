'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "42c5cf19959736cf50b939acf76b4ad1",
".git/config": "9b4cd622e6e92f9e5f166be4b82b7ca0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "dcc767bf7dfeacea8232de08486b9a7a",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
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
".git/index": "fa3d1b77125d5959a7c8fe333ccfc8e0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ef53d550ae7eb26d35ab2a1078abf0c8",
".git/logs/refs/heads/master": "ef53d550ae7eb26d35ab2a1078abf0c8",
".git/logs/refs/remotes/origin/main": "1c852a116236846f4c998b135f8cf127",
".git/logs/refs/remotes/origin/master": "0cf8f82e4407e80aa4ffaefcb3d4343b",
".git/objects/00/aa9e41443a50f76d4fc59a119847cbe8fbd4be": "38199448b126d4a9d2018ae8b2f63188",
".git/objects/00/f89b4dfcf2f9d35a44ba7b8bc618b249b222f5": "457922036bed4e7d4ccd3855f7de5910",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/08/e55eb64b7f648584bd79df71fbf74fefea9f82": "5ff5b48656d589f0bd32d514b9a981d6",
".git/objects/0c/331931f922caeecbfa4e1b60321bcfcea6d4d9": "312e94ad491255e3eb1a5f179ecc120d",
".git/objects/14/19041dcc11e532f33b8d1724053d0f5cd017ab": "d4f7221d08ece05b136b44e435b17592",
".git/objects/15/64e2cb8847112ae347bd3b2f5b31ea11806de9": "2afed18499d4dafb9204ad690ef30e37",
".git/objects/15/7e7cf2242267671158a083831c154b8c65bdf9": "dfe0296ba9635f5d8f8b6e3707997c10",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1a/94d868d4c6f702d928f41637696dd6e7036a25": "96a9e4ea5b880b41e3a0abfbe83dbce9",
".git/objects/1f/f939f7291ce718459f03450994901f327442fa": "03c69834b4b26d8eae78adca80c32999",
".git/objects/20/1ad4ad7d82c1bb4e69032d94366b7df47542c3": "0ce0f2ef97904bd5d04366171589d401",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/d91740244ab03d9aa2299d28ded38b96e27255": "94c1073531e60344c06b50e0a60f4b90",
".git/objects/22/a63220244260a6df231c1469a11b8a0ba5f85f": "d61ad25ddccb7bffff7ea0e90e84372d",
".git/objects/23/79efc4fa6ae7007841f24faf7cf2a0ec1d467b": "2124a167ce320bce912dda67139bfefd",
".git/objects/24/ee6d678b473b243e6892611ff5364ad8f15a8a": "2d010e2a106eb19ad4fd3bed34a920c5",
".git/objects/2b/1b11df950abd66c1f8f7f3affa8006c23b7bc3": "e0c2122268983e96e71c091616261b70",
".git/objects/3a/ea71eda34223db82027b026a5ab2dc4e5f2b57": "87dff7e88ac3664d59390f01bfeb854e",
".git/objects/3b/cda879403f85dd84af8535c0a2c1452c5716df": "284fcc8e4b07a1701f19788c44edfe04",
".git/objects/3b/d45f458ebbcaca280cb2df26fa0294dcb622ce": "232d85353f64714e3ae6f4badb89f178",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/51/62c3800bf44a1937693bae1a59e6f4edefa47e": "4348484c18b29742e4667de5a6810616",
".git/objects/51/7ec34734e4fa7fb2a2652a6a17d9d6bc6dbad7": "e874beb779662741ed6fb9d876ab1e34",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/f29721dfdd22f3ebc45293ad16faf0701a0fd9": "9db668ca314cce1cabeb7f4fb6138067",
".git/objects/54/631ced5d4fdb94d25bd75a0f8ae477ad4b3fb1": "9d8490a3c8d492acc227fec0bbb8f235",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5e/9393ad30fb824631e1a8c244b54c5e2f616d2c": "97502df38c204bc774ec5c5d46823da7",
".git/objects/65/baabf1da2e1a6011cfb48a05550504071d1d1c": "49c90a7d654817b26abda168ab77a81c",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6e/010782dda3ac1555ee83ab1cd20f4ca38f207e": "50369b00088f50ccc07b83636bf53020",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/6f/fb294c8b5dd778f9b7b717a703cf58f864c932": "860d4612b9c99b804f271c0f7b5204b4",
".git/objects/70/3d996c9bf1597a4cd1197e4d7f3056ab9c1f86": "de6bd6eecfed1cd7931efd0f2d92721a",
".git/objects/71/5a4e83cef600d48fe0a9e19f32389f26496799": "60ad975e3c796bd785a8ce510bd4c91a",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7e/43bd622c9b4ea24a4eb9ebab274511f6be671b": "86bf16a1dfe0c11e3c05c9860472146a",
".git/objects/82/a1cc5772fe796e9da446c50ff2fbe3e7bda453": "d50e42853cc7cf02a7040e0941da113f",
".git/objects/87/c4c074b63580d18060038e513afa19353d337a": "29c67accde0ce30e3919650755a0c647",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/c78b97e7f165411285288b2a344c7abfd4cb00": "874977caf68f2458c8506f27c149d3d3",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/90/45a7247674acff5e30be36d213687ae1667bb0": "7e494de34d681554aa2dcf19de29b1bc",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/95/939352b2a89151b6c6d782b6b800628458e838": "aa32416acfd48c90bef352ceeaa8b42a",
".git/objects/a1/5f25781f39d809b8f92d7e409eb1f1de165cc7": "62f4f1ce9db06967ec626a53484d7991",
".git/objects/a1/8718219e6a1f8b1955d3c945e344230ad2a550": "8a84ef1a01b92b5cd2dffa3f2c730377",
".git/objects/a7/9953161de7d5a4595b730be2aa94f5e3b4ee76": "46667df8e13904f5aa30ab6de1a7b45b",
".git/objects/a9/faf68336fd7975ae73469d8845373645a5cd30": "9659d382f2e61a8e3804f8f4110f8af3",
".git/objects/ac/863b8a13b6927ea9717a6978c12a4a0ea06b9b": "02be764077c51409def410f580ec17d3",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b0/31025c4b9f7806de2b397355706d7c26442d29": "1be60f4c032bb4a7b8abc171c8e76078",
".git/objects/b1/3581cbbf108d78de3664450af515400246af91": "d7292b3000cefef1afe6ac407dfd0fdc",
".git/objects/b2/db5c18afa2e9a0e473f1c5967308d973162d4e": "4029179261f77f6b9469d5e6700c7917",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/77521595d029eaefe4a90fb20c331dd52ccf3a": "668387d68050770c24160c4279085f54",
".git/objects/b9/13f1a2e87e1fcd8768c9d17d34988ebbcfddca": "21930964ca365a6b2a6f7eedb204796b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/3943ab538d2cacf84e91b1705f7d6233ad6eb3": "19f29feff3254a67ba8bfd99341355ee",
".git/objects/c3/8ec4db620600bc8ff08a41f72d143dd710afc3": "6fa1f07aad04b62b5ff1683060d59e9e",
".git/objects/c4/14cd36354307e81ad35efe27f6105307fd741e": "f2d1fa61e0e3854525bbb051a9209712",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c7/faa011c979af5905d4ca3c0d116ba56cfd9c6d": "16d49cb74f172deb12ac736f488e753f",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cb/b35cb36e37f4414e7b1a0bd854b175dab09832": "12451150d9e5095704a7f8a8332289df",
".git/objects/cc/ef7c3fcca4a58e2dacaac5ee191a6291bee82e": "0e0a7c6b64c0e539a2e9d913bc219fc1",
".git/objects/ce/7ad63aa6c064b3adc14a7cb12782a2f4fdb661": "5f383c2223f830972eed878e09f23b7d",
".git/objects/d1/d3cb7364defb87f56b6b8d6d0fb79dd68a968a": "bbbe05cbea7af213dd59fcccfe643ec2",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/70fd40ab3672e3d95c8055015670b456f9d886": "d5ff0172fcf48f67d7996af1c50b058b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/9c1e0407dc90dc8010442ef6a51466cd6ead59": "faa7ece6443415d49a8e2fd0a76d91cd",
".git/objects/d7/f200edf2ab04641496defac798e0d8a027c400": "c7598fc48029a86989d656caa6a4346a",
".git/objects/dd/03f38e4d213951d6bbb617fae368dc1d2e03ab": "60ccec69f83fcb942f32a1f94de4a2c8",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e1/032e2f2a62f8c88dafd9041b41867c63589268": "a7a5b5e0570a716ce35c45e16bb735d8",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/f31101112d5e112ad3e4262c9b9f2f7b8c8cdc": "2874ed80964a3bc384b002860eebfa32",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fc/ecdec3dcbce76415111b0ec67c3903a9915999": "20c98fe9636f590e8b16021c154ebe1d",
".git/ORIG_HEAD": "e39a66220157eb905a2218ed719091dc",
".git/refs/heads/master": "a40dfc4ef8673a4b3c77493b72db7d51",
".git/refs/remotes/origin/main": "1c340e0a55bded6d391329acc12efff2",
".git/refs/remotes/origin/master": "a40dfc4ef8673a4b3c77493b72db7d51",
"Ali%20Hussain%20Resume.pdf": "07dd95bcfd127fc3c72fcdfe8d1d6a1d",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "82d05ea2f040d4c9adace6749fadf8ba",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "22bf93d5391a5adfa73c68927904a594",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1b685432a2ba846177f397828e98e6eb",
"/": "1b685432a2ba846177f397828e98e6eb",
"main.dart.js": "19658ff834999e126412b9dc5fd9973b",
"manifest.json": "bbb61d58118b1126c5c5d3f29f532f77",
"Profile%20Pic/img1.jpg": "9dfed180909f49ed4371aca6c0929d5b",
"README.md": "d6932d123e1c8130659ddb7abd175495",
"version.json": "af6fb5b37b5d6dcc27ceea9b3c54ddaf"};
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

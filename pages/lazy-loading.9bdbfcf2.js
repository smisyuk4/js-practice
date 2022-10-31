// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7JZTv":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d82dbaf09bdbfcf2";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"94vDX":[function(require,module,exports) {
// https://afarkas.github.io/lazysizes/index.html
// https://github.com/aFarkas/lazysizes/blob/gh-pages/README.md
// npm install lazysizes --save
// once: Boolean указывает, что обработчик должен быть вызван не более одного раза 
// после добавления. Если true, обработчик автоматически удаляется при вызове.
var _lazysizes = require("lazysizes");
// import a plugin
var _lsParentFit = require("lazysizes/plugins/parent-fit/ls.parent-fit");
const refs = {
    images: document.querySelectorAll(".feed-img")
};
refs.images.forEach((image)=>{
    image.addEventListener("load", onLoadImage, {
        once: true
    });
});
function onLoadImage(event) {
    event.target.classList.add("appear");
}

},{"lazysizes":"gSx8h","lazysizes/plugins/parent-fit/ls.parent-fit":"43MYm"}],"gSx8h":[function(require,module,exports) {
(function(window1, factory) {
    var lazySizes = factory(window1, window1.document, Date);
    window1.lazySizes = lazySizes;
    if (module.exports) module.exports = lazySizes;
})(typeof window != "undefined" ? window : {}, /**
 * import("./types/global")
 * @typedef { import("./types/lazysizes-config").LazySizesConfigPartial } LazySizesConfigPartial
 */ function l(window1, document, Date1) {
    "use strict";
    /*jshint eqnull:true */ var lazysizes, /**
		 * @type { LazySizesConfigPartial }
		 */ lazySizesCfg;
    (function() {
        var prop;
        var lazySizesDefaults = {
            lazyClass: "lazyload",
            loadedClass: "lazyloaded",
            loadingClass: "lazyloading",
            preloadClass: "lazypreload",
            errorClass: "lazyerror",
            //strictClass: 'lazystrict',
            autosizesClass: "lazyautosizes",
            fastLoadedClass: "ls-is-cached",
            iframeLoadMode: 0,
            srcAttr: "data-src",
            srcsetAttr: "data-srcset",
            sizesAttr: "data-sizes",
            //preloadAfterLoad: false,
            minSize: 40,
            customMedia: {},
            init: true,
            expFactor: 1.5,
            hFac: 0.8,
            loadMode: 2,
            loadHidden: true,
            ricTimeout: 0,
            throttleDelay: 125
        };
        lazySizesCfg = window1.lazySizesConfig || window1.lazysizesConfig || {};
        for(prop in lazySizesDefaults)if (!(prop in lazySizesCfg)) lazySizesCfg[prop] = lazySizesDefaults[prop];
    })();
    if (!document || !document.getElementsByClassName) return {
        init: function() {},
        /**
			 * @type { LazySizesConfigPartial }
			 */ cfg: lazySizesCfg,
        /**
			 * @type { true }
			 */ noSupport: true
    };
    var docElem = document.documentElement;
    var supportPicture = window1.HTMLPictureElement;
    var _addEventListener = "addEventListener";
    var _getAttribute = "getAttribute";
    /**
	 * Update to bind to window because 'this' becomes null during SSR
	 * builds.
	 */ var addEventListener = window1[_addEventListener].bind(window1);
    var setTimeout = window1.setTimeout;
    var requestAnimationFrame = window1.requestAnimationFrame || setTimeout;
    var requestIdleCallback = window1.requestIdleCallback;
    var regPicture = /^picture$/i;
    var loadEvents = [
        "load",
        "error",
        "lazyincluded",
        "_lazyloaded"
    ];
    var regClassCache = {};
    var forEach = Array.prototype.forEach;
    /**
	 * @param ele {Element}
	 * @param cls {string}
	 */ var hasClass = function(ele, cls) {
        if (!regClassCache[cls]) regClassCache[cls] = new RegExp("(\\s|^)" + cls + "(\\s|$)");
        return regClassCache[cls].test(ele[_getAttribute]("class") || "") && regClassCache[cls];
    };
    /**
	 * @param ele {Element}
	 * @param cls {string}
	 */ var addClass = function(ele, cls) {
        if (!hasClass(ele, cls)) ele.setAttribute("class", (ele[_getAttribute]("class") || "").trim() + " " + cls);
    };
    /**
	 * @param ele {Element}
	 * @param cls {string}
	 */ var removeClass = function(ele, cls) {
        var reg;
        if (reg = hasClass(ele, cls)) ele.setAttribute("class", (ele[_getAttribute]("class") || "").replace(reg, " "));
    };
    var addRemoveLoadEvents = function(dom, fn, add) {
        var action = add ? _addEventListener : "removeEventListener";
        if (add) addRemoveLoadEvents(dom, fn);
        loadEvents.forEach(function(evt) {
            dom[action](evt, fn);
        });
    };
    /**
	 * @param elem { Element }
	 * @param name { string }
	 * @param detail { any }
	 * @param noBubbles { boolean }
	 * @param noCancelable { boolean }
	 * @returns { CustomEvent }
	 */ var triggerEvent = function(elem, name, detail, noBubbles, noCancelable) {
        var event = document.createEvent("Event");
        if (!detail) detail = {};
        detail.instance = lazysizes;
        event.initEvent(name, !noBubbles, !noCancelable);
        event.detail = detail;
        elem.dispatchEvent(event);
        return event;
    };
    var updatePolyfill = function(el, full) {
        var polyfill;
        if (!supportPicture && (polyfill = window1.picturefill || lazySizesCfg.pf)) {
            if (full && full.src && !el[_getAttribute]("srcset")) el.setAttribute("srcset", full.src);
            polyfill({
                reevaluate: true,
                elements: [
                    el
                ]
            });
        } else if (full && full.src) el.src = full.src;
    };
    var getCSS = function(elem, style) {
        return (getComputedStyle(elem, null) || {})[style];
    };
    /**
	 *
	 * @param elem { Element }
	 * @param parent { Element }
	 * @param [width] {number}
	 * @returns {number}
	 */ var getWidth = function(elem, parent, width) {
        width = width || elem.offsetWidth;
        while(width < lazySizesCfg.minSize && parent && !elem._lazysizesWidth){
            width = parent.offsetWidth;
            parent = parent.parentNode;
        }
        return width;
    };
    var rAF = function() {
        var running, waiting;
        var firstFns = [];
        var secondFns = [];
        var fns = firstFns;
        var run = function() {
            var runFns = fns;
            fns = firstFns.length ? secondFns : firstFns;
            running = true;
            waiting = false;
            while(runFns.length)runFns.shift()();
            running = false;
        };
        var rafBatch = function(fn, queue) {
            if (running && !queue) fn.apply(this, arguments);
            else {
                fns.push(fn);
                if (!waiting) {
                    waiting = true;
                    (document.hidden ? setTimeout : requestAnimationFrame)(run);
                }
            }
        };
        rafBatch._lsFlush = run;
        return rafBatch;
    }();
    var rAFIt = function(fn, simple) {
        return simple ? function() {
            rAF(fn);
        } : function() {
            var that = this;
            var args = arguments;
            rAF(function() {
                fn.apply(that, args);
            });
        };
    };
    var throttle = function(fn) {
        var running;
        var lastTime = 0;
        var gDelay = lazySizesCfg.throttleDelay;
        var rICTimeout = lazySizesCfg.ricTimeout;
        var run = function() {
            running = false;
            lastTime = Date1.now();
            fn();
        };
        var idleCallback = requestIdleCallback && rICTimeout > 49 ? function() {
            requestIdleCallback(run, {
                timeout: rICTimeout
            });
            if (rICTimeout !== lazySizesCfg.ricTimeout) rICTimeout = lazySizesCfg.ricTimeout;
        } : rAFIt(function() {
            setTimeout(run);
        }, true);
        return function(isPriority) {
            var delay;
            if (isPriority = isPriority === true) rICTimeout = 33;
            if (running) return;
            running = true;
            delay = gDelay - (Date1.now() - lastTime);
            if (delay < 0) delay = 0;
            if (isPriority || delay < 9) idleCallback();
            else setTimeout(idleCallback, delay);
        };
    };
    //based on http://modernjavascript.blogspot.de/2013/08/building-better-debounce.html
    var debounce = function(func) {
        var timeout, timestamp;
        var wait = 99;
        var run = function() {
            timeout = null;
            func();
        };
        var later = function() {
            var last = Date1.now() - timestamp;
            if (last < wait) setTimeout(later, wait - last);
            else (requestIdleCallback || run)(run);
        };
        return function() {
            timestamp = Date1.now();
            if (!timeout) timeout = setTimeout(later, wait);
        };
    };
    var loader = function() {
        var preloadElems, isCompleted, resetPreloadingTimer, loadMode, started;
        var eLvW, elvH, eLtop, eLleft, eLright, eLbottom, isBodyHidden;
        var regImg = /^img$/i;
        var regIframe = /^iframe$/i;
        var supportScroll = "onscroll" in window1 && !/(gle|ing)bot/.test(navigator.userAgent);
        var shrinkExpand = 0;
        var currentExpand = 0;
        var isLoading = 0;
        var lowRuns = -1;
        var resetPreloading = function(e) {
            isLoading--;
            if (!e || isLoading < 0 || !e.target) isLoading = 0;
        };
        var isVisible = function(elem) {
            if (isBodyHidden == null) isBodyHidden = getCSS(document.body, "visibility") == "hidden";
            return isBodyHidden || !(getCSS(elem.parentNode, "visibility") == "hidden" && getCSS(elem, "visibility") == "hidden");
        };
        var isNestedVisible = function(elem, elemExpand) {
            var outerRect;
            var parent = elem;
            var visible = isVisible(elem);
            eLtop -= elemExpand;
            eLbottom += elemExpand;
            eLleft -= elemExpand;
            eLright += elemExpand;
            while(visible && (parent = parent.offsetParent) && parent != document.body && parent != docElem){
                visible = (getCSS(parent, "opacity") || 1) > 0;
                if (visible && getCSS(parent, "overflow") != "visible") {
                    outerRect = parent.getBoundingClientRect();
                    visible = eLright > outerRect.left && eLleft < outerRect.right && eLbottom > outerRect.top - 1 && eLtop < outerRect.bottom + 1;
                }
            }
            return visible;
        };
        var checkElements = function() {
            var eLlen, i, rect, autoLoadElem, loadedSomething, elemExpand, elemNegativeExpand, elemExpandVal, beforeExpandVal, defaultExpand, preloadExpand, hFac;
            var lazyloadElems = lazysizes.elements;
            if ((loadMode = lazySizesCfg.loadMode) && isLoading < 8 && (eLlen = lazyloadElems.length)) {
                i = 0;
                lowRuns++;
                for(; i < eLlen; i++){
                    if (!lazyloadElems[i] || lazyloadElems[i]._lazyRace) continue;
                    if (!supportScroll || lazysizes.prematureUnveil && lazysizes.prematureUnveil(lazyloadElems[i])) {
                        unveilElement(lazyloadElems[i]);
                        continue;
                    }
                    if (!(elemExpandVal = lazyloadElems[i][_getAttribute]("data-expand")) || !(elemExpand = elemExpandVal * 1)) elemExpand = currentExpand;
                    if (!defaultExpand) {
                        defaultExpand = !lazySizesCfg.expand || lazySizesCfg.expand < 1 ? docElem.clientHeight > 500 && docElem.clientWidth > 500 ? 500 : 370 : lazySizesCfg.expand;
                        lazysizes._defEx = defaultExpand;
                        preloadExpand = defaultExpand * lazySizesCfg.expFactor;
                        hFac = lazySizesCfg.hFac;
                        isBodyHidden = null;
                        if (currentExpand < preloadExpand && isLoading < 1 && lowRuns > 2 && loadMode > 2 && !document.hidden) {
                            currentExpand = preloadExpand;
                            lowRuns = 0;
                        } else if (loadMode > 1 && lowRuns > 1 && isLoading < 6) currentExpand = defaultExpand;
                        else currentExpand = shrinkExpand;
                    }
                    if (beforeExpandVal !== elemExpand) {
                        eLvW = innerWidth + elemExpand * hFac;
                        elvH = innerHeight + elemExpand;
                        elemNegativeExpand = elemExpand * -1;
                        beforeExpandVal = elemExpand;
                    }
                    rect = lazyloadElems[i].getBoundingClientRect();
                    if ((eLbottom = rect.bottom) >= elemNegativeExpand && (eLtop = rect.top) <= elvH && (eLright = rect.right) >= elemNegativeExpand * hFac && (eLleft = rect.left) <= eLvW && (eLbottom || eLright || eLleft || eLtop) && (lazySizesCfg.loadHidden || isVisible(lazyloadElems[i])) && (isCompleted && isLoading < 3 && !elemExpandVal && (loadMode < 3 || lowRuns < 4) || isNestedVisible(lazyloadElems[i], elemExpand))) {
                        unveilElement(lazyloadElems[i]);
                        loadedSomething = true;
                        if (isLoading > 9) break;
                    } else if (!loadedSomething && isCompleted && !autoLoadElem && isLoading < 4 && lowRuns < 4 && loadMode > 2 && (preloadElems[0] || lazySizesCfg.preloadAfterLoad) && (preloadElems[0] || !elemExpandVal && (eLbottom || eLright || eLleft || eLtop || lazyloadElems[i][_getAttribute](lazySizesCfg.sizesAttr) != "auto"))) autoLoadElem = preloadElems[0] || lazyloadElems[i];
                }
                if (autoLoadElem && !loadedSomething) unveilElement(autoLoadElem);
            }
        };
        var throttledCheckElements = throttle(checkElements);
        var switchLoadingClass = function(e) {
            var elem = e.target;
            if (elem._lazyCache) {
                delete elem._lazyCache;
                return;
            }
            resetPreloading(e);
            addClass(elem, lazySizesCfg.loadedClass);
            removeClass(elem, lazySizesCfg.loadingClass);
            addRemoveLoadEvents(elem, rafSwitchLoadingClass);
            triggerEvent(elem, "lazyloaded");
        };
        var rafedSwitchLoadingClass = rAFIt(switchLoadingClass);
        var rafSwitchLoadingClass = function(e) {
            rafedSwitchLoadingClass({
                target: e.target
            });
        };
        var changeIframeSrc = function(elem, src) {
            var loadMode = elem.getAttribute("data-load-mode") || lazySizesCfg.iframeLoadMode;
            // loadMode can be also a string!
            if (loadMode == 0) elem.contentWindow.location.replace(src);
            else if (loadMode == 1) elem.src = src;
        };
        var handleSources = function(source) {
            var customMedia;
            var sourceSrcset = source[_getAttribute](lazySizesCfg.srcsetAttr);
            if (customMedia = lazySizesCfg.customMedia[source[_getAttribute]("data-media") || source[_getAttribute]("media")]) source.setAttribute("media", customMedia);
            if (sourceSrcset) source.setAttribute("srcset", sourceSrcset);
        };
        var lazyUnveil = rAFIt(function(elem, detail, isAuto, sizes, isImg) {
            var src, srcset, parent, isPicture, event, firesLoad;
            if (!(event = triggerEvent(elem, "lazybeforeunveil", detail)).defaultPrevented) {
                if (sizes) {
                    if (isAuto) addClass(elem, lazySizesCfg.autosizesClass);
                    else elem.setAttribute("sizes", sizes);
                }
                srcset = elem[_getAttribute](lazySizesCfg.srcsetAttr);
                src = elem[_getAttribute](lazySizesCfg.srcAttr);
                if (isImg) {
                    parent = elem.parentNode;
                    isPicture = parent && regPicture.test(parent.nodeName || "");
                }
                firesLoad = detail.firesLoad || "src" in elem && (srcset || src || isPicture);
                event = {
                    target: elem
                };
                addClass(elem, lazySizesCfg.loadingClass);
                if (firesLoad) {
                    clearTimeout(resetPreloadingTimer);
                    resetPreloadingTimer = setTimeout(resetPreloading, 2500);
                    addRemoveLoadEvents(elem, rafSwitchLoadingClass, true);
                }
                if (isPicture) forEach.call(parent.getElementsByTagName("source"), handleSources);
                if (srcset) elem.setAttribute("srcset", srcset);
                else if (src && !isPicture) {
                    if (regIframe.test(elem.nodeName)) changeIframeSrc(elem, src);
                    else elem.src = src;
                }
                if (isImg && (srcset || isPicture)) updatePolyfill(elem, {
                    src: src
                });
            }
            if (elem._lazyRace) delete elem._lazyRace;
            removeClass(elem, lazySizesCfg.lazyClass);
            rAF(function() {
                // Part of this can be removed as soon as this fix is older: https://bugs.chromium.org/p/chromium/issues/detail?id=7731 (2015)
                var isLoaded = elem.complete && elem.naturalWidth > 1;
                if (!firesLoad || isLoaded) {
                    if (isLoaded) addClass(elem, lazySizesCfg.fastLoadedClass);
                    switchLoadingClass(event);
                    elem._lazyCache = true;
                    setTimeout(function() {
                        if ("_lazyCache" in elem) delete elem._lazyCache;
                    }, 9);
                }
                if (elem.loading == "lazy") isLoading--;
            }, true);
        });
        /**
		 *
		 * @param elem { Element }
		 */ var unveilElement = function(elem) {
            if (elem._lazyRace) return;
            var detail;
            var isImg = regImg.test(elem.nodeName);
            //allow using sizes="auto", but don't use. it's invalid. Use data-sizes="auto" or a valid value for sizes instead (i.e.: sizes="80vw")
            var sizes = isImg && (elem[_getAttribute](lazySizesCfg.sizesAttr) || elem[_getAttribute]("sizes"));
            var isAuto = sizes == "auto";
            if ((isAuto || !isCompleted) && isImg && (elem[_getAttribute]("src") || elem.srcset) && !elem.complete && !hasClass(elem, lazySizesCfg.errorClass) && hasClass(elem, lazySizesCfg.lazyClass)) return;
            detail = triggerEvent(elem, "lazyunveilread").detail;
            if (isAuto) autoSizer.updateElem(elem, true, elem.offsetWidth);
            elem._lazyRace = true;
            isLoading++;
            lazyUnveil(elem, detail, isAuto, sizes, isImg);
        };
        var afterScroll = debounce(function() {
            lazySizesCfg.loadMode = 3;
            throttledCheckElements();
        });
        var altLoadmodeScrollListner = function() {
            if (lazySizesCfg.loadMode == 3) lazySizesCfg.loadMode = 2;
            afterScroll();
        };
        var onload = function() {
            if (isCompleted) return;
            if (Date1.now() - started < 999) {
                setTimeout(onload, 999);
                return;
            }
            isCompleted = true;
            lazySizesCfg.loadMode = 3;
            throttledCheckElements();
            addEventListener("scroll", altLoadmodeScrollListner, true);
        };
        return {
            _: function() {
                started = Date1.now();
                lazysizes.elements = document.getElementsByClassName(lazySizesCfg.lazyClass);
                preloadElems = document.getElementsByClassName(lazySizesCfg.lazyClass + " " + lazySizesCfg.preloadClass);
                addEventListener("scroll", throttledCheckElements, true);
                addEventListener("resize", throttledCheckElements, true);
                addEventListener("pageshow", function(e) {
                    if (e.persisted) {
                        var loadingElements = document.querySelectorAll("." + lazySizesCfg.loadingClass);
                        if (loadingElements.length && loadingElements.forEach) requestAnimationFrame(function() {
                            loadingElements.forEach(function(img) {
                                if (img.complete) unveilElement(img);
                            });
                        });
                    }
                });
                if (window1.MutationObserver) new MutationObserver(throttledCheckElements).observe(docElem, {
                    childList: true,
                    subtree: true,
                    attributes: true
                });
                else {
                    docElem[_addEventListener]("DOMNodeInserted", throttledCheckElements, true);
                    docElem[_addEventListener]("DOMAttrModified", throttledCheckElements, true);
                    setInterval(throttledCheckElements, 999);
                }
                addEventListener("hashchange", throttledCheckElements, true);
                //, 'fullscreenchange'
                [
                    "focus",
                    "mouseover",
                    "click",
                    "load",
                    "transitionend",
                    "animationend"
                ].forEach(function(name) {
                    document[_addEventListener](name, throttledCheckElements, true);
                });
                if (/d$|^c/.test(document.readyState)) onload();
                else {
                    addEventListener("load", onload);
                    document[_addEventListener]("DOMContentLoaded", throttledCheckElements);
                    setTimeout(onload, 20000);
                }
                if (lazysizes.elements.length) {
                    checkElements();
                    rAF._lsFlush();
                } else throttledCheckElements();
            },
            checkElems: throttledCheckElements,
            unveil: unveilElement,
            _aLSL: altLoadmodeScrollListner
        };
    }();
    var autoSizer = function() {
        var autosizesElems;
        var sizeElement = rAFIt(function(elem, parent, event, width) {
            var sources, i, len;
            elem._lazysizesWidth = width;
            width += "px";
            elem.setAttribute("sizes", width);
            if (regPicture.test(parent.nodeName || "")) {
                sources = parent.getElementsByTagName("source");
                for(i = 0, len = sources.length; i < len; i++)sources[i].setAttribute("sizes", width);
            }
            if (!event.detail.dataAttr) updatePolyfill(elem, event.detail);
        });
        /**
		 *
		 * @param elem {Element}
		 * @param dataAttr
		 * @param [width] { number }
		 */ var getSizeElement = function(elem, dataAttr, width) {
            var event;
            var parent = elem.parentNode;
            if (parent) {
                width = getWidth(elem, parent, width);
                event = triggerEvent(elem, "lazybeforesizes", {
                    width: width,
                    dataAttr: !!dataAttr
                });
                if (!event.defaultPrevented) {
                    width = event.detail.width;
                    if (width && width !== elem._lazysizesWidth) sizeElement(elem, parent, event, width);
                }
            }
        };
        var updateElementsSizes = function() {
            var i;
            var len = autosizesElems.length;
            if (len) {
                i = 0;
                for(; i < len; i++)getSizeElement(autosizesElems[i]);
            }
        };
        var debouncedUpdateElementsSizes = debounce(updateElementsSizes);
        return {
            _: function() {
                autosizesElems = document.getElementsByClassName(lazySizesCfg.autosizesClass);
                addEventListener("resize", debouncedUpdateElementsSizes);
            },
            checkElems: debouncedUpdateElementsSizes,
            updateElem: getSizeElement
        };
    }();
    var init = function() {
        if (!init.i && document.getElementsByClassName) {
            init.i = true;
            autoSizer._();
            loader._();
        }
    };
    setTimeout(function() {
        if (lazySizesCfg.init) init();
    });
    lazysizes = {
        /**
		 * @type { LazySizesConfigPartial }
		 */ cfg: lazySizesCfg,
        autoSizer: autoSizer,
        loader: loader,
        init: init,
        uP: updatePolyfill,
        aC: addClass,
        rC: removeClass,
        hC: hasClass,
        fire: triggerEvent,
        gW: getWidth,
        rAF: rAF
    };
    return lazysizes;
});

},{}],"43MYm":[function(require,module,exports) {
(function(window1, factory) {
    if (!window1) return;
    var globalInstall = function() {
        factory(window1.lazySizes);
        window1.removeEventListener("lazyunveilread", globalInstall, true);
    };
    factory = factory.bind(null, window1, window1.document);
    if (module.exports) factory(require("lazysizes"));
    else if (typeof define == "function" && define.amd) define([
        "lazysizes"
    ], factory);
    else if (window1.lazySizes) globalInstall();
    else window1.addEventListener("lazyunveilread", globalInstall, true);
})(typeof window != "undefined" ? window : 0, function(window1, document, lazySizes) {
    "use strict";
    if (!window1.addEventListener) return;
    var regDescriptors = /\s+(\d+)(w|h)\s+(\d+)(w|h)/;
    var regCssFit = /parent-fit["']*\s*:\s*["']*(contain|cover|width)/;
    var regCssObject = /parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/;
    var regPicture = /^picture$/i;
    var cfg = lazySizes.cfg;
    var getCSS = function(elem) {
        return getComputedStyle(elem, null) || {};
    };
    var parentFit = {
        getParent: function(element, parentSel) {
            var parent = element;
            var parentNode = element.parentNode;
            if ((!parentSel || parentSel == "prev") && parentNode && regPicture.test(parentNode.nodeName || "")) parentNode = parentNode.parentNode;
            if (parentSel != "self") {
                if (parentSel == "prev") parent = element.previousElementSibling;
                else if (parentSel && (parentNode.closest || window1.jQuery)) parent = (parentNode.closest ? parentNode.closest(parentSel) : jQuery(parentNode).closest(parentSel)[0]) || parentNode;
                else parent = parentNode;
            }
            return parent;
        },
        getFit: function(element) {
            var tmpMatch, parentObj;
            var css = getCSS(element);
            var content = css.content || css.fontFamily;
            var obj = {
                fit: element._lazysizesParentFit || element.getAttribute("data-parent-fit")
            };
            if (!obj.fit && content && (tmpMatch = content.match(regCssFit))) obj.fit = tmpMatch[1];
            if (obj.fit) {
                parentObj = element._lazysizesParentContainer || element.getAttribute("data-parent-container");
                if (!parentObj && content && (tmpMatch = content.match(regCssObject))) parentObj = tmpMatch[1];
                obj.parent = parentFit.getParent(element, parentObj);
            } else obj.fit = css.objectFit;
            return obj;
        },
        getImageRatio: function(element) {
            var i, srcset, media, ratio, match, width, height;
            var parent = element.parentNode;
            var elements = parent && regPicture.test(parent.nodeName || "") ? parent.querySelectorAll("source, img") : [
                element
            ];
            for(i = 0; i < elements.length; i++){
                element = elements[i];
                srcset = element.getAttribute(cfg.srcsetAttr) || element.getAttribute("srcset") || element.getAttribute("data-pfsrcset") || element.getAttribute("data-risrcset") || "";
                media = element._lsMedia || element.getAttribute("media");
                media = cfg.customMedia[element.getAttribute("data-media") || media] || media;
                if (srcset && (!media || (window1.matchMedia && matchMedia(media) || {}).matches)) {
                    ratio = parseFloat(element.getAttribute("data-aspectratio"));
                    if (!ratio) {
                        match = srcset.match(regDescriptors);
                        if (match) {
                            if (match[2] == "w") {
                                width = match[1];
                                height = match[3];
                            } else {
                                width = match[3];
                                height = match[1];
                            }
                        } else {
                            width = element.getAttribute("width");
                            height = element.getAttribute("height");
                        }
                        ratio = width / height;
                    }
                    break;
                }
            }
            return ratio;
        },
        calculateSize: function(element, width) {
            var displayRatio, height, imageRatio, retWidth;
            var fitObj = this.getFit(element);
            var fit = fitObj.fit;
            var fitElem = fitObj.parent;
            if (fit != "width" && (fit != "contain" && fit != "cover" || !(imageRatio = this.getImageRatio(element)))) return width;
            if (fitElem) width = fitElem.clientWidth;
            else fitElem = element;
            retWidth = width;
            if (fit == "width") retWidth = width;
            else {
                height = fitElem.clientHeight;
                if ((displayRatio = width / height) && (fit == "cover" && displayRatio < imageRatio || fit == "contain" && displayRatio > imageRatio)) retWidth = width * (imageRatio / displayRatio);
            }
            return retWidth;
        }
    };
    lazySizes.parentFit = parentFit;
    document.addEventListener("lazybeforesizes", function(e) {
        if (e.defaultPrevented || e.detail.instance != lazySizes) return;
        var element = e.target;
        e.detail.width = parentFit.calculateSize(element, e.detail.width);
    });
});

},{"lazysizes":"gSx8h"}]},["7JZTv","94vDX"], "94vDX", "parcelRequire716c")

//# sourceMappingURL=lazy-loading.9bdbfcf2.js.map

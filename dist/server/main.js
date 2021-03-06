(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@angular/router/router.ngfactory.js":
/*!**********************************************************!*\
  !*** ./node_modules/@angular/router/router.ngfactory.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var RouterModuleNgFactory = i0.ɵcmf(i1.RouterModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [ɵEmptyOutletComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(1073742336, i1.RouterModule, i1.RouterModule, [[2, i1.ɵangular_packages_router_router_a], [2, i1.Router]])]); });
exports.RouterModuleNgFactory = RouterModuleNgFactory;
var styles_ɵEmptyOutletComponent = [];
var RenderType_ɵEmptyOutletComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_ɵEmptyOutletComponent, data: {} });
exports.RenderType_ɵEmptyOutletComponent = RenderType_ɵEmptyOutletComponent;
function View_ɵEmptyOutletComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), i0.ɵdid(1, 212992, null, 0, i1.RouterOutlet, [i1.ChildrenOutletContexts, i0.ViewContainerRef, i0.ComponentFactoryResolver, [8, null], i0.ChangeDetectorRef], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_ɵEmptyOutletComponent_0 = View_ɵEmptyOutletComponent_0;
function View_ɵEmptyOutletComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ng-component", [], null, null, null, View_ɵEmptyOutletComponent_0, RenderType_ɵEmptyOutletComponent)), i0.ɵdid(1, 49152, null, 0, i1.ɵEmptyOutletComponent, [], null, null)], null, null); }
exports.View_ɵEmptyOutletComponent_Host_0 = View_ɵEmptyOutletComponent_Host_0;
var ɵEmptyOutletComponentNgFactory = i0.ɵccf("ng-component", i1.ɵEmptyOutletComponent, View_ɵEmptyOutletComponent_Host_0, {}, {}, []);
exports.ɵEmptyOutletComponentNgFactory = ɵEmptyOutletComponentNgFactory;


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var add_seo_component_1 = __webpack_require__(/*! ./seo/add-seo/add-seo.component */ "./src/app/seo/add-seo/add-seo.component.ts");
var ɵ0 = {
    title: 'Seo Title',
    metatags: {
        description: 'seo',
        keywords: 'some, keywords, here, separated, by, a comma'
    }
};
exports.ɵ0 = ɵ0;
var routes = [{ path: 'seo', component: add_seo_component_1.AddSeoComponent,
        data: ɵ0
    }];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css.shim.ngstyle.js":
/*!***************************************************!*\
  !*** ./src/app/app.component.css.shim.ngstyle.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./app.component.css.shim.ngstyle */ "./src/app/app.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var styles_AppComponent = [i0.styles];
var RenderType_AppComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_AppComponent, data: {} });
exports.RenderType_AppComponent = RenderType_AppComponent;
function View_AppComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 2, "a", [["routerLink", "seo"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(2, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, [" SEO"])), (_l()(), i1.ɵeld(4, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), i1.ɵdid(5, 212992, null, 0, i2.RouterOutlet, [i2.ChildrenOutletContexts, i1.ViewContainerRef, i1.ComponentFactoryResolver, [8, null], i1.ChangeDetectorRef], null, null)], function (_ck, _v) { var currVal_2 = "seo"; _ck(_v, 2, 0, currVal_2); _ck(_v, 5, 0); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 2).target; var currVal_1 = i1.ɵnov(_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
exports.View_AppComponent_0 = View_AppComponent_0;
function View_AppComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), i1.ɵdid(1, 49152, null, 0, i4.AppComponent, [], null, null)], null, null); }
exports.View_AppComponent_Host_0 = View_AppComponent_Host_0;
var AppComponentNgFactory = i1.ɵccf("app-root", i4.AppComponent, View_AppComponent_Host_0, {}, {}, []);
exports.AppComponentNgFactory = AppComponentNgFactory;


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'saif-buyer';
    }
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(/*! @angular/common */ "@angular/common");
var AppModule = /** @class */ (function () {
    function AppModule(platformId, appId) {
        this.platformId = platformId;
        this.appId = appId;
        var platform = common_1.isPlatformBrowser(platformId) ?
            'in the browser' : 'on the server';
        console.log("Running " + platform + " with appId=" + appId);
    }
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/app.server.module.ngfactory.js":
/*!************************************************!*\
  !*** ./src/app/app.server.module.ngfactory.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./app.server.module */ "./src/app/app.server.module.ts");
var i2 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var i3 = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
var i4 = __webpack_require__(/*! ./seo/add-seo/add-seo.component.ngfactory */ "./src/app/seo/add-seo/add-seo.component.ngfactory.js");
var i5 = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
var i6 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i7 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var i8 = __webpack_require__(/*! @angular/platform-server */ "@angular/platform-server");
var i9 = __webpack_require__(/*! @angular/animations/browser */ "@angular/animations/browser");
var i10 = __webpack_require__(/*! @angular/platform-browser/animations */ "@angular/platform-browser/animations");
var i11 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i12 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var i13 = __webpack_require__(/*! ./seo/seo.service */ "./src/app/seo/seo.service.ts");
var i14 = __webpack_require__(/*! @angular/http */ "@angular/http");
var i15 = __webpack_require__(/*! @angular/animations */ "@angular/animations");
var i16 = __webpack_require__(/*! @nguniversal/module-map-ngfactory-loader */ "@nguniversal/module-map-ngfactory-loader");
var i17 = __webpack_require__(/*! ./seo/add-seo/add-seo.component */ "./src/app/seo/add-seo/add-seo.component.ts");
var i18 = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
var i19 = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
var AppServerModuleNgFactory = i0.ɵcmf(i1.AppServerModule, [i2.AppComponent], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.ɵEmptyOutletComponentNgFactory, i4.AddSeoComponentNgFactory, i5.AppComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵangular_packages_core_core_s, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i6.NgLocalization, i6.NgLocaleLocalization, [i0.LOCALE_ID, [2, i6.ɵangular_packages_common_common_a]]), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵangular_packages_core_core_q, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵangular_packages_core_core_r, []), i0.ɵmpd(4608, i7.DomSanitizer, i7.ɵDomSanitizerImpl, [i6.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i7.DomSanitizer]), i0.ɵmpd(4608, i7.HAMMER_GESTURE_CONFIG, i7.HammerGestureConfig, []), i0.ɵmpd(5120, i7.EVENT_MANAGER_PLUGINS, function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3, p3_0) { return [new i7.ɵDomEventsPlugin(p0_0, p0_1, p0_2), new i7.ɵKeyEventsPlugin(p1_0), new i7.ɵHammerGesturesPlugin(p2_0, p2_1, p2_2, p2_3), new i8.ɵangular_packages_platform_server_platform_server_d(p3_0)]; }, [i6.DOCUMENT, i0.NgZone, i0.PLATFORM_ID, i6.DOCUMENT, i6.DOCUMENT, i7.HAMMER_GESTURE_CONFIG, i0.ɵConsole, [2, i7.HAMMER_LOADER], i7.DOCUMENT]), i0.ɵmpd(4608, i7.EventManager, i7.EventManager, [i7.EVENT_MANAGER_PLUGINS, i0.NgZone]), i0.ɵmpd(135680, i7.ɵDomSharedStylesHost, i7.ɵDomSharedStylesHost, [i6.DOCUMENT]), i0.ɵmpd(4608, i7.ɵDomRendererFactory2, i7.ɵDomRendererFactory2, [i7.EventManager, i7.ɵDomSharedStylesHost]), i0.ɵmpd(4608, i8.ɵangular_packages_platform_server_platform_server_c, i8.ɵangular_packages_platform_server_platform_server_c, [i7.DOCUMENT, [2, i7.ɵTRANSITION_ID]]), i0.ɵmpd(6144, i7.ɵSharedStylesHost, null, [i8.ɵangular_packages_platform_server_platform_server_c]), i0.ɵmpd(4608, i8.ɵServerRendererFactory2, i8.ɵServerRendererFactory2, [i7.EventManager, i0.NgZone, i7.DOCUMENT, i7.ɵSharedStylesHost]), i0.ɵmpd(4608, i9.AnimationDriver, i9.ɵNoopAnimationDriver, []), i0.ɵmpd(5120, i9.ɵAnimationStyleNormalizer, i10.ɵangular_packages_platform_browser_animations_animations_b, []), i0.ɵmpd(4608, i9.ɵAnimationEngine, i10.ɵInjectableAnimationEngine, [i6.DOCUMENT, i9.AnimationDriver, i9.ɵAnimationStyleNormalizer]), i0.ɵmpd(5120, i0.RendererFactory2, i8.ɵangular_packages_platform_server_platform_server_a, [i8.ɵServerRendererFactory2, i9.ɵAnimationEngine, i0.NgZone]), i0.ɵmpd(4352, i0.Testability, null, []), i0.ɵmpd(5120, i11.ActivatedRoute, i11.ɵangular_packages_router_router_g, [i11.Router]), i0.ɵmpd(4608, i11.NoPreloading, i11.NoPreloading, []), i0.ɵmpd(6144, i11.PreloadingStrategy, null, [i11.NoPreloading]), i0.ɵmpd(135680, i11.RouterPreloader, i11.RouterPreloader, [i11.Router, i0.NgModuleFactoryLoader, i0.Compiler, i0.Injector, i11.PreloadingStrategy]), i0.ɵmpd(4608, i11.PreloadAllModules, i11.PreloadAllModules, []), i0.ɵmpd(4608, i6.ViewportScroller, i6.ɵNullViewportScroller, []), i0.ɵmpd(5120, i11.ɵangular_packages_router_router_n, i11.ɵangular_packages_router_router_c, [i11.Router, i6.ViewportScroller, i11.ROUTER_CONFIGURATION]), i0.ɵmpd(5120, i11.ROUTER_INITIALIZER, i11.ɵangular_packages_router_router_j, [i11.ɵangular_packages_router_router_h]), i0.ɵmpd(5120, i0.APP_BOOTSTRAP_LISTENER, function (p0_0) { return [p0_0]; }, [i11.ROUTER_INITIALIZER]), i0.ɵmpd(4608, i12.HttpXsrfTokenExtractor, i12.ɵangular_packages_common_http_http_g, [i6.DOCUMENT, i0.PLATFORM_ID, i12.ɵangular_packages_common_http_http_e]), i0.ɵmpd(4608, i12.ɵangular_packages_common_http_http_h, i12.ɵangular_packages_common_http_http_h, [i12.HttpXsrfTokenExtractor, i12.ɵangular_packages_common_http_http_f]), i0.ɵmpd(5120, i12.HTTP_INTERCEPTORS, function (p0_0) { return [p0_0]; }, [i12.ɵangular_packages_common_http_http_h]), i0.ɵmpd(4608, i12.XhrFactory, i8.ɵangular_packages_platform_server_platform_server_e, []), i0.ɵmpd(4608, i12.HttpXhrBackend, i12.HttpXhrBackend, [i12.XhrFactory]), i0.ɵmpd(6144, i12.HttpBackend, null, [i12.HttpXhrBackend]), i0.ɵmpd(5120, i12.HttpHandler, i8.ɵangular_packages_platform_server_platform_server_h, [i12.HttpBackend, i0.Injector]), i0.ɵmpd(4608, i12.HttpClient, i12.HttpClient, [i12.HttpHandler]), i0.ɵmpd(4608, i12.ɵangular_packages_common_http_http_d, i12.ɵangular_packages_common_http_http_d, []), i0.ɵmpd(4608, i13.SeoService, i13.SeoService, [i7.Meta, i7.Title]), i0.ɵmpd(4608, i14.BrowserXhr, i8.ɵangular_packages_platform_server_platform_server_e, []), i0.ɵmpd(4608, i14.ResponseOptions, i14.BaseResponseOptions, []), i0.ɵmpd(4608, i14.XSRFStrategy, i8.ɵangular_packages_platform_server_platform_server_f, []), i0.ɵmpd(4608, i14.XHRBackend, i14.XHRBackend, [i14.BrowserXhr, i14.ResponseOptions, i14.XSRFStrategy]), i0.ɵmpd(4608, i14.RequestOptions, i14.BaseRequestOptions, []), i0.ɵmpd(5120, i14.Http, i8.ɵangular_packages_platform_server_platform_server_g, [i14.XHRBackend, i14.RequestOptions]), i0.ɵmpd(4608, i15.AnimationBuilder, i10.ɵBrowserAnimationBuilder, [i0.RendererFactory2, i7.DOCUMENT]), i0.ɵmpd(1073742336, i6.CommonModule, i6.CommonModule, []), i0.ɵmpd(1024, i0.ErrorHandler, i7.ɵangular_packages_platform_browser_platform_browser_a, []), i0.ɵmpd(1024, i0.NgProbeToken, function () { return [i11.ɵangular_packages_router_router_b()]; }, []), i0.ɵmpd(512, i11.ɵangular_packages_router_router_h, i11.ɵangular_packages_router_router_h, [i0.Injector]), i0.ɵmpd(256, i0.APP_ID, "seo", []), i0.ɵmpd(2048, i7.ɵTRANSITION_ID, null, [i0.APP_ID]), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p1_0, p2_0, p2_1, p2_2) { return [i7.ɵangular_packages_platform_browser_platform_browser_j(p0_0), i11.ɵangular_packages_router_router_i(p1_0), i7.ɵangular_packages_platform_browser_platform_browser_h(p2_0, p2_1, p2_2)]; }, [[2, i0.NgProbeToken], i11.ɵangular_packages_router_router_h, i7.ɵTRANSITION_ID, i6.DOCUMENT, i0.Injector]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ApplicationRef, i0.ApplicationRef, [i0.NgZone, i0.ɵConsole, i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver, i0.ApplicationInitStatus]), i0.ɵmpd(1073742336, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]), i0.ɵmpd(1073742336, i7.BrowserModule, i7.BrowserModule, [[3, i7.BrowserModule]]), i0.ɵmpd(1024, i11.ɵangular_packages_router_router_a, i11.ɵangular_packages_router_router_e, [[3, i11.Router]]), i0.ɵmpd(512, i11.UrlSerializer, i11.DefaultUrlSerializer, []), i0.ɵmpd(512, i11.ChildrenOutletContexts, i11.ChildrenOutletContexts, []), i0.ɵmpd(256, i11.ROUTER_CONFIGURATION, {}, []), i0.ɵmpd(1024, i6.LocationStrategy, i11.ɵangular_packages_router_router_d, [i6.PlatformLocation, [2, i6.APP_BASE_HREF], i11.ROUTER_CONFIGURATION]), i0.ɵmpd(512, i6.Location, i6.Location, [i6.LocationStrategy]), i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i0.NgModuleFactoryLoader, i16.ModuleMapNgFactoryLoader, [i0.Compiler, i16.MODULE_MAP]), i0.ɵmpd(1024, i11.ROUTES, function () { return [[{ path: "seo", component: i17.AddSeoComponent, data: i18.ɵ0 }]]; }, []), i0.ɵmpd(1024, i11.Router, i11.ɵangular_packages_router_router_f, [i0.ApplicationRef, i11.UrlSerializer, i11.ChildrenOutletContexts, i6.Location, i0.Injector, i0.NgModuleFactoryLoader, i0.Compiler, i11.ROUTES, i11.ROUTER_CONFIGURATION, [2, i11.UrlHandlingStrategy], [2, i11.RouteReuseStrategy]]), i0.ɵmpd(1073742336, i11.RouterModule, i11.RouterModule, [[2, i11.ɵangular_packages_router_router_a], [2, i11.Router]]), i0.ɵmpd(1073742336, i18.AppRoutingModule, i18.AppRoutingModule, []), i0.ɵmpd(1073742336, i12.HttpClientXsrfModule, i12.HttpClientXsrfModule, []), i0.ɵmpd(1073742336, i12.HttpClientModule, i12.HttpClientModule, []), i0.ɵmpd(1073742336, i19.AppModule, i19.AppModule, [i0.PLATFORM_ID, i0.APP_ID]), i0.ɵmpd(1073742336, i14.HttpModule, i14.HttpModule, []), i0.ɵmpd(1073742336, i10.NoopAnimationsModule, i10.NoopAnimationsModule, []), i0.ɵmpd(1073742336, i8.ServerModule, i8.ServerModule, []), i0.ɵmpd(1073742336, i16.ModuleMapLoaderModule, i16.ModuleMapLoaderModule, []), i0.ɵmpd(1073742336, i1.AppServerModule, i1.AppServerModule, []), i0.ɵmpd(256, i0.ɵAPP_ROOT, true, []), i0.ɵmpd(256, i12.ɵangular_packages_common_http_http_e, "XSRF-TOKEN", []), i0.ɵmpd(256, i12.ɵangular_packages_common_http_http_f, "X-XSRF-TOKEN", []), i0.ɵmpd(256, i10.ANIMATION_MODULE_TYPE, "NoopAnimations", [])]); });
exports.AppServerModuleNgFactory = AppServerModuleNgFactory;


/***/ }),

/***/ "./src/app/app.server.module.ts":
/*!**************************************!*\
  !*** ./src/app/app.server.module.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AppServerModule = /** @class */ (function () {
    function AppServerModule() {
    }
    return AppServerModule;
}());
exports.AppServerModule = AppServerModule;


/***/ }),

/***/ "./src/app/seo/add-seo/add-seo.component.css.shim.ngstyle.js":
/*!*******************************************************************!*\
  !*** ./src/app/seo/add-seo/add-seo.component.css.shim.ngstyle.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nlby9hZGQtc2VvL2FkZC1zZW8uY29tcG9uZW50LmNzcyJ9 */"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/seo/add-seo/add-seo.component.ngfactory.js":
/*!************************************************************!*\
  !*** ./src/app/seo/add-seo/add-seo.component.ngfactory.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./add-seo.component.css.shim.ngstyle */ "./src/app/seo/add-seo/add-seo.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ./add-seo.component */ "./src/app/seo/add-seo/add-seo.component.ts");
var i3 = __webpack_require__(/*! ../seo.service */ "./src/app/seo/seo.service.ts");
var styles_AddSeoComponent = [i0.styles];
var RenderType_AddSeoComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_AddSeoComponent, data: {} });
exports.RenderType_AddSeoComponent = RenderType_AddSeoComponent;
function View_AddSeoComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" add-seo works!\n"]))], null, null); }
exports.View_AddSeoComponent_0 = View_AddSeoComponent_0;
function View_AddSeoComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-add-seo", [], null, null, null, View_AddSeoComponent_0, RenderType_AddSeoComponent)), i1.ɵdid(1, 114688, null, 0, i2.AddSeoComponent, [i3.SeoService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_AddSeoComponent_Host_0 = View_AddSeoComponent_Host_0;
var AddSeoComponentNgFactory = i1.ɵccf("app-add-seo", i2.AddSeoComponent, View_AddSeoComponent_Host_0, {}, {}, []);
exports.AddSeoComponentNgFactory = AddSeoComponentNgFactory;


/***/ }),

/***/ "./src/app/seo/add-seo/add-seo.component.ts":
/*!**************************************************!*\
  !*** ./src/app/seo/add-seo/add-seo.component.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var seo_service_1 = __webpack_require__(/*! ./../seo.service */ "./src/app/seo/seo.service.ts");
var AddSeoComponent = /** @class */ (function () {
    function AddSeoComponent(seoService) {
        this.seoService = seoService;
        this.seoService.metaTagDescription();
    }
    AddSeoComponent.prototype.ngOnInit = function () {
    };
    return AddSeoComponent;
}());
exports.AddSeoComponent = AddSeoComponent;


/***/ }),

/***/ "./src/app/seo/seo.service.ts":
/*!************************************!*\
  !*** ./src/app/seo/seo.service.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var SeoService = /** @class */ (function () {
    function SeoService(meta, title) {
        this.meta = meta;
        this.title = title;
    }
    SeoService.prototype.metaTagDescription = function () {
        this.title.setTitle('seopage');
        this.meta.addTags([
            { name: 'description', content: 'seller Platform' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'robots', content: 'INDEX, FOLLOW' },
            { name: 'author', content: 'ABCD' },
            { name: 'keywords', content: 'welcome, Test' },
            { name: 'date', content: '2018-06-02', scheme: 'YYYY-MM-DD' },
            { httpEquiv: 'Content-Type', content: 'text/html' },
            { property: 'og:title', content: 'My Text' },
            { property: 'og:type', content: 'website' },
            { charset: 'UTF-8' }
        ]);
    };
    SeoService.ngInjectableDef = i0.defineInjectable({ factory: function SeoService_Factory() { return new SeoService(i0.inject(i1.Meta), i0.inject(i1.Title)); }, token: SeoService, providedIn: "root" });
    return SeoService;
}());
exports.SeoService = SeoService;


/***/ }),

/***/ "./src/main.server.ts":
/*!****************************!*\
  !*** ./src/main.server.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var app_server_module_ngfactory_1 = __webpack_require__(/*! ./app/app.server.module.ngfactory */ "./src/app/app.server.module.ngfactory.js");
exports.AppServerModuleNgFactory = app_server_module_ngfactory_1.AppServerModuleNgFactory;
var app_server_module_1 = __webpack_require__(/*! ./app/app.server.module */ "./src/app/app.server.module.ts");
exports.AppServerModule = app_server_module_1.AppServerModule;
exports.LAZY_MODULE_MAP = {};


/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./src/main.server.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! H:\1. rintegerProject\Saif2019\saif-buyer\src\main.server.ts */"./src/main.server.ts");


/***/ }),

/***/ "@angular/animations":
/*!**************************************!*\
  !*** external "@angular/animations" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations");

/***/ }),

/***/ "@angular/animations/browser":
/*!**********************************************!*\
  !*** external "@angular/animations/browser" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations/browser");

/***/ }),

/***/ "@angular/common":
/*!**********************************!*\
  !*** external "@angular/common" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),

/***/ "@angular/common/http":
/*!***************************************!*\
  !*** external "@angular/common/http" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common/http");

/***/ }),

/***/ "@angular/core":
/*!********************************!*\
  !*** external "@angular/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "@angular/http":
/*!********************************!*\
  !*** external "@angular/http" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/http");

/***/ }),

/***/ "@angular/platform-browser":
/*!********************************************!*\
  !*** external "@angular/platform-browser" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser");

/***/ }),

/***/ "@angular/platform-browser/animations":
/*!*******************************************************!*\
  !*** external "@angular/platform-browser/animations" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser/animations");

/***/ }),

/***/ "@angular/platform-server":
/*!*******************************************!*\
  !*** external "@angular/platform-server" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-server");

/***/ }),

/***/ "@angular/router":
/*!**********************************!*\
  !*** external "@angular/router" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/router");

/***/ }),

/***/ "@nguniversal/module-map-ngfactory-loader":
/*!***********************************************************!*\
  !*** external "@nguniversal/module-map-ngfactory-loader" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nguniversal/module-map-ngfactory-loader");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map
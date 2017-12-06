webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"utf-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\r\n  <meta name=\"description\" content=\"I-Talent portfolio\">\r\n  <meta name=\"author\" content=\"Wouter Vanherck\">\r\n\r\n  <title>{{title}}</title>\r\n\r\n  <!-- Custom fonts -->\r\n  <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800'\r\n    rel='stylesheet' type='text/css'>\r\n  <link href='https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic,900,900italic'\r\n    rel='stylesheet' type='text/css'>\r\n\r\n</head>\r\n<body id=\"page-top\">\r\n\r\n  <!-- Navigation -->\r\n  <nav class=\"navbar navbar-expand-lg navbar-light fixed-top\" id=\"mainNav\">\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand js-scroll-trigger\" href=\"#page-top\">Naar boven</a>\r\n      <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\"\r\n        aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n        <ul class=\"navbar-nav ml-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link js-scroll-trigger\" href=\"#introduction\">Over mij</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link js-scroll-trigger\" href=\"#overview\">Overzicht</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link js-scroll-trigger\" href=\"#timeline\">Tijdlijn</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link js-scroll-trigger\" href=\"#portfolio\">Ervaringen</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link js-scroll-trigger\" href=\"#reflection\">Eindreflectie</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link js-scroll-trigger\" href=\"#contact\">Contact</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n\r\n  <!-- Header with picture -->\r\n  <app-header></app-header>\r\n\r\n  <!-- Header with introduction -->\r\n  <section class=\"bg-primary\" id=\"introduction\">\r\n    <app-introduction></app-introduction>\r\n  </section>\r\n\r\n  <!-- Overview -->\r\n  <section id=\"overview\">\r\n    <app-overview></app-overview>\r\n  </section>\r\n\r\n  <!-- Timeline -->\r\n  <section id=\"timeline\">\r\n    <app-timeline></app-timeline>\r\n  </section>\r\n\r\n  <!-- Portfolio Grid -->\r\n  <section class=\"bg-light\" id=\"portfolio\">\r\n    <app-grid></app-grid>\r\n  </section>\r\n\r\n  <!-- Reflection -->\r\n  <section class=\"bg-primary\" id=\"reflection\">\r\n    <app-reflection></app-reflection>\r\n  </section>\r\n\r\n  <!-- Contact -->\r\n  <section id=\"contact\">\r\n    <app-contact></app-contact>\r\n  </section>\r\n\r\n  <!-- Footer -->\r\n  <app-footer></app-footer>\r\n\r\n  <!-- Portfolio Modals -->\r\n  <!-- Modal 1 -->\r\n  <div class=\"portfolio-modal modal fade\" id=\"portfolioModal1\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"close-modal\" data-dismiss=\"modal\">\r\n          <div class=\"lr\">\r\n            <div class=\"rl\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"container\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-8 mx-auto\">\r\n              <div class=\"modal-body\">\r\n                <!-- Project Details -->\r\n                <h2>Studiereis Linz</h2>\r\n                <p class=\"item-intro text-muted\">Internationalisering</p>\r\n                <img class=\"img-fluid d-block mx-auto\" src=\"assets/img/LINZ.png\" alt=\"\">\r\n                <p>TODO</p>\r\n                <ul class=\"list-inline\">\r\n                  <li>15 - 19 Maart 2017</li>\r\n                </ul>\r\n                <button class=\"btn btn-primary\" data-dismiss=\"modal\" type=\"button\">\r\n                  <i class=\"fa fa-times\"></i>\r\n                  Sluit</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Modal 2 -->\r\n  <div class=\"portfolio-modal modal fade\" id=\"portfolioModal2\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"close-modal\" data-dismiss=\"modal\">\r\n          <div class=\"lr\">\r\n            <div class=\"rl\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"container\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-8 mx-auto\">\r\n              <div class=\"modal-body\">\r\n                <!-- Project Details -->\r\n                <h2>Project Name</h2>\r\n                <p class=\"item-intro text-muted\">Seminaries - Innovatie</p>\r\n                <img class=\"img-fluid d-block mx-auto\" src=\"assets/img/ANG.png\" alt=\"\">\r\n                <p>TODO</p>\r\n                <ul class=\"list-inline\">\r\n                  <li>Angular2 Basics: 24 Februari - 3 Maart 2017</li>\r\n                  <li>Angular2 @ PXL: 27 Juni 2017</li>\r\n                  <li>I-Talent Portfolio: 2015 - 2018</li>\r\n                </ul>\r\n                <button class=\"btn btn-primary\" data-dismiss=\"modal\" type=\"button\">\r\n                  <i class=\"fa fa-times\"></i>\r\n                  Sluit</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Modal 3 -->\r\n  <div class=\"portfolio-modal modal fade\" id=\"portfolioModal3\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"close-modal\" data-dismiss=\"modal\">\r\n          <div class=\"lr\">\r\n            <div class=\"rl\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"container\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-8 mx-auto\">\r\n              <div class=\"modal-body\">\r\n                <!-- Project Details -->\r\n                <h2>Vlaamse Programmeer wedstrijd</h2>\r\n                <p class=\"item-intro text-muted\">Innovatie</p>\r\n                <img class=\"img-fluid d-block mx-auto\" src=\"assets/img/VPW.png\" alt=\"\">\r\n                <p>TODO</p>\r\n                <ul class=\"list-inline\">\r\n                  <li>VPW I: 16 Februari 2016</li>\r\n                  <li>VPW II: 24 Februari 2016</li>\r\n                  <li>VPW: 3 Maart 2016</li>\r\n                </ul>\r\n                <button class=\"btn btn-primary\" data-dismiss=\"modal\" type=\"button\">\r\n                  <i class=\"fa fa-times\"></i>\r\n                  Sluit</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Modal 4 -->\r\n  <div class=\"portfolio-modal modal fade\" id=\"portfolioModal4\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"close-modal\" data-dismiss=\"modal\">\r\n          <div class=\"lr\">\r\n            <div class=\"rl\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"container\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-8 mx-auto\">\r\n              <div class=\"modal-body\">\r\n                <!-- Project Details -->\r\n                <h2>Projectweek</h2>\r\n                <p class=\"item-intro text-muted\">Innovatie</p>\r\n                <img class=\"img-fluid d-block mx-auto\" src=\"assets/img/PW.png\" alt=\"\">\r\n                <p>TODO</p>\r\n                <ul class=\"list-inline\">\r\n                  <li>15 - 18 Februari 2016</li>\r\n                </ul>\r\n                <button class=\"btn btn-primary\" data-dismiss=\"modal\" type=\"button\">\r\n                  <i class=\"fa fa-times\"></i>\r\n                  Sluit</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</body>\r\n</html>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'I-Talent Portfolio';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_introduction_introduction_component__ = __webpack_require__("../../../../../src/app/components/introduction/introduction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_overview_overview_component__ = __webpack_require__("../../../../../src/app/components/overview/overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_timeline_timeline_component__ = __webpack_require__("../../../../../src/app/components/timeline/timeline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_grid_grid_component__ = __webpack_require__("../../../../../src/app/components/grid/grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_reflection_reflection_component__ = __webpack_require__("../../../../../src/app/components/reflection/reflection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_contact_contact_component__ = __webpack_require__("../../../../../src/app/components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__app_routes__["b" /* appRoutingProviders */],
            __WEBPACK_IMPORTED_MODULE_4__components_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_introduction_introduction_component__["a" /* IntroductionComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_overview_overview_component__["a" /* OverviewComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_timeline_timeline_component__["a" /* TimelineComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_grid_grid_component__["a" /* GridComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_reflection_reflection_component__["a" /* ReflectionComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_footer_footer_component__["a" /* FooterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routes__["a" /* AppRoutingModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return appRoutingProviders; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

var appRoutingProviders = [];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Contact -->\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-4 ml-auto text-center\">\n      <i class=\"fa fa-phone fa-3x sr-contact\"></i>\n      <p>\n        <a href=\"tel:+32494355838\">+32 494 35 58 38</a>\n      </p>\n    </div>\n    <div class=\"col-lg-4 mr-auto text-center\">\n      <i class=\"fa fa-envelope-o fa-3x sr-contact\"></i>\n      <p>\n        <a href=\"mailto:ikkew100@hotmail.com\">ikkew100@hotmail.com</a>\n      </p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/components/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/contact/contact.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\n<footer>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <p class=\"copyright\">Copyright &copy; Wouter Vanherck 2017</p>\n      </div>\n      <div class=\"col-md-4\">\n        <a class=\"btn btn-primary btn-xl js-scroll-trigger\" href=\"#page-top\">Naar boven</a>\n      </div>\n      <div class=\"col-md-4\">\n        <ul class=\"list-inline social-buttons\">\n          <li class=\"list-inline-item\">\n            <a href=\"https://twitter.com/ikkew100\">\n              <i class=\"fa fa-twitter\"></i>\n            </a>\n          </li>\n          <li class=\"list-inline-item\">\n            <a href=\"https://www.facebook.com/wouter.vanherck.3\">\n              <i class=\"fa fa-facebook\"></i>\n            </a>\n          </li>\n          <li class=\"list-inline-item\">\n            <a href=\"https://www.linkedin.com/in/wouter-vanherck-339355110\">\n              <i class=\"fa fa-linkedin\"></i>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/grid/grid.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/grid/grid.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Portfolio Grid -->\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-12 text-center\">\n      <h2 class=\"section-heading\">Portfolio</h2>\n      <h3 class=\"section-subheading text-muted\">Beste ervaringen</h3>\n      <br>\n    </div>\n  </div>\n  <div class=\"row\">\n\n    <!-- Portfolio Item 1 -->\n    <div class=\"col-lg-3 col-md-6 col-sm-12 portfolio-item\">\n      <a class=\"portfolio-link\" data-toggle=\"modal\" href=\"#portfolioModal1\">\n        <div class=\"portfolio-hover\">\n          <div class=\"portfolio-hover-content\">\n            <i class=\"fa fa-plane fa-3x\"></i>\n          </div>\n        </div>\n        <img class=\"img-fluid\" src=\"assets/img/LINZ.png\" alt=\"\">\n      </a>\n      <div class=\"portfolio-caption\">\n        <h4>Studiereis Linz</h4>\n        <br>\n        <p class=\"text-muted\">Internationalisering</p>\n      </div>\n    </div>\n\n    <!-- Portfolio Item 2 -->\n    <div class=\"col-lg-3 col-md-6 col-sm-12 portfolio-item\">\n      <a class=\"portfolio-link\" data-toggle=\"modal\" href=\"#portfolioModal2\">\n        <div class=\"portfolio-hover\">\n          <div class=\"portfolio-hover-content\">\n            <i class=\"fa fa-mortar-board fa-3x\"></i>\n          </div>\n        </div>\n        <img class=\"img-fluid\" src=\"assets/img/ANG.png\" alt=\"\">\n      </a>\n      <div class=\"portfolio-caption\">\n        <h4>Angular</h4>\n        <br>\n        <p class=\"text-muted\">Seminaries - Innovatie</p>\n      </div>\n    </div>\n\n    <!-- Portfolio Item 3 -->\n    <div class=\"col-lg-3 col-md-6 col-sm-12 portfolio-item\">\n      <a class=\"portfolio-link\" data-toggle=\"modal\" href=\"#portfolioModal3\">\n        <div class=\"portfolio-hover\">\n          <div class=\"portfolio-hover-content\">\n            <i class=\"fa fa-lightbulb-o fa-3x\"></i>\n          </div>\n        </div>\n        <img class=\"img-fluid\" src=\"assets/img/VPW.png\" alt=\"\">\n      </a>\n      <div class=\"portfolio-caption\">\n        <h4>Vlaamse Programmeer wedstrijd</h4>\n        <br>\n        <p class=\"text-muted\">Innovatie</p>\n      </div>\n    </div>\n\n    <!-- Portfolio Item 4 -->\n    <div class=\"col-lg-3 col-md-6 col-sm-12 portfolio-item\">\n      <a class=\"portfolio-link\" data-toggle=\"modal\" href=\"#portfolioModal4\">\n        <div class=\"portfolio-hover\">\n          <div class=\"portfolio-hover-content\">\n            <i class=\"fa fa-lightbulb-o fa-3x\"></i>\n          </div>\n        </div>\n        <img class=\"img-fluid\" src=\"assets/img/PW.png\" alt=\"\">\n      </a>\n      <div class=\"portfolio-caption\">\n        <h4>Projectweek</h4>\n        <br>\n        <p class=\"text-muted\">Innovatie</p>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/grid/grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GridComponent = (function () {
    function GridComponent() {
    }
    GridComponent.prototype.ngOnInit = function () {
    };
    return GridComponent;
}());
GridComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-grid',
        template: __webpack_require__("../../../../../src/app/components/grid/grid.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/grid/grid.component.css")]
    }),
    __metadata("design:paramtypes", [])
], GridComponent);

//# sourceMappingURL=grid.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header with picture -->\n<header class=\"masthead\">\n  <div class=\"header-content\">\n    <div class=\"header-content-inner\">\n      <h1 id=\"homeHeading\">Wouter Vanherck</h1>\n      <hr>\n      <p>Applicatie ontwikkelaar\n        <br> Design & Animatie liefhebber\n        <br> Angular enthousiast</p>\n      <a class=\"btn btn-primary btn-xl js-scroll-trigger\" href=\"#presentation\">Ontdek meer!</a>\n    </div>\n  </div>\n</header>"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/introduction/introduction.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/introduction/introduction.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header with introduction -->\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-8 mx-auto text-center\">\n      <h2 class=\"section-heading text-white\">Over mij</h2>\n      <hr class=\"light\">\n      <p class=\"text-faded\">Hallo, ik ben Wouter. Ik studeer aan de Hogeschool PXL en zit in mijn laatste jaar Toegepaste Informatica. Hier\n        heb ik Application Development als mijn afstudeerrichting gekozen. Dit omdat ik het ontwerpen en bouwen van een\n        volledige applicatie leuk vindt en omdat ik hierbij het meeste in aanraking kom met Design en Animatie. Ik verkies\n        er dan ook voor om front-end te ontwikkelen.\n        <br>\n        <br> Daarnaast spendeer ik mijn tijd aan online games en het bewerken van beeldmateriaal. In de toekomst hoop ik\n        deze interesses te kunnen combineren om zo een job te vinden die ik graag uitvoer.</p>\n      <a class=\"btn btn-default btn-xl js-scroll-trigger\" href=\"#overview\">Naar mijn prestaties!</a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/introduction/introduction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroductionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntroductionComponent = (function () {
    function IntroductionComponent() {
    }
    IntroductionComponent.prototype.ngOnInit = function () {
    };
    return IntroductionComponent;
}());
IntroductionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-introduction',
        template: __webpack_require__("../../../../../src/app/components/introduction/introduction.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/introduction/introduction.component.css")]
    }),
    __metadata("design:paramtypes", [])
], IntroductionComponent);

//# sourceMappingURL=introduction.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/overview/overview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/overview/overview.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Overview -->\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-12 text-center\">\n      <h2 class=\"section-heading\">Overzicht prestaties</h2>\n      <hr class=\"primary\">\n    </div>\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-3 col-md-6 text-center\">\n      <div class=\"service-box\">\n        <i class=\"fa fa-4x fa-plane text-primary sr-icons\"></i>\n        <h3>Internationalisering</h3>\n        <p class=\"text-muted\">30 uur</p>\n      </div>\n    </div>\n    <div class=\"col-lg-3 col-md-6 text-center\">\n      <div class=\"service-box\">\n        <i class=\"fa fa-4x fa-mortar-board text-primary sr-icons\"></i>\n        <h3>Seminaries</h3>\n        <p class=\"text-muted\">40 uur</p>\n      </div>\n    </div>\n    <div class=\"col-lg-3 col-md-6 text-center\">\n      <div class=\"service-box\">\n        <i class=\"fa fa-4x fa-lightbulb-o text-primary sr-icons\"></i>\n        <h3>Innovatie</h3>\n        <p class=\"text-muted\">70 uur</p>\n      </div>\n    </div>\n    <div class=\"col-lg-3 col-md-6 text-center\">\n      <div class=\"service-box\">\n        <i class=\"fa fa-4x fa-child text-primary sr-icons\"></i>\n        <h3>Persoonlijke ontwikkeling</h3>\n        <p class=\"text-muted\">20 uur</p>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-md-12 col-lg-12 text-center\">\n      <div class=\"service-box\">\n        <i class=\"fa fa-4x fa-briefcase text-primary sr-icons\"></i>\n        <h3>Totaal</h3>\n        <p class=\"text-muted\">160 uur</p>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/overview/overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OverviewComponent = (function () {
    function OverviewComponent() {
    }
    OverviewComponent.prototype.ngOnInit = function () {
    };
    return OverviewComponent;
}());
OverviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-overview',
        template: __webpack_require__("../../../../../src/app/components/overview/overview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/overview/overview.component.css")]
    }),
    __metadata("design:paramtypes", [])
], OverviewComponent);

//# sourceMappingURL=overview.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/reflection/reflection.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/reflection/reflection.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Reflection -->\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-8 mx-auto text-center\">\n      <h2 class=\"section-heading text-white\">Eindreflectie</h2>\n      <hr class=\"light\">\n      <p class=\"text-faded\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's\n        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make\n        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,\n        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing\n        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions\n        of Lorem Ipsum.\n        \n        <br><br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been\n        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled\n        it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,\n        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing\n        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions\n        of Lorem Ipsum.</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/reflection/reflection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReflectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReflectionComponent = (function () {
    function ReflectionComponent() {
    }
    ReflectionComponent.prototype.ngOnInit = function () {
    };
    return ReflectionComponent;
}());
ReflectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-reflection',
        template: __webpack_require__("../../../../../src/app/components/reflection/reflection.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/reflection/reflection.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ReflectionComponent);

//# sourceMappingURL=reflection.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/timeline/timeline.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/timeline/timeline.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Timeline -->\n<div class=\"container\">\n  <!-- Internationalization -->\n  <div class=\"row\">\n    <div class=\"col-lg-12 text-center\">\n      <h1 class=\"section-heading\">Tijdlijn</h1>\n      <br>\n      <h2 class=\"section-subheading text-muted\">Internationalisering</h2>\n      <br>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <ul class=\"timeline\">\n        <li>\n          <div class=\"timeline-image\">\n            <img class=\"rounded-circle img-fluid\" src=\"assets/img/timeline/L200x200.png\" alt=\"\">\n          </div>\n          <div class=\"timeline-panel\">\n            <div class=\"timeline-heading\">\n              <h4>15 - 19 Maart 2017</h4>\n              <h4 class=\"subheading\">Studiereis Linz</h4>\n            </div>\n            <div class=\"timeline-body\">\n              <p class=\"text-muted\">De studiereis naar Linz\n                <br>\n                <b>Aantal uren: 30</b>\n              </p>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <!-- Seminars -->\n  <div class=\"row\">\n    <div class=\"col-lg-12 text-center\">\n      <br>\n      <h2 class=\"section-subheading text-muted\">Seminaries</h2>\n      <br>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <ul class=\"timeline\">\n        <li class=\"timeline-inverted\">\n          <div class=\"timeline-image\">\n            <img class=\"rounded-circle img-fluid\" src=\"assets/img/timeline/VPWA200x200.png\" alt=\"\">\n          </div>\n          <div class=\"timeline-panel\">\n            <div class=\"timeline-heading\">\n              <h4>16 Februari 2016</h4>\n              <h4 class=\"subheading\">Vlaamse Programmeer wedstrijd I</h4>\n            </div>\n            <div class=\"timeline-body\">\n              <p class=\"text-muted\">Seminarie over de introductie, systemen en patronen in verband met de Vlaamse Programmeer wedstrijd\n                <br>\n                <b>Aantal uren: 2</b>\n              </p>\n            </div>\n          </div>\n        </li>\n        <li>\n          <div class=\"timeline-image\">\n            <img class=\"rounded-circle img-fluid\" src=\"assets/img/timeline/VPWB200x200.png\" alt=\"\">\n          </div>\n          <div class=\"timeline-panel\">\n            <div class=\"timeline-heading\">\n              <h4>24 Februari 2016</h4>\n              <h4 class=\"subheading\">Vlaamse Programmeer wedstrijd II</h4>\n            </div>\n            <div class=\"timeline-body\">\n              <p class=\"text-muted\">Seminarie over de systemen, patronen en tips in verband met de Vlaamse Programmeer wedstrijd\n                <br>\n                <b>Aantal uren: 3</b>\n              </p>\n            </div>\n          </div>\n        </li>\n        <li class=\"timeline-inverted\">\n          <div class=\"timeline-image\">\n            <img class=\"rounded-circle img-fluid\" src=\"assets/img/timeline/logo/DP200x200.png\" alt=\"\">\n          </div>\n          <div class=\"timeline-panel\">\n            <div class=\"timeline-heading\">\n              <h4>2 Maart 2016</h4>\n              <h4 class=\"subheading\">Droneport: Manager @ Breakfast</h4>\n            </div>\n            <div class=\"timeline-body\">\n              <p class=\"text-muted\">Ontbijtseminarie over de mogelijkheden rondom drones\n                <br>\n                <b>Aantal uren: 2</b>\n              </p>\n            </div>\n          </div>\n        </li>\n        <li>\n          <div class=\"timeline-image\">\n            <img class=\"rounded-circle img-fluid\" src=\"assets/img/timeline/logo/BD200x200.png\" alt=\"\">\n          </div>\n          <div class=\"timeline-panel\">\n            <div class=\"timeline-heading\">\n              <h4>18 Mei 2016</h4>\n              <h4 class=\"subheading\">Big Data - IT @ Breakfast</h4>\n            </div>\n            <div class=\"timeline-body\">\n              <p class=\"text-muted\">Ontbijtseminarie dat Big Data behandeld\n                <br>\n                <b>Aantal uren: 2</b>\n              </p>\n            </div>\n          </div>\n        </li>\n        <li class=\"timeline-inverted\">\n          <div class=\"timeline-image\">\n            <img class=\"rounded-circle img-fluid\" src=\"assets/img/timeline/logo/RD200x200.png\" alt=\"\">\n          </div>\n          <div class=\"timeline-panel\">\n            <div class=\"timeline-heading\">\n              <h4>28 September 2016</h4>\n              <h4 class=\"subheading\">RealDolmen: Virtual Reality</h4>\n            </div>\n            <div class=\"timeline-body\">\n              <p class=\"text-muted\">Virtual reality seminarie. Hierbij werd een coding demo gegeven in Unity en een live demo met de Oculus\n                Rift\n                <br>\n                <b>Aantal uren: 2</b>\n              </p>\n            </div>\n          </div>\n        </li>\n        <li>\n          <div class=\"timeline-image\">\n            <img class=\"rounded-circle img-fluid\" src=\"assets/img/timeline/logo/RP200x200.png\" alt=\"\">\n          </div>\n          <div class=\"timeline-panel\">\n            <div class=\"timeline-heading\">\n              <h4>12 Januari 2017</h4>\n              <h4 class=\"subheading\">Reactive Programming</h4>\n            </div>\n            <div class=\"timeline-body\">\n              <p class=\"text-muted\">Seminarie waarin reactive programming werd behandeld en er dieper ingegaan werd op RxMarbles\n                <br>\n                <b>Aantal uren: 3</b>\n              </p>\n            </div>\n          </div>\n        </li>\n        <li class=\"timeline-inverted\">\n          <div class=\"timeline-image\">\n            <img class=\"rounded-circle img-fluid\" src=\"assets/img/timeline/ANG200x200.png\" alt=\"\">\n          </div>\n          <div class=\"timeline-panel\">\n            <div class=\"timeline-heading\">\n              <h4>27 Juni 2017</h4>\n              <h4 class=\"subheading\">Angular2 @ PXL</h4>\n            </div>\n            <div class=\"timeline-body\">\n              <p class=\"text-muted\">Angular seminarie waarin er kennis gemaakt werd met Angular en er dieper werd ingedoken op Routing en Observables\n                <br>\n                <b>Aantal uren: 3</b>\n              </p>\n            </div>\n          </div>\n        </li>\n        <li>\n          <div class=\"timeline-image\">\n            <img class=\"rounded-circle img-fluid\" src=\"assets/img/timeline/PEC200x200.png\" alt=\"\">\n          </div>\n          <div class=\"timeline-panel\">\n            <div class=\"timeline-heading\">\n              <h4>6 Juni 2017</h4>\n              <h4 class=\"subheading\">Young Professional Day @ PEC (Leuven)</h4>\n            </div>\n            <div class=\"timeline-body\">\n              <p class=\"text-muted\">Presentatie van het bedrijf met rondleiding\n                <br>\n                <b>Aantal uren: 3</b>\n              </p>\n            </div>\n          </div>\n        </li>\n        <li class=\"timeline-inverted\">\n          <div class=\"timeline-image\">\n            <img class=\"rounded-circle img-fluid\" src=\"assets/img/timeline/logo/IC200x200.png\" alt=\"\">\n          </div>\n          <div class=\"timeline-panel\">\n            <div class=\"timeline-heading\">\n              <h4>27 September 2017</h4>\n              <h4 class=\"subheading\">ICapps: Chatbots & Blockchains</h4>\n            </div>\n            <div class=\"timeline-body\">\n              <p class=\"text-muted\">Seminarie over meertalige chatbots en blockchains\n                <br>\n                <b>Aantal uren: 2</b>\n              </p>\n            </div>\n          </div>\n        </li>\n        <li>\n          <div class=\"timeline-image\">\n            <img class=\"rounded-circle img-fluid\" src=\"assets/img/timeline/logo/AF200x200.png\" alt=\"\">\n          </div>\n          <div class=\"timeline-panel\">\n            <div class=\"timeline-heading\">\n              <h4>4 Oktober 2017</h4>\n              <h4 class=\"subheading\">AppFoundry: Android in practice</h4>\n            </div>\n            <div class=\"timeline-body\">\n              <p class=\"text-muted\">Seminarie dat Android Tools en Libraries behandeld\n                <br>\n                <b>Aantal uren: 3</b>\n              </p>\n            </div>\n          </div>\n        </li>\n        <li class=\"timeline-inverted\">\n          <div class=\"timeline-image\">\n            <img class=\"rounded-circle img-fluid\" src=\"assets/img/timeline/logo/YG200x200.png\" alt=\"\">\n          </div>\n          <div class=\"timeline-panel\">\n            <div class=\"timeline-heading\">\n              <h4>25 Oktober 2017</h4>\n              <h4 class=\"subheading\">YellowGround: Product Data for Marketplaces</h4>\n            </div>\n            <div class=\"timeline-body\">\n              <p class=\"text-muted\">Seminarie over data management, worfklows, ... voor marketplaces\n                <br>\n                <b>Aantal uren: 2</b>\n              </p>\n            </div>\n          </div>\n        </li>\n        <li>\n          <div class=\"timeline-image\">\n            <img class=\"rounded-circle img-fluid\" src=\"assets/img/timeline/logo/RD200x200.png\" alt=\"\">\n          </div>\n          <div class=\"timeline-panel\">\n            <div class=\"timeline-heading\">\n              <h4>8 November 2017</h4>\n              <h4 class=\"subheading\">RealDolmen: How to break (web) software</h4>\n            </div>\n            <div class=\"timeline-body\">\n              <p class=\"text-muted\">Seminarie over de OWASP Top 10 zoals Injection, XSS, ...\n                <br>\n                <b>Aantal uren: 3</b>\n              </p>\n            </div>\n          </div>\n        </li>\n        <li class=\"timeline-inverted\">\n          <div class=\"timeline-image\">\n            <img class=\"rounded-circle img-fluid\" src=\"assets/img/timeline/logo/3IT200x200.png\" alt=\"\">\n          </div>\n          <div class=\"timeline-panel\">\n            <div class=\"timeline-heading\">\n              <h4>29 November 2017</h4>\n              <h4 class=\"subheading\">3-IT: Social Engineering</h4>\n            </div>\n            <div class=\"timeline-body\">\n              <p class=\"text-muted\">Seminarie dat de gevaren van Social Engineering toelicht. Hierin is de menselijke factor erg belangrijk\n                voor de security.\n                <br>\n                <b>Aantal uren: 1</b>\n              </p>\n            </div>\n          </div>\n        </li>\n        <li>\n          <div class=\"timeline-image\">\n            <img class=\"rounded-circle img-fluid\" src=\"assets/img/timeline/logo/CG200x200.png\" alt=\"\">\n          </div>\n          <div class=\"timeline-panel\">\n            <div class=\"timeline-heading\">\n              <h4>6 December 2017</h4>\n              <h4 class=\"subheading\">Vectr.consulting: Big Data & Artificial Intelligence</h4>\n            </div>\n            <div class=\"timeline-body\">\n              <p class=\"text-muted\">Dieper ingaan op een typische Big Data technologie en specifieke onderwerpen zoals Artificial Intelligence\n                bekijken.\n                <br>\n                <b>Aantal uren: 3</b>\n              </p>\n            </div>\n          </div>\n        </li>\n        <li class=\"timeline-inverted\">\n          <div class=\"timeline-image\">\n            <img class=\"rounded-circle img-fluid\" src=\"assets/img/timeline/logo/D200x200.png\" alt=\"\">\n          </div>\n          <div class=\"timeline-panel\">\n            <div class=\"timeline-heading\">\n              <h4>13 December 2017</h4>\n              <h4 class=\"subheading\">Delaware: UX & User eXperience design</h4>\n            </div>\n            <div class=\"timeline-body\">\n              <p class=\"text-muted\">Seminarie over het ontwerpen van digitale producten.\n                <br>\n                <b>Aantal uren: 3</b>\n              </p>\n            </div>\n          </div>\n        </li>\n        <li>\n          <div class=\"timeline-image\">\n            <img class=\"rounded-circle img-fluid\" src=\"assets/img/timeline/logo/PXL200x200.png\" alt=\"\">\n          </div>\n          <div class=\"timeline-panel\">\n            <div class=\"timeline-heading\">\n              <h4>18 December 2017</h4>\n              <h4 class=\"subheading\">PXL Smart ICT</h4>\n            </div>\n            <div class=\"timeline-body\">\n              <p class=\"text-muted\">Introductie tot PXL Robotics Lab, AI, Machine Learning en Deeplearning (Convolutional Neural Nets, Recurrent\n                Neural Nets)\n                <br>\n                <b>Aantal uren: 2</b>\n              </p>\n            </div>\n          </div>\n        </li>\n        <li class=\"timeline-inverted\">\n          <div class=\"timeline-image\">\n            <img class=\"rounded-circle img-fluid\" src=\"assets/img/timeline/logo/CG200x200.png\" alt=\"\">\n          </div>\n          <div class=\"timeline-panel\">\n            <div class=\"timeline-heading\">\n              <h4>20 December 2017</h4>\n              <h4 class=\"subheading\">Contribute: Chatbots</h4>\n            </div>\n            <div class=\"timeline-body\">\n              <p class=\"text-muted\">Het bouwen van; en de voordelen die een chatbot brengt.\n                <br>\n                <b>Aantal uren: 3</b>\n              </p>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <!-- Innovation -->\n  <div class=\"row\">\n    <div class=\"col-lg-12 text-center\">\n      <br>\n      <h2 class=\"section-subheading text-muted\">Innovatie</h2>\n      <br>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <ul class=\"timeline\">\n        <li>\n          <div class=\"timeline-image\">\n            <img class=\"rounded-circle img-fluid\" src=\"assets/img/timeline/CD1200x200.png\" alt=\"\">\n          </div>\n          <div class=\"timeline-panel\">\n            <div class=\"timeline-heading\">\n              <h4>14 November 2015</h4>\n              <h4 class=\"subheading\">CoderDojo @ PXL</h4>\n            </div>\n            <div class=\"timeline-body\">\n              <p class=\"text-muted\">Jongeren leren omgaan met HTML5, CSS, Scratch, ...\n                <br>\n                <b>Aantal uren: 4</b>\n              </p>\n            </div>\n          </div>\n        </li>\n        <li class=\"timeline-inverted\">\n          <div class=\"timeline-image\">\n            <img class=\"rounded-circle img-fluid\" src=\"assets/img/timeline/CD2200x200.png\" alt=\"\">\n          </div>\n          <div class=\"timeline-panel\">\n            <div class=\"timeline-heading\">\n              <h4>12 December 2015</h4>\n              <h4 class=\"subheading\">CoderDojo @ UHasselt</h4>\n            </div>\n            <div class=\"timeline-body\">\n              <p class=\"text-muted\">Jongeren leren omgaan met HTML5, CSS, Scratch, ...\n                <br>\n                <b>Aantal uren: 4</b>\n              </p>\n            </div>\n          </div>\n        </li>\n        <li>\n          <div class=\"timeline-image\">\n            <img class=\"rounded-circle img-fluid\" src=\"assets/img/timeline/PW200x200.png\" alt=\"\">\n          </div>\n          <div class=\"timeline-panel\">\n            <div class=\"timeline-heading\">\n              <h4>15 - 18 Februari 2016</h4>\n              <h4 class=\"subheading\">Projectweek 2TIN</h4>\n            </div>\n            <div class=\"timeline-body\">\n              <p class=\"text-muted\">De projectweek van '15-'16 voor 2TIN\n                <br>\n                <b>Aantal uren: 28</b>\n              </p>\n            </div>\n          </div>\n        </li>\n        <li class=\"timeline-inverted\">\n          <div class=\"timeline-image\">\n            <img class=\"rounded-circle img-fluid\" src=\"assets/img/timeline/PB200x200.png\" alt=\"\">\n          </div>\n          <div class=\"timeline-panel\">\n            <div class=\"timeline-heading\">\n              <h4>25 Februari 2016</h4>\n              <h4 class=\"subheading\">Projectenbeurs</h4>\n            </div>\n            <div class=\"timeline-body\">\n              <p class=\"text-muted\">Event rondom de laatstejaarsprojecten\n                <br>\n                <b>Aantal uren: 2</b>\n              </p>\n            </div>\n          </div>\n        </li>\n        <li>\n          <div class=\"timeline-image\">\n            <img class=\"rounded-circle img-fluid\" src=\"assets/img/timeline/VPW200x200.png\" alt=\"\">\n          </div>\n          <div class=\"timeline-panel\">\n            <div class=\"timeline-heading\">\n              <h4>3 Maart 2016</h4>\n              <h4 class=\"subheading\">Vlaamse Programmeer wedstrijd</h4>\n            </div>\n            <div class=\"timeline-body\">\n              <p class=\"text-muted\">Deelname aan de Vlaamse Programmeer wedstrijd\n                <br>\n                <b>Aantal uren: 6</b>\n              </p>\n            </div>\n          </div>\n        </li>\n        <li class=\"timeline-inverted\">\n          <div class=\"timeline-image\">\n            <img class=\"rounded-circle img-fluid\" src=\"assets/img/timeline/logo/SQL200x200.png\" alt=\"\">\n          </div>\n          <div class=\"timeline-panel\">\n            <div class=\"timeline-heading\">\n              <h4>9 Maart 2016</h4>\n              <h4 class=\"subheading\">Tutoring: SQL Essentials</h4>\n            </div>\n            <div class=\"timeline-body\">\n              <p class=\"text-muted\">In het kader van levenslang leren heb ik de kans gekregen anderen te helpen met moeilijke vakken. Ik verleende\n                hiervoor hulp voor het vak SQL Essentials aan Sammy Moors\n                <br>\n                <b>Aantal uren: 8</b>\n              </p>\n            </div>\n          </div>\n        </li>\n        <li>\n          <div class=\"timeline-image\">\n            <img class=\"rounded-circle img-fluid\" src=\"assets/img/timeline/logo/A200x200.png\" alt=\"\">\n          </div>\n          <div class=\"timeline-panel\">\n            <div class=\"timeline-heading\">\n              <h4>24 Februari - 3 Maart 2017</h4>\n              <h4 class=\"subheading\">Angular2 Basics</h4>\n            </div>\n            <div class=\"timeline-body\">\n              <p class=\"text-muted\">Tijdens de krokusvakantie heb ik mijzelf Angular2 aangeleerd. Dit heb ik gedaan aan de hand van een\n                <a href=\"https://angular.io/tutorial\">quick-start tutorial</a>\n                en een\n                <a href=\"https://www.pluralsight.com/courses/angular-2-getting-started-update\">course op Pluralsight</a>\n                <br>\n                <b>Aantal uren: 18</b>\n              </p>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <!-- Personal Development -->\n  <div class=\"row\">\n    <div class=\"col-lg-12 text-center\">\n      <br>\n      <h2 class=\"section-subheading text-muted\">Persoonlijke ontwikkeling</h2>\n      <br>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <ul class=\"timeline\">\n        <li class=\"timeline-inverted\">\n          <div class=\"timeline-image\">\n            <img class=\"rounded-circle img-fluid\" src=\"assets/img/timeline/logo/PXL200x200.png\" alt=\"\">\n          </div>\n          <div class=\"timeline-panel\">\n            <div class=\"timeline-heading\">\n              <h4>2015 - 2018</h4>\n              <h4 class=\"subheading\">I-Talent Portfolio</h4>\n            </div>\n            <div class=\"timeline-body\">\n              <p class=\"text-muted\">In het kader van I-Talent heb ik ervoor gekozen om mijn portfolio als website voor te stellen. Ik maak\n                hiervoor gebruik van Angular en ik host op GitHub. Het resultaat van deze inspanning is deze webpagina\n                <br>\n                <b>Aantal uren: 20</b>\n              </p>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/timeline/timeline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimelineComponent = (function () {
    function TimelineComponent() {
    }
    TimelineComponent.prototype.ngOnInit = function () {
    };
    return TimelineComponent;
}());
TimelineComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-timeline',
        template: __webpack_require__("../../../../../src/app/components/timeline/timeline.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/timeline/timeline.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TimelineComponent);

//# sourceMappingURL=timeline.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
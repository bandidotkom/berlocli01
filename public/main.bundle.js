webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/activities/activities.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/activities/activities.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"height: 390px;width:80%\">\n  <div class=\"col-md-2\">\n  </div>\n  <div class=\"col-md-10\">\n    <h3>Morning activities</h3>\n    <ngx-charts-pie-chart\n      [view]=\"view\"\n      [scheme]=\"colorScheme\"\n      [results]=\"wmActivities\"\n      [legend]=\"showLegend\"\n      [explodeSlices]=\"explodeSlices\"\n      [labels]=\"showLabels\"\n      [doughnut]=\"doughnut\"\n      [gradient]=\"gradient\"\n      (select)=\"onSelect($event)\">\n    </ngx-charts-pie-chart>\n\n    <h3>Afternoon activities</h3>\n    <ngx-charts-pie-chart\n      [view]=\"view\"\n      [scheme]=\"colorScheme\"\n      [results]=\"waActivities\"\n      [legend]=\"showLegend\"\n      [explodeSlices]=\"explodeSlices\"\n      [labels]=\"showLabels\"\n      [doughnut]=\"doughnut\"\n      [gradient]=\"gradient\"\n      (select)=\"onSelect($event)\">\n    </ngx-charts-pie-chart>\n\n    <h3>Leisure activities</h3>\n    <ngx-charts-pie-chart\n      [view]=\"view\"\n      [scheme]=\"colorScheme\"\n      [results]=\"weActivities\"\n      [legend]=\"showLegend\"\n      [explodeSlices]=\"explodeSlices\"\n      [labels]=\"showLabels\"\n      [doughnut]=\"doughnut\"\n      [gradient]=\"gradient\"\n      (select)=\"onSelect($event)\">\n    </ngx-charts-pie-chart>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/activities/activities.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActivitiesComponent = /** @class */ (function () {
    function ActivitiesComponent() {
        this.showLegend = false;
        this.colorScheme = {
            domain: ['#0F3899', '#6DA1D8', '#D2FDFF']
        };
        // pie options
        this.showLabels = true;
        this.explodeSlices = false;
        this.doughnut = false;
    }
    ActivitiesComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    ActivitiesComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ActivitiesComponent.prototype, "wmActivities", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ActivitiesComponent.prototype, "waActivities", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ActivitiesComponent.prototype, "weActivities", void 0);
    ActivitiesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-activities',
            template: __webpack_require__("./src/app/activities/activities.component.html"),
            styles: [__webpack_require__("./src/app/activities/activities.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ActivitiesComponent);
    return ActivitiesComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_compare_list_service__ = __webpack_require__("./src/app/services/compare-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_fact_service__ = __webpack_require__("./src/app/services/fact.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_activity_service__ = __webpack_require__("./src/app/services/activity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_image_service__ = __webpack_require__("./src/app/services/image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_geofact_service__ = __webpack_require__("./src/app/services/geofact.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_reputation_service__ = __webpack_require__("./src/app/services/reputation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_search_service__ = __webpack_require__("./src/app/services/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "BERLO";
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_compare_list_service__["a" /* CompareListService */], __WEBPACK_IMPORTED_MODULE_2__services_fact_service__["a" /* FactService */], __WEBPACK_IMPORTED_MODULE_3__services_activity_service__["a" /* ActivityService */], __WEBPACK_IMPORTED_MODULE_4__services_image_service__["a" /* ImageService */], __WEBPACK_IMPORTED_MODULE_5__services_geofact_service__["a" /* GeofactService */], __WEBPACK_IMPORTED_MODULE_6__services_reputation_service__["a" /* ReputationService */], __WEBPACK_IMPORTED_MODULE_7__services_search_service__["a" /* SearchService */]]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asymmetrik_ngx_leaflet__ = __webpack_require__("./node_modules/@asymmetrik/ngx-leaflet/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_charts__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__map_map_component__ = __webpack_require__("./src/app/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__welcome_welcome_component__ = __webpack_require__("./src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__explore_explore_component__ = __webpack_require__("./src/app/explore/explore.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__search_search_component__ = __webpack_require__("./src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__compare_compare_component__ = __webpack_require__("./src/app/compare/compare.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__images_images_component__ = __webpack_require__("./src/app/images/images.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__facts_facts_component__ = __webpack_require__("./src/app/facts/facts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__activities_activities_component__ = __webpack_require__("./src/app/activities/activities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__reputation_reputation_component__ = __webpack_require__("./src/app/reputation/reputation.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__map_map_component__["a" /* MapComponent */],
                __WEBPACK_IMPORTED_MODULE_7__welcome_welcome_component__["a" /* WelcomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__explore_explore_component__["a" /* ExploreComponent */],
                __WEBPACK_IMPORTED_MODULE_9__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_11__compare_compare_component__["a" /* CompareComponent */],
                __WEBPACK_IMPORTED_MODULE_13__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_14__images_images_component__["a" /* ImagesComponent */],
                __WEBPACK_IMPORTED_MODULE_15__facts_facts_component__["a" /* FactsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__activities_activities_component__["a" /* ActivitiesComponent */],
                __WEBPACK_IMPORTED_MODULE_17__reputation_reputation_component__["a" /* ReputationComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__asymmetrik_ngx_leaflet__["a" /* LeafletModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_charts__["NgxChartsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__welcome_welcome_component__ = __webpack_require__("./src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__explore_explore_component__ = __webpack_require__("./src/app/explore/explore.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search_component__ = __webpack_require__("./src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__compare_compare_component__ = __webpack_require__("./src/app/compare/compare.component.ts");





var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__welcome_welcome_component__["a" /* WelcomeComponent */]
    },
    {
        path: 'explore',
        component: __WEBPACK_IMPORTED_MODULE_2__explore_explore_component__["a" /* ExploreComponent */]
    },
    {
        path: 'search',
        component: __WEBPACK_IMPORTED_MODULE_3__search_search_component__["a" /* SearchComponent */]
    },
    {
        path: 'compare',
        component: __WEBPACK_IMPORTED_MODULE_4__compare_compare_component__["a" /* CompareComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/compare/compare.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/compare/compare.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n<div class=\"row\" style=\"height: 390px;width:80%\">\n  <div *ngFor=\"let c of cList\" class=\"col-md-4\">\n    <h2>{{c}}</h2>\n    <p>area: {{geoData[c].area}}</p>\n    <p>population: {{geoData[c].population}}</p>\n    <p>density: {{geoData[c].density}}</p>\n    <h3>Gender</h3>\n    <h5>{{c}}</h5>\n    <ngx-charts-pie-chart\n      [view]=\"view\"\n      [scheme]=\"colorScheme\"\n      [results]=\"genderData[c]\"\n      [legend]=\"showLegend\"\n      [explodeSlices]=\"explodeSlices\"\n      [labels]=\"showLabels\"\n      [doughnut]=\"doughnut\"\n      [gradient]=\"gradient\"\n      (select)=\"onSelect($event)\">\n    </ngx-charts-pie-chart>\n    <hr/>\n    <h3>Nationality</h3>\n    <h5>{{c}}</h5>\n    <ngx-charts-pie-chart\n      [view]=\"view\"\n      [scheme]=\"colorScheme\"\n      [results]=\"nationalityData[c]\"\n      [legend]=\"showLegend\"\n      [explodeSlices]=\"explodeSlices\"\n      [labels]=\"showLabels\"\n      [doughnut]=\"doughnut\"\n      [gradient]=\"gradient\"\n      (select)=\"onSelect($event)\">\n    </ngx-charts-pie-chart>\n    <hr/>\n    <h3>Age</h3>\n    <h5>{{c}}</h5>\n    <ngx-charts-bar-vertical\n      [view]=\"view\"\n      [scheme]=\"colorScheme\"\n      [results]=\"ageData[c]\"\n      [gradient]=\"gradient\"\n      [xAxis]=\"showXAxis\"\n      [yAxis]=\"showYAxis\"\n      [legend]=\"showLegend\"\n      [showXAxisLabel]=\"showXAxisLabel\"\n      [showYAxisLabel]=\"showYAxisLabel\"\n      [xAxisLabel]=\"xAxisLabel\"\n      [yAxisLabel]=\"yAxisLabel\"\n      (select)=\"onSelect($event)\">\n    </ngx-charts-bar-vertical>\n    <hr/>\n    <h3>Morning activities</h3>\n    <h5>{{c}}</h5>\n    <ngx-charts-pie-chart\n      [view]=\"view\"\n      [scheme]=\"colorScheme\"\n      [results]=\"wmActivities[c]\"\n      [legend]=\"showLegend\"\n      [explodeSlices]=\"explodeSlices\"\n      [labels]=\"showLabels\"\n      [doughnut]=\"doughnut\"\n      [gradient]=\"gradient\"\n      (select)=\"onSelect($event)\">\n    </ngx-charts-pie-chart>\n    <hr/>\n    <h3>Afternoon activities</h3>\n    <h5>{{c}}</h5>\n    <ngx-charts-pie-chart\n      [view]=\"view\"\n      [scheme]=\"colorScheme\"\n      [results]=\"waActivities[c]\"\n      [legend]=\"showLegend\"\n      [explodeSlices]=\"explodeSlices\"\n      [labels]=\"showLabels\"\n      [doughnut]=\"doughnut\"\n      [gradient]=\"gradient\"\n      (select)=\"onSelect($event)\">\n    </ngx-charts-pie-chart>\n    <hr/>\n    <h3>Leisure activities</h3>\n    <h5>{{c}}</h5>\n    <ngx-charts-pie-chart\n      [view]=\"view\"\n      [scheme]=\"colorScheme\"\n      [results]=\"weActivities[c]\"\n      [legend]=\"showLegend\"\n      [explodeSlices]=\"explodeSlices\"\n      [labels]=\"showLabels\"\n      [doughnut]=\"doughnut\"\n      [gradient]=\"gradient\"\n      (select)=\"onSelect($event)\">\n    </ngx-charts-pie-chart>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/compare/compare.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompareComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_fact_service__ = __webpack_require__("./src/app/services/fact.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_compare_list_service__ = __webpack_require__("./src/app/services/compare-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_geofact_service__ = __webpack_require__("./src/app/services/geofact.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_activity_service__ = __webpack_require__("./src/app/services/activity.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CompareComponent = /** @class */ (function () {
    function CompareComponent(compareListService, factService, geoService, activityService) {
        this.compareListService = compareListService;
        this.factService = factService;
        this.geoService = geoService;
        this.activityService = activityService;
        this.cList = [];
        this.genderData = {};
        this.nationalityData = {};
        this.ageData = {};
        this.geoData = {};
        this.wmActivities = {};
        this.waActivities = {};
        this.weActivities = {};
        this.showLegend = false;
        this.colorScheme = {
            domain: ['#0F3899', '#6DA1D8', '#D2FDFF']
        };
        // pie options
        this.showLabels = true;
        this.explodeSlices = false;
        this.doughnut = false;
        // bar chart options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Age';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Population';
    }
    CompareComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    CompareComponent.prototype.compare = function (a, b) {
        if (a.value > b.value)
            return -1;
        if (a.value < b.value)
            return 1;
        return 0;
    };
    CompareComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cList = this.compareListService.getList();
        var _loop_1 = function (loc) {
            this_1.factService.getPopulation(loc)
                .subscribe(function (population) {
                console.log(population);
                _this.genderData[loc] = population.gender;
                _this.nationalityData[loc] = population.nationality;
                _this.ageData[loc] = population.age;
            });
        };
        var this_1 = this;
        for (var _i = 0, _a = this.cList; _i < _a.length; _i++) {
            var loc = _a[_i];
            _loop_1(loc);
        }
        var _loop_2 = function (loc) {
            this_2.geoService.getFacts(loc)
                .subscribe(function (geodata) { _this.geoData[loc] = geodata; });
        };
        var this_2 = this;
        for (var _b = 0, _c = this.cList; _b < _c.length; _b++) {
            var loc = _c[_b];
            _loop_2(loc);
        }
        var _loop_3 = function (loc) {
            this_3.activityService.getActivities(loc)
                .subscribe(function (activities) {
                if (activities.wm.length > 7) {
                    _this.wmActivities[loc] = activities.wm.sort(_this.compare).slice(0, 7);
                }
                else {
                    _this.wmActivities[loc] = activities.wm;
                }
                if (activities.wa.length > 7) {
                    _this.waActivities[loc] = activities.wa.sort(_this.compare).slice(0, 7);
                }
                else {
                    _this.waActivities[loc] = activities.wa;
                }
                if (activities.we.length > 7) {
                    _this.weActivities[loc] = activities.we.sort(_this.compare).slice(0, 7);
                }
                else {
                    _this.weActivities[loc] = activities.we;
                }
            });
        };
        var this_3 = this;
        for (var _d = 0, _e = this.cList; _d < _e.length; _d++) {
            var loc = _e[_d];
            _loop_3(loc);
        }
    };
    CompareComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-compare',
            template: __webpack_require__("./src/app/compare/compare.component.html"),
            styles: [__webpack_require__("./src/app/compare/compare.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_compare_list_service__["a" /* CompareListService */],
            __WEBPACK_IMPORTED_MODULE_1__services_fact_service__["a" /* FactService */],
            __WEBPACK_IMPORTED_MODULE_3__services_geofact_service__["a" /* GeofactService */],
            __WEBPACK_IMPORTED_MODULE_4__services_activity_service__["a" /* ActivityService */]])
    ], CompareComponent);
    return CompareComponent;
}());



/***/ }),

/***/ "./src/app/explore/explore.component.css":
/***/ (function(module, exports) {

module.exports = "#exploremain {\r\n  height: 840px;\r\n}\r\n\r\nbutton{\r\n  width: 40%;\r\n  margin: 5%;\r\n  text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/explore/explore.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div id=\"exploremain\" class=\"row\">\n  <div class=\"col-md-4\">\n    <h4>Please select a locality by clicking the map.</h4>\n    <h2>Your selection: {{selected}}</h2>\n    <button *ngIf=\"isSelected()\" class=\"btn-outline-primary\"(click)=\"addToCompareList()\">add to compare list</button>\n    <br/>\n    <button *ngIf=\"isSelected()\" class=\"btn-outline-primary\"(click)=\"showFacts()\">show population</button>\n    <br/>\n    <button *ngIf=\"isSelected()\" class=\"btn-outline-primary\"(click)=\"showActivities()\">show activities</button>\n    <br/>\n    <button *ngIf=\"isSelected()\" class=\"btn-outline-primary\"(click)=\"showReputation()\">show reputation</button>\n    <br/>\n    <button *ngIf=\"isSelected()\" class=\"btn-outline-primary\"(click)=\"showImages()\">show images</button>\n    <br/>\n    <button *ngIf=\"getEmbeddedComponent()>1\" class=\"btn-outline-secondary\"(click)=\"backToMap()\">back to map</button>\n    <hr/>\n    <ul *ngIf=\"isSelected()\">\n      <li>area: {{area}} sq. km</li>\n      <li>fact: {{population}}</li>\n      <li>density: {{density}}</li>\n    </ul>\n  </div>\n  <div class=\"col-md-8\">\n    <app-map *ngIf=\"getEmbeddedComponent()==1\" (onSelected)=\"onSelected($event)\"></app-map>\n    <app-images *ngIf=\"getEmbeddedComponent()==2\" [urls]=\"urls\"></app-images>\n    <app-facts *ngIf=\"getEmbeddedComponent()==3\" [genderFacts]=\"genderFacts\" [natFacts]=\"natFacts\" [ageFacts]=\"ageFacts\"></app-facts>\n    <app-activities *ngIf=\"getEmbeddedComponent()==4\" [wmActivities]=\"wmActivities\" [waActivities]=\"waActivities\" [weActivities]=\"weActivities\"></app-activities>\n    <app-reputation *ngIf=\"getEmbeddedComponent()==5\" [reputation]=\"reputation\" [keywords]=\"keywords\"></app-reputation>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/explore/explore.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExploreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_compare_list_service__ = __webpack_require__("./src/app/services/compare-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_fact_service__ = __webpack_require__("./src/app/services/fact.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_activity_service__ = __webpack_require__("./src/app/services/activity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_image_service__ = __webpack_require__("./src/app/services/image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_geofact_service__ = __webpack_require__("./src/app/services/geofact.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_reputation_service__ = __webpack_require__("./src/app/services/reputation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ExploreComponent = /** @class */ (function () {
    function ExploreComponent(compareListService, factService, activityService, imageService, geoFactService, reputationService, route) {
        this.compareListService = compareListService;
        this.factService = factService;
        this.activityService = activityService;
        this.imageService = imageService;
        this.geoFactService = geoFactService;
        this.reputationService = reputationService;
        this.route = route;
    }
    ExploreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.embeddedComp = 1;
        this.route.params.subscribe(function (params) { return _this.selected = params['selected']; });
        if (this.selected) {
            this.showGeoFacts();
        }
    };
    ExploreComponent.prototype.addToCompareList = function () {
        this.compareListService.addToList(this.selected);
    };
    ExploreComponent.prototype.onSelected = function (locality) {
        this.selected = locality;
        this.showGeoFacts();
    };
    ExploreComponent.prototype.isSelected = function () {
        return this.selected != undefined;
    };
    ExploreComponent.prototype.showGeoFacts = function () {
        var _this = this;
        this.geoFactService.getFacts(this.selected)
            .subscribe(function (data) {
            _this.area = data.area;
            _this.population = data.population;
            _this.density = data.density;
        });
    };
    ExploreComponent.prototype.showImages = function () {
        var _this = this;
        this.embeddedComp = 2;
        this.imageService.getImages(this.selected)
            .subscribe(function (images) { _this.urls = images; });
    };
    ExploreComponent.prototype.showFacts = function () {
        var _this = this;
        this.embeddedComp = 3;
        this.factService.getPopulation(this.selected)
            .subscribe(function (facts) {
            _this.genderFacts = facts.gender;
            //console.log(this.genderFacts);
            _this.natFacts = facts.nationality;
            //console.log(this.natFacts);
            _this.ageFacts = facts.age;
            //console.log(this.ageFacts);
        });
    };
    ExploreComponent.prototype.compare = function (a, b) {
        if (a.value > b.value)
            return -1;
        if (a.value < b.value)
            return 1;
        return 0;
    };
    ExploreComponent.prototype.showActivities = function () {
        var _this = this;
        this.embeddedComp = 4;
        this.activityService.getActivities(this.selected)
            .subscribe(function (activities) {
            if (activities.wm.length > 12) {
                _this.wmActivities = activities.wm.sort(_this.compare).slice(0, 12);
            }
            else {
                _this.wmActivities = activities.wm;
            }
            if (activities.wa.length > 12) {
                _this.waActivities = activities.wa.sort(_this.compare).slice(0, 12);
            }
            else {
                _this.waActivities = activities.wa;
            }
            if (activities.we.length > 12) {
                _this.weActivities = activities.we.sort(_this.compare).slice(0, 12);
            }
            else {
                _this.weActivities = activities.we;
            }
        });
    };
    ExploreComponent.prototype.showReputation = function () {
        var _this = this;
        this.embeddedComp = 5;
        this.reputationService.getReputation(this.selected)
            .subscribe(function (reputation) {
            _this.reputation = reputation.summary;
            //console.log(this.reputation);
            _this.keywords = reputation.keywords;
            //console.log(this.keywords)
        });
    };
    ExploreComponent.prototype.getEmbeddedComponent = function () {
        return this.embeddedComp;
    };
    ExploreComponent.prototype.backToMap = function () {
        this.embeddedComp = 1;
    };
    ExploreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-explore',
            template: __webpack_require__("./src/app/explore/explore.component.html"),
            styles: [__webpack_require__("./src/app/explore/explore.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_compare_list_service__["a" /* CompareListService */],
            __WEBPACK_IMPORTED_MODULE_2__services_fact_service__["a" /* FactService */],
            __WEBPACK_IMPORTED_MODULE_3__services_activity_service__["a" /* ActivityService */],
            __WEBPACK_IMPORTED_MODULE_4__services_image_service__["a" /* ImageService */],
            __WEBPACK_IMPORTED_MODULE_5__services_geofact_service__["a" /* GeofactService */],
            __WEBPACK_IMPORTED_MODULE_6__services_reputation_service__["a" /* ReputationService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* ActivatedRoute */]])
    ], ExploreComponent);
    return ExploreComponent;
}());



/***/ }),

/***/ "./src/app/facts/facts.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/facts/facts.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\" style=\"height: 390px;width:80%\">\n  <div class=\"col-md-6\">\n    <h3>Gender</h3>\n  <ngx-charts-pie-chart\n    [view]=\"view\"\n    [scheme]=\"colorScheme\"\n    [results]=\"genderFacts\"\n    [legend]=\"showLegend\"\n    [explodeSlices]=\"explodeSlices\"\n    [labels]=\"showLabels\"\n    [doughnut]=\"doughnut\"\n    [gradient]=\"gradient\"\n    (select)=\"onSelect($event)\">\n  </ngx-charts-pie-chart>\n  </div>\n  <div class=\"col-md-6\">\n    <h3>Nationality</h3>\n  <ngx-charts-pie-chart\n    [view]=\"view\"\n    [scheme]=\"colorScheme\"\n    [results]=\"natFacts\"\n    [legend]=\"showLegend\"\n    [explodeSlices]=\"explodeSlices\"\n    [labels]=\"showLabels\"\n    [doughnut]=\"doughnut\"\n    [gradient]=\"gradient\"\n    (select)=\"onSelect($event)\">\n  </ngx-charts-pie-chart>\n  </div>\n</div>\n<div class=\"row\" style=\"height: 390px;\">\n  <div class=\"col-md-3\">\n    </div>\n  <div class=\"col-md-6\">\n    <h3>Age</h3>\n<ngx-charts-bar-vertical\n  [view]=\"view\"\n  [scheme]=\"colorScheme\"\n  [results]=\"ageFacts\"\n  [gradient]=\"gradient\"\n  [xAxis]=\"showXAxis\"\n  [yAxis]=\"showYAxis\"\n  [legend]=\"showLegend\"\n  [showXAxisLabel]=\"showXAxisLabel\"\n  [showYAxisLabel]=\"showYAxisLabel\"\n  [xAxisLabel]=\"xAxisLabel\"\n  [yAxisLabel]=\"yAxisLabel\"\n  (select)=\"onSelect($event)\">\n</ngx-charts-bar-vertical>\n</div>\n  <div class=\"col-md-3\">\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/facts/facts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FactsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FactsComponent = /** @class */ (function () {
    function FactsComponent() {
        this.showLegend = false;
        this.colorScheme = {
            domain: ['#0F3899', '#6DA1D8', '#D2FDFF']
        };
        // pie options
        this.showLabels = true;
        this.explodeSlices = false;
        this.doughnut = false;
        // bar chart options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Age';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Population';
    }
    FactsComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    FactsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FactsComponent.prototype, "genderFacts", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FactsComponent.prototype, "natFacts", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FactsComponent.prototype, "ageFacts", void 0);
    FactsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-facts',
            template: __webpack_require__("./src/app/facts/facts.component.html"),
            styles: [__webpack_require__("./src/app/facts/facts.component.css")]
        })
    ], FactsComponent);
    return FactsComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar .navbar-brand {\r\n  background-color: #464646;\r\n}\r\n\r\na.nav-link.active-link {\r\n  font-weight: bold;\r\n}\r\n\r\na.nav-link.disabled {\r\n  pointer-events: none;\r\n  cursor: default;\r\n  text-decoration:none;\r\n}\r\n\r\n#close {\r\n  float:right;\r\n  display:inline-block;\r\n  padding:2px 5px;\r\n  background:#ccc;\r\n}\r\n\r\n.fragment {\r\n  border: 1px solid #ccc;\r\n  color: #555;\r\n  display: inline-block;\r\n  padding: 10px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  text-decoration: none;\r\n}\r\n\r\n.fragment:hover {\r\n  -webkit-box-shadow: 2px 2px 5px rgba(0,0,0,.2);\r\n          box-shadow: 2px 2px 5px rgba(0,0,0,.2);\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"/\">BERLO</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/explore\" routerLinkActive=\"active-link\">Explore <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/search\" routerLinkActive=\"active-link\">Search</a>\n      </li>\n      <li class=\"nav-item\">\n        <a [ngClass]=\"isDisabled()\" routerLink=\"/compare\" routerLinkActive=\"active-link\">Compare</a>\n      </li>\n      <li class=\"nav-item\">\n        <span *ngFor=\"let loc of compareList\" class=\"fragment\" href=\"google.com\">{{ loc }} <a id=\"close\" (click)=\"delete($event)\"> x</a>\n        </span>\n      </li>\n\n    </ul>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_compare_list_service__ = __webpack_require__("./src/app/services/compare-list.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(compareListService) {
        this.compareListService = compareListService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.compareList = this.compareListService.getList();
    };
    HeaderComponent.prototype.delete = function (e) {
        var localty = e.target.parentElement.innerHTML.split('<')[0].trim();
        this.compareListService.deleteFromList(localty);
    };
    HeaderComponent.prototype.isDisabled = function () {
        if (this.compareList.length > 1) {
            return "nav-link";
        }
        else {
            return "nav-link disabled";
        }
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_compare_list_service__["a" /* CompareListService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/images/images.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/images/images.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Page Content -->\n<div class=\"container\">\n\n  <div class=\"row text-center text-lg-left\">\n\n    <div *ngFor=\"let url of urls\" class=\"col-lg-3 col-md-4 col-xs-6\">\n      <a href=\"#\" class=\"d-block mb-4 h-100\">\n        <img class=\"img-fluid img-thumbnail\" src=\"{{url}}\" alt=\"\">\n      </a>\n    </div>\n\n  </div>\n\n</div>\n<!-- /.container -->\n\n"

/***/ }),

/***/ "./src/app/images/images.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImagesComponent = /** @class */ (function () {
    function ImagesComponent() {
    }
    ImagesComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ImagesComponent.prototype, "urls", void 0);
    ImagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-images',
            template: __webpack_require__("./src/app/images/images.component.html"),
            styles: [__webpack_require__("./src/app/images/images.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ImagesComponent);
    return ImagesComponent;
}());



/***/ }),

/***/ "./src/app/map/map.component.css":
/***/ (function(module, exports) {

module.exports = ".map {\r\n  height: 100%;\r\n  padding: 0;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"map\"\n       leaflet\n       (leafletMapReady)=\"onMapReady($event)\"\n       [leafletLayers]=\"layers\"\n       [leafletOptions]=\"options\">\n  </div>\n\n\n\n"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet__ = __webpack_require__("./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_leaflet__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapComponent = /** @class */ (function () {
    function MapComponent(http) {
        this.http = http;
        this.onSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    MapComponent.prototype.ngOnInit = function () {
        var baseOSMLayer = __WEBPACK_IMPORTED_MODULE_2_leaflet__["tileLayer"]('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: 'Open Street Map'
        });
        this.layers = [baseOSMLayer];
        this.options = {
            zoom: 10,
            center: __WEBPACK_IMPORTED_MODULE_2_leaflet__["latLng"]([52.520008, 13.404954])
        };
    };
    MapComponent.prototype.onMapReady = function (map) {
        var _this = this;
        this.http.get('assets/data/ortsteile.geojson')
            .subscribe(function (geo) {
            var localtiesLayer = __WEBPACK_IMPORTED_MODULE_2_leaflet__["geoJSON"](geo, {
                style: function () { return ({
                    color: "#6B1212",
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 0.6,
                    fillColor: "#FF0000"
                }); },
                onEachFeature: function (feature, layer) {
                    var popup = __WEBPACK_IMPORTED_MODULE_2_leaflet__["popup"]().setContent(feature.properties.Name);
                    layer.bindPopup(popup);
                    layer.on({
                        mouseover: function (e) {
                            e.target.openPopup();
                        },
                        click: function (e) {
                            _this.selected = feature.properties.Name;
                            _this.onSelected.emit(_this.selected);
                            map.fitBounds(e.target.getBounds());
                            localtiesLayer.setStyle({ fillOpacity: 0.6 });
                            e.target.setStyle({ fillOpacity: 0.2 });
                            e.target.closePopup();
                        }
                    });
                }
            }); // get localties layer
            _this.layers[1] = localtiesLayer;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], MapComponent.prototype, "onSelected", void 0);
    MapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-map',
            template: __webpack_require__("./src/app/map/map.component.html"),
            styles: [__webpack_require__("./src/app/map/map.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/reputation/reputation.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reputation/reputation.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Description</h3>\n<p>\n  {{reputation}}\n</p>\n<h3>Keywords</h3>\n<ul>\n  <li *ngFor=\"let k of keywords\">{{k}}</li>\n</ul>\n"

/***/ }),

/***/ "./src/app/reputation/reputation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReputationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReputationComponent = /** @class */ (function () {
    function ReputationComponent() {
    }
    ReputationComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ReputationComponent.prototype, "reputation", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ReputationComponent.prototype, "keywords", void 0);
    ReputationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reputation',
            template: __webpack_require__("./src/app/reputation/reputation.component.html"),
            styles: [__webpack_require__("./src/app/reputation/reputation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReputationComponent);
    return ReputationComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/***/ (function(module, exports) {

module.exports = ".col-centered{\r\n  margin: 0 auto;\r\n  float: none;\r\n  text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"row\">\n\n  <div class=\"col-md-4 col-centered\">\n    <h3>What are your preferences?</h3>\n    <h1>You can type as many words as you wish</h1>\n    <div class=\"input-group\">\n      <input #preferences type=\"text\" class=\"form-control\" placeholder=\"e.g. villas, expensive, Bauhaus\" />\n      <span class=\"input-group-btn\">\n                <button class=\"btn-primary\"(click)=\"showResults(preferences.value)\">go</button>\n            </span>\n    </div><!-- /input-group -->\n    <ol>\n      <li *ngFor=\"let res of resultList\">{{res._source.name}}\n        <button class=\"btn-outline-primary\"(click)=\"addToCompareList(res._source.name)\">add to compare list</button>\n        <a class=\"nav-link\" [routerLink]=\"['/explore', {selected: res._source.name}]\"  routerLinkActive=\"active-link\">explore</a></li>\n    </ol>\n  </div><!-- /.col-lg-4 -->\n</div><!-- /.row -->\n\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_search_service__ = __webpack_require__("./src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_compare_list_service__ = __webpack_require__("./src/app/services/compare-list.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = /** @class */ (function () {
    function SearchComponent(searchService, compareListService) {
        this.searchService = searchService;
        this.compareListService = compareListService;
    }
    SearchComponent.prototype.showResults = function (preferences) {
        var _this = this;
        this.searchService.getSearchresults(preferences.replace(/,/g, ''))
            .subscribe(function (results) {
            _this.resultList = results;
            //console.log(this.reputation);
        });
    };
    SearchComponent.prototype.addToCompareList = function (locality) {
        this.compareListService.addToList(locality);
    };
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search',
            template: __webpack_require__("./src/app/search/search.component.html"),
            styles: [__webpack_require__("./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */],
            __WEBPACK_IMPORTED_MODULE_2__services_compare_list_service__["a" /* CompareListService */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/services/activity.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ActivityService = /** @class */ (function () {
    function ActivityService(http) {
        this.http = http;
    }
    ActivityService.prototype.getActivities = function (selected) {
        return this.http.get('http://localhost:3000/activities/' + selected)
            .map(function (data) {
            var result = {
                wm: [],
                wa: [],
                we: []
            };
            var proresultCat = [];
            var proresultCheckin = [];
            for (var _i = 0, _a = data.obj; _i < _a.length; _i++) {
                var d = _a[_i];
                if (proresultCat.indexOf(d.category) > -1) {
                    proresultCheckin[proresultCat.indexOf(d.category)].concat(d.checkins);
                }
                else {
                    proresultCat.push(d.category);
                    proresultCheckin.push(d.checkins);
                }
            }
            for (var i = 0; i < proresultCat.length; i++) {
                var wmVal = 0;
                var waVal = 0;
                var weVal = 0;
                for (var j = 0; j < proresultCheckin[i].length; j++) {
                    if (proresultCheckin[i][j] == "WM") {
                        wmVal += 1;
                    }
                    else if (proresultCheckin[i][j] == "WA") {
                        waVal += 1;
                    }
                    else {
                        weVal += 1;
                    }
                }
                if (wmVal > 0) {
                    result.wm.push({ name: proresultCat[i], value: wmVal });
                }
                else if (waVal > 0) {
                    result.wa.push({ name: proresultCat[i], value: waVal });
                }
                else if (weVal > 0) {
                    result.we.push({ name: proresultCat[i], value: weVal });
                }
            }
            return result;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error.json()); });
    };
    ActivityService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ActivityService);
    return ActivityService;
}());



/***/ }),

/***/ "./src/app/services/compare-list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompareListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompareListService = /** @class */ (function () {
    function CompareListService() {
        this.compareList = [];
    }
    CompareListService.prototype.getList = function () {
        return this.compareList;
    };
    CompareListService.prototype.addToList = function (localty) {
        var i = this.compareList.length;
        if (localty == undefined) {
            alert("Please select a locality first.");
        }
        else if (this.compareList.includes(localty)) {
            alert(localty + " was already added.");
        }
        else if (i >= 3) {
            alert("You can compare only 3 localities at maximum.");
        }
        else {
            this.compareList[i] = localty;
        }
    };
    CompareListService.prototype.deleteFromList = function (localty) {
        var index = this.compareList.indexOf(localty, 0);
        if (index > -1) {
            this.compareList.splice(index, 1);
        }
    };
    CompareListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CompareListService);
    return CompareListService;
}());



/***/ }),

/***/ "./src/app/services/fact.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FactService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FactService = /** @class */ (function () {
    function FactService(http) {
        this.http = http;
    }
    FactService.prototype.getPopulation = function (selected) {
        return this.http.get('http://localhost:3000/fact/' + selected)
            .map(function (population) {
            var rows = population.obj;
            var results = {
                gender: [
                    { name: 'male', value: 0 },
                    { name: 'female', value: 0 }
                ],
                nationality: [
                    { name: 'German', value: 0 },
                    { name: 'Foreigner', value: 0 }
                ],
                age: [
                    { name: '0-5', value: 0 },
                    { name: '5-10', value: 0 },
                    { name: '10-15', value: 0 },
                    { name: '15-20', value: 0 },
                    { name: '20-25', value: 0 },
                    { name: '25-30', value: 0 },
                    { name: '30-35', value: 0 },
                    { name: '35-40', value: 0 },
                    { name: '40-45', value: 0 },
                    { name: '45-50', value: 0 },
                    { name: '50-55', value: 0 },
                    { name: '55-60', value: 0 },
                    { name: '60-65', value: 0 },
                    { name: '65-70', value: 0 },
                    { name: '70-75', value: 0 },
                    { name: '75-80', value: 0 },
                    { name: '80-85', value: 0 },
                    { name: '85-90', value: 0 },
                    { name: '90-95', value: 0 },
                    { name: '95-', value: 0 },
                ]
            };
            for (var _i = 0, rows_1 = rows; _i < rows_1.length; _i++) {
                var row = rows_1[_i];
                if (row.Geschl == 1) {
                    results.gender[0].value += row.H;
                }
                else {
                    results.gender[1].value += row.H;
                }
                if (row.Staatsangeh == "D") {
                    results.nationality[0].value += row.H;
                }
                else {
                    results.nationality[1].value += row.H;
                }
                if (row.Altersgr == "00_05") {
                    results.age[0].value += row.H;
                }
                else if (row.Altersgr == "05_10") {
                    results.age[1].value += row.H;
                }
                else if (row.Altersgr == "10_15") {
                    results.age[2].value += row.H;
                }
                else if (row.Altersgr == "15_20") {
                    results.age[3].value += row.H;
                }
                else if (row.Altersgr == "20_25") {
                    results.age[4].value += row.H;
                }
                else if (row.Altersgr == "25_30") {
                    results.age[5].value += row.H;
                }
                else if (row.Altersgr == "30_35") {
                    results.age[6].value += row.H;
                }
                else if (row.Altersgr == "35_40") {
                    results.age[7].value += row.H;
                }
                else if (row.Altersgr == "40_45") {
                    results.age[8].value += row.H;
                }
                else if (row.Altersgr == "45_50") {
                    results.age[9].value += row.H;
                }
                else if (row.Altersgr == "50_55") {
                    results.age[10].value += row.H;
                }
                else if (row.Altersgr == "55_60") {
                    results.age[11].value += row.H;
                }
                else if (row.Altersgr == "60_65") {
                    results.age[12].value += row.H;
                }
                else if (row.Altersgr == "65_70") {
                    results.age[13].value += row.H;
                }
                else if (row.Altersgr == "70_75") {
                    results.age[14].value += row.H;
                }
                else if (row.Altersgr == "75_80") {
                    results.age[15].value += row.H;
                }
                else if (row.Altersgr == "80_85") {
                    results.age[16].value += row.H;
                }
                else if (row.Altersgr == "85_90") {
                    results.age[17].value += row.H;
                }
                else if (row.Altersgr == "90_95") {
                    results.age[18].value += row.H;
                }
                else if (row.Altersgr == "95_") {
                    results.age[19].value += row.H;
                }
            }
            ;
            //console.log(results);
            return results;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error.json()); });
    };
    FactService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], FactService);
    return FactService;
}());



/***/ }),

/***/ "./src/app/services/geofact.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeofactService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GeofactService = /** @class */ (function () {
    function GeofactService(http) {
        this.http = http;
    }
    GeofactService.prototype.getFacts = function (selected) {
        return this.http.get('http://localhost:3000/geofact/' + selected)
            .map(function (data) {
            return data.obj;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json()); });
    };
    GeofactService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], GeofactService);
    return GeofactService;
}());



/***/ }),

/***/ "./src/app/services/image.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImageService = /** @class */ (function () {
    function ImageService(http) {
        this.http = http;
    }
    ImageService.prototype.getImages = function (selected) {
        return this.http.get('http://localhost:3000/images/' + selected)
            .map(function (data) {
            var urls = [];
            for (var _i = 0, _a = data.obj; _i < _a.length; _i++) {
                var d = _a[_i];
                urls.push("https://farm" + d.farm + ".staticflickr.com/" + d.server + "/" + d.id + "_" + d.secret + ".jpg");
            }
            return urls;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error.json()); });
    };
    ImageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ImageService);
    return ImageService;
}());



/***/ }),

/***/ "./src/app/services/reputation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReputationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReputationService = /** @class */ (function () {
    function ReputationService(http) {
        this.http = http;
    }
    ReputationService.prototype.getReputation = function (selected) {
        return this.http.get('http://localhost:3000/reputation/' + selected)
            .map(function (data) {
            return data.obj;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json()); });
    };
    ReputationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ReputationService);
    return ReputationService;
}());



/***/ }),

/***/ "./src/app/services/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchService = /** @class */ (function () {
    function SearchService(http) {
        this.http = http;
    }
    SearchService.prototype.getSearchresults = function (preferences) {
        return this.http.get('http://localhost:3000/search/' + preferences)
            .map(function (data) {
            return data.obj;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json()); });
    };
    SearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1 class=\"display-4\">Welcome to BERLO!</h1>\n  <p class=\"lead\">This is a system for profiling the 96 localities of Berlin.</p>\n  <hr class=\"my-4\">\n  <p>You can simply explore facts, activities, and photos related to the localities or search for the best locality based on your own preferences.</p>\n  <p class=\"lead\">\n    <a routerLink=\"explore\" class=\"button\">Go to explore</a>\n    <a routerLink=\"search\" class=\"button\">Go to search</a>\n  </p>\n</div>\n\n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__("./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__("./src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
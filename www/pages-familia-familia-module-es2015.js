(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-familia-familia-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/familia/familia.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/familia/familia.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title text-center>{{title}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button slot=\"icon-only\" routerLink=\"/nueva-oferta\">\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <app-productos [productos]=\"productos\"></app-productos>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/familia/familia-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/familia/familia-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: FamiliaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamiliaPageRoutingModule", function() { return FamiliaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _familia_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./familia.page */ "./src/app/pages/familia/familia.page.ts");




const routes = [
    {
        path: '',
        component: _familia_page__WEBPACK_IMPORTED_MODULE_3__["FamiliaPage"]
    }
];
let FamiliaPageRoutingModule = class FamiliaPageRoutingModule {
};
FamiliaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FamiliaPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/familia/familia.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/familia/familia.module.ts ***!
  \*************************************************/
/*! exports provided: FamiliaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamiliaPageModule", function() { return FamiliaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _familia_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./familia-routing.module */ "./src/app/pages/familia/familia-routing.module.ts");
/* harmony import */ var _familia_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./familia.page */ "./src/app/pages/familia/familia.page.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/component.module */ "./src/app/components/component.module.ts");








let FamiliaPageModule = class FamiliaPageModule {
};
FamiliaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _familia_routing_module__WEBPACK_IMPORTED_MODULE_5__["FamiliaPageRoutingModule"],
            _components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"]
        ],
        declarations: [_familia_page__WEBPACK_IMPORTED_MODULE_6__["FamiliaPage"]]
    })
], FamiliaPageModule);



/***/ }),

/***/ "./src/app/pages/familia/familia.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/familia/familia.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon-toolbar {\n  --icon-font-size: 5px ;\n}\n\n.row-card {\n  height: 60%;\n  border-bottom: 1px solid red;\n}\n\n.h1-card {\n  margin: 0px;\n}\n\n.h3-card {\n  margin: 0px;\n}\n\n.img-oferta {\n  height: 120%;\n  width: 120%;\n}\n\n.card {\n  margin-bottom: 1%;\n  margin-top: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYW5vL0NhemFuZG9PZmVydGFzL2NvX2FwcC9zcmMvYXBwL3BhZ2VzL2ZhbWlsaWEvZmFtaWxpYS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2ZhbWlsaWEvZmFtaWxpYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLDRCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mYW1pbGlhL2ZhbWlsaWEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24tdG9vbGJhcntcbiAgLS1pY29uLWZvbnQtc2l6ZTogNXB4XG59XG5cbi5yb3ctY2FyZHtcbiAgaGVpZ2h0OiA2MCU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZWQ7XG59XG5cbi5oMS1jYXJke1xuICBtYXJnaW46IDBweDtcbn1cblxuLmgzLWNhcmR7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uaW1nLW9mZXJ0YXtcbiAgaGVpZ2h0OiAxMjAlO1xuICB3aWR0aDogMTIwJTtcbn1cblxuLmNhcmR7XG4gIG1hcmdpbi1ib3R0b206IDElO1xuICBtYXJnaW4tdG9wOiAxJTtcbn1cbiIsIi5pY29uLXRvb2xiYXIge1xuICAtLWljb24tZm9udC1zaXplOiA1cHggO1xufVxuXG4ucm93LWNhcmQge1xuICBoZWlnaHQ6IDYwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDtcbn1cblxuLmgxLWNhcmQge1xuICBtYXJnaW46IDBweDtcbn1cblxuLmgzLWNhcmQge1xuICBtYXJnaW46IDBweDtcbn1cblxuLmltZy1vZmVydGEge1xuICBoZWlnaHQ6IDEyMCU7XG4gIHdpZHRoOiAxMjAlO1xufVxuXG4uY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDElO1xuICBtYXJnaW4tdG9wOiAxJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/familia/familia.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/familia/familia.page.ts ***!
  \***********************************************/
/*! exports provided: FamiliaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamiliaPage", function() { return FamiliaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/nav.service */ "./src/app/services/nav.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");




let FamiliaPage = class FamiliaPage {
    constructor(nav, dataService) {
        this.nav = nav;
        this.dataService = dataService;
    }
    ngOnInit() {
        this.cargarProductos();
        this.title = this.nav.get();
    }
    cargarProductos() {
        this.dataService.getProductos().subscribe(data => {
            console.log(data);
            this.productos = data;
        });
    }
};
FamiliaPage.ctorParameters = () => [
    { type: _services_nav_service__WEBPACK_IMPORTED_MODULE_2__["Nav"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
];
FamiliaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-familia',
        template: __webpack_require__(/*! raw-loader!./familia.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/familia/familia.page.html"),
        styles: [__webpack_require__(/*! ./familia.page.scss */ "./src/app/pages/familia/familia.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_nav_service__WEBPACK_IMPORTED_MODULE_2__["Nav"], _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
], FamiliaPage);



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let DataService = class DataService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getHomeOptions() {
        return this.httpClient.get('../assets/data/homeOptions.json');
    }
    getProductos() {
        return this.httpClient.get('../assets/data/ofertasMock.json');
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], DataService);



/***/ })

}]);
//# sourceMappingURL=pages-familia-familia-module-es2015.js.map
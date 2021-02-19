(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-familia-familia-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/familia/familia.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/familia/familia.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title text-center>{{opcion.nombre}}</ion-title>\n\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"more\"></ion-icon>\n    </ion-fab-button>\n\n    <ion-fab-list side=\"top\">\n      <ion-fab-button (click)=\"nuevaOferta()\">\n        <ion-icon color=\"primary\" name=\"add\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button>\n        <ion-icon color=\"primary\" name=\"search\"></ion-icon>\n      </ion-fab-button>\n\n    </ion-fab-list>\n\n  </ion-fab>\n\n  <app-productos [productos]=\"productos\"></app-productos>\n\n</ion-content>\n"

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

module.exports = ".icon-toolbar {\n  --icon-font-size: 5px ;\n}\n\n.row-card {\n  height: 60%;\n  border-bottom: 1px solid red;\n}\n\n.h1-card {\n  margin: 0px;\n}\n\n.h3-card {\n  margin: 0px;\n}\n\n.img-oferta {\n  height: 120%;\n  width: 120%;\n}\n\n.card {\n  margin-bottom: 1%;\n  margin-top: 1%;\n}\n\nion-fab {\n  margin-bottom: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYW5vL0NhemFuZG9PZmVydGFzL2NvX2FwcC9zcmMvYXBwL3BhZ2VzL2ZhbWlsaWEvZmFtaWxpYS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2ZhbWlsaWEvZmFtaWxpYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLDRCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZmFtaWxpYS9mYW1pbGlhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uLXRvb2xiYXJ7XG4gIC0taWNvbi1mb250LXNpemU6IDVweFxufVxuXG4ucm93LWNhcmR7XG4gIGhlaWdodDogNjAlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmVkO1xufVxuXG4uaDEtY2FyZHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5oMy1jYXJke1xuICBtYXJnaW46IDBweDtcbn1cblxuLmltZy1vZmVydGF7XG4gIGhlaWdodDogMTIwJTtcbiAgd2lkdGg6IDEyMCU7XG59XG5cbi5jYXJke1xuICBtYXJnaW4tYm90dG9tOiAxJTtcbiAgbWFyZ2luLXRvcDogMSU7XG59XG5cbmlvbi1mYWJ7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xufVxuIiwiLmljb24tdG9vbGJhciB7XG4gIC0taWNvbi1mb250LXNpemU6IDVweCA7XG59XG5cbi5yb3ctY2FyZCB7XG4gIGhlaWdodDogNjAlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmVkO1xufVxuXG4uaDEtY2FyZCB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uaDMtY2FyZCB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uaW1nLW9mZXJ0YSB7XG4gIGhlaWdodDogMTIwJTtcbiAgd2lkdGg6IDEyMCU7XG59XG5cbi5jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMSU7XG4gIG1hcmdpbi10b3A6IDElO1xufVxuXG5pb24tZmFiIHtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG59Il19 */"

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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.opcion = this.nav.get();
            console.log(this.opcion);
            yield this.cargarProductos();
        });
    }
    cargarProductos() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.dataService.getOfertas(this.opcion.id).then(res => {
                console.log(res);
                this.productos = res;
            });
        });
    }
    nuevaOferta() {
        this.nav.push('/nueva-oferta', this.opcion);
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



/***/ })

}]);
//# sourceMappingURL=pages-familia-familia-module-es2015.js.map
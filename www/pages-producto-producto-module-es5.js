(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-producto-producto-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/producto/producto.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/producto/producto.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button>\n      </ion-back-button>\n    </ion-buttons>\n\n    <ion-title>{{producto.categoria}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-item class=\"item-img\">\n    <ion-img [src]=\"producto.foto\"></ion-img>\n  </ion-item>\n  <p class=\"p-fecha-publicacion\">Publicado el {{producto.fecha_pub}}</p>\n\n  <ion-item>\n    <ion-label class=\"ion-text-wrap\">\n      <ion-text color=\"primary\">\n        <h1>{{producto.nombre}} - {{producto.marca}}</h1>\n      </ion-text>\n      <h1 class=\"margin-10\">$ {{producto.precio}} </h1>\n      <h2 style=\"margin-top: 5%\">Valido Hasta: {{producto.validez}}</h2>\n    </ion-label>\n  </ion-item>\n\n\n  <ion-item class=\"margin-10\">\n    <ion-label>\n      {{producto.establecimiento}}\n    </ion-label>\n    <ion-icon name=\"compass\" slot=\"end\"></ion-icon>\n  </ion-item>\n\n\n  <ion-item class=\"margin-10\">\n    <ion-label class=\"ion-text-wrap\">\n{{producto.descripcion}}\n    </ion-label>\n  </ion-item>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/producto/producto-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/producto/producto-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ProductoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoPageRoutingModule", function() { return ProductoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _producto_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./producto.page */ "./src/app/pages/producto/producto.page.ts");




var routes = [
    {
        path: '',
        component: _producto_page__WEBPACK_IMPORTED_MODULE_3__["ProductoPage"]
    }
];
var ProductoPageRoutingModule = /** @class */ (function () {
    function ProductoPageRoutingModule() {
    }
    ProductoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ProductoPageRoutingModule);
    return ProductoPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/producto/producto.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/producto/producto.module.ts ***!
  \***************************************************/
/*! exports provided: ProductoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoPageModule", function() { return ProductoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _producto_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./producto-routing.module */ "./src/app/pages/producto/producto-routing.module.ts");
/* harmony import */ var _producto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./producto.page */ "./src/app/pages/producto/producto.page.ts");







var ProductoPageModule = /** @class */ (function () {
    function ProductoPageModule() {
    }
    ProductoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _producto_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductoPageRoutingModule"]
            ],
            declarations: [_producto_page__WEBPACK_IMPORTED_MODULE_6__["ProductoPage"]]
        })
    ], ProductoPageModule);
    return ProductoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/producto/producto.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/producto/producto.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.item-img {\n  border-color: #989aa2;\n  border: solid 1px;\n}\n\n.p-fecha-publicacion {\n  color: #989aa2;\n  font-size: small;\n}\n\n.margin-10 {\n  margin-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYW5vL0NhemFuZG9PZmVydGFzL2NvX2FwcC9zcmMvYXBwL3BhZ2VzL3Byb2R1Y3RvL3Byb2R1Y3RvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZHVjdG8vcHJvZHVjdG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0FDRUY7O0FEQ0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNFRjs7QURDQTtFQUNFLGVBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3RvL3Byb2R1Y3RvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuLml0ZW0taW1ne1xuICBib3JkZXItY29sb3I6ICM5ODlhYTI7XG4gIGJvcmRlcjogc29saWQgMXB4O1xufVxuXG4ucC1mZWNoYS1wdWJsaWNhY2lvbntcbiAgY29sb3I6ICM5ODlhYTI7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG5cbi5tYXJnaW4tMTB7XG4gIG1hcmdpbi10b3A6IDEwJTtcbn1cbiIsImltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxuLml0ZW0taW1nIHtcbiAgYm9yZGVyLWNvbG9yOiAjOTg5YWEyO1xuICBib3JkZXI6IHNvbGlkIDFweDtcbn1cblxuLnAtZmVjaGEtcHVibGljYWNpb24ge1xuICBjb2xvcjogIzk4OWFhMjtcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cblxuLm1hcmdpbi0xMCB7XG4gIG1hcmdpbi10b3A6IDEwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/producto/producto.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/producto/producto.page.ts ***!
  \*************************************************/
/*! exports provided: ProductoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoPage", function() { return ProductoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/nav.service */ "./src/app/services/nav.service.ts");



var ProductoPage = /** @class */ (function () {
    function ProductoPage(nav) {
        this.nav = nav;
    }
    ProductoPage.prototype.ngOnInit = function () {
        this.producto = this.nav.get();
        console.log(this.producto);
    };
    ProductoPage.ctorParameters = function () { return [
        { type: _services_nav_service__WEBPACK_IMPORTED_MODULE_2__["Nav"] }
    ]; };
    ProductoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-producto',
            template: __webpack_require__(/*! raw-loader!./producto.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/producto/producto.page.html"),
            styles: [__webpack_require__(/*! ./producto.page.scss */ "./src/app/pages/producto/producto.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_nav_service__WEBPACK_IMPORTED_MODULE_2__["Nav"]])
    ], ProductoPage);
    return ProductoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-producto-producto-module-es5.js.map
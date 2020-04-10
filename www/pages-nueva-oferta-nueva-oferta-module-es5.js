(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-nueva-oferta-nueva-oferta-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/nueva-oferta/nueva-oferta.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/nueva-oferta/nueva-oferta.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title text-center>Nueva oferta</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid fixed padding>\n    <ion-row>\n      <ion-col class=\"col-img\" size=\"5\">\n        <ion-img class=\"img-col\" src=\"/assets/fotoicon.png\"></ion-img>\n      </ion-col>\n      <ion-col size=\"7\">\n\n          <ion-item class=\"input\" lines=\"none\">\n            <ion-input placeholder=\"Precio\"></ion-input>\n          </ion-item>\n          <ion-item lines=\"none\" class=\"input\" margin-top=\"10px\">\n            <ion-input placeholder=\"Producto\"></ion-input>\n          </ion-item>\n          <ion-item lines=\"none\" class=\"input\" margin-top=\"10px\">\n            <ion-input placeholder=\"Marca\"></ion-input>\n          </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-item lines=\"none\" class=\"input\" margin-top=\"10px\">\n          <ion-datetime [(ngModel)]=\"customDate\"\n                        [pickerOptions]=\"customPickerOptions\"\n                        placeholder=\"Validez\"\n                        display-format=\"DD / MM / YYYY\">\n\n          </ion-datetime>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-item lines=\"none\" class=\"input\" margin-top=\"10px\">\n          <ion-input placeholder=\"Categoria\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"10\">\n        <ion-item lines=\"none\" class=\"input\" margin-top=\"10px\">\n          <ion-input placeholder=\"Establecimiento\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-item lines=\"none\" class=\"input\" margin-top=\"10px\">\n        <ion-input placeholder=\"Descripcion\"></ion-input>\n      </ion-item>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/nueva-oferta/nueva-oferta-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/nueva-oferta/nueva-oferta-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: NuevaOfertaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevaOfertaPageRoutingModule", function() { return NuevaOfertaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nueva_oferta_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nueva-oferta.page */ "./src/app/pages/nueva-oferta/nueva-oferta.page.ts");




var routes = [
    {
        path: '',
        component: _nueva_oferta_page__WEBPACK_IMPORTED_MODULE_3__["NuevaOfertaPage"]
    }
];
var NuevaOfertaPageRoutingModule = /** @class */ (function () {
    function NuevaOfertaPageRoutingModule() {
    }
    NuevaOfertaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], NuevaOfertaPageRoutingModule);
    return NuevaOfertaPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/nueva-oferta/nueva-oferta.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/nueva-oferta/nueva-oferta.module.ts ***!
  \***********************************************************/
/*! exports provided: NuevaOfertaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevaOfertaPageModule", function() { return NuevaOfertaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _nueva_oferta_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nueva-oferta-routing.module */ "./src/app/pages/nueva-oferta/nueva-oferta-routing.module.ts");
/* harmony import */ var _nueva_oferta_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nueva-oferta.page */ "./src/app/pages/nueva-oferta/nueva-oferta.page.ts");







var NuevaOfertaPageModule = /** @class */ (function () {
    function NuevaOfertaPageModule() {
    }
    NuevaOfertaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _nueva_oferta_routing_module__WEBPACK_IMPORTED_MODULE_5__["NuevaOfertaPageRoutingModule"]
            ],
            declarations: [_nueva_oferta_page__WEBPACK_IMPORTED_MODULE_6__["NuevaOfertaPage"]]
        })
    ], NuevaOfertaPageModule);
    return NuevaOfertaPageModule;
}());



/***/ }),

/***/ "./src/app/pages/nueva-oferta/nueva-oferta.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/nueva-oferta/nueva-oferta.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-img {\n  height: 180px;\n  border: 1px grey;\n  background-color: grey;\n  border-radius: 24px;\n}\n\n.img-col {\n  width: 70%;\n  height: 70%;\n  /* display: grid; */\n  margin-left: 15%;\n  margin-top: 20%;\n}\n\n.input {\n  border: 1px solid #989aa2;\n  border-radius: 24px;\n}\n\n.native-input sc-ion-input-ios {\n  margin-left: 10% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYW5vL0NhemFuZG9PZmVydGFzL2NvX2FwcC9zcmMvYXBwL3BhZ2VzL251ZXZhLW9mZXJ0YS9udWV2YS1vZmVydGEucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9udWV2YS1vZmVydGEvbnVldmEtb2ZlcnRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURDQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNFRjs7QURDQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUNFRjs7QURDQTtFQUNFLDJCQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9udWV2YS1vZmVydGEvbnVldmEtb2ZlcnRhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2wtaW1ne1xuICBoZWlnaHQ6IDE4MHB4O1xuICBib3JkZXI6IDFweCBncmV5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xufVxuLmltZy1jb2wge1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IDcwJTtcbiAgLyogZGlzcGxheTogZ3JpZDsgKi9cbiAgbWFyZ2luLWxlZnQ6IDE1JTtcbiAgbWFyZ2luLXRvcDogMjAlO1xufVxuXG4uaW5wdXR7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5ODlhYTI7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG59XG5cbi5uYXRpdmUtaW5wdXQgc2MtaW9uLWlucHV0LWlvc3tcbiAgbWFyZ2luLWxlZnQ6IDEwJSAhaW1wb3J0YW50O1xufVxuIiwiLmNvbC1pbWcge1xuICBoZWlnaHQ6IDE4MHB4O1xuICBib3JkZXI6IDFweCBncmV5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xufVxuXG4uaW1nLWNvbCB7XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogNzAlO1xuICAvKiBkaXNwbGF5OiBncmlkOyAqL1xuICBtYXJnaW4tbGVmdDogMTUlO1xuICBtYXJnaW4tdG9wOiAyMCU7XG59XG5cbi5pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5ODlhYTI7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG59XG5cbi5uYXRpdmUtaW5wdXQgc2MtaW9uLWlucHV0LWlvcyB7XG4gIG1hcmdpbi1sZWZ0OiAxMCUgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/nueva-oferta/nueva-oferta.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/nueva-oferta/nueva-oferta.page.ts ***!
  \*********************************************************/
/*! exports provided: NuevaOfertaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevaOfertaPage", function() { return NuevaOfertaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NuevaOfertaPage = /** @class */ (function () {
    function NuevaOfertaPage() {
        this.customDate = new Date();
    }
    NuevaOfertaPage.prototype.ngOnInit = function () {
        var _this = this;
        this.customPickerOptions = {
            buttons: [{
                    text: 'Ok',
                    handler: function (data) {
                        console.log('Clicked Ok');
                        console.log(data);
                        _this.customDate = data.year.text;
                        console.log(_this.customDate);
                    }
                }, {
                    text: 'Cancelar',
                    handler: function () {
                        console.log('Clicked Log. Do not Dismiss.');
                    }
                }]
        };
    };
    NuevaOfertaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nueva-oferta',
            template: __webpack_require__(/*! raw-loader!./nueva-oferta.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/nueva-oferta/nueva-oferta.page.html"),
            styles: [__webpack_require__(/*! ./nueva-oferta.page.scss */ "./src/app/pages/nueva-oferta/nueva-oferta.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NuevaOfertaPage);
    return NuevaOfertaPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-nueva-oferta-nueva-oferta-module-es5.js.map
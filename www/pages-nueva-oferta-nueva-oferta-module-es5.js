(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-nueva-oferta-nueva-oferta-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/nueva-oferta/nueva-oferta.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/nueva-oferta/nueva-oferta.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title text-center>Nueva oferta</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<form [formGroup]=\"nuevaOferta\" (ngSubmit)=\"publicarOferta()\">\n    <ion-grid fixed padding>\n        <ion-row>\n            <ion-col class=\"col-img\" size=\"5\" *ngIf=\"!foto\">\n                <ion-img class=\"img-col\" src=\"/assets/fotoicon.png\" (click)=\"takePicture()\"></ion-img>\n            </ion-col>\n            <ion-col class=\"col-img\" size=\"5\" *ngIf=\"foto\">\n                <ion-img class=\"img-col\" [src]=\"foto\" (click)=\"takePicture()\"></ion-img>\n            </ion-col>\n            <ion-col size=\"7\">\n\n\n                <ion-item class=\"input\" lines=\"none\">\n                    <ion-label>Precio:  $</ion-label>\n                    <ion-input inputmode=\"decimal\" placeholder=\"0.00\" formControlName=\"precio\"></ion-input>\n                </ion-item>\n\n              <ion-item lines=\"none\" class=\"input\" margin-top=\"10px\">\n                  <ion-input disabled=\"true\" formControlName=\"categoria\"></ion-input>\n              </ion-item>\n\n              <ion-item lines=\"none\" class=\"input\" margin-top=\"10px\">\n                <ion-input placeholder=\"Producto\" formControlName=\"producto\"></ion-input>\n              </ion-item>\n\n            </ion-col>\n        </ion-row>\n      <ion-row>\n            <ion-col>\n\n              <ion-item lines=\"none\" class=\"input\" margin-top=\"10px\">\n                <ion-input placeholder=\"Marca\" formControlName=\"marca\"></ion-input>\n              </ion-item>\n            </ion-col>\n        </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item lines=\"none\" class=\"input\" margin-top=\"10px\">\n            <ion-label>Vencimiento:</ion-label>\n            <ion-datetime [ngModel]=\"customDate.toISOString()\"\n                          placeholder=\"Valido hasta\"\n                          doneText=\"Guardar\"\n                          [min]=\"today.toISOString()\"\n                          (ionChange)=\"cambioFecha($event)\"\n                          display-format=\"DD / MM / YYYY\"\n                          formControlName=\"fechaVenc\">\n            </ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n        <ion-row>\n            <ion-col size=\"10\">\n                <ion-item lines=\"none\" class=\"input\" margin-top=\"10px\">\n                    <ion-input placeholder=\"Establecimiento\" formControlName=\"establecimiento\"></ion-input>\n                </ion-item>\n            </ion-col>\n            <ion-col size=\"2\" *ngIf=\"nuevaOferta.value.localizacion.length === 0\">\n                <ion-button fill=\"clear\" (click)=\"openRegisterModal()\">\n                    <ion-icon slot=\"icon-only\" name=\"navigate\" color=\"primary\"></ion-icon>\n                </ion-button>\n            </ion-col>\n            <ion-col size=\"2\" *ngIf=\"nuevaOferta.value.localizacion.length !== 0\">\n                <ion-button fill=\"clear\" (click)=\"openRegisterModal()\">\n                    <ion-icon slot=\"icon-only\" name=\"navigate\" color=\"success\"></ion-icon>\n                </ion-button>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <ion-item lines=\"none\" class=\"input\" margin-top=\"10px\">\n                    <ion-input placeholder=\"Descripcion\" formControlName=\"descripcion\"></ion-input>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n\n        <ion-row class=\"top-30\">\n            <ion-col>\n                <ion-button class=\"top-20\" shape=\"round\" expand=\"full\" [disabled]=\"!nuevaOferta.valid\" fill=\"solid\" color=\"medium\" type=\"submit\">\n                    Publicar\n                </ion-button>\n            </ion-col>\n            <ion-col>\n                <ion-button class=\"top-20\" shape=\"round\" expand=\"full\" fill=\"solid\" color=\"tertiary\" (click)=\"goBack()\">Cancelar\n                </ion-button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</form>\n</ion-content>\n"

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
/* harmony import */ var _localizacion_localizacion_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../localizacion/localizacion.page */ "./src/app/pages/localizacion/localizacion.page.ts");
/* harmony import */ var _localizacion_localizacion_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../localizacion/localizacion.module */ "./src/app/pages/localizacion/localizacion.module.ts");









var NuevaOfertaPageModule = /** @class */ (function () {
    function NuevaOfertaPageModule() {
    }
    NuevaOfertaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            entryComponents: [_localizacion_localizacion_page__WEBPACK_IMPORTED_MODULE_7__["LocalizacionPage"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _nueva_oferta_routing_module__WEBPACK_IMPORTED_MODULE_5__["NuevaOfertaPageRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _localizacion_localizacion_module__WEBPACK_IMPORTED_MODULE_8__["LocalizacionPageModule"]
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

module.exports = ".col-img {\n  height: 200px;\n  border: 1px grey;\n  background-color: grey;\n  border-radius: 24px;\n}\n\n.img-col {\n  width: 70%;\n  height: 70%;\n  /* display: grid; */\n  margin-left: 15%;\n  margin-top: 20%;\n}\n\n.top-30 {\n  margin-top: 10%;\n}\n\n.input {\n  margin-top: 2px;\n  margin-bottom: 26px;\n  border: 1px solid #989aa2;\n  border-radius: 24px;\n}\n\n.native-input sc-ion-input-ios {\n  margin-left: 10% !important;\n}\n\nion-select {\n  max-width: 70% !important;\n  padding-left: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYW5vL0NhemFuZG9PZmVydGFzL2NvX2FwcC9zcmMvYXBwL3BhZ2VzL251ZXZhLW9mZXJ0YS9udWV2YS1vZmVydGEucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9udWV2YS1vZmVydGEvbnVldmEtb2ZlcnRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURDQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNFRjs7QURDQTtFQUNFLGVBQUE7QUNFRjs7QURDQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNFRjs7QURDQTtFQUNFLDJCQUFBO0FDRUY7O0FEQ0E7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9udWV2YS1vZmVydGEvbnVldmEtb2ZlcnRhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2wtaW1ne1xuICBoZWlnaHQ6IDIwMHB4O1xuICBib3JkZXI6IDFweCBncmV5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xufVxuLmltZy1jb2wge1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IDcwJTtcbiAgLyogZGlzcGxheTogZ3JpZDsgKi9cbiAgbWFyZ2luLWxlZnQ6IDE1JTtcbiAgbWFyZ2luLXRvcDogMjAlO1xufVxuXG4udG9wLTMwe1xuICBtYXJnaW4tdG9wOiAxMCU7XG59XG5cbi5pbnB1dHtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBtYXJnaW4tYm90dG9tOiAyNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTg5YWEyO1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xufVxuXG4ubmF0aXZlLWlucHV0IHNjLWlvbi1pbnB1dC1pb3N7XG4gIG1hcmdpbi1sZWZ0OiAxMCUgIWltcG9ydGFudDtcbn1cblxuaW9uLXNlbGVjdHtcbiAgbWF4LXdpZHRoOiA3MCUgIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG4iLCIuY29sLWltZyB7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJvcmRlcjogMXB4IGdyZXk7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG59XG5cbi5pbWctY29sIHtcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiA3MCU7XG4gIC8qIGRpc3BsYXk6IGdyaWQ7ICovXG4gIG1hcmdpbi1sZWZ0OiAxNSU7XG4gIG1hcmdpbi10b3A6IDIwJTtcbn1cblxuLnRvcC0zMCB7XG4gIG1hcmdpbi10b3A6IDEwJTtcbn1cblxuLmlucHV0IHtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBtYXJnaW4tYm90dG9tOiAyNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTg5YWEyO1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xufVxuXG4ubmF0aXZlLWlucHV0IHNjLWlvbi1pbnB1dC1pb3Mge1xuICBtYXJnaW4tbGVmdDogMTAlICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zZWxlY3Qge1xuICBtYXgtd2lkdGg6IDcwJSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbn0iXX0= */"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _localizacion_localizacion_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../localizacion/localizacion.page */ "./src/app/pages/localizacion/localizacion.page.ts");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _services_nav_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/nav.service */ "./src/app/services/nav.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");











var Camera = _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Plugins"].Camera;
var NuevaOfertaPage = /** @class */ (function () {
    function NuevaOfertaPage(domSanitazer, geolocation, nav, formBuilder, navController, modalController, locationService, loadingController, dataService) {
        this.domSanitazer = domSanitazer;
        this.geolocation = geolocation;
        this.nav = nav;
        this.formBuilder = formBuilder;
        this.navController = navController;
        this.modalController = modalController;
        this.locationService = locationService;
        this.loadingController = loadingController;
        this.dataService = dataService;
        this.customDate = new Date();
        this.today = new Date();
        this.nuevaOferta = this.formBuilder.group({
            precio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            categoria: [this.nav.get().nombre, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            producto: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            marca: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fechaVenc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            establecimiento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            descripcion: [''],
            localizacion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    NuevaOfertaPage.prototype.ngOnInit = function () {
        this.categoria = this.nav.get();
    };
    NuevaOfertaPage.prototype.takePicture = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Camera.getPhoto({
                                quality: 75,
                                allowEditing: false,
                                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["CameraResultType"].Uri
                            })];
                    case 1:
                        result = _a.sent();
                        this.foto = result.webPath;
                        console.log(this.foto);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    NuevaOfertaPage.prototype.goBack = function () {
        this.navController.navigateBack('familia');
    };
    NuevaOfertaPage.prototype.cambioFecha = function (event) {
        this.nuevaOferta.controls['fechaVenc'].setValue(event.detail.value);
    };
    NuevaOfertaPage.prototype.openRegisterModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, modal, data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Obteniendo la ubicacion...',
                            spinner: 'crescent'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.geolocation.getCurrentPosition().then(function (resp) {
                                var coords = { lat: "" + resp.coords.latitude, lng: "" + resp.coords.longitude };
                                _this.coords = coords;
                            })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.modalController.create({
                                component: _localizacion_localizacion_page__WEBPACK_IMPORTED_MODULE_4__["LocalizacionPage"],
                                componentProps: {
                                    localizacion: { lat: this.coords.lat, lng: this.coords.lng, dragable: true }
                                }
                            })];
                    case 4:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 5:
                        _a.sent();
                        loading.dismiss();
                        return [4 /*yield*/, modal.onWillDismiss()];
                    case 6:
                        data = _a.sent();
                        console.log(data);
                        this.nuevaOferta.controls['localizacion'].setValue(data.data);
                        return [2 /*return*/];
                }
            });
        });
    };
    NuevaOfertaPage.prototype.publicarOferta = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Publicando oferta',
                            spinner: 'crescent'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.oferta = {
                            foto: null,
                            categoria: this.categoria.id,
                            marca: this.nuevaOferta.value.marca,
                            establecimiento: this.nuevaOferta.value.establecimiento,
                            validez: this.nuevaOferta.value.fechaVenc,
                            fecha_pub: new Date().toISOString(),
                            estado: null,
                            precio: this.nuevaOferta.value.precio,
                            producto: this.nuevaOferta.value.producto,
                            descripcion: this.nuevaOferta.value.descripcion,
                            //ubicaciones: {lat: this.nuevaOferta.value.localizacion.lat, long: this.nuevaOferta.value.localizacion.lng}
                            lat: this.nuevaOferta.value.localizacion.lat,
                            long: this.nuevaOferta.value.localizacion.lng
                        };
                        console.log(this.oferta);
                        this.dataService.postOferta(this.oferta).then(function (res) {
                            console.log(res);
                            _this.navController.navigateBack('/home');
                        });
                        loading.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    NuevaOfertaPage.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"] },
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__["Geolocation"] },
        { type: _services_nav_service__WEBPACK_IMPORTED_MODULE_6__["Nav"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _services_location_service__WEBPACK_IMPORTED_MODULE_5__["LocationService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"] }
    ]; };
    NuevaOfertaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nueva-oferta',
            template: __webpack_require__(/*! raw-loader!./nueva-oferta.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/nueva-oferta/nueva-oferta.page.html"),
            styles: [__webpack_require__(/*! ./nueva-oferta.page.scss */ "./src/app/pages/nueva-oferta/nueva-oferta.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__["Geolocation"], _services_nav_service__WEBPACK_IMPORTED_MODULE_6__["Nav"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _services_location_service__WEBPACK_IMPORTED_MODULE_5__["LocationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]])
    ], NuevaOfertaPage);
    return NuevaOfertaPage;
}());



/***/ }),

/***/ "./src/app/services/location.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/location.service.ts ***!
  \**********************************************/
/*! exports provided: LocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return LocationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");



var LocationService = /** @class */ (function () {
    function LocationService(geolocation) {
        this.geolocation = geolocation;
    }
    LocationService.prototype.getCurrentPosition = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.geolocation.getCurrentPosition({ timeout: 10000, enableHighAccuracy: false, maximumAge: 7500 }).then(function (resp) {
                            console.log(resp);
                            return { lat: resp.coords.latitude, lng: resp.coords.longitude };
                        }).catch(function (error) {
                            console.log('Error getting location', error);
                            return error;
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LocationService.ctorParameters = function () { return [
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"] }
    ]; };
    LocationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"]])
    ], LocationService);
    return LocationService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-nueva-oferta-nueva-oferta-module-es5.js.map
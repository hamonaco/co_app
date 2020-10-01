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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _nueva_oferta_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nueva-oferta.page */ "./src/app/pages/nueva-oferta/nueva-oferta.page.ts");




const routes = [
    {
        path: '',
        component: _nueva_oferta_page__WEBPACK_IMPORTED_MODULE_3__["NuevaOfertaPage"]
    }
];
let NuevaOfertaPageRoutingModule = class NuevaOfertaPageRoutingModule {
};
NuevaOfertaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NuevaOfertaPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _nueva_oferta_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nueva-oferta-routing.module */ "./src/app/pages/nueva-oferta/nueva-oferta-routing.module.ts");
/* harmony import */ var _nueva_oferta_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nueva-oferta.page */ "./src/app/pages/nueva-oferta/nueva-oferta.page.ts");
/* harmony import */ var _localizacion_localizacion_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../localizacion/localizacion.page */ "./src/app/pages/localizacion/localizacion.page.ts");
/* harmony import */ var _localizacion_localizacion_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../localizacion/localizacion.module */ "./src/app/pages/localizacion/localizacion.module.ts");









let NuevaOfertaPageModule = class NuevaOfertaPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _localizacion_localizacion_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../localizacion/localizacion.page */ "./src/app/pages/localizacion/localizacion.page.ts");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _services_nav_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/nav.service */ "./src/app/services/nav.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");










const { Camera } = _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Plugins"];
let NuevaOfertaPage = class NuevaOfertaPage {
    constructor(domSanitazer, nav, formBuilder, navController, modalController, locationService, loadingController, dataService) {
        this.domSanitazer = domSanitazer;
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
    ngOnInit() {
        this.categoria = this.nav.get();
    }
    // async takePicture() {
    //   const image = await Camera.getPhoto({
    //     quality: 90,
    //     allowEditing: true,
    //     resultType: CameraResultType.Uri
    //   });
    //   // image.webPath will contain a path that can be set as an image src.
    //   // You can access the original file using image.path, which can be
    //   // passed to the Filesystem API to read the raw data of the image,
    //   // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    //   var imageUrl = image.webPath;
    //   var imagePath = image.path;
    //   console.log(imagePath);
    //   // Can be set to the src of an image now
    //  // imageElement.src = imageUrl;
    // }
    takePicture() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const result = yield Camera.getPhoto({
                    quality: 75,
                    allowEditing: false,
                    resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["CameraResultType"].Uri
                });
                this.foto = result.webPath;
                console.log(this.foto);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    goBack() {
        this.navController.navigateBack('familia');
    }
    cambioFecha(event) {
        this.nuevaOferta.controls['fechaVenc'].setValue(event.detail.value);
    }
    openRegisterModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingController.create({
                message: 'Cargando...',
                spinner: 'crescent'
            });
            yield loading.present();
            this.locationService.getCurrentPosition().then((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                console.log(res);
                const modal = yield this.modalController.create({
                    component: _localizacion_localizacion_page__WEBPACK_IMPORTED_MODULE_4__["LocalizacionPage"],
                    componentProps: {
                        localizacion: { lat: res.coords.latitude, lng: res.coords.longitude, dragable: true }
                    }
                });
                yield modal.present();
                loading.dismiss();
                const data = yield modal.onWillDismiss();
                this.nuevaOferta.controls['localizacion'].setValue(data.data);
            }));
        });
    }
    publicarOferta() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingController.create({
                message: 'Publicando oferta',
                spinner: 'crescent'
            });
            yield loading.present();
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
                lat: this.nuevaOferta.value.localizacion.lat,
                long: this.nuevaOferta.value.localizacion.lng
            };
            this.dataService.postOferta(this.oferta).then(res => {
                console.log(res);
                this.navController.navigateBack('/home');
            });
            loading.dismiss();
        });
    }
};
NuevaOfertaPage.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"] },
    { type: _services_nav_service__WEBPACK_IMPORTED_MODULE_6__["Nav"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _services_location_service__WEBPACK_IMPORTED_MODULE_5__["LocationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"] }
];
NuevaOfertaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nueva-oferta',
        template: __webpack_require__(/*! raw-loader!./nueva-oferta.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/nueva-oferta/nueva-oferta.page.html"),
        styles: [__webpack_require__(/*! ./nueva-oferta.page.scss */ "./src/app/pages/nueva-oferta/nueva-oferta.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"], _services_nav_service__WEBPACK_IMPORTED_MODULE_6__["Nav"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _services_location_service__WEBPACK_IMPORTED_MODULE_5__["LocationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]])
], NuevaOfertaPage);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");



const { Geolocation } = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"];
let LocationService = class LocationService {
    constructor() { }
    getCurrentPosition() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const coordinates = yield Geolocation.getCurrentPosition();
            return coordinates;
        });
    }
};
LocationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LocationService);



/***/ })

}]);
//# sourceMappingURL=pages-nueva-oferta-nueva-oferta-module-es2015.js.map
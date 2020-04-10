(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button>\n        <ion-icon name=\"menu\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n\n    <ion-img class=\"logo-header\" src=\"/assets/logo-solo.png\"></ion-img>\n\n\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n      <ion-img class=\"logo\" src=\"/assets/logo-titulo.jpg\"></ion-img>\n\n  <ion-grid fixed>\n    <ion-row class=\"margin-row\">\n      <ion-col class=\"col-1\" size=\"6\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\"\n               *ngFor=\"let option of homeOptions\">\n\n        <ion-card class=\"card-1\" (click)=\"navigateTo(option.name)\">\n          <ion-img class=\"img-1\" [src]=\"option.icon\"></ion-img>\n         <ion-card-subtitle class=\"subtitle-1\" text-center>{{option.name}}</ion-card-subtitle>\n        </ion-card>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".padding-0 {\n  padding: 0;\n}\n\n.card-1 {\n  margin: 0;\n  border-radius: 0;\n  background: transparent;\n}\n\n.margin-row {\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\n.col-1 {\n  margin-right: 0;\n  margin-left: 0;\n  padding: 0;\n}\n\n.img-1 {\n  padding: 20%;\n  padding-bottom: 11.66%;\n  padding-top: 11.66%;\n}\n\n.subtitle-1 {\n  margin-bottom: 6%;\n}\n\n.logo-header {\n  height: 40%;\n  width: 9%;\n  margin-left: 46%;\n}\n\n.logo {\n  display: block;\n  height: 10%;\n  margin: 6% 35% 15% 35%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYW5vL0NhemFuZG9PZmVydGFzL2NvX2FwcC9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0VGOztBREFBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ0dGOztBREFBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FDR0Y7O0FEREE7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0lGOztBREZBO0VBQ0UsaUJBQUE7QUNLRjs7QURGQTtFQUNBLFdBQUE7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7QUNLRjs7QURGQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBRUEsc0JBQUE7QUNJRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFkZGluZy0we1xuICBwYWRkaW5nOiAwO1xufVxuLmNhcmQtMXtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5tYXJnaW4tcm93e1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwJTtcbn1cblxuLmNvbC0xe1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLmltZy0xe1xuICBwYWRkaW5nOiAyMCU7XG4gIHBhZGRpbmctYm90dG9tOiAxMS42NiU7XG4gIHBhZGRpbmctdG9wOiAxMS42NiU7XG59XG4uc3VidGl0bGUtMXtcbiAgbWFyZ2luLWJvdHRvbTogNiU7XG59XG5cbi5sb2dvLWhlYWRlcntcbmhlaWdodDogNDAlO1xuICB3aWR0aDogOSU7XG4gIG1hcmdpbi1sZWZ0OiA0NiU7XG59XG5cbi5sb2dvIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAlO1xuICAvL3dpZHRoOiAxNSU7XG4gIG1hcmdpbjogNiUgMzUlIDE1JSAzNSVcbn1cbiIsIi5wYWRkaW5nLTAge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uY2FyZC0xIHtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLm1hcmdpbi1yb3cge1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwJTtcbn1cblxuLmNvbC0xIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmltZy0xIHtcbiAgcGFkZGluZzogMjAlO1xuICBwYWRkaW5nLWJvdHRvbTogMTEuNjYlO1xuICBwYWRkaW5nLXRvcDogMTEuNjYlO1xufVxuXG4uc3VidGl0bGUtMSB7XG4gIG1hcmdpbi1ib3R0b206IDYlO1xufVxuXG4ubG9nby1oZWFkZXIge1xuICBoZWlnaHQ6IDQwJTtcbiAgd2lkdGg6IDklO1xuICBtYXJnaW4tbGVmdDogNDYlO1xufVxuXG4ubG9nbyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwJTtcbiAgbWFyZ2luOiA2JSAzNSUgMTUlIDM1JTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/nav.service */ "./src/app/services/nav.service.ts");



let HomePage = class HomePage {
    constructor(nav) {
        this.nav = nav;
        this.homeOptions = [
            {
                icon: '/assets/Iconos/can.svg',
                name: 'Almacen',
                redirectTo: '/familia'
            },
            {
                icon: '/assets/Iconos/bottle.svg',
                name: 'Bebidas',
                redirectTo: '/familia'
            },
            {
                icon: '/assets/Iconos/harvest.svg',
                name: 'Almacen',
                redirectTo: '/familia'
            },
            {
                icon: '/assets/Iconos/meat-fish.svg',
                name: 'Carnes y Pescados',
                redirectTo: '/familia'
            },
            {
                icon: '/assets/Iconos/quesochori.png',
                name: 'Quesos y Fiambres',
                redirectTo: '/familia'
            },
            {
                icon: '/assets/Iconos/leche1.png',
                name: 'Lacteos',
                redirectTo: '/familia'
            },
            {
                icon: '/assets/Iconos/freezer.svg',
                name: 'Congelados',
                redirectTo: '/familia'
            },
            {
                icon: '/assets/Iconos/pie.svg',
                name: 'Elaborados',
                redirectTo: '/familia'
            }
        ];
    }
    ngOnInit() {
    }
    navigateTo(name) {
        return this.nav.push('familia', name);
    }
};
HomePage.ctorParameters = () => [
    { type: _services_nav_service__WEBPACK_IMPORTED_MODULE_2__["Nav"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_nav_service__WEBPACK_IMPORTED_MODULE_2__["Nav"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map
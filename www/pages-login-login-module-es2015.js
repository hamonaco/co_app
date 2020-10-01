(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n\n    <ion-img align-items-center class=\"logo-login\" src=\"/assets/logo-solo.png\"></ion-img>\n\n      <form #formulario=\"ngForm\" (ngSubmit)=\"onClick()\" class=\"form\">\n\n          <h1 class=\"ion-padding\">Iniciar Sesion</h1>\n\n          <ion-item class=\"input\" lines=\"none\">\n            <ion-input type=\"email\" name=\"email\" [(ngModel)]=\"usuario.email\" required placeholder=\"Email\" pattern=\"[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})\"></ion-input>\n          </ion-item>\n          <ion-item lines=\"none\" class=\"input\" margin-top=\"10px\">\n            <ion-input type=\"password\" name=\"password\" [(ngModel)]=\"usuario.password\" placeholder=\"Contraseña\" required></ion-input>\n          </ion-item>\n            <ion-row class=\"top-30\">\n                <ion-col>\n                    <ion-button class=\"top-20\" shape=\"round\" expand=\"full\" fill=\"solid\" color=\"medium\" type=\"submit\" [disabled]=\"formulario.invalid\" (click)=\"loginService()\">Iniciar Sesion</ion-button>\n                </ion-col>\n                <ion-col>\n                    <ion-button class=\"top-20\" shape=\"round\" expand=\"full\" fill=\"solid\" color=\"tertiary\" (click)=\"openRegisterModal()\">Registrarte</ion-button>\n                </ion-col>\n            </ion-row>\n      </form>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/register-modal/register.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/register-modal/register.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content>\n\n  <ion-img class=\"logo-login\" src=\"/assets/logo-solo.png\"></ion-img>\n\n  <form #formulario=\"ngForm\" (ngSubmit)=\"onClick()\" class=\"form\">\n\n    <h1 class=\"ion-padding\">Registrarse</h1>\n\n    <ion-item class=\"input\" lines=\"none\">\n      <ion-input type=\"email\" name=\"email\" [(ngModel)]=\"usuario.email\" required placeholder=\"Email\" pattern=\"[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})\"></ion-input>\n    </ion-item>\n    <ion-item lines=\"none\" class=\"input\" margin-top=\"10px\">\n      <ion-input type=\"text\" name=\"username\" [(ngModel)]=\"usuario.username\" placeholder=\"Nombre de usuario\" required></ion-input>\n    </ion-item>\n    <ion-item lines=\"none\" class=\"input\" margin-top=\"10px\">\n      <ion-input type=\"password\" name=\"password\" [(ngModel)]=\"usuario.password\" placeholder=\"Contraseña\" required></ion-input>\n    </ion-item>\n    <ion-row class=\"top-30\">\n      <ion-col>\n        <ion-button class=\"top-20\" shape=\"round\" expand=\"full\" fill=\"solid\" color=\"medium\" type=\"submit\" (click)=\"registerOk()\" [disabled]=\"formulario.invalid\">Ok</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button class=\"top-20\" shape=\"round\" expand=\"full\" fill=\"solid\" color=\"tertiary\" (click)=\"cancelarModal()\">Cancelar</ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");
/* harmony import */ var _register_modal_register_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../register-modal/register.page */ "./src/app/pages/register-modal/register.page.ts");
/* harmony import */ var _register_modal_register_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../register-modal/register.module */ "./src/app/pages/register-modal/register.module.ts");









let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [_register_modal_register_page__WEBPACK_IMPORTED_MODULE_7__["RegisterPage"]],
        imports: [
            _register_modal_register_module__WEBPACK_IMPORTED_MODULE_8__["RegisterPageModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input {\n  border: 1px solid #989aa2;\n  border-radius: 24px;\n}\n\n.form {\n  margin-top: 10%;\n  padding-left: 8%;\n  padding-right: 8%;\n}\n\n.top-20 {\n  margin-top: 7%;\n}\n\n.top-30 {\n  margin-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYW5vL0NhemFuZG9PZmVydGFzL2NvX2FwcC9zcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtBQ0RGOztBRElBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNERjs7QURJQTtFQUNFLGNBQUE7QUNERjs7QURJQTtFQUNFLGVBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uaW5wdXR7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5ODlhYTI7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG59XG5cbi5mb3Jte1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIHBhZGRpbmctbGVmdDogOCU7XG4gIHBhZGRpbmctcmlnaHQ6IDglO1xufVxuXG4udG9wLTIwe1xuICBtYXJnaW4tdG9wOiA3JTtcbn1cblxuLnRvcC0zMHtcbiAgbWFyZ2luLXRvcDogMTAlO1xufVxuXG5cbiIsIi5pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5ODlhYTI7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG59XG5cbi5mb3JtIHtcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBwYWRkaW5nLWxlZnQ6IDglO1xuICBwYWRkaW5nLXJpZ2h0OiA4JTtcbn1cblxuLnRvcC0yMCB7XG4gIG1hcmdpbi10b3A6IDclO1xufVxuXG4udG9wLTMwIHtcbiAgbWFyZ2luLXRvcDogMTAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_modal_register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../register-modal/register.page */ "./src/app/pages/register-modal/register.page.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");






let LoginPage = class LoginPage {
    constructor(modalController, navController, authService, loadingController, alertService) {
        this.modalController = modalController;
        this.navController = navController;
        this.authService = authService;
        this.loadingController = loadingController;
        this.alertService = alertService;
        this.usuario = { email: '', password: '' };
    }
    ngOnInit() {
    }
    onClick() {
        console.log(this.usuario);
    }
    openRegisterModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _register_modal_register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            console.log(data);
        });
    }
    loginService() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingController.create({
                message: 'Cargando...',
                spinner: 'crescent'
            });
            yield loading.present();
            this.authService.login(this.usuario.email, this.usuario.password).then(res => {
                if (res == true) {
                    this.navController.navigateForward('/home');
                }
                else {
                    switch (res['status']) {
                        case 401: {
                            this.alertService.alertConOk('Error!', 'Su email y/o contraseña son incorrectos');
                            break;
                        }
                        case 500: {
                            this.alertService.alertConOk('Error!', 'Ocurrio un error en el servidor, intente mas tarde');
                            break;
                        }
                        default: {
                            this.alertService.alertConOk('Error!', 'Ocurrio un error inesperado');
                            break;
                        }
                    }
                }
                loading.dismiss();
            });
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
], LoginPage);



/***/ }),

/***/ "./src/app/pages/register-modal/register-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/register-modal/register-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({})
], RegisterPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/register-modal/register.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/register-modal/register.module.ts ***!
  \*********************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/pages/register-modal/register-routing.module.ts");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/register-modal/register.page.ts");







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/pages/register-modal/register.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/register-modal/register.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-20 {\n  margin-top: 7%;\n}\n\n.top-30 {\n  margin-top: 10%;\n}\n\n.input {\n  border: 1px solid #989aa2;\n  border-radius: 24px;\n}\n\n.form {\n  margin-top: 30px;\n  padding-left: 25px;\n  padding-right: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYW5vL0NhemFuZG9PZmVydGFzL2NvX2FwcC9zcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyLW1vZGFsL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXItbW9kYWwvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWdpc3Rlci1tb2RhbC9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLTIwe1xuICBtYXJnaW4tdG9wOiA3JTtcbn1cblxuLnRvcC0zMHtcbiAgbWFyZ2luLXRvcDogMTAlO1xufVxuXG4uaW5wdXR7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5ODlhYTI7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG59XG5cbi5mb3Jte1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG59XG5cbiIsIi50b3AtMjAge1xuICBtYXJnaW4tdG9wOiA3JTtcbn1cblxuLnRvcC0zMCB7XG4gIG1hcmdpbi10b3A6IDEwJTtcbn1cblxuLmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk4OWFhMjtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbn1cblxuLmZvcm0ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/register-modal/register.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/register-modal/register.page.ts ***!
  \*******************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");





let RegisterPage = class RegisterPage {
    constructor(alertController, alert, modalController, authService, loadingController) {
        this.alertController = alertController;
        this.alert = alert;
        this.modalController = modalController;
        this.authService = authService;
        this.loadingController = loadingController;
        this.usuario = { email: '', password: '', username: '' };
    }
    ngOnInit() {
    }
    onClick() {
        console.log(this.usuario);
    }
    cancelarModal() {
        this.modalController.dismiss();
    }
    registerOk() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = yield this.alertController.create({
                header: 'Registro Correcto',
                message: 'Ingresa a tu correo y finaliza el proceso de registro',
                buttons: [
                    {
                        text: 'Ok',
                        handler: () => {
                            this.modalController.dismiss();
                        }
                    }
                ]
            });
            let loading = yield this.loadingController.create({
                message: 'Cargando...',
                spinner: 'crescent'
            });
            yield loading.present();
            this.authService.registroUsuario(this.usuario.email, this.usuario.password, this.usuario.username)
                .subscribe(() => {
                alert.present();
            }, err => {
                this.alert.alertConOk('Error', err.error);
            });
            yield loading.dismiss();
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/register-modal/register.page.html"),
        styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/pages/register-modal/register.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], RegisterPage);



/***/ }),

/***/ "./src/app/services/alert.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let AlertService = class AlertService {
    constructor(alertController) {
        this.alertController = alertController;
    }
    alertConOk(title, msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: title,
                message: msg,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
AlertService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], AlertService);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





const URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url;
let AuthService = class AuthService {
    constructor(httpClient, storage) {
        this.httpClient = httpClient;
        this.storage = storage;
        this.token = null;
    }
    login(email, password) {
        const data = { email, password };
        return new Promise(resolve => {
            this.httpClient.post(`${URL}/login`, data).subscribe(res => {
                this.guardarToken(res['token']);
                resolve(true);
            }, error => {
                resolve(error);
            });
        });
    }
    guardarToken(token) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.token = token;
            yield this.storage.set('token', token);
        });
    }
    registroUsuario(email, password, username) {
        const data = { email, password, username };
        return this.httpClient.post(`${URL}/user/crear`, data);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
], AuthService);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map
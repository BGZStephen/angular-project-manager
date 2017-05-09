webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_api_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(userApiService, flashMessage, router) {
        this.userApiService = userApiService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.registerUser = function (userObject) {
        var _this = this;
        this.userApiService.getUserByEmail(userObject)
            .subscribe(function (res) {
            if (res) {
                _this.flashMessage.show('Email already exists', { cssClass: "message-failure", timeout: 3000 });
            }
            else {
                _this.userApiService.getUserByUsername(userObject)
                    .subscribe(function (res) {
                    if (res) {
                        _this.flashMessage.show('Username already exists', { cssClass: "message-failure", timeout: 3000 });
                    }
                    else {
                        _this.userApiService.registerUser(userObject)
                            .subscribe(function (res) {
                            console.log(res);
                            if (res.success) {
                                _this.flashMessage.show('Registration Successful', { cssClass: "message-success", timeout: 3000 });
                            }
                            _this.router.navigate(['/login']);
                        });
                    }
                });
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(251),
        styles: [__webpack_require__(236)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_api_service__["a" /* UserApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_api_service__["a" /* UserApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 152;


/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(164);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(238),
        styles: [__webpack_require__(223)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_api_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_project_api_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_projects_projects_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_project_project_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_project_project_add_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_project_project_edit_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_admin_admin_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_home_home_component__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__navbar_navbar_component__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__footer_footer_component__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_register_register_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_profile_profile_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile_edit_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_profile_password_edit_component__ = __webpack_require__(93);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__pages_projects_projects_component__["a" /* ProjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__pages_project_project_component__["a" /* ProjectComponent */],
            __WEBPACK_IMPORTED_MODULE_11__pages_project_project_add_component__["a" /* ProjectAddComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pages_project_project_edit_component__["a" /* ProjectEditComponent */],
            __WEBPACK_IMPORTED_MODULE_13__pages_admin_admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_14__pages_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_15__pages_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_16__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_17__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_18__pages_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_19__pages_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile_edit_component__["a" /* ProfileEditComponent */],
            __WEBPACK_IMPORTED_MODULE_21__pages_profile_password_edit_component__["a" /* PasswordEditComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* router */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__services_user_api_service__["a" /* UserApiService */], __WEBPACK_IMPORTED_MODULE_6__services_project_api_service__["a" /* ProjectApiService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_home_home_component__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_register_register_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_admin_admin_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_projects_projects_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_project_project_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_project_project_add_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_project_project_edit_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile_edit_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_profile_password_edit_component__ = __webpack_require__(93);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return router; });












var APP_ROUTES = [
    { path: "", component: __WEBPACK_IMPORTED_MODULE_1__pages_home_home_component__["a" /* HomeComponent */] },
    { path: "register", component: __WEBPACK_IMPORTED_MODULE_2__pages_register_register_component__["a" /* RegisterComponent */] },
    { path: "login", component: __WEBPACK_IMPORTED_MODULE_3__pages_login_login_component__["a" /* LoginComponent */] },
    { path: "admin", component: __WEBPACK_IMPORTED_MODULE_4__pages_admin_admin_component__["a" /* AdminComponent */] },
    { path: "profile", component: __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile_component__["a" /* ProfileComponent */] },
    { path: "profile/edit", component: __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile_edit_component__["a" /* ProfileEditComponent */] },
    { path: "profile/editpassword", component: __WEBPACK_IMPORTED_MODULE_11__pages_profile_password_edit_component__["a" /* PasswordEditComponent */] },
    { path: "projects", component: __WEBPACK_IMPORTED_MODULE_5__pages_projects_projects_component__["a" /* ProjectsComponent */] },
    { path: "projects/add", component: __WEBPACK_IMPORTED_MODULE_7__pages_project_project_add_component__["a" /* ProjectAddComponent */] },
    { path: "projects/edit/:id", component: __WEBPACK_IMPORTED_MODULE_8__pages_project_project_edit_component__["a" /* ProjectEditComponent */] },
    { path: "project/:id", component: __WEBPACK_IMPORTED_MODULE_6__pages_project_project_component__["a" /* ProjectComponent */] },
];
var router = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(239),
        styles: [__webpack_require__(224)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_api_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(userApiService, router, flashMessage) {
        this.userApiService = userApiService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.menuVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.menuToggle = function () {
        if (screen.width < 768) {
            this.menuVisible = !this.menuVisible;
        }
    };
    NavbarComponent.prototype.toggleVisibility = function (resize) {
        if (resize && screen.width < 768) {
            this.menuVisible = false;
            return { "visibility": "hidden", "opacity": "0" };
        }
        else if (screen.width >= 768) {
            this.menuVisible = true;
            return { "visibility": "visible", "opacity": "1" };
        }
        else if (this.menuVisible == true) {
            return { "visibility": "visible", "opacity": "1" };
        }
        else {
            return { "visibility": "hidden", "opacity": "0" };
        }
    };
    NavbarComponent.prototype.logout = function () {
        this.userApiService.logout();
        this.flashMessage.show('Logout Successful', { cssClass: "message-success", timeout: 3000 });
        this.router.navigate(['/']);
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(240),
        styles: [__webpack_require__(225)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_api_service__["a" /* UserApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_api_service__["a" /* UserApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 164:
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

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".app-container {\n  background: #ddd;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-height: 100vh;\n  width: 100%;\n}\n\n.main-container {\n  padding: 10px;\n  width: 100%;\n}\n\n.flash-messages-container {\n  width: 100%;\n}\n\napp-footer { /* Force footer to bottom */\n  margin-top: auto;\n}\n\n@media (min-width: 768px) {\n  .flash-messages-container {\n    margin: 0 auto;\n    width: 30%;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".footer-container {\n  border-bottom: 6px solid #7f0000;\n  border-top: 3px solid #b71c1c;\n  background: #b71c1c;\n  color: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  font-weight: bold;\n  margin-top: auto;\n  width: 100%;\n}\n\n.copyright-container {\n  padding: 15px;\n}\n\n.copyright-description {\n\n}\n\n.social-container {\n  padding: 0 15px;\n}\n\n.social-item {\n  padding: 15px 10px;\n}\n\na {\n  color: white;\n  text-decoration: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".navbar-container {\n  border-top: 6px solid #7f0000;\n  width: 100%;\n}\n\n.navbar {\n  background: #b71c1c;\n  position: relative;\n  width: 100%;\n}\n\n.navbar-list {\n  background: #b71c1c;\n  border-top: 6px solid #7f0000;\n  border-bottom: 6px solid #7f0000;\n  font-weight: bold;\n  list-style: none;\n  opacity: 1;\n  position: absolute;\n  text-transform: uppercase;\n  top: 100%;\n  transition: all 0.5s ease;\n  visibility: hidden;\n  width: 100%;\n  z-index: 100;\n}\n\n.navbar-left,\n.navbar-right {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n\n.navbar-item {\n  color: white;\n  cursor: pointer;\n  padding: 15px;\n  width: 100%;\n}\n\n.navbar-toggle-container {\n  color: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-weight: bold;\n  padding: 15px;\n  width: 100%;\n}\n\n.navbar-toggle-logo {\n  cursor: pointer;\n  margin-right: 10px;\n}\n\n.navbar-logo {\n  cursor: pointer;\n  display: none;\n}\n\n@media (min-width: 768px) {\n  .navbar-container {\n    border-top: 6px solid #7f0000;\n    border-bottom: 3px solid #b71c1c;\n    width: 100%;\n  }\n\n  .navbar {\n    background: #b71c1c;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding: 0 5px;\n    position: relative;\n  }\n\n  .navbar-list {\n    border: none;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    position: relative;\n  }\n\n  .navbar-left,\n  .navbar-right {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n  }\n\n  .navbar-item {\n    color: white;\n    font-size: 1.3em;\n    padding: 15px;\n    width: auto;\n  }\n\n  .navbar-toggle-container {\n    display: none;\n  }\n\n  .navbar-logo {\n    color: white;\n    display: block;\n    font-size: 1.3em;\n    padding: 15px;\n    width: auto;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".home-content-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-height: calc(100vh - 140px);\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  text-align: center;\n}\n\nh1 {\n  font-size: 2em;\n  margin: 20px 0 40px 0;\n  width: 100%\n}\n\np {\n  margin: 5px 0;\n  width: 100%\n}\n\n.home-button-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin: 40px 0;\n  width: 100%\n}\n\n.register-button,\n.login-button {\n  background: #7f0000;\n  border: none;\n  border-radius: 5px;\n  color: white;\n  cursor: pointer;\n  font-size: 1.3em;\n  padding: 15px 20px;\n  margin: 15px;\n}\n\n.login-button {\n  background: black;\n  color: white;\n}\n\n@media (min-width: 768px) {\n  h1 {\n    font-size: 3em;\n    margin-top: 0;\n  }\n\n  p {\n    font-size: 1.3em;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".login-header {\n  margin-bottom: 20px;\n}\n\n.login-form {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n\n.login-input {\n  -ms-flex-item-align: start;\n      align-self: flex-start;\n  font-size: 1em;\n  margin: 5px 0;\n  padding: 5px;\n}\n\n.login-button {\n  -ms-flex-item-align: start;\n      align-self: flex-start;\n  background: #7f0000;\n  border: none;\n  color: white;\n  font-size: 1em;\n  font-weight: bold;\n  margin-top: 5px;\n  padding: 10px 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".content-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 100%;\n}\n\nh2 {\n  margin-bottom: 20px;\n  width: 100%;\n}\n\n.profile-container {\n  background: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  font-size: 1.2em;\n  padding: 15px;\n}\n\n.profile-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 5px 0;\n  width: 100%;\n}\n\n.profile-left {\n  padding: 3px;\n  text-align: right;\n  width: 180px;\n}\n\n.profile-right {\n  padding-left: 15px;\n  padding-top: 1px;\n  /*width: 250px;*/\n}\n\n.profile-input {\n  font-size: 1em;\n}\n\n.profile-save,\n.profile-cancel {\n  background: #7f0000;\n  border: none;\n  border-radius: 5px;\n  color: white;\n  cursor: pointer;\n  font-size: 1em;\n  margin: 10px 5px 0 5px;\n  padding: 5px 10px;\n}\n\n.profile-cancel {\n  background: black;\n}\n\na {\n  color: #7f0000;\n  font-size: 0.8em;\n  font-style: italic;\n  margin-left: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserApiService = (function () {
    function UserApiService(http) {
        this.http = http;
    }
    UserApiService.prototype.getAllUsers = function () {
        return this.http.post("/users/getallusers", {})
            .map(function (res) { return res.json(); });
    };
    UserApiService.prototype.getUserById = function (query) {
        return this.http.post("/users/getbyid", query)
            .map(function (res) { return res.json(); });
    };
    UserApiService.prototype.getUserProfile = function () {
        var user = JSON.parse(localStorage.getItem('user'));
        var userObject = { 'userId': user.userId };
        return this.http.post("/users/getbyid", userObject)
            .map(function (res) { return res.json(); });
    };
    UserApiService.prototype.updateProfile = function (userObject) {
        var user = JSON.parse(localStorage.getItem('user'));
        userObject.userId = user.userId;
        return this.http.post("/users/updateuser", userObject)
            .map(function (res) { return res.json(); });
    };
    UserApiService.prototype.getUserByUsername = function (query) {
        return this.http.post("/users/getbyusername", query)
            .map(function (res) { return res.json(); });
    };
    UserApiService.prototype.getUserByEmail = function (query) {
        return this.http.post("/users/getbyemail", query)
            .map(function (res) { return res.json(); });
    };
    UserApiService.prototype.deleteUser = function (query) {
        return this.http.post("/users/deleteuser", query)
            .map(function (res) { return res.json(); });
    };
    UserApiService.prototype.registerUser = function (userObject) {
        return this.http.post("/users/register", userObject)
            .map(function (res) { return res.json(); });
    };
    UserApiService.prototype.authenticate = function (loginObject) {
        return this.http.post("/users/authenticate", loginObject)
            .map(function (res) { return res.json(); });
    };
    UserApiService.prototype.updatePassword = function (passwordObject) {
        var user = JSON.parse(localStorage.getItem('user'));
        passwordObject.userId = user.userId;
        return this.http.post("/users/updatepassword", passwordObject)
            .map(function (res) { return res.json(); });
    };
    UserApiService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    UserApiService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])();
    };
    UserApiService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    return UserApiService;
}());
UserApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], UserApiService);

var _a;
//# sourceMappingURL=user-api.service.js.map

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".content-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 100%;\n}\n\nh2 {\n  margin-bottom: 20px;\n  width: 100%;\n}\n\n.profile-container {\n  background: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  font-size: 1.2em;\n  padding: 15px;\n}\n\n.profile-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 5px 0;\n  width: 100%;\n}\n\n.profile-left {\n  padding: 3px;\n  text-align: right;\n  width: 100px;\n}\n\n.profile-right {\n  padding: 3px 3px 3px 15px;\n  /*width: 250px;*/\n}\n\n.profile-input {\n  font-size: 1em;\n}\n\n.profile-save,\n.profile-cancel {\n  background: #7f0000;\n  border: none;\n  border-radius: 5px;\n  color: white;\n  cursor: pointer;\n  font-size: 1em;\n  margin: 10px 5px 0 5px;\n  padding: 5px 10px;\n}\n\n.profile-cancel {\n  background: black;\n}\n\na {\n  color: #7f0000;\n  font-size: 0.8em;\n  font-style: italic;\n  margin-left: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".content-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 100%;\n}\n\nh2 {\n  margin-bottom: 20px;\n  width: 100%;\n}\n\n.profile-container {\n  background: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  font-size: 1.2em;\n  padding: 15px;\n}\n\n.profile-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 5px 0;\n  width: 100%;\n}\n\n.profile-left {\n  width: 100px;\n  text-align: right;\n}\n\n.profile-right {\n  padding-left: 15px;\n  /*width: 250px;*/\n}\n\na {\n  color: #7f0000;\n  font-size: 0.8em;\n  font-style: italic;\n  margin-left: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".project-add-container {\n  width: 100%;\n}\n\n.project-add-header {\n  margin: 10px 0 20px 0;\n}\n\n.project-add-form {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 500px;\n  max-width: 100%;\n}\n\n.project-add-input {\n  font-size: 1em;\n  margin: 5px 0;\n  padding: 5px;\n  width: 100%;\n}\n\n.project-add-task-header {\n  margin: 20px 0 10px 0;\n}\n\n.project-add-submit {\n  -ms-flex-item-align: start;\n      align-self: flex-start;\n  background: #7f0000;\n  border: none;\n  color: white;\n  cursor: pointer;\n  font-weight: bold;\n  font-size: 1.2em;\n  margin: 10px 0;\n  padding: 10px 25px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".project-edit-container {\n  width: 100%;\n}\n\n.project-edit-header {\n  margin: 10px 0 20px 0;\n}\n\n.project-edit-form {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 500px;\n  max-width: 100%;\n}\n\n.project-edit-input {\n  font-size: 1em;\n  margin: 5px 0;\n  padding: 5px;\n  width: 100%;\n}\n\n.project-edit-submit,\n.project-edit-cancel {\n  -ms-flex-item-align: start;\n      align-self: flex-start;\n  background: #7f0000;\n  border: none;\n  color: white;\n  cursor: pointer;\n  font-weight: bold;\n  font-size: 1.2em;\n  margin: 10px 0;\n  padding: 10px 25px;\n}\n\n.project-edit-cancel {\n  background: black;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".projects-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  width: 100%;\n}\n\n.project-container {\n  background: white;\n  border-bottom: 5px solid #7f0000;\n  border-top: 5px solid #7f0000;\n  border-radius: 5px;\n  margin-bottom: 10px;\n  position: relative;\n  width: 100%;\n}\n\n.project-divider {\n  width: 50%;\n  border-top: 1px solid #7f0000;\n  margin: 10px 0;\n}\n\n.project-title-container {\n  background: #7f0000;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.project-toggle {\n  color: white;\n  cursor: pointer;\n  margin-left: 5px;\n  padding: 10px 10px;\n}\n\n.project-actions-container {\n  margin-left: auto;\n}\n\n.project-delete {\n  color: white;\n  cursor: pointer;\n  margin-right: 5px;\n  padding: 10px 5px;\n}\n\n.project-edit {\n  color: white;\n  cursor: pointer;\n  margin-left: auto;\n  margin-right: 5px;\n  padding: 10px 5px;\n  text-decoration: none;\n}\n\n.project-title {\n  color: white;\n  font-size: 1.2em;\n  padding: 10px 5px;\n}\n\n.project-content-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  background: white;\n  overflow: hidden;\n}\n\n.project-content-container-visible {\n  height: auto !important;\n}\n\n.project-description-container {\n  padding: 10px;\n  width: 100%;\n}\n\n.project-description {\n  font-size: 1.2em;\n  font-style: italic;\n  margin: 10px 0;\n}\n\n.incomplete-items-container {\n  padding: 0 10px;\n  width: 100%;\n}\n\n.incomplete-items-header {\n  font-size: 1em;\n  font-weight: normal;\n  margin-top: 10px;\n}\n\n.incomplete-items-list {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n\n.incomplete-item {\n  cursor: pointer;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  padding: 5px 0;\n}\n\n.complete-items-container {\n  padding: 10px;\n}\n\n.complete-items-header {\n  font-size: 1em;\n  font-weight: normal;\n  margin-top: 10px;\n}\n\n.complete-items-list {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n\n.complete-item {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #333;\n  cursor: pointer;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 5px 0;\n  width: 100%;\n}\n\n.complete-item-description {\n  text-decoration: line-through;\n}\n\n.incomplete-list-marker {\n  margin-right: 10px;\n}\n\n.complete-list-marker {\n  margin-right: 10px;\n}\n\n.actions-container {\n  padding: 10px;\n  width: 100%;\n}\n\n.actions-input {\n  margin: 10px 0;\n  padding: 5px\n}\n\n.actions-button {\n  margin: 10px 0;\n  padding: 5px;\n}\n\n@media (min-width: 768px) {\n  .project-container {\n    border-bottom: 5px solid #7f0000;\n    border-top: 5px solid #7f0000;\n    border-radius: 5px;\n    margin: 0 5px 15px 5px;\n    position: relative;\n    width: calc((100% - 20px) / 2);\n  }\n}\n\n@media (min-width: 1024px) {\n  .project-container {\n    border-bottom: 5px solid #7f0000;\n    border-top: 5px solid #7f0000;\n    border-radius: 5px;\n    margin: 0 5px 15px 5px;\n    position: relative;\n    width: calc((100% - 30px) / 3);\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".projects-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  width: 100%;\n}\n\n.project-container {\n  background: white;\n  border-bottom: 5px solid #7f0000;\n  border-top: 5px solid #7f0000;\n  border-radius: 5px;\n  margin-bottom: 10px;\n  position: relative;\n  width: 100%;\n}\n\n.project-divider {\n  width: 50%;\n  border-top: 1px solid #7f0000;\n  margin: 10px 0;\n}\n\n.project-title-container {\n  background: #7f0000;\n  cursor: pointer;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.project-toggle {\n  color: white;\n  cursor: pointer;\n  margin-left: 5px;\n  padding: 10px 10px;\n}\n\n.project-actions-container {\n  margin-left: auto;\n}\n\n.project-delete {\n  color: white;\n  cursor: pointer;\n  margin-right: 5px;\n  padding: 10px 5px;\n}\n\n.project-edit {\n  color: white;\n  cursor: pointer;\n  margin-left: auto;\n  margin-right: 5px;\n  padding: 10px 5px;\n  text-decoration: none;\n}\n\n.project-title {\n  color: white;\n  font-size: 1.2em;\n  padding: 10px 5px;\n}\n\n@media (min-width: 768px) {\n  .project-container {\n    border-bottom: 5px solid #7f0000;\n    border-top: 5px solid #7f0000;\n    border-radius: 5px;\n    margin: 0 5px 15px 5px;\n    position: relative;\n    width: calc((100% - 20px) / 2);\n  }\n}\n\n@media (min-width: 1024px) {\n  .project-container {\n    border-bottom: 5px solid #7f0000;\n    border-top: 5px solid #7f0000;\n    border-radius: 5px;\n    margin: 0 5px 15px 5px;\n    position: relative;\n    width: calc((100% - 30px) / 3);\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".register-header {\n  margin-bottom: 10px;\n}\n\n.register-form {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  max-width: 100%;\n  width: 500px;\n}\n\n.register-input {\n  font-size: 1em;\n  margin: 5px 0;\n  padding: 5px;\n  width: 100%;\n}\n\n.register-button {\n  background: #7f0000;\n  border: none;\n  color: white;\n  cursor: pointer;\n  font-size: 1em;\n  font-weight: bold;\n  margin-top: 5px;\n  padding: 10px 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 238:
/***/ (function(module, exports) {

module.exports = "<div class=\"app-container\">\n  <app-navbar></app-navbar>\n  <div class=\"main-container\">\n    <div class=\"flash-messages-container\">\n      <flash-messages></flash-messages>\n    </div>\n    <router-outlet></router-outlet>\n  </div>\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ 239:
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-container\">\n  <div class=\"copyright-container\">\n    <p class=\"copyright-description\">Built with <a class=\"fa fa-heart\"></a> by Stephen Wright</p>\n  </div>\n  <div class=\"social-container\">\n    <a href=\"https://github.com/BGZStephen/angular-project-manager\" class=\"fa fa-github social-item\"></a>\n  </div>\n</div>\n"

/***/ }),

/***/ 240:
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-container\">\n  <div class=\"navbar\">\n    <ul class=\"navbar-list\" (window:resize)=\"toggleVisibility('resize')\" [ngStyle]=\"toggleVisibility()\">\n      <div class=\"navbar-left\">\n        <li class=\"navbar-logo\" [routerLink]=\"['/']\">MEAN Project Manager</li>\n        <li *ngIf=\"userApiService.loggedIn()\" (click)=\"menuToggle()\" class=\"navbar-item\" [routerLink]=\"['/']\">Home</li>\n        <li *ngIf=\"userApiService.loggedIn()\" (click)=\"menuToggle()\" class=\"navbar-item\" [routerLink]=\"['/projects']\">Projects</li>\n        <li *ngIf=\"userApiService.loggedIn()\" (click)=\"menuToggle()\" class=\"navbar-item\" [routerLink]=\"['/projects/add']\">Add Project</li>\n      </div>\n      <div class=\"navbar-right\">\n        <li *ngIf=\"!userApiService.loggedIn()\" (click)=\"menuToggle()\" class=\"navbar-item\" [routerLink]=\"['/login']\">Login</li>\n        <li *ngIf=\"!userApiService.loggedIn()\" (click)=\"menuToggle()\" class=\"navbar-item\" [routerLink]=\"['/register']\">Register</li>\n        <li *ngIf=\"userApiService.loggedIn()\" (click)=\"menuToggle()\" class=\"navbar-item\" [routerLink]=\"['/profile']\">Profile</li>\n        <li *ngIf=\"userApiService.loggedIn()\" (click)=\"menuToggle()\" class=\"navbar-item\" (click)=\"logout()\">Logout</li>\n      </div>\n    </ul>\n    <div class=\"navbar-toggle-container\" (click)=\"menuVisible = !menuVisible\">\n      <p class=\"fa fa-bars navbar-toggle-logo\"></p>\n      <p class=\"navbar-toggle-description\">MENU</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 241:
/***/ (function(module, exports) {

module.exports = "<button clas=\"admin-test-button\" (click)=\"getAllUsers()\">Get All Users</button>\n<button clas=\"admin-test-button\" (click)=\"getUserById(2)\">Get User By Id</button>\n<button clas=\"admin-test-button\" (click)=\"deleteUser(3)\">Delete User</button>\n"

/***/ }),

/***/ 242:
/***/ (function(module, exports) {

module.exports = "<div class=\"home-content-container\">\n  <h1>Welcome to the MEAN Project Management Application</h1>\n  <p>To get started, hit register to create an account</p>\n  <p>The app will allow you to add projects, manage associated to do lists and check off completed items</p>\n  <p>All projects are unique to you and will not be visible to other users.</p>\n  <div class=\"home-button-container\">\n    <button class=\"register-button\" [routerLink]=\"['/register']\">Register</button>\n    <button class=\"login-button\" [routerLink]=\"['/login']\">Login</button>\n  </div>\n</div>\n"

/***/ }),

/***/ 243:
/***/ (function(module, exports) {

module.exports = "<div class=\"content-container\">\n  <h2 class=\"login-header\">Login</h2>\n  <form class=\"login-form\">\n    <input class=\"login-input\" type=\"text\" name=\"username\" placeholder=\"username\" #username (keyup)=\"0\">\n    <input class=\"login-input\" type=\"password\" name=\"password\" placeholder=\"password\" #password (keyup)=\"0\">\n    <input class=\"login-button\" [disabled]=\"username.value.length < 3 || password.value.length < 3\" type=\"submit\" value=\"Login\" (click)=\"login({'username': username.value, 'password': password.value})\">\n  </form>\n</div>\n"

/***/ }),

/***/ 244:
/***/ (function(module, exports) {

module.exports = "<div class=\"content-container\">\n  <h2>Profile</h2>\n  <div class=\"profile-container\" *ngIf=\"profile\">\n    <div class=\"profile-row\">\n      <div class=\"profile-left\">\n        <p>Current Password: </p>\n      </div>\n      <div class=\"profile-right\">\n        <input class=\"profile-input\" type=\"password\" placeholder=\"Current Password\" name=\"currentPassword\" #currentPassword>\n      </div>\n    </div>\n    <div class=\"profile-row\">\n      <div class=\"profile-left\">\n        <p>New Password: </p>\n      </div>\n      <div class=\"profile-right\">\n        <input class=\"profile-input\" type=\"password\" placeholder=\"New Password\" name=\"newPassword\" #newPassword>\n      </div>\n    </div>\n    <div class=\"profile-row\">\n      <button class=\"profile-cancel\" [routerLink]=\"['/profile']\">Cancel</button>\n      <button class=\"profile-save\" (click)=\"updatePassword({'password': currentPassword.value, 'newPassword': newPassword.value})\">Save</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 245:
/***/ (function(module, exports) {

module.exports = "<div class=\"content-container\">\n  <h2>Profile</h2>\n  <div class=\"profile-container\" *ngIf=\"profile\">\n    <div class=\"profile-row\">\n      <div class=\"profile-left\">\n        <p>Name: </p>\n      </div>\n      <div class=\"profile-right\">\n        <input class=\"profile-input\" type=\"text\" value=\"{{profile.name}}\" name=\"name\" #name>\n      </div>\n    </div>\n    <div class=\"profile-row\">\n      <div class=\"profile-left\">\n        <p>Username: </p>\n      </div>\n      <div class=\"profile-right\">\n        {{profile.username}}\n      </div>\n    </div>\n    <div class=\"profile-row\">\n      <div class=\"profile-left\">\n        <p>Email: </p>\n      </div>\n      <div class=\"profile-right\">\n        <input class=\"profile-input\" type=\"text\" value=\"{{profile.email}}\" name=\"email\" #email>\n      </div>\n    </div>\n    <div class=\"profile-row\">\n      <div class=\"profile-left\">\n        <p>Password: </p>\n      </div>\n      <div class=\"profile-right\">\n        **********\n      </div>\n    </div>\n    <div class=\"profile-row\">\n      <button class=\"profile-cancel\" [routerLink]=\"['/profile']\">Cancel</button>\n      <button class=\"profile-save\" (click)=\"updateProfile({'email': email.value, 'name': name.value})\">Save</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 246:
/***/ (function(module, exports) {

module.exports = "<div class=\"content-container\">\n  <h2>Profile</h2>\n  <div class=\"profile-container\" *ngIf=\"profile\">\n    <div class=\"profile-row\">\n      <div class=\"profile-left\">\n        <p>Name: </p>\n      </div>\n      <div class=\"profile-right\">\n        {{profile.name}}<a [routerLink]=\"['edit']\">Change</a>\n      </div>\n    </div>\n    <div class=\"profile-row\">\n      <div class=\"profile-left\">\n        <p>Username: </p>\n      </div>\n      <div class=\"profile-right\">\n        {{profile.username}}\n      </div>\n    </div>\n    <div class=\"profile-row\">\n      <div class=\"profile-left\">\n        <p>Email: </p>\n      </div>\n      <div class=\"profile-right\">\n        {{profile.email}}<a [routerLink]=\"['edit']\">Change</a>\n      </div>\n    </div>\n    <div class=\"profile-row\">\n      <div class=\"profile-left\">\n        <p>Password: </p>\n      </div>\n      <div class=\"profile-right\">\n        **********<a [routerLink]=\"['editpassword']\">Change</a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 247:
/***/ (function(module, exports) {

module.exports = "<div class=\"project-add-container\">\n  <h1 class=\"project-add-header\">Add New Project</h1>\n  <form class=\"project-add-form\">\n    <input class=\"project-add-input\" type=\"text\" placeholder=\"Project Title\" name=\"projectTitle\" #projectTitle (keyup)=\"0\">\n    <input class=\"project-add-input\" type=\"text\" placeholder=\"Project Description\" name=\"projectDescription\" #projectDescription (keyup)=\"0\">\n    <button class=\"project-add-submit\" [disabled]=\"projectTitle.value.length < 1 || projectDescription.value.length < 1\" (click)=\"addProject({'title': projectTitle.value, 'description': projectDescription.value})\">Add</button>\n  </form>\n</div>\n"

/***/ }),

/***/ 248:
/***/ (function(module, exports) {

module.exports = "<div class=\"project-edit-container\" *ngIf=\"project\">\n  <h1 class=\"project-edit-header\">Edit Project</h1>\n  <form class=\"project-edit-form\">\n    <input class=\"project-edit-input\" type=\"text\" value=\"{{project.title}}\" placeholder=\"Project Title\" name=\"projectTitle\" #projectTitle (keyup)=\"0\">\n    <input class=\"project-edit-input\" type=\"text\" value=\"{{project.description}}\" placeholder=\"Project Description\" name=\"projectDescription\" #projectDescription (keyup)=\"0\">\n    <button class=\"project-edit-cancel\" [routerLink]=\"['/projects']\">Cancel</button>\n    <button class=\"project-edit-submit\" [disabled]=\"projectTitle.value.length < 1 || projectDescription.value.length < 1\" (click)=\"updateProject({'projectId': project.projectId, 'title': projectTitle.value, 'description': projectDescription.value})\">Save</button>\n  </form>\n</div>\n"

/***/ }),

/***/ 249:
/***/ (function(module, exports) {

module.exports = "<div class=\"projects-container\">\n  <div class=\"project-container\" *ngIf=\"project\">\n    <div class=\"project-title-container\">\n      <a class=\"fa fa-plus project-toggle\"></a>\n      <h2 class=\"project-title\">{{project.title}}</h2>\n      <div class=\"project-actions-container\">\n        <a class=\"fa fa-pencil project-edit\" [routerLink]=\"['/projects/edit/', project.projectId]\"></a>\n        <a class=\"fa fa-trash-o project-delete\" (click)=\"deleteProject({'projectId': project.projectId})\"></a>\n      </div>\n    </div>\n    <div class=\"project-content-container\">\n      <div class=\"project-description-container\">\n        <p class=\"project-description\">{{project.description}}</p>\n        <hr class=\"project-divider\">\n      </div>\n      <div class=\"incomplete-items-container\">\n        <h3 class=\"incomplete-items-header\">To do</h3>\n        <hr class=\"project-divider\">\n        <ul class=\"incomplete-items-list\">\n          <li class=\"incomplete-item\" *ngFor=\"let incompleteItem of project.incompleteItems; let incompleteItemIndex = index\"><a class=\"fa fa-trash-o incomplete-list-marker\" (click)=\"deleteItem(incompleteItem, 'incompleteItems')\"></a><a class=\"fa fa-square-o incomplete-list-marker\" (click)=\"moveItem(incompleteItem, 'incompleteItems')\"></a><p (click)=\"moveItem(incompleteItem, 'incompleteItems')\">{{incompleteItem.description}}</p></li>\n        </ul>\n      </div>\n      <div class=\"actions-container\">\n        <input type=\"text\" class=\"actions-input\" placeholder=\"Item description\" #item (keyup)=\"0\">\n        <button class=\"actions-button\" [disabled]=\"item.value.length < 1\" (click)=\"addItem({'description': item.value, 'projectId': project.projectId}); item.value=''\">Add Item</button>\n      </div>\n      <div class=\"complete-items-container\">\n        <h3 class=\"complete-items-header\">Completed</h3>\n        <hr class=\"project-divider\">\n        <ul class=\"complete-items-list\">\n          <li class=\"complete-item\" *ngFor=\"let completedItem of project.completedItems; let completedItemIndex = index\"><a class=\"fa fa-trash-o complete-list-marker\" (click)=\"deleteItem(completedItem, 'completedItems')\"></a><a class=\"fa fa-check-square-o complete-list-marker\" (click)=\"moveItem(completedItem, 'completedItems')\"></a><p class=\"complete-item-description\"><p (click)=\"moveItem(completedItem, 'completedItems')\">{{completedItem.description}}</p></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 250:
/***/ (function(module, exports) {

module.exports = "<div class=\"projects-container\">\n  <div class=\"project-container\" *ngFor=\"let project of projects; let i = index\">\n    <div class=\"project-title-container\" [routerLink]=\"['/project', project.projectId]\">\n      <a class=\"fa fa-plus project-toggle\"></a>\n      <h2 class=\"project-title\">{{project.title}}</h2>\n      <div class=\"project-actions-container\">\n        <a class=\"fa fa-pencil project-edit\" [routerLink]=\"['/projects/edit/', project.projectId]\"></a>\n        <a class=\"fa fa-trash-o project-delete\" (click)=\"deleteProject({'projectId': project.projectId})\"></a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 251:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"register-header\">Register</h2>\n<form class=\"register-form\">\n  <input type=\"text\" name=\"name\" #name placeholder=\"Name\" class=\"register-input\" (keyup)=\"0\">\n  <input type=\"text\" name=\"username\" #username placeholder=\"Username\" class=\"register-input\" (keyup)=\"0\">\n  <input type=\"text\" name=\"email\" #email placeholder=\"Email\" class=\"register-input\" (keyup)=\"0\">\n  <input type=\"password\" name=\"password\" #password placeholder=\"Password\" class=\"register-input\" (keyup)=\"0\">\n  <input type=\"submit\" value=\"Register\" [disabled]=\"name.value.length < 3 || username.value.length < 3 || email.value.length < 3 || password.value.length < 3\" (click)=\"registerUser({'name': name.value, 'username': username.value, 'email': email.value, 'password': password.value})\" class=\"register-button\">\n</form>\n"

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectApiService = (function () {
    function ProjectApiService(http) {
        this.http = http;
    }
    ProjectApiService.prototype.addProject = function (projectObject) {
        var user = JSON.parse(localStorage.getItem('user'));
        projectObject.userId = user.userId;
        return this.http.post("/project/add", projectObject)
            .map(function (res) { return res.json(); });
    };
    ProjectApiService.prototype.updateProject = function (projectObject) {
        return this.http.post("/project/update", projectObject)
            .map(function (res) { return res.json(); });
    };
    ProjectApiService.prototype.getProjectsByUser = function () {
        var user = JSON.parse(localStorage.getItem('user'));
        var projectObject = { userId: user.userId };
        return this.http.post("/project/user", projectObject)
            .map(function (res) { return res.json(); });
    };
    ProjectApiService.prototype.getProjectById = function (query) {
        return this.http.post("/project/id", query)
            .map(function (res) { return res.json(); });
    };
    ProjectApiService.prototype.addProjectItem = function (itemObject) {
        return this.http.post("/project/createItem", itemObject)
            .map(function (res) { return res.json(); });
    };
    ProjectApiService.prototype.moveItem = function (itemObject) {
        return this.http.post("/project/moveItem", itemObject)
            .map(function (res) { return res.json(); });
    };
    ProjectApiService.prototype.deleteItem = function (itemObject) {
        return this.http.post("/project/deleteItem", itemObject)
            .map(function (res) { return res.json(); });
    };
    ProjectApiService.prototype.deleteProject = function (projectObject) {
        return this.http.post("/project/delete", projectObject)
            .map(function (res) { return res.json(); });
    };
    return ProjectApiService;
}());
ProjectApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], ProjectApiService);

var _a;
//# sourceMappingURL=project-api.service.js.map

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(153);


/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_api_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = (function () {
    function AdminComponent(userApiService) {
        this.userApiService = userApiService;
    }
    AdminComponent.prototype.getAllUsers = function () {
        this.userApiService.getAllUsers()
            .subscribe(function (res) {
        });
    };
    AdminComponent.prototype.getUserById = function (id) {
        var query = { userId: id };
        this.userApiService.getUserById(query)
            .subscribe(function (res) {
        });
    };
    AdminComponent.prototype.deleteUser = function (id) {
        var query = { userId: id };
        this.userApiService.deleteUser(query)
            .subscribe(function (res) {
        });
    };
    AdminComponent.prototype.ngOnInit = function () {
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__(241),
        styles: [__webpack_require__(226)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_api_service__["a" /* UserApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_api_service__["a" /* UserApiService */]) === "function" && _a || Object])
], AdminComponent);

var _a;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(242),
        styles: [__webpack_require__(227)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_api_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(userApiService, router, flashMessage) {
        this.userApiService = userApiService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (loginObject) {
        var _this = this;
        console.log("working");
        this.userApiService.authenticate(loginObject)
            .subscribe(function (res) {
            if (res.success) {
                _this.userApiService.storeUserData(res.token, res.user);
                _this.flashMessage.show('Login successful', { cssClass: "message-success", timeout: 1000 });
                _this.router.navigate(['/projects']);
            }
            else {
                _this.flashMessage.show('Incorrect username or password', { cssClass: "message-failure", timeout: 1500 });
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(243),
        styles: [__webpack_require__(228)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_api_service__["a" /* UserApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_api_service__["a" /* UserApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_api_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PasswordEditComponent = (function () {
    function PasswordEditComponent(userApiService) {
        this.userApiService = userApiService;
    }
    PasswordEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userApiService.getUserProfile()
            .subscribe(function (res) {
            _this.profile = res;
        });
    };
    PasswordEditComponent.prototype.updatePassword = function (passwordObject) {
        this.userApiService.updatePassword(passwordObject)
            .subscribe(function (res) {
            console.log(res);
        });
    };
    return PasswordEditComponent;
}());
PasswordEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-password-edit',
        template: __webpack_require__(244),
        styles: [__webpack_require__(229)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_api_service__["a" /* UserApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_api_service__["a" /* UserApiService */]) === "function" && _a || Object])
], PasswordEditComponent);

var _a;
//# sourceMappingURL=password-edit.component.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_api_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileEditComponent = (function () {
    function ProfileEditComponent(userApiService, flashMessage, router) {
        this.userApiService = userApiService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    ProfileEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userApiService.getUserProfile()
            .subscribe(function (res) {
            _this.profile = res;
        });
    };
    ProfileEditComponent.prototype.updateProfile = function (userObject) {
        var _this = this;
        var user = JSON.parse(localStorage.getItem('user'));
        userObject.userId = user.userId;
        this.userApiService.getUserByEmail(userObject)
            .subscribe(function (res) {
            if (res.userId != userObject.userId) {
                _this.flashMessage.show('Email already exists', { cssClass: "message-failure", timeout: 3000 });
            }
            else {
                _this.userApiService.updateProfile(userObject)
                    .subscribe(function (res) {
                    console.log(res);
                    if (res.success) {
                        _this.flashMessage.show('Update Successful', { cssClass: "message-success", timeout: 3000 });
                    }
                    _this.router.navigate(['/profile']);
                });
            }
        });
    };
    return ProfileEditComponent;
}());
ProfileEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile-edit',
        template: __webpack_require__(245),
        styles: [__webpack_require__(230)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_api_service__["a" /* UserApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_api_service__["a" /* UserApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ProfileEditComponent);

var _a, _b, _c;
//# sourceMappingURL=profile-edit.component.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_api_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = (function () {
    function ProfileComponent(userApiService) {
        this.userApiService = userApiService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userApiService.getUserProfile()
            .subscribe(function (res) {
            _this.profile = res;
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(246),
        styles: [__webpack_require__(231)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_api_service__["a" /* UserApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_api_service__["a" /* UserApiService */]) === "function" && _a || Object])
], ProfileComponent);

var _a;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_project_api_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectAddComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectAddComponent = (function () {
    function ProjectAddComponent(projectApiService, router) {
        this.projectApiService = projectApiService;
        this.router = router;
    }
    ProjectAddComponent.prototype.ngOnInit = function () {
    };
    ProjectAddComponent.prototype.addProject = function (projectObject) {
        var _this = this;
        this.projectApiService.addProject(projectObject)
            .subscribe(function (res) {
            _this.router.navigate(['/projects']);
        });
    };
    return ProjectAddComponent;
}());
ProjectAddComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-project-add',
        template: __webpack_require__(247),
        styles: [__webpack_require__(232)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_project_api_service__["a" /* ProjectApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_project_api_service__["a" /* ProjectApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ProjectAddComponent);

var _a, _b;
//# sourceMappingURL=project-add.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_project_api_service__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectEditComponent = (function () {
    function ProjectEditComponent(projectApiService, router, activatedRoute) {
        this.projectApiService = projectApiService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    ProjectEditComponent.prototype.ngOnInit = function () {
        this.refreshProject();
    };
    ProjectEditComponent.prototype.refreshProject = function () {
        var _this = this;
        this.activatedRoute.params
            .map(function (params) { return params['id']; })
            .subscribe(function (id) {
            var query = { projectId: id };
            _this.projectApiService.getProjectById(query)
                .subscribe(function (res) {
                _this.project = res;
            });
        });
    };
    ProjectEditComponent.prototype.updateProject = function (projectObject) {
        var _this = this;
        this.projectApiService.updateProject(projectObject)
            .subscribe(function (res) {
            _this.router.navigate(['/projects']);
        });
    };
    return ProjectEditComponent;
}());
ProjectEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-project-edit',
        template: __webpack_require__(248),
        styles: [__webpack_require__(233)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_project_api_service__["a" /* ProjectApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_project_api_service__["a" /* ProjectApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], ProjectEditComponent);

var _a, _b, _c;
//# sourceMappingURL=project-edit.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_project_api_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectComponent = (function () {
    function ProjectComponent(projectApiService, activatedRoute, router, flashMessage) {
        this.projectApiService = projectApiService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    ProjectComponent.prototype.ngOnInit = function () {
        this.refreshProject();
    };
    ProjectComponent.prototype.refreshProject = function () {
        var _this = this;
        this.activatedRoute.params
            .map(function (params) { return params['id']; })
            .subscribe(function (id) {
            var query = { projectId: id };
            _this.projectApiService.getProjectById(query)
                .subscribe(function (res) {
                _this.project = res;
            });
        });
    };
    ProjectComponent.prototype.deleteProject = function (projectObject) {
        var _this = this;
        this.projectApiService.deleteProject(projectObject)
            .subscribe(function (res) {
            _this.router.navigate(['/projects']);
            _this.flashMessage.show('Project Deleted', { cssClass: "message-success", timeout: 1500 });
        });
    };
    ProjectComponent.prototype.addItem = function (itemObject) {
        var _this = this;
        this.projectApiService.addProjectItem(itemObject)
            .subscribe(function (res) {
            _this.refreshProject();
        });
    };
    ProjectComponent.prototype.moveItem = function (itemObject, container) {
        var _this = this;
        itemObject.container = container;
        this.projectApiService.moveItem(itemObject)
            .subscribe(function (res) {
            _this.refreshProject();
        });
    };
    ProjectComponent.prototype.deleteItem = function (itemObject, container) {
        var _this = this;
        itemObject.container = container;
        this.projectApiService.deleteItem(itemObject)
            .subscribe(function (res) {
            _this.refreshProject();
        });
    };
    return ProjectComponent;
}());
ProjectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-project',
        template: __webpack_require__(249),
        styles: [__webpack_require__(234)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_project_api_service__["a" /* ProjectApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_project_api_service__["a" /* ProjectApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], ProjectComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=project.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_project_api_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectsComponent = (function () {
    function ProjectsComponent(projectApiService, flashMessage, router) {
        this.projectApiService = projectApiService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.projectVisible = false;
        this.projects = [];
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        this.refreshProjects();
    };
    ProjectsComponent.prototype.refreshProjects = function () {
        var _this = this;
        this.projectApiService.getProjectsByUser()
            .subscribe(function (res) {
            _this.projects = res;
        });
    };
    ProjectsComponent.prototype.expandProject = function (index) {
        var projects = document.getElementsByClassName("project-content-container");
        projects[index].classList.toggle("project-content-container-visible");
        // projects[index].classList.toggle("project-content-container-visible")
    };
    ProjectsComponent.prototype.deleteProject = function (projectObject) {
        var _this = this;
        this.projectApiService.deleteProject(projectObject)
            .subscribe(function (res) {
            _this.flashMessage.show('Project Deleted', { cssClass: "message-success", timeout: 1500 });
            _this.router.navigate(['/projects']);
        });
    };
    return ProjectsComponent;
}());
ProjectsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-projects',
        template: __webpack_require__(250),
        styles: [__webpack_require__(235)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_project_api_service__["a" /* ProjectApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_project_api_service__["a" /* ProjectApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ProjectsComponent);

var _a, _b, _c;
//# sourceMappingURL=projects.component.js.map

/***/ })

},[513]);
//# sourceMappingURL=main.bundle.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SigninComponent = void 0;
var core_1 = require("@angular/core");
var SigninComponent = /** @class */ (function () {
    function SigninComponent(signinservice, router) {
        this.signinservice = signinservice;
        this.router = router;
        this.email = '';
        this.password = '';
    }
    SigninComponent.prototype.login = function () {
        var _this = this;
        this.signinservice.userLogin(this.email, this.password).subscribe(function (response) {
            console.log(response);
            _this.signinservice.setToken(response.token);
            alert("login success");
            _this.router.navigate(['/home']);
        });
    };
    SigninComponent = __decorate([
        core_1.Component({
            selector: 'app-signin',
            templateUrl: './signin.component.html',
            styleUrls: ['./signin.component.css']
        })
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeComponent = void 0;
var core_1 = require("@angular/core");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(productservice) {
        this.productservice = productservice;
        this.data = [];
        this.item = " ";
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.getProductById = function () {
        var _this = this;
        this.productservice.getProductById().subscribe(function (res) {
            _this.item = res;
            console.log("product by id called");
        });
    };
    HomeComponent.prototype.getAllProducts = function () {
        var _this = this;
        this.productservice.getAllProducts().subscribe(function (res) {
            /*
            if(Array.isArray(res)){
              this.data=res.map((item:any)=>item);
              console.log(this.data);
            } */
            _this.data = res;
            console.log(res);
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

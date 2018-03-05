"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var product_model_1 = require('../shared/models/product.model');
var CarComponent = (function () {
    //constructor( @Inject("ICompanyService") companyService: ICompanyService){
    function CarComponent() {
        this.totalCost = 0;
        //this.productService = new ProductService();
    }
    CarComponent.prototype.ngOnInit = function () {
        this.getProducts();
        this.refreshTotalCost();
    };
    CarComponent.prototype.refreshTotalCost = function () {
        var _this = this;
        this.totalCost = 0;
        this.listProductsToBuy.forEach(function (element) {
            _this.totalCost = _this.totalCost + element.price;
        });
    };
    CarComponent.prototype.getProducts = function () {
        this.listProductsToBuy = new Array();
        var product1 = new product_model_1.Product();
        product1.productId = 1;
        product1.name = "Camisa2";
        product1.price = 13000;
        product1.detail = "Camisa cafe";
        var product2 = new product_model_1.Product();
        product2.productId = 2;
        product2.name = "Chaqueta";
        product2.price = 10000;
        product2.detail = "Chaqueta cafe";
        var product3 = new product_model_1.Product();
        product3.productId = 3;
        product3.name = "Pantalon";
        product3.price = 15000;
        product3.detail = "Pantalon cafe";
        this.listProductsToBuy.push(product1);
        this.listProductsToBuy.push(product2);
        this.listProductsToBuy.push(product3);
        /*this.companyService.get()
          .then(company => this.company = company)
          .then(company => {
            this.noContent = (company == null);
          })
          .catch((e) => {
            this.noContent = true;
          });*/
    };
    CarComponent.prototype.addProduct = function (product) {
        this.listProductsToBuy.push(product);
        this.refreshTotalCost();
    };
    CarComponent.prototype.delProduct = function (productId) {
        var _this = this;
        console.log(productId);
        var index;
        this.listProductsToBuy.forEach(function (element) {
            if (element.productId == productId) {
                index = _this.listProductsToBuy.indexOf(element);
            }
        });
        if (index != null) {
            this.listProductsToBuy.splice(index, 1);
            this.refreshTotalCost();
        }
    };
    CarComponent = __decorate([
        core_1.Component({
            selector: 'car',
            templateUrl: './src/app/product/components/car.component.html' //,
        }), 
        __metadata('design:paramtypes', [])
    ], CarComponent);
    return CarComponent;
}());
exports.CarComponent = CarComponent;
//# sourceMappingURL=car.component.js.map
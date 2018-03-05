"use strict";
var product_model_1 = require('./../models/product.model');
var ProductService = (function () {
    function ProductService() {
    }
    ProductService.prototype.getAll = function () {
        var listProducts = new Array();
        var product = new product_model_1.Product();
        product.name = "Camisa";
        product.price = 12000;
        product.detail = "Camisa negra";
        var product1 = new product_model_1.Product();
        product1.name = "Camisa2";
        product1.price = 13000;
        product1.detail = "Camisa cafe";
        var product2 = new product_model_1.Product();
        product2.name = "Chaqueta";
        product2.price = 10000;
        product2.detail = "Chaqueta cafe";
        var product3 = new product_model_1.Product();
        product3.name = "Pantalon";
        product3.price = 15000;
        product3.detail = "Pantalon cafe";
        listProducts.push(product);
        listProducts.push(product1);
        listProducts.push(product2);
        listProducts.push(product3);
        return listProducts;
    };
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map
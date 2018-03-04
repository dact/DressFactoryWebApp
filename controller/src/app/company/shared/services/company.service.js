"use strict";
require('rxjs/add/operator/toPromise');
var company_model_1 = require('../models/company.model');
//@Injectable()
var CompanyService = (function () {
    /*constructor(http: Http) {
        this.http = http;
    }*/
    function CompanyService() {
    }
    /*get():Promise<Company>{
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');

        return this.http.get(URLCompany, { headers: headers})
        .toPromise()
        .then(response => response.json() as Company)
        .catch();
    }*/
    CompanyService.prototype.get = function () {
        var company = new company_model_1.Company();
        company.name = "LOUIS BARTON";
        company.img = "img/barton.jpg";
        company.description = "Inició sus actividades en el año 1990, vendiendo sus productos en los más importantes almacenes de cadena. En el año de 1992, cambio su estrategia comercial abriendo sus propios puntos de venta. En la actualidad cuenta con 26 almacenes, ubicados en Bogotá, Medellín, Pasto, Tuluá y Pereira.";
        company.contactInfo = "Corregimiento Caimalito,Zona franca internacional de Pereira,Bodega B 36, Pereira-Risaralda Telephones: (+57)(6) 315 3742 – 315 3731 info@louisbarton.com";
        return company;
    };
    return CompanyService;
}());
exports.CompanyService = CompanyService;
//# sourceMappingURL=company.service.js.map
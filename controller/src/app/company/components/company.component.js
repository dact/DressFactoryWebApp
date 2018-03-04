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
var company_service_1 = require('../shared/services/company.service');
var CompanyComponent = (function () {
    //constructor( @Inject("ICompanyService") companyService: ICompanyService){
    function CompanyComponent() {
        this.companyService = new company_service_1.CompanyService();
    }
    CompanyComponent.prototype.ngOnInit = function () {
        this.getCompany();
    };
    CompanyComponent.prototype.getCompany = function () {
        this.company = this.companyService.get();
        /*this.companyService.get()
          .then(company => this.company = company)
          .then(company => {
            this.noContent = (company == null);
          })
          .catch((e) => {
            this.noContent = true;
          });*/
    };
    CompanyComponent = __decorate([
        core_1.Component({
            selector: 'company',
            templateUrl: './src/app/company/components/company.component.html' //,
        }), 
        __metadata('design:paramtypes', [])
    ], CompanyComponent);
    return CompanyComponent;
}());
exports.CompanyComponent = CompanyComponent;
//# sourceMappingURL=company.component.js.map
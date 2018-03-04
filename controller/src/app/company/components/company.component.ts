import {Component,Inject,OnInit} from '@angular/core';

import {Company} from '../shared/models/company.model';
import {ICompanyService} from '../shared/services/company.contract';
import {CompanyService} from '../shared/services/company.service';

@Component({
    selector:'company',
    templateUrl:'./src/app/company/components/company.component.html'//,
    //templateUrl:'src/app/companyestudiantes.component.html'
    //providers: [{ provide: "ICompanyService", useClass: CompanyService }],
})


export class CompanyComponent implements OnInit{

    private companyService: ICompanyService;
    public company:Company;
    noContent:boolean;

    //constructor( @Inject("ICompanyService") companyService: ICompanyService){
    constructor(){
        this.companyService = new CompanyService();
    }

ngOnInit(){
    this.getCompany();
}

getCompany() {
    this.company=this.companyService.get();
    /*this.companyService.get()
      .then(company => this.company = company)
      .then(company => {
        this.noContent = (company == null);
      })
      .catch((e) => {
        this.noContent = true;
      });*/
}

}
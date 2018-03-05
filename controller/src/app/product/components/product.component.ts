import {Component,Inject,OnInit} from '@angular/core';
import {Product} from '../shared/models/product.model';
import {IProductService} from '../shared/services/product.contract';
import {ProductService} from '../shared/services/product.service';

@Component({
    selector:'products',
    templateUrl:'./src/app/product/components/product.component.html'//,
    //templateUrl:'src/app/companyestudiantes.component.html'
    //providers: [{ provide: "ICompanyService", useClass: CompanyService }],
})


export class ProductComponent implements OnInit{

    private productService: IProductService;
    public listProducts:Array<Product>;
    noContent:boolean;

    //constructor( @Inject("ICompanyService") companyService: ICompanyService){
    constructor(){
        this.productService = new ProductService();
    }

ngOnInit(){
    this.getProducts();
}

getProducts() {
    this.listProducts=this.productService.getAll();
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
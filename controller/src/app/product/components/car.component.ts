import {Component,Inject,OnInit,Input} from '@angular/core';
import {Product} from '../shared/models/product.model';

@Component({
    selector:'car',
    templateUrl:'./src/app/product/components/car.component.html'//,
    //templateUrl:'src/app/companyestudiantes.component.html'
    //providers: [{ provide: "ICompanyService", useClass: CompanyService }],
})


export class CarComponent implements OnInit{
    public listProductsToBuy:Array<Product>;
    public totalCost:number = 0;
    noContent:boolean;

    //constructor( @Inject("ICompanyService") companyService: ICompanyService){
    constructor(){
        //this.productService = new ProductService();
    }

ngOnInit(){
    this.getProducts();
    this.refreshTotalCost();
}

refreshTotalCost(){
    this.totalCost=0;
    this.listProductsToBuy.forEach(element => {
        this.totalCost=this.totalCost+element.price;
    });
}

getProducts() {
    this.listProductsToBuy = new Array<Product>();

    let product1 = new Product();
    product1.productId =1;
    product1.name = "Camisa2";
    product1.price = 13000;
    product1.detail = "Camisa cafe"

    let product2 = new Product();
    product2.productId =2;
    product2.name = "Chaqueta";
    product2.price = 10000;
    product2.detail = "Chaqueta cafe"

    let product3 = new Product();
    product3.productId =3;
    product3.name = "Pantalon";
    product3.price = 15000;
    product3.detail = "Pantalon cafe"

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
}

addProduct(product:Product){
    this.listProductsToBuy.push(product);
    this.refreshTotalCost();
}

delProduct(productId:number){
    console.log(productId);
    let index:number;
    this.listProductsToBuy.forEach(element => {
        if(element.productId == productId){
            index=this.listProductsToBuy.indexOf(element);
        }
    });
    if(index != null){
        this.listProductsToBuy.splice(index,1);
        this.refreshTotalCost();
    }
}

}
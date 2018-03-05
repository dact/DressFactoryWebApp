import { Product } from './../models/product.model';
import { IProductService } from './product.contract';


export class ProductService implements IProductService{
    
    getAll(){
        let listProducts = new Array<Product>();
        let product = new Product();
        product.name = "Camisa";
        product.price = 12000;
        product.detail = "Camisa negra"

        let product1 = new Product();
        product1.name = "Camisa2";
        product1.price = 13000;
        product1.detail = "Camisa cafe"

        let product2 = new Product();
        product2.name = "Chaqueta";
        product2.price = 10000;
        product2.detail = "Chaqueta cafe"

        let product3 = new Product();
        product3.name = "Pantalon";
        product3.price = 15000;
        product3.detail = "Pantalon cafe";


        listProducts.push(product);
        listProducts.push(product1);
        listProducts.push(product2);
        listProducts.push(product3);

       return listProducts;
    }
    
}
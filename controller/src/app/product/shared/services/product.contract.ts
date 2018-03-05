
import { Product } from "../models/product.model";

export interface IProductService {

    getAll():Array<Product>;
}
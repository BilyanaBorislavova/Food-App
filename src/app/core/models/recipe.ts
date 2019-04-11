import { Category } from './category';
import { Product } from './product';

export interface Recipe {
    name: string;
    category: Category;
    photo: string;
    products: Array<Product>,
    creator: string
}
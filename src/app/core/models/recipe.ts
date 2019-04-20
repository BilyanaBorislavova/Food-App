import { Category } from './category';
import { Product } from './product';

export interface Recipe {
    _id: string;    
    name: string;
    category: Category;
    photo: string;
    products: Array<Product>,
    creator: string,
    description: string;
} 
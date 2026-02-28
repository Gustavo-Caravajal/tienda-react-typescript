import type { Brand } from "./Brand";
import type { Category } from "./Category";

export type Product = {
    id: number;
    name: string;
    brand_id: number;
    category_id: number;
    price: number;
    description: string;
    imageUrl: string;
    stock: number;
}

export type CreateProduct = {
    name: string;
    brand_id: number;
    category_id: number;
    price: number;
    description: string;
    imageUrl: string;
    stock: number;
}

export type ProductWithRelations = Product & {
    brand: Brand;
    category: Category;
}

export type CartItem = ProductWithRelations & {
    quantity: number;
}


import type { Brand } from "./Brand";
import type { Category } from "./Category";

export type Product = {
    id: number;
    name: string;
    brand_id: number;
    category_id: number;
    price: number;
    description: string;
    image_url: string;
    stock: number;
}

export type CreateProduct = {
    name: string;
    brand_id: number | null;
    category_id: number | null;
    price: number | null;
    description: string;
    image_url: string;
    stock: number | null;
}

export type ProductWithRelations = Product & {
    brand: Brand;
    category: Category;
}

export type CartItem = ProductWithRelations & {
    quantity: number;
}


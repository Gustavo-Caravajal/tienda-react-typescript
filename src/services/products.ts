import { supabase } from "../supabase-client";
import type { Product, ProductWithRelations } from "../types/Product";

export const getProducts = async (): Promise<ProductWithRelations[]> => {
    const { data, error } = await supabase
        .from('products')
        .select(`
            *,
            brand:brands(*),
            category:categories(*)
        `)
        .order(
            "created_at",
            { ascending: true }
        );

    if (error) {
        throw new Error(`Error getting products: ${error.message}`);
    }

    return data ?? [];
}

export const createProduct = async (product: Omit<Product, "id">): Promise<Product> => {
    const { data, error } = await supabase
        .from("products")
        .insert(product)
        .select()
        .single();

    if (error) {
        throw new Error(`Error creating product: ${error.message}`);
    }

    return data;
}


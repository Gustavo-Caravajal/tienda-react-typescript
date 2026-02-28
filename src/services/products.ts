import { supabase } from "../supabase-client";
import type { CreateProduct, Product, ProductWithRelations } from "../types/Product";

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

export const deleteProduct = async (id: number): Promise<void> => {
    const { error } = await supabase
        .from("products")
        .delete()
        .eq("id", id);

    if (error) {
        throw new Error(`Error deleting product: ${error.message}`);
    }
}

export const updateProduct = async (id: number | null, newValue: CreateProduct): Promise<void> => {
    const { error } = await supabase
        .from("products")
        .update({ ...newValue })
        .eq("id", id);

    if (error) {
        throw new Error(`Error updating product: ${error.message}`);
    }
}


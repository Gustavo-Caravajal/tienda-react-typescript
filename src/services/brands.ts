import { supabase } from "../supabase-client";
import type { Brand } from "../types/Brand";

export const getBrands = async (): Promise<Brand[]> => {
    const { data, error } = await supabase
        .from("brands")
        .select("*")
        .order(
            "created_at",
            { ascending: true }
        );

    if (error) {
        throw new Error(`Error getting brands: ${error.message}`);
    }

    return data ?? [];
}

export const createBrand = async (brand: Omit<Brand, "id">): Promise<Brand> => {
    const { data,error } = await supabase
        .from("brands")
        .insert(brand)
        .select()
        .single();

    if (error) {
        throw new Error(`Error creating brand: ${error.message}`);
    }
    return data;
}
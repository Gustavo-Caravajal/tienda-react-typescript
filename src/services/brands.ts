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
    const { data, error } = await supabase
        .from("brands")
        .insert(brand)
        .select()
        .single();

    if (error) {
        throw new Error(`Error creating brand: ${error.message}`);
    }
    return data;
}

export const deleteBrand = async (id: number): Promise<void> => {
    const { error } = await supabase
        .from("brands")
        .delete()
        .eq("id", id);

    if (error) {
        throw new Error(`Error deleting brand: ${error.message}`);
    }
}

export const updateBrandById = async (id: number, newValue: string) => {
    const { error } = await supabase
        .from("brands")
        .update({ name: newValue })
        .eq("id", id);
    if (error) {
        throw new Error(`Error updating brand: ${error.message}`);
    }
}
import { supabase } from "../supabase-client";
import type { Category } from "../types/Category";

export const getCategories = async (): Promise<Category[]> => {
    const { data, error } = await supabase
        .from("categories")
        .select("*")
        .order(
            "created_at",
            { ascending: true }
        );

    if(error){
        throw new Error(`Error getting categories: ${error.message}`);
    }

    return data ?? [];
}

export const createCategory = async (category: Omit<Category, "id">): Promise<Category> => {
    const { data, error } = await supabase
        .from("categories")
        .insert(category)
        .select()
        .single();

    if(error){
        throw new Error(`Error creating category: ${error.message}`);
    }
    
    return data;
}

export const deleteCategory = async (id: number): Promise<void> => {
    const { error } = await supabase
        .from("categories")
        .delete()
        .eq("id", id);

    if(error){
        throw new Error(`Error deleting category: ${error.message}`);
    }    
}

export const updateCategory = async (id: number | null, newValue: string): Promise<void> => {
    const { error } = await supabase
        .from("categories")
        .update({name: newValue})
        .eq("id", id);
    if(error){
        throw new Error(`Error updating category: ${error.message}`);
    }    
}
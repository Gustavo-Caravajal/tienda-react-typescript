import type { CategoryErrors, CreateCategory } from "../types/Category";

export const validatecategories = (brand: CreateCategory) => {
    const categoryErrors: CategoryErrors = {
        name: "",
    }

    if (!brand.name.trim()) {
        categoryErrors.name = "El nombre es obligatorio";
    }

    return categoryErrors;
}
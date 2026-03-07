import type { BrandErrors, CreateBrand } from "../types/Brand";

export const validateBrands = (brand: CreateBrand) => {
    const brandErrors: BrandErrors = {
        name: "",
    }

    if (!brand.name.trim()) {
        brandErrors.name = "El nombre es obligatorio";
    }

    return brandErrors;
}
import type { CreateProduct, ProductErrors } from "../types/Product"

export const validateProducts = (product: CreateProduct, fileRequired = true) => {
    const productErrors: ProductErrors = {
        name: "",
        brand: "",
        category: "",
        price: "",
        stock: "",
        description: "",
        file: ""
    }

    if (!product.name.trim()) {
        productErrors.name = "El nombre es obligatorio";
    }

    if (!product.brand_id) {
        productErrors.brand = "Debes seleccionar una marca";
    }

    if (!product.category_id) {
        productErrors.category = "Debes seleccionar una categoria";
    }

    if (!product.price || product.price <= 0) {
        productErrors.price = "El precio debe ser mayor a cero";
    }

    if (!product.stock || product.stock <= 0) {
        productErrors.stock = "El stock debe ser mayor a cero";
    }

    if (!product.description.trim()) {
        productErrors.description = "La descripcion es obligatoria";
    }    

    if (fileRequired && !product.image_url?.trim()) {
        productErrors.file = "Debes seleccionar una imagen";
    }

    return productErrors;


}
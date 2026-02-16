import type { Product } from "../types/Product";

const BASE_URL: string = ""

export const getProducts = async (): Promise<Product[]> => {
    const res = await fetch("/data/products.json");

    if (!res.ok) {
        throw new Error("La peticion a los productos fallo");
    }

    const results: Product[] = await res.json();
    return results;
}

export const createProduct = async (product: Product): Promise<Product> => {
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(product)
    });

    if(!res.ok){
        throw new Error("No se pudo crear el producto");
    }

    const result = res.json();
    return result;

}
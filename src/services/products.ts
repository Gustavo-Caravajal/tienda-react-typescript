import type { Product } from "../types/Product";


export const getProducts = async (): Promise<Product[]> => {
    const res = await fetch("/data/products.json");

    if(!res.ok){
        throw new Error("La peticion a los productos fallo");
    }

    const results: Product[] = await res.json();

    return results;
}
import { useEffect, useState, type ReactNode } from "react"
import { ProductsContext } from "./ProductsContext";
import type { Product } from "../../types/Product";
import { getProducts } from "../../services/products";

type ProductsProviderProps = {
    children: ReactNode;
}

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchProducts = async (): Promise<void> => {
            try {
                const data = await getProducts();
                setProducts(data);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);

    return (
        <ProductsContext.Provider value={{products, setProducts, loading}}>
            {children}
        </ProductsContext.Provider>
    )
}
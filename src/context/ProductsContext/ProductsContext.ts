import { createContext, type Dispatch, type SetStateAction } from "react";
import type { Product } from "../../types/Product";

export type ProductsContextType = {
    products: Product[];
    setProducts: Dispatch<SetStateAction<Product[]>>;
    loading: boolean;
}

export const ProductsContext = createContext<ProductsContextType | undefined>(undefined)
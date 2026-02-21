import { createContext, type Dispatch, type SetStateAction } from "react";
import type { ProductWithRelations } from "../../types/Product";

export type ProductsContextType = {
    products: ProductWithRelations[];
    setProducts: Dispatch<SetStateAction<ProductWithRelations[]>>;
    loading: boolean;
}

export const ProductsContext = createContext<ProductsContextType | undefined>(undefined)
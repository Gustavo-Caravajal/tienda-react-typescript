import { createContext, type Dispatch, type SetStateAction } from "react";
import type { ProductWithRelations } from "../../types/Product";

export type FilterContextType = {
    loading: boolean;
    selectedBrands: string[];
    setSelectedBrands: Dispatch<SetStateAction<string[]>>;
    price: number;
    setPrice: Dispatch<SetStateAction<number>>;
    visibleProducts: ProductWithRelations[];
    uniqueBrands: string[];
    minPrice: number;
    maxPrice: number;
}
export const FilterContext = createContext<FilterContextType | undefined>(undefined);
import { useContext } from "react"
import { FilterContext } from "./FilterContext";

export const useFilterContext = () => {
    const context = useContext(FilterContext);

    if(!context){
        throw new Error("useProductsContext must be used within ProductsProvider");
    }
    return context;
}
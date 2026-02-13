import { useEffect, useState, type ReactNode } from "react"
import { FilterContext, type FilterContextType } from "./FilterContext";
import { useProductsContext } from "../../context/ProductsContext/useProductsContext"
import { useParams } from 'react-router-dom'
import { max, min } from 'mathjs'
import type { Product } from "../../types/Product";



type FilterProviderProps = {
    children: ReactNode;
}

export const FilterProvider = ({ children }: FilterProviderProps) => {
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [price, setPrice] = useState<number>(0);
    const { products, loading } = useProductsContext();
    const { category } = useParams<{ category: string }>()
    let visibleProducts: Product[] = category
        ? products
            .filter(p => p.category.toLowerCase() === category.toLowerCase())

        : products;
    const brandArray: string[] = visibleProducts.map(product => product.brand);
    const uniqueBrands = brandArray.filter((brand, index) => brandArray.indexOf(brand) === index);
    const prices: number[] = visibleProducts.map(product => product.price);
    const minPrice = prices.length ? min(prices) : 0;
    const maxPrice = prices.length ? max(prices) : 0;

    visibleProducts = visibleProducts
        .filter(p => selectedBrands.length === 0 || selectedBrands.includes(p.brand))
        .filter(p => price == maxPrice || p.price < price)

    useEffect(() => {
        setSelectedBrands([]);
        setPrice(maxPrice);
    }, [maxPrice]);


    const values: FilterContextType = {
        loading,//
        selectedBrands,//
        setSelectedBrands,//
        price,//
        setPrice,//
        visibleProducts,//
        uniqueBrands,//
        minPrice,//
        maxPrice,//
    }

    return <FilterContext.Provider value={values}>
        {children}
    </FilterContext.Provider>
}
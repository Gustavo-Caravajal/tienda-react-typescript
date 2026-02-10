import './ItemListContainer.css'
import { ItemList } from "../ItemList/ItemList"
import { useProductsContext } from "../../context/ProductsContext/useProductsContext"
import { useParams } from 'react-router-dom'
import { max, min } from 'mathjs'
import { FilterSidebar } from '../FilterSidebar/FilterSidebar'
type ItemListContainerProps = {
    titulo: string
}

export const ItemListContainer = ({ titulo }: ItemListContainerProps) => {
    const { products, loading } = useProductsContext();
    const { category } = useParams<{ category: string }>()
    const visibleProducts = category
        ? products.filter(p => p.category.toLowerCase() === category.toLowerCase())
        : products;

    const brandArray: string[] = visibleProducts.map(product => product.brand);
    const uniqueBrands = brandArray.filter((brand, index) => brandArray.indexOf(brand) === index);
    const prices: number[] = visibleProducts.map(product => product.price);
    const minPrice = prices.length ? min(prices) : 0;
    const maxPrice = prices.length ? max(prices) : 0;


    return (
        <div className="item-list-container">
            <h1>{titulo}</h1>
            <div className='items'>
                {loading ? (
                    <p>Cargando productos</p>
                ) : (
                    visibleProducts.length ? (
                        <>{category?.trim() &&
                            <FilterSidebar brands={uniqueBrands} minPrice={minPrice} maxPrice={maxPrice} />
                        }
                            < ItemList list={visibleProducts} />
                        </>
                    ) : (
                        <p>No hay productos para esta categoria</p>
                    )
                )}
            </div>
        </div>
    )
}
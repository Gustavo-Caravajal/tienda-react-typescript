import './ItemListContainer.css'
import { ItemList } from "../ItemList/ItemList"
import { useProductsContext } from "../../context/ProductsContext/useProductsContext"
import { useParams } from 'react-router-dom'

type ItemListContainerProps = {
    titulo: string
}

export const ItemListContainer = ({ titulo }: ItemListContainerProps) => {
    const { products, loading } = useProductsContext();
    const { category } = useParams<{category: string}>()
    const visibleProducts = category
        ? products.filter(p => p.category.toLowerCase() === category.toLowerCase())
        : products;
    return (
        <div className="item-list-container">
            <h1>{titulo}</h1>
            <div className='items'>
                {loading ? (
                    <p>Cargando productos</p>
                ) : (
                    visibleProducts.length ? (
                        < ItemList list={visibleProducts} />
                    ) : (
                        <p>No hay productos para esta categoria</p>
                    )
                )}
            </div>
        </div>
    )
}
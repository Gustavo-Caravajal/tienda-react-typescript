import './ItemListContainer.css'
import { ItemList } from "../ItemList/ItemList"
import { useProductsContext } from "../../context/ProductsContext/useProductsContext"

type ItemListContainerProps = {
    titulo: string
}

export const ItemListContainer = ({ titulo }: ItemListContainerProps) => {
    const { products, loading } = useProductsContext();

    return (
        <div className="item-list-container">
            <h1>{titulo}</h1>
            <div className='items'>
            {loading ? (
                <p>Cargando productos</p>
            ) : (
                <ItemList list={products} />            
            )}
            </div>
        </div>
    )
}
import './ItemDetailContainer.css'
import { useProductsContext } from "../../context/ProductsContext/useProductsContext"
import { useParams } from 'react-router-dom';
import type { Product } from '../../types/Product';
import { ItemDetail } from '../ItemDetail/ItemDetail';



export const ItemDetailContainer = () => {
    const { products } = useProductsContext();
    const { id } = useParams<{ id: string }>();


    if (!products.length) {
        return (
            <main className='product-container'>
                <h2>Detalle del producto</h2>
                <p>Cargando...</p>
            </main>
        )
    }

    const detail: Product | undefined = products.find(product => product.id === id);

    if (!detail) {
        return (
            <main className='product-container'>
                <h2 className='titulo'>Detalle del producto</h2>
                <p>Producto no encontrado...</p>
            </main>
        )
    }

    return (
        <main className="product-container">
            <h2>Detalle del producto</h2>
            <ItemDetail detail={detail} />
        </main>
    )
}
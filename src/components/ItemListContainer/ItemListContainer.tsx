import './ItemListContainer.css'
import { ItemList } from "../ItemList/ItemList"
import { FilterSidebar } from '../FilterSidebar/FilterSidebar'
import { useParams } from 'react-router-dom'
import { useFilterContext } from '../../context/FilterContext/useFilterContext'

type ItemListContainerProps = {
    titulo: string
}

export const ItemListContainer = ({ titulo }: ItemListContainerProps) => {
    const { category } = useParams<{ category: string }>()
    const { loading, visibleProducts } = useFilterContext();


    return (
        <div className="item-list-container">
            <h1>{titulo}</h1>
            {loading ? (
                    <p className='mensaje'>Cargando productos</p>
                ) : (
                    !visibleProducts.length &&
                    <p className='mensaje'>No hay productos para esta categoria</p>

                )}
            <div className='products-layout'>
                {category?.trim() &&
                    <FilterSidebar />
                }
                <div className='items'>
                    {visibleProducts.length > 0 &&
                        < ItemList list={visibleProducts} />
                    }
                </div>
            </div>
        </div>
    )
}
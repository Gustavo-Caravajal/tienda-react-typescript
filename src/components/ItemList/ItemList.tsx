import type { Product } from "../../types/Product"
import { Item } from "../Item/Item"

type ItemListProps = {
    list: Product[]
}

export const ItemList = ({ list }: ItemListProps) => {

    return (<>
        {
            list.map(product => (
                <Item key={product.id} {...product} />
            ))
        }

    </>)
}
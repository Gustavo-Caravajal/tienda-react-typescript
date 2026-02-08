import type { Product } from "../../types/Product"
import { Button } from "../Button/Button"
import { Item } from "../Item/Item"

type ItemListProps = {
    list: Product[]
}

export const ItemList = ({ list }: ItemListProps) => {

    return (<>
        {
            list.map(product => (
                <Item key={product.id} {...product} children={<Button texto="Ver detalle"  color="rgb(247, 244, 205)"/>} />
            ))
        }

    </>)
}
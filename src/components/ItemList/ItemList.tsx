import type { ProductWithRelations } from "../../types/Product"
import { Button } from "../Button/Button"
import { Item } from "../Item/Item"

type ItemListProps = {
    list: ProductWithRelations[]
}

export const ItemList = ({ list }: ItemListProps) => {

    return (
        <>
            {list.map(product => (
                <Item 
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    brand={product.brand.name}
                    price={product.price}
                    description={product.description}
                    imageUrl={product.imageUrl}
                    children={<Button texto="Ver producto" color="rgb(247, 244, 205)" />} 
                />
            ))}
        </>
    )
}
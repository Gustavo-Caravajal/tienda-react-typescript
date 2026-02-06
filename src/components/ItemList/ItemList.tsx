import type { Product } from "../../types/Product"

type ItemListProps = {
    list: Product[]
}

export const ItemList = ({ list }: ItemListProps) => {

    return (
        <>
            {list.length ? (list.map(product => (
                
            )
            )) : (
                <p></p>
            )}
        </>
    )
}
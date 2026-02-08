import type { Product } from "../../types/Product"
import { Detail } from "../Detail/Detail";

type ItemDetailProps = {
    detail: Product;
}

export const ItemDetail = ({ detail }: ItemDetailProps) => {

    return <Detail
        key={detail.id}
        name={detail.name}
        brand={detail.brand}
        category={detail.category}
        price={detail.price}
        description={detail.description}
        imageUrl={detail.imageUrl}
    />
}
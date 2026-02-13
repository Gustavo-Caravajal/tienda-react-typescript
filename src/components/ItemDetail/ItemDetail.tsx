import { useCartContext } from "../../context/CartContext/useCartContext";
import type { Product } from "../../types/Product"
import { Count } from "../Count/Count";
import { Detail } from "../Detail/Detail";

type ItemDetailProps = {
    detail: Product;
}

export const ItemDetail = ({ detail }: ItemDetailProps) => {
    const { addItem } = useCartContext();

    const handleAdd = (quantity: number) => {
        addItem({...detail, quantity})
    }

    return <Detail
        key={detail.id}
        name={detail.name}
        brand={detail.brand}
        category={detail.category}
        price={detail.price}
        description={detail.description}
        imageUrl={detail.imageUrl}
        children={<Count btnText="Agregar al carrito" onConfirm={handleAdd}/>}
    />
}
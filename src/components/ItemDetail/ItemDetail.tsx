import { useCartContext } from "../../context/CartContext/useCartContext";
import type { ProductWithRelations } from "../../types/Product"
import { Count } from "../Count/Count";
import { Detail } from "../Detail/Detail";

type ItemDetailProps = {
    detail: ProductWithRelations;
}

export const ItemDetail = ({ detail }: ItemDetailProps) => {
    const { addItem } = useCartContext();

    const handleAdd = (quantity: number) => {
        addItem({...detail, quantity})
    }

    return <Detail
        key={detail.id}
        name={detail.name}
        brand={detail.brand.name}
        category={detail.category.name}
        price={detail.price}
        description={detail.description}
        imageUrl={detail.imageUrl}
        children={<Count btnText="Agregar al carrito" onConfirm={handleAdd}/>}
    />
}
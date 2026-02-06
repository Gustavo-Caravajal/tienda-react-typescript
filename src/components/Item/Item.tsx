import './Item.css'
import type { ReactNode } from 'react';

type itemProps = {
    name: string;
    brand: string;
    price: number;
    description: string;
    imageUrl: string;
    children?: ReactNode;
}

export const Item = ({ name, brand, price, description, imageUrl, children }: itemProps) => {

    return (
        <article className='product-card'>
            <img className='product-image' src={imageUrl} alt={description} />
            <h3>{`${brand} ${name}`}</h3>
            <p className='price'>{`$${price}`}</p>
        </article>
    )
}
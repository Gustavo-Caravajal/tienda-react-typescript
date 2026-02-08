import { Link } from 'react-router-dom';
import './Item.css'
import type { ReactNode } from 'react';

type itemProps = {
    id: string;
    name: string;
    brand: string;
    category: string;
    price: number;
    description: string;
    imageUrl: string;
    children?: ReactNode;
}

export const Item = ({ id, name, brand, category, price, description, imageUrl, children }: itemProps) => {

    return (
        <article className='product-card'>
            <img className='product-image' src={imageUrl} alt={description} draggable={false} />
            <h3>{`${brand} ${name}`}</h3>
            <p className='price'>{`$${price}`}</p>
            <Link to={`/${category.toLowerCase()}/detail/${id}`}>
                {children}
            </Link>
        </article>
    )
}
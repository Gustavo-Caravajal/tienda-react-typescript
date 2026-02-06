import type { ReactNode } from 'react';

type itemProps = {
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    children?: ReactNode;
}

export const Item = ({ name, price, description, imageUrl, children }: itemProps) => {

    return (
        <article>
            <img src={imageUrl} alt={name} />
            <h3>{name}</h3>
            <p>{price}</p>
        </article>
    )
}
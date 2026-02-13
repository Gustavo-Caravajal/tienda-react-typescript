import type { ReactNode } from 'react';
import './Detail.css'

type DetailProps = {
    name: string;
    brand: string;
    category: string;
    price: number;
    description: string;
    imageUrl: string;
    children: ReactNode;
}

export const Detail = ({ name, brand, category, price, description, imageUrl, children }: DetailProps) => {

    return (
        <article className="detail-card">
            <img className="detail-image" src={imageUrl} alt={description} />
            <div className="detail-data">
                {category === "accessory" ? (
                    <h2 className="title">{category} {brand} {name}</h2>
                ) : (
                    <h2 className="title">{brand} {name}</h2>
                )
                }
                <h2 className="detail-price">${price}</h2>
                <p className='detail-description'>Descripcion: {description}</p>
                {children}
            </div>
        </article>
    )
}
import './Detail.css'

type DetailProps = {
    name: string;
    brand: string;
    category: string;
    price: number;
    description: string;
    imageUrl: string
}

export const Detail = ({name, brand, category, price, description, imageUrl}: DetailProps) => {
                        
    return (
        <article className="detail-card">
            <img className="detail-image" src={imageUrl} alt={description} />
            <div className="detail-data">
                <h2 className="title">{category} {brand} {name}</h2>
                <h2 className="detail-price">${price}</h2>
                <p className='detail-description'>Descripcion: {description}</p>
            </div>
        </article>
    )
}
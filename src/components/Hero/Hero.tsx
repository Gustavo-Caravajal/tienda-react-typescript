import { useState } from "react";
import type { ProductWithRelations } from "../../types/Product"
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import './Hero.css'
type HeroProps = {
    list: ProductWithRelations[];
}

export const Hero = ({ list }: HeroProps) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {list.map((item) => (

                <Carousel.Item key={item.id}>
                    <div className="carousel-center">
                        <Link to={`/detail/${item.id}`}>
                            <img className="carousel-img" src={item.image_url} alt={item.description} />
                        </Link>
                    </div>
                </Carousel.Item>

            ))}
        </Carousel>
    );
}

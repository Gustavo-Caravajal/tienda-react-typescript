import './FilterSidebar.css'
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';

type FilterSidebarProps = {
    brands: string[];
    minPrice: number;
    maxPrice: number;
}

export const FilterSidebar = ({ brands, minPrice, maxPrice }: FilterSidebarProps) => {
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [price, setPrice] = useState<number>(maxPrice);

    const handleCheckboxChange = (brand: string, checked: boolean) => {
        if (checked) {
            setSelectedBrands([...selectedBrands, brand]);
        } else {
            setSelectedBrands(selectedBrands.filter(b => b !== brand));
        }
    }

    const handleRange = (value: number) => setPrice(value);

    useEffect(() => {
        setSelectedBrands([]);
        setPrice(maxPrice);
    }, [brands, maxPrice]);

    return (
        <div className='filter-container'>
            <h3>Filtros</h3>
            <Form className='filter-form'>
                <Form.Label>Precio: ${price}</Form.Label>
                <Form.Range
                    min={minPrice}
                    max={maxPrice}
                    value={price}
                    onChange={(e) => handleRange(Number(e.target.value))}
                />
                {brands.map((brand) => (
                    <Form.Check
                        key={brand}
                        type="checkbox"
                        label={`${brand}`}
                        id={`checkbox-${brand}`}
                        value={brand}
                        checked={selectedBrands.includes(brand)}
                        onChange={(e) => handleCheckboxChange(brand, e.target.checked)}
                    />
                ))}
            </Form>
        </div>
    )
}
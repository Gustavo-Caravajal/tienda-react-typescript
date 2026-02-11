import './FilterSidebar.css'
import Form from 'react-bootstrap/Form';
import { useFilterContext } from '../../context/FilterContext/useFilterContext';


export const FilterSidebar = () => {
    const { selectedBrands, setSelectedBrands, price, setPrice, uniqueBrands, minPrice,  maxPrice } = useFilterContext();
    
    const handleCheckboxChange = (brand: string, checked: boolean) => {
        if (checked) {
            setSelectedBrands([...selectedBrands, brand]);
        } else {
            setSelectedBrands(selectedBrands.filter(b => b !== brand));
        }
    }

    const handleRange = (value: number) => setPrice(value);

   
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
                {uniqueBrands.map((brand) => (
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
import type { Brand } from '../../../types/Brand';
import type { Category } from '../../../types/Category';
import type { CreateProduct } from '../../../types/Product';
import './FormFields.css'


type ProductFormFieldsProps = {
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    product: CreateProduct;
    brands: Brand[];
    categories: Category[];
}

export const ProductFormFields = ({ handleChange, handleFileChange, product, brands, categories }: ProductFormFieldsProps) => {

    return <>
        <label>NOMBRE</label>
        <input
            onChange={handleChange}
            name='name'
            value={product.name}
            className='input'
            type="text"
            required
            placeholder='Nombre del producto' />
        <div className='input-container'>
            <div className='select'>
                <label>MARCA</label>
                <select
                    onChange={handleChange}
                    name="brand_id"
                    value={product.brand_id ?? ""}
                    required
                >
                    <option value="">Seleccionar</option>
                    {brands.map(brand => (
                        <option key={brand.id} value={brand.id} >
                            {brand.name}
                        </option>
                    ))
                    }
                </select>
            </div>
            <div className='select'>
                <label>CATEGORIA</label>
                <select
                    onChange={handleChange}
                    name="category_id"
                    value={product.category_id ?? ""}
                    required>
                    <option value="">Seleccionar</option>
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>))
                    }
                </select>
            </div>
        </div >
        <div className='input-container'>
            <div className='select'>
                <label>PRECIO ($)</label>
                <input
                    onChange={handleChange}
                    name='price'
                    value={product.price ?? ""}
                    className='input-number'
                    type="number"
                    required
                    placeholder='0'
                    min={0} />
            </div>
            <div className='select'>
                <label>STOCK</label>
                <input
                    onChange={handleChange}
                    name='stock'
                    value={product.stock ?? ""}
                    className='input-number'
                    type="number"
                    required
                    placeholder='0'
                    min={0} />
            </div>
        </div>
        <label >DESCRIPCION</label>
        <textarea 
            onChange={handleChange} 
            name='description' 
            value={product.description} 
            className='description' 
            required
            placeholder='Descripcion del producto'></textarea>
        <label>IMAGEN</label>
        <input onChange={handleFileChange} className='input-file' type="file" accept="image/*" />
    </>
}
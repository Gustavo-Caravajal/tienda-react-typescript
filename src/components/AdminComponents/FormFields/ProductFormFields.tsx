import type { Brand } from '../../../types/Brand';
import type { Category } from '../../../types/Category';
import type { CreateProduct, ProductErrors } from '../../../types/Product';
import './FormFields.css'


type ProductFormFieldsProps = {
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    product: CreateProduct;
    brands: Brand[];
    categories: Category[];
    errors: ProductErrors;
}

export const ProductFormFields = ({ handleChange, handleFileChange, product, brands, categories, errors }: ProductFormFieldsProps) => {

    return <>
        <label className='lbl'>NOMBRE</label>
        <input
            onChange={handleChange}
            name='name'
            value={product.name}
            className='input'
            type="text"
            placeholder='Nombre del producto'
        />
        {errors.name && <p className='error'>{errors.name}</p>}
        <div className='input-container'>
            <div className='select'>
                <label className='lbl'>MARCA</label>
                <select
                    className='slct'
                    onChange={handleChange}
                    name="brand_id"
                    value={product.brand_id ?? ""}
                >
                    <option value="">Seleccionar</option>
                    {brands.map(brand => (
                        <option key={brand.id} value={brand.id} >
                            {brand.name}
                        </option>
                    ))
                    }
                </select>
                {errors.brand && <p className='error'>{errors.brand}</p>}
            </div>
            <div className='select'>
                <label className='lbl'>CATEGORIA</label>
                <select
                    className='slct'
                    onChange={handleChange}
                    name="category_id"
                    value={product.category_id ?? ""}
                >
                    <option value="">Seleccionar</option>
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>))
                    }
                </select>
                {errors.category && <p className='error'>{errors.category}</p>}
            </div>
        </div >
        <div className='input-container'>
            <div className='select'>
                <label className='lbl'>PRECIO ($)</label>
                <input
                    onChange={handleChange}
                    name='price'
                    value={product.price ?? ""}
                    className='input-number'
                    type="number"
                    placeholder='0'
                    min={0}
                />
                {errors.price && <p className='error'>{errors.price}</p>}
            </div>
            <div className='select'>
                <label className='lbl'>STOCK</label>
                <input
                    onChange={handleChange}
                    name='stock'
                    value={product.stock ?? ""}
                    className='input-number'
                    type="number"
                    placeholder='0'
                    min={0}
                />
                {errors.stock && <p className='error'>{errors.stock}</p>}
            </div>
        </div>
        <label className='lbl' >DESCRIPCION</label>
        <textarea
            onChange={handleChange}
            name='description'
            value={product.description}
            className='description'
            placeholder='Descripcion del producto'></textarea>
        {errors.description && <p className='error'>{errors.description}</p>}
        <label className='lbl'>IMAGEN</label>
        <input onChange={handleFileChange} className='input-file' type="file" accept="image/*" />
        {errors.file && <p className='error'>{errors.file}</p>}
    </>
}
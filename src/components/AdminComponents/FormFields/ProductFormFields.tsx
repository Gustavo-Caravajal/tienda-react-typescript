import './FormFields.css'

export const ProductFormFields = () => {

    return <>
        <label>NOMBRE</label>
        <input className='input' type="text" placeholder='Nombre del producto' />
        <div className='input-container'>
            <div className='select'>
                <label>MARCA</label>
                <select name="" id="">
                    <option value="">Samsung</option>
                </select>
            </div>
            <div className='select'>
                <label>CATEGORIA</label>
                <select name="" id="">
                    <option value="">Smartphone</option>
                </select>
            </div>
        </div>
        <div className='input-container'>
            <div className='select'>
                <label>PRECIO ($)</label>
                <input className='input-number' type="number" placeholder='0' />
            </div>
            <div className='select'>
                <label>STOCK</label>
                <input className='input-number' type="number" placeholder='0' />
            </div>
        </div>
        <label >DESCRIPCION</label>
        <textarea className='description' name="" id="" placeholder='Descripcion del producto'></textarea>
        <label>IMAGEN</label>
        <input className='input-file' type="file" accept="image/*" />
    </>
}
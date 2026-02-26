import './FormFields.css'

type CategoryFormFieldsProps = {
    handleChange: (e:React.ChangeEvent<HTMLInputElement>) => void
}

export const CategoryFormFields = ({handleChange}:CategoryFormFieldsProps) => {

    return <>
        <label>NOMBRE DE LA CATEGORIA</label>
        <input name='name' onChange={handleChange} className='input' type="text" placeholder={"Ej: Smartphone, Tablet"} />
    </>
}
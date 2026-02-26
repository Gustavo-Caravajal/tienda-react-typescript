import './FormFields.css'

type CategoryFormFieldsProps = {
    handleChange: (e:React.ChangeEvent<HTMLInputElement>) => void
    value: string;
}

export const CategoryFormFields = ({handleChange, value}:CategoryFormFieldsProps) => {

    return <>
        <label>NOMBRE DE LA CATEGORIA</label>
        <input name='name' value={value} onChange={handleChange} className='input' type="text" placeholder={"Ej: Smartphone, Tablet"} />
    </>
}
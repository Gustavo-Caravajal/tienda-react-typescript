import type { CategoryErrors } from '../../../types/Category';
import './FormFields.css'

type CategoryFormFieldsProps = {
    handleChange: (e:React.ChangeEvent<HTMLInputElement>) => void
    value: string;
    errors: CategoryErrors;
}

export const CategoryFormFields = ({handleChange, value, errors}:CategoryFormFieldsProps) => {

    return <>
        <label>NOMBRE DE LA CATEGORIA</label>
        <input name='name' value={value} onChange={handleChange} className='input' type="text" placeholder={"Ej: Smartphone, Tablet"} />
        {errors.name && <p className='error'>{errors.name}</p>}
    </>
}
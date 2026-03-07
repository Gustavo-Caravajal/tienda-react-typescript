import type React from 'react'
import './FormFields.css'
import type { BrandErrors } from '../../../types/Brand';

type BrandFormFieldsProps = {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    errors: BrandErrors;
}

export const BrandFormFields = ({ handleChange, value, errors }: BrandFormFieldsProps) => {

    return <>
        <label className='lbl'>NOMBRE</label>
        <input onChange={handleChange} name='name' value={value} className='input' type="text" placeholder={"Ej: Samsung, Apple"} />
        {errors.name && <p className='error'>{errors.name}</p>}
    </>
}
import type React from 'react'
import './FormFields.css'

type BrandFormFieldsProps = {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

export const BrandFormFields = ({handleChange, value}:BrandFormFieldsProps) => {

    return <>
        <label>NOMBRE DE LA MARCA</label>
        <input onChange={handleChange} name='name' value={value} className='input' type="text" placeholder={"Ej: Samsung, Apple"} />
    </>
}
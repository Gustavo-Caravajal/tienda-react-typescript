import React, { useEffect, useState, type SyntheticEvent } from 'react';
import '../../AdminComponents/ManagerLayout.css'
import { BrandFormFields } from '../FormFields/BrandFormFields';
import { ModalForm } from '../ModalForm/ModalForm';
import type { Brand, BrandErrors, CreateBrand } from '../../../types/Brand';
import { createBrand, deleteBrand, getBrands, updateBrandById } from '../../../services/brands';
import { validateBrands } from '../../../utils/validateBrands';

export const BrandManager = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [brands, setBrands] = useState<Brand[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [newBrand, setNewBrand] = useState<CreateBrand>({ name: "" });
    const [editingId, setEditingId] = useState<number | null>(null);
    const [errors, setErrors] = useState<BrandErrors>({ name: "" });
    //const toggleModal = (): void => {
    //    console.log("boton clickeado");
    //    setIsModalOpen(!isModalOpen);
    //}

    const openModal = (): void => {
        setIsModalOpen(true);
    }

    const closeModal = (): void => {
        setIsModalOpen(false);
        setEditingId(null);
        setNewBrand({ name: "" });
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setNewBrand((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setErrors({ name: "" });
        const newErrors: BrandErrors = validateBrands(newBrand);
        const hasErrors = Object.values(newErrors).some(error => error !== "")
        if (hasErrors) {
            setErrors(newErrors);
            setLoading(false);
            return;
        }
        try {
            if (editingId !== null) {
                await updateBrandById(editingId, newBrand.name);
            } else {
                await createBrand(newBrand);

            }
            const data = await getBrands();
            setBrands(data);
            setErrors({ name: "" });
            setNewBrand({ name: "" });
            setEditingId(null);
            setIsModalOpen(false);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    const deleteBrandById = async (id: number): Promise<void> => {
        try {
            await deleteBrand(id);
            const data = await getBrands();
            setBrands(data);
            setIsModalOpen(false);
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const data = await getBrands();
                setBrands(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchBrands();
    }, [])




    return (
        <section className="manager-container">
            <ModalForm
                isOpen={isModalOpen}
                closeModal={() => closeModal()}
                action={editingId !== null ? "Editar" : "Añadir"} entity="marca"
                handleSubmit={handleSubmit}
                children={<BrandFormFields handleChange={handleChange} value={newBrand.name} errors={errors} />}
            />
            <div className='page'>
                <div className='page-header'>
                    <h4 className='page-header-title'>Marcas</h4>
                    <button onClick={() => {
                        openModal();
                        setEditingId(null);
                        setErrors({ name: "" });
                    }} className='add-btn'>
                        + Añadir marca
                    </button>
                </div>
                <div className='page-body'>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>MARCA</th>
                                <th>ACCIONES</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan={3}>Cargando...</td>
                                </tr>
                            ) : brands.length === 0 ? (
                                <tr>
                                    <td colSpan={3}>No hay marcas</td>
                                </tr>
                            ) : (
                                <>
                                    {brands.map((brand) => (
                                        <tr key={brand.id}>
                                            <td>
                                                #{brand.id}
                                            </td>
                                            <td>
                                                {brand.name}
                                            </td>
                                            <td className='actions'>
                                                <div className='div-actions'>
                                                    <button
                                                        onClick={() => {
                                                            setEditingId(brand.id);
                                                            setNewBrand({ name: brand.name });
                                                            openModal();
                                                        }}
                                                        className='action-btn'>
                                                        Editar
                                                    </button>
                                                    <button
                                                        onClick={() => deleteBrandById(brand.id)}
                                                        className='action-btn delete'>
                                                        Eliminar
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
import React, { useEffect, useState, type SyntheticEvent } from 'react';
import '../../AdminComponents/ManagerLayout.css'
import { CategoryFormFields } from '../FormFields/CategoryFormFields';
import { ModalForm } from '../ModalForm/ModalForm';
import type { Category, CreateCategory } from '../../../types/Category';
import { createCategory, getCategories } from '../../../services/categories';


export const CategoryManager = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [newCategory, setNewCategory] = useState<CreateCategory>({ name: "" });

    const toggleModal = (): void => {
        console.log("boton clickeado");
        setIsModalOpen(!isModalOpen);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target
        setNewCategory((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        try {
            await createCategory(newCategory);
            const data = await getCategories();
            setCategories(data);
            setNewCategory({ name: "" });
            setIsModalOpen(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const fetchCategories = async (): Promise<void> => {
            try {
                const data = await getCategories();
                setCategories(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchCategories()
    }, []);


    return (
        <section className="manager-container">
            <ModalForm
                isOpen={isModalOpen}
                closeModal={() => toggleModal()}
                action={"Añadir"}
                entity="categoria"
                handleSubmit={handleSubmit}
                children={<CategoryFormFields handleChange={handleChange} />} />
            <div className='page'>
                <div className='page-header'>
                    <h2>Categorias</h2>
                    <button onClick={toggleModal} className='add-btn'>
                        + Añadir categoria
                    </button>
                </div>
                <div className='page-body'>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>CATEGORIA</th>
                                <th>ACCIONES</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan={3}>Cargando...</td>
                                </tr>
                            ) : categories.length === 0 ? (
                                <tr>
                                    <td colSpan={3}>No hay productos</td>
                                </tr>
                            ) : (<>
                                {categories.map((category) => (
                                    <tr key={category.id}>
                                        <td>
                                            #{category.id}
                                        </td>
                                        <td>
                                            {category.name}
                                        </td>
                                        <td className='actions'>
                                            <div className='div-actions'>
                                                <button onClick={toggleModal} className='action-btn'>
                                                    Editar
                                                </button>
                                                <button className='action-btn delete'>
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
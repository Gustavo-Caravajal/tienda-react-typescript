import { useState } from 'react';
import '../../AdminComponents/ManagerLayout.css'
import { CategoryFormFields } from '../FormFields/CategoryFormFields';
import { ModalForm } from '../ModalForm/ModalForm';

export const CategoryManager = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const toggleModal = (): void => {
        console.log("boton clickeado");
        setIsModalOpen(!isModalOpen);
    }

    return (
        <section className="manager-container">
            <ModalForm isOpen={isModalOpen} closeModal={() => toggleModal()} action={"Añadir"} entity="categoria"children={<CategoryFormFields />} />
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
                            <tr>
                                <td>
                                    #1
                                </td>
                                <td>
                                    Smartphone
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
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
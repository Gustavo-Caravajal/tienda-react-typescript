import { useState } from 'react';
import '../../AdminComponents/ManagerLayout.css'
import { BrandFormFields } from '../FormFields/BrandFormFields';
import { ModalForm } from '../ModalForm/ModalForm';

export const BrandManager = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const toggleModal = (): void => {
        console.log("boton clickeado");
        setIsModalOpen(!isModalOpen);
    }


    return (
        <section className="manager-container">
            <ModalForm isOpen={isModalOpen} closeModal={() => toggleModal()} action={"Añadir"} entity="marca" children={<BrandFormFields />} />
            <div className='page'>
                <div className='page-header'>
                    <h2>Marcas</h2>
                    <button onClick={toggleModal} className='add-btn'>
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
                            <tr>
                                <td>
                                    #1
                                </td>
                                <td>
                                    Samsung
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
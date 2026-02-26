import type { ReactNode, SyntheticEvent } from 'react';
import './ModalForm.css'


type ModalFormProps = {
    isOpen: boolean;
    closeModal: () => void;
    action: string;
    entity: string;
    handleSubmit?: (e: SyntheticEvent<HTMLFormElement>) => Promise<void>;
    children: ReactNode;
}

export const ModalForm = ({ isOpen, closeModal, action, entity , handleSubmit, children }: ModalFormProps) => {

    if (!isOpen) {
        return null;
    }

    return (
        <div className='modal-overlay'>
            <div className="modal">
                <div className="modal-header">
                    <h6>{action} {entity}</h6>
                    <button className='close-btn' onClick={closeModal}>×</button>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmit} className='form'>
                        {children}
                        <div className='action-buttons'>
                            <button
                                type='button'
                                onClick={closeModal}
                                className='admin-action-btn'
                                style={{
                                    color: "black",
                                    backgroundColor: "white",
                                    border: "1px solid gray"
                                }}
                            >
                                Cancelar
                            </button>
                            <button
                                type='submit'
                                className='admin-action-btn'
                            >
                                Guardar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
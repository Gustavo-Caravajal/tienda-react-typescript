import './ModalForm.css'

type ModalFormProps = {
    isOpen: boolean;
    closeModal: () => void;
    title: string;
}

export const ModalForm = ({ isOpen, closeModal, title }: ModalFormProps) => {

    if (!isOpen) {
        return null;
    }

    return (
        <div className='modal-overlay'>
            <div className="modal">
                <div className="modal-header">
                    <h6>{title}</h6>
                    <button className='close-btn' onClick={closeModal}>×</button>
                </div>
                <div className="modal-body">
                    <form className='form'>
                        <label>NOMBRE</label>
                        <input className='input' type="text" placeholder='Nombre del producto' />
                        <div className='input-container'>
                            <div className='select'>
                                <label>MARCA</label>
                                <select name="" id="">
                                    <option value="">Samsung</option>
                                </select>
                            </div>
                            <div className='select'>
                                <label>CATEGORIA</label>
                                <select name="" id="">
                                    <option value="">Smartphone</option>
                                </select>
                            </div>
                        </div>
                        <div className='input-container'>
                            <div className='select'>
                                <label>PRECIO ($)</label>
                                <input className='input-number' type="number" placeholder='0' />
                            </div>
                            <div className='select'>
                                <label>STOCK</label>
                                <input className='input-number' type="number" placeholder='0' />
                            </div>
                        </div>
                        <label >DESCRIPCION</label>
                        <textarea className='description' name="" id="" placeholder='Descripcion del producto'></textarea>
                        <label>IMAGEN</label>
                        <input className='input-file' type="file" accept="image/*" />
                    </form>
                    <div className='action-buttons'>
                        <button type='button' onClick={closeModal} className='admin-action-btn' style={{ color: "black", backgroundColor: "white", border: "1px solid gray" }}>Cancelar</button>
                        <button type='button'className='admin-action-btn'>Guardar producto</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
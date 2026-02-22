import '../../AdminComponents/ManagerLayout.css'




export const CategoryManager = () => {
    return (
        <section className="manager-container">
            <div className='page'>
                <div className='page-header'>
                    <h2>Categorias</h2>
                    <button className='add-btn'>
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
                                        <button className='action-btn'>
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
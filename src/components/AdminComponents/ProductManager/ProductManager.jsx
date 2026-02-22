import '../../AdminComponents/ManagerLayout.css'
import './ProductManager.css'

export const ProductManager = () => {
    return (
        <section className="manager-container">
            <div className='page'>
                <div className='page-header'>
                    <h2>Productos</h2>
                    <button className='add-btn'>
                        + Añadir producto
                    </button>
                </div>
                <div className='page-body'>
                    <table>
                        <thead>
                            <tr>
                                <th>PRODUCTO</th>
                                <th>MARCA</th>
                                <th>CATEGORIA</th>
                                <th>PRECIO</th>
                                <th>STOCK</th>
                                <th>ACCIONES</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className='product'>
                                        <img className='product-img' src="/images/iphone-15-pro.png" alt="descripcion" />
                                        <div className='product-info'>
                                            <p>Apple iPhone 15 Pro</p>
                                            <p>ID #1</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Apple
                                </td>
                                <td>
                                    Smartphone
                                </td>
                                <td>
                                    $160.000
                                </td>
                                <td>
                                    14 uds
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
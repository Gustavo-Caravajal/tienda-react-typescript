import './Cart.css'
import { useCartContext } from "../../context/CartContext/useCartContext"

export const Cart = () => {
    const { cart, deleteItem, totalItemPrice, clearCart, total, checkout } = useCartContext();

    return (
        <section className="cart-section">
            <h2>Carrito de compras</h2>
            <div className="product-cart-container">
                {cart.length ? (<>
                    <div className="title-container">
                        <p className='product'>Producto</p>
                        <p className='quantity-text'>Cantidad</p>
                        <p className='total-text'>Total</p>
                    </div>
                    {cart.map((item => (
                        <div className="cart-item">
                            <div className='product'>
                                <img
                                    className="product-img"
                                    src={item.imageUrl}
                                    alt={item.name}
                                />
                                <div className="product-info">
                                    <h4 className='product-text'>{item.brand} {item.name}</h4>
                                    <p className='product-text'>${item.price}</p>
                                </div>
                            </div>
                            <p className='quantity-text'>x{item.quantity}</p>
                            <p className='total-text'>${totalItemPrice(item)}</p>
                            <img
                                className="delete-icon"
                                src="../../../public/icons/eliminar.png"
                                alt="Eliminar producto"
                                onClick={() => { deleteItem(item.id) }}
                            />
                        </div>
                    )))}
                </>) : (
                    <p>Tu carrito esta vacio</p>
                )}
            </div>
            {cart.length > 0 && (<div className='cart-summary '>
                <p>Total a pagar: ${total()}</p>
                <div className='buy-buttons'>
                    <button onClick={() => { clearCart() }} className='cart-btn'>Vaciar carrito</button>
                    <button onClick={() => { checkout() }} className='cart-btn'>Finalizar compra</button>
                </div>
            </div>)}
        </section >
    )
}
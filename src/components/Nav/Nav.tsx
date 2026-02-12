import { Link } from 'react-router-dom'
import './Nav.css'
import { useCartContext } from '../../context/CartContext/useCartContext'

export const Nav = () => {
    const { getTotalItems } = useCartContext();

    return (
        <nav>
            <ul className="nav-items">
                <li className='nav-item'>
                    <Link className='link' to={"/"}>Inicio</Link>
                </li>
                <li className='nav-item'>
                    <Link className='link-cart' to={"/"}>
                        <img className='cart' src="/icons/carrito-de-compras.png" alt="Carrito de compras" />
                    </Link>
                    {(getTotalItems()) &&
                        <span>{getTotalItems()}</span>
                    }
                </li>

            </ul>
        </nav>
    )
}
import { Link } from 'react-router-dom'
import './Nav.css'
import { useCartContext } from '../../context/CartContext/useCartContext'

type navProps = {
    show: boolean;
    toggleMenu: () => void;
}

export const Nav = ({show, toggleMenu}: navProps) => {
    const { getTotalItems } = useCartContext();

    return (
        <nav>
            <ul className={`nav-items ${show ? "open" : ""}`}>
                <li className='nav-item menu-item second' onClick={() => toggleMenu()}>
                    <Link className='link' to={"/"}>Inicio</Link>
                </li>
                <li className='nav-item menu-item first' onClick={() => toggleMenu()}>
                    <Link className='link-cart' to={"/carrito"}>
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
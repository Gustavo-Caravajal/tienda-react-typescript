import { Link } from 'react-router-dom'
import './Nav.css'

export const Nav = () => {
    return (
        <nav>
            <ul className="nav-items">
                <li className='nav-item'><Link className='link' to={"/"}>Inicio</Link></li>
                <li className='nav-item'><Link className='link-cart' to={"/"}><img className='cart' src="/icons/carrito-de-compras.png" alt="Carrito de compras" /></Link></li>                
            </ul>
        </nav>
    )
}
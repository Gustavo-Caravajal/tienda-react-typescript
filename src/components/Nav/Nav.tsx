import './Nav.css'

export const Nav = () => {
    return (
        <nav>
            <ul className="nav-items">
                <li className='nav-item'><a className='link' href="">Inicio</a></li>
                <li className='nav-item'><a className='link-cart' href=""><img className='cart' src="/icons/carrito-de-compras.png" alt="Carrito de compras" /></a></li>                
            </ul>
        </nav>
    )
}
import './Header.css'
import { Nav } from "../Nav/Nav"
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header>
            <div className='main-header'>
                <img className='logo' src="/images/logo.png" alt="logo" draggable={false} />
                <Nav />
            </div>
            <div className='categories'>
                <ul className='category-list'>
                    <li className='category-item'><Link className='category-link' to={`/category/smartphone`}>Smartphones</Link></li>
                    <li className='category-item'><Link className='category-link' to={`/category/tablet`}>Tablets</Link></li>
                    <li className='category-item'><Link className='category-link' to={`/category/notebook`}>Notebooks</Link></li>
                    <li className='category-item'><Link className='category-link' to={`/category/accessory`}>Accesorios</Link></li>
                </ul>
            </div>
        </header>
    )
}

import './Header.css'
import { Nav } from "../Nav/Nav"
import { Link } from 'react-router-dom'
import { useState } from 'react';

export const Header = () => {
    const [show, setShow] = useState<boolean>(false);
    const toggleMenu = () => {
        setShow(!show);
    }
    return (
        <header className={`${show ? "header" : "header closed"}`}>
            <div className='main-header'>
                <img className='logo' src="/images/logo.png" alt="logo" draggable={false} onClick={() => toggleMenu()} />
                <div className='menu'>
                    <button className='hamburger-btn' onClick={() => toggleMenu()}>☰</button>
                    <Nav show={show} toggleMenu={toggleMenu} />
                </div>
            </div>
            <div className={`categories`}>
                <ul className={`category-list ${show ? "open" : ""}`}>
                    <li className='category-item menu-item' onClick={() => toggleMenu()}><Link className='category-link' to={`/category/smartphone`}>Smartphones</Link></li>
                    <li className='category-item menu-item' onClick={() => toggleMenu()}><Link className='category-link' to={`/category/tablet`}>Tablets</Link></li>
                    <li className='category-item menu-item' onClick={() => toggleMenu()}><Link className='category-link' to={`/category/notebook`}>Notebooks</Link></li>
                    <li className='category-item menu-item' onClick={() => toggleMenu()}><Link className='category-link' to={`/category/accessory`}>Accesorios</Link></li>
                </ul>
            </div>
        </header>
    )
}

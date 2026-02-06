import './Header.css'
import { Nav } from "../Nav/Nav"

export const Header = () => {
    return (
        <header>
            <img className='logo' src="/images/logo.png" alt="logo" />
            <Nav />
        </header>
    )
}

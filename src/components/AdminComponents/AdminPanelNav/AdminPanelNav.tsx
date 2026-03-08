import { NavLink } from 'react-router-dom'
import './AdminPanelNav.css'

type AdminPanelNavProps = {
    handleLogout: () => Promise<void>;
}

export const AdminPanelNav = ({ handleLogout }: AdminPanelNavProps) => {
    return (
        <>
            <nav className="admin-panel-nav">
                <img className='logo' src="/images/logo.png" alt="logo" draggable={false} />
                <div className='nav-info'>
                    <h4 className='nav-title'>Panel de administración</h4>
                    <span className='user-type'>ADMIN</span>
                    <button className='logout' onClick={handleLogout}>Logout</button>
                </div>
            </nav>
            <div className='admin-panel-options'>
                <NavLink
                    to="/admin/panel/products"
                    className={({ isActive }) => `admin-panel-option ${isActive ? "active" : ""}`}
                >
                    Productos
                </NavLink>

                <NavLink
                    to="/admin/panel/brands"
                    className={({ isActive }) => `admin-panel-option ${isActive ? "active" : ""}`}
                >
                    Marcas
                </NavLink>

                <NavLink
                    to="/admin/panel/categories"
                    className={({ isActive }) => `admin-panel-option ${isActive ? "active" : ""}`}
                >
                    Categorías
                </NavLink>
            </div>

        </>
    )

}
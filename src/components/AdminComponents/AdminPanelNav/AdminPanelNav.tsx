import { useState } from 'react'
import './AdminPanelNav.css'
import { ProductManager } from '../ProductManager/ProductManager'
import { BrandManager } from '../BrandManager/BrandManager'
import { CategoryManager } from '../CategoryManager/CategoryManager'
import { useAuthContext } from '../../../context/AuthContext/useAuthContext'
import { useNavigate } from 'react-router-dom'

type Options = {
    option: "product" | "brand" | "category"
}

export const AdminPanelNav = () => {
    const [option, setOption] = useState<Options>({ option: "product" });
    const { logout } = useAuthContext();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate("/admin");
    }
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
                <button onClick={() => { setOption({ option: "product" }) }} className={`${!(option.option === "product") ? "admin-panel-option" : "admin-panel-option active"}`}>Productos</button>
                <button onClick={() => { setOption({ option: "brand" }) }} className={`${!(option.option === "brand") ? "admin-panel-option" : "admin-panel-option active"}`}>Marcas</button>
                <button onClick={() => { setOption({ option: "category" }) }} className={`${!(option.option === "category") ? "admin-panel-option" : "admin-panel-option active"}`}>Categorias</button>
            </div>
            {option.option === "product" && <ProductManager />}
            {option.option === "brand" && <BrandManager />}
            {option.option === "category" && <CategoryManager />}

        </>
    )

}
import { Outlet, useNavigate } from "react-router-dom"
import { AdminPanelNav } from "../components/AdminComponents/AdminPanelNav/AdminPanelNav"
import { useAuthContext } from "../context/AuthContext/useAuthContext";

export const AdminLayout = () => {
    const { user, logout } = useAuthContext();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate("/admin");
    }
    return <>
        {user !== null && <AdminPanelNav handleLogout={handleLogout}/>}
        <section>
            <Outlet/>            
        </section>
    </>
}
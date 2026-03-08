import { useAuthContext } from "../../context/AuthContext/useAuthContext";
import { Navigate, Outlet } from "react-router-dom";




export const ProtectedRoute = () => {
    const { user } = useAuthContext();
    if(!user){
        return <Navigate to="/admin" replace/>;
    }
    return <Outlet/>;
}
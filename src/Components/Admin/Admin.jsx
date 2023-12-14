import { CargarPropiedad } from "./CargarPropiedad.jsx"
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext.jsx";
import { Navigate } from "react-router-dom";


export const Admin = () => {
    const { user, logout } = useContext(AuthContext)

    if (!user) {
        return <Navigate to="/" />;
    }

    const handleLogout = async () => {
        try {
            await logout();
            console.log("Usuario cerró sesión correctamente");
        } catch (error) {
            console.error('Error al cerrar sesión:', error.message);
        }
    };

    return (
        <div className="admin_container">
            <CargarPropiedad />
            <hr />
            <button type="button" onClick={handleLogout}>Cerrar sesión</button>
        </div>
    )
}
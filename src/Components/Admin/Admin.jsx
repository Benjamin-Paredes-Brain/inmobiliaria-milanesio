import { CargarPropiedad } from "./CargarPropiedad.jsx"
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext.jsx";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import { EditarPropiedad } from "./EditarPropiedad.jsx";
import { EliminarPropiedad } from "./EliminarPropiedad.jsx";


export const Admin = () => {
    const { user, logout } = useContext(AuthContext)

    if (!user) {
        return <Navigate to="/" />;
    }

    const handleLogout = async () => {
        try {
            await logout();
            Swal.fire({
                title: 'Sesion cerrada correctamente',
                icon: 'success',
                confirmButtonText: 'ACCEPT',
                allowOutsideClick: false
            })
        } catch (error) {
            Swal.fire({
                title: 'HUBO UN ERROR AL CERRAR SESION',
                icon: 'error',
                confirmButtonText: 'ACCEPT',
                allowOutsideClick: false
            })
        }
    };

    return (
        <div className="admin_container">

            {user && (
                <div className="auth_container">
                    <h4>Actualmente haz iniciado sesión como {user.email}</h4>
                    <button className="buttonLogout " type="button" onClick={handleLogout}>Cerrar sesión</button>
                </div>
            )}

            <hr />
            <CargarPropiedad />
            <hr />
            <EditarPropiedad />
            <hr />
            <EliminarPropiedad />
        </div>
    )
}
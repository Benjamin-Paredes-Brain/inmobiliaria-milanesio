import { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext.jsx";
import { Link } from "react-router-dom";
import Swal from "sweetalert2"

export const Login = () => {
    const { login, user, logout } = useContext(AuthContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            await login(email, password);
            setEmail('');
            setPassword('');
            Swal.fire({
                title: 'Usuario logueado correctamente',
                icon: 'success',
                confirmButtonText: 'ACCEPT',
                allowOutsideClick: false
            })
        } catch (error) {
            Swal.fire({
                title: 'HUBO UN ERROR AL INICIAR SESION',
                icon: 'error',
                confirmButtonText: 'ACCEPT',
                allowOutsideClick: false
            })
        }
    };

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
        <div className="login-container">
            <form className="login-form">
            <h2 className="login-heading">Iniciar sesión</h2>
                <label className="login-label">
                    <input
                    placeholder="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="login-input"
                    />
                </label>
                <br />
                <label className="login-label">
                    <input
                    placeholder="contraseña"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="login-input"
                    />
                </label>
                <br />
                <button type="button" onClick={handleLogin} className="login-button">
                    Iniciar sesión
                </button>
            </form>
            {user && (
                <div className="user-info">
                    <h4 className="user-welcome">Actualmente has iniciado sesión como {user.email}</h4>
                    <button type="button" onClick={handleLogout} className="logout-button">
                        Cerrar sesión
                    </button>
                    <Link to={"/admin"} className="admin-link">
                        Ir al Administrador de propiedades
                    </Link>
                </div>
            )}
        </div>
    );
};
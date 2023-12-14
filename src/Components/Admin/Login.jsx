import { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext.jsx";
import { Link } from "react-router-dom";

export const Login = () => {
    const { login, user, logout } = useContext(AuthContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            await login(email, password);
            setEmail('');
            setPassword('');
        } catch (error) {
            console.error('Error al iniciar sesión:', error.message);
        }
    };

    const handleLogout = async () => {
        try {
            await logout();
            console.log("Usuario cerró sesión correctamente");
        } catch (error) {
            console.error('Error al cerrar sesión:', error.message);
        }
    };

    return (
        <div style={{ height: "100vh" }}>
            <h2>Iniciar sesión</h2>
            <form>
                <label>Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />
                <label>Contraseña:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br />
                <button type="button" onClick={handleLogin}>Iniciar sesión</button>
            </form>
            {user && (
                <div>
                    <h4>Actualmente haz iniciado sesión como {user.email}</h4>
                    <button type="button" onClick={handleLogout}>Cerrar sesión</button>
                    <Link to={"/admin"}>Ir al Administrador de propiedades</Link>
                </div>
            )}
        </div>
    );
};
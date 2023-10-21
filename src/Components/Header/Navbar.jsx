import { Link } from "react-router-dom"
import { NavbarMobile } from "./NavbarMobile"

export const Navbar = () => {

    return (
        <div className="nav_bg">
            <div className="nav_container">
                <Link to="/"> <img src="/inmobiliaria-milanesio-logo.png" alt="inmobiliaria-milanesio-logo" className="logo" /> </Link>
                <NavbarMobile />
                <nav className="nav_link_container">
                    <Link to={"/"} className="nav_link">Inicio</Link>
                    <Link className="nav_link">Venta</Link>
                    <Link className="nav_link">Alquiler</Link>
                    <Link to={"/servicios"} className="nav_link">Servicios</Link>
                    <Link to={"/nosotros"} className="nav_link">Nosotros</Link>
                    <Link className="nav_link">Contacto</Link>

                </nav>
            </div>
        </div>
    )
}
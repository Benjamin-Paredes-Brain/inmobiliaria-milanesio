import { useState} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom"

export const NavbarMobile = () => {
    const [showNavMobile, setShowNvabMobile] = useState(false)

    const handleMenuNavOpen = () => {
        setShowNvabMobile(true);
    }

    const handleMenuNavClose = () => {
        setShowNvabMobile(false);
    }

    return (
        <div>
            <FontAwesomeIcon onClick={handleMenuNavOpen} icon={faBars} className="mobile_burgerIcon" />
            <div className={showNavMobile ? "backdrop_activeNav" : ""} onClick={handleMenuNavClose}></div>
            <div className={showNavMobile ? "modal_containerNav modal_activeNav" : "modal_containerNav"} onClick={(e) => e.stopPropagation()}>

                <div className="mobileNav_container" onClick={handleMenuNavClose}>
                    <nav className="navbarMobile">
                        <Link to={"/"} className="navbar_linkMobile">Inicio</Link>
                        <Link to={"/"} className="navbar_linkMobile">Venta</Link>
                        <Link to={"/"} className="navbar_linkMobile">Alquiler</Link>
                        <Link to={"/servicios"} className="navbar_linkMobile">Servicios</Link>
                        <Link to={"/"} className="navbar_linkMobile">Nosotros</Link>
                        <Link to={"/"} className="navbar_linkMobile">Contacto</Link>
                        
                    </nav>
                </div>
            </div>

        </div>
    )
}
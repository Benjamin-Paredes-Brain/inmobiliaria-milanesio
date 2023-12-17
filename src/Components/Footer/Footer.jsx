import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMapPin } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {

    return (
        <div className="footer_bg">
            <div className="footer_container">

                <div className='footer_elements'>
                    <div className="footer_logo_container">
                        <img className='logo_footer' src="/inmobiliaria-milanesio-logo.png" alt="inmobiliaria-milanesio-logo" />
                    </div>
                    <div className="footer_content">
                        <p className='footer_title'>Contacto</p>
                        <div className="social_container">
                            {/* <a className='social_link' href=""><FontAwesomeIcon className='awesome_icon awesome_icon_social' icon={faInstagram} /></a> */}
                            <a className='social_link' href="https://wa.me/3512252226?text=Hola, me gustaria consultar sobre" target='_blank'><FontAwesomeIcon className='awesome_icon awesome_icon_social' icon={faWhatsapp} /></a>
                            <a className='social_link' href="https://www.facebook.com/Inmobiliariamilanesio" target='_blank'><FontAwesomeIcon className='awesome_icon awesome_icon_social' icon={faFacebook} /></a>
                        </div>
                    </div>

                    <div className="footer_content">
                        <p className='footer_title'>Ubicacion</p>
                        <div className='footer_ubi_container'><div><FontAwesomeIcon className='awesome_icon_ubi' icon={faMapPin} /></div><p className='footer_ubi_txt'>Blvd. Cangallo 2806, Córdoba</p></div>
                    </div>
                </div>
                <div className='footer_copy'>
                    <p className="copyright">Copyright &copy; 2023 Inmobiliaria Milanesio</p>
                    <a className='my_site' href="https://portfolio-benjamin-paredes-brain.netlify.app/" target='_blank'>Desarrollado por - Benjamin Paredes</a>
                </div>

            </div>
        </div>
    )
}
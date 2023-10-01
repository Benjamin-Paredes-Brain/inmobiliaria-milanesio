import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { Navbar } from './Navbar'

export const Header = () => {

    return (
        <>
            <div className='header_bg'>
                <div className="header_container">
                    <div className='phone_container'><FontAwesomeIcon className='awesome_icon' icon={faPhone} /> <p className='phone_number'>0351 497-2019</p></div>

                    <div className="social_container">
                        <a className='social_link' href=""><FontAwesomeIcon className='awesome_icon awesome_icon_social' icon={faInstagram} /></a>
                        <a className='social_link' href=""><FontAwesomeIcon className='awesome_icon awesome_icon_social' icon={faWhatsapp} /></a>
                        <a className='social_link' href=""><FontAwesomeIcon className='awesome_icon awesome_icon_social' icon={faFacebook} /></a>
                    </div>

                </div>
            </div>
            <Navbar/>
        </>
    )
}
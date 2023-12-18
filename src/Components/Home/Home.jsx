import { CardsSlideMobile } from "./CardsSlideMobile"
import { ServiciosHome } from "./ServiciosHome"
import { Slide } from "./Slide"

export const Home = () => {

    return (
        <div className="home_container">
            <Slide />
            <CardsSlideMobile />
            <div className="cards_home_container">
                <div className="cards_home">
                    <p className="cards_home_title">Experiencia y Profesionalismo</p>
                    <p className="cards_home_txt">Con 15 años de experiencia, somos líderes en el mercado. Nuestro equipo profesional te brinda el mejor servicio, con un profundo conocimiento del mercado local.</p>
                </div>
                <div className="cards_home">
                    <p className="cards_home_title">Variedad de Propiedades</p>
                    <p className="cards_home_txt">Ofrecemos una amplia gama de propiedades para satisfacer todas las necesidades y presupuestos. Encuentra tu hogar ideal o inversión entre nuestra variada selección.</p>
                </div>
                <div className="cards_home">
                    <p className="cards_home_title">Satisfacción del Cliente</p>
                    <p className="cards_home_txt">Nuestra prioridad es tu satisfacción. Trabajamos incansablemente para superar tus expectativas y garantizar una experiencia excepcional en cada transacción.</p>
                </div>
            </div>

            <div className="frase_container">
                <h5 className="frase">"Somos una inmobiliaria líder en la gestión de propiedades"</h5>
            </div>
            <ServiciosHome />
        </div>
    )
}
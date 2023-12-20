import { CardsSlideMobile } from "./CardsSlideMobile";
import { ServiciosHome } from "./ServiciosHome";
import { Slide } from "./Slide";

const homeCardsData = [
    {
        title: 'Experiencia y Profesionalismo',
        text: 'Con 15 años de experiencia, somos líderes en el mercado. Nuestro equipo profesional te brinda el mejor servicio, con un profundo conocimiento del mercado local.',
    },
    {
        title: 'Variedad de Propiedades',
        text: 'Ofrecemos una amplia gama de propiedades para satisfacer todas las necesidades y presupuestos. Encuentra tu hogar ideal o inversión entre nuestra variada selección.',
    },
    {
        title: 'Satisfacción del Cliente',
        text: 'Nuestra prioridad es tu satisfacción. Trabajamos incansablemente para superar tus expectativas y garantizar una experiencia excepcional en cada transacción.',
    },
];

export const Home = () => {
    return (
        <div className="home_container">
            <Slide />
            <CardsSlideMobile />
            <div className="cards_home_container">
                {homeCardsData.map((card, cardIndex) => (
                    <div key={cardIndex} className="cards_home">
                        <p className="cards_home_title">{card.title}</p>
                        <p className="cards_home_txt">{card.text}</p>
                    </div>
                ))}
            </div>
            <div className="frase_container">
                <h5 className="frase">"Somos una inmobiliaria líder en la gestión de propiedades"</h5>
            </div>
            <ServiciosHome />
        </div>
    );
};

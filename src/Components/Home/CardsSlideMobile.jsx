import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export function CardsSlideMobile() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel className='cardsSlideMobile' activeIndex={index} onSelect={handleSelect} data-bs-theme="dark">
            <Carousel.Item>
                <div className="cards_home">
                    <p className="cards_home_title">Experiencia y Profesionalismo</p>
                    <p className="cards_home_txt">Con 15 años de experiencia, somos líderes en el mercado. Nuestro equipo profesional te brinda el mejor servicio, con un profundo conocimiento del mercado local.</p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="cards_home">
                    <p className="cards_home_title">Variedad de Propiedades</p>
                    <p className="cards_home_txt">Ofrecemos una amplia gama de propiedades para satisfacer todas las necesidades y presupuestos. Encuentra tu hogar ideal o inversión entre nuestra variada selección.</p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="cards_home">
                    <p className="cards_home_title">Satisfacción del Cliente</p>
                    <p className="cards_home_txt">Nuestra prioridad es tu satisfacción. Trabajamos incansablemente para superar tus expectativas y garantizar una experiencia excepcional en cada transacción.</p>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}
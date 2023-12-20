import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const cardsData = [
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

export function CardsSlideMobile() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel className='cardsSlideMobile' activeIndex={index} onSelect={handleSelect} data-bs-theme="dark">
            {cardsData.map((card, cardIndex) => (
                <Carousel.Item key={cardIndex}>
                    <div className="cards_home">
                        <p className="cards_home_title">{card.title}</p>
                        <p className="cards_home_txt">{card.text}</p>
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

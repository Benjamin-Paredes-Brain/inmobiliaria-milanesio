import Carousel from 'react-bootstrap/Carousel';

const slides = [
    {
        image: '/house1-unsplash.jpg',
        title: 'Hogar de Sueños: Tu Oportunidad Está Aquí',
        text: 'El hogar de tus sueños, a un paso de convertirse en realidad.',
    },
    {
        image: '/house2-unsplash.jpg',
        title: 'Explora Propiedades de Ensueño',
        text: 'Descubre propiedades que te enamorarán a primera vista.',
    },
    {
        image: '/house3-unsplash.jpg',
        title: 'El Comienzo de tu Historia en tu Nuevo Hogar',
        text: 'Bienvenido a tu futuro, bienvenido a tu nuevo hogar.',
    },
];

export function Slide() {
    return (
        <Carousel className='slide_container' data-bs-theme="dark" fade>
            {slides.map((slide, index) => (
                <Carousel.Item key={index} interval={3000}>
                    <img className='img_slide' src={slide.image} alt='imagen-casa' />
                    <Carousel.Caption className='container_info_slide'>
                        <h3 className='title_slide'>{slide.title}</h3>
                        <p className='txt_slide'>{slide.text}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

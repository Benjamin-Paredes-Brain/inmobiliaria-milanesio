import Carousel from 'react-bootstrap/Carousel';

export function Slide() {
  return (
    <Carousel className='slide_container' data-bs-theme="dark" fade>
      <Carousel.Item interval={3000}>
        <img className='img_slide' src='/house1-unsplash.jpg' alt='imagen-casa' />
        <Carousel.Caption className='container_info_slide'>
          <h3 className='title_slide'>Hogar de Sueños: Tu Oportunidad Está Aquí</h3>
          <p className='txt_slide'>El hogar de tus sueños, a un paso de convertirse en realidad.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className='img_slide' src='/house2-unsplash.jpg' alt='imagen-casa' />
        <Carousel.Caption className='container_info_slide'>
          <h3 className='title_slide'>Explora Propiedades de Ensueño</h3>
          <p className='txt_slide'>Descubre propiedades que te enamorarán a primera vista.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className='img_slide' src='/house3-unsplash.jpg' alt='imagen-casa' />
        <Carousel.Caption className='container_info_slide'>
          <h3 className='title_slide'>El Comienzo de tu Historia en tu Nuevo Hogar</h3>
          <p className='txt_slide'>Bienvenido a tu futuro, bienvenido a tu nuevo hogar</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
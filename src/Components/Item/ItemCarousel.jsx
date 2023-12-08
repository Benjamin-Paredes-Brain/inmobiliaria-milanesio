import Carousel from 'react-bootstrap/Carousel';

export const ItemCarousel = ({ images }) => {
  return (
    <Carousel  data-bs-theme="dark" className='items_carousel' fade>
      {images.map((url, index) => (
        <Carousel.Item key={index} interval={3000}>
          <img className='itemsCarousel_img' src={url} alt={`Imagen de la propiedad`} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

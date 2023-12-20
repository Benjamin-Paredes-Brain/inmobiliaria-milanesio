import { useNavigate } from 'react-router-dom';

const serviceItems = [
    { id: 'alquileres', image: './alquiler.jpg', alt: 'alquiler inmobiliario', text: 'Alquileres' },
    { id: 'ventas', image: './venta.jpg', alt: 'venta inmobiliaria', text: 'Ventas' },
    { id: 'tasaciones', image: './tasacion.jpg', alt: 'tasacion inmobiliaria', text: 'Tasaciones' },
    { id: 'contratos', image: './contrato.jpg', alt: 'contrato inmobiliario', text: 'Contratos' },
];

export const ServiciosHome = () => {
    const navigate = useNavigate();

    const scrollToSection = (sectionId) => {
        navigate('/servicios');
        setTimeout(() => {
            const sectionContainer = document.getElementById(sectionId);
            if (sectionContainer) {
                sectionContainer.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                });
            }
        }, 100);
    };

    return (
        <div className="serviciosHome_mainContainer">
            <h4 className="serviciosHome_title">Contamos con todo tipo de servicios</h4>

            <div className="servicios_home_container">
                {serviceItems.map((item) => (
                    <div key={item.id} className="servicios_home_imgContainer" onClick={() => scrollToSection(item.id)}>
                        <img src={item.image} alt={item.alt} className="servicios_home_img" />
                        <span className="imgText">{item.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

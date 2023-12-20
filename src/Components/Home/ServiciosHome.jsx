import { useNavigate } from 'react-router-dom';

export const ServiciosHome = () => {
    const navigate = useNavigate();

    const scrollToSection = (sectionId) => {
        navigate('/servicios');

        setTimeout(() => {
            const sectionContainer = document.getElementById(sectionId);

            if (sectionContainer) {
                sectionContainer.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        }, 100);
    };

    return (
        <div className="serviciosHome_mainContainer">
            <h4 className="serviciosHome_title">Contamos con todo tipo de servicios</h4>

            <div className="servicios_home_container">
                <div className="servicios_home_imgContainer" onClick={() => scrollToSection('alquileres')}>
                    <img src="./alquiler.jpg" alt="alquiler inmobiliario" className="servicios_home_img" />
                    <span className="imgText">Alquileres</span>
                </div>
                <div className="servicios_home_imgContainer" onClick={() => scrollToSection('ventas')}>
                    <img src="./venta.jpg" alt="venta inmobiliaria" className="servicios_home_img" />
                    <span className="imgText">Ventas</span>
                </div>
                <div className="servicios_home_imgContainer" onClick={() => scrollToSection('tasaciones')}>
                    <img src="./tasacion.jpg" alt="tasacion inmobiliaria" className="servicios_home_img" />
                    <span className="imgText">Tasaciones</span>
                </div>
                <div className="servicios_home_imgContainer" onClick={() => scrollToSection('contratos')}>
                    <img src="./contrato.jpg" alt="contrato inmobiliario" className="servicios_home_img" />
                    <span className="imgText">Contratos</span>
                </div>
            </div>
        </div>
    );
};

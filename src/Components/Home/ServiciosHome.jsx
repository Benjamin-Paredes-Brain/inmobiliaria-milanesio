import { Link } from 'react-router-dom';

export const ServiciosHome = () => {

    return (
        <div className="serviciosHome_mainContainer">
            <h4 className="serviciosHome_title">Contamos con todo tipo de servicios</h4>

            <div className="servicios_home_container">
                <div className="servicios_home_imgContainer">
                    <Link to={"/servicios"}>
                        <img src="./alquiler.jpg" alt="alquiler inmobiliario" className="servicios_home_img" />
                        <span className="imgText">Alquileres</span>
                    </Link>
                </div>
                <div className="servicios_home_imgContainer">
                    <Link to={"/servicios"}>
                        <img src="./venta.jpg" alt="venta inmobiliaria" className="servicios_home_img" />
                        <span className="imgText">Ventas</span>
                    </Link>
                </div>
                <div className="servicios_home_imgContainer">
                    <Link to={"/servicios"}>
                        <img src="./tasacion.jpg" alt="tasacion inmobiliaria" className="servicios_home_img" />
                        <span className="imgText">Tasaciones</span>
                    </Link>
                </div>
                <div className="servicios_home_imgContainer">
                    <Link to={"/servicios"}>
                        <img src="./contrato.jpg" alt="contrato inmobiliario" className="servicios_home_img" />
                        <span className="imgText">Contratos</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export const ServiciosHome = () => {

    return (
        <div className="serviciosHome_mainContainer">
            <h4 className="serviciosHome_title">Contamos con todo tipo de servicios</h4>

            <div className="servicios_home_container">
                <div className="servicios_home_imgContainer">
                    <img src="./alquiler.jpg" alt="alquiler inmobiliario" className="servicios_home_img" />
                    <span className="imgText">Alquileres</span>
                </div>
                <div className="servicios_home_imgContainer">
                    <img src="./venta.jpg" alt="venta inmobiliaria" className="servicios_home_img" />
                    <span className="imgText">Ventas</span>
                </div>
                <div className="servicios_home_imgContainer">
                    <img src="./tasacion.jpg" alt="tasacion inmobiliaria" className="servicios_home_img" />
                    <span className="imgText">Tasaciónes</span>
                </div>
                <div className="servicios_home_imgContainer">
                    <img src="./contrato.jpg" alt="contrato inmobiliario" className="servicios_home_img" />
                    <span className="imgText">Contratos</span>
                </div>
            </div>
        </div>
    )
}
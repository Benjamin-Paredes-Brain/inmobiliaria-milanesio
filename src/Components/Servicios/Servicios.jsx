export const Servicios = () => {

    return (
        <>
            <div className="servicios_banner">
                <h1 className="servicios_txt">Nuestros Servicios</h1>
            </div>

            <div className="servicios_container">

                <div className="servicios_content">
                    <div className="servicios_info">
                        <p className="servicios_titles">ALQUILERES</p>
                        <p className="servicios_txt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto at quo dignissimos officia molestias earum nemo, animi voluptatibus placeat nostrum tempora, expedita a voluptatum, impedit veritatis ad repellendus ipsum corrupti.</p>
                    </div>
                 <div className="servicios_container_img"><img className="servicios_content_img" src="/alquiler.jpg" alt="alquiler inmobiliario" /></div>   
                </div>

                <div className="servicios_content">
                    <div className="servicios_container_img"><img className="servicios_content_img" src="/venta.jpg" alt="venta inmobiliaria" /></div>
                    <div className="servicios_info">
                        <p className="servicios_titles">VENTAS</p>
                        <p className="servicios_txt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto at quo dignissimos officia molestias earum nemo, animi voluptatibus placeat nostrum tempora, expedita a voluptatum, impedit veritatis ad repellendus ipsum corrupti.</p>
                    </div>
                </div>

                <div className="servicios_content">
                    <div className="servicios_info">
                        <p className="servicios_titles">TASACIONES</p>
                        <p className="servicios_txt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto at quo dignissimos officia molestias earum nemo, animi voluptatibus placeat nostrum tempora, expedita a voluptatum, impedit veritatis ad repellendus ipsum corrupti.</p>
                    </div>
                    <div className="servicios_container_img"><img className="servicios_content_img" src="/tasacion.jpg" alt="tasacion inmobiliaria" /></div>
                </div>

                <div className="servicios_content">
                    <div className="servicios_container_img"><img className="servicios_content_img" src="/contrato.jpg" alt="contrato inmobiliario" /></div>
                    <div className="servicios_info">
                        <p className="servicios_titles">CONTRATOS</p>
                        <p className="servicios_txt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto at quo dignissimos officia molestias earum nemo, animi voluptatibus placeat nostrum tempora, expedita a voluptatum, impedit veritatis ad repellendus ipsum corrupti.</p>
                    </div>
                </div>

            </div>
        </>

    )
}
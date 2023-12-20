export const Servicios = () => {
    const serviciosData = [
        {
            id: 'alquileres',
            title: 'ALQUILERES',
            imgSrc: '/alquiler.jpg',
            alt: 'alquiler inmobiliario',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto at quo dignissimos officia molestias earum nemo, animi voluptatibus placeat nostrum tempora, expedita a voluptatum, impedit veritatis ad repellendus ipsum corrupti.',
        },
        {
            id: 'ventas',
            title: 'VENTAS',
            imgSrc: '/venta.jpg',
            alt: 'venta inmobiliaria',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto at quo dignissimos officia molestias earum nemo, animi voluptatibus placeat nostrum tempora, expedita a voluptatum, impedit veritatis ad repellendus ipsum corrupti.',
        },
        {
            id: 'tasaciones',
            title: 'TASACIONES',
            imgSrc: '/tasacion.jpg',
            alt: 'tasacion inmobiliaria',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto at quo dignissimos officia molestias earum nemo, animi voluptatibus placeat nostrum tempora, expedita a voluptatum, impedit veritatis ad repellendus ipsum corrupti.',
        },
        {
            id: 'contratos',
            title: 'CONTRATOS',
            imgSrc: '/contrato.jpg',
            alt: 'contrato inmobiliario',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto at quo dignissimos officia molestias earum nemo, animi voluptatibus placeat nostrum tempora, expedita a voluptatum, impedit veritatis ad repellendus ipsum corrupti.',
        },
    ];

    return (
        <>
            <div className="servicios_banner">
                <h1 className="servicios_txt">Nuestros Servicios</h1>
            </div>

            <div className="servicios_container">
                {serviciosData.map((servicio) => (
                    <div key={servicio.id} className="servicios_content" id={servicio.id}>
                        <div className="servicios_info">
                            <p className="servicios_titles">{servicio.title}</p>
                            <p className="servicios_txt">{servicio.text}</p>
                        </div>
                        <div className="servicios_container_img">
                            <img className="servicios_content_img" src={servicio.imgSrc} alt={servicio.alt} />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

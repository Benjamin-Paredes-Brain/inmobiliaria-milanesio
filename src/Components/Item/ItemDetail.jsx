import withItemData from "./withItemData";
import { useParams } from "react-router-dom";
import { Loader } from "./Loader";
import { ItemCarousel } from "./ItemCarousel";
import { MapGoogle } from "../Map/MapGoogle.jsx";

export const ItemDetail = withItemData(({ loading, itemData }) => {
    const { itemid } = useParams();
    const item = itemData.find((p) => p.id === itemid);

    if (loading) {
        return <Loader />;
    }
    const position = { lat: item.latitud, lng: item.longitud }

    return (
        <div className="view_container_background">
            <div className="view_container">
                <div className="itemDetail_container">

                    <div className="item_info">
                        <div>
                            <div className="item_title">{item.tipoPropiedad} - B° {item.barrioPropiedad} <p className="item_estado">{item.estadoPropiedad}</p></div>
                            <p className="item_direction">{item.direccionPropiedad}</p>
                        </div>
                        <p className="item_price">{item.precioPropiedad}</p>
                    </div>

                    <ItemCarousel images={item.imagenesPropiedad} />

                    <div>
                        <div className="item_description_container">
                            <p className="info_title">Desripción</p>
                            <hr />
                            <p className="item_description">{item.descripcionPropiedad}</p>
                        </div>
                        <div className="item_details_container">
                            <p className="info_title">Detalles</p>
                            <hr />
                            <p>Garage: {item.garagePropiedad}</p>
                            <p>Baños: {item.bañosPropiedad}</p>
                            <p>Habitaciones: {item.habitacionesPropiedad}</p>
                            <p>Tamaño: {item.tamañoPropiedad}</p>
                        </div>
                    </div>

                    <div className="item_ubi_container">
                        <p className="info_title">Ubicación</p>
                        <hr />
                        <MapGoogle position={position} />
                    </div>
                </div>

                <div className="item_filters">
                    <div>Filtros</div>
                </div>
            </div>
        </div>
    );
})
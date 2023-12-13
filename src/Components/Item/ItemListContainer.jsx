import { Link } from "react-router-dom";
import { Loader } from "./Loader";
import withItemData from "./withItemData.jsx";
import { ItemFilters } from "./ItemFilters.jsx";
import { useState } from "react";

export const ItemListContainer = withItemData(({ loading, itemData, estadoPropiedad }) => {
    const [filters, setFilters] = useState({
        priceRange: { min: "", max: "" },
        rooms: "",
        surfaceRange: { min: "", max: "" },
        neighborhood: "",
        propertyType: "",
    });

    const handleApplyFilters = (newFilters) => {
        setFilters(newFilters);
    };

    const filteredItems = itemData.filter((item) => {
        return (
            item.estadoPropiedad === estadoPropiedad &&
            (!filters.priceRange.min || Number(item.precioPropiedad) >= Number(filters.priceRange.min)) &&
            (!filters.priceRange.max || Number(item.precioPropiedad) <= Number(filters.priceRange.max)) &&
            (!filters.rooms || item.habitacionesPropiedad === filters.rooms) &&
            (!filters.surfaceRange.min || Number(item.tamañoPropiedad) >= Number(filters.surfaceRange.min)) &&
            (!filters.surfaceRange.max || Number(item.tamañoPropiedad) <= Number(filters.surfaceRange.max)) &&
            (!filters.neighborhood || item.barrioPropiedad.toLowerCase().includes(filters.neighborhood.toLowerCase())) &&
            (!filters.propertyType || item.tipoPropiedad === filters.propertyType)
        );
    })
    return (
        <>
            <div className="main_itemlist_container" style={{ minHeight: '100vh' }}>
                <ItemFilters estadoPropiedad={`${estadoPropiedad}`} applyFilters={handleApplyFilters} />
                <div className="main_items_container">
                    {loading
                        ?
                        <Loader />
                        :
                        filteredItems.map((item) => (
                            <div key={item.id} className="item_card">
                                <Link className="item_link" to={`/propiedad/${item.id}`}>

                                    <img className="item_img" src={item.portadaPropiedad} alt={item.tipoPropiedad} />
                                    <div className="item_info">
                                        <p className="item_info_txt">Habitaciones: {item.habitacionesPropiedad}</p>
                                        <p className="item_info_txt">Baños: {item.bañosPropiedad}</p>
                                        <p className="item_info_txt">Tamaño: {item.tamañoPropiedad}</p>
                                    </div>
                                    <p className="item_title">{item.tipoPropiedad} - B° {item.barrioPropiedad}</p>
                                    <p className="item_txt">${item.precioPropiedad}</p>
                                    <p className="item_txt">{item.estadoPropiedad}</p>

                                </Link>
                            </div>
                        ))

                    }
                </div>
            </div>
        </>

    )
})
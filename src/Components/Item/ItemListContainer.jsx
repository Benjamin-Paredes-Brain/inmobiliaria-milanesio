import { Link } from "react-router-dom";
import { Loader } from "./Loader";
import withItemData from "./withItemData";

export const ItemListContainer = withItemData(({ loading, itemData, estadoPropiedad }) => {

    const filteredItems = itemData.filter(item => item.estadoPropiedad === estadoPropiedad )
    return (
        <>
            <div className="main_itemlist_container">

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
                                    <p className="item_txt">{item.tipodepropiedad}</p>
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
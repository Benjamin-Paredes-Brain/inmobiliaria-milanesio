import { ItemListContainer } from "../Item/ItemListContainer"

export const Venta = () => {

    return (
        <div className="venta-alquiler_container">
            <h1 className="venta-alquiler_title">VENTA</h1>
            <hr />
            <ItemListContainer estadoPropiedad="venta" />
        </div>
    )
}
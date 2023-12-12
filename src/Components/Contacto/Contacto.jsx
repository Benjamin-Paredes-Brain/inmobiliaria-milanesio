import { MapGoogle } from "../Map/MapGoogle.jsx"


export const Contacto = () => {
    const position = { lat: -31.44153612722259, lng: -64.11896119170974 }
    return (
        <>
            <div className="contacto_banner">
                <h1 className="contacto_txt">Contacto</h1>
            </div>

            <div className="contacto_container">
                <h2 className="contacto_title">Envianos tu consulta</h2>
                <form action="https://formsubmit.co/26035621c9bc115287f757fd742b7ba4" method="POST" className="contacto_form">
                    <label className="contacto_label">Nombre Completo</label>
                    <input required={true} type="text" name="nombre" className="contacto_input" />
                    <label className="contacto_label">Email</label>
                    <input required={true} type="email" name="email" className="contacto_input" />
                    <label className="contacto_label">Celular</label>
                    <input required={true} type="text" name="celular" className="contacto_input" />
                    <label className="contacto_label">Consulta</label>
                    <textarea required={true} type="text" name="consulta" className="contacto_input" />
                    <button className="contacto_button">Enviar</button>
                </form>

                <h3 className="contacto_title">Ubicacion</h3>
                <MapGoogle position={position} />
            </div>

        </>
    )
}
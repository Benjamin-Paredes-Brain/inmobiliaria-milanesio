import withItemData from "./withItemData";
import { useParams } from "react-router-dom";
import { Loader } from "./Loader";
import { ItemCarousel } from "./ItemCarousel";
import { MapGoogle } from "../Map/MapGoogle.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

export const ItemDetail = withItemData(({ loading, itemData }) => {
    const { itemid } = useParams();
    const item = itemData.find((p) => p.id === itemid);

    if (loading) {
        return <Loader />;
    }
    const position = { lat: item.latitud, lng: item.longitud }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vq2a71e', 'template_z4ircxp', form.current, 'AYwfJOyYlrKOo7xK6')
            .then(() => {
                Swal.fire({
                    title: 'CONSULTA ENVIADA CORRECTAMENTE',
                    icon: 'success',
                    confirmButtonText: 'ACCEPT',
                    allowOutsideClick: false
                })
                form.current.reset()
            },(error) => {
                Swal.fire({
                    title: 'HUBO UN ERROR AL ENVIAR LA CONSULTA',
                    icon: 'error',
                    confirmButtonText: 'ACCEPT',
                    allowOutsideClick: false
                })
            });
    };

    return (
        <div className="view_container_background">
            <div className="view_container">
                <div className="itemDetail_container">

                    <div className="item_info">
                        <div>
                            <div className="item_title">{item.tipoPropiedad} - B° {item.barrioPropiedad}</div>
                            <p className="item_direction">{item.direccionPropiedad}</p>
                        </div>
                        <div>
                            <p className="item_price">{item.precioPropiedad}</p>
                            <p className="item_estado">{item.estadoPropiedad}</p>
                        </div>
                    </div>

                    <ItemCarousel images={item.imagenesPropiedad} />

                    <div>
                        <div className="item_description_container">
                            <p className="info_title">Descripción</p>
                            <hr />
                            <p className="item_description">{item.descripcionPropiedad}</p>
                        </div>
                        <div className="item_details_container">
                            <p className="info_title">Detalles</p>
                            <hr />
                            <p className="item_detail">Garage: {item.garagePropiedad}</p>
                            <p className="item_detail">Baños: {item.bañosPropiedad}</p>
                            <p className="item_detail">Habitaciones: {item.habitacionesPropiedad}</p>
                            <p className="item_detail">Tamaño: {item.tamañoPropiedad}</p>
                        </div>
                    </div>

                    <div className="item_ubi_container">
                        <p className="info_title">Ubicación</p>
                        <hr />
                        <MapGoogle position={position} />
                    </div>
                </div>

                <div className="item_side_container">
                    <div className="side_contact">
                        <h3 className="side_contact_title">Contactanos por esta propiedad</h3>
                        <form ref={form} onSubmit={sendEmail} className="contacto_form">
                            <input required={true} placeholder="Nombre Completo" type="text" name="nombre" className="contacto_input" />
                            <input required={true} placeholder="Correo electronico" type="email" name="email" className="contacto_input" />
                            <input required={true} placeholder="telefono celular" type="text" name="celular" className="contacto_input" />
                            <input type="hidden" name="Consulta_sobre" value={`Tipo de Propiedad: ${item.tipoPropiedad}, Barrio: ${item.barrioPropiedad}, Dirección: ${item.direccionPropiedad}, Estado: ${item.estadoPropiedad}`} />
                            <textarea required={true} type="text" placeholder="consulta" name="consulta" className="contacto_input" />
                            <button className="contacto_button">Enviar consulta<FontAwesomeIcon className='icon' icon={faEnvelope} /></button>
                            <a className='contacto_wsp' target="_blank" href={`https://wa.me/3512252226?text=Hola, te consulto por ${item.tipoPropiedad} en Barrio ${item.barrioPropiedad} con Dirección en ${item.direccionPropiedad} el cual esta en ${item.estadoPropiedad}, visto en la página web.`}>Contactanos por WhatsApp<FontAwesomeIcon className='icon' icon={faWhatsapp} /></a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
})
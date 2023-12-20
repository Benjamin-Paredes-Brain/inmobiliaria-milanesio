import { useState } from 'react';
import { db, storage } from "../../Firebase/config.js"
import { addDoc, collection } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from "uuid"
import Swal from 'sweetalert2';
import Compressor from 'compressorjs';

export const CargarPropiedad = () => {
    const [barrioPropiedad, setBarrioPropiedad] = useState('');
    const [bañosPropiedad, setBañosPropiedad] = useState('');
    const [descripcionPropiedad, setDescripcionPropiedad] = useState('');
    const [direccionPropiedad, setDireccionPropiedad] = useState('');
    const [dormitoriosPropiedad, setDormitoriosPropiedad] = useState('');
    const [estadoPropiedad, setEstadoPropiedad] = useState('');
    const [garagePropiedad, setGaragePropiedad] = useState('');
    const [imagenesPropiedad, setImagenesPropiedad] = useState([]);
    const [latitud, setLatitud] = useState('');
    const [longitud, setLongitud] = useState('');
    const [portadaPropiedad, setPortadaPropiedad] = useState('');
    const [precioPropiedad, setPrecioPropiedad] = useState('');
    const [tamañoPropiedad, setTamañoPropiedad] = useState('');
    const [tipoPropiedad, setTipoPropiedad] = useState('');

    const handleImageUpload = async (files, isPortada) => {
        if (files instanceof FileList) {
            const imageUploadPromises = Array.from(files).map(async (file) => {
                const compressedFile = await new Promise((resolve) => {
                    new Compressor(file, {
                        quality: 0.8,
                        success(result) {
                            resolve(result);
                        },
                        error(error) {
                            resolve(file);
                        },
                    });
                });
                const storageRef = ref(storage, `imagenes propiedades/${v4()}`);
                await uploadBytes(storageRef, compressedFile);
                const downloadURL = await getDownloadURL(storageRef);
                return downloadURL;
            });


            try {
                const imageUrls = await Promise.all(imageUploadPromises);
                if (isPortada) {
                    setPortadaPropiedad(imageUrls[0]);
                } else {
                    setImagenesPropiedad(imageUrls);
                }
            } catch (error) {
                Swal.fire({
                    title: 'Error al cargar imagenes',
                    icon: 'error',
                    confirmButtonText: 'ACCEPT',
                    allowOutsideClick: false
                })
            }
        } else {
            Swal.fire({
                title: 'No se han seleccionado archivos',
                icon: 'error',
                confirmButtonText: 'ACCEPT',
                allowOutsideClick: false
            })
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            !tipoPropiedad ||
            !estadoPropiedad ||
            !portadaPropiedad ||
            imagenesPropiedad.length === 0 ||
            !barrioPropiedad ||
            !bañosPropiedad ||
            !descripcionPropiedad ||
            !direccionPropiedad ||
            !dormitoriosPropiedad ||
            !garagePropiedad ||
            !latitud ||
            !longitud ||
            !precioPropiedad ||
            !tamañoPropiedad
        ) {
            Swal.fire({
                title: 'Todos los campos son obligatorios',
                icon: 'error',
                confirmButtonText: 'ACCEPT',
                allowOutsideClick: false
            });
            return;
        }

        try {
            const propiedadData = {
                barrioPropiedad: barrioPropiedad.toString().toUpperCase(),
                bañosPropiedad,
                descripcionPropiedad,
                direccionPropiedad: direccionPropiedad.toString().toUpperCase(),
                dormitoriosPropiedad,
                estadoPropiedad: estadoPropiedad.toString().toUpperCase(),
                garagePropiedad: garagePropiedad.toString().toUpperCase(),
                imagenesPropiedad,
                latitud: Number(latitud),
                longitud: Number(longitud),
                portadaPropiedad,
                precioPropiedad: Number(precioPropiedad),
                tamañoPropiedad: Number(tamañoPropiedad),
                tipoPropiedad: tipoPropiedad.toString().toUpperCase(),
            };
            await addDoc(collection(db, 'INMUEBLES'), propiedadData);
            setBarrioPropiedad("");
            setBañosPropiedad("");
            setDescripcionPropiedad("");
            setDireccionPropiedad("");
            setDormitoriosPropiedad("");
            setEstadoPropiedad("");
            setGaragePropiedad("");
            setImagenesPropiedad([]);
            setLatitud("");
            setLongitud("");
            setPortadaPropiedad("");
            setPrecioPropiedad("");
            setTamañoPropiedad("");
            setTipoPropiedad("");

            Swal.fire({
                title: 'Propiedad cargada correctamente',
                icon: 'success',
                confirmButtonText: 'ACCEPT',
                allowOutsideClick: false
            })
        } catch (error) {

            Swal.fire({
                title: 'Hubo un error al cargar la propiedad',
                icon: 'error',
                confirmButtonText: 'ACCEPT',
                allowOutsideClick: false
            })
        }
    };

    return (
        <>
            <h2 style={{ textAlign: "center", marginTop: "2rem" }}>Agregar Propiedad</h2>
            <form className='form_add' onSubmit={handleSubmit}>
                <label className='addLabel'>
                    <div className='addLabel_txt'>
                        <p className='add_title_label'> Tipo de la Propiedad:</p>
                        <p className="add_subtitle_label">*Insertar en mayus</p>
                    </div>
                    <input className='addInput' type="text" value={tipoPropiedad} onChange={(e) => setTipoPropiedad(e.target.value)} />
                </label>
                <br />
                <label className='addLabel'>
                    <div className='addLabel_txt'>
                        <p className='add_title_label'>Estado de la Propiedad:</p>
                        <p className="add_subtitle_label">*Insertar en mayus, (VENTA / ALQUILER)</p>
                    </div>
                    <input className='addInput' type="text" value={estadoPropiedad} onChange={(e) => setEstadoPropiedad(e.target.value)} />
                </label>
                <br />
                <label className='addLabel imgLabel'>
                    <div className='addLabel_txt'>
                        <p className='add_title_label'>Portada de la Propiedad:</p>
                        <p className="add_subtitle_label">*Solo se debe cargar una (1) imagen</p>
                    </div>
                    <input className='addInput' type="file" accept="image/*" onChange={(e) => handleImageUpload(e.target.files, true)} />
                </label>
                <br />
                <label className='addLabel imgLabel'>
                    <div className='addLabel_txt'>
                        <p className='add_title_label'>Imágenes de la Propiedad:</p>
                        <p className="add_subtitle_label">*Solo se pueden cargar imagenes (cualquier cantidad)</p>
                    </div>
                    <input className='addInput' type="file" accept="image/*" multiple onChange={(e) => handleImageUpload(e.target.files)} />
                </label>
                <label className='addLabel'>
                    <div className='addLabel_txt'>
                        <p className='add_title_label'>Barrio de la Propiedad:</p>
                        <p className="add_subtitle_label">*Insertar en mayus, no poner "B°"</p>
                    </div>
                    <input className='addInput' type="text" value={barrioPropiedad} onChange={(e) => setBarrioPropiedad(e.target.value)} />
                </label>
                <br />
                <label className='addLabel'>
                    <div className='addLabel_txt'>
                        <p className='add_title_label'>Baños de la Propiedad:</p>
                        <p className="add_subtitle_label">*Insertar número</p>
                    </div>
                    <input className='addInput' type="text" value={bañosPropiedad} onChange={(e) => setBañosPropiedad(e.target.value)} />
                </label>
                <br />
                <label className='addLabel'>
                    <div className='addLabel_txt'>
                        <p className='add_title_label'>Descripción de la Propiedad:</p>
                        <p className="add_subtitle_label">*Insertar respetando mayus y minus</p>
                    </div>
                    <textarea className='addInput' value={descripcionPropiedad} onChange={(e) => setDescripcionPropiedad(e.target.value)} />
                </label>
                <br />
                <label className='addLabel'>
                    <div className='addLabel_txt'>
                        <p className='add_title_label'>Dirección de la Propiedad:</p>
                        <p className="add_subtitle_label">*Insertar en mayus</p>
                    </div>
                    <input className='addInput' type="text" value={direccionPropiedad} onChange={(e) => setDireccionPropiedad(e.target.value)} />
                </label>
                <br />
                <label className='addLabel'>
                    <div className='addLabel_txt'>
                        <p className='add_title_label'>Dormitorios de la Propiedad:</p>
                        <p className="add_subtitle_label">*Insertar número</p>
                    </div>
                    <input className='addInput' type="text" value={dormitoriosPropiedad} onChange={(e) => setDormitoriosPropiedad(e.target.value)} />
                </label>
                <br />
                <label className='addLabel'>
                    <div className='addLabel_txt'>
                        <p className='add_title_label'>Garage de la Propiedad:</p>
                        <p className="add_subtitle_label">*Insertar si/no, en mayus</p>
                    </div>
                    <input className='addInput' type="text" value={garagePropiedad} onChange={(e) => setGaragePropiedad(e.target.value)} />
                </label>
                <br />
                <label className='addLabel'>
                    <div className='addLabel_txt'>
                        <p className='add_title_label'>Latitud de la Propiedad:</p>
                        <p className="add_subtitle_label">*Insertar números de lat (copiar de googleMaps, es el primero)</p>
                    </div>
                    <input className='addInput' type="Number" value={latitud} onChange={(e) => setLatitud(e.target.value)} />
                </label>
                <br />
                <label className='addLabel'>
                    <div className='addLabel_txt'>
                        <p className='add_title_label'>Longitud de la Propiedad:</p>
                        <p className="add_subtitle_label">*Insertar números de long (copiar de googleMaps, es el segundo)</p>
                    </div>
                    <input className='addInput' type="Number" value={longitud} onChange={(e) => setLongitud(e.target.value)} />
                </label>
                <br />
                <label className='addLabel'>
                    <div className='addLabel_txt'>
                        <p className='add_title_label'>Precio de la Propiedad:</p>
                        <p className="add_subtitle_label">*Insertar número (no poner PESOS/USD)</p>
                    </div>
                    <input className='addInput' type="Number" value={precioPropiedad} onChange={(e) => setPrecioPropiedad(e.target.value)} />
                </label>
                <br />
                <label className='addLabel'>
                    <div className='addLabel_txt'>
                        <p className='add_title_label'>Superficie de la Propiedad:</p>
                        <p className="add_subtitle_label">*Insertar número (sin m²)</p>
                    </div>
                    <input className='addInput' type="Number" value={tamañoPropiedad} onChange={(e) => setTamañoPropiedad(e.target.value)} />
                </label>
                <br />

                <button className='addButton' type="submit">Agregar Propiedad</button>
            </form>
        </>
    );
};
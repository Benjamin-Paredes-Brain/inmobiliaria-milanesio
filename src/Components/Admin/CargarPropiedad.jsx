import { useState } from 'react';
import { db, storage } from "../../Firebase/config.js"
import { addDoc, collection } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

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
                const storageRef = ref(storage, `imagenes propiedades/${file.name}`);
                await uploadBytes(storageRef, file);
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
                console.error('Error al cargar imágenes:', error.message);
            }
        } else {
            console.error('No se han seleccionado archivos.');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const propiedadData = {
                barrioPropiedad,
                bañosPropiedad,
                descripcionPropiedad,
                direccionPropiedad,
                dormitoriosPropiedad,
                estadoPropiedad,
                garagePropiedad,
                imagenesPropiedad,
                latitud: parseInt(latitud),
                longitud: parseInt(longitud),
                portadaPropiedad,
                precioPropiedad: parseInt(precioPropiedad),
                tamañoPropiedad: parseInt(tamañoPropiedad),
                tipoPropiedad,
            };
            await addDoc(collection(db, 'INMUEBLES'), propiedadData);

            console.log('Propiedad agregada correctamente');
        } catch (error) {
            console.error('Error al agregar la propiedad:', error.message);
        }
    };

    return (
        <form className='form_add' onSubmit={handleSubmit}>
            <label className='addLabel'>
                Imágenes de la Propiedad:
                <input className='addInput' type="file" accept="image/*" multiple onChange={(e) => handleImageUpload(e.target.files)} />
            </label>
            <label className='addLabel'>
                Barrio de la Propiedad:
                <input className='addInput' type="text" value={barrioPropiedad} onChange={(e) => setBarrioPropiedad(e.target.value)} />
            </label>
            <br />
            <label className='addLabel'>
                Baños de la Propiedad:
                <input className='addInput' type="text" value={bañosPropiedad} onChange={(e) => setBañosPropiedad(e.target.value)} />
            </label>
            <br />
            <label className='addLabel'>
                Descripción de la Propiedad:
                <textarea className='addInput' value={descripcionPropiedad} onChange={(e) => setDescripcionPropiedad(e.target.value)} />
            </label>
            <br />
            <label className='addLabel'>
                Dirección de la Propiedad:
                <input className='addInput' type="text" value={direccionPropiedad} onChange={(e) => setDireccionPropiedad(e.target.value)} />
            </label>
            <br />
            <label className='addLabel'>
                Dormitorios de la Propiedad:
                <input className='addInput' type="text" value={dormitoriosPropiedad} onChange={(e) => setDormitoriosPropiedad(e.target.value)} />
            </label>
            <br />
            <label className='addLabel'>
                Estado de la Propiedad:
                <input className='addInput' type="text" value={estadoPropiedad} onChange={(e) => setEstadoPropiedad(e.target.value)} />
            </label>
            <br />
            <label className='addLabel'>
                Garage de la Propiedad:
                <input className='addInput' type="text" value={garagePropiedad} onChange={(e) => setGaragePropiedad(e.target.value)} />
            </label>
            <br />
            <label className='addLabel'>
                Latitud de la Propiedad:
                <input className='addInput' type="Number" value={latitud} onChange={(e) => setLatitud(e.target.value)} />
            </label>
            <br />
            <label className='addLabel'>
                Longitud de la Propiedad:
                <input className='addInput' type="Number" value={longitud} onChange={(e) => setLongitud(e.target.value)} />
            </label>
            <br />
            <label className='addLabel'>
                Portada de la Propiedad:
                <input className='addInput' type="file" accept="image/*" onChange={(e) => handleImageUpload(e.target.files, true)} />
            </label>
            <br />
            <label className='addLabel'>
                Precio de la Propiedad:
                <input className='addInput' type="Number" value={precioPropiedad} onChange={(e) => setPrecioPropiedad(e.target.value)} />
            </label>
            <br />
            <label className='addLabel'>
                Tamaño de la Propiedad:
                <input className='addInput' type="Number" value={tamañoPropiedad} onChange={(e) => setTamañoPropiedad(e.target.value)} />
            </label>
            <br />
            <label className='addLabel'>
                Tipo de la Propiedad:
                <input className='addInput' type="text" value={tipoPropiedad} onChange={(e) => setTipoPropiedad(e.target.value)} />
            </label>
            <br />
            <button className='addButton' type="submit">Agregar Propiedad</button>
        </form>
    );
};
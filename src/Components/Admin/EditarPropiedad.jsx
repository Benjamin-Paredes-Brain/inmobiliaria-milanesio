import { useState, useEffect } from 'react';
import { db } from "../../Firebase/config.js";
import { collection, getDocs, doc, getDoc, updateDoc } from "firebase/firestore"
import Swal from 'sweetalert2';

export const EditarPropiedad = () => {
    const [propiedades, setPropiedades] = useState([]);
    const [selectedPropiedadId, setSelectedPropiedadId] = useState('');
    const [propiedadEncontrada, setPropiedadEncontrada] = useState(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState("");

    useEffect(() => {
        const fetchPropiedades = async () => {
            try {
                const propiedadesCollection = collection(db, 'INMUEBLES');
                const propiedadesSnapshot = await getDocs(propiedadesCollection);
                const propiedadesData = propiedadesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setPropiedades(propiedadesData);
            } catch (error) {
                console.error('Error al cargar propiedades:', error);
            }
        };

        fetchPropiedades();
    }, []);

    const buscarPropiedad = async () => {
        try {
            const propiedadRef = doc(db, 'INMUEBLES', selectedPropiedadId);
            const propiedadSnapshot = await getDoc(propiedadRef);

            if (propiedadSnapshot.exists()) {
                const propiedadData = propiedadSnapshot.data();
                setPropiedadEncontrada(propiedadData);
                setSelectedImageIndex(null);
            } else {
                setPropiedadEncontrada(null);
                Swal.fire({
                    title: 'Propiedad no encontrada',
                    icon: 'error',
                    confirmButtonText: 'Aceptar',
                    allowOutsideClick: false
                });
            }
        } catch (error) {
            console.error('Error al buscar propiedad:', error);
        }
    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();

        if (!propiedadEncontrada) {
            Swal.fire({
                title: 'Primero debes buscar una propiedad',
                icon: 'error',
                confirmButtonText: 'Aceptar',
                allowOutsideClick: false
            });
            return;
        }

        try {
            const propiedadRef = doc(db, 'INMUEBLES', selectedPropiedadId);
            await updateDoc(propiedadRef, {
                barrioPropiedad: propiedadEncontrada.barrioPropiedad,
                bañosPropiedad: propiedadEncontrada.bañosPropiedad,
                descripcionPropiedad: propiedadEncontrada.descripcionPropiedad,
                direccionPropiedad: propiedadEncontrada.direccionPropiedad,
                dormitoriosPropiedad: propiedadEncontrada.dormitoriosPropiedad,
                estadoPropiedad: propiedadEncontrada.estadoPropiedad,
                garagePropiedad: propiedadEncontrada.garagePropiedad,
                latitud: propiedadEncontrada.latitud,
                longitud: propiedadEncontrada.longitud,
                precioPropiedad: propiedadEncontrada.precioPropiedad,
                tamañoPropiedad: propiedadEncontrada.tamañoPropiedad,
                tipoPropiedad: propiedadEncontrada.tipoPropiedad,
                imagenesPropiedad: propiedadEncontrada.imagenesPropiedad,
            });

            Swal.fire({
                title: 'Propiedad editada correctamente',
                icon: 'success',
                confirmButtonText: 'Aceptar',
                allowOutsideClick: false
            });
        } catch (error) {
            console.error('Error al editar propiedad:', error);
            Swal.fire({
                title: 'Hubo un error al editar la propiedad',
                icon: 'error',
                confirmButtonText: 'Aceptar',
                allowOutsideClick: false
            });
        }
    };

    return (
        <div>
            <h2 style={{ textAlign: "center", marginTop: "2rem" }}>Editar Propiedad</h2>
            <form className='form_edit' onSubmit={handleEditSubmit}>
                <label className='labelEdit'>
                    Selecciona la Propiedad a Editar (dirección):
                    <select className='inputEdit' value={selectedPropiedadId} onChange={(e) => setSelectedPropiedadId(e.target.value)}>
                        <option value="" disabled>Selecciona una propiedad</option>
                        <option value="-">Contraer campos</option>
                        {propiedades.map(propiedad => (
                            <option key={propiedad.id} value={propiedad.id}>
                                {propiedad.direccionPropiedad}
                            </option>
                        ))}
                    </select>
                </label>
                <button className='buttonEdit' type="button" onClick={buscarPropiedad}>Buscar Propiedad</button>

                {propiedadEncontrada && (
                    <div className='labels_container'>
                        <label className='labelEdit'>
                            Barrio de la Propiedad:
                            <input className='inputEdit' type="text" value={propiedadEncontrada.barrioPropiedad} onChange={(e) => setPropiedadEncontrada({ ...propiedadEncontrada, barrioPropiedad: e.target.value })} />
                        </label>
                        <label className='labelEdit'>
                            Baños de la Propiedad:
                            <input className='inputEdit' type="text" value={propiedadEncontrada.bañosPropiedad} onChange={(e) => setPropiedadEncontrada({ ...propiedadEncontrada, bañosPropiedad: e.target.value })} />
                        </label>
                        <label className='labelEdit'>
                            Descripción de la Propiedad:
                            <textarea className='inputEdit' value={propiedadEncontrada.descripcionPropiedad} onChange={(e) => setPropiedadEncontrada({ ...propiedadEncontrada, descripcionPropiedad: e.target.value })} />
                        </label>
                        <label className='labelEdit'>
                            Dirección de la Propiedad:
                            <input className='inputEdit' type="text" value={propiedadEncontrada.direccionPropiedad} onChange={(e) => setPropiedadEncontrada({ ...propiedadEncontrada, direccionPropiedad: e.target.value })} />
                        </label>
                        <label className='labelEdit'>
                            Dormitorios de la Propiedad:
                            <input className='inputEdit' type="text" value={propiedadEncontrada.dormitoriosPropiedad} onChange={(e) => setPropiedadEncontrada({ ...propiedadEncontrada, dormitoriosPropiedad: e.target.value })} />
                        </label>
                        <label className='labelEdit'>
                            Estado de la Propiedad:
                            <input className='inputEdit' type="text" value={propiedadEncontrada.estadoPropiedad} onChange={(e) => setPropiedadEncontrada({ ...propiedadEncontrada, estadoPropiedad: e.target.value })} />
                        </label>
                        <label className='labelEdit'>
                            Garage de la Propiedad:
                            <input className='inputEdit' type="text" value={propiedadEncontrada.garagePropiedad} onChange={(e) => setPropiedadEncontrada({ ...propiedadEncontrada, garagePropiedad: e.target.value })} />
                        </label>
                        <label className='labelEdit'>
                            Latitud de la Propiedad:
                            <input className='inputEdit' type="Number" value={propiedadEncontrada.latitud} onChange={(e) => setPropiedadEncontrada({ ...propiedadEncontrada, latitud: e.target.value })} />
                        </label>
                        <label className='labelEdit'>
                            Longitud de la Propiedad:
                            <input className='inputEdit' type="Number" value={propiedadEncontrada.longitud} onChange={(e) => setPropiedadEncontrada({ ...propiedadEncontrada, longitud: e.target.value })} />
                        </label>
                        <label className='labelEdit'>
                            Precio de la Propiedad:
                            <input className='inputEdit' type="Number" value={propiedadEncontrada.precioPropiedad} onChange={(e) => setPropiedadEncontrada({
                                ...propiedadEncontrada, precioPropiedad: e.target.value
                            })} />
                        </label>
                        <label className='labelEdit'>
                            Tamaño de la Propiedad:
                            <input className='inputEdit' type="Number" value={propiedadEncontrada.tamañoPropiedad} onChange={(e) => setPropiedadEncontrada({ ...propiedadEncontrada, tamañoPropiedad: e.target.value })} />
                        </label>
                        <label className='labelEdit'>
                            Tipo de la Propiedad:
                            <input className='inputEdit' type="text" value={propiedadEncontrada.tipoPropiedad} onChange={(e) => setPropiedadEncontrada({ ...propiedadEncontrada, tipoPropiedad: e.target.value })} />
                        </label>
                        <label className='labelEdit'>
                            Imágenes de la Propiedad:
                            <div>
                                <select
                                    value={""}
                                    onChange={(e) => setSelectedImageIndex(Number(e.target.value))}
                                >
                                    <option value={""}>Selecciona una imagen</option>
                                    {propiedadEncontrada?.imagenesPropiedad.map((imagen, index) => (
                                        <option key={index} value={index}>
                                            Imagen {index + 1}
                                        </option>
                                    ))}
                                </select>
                                <button
                                    type="button"
                                    onClick={() => {
                                        if (selectedImageIndex !== null) {
                                            const nuevasImagenes = [...propiedadEncontrada.imagenesPropiedad];
                                            nuevasImagenes.splice(selectedImageIndex, 1);
                                            setPropiedadEncontrada({ ...propiedadEncontrada, imagenesPropiedad: nuevasImagenes });
                                            setSelectedImageIndex(null);
                                        }
                                    }}
                                >
                                    Borrar Imagen
                                </button>
                            </div>
                        </label>
                    </div>
                )}
                <button className='buttonEdit' style={{ marginTop: "1rem" }} type="submit">Guardar Cambios</button>
            </form>
        </div>
    );
};
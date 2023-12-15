import { useState, useEffect } from 'react';
import { collection, getDocs, doc, getDoc, deleteDoc } from "firebase/firestore"
import Swal from 'sweetalert2';
import { db } from "../../Firebase/config.js"

export const EliminarPropiedad = () => {
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
                Swal.fire({
                    title: 'Propiedad encontrada correctamente, lista para borrar',
                    icon: 'success',
                    confirmButtonText: 'Aceptar',
                    allowOutsideClick: false
                });

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

    const handleDeleteSubmit = async (e) => {
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
            await deleteDoc(propiedadRef);
    
            Swal.fire({
                title: 'Propiedad eliminada correctamente',
                icon: 'success',
                confirmButtonText: 'Aceptar',
                allowOutsideClick: false
            });
        } catch (error) {
            console.error('Error al eliminar propiedad:', error);
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
            <h2 style={{ textAlign: "center", marginTop: "2rem" }}>Eliminar Propiedad</h2>
            <form className='form_edit' onSubmit={handleDeleteSubmit}>
                <label className='labelEdit'>
                    Selecciona la Propiedad a Eliminar (dirección) (La propiedad se eliminara completamente):
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
                <button className='buttonEdit' style={{ marginTop: "1rem" }} type="submit">Eliminar Propiedad</button>
            </form>
        </div>
    );
};
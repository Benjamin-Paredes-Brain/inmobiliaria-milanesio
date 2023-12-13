import React, { useState, useEffect } from "react";
import withItemData from "./withItemData.jsx";

export const ItemFilters = withItemData(({ itemData, applyFilters, estadoPropiedad }) => {
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [rooms, setRooms] = useState("");
  const [surfaceRange, setSurfaceRange] = useState({ min: "", max: "" });
  const [neighborhood, setNeighborhood] = useState("");
  const [propertyType, setPropertyType] = useState("");

  const [availableNeighborhoods, setAvailableNeighborhoods] = useState([]);
  const [availablePropertyTypes, setAvailablePropertyTypes] = useState([]);
  const [availablerooms, setAvailablerooms] = useState([]);

  useEffect(() => {
    const uniqueNeighborhoods = [...new Set(itemData.filter(item => item.estadoPropiedad === estadoPropiedad).map(item => item.barrioPropiedad))];
    setAvailableNeighborhoods(uniqueNeighborhoods);
  }, [itemData, estadoPropiedad]);

  useEffect(() => {
    const uniquePropertyTypes = [...new Set(itemData.filter(item => item.estadoPropiedad === estadoPropiedad).map(item => item.tipoPropiedad))];
    setAvailablePropertyTypes(uniquePropertyTypes);
  }, [itemData, estadoPropiedad]);

  useEffect(() => {
    const uniqueRooms = [...new Set(itemData.filter(item => item.estadoPropiedad === estadoPropiedad).map(item => item.dormitoriosPropiedad))];
    setAvailablerooms(uniqueRooms)
  }), [itemData, estadoPropiedad]

  const handleApplyFilters = () => {
    applyFilters({ priceRange, rooms, surfaceRange, neighborhood, propertyType });
  };

  return (
    <div className="filter_container">
      <p className="filter_title">Encontra tu propiedad</p>

      <label className="filter_label">
        <div>
          <p>Precio:</p>
          <p className="subtitle_label">{estadoPropiedad === "alquiler" ? `*En PESOS/MES` : `*En USD`}</p>
        </div>
        <input className="filter_box"
          type="number"
          placeholder="Mínimo"
          value={priceRange.min}
          onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
        />
        <input className="filter_box"
          type="number"
          placeholder="Máximo"
          value={priceRange.max}
          onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
        />
      </label>

      <label className="filter_label">
        <div>
          <p>Dormitorios:</p>
          <p className="subtitle_label">*Disponibiliadad sujeta a las propiedades</p>
        </div>
        <select
          className="filter_box"
          value={rooms}
          onChange={(e) => setRooms(e.target.value)}>

          <option value="">Cualquiera</option>
          {availablerooms.map((roomsOption) => (
            <option key={roomsOption} value={roomsOption}>
              {roomsOption}
            </option>
          ))}

        </select>
      </label>

      <label className="filter_label">
        <div>
          <p>Superficie:</p>
          <p className="subtitle_label">*En m²</p>
        </div>
        <input className="filter_box"
          type="number"
          placeholder="Mínima"
          value={surfaceRange.min}
          onChange={(e) => setSurfaceRange({ ...surfaceRange, min: e.target.value })}
        />
        <input className="filter_box"
          type="number"
          placeholder="Máxima"
          value={surfaceRange.max}
          onChange={(e) => setSurfaceRange({ ...surfaceRange, max: e.target.value })}
        />
      </label>

      <label className="filter_label">
        <div>
          <p>Barrio:</p>
          <p className="subtitle_label">*Disponibiliadad sujeta a las propiedades</p>
        </div>
        <select
          className="filter_box"
          value={neighborhood}
          onChange={(e) => setNeighborhood(e.target.value)}
        >
          <option value="">Cualquiera</option>
          {availableNeighborhoods.map((neighborhoodOption) => (
            <option key={neighborhoodOption} value={neighborhoodOption}>
              {neighborhoodOption}
            </option>
          ))}
        </select>
      </label>

      <label className="filter_label">
        <div>
          <p>Tipo de Propiedad:</p>
          <p className="subtitle_label">*Disponibiliadad sujeta a las propiedades</p>
        </div>
        <select
          className="filter_box"
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
        >
          <option value="">Cualquiera</option>
          {availablePropertyTypes.map((propertyTypeOption) => (
            <option key={propertyTypeOption} value={propertyTypeOption}>
              {propertyTypeOption}
            </option>
          ))}
        </select>
      </label>

      <button className="filter_button" onClick={handleApplyFilters}>Aplicar Filtros</button>
    </div>
  );
});
import "./Style/style.scss";
import { Header } from "./Components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./Components/Home/Home";
import { Footer } from "./Components/Footer/Footer";
import { Servicios } from "./Components/Servicios/Servicios";
import { Nosotros } from "./Components/Nosotros/Nosotros";
import { Contacto } from "./Components/Contacto/Contacto";
import { Alquiler } from "./Components/Alquiler/Alquiler";
import { Venta } from "./Components/Venta/Venta";
import { ItemDetail } from "./Components/Item/ItemDetail";

function App() {

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/venta" element={<Venta />} />
        <Route path="/alquiler" element={<Alquiler />} />
        <Route path="/propiedad/:estadoPropiedad/:itemid" element={<ItemDetail />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App

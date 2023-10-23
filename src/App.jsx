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

function App() {

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/servicios" element={<Servicios />}></Route>
        <Route path="/nosotros" element={<Nosotros />}></Route>
        <Route path="/contacto" element={<Contacto />}></Route>
        <Route path="/venta" element={<Venta />}></Route>
        <Route path="/alquiler" element={<Alquiler />}></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App

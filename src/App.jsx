import "./Style/style.scss";
import { AuthProvider } from "./Components/Context/AuthContext";
import { Header } from "./Components/Header/Header";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Home } from "./Components/Home/Home";
import { Footer } from "./Components/Footer/Footer";
import { Servicios } from "./Components/Servicios/Servicios";
import { Nosotros } from "./Components/Nosotros/Nosotros";
import { Contacto } from "./Components/Contacto/Contacto";
import { Alquiler } from "./Components/Alquiler/Alquiler";
import { Venta } from "./Components/Venta/Venta";
import { ItemDetail } from "./Components/Item/ItemDetail";
import { Admin } from "./Components/Admin/Admin";
import { Login } from "./Components/Admin/Login";

function App() {

  return (
    <AuthProvider>
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
          <Route path="/auth/admin" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App

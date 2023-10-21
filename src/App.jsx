import "./Style/style.scss";
import { Header } from "./Components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./Components/Home/Home";
import { Footer } from "./Components/Footer/Footer";
import { Servicios } from "./Components/Servicios/Servicios";
import { Nosotros } from "./Components/Nosotros/Nosotros";

function App() {

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/servicios" element={<Servicios />}></Route>
        <Route path="/nosotros" element={<Nosotros />}></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App

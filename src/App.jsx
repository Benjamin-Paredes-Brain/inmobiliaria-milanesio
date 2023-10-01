import "./Style/style.scss";
import { Header } from "./Components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./Components/Home/Home";

function App() {

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App

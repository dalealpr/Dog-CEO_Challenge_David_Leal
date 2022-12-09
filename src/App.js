import React from "react";//Import Router
import { BrowserRouter, Routes, Route} from "react-router-dom";

//Componentes
import Contacto from "./components/contacto/Contacto";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import NavBar from "./components/nav/NavBar";
import Nosotros from "./components/nosotros/Nosotros";
import Perros from "./components/perros/Perros";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Header/>}/>
          <Route path="/perros" element={<Perros/>}/>
          <Route path="/nosotros" element={<Nosotros/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}


export default App;

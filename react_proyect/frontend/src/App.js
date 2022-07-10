import Nav from "./components/layout/Nav";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import NosotrosPage from "./pages/NosotrosPage";
import HomePage from "./pages/HomePage";
import ServiciosPage from "./pages/ServiciosPage";
import ConsultoriosPage from "./pages/ConsultoriosPage";
import ContactoPage from "./pages/ContactoPage";

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header></Header>
      
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="nosotros" element={<NosotrosPage />} />
          <Route path="servicios" element={<ServiciosPage />} />
          <Route path="consultorios" element={<ConsultoriosPage />} />
          <Route path="contacto" element={<ContactoPage />} />
        </Routes>
      </BrowserRouter>
      
      <Footer></Footer>
    </div>
  );
}

export default App;

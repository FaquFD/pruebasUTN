import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav>
      <Link to= "/">Inicio</Link>
      <Link to="/nosotros">Nosotros</Link>
      <Link to="/contacto">Contacto</Link>
      <Link to="/servicios">Servicios</Link>
      <Link to="/consultorios">Consultorios</Link>
    </nav>
  );
};

export default Nav;
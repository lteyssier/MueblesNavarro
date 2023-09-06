import { Link} from "@remix-run/react"
import logo from "../../public/img/logo.png"
import logo_s from "../../public/img/logo_s.png"
import Navegacion from "./navegacion"

const Header = () => {
  

  return (
    <header className="header">
        <div className="contenedor barra">
            <Link to="/" className="logo">
               <div className="bloque_logo">
                </div> <img className="logo" src={logo_s} alt="imagen de logo" /> 
                <p className="logo_title">MUEBLES NAVARRRO</p>
            </Link>
           <Navegacion/>
        </div>
        <div className="banner">
        <div className="titulo">
            <p className="titulo__main__init">En</p>
            <p className="titulo__main"> Muebles Navarro</p>
            <p className="titulo__second">Nos enorgullecemos de transformar casas en hogares y de ser parte de su viaje para crear recuerdos preciados. Gracias por considerarnos su socio para amueblar su espacio con amor y carácter.</p>
        </div>
        <div>
           <img src={logo} alt="logo grande" className="logo_grande"/>
        </div>
        </div>
    </header>
  )
}

export default Header 
import Navegacion from "./navegacion"

const Footer = () => {
  return (
   <div className="footer">
     <div className="contenedor">
        <Navegacion/>
     </div>
     <p className="copyright">Todos los serechos reservedos {new Date().getFullYear()} </p>
   </div>
  )
}

export default Footer
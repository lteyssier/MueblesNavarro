import styles from '~/styles/contacto.css'
import logo from "../../public/img/logo.png"

export function links(){
  return[
    {
      rel:'stylesheet',
      href: styles
    }
  ]
}

const Constacto = () => {
  return (
     <main className="contenedor nosotros">
     <div className="logo_nosotros">
        <img src={logo} alt="logo grande" className="logo_nosotros__img"/>
     </div>
      <h2 className="heading">Contacto</h2>
      <div className="contenido">
          <div>
          <p className='descripcion'>Si bien nuestro sitio web ofrece un vistazo a nuestro inventario, lo invitamos a visitar nuestra tienda para sumergirse completamente en el encanto de nuestros muebles de segunda mano. Nuestra sala de exposición es un tesoro de inspiración que espera ser descubierto.</p>
          </div>
      </div>
    </main>
  )
}

export default Constacto
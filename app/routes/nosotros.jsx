import imagen from "../../public/img/nosotros.jpg"
import styles from "~/styles/nosotros.css"
import logo from "../../public/img/logo.png"

export function meta(){
  return (
    [{
      title:'Muebles Navarro - Sobre nosotros',
      description: 'Venta de muebles segunda mano'
    }]
  )
}

export function links(){
  return[
    {
      rel:'stylesheet',
      href: styles
    },
    {
      rel:'preload',
      href:imagen,
      as:"image"
    }
  ]
}

const Nosotros = () => {
  return (
    <main className="contenedor nosotros">
     <div className="logo_nosotros">
        <img src={logo} alt="logo grande" className="logo_nosotros__img"/>
     </div>
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
          <img src={imagen} alt="imagen sobre nosotros" />
          <div>
            <p className="nosotros_titulo">Bienvenido a Muebles Navarro </p>
            <p>  ¡Su fuente de muebles de segunda mano de calidad!
              En Muebles Navarro, comprendemos el valor de un hogar cálido y acogedor. Creemos que cada mueble tiene una historia que contar y merece una segunda oportunidad para crear nuevos recuerdos con tu familia. Como empresa operada y de propiedad familiar, hemos estado sirviendo a nuestra comunidad con pasión y dedicación durante... años.</p>
            <p className="nosotros_titulo">¿Por qué elegirnos?</p>
            <p> Selección de calidad: Nos enorgullecemos de seleccionar una colección diversa y cuidadosamente seleccionada de muebles usados. Cada pieza se inspecciona para cumplir con nuestros estrictos estándares de calidad, lo que garantiza que lleves a casa solo lo mejor.</p>  
          </div>
      </div>
    </main>
  )
}

export default Nosotros
import { Link } from "@remix-run/react"


const Mueble = ({mueble}) => {
 const{nombre,descripcion,color,fechapublicacion,nopiezas,precio,categoria, subcategoria, dimensiones, disponible, estado,url,imagen}= mueble
    
  return (
    <div className="mueble">
         <Link className="enlace_image" to={`/muebles/${url}`}>
        <img className="mueble_image" src={imagen.data[0].attributes.url} alt={`imagen de ${nombre}`} />
        </Link>
        <div className="contenido card_info">
            <h3 className="titulo_mueble">{nombre}</h3>
            <p className="descripcion">{descripcion}</p>
            <p className="precio">${precio}</p>
            <Link className="enlace" to={`/muebles/${url}`}>Ver producto</Link>
        </div>

    </div>
  )
}

export default Mueble
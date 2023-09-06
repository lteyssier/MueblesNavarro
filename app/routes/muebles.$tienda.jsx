import { Link, useLoaderData } from '@remix-run/react';
import { getMueble } from "../models/muebles.server"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import styles from "~/styles/mueble.css"
import { useState } from 'react';

export async function loader({params}){
    const {tienda} = params
    const mueble = await getMueble(tienda)
    if(mueble.data.length === 0){
        throw new Response('',{
            status:404,
            statusText:'No se encontró el mueble'
        })
    }
    return mueble
  }

export function meta({data}){
    if(!data){
        return{
            title:'Muebles Navarro - Mueble no encontrado',
            description: `Muebles, muebles segunda mano, mueble no encontrado`
        }
    }
    return (
      [{
        title:`Muebles Navarro - ${data.data[0].attributes.nombre} `,
        description: `Muebles, muebles segunda mano, mueble ${data.data[0].attributes.nombre}`
      }]
    )
  }

export function links(){
    return[
      {
        rel:'stylesheet',
        href:styles
      }
    ]
  }


const Mueble = () => {

    const [slide, setSlide] = useState(0);
    const mueble = useLoaderData()
    const{nombre,descripcion,color,nopiezas,precio,categoria, subcategoria, dimensiones, disponible, estado,url,imagen}= mueble.data[0].attributes
  
    let arreglo = []
    if(imagen!==null){
    for(let i=0;i<imagen.data.length;i++){
        let datos = imagen?.data[i]?.attributes.url
        arreglo.push(datos)
     }}

     const nextSlide = () => {
      setSlide(slide === arreglo?.length - 1 ? 0 : slide + 1);
    };
  
    const prevSlide = () => {
      setSlide(slide === 0 ? arreglo?.length - 1 : slide - 1);
    };

  return (

    <div className="mueble">
        
    <div className="carousel">
        <BsArrowLeftCircleFill 
        onClick={prevSlide} 
        className="arrow arrow-left" />
       { arreglo?.map((e,index)=>{
       return( 
       <img 
            src={e} 
            key={index}  
            alt="nombre"
            className={slide === index ? "slide" : "slide slide-hidden"}
        /> 
        )
        })}
       <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right"
      />
       <span className="indicators">
        {arreglo?.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>

    <div className="contenido ">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className='color'> <span className='title_spec'>Color:</span> {color}</p>
        <p className='nopiezas'><span className='title_spec'>No. Piezas:</span> {nopiezas}</p>
        <p className='dimensiones'><span className='title_spec'>Dimensiones:</span> {dimensiones}</p>
        <p className="precio">${precio}</p>
        <div className='card_buttons'>
        <p className='estado'>{disponible===true ? <span className='disponible'>Disponible</span> :<span className='vendido'>Vendido/Apartado</span>}</p>
        <p className="enlace_volver"><Link className='enlace' to={`/tienda`}>Volver a la tienda</Link></p>
        </div>
    </div>
    
    </div>
  )
}

export default Mueble
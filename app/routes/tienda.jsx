import { useEffect, useMemo, useState } from 'react'
import {getMuebles} from '~/models/muebles.server'
import { useLoaderData } from '@remix-run/react'
import Mueble from '~/components/mueble'
import styles from '~/styles/tienda.css'
import styles_carousel from '~/styles/carousel.css'
import logo from "../../public/img/logo.png"


export function meta(){
  return(
    [{
      title:'Muebles Navarro - Tienda de muebles',
      description:"Mubeles Navarro - Nuestra colección de muebles"
    }]
  )
}

export function links(){
  return[
    {
      rel:'stylesheet',
      href:styles
    },
    {
      rel:'stylesheet',
      href: styles_carousel
    }
  ]
}

export async function loader(){
  const muebles = await getMuebles()
  return muebles?.data
}

const Tienda = () => {

  const muebles = useLoaderData()
  const [selectedCategory, setSelectedCategory] = useState();
  const [fornitureList, setfornitureList] = useState([]);
  
  let fornitureBlock = []
  for (let i in muebles){
     let datos = muebles[i].attributes
     fornitureBlock.push(datos)
  }
    useEffect(() => {
      setfornitureList(fornitureBlock);
    }, []);
  
   const getFilteredList=() =>{
      if (!selectedCategory) {
        return fornitureList;
      }
      return fornitureList.filter((item) => item.categoria === selectedCategory);
    }
  

  let filteredList = useMemo(getFilteredList, [selectedCategory, fornitureList]);
 
  const handleCategoryChange= (event)=> {
    setSelectedCategory(event.target.value);
  }

  return (
    <main className="contenedor">

        <div className='name_filter'>
        <div className='name_filter__bar'> 
          <button className="first_button" onClick={handleCategoryChange} value={""} >Todo</button>
          <button onClick={handleCategoryChange} value={"sala"} >Salas</button>
          <button onClick={handleCategoryChange} value={"comedor"} >Comedores</button>
          <button onClick={handleCategoryChange} value={"recamara"} >Recámaras</button>
          <button className="last_button" onClick={handleCategoryChange} value={"otros"} >Otros Muebles</button>
        </div>
        </div>
      <div className="logo_nosotros">
        <img src={logo} alt="logo grande" className="logo_nosotros__img"/>
     </div>
      <h2 className="heading">Nuestra colección</h2>
      <div className='card'>
      {muebles?.length &&(
        <div className='muebles-grid'>
            {filteredList.map((mueble,idx) =>(
              <Mueble
              key={idx}
              mueble={mueble}
              />
              ))}
           
        </div>
      )}
      </div>
    </main>
  )
}

export default Tienda
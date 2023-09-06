import { useLoaderData } from "@remix-run/react"
import styles from "~/styles/muebles.css"
import { getMuebles } from "../models/muebles.server"
import Mueble from "../components/mueble"
import { useEffect, useMemo, useState } from "react"


export async function loader(){
  const muebles = await getMuebles()
  return muebles.data
}

export function meta(){
  return (
    [{
      title:`Muebles Navarro -  `,
      description: `Muebles, muebles segunda mano, mueblería`
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

function Index(){
 
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
        <div className="name_filter__bar">
          <button className="first_button" onClick={handleCategoryChange} value={""} >Todo</button>  
          <button  onClick={handleCategoryChange} value={"sala"} >Salas</button>
          <button onClick={handleCategoryChange} value={"comedor"} >Comedores</button>
          <button onClick={handleCategoryChange} value={"recamara"} >Recámaras</button>
          <button className="last_button" onClick={handleCategoryChange} value={"otros"} >Otros Muebles</button>
        </div>
    </div>
  
    <h2 className="heading">Nuestra colección</h2>
    {muebles.length &&(
      <div className='muebles-grid'>
          {filteredList.map((mueble,idx) =>(
            <Mueble
              key={idx}
              mueble={mueble}
            />
          ))}
      </div>
    )}
  </main>
  )
}

export default Index
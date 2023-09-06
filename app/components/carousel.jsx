import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useState } from "react";
/* eslint-disable react/prop-types */


const Carousel = ({url}) => {
    console.log(url)
  const [slide, setSlide] = useState(0);

    let arreglo = []
    if(url!==null){
    for(let i=0;i<3;i++){
        let datos = url.data[i].attributes.url
        arreglo.push(datos)
     }}

     const nextSlide = () => {
        setSlide(slide === arreglo?.length - 1 ? 0 : slide + 1);
      };
    
      const prevSlide = () => {
        setSlide(slide === 0 ? arreglo?.length - 1 : slide - 1);
      };

  return (
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
  )
}

export default Carousel
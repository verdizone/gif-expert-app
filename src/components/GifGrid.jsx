/* import { useState, useEffect } from "react";
import getGifs from "../helpers/getGifs"; */
import useFetchGifs from "../hooks/useFetchGifs";
import Cargando from "./Cargando";


const GifGrid = ({category}) => {

  const {imagen, isLoading} = useFetchGifs(category)
  // console.log(imagen, isLoading);
  return (
    <div className="contenedor">
      <h2 className="nombre-categoria">{category}</h2>
      {
        isLoading === true && <Cargando />
      }

      <div className="contenedor">
        {
            imagen.map(img=>(
                <div key={img.id}>
                    <img src={img.url} alt={`Imagen de ${img.title}`} />
                    <p>{img.title}</p>
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default GifGrid;

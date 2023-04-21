import { useState, useEffect } from "react";
import getGifs from "../helpers/getGifs";

const useFetchGifs = ( category ) => {
    
    const [imagen, setImagen] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    const getImages = async () => {
        const newImages = await getGifs(category);
        setImagen(newImages)
        setIsLoading(false)
    }
    
    useEffect(()=>{
        getImages()
    }, [])

    return {
        imagen,
        isLoading,
    }

}

export default useFetchGifs


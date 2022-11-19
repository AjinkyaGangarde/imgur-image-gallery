import { GalleryContext } from "../context/GalleryContext";
import { useContext } from "react";


export const useGalleryContext = () => {
    const context = useContext(GalleryContext);
    if(!context){
        throw Error("useGalleryContext must be used inside GalleryContext Provider..!");   
    }
    return context;
}


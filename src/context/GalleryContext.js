import {createContext, useReducer} from 'react';

export const GalleryContext = createContext();

export const galleryReducer = (state, action) =>{
    switch (action.type) {
        case 'SET_GALLERY':
            return{
                gallery : action.payload
            }
        default:
            return state;
    }
}

const gallaryInitialState = {
    gallery: []
}

export const GalleryContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(galleryReducer,gallaryInitialState);
    
    return(
        <GalleryContext.Provider value={{...state, dispatch}}>
            {children}
        </GalleryContext.Provider>
    );
}
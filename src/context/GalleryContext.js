import {createContext, useReducer} from 'react';

export const GalleryContext = createContext();

export const galleryReducer = (state, action) =>{
    switch (action.type) {
        case 'SET_FILTERS':
            return{
                ...state,
                filters: action.payload,
            };
        case 'SET_GALLERY':
            return{
                ...state,
                gallery : action.payload
            }
        default:
            return state;
    }
}

const gallaryInitialState = {
    filters : {
        Section: 'hot',
        Sort:'viral',
        Window:'day',
        Page: 1
    },
    gallery: [],

}

export const GalleryContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(galleryReducer,gallaryInitialState);
    
    return(
        <GalleryContext.Provider value={{...state, dispatch}}>
            {children}
        </GalleryContext.Provider>
    );
}
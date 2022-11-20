import React, { useEffect, useState } from 'react';
import { Filters } from '../component/Filters';
import { Imagegallery } from '../component/Imagegallery';
import { useGalleryContext } from '../hooks/useGalleryContext';
import { mockResponse } from '../services/mockResponse';

const response = mockResponse;

export const Home = () => {
    const {gallery, dispatch} = useGalleryContext();
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        setIsLoading(true);
        const fetchMockData = async() =>{
            const timer = setTimeout(() => {
                dispatch({type:'SET_GALLERY', payload : response.data});
                setIsLoading(false);
            }, 1000);
            return ()=>clearTimeout(timer);
        }
        fetchMockData();
    }, [])

    return <div className='container mx-auto my-20 px-8'>
           <Filters/> 
           <Imagegallery isLoading={isLoading}  data={gallery} />
      </div>;
}

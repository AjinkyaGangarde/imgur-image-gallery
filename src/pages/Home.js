import React, { useEffect, useState } from 'react';
import { Filters } from '../component/Filters';
import { Imagegallery } from '../component/Imagegallery';
import { mockResponse } from '../services/mockResponse';

const response = mockResponse;

export const Home = () => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);
    console.log("===>",mockResponse);
    useEffect(() => {
        setIsLoaded(true);
        const fetchMockData = async() =>{
            const timer = setTimeout(() => {
                setData(response.data);
            }, 1000);
            return ()=>clearTimeout(timer);
        }
        fetchMockData();
    }, [])

  
    return <div className='container mx-auto my-20 px-8'>
           <Filters/> 
           <Imagegallery data={data} />
      </div>;
}

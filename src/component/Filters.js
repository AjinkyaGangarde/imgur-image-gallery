import React, { useCallback } from 'react'
import { useGalleryContext } from '../hooks/useGalleryContext';
import {constants} from './../constants';
import { StyledSelect } from './StyledSelect';

export const Filters = () => {
  const {filters, dispatch} = useGalleryContext();
  const {sectionFilters, sortFilters, windowFilters} = constants;
  
  const handleChange = useCallback((e,val)=>{
    const newFilter = {...filters};
    newFilter[val] = e.target.value;
    dispatch({type:'SET_FILTERS', payload : newFilter});
  },[]);
  
  return (
    <div className='fixed top-20 w-full h-24 bg-slate-400'>
      <div className='flex justify-center'>
        <h3 className='text-xl'>
          Filters
        </h3>
      </div>
      <div className='flex justify-center h-24 '>    
        <div className='flex flex-wrap -mx-3 mb-2'> 
          <StyledSelect 
            title='Section' 
            handleChange={handleChange}
            filtersOptions={sectionFilters}
          />
          <StyledSelect 
            title='Sort' 
            handleChange={handleChange}
            filtersOptions={sortFilters}
          />
          <StyledSelect 
            title='Window' 
            handleChange={handleChange}
            filtersOptions={windowFilters}
          />
        </div>
      </div>
    </div>
  )
}

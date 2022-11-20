import React from 'react'
import {constants} from './../constants';

export const Filters = () => {
  const {sectionFilters, sortFilters, windowFilters} = constants;
  const handleChange=(e)=>{
    debugger
  }
  return (
    <div className='fixed top-20 w-full h-24 bg-slate-400'>
      <div className='flex justify-center'>
        <h3 className='text-xl'>
          Filters
        </h3>
      </div>
      <div className='flex justify-center h-24 '>    
        <div className='flex flex-wrap -mx-3 mb-2'> 
          <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
            <label>Section</label>
            <select 
                className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline' 
                title='Section' 
                onChange={handleChange}>
              {sectionFilters && sectionFilters.map(({label,value})=><option key={label} value={value}>{label}</option>)}
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </select>
          </div>
          <div  className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
            <label>Sort</label>
            <select 
              className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
              title='Sort' onChange={handleChange}>
              {sortFilters && sortFilters.map(({label,value})=><option key={label} value={value}>{label}</option>)}
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </select>
          </div>
          <div  className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
            <label>Window</label>
            <select 
              className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
              title='Window' onChange={handleChange}>
              {windowFilters && windowFilters.map(({label,value})=><option key={label} value={value}>{label}</option>)}
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

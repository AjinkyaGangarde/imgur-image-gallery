import React from 'react'
import {constants} from './../constants';

export const Filters = () => {
  const {sectionFilters, sortFilters, windowFilters} = constants;
  const handleChange=(e)=>{
    debugger
  }
  return (
    <div className='flex-row max-h-96 border-b-1 border-gray-400'>
      <h3 className=''>
        Filters
      </h3>
      <div>
        <div>
          <label>Section</label>
          <select title='Section' onChange={handleChange}>
            {sectionFilters && sectionFilters.map(({label,value})=><option key={label} value={value}>{label}</option>)}
          </select>
        </div>
        <div>
          <label>Sort</label>
          <select title='Sort' onChange={handleChange}>
            {sortFilters && sortFilters.map(({label,value})=><option key={label} value={value}>{label}</option>)}
          </select>
        </div>
        <div>
          <label>Window</label>
          <select title='Window' onChange={handleChange}>
            {windowFilters && windowFilters.map(({label,value})=><option key={label} value={value}>{label}</option>)}
          </select>
        </div>
      </div>
    </div>
  )
}

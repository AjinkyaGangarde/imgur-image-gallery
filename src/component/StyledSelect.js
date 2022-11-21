import React from 'react'

export const StyledSelect = ({title, handleChange, filtersOptions}) => {
  return (
    <>
        <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
            <label>{title}</label>
            <select 
                className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline' 
                title='Section' 
                onChange={(e) => handleChange(e,title)}>
                {filtersOptions && filtersOptions.map(({label,value})=><option key={label} value={value}>{label}</option>)}
            </select>
          </div>
    </>
  )
}

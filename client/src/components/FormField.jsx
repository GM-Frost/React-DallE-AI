import React from 'react'
import { preview } from '../assets'

const FormField = ({lableName,type,name,placeholder,value,handleChange,isSupriseMe,handleSupriseMe}) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <lable 
        htmlFor={name}
        className='block text-sm font-medium text-gray-900'
        > 
        {lableName}
        </lable>
        {isSupriseMe && (
          <button type='button' onClick={handleSupriseMe} className='font-semibold text-xs bg-[#003753] py-1 px-2 rounded-[5px] text-[#f6be69]'>
            Suprise Me  <span>💡</span>
          </button>
          
        )}
      </div>
      <input 
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#dea247] focus:border-[#dea247] outline-none block w-full p-3"
      type={type} 
      id={name} 
      name={name} 
      placeholder={placeholder} 
      value={value} 
      onChange={handleChange} 
      required
      />

  
    </div>
  )
}

export default FormField
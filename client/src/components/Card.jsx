import React from 'react'
import {download} from '../assets';
import {downloadImage} from '../utils';
const Card = ({_id, name, prompt, photo}) => {
  return (
    <div className='rounded-xl group relative shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]  hover:shadow-cardhover card'>
      <img src={photo} alt={prompt} className='w-full h-auto object-cover rounded-xl'/>
      <div className='group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#002436] m-2 p-4 rounded-md shadow dark'>
        <p className='text-white text-sm overflow-y-auto'>{prompt}</p>
        <div className='mt-5 flex justify-between items-center gap-2'>
          <div className='flex items-center gap-2'>
            <div className='w-7 h-7 rounded-full object-cover bg-[#dea247] flex justify-center items-center text-white text-xs font-bold'>
              {name[0]}
            </div>
            <p className='text-white text-sm'>{name}</p>
          </div>
          <div>
            <button type="button" title="Download Image"
              onClick={()=>{downloadImage(_id,photo)}}  
              className="outline-none bg-transparent border-none hover:scale-150 ">
              <img src={download} alt="download" className="w-6 h-6 object-contain invert"></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
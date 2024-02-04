import React from 'react'

const Petcard = ({pet}) => {

  return (
    <div className='rounded-lg bg-white p-2 cursor-pointer max-w-[280px]  '>
      <div className='rounded-lg mb-2'>
        <img src={pet.image}
        alt={`Adopt ${pet.name}`} className='rounded-lg w-full mt-'/>
      </div>
      <div className='w-full flex flex-col '>
        <h3 className='font-bold text-md my-1'>{pet.id} - {pet.name}</h3>
        <div className='flex text-gray-500 gap-x-2'>
          <span className=''>Genre:</span>
          <span className='font-bold'>{pet.genre}</span>
        </div>
        <div className='flex text-gray-500 gap-x-2'>
          <span className=''>Age:</span>
          <span className='font-bold'>{pet.age}</span>
        </div>
        <p className=' ml-2 mt-4'>{pet.price}</p>
      </div>
    </div>
  )
}

export default Petcard

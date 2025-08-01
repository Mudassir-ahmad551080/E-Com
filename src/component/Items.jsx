import React from 'react'

const Items = (props) => {
  return (
    <div className=' md:ml-0 '>
    <img className='h-70 cursor-pointer mt-4 rounded-md' src={props.image} alt="" />
    <p className='flex flex-wrap w-70 text-sm mt-2'>{props.name}</p>
    <div className='flex gap-2'>
      <p>${props.new_price}</p>
      <p>${props.old_price}</p>
    </div>
    </div>
  )
}

export default Items
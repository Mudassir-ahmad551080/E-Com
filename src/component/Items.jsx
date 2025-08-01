import { Link } from 'react-router-dom'
import React from 'react'

const Items = (props) => {
   const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className=' md:ml-0 '>
   <Link onClick={() => scrollToTop()} to={`/product/${props.id}`}> <img className='h-70 cursor-pointer mt-4 rounded-md' src={props.image} alt="" /> </Link>
    <p className='flex flex-wrap w-70 text-sm mt-2'>{props.name}</p>
    <div className='flex gap-2'>
      <p>${props.new_price}</p>
      <p>${props.old_price}</p>
    </div>
    </div>
  )
}

export default Items
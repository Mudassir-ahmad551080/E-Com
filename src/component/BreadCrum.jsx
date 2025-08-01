import React from 'react'
import arrow_icon from '../assets/breadcrum_arrow.png'

const BreadCrum = (props) => {
  const { product } = props;

  return (
    <div className='flex flex-wrap items-center mt-10 gap-2 sm:gap-3 text-sm sm:text-base px-4'>
      <span className='whitespace-nowrap'>HOME</span>
      <img src={arrow_icon} alt="arrow" className='w-3 h-3 sm:w-4 sm:h-4' />
      <span className='whitespace-nowrap'>SHOP</span>
      <img src={arrow_icon} alt="arrow" className='w-3 h-3 sm:w-4 sm:h-4' />
      <span className='whitespace-nowrap capitalize'>{product.category}</span>
      <img src={arrow_icon} alt="arrow" className='w-3 h-3 sm:w-4 sm:h-4' />
      <span className='whitespace-wrap  mr-10 flex capitalize'>{product.name}</span>
    </div>
  )
}

export default BreadCrum

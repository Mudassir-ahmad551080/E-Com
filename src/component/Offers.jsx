import React from 'react'
import exclusive_image from '../assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='flex flex-col bg-lime-100 mb-10  mx-10 rounded-md shadow-md w-auto h-100 mb-3 mt-10 md:mt-2 md:flex-row justify-between'>
    <div className=' gap-2 md:mt-20 md:ml-30 items-center text-center'>
        <h1 className='text-6xl'>Exclusive</h1>
        <h1 className='text-6xl mt-4'>Offer for You</h1>
        <p className='mt-3'>ONLY ON BEST SELLER PRODUCT</p>
        <button className='mt-4 rounded-full bg-red-500 text-white p-2  w-40 cursor-pointer'>Check Now</button>
    </div>
    <div>
        <img className='md:mr-40 ml-10 md:ml-0 h-100' src={exclusive_image} alt="" />
    </div>
    </div>
  )
}

export default Offers
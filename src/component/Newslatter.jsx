import React from 'react'

const Newslatter = () => {
  return (
    <div className='bg-pink-100 shadow-md mb-20 items-center text-center p-10 rounded-md shadow-md w-auto md:mx-10 mx-5' >
     <h1 className='md:text-5xl text-2xl'>Get Exclusive Offer On Your Email</h1>
     <p className='mt-5 mb-5'>Subscribe to our newsletter for the latest updates.</p>
     <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
        <input className='border border-gray-600 p-2 rounded-md' type="email" placeholder='Enter your email' />
        <button className='bg-red-500 cursor-pointer text-white p-2 rounded-md'>Subscribe</button>
     </div>
    </div>
  )
}

export default Newslatter
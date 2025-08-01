import React from 'react'
import new_collection from '../assets/new_collections'
import Items from './Items'
const NewCollection = () => {
  return (
    <div className=' mt-90 mb-20 md:mt-2'>
        <div className='items-center text-center'>
        <h1 className='text-5xl mt-10  md:mt-0'>New Collection</h1>
        </div>
        
        <hr className='mb-4 mt-4' />
        <div className='flex flex-col md:flex-row flex-wrap md:ml-15 ml-20'>
        {new_collection.map((item,index)=>{
            return <Items key={index} id={item.id} name={item.name} image= {item.image} new_price ={item.new_price} old_price={item.old_price}/>
        })}
        </div>
    </div>
  )
}

export default NewCollection
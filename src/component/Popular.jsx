import React from 'react'
import dat_product from '../assets/data'
import data_product from '../assets/data'
import Item from  '../component/Items'
const Popular = () => {
  return (
    <div>
      <div>
        <div className='items-center text-center'>
      <h1 className='text-4xl'>POPULAR IN WOMEN</h1>
        </div>
      
         <hr className='mb-7 mt-7' />
      </div>
      <div className='flex flex-wrap flex-col md:flex-row gap-3 ml-15'>
        {data_product.map((item,index)=>{
          return <Item key={index} id={item.id} name={item.name} image= {item.image} new_price ={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Popular
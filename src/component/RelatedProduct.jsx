import React from 'react'
import data_product from '../assets/data'
import Items from './Items'
const RelatedProduct = () => {
  return (
    <div>
        <div className='items-center text-center mb-2 mt-2'>
              <h1 className='text-3xl font-bold'>Related Product</h1>
        </div>
    
      <hr />
      <div id='my-div' className='flex md:grid-cols-4  gap-6 ml-10 overflow-x-scroll     mb-3'>
        {data_product.map((item,index)=>{
            return <Items key={index} id={item.id} name={item.name} image= {item.image} new_price ={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default RelatedProduct
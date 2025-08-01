import React from 'react'
import data_product from '../assets/data'
import Item from '../component/Items'

const Popular = () => {
  return (
    <div className="px-4 py-8 md:px-10 lg:px-20 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">POPULAR IN WOMEN</h1>
        <hr className="mt-4 border-t-2 w-24 mx-auto border-pink-500" />
      </div>

      {/* Grid of Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ml-15 md:ml-0 lg:grid-cols-4 gap-6">
        {data_product.map((item, index) => (
          <Item
            key={index}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  )
}

export default Popular

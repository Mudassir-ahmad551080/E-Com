import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import star_icon from '../assets/star_icon.png';
import star_dull_icon from '../assets/star_dull_icon.png';
import { ShopContext } from '../context/ShopContext';

const ProductDisplay = ({ product }) => {
  const {addtocart} = useContext(ShopContext);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 max-w-6xl mx-auto">
      {/* Left section - Images */}
      <motion.div 
        initial={{ opacity: 0, x: -40 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.6 }} 
        className="flex flex-col gap-4"
      >
        <div className="grid grid-cols-4 gap-2">
          {[...Array(4)].map((_, i) => (
            <img
              key={i}
              src={product.image}
              alt={`product-${i}`}
              className="h-20 w-20 object-cover rounded-md border"
            />
          ))}
        </div>
        <div className="mt-4">
          <img src={product.image} alt="Main product" className="rounded-lg w-full object-contain max-h-[400px]" />
        </div>
      </motion.div>

      {/* Right section - Details */}
      <motion.div 
        initial={{ opacity: 0, x: 40 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.6 }} 
        className="flex flex-col gap-4"
      >
        <h1 className="text-2xl md:text-3xl font-semibold">{product.name}</h1>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {Array(4).fill().map((_, i) => <img key={i} src={star_icon} alt="star" className="w-5 h-5" />)}
          <img src={star_dull_icon} alt="star dull" className="w-5 h-5" />
          <p className="text-sm text-gray-500 ml-2">(122)</p>
        </div>

        {/* Price */}
        <div className="flex items-center gap-4 text-lg font-medium">
          <p className="text-green-600">${product.new_price}</p>
          <p className="line-through text-gray-400">${product.old_price}</p>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600">
          This is the best product ever — a beautiful shirt that's become a staple in the industry.
        </p>

        {/* Size selector */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Select Size</h2>
          <div className="flex gap-2">
            {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
              <button 
                key={size}
                className="border rounded-md px-4 py-1 hover:bg-gray-100 transition"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Add to Cart */}
        <motion.button
        onClick={()=>addtocart(product.id)}
          whileTap={{ scale: 0.95 }}
          className="bg-black text-white mt-4 px-6 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Add to Cart
        </motion.button>

        {/* Category */}
        <p className="text-sm text-gray-400 mt-2">
          <span className="font-medium text-black">Category:</span> Women, T-shirt, Crop Top
        </p>
      </motion.div>
    </div>
  );
};

export default ProductDisplay;

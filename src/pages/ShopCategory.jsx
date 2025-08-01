import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext.jsx';
import dropdown_icon from '../assets/dropdown_icon.png';
import Items from '../component/Items.jsx';
import { motion } from 'framer-motion';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const filteredProducts = all_product.filter(item => item.category === props.category);

  return (
    <motion.div
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Banner */}
      <div className="w-full">
        <img className="w-full mt-2  object-cover max-h-[300px] md:max-h-[400px]" src={props.banner} alt="Category Banner" />
      </div>

      {/* Sorting and Info Section */}
      <div className="flex flex-col md:flex-row justify-between items-center p-4 border-b border-gray-200 gap-4 md:gap-0">
        <div className="text-lg font-medium">
          Showing {filteredProducts.length} <span className="text-gray-500">Out of {all_product.length} Products</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity duration-200">
          <span className="text-gray-700 font-semibold">Sort by</span>
          <img src={dropdown_icon} alt="Sort" className="w-4 h-4" />
        </div>
      </div>

      {/* Products Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {filteredProducts.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Items
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ShopCategory;

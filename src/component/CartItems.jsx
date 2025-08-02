import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import remove_icon from '../assets/cart_cross_icon.png';
import { motion } from 'framer-motion';

const CartItems = () => {
  const { getTotalCartAmount, all_product, CartItem, removecart } = useContext(ShopContext);

  return (
    <div className="p-4 md:p-8">
      <div className="grid grid-cols-2 sm:grid-cols-6 font-semibold text-sm text-gray-600 border-b py-2">
        <p className="col-span-1 sm:col-span-1">Product</p>
        <p className="hidden sm:block">Title</p>
        <p className="hidden sm:block">Price</p>
        <p className="text-center">Quantity</p>
        <p className="hidden sm:block">Total</p>
        <p className="text-center">Remove</p>
      </div>

      {all_product.map((e) => {
        if (CartItem[e.id] > 0) {
          return (
            <motion.div
              key={e.id}
              className="grid  grid-cols-2 sm:grid-cols-6 items-center gap-4 py-4 border-b"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 overflow-hidden">
                <img src={e.image} alt={e.name} className="object-cover w-full h-full rounded-lg" />
              </div>

              <p className="hidden sm:block text-sm font-medium">{e.name}</p>

              <p className="hidden sm:block text-sm text-gray-700">${e.new_price.toFixed(2)}</p>

              <div className="flex justify-center items-center">
                <button className="px-3 py-1 border rounded-lg text-sm">{CartItem[e.id]}</button>
              </div>

              <p className="hidden sm:block text-sm text-gray-800">
                ${(CartItem[e.id] * e.new_price).toFixed(2)}
              </p>

              <div className="flex justify-center">
                <motion.img
                  src={remove_icon}
                  alt="remove"
                  className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform"
                  whileTap={{ scale: 0.9 }}
                  onClick={() => removecart(e.id)}
                />
              </div>
            </motion.div>
          );
        }
        return null;
      })}
      <div className="w-full max-w-md mx-auto mt-15 mb-10 p-6 bg-white shadow-lg rounded-2xl">
        <h1 className="text-2xl font-bold mb-6 text-center">Cart Total</h1>

        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-600">Subtotal</p>
          <p className="text-gray-800 font-semibold">${getTotalCartAmount().toFixed(2)}</p>
        </div>
        <hr className="mb-4" />

        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-600">Shipping Fee</p>
          <p className="text-green-600 font-medium">Free</p>
        </div>
        <hr className="mb-4" />

        <div className="flex justify-between items-center text-lg font-bold mb-6">
          <h3>Total</h3>
          <h3>${getTotalCartAmount().toFixed(2)}</h3>
        </div>

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition duration-300 mb-6">
          Proceed To Checkout
        </button>

        <div className="text-sm text-gray-500 mb-2 text-center">
          <p>If you have a promo code, enter it here:</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-2">
          <input
            type="text"
            placeholder="Enter Promo Code"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-full sm:w-auto bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition duration-300">
            Submit
          </button>
        </div>
      </div>

    </div>
  );
};

export default CartItems;

import React, { createContext, useState, useEffect } from "react";
import all_product from '../assets/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  // Load from localStorage if available
  const getInitialCart = () => {
    const savedCart = localStorage.getItem('cartData');
    return savedCart ? JSON.parse(savedCart) : getDefaultCart();
  };

  const [CartItem, setCartItems] = useState(getInitialCart);

  // Save to localStorage whenever CartItem changes
  useEffect(() => {
    localStorage.setItem('cartData', JSON.stringify(CartItem));
  }, [CartItem]);

  const addtocart = (ItemId) => {
    setCartItems((prev) => ({
      ...prev,
      [ItemId]: prev[ItemId] + 1
    }));
  };

  const getTotalCartAmount = () => {
    let amount = 0;
    for (const item in CartItem) {
      if (CartItem[item] > 0) {
        const product = all_product.find((product) => product.id === parseInt(item));
        if (product) {
          amount += CartItem[item] * product.new_price;
        }
      }
    }
    return amount;
  }

  const getTotalCartItems = () =>{
    let totalItems = 0;
    for (const item in CartItem) {
      totalItems += CartItem[item];
    }
    return totalItems;
  }

  const removecart = (ItemId) => {
    setCartItems((prev) => ({
      ...prev,
      [ItemId]: Math.max(prev[ItemId] - 1, 0) // Prevent negative quantity
    }));
  };

  const contextValue = {getTotalCartItems , getTotalCartAmount, all_product, CartItem, addtocart, removecart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

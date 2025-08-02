import React from 'react'
import Navbar from './component/Navbar'
import { Routes,Route } from 'react-router-dom'
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSingup from './pages/LoginSingup'
import Footer from './component/Footer';
import men_banner from './assets/banner_mens.png';
import women_banner from './assets/banner_women.png';
import kids_banner from './assets/banner_kids.png'
const App = () => {
  return (
    <>
    <Navbar/>
    <hr className='fixed top-0 left-0 right-0 h-px bg-white bg-opacity-50'/>
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
       <Route path='/' element={<Shop/>}/>
       <Route path='/men' element={<ShopCategory banner={men_banner} category ="men" />}/>
       <Route path='/women' element={<ShopCategory banner={women_banner} category ="women"/>}/>
       <Route path='/kids' element={<ShopCategory banner={kids_banner} category ="kid"/>}/>
      <Route path="/product/:productId" element={<Product />} />
       <Route path='/cart' element={<Cart/>}/>
      <Route  path='/login' element={<LoginSingup/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
import React from 'react'
import Navbar from './component/Navbar'
import { Routes,Route } from 'react-router-dom'
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSingup from './pages/LoginSingup'
import Footer from './component/Footer';
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
       <Route path='/' element={<Shop/>}/>
       <Route path='/men' element={<ShopCategory category ="men " />}/>
       <Route path='/women' element={<ShopCategory category ="women"/>}/>
       <Route path='/kids' element={<ShopCategory category ="kids"/>}/>
       <Route path='/product' element={<Product/>}/>
       <Route path=':productId' element={<Product/>}/>
       <Route path='/cart' element={<Cart/>}/>
      <Route  path='/login' element={<LoginSingup/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
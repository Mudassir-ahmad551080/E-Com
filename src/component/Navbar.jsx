import React, { useContext, useState } from 'react';
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import { Menu, X } from 'lucide-react'; // Install lucide-react if not already: npm install lucide-react
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';


const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [menu, setMenue] = useState('shop')
    const { getTotalCartItems } = useContext(ShopContext)
    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    return (
        <div id='another-div' className=' sticky shadow-md top-0 right-0 left-0 w-full relative  z-50'>
            <div className='flex justify-between items-center p-4 md:px-10'>
                {/* Logo */}
                <div className='flex items-center gap-2'>
                    <Link to='/' onClick={() => scrollToTop()}><img src={logo} alt="Logo" className='h-9 cursor-pointer' /></Link>
                    <p className='font-bold text-xl'>Shopper</p>
                </div>

                {/* Desktop Menu */}
                <div className='hidden md:flex'>
                    <ul className='flex gap-6 text-lg cursor-pointer'>
                        <li onClick={() => { setMenue('shop'); scrollToTop() }} className=' transition-all  duration-200'><Link to='/'>Shop </Link>{menu === 'shop' ? <hr className='text-3xl  bg-red-400 p-[0.5px] w-12 text-center items-center  text-red-400 font-bold' /> : null}</li>
                        <li onClick={() => { setMenue('men'); scrollToTop() }} className=' transition-all duration-200'><Link to='/men'>Men</Link> {menu === 'men' ? <hr className='text-3xl  bg-red-400 p-[0.5px] w-12 text-center items-center   text-red-400 font-bold' /> : null}</li>
                        <li onClick={() => { setMenue('women'); scrollToTop() }} className=' transition-all duration-200'><Link to='/women'>Women</Link> {menu === 'women' ? <hr className='text-3xl  bg-red-400 p-[0.5px] w-12 text-center items-center   text-red-400 font-bold' /> : null}</li>
                        <li onClick={() => { setMenue('kids'); scrollToTop() }} className=' transition-all duration-200'><Link to='/kids'>Kids</Link> {menu === 'kids' ? <hr className='text-3xl  bg-red-400 p-[0.5px] w-12 text-center items-center   text-red-400 font-bold' /> : null}</li>
                    </ul>
                </div>

                {/* Cart & Login */}
                <div className='flex items-center gap-4'>
                    <Link onClick={() => scrollToTop()} to='/login'><button className='bg-red-600 cursor-pointer active:bg-red-400 text-white px-3 py-1 rounded text-sm'>Login</button></Link>
                    <Link onClick={() => scrollToTop()} to='/cart'> <img src={cart_icon} alt="Cart" className='h-9 cursor-pointer' /></Link>
                    <div className='mt-0 flex z-10 items-center justify-center p-1  right-7 relative top-0 bottom-10 w-2 p-2 h-2 bg-red-600 text-white rounded-full'>{getTotalCartItems()}</div>
                    {/* Hamburger Icon */}
                    <div className='md:hidden cursor-pointer' onClick={toggleMenu}>
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {mobileMenuOpen && (
                <div className='md:hidden   border-t items-center text-center justify-center h-screen border-amber-300 shadow-inner'>
                    <ul className='flex flex-col  mt-40 p-4 gap-3 text-lg font-semibold'>
                        <li onClick={() => { setMobileMenuOpen(false); scrollToTop() }} className='hover:underline'><Link to='/'>Shop</Link></li>
                        <li onClick={() => { setMobileMenuOpen(false); scrollToTop() }} className='hover:underline'><Link to='/men'>Men</Link></li>
                        <li onClick={() => { setMobileMenuOpen(false); scrollToTop() }} className='hover:underline'><Link to='/women'>Women</Link></li>
                        <li onClick={() => { setMobileMenuOpen(false); scrollToTop() }} className='hover:underline'><Link to='/kids'>Kids</Link></li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;

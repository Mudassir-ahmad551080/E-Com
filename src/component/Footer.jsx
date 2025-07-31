import React from 'react'
import footer_logo from '../assets/logo_big.png'
import instagram_icon from '../assets/instagram_icon.png'
import pintrest_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='flex flex-col items-center text-center '>
        <div className='flex gap-3 items-center text-center '>
            <img className='h-20' src={footer_logo} alt="" />
            <p className='text-3xl mt-2'>SHOPER</p>
        </div>
        <div>
            <ul className='flex flex-row gap-5 md:gap-10 mt-3'>
                <li>Company</li>
                <li>About</li>
                <li>Office</li>
                <li>Contact</li>
            </ul>
            <div className='flex flex-row mt-5 mb-5 gap-10 items-center text-center ml-15 md:ml-20'>
        <div>
             <img src={instagram_icon} alt="" />
            </div>
            <div>
             <img src={pintrest_icon} alt="" />
            </div>
            <div>
             <img src={whatsapp_icon} alt="" />
            </div>
            </div>
            
            <hr />
            <div className='text-center items-center text-sm mb-8'>
                <p className='mt-5'>Copy @ 2025 All Right Reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
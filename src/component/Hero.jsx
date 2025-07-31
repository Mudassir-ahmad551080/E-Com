import React from 'react'
import { motion } from 'framer-motion'
import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import hero_image from '../assets/hero_image.png'

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center px-6 md:px-20 py-10 gap-10">
      
      {/* Left Image Section */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <img className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg" src={hero_image} alt="Hero" />
      </motion.div>

      {/* Right Text Section */}
      <motion.div
        className="w-full  flex flex-col items-center text-center bg-amber-100 shadow-md py-8 px-4 rounded-xl"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-sm sm:text-base tracking-wide mb-2">NEW ARRIVAL ONLY</h2>

        <div className="flex items-center justify-center gap-2 mb-4">
          <p className="text-5xl sm:text-6xl md:text-7xl font-bold uppercase">new</p>
          <img className="h-10 sm:h-12 md:h-16" src={hand_icon} alt="Hand Icon" />
        </div>

        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold">Collection</p>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6">Collection for everyone</p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-red-500 text-white flex items-center justify-center gap-2 px-6 py-2 rounded-full cursor-pointer shadow-md"
        >
          <span className="text-sm sm:text-base">Latest Collection</span>
          <img className="h-4 sm:h-5" src={arrow_icon} alt="Arrow Icon" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Hero

import React from 'react'
import { motion } from 'framer-motion'
import cat1 from '../assets/cat1.png'
import cat2 from '../assets/cat2.png'
import cat3 from '../assets/cat3.png'
import cat4 from '../assets/cat4.png'
import cat5 from '../assets/cat5.png'
import cat6 from '../assets/cat6.png'
import cat7 from '../assets/cat7.png'
import cat8 from '../assets/cat8.png'

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const scaleInVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const Categories = () => {
  return (
    <section
      id="categories"
      className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-6 py-12 sm:py-16 lg:py-20 bg-white"
    >
      {/* Header Section */}
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="flex flex-col items-center text-center mb-10 sm:mb-12 lg:mb-16"
      >
        <h2 className="text-[22px] sm:text-[26px] lg:text-[32px] text-[#1a202c] mb-3 sm:mb-4">
          <span className="font-black">CATEGORIES</span> YOUR MAY INTERESTED
        </h2>
        <p className="text-black max-w-2xl text-[14px] sm:text-[16px] lg:text-[18px] leading-relaxed">
          Discover fresh looks and modern outfits that define your unique style now. Perfect for
          any occasion, from casual outings to special events.
        </p>
      </motion.div>

      {/* Grid Layout */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6"
      >
        {/* Card 1: Fashion Caps */}
        <motion.div
          variants={scaleInVariant}
          className="col-span-1 relative h-[180px] sm:h-[240px] lg:h-[320px] rounded-[18px] sm:rounded-[20px] lg:rounded-[24px] overflow-hidden bg-[#e5e7eb] group cursor-pointer"
        >
          <img
            src={cat1}
            alt="Fashion Caps"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 bg-gray-500/90 backdrop-blur-sm text-white px-4 sm:px-6 lg:px-8 py-2 rounded-lg text-[10px] sm:text-xs font-semibold whitespace-nowrap">
            Fashion Caps
          </div>
        </motion.div>

        {/* Card 2: Women's Blazer */}
        <motion.div
          variants={scaleInVariant}
          className="col-span-1 relative h-[180px] sm:h-[240px] lg:h-[320px] rounded-[18px] sm:rounded-[20px] lg:rounded-[24px] overflow-hidden bg-[#fce4ec] group cursor-pointer"
        >
          <img
            src={cat2}
            alt="Women's Blazer"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[95%] w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 bg-gray-500/90 backdrop-blur-sm text-white px-4 sm:px-5 lg:px-6 py-2 rounded-lg text-[10px] sm:text-xs font-semibold whitespace-nowrap z-10">
            Women's Blazer
          </div>
        </motion.div>

        {/* Card 3: Sweater */}
        <motion.div
          variants={scaleInVariant}
          className="col-span-1 relative h-[180px] sm:h-[240px] lg:h-[320px] rounded-[18px] sm:rounded-[20px] lg:rounded-[24px] overflow-hidden bg-[#e5e7eb] group cursor-pointer"
        >
          <img
            src={cat3}
            alt="Sweater"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 bg-gray-500/90 backdrop-blur-sm text-white px-4 sm:px-6 lg:px-8 py-2 rounded-lg text-[10px] sm:text-xs font-semibold whitespace-nowrap">
            Sweater
          </div>
        </motion.div>

        {/* Card 4: Stylish & Trending - Winter Wear */}
        <motion.div
          variants={scaleInVariant}
          className="col-span-1 md:col-span-2 lg:col-span-2 relative h-[180px] sm:h-[240px] md:h-[280px] lg:h-[320px] rounded-[18px] sm:rounded-[20px] lg:rounded-[24px] overflow-hidden bg-[#fae8ff] md:flex md:items-center md:px-8 group cursor-pointer"
        >
          {/* Mobile version - like other cards */}
          <div className="md:hidden absolute inset-0">
            <img
              src={cat4}
              alt="Winter Wear"
              className="absolute right-0 bottom-0 h-[90%] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-3 left-3 bg-[#059669] text-white px-2 py-1 text-[8px] font-bold tracking-widest rounded">
              EXCLUSIVE
            </div>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-gray-500/90 backdrop-blur-sm text-white px-5 py-2 rounded-lg text-[10px] font-semibold whitespace-nowrap z-10">
              Winter Wear
            </div>
          </div>

          {/* Tablet/Desktop version */}
          <div className="hidden md:flex relative z-10 flex-col items-start max-w-[50%]">
            <span className="bg-[#059669] text-white px-3 py-1 text-[9px] font-bold tracking-widest rounded mb-4">
              EXCLUSIVE
            </span>
            <p className="text-gray-600 text-xs mb-1 uppercase tracking-wider">NEW ARRIVALS</p>
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6 lg:mb-8 leading-tight">
              Stylish & Trending
            </h3>
            <div className="bg-gray-500/90 backdrop-blur-sm text-white px-8 lg:px-10 py-2 rounded-lg text-xs font-semibold">
              Winter Wear
            </div>
          </div>

          <img
            src={cat4}
            alt="Winter Wear"
            className="hidden md:block absolute right-0 bottom-0 h-[90%] lg:h-[95%] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </motion.div>

        {/* Card 5: Heels */}
        <motion.div
          variants={scaleInVariant}
          className="col-span-1 relative h-[180px] sm:h-[240px] lg:h-[320px] rounded-[18px] sm:rounded-[20px] lg:rounded-[24px] overflow-hidden bg-[#fffbeb] group cursor-pointer"
        >
          <img
            src={cat5}
            alt="Heels"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 bg-gray-500/90 backdrop-blur-sm text-white px-5 sm:px-8 lg:px-10 py-2 rounded-lg text-[10px] sm:text-xs font-semibold whitespace-nowrap">
            Heels
          </div>
        </motion.div>

        {/* Card 6: Stylish & Trending - Jackets */}
        <motion.div
          variants={scaleInVariant}
          className="col-span-1 md:col-span-2 lg:col-span-2 relative h-[180px] sm:h-[240px] md:h-[280px] lg:h-[320px] rounded-[18px] sm:rounded-[20px] lg:rounded-[24px] overflow-hidden bg-[#e0f8f8] md:flex md:items-center md:px-8 group cursor-pointer"
        >
          {/* Mobile version - like other cards */}
          <div className="md:hidden absolute inset-0">
            <img
              src={cat6}
              alt="Jackets"
              className="absolute right-0 bottom-0 h-[90%] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-3 left-3 bg-[#059669] text-white px-2 py-1 text-[8px] font-bold tracking-widest rounded">
              EXCLUSIVE
            </div>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-gray-500/90 backdrop-blur-sm text-white px-5 py-2 rounded-lg text-[10px] font-semibold whitespace-nowrap z-10">
              Jackets
            </div>
          </div>

          {/* Tablet/Desktop version */}
          <div className="hidden md:flex relative z-10 flex-col items-start max-w-[50%]">
            <span className="bg-[#059669] text-white px-3 py-1 text-[9px] font-bold tracking-widest rounded mb-4">
              EXCLUSIVE
            </span>
            <p className="text-gray-600 text-xs mb-1 uppercase tracking-wider">NEW ARRIVALS</p>
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6 lg:mb-8 leading-tight">
              Stylish & Trending
            </h3>
            <div className="bg-gray-500/90 backdrop-blur-sm text-white px-8 lg:px-10 py-2 rounded-lg text-xs font-semibold">
              Jackets
            </div>
          </div>

          <img
            src={cat6}
            alt="Jackets"
            className="hidden md:block absolute right-0 bottom-0 h-[90%] lg:h-[95%] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </motion.div>

        {/* Card 7: Bags */}
        <motion.div
          variants={scaleInVariant}
          className="col-span-1 relative h-[180px] sm:h-[240px] lg:h-[320px] rounded-[18px] sm:rounded-[20px] lg:rounded-[24px] overflow-hidden bg-[#e5e7eb] group cursor-pointer"
        >
          <img
            src={cat7}
            alt="Bags"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 bg-gray-500/90 backdrop-blur-sm text-white px-5 sm:px-8 lg:px-10 py-2 rounded-lg text-[10px] sm:text-xs font-semibold whitespace-nowrap">
            Bags
          </div>
        </motion.div>

        {/* Card 8: Men's Boots */}
        <motion.div
          variants={scaleInVariant}
          className="col-span-1 relative h-[180px] sm:h-[240px] lg:h-[320px] rounded-[18px] sm:rounded-[20px] lg:rounded-[24px] overflow-hidden bg-[#fffbeb] group cursor-pointer"
        >
          <img
            src={cat8}
            alt="Men's Boots"
            className="w-full h-[78%] sm:h-[80%] absolute bottom-8 sm:bottom-10 lg:bottom-12 object-contain transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 bg-gray-500/90 backdrop-blur-sm text-white px-4 sm:px-6 lg:px-8 py-2 rounded-lg text-[10px] sm:text-xs font-semibold whitespace-nowrap">
            Men's Boots
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Categories
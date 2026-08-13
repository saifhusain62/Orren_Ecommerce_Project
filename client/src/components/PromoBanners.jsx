import React from 'react'
import { motion } from 'framer-motion'
import cardimg1 from '../assets/cardimg1.png'
import cardimg2 from '../assets/cardimg2.png'
import cardimg3 from '../assets/cardimg3.png'
import cardimg1mobile from '../assets/cardimg1mobile.png'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const PromoBanners = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="w-full grid grid-cols-2 lg:grid-cols-4"
    >
      {/* Card 1 */}
      <motion.div
        variants={itemVariants}
        className="relative h-[180px] sm:h-[220px] bg-[#f4efe9] overflow-hidden group flex items-center justify-end px-3 sm:px-8 cursor-pointer"
      >
        <picture>
          <source media="(min-width: 1024px)" srcSet={cardimg1} />
          <img
            src={cardimg1mobile}
            alt="Hat Sales"
            className="absolute left-0 bottom-0 h-[90%] sm:h-full w-[52%] sm:w-[55%] object-contain object-left-bottom transition-transform duration-700 group-hover:scale-105"
          />
        </picture>
        <div className="relative z-10 flex flex-col items-end text-right">
          <h3 className="text-[14px] sm:text-[22px] font-black text-[#1a202c] leading-tight mb-1 sm:mb-2 tracking-tight">
            TRENDING<br />HAT SALES
          </h3>
          <p className="text-[#cc1f2f] text-[7px] sm:text-[10px] font-bold tracking-[0.15em] sm:tracking-[0.2em] mb-3 sm:mb-5">
            STARTING AT $99
          </p>
          <button
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-black px-3 sm:px-6 py-1.5 sm:py-2 text-[7px] sm:text-[10px] font-bold tracking-[0.15em] sm:tracking-[0.2em] hover:bg-black hover:text-white transition-colors rounded cursor-pointer"
          >
            BUY NOW!
          </button>
        </div>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        variants={itemVariants}
        className="relative h-[180px] sm:h-[220px] bg-[#1a1a1a] overflow-hidden group flex items-center justify-end px-3 sm:px-8 cursor-pointer"
      >
        <img
          src={cardimg2}
          alt="Sunglasses"
          className="absolute left-0 bottom-0 h-full w-[58%] sm:w-[60%] object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
        />
        <div className="relative z-10 flex flex-col items-end text-right">
          <span className="bg-[#cc1f2f] text-white text-[7px] sm:text-[9px] font-bold tracking-widest px-2 py-1 sm:px-2.5 rounded mb-2 sm:mb-3">
            FLASH SALE
          </span>
          <p className="text-gray-400 text-[6px] sm:text-[8px] font-bold tracking-[0.15em] sm:tracking-[0.2em] mb-1 leading-tight text-right uppercase">
            Top Brands<br />Summer Sunglasses
          </p>
          <p className="text-white text-[7px] sm:text-[10px] font-bold tracking-[0.15em] sm:tracking-[0.2em] mb-3 sm:mb-4">
            STARTING AT <span className="text-[#cc1f2f]">$199<span className="text-[6px] sm:text-[8px]">.99</span></span>
          </p>
          <button
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-gray-600 text-white px-3 sm:px-6 py-1.5 sm:py-2 text-[7px] sm:text-[10px] font-bold tracking-[0.15em] sm:tracking-[0.2em] hover:border-white transition-colors rounded cursor-pointer"
          >
            VIEW SALE
          </button>
        </div>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        variants={itemVariants}
        className="relative h-[180px] sm:h-[220px] bg-white overflow-hidden group flex items-center justify-start px-3 sm:px-8 cursor-pointer border-r border-gray-100"
      >
        <div className="relative z-10 flex flex-col items-start text-left">
          <span className="text-gray-400 text-[6px] sm:text-[8px] font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-1 sm:mb-2">
            GOLDENGAIT
          </span>
          <h3 className="font-['Dancing_Script',cursive] text-[18px] sm:text-[26px] text-gray-700 mb-0">
            Exclusive Shoes
          </h3>
          <div className="flex items-baseline text-[#cc1f2f] font-black mb-3 sm:mb-4">
            <span className="text-[28px] sm:text-[44px] leading-none">50%</span>
            <span className="text-[9px] sm:text-sm tracking-widest ml-1 text-gray-800 font-bold">OFF</span>
          </div>
          <button
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#cc1f2f] text-white px-3 sm:px-6 py-1.5 sm:py-2.5 text-[7px] sm:text-[10px] font-bold tracking-[0.15em] sm:tracking-[0.2em] hover:bg-black transition-colors rounded cursor-pointer"
          >
            GET YOURS!
          </button>
        </div>
        <img
          src={cardimg3}
          alt="Shoes"
          className="absolute right-0 bottom-0 h-[75%] sm:h-[90%] w-auto object-contain transition-transform duration-700 group-hover:scale-105"
        />
      </motion.div>

      {/* Card 4 */}
      <motion.div
        variants={itemVariants}
        className="relative h-[180px] sm:h-[220px] bg-white overflow-hidden group flex flex-col items-center justify-center px-3 sm:px-8 cursor-pointer"
      >
        {/* Floating discount circles */}
        <div className="absolute top-4 sm:top-6 right-10 sm:right-16 w-6 h-6 sm:w-8 sm:h-8 bg-pink-100 rounded-full flex items-center justify-center text-[6px] sm:text-[7px] font-bold text-pink-400 z-0">
          50%
        </div>
        <div className="absolute top-9 sm:top-12 right-1 sm:right-2 w-9 h-9 sm:w-12 sm:h-12 bg-pink-200 rounded-full flex items-center justify-center text-[8px] sm:text-[10px] font-bold text-white z-0 shadow-sm">
          70%
        </div>
        <div className="absolute bottom-10 sm:bottom-12 right-8 sm:right-12 w-8 h-8 sm:w-10 sm:h-10 bg-pink-200 rounded-full flex items-center justify-center text-[7px] sm:text-[9px] font-bold text-white z-0 shadow-sm">
          60%
        </div>
        <div className="absolute bottom-3 sm:bottom-4 right-12 sm:right-20 w-6 h-6 sm:w-8 sm:h-8 bg-pink-100 rounded-full flex items-center justify-center text-[6px] sm:text-[8px] font-bold text-pink-400 z-0">
          40%
        </div>

        <div className="relative z-10 flex flex-col items-center text-center -ml-1 sm:-ml-6">
          <span className="text-[#c19a5b] text-[7px] sm:text-[9px] font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-2 sm:mb-3">
            GOLDENGATE
          </span>
          <h3 className="text-[14px] sm:text-xl font-black text-[#1a202c] tracking-[0.15em] sm:tracking-widest mb-1">
            DEAL PROMOS
          </h3>
          <p className="text-gray-400 text-[7px] sm:text-[9px] font-bold tracking-[0.15em] sm:tracking-[0.2em] mb-3 sm:mb-5">
            STARTING AT $99
          </p>
          <button
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#1a1a1a] text-white px-4 sm:px-8 py-1.5 sm:py-2.5 text-[7px] sm:text-[10px] font-bold tracking-[0.15em] sm:tracking-[0.2em] hover:bg-[#cc1f2f] transition-colors rounded cursor-pointer"
          >
            SHOP NOW
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default PromoBanners
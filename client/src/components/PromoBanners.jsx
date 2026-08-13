import React from 'react'
import { motion } from 'framer-motion'
import cardimg1 from '../assets/cardimg1.png'
import cardimg2 from '../assets/cardimg2.png'
import cardimg3 from '../assets/cardimg3.png'

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
      className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
    >
      {/* Card 1 */}
      <motion.div variants={itemVariants} className="relative h-[220px] bg-[#f4efe9] overflow-hidden group flex items-center justify-end px-8 cursor-pointer">
        <img
          src={cardimg1}
          alt="Hat Sales"
          className="absolute left-0 bottom-0 h-full w-[55%] object-contain object-left-bottom transition-transform duration-700 group-hover:scale-105"
        />
        <div className="relative z-10 flex flex-col items-end text-right">
          <h3 className="text-[22px] font-black text-[#1a202c] leading-tight mb-2 tracking-tight">
            TRENDING<br />HAT SALES
          </h3>
          <p className="text-[#cc1f2f] text-[10px] font-bold tracking-[0.2em] mb-5">STARTING AT $99</p>
          <button onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} className="border-2 border-black px-6 py-2 text-[10px] font-bold tracking-[0.2em] hover:bg-black hover:text-white transition-colors rounded cursor-pointer">
            BUY NOW!
          </button>
        </div>
      </motion.div>

      {/* Card 2 */}
      <motion.div variants={itemVariants} className="relative h-[220px] bg-[#1a1a1a] overflow-hidden group flex items-center justify-end px-8 cursor-pointer">
        <img
          src={cardimg2}
          alt="Sunglasses"
          className="absolute left-0 bottom-0 h-full w-[60%] object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
        />
        <div className="relative z-10 flex flex-col items-end text-right">
          <span className="bg-[#cc1f2f] text-white text-[9px] font-bold tracking-widest px-2.5 py-1 rounded mb-3">FLASH SALE</span>
          <p className="text-gray-400 text-[8px] font-bold tracking-[0.2em] mb-1.5 leading-tight text-right uppercase">
            Top Brands<br />Summer Sunglasses
          </p>
          <p className="text-white text-[10px] font-bold tracking-[0.2em] mb-4">STARTING AT <span className="text-[#cc1f2f]">$199<span className="text-[8px]">.99</span></span></p>
          <button onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} className="border-2 border-gray-600 text-white px-6 py-2 text-[10px] font-bold tracking-[0.2em] hover:border-white transition-colors rounded cursor-pointer">
            VIEW SALE
          </button>
        </div>
      </motion.div>

      {/* Card 3 */}
      <motion.div variants={itemVariants} className="relative h-[220px] bg-white overflow-hidden group flex items-center justify-start px-8 cursor-pointer border-r border-gray-100">
        <div className="relative z-10 flex flex-col items-start text-left">
          <span className="text-gray-400 text-[8px] font-bold tracking-[0.3em] uppercase mb-2">GOLDENGAIT</span>
          <h3 className="font-['Dancing_Script',cursive] text-[26px] text-gray-700 mb-0">Exclusive Shoes</h3>
          <div className="flex items-baseline text-[#cc1f2f] font-black mb-4">
            <span className="text-[44px] leading-none">50%</span>
            <span className="text-sm tracking-widest ml-1 text-gray-800 font-bold">OFF</span>
          </div>
          <button onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#cc1f2f] text-white px-6 py-2.5 text-[10px] font-bold tracking-[0.2em] hover:bg-black transition-colors rounded cursor-pointer">
            GET YOURS!
          </button>
        </div>
        <img
          src={cardimg3}
          alt="Shoes"
          className="absolute right-0 bottom-0 h-[90%] w-auto object-contain transition-transform duration-700 group-hover:scale-105"
        />
      </motion.div>

      {/* Card 4 */}
      <motion.div variants={itemVariants} className="relative h-[220px] bg-white overflow-hidden group flex flex-col items-center justify-center px-8 cursor-pointer">
        {/* Floating discount circles */}
        <div className="absolute top-6 right-16 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center text-[7px] font-bold text-pink-400 z-0">50%</div>
        <div className="absolute top-12 right-2 w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center text-[10px] font-bold text-white z-0 shadow-sm">70%</div>
        <div className="absolute bottom-12 right-12 w-10 h-10 bg-pink-200 rounded-full flex items-center justify-center text-[9px] font-bold text-white z-0 shadow-sm">60%</div>
        <div className="absolute bottom-4 right-20 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center text-[8px] font-bold text-pink-400 z-0">40%</div>

        <div className="relative z-10 flex flex-col items-center text-center -ml-6">
          <span className="text-[#c19a5b] text-[9px] font-bold tracking-[0.3em] uppercase mb-3">GOLDENGATE</span>
          <h3 className="text-xl font-black text-[#1a202c] tracking-widest mb-1.5">DEAL PROMOS</h3>
          <p className="text-gray-400 text-[9px] font-bold tracking-[0.2em] mb-5">STARTING AT $99</p>
          <button onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#1a1a1a] text-white px-8 py-2.5 text-[10px] font-bold tracking-[0.2em] hover:bg-[#cc1f2f] transition-colors rounded cursor-pointer">
            SHOP NOW
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default PromoBanners

import React from 'react'
import { motion } from 'framer-motion'
import sale1 from '../assets/sale1.png'
import sale2 from '../assets/sale2.png'

const SaleBanner = () => {
  return (
    <section className="w-full bg-[#c0d3e5] flex flex-col md:flex-row items-center justify-between overflow-hidden h-auto md:h-[500px] mb-20 overflow-hidden">

      {/* Left Image */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/4 h-[300px] md:h-full"
      >
        <img
          src={sale1}
          alt="Sale Fashion Left"
          className="w-full h-full object-cover object-top"
        />
      </motion.div>

      {/* Center Text Content */}
      <motion.div 
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        className="w-full md:w-1/3 flex flex-col items-center justify-center text-center py-12 md:py-0 px-4"
      >
        {/* Top Pill */}
        <div className="bg-[#1A1A2E] text-white text-[10px] uppercase tracking-[0.2em] font-bold px-4 py-1.5 mb-4 rounded-md">
          END OF SEASON
        </div>

        {/* Main Title */}
        <h2 className="text-[90px] md:text-[110px] font-black text-[#1a202c] leading-none tracking-tight mb-2">
          SALE
        </h2>

        {/* Discount Text */}
        <div className="flex items-start justify-center gap-2 font-bold text-[#1a202c] mb-6">
          <span className="text-xs md:text-sm tracking-widest uppercase mt-2">UP TO</span>
          <span className="text-[60px] md:text-[80px] leading-none tracking-tighter">70%</span>
          <span className="text-lg md:text-2xl mt-1">OFF*</span>
        </div>

        {/* Disclaimer */}
        <p className="text-[12px] tracking-[0.15em] text-gray-700 uppercase mb-8">
          *EXCLUDES SELECTED LINES
        </p>

        {/* CTA Button */}
        <button className="bg-[#cc1f2f] text-white px-12 py-3.5 rounded text-sm font-bold tracking-wider hover:bg-black transition-colors shadow-lg">
          Shop Now
        </button>
      </motion.div>

      {/* Right Image */}
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/4 h-[300px] md:h-full"
      >
        <img
          src={sale2}
          alt="Sale Fashion Right"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

    </section>
  )
}

export default SaleBanner

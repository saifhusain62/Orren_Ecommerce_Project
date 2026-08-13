import React from 'react'
import { motion } from 'framer-motion'
import sale1 from '../assets/sale1.png'
import sale2 from '../assets/sale2.png'

const SaleBanner = () => {
  const handleShopNow = () => {
    document
      .getElementById('products')
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="w-full bg-[#c0d3e5] mb-12 sm:mb-16 lg:mb-20 overflow-hidden">

      {/* Mobile Layout - stacked */}
      <div className="flex flex-col md:hidden">

        {/* Mobile: 2 images side by side on top */}
        <div className="flex flex-row w-full">
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-1/2"
          >
            <img
              src={sale1}
              alt="Sale Fashion Left"
              className="w-full h-full object-cover object-top"
              style={{ display: 'block' }}
            />
          </motion.div>

          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-1/2"
          >
            <img
              src={sale2}
              alt="Sale Fashion Right"
              className="w-full h-full object-cover object-center"
              style={{ display: 'block' }}
            />
          </motion.div>
        </div>

        {/* Mobile: Text content below images */}
        <motion.div
          initial={{ y: 40, opacity: 0, scale: 0.95 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="w-full flex flex-col items-center justify-center text-center py-10 px-4"
        >
          {/* Top Pill */}
          <div className="bg-[#1A1A2E] text-white text-[9px] uppercase tracking-[0.15em] font-bold px-3 py-1.5 mb-4 rounded-md">
            END OF SEASON
          </div>

          {/* Main Title */}
          <h2 className="text-[72px] font-black text-[#1a202c] leading-none tracking-tight mb-2">
            SALE
          </h2>

          {/* Discount Text */}
          <div className="flex items-start justify-center gap-1.5 font-bold text-[#1a202c] mb-5">
            <span className="text-[10px] tracking-widest uppercase mt-2">
              UP TO
            </span>
            <span className="text-[52px] leading-none tracking-tighter">
              70%
            </span>
            <span className="text-base mt-1">
              OFF*
            </span>
          </div>

          {/* Disclaimer */}
          <p className="text-[9px] tracking-[0.1em] text-gray-700 uppercase mb-6">
            *EXCLUDES SELECTED LINES
          </p>

          {/* CTA Button */}
          <button
            type="button"
            onClick={handleShopNow}
            className="bg-[#cc1f2f] text-white px-10 py-3 rounded text-xs font-bold tracking-wider hover:bg-black transition-colors shadow-lg cursor-pointer"
          >
            Shop Now
          </button>
        </motion.div>
      </div>

      {/* Tablet Layout - sm to md */}
      <div className="hidden md:flex lg:hidden flex-row items-stretch justify-between h-[420px]">

        {/* Left Image */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-[28%] h-full"
        >
          <img
            src={sale1}
            alt="Sale Fashion Left"
            className="w-full h-full object-cover object-top"
          />
        </motion.div>

        {/* Center Text */}
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="flex-1 flex flex-col items-center justify-center text-center px-6 py-8"
        >
          {/* Top Pill */}
          <div className="bg-[#1A1A2E] text-white text-[9px] uppercase tracking-[0.15em] font-bold px-3 py-1.5 mb-4 rounded-md">
            END OF SEASON
          </div>

          {/* Main Title */}
          <h2 className="text-[90px] font-black text-[#1a202c] leading-none tracking-tight mb-2">
            SALE
          </h2>

          {/* Discount Text */}
          <div className="flex items-start justify-center gap-2 font-bold text-[#1a202c] mb-5">
            <span className="text-xs tracking-widest uppercase mt-2">
              UP TO
            </span>
            <span className="text-[65px] leading-none tracking-tighter">
              70%
            </span>
            <span className="text-xl mt-1">
              OFF*
            </span>
          </div>

          {/* Disclaimer */}
          <p className="text-[11px] tracking-[0.13em] text-gray-700 uppercase mb-7">
            *EXCLUDES SELECTED LINES
          </p>

          {/* CTA Button */}
          <button
            type="button"
            onClick={handleShopNow}
            className="bg-[#cc1f2f] text-white px-10 py-3 rounded text-sm font-bold tracking-wider hover:bg-black transition-colors shadow-lg cursor-pointer"
          >
            Shop Now
          </button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-[28%] h-full"
        >
          <img
            src={sale2}
            alt="Sale Fashion Right"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </div>

      {/* Desktop Layout - lg and above (UNCHANGED) */}
      <div className="hidden lg:flex flex-row items-stretch justify-between h-[500px]">

        {/* Left Image */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-1/4 h-full"
        >
          <img
            src={sale1}
            alt="Sale Fashion Left"
            className="w-full h-full object-cover object-top"
          />
        </motion.div>

        {/* Center Text */}
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="w-1/2 flex flex-col items-center justify-center text-center py-0 px-4"
        >
          {/* Top Pill */}
          <div className="bg-[#1A1A2E] text-white text-[10px] uppercase tracking-[0.2em] font-bold px-4 py-1.5 mb-4 rounded-md">
            END OF SEASON
          </div>

          {/* Main Title */}
          <h2 className="text-[110px] font-black text-[#1a202c] leading-none tracking-tight mb-2">
            SALE
          </h2>

          {/* Discount Text */}
          <div className="flex items-start justify-center gap-2 font-bold text-[#1a202c] mb-6">
            <span className="text-sm tracking-widest uppercase mt-2">
              UP TO
            </span>
            <span className="text-[80px] leading-none tracking-tighter">
              70%
            </span>
            <span className="text-2xl mt-1">
              OFF*
            </span>
          </div>

          {/* Disclaimer */}
          <p className="text-[12px] tracking-[0.15em] text-gray-700 uppercase mb-8">
            *EXCLUDES SELECTED LINES
          </p>

          {/* CTA Button */}
          <button
            type="button"
            onClick={handleShopNow}
            className="bg-[#cc1f2f] text-white px-12 py-3.5 rounded text-sm font-bold tracking-wider hover:bg-black transition-colors shadow-lg cursor-pointer"
          >
            Shop Now
          </button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-1/4 h-full"
        >
          <img
            src={sale2}
            alt="Sale Fashion Right"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </div>

    </section>
  )
}

export default SaleBanner
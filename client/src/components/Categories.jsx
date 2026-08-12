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
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const scaleInVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
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
    <section className="w-full max-w-[1440px] mx-auto px-6 py-20 bg-white">
      {/* Header Section */}
      <motion.div 
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col items-center text-center mb-16"
      >
        <h2 className="text-[32px] text-[#1a202c] mb-4">
          <span className="font-black">CATEGORIES</span> YOUR MAY INTERESTED
        </h2>
        <p className="text-black max-w-2xl text-[18px] leading-relaxed">
          Discover fresh looks and modern outfits that define your unique style now. Perfect for
          any occasion, from casual outings to special events.
        </p>
      </motion.div>

      {/* Grid Layout 5 columns */}
      <motion.div 
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
      >
        {/* Row 1 */}
        {/* Card 1: Fashion Caps */}
        <motion.div variants={scaleInVariant} className="col-span-1 relative h-[320px] rounded-[24px] overflow-hidden bg-[#e5e7eb] group cursor-pointer">
          <img src={cat1} alt="Fashion Caps" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gray-500/90 backdrop-blur-sm text-white px-8 py-2 rounded-lg text-xs font-semibold whitespace-nowrap">
            Fashion Caps
          </div>
        </motion.div>

        {/* Card 2: Women's Blazer */}
        <motion.div variants={scaleInVariant} className="col-span-1 relative h-[320px] rounded-[24px] overflow-hidden bg-[#fce4ec] group cursor-pointer">
          <img src={cat2} alt="Women's Blazer" className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[95%] w-full object-contain transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gray-500/90 backdrop-blur-sm text-white px-6 py-2 rounded-lg text-xs font-semibold whitespace-nowrap z-10">
            Women's Blazer
          </div>
        </motion.div>

        {/* Card 3: Sweater */}
        <motion.div variants={scaleInVariant} className="col-span-1 relative h-[320px] rounded-[24px] overflow-hidden bg-[#e5e7eb] group cursor-pointer">
          <img src={cat3} alt="Sweater" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gray-500/90 backdrop-blur-sm text-white px-8 py-2 rounded-lg text-xs font-semibold whitespace-nowrap">
            Sweater
          </div>
        </motion.div>

        {/* Card 4: Big span-2 Pink */}
        <motion.div variants={scaleInVariant} className="col-span-1 lg:col-span-2 relative h-[320px] rounded-[24px] overflow-hidden bg-[#fae8ff] flex items-center px-8 group cursor-pointer">
          <div className="relative z-10 flex flex-col items-start max-w-[50%]">
            <span className="bg-[#059669] text-white px-3 py-1 text-[9px] font-bold tracking-widest rounded mb-4">EXCLUSIVE</span>
            <p className="text-gray-600 text-xs mb-1 uppercase tracking-wider">NEW ARRIVALS</p>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 leading-tight">Stylish & Trending</h3>
            <div className="bg-gray-500/90 backdrop-blur-sm text-white px-10 py-2 rounded-lg text-xs font-semibold">
              Winter Wear
            </div>
          </div>
          <img src={cat4} alt="Winter Wear" className="absolute right-0 bottom-0 h-[95%] w-auto object-contain transition-transform duration-500 group-hover:scale-105" />
        </motion.div>

        {/* Row 2 */}
        {/* Card 5: Heels */}
        <motion.div variants={scaleInVariant} className="col-span-1 relative h-[320px] rounded-[24px] overflow-hidden bg-[#fffbeb] group cursor-pointer">
          <img src={cat5} alt="Heels" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gray-500/90 backdrop-blur-sm text-white px-10 py-2 rounded-lg text-xs font-semibold whitespace-nowrap">
            Heels
          </div>
        </motion.div>

        {/* Card 6: Big span-2 Cyan */}
        <motion.div variants={scaleInVariant} className="col-span-1 lg:col-span-2 relative h-[320px] rounded-[24px] overflow-hidden bg-[#e0f8f8] flex items-center px-8 group cursor-pointer">
          <div className="relative z-10 flex flex-col items-start max-w-[50%]">
            <span className="bg-[#059669] text-white px-3 py-1 text-[9px] font-bold tracking-widest rounded mb-4">EXCLUSIVE</span>
            <p className="text-gray-600 text-xs mb-1 uppercase tracking-wider">NEW ARRIVALS</p>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 leading-tight">Stylish & Trending</h3>
            <div className="bg-gray-500/90 backdrop-blur-sm text-white px-10 py-2 rounded-lg text-xs font-semibold">
              Jackets
            </div>
          </div>
          <img src={cat6} alt="Jackets" className="absolute right-0 bottom-0 h-[95%] w-auto object-contain transition-transform duration-500 group-hover:scale-105" />
        </motion.div>

        {/* Card 7: Bags */}
        <motion.div variants={scaleInVariant} className="col-span-1 relative h-[320px] rounded-[24px] overflow-hidden bg-[#e5e7eb] group cursor-pointer">
          <img src={cat7} alt="Bags" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gray-500/90 backdrop-blur-sm text-white px-10 py-2 rounded-lg text-xs font-semibold whitespace-nowrap">
            Bags
          </div>
        </motion.div>

        {/* Card 8: Men's Boots */}
        <motion.div variants={scaleInVariant} className="col-span-1 relative h-[320px] rounded-[24px] overflow-hidden bg-[#fffbeb] group cursor-pointer">
          <img src={cat8} alt="Men's Boots" className="w-full h-[80%] absolute bottom-12 object-contain transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gray-500/90 backdrop-blur-sm text-white px-8 py-2 rounded-lg text-xs font-semibold whitespace-nowrap">
            Men's Boots
          </div>
        </motion.div>

      </motion.div>
    </section>
  )
}

export default Categories

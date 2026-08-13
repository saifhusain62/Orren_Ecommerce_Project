import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import collectionbanner from '../assets/collectionbanner.png'

const CollectionBanner = () => {
  const bgImage = collectionbanner

  return (
    <section className="w-full max-w-[1450px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-6 pb-12 sm:pb-16 lg:pb-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-100px' }}
        className="w-full h-[260px] sm:h-[360px] md:h-[500px] lg:h-[700px] rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] overflow-hidden relative flex flex-col items-center justify-center text-center p-4 sm:p-6 shadow-md"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage})` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center px-3 sm:px-6">

          {/* Badge */}
          <span className="bg-black/30 backdrop-blur-md text-white text-[8px] sm:text-[10px] md:text-xs font-bold uppercase tracking-widest px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-5 md:mb-6">
            Summer 2026 Collection
          </span>

          {/* Heading */}
          <h2 className="text-white text-[20px] sm:text-[30px] md:text-[42px] lg:text-[56px] font-black leading-tight max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-4xl mb-4 sm:mb-6 md:mb-8">
            VALENTIN PAUL ESSENTIAL
            <br className="hidden sm:block" />
            {' '}COLLECTION
          </h2>

          {/* CTA Button */}
          <button className="flex items-center gap-1.5 sm:gap-2 text-white font-bold text-xs sm:text-sm md:text-base tracking-wide hover:opacity-80 transition-opacity group">
            Shop Collection
            <FiArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </motion.div>
    </section>
  )
}

export default CollectionBanner
import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import collectionbanner from '../assets/collectionbanner.png'

const CollectionBanner = () => {
  // Using a vibrant fashion placeholder from Unsplash
  const bgImage = collectionbanner

  return (
    <section className="w-full max-w-[1450px] mx-auto px-6 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="w-full h-[400px] md:h-[700px] rounded-[24px] overflow-hidden relative flex flex-col items-center justify-center text-center p-6 shadow-md"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage})` }}
        />

        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          <span className="bg-black/30 backdrop-blur-md text-white text-[10px] md:text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Summer 2026 Collection
          </span>

          <h2 className="text-white text-[32px] md:text-[48px] lg:text-[56px] font-black leading-tight max-w-4xl mb-8">
            VALENTIN PAUL ESSENTIAL<br />COLLECTION
          </h2>

          <button className="flex items-center gap-2 text-white font-bold text-sm md:text-base tracking-wide hover:opacity-80 transition-opacity group">
            Shop Collection
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.div>
    </section>
  )
}

export default CollectionBanner

import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import new1 from '../assets/new1.png'
import new2 from '../assets/new2.png'
import new3 from '../assets/new3.png'

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

const NewArrivals = () => {
  const cards = [
    {
      id: 1,
      image: new1,
      bgClass: "bg-[#fde2e4]",
      title: "Blooming Trends Fresh 2026",
      collection: "FALL COLLECTION"
    },
    {
      id: 2,
      image: new2,
      bgClass: "bg-[#f3e1f7]",
      title: "Blooming Trends Fresh 2026",
      collection: "FALL COLLECTION"
    },
    {
      id: 3,
      image: new3,
      bgClass: "bg-[#dff3fa]",
      title: "Blooming Trends Fresh 2026",
      collection: "FALL COLLECTION"
    }
  ]

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
        <h2 className="text-4xl text-[#1a202c] mb-4">
          <span className="font-black">NEW</span> ARRIVALS
        </h2>
        <p className="text-gray-500 max-w-2xl text-sm leading-relaxed">
          Discover fresh looks and modern outfits that define your unique style now. Perfect for
          any occasion, from casual outings to special events.
        </p>
      </motion.div>

      {/* Cards Section */}
      <div className="relative flex items-center justify-center">
        {/* Left Arrow */}
        <button className="absolute left-[-20px] lg:left-[-40px] w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:text-black hover:border-gray-400 transition-colors z-10 hidden md:flex shadow-sm">
          <FiChevronLeft size={20} />
        </button>

        <motion.div 
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4"
        >
          {cards.map((card) => (
            <motion.div
              variants={fadeUpVariant}
              key={card.id}
              className={`relative group rounded-[32px] overflow-hidden h-[500px] ${card.bgClass}`}
            >
              {/* Image */}
              <img
                src={card.image}
                alt={card.title}
                className="absolute bottom-0 left-0 w-full h-[95%] object-contain object-bottom transition-transform duration-700 group-hover:scale-105 z-0"
              />

              {/* Hover Cutout Container with Smooth Curves */}
              <div className="absolute top-0 right-0 z-20 
                              opacity-0 translate-x-4 -translate-y-4 
                              group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 
                              transition-all duration-400 ease-out">

                {/* The white background wrapper */}
                <div className="bg-white p-3 rounded-bl-[24px] relative">

                  {/* Left Inverted Curve */}
                  <svg width="24" height="24" viewBox="0 0 24 24" className="absolute top-0 -left-[24px] text-white fill-current">
                    <path d="M 0 0 H 24 V 24 A 24 24 0 0 0 0 0 Z" />
                  </svg>

                  {/* Bottom Inverted Curve */}
                  <svg width="24" height="24" viewBox="0 0 24 24" className="absolute -bottom-[24px] right-0 text-white fill-current">
                    <path d="M 0 0 H 24 V 24 A 24 24 0 0 0 0 0 Z" />
                  </svg>

                  {/* The Arrow Button */}
                  <button className="relative z-10 w-14 h-14 bg-white border border-gray-200 rounded-[16px] flex items-center justify-center hover:bg-gray-50 hover:shadow-md transition-all">
                    <FiArrowUpRight size={24} className="text-gray-500" />
                  </button>
                </div>
              </div>

              {/* Bottom Info Block */}
              <div className="absolute bottom-5 left-5 right-5 bg-gray-100/70 backdrop-blur-sm rounded-[24px] p-6 flex flex-col items-center text-center transition-transform duration-500 group-hover:-translate-y-1">
                <span className="text-[10px] font-bold tracking-widest text-gray-600 mb-2 uppercase">
                  {card.collection}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 tracking-tight">
                  {card.title}
                </h3>
                <button className="bg-[#cc1f2f] text-white px-8 py-2.5 rounded-md text-xs font-bold tracking-wider hover:bg-black transition-colors shadow-lg ">
                  SHOP NOW
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Arrow */}
        <button className="absolute right-[-20px] lg:right-[-40px] w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:text-black hover:border-gray-400 transition-colors z-10 hidden md:flex shadow-sm">
          <FiChevronRight size={20} />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center justify-center gap-2 mt-12">
        <div className="w-8 h-2 bg-gray-600 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
      </div>
    </section>
  )
}

export default NewArrivals

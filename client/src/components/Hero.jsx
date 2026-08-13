import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import hero1img from '../assets/hero1.png'
import hero2img from '../assets/hero2.png'
import hero3img from '../assets/hero3.png'
import hero4img from '../assets/hero4.png'

// heroman img 

import heromanimg1 from '../assets/heroman1.png'
import heromanimg2 from '../assets/heroman2.png'
import heromanimg3 from '../assets/heroman3.png'
import heromanimg4 from '../assets/heroman4.png'

// hero baby img 

import herobabyimg1 from '../assets/herobabyimg1.png'
import herobabyimg2 from '../assets/herobabyimg2.png'
import herobabyimg3 from '../assets/herobabyimg3.png'
import herobabyimg4 from '../assets/herobabyimg4.png'

const categoryData = {
  Women: [
    {
      id: 1,
      leftImage: hero1img,
      rightImage: hero2img,
      smallText: "Summer Fashion Trends",
      bigText: "WRAP UP IN STYLE",
      discount: "80%",
      price: "$199"
    },
    {
      id: 2,
      leftImage: hero3img,
      rightImage: hero4img,
      smallText: "Winter Collection",
      bigText: "COZY & ELEGANT",
      discount: "50%",
      price: "$299"
    }
  ],
  Men: [
    {
      id: 1,
      leftImage: heromanimg1,
      rightImage: heromanimg2,
      smallText: "Men's Classics",
      bigText: "SHARP & BOLD",
      discount: "60%",
      price: "$149"
    },
    {
      id: 2,
      leftImage: heromanimg3,
      rightImage: heromanimg4,
      smallText: "Casual Wear",
      bigText: "STREET STYLE",
      discount: "40%",
      price: "$129"
    }
  ],
  Kids: [
    {
      id: 1,
      leftImage: herobabyimg1,
      rightImage: herobabyimg4,
      smallText: "Kids Collection",
      bigText: "PLAYFUL & FUN",
      discount: "70%",
      price: "$99"
    },
    {
      id: 2,
      leftImage: herobabyimg2,
      rightImage: herobabyimg3,
      smallText: "Back to School",
      bigText: "SMART LOOKS",
      discount: "30%",
      price: "$79"
    }
  ]
}

const Hero = ({ category }) => {
  const [current, setCurrent] = useState(0)

  // Reset slide index when category changes
  React.useEffect(() => {
    setCurrent(0)
  }, [category])

  const slides = categoryData[category] || categoryData.Women

  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))

  return (
    <div id="home" className="relative w-full h-[75vh] min-h-[600px] max-h-[800px] overflow-hidden bg-white group flex">
      {/* Vertical grid lines */}
      <div className="absolute inset-0 flex justify-between px-[10%] pointer-events-none z-0">
        <div className="w-[1px] h-full bg-gray-100"></div>
        <div className="w-[1px] h-full bg-gray-100"></div>
        <div className="w-[1px] h-full bg-gray-100"></div>
        <div className="w-[1px] h-full bg-gray-100"></div>
        <div className="w-[1px] h-full bg-gray-100"></div>
      </div>

      <button onClick={prevSlide} className="cursor-pointer absolute left-8 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 hover:text-black hover:border-gray-400 z-20 transition-all opacity-70 hover:opacity-100">
        <FiChevronLeft size={20} />
      </button>

      <div className="flex-1 relative w-full h-full flex justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Left Image */}
            <motion.img
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              src={slides[current].leftImage}
              className="absolute -left-[20%] md:left-0 lg:left-[10%] bottom-0 h-[60%] md:h-[75%] lg:h-[85%] object-cover w-auto z-0 opacity-40 lg:opacity-100"
              alt="Model Left"
            />
            {/* Right Image */}
            <motion.img
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              src={slides[current].rightImage}
              className="absolute -right-[20%] md:right-0 lg:right-[10%] bottom-0 h-[60%] md:h-[75%] lg:h-[85%] object-cover w-auto z-0 opacity-40 lg:opacity-100"
              alt="Model Right"
            />
          </motion.div>
        </AnimatePresence>

        {/* Center Content */}
        <div className="z-10 flex flex-col items-center justify-center text-center mt-[-5%]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center bg-white/50 backdrop-blur-md p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] w-[90vw] max-w-[360px] min-h-[420px] md:w-auto md:max-w-none md:min-h-0"
            >
              <div className="font-dancing italic text-[#C8102E] text-[16px] md:text-[20px] mb-2 leading-none">
                {slides[current].smallText}
              </div>
              <h1 className="text-[32px] md:text-[54px] font-bold text-[#1a202c] tracking-tight mb-2 leading-none">
                {slides[current].bigText}
              </h1>
              <div className="flex items-baseline justify-center font-black text-[#0f172a] mt-2">
                <span className="text-[80px] md:text-[140px] leading-none tracking-tighter">{slides[current].discount}</span>
                <span className="text-[24px] md:text-[40px] ml-2 md:ml-4 tracking-widest font-bold text-gray-800">OFF</span>
              </div>
              <div className="flex items-center mt-6 gap-3 font-semibold text-gray-500 tracking-[0.2em] text-[13px]">
                STARTING AT
                <span className="bg-[#cc1f2f] text-white px-3 py-1 text-lg font-bold rounded">
                  {slides[current].price}
                </span>
              </div>
              <button onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} className="cursor-pointer mt-10 border-[3px] border-black px-10 py-3.5 text-sm font-bold tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-300 rounded-xl hover:shadow-xl">
                SHOP NOW
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <button onClick={nextSlide} className="cursor-pointer absolute right-8 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 hover:text-black hover:border-gray-400 z-20 transition-all opacity-70 hover:opacity-100">
        <FiChevronRight size={20} />
      </button>

      {/* Pagination */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`cursor-pointer h-2.5 rounded-full transition-all duration-300 ${idx === current ? 'w-6 bg-[#cc1f2f]' : 'w-2.5 bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Hero

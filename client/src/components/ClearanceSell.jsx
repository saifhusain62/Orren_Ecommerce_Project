import React from 'react'
import { FiHeart, FiEye, FiStar, FiShoppingBag } from 'react-icons/fi'
import card1img from '../assets/card1.png'
import card2img from '../assets/card2.png'
import card3img from '../assets/card3.png'
import card4img from '../assets/card4.png'

const ClearanceSell = () => {
  const cards = [
    {
      id: 1,
      bgClass: 'bg-[#daf5ff]',
      image: card1img,
    },
    {
      id: 2,
      bgClass: 'bg-[#eef2ff]',
      image: card2img,
    },
    {
      id: 3,
      bgClass: 'bg-[#fef3c7]',
      image: card3img,
    },
    {
      id: 4,
      bgClass: 'bg-[#ecfccb]',
      image: card4img,
    },
  ]

  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 py-20 bg-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-[32px] text-[#1a202c] mb-4">
            <span className="font-black">LAST CHANCE</span> CLEARANCE SELL
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Discover fresh looks and modern outfits that define your unique style now. Perfect for
            any occasion, from casual outings to special events.
          </p>
        </div>

        {/* Timer */}
        <div className="flex gap-2">
          {[
            { value: '160', label: 'Days' },
            { value: '07', label: 'Hrs' },
            { value: '22', label: 'Mins' },
            { value: '40', label: 'Secs' },
          ].map((time, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="bg-[#2d2d2d] text-white text-xl font-bold w-12 h-10 flex items-center justify-center rounded-t-md">
                {time.value}
              </div>
              <div className="bg-[#1f1f1f] text-gray-300 text-[10px] uppercase w-12 h-6 flex items-center justify-center rounded-b-md">
                {time.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div key={card.id} className="group relative flex flex-col bg-white">

            {/* Image Box */}
            <div className={`relative h-[380px] group-hover:h-[320px] transition-all duration-400 ease-out rounded-[32px] overflow-hidden ${card.bgClass} cursor-pointer`}>
              <img
                src={card.image}
                alt="Product"
                className="absolute bottom-0 left-0 w-full h-[95%] object-contain object-bottom transition-transform duration-700 group-hover:scale-105 z-0"
              />

              {/* Heart Icon */}
              <button className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 shadow-sm transition-colors z-10">
                <FiHeart size={14} />
              </button>

              {/* Eye Icon Hover Cutout Container */}
              <div className="absolute bottom-0 right-0 z-20 
                              opacity-0 translate-x-4 translate-y-4 
                              group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 
                              transition-all duration-400 ease-out">
                <div className="bg-white p-3 rounded-tl-[24px] relative">
                  
                  {/* Left Inverted Curve */}
                  <svg width="24" height="24" viewBox="0 0 24 24" className="absolute bottom-0 -left-[24px] text-white fill-current">
                    <path d="M 24 0 V 24 H 0 A 24 24 0 0 0 24 0 Z" />
                  </svg>

                  {/* Top Inverted Curve */}
                  <svg width="24" height="24" viewBox="0 0 24 24" className="absolute -top-[24px] right-0 text-white fill-current">
                    <path d="M 24 0 V 24 H 0 A 24 24 0 0 0 24 0 Z" />
                  </svg>

                  <button className="relative z-10 w-14 h-14 bg-white border border-gray-200 rounded-[16px] flex items-center justify-center text-[#2d2d2d] hover:bg-gray-50 hover:shadow-md transition-all">
                    <FiEye size={24} />
                  </button>
                </div>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex items-center gap-2 mt-6">
              {[1, 2, 3, 4].map((thumb) => (
                <div key={thumb} className="w-12 h-14 rounded-xl overflow-hidden border border-gray-200 cursor-pointer">
                  <img src={card.image} alt="thumb" className="w-full h-full object-cover" />
                </div>
              ))}
              <span className="text-[10px] text-gray-500 font-medium ml-1">+12 More</span>
            </div>

            {/* Info */}
            <div className="mt-4 flex flex-col">
              <span className="text-[#3b82f6] text-[11px] font-semibold mb-1">Fashion</span>
              <h3 className="text-[#1a202c] font-bold text-sm mb-2 cursor-pointer hover:text-blue-600 transition-colors">
                Classic Slim-Fit Denim Jacket
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-3">
                <div className="flex text-[#f59e0b]">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} size={10} className="fill-current" />
                  ))}
                </div>
                <span className="text-gray-400 text-[10px] ml-1">(25)</span>
              </div>

              {/* Price Row */}
              <div className="flex items-center gap-2 mb-2 transition-all duration-300">
                <span className="text-gray-400 text-xs line-through">$295.00</span>
                <span className="text-[#1a202c] font-black text-lg">$179.98</span>
                <span className="bg-[#ef4444] text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                  -30%
                </span>
              </div>

              {/* Add to Cart Hover Button */}
              <div className="h-0 overflow-hidden opacity-0 mt-0 group-hover:h-12 group-hover:mt-3 group-hover:opacity-100 transition-all duration-400 ease-out">
                <button className="w-full h-full bg-[#cc1f2f] text-white rounded-lg text-xs font-bold tracking-wider flex items-center justify-center gap-2 hover:bg-black transition-colors shadow-md">
                  <FiShoppingBag size={14} />
                  ADD TO CART
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-12">
        <button className="bg-[#cc1f2f] text-white px-10 py-3.5 rounded-lg text-sm font-bold tracking-wider hover:bg-black transition-colors shadow-lg">
          View More
        </button>
      </div>

    </section>
  )
}

export default ClearanceSell

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiHeart, FiEye, FiStar, FiShoppingBag } from 'react-icons/fi'
import card1img from '../assets/card1.png'
import card2img from '../assets/card2.png'
import card3img from '../assets/card3.png'
import card4img from '../assets/card4.png'
import QuickViewModal from './QuickViewModal'
import { useCart } from '../context/CartContext'
import { useLocation } from 'react-router-dom'

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const ClearanceSell = () => {
  const { addToCart, toggleWishlist, wishlistItems } = useCart()
  const [selectedProduct, setSelectedProduct] = useState(null)
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const searchQuery = searchParams.get('search')?.toLowerCase() || ''

  // Dynamic Timer
  const initialSeconds = 160 * 24 * 3600 + 7 * 3600 + 22 * 60 + 40
  const [timeLeft, setTimeLeft] = useState(initialSeconds)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (totalSeconds) => {
    const days = Math.floor(totalSeconds / (3600 * 24))
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60

    return [
      { value: days.toString(), label: 'Days' },
      { value: hours.toString().padStart(2, '0'), label: 'Hrs' },
      { value: minutes.toString().padStart(2, '0'), label: 'Mins' },
      { value: seconds.toString().padStart(2, '0'), label: 'Secs' },
    ]
  }

  const timerData = formatTime(timeLeft)

  const cards = [
    { id: 1, bgClass: 'bg-[#daf5ff]', image: card1img },
    { id: 2, bgClass: 'bg-[#eef2ff]', image: card2img },
    { id: 3, bgClass: 'bg-[#fef3c7]', image: card3img },
    { id: 4, bgClass: 'bg-[#ecfccb]', image: card4img },
  ]

  const filteredCards = cards.filter(card => {
    if (!searchQuery) return true
    const title = 'Classic Slim-Fit Denim Jacket'.toLowerCase()
    return title.includes(searchQuery) || 'fashion'.includes(searchQuery)
  })

  return (
    <section
      id="products"
      className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-6 py-12 sm:py-16 lg:py-20 bg-white"
    >
      {/* Header */}
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-12 gap-6 sm:gap-8"
      >
        {/* Title & Description */}
        <div className="w-full md:max-w-2xl">
          <h2 className="text-[22px] sm:text-[26px] lg:text-[32px] text-[#1a202c] mb-3 sm:mb-4">
            <span className="font-black">LAST CHANCE</span> CLEARANCE SELL
          </h2>
          <p className="text-black text-[14px] sm:text-[16px] lg:text-[18px] leading-relaxed">
            Discover fresh looks and modern outfits that define your unique style now. Perfect for
            any occasion, from casual outings to special events.
          </p>
        </div>

        {/* Timer */}
        <div className="flex gap-1.5 sm:gap-2 flex-shrink-0">
          {timerData.map((time, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="bg-[#2d2d2d] text-white text-base sm:text-xl font-bold w-10 sm:w-12 h-9 sm:h-10 flex items-center justify-center rounded-t-md">
                {time.value}
              </div>
              <div className="bg-[#1f1f1f] text-gray-300 text-[8px] sm:text-[10px] uppercase w-10 sm:w-12 h-5 sm:h-6 flex items-center justify-center rounded-b-md">
                {time.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6"
      >
        {filteredCards.length > 0 ? filteredCards.map((card) => (
          <motion.div
            variants={fadeUpVariant}
            key={card.id}
            className="group relative flex flex-col bg-white"
          >
            {/* Image Box */}
            <div
              className={`relative h-[200px] sm:h-[340px] lg:h-[380px] lg:group-hover:h-[320px] transition-all duration-400 ease-out rounded-[18px] sm:rounded-[28px] lg:rounded-[32px] overflow-hidden ${card.bgClass} cursor-pointer`}
            >
              <img
                src={card.image}
                alt="Product"
                className="absolute bottom-0 left-0 w-full h-[95%] object-contain object-bottom transition-transform duration-700 group-hover:scale-105 z-0"
              />

              {/* Heart Icon */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  toggleWishlist(card)
                }}
                className="absolute top-2.5 sm:top-4 right-2.5 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 shadow-sm transition-colors z-10"
              >
                <FiHeart
                  size={11}
                  className={
                    wishlistItems.some(item => item.id === card.id)
                      ? 'fill-red-500 text-red-500'
                      : ''
                  }
                />
              </button>

              {/* Eye Icon — always visible mobile, hover on desktop */}
              <div
                className="absolute bottom-0 right-0 z-20
                            lg:opacity-0 lg:translate-x-4 lg:translate-y-4
                            lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:group-hover:translate-y-0
                            transition-all duration-400 ease-out"
              >
                <div className="bg-white p-1.5 sm:p-2 lg:p-3 rounded-tl-[14px] sm:rounded-tl-[20px] lg:rounded-tl-[24px] relative">

                  {/* Left Inverted Curve */}
                  <svg
                    viewBox="0 0 24 24"
                    className="absolute bottom-0 -left-[16px] sm:-left-[20px] lg:-left-[24px] text-white fill-current w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] lg:w-[24px] lg:h-[24px]"
                  >
                    <path d="M 24 0 V 24 H 0 A 24 24 0 0 0 24 0 Z" />
                  </svg>

                  {/* Top Inverted Curve */}
                  <svg
                    viewBox="0 0 24 24"
                    className="absolute -top-[16px] sm:-top-[20px] lg:-top-[24px] right-0 text-white fill-current w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] lg:w-[24px] lg:h-[24px]"
                  >
                    <path d="M 24 0 V 24 H 0 A 24 24 0 0 0 24 0 Z" />
                  </svg>

                  <button
                    onClick={() => setSelectedProduct(card)}
                    className="relative z-10 w-8 h-8 sm:w-11 sm:h-11 lg:w-14 lg:h-14 bg-white border border-gray-200 rounded-[10px] sm:rounded-[14px] lg:rounded-[16px] flex items-center justify-center text-[#2d2d2d] hover:bg-gray-50 hover:shadow-md transition-all"
                  >
                    <FiEye className="w-3.5 h-3.5 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                  </button>
                </div>
              </div>
            </div>

            {/* Thumbnails — hidden on mobile */}
            <div className="hidden sm:flex items-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
              {[1, 2, 3, 4].map((thumb) => (
                <div
                  key={thumb}
                  className="w-10 h-12 sm:w-12 sm:h-14 rounded-xl overflow-hidden border border-gray-200 cursor-pointer flex-shrink-0"
                >
                  <img
                    src={card.image}
                    alt="thumb"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <span className="text-[9px] sm:text-[10px] text-gray-500 font-medium ml-1 whitespace-nowrap">
                +12 More
              </span>
            </div>

            {/* Info */}
            <div className="mt-2 sm:mt-4 flex flex-col">
              <span className="text-[#3b82f6] text-[10px] sm:text-[11px] font-semibold mb-0.5 sm:mb-1">
                Fashion
              </span>
              <h3 className="text-[#1a202c] font-bold text-[11px] sm:text-sm mb-1 sm:mb-2 cursor-pointer hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                Classic Slim-Fit Denim Jacket
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-2 sm:mb-3">
                <div className="flex text-[#f59e0b]">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className="fill-current w-[8px] h-[8px] sm:w-[10px] sm:h-[10px]"
                    />
                  ))}
                </div>
                <span className="text-gray-400 text-[9px] sm:text-[10px] ml-1">(25)</span>
              </div>

              {/* Price Row */}
              <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2 flex-wrap">
                <span className="text-gray-400 text-[10px] sm:text-xs line-through">
                  $295.00
                </span>
                <span className="text-[#1a202c] font-black text-[13px] sm:text-base lg:text-lg">
                  $179.98
                </span>
                <span className="bg-[#ef4444] text-white text-[8px] sm:text-[10px] font-bold px-1 sm:px-1.5 py-0.5 rounded">
                  -30%
                </span>
              </div>

              {/* Add to Cart — always visible mobile, hover on desktop */}
              <div className="mt-2 lg:h-0 lg:overflow-hidden lg:opacity-0 lg:mt-0 lg:group-hover:h-11 lg:group-hover:mt-3 lg:group-hover:opacity-100 transition-all duration-400 ease-out">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    addToCart(card)
                  }}
                  className="w-full h-8 sm:h-10 lg:h-11 bg-[#cc1f2f] text-white rounded-lg text-[9px] sm:text-[11px] lg:text-xs font-bold tracking-wider flex items-center justify-center gap-1.5 sm:gap-2 hover:bg-black transition-colors shadow-md"
                >
                  <FiShoppingBag className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-[14px] lg:h-[14px]" />
                  ADD TO CART
                </button>
              </div>
            </div>
          </motion.div>
        )) : (
          <div className="col-span-full text-center py-10 text-gray-500 text-sm sm:text-base">
            No products found matching "{searchQuery}"
          </div>
        )}
      </motion.div>

      {/* View More Button */}
      <div className="flex justify-center mt-10 sm:mt-12">
        <button className="bg-[#cc1f2f] text-white px-8 sm:px-10 py-3 sm:py-3.5 rounded-lg text-xs sm:text-sm font-bold tracking-wider hover:bg-black transition-colors shadow-lg">
          View More
        </button>
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  )
}

export default ClearanceSell
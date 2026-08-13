import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiHeart, FiEye, FiStar, FiShoppingBag } from 'react-icons/fi'
import card1img from '../assets/top1.png'
import card2img from '../assets/top2.png'
import card3img from '../assets/top3.png'
import card4img from '../assets/top4.png'
import QuickViewModal from './QuickViewModal'
import { useCart } from '../context/CartContext'

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

const TopSelling = () => {
  const { addToCart, toggleWishlist, wishlistItems, formatPrice } = useCart()
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [activeFilter, setActiveFilter] = useState('This Week')

  const filters = ['This Week', 'This Month', 'This Year', 'All Time']

  const cards = [
    { id: 1, bgClass: 'bg-[#daf5ff]', image: card1img },
    { id: 2, bgClass: 'bg-[#eef2ff]', image: card2img },
    { id: 3, bgClass: 'bg-[#fef3c7]', image: card3img },
    { id: 4, bgClass: 'bg-[#ecfccb]', image: card4img },
  ]

  return (
    <section className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-6 py-12 sm:py-16 lg:py-20 bg-white">

      {/* Header */}
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="flex flex-col items-center text-center mb-8 sm:mb-10"
      >
        <h2 className="text-[22px] sm:text-[26px] lg:text-[32px] text-[#1a202c] mb-3 sm:mb-4">
          <span className="font-black">TOP SELLING</span> ITEMS
        </h2>

        <p className="text-gray-600 max-w-2xl text-[13px] sm:text-[14px] lg:text-[15px] leading-relaxed mb-7 sm:mb-10 px-2">
          Discover fresh looks and modern outfits that define your unique style now. Perfect for
          any occasion, from casual outings to special events.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center bg-gray-200 rounded-[1.5rem] p-1 text-[10px] sm:text-[11px] md:text-[13px] font-semibold text-gray-500 shadow-inner gap-0.5 sm:gap-0">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full transition-all duration-300 whitespace-nowrap ${activeFilter === filter
                  ? 'bg-white text-black shadow-sm'
                  : 'hover:text-black hover:bg-gray-100/50'
                }`}
            >
              {filter}
            </button>
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
        {cards.map((card) => (
          <motion.div
            variants={fadeUpVariant}
            key={card.id}
            className="group relative flex flex-col bg-white"
          >
            {/* Image Box */}
            <div
              className={`relative h-[220px] sm:h-[340px] lg:h-[380px] lg:group-hover:h-[320px] transition-all duration-400 ease-out rounded-[18px] sm:rounded-[28px] lg:rounded-[32px] overflow-hidden ${card.bgClass} cursor-pointer`}
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
                className="absolute top-3 sm:top-4 right-3 sm:right-4 w-7 sm:w-8 h-7 sm:h-8 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 shadow-sm transition-colors z-10 cursor-pointer"
              >
                <FiHeart
                  size={13}
                  className={
                    wishlistItems.some(item => item.id === card.id)
                      ? 'fill-red-500 text-red-500'
                      : ''
                  }
                />
              </button>

              {/* Eye Icon - Always visible on mobile, hover on desktop */}
              <div
                className="absolute bottom-0 right-0 z-20
                            lg:opacity-0 lg:translate-x-4 lg:translate-y-4
                            lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:group-hover:translate-y-0
                            transition-all duration-400 ease-out"
              >
                <div className="bg-white p-1.5 sm:p-2 lg:p-3 rounded-tl-[16px] sm:rounded-tl-[20px] lg:rounded-tl-[24px] relative">

                  {/* Left Inverted Curve */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="absolute bottom-0 -left-[20px] sm:-left-[20px] lg:-left-[24px] text-white fill-current w-[20px] h-[20px] sm:w-[20px] sm:h-[20px] lg:w-[24px] lg:h-[24px]"
                  >
                    <path d="M 24 0 V 24 H 0 A 24 24 0 0 0 24 0 Z" />
                  </svg>

                  {/* Top Inverted Curve */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="absolute -top-[20px] sm:-top-[20px] lg:-top-[24px] right-0 text-white fill-current w-[20px] h-[20px] sm:w-[20px] sm:h-[20px] lg:w-[24px] lg:h-[24px]"
                  >
                    <path d="M 24 0 V 24 H 0 A 24 24 0 0 0 24 0 Z" />
                  </svg>

                  <button
                    onClick={() => setSelectedProduct(card)}
                    className="relative z-10 w-9 h-9 sm:w-11 sm:h-11 lg:w-14 lg:h-14 bg-white border border-gray-200 rounded-[10px] sm:rounded-[14px] lg:rounded-[16px] flex items-center justify-center text-[#2d2d2d] hover:bg-gray-50 hover:shadow-md transition-all cursor-pointer"
                  >
                    <FiEye className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                  </button>
                </div>
              </div>
            </div>

            {/* Thumbnails - hidden on small mobile, visible sm+ */}
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
              <h3 className="text-[#1a202c] font-bold text-[12px] sm:text-sm mb-1 sm:mb-2 cursor-pointer hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                Classic Slim-Fit Denim Jacket
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-2 sm:mb-3">
                <div className="flex text-[#f59e0b]">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} size={9} className="fill-current sm:w-[10px] sm:h-[10px]" />
                  ))}
                </div>
                <span className="text-gray-400 text-[9px] sm:text-[10px] ml-1">(25)</span>
              </div>

              {/* Price Row */}
              <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2 flex-wrap">
                <span className="text-gray-400 text-[10px] sm:text-xs line-through">
                  {formatPrice ? formatPrice(295.00) : '$295.00'}
                </span>
                <span className="text-[#1a202c] font-black text-[14px] sm:text-base lg:text-lg">
                  {formatPrice ? formatPrice(179.98) : '$179.98'}
                </span>
                <span className="bg-[#ef4444] text-white text-[8px] sm:text-[10px] font-bold px-1 sm:px-1.5 py-0.5 rounded">
                  -30%
                </span>
              </div>

              {/* Add to Cart - Always visible on mobile, hover on desktop */}
              <div className="mt-2 sm:mt-2 lg:h-0 lg:overflow-hidden lg:opacity-0 lg:mt-0 lg:group-hover:h-12 lg:group-hover:mt-3 lg:group-hover:opacity-100 transition-all duration-400 ease-out">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    addToCart(card)
                  }}
                  className="w-full h-9 sm:h-10 lg:h-12 bg-[#cc1f2f] text-white rounded-lg text-[10px] sm:text-[11px] lg:text-xs font-bold tracking-wider flex items-center justify-center gap-1.5 sm:gap-2 hover:bg-black transition-colors shadow-md cursor-pointer"
                >
                  <FiShoppingBag className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4" />
                  ADD TO CART
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Load More Button */}
      <div className="flex justify-center mt-10 sm:mt-14 lg:mt-16">
        <button className="bg-[#cc1f2f] text-white px-8 sm:px-10 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-semibold hover:bg-black transition-colors shadow-md cursor-pointer">
          Load More
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

export default TopSelling
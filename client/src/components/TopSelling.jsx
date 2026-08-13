import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiHeart, FiEye, FiStar, FiShoppingBag } from 'react-icons/fi'
import card1img from '../assets/card1.png'
import card2img from '../assets/card2.png'
import card3img from '../assets/card3.png'
import card4img from '../assets/card4.png'
import QuickViewModal from './QuickViewModal'
import { useCart } from '../context/CartContext'

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const TopSelling = () => {
  const { addToCart, toggleWishlist, wishlistItems, formatPrice } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeFilter, setActiveFilter] = useState('This Week');

  const filters = ['This Week', 'This Month', 'This Year', 'All Time'];

  const cards = [
    { id: 1, bgClass: 'bg-[#daf5ff]', image: card1img },
    { id: 2, bgClass: 'bg-[#eef2ff]', image: card2img },
    { id: 3, bgClass: 'bg-[#fef3c7]', image: card3img },
    { id: 4, bgClass: 'bg-[#ecfccb]', image: card4img },
  ];

  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 py-20 bg-white">
      {/* Header */}
      <motion.div 
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col items-center text-center mb-10"
      >
        <h2 className="text-[32px] text-[#1a202c] mb-4">
          <span className="font-black">TOP SELLING</span> ITEMS
        </h2>
        <p className="text-gray-600 max-w-2xl text-[15px] leading-relaxed mb-10">
          Discover fresh looks and modern outfits that define your unique style now. Perfect for
          any occasion, from casual outings to special events.
        </p>

        {/* Filter Pills */}
        <div className="flex bg-gray-200 rounded-full p-1 text-[13px] font-semibold text-gray-500 shadow-inner">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter 
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
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {cards.map((card) => (
          <motion.div variants={fadeUpVariant} key={card.id} className="group relative flex flex-col bg-white">
            {/* Image Box */}
            <div className={`relative h-[380px] group-hover:h-[320px] transition-all duration-400 ease-out rounded-[32px] overflow-hidden ${card.bgClass} cursor-pointer`}>
              <img
                src={card.image}
                alt="Product"
                className="absolute bottom-0 left-0 w-full h-[95%] object-contain object-bottom transition-transform duration-700 group-hover:scale-105 z-0"
              />

            {/* Heart Icon */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                toggleWishlist(card);
              }}
              className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 shadow-sm transition-colors z-10 cursor-pointer"
            >
              <FiHeart size={14} className={wishlistItems.some(item => item.id === card.id) ? 'fill-red-500 text-red-500' : ''} />
            </button>

              {/* Eye Icon Hover Cutout Container */}
              <div className="absolute bottom-0 right-0 z-20 opacity-0 translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-400 ease-out">
                <div className="bg-white p-3 rounded-tl-[24px] relative">
                  {/* Left Inverted Curve */}
                  <svg width="24" height="24" viewBox="0 0 24 24" className="absolute bottom-0 -left-[24px] text-white fill-current">
                    <path d="M 24 0 V 24 H 0 A 24 24 0 0 0 24 0 Z" />
                  </svg>
                  {/* Top Inverted Curve */}
                  <svg width="24" height="24" viewBox="0 0 24 24" className="absolute -top-[24px] right-0 text-white fill-current">
                    <path d="M 24 0 V 24 H 0 A 24 24 0 0 0 24 0 Z" />
                  </svg>
                  <button
                    onClick={() => setSelectedProduct(card)}
                    className="relative z-10 w-14 h-14 bg-white border border-gray-200 rounded-[16px] flex items-center justify-center text-[#2d2d2d] hover:bg-gray-50 hover:shadow-md transition-all cursor-pointer"
                  >
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
                <span className="text-gray-400 text-xs line-through">{formatPrice ? formatPrice(295.00) : '$295.00'}</span>
                <span className="text-[#1a202c] font-black text-lg">{formatPrice ? formatPrice(179.98) : '$179.98'}</span>
                <span className="bg-[#ef4444] text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                  -30%
                </span>
              </div>

              {/* Add to Cart Hover Button */}
              <div className="h-0 overflow-hidden opacity-0 mt-0 group-hover:h-12 group-hover:mt-3 group-hover:opacity-100 transition-all duration-400 ease-out">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(card);
                  }}
                  className="w-full h-full bg-[#cc1f2f] text-white rounded-lg text-xs font-bold tracking-wider flex items-center justify-center gap-2 hover:bg-black transition-colors shadow-md cursor-pointer"
                >
                  <FiShoppingBag size={14} />
                  ADD TO CART
                </button>
              </div>

            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Load More Button */}
      <div className="flex justify-center mt-16">
        <button className="bg-[#cc1f2f] text-white px-10 py-3 rounded-lg text-sm font-semibold hover:bg-black transition-colors shadow-md cursor-pointer">
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

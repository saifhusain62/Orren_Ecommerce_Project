import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiStar, FiShoppingCart, FiChevronLeft, FiChevronRight, FiMinus, FiPlus } from 'react-icons/fi'
import { useCart } from '../context/CartContext'
import itemimg1 from '../assets/itemimg1.png'
import itemimg2 from '../assets/itemimg2.png'

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const ItemsOfWeek = () => {
  const { addToCart } = useCart()
  const [selectedColor, setSelectedColor] = useState('black')
  const [selectedSize, setSelectedSize] = useState('XL')
  const [quantity, setQuantity] = useState(5)
  const [leftImageIndex, setLeftImageIndex] = useState(0)
  const [rightImageIndex, setRightImageIndex] = useState(0)

  const thumbnails = [itemimg2, itemimg1, itemimg2, itemimg1, itemimg2]
  const rightImages = [itemimg1, itemimg2, itemimg1]

  const handleNextRight = () => setRightImageIndex(prev => (prev + 1) % rightImages.length)
  const handlePrevRight = () => setRightImageIndex(prev => (prev === 0 ? rightImages.length - 1 : prev - 1))

  const handleAddToCart = () => {
    addToCart({
      id: 'wk-1',
      title: 'Zipper Neckline Bateau T-Shirt',
      price: 279.94,
      image: itemimg1,
      color: selectedColor,
      size: selectedSize,
      quantity: quantity
    })
  }

  return (
    <section className="w-full max-w-[1450px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-6 py-12 sm:py-16 lg:py-20 bg-white">

      {/* Header Section */}
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="flex flex-col items-center text-center mb-10 sm:mb-12"
      >
        <h2 className="text-[22px] sm:text-[26px] lg:text-[32px] text-[#1a202c] mb-3 sm:mb-4">
          <span className="font-black">ITEMS</span> OF THE WEEK
        </h2>
        <p className="text-black max-w-2xl text-[14px] sm:text-[16px] lg:text-[18px] leading-relaxed px-2">
          Discover fresh looks and most selling items of this week that define your unique style
          now. Perfect for any occasion, from casual outings to special events.
        </p>
      </motion.div>

      {/* Main Card */}
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="w-full mx-auto bg-white border border-gray-200 rounded-[18px] sm:rounded-[22px] lg:rounded-[24px] shadow-sm flex flex-col lg:flex-row overflow-hidden"
      >

        {/* ───── Column 1: Flatlay & Thumbnails ───── */}
        <div className="w-full lg:w-[30%] p-4 sm:p-6 flex flex-col relative border-b lg:border-b-0 lg:border-r border-gray-100">

          {/* Badges */}
          <div className="absolute top-4 sm:top-6 left-4 sm:left-6 flex flex-col gap-1.5 sm:gap-2 z-10">
            <span className="bg-[#22c55e] text-white text-[9px] sm:text-[10px] font-bold px-2.5 sm:px-3 py-1 rounded-full text-center">
              NEW
            </span>
            <span className="bg-[#ef4444] text-white text-[9px] sm:text-[10px] font-bold px-2.5 sm:px-3 py-1 rounded-full text-center">
              HOT
            </span>
          </div>

          {/* Main Flatlay Image */}
          <div className="flex-1 flex items-center justify-center relative bg-gray-50/50 rounded-xl mb-4 sm:mb-6 py-8 sm:py-10 overflow-hidden min-h-[200px] sm:min-h-[240px]">
            <img
              src={thumbnails[leftImageIndex]}
              alt="Shirt Flatlay"
              className="w-[70%] sm:w-[80%] h-auto object-contain mix-blend-multiply transition-all duration-300"
            />
          </div>

          {/* Thumbnails Row */}
          <div className="flex gap-1.5 sm:gap-2 justify-between mt-auto">
            {thumbnails.map((thumb, idx) => (
              <div
                key={idx}
                onClick={() => setLeftImageIndex(idx)}
                className={`w-11 h-11 sm:w-14 sm:h-14 rounded-lg overflow-hidden border-2 cursor-pointer transition-all flex-shrink-0 ${idx === leftImageIndex
                    ? 'border-gray-800'
                    : 'border-transparent bg-gray-100 opacity-60 hover:opacity-100'
                  }`}
              >
                <img
                  src={thumb}
                  alt={`Thumb ${idx}`}
                  className="w-full h-full object-cover mix-blend-multiply"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ───── Column 2: Main Model Image ───── */}
        <div className="w-full lg:w-[40%] bg-[#8b8580] relative flex items-center justify-center min-h-[300px] sm:min-h-[380px] lg:min-h-[500px]">

          {/* Trending Badge */}
          <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-10">
            <span className="bg-[#f59e0b] text-white text-[9px] sm:text-[10px] font-bold tracking-wider px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md shadow-sm">
              TRENDING
            </span>
          </div>

          <img
            src={rightImages[rightImageIndex]}
            alt="Model wearing shirt"
            className="absolute inset-0 w-full h-full object-cover opacity-90 transition-all duration-300"
          />

          {/* Arrows */}
          <button
            onClick={handlePrevRight}
            className="absolute left-3 sm:left-4 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-black shadow-md z-10 hover:scale-105 transition-transform"
          >
            <FiChevronLeft size={18} />
          </button>
          <button
            onClick={handleNextRight}
            className="absolute right-3 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-black shadow-md z-10 hover:scale-105 transition-transform"
          >
            <FiChevronRight size={18} />
          </button>
        </div>

        {/* ───── Column 3: Product Details ───── */}
        <div className="w-full lg:w-[30%] p-5 sm:p-8 lg:p-10 flex flex-col justify-center">

          <span className="text-gray-500 text-[11px] sm:text-xs tracking-wider mb-2">
            Casual Wear
          </span>
          <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] font-bold text-gray-900 mb-3 sm:mb-4 leading-snug">
            Zipper Neckline Bateau T-Shirt
          </h3>

          <p className="text-gray-500 text-[11px] sm:text-xs leading-relaxed mb-4">
            Discover fresh looks and modern outfits that define your unique style now. Perfect
            for any occasion, from casual outings to special events.
          </p>

          {/* Ratings & Stock */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-5 sm:mb-6">
            <div className="flex text-[#f59e0b]">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} size={11} className="fill-current" />
              ))}
            </div>
            <span className="text-gray-400 text-[10px] border-r border-gray-200 pr-2 sm:pr-3">
              562
            </span>
            <span className="text-gray-400 text-[10px] uppercase tracking-wider">
              SKU: DK-408463
            </span>
            <span className="bg-[#22c55e] text-white text-[9px] font-bold px-2 py-0.5 rounded tracking-wider">
              8 IN STOCK
            </span>
          </div>

          {/* Price */}
          <div className="flex items-end gap-2 sm:gap-3 mb-6 sm:mb-8">
            <span className="text-gray-400 text-xs sm:text-sm line-through mb-1">
              $315.00
            </span>
            <span className="text-xl sm:text-2xl font-black text-gray-900">
              $279.94
            </span>
          </div>

          {/* Color Selection */}
          <div className="mb-5 sm:mb-6">
            <div className="text-xs font-bold text-gray-900 mb-2 sm:mb-3">
              Color:{' '}
              <span className="font-normal text-gray-500 capitalize">
                {selectedColor}
              </span>
            </div>
            <div className="flex gap-2">
              {[
                { id: 'black', hex: 'bg-black' },
                { id: 'gray', hex: 'bg-gray-600' },
                { id: 'lightgray', hex: 'bg-gray-400' },
                { id: 'silver', hex: 'bg-gray-300' },
              ].map(color => (
                <button
                  key={color.id}
                  onClick={() => setSelectedColor(color.id)}
                  className={`w-5 h-5 rounded-full ${color.hex} ${selectedColor === color.id
                      ? 'ring-2 ring-offset-2 ring-gray-400'
                      : ''
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-6 sm:mb-8">
            <div className="flex justify-between items-center mb-2 sm:mb-3">
              <div className="text-xs font-bold text-gray-900">
                Size:{' '}
                <span className="font-normal text-gray-500">
                  {selectedSize}
                </span>
              </div>
              <button className="text-[10px] text-gray-500 border border-gray-200 px-2 py-1 rounded hover:bg-gray-50 transition-colors flex items-center gap-1">
                <span>📏</span> Size Guide
              </button>
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'].map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`min-w-[30px] sm:min-w-[32px] h-7 sm:h-8 px-1.5 sm:px-2 rounded flex items-center justify-center text-[10px] font-bold transition-all ${selectedSize === size
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="flex gap-3 sm:gap-4 mt-auto">

            {/* Quantity */}
            <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden h-11 sm:h-12 w-24 sm:w-28 shrink-0">
              <button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="w-8 h-full flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-black transition-colors"
              >
                <FiMinus size={13} />
              </button>
              <div className="flex-1 h-full flex items-center justify-center text-xs font-bold border-x border-gray-200 text-black">
                {quantity.toString().padStart(2, '0')}
              </div>
              <button
                onClick={() => setQuantity(q => q + 1)}
                className="w-8 h-full flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-black transition-colors"
              >
                <FiPlus size={13} />
              </button>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-[#1a1a1a] text-white h-11 sm:h-12 rounded-lg text-[11px] sm:text-xs font-bold tracking-wider flex items-center justify-center gap-2 hover:bg-[#cc1f2f] transition-colors shadow-lg"
            >
              <FiShoppingCart size={13} />
              Add To Cart
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default ItemsOfWeek
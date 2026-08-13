import React, { useState } from 'react'
import { FiX, FiStar, FiShoppingBag, FiHeart, FiCheck } from 'react-icons/fi'
import { useCart } from '../context/CartContext'

const QuickViewModal = ({ product, onClose }) => {
  const { addToCart, toggleWishlist, wishlistItems } = useCart();
  const [selectedSize, setSelectedSize] = useState('M')
  const [selectedColor, setSelectedColor] = useState('blue')

  if (!product) return null;

  const isWishlisted = wishlistItems.some(item => item.id === product.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-sm transition-opacity">
      {/* Modal Container */}
      <div className="relative bg-white w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] rounded-[24px] sm:rounded-[32px] overflow-y-auto md:overflow-hidden flex flex-col md:flex-row shadow-2xl animate-in fade-in zoom-in-95 duration-300">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20 w-8 h-8 sm:w-10 sm:h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-500 hover:text-black hover:bg-gray-100 transition-colors shadow-sm cursor-pointer"
        >
          <FiX className="text-lg sm:text-xl" />
        </button>

        {/* Left Image Section */}
        <div className={`w-full md:w-1/2 h-[240px] sm:h-[300px] md:h-[500px] shrink-0 relative ${product.bgClass || 'bg-blue-50'} flex items-center justify-center p-4 sm:p-8`}>
          <img 
            src={product.image} 
            alt="Product" 
            className="w-full h-full object-contain object-bottom drop-shadow-xl"
          />
        </div>

        {/* Right Details Section */}
        <div className="w-full md:w-1/2 p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center bg-white">
          <span className="text-[#3b82f6] text-[10px] sm:text-xs font-bold tracking-wider uppercase mb-1 sm:mb-2">Fashion</span>
          <h2 className="text-[20px] sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight">
            Classic Slim-Fit Denim Jacket
          </h2>

          {/* Rating */}
          <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
            <div className="flex text-[#f59e0b]">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
              ))}
            </div>
            <span className="text-gray-500 text-[10px] sm:text-xs font-medium">(25 Reviews)</span>
          </div>

          {/* Price */}
          <div className="flex items-end gap-2 sm:gap-3 mb-4 sm:mb-6">
            <span className="text-2xl sm:text-3xl font-black text-gray-900">$179.98</span>
            <span className="text-gray-400 text-sm sm:text-lg line-through mb-0.5 sm:mb-1">$295.00</span>
            <span className="bg-[#ef4444] text-white text-[10px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded mb-1 sm:mb-1.5">
              -30%
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-[13px] sm:text-sm leading-relaxed mb-6 sm:mb-8">
            Upgrade your wardrobe with this timeless slim-fit denim jacket. Crafted from premium breathable cotton blend, it offers both durability and all-day comfort. Perfect for layering in any season.
          </p>

          {/* Colors */}
          <div className="mb-5 sm:mb-6">
            <h4 className="text-[13px] sm:text-sm font-bold text-gray-900 mb-2 sm:mb-3 uppercase tracking-wider">Color</h4>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {[
                { id: 'blue', code: 'bg-blue-500' },
                { id: 'black', code: 'bg-gray-900' },
                { id: 'white', code: 'bg-gray-100 border border-gray-300' }
              ].map(color => (
                <button 
                  key={color.id}
                  onClick={() => setSelectedColor(color.id)}
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${color.code} ${selectedColor === color.id ? 'ring-2 ring-offset-2 ring-black' : ''}`}
                >
                  {selectedColor === color.id && <FiCheck size={14} className={color.id === 'white' ? 'text-black' : 'text-white'} />}
                </button>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="mb-6 sm:mb-8">
            <div className="flex justify-between items-center mb-2 sm:mb-3">
              <h4 className="text-[13px] sm:text-sm font-bold text-gray-900 uppercase tracking-wider">Size</h4>
              <button className="text-[11px] sm:text-xs text-gray-500 underline hover:text-black cursor-pointer">Size Guide</button>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {['S', 'M', 'L', 'XL'].map(size => (
                <button 
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    selectedSize === size 
                      ? 'bg-black text-white shadow-md' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 sm:gap-4 mt-auto">
            <button 
              onClick={() => {
                addToCart(product);
                onClose(); // Optional: Close modal on add
              }}
              className="flex-1 bg-[#cc1f2f] text-white py-3 sm:py-4 rounded-xl text-xs sm:text-sm font-bold tracking-wider flex items-center justify-center gap-2 hover:bg-black transition-colors shadow-lg shadow-red-500/20 cursor-pointer"
            >
              <FiShoppingBag className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              ADD TO CART
            </button>
            <button 
              onClick={() => toggleWishlist(product)}
              className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-100 text-gray-600 rounded-xl shrink-0 flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-colors cursor-pointer"
            >
              <FiHeart className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]" className={isWishlisted ? 'fill-red-500 text-red-500' : ''} />
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default QuickViewModal

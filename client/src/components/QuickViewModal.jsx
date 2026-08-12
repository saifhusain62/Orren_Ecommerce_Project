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
      <div className="relative bg-white w-full max-w-4xl rounded-[32px] overflow-hidden flex flex-col md:flex-row shadow-2xl animate-in fade-in zoom-in-95 duration-300">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-500 hover:text-black hover:bg-gray-100 transition-colors shadow-sm"
        >
          <FiX size={20} />
        </button>

        {/* Left Image Section */}
        <div className={`w-full md:w-1/2 h-[300px] md:h-[500px] relative ${product.bgClass || 'bg-blue-50'} flex items-center justify-center p-8`}>
          <img 
            src={product.image} 
            alt="Product" 
            className="w-full h-full object-contain object-bottom drop-shadow-xl"
          />
        </div>

        {/* Right Details Section */}
        <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center bg-white">
          <span className="text-[#3b82f6] text-xs font-bold tracking-wider uppercase mb-2">Fashion</span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight">
            Classic Slim-Fit Denim Jacket
          </h2>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex text-[#f59e0b]">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} size={14} className="fill-current" />
              ))}
            </div>
            <span className="text-gray-500 text-xs font-medium">(25 Reviews)</span>
          </div>

          {/* Price */}
          <div className="flex items-end gap-3 mb-6">
            <span className="text-3xl font-black text-gray-900">$179.98</span>
            <span className="text-gray-400 text-lg line-through mb-1">$295.00</span>
            <span className="bg-[#ef4444] text-white text-xs font-bold px-2 py-1 rounded mb-1.5">
              -30%
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            Upgrade your wardrobe with this timeless slim-fit denim jacket. Crafted from premium breathable cotton blend, it offers both durability and all-day comfort. Perfect for layering in any season.
          </p>

          {/* Colors */}
          <div className="mb-6">
            <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">Color</h4>
            <div className="flex gap-3">
              {[
                { id: 'blue', code: 'bg-blue-500' },
                { id: 'black', code: 'bg-gray-900' },
                { id: 'white', code: 'bg-gray-100 border border-gray-300' }
              ].map(color => (
                <button 
                  key={color.id}
                  onClick={() => setSelectedColor(color.id)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${color.code} ${selectedColor === color.id ? 'ring-2 ring-offset-2 ring-black' : ''}`}
                >
                  {selectedColor === color.id && <FiCheck size={14} className={color.id === 'white' ? 'text-black' : 'text-white'} />}
                </button>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Size</h4>
              <button className="text-xs text-gray-500 underline hover:text-black">Size Guide</button>
            </div>
            <div className="flex gap-3">
              {['S', 'M', 'L', 'XL'].map(size => (
                <button 
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold transition-all ${
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
          <div className="flex gap-4 mt-auto">
            <button 
              onClick={() => {
                addToCart(product);
                onClose(); // Optional: Close modal on add
              }}
              className="flex-1 bg-[#cc1f2f] text-white py-4 rounded-xl font-bold tracking-wider flex items-center justify-center gap-2 hover:bg-black transition-colors shadow-lg shadow-red-500/20"
            >
              <FiShoppingBag size={18} />
              ADD TO CART
            </button>
            <button 
              onClick={() => toggleWishlist(product)}
              className="w-14 h-14 bg-gray-100 text-gray-600 rounded-xl flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-colors"
            >
              <FiHeart size={20} className={isWishlisted ? 'fill-red-500 text-red-500' : ''} />
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default QuickViewModal

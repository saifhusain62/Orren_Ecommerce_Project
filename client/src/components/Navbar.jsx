import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FiSearch, FiHeart, FiUser, FiShoppingCart, FiGlobe, FiChevronDown } from 'react-icons/fi'

const Navbar = ({ category, setCategory }) => {
  const [activePopup, setActivePopup] = useState(null)
  const navRef = useRef(null)
  
  const togglePopup = (popup) => {
    setActivePopup(activePopup === popup ? null : popup)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActivePopup(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])
  return (
    <header className="w-full flex flex-col bg-white">
      {/* Top Bar */}
      <div className="flex justify-between items-center py-2 px-8 border-b border-gray-100 text-sm font-medium text-gray-600">
        <div className="flex gap-6">
          <Link to="/" className="hover:text-black transition-colors">Store Location</Link>
          <Link to="/" className="hover:text-black transition-colors">Track Your Order</Link>
          <div className="flex items-center gap-1 cursor-pointer hover:text-black transition-colors">
            <FiGlobe /> English <FiChevronDown />
          </div>
        </div>
        
        <div className="flex-1 flex justify-center">
          <Link to="/" className="flex flex-col items-center group">
            <div className="text-3xl font-extrabold text-black tracking-widest flex items-center group-hover:scale-105 transition-transform">
              <div className="relative w-[18px] h-[18px] border-[3px] border-black rounded-full flex justify-center items-center mr-1">
                <div className="w-[3px] h-[3px] bg-black rounded-full"></div>
              </div>
              RREN
            </div>
            <span className="text-[8px] text-gray-500 tracking-[0.4em] font-bold mt-1">FASHION & LIFESTYLE</span>
          </Link>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1 cursor-pointer hover:text-black font-semibold transition-colors">
            $ USD <FiChevronDown />
          </div>
          <div className="flex items-center gap-5 text-lg text-gray-800" ref={navRef}>
            <div className="relative">
              <FiSearch className="cursor-pointer hover:text-black transition-colors" onClick={() => togglePopup('search')} />
              {activePopup === 'search' && (
                <div className="absolute top-8 right-0 w-64 bg-white border border-gray-200 shadow-xl p-4 z-50 rounded" onClick={e => e.stopPropagation()}>
                  <h3 className="font-bold text-sm mb-2 text-black">Search</h3>
                  <input type="text" placeholder="Search products..." className="w-full border p-2 text-sm text-black" />
                </div>
              )}
            </div>
            
            <div className="relative">
              <FiHeart className="cursor-pointer hover:text-black transition-colors" onClick={() => togglePopup('wishlist')} />
              {activePopup === 'wishlist' && (
                <div className="absolute top-8 right-0 w-64 bg-white border border-gray-200 shadow-xl p-4 z-50 rounded text-sm text-center text-black" onClick={e => e.stopPropagation()}>
                  Your wishlist is empty.
                </div>
              )}
            </div>
            
            <div className="relative">
              <FiUser className="cursor-pointer hover:text-black transition-colors" onClick={() => togglePopup('user')} />
              {activePopup === 'user' && (
                <div className="absolute top-8 right-0 w-48 bg-white border border-gray-200 shadow-xl p-4 z-50 rounded flex flex-col gap-2 text-sm text-black" onClick={e => e.stopPropagation()}>
                  <button className="hover:text-[#cc1f2f] text-left cursor-pointer">Login</button>
                  <button className="hover:text-[#cc1f2f] text-left cursor-pointer">Register</button>
                </div>
              )}
            </div>
            
            <div className="relative cursor-pointer hover:text-black transition-colors" onClick={() => togglePopup('cart')}>
              <FiShoppingCart />
              <span className="absolute -top-2 -right-2 bg-[#cc1f2f] text-white text-[10px] w-[18px] h-[18px] rounded-full flex items-center justify-center font-bold">3</span>
              {activePopup === 'cart' && (
                <div className="absolute top-8 right-0 w-72 bg-white border border-gray-200 shadow-xl p-4 z-50 rounded flex flex-col gap-3 text-sm text-black cursor-default" onClick={e => e.stopPropagation()}>
                  <h3 className="font-bold border-b pb-2">Shopping Cart (3)</h3>
                  <div className="flex justify-between">
                    <span>Stylish Dress</span>
                    <span className="font-bold">$199</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Leather Bag</span>
                    <span className="font-bold">$89</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span>Sun Glasses</span>
                    <span className="font-bold">$49</span>
                  </div>
                  <div className="flex justify-between font-bold text-[#cc1f2f] pt-2">
                    <span>Total</span>
                    <span>$337</span>
                  </div>
                  <button className="cursor-pointer mt-2 bg-black text-white py-2 rounded font-bold tracking-widest hover:bg-[#cc1f2f] transition-colors">CHECKOUT</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Notice Bar */}
      <div className="bg-[#cc1f2f] text-white text-[11px] font-bold py-2.5 text-center tracking-widest">
        FREE SHIPPING ON ALL ORDERS OVER $99 — USE CODE: PORTO2026
      </div>

      {/* Main Nav */}
      <div className="flex justify-between items-center py-4 px-8 border-b border-gray-100 font-bold text-[13px] tracking-widest">
        <nav className="flex gap-8 text-gray-500">
          <Link to="/" className="text-[#cc1f2f]">HOME</Link>
          <Link to="/" className="hover:text-black transition-colors">CATEGORIES</Link>
          <Link to="/" className="hover:text-black transition-colors">PRODUCTS</Link>
          <Link to="/" className="hover:text-black transition-colors">PAGES</Link>
          <Link to="/" className="hover:text-black transition-colors">BLOG</Link>
        </nav>
        <div className="flex bg-gray-100 rounded-full p-1 text-[13px]">
          <button 
            onClick={() => setCategory('Men')}
            className={`px-5 py-1.5 rounded-full cursor-pointer transition-colors ${category === 'Men' ? 'bg-black text-white shadow' : 'text-gray-600 hover:text-black'}`}
          >Men</button>
          <button 
            onClick={() => setCategory('Women')}
            className={`px-5 py-1.5 rounded-full cursor-pointer transition-colors ${category === 'Women' ? 'bg-black text-white shadow' : 'text-gray-600 hover:text-black'}`}
          >Women</button>
          <button 
            onClick={() => setCategory('Kids')}
            className={`px-5 py-1.5 rounded-full cursor-pointer transition-colors ${category === 'Kids' ? 'bg-black text-white shadow' : 'text-gray-600 hover:text-black'}`}
          >Kids</button>
        </div>
      </div>
    </header>
  )
}

export default Navbar

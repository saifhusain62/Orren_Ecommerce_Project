import React from 'react'
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi'
import { FaTelegramPlane } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="w-full bg-[#2a2f38] text-gray-300">

      {/* Top Brand Logos Section */}
      <div className="border-b border-gray-600/50">
        <div className="max-w-[1750px] mx-auto flex flex-wrap items-center justify-between py-6 px-6 lg:px-12 gap-8 overflow-hidden">
          {/* Faking the logos with text/styled divs to match layout closely */}
          <div className="flex flex-col items-center">
            <span className="text-white font-bold tracking-widest uppercase text-sm">LE BARREL</span>
            <span className="text-gray-500 text-[10px]">Original Blend</span>
          </div>

          <div className="hidden md:block w-px h-10 bg-gray-600/50"></div>

          <div className="text-white font-serif italic font-bold text-xl tracking-wider">
            Something
          </div>

          <div className="hidden md:block w-px h-10 bg-gray-600/50"></div>

          <div className="border border-gray-500 px-4 py-1.5 text-white text-xs font-semibold tracking-[0.2em] uppercase">
            Costa Brava
          </div>

          <div className="hidden md:block w-px h-10 bg-gray-600/50"></div>

          <div className="flex flex-col items-center">
            <span className="text-white font-bold tracking-widest text-sm uppercase">é OCEANIC</span>
            <span className="text-gray-500 text-[9px] tracking-widest">& Co</span>
          </div>

          <div className="hidden md:block w-px h-10 bg-gray-600/50"></div>

          <div className="border border-gray-500 rounded-full px-6 py-1.5 text-white text-[10px] font-semibold tracking-widest uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full border border-gray-400"></span> FOUNTAIN <span className="w-2 h-2 rounded-full border border-gray-400"></span>
          </div>

          <div className="hidden md:block w-px h-10 bg-gray-600/50"></div>

          <div className="text-white font-bold tracking-widest text-xs flex items-center gap-2 uppercase">
            BLACK BIRDS
          </div>

          <div className="hidden md:block w-px h-10 bg-gray-600/50"></div>

          <div className="border border-gray-500 px-4 py-1.5 text-white text-sm font-bold tracking-widest flex flex-col items-center">
            <span>HUGO</span>
            <span className="text-[8px] text-gray-500 font-normal tracking-widest">STUDIO</span>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-[1750px] mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">

        {/* Brand & Contact */}
        <div className="lg:col-span-2 pr-0 lg:pr-12">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full border-[3px] border-white flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <h2 className="text-white text-3xl font-black tracking-widest">ORREN</h2>
          </div>
          <p className="text-[10px] text-gray-400 tracking-[0.3em] mb-8 uppercase">Fashion & Lifestyle</p>

          <p className="text-sm text-gray-400 leading-relaxed mb-8 max-w-md">
            Discover stylish and comfortable fashion pieces designed to elevate your wardrobe. Our collection blends trendy designs with quality fabrics, perfect for any occasion.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
            <div>
              <p className="text-gray-400 text-xs mb-2">Got Question? Call us 24/7</p>
              <p className="text-[#ef4444] text-xl font-bold">+0123 456 789</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs mb-3">Payment Method</p>
              <div className="flex items-center gap-2">
                {/* Fake Payment Icons */}
                <div className="bg-[#1a1f2e] text-white text-[10px] font-bold px-2 py-1 rounded">VISA</div>
                <div className="bg-[#e11d48] text-white text-[10px] font-bold px-2 py-1 rounded">Master</div>
                <div className="bg-[#0284c7] text-white text-[10px] font-bold px-2 py-1 rounded">PayPal</div>
                <div className="bg-[#0284c7] text-white text-[10px] font-bold px-2 py-1 rounded">AMEX</div>
                <div className="bg-white text-black text-[10px] font-bold px-2 py-1 rounded">VISA</div>
                <div className="bg-black text-white text-[10px] font-bold px-2 py-1 rounded border border-gray-700">Pay</div>
              </div>
            </div>
          </div>
        </div>

        {/* Links Col 1 */}
        <div>
          <h3 className="text-white text-sm font-bold tracking-widest mb-6 uppercase">Useful Links</h3>
          <ul className="flex flex-col gap-4 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">About Orren</a></li>
            <li><a href="#" className="hover:text-white transition-colors">How to shop on Orren</a></li>
            <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Log In</a></li>
          </ul>
        </div>

        {/* Links Col 2 */}
        <div>
          <h3 className="text-white text-sm font-bold tracking-widest mb-6 uppercase">Customer Service</h3>
          <ul className="flex flex-col gap-4 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Payment Methods</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Money-back guarantee!</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms and conditions</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Links Col 3 */}
        <div>
          <h3 className="text-white text-sm font-bold tracking-widest mb-6 uppercase">My Account</h3>
          <ul className="flex flex-col gap-4 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Sign In</a></li>
            <li><a href="#" className="hover:text-white transition-colors">View Cart</a></li>
            <li><a href="#" className="hover:text-white transition-colors">My Wishlist</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Track My Order</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Help</a></li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-600/50">
        <div className="max-w-[1750px] mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            Copyright © 2026 Orren Store. All Rights Reserved.
            <a href="#" className="text-gray-400 hover:text-white ml-1">Terms Of Use</a> |
            <a href="#" className="text-gray-400 hover:text-white ml-1">Privacy Policy</a>
          </p>

          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span>Social Media</span>
            <div className="flex items-center gap-3">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><FiFacebook size={14} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><FiTwitter size={14} /></a>
              <a href="#" className="text-[#ef4444] hover:text-red-400 transition-colors"><FiInstagram size={14} /></a>
              <a href="#" className="text-[#ef4444] hover:text-red-400 transition-colors"><FiYoutube size={14} /></a>
              <a href="#" className="text-[#ef4444] hover:text-red-400 transition-colors"><FaTelegramPlane size={14} /></a>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer

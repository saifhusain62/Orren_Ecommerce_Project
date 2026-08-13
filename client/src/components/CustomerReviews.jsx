import React from 'react'
import { motion } from 'framer-motion'
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import test1img from '../assets/testi1.png'
import test2img from '../assets/testi2.png'
import quateimg from '../assets/quate.png'

// Using imported quateimg

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const CustomerReviews = () => {
  return (
    <section id="blog" className="w-full relative bg-white py-24 overflow-hidden">
      {/* Background Vertical Lines */}
      <div className="absolute inset-0 max-w-[1450px] mx-auto grid grid-cols-4 md:grid-cols-5 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`h-full border-l border-gray-100 ${i === 5 ? 'hidden md:block' : ''}`} />
        ))}
      </div>

      <div className="w-full max-w-[1450px] mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-[32px] md:text-[36px] text-[#1a202c] mb-4">
            <span className="font-black">CUSTOMER'S</span> LOVE ABOUT US
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed">
            Discover fresh looks and modern outfits that define your unique style now. Perfect for
            any occasion, from casual outings to special events.
          </p>
        </motion.div>

        {/* Carousel Indicators (Top Right) */}
        <div className="absolute top-[80px] right-6 hidden md:flex gap-2">
          <div className="w-6 h-2 rounded-full bg-[#1a202c]"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>

        {/* Reviews Container */}
        <div className="relative">

          {/* Card 1 (Left aligned) */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full md:w-[85%] lg:w-[65%] bg-white rounded-[24px] border border-gray-200 p-3 flex flex-col sm:flex-row gap-6 sm:gap-10 mb-12 relative shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          >
            <div className="w-full sm:w-[260px] h-[320px] shrink-0 relative bg-gray-100 rounded-[16px]">
              <img src={test1img} alt="Alisa" className="w-full h-full object-cover rounded-[16px]" />
              <div className="absolute top-[-10px] sm:top-[-16px] right-[-16px] sm:right-[-32px] w-16 h-16 sm:w-[76px] sm:h-[76px] translate-x-[-10px] sm:translate-x-0 z-10">
                <img src={quateimg} alt="Quote" className="w-full h-full object-contain drop-shadow-md" />
              </div>
            </div>

            <div className="flex-1 py-6 pl-2 sm:pl-4 pr-6 flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">Alisa</h3>
                <div className="flex text-[#f59e0b] gap-1">
                  {[...Array(5)].map((_, i) => <FiStar key={i} size={14} className="fill-transparent stroke-[#f59e0b]" />)}
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                I absolutely love shopping here! The website is easy to navigate, and the product photos are true to life. I ordered a summer dress and it arrived quickly, beautifully packaged, and the quality exceeded my expectations. The fabric feels premium, and the sizing guide was spot-on. I'll definitely be coming back for more pieces!
              </p>

              <div className="flex items-center gap-4 text-gray-400 text-xs font-semibold mt-auto">
                <div className="w-6 h-[1px] bg-gray-300"></div>
                Apr 13, 2026
              </div>
            </div>
          </motion.div>

          {/* Card 2 (Right aligned / Staggered) */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full md:w-[85%] lg:w-[65%] bg-white rounded-[24px] border border-gray-200 p-3 flex flex-col-reverse sm:flex-row gap-6 sm:gap-10 ml-auto relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] z-10"
          >
            <div className="flex-1 py-6 pr-2 sm:pr-4 pl-6 flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <div className="flex text-[#f59e0b] gap-1">
                  {[...Array(5)].map((_, i) => <FiStar key={i} size={14} className="fill-transparent stroke-[#f59e0b]" />)}
                </div>
                <h3 className="text-xl font-bold text-gray-900">Linda</h3>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                My overall experience was great—the clothes are stylish and trendy, and I get compliments every time I wear them. The checkout process was smooth, and delivery was on time. The only thing I'd suggest is adding more variety in sizes for certain items, but aside from that, I'm really happy with my purchase and will recommend this shop to friends.
              </p>

              <div className="flex items-center gap-4 text-gray-400 text-xs font-semibold mt-auto">
                May 17, 2026
                <div className="w-6 h-[1px] bg-gray-300"></div>
              </div>
            </div>

            <div className="w-full sm:w-[260px] h-[320px] shrink-0 relative bg-gray-100 rounded-[16px]">
              <img src={test2img} alt="Linda" className="w-full h-full object-cover rounded-[16px]" />
              <div className="absolute top-[-10px] sm:top-[-16px] left-[-16px] sm:left-[-32px] w-16 h-16 sm:w-[76px] sm:h-[76px] translate-x-[10px] sm:translate-x-0 z-10">
                <img src={quateimg} alt="Quote" className="w-full h-full object-contain drop-shadow-md" />
              </div>
            </div>
          </motion.div>

        </div>

        {/* Carousel Controls (Bottom Left) */}
        <div className="flex gap-4 mt-12 md:mt-0">
          <button className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-colors">
            <FiChevronLeft size={24} />
          </button>
          <button className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-colors">
            <FiChevronRight size={24} />
          </button>
        </div>

      </div>
    </section>
  )
}

export default CustomerReviews

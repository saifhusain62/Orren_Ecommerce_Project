import React from 'react'
import { motion } from 'framer-motion'
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import test1img from '../assets/testi1.png'
import test2img from '../assets/testi2.png'
import quateimg from '../assets/quate.png'

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const CustomerReviews = () => {
  return (
    <section
      id="blog"
      className="w-full relative bg-white py-14 sm:py-18 lg:py-24 overflow-hidden"
    >
      {/* Background Vertical Lines */}
      <div className="absolute inset-0 max-w-[1450px] mx-auto grid grid-cols-4 md:grid-cols-5 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`h-full border-l border-gray-100 ${i === 5 ? 'hidden md:block' : ''}`}
          />
        ))}
      </div>

      <div className="w-full max-w-[1450px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-6 relative z-10">

        {/* Header */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-[22px] sm:text-[28px] md:text-[32px] lg:text-[36px] text-[#1a202c] mb-3 sm:mb-4">
            <span className="font-black">CUSTOMER'S</span> LOVE ABOUT US
          </h2>
          <p className="text-gray-500 text-[13px] sm:text-[14px] lg:text-[15px] leading-relaxed px-2">
            Discover fresh looks and modern outfits that define your unique style now. Perfect for
            any occasion, from casual outings to special events.
          </p>
        </motion.div>

        {/* Carousel Indicators (Top Right) */}
        <div className="absolute top-[80px] right-4 sm:right-6 hidden md:flex gap-2">
          <div className="w-6 h-2 rounded-full bg-[#1a202c]"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>

        {/* Reviews Container */}
        <div className="relative flex flex-col gap-6 sm:gap-8 lg:gap-0">

          {/* ── Card 1 (Left aligned) ── */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="w-full md:w-[85%] lg:w-[65%] bg-white rounded-[18px] sm:rounded-[22px] lg:rounded-[24px] border border-gray-200 p-2.5 sm:p-3 flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 lg:mb-12 relative shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          >
            {/* Image */}
            <div className="w-full sm:w-[200px] lg:w-[260px] h-[240px] sm:h-[280px] lg:h-[320px] shrink-0 relative bg-gray-100 rounded-[14px] sm:rounded-[16px]">
              <img
                src={test1img}
                alt="Alisa"
                className="w-full h-full object-cover rounded-[14px] sm:rounded-[16px]"
              />
              {/* Quote icon */}
              <div className="absolute top-[-8px] sm:top-[-12px] lg:top-[-16px] right-[-8px] sm:right-[-20px] lg:right-[-32px] w-12 h-12 sm:w-[60px] sm:h-[60px] lg:w-[76px] lg:h-[76px] z-10">
                <img
                  src={quateimg}
                  alt="Quote"
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 py-3 sm:py-5 lg:py-6 pl-1 sm:pl-3 lg:pl-4 pr-3 sm:pr-5 lg:pr-6 flex flex-col">
              <div className="flex justify-between items-center mb-3 sm:mb-4">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">
                  Alisa
                </h3>
                <div className="flex text-[#f59e0b] gap-0.5 sm:gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className="fill-transparent stroke-[#f59e0b] w-3 h-3 sm:w-3.5 sm:h-3.5"
                    />
                  ))}
                </div>
              </div>

              <p className="text-gray-600 text-[12px] sm:text-[13px] lg:text-sm leading-relaxed mb-4 sm:mb-6">
                I absolutely love shopping here! The website is easy to navigate, and the product
                photos are true to life. I ordered a summer dress and it arrived quickly,
                beautifully packaged, and the quality exceeded my expectations. The fabric feels
                premium, and the sizing guide was spot-on. I'll definitely be coming back for
                more pieces!
              </p>

              <div className="flex items-center gap-3 sm:gap-4 text-gray-400 text-[10px] sm:text-xs font-semibold mt-auto">
                <div className="w-4 sm:w-6 h-[1px] bg-gray-300"></div>
                Apr 13, 2026
              </div>
            </div>
          </motion.div>

          {/* ── Card 2 (Right aligned) ── */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="w-full md:w-[85%] lg:w-[65%] bg-white rounded-[18px] sm:rounded-[22px] lg:rounded-[24px] border border-gray-200 p-2.5 sm:p-3 flex flex-col sm:flex-row-reverse gap-4 sm:gap-6 lg:gap-10 ml-auto relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] z-10"
          >
            {/* Image */}
            <div className="w-full sm:w-[200px] lg:w-[260px] h-[240px] sm:h-[280px] lg:h-[320px] shrink-0 relative bg-gray-100 rounded-[14px] sm:rounded-[16px]">
              <img
                src={test2img}
                alt="Linda"
                className="w-full h-full object-cover rounded-[14px] sm:rounded-[16px]"
              />
              {/* Quote icon */}
              <div className="absolute top-[-8px] sm:top-[-12px] lg:top-[-16px] left-[-8px] sm:left-[-20px] lg:left-[-32px] w-12 h-12 sm:w-[60px] sm:h-[60px] lg:w-[76px] lg:h-[76px] z-10">
                <img
                  src={quateimg}
                  alt="Quote"
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 py-3 sm:py-5 lg:py-6 pr-1 sm:pr-3 lg:pr-4 pl-3 sm:pl-5 lg:pl-6 flex flex-col">
              <div className="flex justify-between items-center mb-3 sm:mb-4">
                <div className="flex text-[#f59e0b] gap-0.5 sm:gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className="fill-transparent stroke-[#f59e0b] w-3 h-3 sm:w-3.5 sm:h-3.5"
                    />
                  ))}
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">
                  Linda
                </h3>
              </div>

              <p className="text-gray-600 text-[12px] sm:text-[13px] lg:text-sm leading-relaxed mb-4 sm:mb-6">
                My overall experience was great—the clothes are stylish and trendy, and I get
                compliments every time I wear them. The checkout process was smooth, and delivery
                was on time. The only thing I'd suggest is adding more variety in sizes for
                certain items, but aside from that, I'm really happy with my purchase and will
                recommend this shop to friends.
              </p>

              <div className="flex items-center gap-3 sm:gap-4 text-gray-400 text-[10px] sm:text-xs font-semibold mt-auto">
                May 17, 2026
                <div className="w-4 sm:w-6 h-[1px] bg-gray-300"></div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Carousel Controls */}
        <div className="flex gap-3 sm:gap-4 mt-8 sm:mt-10 lg:mt-12">
          <button className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-colors">
            <FiChevronLeft className="w-5 h-5 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </button>
          <button className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-colors">
            <FiChevronRight className="w-5 h-5 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </button>
        </div>

      </div>
    </section>
  )
}

export default CustomerReviews
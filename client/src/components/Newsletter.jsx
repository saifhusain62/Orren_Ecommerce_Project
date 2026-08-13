import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import newsimg from '../assets/newsimg.png'

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
}

const Newsletter = () => {
  return (
    <section className="w-full max-w-[1450px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-6 py-10 sm:py-16 lg:py-24">
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="w-full bg-[#18181b] rounded-[18px] sm:rounded-[22px] lg:rounded-[24px] overflow-hidden flex flex-col md:flex-row shadow-2xl"
      >
        {/* Left Side: Image with Overlay */}
        <div className="w-full md:w-1/3 h-[320px] sm:h-[420px] md:h-[550px] relative p-1.5 sm:p-2 flex-shrink-0">
          <div className="w-full h-full relative rounded-[14px] sm:rounded-[18px] lg:rounded-[20px] overflow-hidden group">
            <img
              src={newsimg}
              alt="End of Season"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />

            {/* Hover Black Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 flex flex-col justify-center items-center text-center z-10 px-4">
              <span className="text-white/90 text-[9px] sm:text-[10px] font-bold tracking-widest uppercase mb-2 sm:mb-3 drop-shadow-md">
                Limited Time Only
              </span>

              <h3 className="text-white text-[22px] sm:text-[28px] md:text-4xl font-bold leading-tight mb-4 sm:mb-6 drop-shadow-md">
                End Of Season
                <br />
                Save 50% Off
              </h3>

              <button
                onClick={() =>
                  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="bg-[#4b5563]/80 group-hover:bg-[#cc1f2f] backdrop-blur-sm text-white text-[10px] sm:text-xs font-semibold tracking-wider uppercase px-6 sm:px-8 py-2.5 sm:py-3 rounded transition-all duration-300 cursor-pointer shadow-lg"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Newsletter Form */}
        <div className="w-full md:flex-1 flex flex-col justify-center items-center text-center px-5 py-8 sm:px-8 sm:py-10 md:p-16">
          <h2 className="text-white text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] mb-3 sm:mb-4 leading-snug">
            SUBSCRIBE TO OUR <span className="font-black">NEWSLETTER</span>
          </h2>

          <p className="text-gray-300 text-[12px] sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8 lg:mb-10 max-w-[90%] sm:max-w-[80%]">
            Sign up now for <span className="text-[#e11d48] font-semibold">10% discount</span> on
            first order.
            <br />
            Customize my news:
          </p>

          <form
            className="w-full max-w-md flex mb-4 sm:mb-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your Email Address"
              className="flex-1 min-w-0 bg-[#27272a] text-white placeholder-gray-500 border border-gray-600 border-r-0 rounded-l-md px-3 sm:px-4 py-2.5 sm:py-3 text-[12px] sm:text-sm focus:outline-none focus:border-gray-400 transition-colors"
              required
            />
            <button
              type="submit"
              className="bg-[#e11d48] hover:bg-[#be123c] text-white px-4 sm:px-5 rounded-r-md flex items-center justify-center transition-colors shrink-0"
            >
              <FiArrowRight size={16} />
            </button>
          </form>

          <p className="text-gray-500 text-[10px] sm:text-xs text-center max-w-[90%] sm:max-w-sm leading-relaxed">
            by subscribing you agree to our terms & conditions and privacy & cookies policy.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default Newsletter
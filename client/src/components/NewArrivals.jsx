import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import new1 from "../assets/new1.png";
import new2 from "../assets/new2.png";
import new3 from "../assets/new3.png";

const fadeUpVariant = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const containerVariant = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const NewArrivals = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(timer);
  }, [isMobile]);

  const cards = [
    {
      id: 1,
      image: new1,
      bgClass: "bg-[#fde2e4]",
      title: "Blooming Trends Fresh 2026",
      collection: "FALL COLLECTION",
    },
    {
      id: 2,
      image: new2,
      bgClass: "bg-[#f3e1f7]",
      title: "Blooming Trends Fresh 2026",
      collection: "FALL COLLECTION",
    },
    {
      id: 3,
      image: new3,
      bgClass: "bg-[#dff3fa]",
      title: "Blooming Trends Fresh 2026",
      collection: "FALL COLLECTION",
    },
  ];

  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      className="
        w-full
        bg-white
        overflow-hidden
        py-12
        sm:py-14
        md:py-16
        lg:py-20
      "
    >
      <div
        className="
          w-full
          max-w-[1440px]
          mx-auto

          px-4
          sm:px-5
          md:px-8
          lg:px-10
          xl:px-12
          2xl:px-6
        "
      >
        {/* =========================
            Header Section
        ========================== */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-50px",
          }}
          className="
            flex
            flex-col
            items-center
            text-center

            mb-9
            sm:mb-10
            md:mb-12
            lg:mb-14
            xl:mb-16
          "
        >
          <h2
            className="
              text-[28px]
              sm:text-[32px]
              md:text-[34px]
              lg:text-4xl

              leading-tight
              text-[#1a202c]
              mb-3
              sm:mb-4
            "
          >
            <span className="font-black">NEW</span> ARRIVALS
          </h2>

          <p
            className="
              text-gray-500
              max-w-2xl

              text-[13px]
              sm:text-sm

              leading-[1.7]
              sm:leading-relaxed

              px-2
              sm:px-4
              md:px-0
            "
          >
            Discover fresh looks and modern outfits that define your unique
            style now. Perfect for any occasion, from casual outings to special
            events.
          </p>
        </motion.div>

        {/* =========================
            Cards Area
        ========================== */}
        <div className="relative flex items-center justify-center overflow-hidden w-full">
          {/* Left Arrow */}
          <button
            type="button"
            aria-label="Previous products"
            className="
              absolute
              z-30

              hidden
              md:flex

              items-center
              justify-center

              w-10
              h-10
              lg:w-11
              lg:h-11
              xl:w-12
              xl:h-12

              left-0
              lg:-left-2
              xl:-left-3
              2xl:-left-10

              bg-white
              border
              border-gray-200
              rounded-full

              text-gray-500

              hover:text-black
              hover:border-gray-400

              transition-colors
              duration-300

              shadow-sm
            "
          >
            <FiChevronLeft className="text-lg xl:text-xl" />
          </button>

          {/* Cards Grid */}
          <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: "-100px",
            }}
            className="
              flex
              md:grid
              md:grid-cols-2
              lg:grid-cols-3

              md:gap-6
              lg:gap-6
              xl:gap-8

              w-full

              md:px-12
              lg:px-10
              xl:px-5
              2xl:px-4

              transition-transform
              duration-500
              ease-in-out
            "
            style={isMobile ? { transform: `translateX(-${currentIndex * 100}%)` } : {}}
          >
            {cards.map((card) => (
              <motion.div
                variants={fadeUpVariant}
                key={card.id}
                className={`
                  relative
                  group
                  overflow-hidden

                  min-w-full
                  md:min-w-0

                  rounded-[24px]
                  sm:rounded-[28px]
                  lg:rounded-[30px]
                  xl:rounded-[32px]

                  h-[440px]
                  min-[420px]:h-[470px]
                  sm:h-[500px]

                  md:h-[470px]
                  lg:h-[450px]
                  xl:h-[500px]

                  ${card.bgClass}
                `}
              >
                {/* =========================
                    Product Image
                ========================== */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="
                    absolute
                    bottom-0
                    left-0

                    w-full

                    h-[91%]
                    sm:h-[93%]
                    md:h-[92%]
                    lg:h-[93%]
                    xl:h-[95%]

                    object-contain
                    object-bottom

                    transition-transform
                    duration-700

                    group-hover:scale-105

                    z-0
                  "
                />

                {/* =========================
                    Hover Arrow Cutout
                ========================== */}
                <div
                  className="
                    absolute
                    top-0
                    right-0
                    z-20

                    opacity-100
                    sm:opacity-0

                    sm:translate-x-4
                    sm:-translate-y-4

                    sm:group-hover:opacity-100
                    sm:group-hover:translate-x-0
                    sm:group-hover:translate-y-0

                    transition-all
                    duration-500
                    ease-out
                  "
                >
                  <div
                    className="
                      bg-white
                      p-2
                      sm:p-2.5
                      lg:p-3

                      rounded-bl-[20px]
                      lg:rounded-bl-[24px]

                      relative
                    "
                  >
                    {/* Left Inverted Curve */}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="
                        absolute
                        top-0
                        -left-[24px]
                        text-white
                        fill-current
                      "
                    >
                      <path d="M 0 0 H 24 V 24 A 24 24 0 0 0 0 0 Z" />
                    </svg>

                    {/* Bottom Inverted Curve */}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="
                        absolute
                        -bottom-[24px]
                        right-0
                        text-white
                        fill-current
                      "
                    >
                      <path d="M 0 0 H 24 V 24 A 24 24 0 0 0 0 0 Z" />
                    </svg>

                    {/* Arrow Button */}
                    <button
                      type="button"
                      aria-label={`View ${card.title}`}
                      className="
                        relative
                        z-10

                        w-11
                        h-11
                        sm:w-12
                        sm:h-12
                        lg:w-14
                        lg:h-14

                        bg-white

                        border
                        border-gray-200

                        rounded-[14px]
                        lg:rounded-[16px]

                        flex
                        items-center
                        justify-center

                        hover:bg-gray-50
                        hover:shadow-md

                        transition-all
                        duration-300
                      "
                    >
                      <FiArrowUpRight
                        className="
                          text-gray-500
                          text-[20px]
                          lg:text-[24px]
                        "
                      />
                    </button>
                  </div>
                </div>

                {/* =========================
                    Bottom Info Block
                ========================== */}
                <div
                  className="
                    absolute

                    bottom-3
                    sm:bottom-4
                    xl:bottom-5

                    left-3
                    right-3

                    sm:left-4
                    sm:right-4

                    xl:left-5
                    xl:right-5

                    bg-gray-100/70
                    backdrop-blur-sm

                    rounded-[18px]
                    sm:rounded-[20px]
                    lg:rounded-[22px]
                    xl:rounded-[24px]

                    px-4
                    py-4

                    sm:px-5
                    sm:py-5

                    xl:p-6

                    flex
                    flex-col
                    items-center
                    text-center

                    transition-transform
                    duration-500

                    group-hover:-translate-y-1
                  "
                >
                  <span
                    className="
                      text-[9px]
                      sm:text-[10px]

                      font-bold
                      tracking-[0.18em]

                      text-gray-600

                      mb-1.5
                      sm:mb-2

                      uppercase
                    "
                  >
                    {card.collection}
                  </span>

                  <h3
                    className="
                      text-[15px]
                      sm:text-base
                      lg:text-[17px]
                      xl:text-lg

                      leading-snug

                      font-semibold
                      text-gray-900

                      mb-3
                      sm:mb-4

                      tracking-tight
                    "
                  >
                    {card.title}
                  </h3>

                  <button
                    type="button"
                    onClick={scrollToProducts}
                    className="
                      bg-[#cc1f2f]
                      text-white

                      px-6
                      sm:px-7
                      xl:px-8

                      py-2
                      sm:py-2.5

                      rounded-md

                      text-[10px]
                      sm:text-xs

                      font-bold
                      tracking-wider

                      hover:bg-black

                      transition-colors
                      duration-300

                      shadow-lg
                      cursor-pointer
                    "
                  >
                    SHOP NOW
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Arrow */}
          <button
            type="button"
            aria-label="Next products"
            className="
              absolute
              z-30

              hidden
              md:flex

              items-center
              justify-center

              w-10
              h-10
              lg:w-11
              lg:h-11
              xl:w-12
              xl:h-12

              right-0
              lg:-right-2
              xl:-right-3
              2xl:-right-10

              bg-white
              border
              border-gray-200
              rounded-full

              text-gray-500

              hover:text-black
              hover:border-gray-400

              transition-colors
              duration-300

              shadow-sm
            "
          >
            <FiChevronRight className="text-lg xl:text-xl" />
          </button>
        </div>

        {/* =========================
            Pagination Dots
        ========================== */}
        <div
          className="
            flex
            md:hidden
            items-center
            justify-center
            gap-2

            mt-8
            sm:mt-10
          "
        >
          {cards.map((_, idx) => (
            <div
              key={idx}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-7 sm:w-8 bg-gray-600" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
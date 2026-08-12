import React from 'react'

const MarqueeBanner = () => {
  const items = [
    "SHORT PANTS FOR BEACH",
    "COLORFUL TSHIRT",
    "COLORFUL TSHIRT",
    "COLORFUL TSHIRT",
    "COLORFUL TSHIRT",
    "SHORT PANTS FOR BEACH",
    "COLORFUL TSHIRT",
    "COLORFUL TSHIRT",
  ];

  return (
    <div className="w-full bg-[#edf6fc] py-8 overflow-hidden flex items-center border-y border-blue-50 mt-10 mb-10">
      <div className="flex whitespace-nowrap animate-marquee w-max">
        {/* We duplicate the content twice to ensure a seamless infinite scroll */}
        <div className="flex shrink-0 items-center justify-around w-[100vw] min-w-max">
          {items.map((item, index) => (
            <span key={index} className="text-xs font-bold tracking-[0.2em] text-[#1a202c] uppercase px-10">
              {item}
            </span>
          ))}
        </div>
        <div className="flex shrink-0 items-center justify-around w-[100vw] min-w-max">
          {items.map((item, index) => (
            <span key={index} className="text-xs font-bold tracking-[0.2em] text-[#1a202c] uppercase px-10">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MarqueeBanner

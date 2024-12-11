import React from 'react'

const Hero = () => {
  return (
    <section className="w-full space-y-6 pb-4 ">
        <div className="w-full flex flex-col items-center gap-4 text-center mx-auto relative">
          <h1 className="font-bold leading-normal text-2xl md:text-6xl lg:text-7xl absolute bottom-24 lg:bottom-80 pr-20">
            SPRING |
          </h1>
          <h1 className="font-bold leading-normal text-2xl  md:text-6xl lg:text-7xl absolute bottom-12 lg:bottom-64">
            SUMMER '25
          </h1>
          <div className="w-[70%] overflow-hidden">
            <img src="/hero.webp" alt="hero" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
  )
}

export default Hero
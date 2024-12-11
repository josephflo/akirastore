import React from 'react'
import CarouselSection from "@/components/CarouselSection";


const NewArrivals = () => {
  return (
    <>
    <section id="open-source" className="w-full mx-auto space-y-6 py-8 ">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center ">
          <h2 className="font-bold text-2xl leading-[1.1] sm:text-2xl md:text-4xl">
            New Arrivals
          </h2>
        </div>
      </section>

      <section id="new-arrivals" className="mx-auto px-14 lg:px-24 w-full">
        <CarouselSection />
      </section>
    </>
    
  )
}

export default NewArrivals
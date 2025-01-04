import React from "react";

const Hero = () => {
  return (
    <section className="w-full space-y-6 pb-4 ">
      <div className="w-full flex flex-col items-center gap-4 text-center mx-auto relative">
        <h1 className="font-bold leading-normal text-4xl left-10 top-10 md:text-6xl lg:text-7xl absolute md:top-20 md:left-10 lg:left-96 lg:top-40 lg:pl-10">
          SPRING |
        </h1>
        <h1 className="font-bold leading-normal text-4xl right-24 bottom-20 md:text-6xl lg:text-7xl absolute md:bottom-36 md:right-32 pr-10 lg:right-96 lg:bottom-60 lg:pr-10">
          SUM
        </h1>
        <h1 className="font-bold leading-normal text-4xl right-10 bottom-10 md:text-6xl lg:text-7xl absolute md:bottom-20 md:right-4 pr-10 lg:right-96 lg:bottom-40 lg:pr-10">
          MER'25
        </h1>
        <div className="lg:h-[800px] overflow-hidden">
          <img
            src="/models/hero-model-web.webp"
            alt="hero"
            className="w-full h-full object-cover"
          />
          {/* <Image src="/models/hero-model.png" alt="hero" 
            width={1000}
            height={2000}
            className="w-full h-full object-cover" /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;

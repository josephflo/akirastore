import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full space-y-6 pb-4 ">
      <div className="w-full flex flex-col items-center gap-4 text-center mx-auto relative">
        <div className="lg:h-[800px] overflow-hidden">
          <Image
            src="/models/hero-model-2.png"
            alt="hero"
            className="hidden xl:block w-full h-full object-cover"
            width={1500}
            height={1050}
          />
          {/* <Image src="/models/hero-model.png" alt="hero" 
            width={1000}
            height={2000}
            className="w-full h-full object-cover" /> */}
          <Image
            src="/models/hero-model-mobile.png"
            alt="hero"
            className="block xl:hidden w-full h-full object-cover"
            width={1050}
            height={1500}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

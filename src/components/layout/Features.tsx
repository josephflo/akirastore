import { featuresList } from '@/constants'
import Link from 'next/link'
import React from 'react'

const Features = () => {
  return  (
    <section
        id="features"
        className="space-y-6 py-8 dark:bg-transparent md:py-12 lg:py-24 w-full"
      >
        <div className="mx-auto flex flex-col items-center space-y-4 text-center">
          <h2 className="font-bold text-2xl leading-[1.1] sm:text-2xl md:text-4xl mb-4">
            Features
          </h2>
        </div>

        <section className="w-full grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 lg:px-14">
          {featuresList.map((item, index) => (
            <div
              className="flex h-[680px] flex-col border justify-center gap-y-4 items-center relative overflow-hidden transition-transform duration-500 ease-in-out hover:scale-105 hover:filter hover:brightness-75"
              key={index}
            >
              <Link
                href={item.link}
                className="w-full h-full object-cover absolute"
              ></Link>
              <h3 className="font-bold leading-normal absolute text-white text-xl z-50 tracking-widest">
                {item.name.toUpperCase()}
              </h3>
              <img
                src={item.href}
                alt={item.name}
                className="w-full h-full object-cover "
              />
            </div>
          ))}
        </section>
      </section>
  )
}

export default Features
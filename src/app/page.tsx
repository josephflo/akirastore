import Link from "next/link";

import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import PostCard from "@/components/post/PostCard";
import ProductCard from "@/components/ProductCard";
import { featuresList } from "@/constants";

export default async function Page() {
  const posts = (await prisma.products.findMany({})).reverse();

  return (
    <>
      <section className="space-y-6 pb-4 ">
        <div className="container flex max-w-[84rem] flex-col items-center gap-4 text-center mx-auto relative">
          <h1 className="font-bold leading-normal text-3xl sm:text-5xl md:text-6xl lg:text-7xl absolute bottom-44 pr-20">
            SPRING |
          </h1>
          <h1 className="font-bold leading-normal text-3xl sm:text-5xl md:text-6xl lg:text-7xl absolute bottom-28">
            SUMMER '25
          </h1>
          <div className="border-b border-black md:max-w-[84rem]">
            <img src="/hero.webp" alt="hero" className="w-full" />
          </div>
        </div>
      </section>
      <section
        id="features"
        className="container space-y-6 py-8 dark:bg-transparent md:py-12 lg:py-24 mx-auto"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-bold text-2xl leading-[1.1] sm:text-2xl md:text-4xl">
            Features
          </h2>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-1 md:max-w-[84rem] md:grid-cols-2 lg:grid-cols-4 ">
          {featuresList.map((item, index) => (
            <div
              className="flex h-[480px] flex-col border justify-center gap-y-4 items-center rounded-lg relative overflow-hidden transition-transform duration-500 ease-in-out hover:scale-105 hover:brightness-110"
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
        </div>
      </section>

      <section
        id="open-source"
        className="container py-8 md:py-12 lg:py-8 mx-auto"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center ">
          <h2 className="font-bold text-2xl leading-[1.1] sm:text-2xl md:text-4xl">
            New Arrivals
          </h2>
        </div>
      </section>

      <section className="flex flex-col mb-20 w-full h-full">
        <div className="grid gap-4 sm:grid-cols-2 w-full  md:grid-cols-3 lg:grid-cols-4 mb-2 px-8 ">
          {posts.length > 0 &&
            posts.slice(0, 4).map((post: any) => (
              <Link href={`/inventory/${post.id}`} key={post.id}>
                <ProductCard key={post.id} post={post} />
              </Link>
            ))}
        </div>
      </section>
    </>
  );
}

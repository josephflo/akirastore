import Link from "next/link";

import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import PostCard from "@/components/post/PostCard";
import ProductCard from "@/components/ProductCard";

export default async function Page() {
  const posts = (await prisma.post.findMany({})).reverse();

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
          <div className="border-b border-black md:max-w-[84rem] bg-green-500">
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
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[84rem] md:grid-cols-4">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2 text-center">
            <div className="flex h-[480px] flex-col justify-center gap-y-4 items-center rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold leading-normal">Camperas</h3>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2 text-center">
            <div className="flex h-[480px] flex-col justify-center gap-y-4 items-center rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold leading-normal">Pantalones</h3>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2 text-center">
            <div className="flex h-[480px] flex-col justify-center gap-y-4 items-center rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold leading-normal">Corsets</h3>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2 text-center">
            <div className="flex h-[480px] flex-col justify-center gap-y-4 items-center rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold leading-normal">Chalecos</h3>
              </div>
            </div>
          </div>
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

      <section className="flex flex-col mb-20 w-full h-[580px]">
        <div className="grid gap-4 sm:grid-cols-2 w-full  md:grid-cols-4 mb-2 px-8 ">
          {posts.length > 0 &&
            posts
              .slice(0, 4)
              .map((post: any) => <ProductCard key={post.id} post={post} />)}
        </div>
      </section>
    </>
  );
}

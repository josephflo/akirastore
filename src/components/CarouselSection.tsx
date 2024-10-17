import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Link } from "@radix-ui/react-navigation-menu"
import ProductCard from "./ProductCard"
import { prisma } from "@/lib/prisma"
import { NavigationMenu } from "./ui/navigation-menu"

export default async function CarouselSize() {
  
  const posts = (await prisma.products.findMany({})).reverse();
  return (
<NavigationMenu>
  <Carousel
    opts={{
      align: "start",
    }}
    className="w-full"
  >
    <CarouselContent>
      {posts?.length > 0 ? (
        posts.slice(0, 12).map((post: any) => (
          <CarouselItem key={post.id} className="md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
              <Link href={`/inventory/${post.id}`} key={post.id}>
                <ProductCard key={post.id} post={post} />
              </Link>
            </div>
          </CarouselItem>
        ))
      ) : (
        <p>No posts available</p>
      )}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
</NavigationMenu>
  )
}

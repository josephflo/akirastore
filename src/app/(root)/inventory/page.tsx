import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { headers } from "next/headers";
import { prisma } from "@/lib/prisma";
import ProductCard from "@/components/ProductCard";
import { Navbar } from "@/components/layout";

export const revalidate = 0;

export default async function Posts() {
  headers();

  const posts = (await prisma.products.findMany({})).reverse();

  return (
    <>
    <section className="container margin-section-hero">
      <Link href="/" className="flex gap-1 items-center max-w-min">
        <ArrowLeft size={18} />
        Atras
      </Link>
      <header className="flex items-center justify-between my-4 md:my-8">
        <h1 className="font-bold text-2xl lg:mt-10">All Posts</h1>
        
      </header>

      {posts.length === 0 ? (
        <div className="h-72 flex items-center justify-center">
          <p>No posts to show</p>
        </div>
      ) : (
        <div className="py-4 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 items-stretch gap-4 rounded-md">
          {posts.map((posts) => (
            <Link href={`/inventory/${posts.id}`} key={posts.id}>
              <ProductCard key={posts.id} post={posts} />
            </Link>
          ))}
        </div>
      )}
    </section>
    </>

  );
}

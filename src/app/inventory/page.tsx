import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { headers } from 'next/headers'

import { Button } from '@/components/ui/button'
import PostCard from '@/components/post/PostCard'

import { prisma } from '@/lib/prisma'
import { RenderList } from 'react-kuh'
import ProductCard from '@/components/ProductCard'

export const revalidate = 0

export default async function Posts() {
  headers()

  const posts = (await prisma.post.findMany({})).reverse()

  return (
    <section className='margin-section-hero'>
      <Link href='/' className='flex gap-1 items-center max-w-min'>
        <ArrowLeft size={18} />
        Back
      </Link>
      <header className='flex items-center justify-between my-4 md:my-8'>
        <h1 className='font-bold text-2xl lg:mt-10'>All Posts</h1>
        <Link href='/inventory/create'>
          <Button size='sm' variant='outline'>
            Create Post
          </Button>
        </Link>
      </header>

      {posts.length === 0 ? (
        <div className='h-72 flex items-center justify-center'>
          <p>No posts to show</p>
        </div>
      ) : (
        <div className='py-4 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 items-stretch gap-4 rounded-md'>
          {posts.map((posts) => (
            <ProductCard key={posts.id} post={posts} />
          ))}
        </div>
      )}
    </section>
  )
}

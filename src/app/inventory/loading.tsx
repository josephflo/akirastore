import { ArrowLeft } from 'lucide-react'

import PostCardSkeleton from '@/components/post/PostCardSkeleton'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/layout'

export default function PostsLoading() {
  return (
    <>
    <Navbar />
    <section className='margin-section-hero container'>
      <div className='flex gap-1 items-center '>
        <ArrowLeft size={18} />
        Back
      </div>
      <header className='flex items-center justify-between my-4 md:my-8'>
        <h1 className='font-bold text-2xl'>All Posts</h1>
      </header>
      <div className='py-4 grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-2 rounded-md'>
        <PostCardSkeleton />
        <PostCardSkeleton />
        <PostCardSkeleton />
        <PostCardSkeleton />
        <PostCardSkeleton />
        <PostCardSkeleton />
      </div>
    </section>
    </>

  )
}

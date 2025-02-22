import { ArrowLeft } from 'lucide-react'

import PostFormSkeleton from '@/components/post/PostFormSkeleton'

export default function CreateLoading() {
  return (
    <section className='container margin-section-hero'>
      <div className='flex gap-1 items-center '>
        <ArrowLeft size={18} />
        Back
      </div>
      <div className='max-w-3xl mx-auto'>
        <header className='my-4 md:my-8'>
          <h1 className='font-bold text-2xl'>...</h1>
        </header>
        <PostFormSkeleton />
      </div>
    </section>
  )
}

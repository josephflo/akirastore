'use client'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { formatDate } from '@/lib/utils'

type Post = {
  id: string
  title: string
  date: Date
  content: string
}

interface Props {
  post: Post
}

export default function PostCard({ post }: Props) {
  return (
    <Card>
      <div className="bg-slate-200 h-[360px]">
        <img src="" alt="" />
      </div>
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
        <CardDescription>{formatDate(post.date)}</CardDescription>
      </CardHeader>
      <CardContent>
        <article className='text-sm prose prose-stone dark:prose-invert'>
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
      </CardContent>
      <CardFooter className='flex justify-end'>
        <Button size='sm' variant='outline' asChild>
          <Link href={`/inventory/${post.id}`}>Ver Articulo</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

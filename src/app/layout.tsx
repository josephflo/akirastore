import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import './globals.css'

import { AuthProvider, Navbar, ThemeProvider } from '@/components/layout'

import { AtomicState } from 'atomic-state'
import { FetchConfig } from 'http-react'

export const metadata: Metadata = {
  title: 'AKIRA STORE',
  description: 'Akira store, somos una tienda de ropa de moda femenina. Estamos ubicados en Flores(Avellaneda)'
}

export default function MainLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <head>
        <title>AKIRA STORE</title>
        <meta name='description' content='A Starter with Next.js' />
      </head>

      <body className={GeistSans.className}>
        <ThemeProvider attribute='class' defaultTheme='system'>
          <main className='min-h-screen'>
            <AuthProvider>
              <AtomicState>
                <FetchConfig baseUrl='/api'>
                  <Navbar />
                  <div className='max-w-screen-2xl mx-auto'>
                    {children}
                  </div>
                </FetchConfig>
              </AtomicState>
            </AuthProvider>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}

import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Manish Tamang',
  description: 'Created by Manish Tamang',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <ThemeProvider attribute="class" defaultTheme="system" enableSystem>

      <main>
    <div className="md:max-w-7xl max-w-full bg-zinc-50 w-full dark:bg-slate-900/[0.9] md:mx-auto p-0 ">
     <Navbar/>
     <div className="relative p-1 sm:p-8">
     {children}

     </div>
     <Footer />
    </div>
   </main>
       </ThemeProvider>
      </body>
    </html>
  )
}
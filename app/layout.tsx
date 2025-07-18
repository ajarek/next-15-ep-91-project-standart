import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export const metadata: Metadata = {
  title: 'Contact Manager',
  description: 'A simple contact management application',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <div className='max-w-7xl mx-auto'>
          <Navbar/>
          <main className='container mx-auto p-4'>

        {children}

          </main>
          <Footer />
        </div>
        </body>
    </html>
  )
}

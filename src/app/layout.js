import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kendo Club at UC Davis',
  description: 'Website for the Kendo Club at UC Davis!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-800
        text-slate-100 container mx-auto p-4`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

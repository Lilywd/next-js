import './globals.css'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import Header from './components/Header';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Clerk Auth',
  description: 'Simple Authentication',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}</body>
    </html>
    </ClerkProvider>
  )
}

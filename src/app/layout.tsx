import { type Metadata } from 'next'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'
import Link from 'next/link'
import './globals.css'
import Footer from '@/components/Footer';
import MobileMenu from '@/components/MobileMenu';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'AI SaaS Platform',
  description: 'A subscription-based platform with AI agents',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0F0F1A]`}>
          <header className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center p-4 h-16 bg-transparent">
            <div className="flex items-center gap-6">
              <Link href="/" className="text-xl font-bold text-white">NEXYA.ai</Link>
              <nav className="hidden md:flex gap-6">
                <SignedIn>
                  <Link href="/dashboard" className="text-white/80 hover:text-white font-medium transition-colors">Dashboard</Link>
                  <Link href="/agents" className="text-white/80 hover:text-white font-medium transition-colors">Agents</Link>
                  <Link href="/pricing" className="text-white/80 hover:text-white font-medium transition-colors">Tarifs</Link>
                  <Link href="/help" className="text-white/80 hover:text-white font-medium transition-colors">Aide</Link>
                </SignedIn>
                <SignedOut>
                  <Link href="/agents" className="text-white/80 hover:text-white font-medium transition-colors">Agents</Link>
                  <Link href="/pricing" className="text-white/80 hover:text-white font-medium transition-colors">Tarifs</Link>
                  <Link href="/help" className="text-white/80 hover:text-white font-medium transition-colors">Aide</Link>
                </SignedOut>
              </nav>
            </div>
            
            <div className="hidden md:flex items-center gap-4">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="px-4 py-2 rounded-md text-white/80 hover:text-white hover:bg-white/10 transition-colors">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-md hover:from-indigo-500 hover:to-purple-500 transition-colors">
                    Sign Up
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
            
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </header>
          <main>
            {children}
          </main>
          <Footer/>
        </body>
      </html>
    </ClerkProvider>
  )
}
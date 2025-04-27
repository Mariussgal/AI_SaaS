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
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <header className="flex justify-between items-center p-4 border-b h-16">
            <div className="flex items-center gap-6">
              <Link href="/" className="text-xl font-bold">AI SaaS</Link>
              <nav className="hidden md:flex gap-4">
                <SignedIn>
                  <Link href="/dashboard" className="hover:text-primary">Dashboard</Link>
                  <Link href="/agents" className="hover:text-primary">Agents</Link>
                  <Link href="/pricing" className="hover:text-primary">Pricing</Link>
                </SignedIn>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <SignedOut>
                <SignInButton />
                <SignUpButton />
              </SignedOut>
              <SignedIn>
                <UserButton/>
              </SignedIn>
            </div>
          </header>
          <main>
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}
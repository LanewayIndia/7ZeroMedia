import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import ClickSpark from "@/components/react-bits/ClickSpark"

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: '7ZeroMedia | AI-Powered Growth for Modern Brands',
  description: 'Transform your marketing with AI-driven media, predictive analytics, and real-time optimization. 7ZeroMedia delivers intelligent growth strategies that scale.',
  keywords: ['AI marketing', 'media buying', 'performance marketing', 'AI optimization', 'digital advertising'],
  authors: [{ name: '7ZeroMedia' }],
  openGraph: {
    title: '7ZeroMedia | AI-Powered Growth for Modern Brands',
    description: 'Transform your marketing with AI-driven media, predictive analytics, and real-time optimization.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        
        {children}
        <Analytics />
      </body>
    </html>
  )
}

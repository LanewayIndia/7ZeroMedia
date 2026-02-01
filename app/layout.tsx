import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});

const siteUrl = "https://7zero.media"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: { icon: "/favicon.ico" },

  title: '7ZeroMedia | AI-Powered Growth for Modern Brands',
  description: 'Transform your marketing with AI-driven media, predictive analytics, and real-time optimization. 7ZeroMedia delivers intelligent growth strategies that scale.',
  keywords: ['AI marketing', 'media buying', 'performance marketing', 'AI optimization', 'digital advertising'],
  authors: [{ name: '7ZeroMedia' }],
  openGraph: {
    title: '7ZeroMedia | AI-Powered Growth for Modern Brands',
    description: 'Transform your marketing with AI-driven media, predictive analytics, and real-time optimization.',
    url: siteUrl,
    siteName: "7ZeroMedia",
    type: 'website',
    images: [
      {
        url: `${siteUrl}/70m.png`,
        width: 1200,
        height: 630,
        alt: "7ZeroMedia OG Image",
      },
    ],
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

"use client"

import { motion, useScroll, useTransform } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import { ArrowRight, Play } from "lucide-react"
import ColorBends from "@/components/react-bits/color-bends"
import Image from "next/image"

const shimmerStyle = `
  @keyframes shine {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }
`

export function HeroSection() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, 120])

  return (
    <section className="relative h-screen min-h-screen overflow-hidden px-6 pt-20">
      {/* Animated Background */}
      <motion.div style={{ y }} className="absolute inset-0">
        <ColorBends className="w-full h-full"
          rotation={0}
          speed={0.2}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          parallax={0.5}
          noise={0.1}
          transparent
          autoRotate={0}
        />
      </motion.div>

      {/* Overlay */}
      {/* <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-background/0 via-background/60 to-background" /> */}

      {/* Content */}
      <div className="relative my-24 z-10 flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mb-6"
        >
          <Image
            src="/Seven-Zero-Logo.png"
            alt="7ZeroMedia Logo"
            width={340}
            height={340}
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mb-6"
        >
          <p className="mx-auto mb-10 max-w-2xl text-lg text-amber-50">
            An AI-powered media ecosystem redefining digital narratives through content, culture, and full-scale brand evolution.
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 16 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
          className="relative inline-flex items-center gap-4 px-12 py-6 rounded-full bg-clip-padding backdrop-blur-md backdrop-saturate-150 backdrop-brightness-100 border border-white/20 text-white font-semibold shadow-[0_0_10px_rgba(252,211,77,0.18)]"
        >
          {/* Decorative glow (glass) */}
          <div className="absolute -inset-1 rounded-full blur-3xl bg-linear-to-r from-yellow-400/40 via-pink-400/20 to-violet-400/10 -z-10" />


          {/* Animated Rocket */}
          <motion.span
            animate={{ y: [0, -6, 0], rotate: [0, 6, -6, 0] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
            className="text-3xl md:text-4xl"
          >
            🚀
          </motion.span>

          <span className="text-lg md:text-2xl drop-shadow-[0_6px_18px_rgba(0,0,0,0.25)]">Coming Soon</span>
        </motion.div>

      </div>
    </section >
  )
}


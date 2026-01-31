"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import ColorBends from "@/components/react-bits/color-bends"
import Image from "next/image"


export function HeroSection() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, 120])

  return (
    <section className="relative min-h-screen overflow-hidden px-6 pt-20">
      {/* Animated Background */}
      <motion.div style={{ y }} className="absolute inset-0">
        <ColorBends />
      </motion.div>

      {/* Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-background/0 via-background/60 to-background" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mb-6"
        >
          <Image
            src="/70m.png"
            alt="7ZeroMedia Logo"
            width={340}
            height={340}
            priority
          />
        </motion.div>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground">
          AI Powered Media Marketing For Modern Brands. Transform Your Growth With Intelligent Automation.
        </p>
        <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 16}}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.5,  delay: 0.35, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gold text-white font-semibold shadow-lg"
          >
            {/* Animated Rocket */}
            <motion.span
              animate={{ y: [0, -6, 0], rotate: [0, 6, -6, 0] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
              className="text-xl"
            >
              🚀
            </motion.span>

            <span>Coming Soon</span>
          </motion.div>
      </div>
    </section>
  )
}


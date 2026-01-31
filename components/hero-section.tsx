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

// "use client"

// import { useEffect, useState } from "react"
// import { motion, useScroll, useTransform } from "framer-motion"
// import Image from "next/image"

// import ColorBends from "@/components/react-bits/color-bends"
// import ClickSpark from "@/components/react-bits/ClickSpark"

// export function HeroSection() {
//   const { scrollY } = useScroll()
//   const y = useTransform(scrollY, [0, 600], [0, 120])

//   /* -----------------------------
//      Typewriter animation
//   ------------------------------ */
//   const text = "7ZeroMedia"
//   const [typed, setTyped] = useState("")

//   useEffect(() => {
//     let i = 0
//     const interval = setInterval(() => {
//       setTyped(text.slice(0, i + 1))
//       i++
//       if (i === text.length) clearInterval(interval)
//     }, 120)
//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <section className="relative min-h-screen overflow-hidden px-6 pt-20">
//       {/* Click Spark – global interaction */}
//       <ClickSpark />

//       {/* Animated Background */}
//       <motion.div
//         style={{ y }}
//         className="absolute inset-0 -z-10"
//       >
//         <ColorBends />
//       </motion.div>

//       {/* Dark cinematic overlay */}
//       <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/20 via-black/60 to-black/90" />

//       {/* Content */}
//       <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-5xl flex-col items-center justify-center text-center">
        
//         {/* Logo */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="mb-6"
//         >
//           <Image
//             src="/7zeromediaLogo.png"
//             alt="7ZeroMedia Logo"
//             width={120}
//             height={120}
//             priority
//             className="drop-shadow-[0_0_30px_rgba(0,255,255,0.25)]"
//           />
//         </motion.div>

//         {/* Brand Name – Typewriter */}
//         <motion.h1
//           className="mb-4 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4 }}
//         >
//           <span className="bg-linear-to-r from-cyan-300 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
//             {typed}
//           </span>
//           <span className="ml-1 animate-pulse text-cyan-300">|</span>
//         </motion.h1>

//         {/* Coming Soon */}
//         <motion.p
//           initial={{ opacity: 0, y: 12 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.2, duration: 0.6 }}
//           className="text-sm uppercase tracking-[0.35em] text-cyan-200/80"
//         >
//           Coming Soon
//         </motion.p>

//         {/* Subtle glow ring */}
//         <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
//           <div className="h-105 w-105 rounded-full bg-cyan-400/10 blur-3xl" />
//         </div>
//       </div>
//     </section>
//   )
// }

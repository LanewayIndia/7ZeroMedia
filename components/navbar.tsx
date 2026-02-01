"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Ghost, Menu, X } from "lucide-react"
import Image from "next/image"

// const navLinks = [
//   { href: "#services", label: "Services" },
//   { href: "#how-it-works", label: "How It Works" },
//   { href: "#results", label: "Results" },
//   { href: "#testimonials", label: "Testimonials" }
// ]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-opacity-20 backdrop-blur-lg rounded-lg p-0 ${
          isScrolled ? "glassmorphism" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-2">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <div className="flex items-center">
                <Image
                  src="/Seven-Zero-Logo.png"
                  alt="7ZeroMedia Logo"
                  width={40}
                  height={40}
                  className="h-20 w-20 object-contain"
                />
              </div>
            </a>

            {/* Desktop Navigation */}
            {/* <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div> */}

            {/* CTA Button */}
            {/* <div className="hidden md:block">
              <Button variant="ghost" className="relative inline-flex items-center gap-4 px-12 py-6 rounded-xl bg-black/60 backdrop-blur-md backdrop-saturate-150 backdrop-brightness-100 border border-white/20 text-white font-semibold shadow-[0_0_10px_rgba(252,211,77,0.18)]">
                Coming Soon 
              </Button>
            </div> */}

            {/* Mobile Menu Button */}
            {/* <button
              type="button"
              className="md:hidden relative inline-flex items-center gap-4 px-6 py-3 rounded-xl bg-black/60 backdrop-blur-md backdrop-saturate-150 backdrop-brightness-100 border border-white/20 text-white font-semibold shadow-[0_0_10px_rgba(252,211,77,0.18)]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              Get Started
            </button> */}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 glassmorphism mx-4 mt-2 rounded-xl p-6 md:hidden"
          >
            {/* <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-lg text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button className="mt-4 w-full glow-cyan-subtle bg-primary text-primary-foreground">
                Get Started
              </Button>
            </div> */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ArrowRight, Sparkles } from "lucide-react"


export function CTASection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        {/* Radial gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-primary/10 via-transparent to-transparent" />
        
        {/* Animated orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
          className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
          className="absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-primary/15 blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <ScrollReveal>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary">Ready to Transform Your Growth?</span>
          </motion.div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mb-6 text-4xl font-bold text-foreground sm:text-5xl md:text-6xl text-balance">
            Let AI Scale
            <br />
            <span className="gradient-text text-glow-cyan">Your Growth</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground text-pretty">
            Join hundreds of forward-thinking brands already using AI to dominate their markets. 
            Your competitors are automating—it's time you did too.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              size="lg"
              className="group glow-cyan bg-primary px-10 py-6 text-lg text-primary-foreground transition-all hover:bg-primary/90"
            >
              Start Your AI Journey
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <p className="mt-6 text-sm text-muted-foreground">
            Free consultation • No commitment • Results in 30 days
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}

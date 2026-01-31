"use client"

import { motion } from "framer-motion"
import { ScrollReveal, StaggerChildren, StaggerItem } from "@/components/scroll-reveal"
import { Database, Brain, LineChart, Gauge, Rocket } from "lucide-react"


const steps = [
  {
    icon: Database,
    number: "01",
    title: "Ingest Data",
    description: "Connect your ad accounts and we automatically pull in all historical performance data, creative assets, and audience insights."
  },
  {
    icon: Brain,
    number: "02",
    title: "Analyze with AI",
    description: "Our neural networks process millions of data points to understand what drives performance for your specific brand and audience."
  },
  {
    icon: LineChart,
    number: "03",
    title: "Predict Outcomes",
    description: "Machine learning models forecast performance across different scenarios, identifying the highest-probability paths to success."
  },
  {
    icon: Gauge,
    number: "04",
    title: "Optimize in Real Time",
    description: "AI continuously adjusts bids, budgets, targeting, and creative rotation—reacting to performance signals in milliseconds."
  },
  {
    icon: Rocket,
    number: "05",
    title: "Scale Automatically",
    description: "As winning patterns emerge, our systems automatically scale spend to capture more conversions while maintaining efficiency."
  }
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-32 px-6">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <ScrollReveal className="text-center mb-20">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            The Process
          </span>
          <h2 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl text-balance">
            How It Works
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            From data to results in five intelligent steps—fully automated, continuously improving.
          </p>
        </ScrollReveal>

        <StaggerChildren className="relative" staggerDelay={0.15}>
          {/* Connecting line */}
          <div className="absolute left-8 top-0 bottom-0 hidden w-px bg-linear-to-b from-transparent via-border to-transparent lg:block" />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <StaggerItem key={step.number}>
                <StepCard step={step} index={index} isLast={index === steps.length - 1} />
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </section>
  )
}

function StepCard({ step, index, isLast }: { step: typeof steps[0]; index: number; isLast: boolean }) {
  const Icon = step.icon

  return (
    <motion.div
      whileHover={{ x: 5 }}
      transition={{ duration: 0.2 }}
      className="group relative flex gap-8"
    >
      {/* Step indicator */}
      <div className="relative hidden lg:block">
        <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl glassmorphism text-2xl font-bold text-primary transition-all group-hover:glow-cyan-subtle">
          {step.number}
        </div>
        {/* Connector dot */}
        {!isLast && (
          <div className="absolute left-1/2 top-full h-8 w-px -translate-x-1/2 bg-border" />
        )}
      </div>

      {/* Content card */}
      <div className="flex-1 rounded-2xl glassmorphism p-8 transition-all duration-300 group-hover:border-primary/30">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          {/* Icon */}
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
            <Icon className="h-7 w-7" />
          </div>

          {/* Text */}
          <div className="flex-1">
            <div className="mb-1 text-sm font-medium text-primary lg:hidden">
              Step {step.number}
            </div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">
              {step.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

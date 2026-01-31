"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"

const metrics = [
  { value: 3.2, suffix: "x", label: "Average ROAS", prefix: "" },
  { value: 240, suffix: "%", label: "Engagement Increase", prefix: "+" },
  { value: 42, suffix: "%", label: "Cost Per Acquisition", prefix: "-" },
  { value: 99.9, suffix: "%", label: "AI System Uptime", prefix: "" }
]

function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return

    let startTime: number | null = null
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      // Easing function for smooth animation
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(eased * end)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, start])

  return count
}

function MetricCard({ metric, index }: { metric: typeof metrics[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const count = useCountUp(metric.value, 2000, isInView)

  const displayValue = metric.value % 1 === 0 
    ? Math.round(count) 
    : count.toFixed(1)

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-2xl glassmorphism p-8 text-center transition-all duration-300 hover:border-primary/30"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-linear-to-t from-primary/10 to-transparent" />
      </div>

      <div className="relative">
        <div className="mb-2 text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
          <span className="text-primary">{metric.prefix}</span>
          <span className="gradient-text">{displayValue}</span>
          <span className="text-primary">{metric.suffix}</span>
        </div>
        <div className="text-lg text-muted-foreground">{metric.label}</div>
      </div>
    </div>
  )
}

export function MetricsSection() {
  return (
    <section id="results" className="relative py-32 px-6">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <ScrollReveal className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Real Results
          </span>
          <h2 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl text-balance">
            Numbers That Speak
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            Our AI systems consistently deliver measurable improvements across every key metric.
          </p>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <MetricCard key={metric.label} metric={metric} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

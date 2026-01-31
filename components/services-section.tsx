"use client"

import { motion } from "framer-motion"
import { ScrollReveal, StaggerChildren, StaggerItem } from "@/components/scroll-reveal"
import { 
  Brain, 
  TrendingUp, 
  Sparkles, 
  Zap, 
  Globe, 
  BarChart3 
} from "lucide-react"

const services = [
  {
    icon: Brain,
    title: "AI Ad Optimization",
    description: "Our neural networks analyze millions of data points to optimize your ads in real-time, maximizing performance across every channel."
  },
  {
    icon: TrendingUp,
    title: "Predictive Media Buying",
    description: "Machine learning algorithms predict market trends and audience behavior, placing your ads where they'll perform best—before the competition."
  },
  {
    icon: Sparkles,
    title: "Creative Intelligence",
    description: "AI-powered creative analysis identifies winning ad elements, automatically generating high-converting variations at scale."
  },
  {
    icon: Zap,
    title: "Real-time Scaling",
    description: "Autonomous budget allocation responds instantly to performance signals, scaling winners and cutting losers without human delay."
  },
  {
    icon: Globe,
    title: "Multi-platform Automation",
    description: "Unified AI orchestration across Meta, Google, TikTok, and emerging platforms—one intelligent system managing it all."
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Deep learning models surface actionable insights from your data, turning complex metrics into clear strategic recommendations."
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal className="text-center mb-20">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Our Capabilities
          </span>
          <h2 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl text-balance">
            AI That Actually Performs
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            Not just buzzwords—real machine learning systems that drive measurable results for your brand.
          </p>
        </ScrollReveal>

        <StaggerChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: typeof services[0] }) {
  const Icon = service.icon

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="group relative overflow-hidden rounded-2xl glassmorphism p-8 transition-all duration-300 hover:border-primary/30"
    >
      {/* Hover glow effect */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -inset-px rounded-2xl bg-linear-to-br from-primary/20 via-transparent to-transparent" />
      </div>

      <div className="relative">
        {/* Icon */}
        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:glow-cyan-subtle">
          <Icon className="h-7 w-7" />
        </div>

        {/* Content */}
        <h3 className="mb-3 text-xl font-semibold text-foreground">
          {service.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {service.description}
        </p>
      </div>
    </motion.div>
  )
}

"use client"

import { motion } from "framer-motion"
import { ScrollReveal, StaggerChildren, StaggerItem } from "@/components/scroll-reveal"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "7ZeroMedia's AI transformed our ROAS from 1.8x to 4.2x in just 90 days. The automation is genuinely intelligent—it's like having a team of expert media buyers working 24/7.",
    author: "Sarah Chen",
    role: "CMO",
    company: "TechScale Inc."
  },
  {
    quote: "We've worked with dozens of agencies. None come close to the results we've seen here. The AI optimization is on another level—it catches opportunities we'd never see manually.",
    author: "Marcus Johnson",
    role: "VP of Growth",
    company: "Elevate Commerce"
  },
  {
    quote: "The predictive capabilities are incredible. We're now making decisions based on where the market is going, not where it's been. Our CPA dropped 38% in the first month.",
    author: "Emily Rodriguez",
    role: "Director of Digital",
    company: "Bloom Brands"
  }
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal className="text-center mb-20">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl text-balance">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            Hear from the marketing leaders who have transformed their performance with AI.
          </p>
        </ScrollReveal>

        <StaggerChildren className="grid gap-8 md:grid-cols-3" staggerDelay={0.15}>
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.author}>
              <TestimonialCard testimonial={testimonial} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="group relative h-full overflow-hidden rounded-2xl glassmorphism p-8 transition-all duration-300 hover:border-primary/30"
    >
      {/* Quote icon */}
      <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Quote className="h-6 w-6" />
      </div>

      {/* Quote text */}
      <p className="mb-8 text-foreground leading-relaxed">
        "{testimonial.quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        {/* Avatar placeholder - using initials */}
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-sm font-medium text-primary">
          {testimonial.author.split(" ").map(n => n[0]).join("")}
        </div>
        <div>
          <div className="font-medium text-foreground">{testimonial.author}</div>
          <div className="text-sm text-muted-foreground">
            {testimonial.role}, {testimonial.company}
          </div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-primary/5 blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
    </motion.div>
  )
}

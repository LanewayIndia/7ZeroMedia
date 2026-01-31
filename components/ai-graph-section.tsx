"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"


const phases = [
  { label: "Learning", color: "oklch(0.72 0.19 195)" },
  { label: "Optimizing", color: "oklch(0.65 0.2 250)" },
  { label: "Scaling", color: "oklch(0.7 0.18 160)" }
]

export function AIGraphSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })
  const [currentPhase, setCurrentPhase] = useState(0)
  const [dataPoints, setDataPoints] = useState<number[]>([])

  useEffect(() => {
    if (!isInView) return

    // Generate initial data points with improvement curve
    const generatePoints = () => {
      const points: number[] = []
      for (let i = 0; i < 50; i++) {
        // Sigmoid-like growth curve with noise
        const progress = i / 50
        const base = 30 + 50 * (1 / (1 + Math.exp(-8 * (progress - 0.3))))
        const noise = Math.random() * 15 - 7.5
        points.push(Math.max(20, Math.min(90, base + noise)))
      }
      return points
    }

    setDataPoints(generatePoints())

    // Phase cycling
    const phaseInterval = setInterval(() => {
      setCurrentPhase((prev) => (prev + 1) % phases.length)
    }, 3000)

    return () => clearInterval(phaseInterval)
  }, [isInView])

  useEffect(() => {
    if (!canvasRef.current || dataPoints.length === 0) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    let animationProgress = 0
    let animationFrame: number

    const draw = () => {
      ctx.clearRect(0, 0, rect.width, rect.height)

      // Draw grid
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)"
      ctx.lineWidth = 1
      for (let i = 0; i <= 4; i++) {
        const y = (rect.height / 4) * i
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(rect.width, y)
        ctx.stroke()
      }

      if (dataPoints.length === 0) return

      const visiblePoints = Math.floor(dataPoints.length * Math.min(animationProgress, 1))
      if (visiblePoints < 2) {
        if (animationProgress < 1) {
          animationProgress += 0.02
          animationFrame = requestAnimationFrame(draw)
        }
        return
      }

      // Draw gradient area
      const gradient = ctx.createLinearGradient(0, 0, 0, rect.height)
      gradient.addColorStop(0, "rgba(0, 200, 220, 0.3)")
      gradient.addColorStop(1, "rgba(0, 200, 220, 0)")

      ctx.beginPath()
      ctx.moveTo(0, rect.height)

      for (let i = 0; i < visiblePoints; i++) {
        const x = (rect.width / (dataPoints.length - 1)) * i
        const y = rect.height - (dataPoints[i] / 100) * rect.height
        if (i === 0) {
          ctx.lineTo(x, y)
        } else {
          const prevX = (rect.width / (dataPoints.length - 1)) * (i - 1)
          const prevY = rect.height - (dataPoints[i - 1] / 100) * rect.height
          const cpX = (prevX + x) / 2
          ctx.quadraticCurveTo(prevX, prevY, cpX, (prevY + y) / 2)
        }
      }

      const lastX = (rect.width / (dataPoints.length - 1)) * (visiblePoints - 1)
      ctx.lineTo(lastX, rect.height)
      ctx.closePath()
      ctx.fillStyle = gradient
      ctx.fill()

      // Draw line
      ctx.beginPath()
      for (let i = 0; i < visiblePoints; i++) {
        const x = (rect.width / (dataPoints.length - 1)) * i
        const y = rect.height - (dataPoints[i] / 100) * rect.height
        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          const prevX = (rect.width / (dataPoints.length - 1)) * (i - 1)
          const prevY = rect.height - (dataPoints[i - 1] / 100) * rect.height
          const cpX = (prevX + x) / 2
          ctx.quadraticCurveTo(prevX, prevY, cpX, (prevY + y) / 2)
        }
      }

      ctx.strokeStyle = phases[currentPhase].color
      ctx.lineWidth = 3
      ctx.lineCap = "round"
      ctx.stroke()

      // Draw current point
      if (visiblePoints > 0) {
        const currentX = (rect.width / (dataPoints.length - 1)) * (visiblePoints - 1)
        const currentY = rect.height - (dataPoints[visiblePoints - 1] / 100) * rect.height

        // Glow
        ctx.beginPath()
        ctx.arc(currentX, currentY, 12, 0, Math.PI * 2)
        ctx.fillStyle = `${phases[currentPhase].color.replace(")", " / 0.3)")}` 
        ctx.fill()

        // Point
        ctx.beginPath()
        ctx.arc(currentX, currentY, 6, 0, Math.PI * 2)
        ctx.fillStyle = phases[currentPhase].color
        ctx.fill()
      }

      if (animationProgress < 1) {
        animationProgress += 0.02
        animationFrame = requestAnimationFrame(draw)
      }
    }

    draw()

    return () => cancelAnimationFrame(animationFrame)
  }, [dataPoints, currentPhase])

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Live Optimization
          </span>
          <h2 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl text-balance">
            Watch AI Work in Real-Time
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            Our systems continuously learn, adapt, and optimize—improving performance every second.
          </p>
        </ScrollReveal>

        <div ref={containerRef} className="relative">
          {/* Graph container */}
          <div className="relative rounded-2xl glassmorphism p-8 overflow-hidden">
            {/* Phase indicator */}
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                {phases.map((phase, index) => (
                  <motion.div
                    key={phase.label}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm transition-all ${
                      index === currentPhase
                        ? "bg-primary/20 text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full transition-colors`}
                      style={{
                        backgroundColor: index === currentPhase ? phase.color : "currentColor",
                        opacity: index === currentPhase ? 1 : 0.3
                      }}
                    />
                    {phase.label}
                  </motion.div>
                ))}
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPhase}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-sm text-muted-foreground"
                >
                  Performance: <span className="text-primary font-medium">+{Math.round(dataPoints[dataPoints.length - 1] || 0)}%</span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Canvas */}
            <div className="relative h-64 sm:h-80">
              <canvas
                ref={canvasRef}
                className="absolute inset-0 h-full w-full"
              />
              
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-muted-foreground py-2">
                <span>100%</span>
                <span>75%</span>
                <span>50%</span>
                <span>25%</span>
                <span>0%</span>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="pointer-events-none absolute top-0 right-0 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-24 rounded-full bg-primary/5 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

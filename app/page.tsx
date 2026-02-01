import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
// import { ServicesSection } from "@/components/services-section"
// import { MetricsSection } from "@/components/metrics-section"
// import { AIGraphSection } from "@/components/ai-graph-section"
// import { HowItWorksSection } from "@/components/how-it-works-section"
// import { TestimonialsSection } from "@/components/testimonials-section"
// import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import ClickSpark from "@/components/react-bits/ClickSpark"


export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/*Click Spark Animation */}
      {/* Navigation */}
      <Navbar />
      <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}>

        {/* Page sections */}
        <HeroSection />
        {/* 
            <ServicesSection />
            <MetricsSection />
            <AIGraphSection />
            <HowItWorksSection />
            <TestimonialsSection />
            <CTASection /> 
          */}
        <Footer />
      </ClickSpark>
    </main>
  )
}

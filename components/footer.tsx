"use client"

import { motion } from "framer-motion"
import { Twitter, Linkedin, Instagram, Mail } from "lucide-react"
import ClickSpark from "./react-bits/ClickSpark"

const footerLinks = {
  company: [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Press", href: "#" }
  ],
  services: [
    { label: "AI Ad Optimization", href: "#services" },
    { label: "Media Buying", href: "#services" },
    { label: "Creative Intelligence", href: "#services" },
    { label: "Performance Scaling", href: "#services" }
  ],
  resources: [
    { label: "Case Studies", href: "#" },
    { label: "Documentation", href: "#" },
    { label: "API", href: "#" },
    { label: "Support", href: "#" }
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" }
  ]
}

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Mail, href: "#", label: "Email" }
]

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Main footer content */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="mb-4 inline-flex items-center">
              <span className="text-2xl font-bold text-foreground">7</span>
              <span className="text-2xl font-bold gradient-text">Zero</span>
              <span className="text-2xl font-bold text-foreground">Media</span>
            </a>
            <p className="mb-6 max-w-sm text-muted-foreground">
              AI-powered media marketing for modern brands. Transform your growth with intelligent automation.
            </p>
            {/* Social links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-primary/20 hover:text-primary"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} 7ZeroMedia. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Powered by artificial intelligence
          </p>
        </div>
      </div>
    </footer>
  )
}

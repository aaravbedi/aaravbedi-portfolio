"use client"

import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useEffect, useState } from "react"

export function About() {
  const [scrollOffset, setScrollOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about")
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect()
        const offset = Math.max(0, window.innerHeight - rect.top)
        setScrollOffset(offset)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const parallaxOffset = scrollOffset * 0.3

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
        style={{
          transform: `translateY(-${parallaxOffset * 0.5}px)`,
        }}
      />

      <div className="container mx-auto max-w-5xl relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 font-mono text-primary">{"</About>"}</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left" delay={200}>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Hi! I'm <span className="text-foreground font-semibold">Aarav Bedi</span>, a Mechanical Engineering
                Senior undergraduate from the University of California, Berkeley. I specialize in Mechanical Engineering
                Manufacturing and Design for Manufacturing.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Mechanical Engineer with a diverse range of experience in integrated AI and Robotics, Automotive
                manufacturing, Clean Tech, and Quantum computing. I am dedicated to working on innovative projects and
                creating impactful solutions.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Passionate about Robotics and engaging in positive discussions about the latest industry trends.
              </p>

              <Button
                variant="outline"
                className="mt-4 bg-transparent hover:bg-primary hover:text-background transition-all duration-300"
                asChild
              >
                <a href="/resume.pdf" download>
                  Download Resume
                </a>
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={300}>
            <div className="flex justify-center">
              <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-lg overflow-hidden shadow-2xl border-2 border-primary/30 hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-primary/30 group">
                <img
                  src="/profile-full.png"
                  alt="Aarav Bedi"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

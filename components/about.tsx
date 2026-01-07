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
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/3 rounded-full blur-3xl"
        style={{
          transform: `translateY(-${parallaxOffset * 0.5}px)`,
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 font-mono text-primary">{"</About>"}</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left" delay={200}>
            <div className="space-y-8">
              <p className="text-lg text-foreground/80 leading-relaxed">
                Hi! I'm <span className="text-foreground font-bold">Aarav Bedi</span>, a Mechanical Engineering Senior
                undergraduate from the University of California, Berkeley. I specialize in Mechanical Engineering
                Manufacturing and Design for Manufacturing.
              </p>

              <p className="text-base text-muted-foreground leading-relaxed">
                Through previous internship experiences, I've gained hands-on expertise across cutting-edge industries
                including integrated AI and Robotics, Automotive manufacturing, Clean Tech, and Quantum computing. These
                experiences have shaped my approach to solving complex engineering challenges and creating innovative
                solutions.
              </p>

              <p className="text-base text-muted-foreground leading-relaxed">
                I bring a deep passion and genuine interest in emerging technologies, particularly in Robotics, Quantum
                computing, and AI integration. I'm always eager to explore new industry trends and contribute to
                groundbreaking projects that push the boundaries of what's possible in mechanical engineering.
              </p>

              <Button
                variant="outline"
                className="mt-6 bg-transparent border-2 hover:bg-primary hover:text-background hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                asChild
              >
                <a
                  href="https://drive.google.com/file/d/1S2mh4IIxST6ns2L74zJsI3hZ7_iWsWj3/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Resume
                </a>
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={300}>
            <div className="flex justify-center">
              <div className="relative w-72 h-96 md:w-80 md:h-[440px] rounded-2xl overflow-hidden shadow-2xl shadow-black/10 border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl hover:shadow-primary/20 group">
                <img
                  src="/profile-full.png"
                  alt="Aarav Bedi"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent 60%)" }}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

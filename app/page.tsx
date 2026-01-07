"use client"

import { useEffect, useState } from "react"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Articles } from "@/components/articles"
import { Internships } from "@/components/internships"
import { Projects } from "@/components/projects"
import { Communities } from "@/components/communities"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem("portfolioScrollPosition")
    if (savedScrollPosition) {
      const scrollPos = Number.parseInt(savedScrollPosition, 10)
      window.scrollTo(0, scrollPos)
      sessionStorage.removeItem("portfolioScrollPosition")
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      sessionStorage.setItem("portfolioScrollPosition", window.scrollY.toString())
    }

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("mousemove", handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(59, 130, 246, 0.08), transparent 80%)`,
        }}
      />

      <Navigation />
      <div className="relative z-20">
        <Hero scrollY={scrollY} />
      </div>
      <div className="relative z-10 mt-16">
        <About />
        <Articles />
        <Internships />
        <Projects />
        <Communities />
        <Skills />
      </div>

      {/* ScrollToTop button */}
      <ScrollToTop />
    </div>
  )
}

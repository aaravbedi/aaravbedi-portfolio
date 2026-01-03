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

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero scrollY={scrollY} />
      <About />
      <Skills />
      <Articles />
      <Internships />
      <Projects />
      <Communities />
    </div>
  )
}

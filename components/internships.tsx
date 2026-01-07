"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import type React from "react"

import { useState, useRef } from "react"
import Link from "next/link"

export function Internships() {
  const internships = [
    {
      company: "Rigetti Computing",
      role: "Hardware Design Engineer",
      period: "May 2025 - Aug 2025",
      location: "Berkeley, California",
      slug: "rigetti",
      logo: "/internships/rigetti-logo.png",
      description:
        "Led quantum-hardware projects focusing on cryostat design and high-vacuum systems for quantum computing applications.",
      achievements: [
        "Led 2 quantum-hardware projects; drove one from blank CAD to pilot build in 2 weeks, advancing it to final production test",
        "Authored the master CAD/BOM for a 350 mK Bluefors cryostat, completed 23+ SolidWorks/DFM iterations, 30+ 3D TPU AMS prints",
        "Released GD&T drawings as revision-controlled PDFs through PDM",
        "Engineered the high-vacuum fore-line (less than 40mm bend radius) and cut installation time by 25% using BOM, step-by-step documentation, and drawings",
      ],
    },
    {
      company: "PACCAR",
      role: "Structural Analysis Engineer",
      period: "May 2024 - Aug 2024",
      location: "Seattle, Washington",
      slug: "paccar",
      logo: "/internships/paccar-logo.png",
      description:
        "Performed structural analysis on truck structures and battery systems, utilizing advanced FEA and PhysicsAI to optimize designs for production.",
      achievements: [
        "Performed FEA on truck structures and battery systems in HyperWorks 2021.2, maintaining <250MPa stress and >20Hz modal displacement on A36 steel",
        "Increased simulation throughput by 40% using PhysicsAI in HyperMesh 2024",
        "Delivered design reports that cut weld weight 8% while meeting SAE fatigue targets",
        "Enabled adoption in 2025 production frames through optimized structural designs",
      ],
    },
  ]

  return (
    <section id="internships" className="py-32 px-6 bg-secondary/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 font-mono text-primary">{"</Internships>"}</h2>
        </ScrollReveal>

        <div className="space-y-10">
          {internships.map((internship, i) => (
            <ScrollReveal key={i} delay={100} direction="up">
              <InteractiveInternshipCard href={`/internships/${internship.slug}`}>
                <div className="bg-card/40 backdrop-blur-md border border-border/50 rounded-2xl p-8 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer hover:-translate-y-1 group">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0 w-16 h-16 bg-background/80 border border-border/50 rounded-xl flex items-center justify-center p-2 group-hover:border-primary/40 transition-all duration-300 group-hover:shadow-lg">
                        <img
                          src={internship.logo || "/placeholder.svg"}
                          alt={internship.company}
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {internship.company}
                        </h3>
                        <p className="text-lg text-primary font-semibold">{internship.role}</p>
                        <p className="text-sm text-muted-foreground mt-1">{internship.location}</p>
                      </div>
                    </div>
                    <span className="text-muted-foreground mt-3 md:mt-0 font-mono text-sm bg-primary/10 px-4 py-2 rounded-lg border border-primary/20">
                      {internship.period}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed text-base">{internship.description}</p>

                  <ul className="space-y-3 mb-6">
                    {internship.achievements.map((achievement, j) => (
                      <ScrollReveal key={j} delay={200 + j * 50}>
                        <li className="flex items-start gap-3 text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          <span className="text-primary mt-0.5 text-lg font-bold">•</span>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      </ScrollReveal>
                    ))}
                  </ul>

                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <span>Learn More</span>
                    <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </div>
                </div>
              </InteractiveInternshipCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function InteractiveInternshipCard({ children, href }: { children: React.ReactNode; href: string }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const tiltX = (y - centerY) / 50
    const tiltY = (centerX - x) / 50

    setTilt({ x: tiltX, y: tiltY })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  const handleClick = () => {
    sessionStorage.setItem("portfolioScrollPosition", window.scrollY.toString())
  }

  return (
    <Link href={href} onClick={handleClick}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        {children}
      </div>
    </Link>
  )
}

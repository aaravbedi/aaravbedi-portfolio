"use client"
import { ScrollReveal } from "@/components/scroll-reveal"
import type React from "react"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"

const projects = [
  {
    title: "Ball Balancing Bot",
    slug: "ball-balancing-bot",
    description:
      "Calculated nonlinear 2D/3D kinematics and dynamics for a 3-DOF ball-balancing platform. Designed and tuned a discrete PID controller (Kp=12, Ki=1.5, Kd=0.8) to achieve sub-2° steady-state tilt error with <0.8s settling time. Implemented control loop in Python simulation at 100 Hz and generated tolerance-constrained CAD for 3D printing.",
    image: "/ball-balancing-bot.png",
    tech: ["Python", "PID Control", "SolidWorks", "3D Printing"],
    github: "#",
    demo: "https://example.com/ball-bot",
  },
  {
    title: "Prosthetic Hand",
    slug: "prosthetic-hand",
    description:
      "Fabricated a functional prosthetic glove using SolidWorks and FEA, integrating 4 MG90S servos, PTFE tendon routing, and a closed-loop ESP32-FSR system to achieve 18N grip force (310% above baseline), 0.5s actuation, 2.2kg·cm torque, and real-time haptic feedback via DRV2605.",
    image: "/prosthetic-hand.png",
    tech: ["SolidWorks", "FEA", "ESP32", "Mechatronics"],
    github: "#",
    demo: "#",
  },
  {
    title: "Vacuum Bagging System",
    slug: "vacuum-bagging-system",
    description:
      "Designed and manufactured a vacuum bagging system for composite layups. Implemented advanced manufacturing techniques for carbon fiber parts with optimal resin distribution and minimal void content.",
    image: "/vacuum-bagging-system.png",
    tech: ["Composite Manufacturing", "CAD", "Process Design"],
    github: "#",
    demo: "#",
  },
  {
    title: "Mazda Miata Build",
    slug: "mazda-miata-build",
    description:
      "Complete restoration and performance build of a Mazda Miata. Custom fabrication, TIG welding, and mechanical modifications. Project showcases practical application of mechanical engineering principles and hands-on manufacturing skills.",
    image: "/miata/interior.png",
    tech: ["TIG Welding", "Mechanical Design", "Fabrication"],
    github: "#",
    demo: "#",
  },
  {
    title: "CPAP Machine Design",
    slug: "cpap-machine",
    description:
      "Designed a CPAP machine with focus on user comfort and manufacturing efficiency. Applied DFM principles and conducted extensive CAD iterations to optimize design for production while maintaining medical device standards.",
    image: "/cpap-machine.png",
    tech: ["Medical Device Design", "CAD", "DFM"],
    github: "#",
    demo: "#",
  },
]

export function Projects() {
  const [scrollOffset, setScrollOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById("projects")
      if (projectsSection) {
        const rect = projectsSection.getBoundingClientRect()
        const offset = Math.max(0, window.innerHeight - rect.top)
        setScrollOffset(offset)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden">
      <div
        className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
        style={{
          transform: `translateY(${scrollOffset * 0.2}px) scale(${1 + scrollOffset * 0.0005})`,
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 font-mono text-primary">{"</Projects>"}</h2>
        </ScrollReveal>

        <div className="space-y-16">
          {projects.map((project, i) => (
            <ScrollReveal key={i} delay={i * 100} direction={i % 2 === 0 ? "left" : "right"}>
              <InteractiveProjectCard href={`/projects/${project.slug}`}>
                <div className="bg-card/40 backdrop-blur-md border border-border/50 rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group hover:-translate-y-1 cursor-pointer">
                  <div className={`grid md:grid-cols-2 gap-0 ${i % 2 === 1 ? "md:grid-flow-dense" : ""}`}>
                    <div className={`relative h-72 md:h-full overflow-hidden ${i % 2 === 1 ? "md:col-start-2" : ""}`}>
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ background: "linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent 60%)" }}
                      />
                    </div>

                    <div className="p-8 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed text-base">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, j) => (
                          <span
                            key={j}
                            className="text-xs px-3 py-1.5 bg-primary/10 text-primary rounded-lg border border-primary/20 hover:bg-primary hover:text-background transition-all duration-300 cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-primary font-semibold">
                        <span>View Details</span>
                        <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </InteractiveProjectCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function InteractiveProjectCard({ children, href }: { children: React.ReactNode; href: string }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const tiltX = (y - centerY) / 40
    const tiltY = (centerX - x) / 40

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

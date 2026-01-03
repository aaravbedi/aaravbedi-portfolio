"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
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
    <section id="internships" className="py-20 px-4 bg-secondary/10 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 font-mono text-primary">{"</Internships>"}</h2>
        </ScrollReveal>

        <div className="space-y-8">
          {internships.map((internship, i) => (
            <ScrollReveal key={i} delay={100} direction="up">
              <Link href={`/internships/${internship.slug}`}>
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-16 h-16 bg-background border border-border rounded-lg flex items-center justify-center p-2">
                        <img
                          src={internship.logo || "/placeholder.svg"}
                          alt={internship.company}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {internship.company}
                        </h3>
                        <p className="text-lg text-primary font-medium">{internship.role}</p>
                        <p className="text-sm text-muted-foreground mt-1">{internship.location}</p>
                      </div>
                    </div>
                    <span className="text-muted-foreground mt-2 md:mt-0 font-mono text-sm bg-primary/10 px-3 py-1 rounded-md">
                      {internship.period}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">{internship.description}</p>

                  <ul className="space-y-2 mb-6">
                    {internship.achievements.map((achievement, j) => (
                      <ScrollReveal key={j} delay={200 + j * 50}>
                        <li className="flex items-start gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300">
                          <span className="text-primary mt-1 text-xl">•</span>
                          <span>{achievement}</span>
                        </li>
                      </ScrollReveal>
                    ))}
                  </ul>

                  <div className="flex items-center gap-2 text-primary font-medium">
                    <span>Learn More</span>
                    <span>→</span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect } from "react"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const internshipsData = {
  paccar: {
    company: "PACCAR",
    role: "Structural Analysis Engineer",
    period: "May 2024 - Aug 2024",
    location: "Seattle, Washington",
    logo: "/internships/paccar-logo.png",
    images: ["/internships/paccar-analysis-1.png", "/internships/paccar-analysis-2.png"],
    description:
      "Performed structural analysis on truck structures and battery systems, utilizing advanced FEA and PhysicsAI to optimize designs for production.",
    fullDescription: `During my internship at PACCAR Technical Center, I worked as a Structural Analysis Engineer focusing on advanced finite element analysis for commercial truck structures and battery systems. My work directly contributed to the 2025 production frame designs through optimized structural engineering and innovative use of AI-driven simulation tools.

I utilized HyperWorks 2021.2 and the latest HyperMesh 2024 with PhysicsAI to perform comprehensive structural analysis, ensuring all designs maintained stress levels below 250MPa and modal displacements above 20Hz for A36 steel components. This work was critical for meeting safety standards and durability requirements for heavy-duty commercial vehicles.

One of my key achievements was increasing simulation throughput by 40% through the adoption of PhysicsAI technology in HyperMesh 2024. This dramatic improvement allowed the engineering team to iterate faster and explore more design variations within the same timeframe.

I also delivered detailed design reports that successfully reduced weld weight by 8% while maintaining compliance with SAE fatigue targets. These optimizations directly contributed to lighter, more fuel-efficient vehicles without compromising structural integrity or safety. The designs I helped optimize were adopted in PACCAR's 2025 production frames, demonstrating the real-world impact of this work.`,
    achievements: [
      "Performed FEA on truck structures and battery systems in HyperWorks 2021.2, maintaining <250MPa stress and >20Hz modal displacement on A36 steel",
      "Increased simulation throughput by 40% using PhysicsAI in HyperMesh 2024",
      "Delivered design reports that cut weld weight 8% while meeting SAE fatigue targets",
      "Enabled adoption in 2025 production frames through optimized structural designs",
    ],
    skills: ["HyperWorks", "FEA", "PhysicsAI", "HyperMesh", "Structural Analysis", "A36 Steel", "Design Optimization"],
  },
  rigetti: {
    company: "Rigetti Computing",
    role: "Hardware Design Engineer",
    period: "May 2025 - Aug 2025",
    location: "Berkeley, California",
    logo: "/internships/rigetti-logo.png",
    images: [],
    description:
      "Led quantum-hardware projects focusing on cryostat design and high-vacuum systems for quantum computing applications.",
    fullDescription: `At Rigetti Computing, I worked as a Hardware Design Engineer on cutting-edge quantum computing hardware, specifically focusing on cryogenic systems and high-vacuum environments essential for quantum processor operation.

I led two quantum-hardware projects from concept to production, demonstrating rapid prototyping and engineering execution. One project progressed from blank CAD to pilot build in just 2 weeks, ultimately advancing to final production testing. This accelerated timeline was achieved through careful planning, efficient CAD workflows, and close collaboration with manufacturing partners.

A major accomplishment was authoring the master CAD and Bill of Materials (BOM) for a 350 mK Bluefors cryostat. This involved completing over 23 SolidWorks and Design for Manufacturing (DFM) iterations to optimize the design for both performance and manufacturability. I also produced more than 30 3D TPU AMS prints for prototyping and validation, allowing rapid physical testing of design iterations.

I gained extensive experience with Product Data Management (PDM) systems, releasing GD&T (Geometric Dimensioning and Tolerancing) drawings as revision-controlled PDFs to ensure proper version control and manufacturing clarity. Additionally, I engineered the high-vacuum fore-line with a bend radius constraint of less than 40mm, and created comprehensive BOM, step-by-step documentation, and drawings that reduced installation time by 25%.`,
    achievements: [
      "Led 2 quantum-hardware projects; drove one from blank CAD to pilot build in 2 weeks, advancing it to final production test",
      "Authored the master CAD/BOM for a 350 mK Bluefors cryostat, completed 23+ SolidWorks/DFM iterations, 30+ 3D TPU AMS prints",
      "Released GD&T drawings as revision-controlled PDFs through PDM",
      "Engineered the high-vacuum fore-line (less than 40mm bend radius) and cut installation time by 25% using BOM, step-by-step documentation, and drawings",
    ],
    skills: [
      "SolidWorks",
      "Cryogenic Systems",
      "Quantum Hardware",
      "GD&T",
      "PDM",
      "3D Printing",
      "Vacuum Systems",
      "DFM",
    ],
  },
}

export default function InternshipDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = params
  const internship = internshipsData[slug as keyof typeof internshipsData]

  if (!internship) {
    notFound()
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto max-w-6xl px-4 py-4">
          <Link
            href="/#internships"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4 border-b border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-card border border-border rounded-lg flex items-center justify-center p-4">
                <img
                  src={internship.logo || "/placeholder.svg"}
                  alt={internship.company}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-3">{internship.company}</h1>
              <p className="text-xl text-primary font-medium mb-2">{internship.role}</p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="font-mono bg-primary/10 px-3 py-1 rounded-md">{internship.period}</span>
                <span>{internship.location}</span>
              </div>
              <p className="text-lg text-muted-foreground mt-6 leading-relaxed">{internship.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Images Section */}
      {internship.images.length > 0 && (
        <section className="py-12 px-4 bg-secondary/10">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-6">
              {internship.images.map((image, i) => (
                <div key={i} className="bg-card border border-border rounded-lg overflow-hidden group">
                  <div className="relative aspect-video">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${internship.company} work ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Full Description */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 font-mono text-primary">{"</Overview>"}</h2>
          <div className="prose prose-invert max-w-none">
            {internship.fullDescription.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-12 px-4 bg-secondary/10">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 font-mono text-primary">{"</Key Achievements>"}</h2>
          <ul className="space-y-4">
            {internship.achievements.map((achievement, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-primary text-2xl mt-1">•</span>
                <span className="text-muted-foreground leading-relaxed">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 font-mono text-primary">{"</Technologies & Skills>"}</h2>
          <div className="flex flex-wrap gap-3">
            {internship.skills.map((skill, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-primary/10 text-primary rounded-md border border-primary/30 hover:bg-primary hover:text-background transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

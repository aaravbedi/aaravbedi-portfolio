"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import Link from "next/link"

export function Communities() {
  const communities = [
    {
      name: "Formula Electric Berkeley",
      slug: "formula-electric-berkeley",
      role: "Aerodynamics Lead",
      period: "Aug 2022 - Jun 2025",
      description:
        "Led a 20-member team in designing and manufacturing a carbon fiber aerodynamic package, achieving 10% improvement in vehicle performance. Optimized over 14 aerodynamic models using advanced CAD, CFD (ANSYS Fluent), and FEA simulations, reducing development timelines by one month.",
      image: "/communities/formula-electric-logo.png",
    },
    {
      name: "SkyDeck",
      slug: "skydeck",
      role: "Member",
      description:
        "Part of UC Berkeley's premier startup accelerator, engaging with entrepreneurial ecosystem and learning about technology commercialization and venture creation.",
      image: "/communities/skydeck-logo.png",
    },
    {
      name: "NSF I-Corps",
      slug: "nsf-icorps",
      role: "Participant",
      description:
        "Participated in the National Science Foundation Innovation Corps program, learning customer discovery and technology commercialization methodologies for translating research into market impact.",
      image: "/communities/nsf-icorps-logo.png",
    },
    {
      name: "Courtyard Ventures",
      slug: "courtyard-ventures",
      role: "Fund III Undergraduate VC Intern",
      description:
        "Sourced and analyzed startups across fintech, deeptech, climate tech, and mobility sectors, conducting due diligence for venture capital funds across the nation.",
      image: "/communities/courtyard-ventures.png",
      objectFit: "contain" as const,
    },
    {
      name: "Berkeley Venture Capital",
      slug: "berkeley-venture-capital",
      role: "Vice President - External and Sourcing",
      description:
        "Led the External and Sourcing committee, maintaining a database of 150+ startups across DeepTech, EdTech, B2B SaaS, and GreenTech, while facilitating connections between founders and top-tier VC firms.",
      image: "/communities/berkeley-venture-capital.png",
    },
    {
      name: "Fung Institute",
      slug: "fung-institute",
      role: "Member",
      description:
        "Engaged with Berkeley's center for engineering leadership, focusing on the intersection of technology, business, and societal impact.",
      image: "/communities/fung-institute.png",
      objectFit: "contain" as const,
    },
  ]

  const handleClick = () => {
    sessionStorage.setItem("portfolioScrollPosition", window.scrollY.toString())
  }

  return (
    <section id="communities" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 font-mono text-primary">{"</Communities>"}</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communities.map((community, i) => (
            <ScrollReveal key={i} delay={i * 100} direction="scale">
              <Link href={`/communities/${community.slug}`} onClick={handleClick}>
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg overflow-hidden group hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                  <div
                    className={`relative h-48 overflow-hidden ${community.objectFit === "contain" ? "bg-white" : ""}`}
                  >
                    <img
                      src={community.image || "/placeholder.svg"}
                      alt={community.name}
                      className={`w-full h-full ${community.objectFit === "contain" ? "object-contain p-4" : "object-cover"} group-hover:scale-110 transition-transform duration-700`}
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: "linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)" }}
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {community.name}
                    </h3>
                    <p className="text-primary font-medium mb-3 bg-primary/10 inline-block px-3 py-1 rounded-md text-sm">
                      {community.role}
                    </p>
                    {community.period && (
                      <p className="text-xs text-muted-foreground mb-3 font-mono">{community.period}</p>
                    )}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{community.description}</p>

                    <div className="flex items-center gap-2 text-primary font-medium text-sm">
                      <span>Read More</span>
                      <span>→</span>
                    </div>
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

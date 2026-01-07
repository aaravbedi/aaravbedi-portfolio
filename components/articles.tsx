"use client"

import type React from "react"

import { ScrollReveal } from "@/components/scroll-reveal"
import { useState, useRef } from "react"

export function Articles() {
  const articles = [
    {
      title: 'The "Dirty Secret" of Humanoids',
      excerpt:
        "Exploring the significant power consumption challenges in humanoid robotics and what it means for the future of the industry.",
      date: "2025",
      readTime: "5 min read",
      image: "/articles/humanoid-power.png",
      link: "https://www.linkedin.com/pulse/dirty-secret-humanoids-aarav-bedi-h8oac/?trackingId=BAhFjcSyRXyVd%2FYvmqgVuw%3D%3D",
    },
    {
      title: "Multi‑Agent Robots, Single‑Agent World",
      excerpt:
        "An exploration of how multi-agent robotic systems navigate and collaborate in environments designed for single operators.",
      date: "2025",
      readTime: "6 min read",
      image: "/articles/multi-agent-robots.png",
      link: "https://www.linkedin.com/pulse/multiagent-robots-singleagent-world-aarav-bedi-swmkc/?trackingId=d%2BYwWMQqQxmTsCZOhYKVyQ%3D%3D",
    },
    {
      title: "The Data Bottleneck & Sim-to-Real",
      excerpt:
        "Understanding the challenges of transferring robotic learning from simulation environments to real-world applications.",
      date: "2025",
      readTime: "7 min read",
      image: "/articles/sim-to-real.png",
      link: "https://www.linkedin.com/pulse/data-bottleneck-sim-to-real-aarav-bedi-p5vwc/?trackingId=Jjh6gfdZfL0WJ%2BRulVEKZw%3D%3D",
    },
  ]

  return (
    <section id="articles" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10 px-6">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 font-mono text-primary">{"</Articles>"}</h2>
        </ScrollReveal>

        {articles.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">Articles coming soon...</p>
          </div>
        ) : (
          <div className="overflow-x-auto pb-6 -mx-6 px-6 scrollbar-thin">
            <div className="flex gap-8 min-w-max">
              {articles.map((article: any, i: number) => (
                <ScrollReveal key={i} delay={i * 100} direction="right">
                  <InteractiveCard href={article.link}>
                    <div className="w-[420px] bg-card/40 backdrop-blur-md border border-border/50 rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer hover:-translate-y-2 group">
                      {article.image && (
                        <div className="aspect-video relative overflow-hidden">
                          <img
                            src={article.image || "/placeholder.svg"}
                            alt={article.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{ background: "linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent 60%)" }}
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-xs text-muted-foreground font-mono bg-primary/10 px-3 py-1.5 rounded-lg border border-primary/20">
                            {article.date}
                          </span>
                          <span className="text-xs text-muted-foreground font-mono bg-secondary/20 px-3 py-1.5 rounded-lg border border-secondary/30">
                            {article.readTime}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-snug">
                          {article.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-5 text-sm">{article.excerpt}</p>
                        <div className="flex items-center gap-2 text-primary font-semibold">
                          <span>View Article</span>
                          <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                        </div>
                      </div>
                    </div>
                  </InteractiveCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

function InteractiveCard({ children, href }: { children: React.ReactNode; href: string }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLAnchorElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const tiltX = (y - centerY) / 20
    const tiltY = (centerX - x) / 20

    setTilt({ x: tiltX, y: tiltY })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <a
      ref={cardRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.2s ease-out",
      }}
      className="block"
    >
      {children}
    </a>
  )
}

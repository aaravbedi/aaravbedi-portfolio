"use client"

import { Mail, MapPin, Phone } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mono text-primary">{"</Contact>"}</h2>
          <p className="text-lg text-muted-foreground mb-16 max-w-2xl">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat about robotics and
            engineering!
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          <ScrollReveal delay={100}>
            <div className="group p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                  <Mail className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold">Email</h3>
                <a
                  href="mailto:aaravbedi@berkeley.edu"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 break-all"
                >
                  aaravbedi@berkeley.edu
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="group p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                  <Phone className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold">Phone</h3>
                <a
                  href="tel:+19254091772"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  +1 (925) 409-1772
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="group p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                  <MapPin className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold">Location</h3>
                <p className="text-muted-foreground">Berkeley, California</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

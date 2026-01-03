"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

interface HeroProps {
  scrollY: number
}

export function Hero({ scrollY }: HeroProps) {
  const greetings = ["Namaste", "Hello", "Hola", "Bonjour", "Ciao", "Hallo", "Konnichiwa", "Anyoung", "Ni Hao", "Ola"]
  const [greetingIndex, setGreetingIndex] = useState(0)

  useEffect(() => {
    const greetingInterval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length)
    }, 2000)

    return () => clearInterval(greetingInterval)
  }, [])

  const imageScale = 1 - Math.min(scrollY / 1200, 1) * 0.05
  const imageRotate = Math.min(scrollY / 1200, 1) * 3
  const textOpacity = Math.max(0, 1 - scrollY / 600)
  const parallaxY = scrollY * 0.3

  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden pt-20 px-4"
      style={{
        transform: `translateY(${parallaxY}px)`,
      }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-secondary/10"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
          opacity: 1 - scrollY / 1000,
        }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/20"
            style={{
              width: Math.random() * 6 + 2 + "px",
              height: Math.random() * 6 + 2 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animation: `float ${Math.random() * 4 + 3}s ease-in-out infinite`,
              animationDelay: Math.random() * 2 + "s",
              transform: `translateY(${scrollY * (Math.random() * 0.1 + 0.05)}px)`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <div
          className="relative w-56 h-56 md:w-72 md:h-72 mb-6"
          style={{
            transform: `scale(${imageScale}) rotate(${imageRotate}deg) translateY(${scrollY * 0.1}px)`,
          }}
        >
          <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-primary/40 shadow-2xl">
            <img
              src="/profile-photo.png"
              alt="Profile"
              className="w-full h-full object-cover"
              style={{
                imageRendering: "high-quality",
                backfaceVisibility: "hidden",
                transform: "translateZ(0) scale(1.15)",
                WebkitFontSmoothing: "antialiased",
                objectPosition: "center 40%",
                filter: "brightness(1.05) contrast(1.05)",
              }}
            />
          </div>

          <div className="absolute inset-0 rounded-full border-2 border-primary/30 shadow-lg shadow-primary/20" />
        </div>

        <div
          className="text-center max-w-3xl"
          style={{
            opacity: textOpacity,
          }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-mono">
            <span className="inline-block min-w-[200px] text-left bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent transition-all duration-500">
              {greetings[greetingIndex]}
            </span>
            {", I'm Aarav Bedi"}
          </h1>

          <p className="text-base md:text-lg text-muted-foreground mb-3 leading-relaxed">
            Mechanical Engineer with experience in integrated AI and Robotics, Automotive manufacturing, Clean Tech and
            Quantum computing. I love to work on innovative projects and create impactful solutions.
          </p>

          <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
            Passionate about Robotics and love positive interactions about trending industry changes.
          </p>

          <a
            href="mailto:your.email@example.com"
            className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-secondary text-background rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-medium hover:scale-105"
          >
            Let's Talk!
          </a>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        style={{ opacity: Math.max(0, 1 - scrollY / 400) }}
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </div>
    </section>
  )
}

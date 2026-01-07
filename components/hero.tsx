"use client"

import { useEffect, useState } from "react"
import { ChevronDown, Github, Linkedin } from "lucide-react"

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
  const textOpacity = Math.max(0, 1 - scrollY / 1000) // Increased fade threshold from 800 to 1000 so Let's Connect stays visible longer
  const parallaxY = scrollY * 0.3

  return (
    <section
      id="home"
      className="relative z-20 min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-40 px-6"
      style={{
        transform: `translateY(${parallaxY}px)`,
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(59, 130, 246, 0.03), transparent 50%, rgba(168, 85, 247, 0.03))",
          transform: `translateY(${scrollY * 0.2}px)`,
          opacity: 1 - scrollY / 1000,
        }}
      />

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/10"
            style={{
              width: Math.random() * 4 + 2 + "px",
              height: Math.random() * 4 + 2 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animation: `float ${Math.random() * 5 + 4}s ease-in-out infinite`,
              animationDelay: Math.random() * 2 + "s",
              transform: `translateY(${scrollY * (Math.random() * 0.1 + 0.05)}px)`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Left side - Profile Image */}
          <div
            className="flex-shrink-0"
            style={{
              transform: `scale(${imageScale}) rotate(${imageRotate}deg) translateY(${scrollY * 0.1}px)`,
            }}
          >
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80">
              <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/10">
                <img
                  src="/profile-photo.png"
                  alt="Profile"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  style={{
                    imageRendering: "high-quality",
                    backfaceVisibility: "hidden",
                    transform: "translateZ(0) scale(1.5)", // Adjusted to center face properly in the circular frame
                    WebkitFontSmoothing: "antialiased",
                    objectPosition: "center center",
                    filter: "brightness(1.05) contrast(1.05)",
                  }}
                />
              </div>

              <div className="absolute inset-0 rounded-full border border-primary/20" />
            </div>
          </div>

          {/* Right side - Text Content */}
          <div
            className="flex-1 text-center lg:text-left max-w-2xl space-y-6"
            style={{
              opacity: textOpacity,
            }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-mono leading-tight">
              <span className="block lg:whitespace-nowrap">
                <span className="inline-block min-w-[120px] sm:min-w-[200px] text-center lg:text-left text-primary transition-all duration-500">
                  {greetings[greetingIndex]}
                </span>
                <span>{", I'm Aarav Bedi"}</span>
              </span>
            </h1>

            <div className="space-y-3 md:space-y-4">
              <p className="text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed font-medium">
                Mechanical Engineer with experience in integrated AI and Robotics, Automotive manufacturing, Clean Tech
                and Quantum computing.
              </p>

              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                I love to work on innovative projects and create impactful solutions, passionate about robotics and
                industry trends.
              </p>
            </div>

            {/* Connect Section */}
            <div className="relative z-50 pt-4">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-foreground">Let's Connect</h3>
              <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 flex-wrap">
                <a
                  href="https://www.linkedin.com/in/aaravbedi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-[#0A66C2] text-white rounded-xl hover:shadow-xl hover:shadow-[#0A66C2]/30 transition-all duration-300 font-medium hover:-translate-y-1 text-sm sm:text-base"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/aaravbedi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-[#333333] text-white rounded-xl hover:shadow-xl hover:shadow-[#333333]/30 transition-all duration-300 font-medium hover:-translate-y-1 text-sm sm:text-base"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://medium.com/@aaravbedi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-[#000000] text-white rounded-xl hover:shadow-xl hover:shadow-[#000000]/30 transition-all duration-300 font-medium hover:-translate-y-1 text-sm sm:text-base"
                  aria-label="Medium"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.38-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"></path>
                  </svg>
                  <span>Medium</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
        style={{ opacity: Math.max(0, 1 - scrollY / 400) }}
      >
        <ChevronDown className="w-8 h-8 text-primary/60" />
      </div>
    </section>
  )
}

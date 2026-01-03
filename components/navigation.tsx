"use client"

import { useState, useEffect } from "react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = ["home", "about", "skills", "articles", "internships", "projects", "communities"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "</Home>", href: "#home", id: "home" },
    { name: "</About>", href: "#about", id: "about" },
    { name: "</Skills>", href: "#skills", id: "skills" },
    { name: "</Articles>", href: "#articles", id: "articles" },
    { name: "</Internships>", href: "#internships", id: "internships" },
    { name: "</Projects>", href: "#projects", id: "projects" },
    { name: "</Communities>", href: "#communities", id: "communities" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-primary/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center overflow-hidden border-2 border-primary/50 group-hover:border-primary transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/50">
              <img src="/profile-photo.png" alt="Avatar" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`text-muted-foreground hover:text-primary transition-all duration-300 font-mono relative group ${
                    activeSection === link.id ? "text-primary" : ""
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ${
                      activeSection === link.id ? "w-full" : ""
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-foreground transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span className={`w-full h-0.5 bg-foreground transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <span
                className={`w-full h-0.5 bg-foreground transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <>
            <div className="fixed inset-0 bg-background/80 backdrop-blur-sm mt-16" onClick={() => setIsOpen(false)} />
            <ul className="md:hidden mt-4 space-y-4 relative z-50 bg-card/95 backdrop-blur-md p-4 rounded-lg border border-primary/20">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`block text-muted-foreground hover:text-primary transition-colors duration-200 font-mono py-2 px-4 rounded-lg hover:bg-primary/10 ${
                      activeSection === link.id ? "text-primary bg-primary/10" : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </nav>
  )
}

"use client"

import { ScrollReveal } from "@/components/scroll-reveal"

export function Skills() {
  const cadSkills = [
    { name: "SolidWorks", category: "CAD" },
    { name: "OnShape", category: "CAD" },
    { name: "Creo", category: "CAD" },
    { name: "Fusion 360", category: "CAD" },
    { name: "CATIA", category: "CAD" },
  ]

  const analysisSkills = [
    { name: "FEA (SolidWorks)", category: "Analysis" },
    { name: "HyperMesh", category: "Analysis" },
    { name: "ANSYS Fluent", category: "Analysis" },
    { name: "CFD", category: "Analysis" },
  ]

  const softwareSkills = [
    { name: "Python", category: "Software" },
    { name: "MATLAB", category: "Software" },
    { name: "Simulink", category: "Software" },
    { name: "ROS2", category: "Software" },
    { name: "Gazebo", category: "Software" },
    { name: "Isaac Sim", category: "Software" },
    { name: "NVIDIA Jetson", category: "Software" },
  ]

  const manufacturingSkills = [
    { name: "TIG Welding", category: "Manufacturing" },
    { name: "Milling", category: "Manufacturing" },
    { name: "3D Printing", category: "Manufacturing" },
    { name: "3D Scanning", category: "Manufacturing" },
    { name: "Layups", category: "Manufacturing" },
    { name: "Shopbot", category: "Manufacturing" },
    { name: "WaterJet", category: "Manufacturing" },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 font-mono text-primary">{"</Skills>"}</h2>
        </ScrollReveal>

        <div className="space-y-12">
          <div>
            <ScrollReveal delay={100}>
              <h3 className="text-2xl font-semibold mb-6 text-primary">CAD & Design</h3>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {cadSkills.map((skill, i) => (
                <ScrollReveal key={skill.name} delay={i * 50} direction="scale">
                  <div className="flex items-center justify-center p-4 bg-card/50 backdrop-blur-sm rounded-lg hover:bg-primary/10 hover:border-primary border border-transparent transition-all duration-300 group cursor-pointer hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
                    <span className="text-sm text-muted-foreground group-hover:text-primary font-medium transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div>
            <ScrollReveal delay={100}>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Analysis & Simulation</h3>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {analysisSkills.map((skill, i) => (
                <ScrollReveal key={skill.name} delay={i * 50} direction="scale">
                  <div className="flex items-center justify-center p-4 bg-card/50 backdrop-blur-sm rounded-lg hover:bg-primary/10 hover:border-primary border border-transparent transition-all duration-300 group cursor-pointer hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
                    <span className="text-sm text-muted-foreground group-hover:text-primary font-medium transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div>
            <ScrollReveal delay={100}>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Software & Programming</h3>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {softwareSkills.map((skill, i) => (
                <ScrollReveal key={skill.name} delay={i * 50} direction="scale">
                  <div className="flex items-center justify-center p-4 bg-card/50 backdrop-blur-sm rounded-lg hover:bg-primary/10 hover:border-primary border border-transparent transition-all duration-300 group cursor-pointer hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
                    <span className="text-sm text-muted-foreground group-hover:text-primary font-medium transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div>
            <ScrollReveal delay={100}>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Manufacturing</h3>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {manufacturingSkills.map((skill, i) => (
                <ScrollReveal key={skill.name} delay={i * 50} direction="scale">
                  <div className="flex items-center justify-center p-4 bg-card/50 backdrop-blur-sm rounded-lg hover:bg-primary/10 hover:border-primary border border-transparent transition-all duration-300 group cursor-pointer hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
                    <span className="text-sm text-muted-foreground group-hover:text-primary font-medium transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

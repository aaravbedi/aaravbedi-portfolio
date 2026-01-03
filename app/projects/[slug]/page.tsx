import { notFound } from "next/navigation"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import Link from "next/link"

const projectsData = {
  "ball-balancing-bot": {
    title: "Ball Balancing Bot",
    description:
      "A 3-DOF ball-balancing platform with advanced PID control for precise tilt stabilization and rapid settling time.",
    image: "/ball-balancing-bot.jpg",
    fullDescription: `The Ball Balancing Bot project demonstrates advanced control systems and mechatronics integration. This 3-DOF (degrees of freedom) ball-balancing platform uses nonlinear kinematics and dynamics calculations to maintain precise balance of a ball on a movable platform.

The control system uses a discrete PID controller carefully tuned with parameters Kp=12, Ki=1.5, and Kd=0.8 to achieve exceptional performance. The system maintains a steady-state tilt error of less than 2 degrees with a settling time under 0.8 seconds, demonstrating responsive and accurate control.

The control loop was implemented in Python and runs at 100 Hz, providing real-time feedback and adjustment. The mechanical design was created with tolerance-constrained CAD optimized for 3D printing, ensuring precise part dimensions critical for the control system's performance.

This project combines theoretical control systems knowledge with practical implementation, including sensor integration, real-time computation, and precision mechanical design. It showcases the complete engineering process from mathematical modeling through physical implementation.`,
    tech: ["Python", "PID Control", "SolidWorks", "3D Printing", "Kinematics", "Dynamics", "Real-time Systems"],
    github: "#",
    demo: "https://example.com/ball-bot",
    highlights: [
      "Sub-2° steady-state tilt error with advanced PID tuning",
      "Less than 0.8s settling time for rapid stabilization",
      "100 Hz control loop for real-time performance",
      "Calculated nonlinear 2D/3D kinematics and dynamics",
      "Tolerance-constrained CAD design for 3D printing",
    ],
  },
  "prosthetic-hand": {
    title: "Prosthetic Hand",
    description: "A functional prosthetic glove with real-time haptic feedback and high grip force capabilities.",
    image: "/prosthetic-hand.jpg",
    fullDescription: `The Prosthetic Hand project represents a comprehensive approach to assistive technology, combining mechanical design, control systems, and haptic feedback to create a functional prosthetic device.

The device was designed using SolidWorks with extensive FEA (Finite Element Analysis) to optimize the structural components. It integrates 4 MG90S servo motors with PTFE (Polytetrafluoroethylene) tendon routing system, mimicking the natural tendon structure of human hands for smooth and reliable finger movement.

A closed-loop control system using an ESP32 microcontroller and FSR (Force Sensing Resistor) sensors provides real-time force feedback. The system achieves an impressive 18N grip force, representing a 310% improvement over baseline designs. The actuation time is just 0.5 seconds with a torque output of 2.2 kg·cm, making it both powerful and responsive.

One of the key innovations is the integration of a DRV2605 haptic driver, providing real-time haptic feedback to the user. This tactile feedback significantly enhances the user's ability to control grip strength and handle delicate objects. The project demonstrates the successful integration of mechanical engineering, electronics, and user-centered design in creating practical assistive technology.`,
    tech: ["SolidWorks", "FEA", "ESP32", "Mechatronics", "Haptic Feedback", "Servo Control", "PTFE"],
    github: "#",
    demo: "#",
    highlights: [
      "18N grip force (310% improvement over baseline)",
      "0.5s actuation time for responsive control",
      "2.2 kg·cm torque output",
      "Real-time haptic feedback via DRV2605",
      "Closed-loop ESP32-FSR control system",
      "4 MG90S servos with PTFE tendon routing",
    ],
  },
  "vacuum-bagging-system": {
    title: "Vacuum Bagging System",
    description: "A specialized system for composite layups with optimal resin distribution and minimal void content.",
    image: "/vacuum-bagging-system.jpg",
    fullDescription: `The Vacuum Bagging System was designed and manufactured for advanced composite manufacturing processes. This system enables the creation of high-quality carbon fiber and composite parts through controlled vacuum pressure and resin infusion.

The design focuses on achieving optimal resin distribution throughout the composite layup while minimizing void content, which is critical for the structural integrity and performance of composite parts. Advanced manufacturing techniques were employed to ensure consistent results across multiple production runs.

The system includes custom-designed vacuum ports, resin distribution channels, and pressure monitoring capabilities. Process parameters were carefully optimized to work with various composite materials and part geometries. This project demonstrates expertise in composite manufacturing, process engineering, and quality control methodologies essential for aerospace and automotive applications.`,
    tech: ["Composite Manufacturing", "CAD", "Process Design", "Carbon Fiber", "Vacuum Systems", "Quality Control"],
    github: "#",
    demo: "#",
    highlights: [
      "Optimal resin distribution system design",
      "Minimal void content in finished parts",
      "Advanced composite layup techniques",
      "Process parameter optimization",
      "Compatible with multiple material types",
    ],
  },
  "mazda-miata-build": {
    title: "Mazda Miata Build",
    description:
      "Complete restoration and performance build showcasing practical mechanical engineering and fabrication skills.",
    image: "/miata/interior.png",
    fullDescription: `The Mazda Miata Build project represents a comprehensive restoration and performance enhancement of a classic sports car. This hands-on project demonstrates the practical application of mechanical engineering principles, manufacturing processes, and automotive systems knowledge.

The build involved complete disassembly, assessment, and rebuilding of major vehicle systems. Custom fabrication work was performed using TIG (Tungsten Inert Gas) welding for aluminum and steel components, requiring precision and attention to detail. Mechanical modifications were designed and implemented to improve performance while maintaining reliability and safety.

Key aspects of the project included suspension geometry optimization, drivetrain upgrades, and custom exhaust fabrication. Each modification was carefully planned using engineering calculations and CAD modeling before implementation. The project showcases the ability to work with real-world constraints, integrate multiple systems, and apply theoretical knowledge to practical automotive engineering challenges.

This build demonstrates proficiency in metalworking, welding, mechanical assembly, and system integration - skills directly applicable to manufacturing and product development in various industries.`,
    tech: ["TIG Welding", "Mechanical Design", "Fabrication", "Automotive Engineering", "CAD", "System Integration"],
    github: "#",
    demo: "#",
    highlights: [
      "Complete vehicle restoration from ground up",
      "Custom TIG welding and metal fabrication",
      "Performance-oriented mechanical modifications",
      "Suspension geometry optimization",
      "Integration of multiple automotive systems",
    ],
    gallery: [
      { src: "/miata/day-restoration.png", caption: "Stripped down for restoration at sunset" },
      { src: "/miata/garage.png", caption: "In-progress build in garage" },
      { src: "/miata/night-work.png", caption: "Night engine bay work session" },
    ],
  },
  "cpap-machine": {
    title: "CPAP Machine Design",
    description: "Medical device design focused on user comfort and manufacturing efficiency.",
    image: "/cpap-machine.jpg",
    fullDescription: `The CPAP (Continuous Positive Airway Pressure) Machine Design project focuses on creating a medical device that balances user comfort, clinical effectiveness, and manufacturing efficiency. This project applies Design for Manufacturing (DFM) principles throughout the development process.

Extensive CAD iterations were conducted to optimize the design for both function and production. Key considerations included airflow dynamics, noise reduction, ergonomics, and material selection appropriate for medical applications. The design process involved collaboration with manufacturing partners to ensure the device could be produced efficiently while meeting medical device standards and regulations.

User-centered design principles were applied throughout development, with particular attention to comfort features, ease of use, and maintenance. The device's form factor was optimized to be compact and user-friendly while housing all necessary components including the motor, filters, and control electronics.

This project demonstrates understanding of medical device development, regulatory considerations, DFM principles, and the ability to balance multiple competing requirements in product design.`,
    tech: ["Medical Device Design", "CAD", "DFM", "Airflow Analysis", "Ergonomics", "Regulatory Compliance"],
    github: "#",
    demo: "#",
    highlights: [
      "User-focused design for improved comfort",
      "Extensive DFM optimization for production",
      "Multiple CAD iterations for refinement",
      "Compliance with medical device standards",
      "Integrated airflow and noise management",
    ],
  },
  "smart-helmet": {
    title: "Smart Helmet",
    description:
      "Intelligent safety helmet with integrated sensors and real-time monitoring for construction and industrial safety.",
    image: "/smart-helmet.jpg",
    fullDescription: `The Smart Helmet project integrates IoT (Internet of Things) technology with personal protective equipment to enhance worker safety in construction and industrial environments. This intelligent helmet features multiple integrated sensors and connectivity options for real-time safety monitoring.

Key features include impact detection systems that can identify and log safety incidents, environmental sensors that monitor temperature, air quality, and noise levels, and connectivity modules that enable real-time data transmission to safety management systems. The integration of these technologies required careful consideration of power management, sensor placement, and data processing.

The helmet's design maintains compliance with industrial safety standards while incorporating the additional electronic components. Careful attention was paid to weight distribution, comfort, and durability to ensure the device remains practical for extended wear in harsh working conditions.

The data collected by the helmet can be used for immediate safety alerts, long-term safety analytics, and predictive maintenance of industrial sites. This project demonstrates expertise in IoT systems, sensor integration, product design for harsh environments, and creating practical solutions that enhance workplace safety.`,
    tech: [
      "IoT",
      "Sensor Integration",
      "Product Design",
      "Impact Detection",
      "Wireless Connectivity",
      "Safety Systems",
      "Embedded Systems",
    ],
    github: "#",
    demo: "#",
    highlights: [
      "Real-time impact detection and logging",
      "Environmental monitoring (temperature, air quality, noise)",
      "Wireless connectivity for data transmission",
      "Compliance with industrial safety standards",
      "Power management for extended operation",
      "Durable design for harsh work environments",
    ],
  },
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projectsData[slug as keyof typeof projectsData]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto max-w-6xl px-4 py-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">{project.description}</p>
          <div className="flex gap-4 mb-8">
            {project.github && (
              <a
                href={project.github}
                className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-md hover:border-primary/50 transition-all duration-300"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-background rounded-md hover:bg-primary/90 transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-8 px-4 bg-secondary/10">
        <div className="container mx-auto max-w-6xl">
          <div className="relative aspect-video bg-card border border-border rounded-lg overflow-hidden">
            <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold mb-8 font-mono text-primary">{"<Project Gallery>"}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((image, i) => (
                <div key={i} className="group relative bg-card border border-border rounded-lg overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">{image.caption}</p>
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
          <h2 className="text-2xl font-bold mb-6 font-mono text-primary">{"<About This Project>"}</h2>
          <div className="prose prose-invert max-w-none">
            {project.fullDescription.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-12 px-4 bg-secondary/10">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 font-mono text-primary">{"<Key Highlights>"}</h2>
          <ul className="space-y-4">
            {project.highlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-primary text-2xl mt-1">•</span>
                <span className="text-muted-foreground leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 font-mono text-primary">{"<Technologies Used>"}</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-primary/10 text-primary rounded-md border border-primary/30 hover:bg-primary hover:text-background transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

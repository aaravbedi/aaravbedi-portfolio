"use client"

import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useEffect } from "react"

const communitiesData = {
  "formula-electric-berkeley": {
    name: "Formula Electric Berkeley",
    role: "Aerodynamics Lead",
    period: "Aug 2022 - Jun 2025",
    image: "/communities/formula-electric-logo.png",
    gallery: [
      {
        src: "/communities/formula-electric-car.png",
        alt: "Formula Electric Berkeley race car on track",
      },
      {
        src: "/communities/formula-electric-cfd.png",
        alt: "CFD Analysis showing aerodynamic pressure distribution",
      },
    ],
    description:
      "Led aerodynamics development for Berkeley's Formula SAE Electric vehicle, achieving significant performance improvements.",
    fullDescription: `As Aerodynamics Lead for Formula Electric Berkeley, I led a 20-member team in the complete design, analysis, and manufacturing of a carbon fiber aerodynamic package for our Formula SAE Electric vehicle. This role required balancing team leadership, technical engineering, and hands-on manufacturing.

The aerodynamic package development involved extensive computational analysis and iterative design. I optimized over 14 different aerodynamic models using advanced CAD software, CFD (Computational Fluid Dynamics) simulations in ANSYS Fluent, and FEA (Finite Element Analysis) to validate structural integrity. This comprehensive approach ensured our designs would perform as expected while meeting the stringent weight and safety requirements of Formula SAE competition.

Through systematic optimization and testing, the final aerodynamic package achieved a 10% improvement in overall vehicle performance metrics, including increased downforce and reduced drag. Perhaps equally impressive was the reduction in development timelines by one month compared to previous years, achieved through better simulation workflows and team coordination.

The project required coordinating with other subsystem teams including chassis, powertrain, and suspension to ensure proper integration. I also managed the manufacturing process for carbon fiber components, including layup schedules, quality control, and final assembly. This experience provided invaluable lessons in technical leadership, project management, and the practical challenges of bringing advanced engineering designs from computer to reality.`,
    achievements: [
      "Led 20-member aerodynamics team through complete design and manufacturing cycle",
      "Achieved 10% improvement in vehicle performance metrics",
      "Optimized 14+ aerodynamic models using CAD, CFD (ANSYS Fluent), and FEA",
      "Reduced development timeline by one month through improved workflows",
      "Manufactured carbon fiber aerodynamic package",
      "Coordinated integration with chassis, powertrain, and suspension teams",
    ],
    skills: [
      "Team Leadership",
      "CFD (ANSYS Fluent)",
      "FEA",
      "CAD",
      "Carbon Fiber Manufacturing",
      "Aerodynamics",
      "Project Management",
    ],
  },
  skydeck: {
    name: "SkyDeck",
    role: "Member - Batch 18",
    image: "/skydeck-berkeley.jpg",
    description:
      "Selected in Batch 18 Incubator. UC Berkeley's premier startup accelerator for entrepreneurial learning and technology commercialization.",
    documents: [
      {
        title: "Pitch Deck - Litrix",
        url: "https://docs.google.com/presentation/d/1wjtY6hmsvJk83DgsNc-WgsPXIdetFjjOm3gSBn0Z3Z0/edit?usp=sharing",
        type: "presentation",
      },
    ],
    fullDescription: `Selected in Batch 18 Incubator. SkyDeck is UC Berkeley's premier startup accelerator and one of the top university-affiliated accelerators in the world. As a member, I engaged deeply with the entrepreneurial ecosystem, learning the processes and strategies involved in technology commercialization and venture creation.

The program provided exposure to successful entrepreneurs, venture capitalists, and industry leaders through regular talks, workshops, and mentorship sessions. I learned about the complete startup journey from ideation and customer discovery through product development, go-to-market strategy, and fundraising.

Participation in SkyDeck enhanced my understanding of how to translate technical innovations into viable business ventures. This included learning frameworks for market analysis, business model development, and pitch development. The experience complemented my technical engineering skills with crucial business and entrepreneurship capabilities.

Networking with fellow founders and the broader Berkeley entrepreneurship community provided valuable perspectives on different approaches to innovation and the diverse paths technical professionals can take in their careers.`,
    achievements: [
      "Selected for Batch 18 of UC Berkeley's premier startup accelerator",
      "Learned technology commercialization and venture creation processes",
      "Networked with successful entrepreneurs and VCs",
      "Developed understanding of market analysis and business models",
      "Participated in workshops on fundraising and go-to-market strategy",
    ],
    skills: [
      "Entrepreneurship",
      "Technology Commercialization",
      "Business Development",
      "Networking",
      "Pitch Development",
      "Market Analysis",
    ],
  },
  "nsf-icorps": {
    name: "NSF I-Corps",
    role: "Participant",
    image: "/nsf-icorps.jpg",
    description:
      "National Science Foundation program for customer discovery and technology commercialization methodologies.",
    fullDescription: `The NSF Innovation Corps (I-Corps) program is a prestigious National Science Foundation initiative designed to help researchers and engineers translate their technical innovations into market-ready solutions. The program focuses on evidence-based entrepreneurship through intensive customer discovery.

During the program, I learned and applied the Lean Startup methodology and customer discovery process. This involved conducting over 100 customer interviews to understand market needs, validate problem-solution fit, and refine our value proposition. The process taught me how to test assumptions about technology and markets systematically rather than relying on intuition.

The I-Corps curriculum emphasizes getting "out of the building" to talk directly with potential customers, partners, and stakeholders. This hands-on approach to market research provided invaluable insights into how to position technical innovations for maximum impact and how to identify the most promising commercial applications.

I developed skills in customer segmentation, value proposition design, and business model iteration. The program's structured approach to de-risking technology commercialization has proven valuable in evaluating technical projects not just for their engineering merit but also for their potential market impact.`,
    achievements: [
      "Completed NSF Innovation Corps program training",
      "Conducted 100+ customer discovery interviews",
      "Applied Lean Startup methodology to technology validation",
      "Learned evidence-based entrepreneurship frameworks",
      "Developed customer segmentation and value proposition skills",
      "Gained insights into technology-market fit",
    ],
    skills: [
      "Customer Discovery",
      "Lean Startup",
      "Market Research",
      "Value Proposition Design",
      "Business Model Development",
      "Interview Techniques",
    ],
    documents: [
      {
        title: "Pitch Deck - Litrix",
        url: "https://docs.google.com/presentation/d/1wjtY6hmsvJk83DgsNc-WgsPXIdetFjjOm3gSBn0Z3Z0/edit?usp=sharing",
      },
    ],
  },
  "courtyard-ventures": {
    name: "Courtyard Ventures",
    role: "Fund III Undergraduate VC Intern",
    image: "/courtyard-ventures.jpg",
    description:
      "Sourced and analyzed startups across fintech, deeptech, climate tech, and mobility sectors for venture capital funds.",
    fullDescription: `As a Fund III Undergraduate VC Intern at Courtyard Ventures, I gained hands-on experience in the venture capital industry, focusing on early-stage startup evaluation and investment analysis.

My primary responsibilities included sourcing promising startups and conducting comprehensive due diligence on both startups and VC funds across the nation. I proactively identified and evaluated opportunities in high-growth sectors including fintech, deeptech, climate tech, and mobility and transportation, with a particular focus on ventures founded at UC Berkeley.

Through this role, I developed expertise in assessing market opportunities, analyzing business models, evaluating founding teams, and understanding competitive landscapes. I worked closely with the investment team to research emerging technologies, track industry trends, and identify potential investment opportunities that aligned with the fund's thesis.

This experience provided invaluable insight into the venture capital decision-making process, from initial startup discovery through detailed financial and technical analysis. I learned to evaluate companies through multiple lenses—market potential, technical innovation, team capabilities, and scalability—while understanding how these factors influence investment decisions at different stages of company growth.`,
    achievements: [
      "Engaged with Berkeley's VC and entrepreneurship community",
      "Learned venture capital investment evaluation criteria",
      "Understood startup financing and deal structures",
      "Networked with investors and entrepreneurs",
      "Developed commercial viability assessment skills",
    ],
    skills: [
      "Venture Capital",
      "Startup Financing",
      "Investment Analysis",
      "Commercial Evaluation",
      "Networking",
      "Strategic Planning",
    ],
  },
  "berkeley-venture-capital": {
    name: "Berkeley Venture Capital",
    role: "Vice President - External and Sourcing",
    image: "/berkeley-venture-capital.jpg",
    description:
      "Led the External and Sourcing committee for Berkeley's student-run VC organization, managing startup databases and facilitating funding connections.",
    fullDescription: `As Vice President of External and Sourcing at Berkeley Venture Capital, I led strategic initiatives to expand the organization's startup network and strengthen connections within the venture capital ecosystem. My role focused on building and maintaining relationships with both emerging startups and established investors across the Bay Area and beyond.

I spearheaded the development and maintenance of the Berkeley Startup Database, a comprehensive repository of 150+ startups spanning diverse industry verticals including DeepTech, EdTech, B2B SaaS, and GreenTech. This database served as a critical resource for investment analysis, market research, and ecosystem mapping, requiring continuous curation and validation to ensure data accuracy and relevance.

A key highlight of my tenure was co-hosting the BVC Startup Pitch Competition, where I served on the decision-making committee that evaluated numerous innovative ventures and ultimately awarded a $20,000 cash prize to Sales Patriot, a promising B2B sales optimization platform. This experience provided deep insights into investment criteria, pitch evaluation, and the dynamics of early-stage funding decisions.

Leading the External and Sourcing committee, I orchestrated multiple touchpoints with the startup ecosystem, including fireside chats with prominent venture capitalists, networking sessions with founders, and strategic meetings with accelerator programs. I actively engaged with startup founders to understand their funding needs, growth challenges, and market positioning, facilitating introductions to leading VC firms including Pear VC, Berkeley SkyDeck, Nexus Ventures, and Andreessen Horowitz (a16z).

Through my initiative to organize virtual networking sessions and structured founder outreach programs, I contributed to a 20% increase in successful funding rounds among our portfolio companies, directly strengthening the Berkeley startup ecosystem and enhancing investor relations. My work in maintaining real-time updates across our startup database enabled BVC to stay ahead of market trends and provide timely insights to both internal teams and external partners.`,
    achievements: [
      "Led External and Sourcing committee as Vice President",
      "Built and maintained database of 150+ startups across DeepTech, EdTech, B2B SaaS, and GreenTech",
      "Co-hosted BVC Startup Pitch Competition with $20,000 prize pool",
      "Served on decision committee that awarded funding to Sales Patriot",
      "Organized fireside chats with VCs and networking sessions with founders",
      "Facilitated introductions to top-tier VC firms (Pear VC, SkyDeck, Nexus, a16z)",
      "Increased successful funding rounds by 20% through structured networking initiatives",
      "Maintained real-time startup database for market insights and investor outreach",
      "Led committee-wide initiatives to expand Berkeley's startup ecosystem",
    ],
    skills: [
      "Venture Capital Operations",
      "Startup Sourcing & Evaluation",
      "Database Management",
      "Investor Relations",
      "Ecosystem Building",
      "Due Diligence",
      "Pitch Competition Judging",
      "Founder Engagement",
      "Strategic Networking",
      "Market Research",
    ],
  },
  "fung-institute": {
    name: "Fung Institute",
    role: "Member",
    image: "/fung-institute.jpg",
    description: "Berkeley's center for engineering leadership focused on technology, business, and societal impact.",
    fullDescription: `The Fung Institute for Engineering Leadership at UC Berkeley focuses on developing engineering leaders who can drive innovation at the intersection of technology, business, and societal impact. As a member, I engaged with programs and resources designed to develop leadership skills alongside technical expertise.

The institute's programs emphasize systems thinking, strategic decision-making, and the ability to lead technical teams and projects effectively. I participated in workshops and seminars covering topics such as innovation strategy, organizational leadership, product development processes, and engineering ethics.

One key aspect of the Fung Institute's approach is helping engineers understand the broader context in which they work - how technical decisions impact business outcomes, social systems, and environmental sustainability. This holistic perspective is increasingly important as technology plays a more central role in addressing global challenges.

Networking with Fung Fellows, faculty, and visiting industry leaders provided valuable mentorship and career guidance. The institute's emphasis on leadership development complemented my technical engineering education, preparing me to take on roles with greater responsibility and impact.`,
    achievements: [
      "Engaged with Berkeley's engineering leadership center",
      "Participated in leadership development programs",
      "Learned systems thinking and strategic decision-making",
      "Explored intersection of technology, business, and society",
      "Networked with industry leaders and engineering executives",
      "Developed holistic approach to engineering challenges",
    ],
    skills: [
      "Engineering Leadership",
      "Systems Thinking",
      "Strategic Planning",
      "Innovation Strategy",
      "Team Leadership",
      "Ethics and Social Impact",
    ],
  },
  "rigetti-computing": {
    name: "Rigetti Computing",
    role: "Quantum Computing Researcher",
    period: "Jun 2023 - Present",
    image: "/communities/rigetti-logo.png",
    description:
      "Contributing to quantum computing research at one of the industry's leading quantum computing companies.",
    fullDescription: `Rigetti Computing is a pioneering quantum computing company focused on building the world's most powerful computers to solve humanity's most important and pressing problems. As a Quantum Computing Researcher, I work at the intersection of quantum hardware, algorithm development, and practical applications of quantum computing.

My work at Rigetti involves developing and optimizing quantum algorithms for near-term quantum processors, focusing on hybrid quantum-classical approaches that can provide quantum advantage on current noisy intermediate-scale quantum (NISQ) devices. This includes working with quantum computing frameworks, implementing quantum circuits, and analyzing the performance of quantum algorithms against classical benchmarks.

I collaborate with cross-functional teams including quantum hardware engineers, software developers, and applied scientists to bridge the gap between theoretical quantum algorithms and practical implementations on real quantum hardware. This requires deep understanding of quantum mechanics, quantum error correction, and the physical limitations and noise characteristics of superconducting qubit systems.

The role also involves exploring applications of quantum computing to real-world problems in areas such as optimization, machine learning, chemistry simulation, and cryptography. Working at Rigetti provides unique exposure to the cutting edge of quantum computing technology and the opportunity to contribute to this transformative field that promises to revolutionize computing as we know it.`,
    achievements: [
      "Developed quantum algorithms for NISQ-era quantum processors",
      "Implemented hybrid quantum-classical optimization routines",
      "Collaborated with hardware teams on quantum circuit optimization",
      "Benchmarked quantum algorithms against classical approaches",
      "Contributed to quantum software frameworks and tooling",
      "Explored quantum computing applications in optimization and ML",
      "Worked with superconducting qubit technology",
    ],
    skills: [
      "Quantum Computing",
      "Quantum Algorithms",
      "Python",
      "Quantum Circuits",
      "Quantum Error Correction",
      "Optimization",
      "Machine Learning",
      "Research & Development",
    ],
  },
}

export default async function CommunityDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const community = communitiesData[slug as keyof typeof communitiesData]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!community) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto max-w-6xl px-4 py-4">
          <Link
            href="/#communities"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{community.name}</h1>
          <div className="flex flex-wrap gap-4 items-center mb-6">
            <span className="text-xl text-primary font-medium bg-primary/10 px-4 py-2 rounded-md">
              {community.role}
            </span>
            {community.period && (
              <span className="text-muted-foreground font-mono text-sm bg-card px-4 py-2 rounded-md border border-border">
                {community.period}
              </span>
            )}
          </div>
          <p className="text-xl text-muted-foreground leading-relaxed">{community.description}</p>
        </div>
      </section>

      {/* Documents Section */}
      {community.documents && community.documents.length > 0 && (
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {community.documents.map((doc, i) => (
                <a
                  key={i}
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                      <ExternalLink className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                        {doc.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">Click to view document</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Community Image */}
      {community.image &&
        slug !== "nsf-icorps" &&
        slug !== "skydeck" &&
        slug !== "courtyard-ventures" &&
        slug !== "berkeley-venture-capital" &&
        slug !== "fung-institute" && (
          <ScrollReveal>
            <section className="py-8 px-4 bg-secondary/10">
              <div className="container mx-auto max-w-6xl">
                <div className="relative aspect-video bg-card border border-border rounded-lg overflow-hidden">
                  <img
                    src={community.image || "/placeholder.svg"}
                    alt={community.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </section>
          </ScrollReveal>
        )}

      {/* Gallery Section */}
      {community.gallery && (
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold mb-6 font-mono text-primary">{"<Project Gallery>"}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {community.gallery.map((image, i) => (
                <div key={i} className="relative aspect-video bg-card border border-border rounded-lg overflow-hidden">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Full Description */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 font-mono text-primary">{"<About This Experience>"}</h2>
          <div className="prose prose-invert max-w-none">
            {community.fullDescription.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      {community.achievements && (
        <section className="py-12 px-4 bg-secondary/10">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold mb-6 font-mono text-primary">{"<Key Achievements>"}</h2>
            <ul className="space-y-4">
              {community.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-primary text-2xl mt-1">•</span>
                  <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Skills */}
      {community.skills && (
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold mb-6 font-mono text-primary">{"<Skills Developed>"}</h2>
            <div className="flex flex-wrap gap-3">
              {community.skills.map((skill, i) => (
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
      )}
    </div>
  )
}

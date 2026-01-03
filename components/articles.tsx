"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import Link from "next/link"

export function Articles() {
  const articles = [
    // Articles will be added by user
  ]

  return (
    <section id="articles" className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 font-mono text-primary">{"</Articles>"}</h2>
        </ScrollReveal>

        {articles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">Articles coming soon...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article: any, i: number) => (
              <ScrollReveal key={i} delay={i * 100} direction="up">
                <Link href={`/articles/${article.slug}`}>
                  <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg overflow-hidden hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer hover:-translate-y-1">
                    {article.image && (
                      <div className="aspect-video relative overflow-hidden">
                        <img
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs text-muted-foreground font-mono bg-primary/10 px-2 py-1 rounded">
                          {article.date}
                        </span>
                        <span className="text-xs text-muted-foreground font-mono bg-secondary px-2 py-1 rounded">
                          {article.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">{article.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">{article.excerpt}</p>
                      <div className="flex items-center gap-2 text-primary font-medium">
                        <span>Read Article</span>
                        <span>→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

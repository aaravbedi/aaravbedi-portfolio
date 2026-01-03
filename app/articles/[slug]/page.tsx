import { notFound } from "next/navigation"
import Link from "next/link"

const articles = [
  // Articles will be added by user
]

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articles.find((a: any) => a.slug === slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 max-w-6xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span>←</span>
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </nav>

      <main className="pt-20 pb-20">
        <article className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm text-muted-foreground font-mono bg-primary/10 px-3 py-1 rounded">
                {article.date}
              </span>
              <span className="text-sm text-muted-foreground font-mono bg-secondary px-3 py-1 rounded">
                {article.readTime}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{article.title}</h1>
            {article.excerpt && <p className="text-xl text-muted-foreground leading-relaxed">{article.excerpt}</p>}
          </div>

          {article.image && (
            <div className="mb-12 rounded-lg overflow-hidden border border-border">
              <img src={article.image || "/placeholder.svg"} alt={article.title} className="w-full h-auto" />
            </div>
          )}

          <div className="prose prose-invert max-w-none">
            <div className="text-muted-foreground leading-relaxed space-y-6">{article.content}</div>
          </div>
        </article>
      </main>
    </div>
  )
}

export default function InsightsPage() {
  return (
    <main className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">Insights</h1>

      {/* Featured Article */}
      <div className="mb-16 rounded-lg border bg-card p-8">
        <h2 className="text-3xl font-semibold text-primary mb-4">
          Digital Transformation in 2024: Key Trends and Strategies
        </h2>
        <p className="text-muted-foreground mb-6">
          Explore the latest trends shaping digital transformation and learn how
          organizations can stay ahead in an evolving digital landscape.
        </p>
        <a
          href="/insights/digital-transformation-2024"
          className="text-primary hover:underline"
        >
          Read More →
        </a>
      </div>

      {/* Articles Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <article className="rounded-lg border bg-card p-6">
          <h3 className="text-xl font-semibold text-primary mb-3">
            The Rise of AI in Enterprise Solutions
          </h3>
          <p className="text-muted-foreground mb-4">
            How artificial intelligence is revolutionizing enterprise software
            and business processes.
          </p>
          <a
            href="/insights/ai-enterprise-solutions"
            className="text-primary hover:underline"
          >
            Read More →
          </a>
        </article>

        <article className="rounded-lg border bg-card p-6">
          <h3 className="text-xl font-semibold text-primary mb-3">
            Cloud Migration: Best Practices
          </h3>
          <p className="text-muted-foreground mb-4">
            Essential strategies for successful cloud migration and
            optimization.
          </p>
          <a
            href="/insights/cloud-migration-best-practices"
            className="text-primary hover:underline"
          >
            Read More →
          </a>
        </article>

        <article className="rounded-lg border bg-card p-6">
          <h3 className="text-xl font-semibold text-primary mb-3">
            Cybersecurity in the Digital Age
          </h3>
          <p className="text-muted-foreground mb-4">
            Key considerations for maintaining robust security in modern digital
            environments.
          </p>
          <a
            href="/insights/cybersecurity-digital-age"
            className="text-primary hover:underline"
          >
            Read More →
          </a>
        </article>

        <article className="rounded-lg border bg-card p-6">
          <h3 className="text-xl font-semibold text-primary mb-3">
            Data Analytics Success Stories
          </h3>
          <p className="text-muted-foreground mb-4">
            Real-world examples of organizations leveraging data analytics for
            business success.
          </p>
          <a
            href="/insights/data-analytics-success-stories"
            className="text-primary hover:underline"
          >
            Read More →
          </a>
        </article>

        <article className="rounded-lg border bg-card p-6">
          <h3 className="text-xl font-semibold text-primary mb-3">
            The Future of Work
          </h3>
          <p className="text-muted-foreground mb-4">
            How digital transformation is shaping the workplace of tomorrow.
          </p>
          <a
            href="/insights/future-of-work"
            className="text-primary hover:underline"
          >
            Read More →
          </a>
        </article>

        <article className="rounded-lg border bg-card p-6">
          <h3 className="text-xl font-semibold text-primary mb-3">
            Digital Innovation Roadmap
          </h3>
          <p className="text-muted-foreground mb-4">
            A strategic approach to driving digital innovation in your
            organization.
          </p>
          <a
            href="/insights/digital-innovation-roadmap"
            className="text-primary hover:underline"
          >
            Read More →
          </a>
        </article>
      </div>
    </main>
  )
}

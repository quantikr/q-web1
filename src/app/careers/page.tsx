export default function CareersPage() {
  return (
    <main className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Careers at Quantikr</h1>

        {/* Introduction */}
        <section className="mb-16">
          <p className="text-lg text-muted-foreground mb-6">
            Join our team of innovators, strategists, and technology experts who
            are passionate about driving digital transformation and creating
            lasting impact.
          </p>
          <p className="text-lg text-muted-foreground">
            At Quantikr, we offer more than just a job - we offer a career where
            you can grow, innovate, and make a real difference in the digital
            world.
          </p>
        </section>

        {/* Why Join Us */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-primary mb-6">
            Why Join Us
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Innovation Culture</h3>
              <p className="text-muted-foreground">
                Work with cutting-edge technologies and contribute to
                groundbreaking solutions.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Professional Growth</h3>
              <p className="text-muted-foreground">
                Continuous learning opportunities and clear career progression
                paths.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Global Impact</h3>
              <p className="text-muted-foreground">
                Work on projects that transform businesses and industries
                worldwide.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Work-Life Balance</h3>
              <p className="text-muted-foreground">
                Flexible work arrangements and comprehensive benefits package.
              </p>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-primary mb-6">
            Open Positions
          </h2>
          <div className="space-y-6">
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-xl font-semibold mb-2">
                Senior Solutions Architect
              </h3>
              <p className="text-muted-foreground mb-4">
                Lead the design and implementation of complex enterprise
                solutions.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  Full-time
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  Dubai
                </span>
              </div>
              <a
                href="/careers/senior-solutions-architect"
                className="text-primary hover:underline"
              >
                Learn More →
              </a>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-xl font-semibold mb-2">
                Digital Transformation Consultant
              </h3>
              <p className="text-muted-foreground mb-4">
                Drive digital transformation initiatives for enterprise clients.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  Full-time
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  Remote
                </span>
              </div>
              <a
                href="/careers/digital-transformation-consultant"
                className="text-primary hover:underline"
              >
                Learn More →
              </a>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-xl font-semibold mb-2">
                Cloud Solutions Engineer
              </h3>
              <p className="text-muted-foreground mb-4">
                Design and implement cloud-native solutions for enterprise
                clients.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  Full-time
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  Hybrid
                </span>
              </div>
              <a
                href="/careers/cloud-solutions-engineer"
                className="text-primary hover:underline"
              >
                Learn More →
              </a>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section>
          <h2 className="text-2xl font-semibold text-primary mb-6">
            Application Process
          </h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Our hiring process is designed to be transparent and efficient:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Submit your application</li>
              <li>Initial screening call</li>
              <li>Technical/Role-specific interview</li>
              <li>Culture fit interview</li>
              <li>Final interview and offer</li>
            </ol>
          </div>
        </section>
      </div>
    </main>
  )
}

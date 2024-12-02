import Link from 'next/link'
import { Hero } from '../components/ui/hero'

export default function Home() {
  return (
    <>
      <Hero
        title="WELCOME TO QUANTIKR"
        subtitle="Driving Change Delivering Value"
        description="At Quantikr, we blend deep strategic insights with cutting-edge digital innovation. Our bespoke approach to consulting involves a close partnership with each client, crafting tailor-made strategies that not only optimize digital"
        ctaText="Learn More"
      />

      {/* Feature section */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Feature 1 */}
          <div className="group rounded-lg border border-primary/10 bg-card p-8 transition-colors hover:border-primary/30">
            <h3 className="text-xl font-semibold text-primary">
              Digital Innovation
            </h3>
            <p className="mt-4 text-muted-foreground">
              Transform your business with cutting-edge digital solutions and
              AI-powered insights.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group rounded-lg border border-primary/10 bg-card p-8 transition-colors hover:border-primary/30">
            <h3 className="text-xl font-semibold text-primary">
              Strategic Consulting
            </h3>
            <p className="mt-4 text-muted-foreground">
              Navigate complex challenges with expert guidance and proven
              methodologies.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group rounded-lg border border-primary/10 bg-card p-8 transition-colors hover:border-primary/30">
            <h3 className="text-xl font-semibold text-primary">
              Sustainable Growth
            </h3>
            <p className="mt-4 text-muted-foreground">
              Build lasting success with sustainable, future-proof business
              strategies.
            </p>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 py-24 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Ready to start your transformation?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/90">
            Join leading organizations that have partnered with Quantikr to
            achieve extraordinary results.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-background px-8 py-3 text-lg font-medium text-primary transition-colors hover:bg-background/90 focus:outline-none focus:ring-2 focus:ring-background focus:ring-offset-2 focus:ring-offset-primary"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  )
}

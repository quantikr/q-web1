import { Hero } from '@/components/ui/hero'
import { CtaButton } from '@/components/ui/cta-button'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Transform your digital future with confidence"
        subtitle="Innovative solutions powered by expertise and deep industry knowledge. Where technology meets strategic excellence."
      />

      {/* Feature section */}
      <section className="container-custom py-20">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Feature 1 */}
          <div className="group rounded-lg border bg-card p-8 transition-colors hover:border-primary">
            <h3 className="text-xl font-semibold text-primary">
              Digital Innovation
            </h3>
            <p className="mt-4 text-muted-foreground">
              Transform your business with cutting-edge digital solutions and
              AI-powered insights.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group rounded-lg border bg-card p-8 transition-colors hover:border-primary">
            <h3 className="text-xl font-semibold text-primary">
              Strategic Consulting
            </h3>
            <p className="mt-4 text-muted-foreground">
              Navigate complex challenges with expert guidance and proven
              methodologies.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group rounded-lg border bg-card p-8 transition-colors hover:border-primary">
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
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Ready to start your transformation?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Join leading organizations that have partnered with us to achieve
            extraordinary results.
          </p>
          <CtaButton className="mt-8 px-8 py-3">Get Started</CtaButton>
        </div>
      </section>
    </main>
  )
}

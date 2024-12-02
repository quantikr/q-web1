export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Quantikr</h1>

        {/* Mission Statement */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Our Mission
          </h2>
          <p className="text-muted-foreground text-lg">
            At Quantikr, we are dedicated to driving digital transformation and
            delivering exceptional value to our clients. Our mission is to
            empower organizations with innovative technology solutions that
            accelerate growth and create lasting impact.
          </p>
        </section>

        {/* Who We Are */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Who We Are
          </h2>
          <p className="text-muted-foreground mb-6">
            Founded by industry veterans with decades of collective experience,
            Quantikr brings a wealth of knowledge and a proven track record of
            success. Our team is composed of world-class strategists,
            innovators, and problem-solvers who are passionate about making a
            measurable impact in all we do.
          </p>
          <p className="text-muted-foreground">
            We are more than a digital transformation consultancy. We are your
            strategic partners in navigating the complexities of the digital
            age. Based in the Middle East, we serve a global clientele,
            delivering bespoke solutions that are as unique as the challenges
            our clients face.
          </p>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Our Values
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                We constantly push boundaries and embrace new technologies to
                deliver cutting-edge solutions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                We maintain the highest standards in everything we do, from
                strategy to execution.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Partnership</h3>
              <p className="text-muted-foreground">
                We build lasting relationships with our clients, working
                together as true partners in their success.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Impact</h3>
              <p className="text-muted-foreground">
                We measure our success by the tangible value we create for our
                clients and their stakeholders.
              </p>
            </div>
          </div>
        </section>

        {/* Global Presence */}
        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Global Presence
          </h2>
          <p className="text-muted-foreground">
            With headquarters in the Middle East and a network of global
            partnerships, we deliver world-class solutions to clients across
            multiple regions. Our diverse team brings together international
            expertise with local market knowledge, ensuring solutions that are
            both innovative and culturally attuned.
          </p>
        </section>
      </div>
    </main>
  )
}

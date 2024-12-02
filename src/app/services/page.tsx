export default function ServicesPage() {
  return (
    <main className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">
            Digital Transformation
          </h2>
          <p className="text-muted-foreground">
            Transform your business with cutting-edge digital solutions that
            drive growth and efficiency.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">
            Technology Consulting
          </h2>
          <p className="text-muted-foreground">
            Expert guidance on technology strategy, architecture, and
            implementation.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">
            Cloud Solutions
          </h2>
          <p className="text-muted-foreground">
            Modernize your infrastructure with secure, scalable cloud solutions.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">
            Data Analytics
          </h2>
          <p className="text-muted-foreground">
            Turn data into actionable insights with advanced analytics and AI.
          </p>
        </div>
      </div>
    </main>
  )
}

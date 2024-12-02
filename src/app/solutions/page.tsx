export default function SolutionsPage() {
  return (
    <main className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">Solutions</h1>
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">
            Enterprise Solutions
          </h2>
          <p className="text-muted-foreground">
            Comprehensive enterprise solutions that streamline operations and
            boost productivity.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Enterprise Resource Planning (ERP)</li>
            <li>Customer Relationship Management (CRM)</li>
            <li>Business Process Management</li>
            <li>Enterprise Integration</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">
            Digital Solutions
          </h2>
          <p className="text-muted-foreground">
            Digital solutions that drive innovation and create competitive
            advantage.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Digital Experience Platforms</li>
            <li>E-commerce Solutions</li>
            <li>Mobile Applications</li>
            <li>Digital Marketing Platforms</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">
            Cloud Solutions
          </h2>
          <p className="text-muted-foreground">
            Cloud-native solutions that provide scalability and flexibility.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Cloud Migration</li>
            <li>Cloud-Native Development</li>
            <li>Hybrid Cloud Solutions</li>
            <li>Cloud Security</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">
            Data Solutions
          </h2>
          <p className="text-muted-foreground">
            Data-driven solutions that unlock business value.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Big Data Analytics</li>
            <li>Business Intelligence</li>
            <li>Data Warehousing</li>
            <li>Machine Learning & AI</li>
          </ul>
        </div>
      </div>
    </main>
  )
}

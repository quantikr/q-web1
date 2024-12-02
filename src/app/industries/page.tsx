export default function IndustriesPage() {
  return (
    <main className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">Industries</h1>
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">
            Financial Services
          </h2>
          <p className="text-muted-foreground">
            Digital transformation solutions for banks, insurance companies, and
            financial institutions.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Digital Banking Platforms</li>
            <li>Payment Solutions</li>
            <li>Risk Management Systems</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">Healthcare</h2>
          <p className="text-muted-foreground">
            Innovative solutions for healthcare providers and medical
            institutions.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Electronic Health Records</li>
            <li>Telemedicine Platforms</li>
            <li>Healthcare Analytics</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">Retail</h2>
          <p className="text-muted-foreground">
            Digital solutions for modern retail and e-commerce businesses.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>E-commerce Platforms</li>
            <li>Inventory Management</li>
            <li>Customer Analytics</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">Manufacturing</h2>
          <p className="text-muted-foreground">
            Industry 4.0 solutions for modern manufacturing operations.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>IoT Integration</li>
            <li>Supply Chain Optimization</li>
            <li>Predictive Maintenance</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">
            Energy & Utilities
          </h2>
          <p className="text-muted-foreground">
            Digital solutions for energy companies and utility providers.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Smart Grid Solutions</li>
            <li>Energy Management</li>
            <li>Asset Monitoring</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">Public Sector</h2>
          <p className="text-muted-foreground">
            Digital transformation solutions for government and public
            institutions.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>E-Government Solutions</li>
            <li>Citizen Services</li>
            <li>Smart City Platforms</li>
          </ul>
        </div>
      </div>
    </main>
  )
}

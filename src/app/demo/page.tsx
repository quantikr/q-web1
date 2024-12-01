import DemoNav from '../demo-nav'

export default function DemoPage() {
  return (
    <div className="min-h-screen">
      <DemoNav />
      <main className="container py-16">
        <div className="mx-auto max-w-3xl space-y-8">
          <section>
            <h1 className="mb-4 text-4xl font-bold">Navigation Demo</h1>
            <p className="text-lg text-muted-foreground">
              This page demonstrates our responsive mega menu navigation. Try
              resizing your browser window to see how it adapts to different
              screen sizes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Features</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fully responsive design</li>
              <li>Mobile-friendly dropdown menu</li>
              <li>Rich mega menu on desktop</li>
              <li>Supports icons and descriptions</li>
              <li>Smooth animations and transitions</li>
              <li>Keyboard accessible</li>
              <li>Screen reader friendly</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Usage</h2>
            <p className="text-muted-foreground">
              The navigation menu stays fixed at the top of the page and
              provides easy access to all major sections of the site. On
              desktop, hovering over menu items reveals detailed submenu
              content. On mobile, the menu collapses into a hamburger menu with
              expandable sections.
            </p>
          </section>

          {/* Add some spacing to demonstrate scrolling */}
          <div className="h-[1000px]" />
        </div>
      </main>
    </div>
  )
}

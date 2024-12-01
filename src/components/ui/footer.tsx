import * as React from 'react'
import { cn } from '../../lib/utils'
import Link from 'next/link'
import { Twitter, Linkedin, Github } from 'lucide-react'

interface FooterProps extends React.HTMLAttributes<HTMLElement> {}

const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ className, ...props }, ref) => {
    const currentYear = new Date().getFullYear()

    return (
      <footer
        ref={ref}
        className={cn('w-full border-t bg-background', className)}
        {...props}
      >
        <div className="container px-4 py-12 md:py-16">
          {/* Main Footer Content */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Quantikr</h3>
              <p className="text-sm text-muted-foreground">
                Advancing quantum computing technology for a better future.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://twitter.com/quantikr"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="https://linkedin.com/company/quantikr"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="https://github.com/quantikr"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </div>
            </div>

            {/* Solutions */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider">
                Solutions
              </h4>
              <ul className="space-y-2">
                {[
                  'Quantum Computing',
                  'Machine Learning',
                  'Data Analytics',
                  'Enterprise Solutions',
                ].map(item => (
                  <li key={item}>
                    <Link
                      href={`/solutions/${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider">
                Company
              </h4>
              <ul className="space-y-2">
                {['About', 'Careers', 'Research', 'Contact'].map(item => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider">
                Legal
              </h4>
              <ul className="space-y-2">
                {[
                  'Privacy Policy',
                  'Terms of Service',
                  'Cookie Policy',
                  'Accessibility',
                ].map(item => (
                  <li key={item}>
                    <Link
                      href={`/legal/${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 border-t pt-8">
            <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
              <p className="text-sm text-muted-foreground">
                © {currentYear} Quantikr. All rights reserved.
              </p>
              <div className="flex items-center space-x-4">
                <Link
                  href="/sitemap"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Sitemap
                </Link>
                <span className="text-muted-foreground/40">|</span>
                <Link
                  href="/preferences"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Cookie Preferences
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
)

Footer.displayName = 'Footer'

export { Footer }

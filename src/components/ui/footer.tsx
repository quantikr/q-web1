import * as React from 'react'
import Link from 'next/link'
import { cn } from '../../lib/utils'
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
                Driving digital transformation with innovative solutions and
                deep expertise.
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

            {/* Services & Solutions */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider">
                Services & Solutions
              </h4>
              <ul className="space-y-2">
                {[
                  {
                    label: 'Digital Transformation',
                    href: '/services#digital-transformation',
                  },
                  {
                    label: 'Cloud Solutions',
                    href: '/services#cloud-solutions',
                  },
                  { label: 'Data Analytics', href: '/services#data-analytics' },
                  {
                    label: 'Enterprise Solutions',
                    href: '/solutions#enterprise',
                  },
                  {
                    label: 'Consulting Services',
                    href: '/services#consulting',
                  },
                ].map(item => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider">
                Industries
              </h4>
              <ul className="space-y-2">
                {[
                  {
                    label: 'Financial Services',
                    href: '/industries#financial-services',
                  },
                  { label: 'Healthcare', href: '/industries#healthcare' },
                  { label: 'Manufacturing', href: '/industries#manufacturing' },
                  { label: 'Retail', href: '/industries#retail' },
                  { label: 'Public Sector', href: '/industries#public-sector' },
                ].map(item => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      {item.label}
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
                {[
                  { label: 'About Us', href: '/about' },
                  { label: 'Careers', href: '/careers' },
                  { label: 'Insights', href: '/insights' },
                  { label: 'Contact', href: '/contact' },
                ].map(item => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      {item.label}
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
                  href="/privacy-policy"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Privacy Policy
                </Link>
                <span className="text-muted-foreground/40">|</span>
                <Link
                  href="/terms-of-service"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Terms of Service
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

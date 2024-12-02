import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '../../lib/utils'
import { MegaMenu } from './mega-menu'

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

const menuItems = [
  {
    title: 'Services',
    items: [
      {
        title: 'Artificial Intelligence',
        href: '/services/ai',
        description: 'Transform industries with smarter, data-driven decisions',
      },
      {
        title: 'Business Transformation',
        href: '/services/business-transformation',
        description: 'Drive organizational change and digital innovation',
      },
      {
        title: 'Cloud Optimisation',
        href: '/services/cloud',
        description: 'Optimize your cloud infrastructure and operations',
      },
      {
        title: 'Customer Driven',
        href: '/services/customer',
        description: 'Create exceptional customer experiences',
      },
      {
        title: 'Data & Analytics',
        href: '/services/data-analytics',
        description: 'Turn data into actionable insights',
      },
      {
        title: 'FinOps: Financial Operations',
        href: '/services/finops',
        description: 'Optimize financial operations and performance',
      },
      {
        title: 'Enterprise Agility',
        href: '/services/enterprise-agility',
        description: 'Build agile enterprise solutions',
      },
      {
        title: 'Learning & Development',
        href: '/services/learning',
        description: 'Empower your workforce with digital skills',
      },
      {
        title: 'People, Talent & Change',
        href: '/services/people',
        description: 'Transform your workforce and culture',
      },
      {
        title: 'Strategy',
        href: '/services/strategy',
        description: 'Develop winning digital strategies',
      },
      {
        title: 'Technology',
        href: '/services/technology',
        description: 'Leverage cutting-edge technology solutions',
      },
      {
        title: 'Technology Business Management',
        href: '/services/tbm',
        description: 'Align technology with business objectives',
      },
      {
        title: 'Training Offering',
        href: '/services/training',
        description: 'Comprehensive digital training solutions',
      },
    ],
  },
  {
    title: 'Sectors',
    items: [
      {
        title: 'Advanced Manufacturing',
        href: '/sectors/advanced-manufacturing',
        description: 'Digital solutions for modern manufacturing',
      },
      {
        title: 'Aviation & Aerospace',
        href: '/sectors/aviation-aerospace',
        description: 'Technology solutions for aviation industry',
      },
      {
        title: 'Defence',
        href: '/sectors/defence',
        description: 'Digital transformation for defence sector',
      },
      {
        title: 'Energy & Resources',
        href: '/sectors/energy-resources',
        description: 'Solutions for energy and resource industries',
      },
      {
        title: 'Financial Services',
        href: '/sectors/financial-services',
        description: 'Digital solutions for financial sector',
      },
      {
        title: 'Government',
        href: '/sectors/government',
        description: 'Digital transformation for public sector',
      },
      {
        title: 'Media',
        href: '/sectors/media',
        description: 'Technology solutions for media industry',
      },
      {
        title: 'Pharmaceutical',
        href: '/sectors/pharmaceutical',
        description: 'Digital solutions for pharmaceutical sector',
      },
      {
        title: 'Retail',
        href: '/sectors/retail',
        description: 'Technology solutions for retail industry',
      },
      {
        title: 'Sports',
        href: '/sectors/sports',
        description: 'Digital innovation in sports sector',
      },
    ],
  },
  {
    title: 'Technologies',
    items: [
      {
        title: 'IBM Apptio',
        href: '/technologies/ibm-apptio',
        description: 'Technology business management solutions',
      },
      {
        title: 'IBM Cloudability',
        href: '/technologies/ibm-cloudability',
        description: 'Cloud cost management and optimization',
      },
      {
        title: 'IBM Aspera',
        href: '/technologies/ibm-aspera',
        description: 'High-speed data transfer solutions',
      },
      {
        title: 'IBM Turbonomic',
        href: '/technologies/ibm-turbonomic',
        description: 'Application resource management',
      },
      {
        title: 'IBM WatsonX',
        href: '/technologies/ibm-watsonx',
        description: 'AI and machine learning platform',
      },
    ],
  },
  {
    title: 'Insights',
    items: [
      {
        title: 'Latest Thinking',
        href: '/insights/latest',
        description: 'Our latest insights and perspectives',
      },
      {
        title: 'Case Studies',
        href: '/insights/case-studies',
        description: 'Real-world client success stories',
      },
      {
        title: 'Industry Research',
        href: '/insights/research',
        description: 'In-depth industry analysis and research',
      },
      {
        title: 'Events',
        href: '/insights/events',
        description: 'Upcoming events and webinars',
      },
    ],
  },
  {
    title: 'Careers',
    items: [
      {
        title: 'Early Careers',
        href: '/careers/early',
        description: 'Start your career journey with us',
      },
      {
        title: 'Experienced Professionals',
        href: '/careers/experienced',
        description: 'Take your career to the next level',
      },
      {
        title: 'Alumni',
        href: '/careers/alumni',
        description: 'Stay connected with our alumni network',
      },
    ],
  },
  {
    title: 'About',
    items: [
      {
        title: 'Find Out About Us',
        href: '/about/about-us',
        description: 'Learn about our mission, values, and culture',
      },
      {
        title: 'Our Leadership',
        href: '/about/leadership',
        description: 'Meet our leadership team',
      },
      {
        title: 'Our Approach',
        href: '/about/approach',
        description: 'Discover how we work with clients',
      },
    ],
  },
]

const Header = React.forwardRef<HTMLElement, HeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <header
        ref={ref}
        className={cn(
          'sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
          className
        )}
        {...props}
      >
        <div className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-8 w-8">
              <Image
                src="/quantikr-logo.svg"
                alt="Quantikr"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Quantikr
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex flex-1 justify-center">
            <MegaMenu items={menuItems} />
          </nav>

          {/* Mobile Menu */}
          <div className="flex items-center md:hidden">
            <MegaMenu items={menuItems} className="justify-end" />
          </div>
        </div>
      </header>
    )
  }
)

Header.displayName = 'Header'

export { Header }

'use client'

import { MegaMenu } from '@/components/ui/mega-menu'
import {
  Brain,
  Cloud,
  Globe,
  Shield,
  Wallet,
  LineChart,
  Users,
  Cog,
  BarChart,
  Database,
  Code2,
  Building2,
} from 'lucide-react'

const navigationItems = [
  {
    title: 'Services',
    description: 'Explore our comprehensive range of professional services',
    items: [
      {
        title: 'Data & AI',
        href: '/services/data-ai',
        description:
          'Transform your business with advanced data analytics and AI solutions',
        icon: <Brain className="h-6 w-6" />,
      },
      {
        title: 'Cloud Solutions',
        href: '/services/cloud',
        description:
          'Modernize your infrastructure with cloud-native solutions',
        icon: <Cloud className="h-6 w-6" />,
      },
      {
        title: 'Digital Transformation',
        href: '/services/digital',
        description: 'Navigate your digital journey with expert guidance',
        icon: <Globe className="h-6 w-6" />,
      },
      {
        title: 'Cybersecurity',
        href: '/services/security',
        description: 'Protect your assets with enterprise-grade security',
        icon: <Shield className="h-6 w-6" />,
      },
    ],
  },
  {
    title: 'Industries',
    description: 'Solutions tailored to your industry needs',
    items: [
      {
        title: 'Financial Services',
        href: '/industries/financial',
        description: 'Transform banking and financial operations',
        icon: <Wallet className="h-6 w-6" />,
      },
      {
        title: 'Energy & Utilities',
        href: '/industries/energy',
        description: 'Optimize energy distribution and management',
        icon: <LineChart className="h-6 w-6" />,
      },
      {
        title: 'Healthcare',
        href: '/industries/healthcare',
        description: 'Innovate patient care and medical services',
        icon: <Users className="h-6 w-6" />,
      },
      {
        title: 'Manufacturing',
        href: '/industries/manufacturing',
        description: 'Streamline production and supply chain',
        icon: <Cog className="h-6 w-6" />,
      },
    ],
  },
  {
    title: 'Solutions',
    description: 'Cutting-edge solutions for modern challenges',
    items: [
      {
        title: 'Analytics Platform',
        href: '/solutions/analytics',
        description: 'Advanced analytics and business intelligence',
        icon: <BarChart className="h-6 w-6" />,
      },
      {
        title: 'Enterprise Integration',
        href: '/solutions/integration',
        description: 'Seamless system and data integration',
        icon: <Database className="h-6 w-6" />,
      },
      {
        title: 'Custom Development',
        href: '/solutions/development',
        description: 'Tailored software solutions',
        icon: <Code2 className="h-6 w-6" />,
      },
      {
        title: 'Business Consulting',
        href: '/solutions/consulting',
        description: 'Strategic guidance and expertise',
        icon: <Building2 className="h-6 w-6" />,
      },
    ],
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
]

export default function DemoNav() {
  return (
    <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">LOGO</span>
          </a>
        </div>
        <MegaMenu items={navigationItems} className="mx-6" />
        <div className="flex flex-1 items-center justify-end space-x-4">
          {/* Add any additional header items here */}
        </div>
      </div>
    </div>
  )
}

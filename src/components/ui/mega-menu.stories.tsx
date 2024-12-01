import type { Meta, StoryObj } from '@storybook/react'
import { MegaMenu } from './mega-menu'
import {
  BarChart,
  Brain,
  Building2,
  Cloud,
  Code2,
  Cog,
  Database,
  Globe,
  LineChart,
  Shield,
  Users,
  Wallet,
} from 'lucide-react'

const meta = {
  title: 'UI/MegaMenu',
  component: MegaMenu,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MegaMenu>

export default meta
type Story = StoryObj<typeof MegaMenu>

const defaultItems = [
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

export const Default: Story = {
  args: {
    items: defaultItems,
  },
}

export const WithFeaturedItems: Story = {
  args: {
    items: defaultItems.map(item => ({
      ...item,
      items: item.items?.map((subItem, index) => ({
        ...subItem,
        featured: index === 0,
      })),
    })),
  },
}

export const SimpleMenu: Story = {
  args: {
    items: [
      {
        title: 'Products',
        items: [
          {
            title: 'Analytics',
            href: '/products/analytics',
          },
          {
            title: 'Automation',
            href: '/products/automation',
          },
          {
            title: 'Security',
            href: '/products/security',
          },
        ],
      },
      {
        title: 'Company',
        href: '/company',
      },
      {
        title: 'Resources',
        href: '/resources',
      },
    ],
  },
}

export const WithDescriptions: Story = {
  args: {
    items: defaultItems.map(item => ({
      ...item,
      description: item.items
        ? `Explore our ${item.title.toLowerCase()} offerings and solutions`
        : undefined,
    })),
  },
}

export const CompactMenu: Story = {
  args: {
    items: defaultItems.map(item => ({
      ...item,
      items: item.items?.slice(0, 2),
    })),
  },
}

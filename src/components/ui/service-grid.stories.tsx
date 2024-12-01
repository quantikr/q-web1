import type { Meta, StoryObj } from '@storybook/react'
import { ServiceGrid } from './service-grid'
import { Database, Cloud, Lock, Cpu, BarChart, Network } from 'lucide-react'

const meta = {
  title: 'UI/ServiceGrid',
  component: ServiceGrid,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ServiceGrid>

export default meta
type Story = StoryObj<typeof ServiceGrid>

const defaultServices = [
  {
    icon: <Database className="h-full w-full" />,
    title: 'Data Infrastructure',
    description:
      'Build robust and scalable data infrastructure for your enterprise needs.',
    linkHref: '#',
    linkText: 'Explore Infrastructure',
  },
  {
    icon: <Cloud className="h-full w-full" />,
    title: 'Cloud Solutions',
    description:
      'Leverage cloud technologies to transform your business operations.',
    linkHref: '#',
    linkText: 'Cloud Services',
  },
  {
    icon: <Lock className="h-full w-full" />,
    title: 'Security & Compliance',
    description:
      'Ensure data security and regulatory compliance across your organization.',
    linkHref: '#',
    linkText: 'Learn About Security',
  },
  {
    icon: <Cpu className="h-full w-full" />,
    title: 'AI Implementation',
    description: 'Implement cutting-edge AI solutions to drive innovation.',
    linkHref: '#',
    linkText: 'Discover AI',
  },
  {
    icon: <BarChart className="h-full w-full" />,
    title: 'Analytics Solutions',
    description:
      'Transform data into actionable insights with advanced analytics.',
    linkHref: '#',
    linkText: 'View Analytics',
  },
  {
    icon: <Network className="h-full w-full" />,
    title: 'Integration Services',
    description:
      'Seamlessly integrate systems and data across your enterprise.',
    linkHref: '#',
    linkText: 'Integration Details',
  },
]

export const Default: Story = {
  args: {
    title: 'Our Services',
    subtitle: 'What We Offer',
    description:
      'Comprehensive data and AI solutions to transform your business',
    services: defaultServices,
    columns: 3,
    variant: 'default',
  },
}

export const Compact: Story = {
  args: {
    title: 'Service Offerings',
    subtitle: 'Solutions',
    description: 'Streamlined services for modern enterprises',
    services: defaultServices.slice(0, 4),
    columns: 2,
    variant: 'compact',
  },
}

export const Featured: Story = {
  args: {
    title: 'Featured Services',
    subtitle: 'Enterprise Solutions',
    description: 'Leading-edge services for digital transformation',
    services: defaultServices.slice(0, 5),
    columns: 3,
    variant: 'featured',
  },
}

export const WithImages: Story = {
  args: {
    title: 'Our Capabilities',
    subtitle: 'Expert Solutions',
    description: 'Transformative services powered by data and AI',
    services: defaultServices.map((service, index) => ({
      ...service,
      icon: undefined,
      imageUrl: `https://picsum.photos/seed/${index}/200/200`,
    })),
    columns: 3,
    variant: 'default',
  },
}

export const NoHeader: Story = {
  args: {
    services: defaultServices.slice(0, 3),
    columns: 3,
    variant: 'default',
  },
}

export const FourColumns: Story = {
  args: {
    title: 'Complete Service Portfolio',
    subtitle: 'Full Range',
    description: 'Comprehensive suite of data and AI solutions',
    services: defaultServices,
    columns: 4,
    variant: 'default',
  },
}

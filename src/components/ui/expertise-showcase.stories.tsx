import type { Meta, StoryObj } from '@storybook/react'
import { ExpertiseShowcase } from './expertise-showcase'
import {
  Brain,
  Database,
  Cloud,
  Shield,
  BarChart,
  Network,
  Bot,
  Code,
  Cpu,
  LineChart,
  Lock,
  Search,
} from 'lucide-react'

const meta = {
  title: 'UI/ExpertiseShowcase',
  component: ExpertiseShowcase,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ExpertiseShowcase>

export default meta
type Story = StoryObj<typeof ExpertiseShowcase>

const defaultItems = [
  {
    icon: <Brain className="h-full w-full" />,
    title: 'Machine Learning',
    description:
      'Advanced ML algorithms and deep learning solutions for complex problems.',
    details: [
      'Neural Networks & Deep Learning',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
    ],
    linkHref: '#',
    linkText: 'Explore ML Solutions',
  },
  {
    icon: <Database className="h-full w-full" />,
    title: 'Data Engineering',
    description: 'Robust data infrastructure and pipeline development.',
    details: [
      'Data Warehouse Design',
      'ETL Pipeline Development',
      'Real-time Data Processing',
      'Data Quality Management',
    ],
    linkHref: '#',
    linkText: 'View Data Solutions',
  },
  {
    icon: <Cloud className="h-full w-full" />,
    title: 'Cloud Architecture',
    description: 'Scalable and secure cloud infrastructure solutions.',
    details: [
      'Multi-cloud Strategy',
      'Cloud Migration',
      'Serverless Architecture',
      'Container Orchestration',
    ],
    linkHref: '#',
    linkText: 'Cloud Services',
  },
  {
    icon: <Shield className="h-full w-full" />,
    title: 'Security & Compliance',
    description: 'Enterprise-grade security and regulatory compliance.',
    details: [
      'Data Protection',
      'Compliance Frameworks',
      'Security Auditing',
      'Risk Management',
    ],
    linkHref: '#',
  },
  {
    icon: <BarChart className="h-full w-full" />,
    title: 'Analytics & BI',
    description: 'Business intelligence and advanced analytics solutions.',
    details: [
      'Dashboard Development',
      'Statistical Analysis',
      'Data Visualization',
      'Reporting Automation',
    ],
    linkHref: '#',
  },
  {
    icon: <Network className="h-full w-full" />,
    title: 'Integration Services',
    description: 'Seamless system integration and API development.',
    details: [
      'API Development',
      'System Integration',
      'Middleware Solutions',
      'Legacy System Integration',
    ],
    linkHref: '#',
  },
]

const extendedItems = [
  ...defaultItems,
  {
    icon: <Bot className="h-full w-full" />,
    title: 'AI Solutions',
    description: 'Custom AI solutions for business automation.',
    details: [
      'Automated Decision Making',
      'AI Model Development',
      'Process Automation',
      'Intelligent Agents',
    ],
    linkHref: '#',
  },
  {
    icon: <Search className="h-full w-full" />,
    title: 'Data Discovery',
    description: 'Advanced data discovery and analysis tools.',
    details: [
      'Data Mining',
      'Pattern Recognition',
      'Anomaly Detection',
      'Exploratory Analysis',
    ],
    linkHref: '#',
  },
]

export const GridLayout: Story = {
  args: {
    title: 'Our Expertise',
    subtitle: 'Technical Capabilities',
    description:
      'Comprehensive data and AI solutions powered by cutting-edge technology',
    items: defaultItems,
    layout: 'grid',
    columns: 3,
    showDetails: true,
  },
}

export const MasonryLayout: Story = {
  args: {
    title: 'Technical Expertise',
    subtitle: 'Capabilities',
    description:
      'Discover our range of technical capabilities and specialized solutions',
    items: extendedItems,
    layout: 'masonry',
    showDetails: true,
  },
}

export const CarouselLayout: Story = {
  args: {
    title: 'Core Competencies',
    subtitle: 'What We Do',
    description:
      'Explore our key technical competencies and specialized services',
    items: defaultItems,
    layout: 'carousel',
    showDetails: true,
  },
}

export const FourColumns: Story = {
  args: {
    title: 'Technology Stack',
    subtitle: 'Our Tools',
    description:
      'The technologies and tools we use to deliver exceptional solutions',
    items: extendedItems,
    layout: 'grid',
    columns: 4,
    showDetails: true,
  },
}

export const NoDetails: Story = {
  args: {
    title: 'Services Overview',
    subtitle: 'Solutions',
    description: 'Quick overview of our main service offerings',
    items: defaultItems.map(({ details, ...item }) => item), // Remove details
    layout: 'grid',
    columns: 3,
    showDetails: false,
  },
}

export const TwoColumns: Story = {
  args: {
    title: 'Featured Expertise',
    subtitle: 'Key Areas',
    description: 'Our primary areas of technical expertise',
    items: defaultItems.slice(0, 4),
    layout: 'grid',
    columns: 2,
    showDetails: true,
  },
}

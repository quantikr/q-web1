import type { Meta, StoryObj } from '@storybook/react'
import { SolutionTimeline } from './solution-timeline'
import {
  Code,
  Database,
  Server,
  Settings,
  Shield,
  Users,
  CheckCircle,
  Clock,
  ArrowRight,
} from 'lucide-react'

const meta = {
  title: 'UI/SolutionTimeline',
  component: SolutionTimeline,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SolutionTimeline>

export default meta
type Story = StoryObj<typeof SolutionTimeline>

const defaultItems = [
  {
    icon: <Database className="h-full w-full" />,
    date: 'Phase 1',
    title: 'Data Infrastructure Setup',
    description: 'Establishing robust data foundation and infrastructure',
    status: 'completed' as const,
    details: [
      'Data warehouse implementation',
      'ETL pipeline setup',
      'Data quality framework',
      'Security protocols',
    ],
    linkHref: '#',
    linkText: 'Infrastructure Details',
  },
  {
    icon: <Code className="h-full w-full" />,
    date: 'Phase 2',
    title: 'AI Model Development',
    description: 'Building and training custom AI models',
    status: 'current' as const,
    details: [
      'Model architecture design',
      'Training pipeline setup',
      'Performance optimization',
      'Validation framework',
    ],
    linkHref: '#',
    linkText: 'Development Progress',
  },
  {
    icon: <Server className="h-full w-full" />,
    date: 'Phase 3',
    title: 'System Integration',
    description: 'Integrating AI models with existing systems',
    status: 'upcoming' as const,
    details: [
      'API development',
      'System compatibility',
      'Performance testing',
      'Documentation',
    ],
    linkHref: '#',
  },
]

const implementationSteps = [
  {
    icon: <CheckCircle className="h-full w-full" />,
    date: 'Week 1-2',
    title: 'Discovery & Planning',
    description: 'Initial assessment and project planning',
    status: 'completed' as const,
    details: [
      'Requirements gathering',
      'Technical assessment',
      'Resource planning',
      'Timeline definition',
    ],
  },
  {
    icon: <Clock className="h-full w-full" />,
    date: 'Week 3-6',
    title: 'Development',
    description: 'Core development and implementation phase',
    status: 'current' as const,
    details: [
      'Feature development',
      'Integration work',
      'Testing procedures',
      'Documentation',
    ],
  },
  {
    icon: <Users className="h-full w-full" />,
    date: 'Week 7-8',
    title: 'Training & Deployment',
    description: 'System deployment and user training',
    status: 'upcoming' as const,
    details: [
      'User training sessions',
      'System deployment',
      'Performance monitoring',
      'Support setup',
    ],
  },
]

export const VerticalLayout: Story = {
  args: {
    title: 'Implementation Timeline',
    subtitle: 'Project Phases',
    description:
      'Step-by-step guide to implementing AI solutions in your organization',
    items: defaultItems,
    layout: 'vertical',
    showDetails: true,
    activeStep: 1,
  },
}

export const HorizontalLayout: Story = {
  args: {
    title: 'Project Roadmap',
    subtitle: 'Implementation Steps',
    description: 'Timeline for successful project delivery',
    items: implementationSteps,
    layout: 'horizontal',
    showDetails: true,
    activeStep: 1,
  },
}

export const NoDetails: Story = {
  args: {
    title: 'Quick Overview',
    subtitle: 'Project Timeline',
    description: 'High-level view of project milestones',
    items: defaultItems,
    layout: 'vertical',
    showDetails: false,
  },
}

export const AllCompleted: Story = {
  args: {
    title: 'Completed Project',
    subtitle: 'Success Story',
    description: 'Overview of completed project phases',
    items: defaultItems.map(item => ({
      ...item,
      status: 'completed' as const,
    })),
    layout: 'vertical',
    showDetails: true,
    activeStep: 2,
  },
}

export const MinimalTimeline: Story = {
  args: {
    items: implementationSteps.slice(0, 2),
    layout: 'horizontal',
    showDetails: true,
  },
}

export const ExtendedTimeline: Story = {
  args: {
    title: 'Comprehensive Timeline',
    subtitle: 'Detailed Roadmap',
    description: 'Complete project implementation timeline with all phases',
    items: [
      ...defaultItems,
      {
        icon: <Settings className="h-full w-full" />,
        date: 'Phase 4',
        title: 'Optimization',
        description: 'Fine-tuning and performance optimization',
        status: 'upcoming' as const,
        details: [
          'Performance analysis',
          'System optimization',
          'Resource optimization',
          'Monitoring setup',
        ],
      },
      {
        icon: <Shield className="h-full w-full" />,
        date: 'Phase 5',
        title: 'Security & Compliance',
        description: 'Ensuring security and regulatory compliance',
        status: 'upcoming' as const,
        details: [
          'Security audit',
          'Compliance review',
          'Documentation update',
          'Final approval',
        ],
      },
    ],
    layout: 'vertical',
    showDetails: true,
    activeStep: 1,
  },
}

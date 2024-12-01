import type { Meta, StoryObj } from '@storybook/react'
import { StatsSection } from './stats-section'

const meta: Meta<typeof StatsSection> = {
  title: 'UI/StatsSection',
  component: StatsSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Stats section component for displaying business metrics, achievements, and key figures in a visually appealing grid layout.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    description: { control: 'text' },
    variant: {
      control: 'radio',
      options: ['default', 'highlight'],
    },
  },
}

export default meta

type Story = StoryObj<typeof StatsSection>

const defaultStats = [
  {
    value: '25+',
    label: 'Years Experience',
    description: 'Delivering excellence in consulting',
  },
  {
    value: '1000+',
    label: 'Team Members',
    description: 'Across global offices',
  },
  {
    value: '50+',
    label: 'Countries',
    description: 'Serving clients worldwide',
  },
  {
    value: '95%',
    label: 'Client Satisfaction',
    description: 'Based on annual surveys',
  },
]

export const Default: Story = {
  args: {
    title: 'Our Impact in Numbers',
    subtitle: 'Key Metrics',
    description:
      'Measuring our success through tangible results and continuous growth across our global operations.',
    stats: defaultStats,
  },
}

export const Highlight: Story = {
  args: {
    ...Default.args,
    variant: 'highlight',
  },
}

export const WithoutDescription: Story = {
  args: {
    title: 'Company Statistics',
    stats: defaultStats,
  },
}

export const MinimalHeader: Story = {
  args: {
    subtitle: 'Statistics',
    stats: defaultStats,
  },
}

export const StatsOnly: Story = {
  args: {
    stats: defaultStats,
  },
}

export const BusinessMetrics: Story = {
  args: {
    title: 'Business Performance',
    subtitle: 'Key Metrics',
    description: 'Our commitment to excellence reflected in numbers.',
    stats: [
      {
        value: '$2.5B',
        label: 'Annual Revenue',
        description: 'FY 2023',
      },
      {
        value: '28%',
        label: 'YoY Growth',
        description: 'Consistent expansion',
      },
      {
        value: '150+',
        label: 'Enterprise Clients',
        description: 'Global partnerships',
      },
      {
        value: '4.8/5',
        label: 'Client Rating',
        description: 'Industry-leading satisfaction',
      },
    ],
  },
}

export const DarkMode: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
  decorators: [
    Story => (
      <div className="dark">
        <Story />
      </div>
    ),
  ],
}

export const Mobile: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
}

export const Tablet: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
}

export const BusinessPage: Story = {
  render: () => (
    <div className="space-y-24">
      {/* Company Stats */}
      <StatsSection
        title="Our Global Impact"
        subtitle="Company Overview"
        description="Key figures that demonstrate our global reach and impact."
        stats={defaultStats}
      />

      {/* Business Performance */}
      <StatsSection
        title="Business Performance"
        subtitle="Financial Metrics"
        description="Strong financial performance driving sustainable growth."
        stats={[
          {
            value: '$2.5B',
            label: 'Revenue',
            description: 'Annual revenue FY 2023',
          },
          {
            value: '28%',
            label: 'Growth',
            description: 'Year-over-year growth',
          },
          {
            value: '35%',
            label: 'Market Share',
            description: 'In key markets',
          },
          {
            value: '18%',
            label: 'ROI',
            description: 'Average client ROI',
          },
        ]}
        variant="highlight"
      />
    </div>
  ),
}

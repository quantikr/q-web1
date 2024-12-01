import type { Meta, StoryObj } from '@storybook/react'
import { TimelineSection } from './timeline-section'

const meta: Meta<typeof TimelineSection> = {
  title: 'UI/TimelineSection',
  component: TimelineSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Timeline section component for displaying chronological events, milestones, and company history in an engaging visual format.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    description: { control: 'text' },
  },
}

export default meta

type Story = StoryObj<typeof TimelineSection>

const defaultItems = [
  {
    date: '2023',
    title: 'Global Expansion',
    description:
      'Expanded operations to 15 new markets across Asia and Europe, establishing strategic partnerships with leading enterprises.',
    imageUrl:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
  },
  {
    date: '2022',
    title: 'Digital Transformation',
    description:
      'Launched innovative digital solutions platform, transforming client service delivery and operational efficiency.',
    imageUrl:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
  },
  {
    date: '2021',
    title: 'Sustainability Initiative',
    description:
      'Implemented comprehensive sustainability program, achieving carbon neutrality across all operations.',
    imageUrl:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80',
  },
  {
    date: '2020',
    title: 'Innovation Hub',
    description:
      'Established innovation hub focused on emerging technologies and future-ready solutions.',
    imageUrl:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80',
  },
]

export const Default: Story = {
  args: {
    title: 'Our Journey',
    subtitle: 'Company Timeline',
    description: 'Key milestones in our journey of innovation and growth.',
    items: defaultItems,
  },
}

export const WithoutImages: Story = {
  args: {
    ...Default.args,
    items: defaultItems.map(({ imageUrl, ...item }) => item),
  },
}

export const CompactTimeline: Story = {
  args: {
    title: 'Recent Achievements',
    items: defaultItems.slice(0, 3),
  },
}

export const BusinessMilestones: Story = {
  args: {
    title: 'Business Evolution',
    subtitle: 'Key Milestones',
    description: 'Tracking our growth and transformation over the years.',
    items: [
      {
        date: 'Q4 2023',
        title: 'Market Leadership',
        description:
          'Achieved market leadership position in core sectors with 35% market share.',
      },
      {
        date: 'Q3 2023',
        title: 'Strategic Acquisition',
        description:
          'Completed strategic acquisition to enhance technological capabilities.',
      },
      {
        date: 'Q2 2023',
        title: 'Product Launch',
        description:
          'Successfully launched next-generation platform with AI capabilities.',
      },
      {
        date: 'Q1 2023',
        title: 'Global Recognition',
        description:
          'Received multiple industry awards for innovation and excellence.',
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
      {/* Company History */}
      <TimelineSection
        title="Our History"
        subtitle="Company Journey"
        description="A timeline of key moments that shaped our organization."
        items={defaultItems}
      />

      {/* Recent Achievements */}
      <TimelineSection
        title="Recent Milestones"
        subtitle="2023 Achievements"
        description="Notable achievements and progress in the current year."
        items={[
          {
            date: 'Q4 2023',
            title: 'Sustainability Goals',
            description:
              'Achieved 100% renewable energy usage across all facilities.',
          },
          {
            date: 'Q3 2023',
            title: 'Market Expansion',
            description:
              'Successfully entered 5 new markets in Asia-Pacific region.',
          },
          {
            date: 'Q2 2023',
            title: 'Innovation Award',
            description:
              'Received Global Innovation Award for quantum computing solutions.',
          },
        ]}
      />
    </div>
  ),
}

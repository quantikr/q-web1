import type { Meta, StoryObj } from '@storybook/react'
import { FeatureCard } from './feature-card'

const meta: Meta<typeof FeatureCard> = {
  title: 'UI/FeatureCard',
  component: FeatureCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Feature card component for showcasing services, solutions, or content. Supports images, videos, hover effects, and responsive layouts.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    imageUrl: { control: 'text' },
    videoUrl: { control: 'text' },
    videoThumbnail: { control: 'text' },
    linkHref: { control: 'text' },
    linkText: { control: 'text' },
    variant: {
      control: 'radio',
      options: ['default', 'large'],
    },
  },
}

export default meta

type Story = StoryObj<typeof FeatureCard>

export const Default: Story = {
  args: {
    title: 'Quantum Computing Solutions',
    description:
      'Harness the power of quantum computing to solve complex computational problems and optimize your business processes.',
    imageUrl:
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80',
    linkHref: '/solutions/quantum-computing',
    linkText: 'Explore quantum solutions',
  },
}

export const WithVideo: Story = {
  args: {
    title: 'Meet Our Team',
    description:
      'Learn about our quantum computing experts and their innovative work.',
    videoUrl:
      'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    videoThumbnail:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80',
    linkHref: '/team',
    linkText: 'Meet the team',
  },
}

export const Large: Story = {
  args: {
    ...Default.args,
    variant: 'large',
    title: 'Enterprise Quantum Integration',
    description:
      'Transform your enterprise with quantum computing integration. Our comprehensive solutions help businesses leverage quantum advantages for real-world applications.',
  },
}

export const WithoutImage: Story = {
  args: {
    title: 'Advanced Analytics',
    description:
      'Leverage advanced analytics and machine learning to gain deeper insights from your data.',
    linkHref: '/solutions/analytics',
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

export const GridLayout: Story = {
  render: () => (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <FeatureCard
        title="Quantum Computing"
        description="Harness quantum computing power for complex problem-solving."
        imageUrl="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80"
        linkHref="/solutions/quantum"
      />
      <FeatureCard
        title="Machine Learning"
        description="Advanced ML algorithms for predictive analytics and automation."
        imageUrl="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80"
        linkHref="/solutions/ml"
      />
      <FeatureCard
        title="Data Analytics"
        description="Transform data into actionable business insights."
        imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
        linkHref="/solutions/analytics"
      />
    </div>
  ),
}

export const TeamGrid: Story = {
  render: () => (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <FeatureCard
        title="Sarah Johnson"
        description="Senior Quantum Computing Specialist"
        videoUrl="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        videoThumbnail="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
        linkHref="/team/sarah"
        linkText="Meet Sarah"
      />
      <FeatureCard
        title="David Chen"
        description="Lead Quantum Engineer"
        videoUrl="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        videoThumbnail="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
        linkHref="/team/david"
        linkText="Meet David"
      />
      <FeatureCard
        title="Emily Martinez"
        description="Quantum Research Director"
        videoUrl="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        videoThumbnail="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80"
        linkHref="/team/emily"
        linkText="Meet Emily"
      />
    </div>
  ),
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

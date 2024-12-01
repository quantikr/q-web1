import type { Meta, StoryObj } from '@storybook/react'
import { ContentSection } from './content-section'

const meta: Meta<typeof ContentSection> = {
  title: 'UI/ContentSection',
  component: ContentSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Content section component for displaying rich content with flexible layouts. Supports images, CTAs, and different visual styles.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    description: { control: 'text' },
    imageUrl: { control: 'text' },
    imagePosition: {
      control: 'radio',
      options: ['left', 'right'],
    },
    ctaText: { control: 'text' },
    ctaHref: { control: 'text' },
    variant: {
      control: 'radio',
      options: ['default', 'highlight'],
    },
  },
}

export default meta

type Story = StoryObj<typeof ContentSection>

export const Default: Story = {
  args: {
    title: 'Quantum Computing Solutions',
    subtitle: 'Enterprise Solutions',
    description:
      'Transform your business with quantum computing. Our solutions help organizations leverage quantum advantages to solve complex computational problems and optimize business processes.',
    imageUrl:
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80',
    ctaText: 'Explore Solutions',
    ctaHref: '/solutions',
  },
}

export const Highlight: Story = {
  args: {
    ...Default.args,
    variant: 'highlight',
    title: 'Advanced Analytics Platform',
    subtitle: 'Data Solutions',
    description:
      'Leverage the power of advanced analytics and machine learning to gain deeper insights from your data. Our platform helps you make data-driven decisions with confidence.',
    imageUrl:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
  },
}

export const ImageLeft: Story = {
  args: {
    ...Default.args,
    imagePosition: 'left',
    title: 'Machine Learning Integration',
    subtitle: 'AI Solutions',
    description:
      'Integrate cutting-edge machine learning capabilities into your applications. Our ML solutions help you automate processes and unlock new possibilities.',
    imageUrl:
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80',
  },
}

export const WithoutImage: Story = {
  args: {
    title: 'Our Mission',
    description:
      'We are dedicated to advancing quantum computing technology and making it accessible to businesses worldwide. Our team of experts works tirelessly to develop innovative solutions that drive the future of computing.',
    ctaText: 'Learn More',
    ctaHref: '/about',
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

export const MultipleContentSections: Story = {
  render: () => (
    <div>
      <ContentSection
        variant="default"
        title="Quantum Solutions"
        subtitle="Enterprise"
        description="Transform your business with quantum computing capabilities."
        imageUrl="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80"
        ctaText="Learn More"
        ctaHref="/solutions"
      />
      <ContentSection
        variant="highlight"
        title="Advanced Analytics"
        subtitle="Data Intelligence"
        description="Leverage advanced analytics for better business insights."
        imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
        imagePosition="left"
        ctaText="Explore Analytics"
        ctaHref="/analytics"
      />
      <ContentSection
        variant="default"
        title="Machine Learning"
        subtitle="AI Solutions"
        description="Integrate ML capabilities into your applications."
        imageUrl="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80"
        ctaText="Discover ML"
        ctaHref="/ml"
      />
    </div>
  ),
}

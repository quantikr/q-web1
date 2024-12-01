import type { Meta, StoryObj } from '@storybook/react'
import { BusinessSection } from './business-section'

const meta: Meta<typeof BusinessSection> = {
  title: 'UI/BusinessSection',
  component: BusinessSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Business section component for displaying company information, management practices, and business areas in a clean, professional layout.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    description: { control: 'text' },
    ctaText: { control: 'text' },
    ctaHref: { control: 'text' },
  },
}

export default meta

type Story = StoryObj<typeof BusinessSection>

const defaultItems = [
  {
    title: 'Business Ethics',
    description:
      'We maintain the highest standards of business ethics and corporate governance, ensuring transparency and accountability in all our operations.',
    imageUrl:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
    linkHref: '/business/ethics',
    linkText: 'Our ethical principles',
  },
  {
    title: 'Risk Management',
    description:
      'Our comprehensive risk management framework helps identify, assess, and mitigate potential risks to our business and stakeholders.',
    imageUrl:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
    linkHref: '/business/risk-management',
    linkText: 'Learn about our approach',
  },
  {
    title: 'Sustainability',
    description:
      'We are committed to sustainable business practices that create long-term value while minimizing environmental impact.',
    imageUrl:
      'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?auto=format&fit=crop&q=80',
    linkHref: '/business/sustainability',
    linkText: 'Our sustainability goals',
  },
]

export const Default: Story = {
  args: {
    title: 'How We Manage Our Business',
    subtitle: 'Business Management',
    description:
      'Our business management approach is built on strong principles of ethics, risk management, and sustainable practices. We strive to create long-term value while maintaining the highest standards of corporate governance.',
    items: defaultItems,
    ctaText: 'Learn more about our approach',
    ctaHref: '/business-management',
  },
}

export const WithoutImages: Story = {
  args: {
    ...Default.args,
    items: defaultItems.map(({ imageUrl, ...item }) => item),
  },
}

export const TwoColumns: Story = {
  args: {
    ...Default.args,
    items: defaultItems.slice(0, 2),
  },
}

export const WithoutDescription: Story = {
  args: {
    ...Default.args,
    description: undefined,
  },
}

export const WithoutCTA: Story = {
  args: {
    ...Default.args,
    ctaText: undefined,
    ctaHref: undefined,
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

export const BusinessManagementPage: Story = {
  render: () => (
    <div className="space-y-24">
      {/* Main Business Section */}
      <BusinessSection
        title="How We Manage Our Business"
        subtitle="Business Management"
        description="Our business management approach is built on strong principles of ethics, risk management, and sustainable practices."
        items={defaultItems}
      />

      {/* Additional Business Areas */}
      <BusinessSection
        title="Key Business Areas"
        description="Explore our key business areas and how we drive value across different sectors."
        items={[
          {
            title: 'Corporate Strategy',
            description:
              'Developing and executing strategies that drive sustainable growth and market leadership.',
            linkHref: '/strategy',
          },
          {
            title: 'Innovation Management',
            description:
              'Fostering a culture of innovation and continuous improvement across our organization.',
            linkHref: '/innovation',
          },
          {
            title: 'Stakeholder Relations',
            description:
              'Building and maintaining strong relationships with all our stakeholders.',
            linkHref: '/stakeholders',
          },
        ]}
        ctaText="View all business areas"
        ctaHref="/business-areas"
      />
    </div>
  ),
}

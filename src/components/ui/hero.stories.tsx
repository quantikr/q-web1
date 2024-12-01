import type { Meta, StoryObj } from '@storybook/react'
import { Hero } from './hero'

const meta: Meta<typeof Hero> = {
  title: 'UI/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Hero section component with support for background images, gradient overlays, and geometric decorations.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    ctaText: { control: 'text' },
    backgroundImage: { control: 'text' },
  },
}

export default meta

type Story = StoryObj<typeof Hero>

export const Default: Story = {
  args: {
    title: 'Revolutionizing Quantum Computing',
    description:
      'Unlock the power of quantum computing with our cutting-edge solutions. We help businesses harness quantum technology to solve complex problems and drive innovation.',
    ctaText: 'Explore Solutions',
    backgroundImage:
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80',
  },
}

export const WithoutImage: Story = {
  args: {
    title: 'Next Generation Computing',
    description:
      'Experience the future of computing today. Our quantum solutions provide unprecedented computational power for your most challenging problems.',
    ctaText: 'Learn More',
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

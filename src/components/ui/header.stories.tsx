import type { Meta, StoryObj } from '@storybook/react'
import { Header } from './header'

const meta = {
  title: 'UI/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Main navigation header for Quantikr website. Features responsive design, search functionality, and mobile menu.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof Header>

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Default header with light theme.',
      },
    },
  },
}

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story:
          'Header in dark mode, automatically adapts to dark theme colors.',
      },
    },
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
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Mobile view with hamburger menu.',
      },
    },
  },
}

export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
    docs: {
      description: {
        story: 'Tablet view showing responsive navigation.',
      },
    },
  },
}

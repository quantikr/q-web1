import type { Meta, StoryObj } from '@storybook/react'
import { ThemeToggle } from './theme-toggle'
import { ThemeProvider } from './theme-provider'

const meta = {
  title: 'Components/ThemeToggle',
  component: ThemeToggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof ThemeToggle>

export default meta
type Story = StoryObj<typeof ThemeToggle>

export const Default: Story = {}

export const WithContainer: Story = {
  render: () => (
    <div className="p-4 bg-background text-foreground rounded-lg border">
      <div className="flex items-center justify-between">
        <span>Toggle Theme</span>
        <ThemeToggle />
      </div>
    </div>
  ),
}

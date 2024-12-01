import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
      ],
      description: 'The visual style of the button',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
      description: 'The size of the button',
    },
    asChild: {
      control: 'boolean',
      description: 'Whether to render as a child component',
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'default',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
}

export const Destructive: Story = {
  args: {
    children: 'Destructive Button',
    variant: 'destructive',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Button variant="default">Default Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="destructive">Destructive Button</Button>
      <Button variant="outline">Outline Button</Button>
      <Button variant="ghost">Ghost Button</Button>
      <Button variant="link">Link Button</Button>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Button size="lg">Large Button</Button>
      <Button size="default">Default Button</Button>
      <Button size="sm">Small Button</Button>
      <Button size="icon">🔍</Button>
    </div>
  ),
}

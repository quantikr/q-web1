import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

const Colors = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Base Colors</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="h-24 w-full bg-background border rounded-lg"></div>
            <p className="text-sm font-medium">Background</p>
            <p className="text-xs text-muted-foreground">bg-background</p>
          </div>
          <div className="space-y-2">
            <div className="h-24 w-full bg-foreground rounded-lg"></div>
            <p className="text-sm font-medium">Foreground</p>
            <p className="text-xs text-muted-foreground">bg-foreground</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Brand Colors</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <div className="h-24 w-full bg-primary rounded-lg"></div>
            <p className="text-sm font-medium">Primary</p>
            <p className="text-xs text-muted-foreground">bg-primary</p>
          </div>
          <div className="space-y-2">
            <div className="h-24 w-full bg-secondary rounded-lg"></div>
            <p className="text-sm font-medium">Secondary</p>
            <p className="text-xs text-muted-foreground">bg-secondary</p>
          </div>
          <div className="space-y-2">
            <div className="h-24 w-full bg-accent rounded-lg"></div>
            <p className="text-sm font-medium">Accent</p>
            <p className="text-xs text-muted-foreground">bg-accent</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">UI Colors</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <div className="h-24 w-full bg-muted rounded-lg"></div>
            <p className="text-sm font-medium">Muted</p>
            <p className="text-xs text-muted-foreground">bg-muted</p>
          </div>
          <div className="space-y-2">
            <div className="h-24 w-full bg-card border rounded-lg"></div>
            <p className="text-sm font-medium">Card</p>
            <p className="text-xs text-muted-foreground">bg-card</p>
          </div>
          <div className="space-y-2">
            <div className="h-24 w-full bg-popover border rounded-lg"></div>
            <p className="text-sm font-medium">Popover</p>
            <p className="text-xs text-muted-foreground">bg-popover</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Interactive Colors</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <div className="h-24 w-full bg-input rounded-lg"></div>
            <p className="text-sm font-medium">Input</p>
            <p className="text-xs text-muted-foreground">bg-input</p>
          </div>
          <div className="space-y-2">
            <div className="h-24 w-full border-4 border-ring rounded-lg"></div>
            <p className="text-sm font-medium">Ring</p>
            <p className="text-xs text-muted-foreground">border-ring</p>
          </div>
          <div className="space-y-2">
            <div className="h-24 w-full border-4 border rounded-lg"></div>
            <p className="text-sm font-medium">Border</p>
            <p className="text-xs text-muted-foreground">border</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const meta = {
  title: 'Design System/Colors',
  component: Colors,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Colors>

export default meta
type Story = StoryObj<typeof Colors>

export const Default: Story = {}

export const DarkMode: Story = {
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

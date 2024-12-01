import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

const Typography = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Headings</h2>
        <div className="space-y-4">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary">
              Heading 1
            </h1>
            <p className="text-xs text-muted-foreground mt-1">
              text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight
            </p>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
              Heading 2
            </h2>
            <p className="text-xs text-muted-foreground mt-1">
              text-3xl md:text-4xl font-bold tracking-tight
            </p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-primary">
              Heading 3
            </h3>
            <p className="text-xs text-muted-foreground mt-1">
              text-2xl md:text-3xl font-semibold
            </p>
          </div>
          <div>
            <h4 className="text-xl md:text-2xl font-semibold text-primary">
              Heading 4
            </h4>
            <p className="text-xs text-muted-foreground mt-1">
              text-xl md:text-2xl font-semibold
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Body Text</h2>
        <div className="space-y-4">
          <div>
            <p className="text-base md:text-lg leading-relaxed">
              Base text: The quick brown fox jumps over the lazy dog. This is a
              longer paragraph to demonstrate how the text flows and wraps
              across multiple lines with proper line height and spacing.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              text-base md:text-lg leading-relaxed
            </p>
          </div>
          <div>
            <p className="text-sm leading-relaxed">
              Small text: The quick brown fox jumps over the lazy dog. This text
              size is commonly used for secondary content and UI elements.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              text-sm leading-relaxed
            </p>
          </div>
          <div>
            <p className="text-xs leading-relaxed">
              Extra small text: The quick brown fox jumps over the lazy dog.
              Used for captions, helper text, and metadata.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              text-xs leading-relaxed
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Font Weights</h2>
        <div className="space-y-4">
          <div>
            <p className="text-lg font-bold">Bold Text (700)</p>
            <p className="text-xs text-muted-foreground mt-1">font-bold</p>
          </div>
          <div>
            <p className="text-lg font-semibold">Semibold Text (600)</p>
            <p className="text-xs text-muted-foreground mt-1">font-semibold</p>
          </div>
          <div>
            <p className="text-lg font-medium">Medium Text (500)</p>
            <p className="text-xs text-muted-foreground mt-1">font-medium</p>
          </div>
          <div>
            <p className="text-lg font-normal">Regular Text (400)</p>
            <p className="text-xs text-muted-foreground mt-1">font-normal</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Special Styles</h2>
        <div className="space-y-4">
          <div>
            <p className="text-lg text-muted-foreground">
              Muted text: Used for less important content
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              text-muted-foreground
            </p>
          </div>
          <div>
            <p className="text-lg tracking-tight">
              Tight tracking: Used for headings
            </p>
            <p className="text-xs text-muted-foreground mt-1">tracking-tight</p>
          </div>
          <div>
            <p className="text-lg leading-relaxed">
              Relaxed leading: Used for better readability in body text
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              leading-relaxed
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const meta = {
  title: 'Design System/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof Typography>

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

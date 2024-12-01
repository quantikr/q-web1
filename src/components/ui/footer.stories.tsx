import type { Meta, StoryObj } from '@storybook/react'
import { Footer } from './footer'

const meta: Meta<typeof Footer> = {
  title: 'UI/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Footer component with responsive layout, navigation links, social media integration, and legal information.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto p-4">
          <h1 className="mb-4 text-2xl font-bold">Page Content</h1>
          <p className="mb-8 text-muted-foreground">
            This is example page content to show how the footer appears at the
            bottom of the page.
          </p>
        </div>
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Footer>

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

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
}

export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
}

export const WithContent: Story = {
  render: () => (
    <div className="min-h-screen bg-background">
      {/* Example Page Content */}
      <div className="container mx-auto space-y-8 p-4">
        <section className="space-y-4">
          <h1 className="text-3xl font-bold">Welcome to Quantikr</h1>
          <p className="text-muted-foreground">
            Leading the quantum computing revolution with innovative solutions.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Our Solutions</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <h3 className="font-bold">Quantum Computing</h3>
              <p className="text-sm text-muted-foreground">
                Advanced quantum solutions for complex problems.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-bold">Machine Learning</h3>
              <p className="text-sm text-muted-foreground">
                AI-powered insights for your business.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  ),
}

export const Sticky: Story = {
  render: () => (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="container mx-auto flex-1 p-4">
        <h1 className="mb-4 text-2xl font-bold">Short Content Page</h1>
        <p className="text-muted-foreground">
          This example shows how the footer sticks to the bottom on pages with
          minimal content.
        </p>
      </div>
      <Footer />
    </div>
  ),
}

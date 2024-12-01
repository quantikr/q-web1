import type { Meta, StoryObj } from '@storybook/react'
import { CookieBanner } from './cookie-banner'

const meta: Meta<typeof CookieBanner> = {
  title: 'UI/CookieBanner',
  component: CookieBanner,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Cookie consent banner with accept and settings options. Responsive design with mobile-optimized layout.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    onAccept: { action: 'accepted' },
    onSettings: { action: 'settings clicked' },
    onClose: { action: 'closed' },
    policyUrl: { control: 'text' },
  },
  decorators: [
    Story => (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto p-4">
          <h1 className="mb-4 text-2xl font-bold">Page Content</h1>
          <p className="text-muted-foreground">
            This is example page content to show how the cookie banner appears
            at the bottom of the page.
          </p>
        </div>
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof CookieBanner>

export const Default: Story = {
  args: {
    policyUrl: '/cookie-policy',
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

export const WithCustomText: Story = {
  args: {
    ...Default.args,
    children: (
      <div className="flex-1 text-sm text-muted-foreground">
        <p>
          We use cookies to enhance your experience. By continuing to visit this
          site you agree to our use of cookies.{' '}
          <a
            href="/privacy"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            Privacy Policy
          </a>
        </p>
      </div>
    ),
  },
}

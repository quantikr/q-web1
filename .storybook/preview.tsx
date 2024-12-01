import type { Preview } from '@storybook/react'
import React from 'react'
import { ThemeProvider } from '../src/components/theme-provider'
import '../src/app/globals.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
    docs: {
      story: {
        inline: true,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: 'hsl(0 0% 100%)' },
        { name: 'dark', value: 'hsl(222 47% 11%)' },
      ],
    },
    layout: 'fullscreen',
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
        ],
        showName: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme
      return (
        <ThemeProvider
          attribute="class"
          defaultTheme={theme}
          enableSystem={false}
          disableTransitionOnChange
        >
          <div
            className={`min-h-screen bg-background text-foreground antialiased ${theme === 'dark' ? 'dark' : ''}`}
          >
            <Story />
          </div>
        </ThemeProvider>
      )
    },
  ],
}

export default preview

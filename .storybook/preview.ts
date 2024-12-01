import type { Preview } from '@storybook/react'
import React from 'react'
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
      const bodyClasses = ['antialiased']
      if (theme === 'dark') {
        bodyClasses.push('dark')
      }
      return React.createElement(
        'div',
        { className: bodyClasses.join(' ') },
        React.createElement(Story, null)
      )
    },
  ],
}

export default preview

# Next.js Modern Stack

A modern Next.js application with TypeScript, Tailwind CSS, shadcn/ui, and comprehensive testing setup.

## Features

- ⚡️ Next.js 14 with App Router
- 🎨 Tailwind CSS for styling
- 🎯 TypeScript for type safety
- 🎪 shadcn/ui components
- 🌙 Dark mode support
- 📚 Storybook for component development
- 🧪 Testing Setup:
  - Jest for unit testing
  - React Testing Library for component testing
  - Playwright for end-to-end testing
  - MSW for API mocking
- 📝 ESLint and Prettier for code quality
- 🚀 GitHub Actions for CI/CD
- 🌐 Cloudflare Pages deployment ready
- 🔍 Accessibility testing with axe-core
- 📊 Bundle analysis with @next/bundle-analyzer
- 🎯 Git hooks with Husky and lint-staged
- 📝 Conventional commits with Commitizen

## Getting Started

### Prerequisites

- Node.js 20 or later
- Yarn 4 (Berry)

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone <repository-url>
   cd next-new
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   yarn install
   \`\`\`

## Development

### Running the Application

Start the development server:
\`\`\`bash
yarn dev
\`\`\`

### Component Development with Storybook

Storybook provides an isolated environment for developing and testing components.

Start Storybook:
\`\`\`bash
yarn storybook
\`\`\`

#### Writing Stories

Stories are located in the same directory as their components with the `.stories.tsx` extension.

Example story structure:
\`\`\`typescript
// button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'

const meta = {
title: 'UI/Button',
component: Button,
parameters: {
layout: 'centered',
},
tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
args: {
children: 'Button',
variant: 'default',
},
}
\`\`\`

#### Features

- 🎨 Theme-aware components with dark mode support
- 📝 Auto-generated documentation
- 🎮 Interactive controls for testing variants
- 📱 Responsive design testing
- ♿️ Accessibility checking
- 🧪 Integration with testing tools

### Testing

Run tests:
\`\`\`bash

# Unit and component tests

yarn test

# End-to-end tests

yarn test:e2e
\`\`\`

### Code Quality

Run linting:
\`\`\`bash
yarn lint
\`\`\`

Format code:
\`\`\`bash
yarn format
\`\`\`

### Building for Production

Build the application:
\`\`\`bash
yarn build
\`\`\`

## Project Structure

\`\`\`
├── .storybook/ # Storybook configuration
├── src/
│ ├── app/ # Next.js app directory
│ ├── components/ # React components
│ │ └── ui/ # UI components with stories
│ ├── lib/ # Utility functions
│ ├── styles/ # Global styles
│ └── tests/ # Test utilities
├── e2e/ # Playwright tests
├── public/ # Static files
└── package.json
\`\`\`

## Component Development Workflow

1. Create component in `src/components/ui/`
2. Add stories in the same directory
3. Develop and test in Storybook
4. Write unit tests
5. Document usage and props
6. Submit PR for review

## Git Workflow

This project uses Conventional Commits. To create a commit:

\`\`\`bash
git add .
git commit -m "type: description"
\`\`\`

Types: feat, fix, docs, style, refactor, test, chore

## Deployment

### Cloudflare Pages

1. Create a new project in Cloudflare Pages
2. Connect your repository
3. Configure build settings:
   - Build command: \`yarn build\`
   - Build output directory: \`.next\`
   - Environment variables: Add as needed

## Contributing

1. Create a feature branch
2. Develop and test your changes
3. Write or update tests
4. Update documentation
5. Submit a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details

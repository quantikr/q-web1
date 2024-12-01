import type { Meta, StoryObj } from '@storybook/react'
import { CaseStudyCard } from './case-study-card'

const meta = {
  title: 'UI/CaseStudyCard',
  component: CaseStudyCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CaseStudyCard>

export default meta
type Story = StoryObj<typeof CaseStudyCard>

export const Default: Story = {
  args: {
    client: 'Global Tech Corp',
    industry: 'Technology',
    title: 'AI-Powered Customer Service Transformation',
    challenge:
      'Facing increasing customer service demands and rising operational costs, Global Tech Corp needed to modernize their customer support infrastructure while maintaining service quality.',
    solution:
      'Implemented an AI-powered customer service platform with natural language processing capabilities, automated response systems, and intelligent routing.',
    resultText:
      'Achieved 40% reduction in response times, 30% cost savings, and improved customer satisfaction scores by 25%.',
    metrics: [
      { value: '40%', label: 'Faster Response' },
      { value: '30%', label: 'Cost Reduction' },
      { value: '25%', label: 'CSAT Improvement' },
      { value: '95%', label: 'Resolution Rate' },
    ],
    imageUrl: 'https://picsum.photos/seed/casestudy1/800/400',
    linkHref: '#',
    variant: 'default',
  },
}

export const Featured: Story = {
  args: {
    client: 'FinanceFlow',
    clientLogo: 'https://picsum.photos/seed/logo/200/50',
    industry: 'Financial Services',
    title: 'Data-Driven Digital Banking Transformation',
    challenge:
      'FinanceFlow needed to modernize their legacy systems and create a data-driven approach to digital banking services.',
    solution:
      'Developed a comprehensive data platform with real-time analytics, personalized customer insights, and automated risk assessment.',
    resultText:
      'Transformed digital banking experience with real-time insights, reduced operational costs, and improved customer engagement.',
    metrics: [
      { value: '60%', label: 'Digital Adoption' },
      { value: '45%', label: 'Cost Savings' },
      { value: '3x', label: 'Customer Growth' },
    ],
    imageUrl: 'https://picsum.photos/seed/casestudy2/800/400',
    linkHref: '#',
    variant: 'featured',
  },
}

export const Minimal: Story = {
  args: {
    client: 'HealthTech Solutions',
    industry: 'Healthcare',
    title: 'AI in Medical Diagnostics',
    challenge:
      'Implementing AI-powered diagnostic tools to improve accuracy and speed of medical diagnoses while maintaining compliance with healthcare regulations.',
    solution:
      'Developed a secure, HIPAA-compliant AI platform for analyzing medical imaging and patient data.',
    metrics: [
      { value: '99%', label: 'Accuracy' },
      { value: '75%', label: 'Time Saved' },
    ],
    linkHref: '#',
    variant: 'minimal',
  },
}

export const WithClientLogo: Story = {
  args: {
    client: 'EcoSmart Energy',
    clientLogo: 'https://picsum.photos/seed/logo2/200/50',
    industry: 'Energy',
    title: 'Smart Grid Optimization with AI',
    challenge:
      'Optimizing energy distribution across a complex smart grid network while reducing waste and improving reliability.',
    solution:
      'Implemented AI-driven predictive maintenance and real-time load balancing systems.',
    resultText:
      'Achieved significant improvements in grid reliability and energy efficiency.',
    metrics: [
      { value: '15%', label: 'Energy Savings' },
      { value: '50%', label: 'Faster Response' },
      { value: '99.9%', label: 'Uptime' },
    ],
    imageUrl: 'https://picsum.photos/seed/casestudy3/800/400',
    linkHref: '#',
  },
}

export const NoMetrics: Story = {
  args: {
    client: 'RetailPro',
    industry: 'Retail',
    title: 'Inventory Management Transformation',
    challenge:
      'Managing complex inventory across multiple locations with frequent stockouts and overstock situations.',
    solution:
      'Deployed an AI-powered inventory management system with predictive analytics.',
    resultText:
      'Dramatically improved inventory accuracy and reduced carrying costs.',
    imageUrl: 'https://picsum.photos/seed/casestudy4/800/400',
    linkHref: '#',
  },
}

export const MinimalWithMetrics: Story = {
  args: {
    client: 'DataFlow Analytics',
    industry: 'Analytics',
    title: 'Real-time Analytics Platform',
    challenge:
      'Building a scalable real-time analytics platform capable of processing millions of events per second.',
    solution:
      'Created a distributed streaming analytics platform with machine learning capabilities.',
    metrics: [
      { value: '1M+', label: 'Events/Second' },
      { value: '99.99%', label: 'Uptime' },
    ],
    linkHref: '#',
    variant: 'minimal',
  },
}

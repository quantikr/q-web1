import type { Meta, StoryObj } from '@storybook/react'
import { FAQSection } from './faq-section'

const meta: Meta<typeof FAQSection> = {
  title: 'UI/FAQSection',
  component: FAQSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'FAQ section component with accordion functionality for displaying questions and answers in an organized, interactive format.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    description: { control: 'text' },
    variant: {
      control: 'radio',
      options: ['default', 'highlight'],
    },
  },
}

export default meta

type Story = StoryObj<typeof FAQSection>

const defaultItems = [
  {
    question: 'How do you manage business risk?',
    answer:
      'We employ a comprehensive risk management framework that includes regular assessments, robust controls, and continuous monitoring. Our approach ensures early identification and mitigation of potential risks while maintaining operational efficiency.',
  },
  {
    question: 'What is your approach to sustainability?',
    answer:
      'Our sustainability strategy focuses on three key pillars: environmental stewardship, social responsibility, and economic viability. We have committed to achieving net-zero emissions by 2030 and integrate sustainable practices across all operations.',
  },
  {
    question: 'How do you ensure business continuity?',
    answer:
      'Our business continuity planning includes comprehensive disaster recovery protocols, regular testing of critical systems, and maintaining redundant infrastructure. We conduct periodic reviews and updates to ensure our plans remain effective and relevant.',
  },
  {
    question: 'What governance structures are in place?',
    answer:
      'We maintain robust governance structures including an independent board of directors, specialized committees, and clear reporting lines. Regular audits and compliance reviews ensure adherence to best practices and regulatory requirements.',
  },
]

export const Default: Story = {
  args: {
    title: 'Business Management FAQ',
    subtitle: 'Common Questions',
    description:
      'Find answers to frequently asked questions about our business management practices and policies.',
    items: defaultItems,
  },
}

export const Highlight: Story = {
  args: {
    ...Default.args,
    variant: 'highlight',
  },
}

export const WithoutHeader: Story = {
  args: {
    items: defaultItems,
  },
}

export const CompactList: Story = {
  args: {
    title: 'Quick Answers',
    items: defaultItems.slice(0, 2),
  },
}

export const BusinessPolicies: Story = {
  args: {
    title: 'Business Policies',
    subtitle: 'Key Information',
    description:
      'Essential information about our business policies and procedures.',
    items: [
      {
        question: 'What are your ethical business practices?',
        answer:
          'Our ethical business practices are founded on transparency, integrity, and accountability. We maintain strict policies against corruption and ensure fair dealing with all stakeholders.',
      },
      {
        question: 'How do you handle data protection?',
        answer:
          'We follow industry-leading data protection standards and comply with global privacy regulations. Our security measures include encryption, access controls, and regular security audits.',
      },
      {
        question: 'What is your quality assurance process?',
        answer:
          'Our quality assurance process involves multiple stages of review, testing, and validation. We maintain ISO certifications and regularly update our procedures to meet evolving standards.',
      },
    ],
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

export const BusinessPage: Story = {
  render: () => (
    <div className="space-y-24">
      {/* General Business FAQ */}
      <FAQSection
        title="Business Management FAQ"
        subtitle="Common Questions"
        description="Essential information about our business practices and policies."
        items={defaultItems}
      />

      {/* Specific Policies */}
      <FAQSection
        title="Operational Policies"
        subtitle="Detailed Information"
        description="Detailed information about our operational procedures and guidelines."
        items={[
          {
            question: 'What are your operational standards?',
            answer:
              'We maintain ISO 9001:2015 certification and follow industry best practices in all operations.',
          },
          {
            question: 'How do you handle client data?',
            answer:
              'Client data is protected using enterprise-grade security measures and handled in compliance with GDPR and other relevant regulations.',
          },
          {
            question: 'What is your incident response process?',
            answer:
              'We have a comprehensive incident response plan that ensures quick resolution of any operational issues while maintaining service continuity.',
          },
        ]}
        variant="highlight"
      />
    </div>
  ),
}

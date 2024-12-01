import type { Meta, StoryObj } from '@storybook/react'
import { TabsSection } from './tabs'
import { Card, CardContent, CardHeader, CardTitle } from './card'
import { FeatureCard } from './feature-card'
import { Heart, Users, Trophy, Target, Lightbulb, Globe } from 'lucide-react'

const meta: Meta<typeof TabsSection> = {
  title: 'UI/TabsSection',
  component: TabsSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Tabs section component for organizing content into tabbed interfaces with optional icons and rich content.',
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

type Story = StoryObj<typeof TabsSection>

const defaultItems = [
  {
    title: 'Values',
    icon: <Heart className="h-5 w-5" />,
    content: (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Innovation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We foster a culture of innovation, pushing the boundaries of
              quantum computing to solve complex challenges.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Excellence</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We strive for excellence in everything we do, maintaining the
              highest standards of quality and professionalism.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Integrity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We conduct our business with unwavering integrity, building trust
              through transparency and ethical practices.
            </p>
          </CardContent>
        </Card>
      </div>
    ),
  },
  {
    title: 'Culture',
    icon: <Users className="h-5 w-5" />,
    content: (
      <div className="grid gap-6 md:grid-cols-2">
        <FeatureCard
          title="Collaborative Environment"
          description="Our team thrives in an open, supportive environment that encourages knowledge sharing and mutual growth."
          imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
          linkHref="/culture"
          linkText="Learn about our culture"
        />
        <FeatureCard
          title="Innovation Hub"
          description="Experience a dynamic workspace where creativity and innovation come together to push the boundaries of quantum computing."
          videoUrl="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          videoThumbnail="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80"
          linkHref="/innovation"
          linkText="Explore our innovation hub"
        />
      </div>
    ),
  },
  {
    title: 'Growth',
    icon: <Lightbulb className="h-5 w-5" />,
    content: (
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Learning & Development</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Continuous learning opportunities and professional development
              programs to help you grow.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Career Progression</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Clear career paths and mentorship programs to support your
              professional journey.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Innovation Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Opportunities to work on cutting-edge quantum computing projects
              and research.
            </p>
          </CardContent>
        </Card>
      </div>
    ),
  },
  {
    title: 'Impact',
    icon: <Globe className="h-5 w-5" />,
    content: (
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Global Reach</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>Partnerships with leading research institutions</li>
              <li>International quantum computing projects</li>
              <li>Cross-cultural collaboration opportunities</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Sustainable Innovation</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>Eco-friendly quantum computing solutions</li>
              <li>Responsible technology development</li>
              <li>Community engagement initiatives</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    ),
  },
]

export const Default: Story = {
  args: {
    title: 'Values & Culture',
    subtitle: 'Our Foundation',
    description:
      'Discover the principles that guide us and the culture that defines us as we push the boundaries of quantum computing.',
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

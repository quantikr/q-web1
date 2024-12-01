import * as React from 'react'
import { cn } from '../../lib/utils'
import { Card, CardContent, CardHeader, CardTitle } from './card'

interface TimelineItemProps {
  date: string
  title: string
  description: string
  imageUrl?: string
}

const TimelineItem = ({
  date,
  title,
  description,
  imageUrl,
}: TimelineItemProps) => (
  <div className="relative flex gap-8 pb-12 md:gap-12">
    {/* Line */}
    <div className="absolute left-[19px] top-2 h-full w-px bg-border md:left-1/2 md:-ml-px" />

    {/* Dot */}
    <div className="absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-primary bg-background md:left-1/2 md:-ml-2" />

    {/* Content */}
    <div
      className={cn(
        'flex w-full flex-col gap-4 md:w-1/2',
        'md:odd:pr-16 md:even:ml-auto md:even:pl-16'
      )}
    >
      {/* Date */}
      <div className="ml-8 text-sm font-semibold uppercase tracking-wider text-primary md:ml-0">
        {date}
      </div>

      {/* Card */}
      <Card className="ml-8 transition-shadow hover:shadow-lg md:ml-0">
        {imageUrl && (
          <div className="aspect-video overflow-hidden rounded-t-lg">
            <img
              src={imageUrl}
              alt={title}
              className="h-full w-full object-cover"
            />
          </div>
        )}
        <CardHeader>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </div>
  </div>
)

interface TimelineSectionProps extends React.HTMLAttributes<HTMLElement> {
  title?: string
  subtitle?: string
  description?: string
  items: TimelineItemProps[]
}

const TimelineSection = React.forwardRef<HTMLElement, TimelineSectionProps>(
  ({ className, title, subtitle, description, items, ...props }, ref) => {
    return (
      <section ref={ref} className={cn('py-16 md:py-24', className)} {...props}>
        <div className="container px-4">
          {/* Header */}
          {(title || subtitle || description) && (
            <div className="mx-auto mb-16 max-w-3xl text-center">
              {subtitle && (
                <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary">
                  {subtitle}
                </p>
              )}
              {title && (
                <h2 className="mb-6 text-3xl font-bold tracking-tight text-primary md:text-4xl">
                  {title}
                </h2>
              )}
              {description && (
                <p className="text-lg text-muted-foreground">{description}</p>
              )}
            </div>
          )}

          {/* Timeline */}
          <div className="relative mx-auto max-w-5xl">
            {items.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
    )
  }
)

TimelineSection.displayName = 'TimelineSection'

export { TimelineSection }

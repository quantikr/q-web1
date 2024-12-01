import * as React from 'react'
import { cn } from '../../lib/utils'
import { Button } from './button'
import { ArrowRight } from 'lucide-react'

interface TimelineItem {
  icon?: React.ReactNode
  date?: string
  title: string
  description: string
  details?: string[]
  status?: 'completed' | 'current' | 'upcoming'
  linkHref?: string
  linkText?: string
}

interface SolutionTimelineProps extends React.HTMLAttributes<HTMLElement> {
  items: TimelineItem[]
  title?: string
  subtitle?: string
  description?: string
  layout?: 'vertical' | 'horizontal'
  showDetails?: boolean
  activeStep?: number
}

interface TimelineNodeProps {
  isActive: boolean
  isHorizontal: boolean
  icon?: React.ReactNode
  status?: TimelineItem['status']
}

const TimelineNode: React.FC<TimelineNodeProps> = ({
  isActive,
  isHorizontal,
  icon,
  status,
}) => {
  const getStatusColor = React.useCallback(
    (isActive: boolean, status?: TimelineItem['status']) => {
      if (status === 'completed') return 'bg-primary'
      if (status === 'current') return 'bg-accent'
      if (status === 'upcoming') return 'bg-muted'
      return isActive ? 'bg-primary' : 'bg-muted'
    },
    []
  )

  return (
    <div
      className={cn(
        'absolute w-16 h-16 rounded-full border-4 border-background flex items-center justify-center transition-colors duration-300',
        getStatusColor(isActive, status),
        isHorizontal
          ? 'top-1/2 -translate-y-1/2 -ml-8'
          : 'left-0 md:left-1/2 md:-translate-x-1/2'
      )}
    >
      {icon && (
        <div
          className={cn(
            'h-8 w-8',
            status === 'upcoming'
              ? 'text-muted-foreground'
              : 'text-primary-foreground'
          )}
        >
          {icon}
        </div>
      )}
    </div>
  )
}

function SolutionTimelineComponent(
  {
    items,
    title,
    subtitle,
    description,
    layout = 'vertical',
    showDetails = true,
    activeStep,
    className,
    ...props
  }: SolutionTimelineProps,
  ref: React.ForwardedRef<HTMLElement>
) {
  const [hoveredItem, setHoveredItem] = React.useState<number | null>(null)
  const isHorizontal = layout === 'horizontal'

  // Validate activeStep prop
  React.useEffect(() => {
    if (
      activeStep !== undefined &&
      (activeStep < 0 || activeStep >= items.length)
    ) {
      console.warn('activeStep should be between 0 and items.length - 1')
    }
  }, [activeStep, items.length])

  return (
    <section
      ref={ref}
      className={cn('py-16 md:py-24', className)}
      aria-labelledby="timeline-title"
      role="region"
      {...props}
    >
      <div className="container">
        {/* Header */}
        {(title || subtitle || description) && (
          <div className="mx-auto max-w-3xl text-center mb-16">
            {subtitle && (
              <p className="text-sm font-medium uppercase tracking-wider text-primary mb-4">
                {subtitle}
              </p>
            )}
            {title && (
              <h2
                id="timeline-title"
                className="text-3xl font-bold tracking-tight text-primary md:text-4xl lg:text-5xl mb-6"
              >
                {title}
              </h2>
            )}
            {description && (
              <p className="text-lg text-muted-foreground md:text-xl">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Timeline */}
        <div
          className={cn(
            'relative',
            isHorizontal ? 'flex overflow-x-auto pb-8' : 'space-y-8'
          )}
        >
          {/* Timeline Line */}
          <div
            className={cn(
              'absolute bg-muted',
              isHorizontal
                ? 'left-0 right-8 h-0.5 top-1/2 -translate-y-1/2'
                : 'top-0 bottom-0 w-0.5 left-8 md:left-1/2'
            )}
          />

          {/* Timeline Items */}
          {items.map((item, index) => {
            const isActive =
              activeStep !== undefined ? index <= activeStep : true
            const isHovered = hoveredItem === index

            return (
              <div
                key={index}
                className={cn(
                  'relative',
                  isHorizontal
                    ? 'flex-none w-80 mx-4 first:ml-0 last:mr-0'
                    : 'pl-24 md:pl-0',
                  isHorizontal && index !== items.length - 1 && 'mr-8'
                )}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
                onTouchStart={() => setHoveredItem(index)}
                onTouchEnd={() => setHoveredItem(null)}
              >
                {/* Timeline Node */}
                <TimelineNode
                  isActive={isActive}
                  isHorizontal={isHorizontal}
                  icon={item.icon}
                  status={item.status}
                />

                {/* Content Card */}
                <div
                  className={cn(
                    'relative rounded-lg border bg-card p-6 shadow transition-shadow duration-300',
                    isHovered && 'shadow-lg',
                    isHorizontal
                      ? 'mt-24'
                      : 'md:w-[calc(50%-4rem)] md:even:translate-x-[calc(100%+4rem)]'
                  )}
                >
                  {item.date && (
                    <p className="text-sm font-medium text-muted-foreground mb-2">
                      {item.date}
                    </p>
                  )}
                  <h3 className="text-xl font-semibold tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>

                  {/* Details */}
                  {showDetails && item.details && item.details.length > 0 && (
                    <div
                      className={cn(
                        'mt-4 space-y-2 overflow-hidden transition-all duration-300',
                        isHovered ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      )}
                    >
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        {item.details.map((detail, detailIndex) => (
                          <li key={detailIndex}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Link */}
                  {item.linkHref && (
                    <div className="mt-4">
                      <Button
                        variant="ghost"
                        className="group/btn p-0 text-primary hover:bg-transparent"
                        asChild
                      >
                        <a href={item.linkHref}>
                          <span className="mr-2 underline-offset-4 group-hover/btn:underline">
                            {item.linkText || 'Learn more'}
                          </span>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </a>
                      </Button>
                    </div>
                  )}

                  {/* Border Gradient Effect */}
                  <div className="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-primary/0 via-primary/20 to-accent/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

const SolutionTimeline = React.forwardRef<HTMLElement, SolutionTimelineProps>(
  SolutionTimelineComponent
)

SolutionTimeline.displayName = 'SolutionTimeline'

export { SolutionTimeline }
export type { SolutionTimelineProps, TimelineItem }

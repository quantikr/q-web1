import * as React from 'react'
import { cn } from '../../lib/utils'
import { Card, CardContent } from './card'

interface StatItemProps {
  value: string | number
  label: string
  description?: string
}

const StatItem = ({ value, label, description }: StatItemProps) => (
  <Card className="overflow-hidden transition-shadow hover:shadow-lg">
    <CardContent className="p-6 text-center">
      <div className="mb-2 text-4xl font-bold text-primary md:text-5xl lg:text-6xl">
        {value}
      </div>
      <div className="mb-1 text-sm font-semibold uppercase tracking-wider">
        {label}
      </div>
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
    </CardContent>
  </Card>
)

interface StatsSectionProps extends React.HTMLAttributes<HTMLElement> {
  title?: string
  subtitle?: string
  description?: string
  stats: StatItemProps[]
  variant?: 'default' | 'highlight'
}

const StatsSection = React.forwardRef<HTMLElement, StatsSectionProps>(
  (
    {
      className,
      title,
      subtitle,
      description,
      stats,
      variant = 'default',
      ...props
    },
    ref
  ) => {
    const isHighlight = variant === 'highlight'

    return (
      <section
        ref={ref}
        className={cn(
          'relative py-16 md:py-24',
          isHighlight && 'bg-secondary/30',
          className
        )}
        {...props}
      >
        {/* Background Gradient for Highlight Variant */}
        {isHighlight && (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        )}

        <div className="container relative px-4">
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

          {/* Stats Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <StatItem key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>
    )
  }
)

StatsSection.displayName = 'StatsSection'

export { StatsSection }

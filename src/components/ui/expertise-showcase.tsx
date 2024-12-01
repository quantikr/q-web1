import * as React from 'react'
import { cn } from '../../lib/utils'
import { Button } from './button'
import { ArrowRight } from 'lucide-react'

interface ExpertiseItem {
  icon?: React.ReactNode
  title: string
  description: string
  details?: string[]
  linkHref?: string
  linkText?: string
}

interface ExpertiseShowcaseProps extends React.HTMLAttributes<HTMLElement> {
  title?: string
  subtitle?: string
  description?: string
  items: ExpertiseItem[]
  layout?: 'grid' | 'masonry' | 'carousel'
  columns?: 2 | 3 | 4
  showDetails?: boolean
}

const ExpertiseShowcase = React.forwardRef<HTMLElement, ExpertiseShowcaseProps>(
  (
    {
      className,
      title,
      subtitle,
      description,
      items = [],
      layout = 'grid',
      columns = 3,
      showDetails = true,
      ...props
    },
    ref
  ) => {
    const [activeItem, setActiveItem] = React.useState<number | null>(null)

    const gridCols = {
      2: 'md:grid-cols-2',
      3: 'md:grid-cols-3',
      4: 'md:grid-cols-2 lg:grid-cols-4',
    }

    return (
      <section ref={ref} className={cn('py-16 md:py-24', className)} {...props}>
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
                <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl lg:text-5xl mb-6">
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

          {/* Expertise Grid */}
          <div
            className={cn(
              'grid gap-6',
              layout === 'grid' && gridCols[columns],
              layout === 'masonry' && 'md:columns-2 lg:columns-3 space-y-6',
              layout === 'carousel' &&
                'flex overflow-x-auto snap-x snap-mandatory -mx-4 px-4 pb-6'
            )}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className={cn(
                  'group relative rounded-lg border bg-card text-card-foreground shadow transition-all duration-300 hover:shadow-lg',
                  layout === 'carousel' &&
                    'flex-none w-[85%] md:w-[45%] lg:w-[30%] snap-center mr-6',
                  layout === 'masonry' && 'break-inside-avoid'
                )}
                onMouseEnter={() => setActiveItem(index)}
                onMouseLeave={() => setActiveItem(null)}
              >
                <div className="p-6">
                  {/* Icon */}
                  {item.icon && (
                    <div className="mb-4 text-primary h-12 w-12">
                      {item.icon}
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-xl font-semibold tracking-tight mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground">{item.description}</p>

                  {/* Details */}
                  {showDetails && item.details && item.details.length > 0 && (
                    <div
                      className={cn(
                        'mt-4 space-y-2 overflow-hidden transition-all duration-300',
                        activeItem === index ? 'max-h-96' : 'max-h-0'
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
                </div>

                {/* Border Gradient Effect */}
                <div className="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-primary/0 via-primary/20 to-accent/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
)

ExpertiseShowcase.displayName = 'ExpertiseShowcase'

export { ExpertiseShowcase }
export type { ExpertiseShowcaseProps, ExpertiseItem }

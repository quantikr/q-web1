import * as React from 'react'
import { cn } from '../../lib/utils'
import { Button } from './button'
import { ArrowRight } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './card'

interface ServiceItem {
  icon?: React.ReactNode
  imageUrl?: string
  title: string
  description: string
  linkHref?: string
  linkText?: string
}

interface ServiceGridProps extends React.HTMLAttributes<HTMLElement> {
  title?: string
  subtitle?: string
  description?: string
  services: ServiceItem[]
  columns?: 2 | 3 | 4
  variant?: 'default' | 'compact' | 'featured'
}

const ServiceGrid = React.forwardRef<HTMLElement, ServiceGridProps>(
  (
    {
      className,
      title,
      subtitle,
      description,
      services = [],
      columns = 3,
      variant = 'default',
      ...props
    },
    ref
  ) => {
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

          {/* Services Grid */}
          <div
            className={cn(
              'grid gap-6 md:gap-8',
              gridCols[columns],
              variant === 'compact' && 'gap-4 md:gap-6'
            )}
          >
            {services.map((service, index) => (
              <Card
                key={index}
                className={cn(
                  'group relative overflow-hidden transition-all duration-300',
                  variant === 'default' && 'hover:shadow-lg',
                  variant === 'featured' &&
                    index === 0 &&
                    'md:col-span-2 md:row-span-2'
                )}
              >
                <CardHeader
                  className={cn(
                    'relative',
                    variant === 'compact' ? 'p-4' : 'p-6'
                  )}
                >
                  {/* Icon or Image */}
                  {(service.icon || service.imageUrl) && (
                    <div className="mb-4">
                      {service.icon ? (
                        <div className="text-primary h-10 w-10">
                          {service.icon}
                        </div>
                      ) : service.imageUrl ? (
                        <div className="relative aspect-square w-16 overflow-hidden rounded-lg">
                          <img
                            src={service.imageUrl}
                            alt=""
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ) : null}
                    </div>
                  )}

                  <CardTitle
                    className={cn(
                      'text-xl font-bold tracking-tight text-foreground',
                      variant === 'featured' && index === 0 && 'md:text-2xl'
                    )}
                  >
                    {service.title}
                  </CardTitle>
                  <CardDescription
                    className={cn(
                      'text-muted-foreground',
                      variant === 'featured' && index === 0 && 'md:text-lg'
                    )}
                  >
                    {service.description}
                  </CardDescription>
                </CardHeader>

                {service.linkHref && (
                  <CardFooter
                    className={cn(
                      variant === 'compact' ? 'p-4' : 'p-6',
                      'pt-0'
                    )}
                  >
                    <Button
                      variant="ghost"
                      className="group/btn p-0 text-primary hover:bg-transparent"
                      asChild
                    >
                      <a href={service.linkHref}>
                        <span className="mr-2 underline-offset-4 group-hover/btn:underline">
                          {service.linkText || 'Learn more'}
                        </span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </a>
                    </Button>
                  </CardFooter>
                )}

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-primary/0 via-primary/20 to-accent/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
  }
)

ServiceGrid.displayName = 'ServiceGrid'

export { ServiceGrid }
export type { ServiceItem, ServiceGridProps }

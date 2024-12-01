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

interface BusinessSectionProps extends React.HTMLAttributes<HTMLElement> {
  title: string
  subtitle?: string
  description?: string
  items?: {
    title: string
    description: string
    imageUrl?: string
    linkHref?: string
    linkText?: string
  }[]
  ctaText?: string
  ctaHref?: string
}

const BusinessSection = React.forwardRef<HTMLElement, BusinessSectionProps>(
  (
    {
      className,
      title,
      subtitle,
      description,
      items = [],
      ctaText,
      ctaHref,
      ...props
    },
    ref
  ) => {
    return (
      <section ref={ref} className={cn('py-16 md:py-24', className)} {...props}>
        <div className="container px-4">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            {subtitle && (
              <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary">
                {subtitle}
              </p>
            )}
            <h1 className="mb-6 text-3xl font-bold tracking-tight text-primary md:text-4xl lg:text-5xl">
              {title}
            </h1>
            {description && (
              <p className="mb-12 text-lg text-muted-foreground md:text-xl">
                {description}
              </p>
            )}
          </div>

          {/* Grid Items */}
          {items.length > 0 && (
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {items.map((item, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden transition-shadow hover:shadow-lg"
                >
                  {/* Image */}
                  {item.imageUrl && (
                    <div className="relative aspect-[3/2] overflow-hidden">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                  )}

                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {item.description}
                    </CardDescription>
                  </CardHeader>

                  {item.linkHref && (
                    <CardFooter>
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
                    </CardFooter>
                  )}

                  {/* Border Gradient Effect */}
                  <div className="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-primary/0 via-primary/20 to-accent/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </Card>
              ))}
            </div>
          )}

          {/* CTA Button */}
          {ctaText && ctaHref && (
            <div className="mt-16 text-center">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <a href={ctaHref}>
                  <span>{ctaText}</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          )}
        </div>
      </section>
    )
  }
)

BusinessSection.displayName = 'BusinessSection'

export { BusinessSection }

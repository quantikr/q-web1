import * as React from 'react'
import { cn } from '../../lib/utils'
import { Button } from './button'
import { ArrowRight } from 'lucide-react'

interface ContentSectionProps extends React.HTMLAttributes<HTMLElement> {
  title: string
  subtitle?: string
  description: string
  imageUrl?: string
  imagePosition?: 'left' | 'right'
  ctaText?: string
  ctaHref?: string
  variant?: 'default' | 'highlight'
}

const ContentSection = React.forwardRef<HTMLElement, ContentSectionProps>(
  (
    {
      className,
      title,
      subtitle,
      description,
      imageUrl,
      imagePosition = 'right',
      ctaText,
      ctaHref,
      variant = 'default',
      ...props
    },
    ref
  ) => {
    const isHighlight = variant === 'highlight'
    const hasImage = Boolean(imageUrl)

    return (
      <section
        ref={ref}
        className={cn(
          'relative overflow-hidden py-16 md:py-24',
          isHighlight && 'bg-secondary/30',
          className
        )}
        {...props}
      >
        {/* Background Gradient for Highlight Variant */}
        {isHighlight && (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        )}

        <div className="container relative">
          <div
            className={cn(
              'grid gap-8 md:grid-cols-2 md:gap-12',
              !hasImage && 'md:grid-cols-1'
            )}
          >
            {/* Content */}
            <div
              className={cn(
                'flex flex-col justify-center space-y-6',
                imagePosition === 'left' && hasImage
                  ? 'md:order-2'
                  : 'md:order-1'
              )}
            >
              {subtitle && (
                <p className="text-sm font-medium uppercase tracking-wider text-primary">
                  {subtitle}
                </p>
              )}
              <h2
                className={cn(
                  'text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl',
                  isHighlight ? 'text-primary' : 'text-foreground'
                )}
              >
                {title}
              </h2>
              <p className="text-lg text-muted-foreground md:text-xl">
                {description}
              </p>
              {ctaText && ctaHref && (
                <div className="pt-4">
                  <Button
                    asChild
                    variant={isHighlight ? 'default' : 'outline'}
                    className={cn(
                      'group gap-2',
                      isHighlight
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                    )}
                  >
                    <a href={ctaHref}>
                      {ctaText}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>
              )}
            </div>

            {/* Image */}
            {hasImage && (
              <div
                className={cn(
                  'relative aspect-video overflow-hidden rounded-lg md:aspect-square',
                  imagePosition === 'left' ? 'md:order-1' : 'md:order-2'
                )}
              >
                <img
                  src={imageUrl}
                  alt={title}
                  className="h-full w-full object-cover"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                {/* Border Gradient */}
                <div className="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-primary/20 via-primary/10 to-accent/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
)

ContentSection.displayName = 'ContentSection'

export { ContentSection }

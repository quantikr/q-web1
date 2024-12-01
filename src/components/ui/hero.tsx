import * as React from 'react'
import { cn } from '../../lib/utils'
import { Button } from './button'

interface HeroProps extends React.HTMLAttributes<HTMLElement> {
  title: string
  description: string
  ctaText: string
  onCtaClick?: () => void
  backgroundImage?: string
}

const Hero = React.forwardRef<HTMLElement, HeroProps>(
  (
    {
      className,
      title,
      description,
      ctaText,
      onCtaClick,
      backgroundImage,
      ...props
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          'relative min-h-[600px] w-full overflow-hidden bg-background',
          className
        )}
        {...props}
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {backgroundImage && (
            <img
              src={backgroundImage}
              alt=""
              className="h-full w-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/50" />

          {/* Geometric Shape */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -right-1/4 top-1/2 h-[800px] w-[800px] -translate-y-1/2 transform">
              <div className="absolute inset-0 border-[3px] border-primary/20 rotate-45" />
              <div className="absolute inset-2 border-[3px] border-primary/40 rotate-45" />
              <div className="absolute inset-4 border-[3px] border-primary/60 rotate-45" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container relative z-10 flex h-full min-h-[600px] items-center">
          <div className="max-w-2xl space-y-8 py-20">
            <h1 className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              {description}
            </p>
            <Button
              onClick={onCtaClick}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {ctaText}
            </Button>
          </div>
        </div>
      </section>
    )
  }
)

Hero.displayName = 'Hero'

export { Hero }

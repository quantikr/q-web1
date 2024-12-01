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

interface Metric {
  value: string
  label: string
}

interface CaseStudyCardProps extends React.HTMLAttributes<HTMLDivElement> {
  client: string
  clientLogo?: string
  industry?: string
  title: string
  challenge: string
  solution: string
  resultText?: string
  metrics?: Metric[]
  imageUrl?: string
  linkHref?: string
  linkText?: string
  variant?: 'default' | 'featured' | 'minimal'
}

const CaseStudyCard = React.forwardRef<HTMLDivElement, CaseStudyCardProps>(
  (
    {
      className,
      client,
      clientLogo,
      industry,
      title,
      challenge,
      solution,
      resultText,
      metrics,
      imageUrl,
      linkHref,
      linkText = 'Read full case study',
      variant = 'default',
      ...props
    },
    ref
  ) => {
    const isFeatured = variant === 'featured'
    const isMinimal = variant === 'minimal'

    return (
      <Card
        ref={ref}
        className={cn(
          'group relative overflow-hidden transition-shadow hover:shadow-lg',
          isFeatured && 'md:grid md:grid-cols-2 md:gap-6',
          className
        )}
        {...props}
      >
        {/* Image Section */}
        {imageUrl && !isMinimal && (
          <div
            className={cn(
              'relative aspect-video overflow-hidden',
              isFeatured && 'md:aspect-auto md:h-full'
            )}
          >
            <img
              src={imageUrl}
              alt={`${client} case study`}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        )}

        <div className={cn(isFeatured && 'md:p-6')}>
          {/* Header */}
          <CardHeader
            className={cn('space-y-4', isMinimal && 'p-4', !isMinimal && 'p-6')}
          >
            {/* Client Info */}
            <div className="flex items-center justify-between">
              {clientLogo ? (
                <img
                  src={clientLogo}
                  alt={client}
                  className="h-8 object-contain"
                />
              ) : (
                <p className="text-lg font-semibold text-primary">{client}</p>
              )}
              {industry && (
                <span className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                  {industry}
                </span>
              )}
            </div>

            <CardTitle
              className={cn(
                'text-2xl tracking-tight',
                isFeatured && 'md:text-3xl'
              )}
            >
              {title}
            </CardTitle>
          </CardHeader>

          {/* Content */}
          <CardContent
            className={cn(
              'space-y-4',
              isMinimal && 'p-4 pt-0',
              !isMinimal && 'p-6 pt-0'
            )}
          >
            {!isMinimal && (
              <>
                <div>
                  <h4 className="font-semibold text-foreground">Challenge</h4>
                  <p className="mt-1 text-muted-foreground">{challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Solution</h4>
                  <p className="mt-1 text-muted-foreground">{solution}</p>
                </div>
              </>
            )}

            {resultText && !isMinimal && (
              <div>
                <h4 className="font-semibold text-foreground">Results</h4>
                <p className="mt-1 text-muted-foreground">{resultText}</p>
              </div>
            )}

            {/* Metrics Grid */}
            {metrics && metrics.length > 0 && (
              <div
                className={cn(
                  'grid gap-4',
                  metrics.length === 2 && 'grid-cols-2',
                  metrics.length === 3 && 'grid-cols-3',
                  metrics.length >= 4 && 'grid-cols-2 md:grid-cols-4'
                )}
              >
                {metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="rounded-lg bg-secondary/50 p-3 text-center"
                  >
                    <div className="text-2xl font-bold text-primary">
                      {metric.value}
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {isMinimal && (
              <CardDescription className="text-muted-foreground">
                {challenge}
              </CardDescription>
            )}
          </CardContent>

          {/* Footer */}
          {linkHref && (
            <CardFooter
              className={cn(isMinimal && 'p-4', !isMinimal && 'p-6', 'pt-0')}
            >
              <Button
                variant="ghost"
                className="group/btn p-0 text-primary hover:bg-transparent"
                asChild
              >
                <a href={linkHref}>
                  <span className="mr-2 underline-offset-4 group-hover/btn:underline">
                    {linkText}
                  </span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </Button>
            </CardFooter>
          )}
        </div>

        {/* Border Gradient Effect */}
        <div className="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-primary/0 via-primary/20 to-accent/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </Card>
    )
  }
)

CaseStudyCard.displayName = 'CaseStudyCard'

export { CaseStudyCard }
export type { CaseStudyCardProps, Metric }

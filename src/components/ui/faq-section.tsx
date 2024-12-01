import * as React from 'react'
import { cn } from '../../lib/utils'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './accordion'

interface FAQItem {
  question: string
  answer: string | React.ReactNode
}

interface FAQSectionProps extends React.HTMLAttributes<HTMLElement> {
  title?: string
  subtitle?: string
  description?: string
  items: FAQItem[]
  variant?: 'default' | 'highlight'
}

const FAQSection = React.forwardRef<HTMLElement, FAQSectionProps>(
  (
    {
      className,
      title,
      subtitle,
      description,
      items,
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
          'py-16 md:py-24',
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

          {/* FAQ Accordion */}
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {items.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    )
  }
)

FAQSection.displayName = 'FAQSection'

export { FAQSection }
export type { FAQItem }

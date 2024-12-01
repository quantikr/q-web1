import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { cn } from '../../lib/utils'

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'inline-flex min-h-[56px] flex-wrap items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground',
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow sm:px-6 sm:py-3',
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:mt-8',
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

// Enhanced Tabs Section Component
interface TabItem {
  title: string
  content: React.ReactNode
  icon?: React.ReactNode
}

interface TabsSectionProps extends React.HTMLAttributes<HTMLElement> {
  title?: string
  subtitle?: string
  description?: string
  items: TabItem[]
  defaultTab?: string
  variant?: 'default' | 'highlight'
}

const TabsSection = React.forwardRef<HTMLElement, TabsSectionProps>(
  (
    {
      className,
      title,
      subtitle,
      description,
      items,
      defaultTab,
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
            <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-16">
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

          {/* Tabs */}
          <div className="mx-auto max-w-5xl">
            <Tabs defaultValue={defaultTab || items[0]?.title.toLowerCase()}>
              <TabsList className="mx-auto mb-6 flex w-full flex-wrap justify-center gap-1 sm:mb-8 sm:gap-2">
                {items.map(item => (
                  <TabsTrigger
                    key={item.title}
                    value={item.title.toLowerCase()}
                    className="flex items-center gap-1 sm:gap-2"
                  >
                    {item.icon}
                    {item.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              {items.map(item => (
                <TabsContent
                  key={item.title}
                  value={item.title.toLowerCase()}
                  className="focus-visible:outline-none focus-visible:ring-0"
                >
                  {item.content}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>
    )
  }
)

TabsSection.displayName = 'TabsSection'

export { Tabs, TabsList, TabsTrigger, TabsContent, TabsSection }
export type { TabItem }

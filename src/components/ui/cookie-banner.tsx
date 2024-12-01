import * as React from 'react'
import { cn } from '../../lib/utils'
import { Button } from './button'
import { X } from 'lucide-react'

interface CookieBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  onAccept?: () => void
  onSettings?: () => void
  onClose?: () => void
  policyUrl?: string
}

const CookieBanner = React.forwardRef<HTMLDivElement, CookieBannerProps>(
  (
    {
      className,
      onAccept,
      onSettings,
      onClose,
      policyUrl = '/cookie-policy',
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
          className
        )}
        {...props}
      >
        <div className="container flex flex-col gap-4 p-4 md:flex-row md:items-center md:justify-between md:gap-8">
          <div className="flex-1 text-sm text-muted-foreground">
            <p>
              By clicking &ldquo;Accept All Cookies&rdquo;, you agree to the
              storing of cookies on your device to enhance site navigation,
              analyse site usage, and assist in our marketing efforts.{' '}
              <a
                href={policyUrl}
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                Read more about our Cookie Policy
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <Button
              variant="outline"
              onClick={onSettings}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Cookie settings
            </Button>
            <Button
              onClick={onAccept}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Accept all cookies
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute right-2 top-2 h-8 w-8 rounded-sm opacity-70 hover:opacity-100 sm:hidden"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
      </div>
    )
  }
)

CookieBanner.displayName = 'CookieBanner'

export { CookieBanner }

import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
      },
      size: {
        small: 'h-8 rounded-md px-3 text-xs',
        medium: 'h-9 px-4 py-2',
        large: 'h-10 rounded-md px-8',
      },
    },
    defaultVariants: {
      variant: 'secondary',
      size: 'medium',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Is this the principal call to action on the page? */
  primary?: boolean
  /** Button contents */
  label: string
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large'
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = 'medium',
  label,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={cn(
        buttonVariants({
          variant: primary ? 'primary' : 'secondary',
          size,
          className,
        })
      )}
      {...props}
    >
      {label}
    </button>
  )
}

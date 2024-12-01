import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Tailwind CSS animations following shadcn's pattern
export const animations = {
  // Accordion animations
  'accordion-down': 'accordion-down 0.2s ease-out',
  'accordion-up': 'accordion-up 0.2s ease-out',

  // Fade animations
  'fade-in': 'fade-in 0.2s ease-out',
  'fade-out': 'fade-out 0.2s ease-out',

  // Slide animations
  'slide-in-right': 'slide-in-right 0.2s ease-out',
  'slide-out-right': 'slide-out-right 0.2s ease-out',
  'slide-in-left': 'slide-in-left 0.2s ease-out',
  'slide-out-left': 'slide-out-left 0.2s ease-out',
  'slide-in-up': 'slide-in-up 0.2s ease-out',
  'slide-out-up': 'slide-out-up 0.2s ease-out',
  'slide-in-down': 'slide-in-down 0.2s ease-out',
  'slide-out-down': 'slide-out-down 0.2s ease-out',
}

// Keyframes for animations
export const keyframes = {
  'accordion-down': {
    from: { height: '0' },
    to: { height: 'var(--radix-accordion-content-height)' },
  },
  'accordion-up': {
    from: { height: 'var(--radix-accordion-content-height)' },
    to: { height: '0' },
  },
  'fade-in': {
    from: { opacity: '0' },
    to: { opacity: '1' },
  },
  'fade-out': {
    from: { opacity: '1' },
    to: { opacity: '0' },
  },
  'slide-in-right': {
    from: { transform: 'translateX(100%)' },
    to: { transform: 'translateX(0)' },
  },
  'slide-out-right': {
    from: { transform: 'translateX(0)' },
    to: { transform: 'translateX(100%)' },
  },
  'slide-in-left': {
    from: { transform: 'translateX(-100%)' },
    to: { transform: 'translateX(0)' },
  },
  'slide-out-left': {
    from: { transform: 'translateX(0)' },
    to: { transform: 'translateX(-100%)' },
  },
  'slide-in-up': {
    from: { transform: 'translateY(100%)' },
    to: { transform: 'translateY(0)' },
  },
  'slide-out-up': {
    from: { transform: 'translateY(0)' },
    to: { transform: 'translateY(-100%)' },
  },
  'slide-in-down': {
    from: { transform: 'translateY(-100%)' },
    to: { transform: 'translateY(0)' },
  },
  'slide-out-down': {
    from: { transform: 'translateY(0)' },
    to: { transform: 'translateY(100%)' },
  },
}

// Helper function to merge class names
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const animations = {
  // Accordion animations
  'accordion-down': 'accordion-down 0.2s ease-out',
  'accordion-up': 'accordion-up 0.2s ease-out',

  // Fade animations
  'fade-in': 'fade-in 0.5s ease-out',
  'fade-out': 'fade-out 0.5s ease-out',

  // Slide animations
  'slide-in-right': 'slide-in-right 0.3s ease-out',
  'slide-out-right': 'slide-out-right 0.3s ease-out',
  'slide-in-left': 'slide-in-left 0.3s ease-out',
  'slide-out-left': 'slide-out-left 0.3s ease-out',
  'slide-in-up': 'slide-in-up 0.3s ease-out',
  'slide-out-up': 'slide-out-up 0.3s ease-out',
  'slide-in-down': 'slide-in-down 0.3s ease-out',
  'slide-out-down': 'slide-out-down 0.3s ease-out',
}

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
    '0%': { opacity: '0', transform: 'translateY(10px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },
  'fade-out': {
    '0%': { opacity: '1', transform: 'translateY(0)' },
    '100%': { opacity: '0', transform: 'translateY(10px)' },
  },
  'slide-in-right': {
    '0%': { transform: 'translateX(100%)' },
    '100%': { transform: 'translateX(0)' },
  },
  'slide-out-right': {
    '0%': { transform: 'translateX(0)' },
    '100%': { transform: 'translateX(100%)' },
  },
  'slide-in-left': {
    '0%': { transform: 'translateX(-100%)' },
    '100%': { transform: 'translateX(0)' },
  },
  'slide-out-left': {
    '0%': { transform: 'translateX(0)' },
    '100%': { transform: 'translateX(-100%)' },
  },
  'slide-in-up': {
    '0%': { transform: 'translateY(100%)' },
    '100%': { transform: 'translateY(0)' },
  },
  'slide-out-up': {
    '0%': { transform: 'translateY(0)' },
    '100%': { transform: 'translateY(-100%)' },
  },
  'slide-in-down': {
    '0%': { transform: 'translateY(-100%)' },
    '100%': { transform: 'translateY(0)' },
  },
  'slide-out-down': {
    '0%': { transform: 'translateY(0)' },
    '100%': { transform: 'translateY(100%)' },
  },
}

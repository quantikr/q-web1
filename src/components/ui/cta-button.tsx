'use client'

import React from 'react'

interface CtaButtonProps {
  children: React.ReactNode
  className?: string
}

export function CtaButton({ children, className = '' }: CtaButtonProps) {
  return (
    <button
      onClick={() => console.log('CTA clicked')}
      className={`btn-accent ${className}`}
    >
      {children}
    </button>
  )
}

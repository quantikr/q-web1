'use client'

import React from 'react'
import { CtaButton } from './cta-button'

interface HeroProps {
  title: string
  subtitle: string
  ctaText?: string
}

export function Hero({ title, subtitle, ctaText = 'Learn more' }: HeroProps) {
  return (
    <div className="relative overflow-hidden bg-background">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-0 -translate-y-1/4 translate-x-1/4 transform">
          <div className="h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        </div>
        <div className="absolute left-0 bottom-0 translate-y-1/4 -translate-x-1/4 transform">
          <div className="h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        </div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="flex min-h-screen-80 flex-col items-center justify-center py-20 text-center">
          <h1 className="animate-fade-in max-w-4xl bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
            {title}
          </h1>
          <p className="animate-fade-in mt-6 max-w-2xl text-xl text-muted-foreground [animation-delay:200ms]">
            {subtitle}
          </p>
          {ctaText && (
            <CtaButton className="animate-fade-in mt-10 px-8 py-3 text-base [animation-delay:400ms]">
              {ctaText}
            </CtaButton>
          )}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
    </div>
  )
}

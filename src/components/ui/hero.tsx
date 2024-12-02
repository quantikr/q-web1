import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '../../lib/utils'

interface HeroProps extends React.HTMLAttributes<HTMLElement> {
  title: string
  subtitle?: string
  description: string
  ctaText: string
  backgroundImage?: string
}

const Hero = React.forwardRef<HTMLElement, HeroProps>(
  (
    {
      className,
      title,
      subtitle,
      description,
      ctaText,
      backgroundImage,
      ...props
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          'relative min-h-[600px] w-full overflow-hidden bg-gradient-to-br from-[#1a2942] to-[#121b2b]',
          className
        )}
        {...props}
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {backgroundImage && (
            <Image
              src={backgroundImage}
              alt=""
              fill
              className="object-cover"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2942]/95 to-[#1a2942]/50" />

          {/* Geometric Lines */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    'absolute w-[2px] animate-pulse',
                    'bg-gradient-to-b from-blue-400/20 via-purple-400/20 to-transparent',
                    'h-[300px] top-0',
                    i % 2 === 0 ? 'animate-pulse-slow' : 'animate-pulse-slower'
                  )}
                  style={{
                    left: `${(i + 1) * 8}%`,
                    height: `${Math.random() * 300 + 200}px`,
                    animationDelay: `${i * 0.2}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container relative z-10 flex h-full min-h-[600px] items-center">
          <div className="max-w-2xl space-y-6 py-20">
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              {title}
            </h1>
            {subtitle && (
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-white md:text-4xl">
                  {subtitle.split(' ')[0]} {/* Driving */}
                  <span className="block">{subtitle.split(' ')[1]}</span>{' '}
                  {/* Change */}
                </h2>
                <h2 className="text-3xl font-bold text-white md:text-4xl">
                  {subtitle.split(' ')[2]} {/* Delivering */}
                  <span className="block">{subtitle.split(' ')[3]}</span>{' '}
                  {/* Value */}
                </h2>
              </div>
            )}
            <p className="text-lg text-gray-300 md:text-xl">{description}</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-blue-500 px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {ctaText}
            </Link>
          </div>
        </div>
      </section>
    )
  }
)

Hero.displayName = 'Hero'

export { Hero }

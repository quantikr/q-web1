import * as React from 'react'
import { cn } from '../../lib/utils'
import { Button } from './button'
import { ArrowRight, Play } from 'lucide-react'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './card'

interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  imageUrl?: string
  videoUrl?: string
  videoThumbnail?: string
  linkHref: string
  linkText?: string
  variant?: 'default' | 'large'
}

const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  (
    {
      className,
      title,
      description,
      imageUrl,
      videoUrl,
      videoThumbnail,
      linkHref,
      linkText = 'Learn more',
      variant = 'default',
      ...props
    },
    ref
  ) => {
    const [isPlaying, setIsPlaying] = React.useState(false)
    const videoRef = React.useRef<HTMLVideoElement>(null)

    const handlePlayClick = () => {
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause()
        } else {
          videoRef.current.play()
        }
        setIsPlaying(!isPlaying)
      }
    }

    const handleVideoEnd = () => {
      setIsPlaying(false)
      if (videoRef.current) {
        videoRef.current.currentTime = 0
      }
    }

    return (
      <Card
        ref={ref}
        className={cn(
          'group relative overflow-hidden transition-shadow hover:shadow-lg',
          variant === 'large' ? 'md:p-2' : 'p-2',
          className
        )}
        {...props}
      >
        {/* Media Container */}
        <div
          className={cn(
            'relative overflow-hidden rounded',
            variant === 'large' ? 'aspect-[2/1]' : 'aspect-[3/2]'
          )}
        >
          {videoUrl ? (
            <>
              {/* Video Thumbnail */}
              {!isPlaying && (
                <div className="absolute inset-0 z-10">
                  <img
                    src={videoThumbnail || imageUrl}
                    alt={title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-16 w-16 rounded-full border-2 border-primary bg-background/50 text-primary backdrop-blur-sm transition-transform hover:scale-110"
                      onClick={handlePlayClick}
                    >
                      <Play className="h-8 w-8" />
                      <span className="sr-only">Play video</span>
                    </Button>
                  </div>
                </div>
              )}
              {/* Video Player */}
              <video
                ref={videoRef}
                src={videoUrl}
                className={cn(
                  'h-full w-full object-cover',
                  !isPlaying && 'invisible'
                )}
                controls={isPlaying}
                onEnded={handleVideoEnd}
                playsInline
              />
            </>
          ) : imageUrl ? (
            <img
              src={imageUrl}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : null}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        {/* Content */}
        <CardHeader
          className={cn('space-y-2', variant === 'large' ? 'md:p-4' : 'p-2')}
        >
          <CardTitle
            className={cn(
              'tracking-tight text-primary',
              variant === 'large' ? 'text-2xl md:text-3xl' : 'text-xl'
            )}
          >
            {title}
          </CardTitle>
          <CardDescription
            className={cn(
              'text-muted-foreground',
              variant === 'large' ? 'text-lg' : 'text-base'
            )}
          >
            {description}
          </CardDescription>
        </CardHeader>

        <CardFooter className="p-2">
          <Link href={linkHref}>
            <Button
              variant="ghost"
              className="group/btn p-0 text-primary hover:bg-transparent"
            >
              <span className="mr-2 underline-offset-4 group-hover/btn:underline">
                {linkText}
              </span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </Link>
        </CardFooter>

        {/* Border Gradient Effect */}
        <div className="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-primary/0 via-primary/20 to-accent/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </Card>
    )
  }
)

FeatureCard.displayName = 'FeatureCard'

export { FeatureCard }

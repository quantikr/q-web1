import * as React from 'react'
import { cn } from '../../lib/utils'
import { Button } from './button'
import { Search, Menu } from 'lucide-react'
import Link from 'next/link'

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

const Header = React.forwardRef<HTMLElement, HeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <header
        ref={ref}
        className={cn(
          'w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
          className
        )}
        {...props}
      >
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Quantikr
            </span>
          </Link>

          {/* Desktop Navigation - hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/solutions"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Solutions
            </Link>
            <Link
              href="/products"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Products
            </Link>
            <Link
              href="/research"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Research
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </nav>

          {/* Search and Menu buttons */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-transparent hover:text-primary"
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-transparent hover:text-primary"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
      </header>
    )
  }
)

Header.displayName = 'Header'

export { Header }

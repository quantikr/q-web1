'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './navigation-menu'
import { cn } from '@/lib/utils'
import { Button } from './button'
import { ChevronRight } from 'lucide-react'

interface MenuItem {
  title: string
  href?: string
  description?: string
  featured?: boolean
  items?: {
    title: string
    href: string
    description?: string
    icon?: React.ReactNode
  }[]
}

interface MegaMenuProps {
  items: MenuItem[]
  className?: string
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'

export function MegaMenu({ items, className }: MegaMenuProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div className={cn('relative w-full', className)}>
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <Button
          variant="ghost"
          className="w-full justify-between"
          onClick={() => setIsOpen(!isOpen)}
        >
          Menu
          <ChevronRight
            className={cn(
              'h-4 w-4 transition-transform duration-200',
              isOpen && 'rotate-90'
            )}
          />
        </Button>
        {/* Mobile Menu Content */}
        {isOpen && (
          <div className="absolute left-0 right-0 z-50 mt-2 space-y-2 rounded-md border bg-popover p-4 shadow-lg">
            {items.map((item, index) => (
              <div key={index} className="space-y-3">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="block text-sm font-medium text-foreground hover:text-primary"
                  >
                    {item.title}
                  </Link>
                ) : (
                  <div className="text-sm font-medium text-foreground">
                    {item.title}
                  </div>
                )}
                {item.items && (
                  <div className="ml-4 space-y-2">
                    {item.items.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className="block text-sm text-muted-foreground hover:text-primary"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Navigation Menu */}
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          {items.map((item, index) => (
            <NavigationMenuItem key={index}>
              {item.items ? (
                <>
                  <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[800px] grid-cols-[1fr_1fr] gap-3 p-4">
                      <div className="col-span-1">
                        {item.description && (
                          <div className="mb-4 max-w-[320px]">
                            <h3 className="mb-2 text-lg font-medium">
                              {item.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                        )}
                        <ul className="grid grid-cols-1 gap-3">
                          {item.items
                            .filter(subItem => !subItem.description)
                            .map((subItem, subIndex) => (
                              <ListItem
                                key={subIndex}
                                title={subItem.title}
                                href={subItem.href}
                              >
                                {subItem.description}
                              </ListItem>
                            ))}
                        </ul>
                      </div>
                      {item.items.some(subItem => subItem.description) && (
                        <div className="col-span-1 grid grid-cols-1 gap-3">
                          {item.items
                            .filter(subItem => subItem.description)
                            .map((subItem, subIndex) => (
                              <div
                                key={subIndex}
                                className="group relative overflow-hidden rounded-md border p-4 hover:border-primary"
                              >
                                {subItem.icon && (
                                  <div className="mb-2 text-primary">
                                    {subItem.icon}
                                  </div>
                                )}
                                <h4 className="mb-1 text-sm font-medium">
                                  {subItem.title}
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                  {subItem.description}
                                </p>
                                <Link
                                  href={subItem.href}
                                  className="absolute inset-0"
                                >
                                  <span className="sr-only">
                                    Learn more about {subItem.title}
                                  </span>
                                </Link>
                              </div>
                            ))}
                        </div>
                      )}
                    </div>
                  </NavigationMenuContent>
                </>
              ) : (
                <Link href={item.href || '#'} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      'group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'
                    )}
                  >
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

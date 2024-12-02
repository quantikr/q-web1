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
  navigationMenuTriggerStyle,
} from './navigation-menu'
import { cn } from '../../lib/utils'
import { Button } from './button'
import { Menu, X } from 'lucide-react'

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

export function MegaMenu({ items, className }: MegaMenuProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <div className={cn('relative', className)}>
      {/* Desktop Navigation Menu */}
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          {items.map((item, index) => (
            <NavigationMenuItem key={index}>
              {item.items ? (
                <>
                  <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="fixed inset-0 top-full h-[100vh] w-screen bg-background/95 backdrop-blur-sm" />
                    <div className="relative border-t bg-background shadow-lg">
                      <div className="mx-auto w-full max-w-7xl px-8">
                        <div className="grid gap-8 py-8">
                          <div>
                            <h3 className="text-lg font-medium text-primary">
                              {item.title}
                            </h3>
                            {item.description && (
                              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                {item.description}
                              </p>
                            )}
                          </div>
                          <div className="grid grid-cols-4 gap-6">
                            {item.items.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                href={subItem.href}
                                className="group block space-y-2 rounded-lg p-4 transition-colors hover:bg-accent"
                              >
                                <div className="text-sm font-medium leading-none group-hover:text-accent-foreground">
                                  {subItem.title}
                                </div>
                                {subItem.description && (
                                  <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                                    {subItem.description}
                                  </p>
                                )}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </>
              ) : (
                <Link href={item.href || '#'} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Menu */}
      <div className="flex md:hidden">
        <Button
          variant="ghost"
          size="icon"
          className="relative z-[60]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>

        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div className="fixed inset-0 top-0 z-[50] bg-background/80 backdrop-blur-sm" />

            {/* Menu Content */}
            <div className="fixed inset-x-0 top-16 z-[55] h-[calc(100vh-4rem)] overflow-y-auto bg-background">
              <div className="container py-6">
                <nav className="space-y-6">
                  {items.map((item, index) => (
                    <div key={index} className="space-y-3">
                      <div className="font-medium text-lg text-foreground">
                        {item.title}
                      </div>
                      {item.items && (
                        <div className="grid gap-2 pl-4">
                          {item.items.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.href}
                              className="block p-2 text-sm text-muted-foreground hover:text-primary hover:bg-accent rounded-md"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <div className="font-medium">{subItem.title}</div>
                              {subItem.description && (
                                <p className="text-sm text-muted-foreground mt-0.5 line-clamp-2">
                                  {subItem.description}
                                </p>
                              )}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AuraWordmark } from './logo'

const links = [
  { label: 'Platform', href: '#solution' },
  { label: 'Revenue Engine', href: '#framework' },
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Pricing', href: '#pricing' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass border-b border-border/60'
          : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" aria-label="AURA Genesis home">
          <AuraWordmark />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button
            asChild
            variant="ghost"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            <a href="#demo">Watch Demo</a>
          </Button>
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <a href="#contact">Request Private Demo</a>
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-md text-foreground md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="glass border-t border-border/60 md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a href="#contact" onClick={() => setOpen(false)}>
                Request Private Demo
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

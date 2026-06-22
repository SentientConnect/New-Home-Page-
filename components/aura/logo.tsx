import { cn } from '@/lib/utils'

export function AuraMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={cn('size-8', className)}
    >
      <defs>
        <linearGradient id="auraGold" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="oklch(0.92 0.07 90)" />
          <stop offset="55%" stopColor="oklch(0.78 0.13 85)" />
          <stop offset="100%" stopColor="oklch(0.6 0.1 78)" />
        </linearGradient>
      </defs>
      <circle
        cx="24"
        cy="24"
        r="21"
        stroke="url(#auraGold)"
        strokeWidth="1.2"
        opacity="0.5"
      />
      <circle
        cx="24"
        cy="24"
        r="14"
        stroke="url(#auraGold)"
        strokeWidth="1.2"
        opacity="0.8"
      />
      <path
        d="M24 5 L41 38 H7 Z"
        stroke="url(#auraGold)"
        strokeWidth="1.4"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="24" cy="24" r="3.4" fill="url(#auraGold)" />
    </svg>
  )
}

export function AuraWordmark({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <AuraMark className="size-7" />
      <span className="text-lg font-semibold tracking-tight text-foreground">
        AURA <span className="text-gold">Genesis</span>
        <sup className="ml-0.5 text-[0.5rem] text-muted-foreground">™</sup>
      </span>
    </div>
  )
}

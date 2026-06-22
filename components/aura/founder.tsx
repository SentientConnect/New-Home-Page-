import { AuraMark } from './logo'

export function Founder() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/50 p-8 sm:p-12">
          <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-primary/10 blur-3xl" />
          <AuraMark className="size-10 animate-aura-float" />
          <blockquote className="mt-8 text-balance text-2xl font-medium leading-snug tracking-tight text-foreground sm:text-3xl">
            &ldquo;AURA Genesis™ was built to solve a simple problem: businesses
            shouldn&apos;t need dozens of disconnected tools to operate
            effectively.&rdquo;
          </blockquote>
          <div className="mt-8 flex items-center gap-4">
            <span className="flex size-12 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-base font-semibold text-gold">
              JR
            </span>
            <div>
              <div className="font-semibold text-foreground">
                Jeremiah Rojas
              </div>
              <div className="text-sm text-muted-foreground">
                Founder | Sentient Connect™
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

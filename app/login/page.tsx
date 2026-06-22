import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login',
  description:
    'Login entry point for Sentient Connect™, AURA Genesis™, and future SentientOS™ dashboards.',
}

const futurePortals = [
  'Sentient Connect™ Client Portal',
  'AURA Genesis™ Command Layer',
  'Home Services AURA™ Dashboard',
  'Behavioral Health Pilot Access',
  'Business Consulting Workspace',
  'SentientOS™ Wearables Layer',
]

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 grid-bg opacity-30" />
      <div className="pointer-events-none fixed left-1/2 top-0 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <header className="border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-sm font-semibold text-gold">
              SC
            </span>
            <span className="text-sm font-semibold tracking-[0.28em]">
              SENTIENT Connect™
            </span>
          </a>

          <a
            href="/"
            className="rounded-full border border-border/70 px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:border-primary/50 hover:bg-primary/10"
          >
            Back Home
          </a>
        </div>
      </header>

      <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gold">
              Login
            </p>
            <h1 className="mt-6 max-w-3xl text-balance text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Portal access is being prepared.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">
              This login page is reserved for the Sentient Connect ecosystem as
              each dashboard, client portal, and operating layer comes online.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="/request-access"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Request Access
              </a>
              <a
                href="/aura-genesis"
                className="inline-flex items-center justify-center rounded-full border border-border/70 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:bg-primary/10"
              >
                View AURA Genesis
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-border/70 bg-card/60 p-6 gold-border-glow sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Coming Online
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight">
              Future secure access layers
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Login authentication will be connected after the public launch
              pages are stable and the correct portal structure is confirmed.
            </p>

            <div className="mt-8 grid gap-3">
              {futurePortals.map((portal) => (
                <div
                  key={portal}
                  className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/50 px-5 py-4"
                >
                  <span className="text-sm text-foreground">{portal}</span>
                  <span className="size-2 rounded-full bg-primary" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

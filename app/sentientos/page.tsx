import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SentientOS™',
  description:
    'SentientOS™ is the future operating layer for Sentient Connect™, AURA Genesis™, wearable intelligence, behavioral signals, and human-centered decision support.',
}

const osLayers = [
  {
    title: 'AURA Genesis™',
    description:
      'The AI orchestration layer for decision clarity, workflow routing, check-ins, reporting, and operational execution.',
  },
  {
    title: 'Sentient Connect™',
    description:
      'The human service layer that connects coaching, consulting, behavioral support, accountability, and implementation.',
  },
  {
    title: 'MBS Triangulation™',
    description:
      'The personal alignment framework organizing progress through mind, body, and spirit signals.',
  },
  {
    title: 'Wearables Layer',
    description:
      'The future biometric and behavioral signal layer designed to support consent-based insight and better timing.',
  },
]

const wearableSignals = [
  'Sleep and recovery signals',
  'Stress and regulation indicators',
  'Movement and energy trends',
  'Routine consistency',
  'Behavioral pattern visibility',
  'Consent-based personal insight',
]

export default function SentientOSPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
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

          <div className="flex items-center gap-3">
            <a
              href="/request-access"
              className="hidden rounded-full border border-primary/30 px-4 py-2 text-xs font-semibold text-gold transition-colors hover:bg-primary/10 sm:inline-flex"
            >
              Request Access
            </a>
            <a
              href="/"
              className="rounded-full border border-border/70 px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:border-primary/50 hover:bg-primary/10"
            >
              Back Home
            </a>
          </div>
        </div>
      </header>

      <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gold">
            SentientOS™
          </p>
          <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            The future personal operating system for human-centered intelligence.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">
            SentientOS is the parent operating layer connecting AURA Genesis,
            Sentient Connect, Mind | Body | Spirit Triangulation, future
            wearable signals, and practical decision support.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {osLayers.map((layer) => (
              <div
                key={layer.title}
                className="rounded-2xl border border-border/60 bg-card/50 p-6 transition-colors hover:border-primary/40"
              >
                <h2 className="text-xl font-semibold text-foreground">
                  {layer.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {layer.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2rem] border border-primary/30 bg-primary/10 p-8 gold-border-glow sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Wearables Coming Soon
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                The next layer is timing, context, and consent-based signal awareness.
              </h2>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                The wearable layer is intended to help connect human behavior,
                physiological signals, personal check-ins, and contextual
                decision support without replacing human judgment or consent.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/request-access"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Request Early Access
                </a>
                <a
                  href="/aura-genesis"
                  className="inline-flex items-center justify-center rounded-full border border-border/70 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:bg-background/40"
                >
                  View AURA Genesis
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-border/70 bg-card/60 p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Signal Categories
              </p>
              <div className="mt-6 grid gap-3">
                {wearableSignals.map((signal) => (
                  <div
                    key={signal}
                    className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/50 px-5 py-4"
                  >
                    <span className="text-sm text-foreground">{signal}</span>
                    <span className="size-2 rounded-full bg-primary" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

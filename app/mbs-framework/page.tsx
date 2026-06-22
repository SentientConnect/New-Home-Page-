import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MIND | BODY | SPIRIT TRIANGULATION™',
  description:
    'MIND | BODY | SPIRIT TRIANGULATION™ is the Sentient Connect™ framework for organizing clarity, regulation, purpose, accountability, and human progress.',
}

const pillars = [
  {
    title: 'Mind',
    description:
      'Clarity, decision quality, emotional awareness, focus, anxiety control, truthfulness, and readiness to act.',
    signals: ['Clarity', 'Focus', 'Truth', 'Decision readiness'],
  },
  {
    title: 'Body',
    description:
      'Sleep, energy, cravings, regulation, nutrition, movement, recovery actions, and physical stability.',
    signals: ['Sleep', 'Energy', 'Regulation', 'Recovery action'],
  },
  {
    title: 'Spirit',
    description:
      'Purpose, humility, forgiveness, service, peace, integrity, faith, and alignment with what matters most.',
    signals: ['Purpose', 'Integrity', 'Service', 'Peace'],
  },
]

const process = [
  'Daily check-in',
  'Signal review',
  'Pattern recognition',
  'Action planning',
  'Accountability follow-up',
  'Progress reporting',
]

export default function MindBodySpiritTriangulationPage() {
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
              Sentient Connect™
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
            MIND | BODY | SPIRIT TRIANGULATION™
          </p>
          <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            A practical framework for organizing human progress.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">
            MIND | BODY | SPIRIT TRIANGULATION™ helps turn scattered experience
            into clear signals across mental clarity, physical regulation, and
            spiritual alignment.
          </p>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-[2rem] border border-border/60 bg-card/50 p-6 transition-colors hover:border-primary/40"
              >
                <h2 className="text-2xl font-semibold text-foreground">
                  {pillar.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {pillar.description}
                </p>

                <div className="mt-6 grid gap-2">
                  {pillar.signals.map((signal) => (
                    <div
                      key={signal}
                      className="flex items-center justify-between rounded-xl border border-border/60 bg-background/50 px-4 py-3"
                    >
                      <span className="text-sm text-foreground">{signal}</span>
                      <span className="size-2 rounded-full bg-primary" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2rem] border border-primary/30 bg-primary/10 p-8 gold-border-glow sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                AURA Genesis™ Support
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                The framework becomes stronger when the signals are tracked over time.
              </h2>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                AURA Genesis™ can support daily check-ins, trend summaries,
                action planning, accountability prompts, and progress reports so
                the person can see what is changing instead of relying only on
                memory or emotion in the moment.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/request-access"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Request Access
                </a>
                <a
                  href="/behavioral-health"
                  className="inline-flex items-center justify-center rounded-full border border-border/70 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:bg-background/40"
                >
                  Behavioral Health Layer
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-border/70 bg-card/60 p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Operating Flow
              </p>
              <div className="mt-6 grid gap-3">
                {process.map((step) => (
                  <div
                    key={step}
                    className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/50 px-5 py-4"
                  >
                    <span className="text-sm text-foreground">{step}</span>
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

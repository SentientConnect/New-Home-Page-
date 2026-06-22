import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Behavioral Health',
  description:
    'Behavioral Health support inside Sentient Connect™ using AURA Genesis™, structured check-ins, accountability loops, and Mind | Body | Spirit Triangulation™.',
}

const supportLayers = [
  {
    title: 'Structured Self-Reporting',
    description:
      'Daily and weekly check-ins help organize what the person is experiencing across mind, body, and spirit.',
  },
  {
    title: 'Pattern Visibility',
    description:
      'AURA helps surface recurring stressors, lapses, triggers, stabilizers, and progress signals over time.',
  },
  {
    title: 'Care Team Readiness',
    description:
      'Reports can help summarize client status, progress, and areas needing support for approved care partners.',
  },
  {
    title: 'Continuum Support',
    description:
      'Designed to support coaching, recovery, behavioral health pilots, and structured accountability programs.',
  },
]

const guardrails = [
  'Not a replacement for therapy, medical care, or crisis support',
  'Built to support reflection, structure, reporting, and accountability',
  'Designed around consent-based participation and clear human oversight',
  'Focused on stability, clarity, and measurable support signals',
]

export default function BehavioralHealthPage() {
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
            Behavioral Health
          </p>
          <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Human-centered support for clarity, stability, and progress.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">
            Sentient Connect supports behavioral health and recovery-focused
            environments through structured reflection, accountability, progress
            visibility, and care-team-ready reporting.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {supportLayers.map((layer) => (
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
                Mind | Body | Spirit Triangulation™
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                The framework organizes what is happening into usable signals.
              </h2>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                The goal is not to overcomplicate the person. The goal is to
                give the person, coach, counselor, or approved support partner a
                cleaner picture of what is improving, what is unstable, and what
                needs attention next.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/request-access"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Request Pilot Access
                </a>
                <a
                  href="/mbs-framework"
                  className="inline-flex items-center justify-center rounded-full border border-border/70 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:bg-background/40"
                >
                  View MBS Framework
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-border/70 bg-card/60 p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Guardrails
              </p>
              <div className="mt-6 grid gap-3">
                {guardrails.map((item) => (
                  <div
                    key={item}
                    className="flex gap-4 rounded-2xl border border-border/60 bg-background/50 p-4"
                  >
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-primary" />
                    <p className="text-sm leading-7 text-muted-foreground">
                      {item}
                    </p>
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

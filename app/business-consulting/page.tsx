import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Business Consulting',
  description:
    'Business Consulting inside Sentient Connect™ using AURA Genesis™ to support operations, workflow clarity, revenue systems, accountability, and founder-led execution.',
}

const consultingLayers = [
  {
    title: 'Operating System Design',
    description:
      'Build weekly rhythm, scorecards, owners, priorities, issues lists, and follow-through around the way the business actually runs.',
  },
  {
    title: 'Revenue Workflow Clarity',
    description:
      'Map lead intake, sales follow-up, handoff, service delivery, retention, and reporting so fewer opportunities fall through the cracks.',
  },
  {
    title: 'AI Leverage',
    description:
      'Use AI to reduce manual work, improve response speed, organize decisions, and give leadership better visibility.',
  },
  {
    title: 'Founder Support',
    description:
      'Translate founder vision into execution plans, team accountability, cleaner systems, and measurable progress.',
  },
]

const businessSignals = [
  'Leads and booked calls',
  'Conversion and retention',
  'Client journey health',
  'Team accountability',
  'Workflow bottlenecks',
  'Revenue and margin visibility',
]

export default function BusinessConsultingPage() {
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
            Business Consulting
          </p>
          <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Turn founder vision into measurable operating discipline.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">
            Sentient Connect™ supports businesses with operating rhythm,
            workflow clarity, AI leverage, accountability, and practical
            execution systems.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {consultingLayers.map((layer) => (
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

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-border/70 bg-card/60 p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Scorecard Signals
              </p>
              <div className="mt-6 grid gap-3">
                {businessSignals.map((signal) => (
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

            <div className="rounded-[2rem] border border-primary/30 bg-primary/10 p-8 gold-border-glow sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                AURA Genesis™ Execution Layer
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                Consulting becomes stronger when the system can keep moving.
              </h2>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                AURA Genesis™ can support intake, follow-up, task routing,
                reporting, weekly priorities, owner accountability, and decision
                visibility so the business does not depend only on memory,
                urgency, or scattered tools.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/request-access"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Request Consulting Access
                </a>
                <a
                  href="/aura-genesis"
                  className="inline-flex items-center justify-center rounded-full border border-border/70 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:bg-background/40"
                >
                  View AURA Genesis™
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

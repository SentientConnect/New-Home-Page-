import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home Services AURA™',
  description:
    'Home Services AURA™ is the Sentient Connect™ workflow layer for property, tenant, vendor, service, and operational coordination.',
}

const workflowSteps = [
  {
    title: 'Tenant Intake',
    description:
      'Capture service requests, urgency, property details, and basic triage information in a cleaner structured flow.',
  },
  {
    title: 'Vendor Routing',
    description:
      'Route the right issue to the right vendor with clearer context, response tracking, and status visibility.',
  },
  {
    title: 'Operational Dashboard',
    description:
      'Give operators a single place to see open issues, response times, bottlenecks, and completion status.',
  },
  {
    title: 'Follow-Up Loop',
    description:
      'Close the loop with tenant updates, service confirmation, owner visibility, and documented resolution.',
  },
]

export default function HomeServicesAuraPage() {
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
            Home Services AURA™
          </p>
          <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Service operations, organized from request to resolution.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">
            Home Services AURA brings intake, triage, vendor coordination,
            owner visibility, and completion tracking into one operating layer.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {workflowSteps.map((step) => (
              <div
                key={step.title}
                className="rounded-2xl border border-border/60 bg-card/50 p-6 transition-colors hover:border-primary/40"
              >
                <h2 className="text-xl font-semibold text-foreground">
                  {step.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-[2rem] border border-primary/30 bg-primary/10 p-8 gold-border-glow sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Operator Use Case
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Built to reduce dropped balls and increase response clarity.
            </h2>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-muted-foreground">
              The goal is simple: fewer missed requests, faster handoffs, better
              documentation, cleaner vendor accountability, and a stronger
              operating rhythm for property and home service teams.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/request-access"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Request Demo
              </a>
              <a
                href="/aura-genesis"
                className="inline-flex items-center justify-center rounded-full border border-border/70 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:bg-background/40"
              >
                View AURA Genesis
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

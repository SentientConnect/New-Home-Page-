const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'AURA Genesis', href: '/aura-genesis' },
  { label: 'Home Services AURA', href: '/home-services-aura' },
  { label: 'Behavioral Health', href: '/behavioral-health' },
  { label: 'DISC Profile', href: '/disc-profile' },
  { label: 'Business Consulting', href: '/business-consulting' },
  { label: 'SentientOS', href: '/sentientos' },
  { label: 'MBS Framework', href: '/mbs-framework' },
]

const capabilities = [
  {
    title: 'Decision Clarity',
    description: 'Turn scattered information into prioritized next moves.',
  },
  {
    title: 'Workflow Orchestration',
    description: 'Connect tasks, intake, follow-up, approvals, and reporting.',
  },
  {
    title: 'Accountability Loops',
    description:
      'Create rhythm around daily actions, check-ins, and execution quality.',
  },
  {
    title: 'Client Journey Support',
    description:
      'Map the path from first contact to handoff, service, and retention.',
  },
  {
    title: 'Mission Alignment',
    description:
      'Keep execution connected to values, truth, and measurable outcomes.',
  },
  {
    title: 'Operator Command',
    description:
      'Give founders and teams a clearer view of what matters now.',
  },
]

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 grid-bg opacity-30" />
      <div className="pointer-events-none fixed left-1/2 top-0 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-sm font-semibold text-gold">
              SC
            </span>
            <span className="text-sm font-semibold tracking-[0.28em] text-foreground">
              SENTIENT Connect™
            </span>
          </a>

          <nav className="hidden items-center gap-5 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="/request-access"
              className="rounded-full border border-primary/30 px-4 py-2 text-xs font-semibold text-gold transition-colors hover:bg-primary/10"
            >
              Request Access
            </a>
            <a
              href="/login"
              className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Login
            </a>
          </div>
        </div>

        <div className="border-t border-border/40 px-4 py-3 lg:hidden">
          <nav className="mx-auto flex max-w-7xl gap-4 overflow-x-auto text-xs text-muted-foreground">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="shrink-0 transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section className="relative px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gold">
              AURA Genesis™
            </p>
            <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Orchestration intelligence for the human and the system.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">
              AURA Genesis helps organize decisions, workflows, client journeys,
              operations, and personal accountability into one structured command
              layer.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="/request-access"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Request Access
              </a>
              <a
                href="/login"
                className="inline-flex items-center justify-center rounded-full border border-border/70 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:bg-primary/10"
              >
                Login
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-primary/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card/60 p-8 gold-border-glow">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                System Layer
              </p>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight">
                AURA Genesis™
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Designed to connect human clarity, operational rhythm, and
                mission-centered execution.
              </p>

              <div className="mt-8 rounded-2xl border border-border/60 bg-background/50 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                  Capabilities
                </p>
                <div className="mt-5 grid gap-3">
                  {['Clarity', 'Workflow', 'Accountability', 'Execution'].map(
                    (item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between rounded-xl border border-border/50 bg-secondary/30 px-4 py-3"
                      >
                        <span className="text-sm text-foreground">{item}</span>
                        <span className="size-2 rounded-full bg-primary" />
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-card/30 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gold">
              What this layer supports
            </p>
            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Each layer is built to be clear, practical, and easy to expand as
              the Sentient Connect ecosystem grows.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <div
                key={capability.title}
                className="rounded-2xl border border-border/60 bg-background/50 p-6 transition-colors hover:border-primary/40"
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {capability.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-primary/30 bg-primary/10 p-8 text-center gold-border-glow sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gold">
            Sentient Connect™
          </p>
          <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Build the system around the human.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-8 text-muted-foreground">
            Request access to Sentient Connect and begin mapping the operating
            framework around clarity, accountability, and execution.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/request-access"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Request Access
            </a>
            <a
              href="/aura-genesis"
              className="inline-flex items-center justify-center rounded-full border border-border/70 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:bg-background/40"
            >
              Explore AURA Genesis
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_1.2fr]">
          <div>
            <a href="/" className="inline-flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-xs font-semibold text-gold">
                SC
              </span>
              <span className="text-sm font-semibold tracking-[0.28em]">
                SENTIENT Connect™
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">
              Built for clarity, accountability, and the greater good of
              humanity.
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              SentientOS™ © 2026
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>Sentient Connect™</p>
              <p>AURA Genesis™</p>
              <p>Mind | Body | Spirit Triangulation™</p>
            </div>

            <nav className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-muted-foreground">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <a href="/login" className="transition-colors hover:text-foreground">
                Login
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </main>
  )
}

import { ChevronDown, Brain, Zap, TrendingUp, BarChart3 } from 'lucide-react'

const funnel = [
  {
    tag: 'TOFU',
    title: 'Top of Funnel',
    items: ['Awareness', 'Lead Generation', 'Outreach'],
  },
  {
    tag: 'MOFU',
    title: 'Middle of Funnel',
    items: ['Qualification', 'Contact Capture', 'Follow-Up Automation'],
  },
  {
    tag: 'BOFU',
    title: 'Bottom of Funnel',
    items: ['Conversion Support', 'Appointment Setting', 'Client Acquisition'],
  },
]

const orchestration = [
  { label: 'Intelligence', icon: Brain },
  { label: 'Automation', icon: Zap },
  { label: 'Optimization', icon: TrendingUp },
  { label: 'Reporting', icon: BarChart3 },
]

export function Framework() {
  return (
    <section
      id="framework"
      className="relative scroll-mt-20 overflow-hidden py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-0 size-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-gold">
            The Revenue Engine
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            The AURA Genesis™ Revenue Engine
          </h2>
        </div>

        <div className="mt-14 flex flex-col items-center gap-0">
          {funnel.map((stage, i) => (
            <div key={stage.tag} className="flex w-full flex-col items-center">
              <div className="w-full max-w-2xl rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur transition-colors hover:border-primary/40 sm:p-7">
                <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    <span className="rounded-lg border border-primary/30 bg-primary/10 px-3 py-1.5 font-mono text-sm font-semibold text-gold">
                      {stage.tag}
                    </span>
                    <span className="text-base font-semibold text-foreground">
                      {stage.title}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {stage.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border/60 bg-secondary/40 px-3 py-1 text-xs text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <ChevronDown
                className="my-3 size-6 text-gold/70"
                aria-hidden="true"
              />
              {i === funnel.length - 1 && null}
            </div>
          ))}

          {/* orchestration layer */}
          <div className="w-full max-w-3xl rounded-2xl border border-primary/30 bg-gradient-to-b from-primary/10 to-card/50 p-7 gold-border-glow">
            <div className="text-center">
              <h3 className="text-xl font-semibold gold-gradient-text">
                AURA Orchestration Layer
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Every stage, intelligently coordinated as one system.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {orchestration.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2 rounded-xl border border-border/60 bg-background/50 px-3 py-4 text-center"
                >
                  <Icon className="size-5 text-gold" />
                  <span className="text-sm font-medium text-foreground">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

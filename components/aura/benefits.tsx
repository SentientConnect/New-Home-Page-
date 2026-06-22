import {
  Gauge,
  Filter,
  TrendingUp,
  Minimize2,
  Users,
  Lightbulb,
} from 'lucide-react'

const benefits = [
  { label: 'Faster Response Times', icon: Gauge, stat: '10x' },
  { label: 'More Qualified Leads', icon: Filter, stat: '+62%' },
  { label: 'Increased Conversions', icon: TrendingUp, stat: '+41%' },
  { label: 'Reduced Administrative Burden', icon: Minimize2, stat: '-70%' },
  { label: 'Improved Team Efficiency', icon: Users, stat: '3.5x' },
  { label: 'Better Decision Making', icon: Lightbulb, stat: '24/7' },
]

export function Benefits() {
  return (
    <section className="border-y border-border/50 bg-card/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-gold">
            The Outcome
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            What Happens When Intelligence Runs Operations?
          </h2>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ label, icon: Icon, stat }) => (
            <div
              key={label}
              className="flex items-center gap-4 rounded-2xl border border-border/60 bg-background/50 p-6 transition-colors hover:border-primary/40"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-gold">
                <Icon className="size-6" />
              </span>
              <div>
                <div className="text-2xl font-semibold gold-gradient-text">
                  {stat}
                </div>
                <div className="text-sm leading-tight text-muted-foreground">
                  {label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

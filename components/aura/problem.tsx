import {
  UserX,
  Clock,
  RefreshCw,
  Unplug,
  EyeOff,
  ShuffleIcon,
} from 'lucide-react'

const pains = [
  {
    title: 'Leads falling through cracks',
    desc: 'Opportunities slip away before anyone follows up.',
    icon: UserX,
  },
  {
    title: 'Employees wasting time',
    desc: 'Talented teams buried under repetitive busywork.',
    icon: Clock,
  },
  {
    title: 'Manual follow-up',
    desc: 'Every reminder and touchpoint handled by hand.',
    icon: RefreshCw,
  },
  {
    title: 'Disconnected systems',
    desc: 'A dozen tools that refuse to talk to each other.',
    icon: Unplug,
  },
  {
    title: 'Poor visibility',
    desc: 'Leadership flying blind without real-time insight.',
    icon: EyeOff,
  },
  {
    title: 'Inconsistent execution',
    desc: 'Outcomes that depend on who happens to be working.',
    icon: ShuffleIcon,
  },
]

export function Problem() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-gold">
            The Problem
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Most Businesses Are Drowning In Software.
          </h2>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pains.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border/60 bg-card/40 p-6 transition-colors hover:border-primary/30"
            >
              <span className="flex size-11 items-center justify-center rounded-lg border border-border/60 bg-background/60 text-muted-foreground transition-colors group-hover:text-gold">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-5 text-base font-semibold text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

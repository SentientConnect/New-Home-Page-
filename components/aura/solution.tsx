import {
  Bot,
  Database,
  Workflow,
  LayoutDashboard,
  MessagesSquare,
  LineChart,
} from 'lucide-react'

const features = [
  {
    title: 'Agent Orchestration',
    desc: 'Multiple specialized AI agents working together across your business.',
    icon: Bot,
  },
  {
    title: 'CRM Intelligence',
    desc: 'Track, nurture, and manage every opportunity automatically.',
    icon: Database,
  },
  {
    title: 'Workflow Automation',
    desc: 'Eliminate repetitive administrative work.',
    icon: Workflow,
  },
  {
    title: 'Executive Command Center',
    desc: 'See everything happening in your organization from one dashboard.',
    icon: LayoutDashboard,
  },
  {
    title: 'Communication Layer',
    desc: 'Email, SMS, tasks, reminders, and follow-up management.',
    icon: MessagesSquare,
  },
  {
    title: 'Data Intelligence',
    desc: 'Transform business activity into actionable insights.',
    icon: LineChart,
  },
]

export function Solution() {
  return (
    <section id="solution" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-gold">
            The Solution
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
            Meet <span className="gold-gradient-text">AURA Genesis™</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            AURA Genesis™ acts as a digital operating system for your business.
            It coordinates workflows, captures opportunities, assists teams,
            automates repetitive tasks, and provides leadership with actionable
            intelligence.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/40 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="group relative bg-card/60 p-7 transition-colors hover:bg-card"
            >
              <span className="flex size-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-gold">
                <Icon className="size-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {desc}
              </p>
              <span className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-primary/60 to-transparent transition-transform duration-300 group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

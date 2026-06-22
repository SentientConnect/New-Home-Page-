'use client'

import Image from 'next/image'
import { useState } from 'react'
import {
  LayoutDashboard,
  GitBranch,
  Activity,
  Workflow,
  LineChart,
  CheckSquare,
} from 'lucide-react'

const views = [
  { id: 'exec', label: 'Executive Dashboard', icon: LayoutDashboard },
  { id: 'pipeline', label: 'Lead Pipeline', icon: GitBranch },
  { id: 'agents', label: 'Agent Activity Center', icon: Activity },
  { id: 'workflow', label: 'Workflow Builder', icon: Workflow },
  { id: 'revenue', label: 'Revenue Analytics', icon: LineChart },
  { id: 'tasks', label: 'Task Management', icon: CheckSquare },
]

export function DashboardShowcase() {
  const [active, setActive] = useState(views[0].id)

  return (
    <section id="dashboard" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-gold">
            Inside The Platform
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            One Command Center For Your Entire Operation
          </h2>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {views.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => setActive(id)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors ${
                active === id
                  ? 'border-primary/50 bg-primary/15 text-foreground'
                  : 'border-border/60 bg-secondary/30 text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon
                className={`size-4 ${active === id ? 'text-gold' : ''}`}
              />
              {label}
            </button>
          ))}
        </div>

        <div className="relative mx-auto mt-10 max-w-5xl">
          <div className="pointer-events-none absolute -inset-4 -z-0 rounded-3xl bg-primary/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-2xl border border-border/70 gold-border-glow">
            <div className="flex items-center justify-between border-b border-border/60 bg-secondary/40 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-muted-foreground/30" />
                <span className="size-2.5 rounded-full bg-muted-foreground/30" />
                <span className="size-2.5 rounded-full bg-primary/60" />
              </div>
              <span className="text-xs text-muted-foreground">
                {views.find((v) => v.id === active)?.label}
              </span>
            </div>
            <Image
              src="/aura-dashboard-exec.png"
              alt="AURA Genesis platform dashboard interface"
              width={1600}
              height={1000}
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

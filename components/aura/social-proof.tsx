import {
  HeartPulse,
  Stethoscope,
  Wrench,
  GraduationCap,
  Settings2,
  Briefcase,
} from 'lucide-react'

const audiences = [
  { label: 'Behavioral Health', icon: HeartPulse },
  { label: 'Healthcare', icon: Stethoscope },
  { label: 'Home Services', icon: Wrench },
  { label: 'Admissions Teams', icon: GraduationCap },
  { label: 'Operations Leaders', icon: Settings2 },
  { label: 'Executive Teams', icon: Briefcase },
]

export function SocialProof() {
  return (
    <section className="border-y border-border/50 bg-card/30 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-2xl text-balance text-center text-2xl font-semibold tracking-tight sm:text-3xl">
          Built For Organizations That Need More Than Chatbots
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {audiences.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 rounded-xl border border-border/60 bg-secondary/30 px-4 py-6 text-center transition-colors hover:border-primary/40 hover:bg-secondary/50"
            >
              <span className="flex size-11 items-center justify-center rounded-lg border border-border/60 bg-background/60 text-gold">
                <Icon className="size-5" />
              </span>
              <span className="text-sm font-medium leading-tight text-foreground">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

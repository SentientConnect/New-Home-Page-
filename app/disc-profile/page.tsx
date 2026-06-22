import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DISC Profile',
  description:
    'DISC Profile support inside Sentient Connect™ for communication awareness, team alignment, client understanding, and AURA Genesis™ workflow personalization.',
}

const discTypes = [
  {
    title: 'D — Dominance',
    description:
      'Direct, decisive, challenge-oriented, and focused on outcomes, speed, and control.',
  },
  {
    title: 'I — Influence',
    description:
      'Expressive, people-oriented, persuasive, energetic, and focused on connection and momentum.',
  },
  {
    title: 'S — Steadiness',
    description:
      'Supportive, patient, consistent, loyal, and focused on trust, safety, and stability.',
  },
  {
    title: 'C — Conscientiousness',
    description:
      'Precise, analytical, quality-driven, structured, and focused on accuracy and standards.',
  },
]

const useCases = [
  'Client communication awareness',
  'Team role clarity',
  'Leadership style mapping',
  'Sales and service personalization',
  'Conflict reduction',
  'AURA Genesis™ workflow adaptation',
]

export default function DiscProfilePage() {
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
            DISC Profile
          </p>
          <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Behavioral awareness that makes communication easier to act on.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">
            Sentient Connect™ uses DISC as a practical communication and
            operating lens to help people understand how they move, decide,
            respond, lead, and collaborate.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {discTypes.map((type) => (
              <div
                key={type.title}
                className="rounded-2xl border border-border/60 bg-card/50 p-6 transition-colors hover:border-primary/40"
              >
                <h2 className="text-xl font-semibold text-foreground">
                  {type.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {type.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-border/70 bg-card/60 p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Practical Uses
              </p>
              <div className="mt-6 grid gap-3">
                {useCases.map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/50 px-5 py-4"
                  >
                    <span className="text-sm text-foreground">{item}</span>
                    <span className="size-2 rounded-full bg-primary" />
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-primary/30 bg-primary/10 p-8 gold-border-glow sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                AURA Genesis™ Layer
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                DISC becomes more useful when it connects to execution.
              </h2>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                AURA Genesis™ can use DISC insights to support clearer prompts,
                better follow-up language, improved team handoffs, and
                communication patterns that match the person instead of forcing
                one generic approach.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/request-access"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Request DISC Access
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

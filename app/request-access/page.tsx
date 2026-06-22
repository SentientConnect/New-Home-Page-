import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Request Access',
  description:
    'Request access to Sentient Connect™ and AURA Genesis™ for clarity, accountability, workflow orchestration, and human-centered operating support.',
}

const accessReasons = [
  'Sentient Connect™ Founder Access',
  'AURA Genesis™ operating support',
  'MIND | BODY | SPIRIT TRIANGULATION™',
  'Business workflow orchestration',
  'Behavioral health or recovery support pilot',
  'Home Services AURA™ demo',
]

export default function RequestAccessPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
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

          <a
            href="/"
            className="rounded-full border border-border/70 px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:border-primary/50 hover:bg-primary/10"
          >
            Back Home
          </a>
        </div>
      </header>

      <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gold">
              Request Access
            </p>
            <h1 className="mt-6 max-w-3xl text-balance text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Start with the right operating layer.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">
              Sentient Connect™ is currently being structured for founder
              access, private pilots, and early implementation partners.
            </p>

            <div className="mt-10 grid gap-3">
              {accessReasons.map((reason) => (
                <div
                  key={reason}
                  className="flex items-center justify-between rounded-2xl border border-border/60 bg-card/50 px-5 py-4"
                >
                  <span className="text-sm text-foreground">{reason}</span>
                  <span className="size-2 rounded-full bg-primary" />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-border/70 bg-card/60 p-6 gold-border-glow sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Founder Access Intake
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight">
              Send the request directly.
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Until the full intake portal is connected, use the direct email
              path below so the request can be reviewed by Sentient Connect™.
            </p>

            <div className="mt-8 rounded-2xl border border-border/60 bg-background/50 p-5">
              <p className="text-sm font-semibold text-foreground">
                Email Sentient Connect™
              </p>
              <a
                href="mailto:info@sentientconnect.io?subject=Sentient%20Connect%E2%84%A2%20Access%20Request"
                className="mt-3 inline-flex break-all text-sm font-semibold text-gold"
              >
                info@sentientconnect.io
              </a>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Include your name, organization, use case, and whether you are
                requesting Sentient Connect™, AURA Genesis™, MIND | BODY |
                SPIRIT TRIANGULATION™, or a pilot/demo conversation.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:info@sentientconnect.io?subject=Sentient%20Connect%E2%84%A2%20Access%20Request"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Request by Email
              </a>
              <a
                href="/aura-genesis"
                className="inline-flex items-center justify-center rounded-full border border-border/70 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:bg-primary/10"
              >
                View AURA Genesis™
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

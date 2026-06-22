import { Check, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const included = [
  'AURA Genesis™',
  'Agent Orchestration',
  'CRM Intelligence',
  'Workflow Automation',
  'Executive Dashboard',
]

const plans = [
  {
    name: 'Starter',
    price: '$997',
    period: '/month',
    desc: 'For teams ready to put intelligence to work.',
    featured: false,
    cta: 'Request Private Demo',
  },
  {
    name: 'Growth',
    price: '$1,997',
    period: '/month',
    desc: 'For scaling organizations orchestrating at speed.',
    featured: true,
    cta: 'Request Private Demo',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'For complex operations that demand full control.',
    featured: false,
    cta: 'Talk To Sales',
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-gold">
            Pricing
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Choose Your Level Of Orchestration
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-7 ${
                plan.featured
                  ? 'border-primary/50 bg-card gold-border-glow'
                  : 'border-border/60 bg-card/40'
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-7 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-foreground">
                {plan.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{plan.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight text-foreground">
                  {plan.price}
                </span>
                <span className="text-sm text-muted-foreground">
                  {plan.period}
                </span>
              </div>

              <Button
                asChild
                className={`mt-6 ${
                  plan.featured
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'border border-border/70 bg-secondary/40 text-foreground hover:bg-secondary/70'
                }`}
              >
                <a href="#contact">
                  {plan.cta}
                  <ArrowRight className="ml-1 size-4" />
                </a>
              </Button>

              <div className="mt-7 border-t border-border/60 pt-6">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  All plans include
                </p>
                <ul className="mt-4 space-y-3">
                  {included.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <Check className="size-4 shrink-0 text-gold" />
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

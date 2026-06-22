import Image from 'next/image'
import { ArrowRight, Play, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:pt-44">
      {/* background */}
      <div className="pointer-events-none absolute inset-0 grid-bg radial-fade" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border/70 bg-secondary/40 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
            <Sparkles className="size-3.5 text-gold" />
            Powered by SentientOS™ — Intelligence. Orchestrated.
          </div>

          <h1 className="mt-7 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Your Business Doesn&apos;t Need More Software.
            <br className="hidden sm:block" />{' '}
            <span className="gold-gradient-text">It Needs Intelligence.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            AURA Genesis™ is an autonomous business orchestration platform that
            combines AI agents, automation, CRM intelligence, communication
            systems, operational workflows, and decision support into a single
            command center.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="group h-12 bg-primary px-6 text-primary-foreground hover:bg-primary/90"
            >
              <a href="#contact">
                Request Private Demo
                <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 border-border/70 bg-secondary/30 px-6 text-foreground hover:bg-secondary/60"
            >
              <a href="#demo">
                <Play className="mr-1 size-4 text-gold" />
                Watch AURA In Action
              </a>
            </Button>
          </div>
        </div>

        {/* hero visual */}
        <div className="relative mx-auto mt-16 max-w-5xl">
          <div className="pointer-events-none absolute -inset-4 -z-0 rounded-3xl bg-primary/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-2xl border border-border/70 gold-border-glow">
            <div className="flex items-center gap-2 border-b border-border/60 bg-secondary/40 px-4 py-3">
              <span className="size-2.5 rounded-full bg-muted-foreground/30" />
              <span className="size-2.5 rounded-full bg-muted-foreground/30" />
              <span className="size-2.5 rounded-full bg-primary/60" />
              <span className="ml-3 text-xs text-muted-foreground">
                AURA Command Center
              </span>
            </div>
            <Image
              src="/aura-command-center.png"
              alt="AURA Genesis command center showing AI agents coordinating tasks and real-time business intelligence feeds"
              width={1600}
              height={900}
              priority
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

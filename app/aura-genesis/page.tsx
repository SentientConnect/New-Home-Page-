import Link from "next/link";
import type { ReactNode } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "AURA Genesis™", href: "/aura-genesis" },
  { label: "Behavioral Health", href: "/behavioral-health" },
  { label: "Home Services AURA™", href: "/home-services-aura" },
  { label: "Business Consulting", href: "/business-consulting" },
  { label: "DISC Profile", href: "/disc-profile" },
  { label: "SentientOS™", href: "/sentientos" },
  { label: "MBS Triangulation™", href: "/mbs-triangulation" },
  { label: "About", href: "/about" },
];

const coreFunctions = [
  {
    title: "Organize",
    body: "Turns scattered thoughts, tasks, conversations, check-ins, and decisions into structured information.",
  },
  {
    title: "Prioritize",
    body: "Identifies what matters now so people and teams can stop reacting to everything at once.",
  },
  {
    title: "Route",
    body: "Moves information toward the right next action, workflow, person, report, or follow-up.",
  },
  {
    title: "Report",
    body: "Creates clear summaries that support accountability, review, and better decision-making.",
  },
];

const useCases = [
  {
    title: "Personal Accountability",
    body: "Daily check-ins, pattern awareness, decision support, and action tracking.",
  },
  {
    title: "Founder Command",
    body: "Organize vision, pressure, priorities, revenue tasks, and operating rhythm.",
  },
  {
    title: "Behavioral Support",
    body: "Support structured reflection, consent-based reporting, and care-team visibility.",
  },
  {
    title: "Business Operations",
    body: "Connect intake, follow-up, approvals, task routing, and performance review.",
  },
  {
    title: "Home Services",
    body: "Route service requests, vendor communication, owner visibility, and completion tracking.",
  },
  {
    title: "Team Execution",
    body: "Clarify responsibility, next steps, blockers, and accountability loops.",
  },
];

const workflowSteps = [
  ["01", "Input", "A person, client, founder, or team shares what is happening."],
  ["02", "Signal", "AURA Genesis™ identifies useful patterns, risks, needs, and priorities."],
  ["03", "Structure", "The information is organized into Mind, Body, Spirit, workflow, or operational categories."],
  ["04", "Action", "The system recommends the next clear step, follow-up, report, or human handoff."],
  ["05", "Review", "Progress is tracked so the loop can improve over time."],
];

const outputs = [
  "Daily clarity summaries",
  "Action plans",
  "Check-in reports",
  "Decision support notes",
  "Client journey snapshots",
  "Workflow routing",
  "Founder command summaries",
  "Behavioral pattern visibility",
  "Accountability loops",
  "Human handoff notes",
  "Progress reporting",
  "Mission alignment review",
];

function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-[#d8b45f]/40 bg-[#111111] shadow-[0_0_40px_rgba(216,180,95,0.22)]">
        <div className="absolute inset-1 rounded-xl border border-[#d8b45f]/20" />
        <span className="font-serif text-lg font-semibold tracking-tight text-[#f7df9e]">
          SC
        </span>
      </div>
      <div className="leading-tight">
        <p className="text-sm font-semibold tracking-[0.2em] text-white">
          Sentient Connect™
        </p>
        <p className="text-xs tracking-[0.18em] text-[#d8b45f]">
          Powered by SentientOS™
        </p>
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#d8b45f]">
      {children}
    </p>
  );
}

function GoldButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-[#d8b45f] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#f0cf78]"
    >
      {children}
    </Link>
  );
}

function DarkButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#d8b45f]/50 hover:bg-[#d8b45f]/10"
    >
      {children}
    </Link>
  );
}

function AuraGraphic() {
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[540px] items-center justify-center rounded-full border border-[#d8b45f]/15 bg-[radial-gradient(circle_at_center,rgba(216,180,95,0.2),rgba(0,0,0,0)_60%)]">
      <div className="absolute h-[88%] w-[88%] rounded-full border border-dashed border-[#d8b45f]/20" />
      <div className="absolute h-[68%] w-[68%] rounded-full border border-white/10" />
      <div className="absolute h-[44%] w-[44%] rounded-full border border-[#d8b45f]/30 bg-black/40 shadow-[0_0_60px_rgba(216,180,95,0.2)]" />

      {[
        ["Clarity", "top-[8%] left-1/2 -translate-x-1/2"],
        ["Workflow", "right-[0%] top-1/2 -translate-y-1/2"],
        ["Report", "bottom-[8%] left-1/2 -translate-x-1/2"],
        ["Action", "left-[0%] top-1/2 -translate-y-1/2"],
      ].map(([label, position]) => (
        <div
          key={label}
          className={`absolute ${position} rounded-full border border-[#d8b45f]/30 bg-black/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#f7df9e]`}
        >
          {label}
        </div>
      ))}

      <div className="relative text-center">
        <p className="text-xs uppercase tracking-[0.34em] text-[#d8b45f]">
          AURA Genesis™
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-white">
          Command Layer
        </h1>
        <p className="mx-auto mt-3 max-w-[250px] text-sm leading-6 text-white/65">
          Organize the signal. Clarify the action. Protect the human.
        </p>
      </div>
    </div>
  );
}

export default function AuraGenesisPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(216,180,95,0.14),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.06),transparent_30%),linear-gradient(180deg,#050505,#090909_45%,#050505)]" />

      <header className="relative z-20 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="/" aria-label="Sentient Connect home">
            <LogoMark />
          </Link>

          <nav className="hidden items-center gap-5 text-xs font-medium text-white/70 xl:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  item.href === "/aura-genesis"
                    ? "text-[#d8b45f]"
                    : "transition hover:text-[#d8b45f]"
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white/75 transition hover:border-[#d8b45f]/50 hover:text-[#d8b45f] sm:inline-flex"
            >
              Login
            </Link>
            <Link
              href="/request-access"
              className="rounded-full bg-[#d8b45f] px-4 py-2 text-xs font-bold text-black transition hover:bg-[#f0cf78]"
            >
              Request Access
            </Link>
          </div>
        </div>
      </header>

      <section className="relative z-10 overflow-hidden px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-[#d8b45f]/30 bg-[#d8b45f]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-[#f7df9e]">
              AURA Genesis™
            </div>

            <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              The AI orchestration layer for clarity, workflow, and aligned
              execution.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/72">
              AURA Genesis™ helps organize decisions, check-ins, workflows,
              client journeys, accountability loops, and operational signals
              into clear next steps inside the Sentient Connect™ ecosystem.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <GoldButton href="/request-access">Request Access</GoldButton>
              <DarkButton href="#how-it-works">See How It Works</DarkButton>
            </div>

            <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.035] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d8b45f]">
                Plain English
              </p>
              <p className="mt-4 text-lg leading-8 text-white/72">
                AURA Genesis™ is the part of the system that helps turn messy
                information into organized action. It does not replace people.
                It helps people see what matters, decide what comes next, and
                stay accountable.
              </p>
            </div>
          </div>

          <AuraGraphic />
        </div>
      </section>

      <section className="relative z-10 border-y border-white/10 bg-white/[0.025] px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>What AURA Genesis™ does</SectionLabel>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {coreFunctions.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-black/40 p-6"
              >
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#f7df9e]">
                  {item.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/65">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="relative z-10 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>How it works</SectionLabel>
          <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            From scattered input to clear execution.
          </h2>

          <div className="mt-12 grid gap-4 lg:grid-cols-5">
            {workflowSteps.map(([step, title, body]) => (
              <div
                key={step}
                className="rounded-3xl border border-white/10 bg-white/[0.035] p-6"
              >
                <p className="text-sm font-semibold text-[#d8b45f]">{step}</p>
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/65">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 border-y border-white/10 bg-[#090909] px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel>System position</SectionLabel>
            <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              AURA Genesis™ is not the whole company. It is the intelligence
              layer inside the ecosystem.
            </h2>
          </div>

          <div className="grid gap-4">
            {[
              [
                "Sentient Connect™",
                "The human service and delivery layer for coaching, consulting, behavioral support, and implementation.",
              ],
              [
                "SentientOS™",
                "The parent operating system connecting human signals, AI support, workflows, reports, and future wearable insights.",
              ],
              [
                "AURA Genesis™",
                "The AI-assisted command layer that organizes information into decisions, tasks, reports, and next actions.",
              ],
              [
                "MIND | BODY | SPIRIT Triangulation™",
                "The human framework that reviews clarity, regulation, and alignment.",
              ],
            ].map(([title, body]) => (
              <div
                key={title}
                className="rounded-3xl border border-white/10 bg-black/45 p-6"
              >
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#f7df9e]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Use cases</SectionLabel>
          <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Built to support people, founders, care environments, and operators.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition hover:border-[#d8b45f]/45 hover:bg-[#d8b45f]/[0.06]"
              >
                <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/65">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 border-y border-white/10 bg-white/[0.025] px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Outputs</SectionLabel>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              AURA Genesis™ should produce useful things, not vague inspiration.
            </h2>

            <div className="grid gap-3 sm:grid-cols-2">
              {outputs.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-sm font-medium text-white/72"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#d8b45f]/25 bg-[linear-gradient(135deg,rgba(216,180,95,0.12),rgba(255,255,255,0.03),rgba(0,0,0,0.2))] p-8 lg:p-10">
          <SectionLabel>Human-first guardrails</SectionLabel>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <h2 className="text-4xl font-semibold tracking-[-0.04em]">
              AI supports the human. It does not replace the human.
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "AURA Genesis™ is designed to support organization, reflection, workflow, and decision clarity.",
                "AURA Genesis™ does not replace therapy, medical care, emergency services, legal advice, or financial advice.",
                "Behavioral health and recovery use cases should include consent, human oversight, and appropriate professional involvement.",
                "Sensitive data, check-ins, and reports should be handled with privacy, permission, and clear user understanding.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/45 p-5 text-sm leading-7 text-white/70"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 border-t border-white/10 bg-[#090909] px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionLabel>Request access</SectionLabel>
            <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Start with the command layer. Build toward the full operating
              system.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-white/72">
              AURA Genesis™ is the first practical layer for organizing life,
              business, behavior, workflows, and accountability into clearer
              execution.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <GoldButton href="/request-access">Request Access</GoldButton>
              <DarkButton href="/sentientos">Explore SentientOS™</DarkButton>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 bg-black px-5 py-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-start">
            <div>
              <LogoMark />
              <p className="mt-5 max-w-md text-sm leading-7 text-white/60">
                AURA Genesis™ is the AI-assisted orchestration layer inside the
                Sentient Connect™ ecosystem.
              </p>
            </div>

            <div className="grid gap-8 text-sm sm:grid-cols-3">
              <div>
                <p className="mb-3 font-semibold text-[#f7df9e]">System</p>
                <div className="space-y-2 text-white/60">
                  <p>Sentient Connect™</p>
                  <p>SentientOS™</p>
                  <p>AURA Genesis™</p>
                  <p>Home Services AURA™</p>
                  <p>MIND | BODY | SPIRIT Triangulation™</p>
                </div>
              </div>

              <div>
                <p className="mb-3 font-semibold text-[#f7df9e]">Pages</p>
                <div className="space-y-2 text-white/60">
                  {navItems.map((item) => (
                    <p key={item.href}>
                      <Link href={item.href} className="hover:text-[#d8b45f]">
                        {item.label}
                      </Link>
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-3 font-semibold text-[#f7df9e]">Legal</p>
                <div className="space-y-2 text-white/60">
                  <p>
                    <Link href="/privacy-policy" className="hover:text-[#d8b45f]">
                      Privacy Policy
                    </Link>
                  </p>
                  <p>
                    <Link href="/terms-of-use" className="hover:text-[#d8b45f]">
                      Terms of Use
                    </Link>
                  </p>
                  <p>
                    <Link
                      href="/copyright-trademark-notice"
                      className="hover:text-[#d8b45f]"
                    >
                      Copyright & Trademark Notice
                    </Link>
                  </p>
                  <p>
                    <Link href="/contact" className="hover:text-[#d8b45f]">
                      Contact
                    </Link>
                  </p>
                  <p>
                    <Link href="/login" className="hover:text-[#d8b45f]">
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-xs leading-6 text-white/45">
            <p>© 2026 Sentient Connect LLC. All rights reserved.</p>
            <p className="mt-3">
              Sentient Connect™, SentientOS™, AURA Genesis™, Home Services
              AURA™, and MIND | BODY | SPIRIT Triangulation™ are proprietary
              marks, frameworks, systems, workflows, methods, designs, content,
              and operating concepts owned by Sentient Connect LLC and/or
              Jeremiah Rojas. Unauthorized copying, reproduction, distribution,
              imitation, or commercial use is prohibited.
            </p>
            <p className="mt-3">
              Sentient Connect™ is not a substitute for medical care, therapy,
              legal advice, financial advice, emergency services, or crisis
              support.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

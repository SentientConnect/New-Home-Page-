import Link from "next/link";

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

const ecosystem = [
  {
    title: "SentientOS™",
    eyebrow: "Parent Operating System",
    body: "Connects human signals, guided check-ins, AI support, workflows, reporting, and future wearable insights into one expanding operating layer.",
  },
  {
    title: "AURA Genesis™",
    eyebrow: "AI Orchestration Layer",
    body: "Organizes decisions, tasks, check-ins, client journeys, follow-ups, accountability loops, and operational rhythm into clear next steps.",
  },
  {
    title: "MIND | BODY | SPIRIT Triangulation™",
    eyebrow: "Human Progress Framework",
    body: "Helps people understand alignment through mental clarity, physical regulation, and spiritual purpose.",
  },
  {
    title: "Sentient Connect™",
    eyebrow: "Human Delivery Layer",
    body: "Turns the system into coaching, consulting, behavioral support, business implementation, and real-world execution.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Check In",
    body: "The person, founder, team, or organization reports what is happening.",
  },
  {
    step: "02",
    title: "Organize",
    body: "AURA Genesis™ sorts scattered information into useful signals.",
  },
  {
    step: "03",
    title: "Triangulate",
    body: "The system reviews Mind, Body, and Spirit alignment.",
  },
  {
    step: "04",
    title: "Decide",
    body: "The next right action becomes clear and easier to execute.",
  },
  {
    step: "05",
    title: "Execute",
    body: "Progress is tracked, reported, reviewed, and improved over time.",
  },
];

const applications = [
  {
    title: "AURA Genesis™",
    body: "AI-assisted command layer for clarity, workflows, decisions, reporting, and accountability.",
    href: "/aura-genesis",
  },
  {
    title: "Behavioral Health",
    body: "Structured reflection, recovery support, pattern visibility, and care-team-ready reporting.",
    href: "/behavioral-health",
  },
  {
    title: "Home Services AURA™",
    body: "Tenant intake, vendor routing, owner visibility, service tracking, and operational follow-up.",
    href: "/home-services-aura",
  },
  {
    title: "Business Consulting",
    body: "Operating rhythm, scorecards, revenue workflows, accountability, and AI leverage.",
    href: "/business-consulting",
  },
  {
    title: "DISC Profile",
    body: "Communication awareness that helps people understand how they decide, lead, respond, and collaborate.",
    href: "/disc-profile",
  },
  {
    title: "SentientOS™ + Wearables",
    body: "The future personal operating system connecting behavior, biometric signals, check-ins, and consent-based insight.",
    href: "/sentientos",
  },
];

const values = [
  ["Truth", "We face reality clearly."],
  ["Alignment", "We connect actions to purpose."],
  ["Accountability", "We track what matters."],
  ["Human Oversight", "AI supports people. It does not replace them."],
  ["Stability", "Progress must be grounded, safe, and sustainable."],
  ["Execution", "The next right action matters more than empty motivation."],
  ["Greater Good", "The system exists to help people, families, teams, and communities move forward."],
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

function TriangleGraphic() {
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[520px] items-center justify-center rounded-full border border-[#d8b45f]/15 bg-[radial-gradient(circle_at_center,rgba(216,180,95,0.18),rgba(0,0,0,0)_58%)]">
      <div className="absolute h-[82%] w-[82%] rounded-full border border-dashed border-[#d8b45f]/20" />
      <div className="absolute h-[64%] w-[64%] rounded-full border border-[#d8b45f]/20" />
      <svg
        viewBox="0 0 420 420"
        className="relative h-[82%] w-[82%] drop-shadow-[0_0_32px_rgba(216,180,95,0.25)]"
        aria-hidden="true"
      >
        <path
          d="M210 46 L360 316 H60 Z"
          fill="rgba(216,180,95,0.05)"
          stroke="rgba(216,180,95,0.85)"
          strokeWidth="2"
        />
        <path
          d="M210 46 L210 316 M60 316 L360 316 M135 181 L285 181"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1"
        />
        <circle cx="210" cy="46" r="9" fill="#d8b45f" />
        <circle cx="360" cy="316" r="9" fill="#d8b45f" />
        <circle cx="60" cy="316" r="9" fill="#d8b45f" />
      </svg>
      <div className="absolute top-[11%] rounded-full border border-[#d8b45f]/30 bg-black/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#f7df9e]">
        Mind
      </div>
      <div className="absolute bottom-[17%] left-[8%] rounded-full border border-[#d8b45f]/30 bg-black/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#f7df9e]">
        Body
      </div>
      <div className="absolute bottom-[17%] right-[5%] rounded-full border border-[#d8b45f]/30 bg-black/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#f7df9e]">
        Spirit
      </div>
      <div className="absolute text-center">
        <p className="text-xs uppercase tracking-[0.32em] text-[#d8b45f]">
          AURA Genesis™
        </p>
        <p className="mt-2 max-w-[220px] text-sm text-white/75">
          Organize the signal. Clarify the action. Execute with alignment.
        </p>
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#d8b45f]">
      {children}
    </p>
  );
}

function GoldButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-[#d8b45f] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#f0cf78]"
    >
      {children}
    </Link>
  );
}

function DarkButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#d8b45f]/50 hover:bg-[#d8b45f]/10"
    >
      {children}
    </Link>
  );
}

export default function HomePage() {
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
                className="transition hover:text-[#d8b45f]"
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
              Sentient Connect™ MVP Launch
            </div>

            <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              The Human Operating System for Clarity, Accountability, and
              Aligned Execution.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/72">
              Sentient Connect™ helps individuals, founders, teams, and support
              organizations organize life, business, and behavior into clear
              daily action through AURA Genesis™, SentientOS™, and MIND | BODY |
              SPIRIT Triangulation™.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <GoldButton href="/request-access">Request Access</GoldButton>
              <DarkButton href="#system">Explore the System</DarkButton>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                ["What does it do?", "Helps people see what is happening and take the next right action."],
                ["Who is it for?", "People, founders, care teams, recovery programs, and operators."],
                ["How does it work?", "Guided check-ins, AI organization, human oversight, and execution reporting."],
              ].map(([title, body]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-4"
                >
                  <p className="text-sm font-semibold text-[#f7df9e]">
                    {title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/65">{body}</p>
                </div>
              ))}
            </div>
          </div>

          <TriangleGraphic />
        </div>
      </section>

      <section className="relative z-10 border-y border-white/10 bg-white/[0.025] px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>What this is</SectionLabel>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              A system for turning human complexity into clear action.
            </h2>
            <div>
              <p className="text-lg leading-8 text-white/72">
                Most people do not fail because they lack potential. They fail
                because their thoughts, habits, emotions, environment, business
                systems, and accountability are scattered.
              </p>
              <p className="mt-5 text-lg leading-8 text-white/72">
                Sentient Connect™ brings those pieces into one structured
                operating framework so progress becomes visible, measurable, and
                easier to act on.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  ["Clarity", "Understand what is actually happening."],
                  ["Accountability", "Know what needs to happen next."],
                  ["Execution", "Move with structure instead of chaos."],
                ].map(([title, body]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-[#d8b45f]/20 bg-black/40 p-5"
                  >
                    <p className="text-lg font-semibold text-[#f7df9e]">
                      {title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/65">
                      {body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="system" className="relative z-10 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>The Sentient Connect™ ecosystem</SectionLabel>
          <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              One protected framework. Multiple layers. Built around the human.
            </h2>
            <p className="max-w-xl text-base leading-7 text-white/65">
              The homepage should make the hierarchy obvious: Sentient Connect™
              is the master brand, SentientOS™ is the operating system, AURA
              Genesis™ is the intelligence layer, and MBS Triangulation™ is the
              human framework.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {ecosystem.map((item) => (
              <article
                key={item.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition hover:border-[#d8b45f]/45 hover:bg-[#d8b45f]/[0.06]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#d8b45f]">
                  {item.eyebrow}
                </p>
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em]">
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

      <section className="relative z-10 border-y border-white/10 bg-[#090909] px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>How it works</SectionLabel>
          <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Simple enough to use daily. Powerful enough to build around.
          </h2>

          <div className="mt-12 grid gap-4 lg:grid-cols-5">
            {howItWorks.map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-white/10 bg-black/40 p-6"
              >
                <p className="text-sm font-semibold text-[#d8b45f]">
                  {item.step}
                </p>
                <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 overflow-hidden rounded-[2rem] border border-[#d8b45f]/25 bg-[linear-gradient(135deg,rgba(216,180,95,0.12),rgba(255,255,255,0.03),rgba(0,0,0,0.2))] p-6 lg:p-8">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-[#f7df9e]">
              From chaos to clarity
            </p>
            <div className="grid gap-4 lg:grid-cols-4">
              {[
                ["Scattered Input", "stress, goals, habits, tasks, health signals, revenue, relationships, decisions"],
                ["AURA Genesis™ Organization", "patterns, priorities, risks, opportunities, action steps"],
                ["MBS Triangulation™", "mind, body, spirit"],
                ["Clear Execution", "daily action, reporting, accountability, progress"],
              ].map(([title, body], index) => (
                <div key={title} className="relative">
                  <div className="h-full rounded-3xl border border-white/10 bg-black/45 p-5">
                    <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#d8b45f] text-sm font-bold text-black">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/65">
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Applications</SectionLabel>
          <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            One system. Multiple applications.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {applications.map((item) => (
              <Link
                href={item.href}
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition hover:border-[#d8b45f]/45 hover:bg-[#d8b45f]/[0.06]"
              >
                <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/65">
                  {item.body}
                </p>
                <p className="mt-6 text-sm font-semibold text-[#d8b45f]">
                  Explore →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 border-y border-white/10 bg-white/[0.025] px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionLabel>About us</SectionLabel>
            <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Built from lived execution, personal lessons, financial pressure,
              and the belief that people can rebuild.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-white/72">
            <p>
              Sentient Connect™ is the lifelong result of lessons learned
              through personal growth, financial pressure, recovery, business
              building, leadership, failure, discipline, and execution.
            </p>
            <p>
              This system was not built from theory alone. It was built from the
              real need to create structure when life is unstable, to make better
              decisions under pressure, and to turn hard-earned lessons into
              something useful for others.
            </p>
            <p>
              The mission is simple: help people become clearer, more
              accountable, and more aligned in the way they live, work, recover,
              lead, and grow.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Mission, vision, values</SectionLabel>

          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-[#d8b45f]/25 bg-[#d8b45f]/10 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#f7df9e]">
                Mission
              </p>
              <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em]">
                To help people and organizations turn complexity into clarity,
                accountability, and aligned execution.
              </h3>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d8b45f]">
                Vision
              </p>
              <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em]">
                To become the leading human operating system for personal
                growth, behavioral support, business execution, and
                consent-based intelligence.
              </h3>
            </div>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {values.map(([title, body]) => (
              <div
                key={title}
                className="rounded-3xl border border-white/10 bg-black/40 p-5"
              >
                <h3 className="text-lg font-semibold text-[#f7df9e]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/65">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 border-y border-white/10 bg-[#090909] px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionLabel>Founder access</SectionLabel>
            <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Founder Access is the first live version of the system.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-white/72">
              Founder Access is for early users, partners, pilots, and
              organizations who want to help shape the first real-world version
              of Sentient Connect™.
            </p>
            <p className="mt-5 text-lg leading-8 text-white/72">
              This MVP is focused on clarity, daily structure, practical
              accountability, and measurable outcomes.
            </p>
            <div className="mt-8">
              <GoldButton href="/request-access">Request Founder Access</GoldButton>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 lg:p-10">
          <SectionLabel>Clear boundaries. Human-first design.</SectionLabel>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <h2 className="text-4xl font-semibold tracking-[-0.04em]">
              Built for support, organization, accountability, and ethical
              execution.
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Sentient Connect™ is not a replacement for therapy, medical care, emergency support, legal advice, or financial advice.",
                "AURA Genesis™ is designed to support organization, reflection, workflow, and decision clarity.",
                "Behavioral health and recovery use cases should include consent, human oversight, and appropriate professional involvement.",
                "Data, check-ins, and reports should be handled with privacy, permission, and clear user understanding.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/35 p-5 text-sm leading-7 text-white/68"
                >
                  {item}
                </div>
              ))}
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
                Built for clarity, accountability, aligned execution, and the
                greater good of humanity.
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
                  {navItems.slice(1).map((item) => (
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

import Link from "next/link";

const corePlatform = [
  {
    title: "SentientOS™",
    label: "Human operating system",
    description:
      "The daily operating layer for check-ins, goals, signals, accountability, and the next right action.",
    href: "/ecosystem/sentientos",
  },
  {
    title: "AURA Genesis™",
    label: "AI intelligence layer",
    description:
      "The intelligence and voice layer that turns scattered information into clearer priorities, workflows, and action.",
    href: "/ecosystem/aura-genesis",
  },
  {
    title: "MIND | BODY | SPIRIT Triangulation™",
    label: "Human framework",
    description:
      "The proprietary framework used to understand alignment across mental clarity, physical regulation, and purpose.",
    href: "/ecosystem/mind-body-spirit",
  },
];

const verticals = [
  {
    title: "Sentient Continuum™",
    label: "Clinical operating system",
    description:
      "Therapist-first workflows, Client 360, treatment planning, session workspaces, documentation, and AURA-assisted clinical operations.",
    href: "/ecosystem/continuum",
  },
  {
    title: "Northstar",
    label: "Recovery services",
    description:
      "Recovery navigation, case-management support, peer connection, structured programming, and community reintegration.",
    href: "/ecosystem/northstar",
  },
  {
    title: "Northstar Recovery Living",
    label: "Recovery housing",
    description:
      "Structured recovery-living environments designed to support stability, accountability, community, and the transition forward.",
    href: "/ecosystem/recovery-living",
  },
  {
    title: "Sentient Nutrition™",
    label: "Nutrition & physical wellness",
    description:
      "Practical nutrition systems that connect food, routine, education, physical wellness, and sustainable daily execution.",
    href: "/ecosystem/nutrition",
  },
  {
    title: "Recovery Forge",
    label: "Recovery infrastructure",
    description:
      "A recovery-focused program development and community infrastructure initiative within the Sentient ecosystem.",
    href: "/ecosystem/recovery-forge",
  },
];

const paths = [
  {
    title: "I want a system for myself",
    description:
      "Start with SentientOS for daily check-ins, goals, signals, and structured personal execution.",
    href: "/ecosystem/sentientos",
    cta: "Explore SentientOS",
  },
  {
    title: "I work in behavioral health",
    description:
      "See how Continuum organizes the therapist workflow while keeping the clinician in control.",
    href: "/ecosystem/continuum",
    cta: "Explore Continuum",
  },
  {
    title: "I am building recovery support",
    description:
      "Explore Northstar, Recovery Living, Nutrition, and Recovery Forge as connected recovery infrastructure.",
    href: "/ecosystem/northstar",
    cta: "Explore Recovery",
  },
];

function Brand() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Sentient Connect home">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#d8b45f]/35 bg-[#111] text-sm font-semibold text-[#f3d98f]">
        SC
      </div>
      <div className="leading-tight">
        <div className="text-sm font-semibold tracking-[0.15em] text-white">SENTIENT CONNECT™</div>
        <div className="text-[11px] tracking-[0.16em] text-[#d8b45f]">ONE CONNECTED ECOSYSTEM</div>
      </div>
    </Link>
  );
}

function Arrow() {
  return <span aria-hidden="true">→</span>;
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(216,180,95,0.12),transparent_30%),radial-gradient(circle_at_90%_10%,rgba(255,255,255,0.05),transparent_24%)]" />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
          <Brand />
          <nav className="hidden items-center gap-6 text-sm text-white/65 lg:flex">
            <a href="#platform" className="transition hover:text-[#e3c472]">Platform</a>
            <a href="#verticals" className="transition hover:text-[#e3c472]">Verticals</a>
            <a href="#paths" className="transition hover:text-[#e3c472]">Choose Your Path</a>
            <a href="#about" className="transition hover:text-[#e3c472]">About</a>
          </nav>
          <div className="flex items-center gap-2">
            <Link
              href="/login"
              className="hidden rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white/75 transition hover:border-[#d8b45f]/50 sm:inline-flex"
            >
              Login
            </Link>
            <a
              href="https://app.sentientconnect.io"
              className="rounded-full bg-[#d8b45f] px-4 py-2 text-xs font-bold text-black transition hover:bg-[#efd27f]"
            >
              Open SentientOS
            </a>
          </div>
        </div>
        <div className="border-t border-white/5 lg:hidden">
          <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-2 text-xs text-white/60">
            <a href="#platform" className="whitespace-nowrap rounded-full border border-white/10 px-3 py-1.5">Platform</a>
            <a href="#verticals" className="whitespace-nowrap rounded-full border border-white/10 px-3 py-1.5">Verticals</a>
            <a href="#paths" className="whitespace-nowrap rounded-full border border-white/10 px-3 py-1.5">Choose Your Path</a>
          </div>
        </div>
      </header>

      <section className="relative z-10 px-5 pb-16 pt-20 lg:px-8 lg:pb-24 lg:pt-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#d8b45f]">
              Sentient Connect LLC
            </p>
            <h1 className="text-5xl font-semibold tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              One connected system for human growth, recovery, clinical work, and execution.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/68">
              Sentient Connect is the parent ecosystem connecting software, AI, human development,
              clinical operations, recovery services, recovery living, nutrition, and structured
              accountability into one clear architecture.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://app.sentientconnect.io"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d8b45f] px-6 py-3 text-sm font-bold text-black transition hover:bg-[#efd27f]"
              >
                Open SentientOS <Arrow />
              </a>
              <a
                href="#verticals"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition hover:border-[#d8b45f]/45"
              >
                Explore the ecosystem <Arrow />
              </a>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {[
              ["Parent ecosystem", "Sentient Connect™", "The company and umbrella connecting every product, framework, and operating vertical."],
              ["Core operating layer", "SentientOS™ + AURA Genesis™", "The software and intelligence layers that organize signals, decisions, workflows, and action."],
              ["Human framework", "MIND | BODY | SPIRIT", "The underlying framework used to structure whole-person awareness and alignment."],
            ].map(([label, title, body]) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d8b45f]">{label}</p>
                <h2 className="mt-3 text-xl font-semibold">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-white/60">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="platform" className="relative z-10 border-y border-white/10 bg-white/[0.025] px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d8b45f]">Core platform</p>
          <div className="mt-4 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              Three layers. One operating model.
            </h2>
            <p className="max-w-xl text-base leading-7 text-white/60">
              The platform is intentionally simple: SentientOS organizes the experience, AURA provides intelligence,
              and MIND | BODY | SPIRIT provides the human framework.
            </p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {corePlatform.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-[2rem] border border-white/10 bg-black/35 p-7 transition hover:-translate-y-0.5 hover:border-[#d8b45f]/45 hover:bg-[#d8b45f]/[0.055]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d8b45f]">{item.label}</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/62">{item.description}</p>
                <p className="mt-7 text-sm font-semibold text-[#e4c574]">Explore <Arrow /></p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="verticals" className="relative z-10 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d8b45f]">Specialized verticals</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
            Different environments. Shared intelligence.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-white/60">
            Each vertical serves a distinct real-world need without becoming a disconnected brand. They all sit inside the same Sentient Connect architecture.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {verticals.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition hover:border-[#d8b45f]/45 hover:bg-[#d8b45f]/[0.05]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d8b45f]">{item.label}</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/60">{item.description}</p>
                <p className="mt-6 text-sm font-semibold text-[#e4c574]">View vertical <Arrow /></p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="paths" className="relative z-10 border-y border-white/10 bg-[#090909] px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d8b45f]">Choose your path</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
            Get visitors to the right part of Sentient Connect quickly.
          </h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {paths.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-3xl border border-white/10 bg-black/35 p-6 transition hover:border-[#d8b45f]/40"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/60">{item.description}</p>
                <p className="mt-6 text-sm font-semibold text-[#e4c574]">{item.cta} <Arrow /></p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="relative z-10 px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d8b45f]">What connects it all</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              One architecture instead of a pile of separate projects.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-white/66">
            <p>
              Sentient Connect is designed as an ecosystem. A person can use SentientOS. A clinician can work inside Continuum.
              A recovery organization can operate through Northstar. Recovery Living and Nutrition support the physical environment,
              while AURA and the MIND | BODY | SPIRIT framework create continuity across the experience.
            </p>
            <p>
              The goal of this website is to make that relationship obvious before asking anyone to learn individual product names.
            </p>
            <div className="flex flex-col gap-3 pt-3 sm:flex-row">
              <Link
                href="/request-access"
                className="inline-flex items-center justify-center rounded-full border border-[#d8b45f]/40 bg-[#d8b45f]/10 px-6 py-3 text-sm font-semibold text-[#f0d27d]"
              >
                Partner / pilot access
              </Link>
              <a
                href="https://app.sentientconnect.io"
                className="inline-flex items-center justify-center rounded-full bg-[#d8b45f] px-6 py-3 text-sm font-bold text-black"
              >
                Open SentientOS
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 bg-black px-5 py-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 lg:flex-row">
            <div>
              <Brand />
              <p className="mt-5 max-w-md text-sm leading-7 text-white/50">
                Software, AI, clinical operations, recovery infrastructure, nutrition, and human development under one connected system.
              </p>
            </div>
            <div className="grid gap-8 text-sm sm:grid-cols-3">
              <div>
                <p className="mb-3 font-semibold text-[#e4c574]">Platform</p>
                <div className="space-y-2 text-white/55">
                  {corePlatform.map((item) => (
                    <p key={item.title}><Link href={item.href} className="hover:text-white">{item.title}</Link></p>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-3 font-semibold text-[#e4c574]">Verticals</p>
                <div className="space-y-2 text-white/55">
                  {verticals.map((item) => (
                    <p key={item.title}><Link href={item.href} className="hover:text-white">{item.title}</Link></p>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-3 font-semibold text-[#e4c574]">Access</p>
                <div className="space-y-2 text-white/55">
                  <p><a href="https://app.sentientconnect.io" className="hover:text-white">Open SentientOS</a></p>
                  <p><Link href="/login" className="hover:text-white">Login</Link></p>
                  <p><Link href="/request-access" className="hover:text-white">Request Access</Link></p>
                  <p><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 border-t border-white/10 pt-6 text-xs leading-6 text-white/40">
            <p>© 2026 Sentient Connect LLC. All rights reserved.</p>
            <p className="mt-2">
              Sentient Connect™, SentientOS™, AURA Genesis™, Sentient Continuum™, Sentient Nutrition™, and MIND | BODY | SPIRIT Triangulation™ are part of the Sentient Connect ecosystem.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

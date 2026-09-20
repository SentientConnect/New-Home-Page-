import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Vertical = {
  title: string;
  eyebrow: string;
  summary: string;
  role: string;
  capabilities: string[];
  connects: string[];
  primaryCta: { label: string; href: string; external?: boolean };
};

const verticals: Record<string, Vertical> = {
  sentientos: {
    title: "SentientOS™",
    eyebrow: "Core platform · Human operating system",
    summary:
      "SentientOS is the daily operating layer of the Sentient Connect ecosystem: a structured place for check-ins, goals, signals, accountability, and clear next actions.",
    role:
      "It gives the broader ecosystem a shared operating surface so personal progress, support workflows, and AURA-assisted guidance are not scattered across disconnected tools.",
    capabilities: [
      "Daily MIND | BODY | SPIRIT check-ins",
      "Goal creation and progress tracking",
      "Signal and pattern visibility",
      "DISC-informed communication context",
      "AURA-assisted reflection and next actions",
      "Client and staff experiences where appropriate",
    ],
    connects: ["AURA Genesis™", "MIND | BODY | SPIRIT Triangulation™", "Sentient Continuum™", "Northstar"],
    primaryCta: { label: "Open SentientOS", href: "https://app.sentientconnect.io", external: true },
  },
  "aura-genesis": {
    title: "AURA Genesis™",
    eyebrow: "Core platform · AI intelligence layer",
    summary:
      "AURA Genesis is the intelligence and voice layer of Sentient Connect, designed to turn scattered information into clearer priorities, workflows, follow-up, and action.",
    role:
      "AURA sits across the ecosystem instead of becoming another isolated application. Its job is to help organize signal, surface what matters, and support human decision-making.",
    capabilities: [
      "Voice and conversational interaction",
      "Signal organization and summarization",
      "Workflow and follow-up support",
      "Goal and accountability guidance",
      "Operational and clinical-assist modes within defined boundaries",
      "Context-aware support across connected Sentient products",
    ],
    connects: ["SentientOS™", "Sentient Continuum™", "Northstar", "Sentient Nutrition™"],
    primaryCta: { label: "Request AURA access", href: "/request-access" },
  },
  "mind-body-spirit": {
    title: "MIND | BODY | SPIRIT Triangulation™",
    eyebrow: "Core platform · Human framework",
    summary:
      "MIND | BODY | SPIRIT Triangulation is the proprietary whole-person framework used across Sentient Connect to organize awareness, alignment, and the next practical step.",
    role:
      "The framework gives Sentient products a shared language for understanding mental clarity, physical regulation, and purpose without reducing a person to a single score or category.",
    capabilities: [
      "MIND: thoughts, clarity, attention, patterns, and decision pressure",
      "BODY: sleep, energy, movement, nutrition, regulation, and physical signals",
      "SPIRIT: purpose, values, meaning, connection, and alignment",
      "Daily and longitudinal signal review",
      "Goal alignment across all three domains",
      "Shared framework across consumer, recovery, and clinical workflows",
    ],
    connects: ["SentientOS™", "AURA Genesis™", "Sentient Continuum™", "Northstar"],
    primaryCta: { label: "Explore SentientOS", href: "/ecosystem/sentientos" },
  },
  continuum: {
    title: "Sentient Continuum™",
    eyebrow: "Specialized vertical · Clinical operating system",
    summary:
      "Sentient Continuum is the therapist-first clinical operating layer in the Sentient ecosystem, built to make the work around the session clearer, more connected, and easier to document.",
    role:
      "Continuum organizes the clinical workflow around the therapist and client rather than treating documentation as the center of care.",
    capabilities: [
      "Today view and therapist workflow",
      "Client 360 and longitudinal signal timeline",
      "Treatment plans and goal visibility",
      "Session workspace",
      "Post-session documentation workflows",
      "AURA clinical-copilot modes with human oversight",
    ],
    connects: ["AURA Genesis™", "SentientOS™", "MIND | BODY | SPIRIT Triangulation™", "Northstar"],
    primaryCta: { label: "Request Continuum access", href: "/request-access" },
  },
  northstar: {
    title: "Northstar",
    eyebrow: "Specialized vertical · Recovery services",
    summary:
      "Northstar is the recovery-services vertical of the Sentient ecosystem, connecting structured support, recovery navigation, accountability, and community reintegration.",
    role:
      "Northstar is designed to bridge the gaps between treatment, recovery support, daily life, and the systems people need to keep moving forward.",
    capabilities: [
      "Recovery navigation and structured support",
      "Case-management-oriented workflows",
      "Peer and community connection",
      "Group and program structure",
      "Goal and accountability visibility",
      "Continuity with SentientOS and AURA",
    ],
    connects: ["SentientOS™", "AURA Genesis™", "Northstar Recovery Living", "Sentient Nutrition™", "Recovery Forge"],
    primaryCta: { label: "Request Northstar information", href: "/request-access" },
  },
  "recovery-living": {
    title: "Northstar Recovery Living",
    eyebrow: "Specialized vertical · Recovery housing",
    summary:
      "Northstar Recovery Living is the housing vertical focused on structured, accountable recovery environments and the transition from treatment back into everyday life.",
    role:
      "Recovery Living extends the Sentient ecosystem into the physical environment, where routine, community, accountability, and daily execution matter most.",
    capabilities: [
      "Structured recovery-living environment",
      "Daily accountability and routine",
      "Connection to recovery support",
      "Community and reintegration focus",
      "Goal visibility through the broader Sentient ecosystem",
      "Coordination with Northstar services where appropriate",
    ],
    connects: ["Northstar", "SentientOS™", "Sentient Nutrition™", "Recovery Forge"],
    primaryCta: { label: "Request Recovery Living information", href: "/request-access" },
  },
  nutrition: {
    title: "Sentient Nutrition™",
    eyebrow: "Specialized vertical · Nutrition & physical wellness",
    summary:
      "Sentient Nutrition brings food, routine, education, and physical wellness into the same ecosystem as recovery, behavior, goals, and daily execution.",
    role:
      "Nutrition is treated as part of the operating environment rather than a disconnected add-on, supporting practical routines people can actually sustain.",
    capabilities: [
      "Practical nutrition planning",
      "Meal and routine structure",
      "Nutrition education",
      "Recovery-supportive physical wellness",
      "Connection to BODY signals and goals",
      "Integration with broader Sentient workflows",
    ],
    connects: ["MIND | BODY | SPIRIT Triangulation™", "SentientOS™", "Northstar", "Northstar Recovery Living"],
    primaryCta: { label: "Request Nutrition information", href: "/request-access" },
  },
  "recovery-forge": {
    title: "Recovery Forge",
    eyebrow: "Specialized vertical · Recovery infrastructure",
    summary:
      "Recovery Forge is the recovery-focused program development and community infrastructure initiative within the Sentient Connect ecosystem.",
    role:
      "It provides a place for recovery-oriented concepts, community infrastructure, and implementation work that support the broader Northstar and Sentient mission.",
    capabilities: [
      "Recovery-oriented program development",
      "Community infrastructure concepts",
      "Implementation support",
      "Connection across recovery verticals",
      "Shared Sentient operating principles",
      "Expansion path for future recovery initiatives",
    ],
    connects: ["Northstar", "Northstar Recovery Living", "Sentient Nutrition™", "SentientOS™"],
    primaryCta: { label: "Discuss Recovery Forge", href: "/request-access" },
  },
};

export function generateStaticParams() {
  return Object.keys(verticals).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const vertical = verticals[slug];
  if (!vertical) return {};
  return {
    title: vertical.title,
    description: vertical.summary,
  };
}

export default async function EcosystemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const vertical = verticals[slug];

  if (!vertical) notFound();

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(216,180,95,0.12),transparent_30%)]" />

      <header className="relative z-20 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
          <Link href="/" className="text-sm font-semibold tracking-[0.15em] text-white">
            SENTIENT CONNECT™
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href="/#verticals"
              className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white/70"
            >
              Ecosystem
            </Link>
            <a
              href="https://app.sentientconnect.io"
              className="rounded-full bg-[#d8b45f] px-4 py-2 text-xs font-bold text-black"
            >
              Open SentientOS
            </a>
          </div>
        </div>
      </header>

      <section className="relative z-10 px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d8b45f]">
              {vertical.eyebrow}
            </p>
            <h1 className="mt-5 text-5xl font-semibold tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              {vertical.title}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/68">{vertical.summary}</p>
            <div className="mt-8">
              {vertical.primaryCta.external ? (
                <a
                  href={vertical.primaryCta.href}
                  className="inline-flex rounded-full bg-[#d8b45f] px-6 py-3 text-sm font-bold text-black"
                >
                  {vertical.primaryCta.label}
                </a>
              ) : (
                <Link
                  href={vertical.primaryCta.href}
                  className="inline-flex rounded-full bg-[#d8b45f] px-6 py-3 text-sm font-bold text-black"
                >
                  {vertical.primaryCta.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 border-y border-white/10 bg-white/[0.025] px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d8b45f]">Role in the ecosystem</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em]">
              Built to connect, not compete with the rest of Sentient Connect.
            </h2>
          </div>
          <p className="text-lg leading-8 text-white/66">{vertical.role}</p>
        </div>
      </section>

      <section className="relative z-10 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d8b45f]">Core capabilities</p>
              <div className="mt-6 grid gap-3">
                {vertical.capabilities.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 text-sm leading-6 text-white/68">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d8b45f]">Connected with</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {vertical.connects.map((item) => (
                  <span key={item} className="rounded-full border border-[#d8b45f]/25 bg-[#d8b45f]/[0.07] px-4 py-2 text-sm text-[#ead18c]">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-10 rounded-3xl border border-white/10 bg-black/35 p-6">
                <h3 className="text-xl font-semibold">Part of one Sentient architecture.</h3>
                <p className="mt-3 text-sm leading-7 text-white/60">
                  Return to the ecosystem overview to see how this vertical relates to the core platform and the other operating areas.
                </p>
                <Link href="/#verticals" className="mt-5 inline-flex text-sm font-semibold text-[#e4c574]">
                  Back to ecosystem →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 bg-black px-5 py-8 text-center text-xs text-white/40 lg:px-8">
        © 2026 Sentient Connect LLC. All rights reserved.
      </footer>
    </main>
  );
}

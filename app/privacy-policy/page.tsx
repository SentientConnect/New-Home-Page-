import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Sentient Connect",
  description:
    "Privacy Policy for Sentient Connect, SentientOS, AURA Genesis, and related services.",
};

const effectiveDate = "June 25, 2026";
const lastUpdated = "June 25, 2026";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4 border-t border-white/10 pt-10">
      <h2 className="text-2xl font-semibold tracking-tight text-white">
        {title}
      </h2>
      <div className="space-y-4 text-sm leading-7 text-zinc-300 md:text-base">
        {children}
      </div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-6 text-zinc-300">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-20 md:px-10">
        <div className="mb-14 rounded-3xl border border-yellow-500/20 bg-zinc-950/80 p-8 shadow-2xl shadow-yellow-500/5 md:p-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-yellow-400">
            Sentient Connect LLC
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Privacy Policy
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-300 md:text-lg">
            This Privacy Policy explains how Sentient Connect LLC collects,
            uses, stores, protects, discloses, and otherwise processes personal
            information across Sentient Connect™, SentientOS™, AURA Genesis™,
            AURA™, and related services, websites, platforms, demos, pilots,
            automations, consulting services, and future verticals.
          </p>

          <div className="mt-8 grid gap-4 text-sm text-zinc-400 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <span className="block text-zinc-500">Effective Date</span>
              <span className="font-medium text-white">{effectiveDate}</span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <span className="block text-zinc-500">Last Updated</span>
              <span className="font-medium text-white">{lastUpdated}</span>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <Section title="1. Scope of This Policy">
            <p>
              For purposes of this Privacy Policy, “Sentient Connect,” “we,”
              “us,” and “our” refer to Sentient Connect LLC and its current and
              future products, systems, brands, programs, and verticals.
            </p>

            <p>This Privacy Policy applies to, but is not limited to:</p>

            <BulletList
              items={[
                "Sentient Connect™",
                "SentientOS™",
                "AURA Genesis™ and AURA™",
                "AURA Genesis Behavioral Health",
                "AURA Genesis Home Services",
                "MIND | BODY | SPIRIT Triangulation™ frameworks",
                "DISC profile tools and related assessments",
                "Business consulting, sales, intake, outreach, automation, and CRM workflows",
                "Websites and subdomains operated by us, including sentientconnect.io and related demo or vertical sites",
                "Future mobile applications, wearable integrations, voice AI systems, dashboards, client portals, and connected services",
              ]}
            />

            <p>
              This Privacy Policy applies to visitors, users, clients,
              prospective clients, pilot participants, customers, vendors,
              contractors, business partners, authorized representatives, and
              any other person who interacts with our services.
            </p>

            <p>
              Some services may also have additional terms, notices,
              authorizations, consent forms, business associate agreements, data
              processing agreements, client agreements, pilot agreements, or
              service-specific privacy notices. If there is a conflict between
              this Privacy Policy and a signed written agreement that applies to
              a specific service, the signed written agreement controls for that
              service.
            </p>
          </Section>

          <Section title="2. Important Notice About Our Services">
            <p>
              Sentient Connect builds and operates AI-assisted systems, coaching
              frameworks, intake flows, workflow automations, behavioral support
              tools, business tools, and operational platforms.
            </p>

            <p>Unless a separate written agreement clearly states otherwise:</p>

            <BulletList
              items={[
                "We are not an emergency service.",
                "We are not a crisis hotline.",
                "We do not provide emergency medical, psychiatric, legal, financial, or clinical services.",
                "We do not diagnose, treat, cure, or prevent any disease or condition.",
                "We do not replace licensed medical, behavioral health, legal, financial, or clinical professionals.",
                "AI outputs, coaching insights, dashboards, summaries, recommendations, nudges, classifications, profile outputs, and reports are informational and support-oriented only.",
                "Users should rely on qualified professionals for medical, behavioral health, legal, financial, clinical, or safety-critical decisions.",
              ]}
            />

            <p>
              If you are experiencing an emergency, call 911 or your local
              emergency number. If you are in emotional distress or thinking
              about self-harm, contact emergency services or a qualified crisis
              resource immediately.
            </p>
          </Section>

          <Section title="3. Our Privacy Commitments">
            <p>We design our systems around the following privacy principles:</p>

            <BulletList
              items={[
                "Data minimization: We try to collect only what is reasonably needed to operate, secure, improve, and deliver the services.",
                "Purpose limitation: We use personal information for the purposes described in this Privacy Policy, disclosed at collection, authorized by contract, or permitted by law.",
                "Sensitive data protection: We treat wellness, behavioral, recovery, biometric, voice, wearable, and health-related information as highly sensitive.",
                "Consent where required: We seek consent where required by law, contract, or the sensitivity of the data.",
                "Human oversight: AI systems are intended to assist, not replace, human judgment in consequential settings.",
                "Security by design: We use administrative, technical, and organizational safeguards to protect information.",
                "Transparency: We disclose when users interact with AI systems where required or appropriate.",
                "No hidden sale of sensitive information: We do not sell sensitive personal information, health information, voice recordings, biometric data, recovery-support information, or behavioral-health information.",
              ]}
            />
          </Section>

          <Section title="4. Information We Collect">
            <p>
              We may collect the following categories of information depending
              on how you interact with us.
            </p>

            <h3 className="text-lg font-semibold text-white">
              Identity and Contact Information
            </h3>
            <BulletList
              items={[
                "Name",
                "Email address",
                "Phone number",
                "Mailing address",
                "Company name",
                "Role or title",
                "Login credentials",
                "Account identifiers",
                "Signature or authorization details",
                "Communication preferences",
              ]}
            />

            <h3 className="text-lg font-semibold text-white">
              Business and Professional Information
            </h3>
            <BulletList
              items={[
                "Employer or organization",
                "Job title",
                "Industry",
                "Business goals",
                "Operational problems",
                "Consulting needs",
                "Vendor information",
                "Client status",
                "Sales pipeline status",
                "Meeting notes",
                "Scheduling information",
                "Service preferences",
                "Product interest",
                "CRM records",
                "Business process information",
              ]}
            />

            <h3 className="text-lg font-semibold text-white">
              Account and Portal Information
            </h3>
            <BulletList
              items={[
                "Username",
                "Password hash",
                "Authentication data",
                "Access permissions",
                "Login history",
                "Session data",
                "Role-based permissions",
                "Security settings",
                "User preferences",
                "Dashboard activity",
              ]}
            />

            <p>We do not intend to store plain-text passwords.</p>

            <h3 className="text-lg font-semibold text-white">
              Intake, Coaching, Self-Assessment, and Framework Data
            </h3>
            <BulletList
              items={[
                "Personal goals",
                "Self-reported stressors",
                "Mindset, clarity, focus, urgency, impulse, or decision-readiness scores",
                "Body, sleep, energy, nutrition, movement, craving-control, or regulation scores",
                "Spirit, purpose, prayer, integrity, service, forgiveness, or alignment scores",
                "MIND | BODY | SPIRIT Triangulation™ reflections",
                "DISC profile answers and outputs",
                "Coaching notes",
                "Progress tracking",
                "User-generated journal-style entries",
                "Daily check-in responses",
                "Behavioral patterns voluntarily submitted by the user",
                "Recovery-support or wellness-support data voluntarily submitted by the user",
              ]}
            />

            <h3 className="text-lg font-semibold text-white">
              Health, Wellness, Behavioral, Recovery, and Sensitive Information
            </h3>
            <BulletList
              items={[
                "Wellness information",
                "Behavioral-health support information",
                "Recovery-support information",
                "Substance-use recovery support information",
                "Emotional regulation information",
                "Sleep, energy, nutrition, movement, or body-regulation information",
                "Self-reported symptoms or concerns",
                "Peer-support or coaching-related information",
                "Information related to care coordination, if voluntarily provided",
                "Information entered into demo or pilot environments",
                "Health-related information submitted through connected forms, portals, or integrations",
              ]}
            />

            <p>
              We treat this information as sensitive. We do not use it for
              targeted advertising. We do not sell it. We do not disclose it
              except as described in this Privacy Policy, with your consent,
              under contract, as required by law, or as necessary to provide and
              secure the services.
            </p>

            <h3 className="text-lg font-semibold text-white">
              Voice, Audio, Video, Transcription, and AI Interaction Data
            </h3>
            <BulletList
              items={[
                "Voice recordings",
                "Audio recordings",
                "Video recordings",
                "Transcripts",
                "Chat messages",
                "Prompts",
                "AI outputs",
                "Summaries",
                "Call metadata",
                "Interaction timestamps",
                "Speaker labels",
                "Quality-control notes",
                "Consent records",
                "Voice-agent logs",
              ]}
            />

            <p>
              Unless a service clearly states otherwise and obtains required
              consent, we do not use voice recordings to identify you by
              biometric voiceprint.
            </p>

            <p>
              Where required by law, we will provide notice and obtain consent
              before recording, transcribing, or analyzing calls, meetings,
              voice interactions, or biometric information.
            </p>

            <h3 className="text-lg font-semibold text-white">
              Wearable, Device, Sensor, and Connected-Health Data
            </h3>
            <BulletList
              items={[
                "Heart rate",
                "Sleep data",
                "Movement data",
                "Activity data",
                "Device data",
                "Check-in reminders",
                "Wellness trends",
                "Sensor-derived metrics",
                "User-selected integrations",
                "Connected-device status",
                "App interaction data",
              ]}
            />

            <p>
              Wearable and sensor integrations will be consent-based where
              required. Users should review the privacy policies of any
              wearable, device, app, or third-party integration provider.
            </p>

            <h3 className="text-lg font-semibold text-white">
              Home Services and Field Operations Data
            </h3>
            <BulletList
              items={[
                "Property or service address",
                "Maintenance requests",
                "Tenant or resident contact information",
                "Vendor contact information",
                "Service photos",
                "Work order notes",
                "Scheduling details",
                "Dispatch logs",
                "Completion status",
                "Vendor acceptance records",
                "Payment or invoice metadata",
                "Audit trail data",
                "Customer support communications",
              ]}
            />

            <h3 className="text-lg font-semibold text-white">
              Payment and Transaction Information
            </h3>
            <BulletList
              items={[
                "Billing name",
                "Billing address",
                "Payment method metadata",
                "Transaction amount",
                "Invoice details",
                "Subscription status",
                "Payment confirmation",
                "Tax-related records",
                "Refund or cancellation records",
              ]}
            />

            <p>
              We do not intend to store full payment card numbers on our own
              servers. Payment card information is generally processed by
              third-party payment processors.
            </p>

            <h3 className="text-lg font-semibold text-white">
              Communications and Support Information
            </h3>
            <BulletList
              items={[
                "Emails",
                "Text messages",
                "Form submissions",
                "Support tickets",
                "Call notes",
                "Chat messages",
                "Meeting notes",
                "Attachments voluntarily submitted",
                "Feedback",
                "Testimonials",
                "Consent or authorization records",
              ]}
            />

            <h3 className="text-lg font-semibold text-white">
              Website, Device, Cookie, and Analytics Information
            </h3>
            <BulletList
              items={[
                "IP address",
                "Device type",
                "Browser type",
                "Operating system",
                "Referring URL",
                "Pages visited",
                "Links clicked",
                "Time on page",
                "Session identifiers",
                "Cookie identifiers",
                "Approximate location derived from IP address",
                "Error logs",
                "Security logs",
                "Performance logs",
                "Analytics events",
              ]}
            />

            <h3 className="text-lg font-semibold text-white">
              Location Information
            </h3>
            <BulletList
              items={[
                "Approximate location from IP address",
                "Service address if voluntarily provided",
                "Business address",
                "Property address",
                "Location information from connected services if enabled and authorized",
              ]}
            />

            <p>
              We do not collect precise GPS location unless the service requires
              it, the user enables it, or notice and consent are provided where
              required.
            </p>

            <h3 className="text-lg font-semibold text-white">
              Information From Third Parties
            </h3>
            <BulletList
              items={[
                "Clients or organizations that authorize your access",
                "Business partners",
                "Vendors",
                "Scheduling tools",
                "CRM platforms",
                "Payment processors",
                "Analytics providers",
                "Communication platforms",
                "AI service providers",
                "Referral sources",
                "Publicly available sources",
                "Authorized representatives",
                "Connected accounts or integrations you approve",
              ]}
            />
          </Section>

          <Section title="5. How We Use Information">
            <p>We may use information for the following purposes:</p>

            <h3 className="text-lg font-semibold text-white">
              To Provide and Operate Services
            </h3>
            <BulletList
              items={[
                "Operate websites, portals, dashboards, apps, and demos",
                "Create and manage accounts",
                "Provide coaching, consulting, automation, and AI-assisted services",
                "Process forms and intake submissions",
                "Generate reports, summaries, dashboards, and recommendations",
                "Route service requests",
                "Support home services workflows",
                "Support behavioral-health, coaching, wellness, or recovery-support workflows",
                "Support DISC, MIND | BODY | SPIRIT Triangulation™, and related assessment tools",
                "Provide customer service",
                "Manage pilots, demos, subscriptions, and paid services",
              ]}
            />

            <h3 className="text-lg font-semibold text-white">
              To Personalize and Improve Services
            </h3>
            <BulletList
              items={[
                "Customize user experience",
                "Improve workflows",
                "Improve prompts, templates, dashboards, and automations",
                "Understand usage patterns",
                "Debug errors",
                "Improve service quality",
                "Develop new features",
                "Evaluate product-market fit",
                "Improve safety and reliability",
              ]}
            />

            <p>
              We do not use sensitive health, wellness, behavioral, recovery,
              voice, biometric, or client-confidential information to train
              general-purpose AI models unless allowed by contract, consent,
              de-identification, or applicable law.
            </p>

            <h3 className="text-lg font-semibold text-white">
              To Support AI Features
            </h3>
            <BulletList
              items={[
                "Generate AI responses",
                "Summarize user-provided content",
                "Classify requests",
                "Route tasks",
                "Produce reports",
                "Support voice AI",
                "Support transcription",
                "Support intake triage",
                "Assist with coaching or operational recommendations",
                "Detect safety issues",
                "Improve AI reliability and reduce errors",
              ]}
            />

            <p>
              AI outputs may be incomplete, inaccurate, or inappropriate for
              certain uses. Users and organizations are responsible for
              reviewing AI outputs before relying on them, especially in
              business, health, behavioral, legal, financial, employment,
              housing, insurance, or other consequential settings.
            </p>

            <h3 className="text-lg font-semibold text-white">
              To Communicate With You
            </h3>
            <BulletList
              items={[
                "Respond to inquiries",
                "Send service updates",
                "Confirm appointments",
                "Send onboarding information",
                "Provide support",
                "Send billing notices",
                "Send administrative notices",
                "Send marketing communications where permitted",
                "Manage consent and communication preferences",
              ]}
            />

            <p>
              You may opt out of non-essential marketing communications. We may
              still send transactional, legal, security, billing, or
              service-related messages.
            </p>

            <h3 className="text-lg font-semibold text-white">
              To Process Payments and Manage Accounts
            </h3>
            <BulletList
              items={[
                "Process payments",
                "Manage subscriptions",
                "Send invoices",
                "Process refunds",
                "Verify account status",
                "Maintain accounting records",
                "Detect billing issues",
                "Prevent fraud",
              ]}
            />

            <h3 className="text-lg font-semibold text-white">
              To Protect Safety, Security, and Integrity
            </h3>
            <BulletList
              items={[
                "Authenticate users",
                "Prevent unauthorized access",
                "Detect abuse, fraud, or misuse",
                "Monitor system security",
                "Maintain audit logs",
                "Enforce agreements",
                "Protect users, clients, vendors, and the public",
                "Investigate suspicious activity",
                "Respond to security incidents",
                "Protect the rights, property, and safety of Sentient Connect and others",
              ]}
            />

            <h3 className="text-lg font-semibold text-white">
              To Comply With Law and Legal Obligations
            </h3>
            <BulletList
              items={[
                "Comply with applicable laws",
                "Respond to lawful requests",
                "Preserve records",
                "Enforce contracts",
                "Resolve disputes",
                "Respond to regulatory inquiries",
                "Support audits",
                "Maintain tax, accounting, and corporate records",
                "Establish, exercise, or defend legal claims",
              ]}
            />
          </Section>

          <Section title="6. AI, Automation, and Human Review">
            <p>
              Our services may use artificial intelligence, machine learning,
              automation, large language models, speech-to-text, natural
              language processing, scoring, classification, routing,
              summarization, and other automated tools.
            </p>

            <p>We may use AI to assist with:</p>

            <BulletList
              items={[
                "Intake",
                "Triage",
                "Coaching support",
                "Operational workflows",
                "Home service routing",
                "Behavioral-support summaries",
                "Business consulting workflows",
                "DISC or framework analysis",
                "Dashboard insights",
                "Voice interactions",
                "Call summaries",
                "Report generation",
                "Administrative support",
              ]}
            />

            <p>
              AI tools are not perfect and may produce inaccurate, incomplete,
              biased, outdated, or inappropriate outputs. AI outputs should be
              reviewed by a qualified person before being used for important
              decisions.
            </p>

            <p>
              Unless specifically authorized under a written agreement, our AI
              systems are not intended to make final decisions about employment,
              housing, credit, insurance, legal services, government services,
              health care access, or other consequential decisions.
            </p>

            <p>
              Where our services are used in a setting that may materially
              influence a consequential decision, we expect the organization
              using the service to maintain appropriate human review, notices,
              appeal rights, correction rights, impact assessments, and other
              controls required by applicable law.
            </p>
          </Section>

          <Section title="7. HIPAA, PHI, and Healthcare-Related Data">
            <p>
              Some Sentient Connect services may be used near healthcare,
              behavioral health, peer support, recovery support, coaching, or
              wellness contexts. Privacy obligations depend on the specific
              relationship and legal role.
            </p>

            <h3 className="text-lg font-semibold text-white">
              When HIPAA May Apply
            </h3>
            <p>
              HIPAA may apply when we act as a business associate to a
              HIPAA-covered entity or another business associate under a signed
              Business Associate Agreement.
            </p>

            <p>
              If we sign a Business Associate Agreement, we will handle
              protected health information according to that agreement and
              applicable HIPAA obligations. If a Business Associate Agreement
              conflicts with this Privacy Policy for protected health
              information, the Business Associate Agreement controls.
            </p>

            <h3 className="text-lg font-semibold text-white">
              When HIPAA May Not Apply
            </h3>
            <p>
              Not all health, wellness, coaching, recovery-support, wearable, or
              behavioral data is protected by HIPAA. Information submitted
              directly to a consumer app, coaching service, demo, form, website,
              or non-covered service may not be HIPAA-protected unless a
              covered-entity or business-associate relationship exists.
            </p>

            <p>
              Even when HIPAA does not apply, we treat health-related,
              wellness-related, recovery-related, behavioral, and biometric
              information as sensitive and protect it under this Privacy Policy,
              applicable consumer privacy laws, contracts, and security
              practices.
            </p>

            <h3 className="text-lg font-semibold text-white">
              No Treatment Relationship Unless Expressly Agreed
            </h3>
            <p>
              Using our services does not create a doctor-patient,
              therapist-client, counselor-client, attorney-client,
              financial-advisor-client, or clinical treatment relationship
              unless a separate written agreement with an appropriately licensed
              provider says so.
            </p>
          </Section>

          <Section title="8. Consumer Health Data Notice">
            <p>
              Some information we collect may qualify as consumer health data
              under certain state laws. This may include information that
              identifies or could reasonably be associated with a person’s past,
              present, or future physical or mental health status, wellness
              status, recovery-support status, behavioral support, biometric
              data, wearable data, or health-related inferences.
            </p>

            <p>
              We may collect consumer health data only as reasonably necessary
              to provide requested services, support user-authorized features,
              operate pilots or demos, fulfill contracts, improve safety and
              reliability, comply with law, or as otherwise disclosed and
              consented to where required.
            </p>

            <p>
              We do not sell consumer health data. We do not use consumer health
              data for targeted advertising.
            </p>

            <p>We do not disclose consumer health data except:</p>

            <BulletList
              items={[
                "With your consent",
                "To provide the requested service",
                "To service providers and processors under appropriate contractual restrictions",
                "To the organization that authorized or administers your access, where applicable",
                "To comply with law",
                "To protect safety, security, rights, or legal interests",
                "As otherwise permitted by applicable law",
              ]}
            />

            <p>
              Where required, users may request access, deletion, withdrawal of
              consent, or information about third parties with whom consumer
              health data has been shared.
            </p>
          </Section>

          <Section title="9. Biometric, Voice, and Identity-Security Data">
            <p>
              Some current or future services may include enhanced
              identity-security features, including:
            </p>

            <BulletList
              items={[
                "Voice phrase verification",
                "Fingerprint authentication through device-level systems",
                "Facial recognition through device-level systems",
                "CAC-style ID verification",
                "Multi-factor authentication",
                "Passkeys",
                "Security phrase verification",
                "Other identity-verification tools",
              ]}
            />

            <p>
              Unless clearly disclosed otherwise, we do not store fingerprint
              templates or facial templates directly. Device-based biometric
              authentication may be handled by the user’s device or operating
              system.
            </p>

            <p>
              If we ever collect biometric identifiers, biometric templates,
              voiceprints, or similar biometric information directly, we will
              provide notice and obtain consent where required by law. We will
              use biometric data only for disclosed purposes, restrict access,
              retain it only as long as necessary or legally permitted, and
              delete it according to applicable retention requirements.
            </p>
          </Section>

          <Section title="10. Cookies, Tracking, Analytics, and Similar Technologies">
            <p>
              We may use cookies, pixels, scripts, SDKs, local storage,
              analytics tools, and similar technologies to:
            </p>

            <BulletList
              items={[
                "Operate websites",
                "Remember preferences",
                "Maintain sessions",
                "Secure accounts",
                "Measure website performance",
                "Understand traffic and usage",
                "Improve services",
                "Support marketing attribution where permitted",
                "Detect fraud or abuse",
              ]}
            />

            <p>
              Some cookies are necessary for website operation. Others may be
              optional.
            </p>

            <p>
              Where required, we will provide cookie choices and honor
              applicable opt-out signals, including legally recognized universal
              opt-out mechanisms.
            </p>

            <p>
              We do not knowingly use tracking technologies to disclose
              protected health information to advertising or analytics vendors
              in a manner prohibited by HIPAA or applicable law.
            </p>
          </Section>

          <Section title="11. How We Share Information">
            <p>
              We may share information with the following categories of
              recipients.
            </p>

            <h3 className="text-lg font-semibold text-white">
              Service Providers and Processors
            </h3>
            <BulletList
              items={[
                "Cloud hosting providers",
                "Database providers",
                "AI service providers",
                "Communication platforms",
                "Email providers",
                "SMS providers",
                "CRM systems",
                "Payment processors",
                "Analytics providers",
                "Security providers",
                "Scheduling tools",
                "Automation platforms",
                "Customer support tools",
                "Legal, accounting, compliance, and professional advisors",
              ]}
            />

            <p>
              These vendors are authorized to process information only as needed
              to provide services to us or as otherwise permitted by law or
              contract.
            </p>

            <h3 className="text-lg font-semibold text-white">
              Clients, Organizations, and Administrators
            </h3>
            <p>
              If you access our services through an employer, provider, client,
              pilot organization, recovery-support organization,
              behavioral-health organization, home-services company, property
              manager, or other organization, we may share information with that
              organization according to the applicable agreement, permissions,
              and service configuration.
            </p>

            <h3 className="text-lg font-semibold text-white">
              Authorized Users and Representatives
            </h3>
            <BulletList
              items={[
                "Account administrators",
                "Care coordinators",
                "Coaches",
                "Consultants",
                "Family representatives, if authorized",
                "Business representatives",
                "Legal representatives",
                "Vendors assigned to a work order",
                "Other users you invite or authorize",
              ]}
            />

            <h3 className="text-lg font-semibold text-white">
              Legal, Safety, and Compliance Disclosures
            </h3>
            <p>We may disclose information if we believe it is reasonably necessary to:</p>

            <BulletList
              items={[
                "Comply with law",
                "Respond to subpoenas, warrants, court orders, or lawful requests",
                "Cooperate with regulators",
                "Enforce agreements",
                "Protect rights, safety, or property",
                "Investigate fraud, abuse, or security incidents",
                "Prevent harm",
                "Establish, exercise, or defend legal claims",
              ]}
            />

            <h3 className="text-lg font-semibold text-white">
              Business Transfers
            </h3>
            <p>
              If we are involved in a merger, acquisition, financing,
              reorganization, sale of assets, bankruptcy, investment
              transaction, or similar business transaction, information may be
              disclosed or transferred as part of that transaction, subject to
              appropriate protections.
            </p>

            <h3 className="text-lg font-semibold text-white">
              De-Identified, Aggregated, or Anonymized Data
            </h3>
            <p>
              We may create and use de-identified, aggregated, or anonymized
              information for analytics, product development, research,
              reporting, benchmarking, security, marketing, and business
              purposes.
            </p>

            <p>
              We will not attempt to re-identify de-identified data except as
              permitted by law, such as to test de-identification methods or
              comply with legal requirements.
            </p>
          </Section>

          <Section title="12. Selling, Sharing, and Targeted Advertising">
            <p>
              We do not sell sensitive personal information, consumer health
              data, protected health information, biometric data, voice
              recordings, recovery-support information, behavioral-health
              information, or wearable data.
            </p>

            <p>
              We do not use sensitive personal information, consumer health
              data, protected health information, biometric data,
              recovery-support information, behavioral-health information, or
              wearable data for targeted advertising.
            </p>

            <p>
              Some privacy laws define sale or sharing broadly to include
              certain advertising, analytics, or marketing technology
              activities. If our use of cookies, analytics, pixels, or
              advertising tools is considered a sale, sharing, or targeted
              advertising under applicable law, you may opt out.
            </p>

            <p>
              We will provide a “Do Not Sell or Share My Personal Information”
              or equivalent mechanism where required.
            </p>
          </Section>

          <Section title="13. Data Retention">
            <p>
              We retain information for as long as reasonably necessary for the
              purposes described in this Privacy Policy, including to:
            </p>

            <BulletList
              items={[
                "Provide services",
                "Maintain accounts",
                "Complete transactions",
                "Support users",
                "Comply with contracts",
                "Maintain business records",
                "Meet legal, tax, accounting, audit, or regulatory obligations",
                "Resolve disputes",
                "Enforce agreements",
                "Maintain security",
                "Improve services",
                "Protect legal rights",
              ]}
            />

            <p>Retention periods vary depending on the type of information, service, contract, and legal requirements.</p>

            <BulletList
              items={[
                "Account information may be retained while an account remains active and for a reasonable period afterward.",
                "Transaction records may be retained as required for tax, accounting, and legal purposes.",
                "Security logs may be retained for security, audit, and fraud-prevention purposes.",
                "Coaching, wellness, behavioral, or recovery-support records may be retained according to the applicable service agreement, consent, legal requirement, or user request.",
                "Audio, video, transcripts, and AI logs may be retained according to the applicable service settings, consent, contract, and legal obligations.",
                "De-identified or aggregated data may be retained longer where permitted by law.",
              ]}
            />

            <p>
              We may retain information longer when required or permitted by
              law, subject to a legal hold, needed to resolve disputes, or
              necessary to protect rights, safety, or security.
            </p>
          </Section>

          <Section title="14. Data Security">
            <p>
              We use reasonable administrative, technical, and organizational
              safeguards designed to protect personal information against
              unauthorized access, loss, misuse, alteration, disclosure, or
              destruction.
            </p>

            <p>Safeguards may include:</p>

            <BulletList
              items={[
                "Encryption in transit",
                "Encryption at rest where appropriate",
                "Access controls",
                "Role-based permissions",
                "Multi-factor authentication where appropriate",
                "Audit logs",
                "Secure cloud infrastructure",
                "Vendor review",
                "Confidentiality obligations",
                "Incident response processes",
                "Backups",
                "Monitoring",
                "Least-privilege access",
                "Segmented permissions",
                "Security reviews for sensitive workflows",
              ]}
            />

            <p>
              No system is 100% secure. We cannot guarantee absolute security of
              any information transmitted to or stored by us.
            </p>

            <p>
              You are responsible for keeping your login credentials secure and
              notifying us immediately if you believe your account has been
              compromised.
            </p>
          </Section>

          <Section title="15. Data Breach and Security Incident Notice">
            <p>
              If we discover a security incident involving personal
              information, we will investigate and take appropriate steps based
              on the nature of the incident, the information involved,
              applicable law, contractual obligations, and risk of harm.
            </p>

            <p>
              Where legally required, we will notify affected individuals,
              clients, regulators, covered entities, business partners, or other
              required parties.
            </p>

            <p>
              If protected health information is involved and we are acting as a
              business associate, we will follow the applicable Business
              Associate Agreement and HIPAA breach-notification obligations.
            </p>

            <p>
              If consumer health data is involved and a health breach
              notification law applies, we will comply with applicable
              notification obligations.
            </p>
          </Section>

          <Section title="16. Your Privacy Choices and Rights">
            <p>
              Depending on where you live and the nature of your interaction
              with us, you may have rights to:
            </p>

            <BulletList
              items={[
                "Access personal information",
                "Confirm whether we process your personal information",
                "Correct inaccurate information",
                "Delete personal information",
                "Obtain a portable copy of personal information",
                "Opt out of sale, sharing, targeted advertising, or certain profiling",
                "Limit use of sensitive personal information where applicable",
                "Withdraw consent where processing is based on consent",
                "Appeal a denied privacy request where required",
                "Request information about categories of third parties with whom information is shared",
                "Object to or restrict certain processing where applicable",
              ]}
            />

            <p>
              To submit a request, contact us at{" "}
              <a
                href="mailto:info@sentientconnect.io"
                className="text-yellow-400 underline underline-offset-4 hover:text-yellow-300"
              >
                info@sentientconnect.io
              </a>{" "}
              with the subject line “Privacy Request.”
            </p>

            <p>
              We may need to verify your identity before fulfilling a request.
              We may deny or limit requests where permitted by law, including
              where information is necessary for security, legal compliance,
              contract performance, fraud prevention, dispute resolution, or
              other lawful purposes.
            </p>

            <p>
              We will not discriminate against you for exercising privacy
              rights.
            </p>
          </Section>

          <Section title="17. Colorado Privacy Rights">
            <p>Colorado residents may have the right to:</p>

            <BulletList
              items={[
                "Access personal data",
                "Correct inaccurate personal data",
                "Delete personal data",
                "Obtain a portable copy of personal data",
                "Opt out of targeted advertising",
                "Opt out of the sale of personal data",
                "Opt out of certain profiling",
                "Appeal a denied request",
              ]}
            />

            <p>
              Where required, we will honor recognized universal opt-out
              mechanisms.
            </p>

            <p>
              Colorado residents may submit privacy requests by emailing{" "}
              <a
                href="mailto:info@sentientconnect.io"
                className="text-yellow-400 underline underline-offset-4 hover:text-yellow-300"
              >
                info@sentientconnect.io
              </a>{" "}
              with the subject line “Colorado Privacy Request.”
            </p>

            <p>
              If your request is denied, you may appeal by replying to our
              decision notice with the subject line “Colorado Privacy Appeal.”
            </p>
          </Section>

          <Section title="18. California Privacy Rights">
            <p>
              California residents may have rights under California privacy law,
              including the right to:
            </p>

            <BulletList
              items={[
                "Know what personal information we collect, use, disclose, sell, or share",
                "Access personal information",
                "Delete personal information",
                "Correct inaccurate personal information",
                "Opt out of sale or sharing",
                "Limit use and disclosure of sensitive personal information where applicable",
                "Not be discriminated against for exercising privacy rights",
              ]}
            />

            <p>
              We do not knowingly sell or share personal information of users
              under 16.
            </p>

            <p>
              California residents may submit requests by emailing{" "}
              <a
                href="mailto:info@sentientconnect.io"
                className="text-yellow-400 underline underline-offset-4 hover:text-yellow-300"
              >
                info@sentientconnect.io
              </a>{" "}
              with the subject line “California Privacy Request.”
            </p>

            <p>
              If required, we will provide a “Do Not Sell or Share My Personal
              Information” link or equivalent control.
            </p>
          </Section>

          <Section title="19. Consumer Health Data Rights">
            <p>
              If you are protected by a consumer health data law, you may have
              rights to:
            </p>

            <BulletList
              items={[
                "Confirm whether we collect, share, or sell consumer health data",
                "Access consumer health data",
                "Delete consumer health data",
                "Withdraw consent",
                "Receive a list of categories of consumer health data collected",
                "Receive a list of categories of sources",
                "Receive a list of categories of third parties or affiliates with whom consumer health data is shared",
                "Appeal a denied request where required",
              ]}
            />

            <p>We do not sell consumer health data.</p>

            <p>
              Submit consumer health data requests to{" "}
              <a
                href="mailto:info@sentientconnect.io"
                className="text-yellow-400 underline underline-offset-4 hover:text-yellow-300"
              >
                info@sentientconnect.io
              </a>{" "}
              with the subject line “Consumer Health Data Request.”
            </p>
          </Section>

          <Section title="20. European, UK, and International Users">
            <p>
              Our services are operated from the United States. If you access
              our services from outside the United States, your information may
              be processed in the United States or other countries that may not
              provide the same level of data protection as your home
              jurisdiction.
            </p>

            <p>
              Where GDPR, UK GDPR, or similar laws apply, our legal bases for
              processing may include consent, performance of a contract,
              legitimate interests, legal obligation, vital interests, or public
              interest where applicable.
            </p>

            <p>Depending on applicable law, you may have rights to:</p>

            <BulletList
              items={[
                "Access",
                "Rectification",
                "Erasure",
                "Restriction",
                "Portability",
                "Objection",
                "Withdrawal of consent",
                "Lodge a complaint with a supervisory authority",
              ]}
            />

            <p>
              To submit an international privacy request, email{" "}
              <a
                href="mailto:info@sentientconnect.io"
                className="text-yellow-400 underline underline-offset-4 hover:text-yellow-300"
              >
                info@sentientconnect.io
              </a>{" "}
              with the subject line “International Privacy Request.”
            </p>
          </Section>

          <Section title="21. Children and Minors">
            <p>Our services are not directed to children under 13.</p>

            <p>
              We do not knowingly collect personal information from children
              under 13 without verifiable parental consent where required by
              law.
            </p>

            <p>
              If we learn that we have collected personal information from a
              child under 13 without required consent, we will delete it or take
              other appropriate action.
            </p>

            <p>
              Some services may be used by minors only with parent, guardian,
              school, provider, organization, or legally authorized consent where
              required.
            </p>

            <p>
              If a parent or guardian believes a child has provided information
              to us without required consent, contact{" "}
              <a
                href="mailto:info@sentientconnect.io"
                className="text-yellow-400 underline underline-offset-4 hover:text-yellow-300"
              >
                info@sentientconnect.io
              </a>{" "}
              with the subject line “Child Privacy Request.”
            </p>
          </Section>

          <Section title="22. Client-Controlled Data and Organizational Accounts">
            <p>
              Some services are provided to organizations, businesses,
              providers, pilot partners, or enterprise clients.
            </p>

            <p>
              When an organization controls your access to our services, that
              organization may determine:
            </p>

            <BulletList
              items={[
                "What data is collected",
                "Who has access",
                "What reports are generated",
                "How long information is retained",
                "Whether data is exported",
                "Whether specific integrations are enabled",
                "Whether certain AI features are used",
              ]}
            />

            <p>
              In those situations, we may act as a service provider, processor,
              contractor, business associate, or similar role. Privacy requests
              related to organization-controlled data may need to be directed to
              the organization that controls the account.
            </p>
          </Section>

          <Section title="23. Integrations and Third-Party Services">
            <p>Our services may integrate with third-party platforms, including:</p>

            <BulletList
              items={[
                "CRM systems",
                "Email systems",
                "Calendar systems",
                "Payment processors",
                "Analytics tools",
                "Automation tools",
                "Cloud providers",
                "AI providers",
                "Voice and transcription providers",
                "Wearable or connected-device platforms",
                "Communication tools",
                "Scheduling systems",
                "Business software",
              ]}
            />

            <p>
              Your use of third-party services may be subject to their own terms
              and privacy policies. We are not responsible for the privacy
              practices of third parties that we do not control.
            </p>
          </Section>

          <Section title="24. Public Content, Testimonials, and Feedback">
            <p>
              If you submit testimonials, reviews, comments, images, logos, case
              studies, success stories, or feedback, we may use them with your
              permission or as otherwise permitted by law.
            </p>

            <p>
              We will not publicly disclose sensitive health, wellness,
              behavioral, recovery, biometric, voice, or client-confidential
              information in testimonials or case studies without appropriate
              consent.
            </p>
          </Section>

          <Section title="25. Marketing Communications">
            <p>
              We may send marketing communications about our services, demos,
              updates, events, offers, or content where permitted by law.
            </p>

            <p>
              You may opt out of marketing emails by using the unsubscribe link
              or contacting us at{" "}
              <a
                href="mailto:info@sentientconnect.io"
                className="text-yellow-400 underline underline-offset-4 hover:text-yellow-300"
              >
                info@sentientconnect.io
              </a>
              .
            </p>

            <p>
              We may still send non-marketing communications, such as security,
              billing, legal, administrative, or service-related notices.
            </p>
          </Section>

          <Section title="26. Automated Emails, SMS, and Calls">
            <p>
              If you provide your phone number or email address, we may contact
              you regarding:
            </p>

            <BulletList
              items={[
                "Requested information",
                "Scheduling",
                "Service updates",
                "Account notices",
                "Support",
                "Billing",
                "Security",
                "Intake follow-up",
                "Demo access",
                "Operational workflows",
                "Marketing where permitted",
              ]}
            />

            <p>
              Consent to marketing communications is not required to purchase
              services. Message and data rates may apply for SMS. You may opt
              out of SMS by replying STOP where supported.
            </p>
          </Section>

          <Section title="27. Data Accuracy">
            <p>
              We rely on users, clients, and organizations to provide accurate
              information.
            </p>

            <p>
              You may request correction of inaccurate personal information by
              contacting{" "}
              <a
                href="mailto:info@sentientconnect.io"
                className="text-yellow-400 underline underline-offset-4 hover:text-yellow-300"
              >
                info@sentientconnect.io
              </a>{" "}
              with the subject line “Correction Request.”
            </p>

            <p>
              AI-generated summaries, scores, or outputs may contain errors. You
              should review and correct important information before relying on
              it.
            </p>
          </Section>

          <Section title="28. Sensitive Data Restrictions">
            <p>
              Do not submit sensitive information unless it is necessary for the
              service you are using and you are authorized to provide it.
            </p>

            <p>This includes:</p>

            <BulletList
              items={[
                "Social Security numbers",
                "Government IDs",
                "Financial account numbers",
                "Medical records",
                "Therapy records",
                "Legal records",
                "Criminal history",
                "Biometric identifiers",
                "Precise location",
                "Children’s information",
                "Protected health information",
                "Information about other people without authorization",
              ]}
            />

            <p>
              If a form, workflow, or contract specifically asks for sensitive
              information, provide only what is necessary.
            </p>
          </Section>

          <Section title="29. Legal Requests and Law Enforcement">
            <p>
              We may disclose information in response to lawful requests,
              subpoenas, warrants, court orders, or legal processes.
            </p>

            <p>
              Where permitted, we may review, limit, challenge, or object to
              requests that appear overbroad, improper, or unlawful.
            </p>

            <p>
              We may preserve information if we believe it is necessary to
              comply with law, protect rights, respond to legal claims, or
              prevent harm.
            </p>
          </Section>

          <Section title="30. Changes to This Privacy Policy">
            <p>We may update this Privacy Policy from time to time.</p>

            <p>
              If we make material changes, we may notify users by posting the
              updated policy, updating the “Last Updated” date, sending notice,
              or using other appropriate methods.
            </p>

            <p>
              Your continued use of the services after an updated Privacy Policy
              becomes effective means you acknowledge the updated policy.
            </p>
          </Section>

          <Section title="31. Contact Us">
            <p>For privacy questions, requests, appeals, or concerns, contact:</p>

            <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-6">
              <p className="font-semibold text-white">Sentient Connect LLC</p>
              <p>Colorado, United States</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:info@sentientconnect.io"
                  className="text-yellow-400 underline underline-offset-4 hover:text-yellow-300"
                >
                  info@sentientconnect.io
                </a>
              </p>
              <p>Subject Line: Privacy Request</p>
            </div>
          </Section>

          <Section title="32. Summary of Key Privacy Positions">
            <BulletList
              items={[
                "We do not sell sensitive personal information.",
                "We do not sell consumer health data.",
                "We do not sell protected health information.",
                "We do not use consumer health data for targeted advertising.",
                "We do not use protected health information for targeted advertising.",
                "We do not use behavioral-health, recovery-support, biometric, voice, or wearable data for targeted advertising.",
                "We use AI to assist, not replace, human judgment.",
                "We treat wellness, behavioral, recovery, biometric, voice, wearable, and health-related data as sensitive.",
                "We honor legally required privacy rights.",
                "We use vendors only as needed to operate, secure, improve, and deliver the services.",
                "We maintain security safeguards, but no system can be guaranteed 100% secure.",
                "We will follow stricter written agreements, including Business Associate Agreements, where they apply.",
              ]}
            />
          </Section>
        </div>
      </div>
    </main>
  );
}

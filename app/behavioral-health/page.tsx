import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Behavioral Health Demo | Sentient Connect™",
  description:
    "Launch the Sentient Connect™ Behavioral Health demo powered by SentientOS™, AURA Genesis™, DISC communication intelligence, and MIND | BODY | SPIRIT Triangulation™.",
};

export default function BehavioralHealthPage() {
  redirect("https://behavior.sentientconnect.io/");
}

import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Home Services AURA™ Demo | Sentient Connect™",
  description:
    "Launch the Home Services AURA™ demo powered by Sentient Connect™, SentientOS™, and AURA Genesis™.",
};

export default function HomeServicesAuraPage() {
  redirect("https://homeservices.sentientconnect.io/");
}

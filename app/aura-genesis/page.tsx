import type { Metadata } from 'next'
import HomePage from '../page'

export const metadata: Metadata = {
  title: 'AURA Genesis™',
  description:
    'AURA Genesis™ is the AI orchestration layer inside Sentient Connect™, built for clarity, workflow execution, accountability, and human-centered operating support.',
}

export default function AuraGenesisPage() {
  return <HomePage />
}

"use client"

import { Team } from "@/components/team"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <Team />
      <Footer />
    </main>
  )
}

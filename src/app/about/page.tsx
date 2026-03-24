"use client"

import { About } from "@/components/about"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <About />
      <Footer />
    </main>
  )
}

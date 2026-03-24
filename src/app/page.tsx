"use client"

import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HomeSections } from "@/components/home-sections"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <Hero />
      <HomeSections />
      <Footer />
    </main>
  )
}

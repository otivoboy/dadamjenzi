"use client"

import { Services } from "@/components/services"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <Services />
      <Footer />
    </main>
  )
}

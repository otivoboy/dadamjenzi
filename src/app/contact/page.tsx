"use client"

import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <Contact />
      <Footer />
    </main>
  )
}

"use client"

import { Gallery } from "@/components/gallery"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <Gallery />
      <Footer />
    </main>
  )
}

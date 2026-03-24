
"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react"
import placeholderData from '@/lib/placeholder-images.json'

export function Hero() {
  const router = useRouter()
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  
  const homeImage = placeholderData.placeholderImages.find(p => p.id === 'home.png');

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
        }
      })
    }, observerOptions)

    if (titleRef.current) observer.observe(titleRef.current)
    if (subtitleRef.current) observer.observe(subtitleRef.current)
    if (buttonsRef.current) observer.observe(buttonsRef.current)
    if (statsRef.current) observer.observe(statsRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 pt-36 lg:pt-32 pb-12 lg:pb-20">
      <div className="absolute inset-0">
        <Image
          src={homeImage?.imageUrl || ''}
          alt="Beautiful home interior"
          fill
          className="object-cover opacity-20 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-900/80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1
              ref={titleRef}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight opacity-0 transform translate-y-8 font-headline"
            >
              Crafting Spaces That
              <br />
              <span className="text-orange-500">
                Inspire & Delight
              </span>
            </h1>

            <p
              ref={subtitleRef}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 opacity-0 transform translate-y-8 leading-relaxed"
            >
              Expert painting, tiling, cabinetry, furniture finishing, and solar installation services that bring your
              vision to life with unmatched quality and attention to detail.
            </p>

            <div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 opacity-0 transform translate-y-8"
            >
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white group"
                onClick={() => router.push("/contact")}
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white bg-transparent"
                onClick={() => router.push("/gallery")}
              >
                View Our Work
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-gray-300 text-sm md:text-base">
              <div className="flex items-center gap-2 hover:text-orange-400 transition-colors cursor-pointer" onClick={() => window.location.href = 'tel:+254710136798'}>
                <Phone className="h-5 w-5 text-orange-500" />
                <span>+254 710 136 798</span>
              </div>
              <div className="flex items-center gap-2 hover:text-orange-400 transition-colors cursor-pointer" onClick={() => window.location.href = 'mailto:wanguimiro.hellen@gmail.com'}>
                <Mail className="h-5 w-5 text-orange-500" />
                <span>wanguimiro.hellen@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0 px-4 sm:px-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={homeImage?.imageUrl || ''}
                alt="Beautiful home interior showcase"
                width={600}
                height={400}
                className="w-full h-auto transition-transform duration-700 hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
            </div>

            {/* Stats - Responsive grid for mobile, absolute for desktop */}
            <div ref={statsRef} className="grid grid-cols-2 gap-4 mt-6 lg:mt-0 lg:absolute lg:inset-0 pointer-events-none opacity-0 transform translate-y-8">
              <div className="lg:absolute lg:-bottom-6 lg:-left-6 bg-gray-800 rounded-lg p-3 lg:p-4 shadow-xl border border-gray-700 pointer-events-auto hover:scale-105 transition-transform">
                <div className="text-center min-w-[100px] lg:min-w-[120px]">
                  <div className="text-xl lg:text-2xl font-bold text-orange-500">5+</div>
                  <div className="text-xs lg:text-sm text-gray-300">Years Experience</div>
                </div>
              </div>

              <div className="lg:absolute lg:-top-6 lg:-right-6 bg-gray-800 rounded-lg p-3 lg:p-4 shadow-xl border border-gray-700 pointer-events-auto hover:scale-105 transition-transform">
                <div className="text-center min-w-[100px] lg:min-w-[120px]">
                  <div className="text-xl lg:text-2xl font-bold text-orange-500">50+</div>
                  <div className="text-xs lg:text-sm text-gray-300">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
"use client"

import { Palette, Sun, Hammer, PhoneCall, Shield, Award, Calendar, CheckCircle, MapPin } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from "next/navigation"
import placeholderData from '@/lib/placeholder-images.json'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useEffect, useRef } from "react"

export function HomeSections() {
  const router = useRouter()
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  const getImage = (id: string) => {
    const img = placeholderData.placeholderImages.find(p => p.id === id);
    return img ? img.imageUrl : null;
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0")
          // Use the specific animation class defined in the data attribute
          const animationClass = (entry.target as HTMLElement).dataset.animation || "animate-fade-in-up"
          entry.target.classList.add(animationClass)
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const spotlightProjects = [
    { id: 'gallery/cabinetry/contemporary-kitchen.png', title: 'Modern Kitchen', desc: 'Tiling & Cabinetry' },
    { id: 'gallery/solar/residential-rooftop.png', title: 'Solar Rooftop', desc: 'Installation' },
    { id: 'gallery/furniture/antique-dresser.png', title: 'Furniture Finish', desc: 'High-gloss refinishing' },
    { id: 'gallery/painting/modern-living-room.png', title: 'Living Room', desc: 'Textured painting' },
  ];

  const testimonials = [
    {
      name: "Grace M.",
      location: "Ruiru",
      text: "The team did an incredible job on our kitchen cabinets and backsplash tiling. The attention to detail was impeccable. Our home feels brand new!",
      image: getImage('testimonial-sarah.png')
    },
    {
      name: "David K.",
      location: "Westlands",
      text: "Finally found reliable solar installers who also understood the aesthetics of my roof. Highly recommend.",
      image: getImage('testimonial-michael.png')
    }
  ];

  return (
    <div className="bg-gray-900 pb-20 overflow-hidden">
      {/* 1. Trust Bar */}
      <div 
        ref={(el) => { sectionRefs.current[0] = el }}
        data-animation="animate-slide-in-left"
        className="bg-gray-800/50 border-y border-gray-800 py-12 opacity-0"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500 mb-2">Trusted by Homeowners & Developers Across Kenya</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-6 lg:gap-12">
            <div className="flex items-center gap-3 bg-gray-900/50 px-6 py-4 rounded-xl border border-gray-700 hover-lift">
              <Shield className="h-6 w-6 text-orange-500" />
              <span className="font-semibold text-gray-200">Certified Installers</span>
            </div>
            <div className="flex items-center gap-3 bg-gray-900/50 px-6 py-4 rounded-xl border border-gray-700 hover-lift">
              <Award className="h-6 w-6 text-orange-500" />
              <span className="font-semibold text-gray-200">5-Year Warranty</span>
            </div>
            <div className="flex items-center gap-3 bg-gray-900/50 px-6 py-4 rounded-xl border border-gray-700 hover-lift">
              <Calendar className="h-6 w-6 text-orange-500" />
              <span className="font-semibold text-gray-200">Site Consultation</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Portfolio Spotlight */}
      <section 
        ref={(el) => { sectionRefs.current[1] = el }}
        data-animation="animate-fade-in-up"
        className="py-24 container mx-auto px-4 opacity-0"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-headline text-white">Portfolio <span className="text-orange-500">Spotlight</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">A glimpse into our recent transformations across Nairobi and Kiambu.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {spotlightProjects.map((project, idx) => {
            const projectImage = getImage(project.id);
            return (
              <Card key={idx} className="group overflow-hidden bg-gray-800 border-gray-700 cursor-pointer hover-lift" onClick={() => router.push('/gallery')}>
                <div className="relative aspect-[4/5]">
                  {projectImage && (
                    <Image src={projectImage} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-6 left-6 right-6 transform transition-transform duration-500 group-hover:-translate-y-2">
                    <h3 className="text-xl font-bold text-white mb-1 font-headline">{project.title}</h3>
                    <p className="text-sm text-orange-400 font-medium">{project.desc}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </section>

      {/* 3. Why Us Feature Strip */}
      <section 
        ref={(el) => { sectionRefs.current[2] = el }}
        data-animation="animate-fade-in-up"
        className="py-24 bg-gray-800/30 opacity-0"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-headline text-white">Why Homeowners <span className="text-orange-500">Choose Us</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 hover:bg-gray-800 rounded-2xl transition-all border border-transparent hover:border-gray-700 hover-lift group">
              <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-float">
                <Palette className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Precision Finishes</h3>
              <p className="text-gray-400 text-sm leading-relaxed">From flawless furniture refinishing to streak-free professional painting.</p>
            </div>
            <div className="text-center p-6 hover:bg-gray-800 rounded-2xl transition-all border border-transparent hover:border-gray-700 hover-lift group">
              <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-float">
                <Sun className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Energy Ready</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Professional solar installation to significantly cut your monthly electricity bills.</p>
            </div>
            <div className="text-center p-6 hover:bg-gray-800 rounded-2xl transition-all border border-transparent hover:border-gray-700 hover-lift group">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-float">
                <Hammer className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Seamless Integration</h3>
              <p className="text-gray-400 text-sm leading-relaxed">We handle tiling and cabinetry in perfect harmony for a beautiful home flow.</p>
            </div>
            <div className="text-center p-6 hover:bg-gray-800 rounded-2xl transition-all border border-transparent hover:border-gray-700 hover-lift group">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-float">
                <PhoneCall className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">End-to-End Support</h3>
              <p className="text-gray-400 text-sm leading-relaxed">One dedicated point of contact for your entire renovation and finishing journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Before & After */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-headline text-white">Transformations That <span className="text-orange-500">Speak</span></h2>
          <p className="text-gray-400">Witness the difference quality craftsmanship makes.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card 
            ref={(el) => { sectionRefs.current[3] = el }}
            data-animation="animate-slide-in-left"
            className="overflow-hidden bg-gray-800 border-gray-700 opacity-0"
          >
            <div className="relative aspect-video">
              <Image src={getImage('/videos/bathroom-before.jpg') || '/placeholder.svg'} alt="Before transformation" fill className="object-cover" />
              <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Before</div>
            </div>
            <div className="p-6">
              <h4 className="font-bold text-white text-lg">Dilapidated Bathroom</h4>
              <p className="text-gray-400 text-sm">Outdated tiles and worn-out fixtures.</p>
            </div>
          </Card>
          <Card 
            ref={(el) => { sectionRefs.current[4] = el }}
            data-animation="animate-slide-in-right"
            className="overflow-hidden bg-gray-800 border-gray-700 opacity-0"
          >
            <div className="relative aspect-video">
              <Image src={getImage('/videos/bathroom-after.jpg') || '/placeholder.svg'} alt="After transformation" fill className="object-cover" />
              <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">After</div>
            </div>
            <div className="p-6">
              <h4 className="font-bold text-white text-lg">Luxury Master Bath</h4>
              <p className="text-gray-400 text-sm">Premium porcelain tiling and custom vanity.</p>
            </div>
          </Card>
        </div>
      </section>

      {/* 5. Enhanced CTA Section */}
      <section 
        ref={(el) => { sectionRefs.current[5] = el }}
        data-animation="animate-fade-in-up"
        className="py-24 bg-gradient-to-br from-orange-600 to-orange-800 text-white opacity-0"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-headline animate-pulse-subtle"> Book a Free Color Consultation</h2>
            <p className="text-xl mb-10 text-orange-100">Not sure which shade or tile fits your space? Schedule a site visit for expert advice tailored to your home and vision.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-700 hover:bg-orange-50 font-bold h-14 px-10 rounded-full btn-enhanced" onClick={() => router.push('/contact')}>
                Book Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-orange-700 font-bold h-14 px-10 rounded-full bg-transparent" onClick={() => window.open('tel:+254710136798')}>
                Call +254 710 136 798
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials Carousel */}
      <section 
        ref={(el) => { sectionRefs.current[6] = el }}
        data-animation="animate-fade-in-up"
        className="py-24 container mx-auto px-4 opacity-0"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-headline text-white">Our <span className="text-orange-500">Clients Testimonials</span></h2>
        </div>
        <div className="max-w-4xl mx-auto relative px-12">
          <Carousel opts={{ loop: true }}>
            <CarouselContent>
              {testimonials.map((t, idx) => {
                const testimonialImage = t.image;
                return (
                  <CarouselItem key={idx}>
                    <Card className="p-8 md:p-12 bg-gray-800 border-gray-700 text-center hover-lift">
                      <p className="text-xl md:text-2xl text-gray-200 italic mb-8 leading-relaxed">"{t.text}"</p>
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-orange-500 p-1">
                          {testimonialImage && (
                            <Image src={testimonialImage} alt={t.name} width={64} height={64} className="rounded-full object-cover h-full" />
                          )}
                        </div>
                        <h4 className="font-bold text-white text-lg">{t.name}</h4>
                        <p className="text-orange-500 font-medium text-sm">{t.location}</p>
                      </div>
                    </Card>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-gray-800 border-gray-700 text-orange-500" />
            <CarouselNext className="right-0 bg-gray-800 border-gray-700 text-orange-500" />
          </Carousel>
        </div>
      </section>

      {/* 7. Service Area & Availability */}
      <section 
        ref={(el) => { sectionRefs.current[7] = el }}
        data-animation="animate-fade-in-up"
        className="py-24 bg-gray-800/20 border-t border-gray-800 opacity-0"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block p-4 bg-orange-500/10 rounded-full mb-6 animate-float">
            <MapPin className="h-8 w-8 text-orange-500" />
          </div>
          <h2 className="text-3xl font-bold mb-4 font-headline text-white">Serving Greater Nairobi & Kiambu</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">We bring the showroom to your doorstep. Our mobile teams are ready to serve you wherever you are in the surrounding areas.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Nairobi CBD', 'Westlands', 'Karen', 'Runda', 'Lavington', 'Thika Road', 'Kiambu', 'Ruiru'].map((area, i) => (
              <span key={i} className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full text-sm font-medium text-gray-300 border border-gray-700 hover:border-orange-500/50 transition-colors">
                <CheckCircle className="h-4 w-4 text-green-500" />
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

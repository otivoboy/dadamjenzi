
"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Shield, 
  Award, 
  Heart, 
  Users, 
  Clock, 
  MapPin, 
  Hammer, 
  Palette, 
  Sun, 
  Quote,
  ArrowRight,
  FileCheck,
  Building2
} from "lucide-react"
import Image from "next/image"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import placeholderData from '@/lib/placeholder-images.json'

export function About() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  const getImage = (id: string) => {
    const img = placeholderData.placeholderImages.find(p => p.id === id);
    return img ? img.imageUrl : "/placeholder.svg";
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

  const milestones = [
    { year: "2022", title: "The Beginning", desc: "Hellen begins offering painting and finishing services in Kiambu, building a reputation for reliability." },
    { year: "2023", title: "Expansion", desc: "DADA MJENZI officially incorporated; tiling and custom cabinetry added to meet client demand." },
    { year: "2024", title: "Showroom Opens", desc: "First physical showroom opens, allowing clients to touch materials and see finishes in person." },
    { year: "2025", title: "Solar Division Launched", desc: "Recognizing the need for reliable energy, we add certified solar installation services." },
    { year: "2026", title: "50+ Projects & Beyond", desc: "Celebrating over 500 completed homes and businesses across Nairobi, Kiambu, and beyond." },
  ];

  const partners = [
    { category: "Paints & Finishes", brands: "Crown Paints, Duracoat, Sadolin" },
    { category: "Tiles & Adhesives", brands: "Ceramic Industries, Mapei, Schluter Systems" },
    { category: "Cabinetry Hardware", brands: "Blum, Hettich, Hafele" },
    { category: "Solar Components", brands: "Canadian Solar, Victron Energy, BYD Batteries" },
  ];

  const testimonials = [
    {
      name: "Caroline N.",
      location: "Lavington",
      service: "Kitchen Cabinetry + Tiling",
      text: "They treated our home like their own. From the initial consultation to the final walkthrough, Hellen and her team were professional, punctual, and incredibly detail-oriented.",
      stars: 4.1
    },
    {
      name: "James K.",
      location: "Ruiru",
      service: "5kW Solar Installation",
      text: "Finally, a reliable solar installer. I was nervous about installing solar, but the DADA MJENZI team walked me through every step. My electricity bill has dropped by 70%.",
      stars: 4.5
    },
    {
      name: "Wanjiku M.",
      location: "Kiambu",
      service: "Furniture Restoration",
      text: "Restored my grandmother's table beautifully. The furniture finishing team brought it back to life with a hand-rubbed oil finish. It looks better than I remembered.",
      stars: 5
    }
  ];

  return (
    <div className="bg-gray-900 pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* 1. Header Section */}
        <div 
          ref={(el) => { sectionRefs.current[0] = el }}
          data-animation="animate-fade-in-up"
          className="text-center mb-20 opacity-0"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white font-headline">
            Our <span className="text-orange-500">Story</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Founded with a passion for excellence, DADA MJENZI has grown into Nairobi's premier choice for 
            sophisticated interior finishing and sustainable energy solutions.
          </p>
        </div>

        {/* 2. Founder Section */}
        <section 
          ref={(el) => { sectionRefs.current[1] = el }}
          data-animation="animate-fade-in-up"
          className="mb-32 opacity-0"
        >
          <div className="max-w-4xl mx-auto bg-gray-800/50 rounded-3xl p-8 md:p-12 border border-gray-700 shadow-2xl text-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 bg-orange-500 text-white text-xs font-bold rounded-full uppercase tracking-widest mb-2">
                The Sister Builder
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-headline">Hellen Wangui</h2>
              <Quote className="h-10 w-10 text-orange-500 opacity-50 mb-4 mx-auto" />
              <p className="text-xl italic text-gray-200 leading-relaxed font-headline">
                "I started DADA MJENZI because I noticed a gap in the market: homeowners wanted beautiful, lasting finishes, but they struggled to find a team that combined technical excellence with genuine care and transparency."
              </p>
              <div className="text-gray-300 space-y-4 max-w-2xl mx-auto">
                <p>
                  With over 5 years of hands-on experience in interior finishing and construction, Hellen leads a team of highly skilled artisans who share her commitment to precision and integrity.
                </p>
                <p>
                  A certified finishing specialist and renewable energy advocate, she personally oversees every major project to ensure DADA MJENZI's standards are upheld. When she's not on-site, Hellen mentors young women entering the construction trades.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. The Hands Behind the Craft (Artisans) */}
        <section 
          ref={(el) => { sectionRefs.current[2] = el }}
          data-animation="animate-slide-in-left"
          className="mb-32 opacity-0"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-headline uppercase tracking-widest">The Hands <span className="text-orange-500">Behind the Craft</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Behind every flawless finish is a team of dedicated artisans trained in the latest techniques and traditional craftsmanship.</p>
          </div>
          <div className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden shadow-xl">
            <Table>
              <TableHeader>
                <TableRow className="border-gray-700 bg-gray-900/50">
                  <TableHead className="text-orange-500 font-bold uppercase tracking-wider">Role</TableHead>
                  <TableHead className="text-orange-500 font-bold uppercase tracking-wider">Expertise</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-gray-700 hover:bg-gray-700/50">
                  <TableCell className="font-bold text-white flex items-center gap-3">
                    <Palette className="h-5 w-5 text-orange-500" /> Master Painters
                  </TableCell>
                  <TableCell className="text-gray-300">HVLP spray application, textured finishes, color matching</TableCell>
                </TableRow>
                <TableRow className="border-gray-700 hover:bg-gray-700/50">
                  <TableCell className="font-bold text-white flex items-center gap-3">
                    <Hammer className="h-5 w-5 text-blue-400" /> Tiling Specialists
                  </TableCell>
                  <TableCell className="text-gray-300">Laser-level precision, waterproofing, mosaic layouts</TableCell>
                </TableRow>
                <TableRow className="border-gray-700 hover:bg-gray-700/50">
                  <TableCell className="font-bold text-white flex items-center gap-3">
                    <Building2 className="h-5 w-5 text-green-400" /> Cabinet Makers
                  </TableCell>
                  <TableCell className="text-gray-300">Solid wood construction, custom joinery, Blum hardware installation</TableCell>
                </TableRow>
                <TableRow className="border-gray-700 hover:bg-gray-700/50">
                  <TableCell className="font-bold text-white flex items-center gap-3">
                    <Sun className="h-5 w-5 text-yellow-500" /> Solar Technicians
                  </TableCell>
                  <TableCell className="text-gray-300">KEBS-certified, grid-tie & off-grid systems, battery storage</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <p className="text-center text-gray-500 mt-6 text-sm italic">
            All team members undergo continuous training and are fully insured for your peace of mind.
          </p>
        </section>

        {/* 4. Timeline Section */}
        <section 
          ref={(el) => { sectionRefs.current[3] = el }}
          data-animation="animate-fade-in-up"
          className="mb-32 opacity-0"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4 font-headline uppercase tracking-widest">Our <span className="text-orange-500">Journey</span></h2>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-800 -translate-x-1/2 hidden md:block" />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <div key={i} className={`relative flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-1/2 text-center md:text-left">
                    <div className={`bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-orange-500/50 transition-colors shadow-lg ${i % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                      <div className="text-2xl font-bold text-orange-500 mb-2">{m.year}</div>
                      <h4 className="text-white font-bold mb-2 font-headline uppercase text-sm tracking-widest">{m.title}</h4>
                      <p className="text-gray-400 text-sm">{m.desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-gray-900 z-10 hidden md:block" />
                  <div className="md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Workshop & Showroom */}
        <section 
          ref={(el) => { sectionRefs.current[4] = el }}
          data-animation="animate-slide-in-right"
          className="mb-32 grid lg:grid-cols-2 gap-12 items-center opacity-0"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white font-headline">Visit Our <span className="text-orange-500">Workshop & Showroom</span></h2>
            <p className="text-gray-300 leading-relaxed">
              Not sure which tile or cabinet finish is right for your space? Come see them in person. Our physical locations build trust and invite serious inquiries.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-gray-800 p-6 rounded-2xl border border-gray-700">
                <MapPin className="h-6 w-6 text-orange-500 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-1 uppercase tracking-widest text-sm">Showroom Location</h4>
                  <p className="text-gray-400 text-sm">Nairobi, Kenya</p>
                  <p className="text-gray-500 text-xs mt-1">Open Mon–Sat, 9:00 AM – 5:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-gray-800 p-6 rounded-2xl border border-gray-700">
                <Hammer className="h-6 w-6 text-blue-400 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-1 uppercase tracking-widest text-sm">Our Workshop</h4>
                  <p className="text-gray-400 text-sm">Behind-the-scenes custom fabrication and restoration.</p>
                  <p className="text-blue-400 text-xs mt-1 font-bold">Tours by appointment only</p>
                </div>
              </div>
            </div>
            <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white bg-transparent h-12 px-8 rounded-full font-bold btn-enhanced">
              Book a Showroom Visit
            </Button>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-gray-700">
            <Image src={getImage('showroom.jpg')} alt="Showroom" fill className="object-cover" />
          </div>
        </section>

        {/* 6. Social Impact */}
        <section 
          ref={(el) => { sectionRefs.current[5] = el }}
          data-animation="animate-fade-in-up"
          className="mb-32 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-3xl p-8 md:p-12 border border-orange-500/20 opacity-0"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-headline uppercase tracking-widest">Building More Than Homes — <span className="text-orange-500">Building Community</span></h2>
            <p className="text-gray-300 max-w-2xl mx-auto italic">"The name DADA MJENZI reflects our core belief: when we build, we build together."</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6 bg-gray-900/50 rounded-2xl border border-gray-800 hover-lift">
              <Users className="h-10 w-10 text-orange-500 mx-auto" />
              <h4 className="font-bold text-white uppercase text-sm tracking-widest">Women in Trades</h4>
              <p className="text-gray-400 text-xs leading-relaxed">We mentor and train young women. Currently, 40% of our on-site team are women—a number we're proud to grow.</p>
            </div>
            <div className="text-center space-y-4 p-6 bg-gray-900/50 rounded-2xl border border-gray-800 hover-lift">
              <Building2 className="h-10 w-10 text-blue-400 mx-auto" />
              <h4 className="font-bold text-white uppercase text-sm tracking-widest">Local Sourcing</h4>
              <p className="text-gray-400 text-xs leading-relaxed">We source materials from Kenyan suppliers, supporting local businesses and reducing our carbon footprint.</p>
            </div>
            <div className="text-center space-y-4 p-6 bg-gray-900/50 rounded-2xl border border-gray-800 hover-lift">
              <Heart className="h-10 w-10 text-green-400 mx-auto" />
              <h4 className="font-bold text-white uppercase text-sm tracking-widest">Sustainable Practices</h4>
              <p className="text-gray-400 text-xs leading-relaxed">We prioritize low-VOC paints, water-efficient tiling, and responsible waste disposal on every site.</p>
            </div>
          </div>
        </section>

        {/* 7. Client Love */}
        <section 
          ref={(el) => { sectionRefs.current[6] = el }}
          data-animation="animate-slide-in-left"
          className="mb-32 opacity-0"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4 font-headline uppercase tracking-widest">Our <span className="text-orange-500">Clients Testimonials</span></h2>
            <p className="text-gray-400">Real stories from real homeowners across Kenya</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <Card key={i} className="p-8 bg-gray-800 border-gray-700 flex flex-col hover-lift">
                <Quote className="h-8 w-8 text-orange-500 mb-6 opacity-50" />
                <p className="text-gray-200 italic mb-8 flex-1 leading-relaxed">"{t.text}"</p>
                <div className="pt-6 border-t border-gray-700">
                  <h4 className="font-bold text-white text-sm">{t.name}</h4>
                  <p className="text-orange-500 text-xs font-medium">{t.location} | {t.service}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* 8. Partners & Credentials */}
        <section 
          ref={(el) => { sectionRefs.current[7] = el }}
          data-animation="animate-fade-in-up"
          className="space-y-16 opacity-0"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-12 font-headline uppercase tracking-widest">Trusted Partners & <span className="text-orange-500">Premium Suppliers</span></h2>
            <div className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden shadow-xl max-w-4xl mx-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-700 bg-gray-900/50">
                    <TableHead className="text-orange-500 font-bold uppercase tracking-wider">Category</TableHead>
                    <TableHead className="text-orange-500 font-bold uppercase tracking-wider">Partners</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {partners.map((p, i) => (
                    <TableRow key={i} className="border-gray-700 hover:bg-gray-700/50">
                      <TableCell className="font-bold text-white uppercase text-xs tracking-widest">{p.category}</TableCell>
                      <TableCell className="text-gray-400 text-sm">{p.brands}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <p className="text-gray-500 text-xs mt-6 italic">All materials are KEBS-approved and backed by manufacturer warranties.</p>
          </div>

          <div className="text-center pt-16 border-t border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-12 font-headline uppercase tracking-widest">Our <span className="text-orange-500">Credentials</span></h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <div className="flex items-center gap-3 bg-gray-800 px-6 py-4 rounded-xl border border-gray-700 hover-lift">
                <FileCheck className="h-6 w-6 text-orange-500" />
                <span className="font-bold text-white uppercase text-[10px] tracking-[0.2em]">KEBS Certified</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-800 px-6 py-4 rounded-xl border border-gray-700 hover-lift">
                <Sun className="h-6 w-6 text-yellow-500" />
                <span className="font-bold text-white uppercase text-[10px] tracking-[0.2em]">EPRA Licensed</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-800 px-6 py-4 rounded-xl border border-gray-700 hover-lift">
                <Shield className="h-6 w-6 text-blue-400" />
                <span className="font-bold text-white uppercase text-[10px] tracking-[0.2em]">Fully Insured</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-800 px-6 py-4 rounded-xl border border-gray-700 hover-lift">
                <Award className="h-6 w-6 text-green-400" />
                <span className="font-bold text-white uppercase text-[10px] tracking-[0.2em]">Master Installer</span>
              </div>
            </div>
            <p className="text-gray-500 text-xs mt-10">Certificates available for review upon request.</p>
          </div>
        </section>

        {/* 9. Final Mission CTA */}
        <section 
          ref={(el) => { sectionRefs.current[8] = el }}
          data-animation="animate-fade-in-up"
          className="mt-32 bg-orange-500 rounded-3xl p-12 text-center text-white border border-orange-400 shadow-2xl opacity-0"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">Join Us in Building Your Dream</h2>
          <p className="text-lg mb-10 text-orange-100 max-w-2xl mx-auto">
            "To enhance the beauty and functionality of living spaces through exceptional craftsmanship, 
            innovative design, and sustainable energy solutions."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold px-10 h-14 rounded-full btn-enhanced" onClick={() => window.location.href='/contact'}>
              Start Your Project
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-bold px-10 h-14 rounded-full bg-transparent" onClick={() => window.location.href='tel:+254710136798'}>
              Call Hellen Directly
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}

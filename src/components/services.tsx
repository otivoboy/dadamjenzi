
"use client"

import { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Palette,
  Hammer,
  ChefHat,
  Sofa,
  Sun,
  Check,
  Clock,
  ShieldCheck,
  Award,
  CreditCard,
  Plus,
  ArrowRight,
  Phone,
  HelpCircle,
  FileCheck,
  CheckCircle2
} from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from "next/image"
import { useRouter } from "next/navigation"

const services = [
  {
    icon: Palette,
    title: "Premium Painting",
    description: "Transform your space with our expert painting services using premium materials and techniques.",
    features: ["Interior & Exterior", "Color Consultation", "Texture Finishes", "Eco-Friendly Paints"],
    specs: [
      "3-coat application system",
      "Premium paints used",
      "HVLP spray application available",
      "5-year warranty on work",
    ],
    color: "orange"
  },
  {
    icon: Hammer,
    title: "Professional Tiling",
    description: "Precision tiling for kitchens, bathrooms, and floors with attention to every detail.",
    features: ["Ceramic & Porcelain", "Natural Stone", "Mosaic Designs", "Waterproofing"],
    specs: [
      "Schluter waterproofing systems",
      "Laser level precision",
      '1/16" seamless grout lines',
      "Epoxy grout options",
    ],
    color: "orange"
  },
  {
    icon: ChefHat,
    title: "Kitchen Cabinetry",
    description: "Custom kitchen solutions that blend functionality with stunning aesthetics.",
    features: ["Custom Design", "Premium Materials", "Soft-Close Hardware", "Installation"],
    specs: [
      "Solid wood construction",
      "Blum hardware standard",
      "Custom finish options",
      "3D visualization",
    ],
    color: "orange"
  },
  {
    icon: Sofa,
    title: "Furniture Finishing",
    description: "Restore and refinish furniture to bring new life to your cherished pieces.",
    features: ["Restoration", "Custom Staining", "Upholstery", "Antique Refinishing"],
    specs: [
      "Hand-rubbed oil finishes",
      "French polishing available",
      "Water-based finishes",
      "Custom color matching",
    ],
    color: "orange"
  },
  {
    icon: Sun,
    title: "Solar Installation",
    description: "Harness clean energy with our professional solar panel installation and maintenance services.",
    features: ["Residential Systems", "Commercial Solutions", "Battery Storage", "Grid-Tie Systems"],
    specs: [
      "Tier 1 solar panels",
      "Certified installation",
      "KEBS approved components",
      "Performance monitoring",
    ],
    color: "yellow"
  },
]

const highlights = [
  { title: "End-to-End Execution", desc: "One team handles painting, tiling, cabinetry, and solar—no coordination headaches." },
  { title: "Design-Tech Integration", desc: "We marry aesthetics with technical precision, from seamless grout lines to hidden solar wiring." },
  { title: "Fixed-Price Transparency", desc: "No surprise costs. Detailed quotes upfront with clear scope of work." },
  { title: "Warranty-Backed", desc: "All work covered—5 years on painting, 2 years on installations, 10 years on solar panels." },
]

const timelines = [
  { service: "Premium Painting (1-bedroom)", duration: "2–3 days" },
  { service: "Full Tiling (Kitchen + Backsplash)", duration: "3–5 days" },
  { service: "Custom Kitchen Cabinetry", duration: "2–3 weeks (fabrication incl.)" },
  { service: "Furniture Refinishing (per piece)", duration: "3–7 days" },
  { service: "Solar Installation (3kW–5kW)", duration: "1–2 days" },
]

const processSteps = [
  { number: "1", title: "Consultation & Quotation", desc: "Free, on-site or virtual assessment and detailed fixed-price quote." },
  { number: "2", title: "Design & Material Selection", desc: "Expert guidance on colors, tiles, finishes, or solar configurations." },
  { number: "3", title: "Precision Execution", desc: "Skilled execution with minimal disruption and daily progress updates." },
  { number: "4", title: "Quality Handover", desc: "Final walkthrough, touch-ups, and full warranty documentation provided." },
]

const faqs = [
  { q: "Do you provide free quotations?", a: "Yes, we offer free on-site consultations and detailed quotes with no obligation within Nairobi and Kiambu." },
  { q: "What areas do you serve?", a: "We primarily serve Greater Nairobi, Kiambu, and surrounding areas. Travel fees may apply for locations beyond 30km." },
  { q: "How long does a typical solar installation take?", a: "Most residential solar systems are installed within 1–2 days with minimal disruption to your daily routine." },
  { q: "Do you offer warranties?", a: "Yes. Painting: 5 years | Cabinetry: 2 years | Solar panels: 10–15 years manufacturer warranty + 2 years installation warranty." },
]

export function Services() {
  const router = useRouter()
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

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

  return (
    <section id="services" className="py-20 bg-gray-900 pt-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div 
          ref={(el) => { sectionRefs.current[0] = el }}
          data-animation="animate-fade-in-up"
          className="text-center mb-16 opacity-0"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white font-headline">
            Craftsmanship That <span className="text-orange-500">Exceeds Expectations</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            From concept to completion, we deliver premium interior finishing services and sustainable energy solutions with meticulous attention to detail.
          </p>
        </div>

        {/* 1. Service Highlights Matrix */}
        <div 
          ref={(el) => { sectionRefs.current[1] = el }}
          data-animation="animate-slide-in-left"
          className="mb-20 opacity-0"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center font-headline uppercase tracking-widest">
            The <span className="text-orange-500">DADA MJENZI</span> Difference
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, i) => (
              <Card key={i} className="p-6 bg-gray-800 border-gray-700 hover:border-orange-500/50 transition-colors">
                <CheckCircle2 className="h-8 w-8 text-orange-500 mb-4" />
                <h4 className="font-bold text-white mb-2 font-headline uppercase text-sm tracking-wider">{h.title}</h4>
                <p className="text-gray-400 text-sm">{h.desc}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Service Cards */}
        <div 
          ref={(el) => { sectionRefs.current[2] = el }}
          data-animation="animate-fade-in-up"
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-24 opacity-0"
        >
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 group hover:shadow-xl transition-all duration-300 bg-gray-800 border-gray-700 flex flex-col"
            >
              <div
                className={`mb-4 p-3 rounded-lg w-fit group-hover:scale-110 transition-transform ${
                  service.color === "yellow" ? "bg-yellow-500/20" : "bg-orange-500/20"
                }`}
              >
                <service.icon
                  className={`h-8 w-8 ${
                    service.color === "yellow" ? "text-yellow-400" : "text-orange-500"
                  }`}
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white font-headline">{service.title}</h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">{service.description}</p>
              <ul className="space-y-3 mb-6 flex-1">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-300">
                    <Check className="h-4 w-4 text-orange-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-gray-700 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider mb-3 text-gray-500">Technical Specs</h4>
                <ul className="text-xs text-gray-400 space-y-1.5">
                  {service.specs.map((spec, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-1.5 opacity-50">•</span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
              <Button 
                variant="outline" 
                className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white bg-transparent text-xs"
                onClick={() => router.push('/contact')}
              >
                Request a Quote
                <ArrowRight className="ml-2 h-3 w-3" />
              </Button>
            </Card>
          ))}
        </div>

        {/* 2. Timeline Estimator & Perfect Pairings */}
        <div 
          ref={(el) => { sectionRefs.current[3] = el }}
          data-animation="animate-fade-in-up"
          className="grid lg:grid-cols-2 gap-12 mb-24 opacity-0"
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 font-headline flex items-center">
              <Clock className="mr-3 h-6 w-6 text-orange-500" />
              Project Timeline Estimator
            </h3>
            <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-700">
                    <TableHead className="text-gray-300 font-bold">Service</TableHead>
                    <TableHead className="text-gray-300 font-bold">Typical Duration</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {timelines.map((t, i) => (
                    <TableRow key={i} className="border-gray-700 hover:bg-gray-700/50">
                      <TableCell className="text-gray-300">{t.service}</TableCell>
                      <TableCell className="text-orange-500 font-bold">{t.duration}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <p className="text-xs text-gray-500 mt-4 italic">
              * Timelines vary by project size. A detailed schedule is provided during consultation.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6 font-headline flex items-center">
              <Plus className="mr-3 h-6 w-6 text-orange-500" />
              Perfect Pairings
            </h3>
            <div className="space-y-4">
              <Card className="p-6 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border-gray-700 hover-lift">
                <h4 className="font-bold text-white mb-2 font-headline uppercase tracking-wider"> Kitchen Transformation Package</h4>
                <p className="text-sm text-gray-400 mb-2">Tiling + Cabinetry + Furniture Finishing</p>
                <p className="text-xs text-orange-500 font-bold uppercase tracking-widest">Save up to 10% when bundled</p>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-blue-500/10 to-green-500/10 border-gray-700 hover-lift">
                <h4 className="font-bold text-white mb-2 font-headline uppercase tracking-wider"> Energy-Ready Home Package</h4>
                <p className="text-sm text-gray-400 mb-2">Solar Installation + Painting + Tiling</p>
                <p className="text-xs text-blue-400 font-bold uppercase tracking-widest">Single point of contact project management</p>
              </Card>
            </div>
          </div>
        </div>

        {/* 6. Process Section */}
        <div 
          ref={(el) => { sectionRefs.current[4] = el }}
          data-animation="animate-slide-in-right"
          className="mb-24 opacity-0"
        >
          <h3 className="text-2xl font-bold text-white mb-12 text-center font-headline uppercase tracking-widest">
            Your Project <span className="text-orange-500">Journey</span>
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="relative text-center">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-xl shadow-lg shadow-orange-500/20">
                  {step.number}
                </div>
                <h4 className="text-white font-bold mb-3 font-headline uppercase tracking-wider text-sm">{step.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{step.desc}</p>
                {i < 3 && <div className="hidden lg:block absolute top-6 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-gray-700"></div>}
              </div>
            ))}
          </div>
        </div>

        {/* 7. Credentials & Certs */}
        <div 
          ref={(el) => { sectionRefs.current[5] = el }}
          data-animation="animate-fade-in-up"
          className="grid md:grid-cols-2 gap-8 mb-24 opacity-0"
        >
          <Card className="p-8 bg-gray-800 border-gray-700">
            <div className="flex items-center mb-6">
              <Award className="h-6 w-6 text-orange-500 mr-3" />
              <h3 className="text-xl font-bold text-white font-headline">Certified. Insured. Trusted.</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FileCheck className="h-5 w-5 text-green-500 mr-3 mt-1" />
                <div>
                  <h5 className="text-white font-bold text-sm">KEBS Approved</h5>
                  <p className="text-xs text-gray-400">Materials meet standard Kenya Bureau of Standards quality benchmarks.</p>
                </div>
              </li>
              <li className="flex items-start">
                <ShieldCheck className="h-5 w-5 text-blue-400 mr-3 mt-1" />
                <div>
                  <h5 className="text-white font-bold text-sm">Fully Insured</h5>
                  <p className="text-xs text-gray-400">Public liability and workmanship insurance for your peace of mind.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Sun className="h-5 w-5 text-yellow-400 mr-3 mt-1" />
                <div>
                  <h5 className="text-white font-bold text-sm">EPRA Licensed</h5>
                  <p className="text-xs text-gray-400">Authorized solar installation (Energy & Petroleum Regulatory Authority).</p>
                </div>
              </li>
            </ul>
          </Card>

          <Card className="p-8 bg-gray-800 border-gray-700">
            <div className="flex items-center mb-6">
              <CreditCard className="h-6 w-6 text-orange-500 mr-3" />
              <h3 className="text-xl font-bold text-white font-headline">Flexible Payment Options</h3>
            </div>
            <div className="space-y-6">
              <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                <h5 className="text-white font-bold text-sm mb-1 uppercase tracking-wider">M-Pesa PayLater</h5>
                <p className="text-xs text-gray-400">Spread payments over 3 months for qualifying projects.</p>
              </div>
              <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                <h5 className="text-white font-bold text-sm mb-1 uppercase tracking-wider">Deposit + Milestone Payments</h5>
                <p className="text-xs text-gray-400">50% deposit, 40% on completion, 10% after final inspection.</p>
              </div>
              <div className="flex items-center justify-between p-4 bg-orange-500/5 border border-orange-500/20 rounded-lg">
                <p className="text-xs text-gray-300">Corporate & Developer Rates</p>
                <Button size="sm" variant="link" className="text-orange-500 p-0 h-auto" onClick={() => router.push('/contact')}>Inquire</Button>
              </div>
            </div>
          </Card>
        </div>

        {/* 9. FAQ Section */}
        <div 
          ref={(el) => { sectionRefs.current[6] = el }}
          data-animation="animate-fade-in-up"
          className="max-w-3xl mx-auto mb-24 opacity-0"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center font-headline uppercase tracking-widest flex items-center justify-center">
            <HelpCircle className="mr-3 h-6 w-6 text-orange-500" />
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h3>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-gray-700">
                <AccordionTrigger className="text-gray-200 hover:text-orange-500 font-headline text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Final CTA */}
        <div 
          ref={(el) => { sectionRefs.current[7] = el }}
          data-animation="animate-fade-in-up"
          className="bg-gradient-to-r from-orange-600 to-orange-800 rounded-2xl p-8 md:p-12 text-center text-white border border-orange-500/20 shadow-2xl opacity-0"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">Ready to Start Your Project?</h2>
          <p className="text-lg mb-10 text-orange-100 max-w-2xl mx-auto">
            Book a consultation today and get a detailed estimate within 24 hours. Let's build your dream space together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-700 hover:bg-orange-50 font-bold px-10 h-14 rounded-full btn-enhanced" onClick={() => router.push('/contact')}>
              Book Consultation Now
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-orange-700 font-bold px-10 h-14 rounded-full bg-transparent" onClick={() => window.location.href='tel:+254710136798'}>
              <Phone className="mr-2 h-5 w-5" />
              +254 710 136 798
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import placeholderData from '@/lib/placeholder-images.json'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showConsultationForm, setShowConsultationForm] = useState(false)
  const [consultationData, setConsultationData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [showConsultationSuccess, setShowConsultationSuccess] = useState(false)
  const pathname = usePathname()

  const logoImage = placeholderData.placeholderImages.find(p => p.id === 'logo.png');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActiveLink = (href: string) => {
    if (href === '/') return pathname === href;
    return pathname.startsWith(href);
  }

  const handleConsultationSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const emailBody = `Dear DADA MJENZI Team,

I would like to book a consultation for my project. Please find my details below:

CONTACT DETAILS:
Name: ${consultationData.name}
Email: ${consultationData.email}
Phone: ${consultationData.phone}

SERVICE INTEREST:
Service: ${consultationData.service}

PROJECT DESCRIPTION:
${consultationData.message}

I look forward to discussing my project with your team and exploring how DADA MJENZI can help bring my vision to life.

Best regards,
${consultationData.name}`

    const gmailUrl = `https://mail.google.com/mail/u/0/?to=wanguimiro.hellen@gmail.com&su=${encodeURIComponent(`Consultation Request from ${consultationData.name}`)}&body=${encodeURIComponent(emailBody)}&tf=cm`
    window.open(gmailUrl, "_blank")

    setShowConsultationSuccess(true)

    setTimeout(() => {
      setShowConsultationSuccess(false)
      setShowConsultationForm(false)
      setConsultationData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      })
    }, 2000)
  }

  const handleConsultationChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setConsultationData({
      ...consultationData,
      [e.target.name]: e.target.value,
    })
  }
  
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About" },
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-gray-900/95 backdrop-blur-md border-b border-gray-800" : "bg-gray-900/80 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src={logoImage?.imageUrl || ''} alt="Dada Mjenzi Logo" width={40} height={40} className="mr-4" data-ai-hint={logoImage?.imageHint} />
            <div className="text-2xl font-bold text-yellow-500 font-cool-jazz">DADA MJENZI</div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
             {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-white transition-all duration-300 hover:text-orange-500 ${
                  isActiveLink(link.href) ? "text-orange-500" : ""
                }`}
              >
                {link.label}
                {isActiveLink(link.href) && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-500"></div>}
              </Link>
            ))}

            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300 hover:scale-105"
              onClick={() => setShowConsultationForm(true)}
            >
              Book Consultation
            </Button>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800 p-4">
            <div className="flex flex-col space-y-4">
            {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-md transition-colors ${
                    isActiveLink(link.href)
                      ? "bg-orange-500 text-white"
                      : "text-white hover:bg-gray-700 hover:text-orange-500"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                onClick={() => {
                  setShowConsultationForm(true);
                  setIsMobileMenuOpen(false);
                }}
              >
                Book Consultation
              </Button>
            </div>
          </div>
        )}
      </nav>

      {showConsultationForm && (
        <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl p-8 max-w-md w-full border border-gray-700 shadow-2xl">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2 font-headline">Book Consultation</h3>
              <p className="text-gray-400">Let's discuss your project and bring your vision to life</p>
            </div>

            <form className="space-y-4" onSubmit={handleConsultationSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={consultationData.name}
                  onChange={handleConsultationChange}
                  required
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={consultationData.email}
                  onChange={handleConsultationChange}
                  required
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={consultationData.phone}
                  onChange={handleConsultationChange}
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
                />
              </div>
              <div>
                <select
                  name="service"
                  value={consultationData.service}
                  onChange={handleConsultationChange}
                  required
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-orange-500 focus:outline-none"
                >
                  <option value="" disabled hidden>Select a service</option>
                  <option value="painting">Painting</option>
                  <option value="tiling">Tiling</option>
                  <option value="cabinetry">Cabinetry</option>
                  <option value="furniture">Furniture Finishing</option>
                  <option value="solar">Solar Installation</option>
                  <option value="multiple">Multiple Services</option>
                </select>
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  rows={3}
                  value={consultationData.message}
                  onChange={handleConsultationChange}
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none resize-none"
                ></textarea>
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 border-gray-600 text-gray-400 hover:bg-gray-800 bg-transparent"
                  onClick={() => setShowConsultationForm(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" className="flex-1 bg-orange-500 hover:bg-orange-600 text-white">
                  {showConsultationSuccess ? (
                    <span className="flex items-center">
                      <span className="text-green-400 mr-2">✓</span>
                      Request Submitted!
                    </span>
                  ) : (
                    "Submit Request"
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}


"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Navigation, Send, Clock, ChevronDown } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [showSuccess, setShowSuccess] = useState(false)
  const [isSelectOpen, setIsSelectOpen] = useState(false)
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const emailBody = `Dear DADA MJENZI Team,\n\nI am reaching out regarding your services:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\n\nMessage: ${formData.message}`
    const gmailUrl = `https://mail.google.com/mail/u/0/?to=wanguimiro.hellen@gmail.com&su=${encodeURIComponent(`Service Inquiry from ${formData.name}`)}&body=${encodeURIComponent(emailBody)}&tf=cm`
    window.open(gmailUrl, "_blank")

    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-gray-900 pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div 
          ref={(el) => { sectionRefs.current[0] = el }}
          data-animation="animate-fade-in-up"
          className="text-center mb-16 opacity-0"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white font-headline leading-tight">
            Ready to Transform <span className="text-orange-500">Your Space?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Contact us today for a free consultation and let's discuss how we can bring your vision to life with our
            expert craftsmanship.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div 
            ref={(el) => { sectionRefs.current[1] = el }}
            data-animation="animate-slide-in-left"
            className="opacity-0"
          >
            <Card className="p-6 md:p-8 bg-gray-800 border-gray-700 shadow-2xl">
              <h3 className="text-2xl font-bold mb-8 text-white font-headline uppercase tracking-wider">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500">Full Name</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-gray-700 border-gray-600 text-white h-12 rounded-lg"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500">Email Address</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-gray-700 border-gray-600 text-white h-12 rounded-lg"
                      placeholder="@example.com"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500">Phone Number</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-gray-700 border-gray-600 text-white h-12 rounded-lg"
                      placeholder="+254 7..."
                    />
                  </div>
                  <div className="relative">
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500">Service Needed</label>
                    <div className="relative">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        onFocus={() => setIsSelectOpen(true)}
                        onBlur={() => setIsSelectOpen(false)}
                        required
                        className="w-full h-12 px-4 bg-gray-700 border border-gray-600 rounded-lg text-white appearance-none text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                      >
                        <option value="" disabled hidden>Select a service</option>
                        <option value="painting">Painting</option>
                        <option value="tiling">Tiling</option>
                        <option value="cabinetry">Cabinetry</option>
                        <option value="furniture">Furniture Finishing</option>
                        <option value="solar">Solar Installation</option>
                        <option value="multiple">Multiple Services</option>
                      </select>
                      <ChevronDown className={`absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 transition-transform duration-300 pointer-events-none ${isSelectOpen ? 'rotate-180' : ''}`} />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500">Project Details</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="bg-gray-700 border-gray-600 text-white rounded-lg resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <Button type="submit" className="w-full h-14 bg-orange-500 hover:bg-orange-600 text-white text-lg font-bold rounded-lg transition-all active:scale-95 shadow-lg shadow-orange-500/20 btn-enhanced">
                  {showSuccess ? (
                    <span className="flex items-center">
                      <span className="text-green-400 mr-2">✓</span>
                      Message Sent!
                    </span>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Info and Map */}
          <div 
            ref={(el) => { sectionRefs.current[2] = el }}
            data-animation="animate-slide-in-right"
            className="space-y-8 opacity-0"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="p-6 text-center bg-gray-800 border-gray-700 hover:border-orange-500/50 transition-colors hover-lift">
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="font-bold text-white mb-1 font-headline">Call Us</h3>
                <p className="text-gray-300 text-sm">+254 710 136 798</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-2">Available 24/7</p>
              </Card>
              <Card className="p-6 text-center bg-gray-800 border-gray-700 hover:border-orange-500/50 transition-colors hover-lift">
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="font-bold text-white mb-1 font-headline">Email Us</h3>
                <p className="text-gray-300 text-sm break-all">wanguimiro.hellen@gmail.com</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-2">Rapid Response</p>
              </Card>
            </div>

            <Card className="p-0 bg-gray-800 border-gray-700 overflow-hidden shadow-2xl">
              <div className="p-5 border-b border-gray-700 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-white font-headline uppercase tracking-wider">Our Location</h3>
                  <p className="text-xs text-gray-400">Nairobi, Kenya</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white bg-transparent"
                  onClick={() => window.open("https://www.google.com/maps/search/Nairobi,+Kenya", "_blank")}
                >
                  Directions
                  <Navigation className="ml-2 h-3 w-3" />
                </Button>
              </div>
              <div className="h-64 md:h-80 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35893314616!2d36.68218899999999!3d-1.302113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="grayscale invert contrast-125"
                ></iframe>
              </div>
            </Card>

            <Card className="p-6 bg-gray-800 border-gray-700 hover:border-orange-500/50 transition-colors">
              <div className="flex items-center mb-6">
                <Clock className="h-5 w-5 text-orange-500 mr-3" />
                <h3 className="font-bold text-white font-headline uppercase tracking-widest text-sm">Working Hours</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm border-b border-gray-700 pb-2">
                  <span className="text-gray-400">Monday - Friday</span>
                  <span className="text-white font-bold">08:00 AM - 06:00 PM</span>
                </div>
                <div className="flex justify-between items-center text-sm border-b border-gray-700 pb-2">
                  <span className="text-gray-400">Saturday</span>
                  <span className="text-white font-bold">09:00 AM - 04:00 PM</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Sunday</span>
                  <span className="text-red-500 font-bold uppercase text-[10px] tracking-widest">Closed</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

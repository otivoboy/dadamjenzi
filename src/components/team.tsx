
"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail, Crown, Award, Users, Target } from "lucide-react"
import Image from "next/image"

const teamMembers = [
  {
    name: "Hellen Wangui Macharia",
    role: "Founder & CEO",
    experience:
      "5+ years experience in high-end interior finishing. Certified by the Painting and Decorating Contractors of Nairobi.",
    image: "/professional-ceo-hellen.jpg",
    isFounder: true,
    achievements: [
      "Founded DADA MJENZI in 2022",
      "Led 100+ successful projects",
      "Certified Master Craftsperson",
      "Women in Business Award 2024",
    ],
    vision:
      "Transforming spaces and empowering communities through exceptional craftsmanship and innovative design solutions.",
    linkedin: "https://linkedin.com/in/hellen-wangui-macharia",
    email: "wanguimiro.hellen@gmail.com",
  },
  {
    name: "Betty Mariana",
    role: "Master Tiling Specialist",
    experience:
      "Certified NTCA Tile Installer with 4 years experience. Specializes in intricate mosaic and large-format tile installations.",
    image: "/team-betty.jpg",
    isFounder: false,
    linkedin: "https://linkedin.com/in/betty-mariana-dadamjenzi",
    email: "betty.mariana@dadamjenzi.co.ke",
  },
  {
    name: "Emily Nduta",
    role: "Cabinet Maker",
    experience:
      "Journeywoman cabinet maker with 3 years experience. Specializes in custom kitchen cabinetry and built-ins.",
    image: "/team-emily.jpg",
    isFounder: false,
    linkedin: "https://linkedin.com/in/emily-nduta-dadamjenzi",
    email: "emily.nduta@dadamjenzi.co.ke",
  },
  {
    name: "Daisy Miro",
    role: "Furniture Restoration Specialist",
    experience: "Master furniture restorer with expertise in antique finishes and French polishing techniques.",
    image: "/team-daisy.jpg",
    isFounder: false,
    linkedin: "https://linkedin.com/in/daisy-miro-dadamjenzi",
    email: "daisy.miro@dadamjenzi.co.ke",
  },
]

export function Team() {
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
    <section id="team" className="py-20 bg-gray-900 pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div 
          ref={(el) => { sectionRefs.current[0] = el }}
          data-animation="animate-fade-in-up"
          className="text-center mb-16 opacity-0"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white font-headline">
            Meet The <span className="text-orange-500">Experts</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our skilled craftsmen bring decades of combined experience and specialized training to every project.
          </p>
        </div>

        {/* Founder Section */}
        <div 
          ref={(el) => { sectionRefs.current[1] = el }}
          data-animation="animate-slide-in-left"
          className="mb-16 opacity-0"
        >
          {teamMembers
            .filter((member) => member.isFounder)
            .map((member, index) => (
              <Card
                key={index}
                className="relative p-6 md:p-10 bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-orange-500/30 shadow-2xl"
              >
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white px-4 py-2 rounded-full text-xs md:text-sm font-bold flex items-center shadow-lg whitespace-nowrap">
                    <Crown className="h-4 w-4 mr-2" />
                    FOUNDER & CEO
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mt-6">
                  <div className="flex-shrink-0">
                    <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-orange-500 p-1">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={224}
                        height={224}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>

                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-3xl md:text-4xl font-bold mb-2 text-white font-headline">{member.name}</h3>
                    <div className="text-xl mb-6 font-medium bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                      {member.role}
                    </div>
                    <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-3xl">{member.experience}</p>

                    <div className="grid sm:grid-cols-2 gap-6 mb-8">
                      <div className="bg-gray-900/50 rounded-xl p-5 border border-gray-700">
                        <div className="flex items-center mb-3">
                          <Target className="h-5 w-5 text-blue-400 mr-2" />
                          <span className="font-bold text-white uppercase tracking-wider text-sm">Our Vision</span>
                        </div>
                        <p className="text-sm text-gray-400 italic leading-relaxed">"{member.vision}"</p>
                      </div>

                      <div className="bg-gray-900/50 rounded-xl p-5 border border-gray-700">
                        <div className="flex items-center mb-3">
                          <Award className="h-5 w-5 text-purple-400 mr-2" />
                          <span className="font-bold text-white uppercase tracking-wider text-sm">Achievements</span>
                        </div>
                        <ul className="text-sm text-gray-400 space-y-2">
                          {member.achievements?.map((achievement, idx) => (
                            <li key={idx} className="flex items-center">
                              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex justify-center lg:justify-start space-x-4">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-400 hover:text-white hover:bg-gray-800"
                        onClick={() => window.open(member.linkedin, "_blank")}
                      >
                        <Linkedin className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-400 hover:text-white hover:bg-gray-800"
                        onClick={() => window.location.href = `mailto:${member.email}`}
                      >
                        <Mail className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
        </div>

        {/* Team Grid */}
        <div 
          ref={(el) => { sectionRefs.current[2] = el }}
          data-animation="animate-fade-in-up"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0"
        >
          {teamMembers
            .filter((member) => !member.isFounder)
            .map((member, index) => (
              <Card
                key={index}
                className="p-8 text-center bg-gray-800 border-gray-700 hover:border-orange-500/50 transition-all group hover-lift"
              >
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-700 group-hover:border-orange-500 transition-colors">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <h3 className="text-xl font-bold mb-1 text-white font-headline">{member.name}</h3>
                <div className="mb-4 font-medium text-orange-400 uppercase tracking-tighter text-sm">{member.role}</div>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">{member.experience}</p>

                <div className="flex justify-center space-x-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-500 hover:text-white"
                    onClick={() => window.open(member.linkedin, "_blank")}
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-500 hover:text-white"
                    onClick={() => window.location.href = `mailto:${member.email}`}
                  >
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
        </div>

        {/* Bottom Message */}
        <div 
          ref={(el) => { sectionRefs.current[3] = el }}
          data-animation="animate-slide-in-right"
          className="mt-20 bg-gray-800/50 rounded-2xl p-8 text-white text-center border border-gray-700 opacity-0"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Users className="h-8 w-8 mr-3 text-orange-500" />
              <h3 className="text-2xl font-bold font-headline uppercase tracking-wide">Leadership Message</h3>
            </div>
            <blockquote className="text-lg md:text-xl italic mb-6 leading-relaxed text-gray-300">
              "At Dada Mjenzi, we don't just transform spaces – we transform lives. Every project is an opportunity to
              create something beautiful, functional, and meaningful. Our team's passion for excellence drives us to
              exceed expectations and build lasting relationships with our clients."
            </blockquote>
            <div className="text-sm font-bold text-orange-500">— WANGUI MACHARIA, FOUNDER & CEO</div>
          </div>
        </div>
      </div>
    </section>
  )
}

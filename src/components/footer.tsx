"use client"

import { Facebook, Instagram, Linkedin, Youtube, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import placeholderData from '@/lib/placeholder-images.json';

export function Footer() {
  const logoImage = placeholderData.placeholderImages.find(p => p.id === 'logo.png');

  return (
    <footer className="bg-gray-800 py-12 border-t border-gray-700">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Image src={logoImage?.imageUrl || ''} alt="Dada Mjenzi Logo" width={32} height={32} className="mr-2" data-ai-hint={logoImage?.imageHint} />
              <div className="text-xl font-bold text-yellow-500 font-cool-jazz">DADA MJENZI</div>
            </div>
            <p className="text-gray-400 mb-4">
              Premium interior finishing services with unmatched quality and attention to detail.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-orange-500"
                onClick={() => window.open("https://facebook.com/dadamjenzi", "_blank")}
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-orange-500"
                onClick={() => window.open("https://instagram.com/dadamjenzi", "_blank")}
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-orange-500"
                onClick={() => window.open("https://linkedin.com/company/dadamjenzi", "_blank")}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-orange-500"
                onClick={() => window.open("https://youtube.com/@dadamjenzi", "_blank")}
              >
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white font-headline">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/services" className="hover:text-orange-500 transition-colors">
                  Premium Painting
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-orange-500 transition-colors">
                  Professional Tiling
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-orange-500 transition-colors">
                  Kitchen Cabinetry
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-orange-500 transition-colors">
                  Furniture Finishing
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-orange-500 transition-colors">
                  Solar Installation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white font-headline">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/about" className="hover:text-orange-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/gallery" className="hover:text-orange-500 transition-colors">
                  Our Work
                </a>
              </li>
              <li>
                <a href="/team" className="hover:text-orange-500 transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-orange-500 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-orange-500 transition-colors flex items-center">
                  <FileText className="h-4 w-4 mr-1" />
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white font-headline">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="tel:+254710136798" className="hover:text-orange-500 transition-colors">
                  +254 710 136 798
                </a>
              </li>
              <li>
                <a href="mailto:wanguimiro.hellen@gmail.com" className="hover:text-orange-500 transition-colors">
                  wanguimiro.hellen@gmail.com
                </a>
              </li>
              <li>
                <span className="text-gray-400">Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} <span className="font-cool-jazz text-yellow-500">DADA MJENZI</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

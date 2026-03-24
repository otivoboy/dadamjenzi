
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import placeholderData from "@/lib/placeholder-images.json"

export function WhatsAppFloat() {
  const [isMounted, setIsMounted] = useState(false)
  const whatsappImage = placeholderData.placeholderImages.find((p) => p.id === "whatsapp.png")

  useEffect(() => {
    // Delay mounting until hydration is complete to avoid showing during preloader
    const timer = setTimeout(() => {
      setIsMounted(true)
    }, 2800) 

    return () => clearTimeout(timer)
  }, [])

  const handleClick = () => {
    const message = "Hi, I'm interested in your services. I found you on your website. Kindly assist."
    window.open(`https://wa.me/254710136798?text=${encodeURIComponent(message)}`, "_blank")
  }

  // Prevent hydration mismatch by returning null on server and initial client load
  if (!isMounted) return null

  return (
    <div
      className="whatsapp-float fixed right-4 bottom-4 md:right-8 md:bottom-8 w-[70px] h-[70px] md:w-[120px] md:h-[120px] z-[50] cursor-pointer group transition-opacity duration-1000 animate-in fade-in"
      onClick={handleClick}
    >
      <div className="absolute md:top-[-40px] top-0 left-0 w-full md:h-[calc(100%+40px)] h-full md:animate-swing-loop origin-top flex flex-col items-center">
        <div className="hidden md:block w-[5px] h-[45px] bg-black/15 rounded-full mb-[-8px] relative z-10"></div>
        <div className="relative w-full flex-1">
          <Image
            src={whatsappImage?.imageUrl || "/whatsapp.png"}
            alt="WhatsApp Logo"
            width={120}
            height={120}
            className="w-full h-full object-contain pointer-events-none drop-shadow-[0_6px_8px_rgba(0,0,0,0.5)]"
          />
        </div>
      </div>
      <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-[50px] h-[10px] bg-black/25 rounded-[50%] blur-[6px]"></div>
    </div>
  )
}

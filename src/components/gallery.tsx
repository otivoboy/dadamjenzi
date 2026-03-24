"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Image from "next/image"

const galleryItems = [
  // Painting Projects
  {
    category: "painting",
    title: "Modern Living Room",
    image: "/gallery/painting/modern-living-room.jpg",
    description: "Modern Living Room Transformation | Sherwin-Williams Duration Matte Finish",
  },
  {
    category: "painting",
    title: "Historic Home Exterior",
    image: "/gallery/painting/historic-home-exterior.jpg",
    description: "Historic Home Exterior | Heritage Color Palette",
  },
  {
    category: "painting",
    title: "Contemporary Bedroom",
    image: "/gallery/painting/contemporary-bedroom.jpg",
    description: "Contemporary Bedroom | Accent Wall with Texture Finish",
  },
  {
    category: "painting",
    title: "Office Space",
    image: "/gallery/painting/office-space.jpg",
    description: "Professional Office Space | Corporate Color Scheme",
  },
  {
    category: "painting",
    title: "Children's Playroom",
    image: "/gallery/painting/childrens-playroom.jpg",
    description: "Children's Playroom | Eco-Friendly Paints",
  },
  {
    category: "painting",
    title: "Dining Room",
    image: "/gallery/painting/dining-room.jpg",
    description: "Elegant Dining Room | Premium Interior Paint",
  },
  {
    category: "painting",
    title: "Kitchen Walls",
    image: "/gallery/painting/kitchen-walls.jpg",
    description: "Kitchen Wall Painting | Moisture-Resistant Finish",
  },
  {
    category: "painting",
    title: "Bathroom Painting",
    image: "/gallery/painting/bathroom-painting.jpg",
    description: "Bathroom Painting | Anti-Mold Paint System",
  },
  {
    category: "painting",
    title: "Staircase Feature",
    image: "/gallery/painting/staircase-feature.jpg",
    description: "Staircase Feature Wall | Decorative Paint Technique",
  },
  {
    category: "painting",
    title: "Exterior House",
    image: "/gallery/painting/exterior-house.jpg",
    description: "Complete Exterior House Painting | Weather-Resistant Coating",
  },

  // Tiling Projects
  {
    category: "tiling",
    title: "Luxury Master Bathroom",
    image: "/gallery/tiling/luxury-master-bathroom.jpg",
    description: "Luxury Master Bathroom | Porcelain Tile with Epoxy Grout",
  },
  {
    category: "tiling",
    title: "Modern Bathroom",
    image: "/gallery/tiling/modern-bathroom.jpg",
    description: "Modern Bathroom | Large Format Porcelain Tile",
  },
  {
    category: "tiling",
    title: "Kitchen Backsplash",
    image: "/gallery/tiling/kitchen-backsplash.jpg",
    description: "Kitchen Backsplash | Subway Tile with Dark Grout",
  },
  {
    category: "tiling",
    title: "Floor Tiling",
    image: "/gallery/tiling/floor-tiling.jpg",
    description: "Living Room Floor | Natural Stone Tile Installation",
  },
  {
    category: "tiling",
    title: "Shower Enclosure",
    image: "/gallery/tiling/shower-enclosure.jpg",
    description: "Shower Enclosure | Waterproof Tile System",
  },
  {
    category: "tiling",
    title: "Mosaic Design",
    image: "/gallery/tiling/mosaic-design.jpg",
    description: "Custom Mosaic Design | Artistic Tile Pattern",
  },
  {
    category: "tiling",
    title: "Outdoor Patio",
    image: "/gallery/tiling/outdoor-patio.jpg",
    description: "Outdoor Patio Tiling | Weather-Resistant Ceramic",
  },
  {
    category: "tiling",
    title: "Fireplace Surround",
    image: "/gallery/tiling/fireplace-surround.jpg",
    description: "Fireplace Surround | Heat-Resistant Natural Stone",
  },
  {
    category: "tiling",
    title: "Entryway Floor",
    image: "/gallery/tiling/entryway-floor.jpg",
    description: "Entryway Floor | Durable Porcelain Tile",
  },
  {
    category: "tiling",
    title: "Pool Area",
    image: "/gallery/tiling/pool-area.jpg",
    description: "Pool Area Tiling | Non-Slip Surface Treatment",
  },

  // Cabinetry Projects
  {
    category: "cabinetry",
    title: "Contemporary Kitchen",
    image: "/gallery/cabinetry/contemporary-kitchen.jpg",
    description: "Contemporary Kitchen | Custom Maple Cabinets with Matte Finish",
  },
  {
    category: "cabinetry",
    title: "Walk-in Closet",
    image: "/gallery/cabinetry/walk-in-closet.jpg",
    description: "Walk-in Closet | Custom Storage Solutions",
  },
  {
    category: "cabinetry",
    title: "Home Office",
    image: "/gallery/cabinetry/home-office.jpg",
    description: "Home Office Built-ins | Functional Workspace Design",
  },
  {
    category: "cabinetry",
    title: "Bathroom Vanity",
    image: "/gallery/cabinetry/bathroom-vanity.jpg",
    description: "Custom Bathroom Vanity | Water-Resistant Finish",
  },
  {
    category: "cabinetry",
    title: "Entertainment Center",
    image: "/gallery/cabinetry/entertainment-center.jpg",
    description: "Entertainment Center | Media Storage Solution",
  },
  {
    category: "cabinetry",
    title: "Kitchen Island",
    image: "/gallery/cabinetry/kitchen-island.jpg",
    description: "Kitchen Island | Multi-Functional Design",
  },
  {
    category: "cabinetry",
    title: "Pantry Organization",
    image: "/gallery/cabinetry/pantry-organization.jpg",
    description: "Pantry Organization | Custom Shelving System",
  },
  {
    category: "cabinetry",
    title: "Laundry Room",
    image: "/gallery/cabinetry/laundry-room.jpg",
    description: "Laundry Room Cabinets | Space-Saving Design",
  },
  {
    category: "cabinetry",
    title: "Bar Cabinet",
    image: "/gallery/cabinetry/bar-cabinet.jpg",
    description: "Custom Bar Cabinet | Wine Storage Integration",
  },
  {
    category: "cabinetry",
    title: "Bedroom Wardrobe",
    image: "/gallery/cabinetry/bedroom-wardrobe.jpg",
    description: "Bedroom Wardrobe | Sliding Door System",
  },

  // Furniture Projects
  {
    category: "furniture",
    title: "Antique Dresser",
    image: "/gallery/furniture/antique-dresser.jpg",
    description: "Antique Dresser Restoration | Hand-Rubbed Oil Finish",
  },
  {
    category: "furniture",
    title: "Dining Table",
    image: "/gallery/furniture/dining-table.jpg",
    description: "Dining Table Refinishing | French Polishing Technique",
  },
  {
    category: "furniture",
    title: "Vintage Chair",
    image: "/gallery/furniture/vintage-chair.jpg",
    description: "Vintage Chair Restoration | Upholstery Renewal",
  },
  {
    category: "furniture",
    title: "Bookshelf Refinish",
    image: "/gallery/furniture/bookshelf-refinish.jpg",
    description: "Bookshelf Refinishing | Custom Stain Matching",
  },
  {
    category: "furniture",
    title: "Coffee Table",
    image: "/gallery/furniture/coffee-table.jpg",
    description: "Coffee Table Restoration | Modern Finish Update",
  },
  {
    category: "furniture",
    title: "Armoire Revival",
    image: "/gallery/furniture/armoire-revival.jpg",
    description: "Armoire Revival | Traditional Restoration Methods",
  },
  {
    category: "furniture",
    title: "Bed Frame",
    image: "/gallery/furniture/bed-frame.jpg",
    description: "Bed Frame Refinishing | Eco-Friendly Water-Based Finish",
  },
  {
    category: "furniture",
    title: "Side Table",
    image: "/gallery/furniture/side-table.jpg",
    description: "Side Table Makeover | Contemporary Color Update",
  },
  {
    category: "furniture",
    title: "Cabinet Doors",
    image: "/gallery/furniture/cabinet-doors.jpg",
    description: "Cabinet Door Refinishing | Hardware Upgrade",
  },
  {
    category: "furniture",
    title: "Wooden Bench",
    image: "/gallery/furniture/wooden-bench.jpg",
    description: "Wooden Bench Restoration | Outdoor Weather Protection",
  },

  // Solar Projects
  {
    category: "solar",
    title: "Residential Rooftop",
    image: "/gallery/solar/residential-rooftop.jpg",
    description: "Residential Rooftop Solar | 5kW Grid-Tie System",
  },
  {
    category: "solar",
    title: "Commercial Building",
    image: "/gallery/solar/commercial-building.jpg",
    description: "Commercial Building Solar | 50kW Installation",
  },
  {
    category: "solar",
    title: "Solar Water Heating",
    image: "/gallery/solar/solar-water-heating.jpg",
    description: "Solar Water Heating System | Energy Efficient Solution",
  },
  {
    category: "solar",
    title: "Ground Mount System",
    image: "/gallery/solar/ground-mount-system.jpg",
    description: "Ground Mount Solar System | Optimal Sun Exposure",
  },
  {
    category: "solar",
    title: "Battery Storage",
    image: "/gallery/solar/battery-storage.jpg",
    description: "Solar Battery Storage | Backup Power Solution",
  },
  {
    category: "solar",
    title: "School Installation",
    image: "/gallery/solar/school-installation.jpg",
    description: "School Solar Installation | Educational Facility",
  },
  {
    category: "solar",
    title: "Farm Solar System",
    image: "/gallery/solar/farm-solar-system.jpg",
    description: "Farm Solar System | Agricultural Power Solution",
  },
  {
    category: "solar",
    title: "Solar Carport",
    image: "/gallery/solar/solar-carport.jpg",
    description: "Solar Carport Installation | Dual-Purpose Structure",
  },
  {
    category: "solar",
    title: "Monitoring System",
    image: "/gallery/solar/monitoring-system.jpg",
    description: "Solar Monitoring System | Performance Tracking",
  },
  {
    category: "solar",
    title: "Maintenance Service",
    image: "/gallery/solar/maintenance-service.jpg",
    description: "Solar Maintenance Service | System Optimization",
  },
]

const filters = [
  { key: "all", label: "All Projects" },
  { key: "painting", label: "Painting" },
  { key: "tiling", label: "Tiling" },
  { key: "cabinetry", label: "Cabinetry" },
  { key: "furniture", label: "Furniture" },
  { key: "solar", label: "Solar" },
]

const projectVideos = [
  {
    title: "Bathroom Renovation - Before",
    video: "/videos/bathroom-before.mp4",
    description: "Original Bathroom condition before renovation",
    type: "before",
  },
  {
    title: "Bathroom Renovation - After",
    video: "/videos/bathroom-after.mp4",
    description: "Completed Bathroom transformation",
    type: "after",
  },
  {
    title: "Spraying Paint Process",
    video: "/videos/spraying-process.mp4",
    description: "Professional Spraying Paint process",
    type: "project",
  },
  {
    title: "Sink Cabinet Installation",
    video: "/videos/cabinet-installation.mp4",
    description: "Custom sink cabinet installation showcase",
    type: "project",
  },
  {
    title: "Custom House Finishing",
    video: "/videos/custom-finish.mp4",
    description: "House renovation",
    type: "project",
  },
  {
    title: "Painting in process",
    video: "/videos/painting-on-process.mp4",
    description: "Building project Painting restoration process",
    type: "project",
  },
]

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<"images" | "videos">("images")

  const filteredItems =
    activeFilter === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeFilter)

  const closeLightbox = () => setLightboxImage(null)

  const beforeAfterVideos = projectVideos.filter((video) => video.type === "before" || video.type === "after")
  const otherVideos = projectVideos.filter((video) => video.type === "project")

  return (
    <section id="gallery" className="py-20 bg-gray-900 pt-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white font-headline">
            Projects That <span className="text-orange-500">Inspire</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Explore our comprehensive portfolio of completed projects showcasing our expertise across painting, tiling,
            cabinetry, furniture restoration, and solar installations.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="bg-gray-800 rounded-lg p-1 border border-gray-700 shadow-lg">
            <Button
              variant={activeTab === "images" ? "default" : "ghost"}
              onClick={() => setActiveTab("images")}
              className={
                activeTab === "images"
                  ? "bg-orange-500 hover:bg-orange-600 text-white"
                  : "text-gray-400 hover:text-white hover:bg-gray-700"
              }
            >
              Project Images
            </Button>
            <Button
              variant={activeTab === "videos" ? "default" : "ghost"}
              onClick={() => setActiveTab("videos")}
              className={
                activeTab === "videos"
                  ? "bg-orange-500 hover:bg-orange-600 text-white"
                  : "text-gray-400 hover:text-white hover:bg-gray-700"
              }
            >
              Project Videos
            </Button>
          </div>
        </div>

        {activeTab === "images" && (
          <>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {filters.map((filter) => (
                <Button
                  key={filter.key}
                  variant={activeFilter === filter.key ? "default" : "outline"}
                  onClick={() => setActiveFilter(filter.key)}
                  className={
                    activeFilter === filter.key
                      ? "bg-orange-500 hover:bg-orange-600 text-white border-none"
                      : "border-gray-700 text-gray-400 hover:bg-gray-800 hover:text-white bg-transparent"
                  }
                >
                  {filter.label}
                </Button>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => (
                <Card
                  key={index}
                  className="overflow-hidden group hover:shadow-2xl transition-all duration-500 bg-gray-800 border-gray-700 cursor-pointer"
                  onClick={() => setLightboxImage(item.image)}
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <div
                        className={`inline-block px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest mb-2 ${
                          item.category === "solar" ? "bg-yellow-500" : "bg-orange-500"
                        }`}
                      >
                        {item.category}
                      </div>
                      <h3 className="text-lg font-bold mb-1 font-headline">{item.title}</h3>
                      <p className="text-xs text-gray-300 line-clamp-2">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </>
        )}

        {activeTab === "videos" && (
          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 text-center font-headline uppercase tracking-widest">
                Before & After <span className="text-orange-500">Transformation</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {beforeAfterVideos.map((video, index) => (
                  <Card key={index} className="overflow-hidden bg-gray-800 border-gray-700 shadow-xl">
                    <div className="relative aspect-video">
                      <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
                        <source src={video.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <div className="absolute top-4 left-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold tracking-widest ${
                            video.type === "before" ? "bg-red-500 text-white" : "bg-green-500 text-white"
                          }`}
                        >
                          {video.type.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-white mb-2 font-headline">{video.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{video.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-8 text-center font-headline uppercase tracking-widest">
                Project <span className="text-orange-500">Showcases</span>
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
                {otherVideos.map((video, index) => (
                  <Card key={index} className="overflow-hidden bg-gray-800 border-gray-700 shadow-xl group">
                    <div className="relative aspect-video">
                      <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
                        <source src={video.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                         <span className="text-white font-bold uppercase tracking-widest text-sm border-2 border-white px-4 py-2">Watch Project</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-white mb-2 font-headline">{video.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{video.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {lightboxImage && (
          <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 md:p-10" onClick={closeLightbox}>
            <div className="relative w-full h-full flex items-center justify-center">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-0 right-0 text-white hover:text-orange-500 z-[110]"
                onClick={closeLightbox}
              >
                <X className="h-8 w-8" />
              </Button>
              <div className="relative w-full h-full max-w-5xl">
                <Image
                  src={lightboxImage || "/placeholder.svg"}
                  alt="Full size project image"
                  fill
                  className="object-contain"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

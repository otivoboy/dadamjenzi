import { Card } from "@/components/ui/card"
import { FileText, Shield, AlertCircle, CheckCircle } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <div className="min-h-screen bg-gray-900 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium mb-4">
                Legal Information
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white font-headline">
                Terms & <span className="text-orange-500">Conditions</span>
              </h1>
              <p className="text-xl text-gray-300">
                Please read these terms and conditions carefully before using our services.
              </p>
            </div>

            <div className="space-y-8">
              <Card className="p-8 bg-gray-800 border-gray-700">
                <div className="flex items-center mb-6">
                  <FileText className="h-8 w-8 text-orange-500 mr-3" />
                  <h2 className="text-2xl font-bold text-white font-headline">Service Agreement</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>
                    By engaging DADA MJENZI for interior finishing services, you agree to the following terms and
                    conditions:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      All work will be performed according to industry standards and specifications agreed upon in
                      writing.
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Payment terms: 30% deposit, 40% at project midpoint, 30% upon completion.
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Project timelines are estimates and may vary due to unforeseen circumstances.
                    </li>
                  </ul>
                </div>
              </Card>

              <Card className="p-8 bg-gray-800 border-gray-700">
                <div className="flex items-center mb-6">
                  <Shield className="h-8 w-8 text-blue-500 mr-3" />
                  <h2 className="text-2xl font-bold text-white font-headline">Warranty & Liability</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <h3 className="text-lg font-semibold text-white font-headline">Our Warranty Coverage:</h3>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Painting services: 5-year warranty on workmanship
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Tiling work: 3-year warranty on installation
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Cabinetry: 2-year warranty on hardware and finishes
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Solar installations: 25-year manufacturer warranty, 5-year installation warranty
                    </li>
                  </ul>
                </div>
              </Card>

              <Card className="p-8 bg-gray-800 border-gray-700">
                <div className="flex items-center mb-6">
                  <AlertCircle className="h-8 w-8 text-yellow-500 mr-3" />
                  <h2 className="text-2xl font-bold text-white font-headline">Important Notices</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-yellow-400 mb-2 font-headline">Client Responsibilities:</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Provide clear access to work areas</li>
                      <li>• Remove or protect personal belongings</li>
                      <li>• Ensure utilities (water, electricity) are available</li>
                      <li>• Obtain necessary permits where required</li>
                    </ul>
                  </div>

                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-blue-400 mb-2 font-headline">Cancellation Policy:</h3>
                    <p className="text-sm">
                      Projects may be cancelled with 48 hours notice. Deposits are refundable minus any materials already
                      ordered or work completed.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-gray-800 border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-6 font-headline">Contact Information</h2>
                <div className="text-gray-300">
                  <p className="mb-4">For questions about these terms and conditions, please contact us:</p>
                  <div className="space-y-2">
                    <p>
                      <strong className="text-white">Email:</strong> wanguimiro.hellen@gmail.com
                    </p>
                    <p>
                      <strong className="text-white">Phone:</strong> +254 710 136 798
                    </p>
                    <p>
                      <strong className="text-white">Address:</strong> Nairobi, Kenya
                    </p>
                  </div>
                  <p className="mt-6 text-sm text-gray-400">Last updated: January {new Date().getFullYear()}</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
       <Footer />
    </main>
  )
}

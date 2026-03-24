import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Shield, Award, FileCheck, Users, Clock, CheckCircle } from "lucide-react"

export default function LicenseInsuredPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Navigation />

      <section className="py-20 px-4 pt-32">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <Shield className="w-16 h-16 text-orange-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-headline">
              Licensed & <span className="text-orange-500">Fully Insured</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your peace of mind is our priority. DADA MJENZI operates with full licensing and comprehensive insurance
              coverage to protect your investment and ensure professional service delivery.
            </p>
          </div>

          {/* Credentials Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-800 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <FileCheck className="w-8 h-8 text-orange-500 mr-4" />
                <h2 className="text-2xl font-bold font-headline">Business License</h2>
              </div>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Registered with Kenya Association of Building and Civil Engineering Contractors (KABCEC)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Valid Nairobi County Business Permit</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>KRA Tax Compliance Certificate</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>NEMA Environmental Impact Assessment Compliance</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-orange-500 mr-4" />
                <h2 className="text-2xl font-bold font-headline">Insurance Coverage</h2>
              </div>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>General Liability Insurance up to KSh 10M</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Professional Indemnity Insurance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Workers' Compensation Coverage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Equipment and Tools Insurance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-lg p-8 mb-16">
            <div className="flex items-center mb-6">
              <Award className="w-8 h-8 text-orange-500 mr-4" />
              <h2 className="text-2xl font-bold font-headline">Professional Certifications</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="font-semibold mb-2 font-headline">ISO 9001:2015</h3>
                  <p className="text-gray-300 text-sm">Quality Management Systems</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="font-semibold mb-2 font-headline">OSHA Certified</h3>
                  <p className="text-gray-300 text-sm">Occupational Safety & Health</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="font-semibold mb-2 font-headline">Green Building</h3>
                  <p className="text-gray-300 text-sm">Sustainable Construction Practices</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Licensed & Insured */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-headline">Why Choose Licensed & Insured?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Users className="w-6 h-6 text-orange-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2 font-headline">Professional Accountability</h3>
                    <p className="text-gray-300">
                      Our licensing ensures we meet industry standards and are accountable to regulatory bodies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-orange-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2 font-headline">Financial Protection</h3>
                    <p className="text-gray-300">
                      Comprehensive insurance protects you from liability and ensures project completion.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-orange-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2 font-headline">Peace of Mind</h3>
                    <p className="text-gray-300">
                      Work with confidence knowing your project is protected by proper licensing and insurance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-xl font-bold mb-6 text-center font-headline">Our Commitment</h3>
              <div className="space-y-4 text-center">
                <div className="bg-orange-500/10 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-500 font-headline">15+ Years</h4>
                  <p className="text-sm text-gray-300">Licensed Operation</p>
                </div>
                <div className="bg-orange-500/10 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-500 font-headline">Zero Claims</h4>
                  <p className="text-sm text-gray-300">Insurance Record</p>
                </div>
                <div className="bg-orange-500/10 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-500 font-headline">100% Compliant</h4>
                  <p className="text-sm text-gray-300">Regulatory Standards</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold mb-4 font-headline">Ready to Work with Licensed Professionals?</h2>
            <p className="text-gray-300 mb-8">
              Contact us today for a free consultation and see our credentials firsthand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Free Quote
              </a>
              <a
                href="tel:+254712345678"
                className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

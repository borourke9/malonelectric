import Link from "next/link"
import { Phone, Mail } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/mevan.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#1F2C4D]/95 via-[#1F2C4D]/80 to-[#1F2C4D]/95"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#1F2C4D_100%)] opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-slide-up-fade">
            Reliable Residential & Commercial <span className="text-[#E94F1D]">Electrical Services</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed animate-slide-up-fade-delay">
            No job too small or too large — prompt, reliable, insured & licensed.
          </p>

          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-white animate-slide-up-fade-delay">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 md:px-4 py-2">
              <span className="w-2 h-2 bg-[#E94F1D] rounded-full"></span>
              <span className="text-sm font-medium">24/7 Emergency Service</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 md:px-4 py-2">
              <span className="w-2 h-2 bg-[#E94F1D] rounded-full"></span>
              <span className="text-sm font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 md:px-4 py-2">
              <span className="w-2 h-2 bg-[#E94F1D] rounded-full"></span>
              <span className="text-sm font-medium">Same-Day Service</span>
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="pt-6 md:pt-8 animate-slide-up-fade-delay flex flex-col items-center">
            <Link
              href="tel:+12318181401"
              className="group inline-flex items-center justify-center px-6 md:px-8 py-4 md:py-5 text-lg md:text-xl lg:text-2xl font-bold text-white bg-[#E94F1D] rounded-xl hover:bg-[#E94F1D]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 w-full max-w-md"
            >
              <span className="mr-2">📞</span>
              <span className="relative">
                Call Now
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </span>
            </Link>

            {/* Contact Information Bubble */}
            <div className="bg-white bg-opacity-90 px-6 py-5 rounded-lg shadow-md mt-4 max-w-md w-full flex flex-col gap-4 font-sans">
              {/* Kurt's Contact Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group relative overflow-hidden rounded-xl border bg-white p-6 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1F2C4D] to-[#E94F1D] opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-0"></div>
                  <div className="relative z-10">
                    <div className="flex flex-col items-center space-y-2">
                      <span className="text-base font-medium text-gray-800">Kurt Malone</span>
                      <Link href="tel:+12318181401" className="text-sm text-gray-700 hover:underline flex items-center justify-center leading-relaxed">
                        <Phone className="h-4 w-4 mr-2" />
                        (231) 818-1401
                      </Link>
                      <Link href="mailto:Kurtmalone7@gmail.com" className="text-sm text-gray-700 hover:underline flex items-center justify-center leading-relaxed">
                        <Mail className="h-4 w-4 mr-2" />
                        Kurtmalone7@gmail.com
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-xl border bg-white p-6 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1F2C4D] to-[#E94F1D] opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-0"></div>
                  <div className="relative z-10">
                    <div className="flex flex-col items-center space-y-2">
                      <span className="text-base font-medium text-gray-800">Craig Malone</span>
                      <Link href="tel:+19893294720" className="text-sm text-gray-700 hover:underline flex items-center justify-center leading-relaxed">
                        <Phone className="h-4 w-4 mr-2" />
                        (989) 329-4720
                      </Link>
                      <Link href="mailto:Cnjm@charter.net" className="text-sm text-gray-700 hover:underline flex items-center justify-center leading-relaxed">
                        <Mail className="h-4 w-4 mr-2" />
                        Cnjm@charter.net
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#1F2C4D] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-16 h-16">
                <Image
                  src="/logo.png"
                  alt="Malone Electric LLC Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-2xl font-bold">Malone Electric LLC</span>
            </Link>
            <p className="text-gray-300 text-sm">
              Licensed, insured, and trusted electrical services for residential and commercial properties.
            </p>
            <div className="text-sm text-gray-400">
              <p>License #: EL-2024-12345</p>
              <p>Fully Insured & Bonded</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-[#E94F1D]" />
                  <span>Kurt: (231) 818-1401</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-[#E94F1D]" />
                  <span>Craig: (989) 329-4720</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-[#E94F1D]" />
                  <span>Kurtmalone7@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-[#E94F1D]" />
                  <span>Cnjm@charter.net</span>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <h4 className="text-sm font-semibold mb-2">Service Areas:</h4>
              <p className="text-sm text-gray-300 mb-3">
                We proudly serve the greater metropolitan area and surrounding communities with reliable electrical services.
              </p>
              <div className="text-sm text-gray-300 space-y-1">
                <p>Mackinaw City</p>
                <p>St. Ignace</p>
                <p>Sault St. Marie</p>
                <p>Indian River</p>
                <p>Pelston</p>
                <p>Cedarville</p>
                <p>Cheboygan</p>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Business Hours</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex justify-between">
                <span>Monday - Thursday:</span>
                <span>9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Friday:</span>
                <span>9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span>9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </div>
              <div className="flex items-center space-x-2 pt-2 border-t border-gray-700">
                <Clock className="h-4 w-4 text-[#E94F1D]" />
                <span className="text-[#E94F1D] font-medium">24/7 Emergency Service</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <Link href="#services" className="block text-gray-300 hover:text-[#E94F1D] transition-colors">
                Our Services
              </Link>
              <Link href="#about" className="block text-gray-300 hover:text-[#E94F1D] transition-colors">
                About Us
              </Link>
              <Link href="#contact" className="block text-gray-300 hover:text-[#E94F1D] transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Malone Electric LLC. All rights reserved. | Licensed Electrical Contractor</p>
        </div>
      </div>
    </footer>
  )
}

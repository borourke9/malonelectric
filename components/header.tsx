"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "about", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4">
            <div className="relative w-16 h-16">
              <Image
                src="/logo.png"
                alt="Malone Electrical LLC Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-2xl font-bold text-[#1F2C4D]">Malone Electrical LLC</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <div className="relative bg-gray-100/80 backdrop-blur-sm rounded-full p-2 flex items-center space-x-1">
              <Link
                href="#home"
                className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
                  activeSection === "home"
                    ? "text-white bg-[#1F2C4D] shadow-lg"
                    : "text-[#1F2C4D] hover:bg-gray-200"
                }`}
              >
                Home
              </Link>
              <Link
                href="#services"
                className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
                  activeSection === "services"
                    ? "text-white bg-[#1F2C4D] shadow-lg"
                    : "text-[#1F2C4D] hover:bg-gray-200"
                }`}
              >
                Services
              </Link>
              <Link
                href="#about"
                className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
                  activeSection === "about"
                    ? "text-white bg-[#1F2C4D] shadow-lg"
                    : "text-[#1F2C4D] hover:bg-gray-200"
                }`}
              >
                About
              </Link>
              <Link
                href="#contact"
                className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
                  activeSection === "contact"
                    ? "text-white bg-[#1F2C4D] shadow-lg"
                    : "text-[#1F2C4D] hover:bg-gray-200"
                }`}
              >
                Contact
              </Link>
            </div>
          </nav>

          {/* Call Button */}
          <Link
            href="tel:+12318181401"
            className="group hidden md:flex items-center space-x-2 bg-[#E94F1D] text-white px-6 py-3 rounded-xl hover:bg-[#E94F1D]/90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Phone className="h-5 w-5" />
            <span className="relative font-bold text-lg">
              (231) 818-1401
              <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link
                href="#home"
                className={`text-[#1F2C4D] hover:text-[#E94F1D] transition-colors ${
                  activeSection === "home" ? "font-bold" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#services"
                className={`text-[#1F2C4D] hover:text-[#E94F1D] transition-colors ${
                  activeSection === "services" ? "font-bold" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#about"
                className={`text-[#1F2C4D] hover:text-[#E94F1D] transition-colors ${
                  activeSection === "about" ? "font-bold" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#contact"
                className={`text-[#1F2C4D] hover:text-[#E94F1D] transition-colors ${
                  activeSection === "contact" ? "font-bold" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="tel:+12318181401"
                className="group flex items-center space-x-2 bg-[#E94F1D] text-white px-6 py-3 rounded-xl hover:bg-[#E94F1D]/90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 w-fit"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="h-5 w-5" />
                <span className="relative font-bold text-lg">
                  (231) 818-1401
                  <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

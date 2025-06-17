import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Building, AlertTriangle, Zap, Car, Lightbulb, Shield, Anchor } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Residential Services",
    description: "Complete electrical solutions for your home including wiring, outlets, and lighting.",
  },
  {
    icon: Building,
    title: "Commercial Services",
    description: "Professional electrical services for businesses, offices, and commercial properties.",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Repairs",
    description: "24/7 emergency electrical repair services with rapid response times.",
  },
  {
    icon: Zap,
    title: "Panel Upgrades",
    description: "Electrical panel upgrades and replacements to meet modern power demands.",
  },
  {
    icon: Car,
    title: "EV Charger Installation",
    description: "Professional installation of electric vehicle charging stations at your home or business.",
  },
  {
    icon: Lightbulb,
    title: "Lighting Solutions",
    description: "Indoor and outdoor lighting installation, repairs, and energy-efficient upgrades.",
  },
  {
    icon: Shield,
    title: "Safety Inspections",
    description: "Comprehensive electrical safety inspections and code compliance checks.",
  },
  {
    icon: Anchor,
    title: "Marine Services",
    description: "Specialized electrical services for boats and marine vessels, including dock power, shore power, and marine electrical systems.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Electrical Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From simple repairs to complex installations, we provide comprehensive electrical services for residential
            and commercial properties.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border bg-white p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#1F2C4D] to-[#E94F1D] opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-0"></div>
              <div className="relative z-10">
                <div className="text-center pb-4">
                  <div className="mx-auto bg-blue-100 p-3 rounded-full w-fit mb-4">
                    <div className="text-[#1F2C4D] group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-8 w-8" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { MapPin } from "lucide-react"

const serviceLocations = [
  { name: "Mackinaw City", lat: 45.7836, lng: -84.7278 },
  { name: "St. Ignace", lat: 45.8686, lng: -84.7278 },
  { name: "Sault St. Marie", lat: 46.4953, lng: -84.3453 },
  { name: "Indian River", lat: 45.4136, lng: -84.6125 },
  { name: "Pelston", lat: 45.5528, lng: -84.7839 },
  { name: "Cedarville", lat: 45.4406, lng: -84.7878 }
]

export default function ServiceArea() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Service Area</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We proudly serve Michigans northern lower and eastern upper peninsulas with reliable electrical
            services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {serviceLocations.map((location, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-[#E94F1D]" />
                  <span className="text-gray-700">{location.name}</span>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Radius: 60 Miles</h3>
              <p className="text-gray-600 mb-4">
                We provide electrical services within a 60-mile radius of our main office. Emergency services available
                24/7 throughout our entire service area.
              </p>
              <p className="text-sm text-gray-500">
                Not sure if we service your area? Give us a call and we'll let you know!
              </p>
            </div>
          </div>

          <div className="w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-md border">
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=1LwaHDCue3sWTl_phe4Aqd4qSC-vD8zM&ehbc=2E312F&noprof=1"
              width="640"
              height="480"
              className="w-full h-[480px] border-0"
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

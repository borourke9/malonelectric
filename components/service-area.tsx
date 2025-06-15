import { MapPin } from "lucide-react"

const serviceLocations = [
  { name: "Mackinaw City", lat: 45.7836, lng: -84.7278 },
  { name: "St. Ignace", lat: 45.8686, lng: -84.7278 },
  { name: "Sault St. Marie", lat: 46.4953, lng: -84.3453 },
  { name: "Indian River", lat: 45.4136, lng: -84.6125 },
  { name: "Pelston", lat: 45.5528, lng: -84.7839 },
  { name: "Alanson", lat: 45.4406, lng: -84.7878 }
]

export default function ServiceArea() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Service Area</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We proudly serve the greater metropolitan area and surrounding communities with reliable electrical
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

          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d43551.123456789!2d-84.5!3d45.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1234567890&markers=color:red%7C${serviceLocations.map(loc => `${loc.lat},${loc.lng}`).join('|')}`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

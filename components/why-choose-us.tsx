import { CheckCircle, Clock, Shield } from "lucide-react"

const reasons = [
  {
    icon: CheckCircle,
    title: "Licensed & Insured",
    description: "Fully licensed electricians with comprehensive insurance coverage for your peace of mind.",
  },
  {
    icon: Clock,
    title: "24/7 Emergency Service",
    description: "Available around the clock for emergency repairs with guaranteed same-day response.",
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "All work backed by our satisfaction guarantee and industry-leading warranties.",
  },
]

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Malone Electric LLC?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to providing exceptional electrical services with the highest standards of safety, quality,
            and customer satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto bg-[#E94F1D] p-4 rounded-full w-fit mb-6">
                <reason.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

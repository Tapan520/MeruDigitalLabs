import { ArrowRight, Landmark, Hotel, Building2, Globe2, Vote, Stethoscope, PhoneCall, Briefcase } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const industries = [
  {
    icon: <Landmark size={36} className="text-blue-600" />,
    name: "Government",
    tagline: "Digital governance at scale",
    desc: "We help government departments and agencies digitize workflows, improve citizen services, and make data-driven policy decisions with AI-powered dashboards and automation tools.",
    products: ["NirvachakAI", "AllForPet"],
    color: "bg-blue-50 border-blue-200",
  },
  {
    icon: <Hotel size={36} className="text-purple-600" />,
    name: "Hospitality",
    tagline: "Elevating guest experiences",
    desc: "From boutique hotels to restaurant chains, our HospitalityOS platform brings complete operational control — reservations, POS, kitchen, inventory, and reports — under one roof.",
    products: ["HospitalityOS"],
    color: "bg-purple-50 border-purple-200",
  },
  {
    icon: <Building2 size={36} className="text-green-600" />,
    name: "Municipal Corporations",
    tagline: "Smart city citizen services",
    desc: "Municipal corporations use AllForPet to digitize civic services like pet registration, vaccination tracking, and complaint management, reducing paperwork and improving transparency.",
    products: ["AllForPet"],
    color: "bg-green-50 border-green-200",
  },
  {
    icon: <Globe2 size={36} className="text-teal-600" />,
    name: "Smart Cities",
    tagline: "Building connected urban ecosystems",
    desc: "Our platforms integrate into smart city initiatives by providing digital citizen services, real-time data dashboards, and AI-powered analytics for urban administrators.",
    products: ["AllForPet", "NirvachakAI"],
    color: "bg-teal-50 border-teal-200",
  },
  {
    icon: <Vote size={36} className="text-indigo-600" />,
    name: "Political Organizations",
    tagline: "AI-driven campaign intelligence",
    desc: "Political parties and independent candidates leverage NirvachakAI to plan campaigns, manage volunteers, analyze voter data, and monitor social media with AI-powered insights.",
    products: ["NirvachakAI"],
    color: "bg-indigo-50 border-indigo-200",
  },
  {
    icon: <Stethoscope size={36} className="text-pink-600" />,
    name: "NGOs & Civic Bodies",
    tagline: "Technology for social impact",
    desc: "NGOs and civic organizations use our platforms to run community programs, track participation, manage volunteers, and generate impact reports with data-backed evidence.",
    products: ["AllForPet", "NirvachakAI"],
    color: "bg-pink-50 border-pink-200",
  },
  {
    icon: <PhoneCall size={36} className="text-orange-600" />,
    name: "Inside Sales & Telecalling",
    tagline: "Supercharge your sales teams",
    desc: "Sales teams and BPOs use TelecallingCRM to manage leads, automate dialing, track agent performance, manage attendance with Punch IN/OUT, handle leave applications, and close more deals with a streamlined telecalling workflow.",
    products: ["TelecallingCRM"],
    color: "bg-orange-50 border-orange-200",
  },
  {
    icon: <Briefcase size={36} className="text-yellow-600" />,
    name: "Gig Economy & Workforce",
    tagline: "Empowering India's gig workforce",
    desc: "ShramSetu helps businesses, staffing agencies, and government bodies register, verify, and match gig workers with employers — bringing trust, transparency, and efficiency to India's unorganized workforce sector.",
    products: ["ShramSetu"],
    color: "bg-yellow-50 border-yellow-200",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Industries We Serve</h1>
          <p className="text-gray-300 text-lg">
            Our AI-powered platforms are deployed across diverse sectors, helping organizations modernize and grow.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind) => (
            <div key={ind.name} className={`border rounded-2xl p-8 ${ind.color} flex flex-col`}>
              <div className="mb-4">{ind.icon}</div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-1">{ind.name}</h3>
              <p className="text-sm font-semibold text-gray-500 mb-4">{ind.tagline}</p>
              <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">{ind.desc}</p>
              <div className="flex flex-wrap gap-2">
                {ind.products.map((prod) => (
                  <span key={prod} className="text-xs bg-white border border-gray-200 text-gray-700 font-semibold px-3 py-1 rounded-full">
                    {prod}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-600 py-16 px-4 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-4">Don&apos;t See Your Industry?</h2>
          <p className="text-blue-100 mb-8">
            We also build custom software for unique domains. Let&apos;s talk about your requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors"
          >
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

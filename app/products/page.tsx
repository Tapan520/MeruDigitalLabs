import { CheckCircle, Vote, Hotel, PawPrint, ArrowRight, PhoneCall, Briefcase } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const products = [
  {
    id: "nirvachakai",
    icon: <Vote size={40} className="text-blue-600" />,
    badge: "AI-Powered",
    badgeColor: "bg-blue-100 text-blue-700",
    name: "NirvachakAI",
    tagline: "Political Campaign & Election Intelligence Platform",
    description:
      "NirvachakAI is India's most advanced AI-powered political campaign management platform. Designed for political parties, candidates, and campaign managers, it gives you a competitive edge with real-time voter data, AI-driven insights, and end-to-end campaign coordination tools — from the ground up to the constituency level.",
    features: [
      { title: "Booth Management", desc: "Manage every polling booth with agent assignment, status tracking, and real-time reporting." },
      { title: "Voter Analytics", desc: "Deep-dive into demographic data, historical trends, and predictive swing analysis." },
      { title: "Volunteer Management", desc: "Recruit, train, and coordinate thousands of volunteers with automated task scheduling." },
      { title: "Survey & Feedback", desc: "Conduct digital voter surveys and analyze sentiment in real-time." },
      { title: "Social Media Monitoring", desc: "Track campaign mentions, sentiment, and opponent activity across all platforms." },
      { title: "AI Insights & Reports", desc: "Get AI-generated strategy recommendations and detailed campaign performance reports." },
    ],
    color: "from-blue-600 to-indigo-700",
    bgLight: "from-blue-50 to-indigo-50",
  },
  {
    id: "hospitalityos",
    icon: <Hotel size={40} className="text-purple-600" />,
    badge: "ERP Suite",
    badgeColor: "bg-purple-100 text-purple-700",
    name: "HospitalityOS",
    tagline: "Complete Hotel & Restaurant Management ERP",
    description:
      "HospitalityOS is a fully integrated ERP system for hotels and restaurants. From the moment a guest walks in to checkout, every touchpoint is managed — bookings, POS billing, kitchen operations, inventory, purchasing, and business intelligence reporting.",
    features: [
      { title: "Hotel Booking & Front Desk", desc: "Online and offline room bookings, check-in/out management, and guest profiles." },
      { title: "Restaurant POS", desc: "Fast, intuitive POS system with table management and split billing." },
      { title: "Kitchen Order Ticket (KOT)", desc: "Digital KOT system that connects front-of-house and kitchen in real time." },
      { title: "Inventory & Purchase", desc: "Automated stock management, purchase orders, and vendor management." },
      { title: "Billing & GST Reports", desc: "GST-compliant billing with detailed financial reports and tax summaries." },
      { title: "Analytics Dashboard", desc: "Real-time revenue dashboards, occupancy rates, and item-wise sales analysis." },
    ],
    color: "from-purple-600 to-pink-600",
    bgLight: "from-purple-50 to-pink-50",
  },
  {
    id: "telecallingcrm",
    icon: <PhoneCall size={40} className="text-orange-600" />,
    badge: "Sales CRM",
    badgeColor: "bg-orange-100 text-orange-700",
    name: "TelecallingCRM",
    tagline: "Smart Telecalling & Sales Pipeline Management Platform",
    description:
      "TelecallingCRM is a powerful, purpose-built CRM for telecalling teams and inside sales operations. It streamlines lead management, auto-dialing, call tracking, attendance, and agent performance — giving sales managers complete visibility and control over their entire telecalling workflow from a single, intuitive platform.",
    features: [
      { title: "Lead Management", desc: "Import, assign, and track leads across stages with smart prioritization and auto-distribution to agents." },
      { title: "Auto & Preview Dialer", desc: "Boost agent productivity with auto-dialing and preview modes that eliminate manual dialing effort." },
      { title: "Call Recording & Logs", desc: "Record every call, maintain detailed call logs, and replay conversations for training and quality audits." },
      { title: "Agent Performance Dashboard", desc: "Monitor call counts, talk time, conversion rates, and targets for every agent in real time." },
      { title: "Follow-Up & Reminder System", desc: "Schedule callbacks and follow-ups with automated reminders so no lead ever falls through the cracks." },
      { title: "Reports & Analytics", desc: "Get in-depth reports on campaign performance, lead conversion funnels, and team productivity trends." },
      { title: "Punch IN / Punch OUT", desc: "Agents can mark attendance digitally with geo-tagged Punch IN and Punch OUT, giving managers accurate real-time attendance visibility." },
      { title: "Leave Management", desc: "Agents can apply for leaves directly from the platform. Managers can review, approve, or reject leave requests with a full leave history and balance tracker." },
    ],
    color: "from-orange-500 to-red-500",
    bgLight: "from-orange-50 to-red-50",
  },
  {
    id: "allforpet",
    icon: <PawPrint size={40} className="text-green-600" />,
    badge: "GovTech",
    badgeColor: "bg-green-100 text-green-700",
    name: "AllForPet",
    tagline: "Smart Pet Registration & Municipal Management Platform",
    description:
      "AllForPet is a government-facing SaaS platform that helps Nagar Palikas and municipal corporations digitize the complete lifecycle of pet management — from registration and licensing to vaccination reminders, lost pet alerts, and community complaint handling.",
    features: [
      { title: "Pet Registration & Licensing", desc: "Citizens can register pets online and receive digital licenses." },
      { title: "License Renewal", desc: "Automated renewal reminders with online payment integration." },
      { title: "Vaccination Tracking", desc: "Maintain pet vaccination records and send due-date alerts to owners." },
      { title: "Lost & Found Module", desc: "Community-based lost and found system with geo-tagged pet alerts." },
      { title: "Complaint Management", desc: "Citizens can report stray animal complaints with photo evidence and tracking." },
      { title: "Municipal Dashboard", desc: "Municipal officers get a complete overview of all pet-related activities in their jurisdiction." },
    ],
    color: "from-green-600 to-teal-600",
    bgLight: "from-green-50 to-teal-50",
  },
  {
    id: "shramsetu",
    icon: <Briefcase size={40} className="text-yellow-600" />,
    badge: "WorkTech",
    badgeColor: "bg-yellow-100 text-yellow-700",
    name: "ShramSetu",
    tagline: "Gig Worker Registration & Employment Matching Platform",
    description:
      "ShramSetu is a digital platform that bridges the gap between India's gig workforce and employers. It enables verified registration of gig workers, skill profiling, and AI-powered job matching — ensuring employers get the right talent and workers get fair, verified opportunities.",
    features: [
      { title: "Gig Worker Registration", desc: "Workers can register with Aadhaar-linked digital profiles, skill sets, and work history." },
      { title: "Skill Verification & Profiling", desc: "Document-backed skill verification to build a trusted, authenticated worker pool." },
      { title: "Job Matching Engine", desc: "AI-powered matching connects employers with the most suitable verified gig workers instantly." },
      { title: "Employer Dashboard", desc: "Employers can post requirements, browse verified profiles, and manage hiring from one dashboard." },
      { title: "Worker Background Check", desc: "Integrated background verification to ensure safety and trust on both sides." },
      { title: "Ratings & Reviews", desc: "Two-way rating system for workers and employers to build reputation and accountability." },
    ],
    color: "from-yellow-500 to-amber-500",
    bgLight: "from-yellow-50 to-amber-50",
  },
];

export default function ProductsPage() {
  return (
    <>
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Products</h1>
          <p className="text-gray-300 text-lg">
          Five powerful platforms. One unified technology company. Built to solve real-world problems for
            governments, businesses, communities, and the gig economy.
          </p>
        </div>
      </section>

      {/* Products */}
      <div className="bg-gray-50">
        {products.map((p, i) => (
          <section
            key={p.id}
            id={p.id}
            className={`py-20 px-4 ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
          >
            <div className="max-w-6xl mx-auto">
              <div className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-start`}>
                {/* Info */}
                <div className="flex-1">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${p.bgLight} mb-6`}>
                    {p.icon}
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${p.badgeColor} mb-4 inline-block`}>{p.badge}</span>
                  <h2 className="text-3xl font-extrabold text-gray-900 mb-2">{p.name}</h2>
                  <p className="text-gray-500 font-medium mb-4">{p.tagline}</p>
                  <p className="text-gray-600 leading-relaxed mb-8">{p.description}</p>
                  <Link
                    href="/contact"
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${p.color} text-white font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity`}
                  >
                    Request a Demo <ArrowRight size={18} />
                  </Link>
                </div>
                {/* Features */}
                <div className="flex-1 grid sm:grid-cols-2 gap-4">
                  {p.features.map((f) => (
                    <div key={f.title} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                      <div className="flex items-start gap-3">
                        <CheckCircle size={18} className="text-green-500 mt-0.5 shrink-0" />
                        <div>
                          <h4 className="font-bold text-gray-900 text-sm mb-1">{f.title}</h4>
                          <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-blue-600 py-16 px-4 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-4">Interested in a Product?</h2>
          <p className="text-blue-100 mb-8">Get a personalized demo and see how our products fit your organization.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors"
          >
            Book a Free Demo <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

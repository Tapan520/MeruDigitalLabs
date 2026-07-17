import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  ShieldCheck,
  Rocket,
  HeartHandshake,
  ChevronRight,
  Vote,
  Hotel,
  PawPrint,
  PhoneCall,
  Brain,
  Building2,
  Stethoscope,
  Landmark,
  Globe2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const products = [
  {
    id: "nirvachakai",
    icon: <Vote size={22} className="text-blue-600" />,
    badge: "AI-Powered",
    badgeColor: "bg-blue-100 text-blue-700",
    name: "NirvachakAI",
    tagline: "Political Campaign & Election Intelligence Platform",
    description:
      "Leverage AI to manage election campaigns with booth-level intelligence, real-time voter analytics, and automated volunteer coordination.",
    features: [
      "Booth Management",
      "Voter Analytics",
      "Volunteer Management",
      "Survey & Feedback",
      "Social Media Monitoring",
      "AI Insights & Reports",
    ],
    color: "from-blue-50 to-indigo-50",
    href: "/products#nirvachakai",
  },
  {
    id: "hospitalityos",
    icon: <Hotel size={22} className="text-purple-600" />,
    badge: "ERP Suite",
    badgeColor: "bg-purple-100 text-purple-700",
    name: "HospitalityOS",
    tagline: "Hotel & Restaurant Management System",
    description:
      "An all-in-one ERP for hotels and restaurants � from front desk bookings and restaurant POS to kitchen management and inventory control.",
    features: [
      "Hotel Booking & Front Desk",
      "Restaurant POS",
      "Kitchen Order Ticket (KOT)",
      "Inventory & Purchase",
      "Billing & GST Reports",
      "Analytics Dashboard",
    ],
    color: "from-purple-50 to-pink-50",
    href: "/products#hospitalityos",
  },
  {
    id: "telecallingcrm",
    icon: <PhoneCall size={22} className="text-orange-600" />,
    badge: "Sales CRM",
    badgeColor: "bg-orange-100 text-orange-700",
    name: "TelecallingCRM",
    tagline: "Smart Telecalling & Sales Pipeline Management Platform",
    description:
      "Purpose-built CRM for telecalling teams — manage leads, auto-dial, track calls, and monitor agent performance from one powerful dashboard.",
    features: [
      "Lead Management",
      "Auto & Preview Dialer",
      "Call Recording & Logs",
      "Agent Performance Dashboard",
      "Follow-Up & Reminder System",
      "Reports & Analytics",
    ],
    color: "from-orange-50 to-red-50",
    href: "/products#telecallingcrm",
  },
  {
    id: "allforpet",
    icon: <PawPrint size={22} className="text-green-600" />,
    badge: "GovTech",
    badgeColor: "bg-green-100 text-green-700",
    name: "AllForPet",
    tagline: "Smart Pet Registration & Municipal Management Platform",
    description:
      "Helping Nagar Palikas and municipalities digitize pet registration, vaccination tracking, and community pet management efficiently.",
    features: [
      "Pet Registration & Licensing",
      "License Renewal",
      "Vaccination Tracking",
      "Lost & Found Module",
      "Complaint Management",
      "Municipal Dashboard",
    ],
    color: "from-green-50 to-teal-50",
    href: "/products#allforpet",
  },
];

const whyUs = [
  {
    icon: <Brain className="text-blue-600" size={22} />,
    title: "AI at the Core",
    desc: "Every product is designed with AI-first thinking � from predictive analytics to intelligent automation.",
  },
  {
    icon: <ShieldCheck className="text-green-600" size={22} />,
    title: "Government-Grade Security",
    desc: "Built with data security and compliance in mind to serve government and enterprise clients.",
  },
  {
    icon: <Rocket className="text-purple-600" size={22} />,
    title: "Fast Implementation",
    desc: "Quick onboarding, dedicated support, and seamless integration with your existing workflows.",
  },
  {
    icon: <HeartHandshake className="text-pink-600" size={22} />,
    title: "Customer Success First",
    desc: "We don't just sell software � we partner with you to ensure measurable outcomes and long-term success.",
  },
];

const industries = [
  { icon: <Landmark size={24} />, name: "Government" },
  { icon: <Hotel size={24} />, name: "Hospitality" },
  { icon: <Building2 size={24} />, name: "Municipal Corporations" },
  { icon: <Globe2 size={24} />, name: "Smart Cities" },
  { icon: <Vote size={24} />, name: "Political Organizations" },
  { icon: <PhoneCall size={24} />, name: "Inside Sales Teams" },
  { icon: <Stethoscope size={24} />, name: "NGOs & Civic Bodies" },
];

const steps = [
  { step: "01", title: "Discovery Call", desc: "We understand your requirements, goals, and existing workflows." },
  { step: "02", title: "Proposal & Demo", desc: "We present a tailored solution with a live product demonstration." },
  { step: "03", title: "Implementation", desc: "Rapid deployment with full data migration and integration support." },
  { step: "04", title: "Ongoing Support", desc: "Dedicated support, updates, and continuous improvement." },
];

const testimonials = [
  {
    quote: "NirvachakAI transformed how we managed our entire constituency. Booth-level insights gave us an edge we never had before.",
    name: "Rajesh Kumar",
    role: "Political Campaign Manager",
    rating: 5,
  },
  {
    quote: "HospitalityOS streamlined our entire hotel and restaurant operations. The kitchen management module alone saved us hours every day.",
    name: "Priya Sharma",
    role: "Hotel Operations Director",
    rating: 5,
  },
  {
    quote: "AllForPet helped our Nagar Palika go fully digital for pet registration. Citizens love the ease, and our team loves the dashboard.",
    name: "Suresh Patil",
    role: "Municipal Commissioner",
    rating: 5,
  },
  {
    quote: "TelecallingCRM completely transformed our inside sales team. Call volumes went up by 40% and our follow-up rate has never been better.",
    name: "Ankit Mehta",
    role: "Sales Head, FinTech Startup",
    rating: 5,
  },
];

const stats = [
{ value: "4+", label: "Products" },
{ value: "10+", label: "Industries Served" },
  { value: "500+", label: "Clients" },
  { value: "99.9%", label: "Uptime SLA" },
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-widest">
            India&apos;s AI-Powered SaaS Company
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 tracking-tight">
            AI-Powered Software Solutions for{" "}
            <span className="text-green-300">Governments</span>,{" "}
            <span className="text-yellow-300">Hospitality</span>,{" "}
            <span className="text-pink-300">Smart Cities</span> &{" "}
            <span className="text-orange-300">Sales Teams</span>
          </h1>
          <p className="text-sm md:text-base text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            We build innovative software products that automate operations, improve efficiency, and create better
            experiences for businesses and public organizations.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/products"
              className="bg-white text-blue-700 font-semibold px-6 py-2.5 rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-2 text-sm"
            >
              Explore Products <ArrowRight size={15} />
            </Link>
            <Link
              href="/contact"
              className="border border-white/60 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-white/10 transition-colors text-sm"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-7 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-bold text-blue-600">{s.value}</p>
              <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="bg-gray-50 py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Our Products</h2>
            <p className="text-sm text-gray-500 max-w-xl mx-auto">
            Purpose-built software platforms for four distinct domains — elections, hospitality, municipal services, and sales.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <div
                key={p.id}
                className={`bg-gradient-to-br ${p.color} border border-gray-200 rounded-xl p-6 flex flex-col hover:shadow-md transition-shadow`}
              >
                <div className="mb-3">{p.icon}</div>
                <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full w-fit mb-2.5 ${p.badgeColor}`}>{p.badge}</span>
                <h3 className="text-base font-bold text-gray-900 mb-1">{p.name}</h3>
                <p className="text-xs text-gray-600 font-medium mb-2">{p.tagline}</p>
                <p className="text-xs text-gray-500 mb-4 leading-relaxed">{p.description}</p>
                <ul className="space-y-1.5 mb-5 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-gray-700">
                      <CheckCircle size={13} className="text-green-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={p.href} className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                  Learn More <ChevronRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Why Choose Meru Digital Labs?</h2>
            <p className="text-sm text-gray-500 max-w-xl mx-auto">
              We combine deep domain expertise with cutting-edge technology to deliver results that matter.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyUs.map((w) => (
              <div key={w.title} className="bg-gray-50 rounded-xl p-5 hover:shadow-md transition-shadow border border-gray-100">
                <div className="mb-3">{w.icon}</div>
                <h3 className="font-semibold text-sm text-gray-900 mb-1.5">{w.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-blue-600 py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Industries We Serve</h2>
          <p className="text-sm text-blue-100 mb-8">
            Our software is trusted across multiple sectors driving India&apos;s digital transformation.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="bg-white/10 hover:bg-white/20 text-white rounded-lg p-3.5 flex flex-col items-center gap-1.5 transition-colors"
              >
                {ind.icon}
                <span className="text-xs font-medium text-center">{ind.name}</span>
              </div>
            ))}
          </div>
          <div className="mt-7">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-5 py-2 rounded-lg text-sm hover:bg-blue-50 transition-colors"
            >
              View All Industries <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Our Process</h2>
          <p className="text-sm text-gray-500 max-w-xl mx-auto mb-10">A simple, structured approach to deliver value fast.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-left">
            {steps.map((s) => (
              <div key={s.step} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <p className="text-3xl font-bold text-blue-100 mb-2">{s.step}</p>
                <h3 className="font-semibold text-sm text-gray-900 mb-1">{s.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">What Our Clients Say</h2>
            <p className="text-sm text-gray-500">Trusted by organizations across India.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-gray-50 border border-gray-100 rounded-xl p-6 flex flex-col">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={13} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-xs leading-relaxed flex-1 mb-4">&quot;{t.quote}&quot;</p>
                <div>
                  <p className="font-semibold text-sm text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG TEASER */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Latest Insights</h2>
            <p className="text-sm text-gray-500">Stay updated with AI, GovTech, and hospitality technology trends.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { cat: "AI & GovTech", title: "How AI is Transforming Indian Election Campaigns in 2025", date: "June 2025" },
              { cat: "Hospitality Tech", title: "Why Hotels Need an Integrated POS + Inventory System", date: "May 2025" },
            { cat: "Municipal Digitalization", title: "Pet Registration Digitization: A Step Towards Smart Cities", date: "April 2025" },
            { cat: "Sales CRM", title: "How TelecallingCRM is Boosting Inside Sales Teams Across India", date: "March 2025" },
            ].map((b) => (
              <Link
                key={b.title}
                href="/blog"
                className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-md transition-shadow flex flex-col"
              >
                <span className="text-xs font-semibold text-blue-600 mb-2 uppercase tracking-wider">{b.cat}</span>
                <h3 className="text-sm font-semibold text-gray-900 leading-snug mb-3">{b.title}</h3>
                <p className="text-xs text-gray-400 mt-auto">{b.date}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-7">
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-blue-600 font-semibold hover:underline">
              View All Articles <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-purple-700 to-blue-700 py-14 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-sm text-blue-100 mb-8">
            Let&apos;s discuss how Meru Digital Labs can help your organization grow with intelligent software.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="bg-white text-purple-700 font-semibold px-6 py-2.5 rounded-lg text-sm hover:bg-purple-50 transition-colors flex items-center gap-2"
            >
              Request a Demo <ArrowRight size={15} />
            </Link>
            <Link
              href="/products"
              className="border border-white/60 text-white font-semibold px-6 py-2.5 rounded-lg text-sm hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <Users size={15} /> Explore Products
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

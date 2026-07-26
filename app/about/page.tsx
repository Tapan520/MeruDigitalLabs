import { Lightbulb, Eye, ShieldCheck, Users, HeartHandshake, Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  {
    icon: <Lightbulb size={28} className="text-yellow-500" />,
    title: "Innovation",
    desc: "We relentlessly pursue new ideas and approaches, using the latest in AI and cloud technology to solve complex problems.",
  },
  {
    icon: <Eye size={28} className="text-blue-500" />,
    title: "Transparency",
    desc: "We believe in open, honest communication with our clients, partners, and team — no surprises, no fine print.",
  },
  {
    icon: <Star size={28} className="text-green-500" />,
    title: "Customer Success",
    desc: "Your success is our success. We measure our performance by the outcomes you achieve, not just project delivery.",
  },
  {
    icon: <ShieldCheck size={28} className="text-purple-500" />,
    title: "Security",
    desc: "We build every system with enterprise-grade security, GDPR compliance, and data privacy at the forefront.",
  },
  {
    icon: <Users size={28} className="text-pink-500" />,
    title: "Collaboration",
    desc: "We work as an extension of your team — deeply engaged, always responsive, and genuinely invested in your goals.",
  },
  {
    icon: <HeartHandshake size={28} className="text-teal-500" />,
    title: "Integrity",
    desc: "We do what we say, deliver what we promise, and stand behind our work with full accountability.",
  },
];

const team = [
  { name: "Founder & CEO", role: "Technology Vision & Strategy" },
  { name: "CTO", role: "AI & Product Architecture" },
  { name: "VP Products", role: "Product Management & Roadmap" },
  { name: "Head of Engineering", role: "Platform Development" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-br from-blue-700 to-purple-700 text-white py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About Meru Digital Labs</h1>
          <p className="text-blue-100 text-lg">
            Building AI-powered software that simplifies governance, hospitality, and citizen services.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-14 items-start">
          <div className="flex-1">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Meru Digital Labs was founded with a simple but powerful belief: that technology should solve real
              problems for real people — whether it&apos;s a candidate running for election, a hotel manager struggling
              with inventory, or a municipal officer trying to track pet registrations.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We started by identifying three underserved domains in India&apos;s technology landscape — election campaign
              management, hospitality operations, and civic municipal services — and built dedicated, best-in-class
              platforms for each: NirvachakAI, HospitalityOS, and AllForPet.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, Meru Digital Labs is growing into India&apos;s leading AI-first SaaS company for governments,
              businesses, and communities — with a commitment to delivering intelligent software that creates
              measurable outcomes.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            {[
              { value: "2023", label: "Founded" },
              { value: "3", label: "SaaS Products" },
              { value: "500+", label: "Organizations Served" },
              { value: "10+", label: "States in India" },
            ].map((s) => (
              <div key={s.label} className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100">
                <p className="text-3xl font-extrabold text-blue-600 mb-1">{s.value}</p>
                <p className="text-sm text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-blue-600 text-white rounded-2xl p-10">
            <h3 className="text-2xl font-extrabold mb-4">Our Mission</h3>
            <p className="text-blue-100 leading-relaxed">
              Building AI-powered software that simplifies governance, hospitality, and citizen services — making
              digital transformation accessible to governments, businesses, and communities across India.
            </p>
          </div>
          <div className="bg-purple-600 text-white rounded-2xl p-10">
            <h3 className="text-2xl font-extrabold mb-4">Our Vision</h3>
            <p className="text-purple-100 leading-relaxed">
              To become India&apos;s leading SaaS company delivering intelligent software solutions for governments,
              businesses, and communities — driving a more connected, efficient, and data-driven India.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              These core values guide everything we do — from how we build products to how we serve our clients.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <div className="mb-3">{v.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-gray-500">A team of passionate builders, designers, and problem solvers.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((t) => (
              <div key={t.name} className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={28} className="text-blue-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-1">{t.name}</h4>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-blue-700 to-purple-700 py-16 px-4 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-4">Let&apos;s Build Something Together</h2>
          <p className="text-blue-100 mb-8">
            Reach out to discuss how Meru Digital Labs can partner with your organization.
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

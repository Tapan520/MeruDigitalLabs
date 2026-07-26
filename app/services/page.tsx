import {
  Code2,
  Brain,
  Smartphone,
  Globe2,
  Cloud,
  Plug2,
  BarChart3,
  Bot,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    icon: <Code2 size={32} className="text-blue-600" />,
    title: "Custom Software Development",
    desc: "End-to-end custom software built to your exact specifications — web, desktop, or enterprise applications using modern technology stacks.",
    tags: ["React", "Next.js", "Node.js", "Python"],
  },
  {
    icon: <Brain size={32} className="text-purple-600" />,
    title: "AI Solutions",
    desc: "Build intelligent systems with machine learning, NLP, computer vision, and predictive analytics tailored to your business domain.",
    tags: ["OpenAI", "Python", "TensorFlow", "LLMs"],
  },
  {
    icon: <Smartphone size={32} className="text-green-600" />,
    title: "Mobile App Development",
    desc: "Cross-platform and native mobile apps for iOS and Android with beautiful UI/UX and high performance.",
    tags: ["React Native", "Flutter", "iOS", "Android"],
  },
  {
    icon: <Globe2 size={32} className="text-teal-600" />,
    title: "Web Applications",
    desc: "Scalable, secure, and SEO-optimized web applications designed for both B2B and B2C audiences.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "REST API"],
  },
  {
    icon: <Cloud size={32} className="text-indigo-600" />,
    title: "Cloud Migration",
    desc: "Migrate your legacy systems to the cloud with zero downtime, enhanced security, and optimized costs.",
    tags: ["AWS", "Azure", "Docker", "Kubernetes"],
  },
  {
    icon: <Plug2 size={32} className="text-orange-600" />,
    title: "API Integration",
    desc: "Connect your systems with third-party services, government APIs, payment gateways, and data providers.",
    tags: ["REST", "GraphQL", "Webhooks", "OAuth"],
  },
  {
    icon: <BarChart3 size={32} className="text-pink-600" />,
    title: "Power BI Dashboards",
    desc: "Transform your raw data into interactive Power BI dashboards and reports for real-time business intelligence.",
    tags: ["Power BI", "DAX", "SQL", "Data Modeling"],
  },
  {
    icon: <Bot size={32} className="text-cyan-600" />,
    title: "AI Chatbots",
    desc: "Intelligent chatbots for customer support, citizen services, and internal helpdesks — powered by the latest LLMs.",
    tags: ["OpenAI", "Langchain", "WhatsApp API", "Web Chat"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Services</h1>
          <p className="text-gray-300 text-lg">
            Beyond our products, we deliver custom technology services to help organizations build, integrate, and
            scale digital solutions.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="mb-4">{s.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">{s.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {s.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-gray-100 text-gray-600 font-medium px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-purple-700 py-16 px-4 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-4">Need a Custom Solution?</h2>
          <p className="text-purple-100 mb-8">
            Tell us your challenge. We&apos;ll design and build the right solution for you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-3 rounded-xl hover:bg-purple-50 transition-colors"
          >
            Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

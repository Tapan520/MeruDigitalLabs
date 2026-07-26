import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const techStack = [
  {
    category: "Frontend",
    color: "bg-blue-50 border-blue-200",
    titleColor: "text-blue-700",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  },
  {
    category: "Backend",
    color: "bg-purple-50 border-purple-200",
    titleColor: "text-purple-700",
    items: ["Node.js", "Python", "FastAPI", "REST API", "GraphQL"],
  },
  {
    category: "AI & ML",
    color: "bg-green-50 border-green-200",
    titleColor: "text-green-700",
    items: ["OpenAI GPT-4", "LangChain", "HuggingFace", "Scikit-learn", "TensorFlow"],
  },
  {
    category: "Database",
    color: "bg-yellow-50 border-yellow-200",
    titleColor: "text-yellow-700",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch"],
  },
  {
    category: "Cloud & DevOps",
    color: "bg-orange-50 border-orange-200",
    titleColor: "text-orange-700",
    items: ["AWS", "Azure", "Docker", "Kubernetes", "GitHub Actions"],
  },
  {
    category: "Analytics & BI",
    color: "bg-pink-50 border-pink-200",
    titleColor: "text-pink-700",
    items: ["Power BI", "Google Analytics", "Mixpanel", "Custom Dashboards"],
  },
];

export default function TechnologyPage() {
  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Technology Stack</h1>
          <p className="text-gray-300 text-lg">
            We use modern, battle-tested technologies to build secure, scalable, and high-performance software.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((stack) => (
              <div key={stack.category} className={`border rounded-2xl p-8 ${stack.color}`}>
                <h3 className={`text-lg font-extrabold mb-5 ${stack.titleColor}`}>{stack.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item) => (
                    <span key={item} className="bg-white border border-gray-200 text-gray-700 text-sm font-medium px-3 py-1.5 rounded-lg shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Our Development Principles</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: "API-First Design", desc: "All our products are built on open APIs, enabling seamless integration with third-party tools and government systems." },
              { title: "Cloud-Native Architecture", desc: "Designed for scale from day one — with auto-scaling, fault tolerance, and 99.9% uptime SLAs." },
              { title: "Security by Design", desc: "Security isn't an afterthought. Encryption, role-based access, and audit logs are built into every module." },
            ].map((p) => (
              <div key={p.title} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-left">
                <h4 className="font-bold text-gray-900 mb-2">{p.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

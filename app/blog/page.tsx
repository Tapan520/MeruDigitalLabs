import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const posts = [
  {
    cat: "AI & GovTech",
    catColor: "text-blue-600 bg-blue-50",
    title: "How AI is Transforming Indian Election Campaigns in 2025",
    excerpt:
      "AI-powered platforms like NirvachakAI are changing the game � from booth-level analytics to predictive voter modeling. Here's how.",
    date: "June 15, 2025",
    readTime: "6 min read",
  },
  {
    cat: "Hospitality Technology",
    catColor: "text-purple-600 bg-purple-50",
    title: "Why Hotels Need an Integrated POS + Inventory System in 2025",
    excerpt:
      "Siloed hotel management systems cost hotels revenue every day. Learn why integration between POS, kitchen, and inventory is non-negotiable.",
    date: "May 20, 2025",
    readTime: "5 min read",
  },
  {
    cat: "Municipal Digitalization",
    catColor: "text-green-600 bg-green-50",
    title: "Pet Registration Digitization: A Step Towards Smart Cities",
    excerpt:
      "Nagar Palikas across India are going digital for pet management. Here's what a fully digital pet registration system looks like � and why it matters.",
    date: "April 10, 2025",
    readTime: "4 min read",
  },
  {
    cat: "Government SaaS",
    catColor: "text-teal-600 bg-teal-50",
    title: "The Rise of Government SaaS in India: Opportunities and Challenges",
    excerpt:
      "India's government sector is one of the largest untapped markets for SaaS. We break down the landscape, challenges, and the road ahead.",
    date: "March 5, 2025",
    readTime: "7 min read",
  },
  {
    cat: "Election Technology",
    catColor: "text-indigo-600 bg-indigo-50",
    title: "Data-Driven Politics: How Voter Analytics is Reshaping Indian Elections",
    excerpt:
      "From constituency profiling to real-time booth monitoring � political parties are investing heavily in data. Here's why.",
    date: "February 18, 2025",
    readTime: "8 min read",
  },
  {
    cat: "AI",
    catColor: "text-pink-600 bg-pink-50",
    title: "Building AI-Powered Citizen Services: Lessons from AllForPet",
    excerpt:
      "How we built AllForPet — a citizen-first platform for pet management — using AI, mobile-first design, and government APIs.",
    date: "January 30, 2025",
    readTime: "5 min read",
  },
  {
    cat: "Sales CRM",
    catColor: "text-orange-600 bg-orange-50",
    title: "How TelecallingCRM is Boosting Inside Sales Teams Across India",
    excerpt:
      "Inside sales teams are struggling with manual dialing, missed follow-ups, and zero visibility. TelecallingCRM solves all of it — here's how.",
    date: "March 12, 2025",
    readTime: "5 min read",
  },
  {
    cat: "Sales Technology",
    catColor: "text-red-600 bg-red-50",
    title: "Auto Dialer vs Manual Dialing: Why Modern Sales Teams Are Making the Switch",
    excerpt:
      "Manual dialing wastes up to 40% of a telecaller's day. We break down how auto and preview dialers in TelecallingCRM change the game for sales productivity.",
    date: "February 5, 2025",
    readTime: "4 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Blog & Insights</h1>
          <p className="text-gray-300 text-lg">
            Thought leadership, product updates, and deep dives into AI, GovTech, and hospitality technology.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.title} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow flex flex-col">
              <span className={`text-xs font-bold px-3 py-1 rounded-full w-fit mb-4 ${post.catColor}`}>{post.cat}</span>
              <h2 className="font-extrabold text-gray-900 leading-snug mb-3">{post.title}</h2>
              <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-5">{post.excerpt}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs text-gray-400">{post.date} � {post.readTime}</span>
                <Link href="#" className="inline-flex items-center gap-1 text-blue-600 text-sm font-semibold hover:underline">
                  Read <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

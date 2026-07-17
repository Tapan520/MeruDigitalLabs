import Link from "next/link";
import { Zap, Mail, Phone, MapPin, Share2, MessageCircle, Code2, Globe2 } from "lucide-react";

const products = [
  { name: "NirvachakAI", href: "/products#nirvachakai" },
  { name: "HospitalityOS", href: "/products#hospitalityos" },
  { name: "TelecallingCRM", href: "/products#telecallingcrm" },
  { name: "AllForPet", href: "/products#allforpet" },
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Technology", href: "/technology" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
            <div className="bg-blue-600 text-white rounded-md p-1">
              <Zap size={15} />
            </div>
            <span className="font-bold text-sm text-white tracking-tight">
              Meru<span className="text-blue-400">Digital</span><span className="text-purple-400">Labs</span>
            </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 mb-4">
              Building AI-powered software that simplifies governance,
              hospitality, and citizen services.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="LinkedIn" className="hover:text-blue-400 transition-colors"><Share2 size={20} /></a>
              <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition-colors"><MessageCircle size={20} /></a>
              <a href="#" aria-label="GitHub" className="hover:text-blue-400 transition-colors"><Code2 size={20} /></a>
              <a href="#" aria-label="Website" className="hover:text-blue-400 transition-colors"><Globe2 size={20} /></a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2">
              {products.map((p) => (
                <li key={p.name}>
                  <Link href={p.href} className="text-sm hover:text-blue-400 transition-colors">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {company.map((c) => (
                <li key={c.name}>
                  <Link href={c.href} className="text-sm hover:text-blue-400 transition-colors">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-blue-400 shrink-0" />
                <span>India (Registered Office)</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-blue-400 shrink-0" />
                <a href="mailto:hello@merudigitallabs.com" className="hover:text-blue-400 transition-colors">
                  hello@merudigitallabs.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-blue-400 shrink-0" />
                <a href="tel:+919000000000" className="hover:text-blue-400 transition-colors">
                  +91 90000 00000
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>� {new Date().getFullYear()} Meru Digital Labs Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

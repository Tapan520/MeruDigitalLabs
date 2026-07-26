"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Share2, MessageCircle, Code2, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-br from-blue-700 to-purple-700 text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-blue-100 text-lg">
            Have a question, need a demo, or want to discuss a custom project? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-gray-500 mb-10 leading-relaxed">
              Whether you&apos;re evaluating NirvachakAI for your election campaign, HospitalityOS for your hotel, or
              AllForPet for your municipality — our team is ready to walk you through the right solution.
            </p>

            <div className="space-y-5 mb-10">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 text-blue-600 rounded-xl p-3">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">Email</p>
                  <a href="mailto:hello@merudigitallabs.com" className="font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                    hello@merudigitallabs.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-green-100 text-green-600 rounded-xl p-3">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">Phone</p>
                  <a href="tel:+919000000000" className="font-semibold text-gray-800 hover:text-green-600 transition-colors">
                    +91 90000 00000
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 text-purple-600 rounded-xl p-3">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">Office</p>
                  <p className="font-semibold text-gray-800">India (Registered Office)</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-700 mb-3">Follow us</p>
              <div className="flex gap-3">
                <a href="#" className="bg-white border border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-300 rounded-xl p-2.5 transition-colors" aria-label="LinkedIn">
                  <Share2 size={20} />
                </a>
                <a href="#" className="bg-white border border-gray-200 text-gray-600 hover:text-blue-400 hover:border-blue-300 rounded-xl p-2.5 transition-colors" aria-label="Twitter">
                  <MessageCircle size={20} />
                </a>
                <a href="#" className="bg-white border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-400 rounded-xl p-2.5 transition-colors" aria-label="GitHub">
                  <Code2 size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={28} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-500">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-extrabold text-gray-900 mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Company / Organization</label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your company"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 00000 00000"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Interested In</label>
                    <select
                      name="product"
                      value={form.product}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                    >
                      <option value="">Select a product or service</option>
                      <option value="nirvachakai">NirvachakAI — Election Campaign Platform</option>
                      <option value="hospitalityos">HospitalityOS — Hotel &amp; Restaurant ERP</option>
                      <option value="allforpet">AllForPet — Pet Management Platform</option>
                      <option value="custom">Custom Software Development</option>
                      <option value="ai">AI Solutions</option>
                      <option value="other">Other / General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Message *</label>
                    <textarea
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your requirements..."
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  >
                    Send Message <Send size={16} />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

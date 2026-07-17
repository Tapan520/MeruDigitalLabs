import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <section className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: July 2025</p>
        <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
          <p>
            Meru Digital Labs Pvt. Ltd. (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting and respecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
            visit our website or use our products.
          </p>
          <h2 className="text-xl font-bold text-gray-900">Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you fill out a contact form, request a
            demo, or use our software products. This may include your name, email address, phone number, company
            name, and any other details you choose to share.
          </p>
          <h2 className="text-xl font-bold text-gray-900">How We Use Your Information</h2>
          <p>
            We use the information we collect to respond to your inquiries, provide and improve our services,
            send product updates and marketing communications (with your consent), and comply with legal
            obligations.
          </p>
          <h2 className="text-xl font-bold text-gray-900">Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal data against
            unauthorized access, alteration, disclosure, or destruction.
          </p>
          <h2 className="text-xl font-bold text-gray-900">Contact</h2>
          <p>
            For privacy-related questions, please email us at{" "}
            <a href="mailto:privacy@merudigitallabs.com" className="text-blue-600 hover:underline">
              privacy@merudigitallabs.com
            </a>
            .
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

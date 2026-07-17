import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <section className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Terms of Service</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: July 2025</p>
        <div className="space-y-6 text-gray-700">
          <p>
            By accessing or using any of Meru Digital Labs&apos; products or services, you agree to be bound by these
            Terms of Service. Please read them carefully before using our platform.
          </p>
          <h2 className="text-xl font-bold text-gray-900">Use of Services</h2>
          <p>
            Our products are provided for lawful business use only. You agree not to use our services for any
            unlawful purpose, to violate any regulations, or to infringe on the rights of others.
          </p>
          <h2 className="text-xl font-bold text-gray-900">Intellectual Property</h2>
          <p>
            All content, designs, software, and materials on our website and products are the exclusive property
            of Meru Digital Labs Pvt. Ltd. You may not reproduce or distribute them without written permission.
          </p>
          <h2 className="text-xl font-bold text-gray-900">Limitation of Liability</h2>
          <p>
            Meru Digital Labs shall not be liable for any indirect, incidental, or consequential damages arising
            from the use of our services.
          </p>
          <h2 className="text-xl font-bold text-gray-900">Changes to Terms</h2>
          <p>
            We reserve the right to update these Terms at any time. Continued use of our services after changes
            constitutes acceptance of the new Terms.
          </p>
          <h2 className="text-xl font-bold text-gray-900">Contact</h2>
          <p>
            For any questions about these Terms, please contact us at{" "}
            <a href="mailto:legal@merudigitallabs.com" className="text-blue-600 hover:underline">
              legal@merudigitallabs.com
            </a>
            .
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

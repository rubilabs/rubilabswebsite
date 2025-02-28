"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const PrivacyPolicy = () => {
  const router = useRouter();

  return (
    <section className="w-full py-14 px-6 md:px-12 lg:px-24 bg-[#F3F3F3] select-none flex flex-col items-center">
      {/* Header Section */}
      <div className="w-full max-w-5xl mb-8 py-6 flex items-center">
        <button onClick={() => router.push("/")} className="flex items-center text-gray-800 hover:text-gray-600 transition">
          <ArrowLeft size={24} className="mr-2" />
          <span className="text-lg font-medium">Back to Home</span>
        </button>
      </div>

      <div className="max-w-5xl text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
        <p className="text-gray-700 mt-4 text-md">
          Last Updated: 28 February 2025
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl text-left">
        <h2 className="text-xl font-semibold text-gray-800">1. Introduction</h2>
        <p className="text-gray-600 mt-4 text-md">
          At RubiLabs, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">2. Information We Collect</h2>
        <p className="text-gray-600 mt-4 text-md">
          We may collect the following types of personal data from you:
        </p>
        <ul className="text-gray-600 mt-2 text-md list-disc pl-6">
          <li>Personal identifiers such as your name, email address, and phone number.</li>
          <li>Account information, including login credentials and security settings.</li>
          <li>Transaction details when you make a purchase or request a service.</li>
          <li>Technical information such as IP address, browser type, and operating system.</li>
          <li>Usage data including interactions with our website or services.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">3. How We Use Your Information</h2>
        <p className="text-gray-600 mt-4 text-md">
          We process your personal data for the following purposes:
        </p>
        <ul className="text-gray-600 mt-2 text-md list-disc pl-6">
          <li>To provide and improve our services.</li>
          <li>To personalize your experience and enhance usability.</li>
          <li>To communicate with you regarding updates, promotions, or support.</li>
          <li>To comply with legal and regulatory obligations.</li>
          <li>To detect, prevent, and address fraud and security risks.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">4. How We Share Your Information</h2>
        <p className="text-gray-600 mt-4 text-md">
          We do not sell your personal data. However, we may share your information in the following circumstances:
        </p>
        <ul className="text-gray-600 mt-2 text-md list-disc pl-6">
          <li>With service providers that help us deliver and maintain our services.</li>
          <li>With legal authorities if required by law or in response to a legal request.</li>
          <li>With affiliated companies and trusted partners to enhance our services.</li>
          <li>During business transfers such as a merger, acquisition, or sale of assets.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">5. Data Security</h2>
        <p className="text-gray-600 mt-4 text-md">
          We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, loss, or misuse. While we strive to ensure security, no system is entirely immune to risks.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">6. Your Rights and Choices</h2>
        <p className="text-gray-600 mt-4 text-md">
          Depending on your location, you may have rights regarding your personal data, including:
        </p>
        <ul className="text-gray-600 mt-2 text-md list-disc pl-6">
          <li>The right to access, update, or delete your information.</li>
          <li>The right to object to or restrict certain data processing activities.</li>
          <li>The right to withdraw consent at any time where processing is based on consent.</li>
          <li>The right to request a copy of your data in a structured format.</li>
        </ul>
        <p className="text-gray-600 mt-4 text-md">
          To exercise these rights, please contact us at <Link href="mailto:privacy@rubilink.io" className="underline">privacy@rubilink.io</Link>.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">7. Cookies and Tracking Technologies</h2>
        <p className="text-gray-600 mt-4 text-md">
          We use cookies and similar tracking technologies to enhance user experience, analyze website traffic, and provide relevant advertisements. You can manage cookie preferences through your browser settings.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">8. Third-Party Links</h2>
        <p className="text-gray-600 mt-4 text-md">
          Our services may contain links to third-party websites. We are not responsible for the privacy practices of these external sites and encourage you to review their policies before providing any personal information.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">9. International Data Transfers</h2>
        <p className="text-gray-600 mt-4 text-md">
          Your information may be transferred to and processed in countries outside your jurisdiction. We take necessary measures to ensure that your data is protected in accordance with applicable laws.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">10. Changes to This Privacy Policy</h2>
        <p className="text-gray-600 mt-4 text-md">
          We reserve the right to update this Privacy Policy from time to time. Any modifications will be effective immediately upon posting. We encourage you to review this policy periodically.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">11. Contact Information</h2>
        <p className="text-gray-600 mt-4 text-md">
          If you have any questions about this Privacy Policy or how we handle your data, please contact us at:
        </p>
        <p className="text-gray-600 text-md mt-2">
          <Link href="mailto:privacy@rubilink.io" className="underline">support@rubilink.io</Link>
        </p>
      </div>
      <span className="text-gray-600 py-4 text-sm mt-[2rem] text-center">Prepared by RubiLabs - 2025</span>
    </section>
  );
};

export default PrivacyPolicy;

"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const DataProcessingPrivacy = () => {
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
        <h1 className="text-4xl font-bold text-gray-900">Data Processing and Privacy Policy</h1>
        <p className="text-gray-700 mt-4 text-md">
          Last Updated: 28 February 2025
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl text-left">
        <h2 className="text-xl font-semibold text-gray-800">1. Introduction</h2>
        <p className="text-gray-600 mt-4 text-md">
          At RubiLabs, we are committed to protecting your privacy and ensuring the security of your personal data. This Data Processing and Privacy Policy outlines how we collect, process, store, and protect your information in compliance with applicable data protection laws and regulations.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">2. Data We Collect</h2>
        <p className="text-gray-600 mt-4 text-md">
          We may collect and process the following types of data:
        </p>
        <ul className="text-gray-600 mt-2 text-md list-disc pl-6">
          <li>**Personal Information** – Name, email address, phone number, and other identifiers.</li>
          <li>**Financial Data** – Payment information and transaction history.</li>
          <li>**Usage Data** – Information related to how you interact with our Services, including browsing behavior and IP address.</li>
          <li>**Device Data** – Information about the device used to access our platform, such as operating system and browser type.</li>
          <li>**Communication Data** – Emails, customer service requests, and feedback submissions.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">3. How We Use Your Data</h2>
        <p className="text-gray-600 mt-4 text-md">
          We use your data for the following purposes:
        </p>
        <ul className="text-gray-600 mt-2 text-md list-disc pl-6">
          <li>To provide and improve our services.</li>
          <li>To personalize user experience and enhance security.</li>
          <li>To process transactions and facilitate payments.</li>
          <li>To comply with legal and regulatory requirements.</li>
          <li>To prevent fraud and ensure account security.</li>
          <li>To communicate with you regarding service updates and support inquiries.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">4. Data Storage and Security</h2>
        <p className="text-gray-600 mt-4 text-md">
          We implement industry-standard security measures to protect your data, including:
        </p>
        <ul className="text-gray-600 mt-2 text-md list-disc pl-6">
          <li>Encryption of sensitive data using **AES-256 and SHA-256 encryption**.</li>
          <li>Strict access controls ensuring only authorized personnel can access user data.</li>
          <li>Routine security audits and penetration testing.</li>
          <li>Secure storage and processing of data in compliance with **GDPR, CCPA, and other privacy laws**.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">5. Data Retention</h2>
        <p className="text-gray-600 mt-4 text-md">
          We retain your data only for as long as necessary to fulfill the purposes outlined in this policy or as required by law. When data is no longer needed, it is securely deleted or anonymized.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">6. Sharing of Data</h2>
        <p className="text-gray-600 mt-4 text-md">
          We do not sell or rent your personal data. However, we may share data with:
        </p>
        <ul className="text-gray-600 mt-2 text-md list-disc pl-6">
          <li>Third-party service providers assisting in operations (e.g., payment processors, hosting services).</li>
          <li>Regulatory authorities and law enforcement in compliance with legal obligations.</li>
          <li>Business partners, where explicit consent has been provided by the user.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">7. Your Rights</h2>
        <p className="text-gray-600 mt-4 text-md">
          As a user, you have the following rights under applicable privacy laws:
        </p>
        <ul className="text-gray-600 mt-2 text-md list-disc pl-6">
          <li>**Right to Access** – Request a copy of your personal data.</li>
          <li>**Right to Rectification** – Request correction of inaccurate data.</li>
          <li>**Right to Erasure** – Request deletion of your personal data.</li>
          <li>**Right to Restriction** – Request limited processing of your data.</li>
          <li>**Right to Data Portability** – Receive your data in a structured format.</li>
          <li>**Right to Object** – Withdraw consent for data processing at any time.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">8. Cookies and Tracking</h2>
        <p className="text-gray-600 mt-4 text-md">
          We use cookies to enhance user experience and analyze site performance. You can manage or disable cookies through your browser settings.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">9. Third-Party Links</h2>
        <p className="text-gray-600 mt-4 text-md">
          Our website may contain links to third-party sites. We are not responsible for their privacy practices and encourage users to review their policies.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">10. Contact Information</h2>
        <p className="text-gray-600 mt-4 text-md">
          If you have any questions regarding our Data Processing and Privacy Policy, you can reach us at:
        </p>
        <p className="text-gray-600 text-md mt-2">
          <Link href="mailto:privacy@rubilink.io" className="underline">privacy@rubilink.io</Link>
        </p>
      </div>
      <span className="text-gray-600 py-4 text-sm mt-[2rem] text-center">Prepared by RubiLabs - 2025</span>
    </section>
  );
};

export default DataProcessingPrivacy;

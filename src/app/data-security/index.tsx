"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const DataSecurityPolicy = () => {
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
        <h1 className="text-4xl font-bold text-gray-900">Data Security Policy</h1>
        <p className="text-gray-700 mt-4 text-md">
          Last Updated: 28 February 2025
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl text-left">
        <h2 className="text-xl font-semibold text-gray-800">1. Introduction</h2>
        <p className="text-gray-600 mt-4 text-md">
          At RubiLabs, we prioritize data security to protect our users, partners, and stakeholders. This policy outlines the measures we take to ensure the confidentiality, integrity, and availability of all data processed within our systems.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">2. Security Standards</h2>
        <p className="text-gray-600 mt-4 text-md">
          We adhere to internationally recognized security frameworks, including:
        </p>
        <ul className="text-gray-600 mt-2 text-md list-disc pl-6">
          <li>**ISO 27001** – Information security management best practices.</li>
          <li>**NIST Cybersecurity Framework** – Risk assessment and security controls.</li>
          <li>**GDPR & CCPA Compliance** – Data privacy and protection guidelines.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">3. Data Encryption</h2>
        <p className="text-gray-600 mt-4 text-md">
          We implement industry-leading encryption standards to protect sensitive data:
        </p>
        <ul className="text-gray-600 mt-2 text-md list-disc pl-6">
          <li>Data at Rest: Encrypted using **AES-256** encryption.</li>
          <li>Data in Transit: Secured with **TLS 1.3** and **SHA-256** hashing.</li>
          <li>Access Control: Role-based encryption ensures only authorized personnel can decrypt information.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">4. Access Control & Authentication</h2>
        <p className="text-gray-600 mt-4 text-md">
          To prevent unauthorized access, we enforce:
        </p>
        <ul className="text-gray-600 mt-2 text-md list-disc pl-6">
          <li>Multi-Factor Authentication (MFA) for all administrative accounts.</li>
          <li>Strict **Role-Based Access Control (RBAC)** for system users.</li>
          <li>Audit logging to track and monitor system activity in real time.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">5. Network Security</h2>
        <p className="text-gray-600 mt-4 text-md">
          Our infrastructure is secured using:
        </p>
        <ul className="text-gray-600 mt-2 text-md list-disc pl-6">
          <li>Next-Generation Firewalls (NGFW) to filter and monitor network traffic.</li>
          <li>Intrusion Detection & Prevention Systems (IDPS) to prevent unauthorized access.</li>
          <li>Regular penetration testing to identify and address vulnerabilities.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">6. Data Retention & Deletion</h2>
        <p className="text-gray-600 mt-4 text-md">
          We retain data only as long as necessary for operational, legal, and regulatory purposes. Once data is no longer required, it is securely deleted using:
        </p>
        <ul className="text-gray-600 mt-2 text-md list-disc pl-6">
          <li>Data wiping and overwriting methods for digital storage.</li>
          <li>Physical destruction of storage devices when decommissioned.</li>
          <li>Automated data retention policies for compliance.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">7. Incident Response Plan</h2>
        <p className="text-gray-600 mt-4 text-md">
          In the event of a security breach, RubiLabs follows a structured **Incident Response Plan**:
        </p>
        <ul className="text-gray-600 mt-2 text-md list-disc pl-6">
          <li>**Detection & Containment** – Immediate identification and isolation of threats.</li>
          <li>**Investigation & Analysis** – Determine the root cause and scope of the breach.</li>
          <li>**Notification & Compliance** – If applicable, notify affected users and regulatory authorities.</li>
          <li>**Remediation & Prevention** – Implement security patches and additional safeguards.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">8. Third-Party Security</h2>
        <p className="text-gray-600 mt-4 text-md">
          We require third-party vendors to comply with our security policies and conduct security audits to ensure data protection measures align with our standards.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">9. Employee Security Training</h2>
        <p className="text-gray-600 mt-4 text-md">
          All RubiLabs employees undergo security awareness training to recognize threats such as **phishing, social engineering, and insider threats**. Employees handling sensitive data receive additional cybersecurity training to ensure compliance with best practices.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">10. Compliance and Auditing</h2>
        <p className="text-gray-600 mt-4 text-md">
          Our data security framework undergoes periodic internal and external audits to maintain compliance with industry security standards.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">11. Contact Information</h2>
        <p className="text-gray-600 mt-4 text-md">
          If you have any concerns regarding data security or believe your information may be at risk, please contact our Security Team at:
        </p>
        <p className="text-gray-600 text-md mt-2">
          <Link href="mailto:security@rubilink.io" className="underline">security@rubilink.io</Link>
        </p>
      </div>
      <span className="text-gray-600 py-4 text-sm mt-[2rem] text-center">Prepared by RubiLabs - 2025</span>
    </section>
  );
};

export default DataSecurityPolicy;

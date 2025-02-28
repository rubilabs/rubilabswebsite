"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const CustomerRightsSecurity = () => {
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
        <h1 className="text-4xl font-bold text-gray-900">Customer Rights and Security Guide</h1>
        <p className="text-gray-700 mt-4 text-md">
          Last Updated: 28 February 2025
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl text-left">
        <h2 className="text-xl font-semibold text-gray-800">1. Introduction</h2>
        <p className="text-gray-600 mt-4 text-md">
          At RubiLabs, we prioritize the security, privacy, and rights of our customers. This guide outlines the key rights and security measures we provide to protect your data, transactions, and overall experience while using our services.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">2. Customer Rights</h2>
        <p className="text-gray-600 mt-4 text-md">
          As a valued customer, you have the following rights when using our services:
        </p>
        <ul className="text-gray-600 mt-2 text-md list-disc pl-6">
          <li>**Right to Privacy** – Your personal information is handled with the highest security standards. We will never share or sell your data without your explicit consent.</li>
          <li>**Right to Transparent Information** – You have access to clear and understandable information regarding our services, fees, terms, and security policies.</li>
          <li>**Right to Secure Transactions** – Your transactions are encrypted and protected by industry-standard security protocols.</li>
          <li>**Right to Dispute Resolution** – If you encounter any unauthorized transactions or service discrepancies, you have the right to file a dispute and receive prompt support.</li>
          <li>**Right to Withdraw Consent** – You may revoke any previously given consent for marketing, data sharing, or service agreements.</li>
          <li>**Right to Accessibility** – Our services are designed to be inclusive and accessible to all customers, including those with disabilities.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">3. Data Security and Protection</h2>
        <p className="text-gray-600 mt-4 text-md">
          We implement rigorous security measures to protect customer data from unauthorized access, breaches, or misuse, including:
        </p>
        <ul className="text-gray-600 mt-2 text-md list-disc pl-6">
          <li>Encryption of personal and financial data using **AES-256 and SHA-256 standards**.</li>
          <li>Regular **penetration testing** and security audits to identify vulnerabilities.</li>
          <li>Multi-Factor Authentication (**MFA**) for additional account protection.</li>
          <li>Real-time fraud detection and **anomaly detection AI** to prevent suspicious activities.</li>
          <li>Strict access control policies ensuring only authorized personnel can access sensitive information.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">4. Customer Responsibilities</h2>
        <p className="text-gray-600 mt-4 text-md">
          While we are committed to securing your information, customers also play a crucial role in maintaining security. We encourage the following best practices:
        </p>
        <ul className="text-gray-600 mt-2 text-md list-disc pl-6">
          <li>Use **strong passwords** and avoid sharing credentials with others.</li>
          <li>Enable **multi-factor authentication (MFA)** for enhanced security.</li>
          <li>Regularly update your devices and software to prevent vulnerabilities.</li>
          <li>Verify emails and links before clicking to avoid phishing scams.</li>
          <li>Report any suspicious activities or unauthorized access immediately.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">5. Fraud Prevention Measures</h2>
        <p className="text-gray-600 mt-4 text-md">
          To protect customers from fraud, we implement the following measures:
        </p>
        <ul className="text-gray-600 mt-2 text-md list-disc pl-6">
          <li>Continuous monitoring of transactions for **unusual patterns**.</li>
          <li>Blocking of suspicious IP addresses and **geolocation tracking** for unauthorized logins.</li>
          <li>Dedicated **fraud response teams** to investigate reported fraudulent activities.</li>
          <li>Partnerships with financial institutions and law enforcement agencies for rapid intervention.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">6. Reporting Security Incidents</h2>
        <p className="text-gray-600 mt-4 text-md">
          If you suspect fraud, unauthorized access, or security issues, you should:
        </p>
        <ul className="text-gray-600 mt-2 text-md list-disc pl-6">
          <li>Immediately contact our security team via email at <Link href="mailto:systemdev@rubilink.io" className="underline">systemdev@rubilink.io</Link>.</li>
          <li>Change your passwords and enable additional security settings.</li>
          <li>Monitor your account activity and report suspicious transactions.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">7. Compliance with Regulatory Standards</h2>
        <p className="text-gray-600 mt-4 text-md">
          RubiLabs adheres to global security and compliance regulations, including:
        </p>
        <ul className="text-gray-600 mt-2 text-md list-disc pl-6">
          <li>General Data Protection Regulation (**GDPR**).</li>
          <li>Payment Card Industry Data Security Standard (**PCI DSS**).</li>
          <li>Financial Action Task Force (**FATF**) AML and CFT regulations.</li>
          <li>ISO/IEC 27001 information security certification.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">8. Customer Support and Assistance</h2>
        <p className="text-gray-600 mt-4 text-md">
          Our customer support team is available to assist you with security concerns, account management, and rights-related inquiries. You can reach us through:
        </p>
        <p className="text-gray-600 text-md mt-2">
          <Link href="mailto:support@rubilink.io" className="underline">support@rubilink.io</Link>
        </p>
      </div>
      <span className="text-gray-600 py-4 text-sm mt-[2rem] text-center">Prepared by RubiLabs - 2025</span>
    </section>
  );
};

export default CustomerRightsSecurity;

"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const CounteringTerrorismFinancing = () => {
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
        <h1 className="text-4xl font-bold text-gray-900">Countering the Financing of Terrorism (CFT) Policy</h1>
        <p className="text-gray-700 mt-4 text-md">
          Last Updated: 28 February 2025
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl text-left">
        <h2 className="text-xl font-semibold text-gray-800">1. Introduction</h2>
        <p className="text-gray-600 mt-4 text-md">
          The **Countering the Financing of Terrorism (CFT) Policy** establishes guidelines and regulatory requirements to prevent financial systems from being exploited to fund terrorist activities. It aligns with international laws and frameworks to detect, prevent, and report transactions that may contribute to terrorism financing.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">2. Definition of Terrorism Financing</h2>
        <p className="text-gray-600 mt-4 text-md">
          Terrorism financing involves the provision, collection, or movement of funds intended to support terrorist activities, groups, or individuals. This may include:
        </p>
        <ul className="text-gray-600 mt-2 text-md list-disc pl-6">
          <li>Direct funding of terrorist organizations or individuals.</li>
          <li>Using legitimate businesses, charities, or trade routes to disguise financial flows.</li>
          <li>Transferring money across borders using informal value transfer systems.</li>
          <li>Exploiting financial services for laundering illicit funds for terrorist purposes.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">3. Legal and Regulatory Compliance</h2>
        <p className="text-gray-600 mt-4 text-md">
          Our CFT policy aligns with global regulatory standards, including:
        </p>
        <ul className="text-gray-600 mt-2 text-md list-disc pl-6">
          <li>Financial Action Task Force (FATF) Recommendations on CFT.</li>
          <li>United Nations Security Council Resolutions (UNSCRs) related to terrorism financing.</li>
          <li>National CFT laws and anti-terrorism legislation.</li>
          <li>Cross-border cooperation initiatives with financial intelligence units (FIUs).</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">4. Risk-Based Approach</h2>
        <p className="text-gray-600 mt-4 text-md">
          We adopt a **risk-based approach** to identify and mitigate terrorism financing risks by:
        </p>
        <ul className="text-gray-600 mt-2 text-md list-disc pl-6">
          <li>Conducting **enhanced due diligence (EDD)** on high-risk customers and transactions.</li>
          <li>Applying **sanctions screening** against global terrorist watchlists.</li>
          <li>Monitoring **cross-border transactions** and high-risk jurisdictions.</li>
          <li>Reviewing **suspicious patterns**, such as structuring, rapid movement of funds, or third-party payments.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">5. Customer Due Diligence (CDD) and Know Your Customer (KYC)</h2>
        <p className="text-gray-600 mt-4 text-md">
          To prevent misuse of financial systems for terrorism financing, financial institutions and businesses must:
        </p>
        <ul className="text-gray-600 mt-2 text-md list-disc pl-6">
          <li>Verify customer identities before establishing relationships.</li>
          <li>Assess the nature of customer activities and funding sources.</li>
          <li>Monitor and report unusual transactions to authorities.</li>
          <li>Ensure ongoing compliance with CFT policies through training and internal controls.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">6. Reporting and Monitoring</h2>
        <p className="text-gray-600 mt-4 text-md">
          Financial institutions and businesses must promptly report any suspicious activity related to terrorism financing to:
        </p>
        <ul className="text-gray-600 mt-2 text-md list-disc pl-6">
          <li>National Financial Intelligence Units (FIUs).</li>
          <li>Regulatory and law enforcement agencies.</li>
          <li>International bodies combating financial crime.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">7. Sanctions and Asset Freezing</h2>
        <p className="text-gray-600 mt-4 text-md">
          Organizations are required to comply with global **sanctions programs** to prevent terrorism financing by:
        </p>
        <ul className="text-gray-600 mt-2 text-md list-disc pl-6">
          <li>Blocking assets of individuals and organizations linked to terrorist activities.</li>
          <li>Prohibiting transactions with sanctioned entities.</li>
          <li>Cooperating with international financial and security authorities.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">8. Training and Awareness</h2>
        <p className="text-gray-600 mt-4 text-md">
          Employees must undergo **mandatory CFT training** to recognize potential terrorism financing risks and comply with reporting obligations. Awareness programs focus on:
        </p>
        <ul className="text-gray-600 mt-2 text-md list-disc pl-6">
          <li>Identifying high-risk customers and transactions.</li>
          <li>Understanding global sanctions lists and compliance measures.</li>
          <li>Recognizing red flags associated with terrorism financing schemes.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">9. Consequences of Non-Compliance</h2>
        <p className="text-gray-600 mt-4 text-md">
          Failure to comply with CFT regulations may result in:
        </p>
        <ul className="text-gray-600 mt-2 text-md list-disc pl-6">
          <li>Severe financial penalties and fines.</li>
          <li>Revocation of business licenses.</li>
          <li>Criminal prosecution and imprisonment.</li>
          <li>Reputational damage and loss of business trust.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">10. Contact Information</h2>
        <p className="text-gray-600 mt-4 text-md">
          For inquiries regarding this CFT Policy, please contact:
        </p>
        <p className="text-gray-600 text-md mt-2">
          <Link href="mailto:cft@rubilink.io" className="underline">support@rubilink.io</Link>
        </p>
      </div>
      <span className="text-gray-600 py-4 text-sm mt-[2rem] text-center">Prepared by RubiLabs - 2025</span>
    </section>
  );
};

export default CounteringTerrorismFinancing;

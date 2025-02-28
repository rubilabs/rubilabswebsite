"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const MoneyLaunderingControlAct = () => {
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
        <h1 className="text-4xl font-bold text-gray-900">Money Laundering and Control Act</h1>
        <p className="text-gray-700 mt-4 text-md">
          Last Updated: 28 February 2025
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl text-left">
        <h2 className="text-xl font-semibold text-gray-800">1. Introduction</h2>
        <p className="text-gray-600 mt-4 text-md">
          The Money Laundering and Control Act (MLCA) aims to prevent the misuse of financial institutions for illegal activities such as money laundering, terrorism financing, and financial fraud. This Act establishes the legal framework for financial institutions, businesses, and individuals to detect, report, and prevent illicit financial activities.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">2. Definition of Money Laundering</h2>
        <p className="text-gray-600 mt-4 text-md">
          Money laundering is the process of disguising the origins of illicitly obtained money, making it appear legitimate. It typically involves three stages:
        </p>
        <ul className="text-gray-600 mt-2 text-md list-disc pl-6">
          <li><strong>Placement:</strong> Introducing illicit funds into the financial system.</li>
          <li><strong>Layering:</strong> Concealing the source of funds through complex transactions.</li>
          <li><strong>Integration:</strong> Using laundered money for legal financial activities.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">3. Compliance Requirements</h2>
        <p className="text-gray-600 mt-4 text-md">
          All financial institutions and designated non-financial businesses are required to:
        </p>
        <ul className="text-gray-600 mt-2 text-md list-disc pl-6">
          <li>Implement robust Know Your Customer (KYC) and Customer Due Diligence (CDD) procedures.</li>
          <li>Monitor and report suspicious transactions to regulatory authorities.</li>
          <li>Maintain transaction records for a minimum period as mandated by law.</li>
          <li>Conduct regular Anti-Money Laundering (AML) training for employees.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">4. Reporting Suspicious Activities</h2>
        <p className="text-gray-600 mt-4 text-md">
          Any financial institution, business, or individual must report suspected money laundering activities to the relevant authorities. Reports should include:
        </p>
        <ul className="text-gray-600 mt-2 text-md list-disc pl-6">
          <li>Unusual transactions inconsistent with a customer’s profile.</li>
          <li>Large cash deposits or withdrawals without clear business justification.</li>
          <li>Multiple transactions designed to evade reporting thresholds.</li>
          <li>Transactions involving high-risk jurisdictions or sanctioned entities.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">5. Penalties for Non-Compliance</h2>
        <p className="text-gray-600 mt-4 text-md">
          Violation of the Money Laundering and Control Act may result in severe legal consequences, including:
        </p>
        <ul className="text-gray-600 mt-2 text-md list-disc pl-6">
          <li>Heavy fines imposed on financial institutions and individuals.</li>
          <li>Revocation of business licenses for non-compliant entities.</li>
          <li>Criminal prosecution, including imprisonment for individuals involved.</li>
          <li>Seizure of assets linked to illicit financial activities.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">6. International Cooperation</h2>
        <p className="text-gray-600 mt-4 text-md">
          The MLCA aligns with global AML efforts by collaborating with international regulatory bodies such as:
        </p>
        <ul className="text-gray-600 mt-2 text-md list-disc pl-6">
          <li>Financial Action Task Force (FATF)</li>
          <li>Interpol and national financial intelligence units</li>
          <li>Regional financial crime enforcement agencies</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">7. Data Protection and Privacy</h2>
        <p className="text-gray-600 mt-4 text-md">
          All data collected for AML purposes must be handled with strict confidentiality and in compliance with data protection laws. Financial institutions must ensure that customer data is securely stored and accessed only for AML-related purposes.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">8. Responsibilities of Businesses and Individuals</h2>
        <p className="text-gray-600 mt-4 text-md">
          Beyond financial institutions, other businesses and individuals are also responsible for preventing money laundering by:
        </p>
        <ul className="text-gray-600 mt-2 text-md list-disc pl-6">
          <li>Conducting due diligence on business partners and transactions.</li>
          <li>Refusing transactions that raise red flags for illicit activity.</li>
          <li>Educating employees about AML compliance and risk indicators.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">9. Changes to This Act</h2>
        <p className="text-gray-600 mt-4 text-md">
          We reserve the right to update this Act in response to evolving financial crime threats and regulatory requirements. Any amendments will be effective upon publication.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">10. Contact Information</h2>
        <p className="text-gray-600 mt-4 text-md">
          If you have any inquiries regarding this Act, please contact us at:
        </p>
        <p className="text-gray-600 text-md mt-2">
          <Link href="mailto:aml@rubilink.io" className="underline">support@rubilink.io</Link>
        </p>
      </div>
      <span className="text-gray-600 py-4 text-sm mt-[2rem] text-center">Prepared by RubiLabs - 2025</span>
    </section>
  );
};

export default MoneyLaunderingControlAct;

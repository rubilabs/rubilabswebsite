"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const FrameworkDesigningContent = () => {
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

      {/* Title Section */}
      <div className="max-w-5xl text-left mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Framework Designing: Consultation for Customer Onboarding and Profiling Scheme</h1>
        <p className="text-gray-700 mt-4 text-lg">
          This case study was conducted with a foreign institution, primarily dealing with insurance policies. This institution is driving digital
          transformation internally and externally, changing the way they communicate internally, and how they will onboard new policy holders. As such,
          the following dilemma was raised and addressed.
        </p>
      </div>

      {/* Content Section with Images */}
      <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Data Backlog</h2>
          <p className="text-gray-600 mt-4 text-lg">
           One of the dilemmas faced by financial institutions and other financial services providers are continuous customer data update.
           This is due to customer behavior, and some customers may ignore notification or instructions from the institution to update their
           residency or profile status. This results in data inconsistencies, between the current situation and the data recorded in the database
           of the institutions, causing a mismatch which leads to further barriers such as difficulties in risk monitoring, difficulties in determining
           the profiles of each individuals, and further digitalization barriers. To address this, we demonstrated our electronic know your customer (eKYC)
           solution to record and maintain a clean data for these individual customers. In addition to digital onboarding system, we compliment with a notification
           system that alerts the administrators for customer profile monitoring for easier monitoring, and once a message is sent from the administrative panel, an 
           automatically generated message will be delivered to the digital account of the customer.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-6">Onboarding of Business Entities</h2>
          <p className="text-gray-600 mt-4 text-lg">
           Current challenges may address the onboarding and understanding individual customers, but not the case for business clients. Business clients have a more complex
           method for verifying, and onboarding, which mainly requires the check and authentication of the company registration record. For this scheme, we performed an
           electronic know your business (eKYB) system, where our solution will extract the information provided in the uploaded PDF document of the corporate registration record.
           Depending on the availability of an open-source government database, an automatic pinpointing to these databases may be implemented and embedded within our system, but in
           the case where such open database does not exist, our system will extract the listed information from the provided corporate registration document, and autofills the information
           to the necessary onboarding forms provided by the financial institution.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-6">Streamlining Internal Communication</h2>
          <p className="text-gray-600 mt-4 text-lg">
           In this specific scheme, a cross-department communication is necessary to determine the eligibility and the rates for each specific onboarded clients. The primary concern
           revolves around manual communication which results in lengthy and repetitive process. Thus, our proposed solution includes a framework and a communication tool to be used internally
           to cross-reference and approve the conditions presented at a more automated level.
          </p>
        </div>
        
        {/* Image Section */}
        <div className="flex flex-col space-y-6">
          <Image src="/assets/framework-designing-1.jpg" alt="Data Backlog" width={500} height={300} className="rounded-lg shadow-lg" />
          <Image src="/assets/framework-designing-2.jpg" alt="Business Onboarding" width={500} height={300} className="rounded-lg shadow-lg" />
          <Image src="/assets/framework-designing-3.jpg" alt="Internal Communication" width={500} height={300} className="rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Additional Sections */}
      <div className="max-w-5xl mt-12 text-left">
        <h2 className="text-2xl font-semibold text-gray-800">Regulatory Compliance & Security</h2>
        <p className="text-gray-600 mt-4 text-lg">
          During the initation of this discussion, a specific regulatory indicators were not set in place. In response to this matter, our solution was to conduct 
          a centralized database for citizens, where all data related to residents and non-residents will be stored. Upon a successful implementation of centralized database,
          an easier attempt to automate data fetching process, updating customer profile, and customer monitoring can be achieved in a simpler manner. This reference was taken from 
          countries that have implemented centralized database system such as Japan and Indonesia.
        </p>
      </div>  
      <span className="text-gray-600 py-4 text-sm mt-[2rem]">Courtesy of RubiLabs and affiliates - 2025</span>
    </section>
  );
};

export default FrameworkDesigningContent;

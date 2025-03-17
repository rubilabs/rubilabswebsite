"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const MiddleEastContent = () => {
  const router = useRouter();

  return (
    <section className="w-full py-14 px-6 md:px-12 lg:px-24 bg-[#F3F3F3] select-none flex flex-col items-center">
      {/* Header Section */}
      <div className="w-full max-w-5xl mb-8 py-6 flex items-center">
        <button onClick={() => router.push("/about-us")} className="flex items-center text-gray-800 hover:text-gray-600 transition">
          <ArrowLeft size={24} className="mr-2" />
          <span className="text-lg font-medium">Back</span>
        </button>
      </div>

      {/* Title Section */}
      <div className="max-w-5xl text-left mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Financial Services Authorities Event: Digital Onboarding Solution</h1>
        <p className="text-gray-700 mt-4 text-lg">
          An event for a nation-scale project for the implementation of digital onboarding solution and electronic know your customer (eKYC).
          The RubiLabs team and NEO SPC collaboratively participated in the meeting to present the digital onboarding solution and the customer
          management system designed and developed by RubiLabs. Throughout this event, we also elaborated on potential schemes and frameworks on
          the implementation of algorithmic function to prevent data exposure, and cross-border data transfer.
        </p>
      </div>

      {/* Content Section with Images */}
      <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">The Digital Onboarding</h2>
          <p className="text-gray-600 mt-4 text-lg">
            The digital onboarding solution that was built based on the regulations set by the Japanese Financial Services Agency (FSAJ), was
            presented demonstrated real-time on a the podium. More than 100 attendees in the event was fascinated by the real-time document verification
            system, and the biometric real-time face matching system, as it raised enthusiasm from the crowd, being able to complete all of these verifications
            at an average of 10 seconds.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-6">The Business Opportunity</h2>
          <p className="text-gray-600 mt-4 text-lg">
            Our partner, Mr Qais Al-Lamki of NEO SPC, presented and elaborated the business potentials of utilizing RubiLabs solution in regards to digital onboarding
            and eKYC. Aside from flexible hosting, Mr Qais also elaborated on the benefits of partnering with our entity based in the Sultanate of Oman, being able to promote
            new landscape within the industry. In this regard, the digital onboarding and eKYC solution proposed was for the nationwide use in health insurance industry, proving
            the need for digitalization in this industry.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-6">The Networking Event</h2>
          <p className="text-gray-600 mt-4 text-lg">
            Post the event, a networking session was held, where the RubiLabs team and NEO SPC was able to make rounds in exchanging business cards, and answering to potential inquiries
            and questions raised regarding the proposed solution. Aside from the exchange of business cards and thoughts, the RubiLabs team and NEO SPC was also invited to various insurance
            companies to their office, given the chance to present and elaborate further regarding the solution proposed, for the specific use within their companies. Among these, renowned company
            such as Liva, to whom the demonstration was given, had a good impression on the technology, and was elaborating for the use of onboarding business entities through RubiLabs eKYB (electronic
            know your business).
          </p>
        </div>
        
        {/* Image Section */}
        <div className="flex flex-col space-y-6">
          <Image src="/assets/middle-east-1.jpeg" alt="Demonstration" width={500} height={300} className="rounded-lg shadow-lg" />
          <Image src="/assets/middle-east-2.jpeg" alt="Business Opportunity" width={500} height={300} className="rounded-lg shadow-lg" />
          <Image src="/assets/middle-east-3.jpeg" alt="Networking" width={500} height={300} className="rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Additional Sections */}
      <div className="max-w-5xl mt-12 text-left">
        <h2 className="text-2xl font-semibold text-gray-800">Framework & Security</h2>
        <p className="text-gray-600 mt-4 text-lg">
          At the moment, the guidelines and the regulatory compliance in the Sultanate of Oman is an ongoing process. To this point, issues pertaining to inaccuracy
          of data stored, incomplete personal data, and issues on onboarding infants to insurance were the biggest concerns. On top of data security and exposure, a
          guideline in regards to data format, and data storage was yet to be defined. Thus, the RubiLabs team proposed a singular data storage, with algorithms to prevent
          data leakage, and implementation of hashing and encryption to prevent data leakage being transparent and readable by potential attackers.

        </p>
      </div>  
      <div className="max-w-5xl mt-12 text-left">
        <h2 className="text-2xl font-semibold text-gray-800">The Future of Banking</h2>
        <p className="text-gray-600 mt-4 text-lg">
          The RubiLabs team and NEO SPC strongly believes in the potential of the Sultanate of Oman, in remarks to their effort in digitalizing their data storage and structure.
          Through the correct implementation of technology, and with the right guidelines, the Sultanate of Oman may set a new example and be a benchmark of how digital data should be
          stored, and retrieved across industries.
        </p>
      </div>
      <span className="text-gray-600 py-4 text-sm mt-[2rem]">Courtesy of RubiLabs and affiliates - 2025</span>
    </section>
  );
};

export default MiddleEastContent;

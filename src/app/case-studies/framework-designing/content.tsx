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
        <h1 className="text-4xl font-bold text-gray-900">Banking Innovation: Transforming Digital Onboarding</h1>
        <p className="text-gray-700 mt-4 text-lg">
          Our case study was conducted with few financial institutions, to point one of them, a global bank having a local branch in Tokyo. 
          Our mission in this case is to support the customer onboarding and customer verification process, covering all matters and aspects prior to transaction
          initiation. In regards to the regulatories established and maintained by the Financial Services Agency of Japan (FSAJ), in discussion with 
          the bank, the following was performed to address the challenges.
        </p>
      </div>

      {/* Content Section with Images */}
      <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Hosting On Premise</h2>
          <p className="text-gray-600 mt-4 text-lg">
            One of the key factors contributing to the succession of this project was to host our digital onboarding engine within the premises of
            the bank branch in Tokyo, connecting directly with their head office based overseas. We enable this
            through server mirroring, which replicates the specification that is required by our system to operate the digital onboarding capabilities.
            Through server mirroring, the server placed on the premises of the bank and its affiliates followed the standards of the necessities,
            and a successful hosting was delivered.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-6">Three Environment Penetration Testing</h2>
          <p className="text-gray-600 mt-4 text-lg">
            As data exchanges occured across the system was done through API, a dynamic penetration testing for each variables and in each environment was
            necessary to be conducted. In our case, a reputable third-party penetration tester and the CISO of the global bank was
            the main figures in conducting the penetration testing. These three environments includes development, UAT, and production environment, which was
            performed multiple times ensuring the encryption of data at rest and data on move using SHA256 was secure enough. As a result, SHA256 encryption and
            decryption method successfully passed the required standards of the bank both on their home region and operating region, and a successful penetration testing was completed.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-6">Cross Platform Data Exchange</h2>
          <p className="text-gray-600 mt-4 text-lg">
            Data exchanges between platform, namely portal and mobile application developed and hosted on the premises of the bank in their home region was
            conducted through the utilization of API. Another key indicator for successful completion was the data exchanges between these platforms, enabling a seamless,
            no redirection, and automated data exchanges to be performed. As such, our mobile SDK was integrated to their mobile application, and data exchanges was conducted
            seamlessly without the need to redirect the users outside of the application. The onboarded user data was then sent back to the administrator portal through a separate
            API, enabling an intranet connection-based exchanges for these communication of data.
          </p>
        </div>
        
        {/* Image Section */}
        <div className="flex flex-col space-y-6">
          <Image src="/assets/banking-innovation-1.jpg" alt="On-Premise Server" width={500} height={300} className="rounded-lg shadow-lg" />
          <Image src="/assets/banking-innovation-2.jpg" alt="AI Integration" width={500} height={300} className="rounded-lg shadow-lg" />
          <Image src="/assets/banking-innovation-3.jpg" alt="AI Integration" width={500} height={300} className="rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Additional Sections */}
      <div className="max-w-5xl mt-12 text-left">
        <h2 className="text-2xl font-semibold text-gray-800">Regulatory Compliance & Security</h2>
        <p className="text-gray-600 mt-4 text-lg">
          Prior to the initiation of the project, the requirement was to consult with the local authorities, to ensure that the system will abide by the regulations.
          As such, a direct communication and confirmation was taken to the Financial Services Agency of Japan (FSAJ), and a scheme for the data flow, user flow, and
          systematic diagram for the hosting was drafted alongside the bank's Tokyo branch.
        </p>
      </div>  
      <div className="max-w-5xl mt-12 text-left">
        <h2 className="text-2xl font-semibold text-gray-800">The Future of Banking</h2>
        <p className="text-gray-600 mt-4 text-lg">
          The Tokyo branch of the bank confirmed the necessity to implement digitalization, starting from digital onboarding by implementing a seamless electronic
          know your customer (eKYC) system. As specified by local authorities, eKYC plays a significant role in risk-monitoring, prior to transactions. Thus, a simplified,
          streamlined, and an automated system will benefit those operating in the back office of the bank, ultimately benefiting the customers. 
        </p>
      </div>
      <span className="text-gray-600 py-4 text-sm mt-[2rem]">Courtesy of RubiLabs and affiliates - 2025</span>
    </section>
  );
};

export default FrameworkDesigningContent;

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
           
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-6">Three Environment Penetration Testing</h2>
          <p className="text-gray-600 mt-4 text-lg">
           
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-6">Cross Platform Data Exchange</h2>
          <p className="text-gray-600 mt-4 text-lg">
           
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
          
        </p>
      </div>  
      <div className="max-w-5xl mt-12 text-left">
        <h2 className="text-2xl font-semibold text-gray-800">The Future of Banking</h2>
        <p className="text-gray-600 mt-4 text-lg">
         
        </p>
      </div>
      <span className="text-gray-600 py-4 text-sm mt-[2rem]">Courtesy of RubiLabs and affiliates - 2025</span>
    </section>
  );
};

export default FrameworkDesigningContent;

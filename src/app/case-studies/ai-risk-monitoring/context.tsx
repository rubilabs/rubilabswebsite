"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const AiRiskMonitoringContent = () => {
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
        <h1 className="text-4xl font-bold text-gray-900">Risk Monitoring: Utilization of Artificial Intelligence</h1>
        <p className="text-gray-700 mt-4 text-lg">
          Our case study was performed and demonstrated to a global bank having a one of their overseas branches in Tokyo. The goal of this case study is
          to demonstrate the use of artificial intelligence in assisting back office repetitive work, especially in regards to risk assessment and continuous
          customer monitoring. The following was raised and performed to address the current issues. 
        </p>
      </div>

      {/* Content Section with Images */}
      <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Data Entry Inconsistencies</h2>
          <p className="text-gray-600 mt-4 text-lg">
            Being a financial service system provider, we understand the pain points and the conducts of banking and the financial industry. Given that each institution
            will have their own policies and regulations in conducting their operations, a set guideline is usually placed to keep operations monitored. However, manual data
            entry for customers leads to inconsistencies in format of data entry, due to the cause that different administrator handling the data input may have different preferences
            in inserting the data. This leads to an unfiltered data, causing difficulties for further system digitalization and automation. To respond to this query, we proposed and demonstrated
            a serialized and uniform data entry through OCR and auto-filling since the onboarding process. This minimizes manual intervention, which significantly reduces the inconsistencies in 
            new data entry. 
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-6">Update and Continuous Monitoring</h2>
          <p className="text-gray-600 mt-4 text-lg">
            As part of risk-monitoring and risk assigning is to monitor the nature and content of transactions, a continuous monitoring with an up-to-date information pertaining
            to each customers are necessary. In regards to this, we proposed and demonstrated our behavioral-based artificial intelligence to detect abnormalities in transaction behavior 
            periodically, which triggers a flag in the administrative panel. Our system will match the behavior with the background information of the individual obtained during onboarding process,
            updated during their journey, and will trigger risk assessment and assigning of risk level automatically.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-6">Restrictions for High-Risk Clients</h2>
          <p className="text-gray-600 mt-4 text-lg">
            An agenda for this case study was to automatically restrict the use of client account upon triggered high-risk flag. Once the artificial intelligence detects an abnormality in 
            transaction behavior, the system will flag and will raise alert for the administrator to check and verify. This hybrid approach is taken to minimize false positive, but maintaining a highly
            automated, and easing the operations of the back office. Upon checking and verifying, the flagged customers will be imposed on restrictions in making transactions or even accessing their accounts,
            depending on the reason and risk-level triggered.
          </p>
        </div>
        
        {/* Image Section */}
        <div className="flex flex-col space-y-6">
          <Image src="/assets/risk-monitoring-1.jpg" alt="On-Premise Server" width={500} height={300} className="rounded-lg shadow-lg" />
          <Image src="/assets/risk-monitoring-2.jpg" alt="Penetration Testing" width={500} height={300} className="rounded-lg shadow-lg" />
          <Image src="/assets/risk-monitoring-3.jpg" alt="Data Exchange" width={500} height={300} className="rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Additional Sections */}
      <div className="max-w-5xl mt-12 text-left">
        <h2 className="text-2xl font-semibold text-gray-800">Regulatory Compliance & Security</h2>
        <p className="text-gray-600 mt-4 text-lg">
          Anti Money Laundry and Countering The Financing of Terrorism is a necessity and is emphasized in regulatories globally. One of the key to impose a successful attempt
          to minimize money laundry and other acts is through a strict implementation of a thorough background check and constant monitoring in customer behavior. As such, our system
          complies and reinforces the attempts that the regulators are imposing globally.
        </p>
      </div>  
      <div className="max-w-5xl mt-12 text-left">
        <h2 className="text-2xl font-semibold text-gray-800">The Future of Banking</h2>
        <p className="text-gray-600 mt-4 text-lg">
          The Tokyo branch of the bank confirmed the necessity to implement digitalization, starting from digital onboarding by implementing a seamless electronic
          know your customer (eKYC) system. As specified by local authorities, eKYC plays a significant role in risk-monitoring, prior to transactions. Thus, a simplified,
          streamlined, and an automated system will benefit those operating in the back office of the bank, ultimately benefiting the customers. In addition, a system that 
          streamlines the back office operation, easing the tasks on monitoring and flagging will be beneficial for the banks overall operations, and ultimately, serving
          the customers on thier needs with a faster line of services. 
        </p>
      </div>
      <span className="text-gray-600 py-4 text-sm mt-[2rem]">Courtesy of RubiLabs and affiliates - 2025</span>
    </section>
  );
};

export default AiRiskMonitoringContent;

"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const SoutheastAsiaContent = () => {
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
        <h1 className="text-4xl font-bold text-gray-900">PT. Bank Negara Indonesia Event: BNI Ventures Match Arc</h1>
        <p className="text-gray-700 mt-4 text-lg">
          A business matching event held and hosted by PT. Bank Negara Indonesia and its affiliates on the 28th of August, 2024.
          The purpose of the event was to match business divisions that PT. Bank Negara Indonesia has, with ventures and startups
          selected through the preliminary sessions. RubiLabs was nominated to participate the week prior, and our representative participated 
          in the event.
        </p>
      </div>

      {/* Content Section with Images */}
      <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">The Cross-Border Payment Messaging</h2>
          <p className="text-gray-600 mt-4 text-lg">
            RubiLabs proposed their solution in facilitating a faster, cheaper, and seamless cross-border payment system, in the scope of messaging to different
            banking institutions. The goal of the system is to exchange payment instructions and the details included in a transaction, where the recipient and the 
            sending bank will be facilitated with the function to cross-check and validate the authenticity of the beneficiary and the sender. Throughout the event,
            RubiLabs met with three different divisions from PT. Bank Negara Indonesia, and information exchange and opportunity for collaboration was explored.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-6">The Business Opportunity</h2>
          <p className="text-gray-600 mt-4 text-lg">
            In regards to facilitating PT. Bank Negara Indonesia, one of the largest banking institution in Indonesia, their scope is to expand their use-cases in the overseas market,
            primarily Japan. Being a Japanese company, RubiLabs shared their insights and the regulatory issues in the land of Sakura, accommodating with the requests mentioned by PT. Bank
            Negara Indonesia. Potential business collaboration was explored with wholesale and corporate banking division, with their head of divisions participating in the discussion. Overall, 
            RubiLabs made its presence in Indonesia, and it was a good opportunity for RubiLabs team to understand the landscape and the market in Indonesia.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-6">The Networking Event</h2>
          <p className="text-gray-600 mt-4 text-lg">
            Post the event, a networking session was held, where the RubiLabs team was able to meet with other ventures, and other divisions of PT. Bank Negara Indonesia. The memorable event was concluded
            by photographs, and ventures seeking collaborations amongst themselves, and with the bank. Until today, the discussion on potential partnerships and further collaborations are still discussed between
            RubiLabs and the other counterparts participating in the event.
          </p>
        </div>
        
        {/* Image Section */}
        <div className="flex flex-col space-y-6">
          <Image src="/assets/southeast-asia-1.png" alt="On-Premise Server" width={500} height={300} className="rounded-lg shadow-lg" />
          <Image src="/assets/southeast-asia-2.png" alt="Penetration Testing" width={500} height={300} className="rounded-lg shadow-lg" />
          <Image src="/assets/southeast-asia-3.JPG" alt="Data Exchange" width={500} height={300} className="rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Additional Sections */}
      <div className="max-w-5xl mt-12 text-left">
        <h2 className="text-2xl font-semibold text-gray-800">The Indonesian Landscape</h2>
        <p className="text-gray-600 mt-4 text-lg">
          The Indonesian banking sector is advanced, and mature when compared to Japan. In terms of technology related to payment infrastructure, and digital optimization, the Indonesian 
          banking infrastructure is more adept in these changes. However, with that said, issues regarding security was raised during the discussion. As the banking sector is one of the oldest
          and most complex industry, a high standard for security is on demand. With that in mind, the Indonesian market has higher appetite to potential cyber fraud, due to the digital literacy
          of the residents, and the weaker standards for security, raising concerns and data leakage as raised by the bank.
        </p>
      </div>  
      <div className="max-w-5xl mt-12 text-left">
        <h2 className="text-2xl font-semibold text-gray-800">The Future of Banking</h2>
        <p className="text-gray-600 mt-4 text-lg">
          The RubiLabs team strongly believes that an international collaboration between PT. Bank Negara Indonesia and RubiLabs will bring a synergy, and will result in a 
          new, innovative products to combat the issues raised during the discussions. This synergistic collaboration can bring PT. Bank Negara Indonesia facilities and banking
          products to be introduced in the land of Sakura, and vice-versa, where new products and standards can be introduced in their home country, Indonesia, for a better, and more
          secure services.
        </p>
      </div>
      <span className="text-gray-600 py-4 text-sm mt-[2rem]">Courtesy of RubiLabs and affiliates - 2025</span>
    </section>
  );
};

export default SoutheastAsiaContent;

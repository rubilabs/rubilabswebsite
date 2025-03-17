"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const RebrandingContent = () => {
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
        <h1 className="text-4xl font-bold text-gray-900">Rebranding of RubiLabs: The Beginning of New Era, Emphasizing Mission and Vision</h1>
        <p className="text-gray-700 mt-4 text-lg">
        RubiLabs is a FinTech company specializing in digital onboarding, risk control, and transaction monitoring solutions. In 2024, we redesigned our iconic emblem to reflect our core values of
        integrity, innovation, and commitment. Our signature color, deep-dark blue, represents the bold stance we take in upholding these principles. Prior to this, our logo was light blue, with a circular-triangle
        logo presented to the public. 
        </p>
      </div>

      {/* Content Section with Images */}
      <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">The Meaning Behind The New Branding</h2>
          <p className="text-gray-600 mt-4 text-lg">
            RubiLabs is demonstrating a new concept to the public, displaying integrity and professionalism. In our previous branding image,
            we emphasized on the freedom to express, and freedom to create, where these still holds true to this day, our main focus shifted.
            After being in the industry for more than two (2) years, we noticed the professionalism that needs to be conveyed within the banking
            and financial landscape, and thus we are conveying ours. Our rebranding signifies our commitment to serve the industry, and overseeing 
            our growth within the industry.
          </p>
        </div>
        
        {/* Image Section */}
        <div className="flex flex-col space-y-6">
          <Image src="/assets/about-1.jpeg" alt="RubiLabs New Logo" width={500} height={300} className="rounded-lg shadow-lg" />
        </div>
      </div>
      {/* Additional Sections */}
      <div className="max-w-5xl mt-12 text-left">
        <h2 className="text-2xl font-semibold text-gray-800">The Background</h2>
        <p className="text-gray-600 mt-4 text-lg">
        Founded by former risk assessment analysts with expertise in due diligence, RubiLabs is driven by technology to deliver solutions that align with the values and vision of our founders.
        At RubiLabs, we believe that digital transactions should be seamless, secure, and accessible to everyone, everywhere—without fear or hesitation. This is our mission, and we are committed to making it a reality.
        </p>
      </div>  
      <div className="max-w-5xl mt-12 text-left">
        <h2 className="text-2xl font-semibold text-gray-800">The New Motto and Commitment</h2>
        <p className="text-gray-600 mt-4 text-lg">
        Our motto, “Inspiring Changes,” embodies our dedication to innovation, pushing the boundaries to set new benchmarks in the financial industry and beyond.
        </p>
      </div>
      <span className="text-gray-600 py-4 text-sm mt-[2rem]">Courtesy of RubiLabs and affiliates - 2025</span>
    </section>
  );
};

export default RebrandingContent;

"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const TermsOfService = () => {
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
        <h1 className="text-4xl font-bold text-gray-900">Terms of Service</h1>
        <p className="text-gray-700 mt-4 text-md">
          Last Updated: 28 February 2025
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl text-left">
        <h2 className="text-xl font-semibold text-gray-800">1. Acceptance of Terms</h2>
        <p className="text-gray-600 mt-4 text-md">
          By using our Services, you confirm that you have read, understood, and agree to be bound by these Terms. This includes adhering to all applicable laws, regulations, and best practices when accessing and utilizing our Services. If you do not agree to these Terms or any future modifications, you must discontinue use immediately. Your continued use of the Services signifies your acceptance of any changes or updates made to these Terms.
        </p>
        <h2 className="text-xl font-semibold text-gray-800 mt-6">2. Changes to the Terms</h2>
        <p className="text-gray-600 mt-4 text-md">
          We reserve the right to update these Terms at any time at our sole discretion. Any modifications will be effective immediately upon posting on our website or through other official communication channels. We encourage you to review these Terms periodically to stay informed of any changes. Your continued use of the Services after such updates signifies your acknowledgment and agreement to the revised Terms. If you do not agree with the updated Terms, you should discontinue your use of the Services immediately.
        </p>
        <h2 className="text-xl font-semibold text-gray-800 mt-6">3. Use of Services</h2>
        <p className="text-gray-600 mt-4 text-md">
          •  You must be at least 18 years old to use our Services.<br/>
          •  You agree not to engage in unlawful activities while using our Services.<br/>
          •  We reserve the right to suspend or terminate your access if you violate these Terms.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">4. Intellectual Property</h2>
        <p className="text-gray-600 mt-4 text-md">
          All content, trademarks, logos, designs, text, graphics, software, and other intellectual property within our Services are the exclusive property of RubiLabs or its licensors. These materials are protected by copyright, trademark, and other intellectual property laws. You are granted a limited, non-exclusive, non-transferable license to access and use our Services for personal or business purposes in accordance with these Terms. Any unauthorized use, reproduction, modification, distribution, or exploitation of our intellectual property without prior written consent is strictly prohibited and may result in legal action.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">5. Privacy Policy</h2>
        <p className="text-gray-600 mt-4 text-md">
          Your privacy is important to us, and we are committed to safeguarding your personal information. Our Privacy Policy provides detailed insights into the types of data we collect, how we process and use it, and the security measures we implement to protect it from unauthorized access, loss, or misuse. We encourage you to review our Privacy Policy regularly to stay informed about how we handle your personal data and the rights you have concerning its use.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">6. Limitation of Liability</h2>
        <p className="text-gray-600 mt-4 text-md">
          RubiLabs shall not be liable for any direct, indirect, incidental, special, exemplary, or consequential damages, including but not limited to loss of profits, data, goodwill, or other intangible losses, arising from your use of our Services, inability to access our Services, unauthorized access to your data, or any other matter relating to our Services. This limitation of liability applies even if RubiLabs has been advised of the possibility of such damages and regardless of the legal theory under which any claim is made.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">7. Governing Law</h2>
        <p className="text-gray-600 mt-4 text-md">
          These Terms are governed by and construed in accordance with the laws of Japan.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">8. Contact Information</h2>
        <p className="text-gray-600 mt-4 text-md">
          If you have any questions regarding these Terms, please contact us at <Link href="mailto:support@rubilink.io" className="underline">support@rubilink.io</Link>.
        </p>
      </div>
      <span className="text-gray-600 py-4 text-sm mt-[2rem] text-center">Prepared by RubiLabs - 2025</span>
    </section>
  );
};

export default TermsOfService;

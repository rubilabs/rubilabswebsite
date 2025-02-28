import React from 'react';
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20 px-6 select-none">
      {/* Logo and Tagline Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center mb-12">
        <div className="flex items-center space-x-4">
          <p className="text-sm md:text-md font-roboto text-gray-300 text-center">
            Your Technology Partner
          </p>
          <img
            src="/logo/logo-light.svg" // Add your logo path
            alt="RubiLabs Logo"
            className="w-10"
          />
        </div>
      </div>

      {/* Links Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-open-sans mb-4">Digital Onboarding</h3>
          <ul className="space-y-2">
            <li className="font-open-sans text-md hover:cursor-pointer">Identity Verification</li>
            <li className="font-open-sans text-md hover:cursor-pointer">Face Authentication</li>
            <li className="font-open-sans text-md hover:cursor-pointer">Biometric Face Matching</li>
            <li className="font-open-sans text-md hover:cursor-pointer">Optical Recognitions</li>
            <li className="font-open-sans text-md hover:cursor-pointer">Data Entry</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-open-sans mb-4">Risk Control & Monitoring</h3>
          <ul className="space-y-2">
            <li className="font-open-sans text-md hover:cursor-pointer">Anti Money Laundering</li>
            <li className="font-open-sans text-md hover:cursor-pointer">Transaction Verification</li>
            <li className="font-open-sans text-md hover:cursor-pointer">Cross-Referencing</li>
            <li className="font-open-sans text-md hover:cursor-pointer">Data Monitoring</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-open-sans mb-4">About Us</h3>
          <ul className="space-y-2">
            <Link href="/about-us" className="font-open-sans text-md hover:cursor-pointer">Company</Link>
            <li className="font-open-sans text-md hover:cursor-pointer">Alliances</li>
            <li className="font-open-sans text-md hover:cursor-pointer">FAQs</li>
            <li className="font-open-sans text-md hover:cursor-pointer">Announcements</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-open-sans mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li className="font-open-sans text-md hover:cursor-pointer">Tel: 03-3527-3536</li>
            <li className="font-open-sans text-md hover:cursor-pointer">Email (for sales): sales@rubilink.io</li>
            <li className="font-open-sans text-md hover:cursor-pointer">Email (for other): support@rubilink.io</li>
            <li className="font-open-sans text-md hover:cursor-pointer">Complaints</li>
          </ul>
        </div>
      </div>

      {/* Disclaimer and Links */}
      <div className="mt-8 pt-8 text-sm max-w-7xl mx-auto">
        <p>Rubi Labs Inc is registered in the Japanese jurisdiction with a registration number of 301040170371.</p>
        <p>Rubi Labs do not engage in transaction processing or other financial processing as justified and outlined by the
        <br />regulations under the jurisdiction of Financial Services Agency of Japan (FSAJ).</p>
        <br />
        <p>Jsquare Nihonbashi 2F, Nihonbashi Koamicho 18-10, Chuo-ku, Tokyo 103-0016.</p>
        <div className="flex flex-wrap mt-4 space-x-4">
          <Link href="/terms-of-service" className="hover:underline">
            Terms of Service
          </Link>
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <a href="#" className="hover:underline">Terms for financial services</a>
          <a href="#" className="hover:underline">Data processing privacy</a>
          <a href="#" className="hover:underline">Data security policy</a>
        </div>
        <div className="flex flex-wrap mt-4 space-x-4">
          <a href="#" className="hover:underline">Customer rights and security guide</a>
          <a href="#" className="hover:underline">Money Laundering and Control Act</a>
          <a href="#" className="hover:underline">Countering The Financing of Terrorism</a>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="mt-3 pt-3 max-w-7xl mx-auto flex space-x-3">
        <div className="rounded-full w-10 h-10 bg-[#424B57] hover:cursor-pointer flex justify-center items-center">
          <FaLinkedin />
        </div>
        <div className="rounded-full w-10 h-10 bg-[#424B57] hover:cursor-pointer flex justify-center items-center">
          <FaXTwitter />
        </div>
        <div className="rounded-full w-10 h-10 bg-[#424B57] hover:cursor-pointer flex justify-center items-center">
          <FaInstagram />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

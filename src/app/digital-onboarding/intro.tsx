"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const images = [
  "/assets/digital-onboarding.jpeg",
  "/assets/digital-onboarding-2.jpeg",
  "/assets/digital-onboarding-3.jpeg"
];

const KycIntro = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 lg:px-24 bg-[#F3F3F3] select-none pt-24 md:pt-0">
      {/* Left Content - Text on Top for Mobile */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-lg text-gray-800 text-center md:text-left order-1 md:order-none"
      >
        <h1 className="text-3xl md:text-6xl font-semibold leading-tight">
          Trust Deserves The Best Security
        </h1>
        <p className="mt-6 text-base md:text-xl text-gray-600 max-w-lg">
          We appreciate your time. Get verified and onboarded real-time, and enjoy the perks of auto-filled information.
        </p>
        <div className="mt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 justify-center md:justify-start">
          <Link href="mailto:sales@rubilabs.com?subject=Quotation Request&body=Hello, I would like to inquire about...">
            <button className="border text-gray-800 border-gray-300 px-6 py-3 rounded-full text-lg font-normal hover:bg-gray-800 hover:text-white transition duration-200 ease-in-out">
              Get Quotation
            </button>
          </Link>
        </div>
      </motion.div>

      {/* Right Image Slider - Below Text on Mobile */}
      <div className="relative w-full md:w-1/2 flex items-center justify-center overflow-hidden order-2 md:order-none h-[400px] md:h-[550px]">
        <motion.img
          key={currentImage}
          src={images[currentImage]}
          alt="RubiLabs"
          className="absolute w-full h-full object-cover rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </section>
  );
};

export default KycIntro;

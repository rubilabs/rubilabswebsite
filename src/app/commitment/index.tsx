"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Security & Compliance",
    description: "We work closely with local regulators and authorities to design tailored financial solutions for each market. Our operations adhere to the highest ethical standards, ensuring that every transaction remains compliant and secure. By integrating robust AML (Anti-Money Laundering) and KYC (Know Your Customer) frameworks, we empower financial institutions to meet global regulatory requirements while protecting them from fraudulent activities and financial crimes.",
    image: "/assets/security-compliance.jpg"
  },
  {
    title: "Innovation & Technology",
    description: "Trust is the cornerstone of modern finance, and we harness cutting-edge technology to reinforce it. Our AI-driven background checks, sanctions screening, and predictive risk analysis offer institutions a proactive approach to security. By leveraging blockchain and machine learning, we ensure seamless transactions while safeguarding customers from potential threats, enabling institutions to operate with confidence in an increasingly digital world.",
    image: "/assets/innovation-technology.jpg"
  },
  {
    title: "Customer-Centric Approach",
    description: "Our mission is centered on delivering the best solutions for our clients by anticipating and addressing their evolving needs. Through real-time risk monitoring and advanced fraud detection, we enable financial institutions to identify potential threats before they escalate. By fostering a secure and compliant financial ecosystem, we empower businesses and individuals to thrive with confidence, ensuring long-term financial sustainability and trust.",
    image: "/assets/customer-centric.jpg"
  },
  {
    title: "Sustainability & Responsibility",
    description: "We are committed to driving sustainable finance through responsible innovation. Our solutions are designed to enhance financial inclusion, support ethical banking practices, and promote long-term economic stability. By integrating ESG (Environmental, Social, and Governance) principles into our technology, we help institutions make informed decisions that align with global sustainability goals while fostering trust and transparency in the financial sector.",
    image: "/assets/sustainable.jpg"
  }
];

const Commitment = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="w-full py-14 bg-[#F3F3F3] flex flex-col items-center select-none">
      {/* Section Title and Subtitle Aligned Left */}
      <div className="w-full px-6 md:px-12 lg:px-24 text-left mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Our Commitment</h2>
        <p className="text-gray-600 mt-2 text-lg max-w-2xl">
         We are dedicated to providing secure, innovative, and customer-centric financial solutions.
        </p>
      </div>
      
      {/* Centered Slider */}
      <div className="relative w-full max-w-5xl overflow-hidden rounded-lg shadow-lg">
        {/* Slide Content */}
        <motion.div
          key={currentSlide}
          className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
        >
          {/* Image */}
          <motion.img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-96 object-cover transition-transform duration-300"
          />

          {/* Overlay Layer Expanding */}
          <motion.div
            className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 p-6 transition-all duration-300 flex flex-col justify-end opacity-100 group-hover:opacity-100 h-[40%] group-hover:h-full"
          >
            <div className="flex flex-col justify-start h-full transition-all duration-300">
              <motion.h3 className="text-xl font-semibold text-white min-h-[50px] flex items-center">
                {slides[currentSlide].title}
              </motion.h3>
              <motion.p
                className="text-gray-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                {slides[currentSlide].description}
              </motion.p>
            </div>
          </motion.div>
        </motion.div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute text-black left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute text-black right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default Commitment;

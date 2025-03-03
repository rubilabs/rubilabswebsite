"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Continuous Customer Monitoring",
    description: "Once our system is successfully deployed and seamlessly integrated into your existing infrastructure, our advanced risk control and monitoring solution will function as a comprehensive surveillance mechanism. It will continuously track, analyze, and assess customer information, behavioral patterns, and transactional activities in real-time. By leveraging artificial intelligence and machine learning, our system can identify anomalies, detect potential risks, and flag suspicious activities, ensuring compliance with regulatory standards while safeguarding your organization from fraudulent activities and financial threats.",
    image: "/assets/usage-1.jpg"
  },
  {
    title: "Transaction Limitation and Restrictions",
    description: "When a customer or transaction is deemed high-risk by the system, certain restrictions may be imposed, including transaction limitations and restricted access to specific features. The extent of these limitations will be determined by the institution's internal policies, regulatory obligations, and risk tolerance framework. A predefined set of risk thresholds will be established to assess and categorize potential threats, ensuring proactive risk mitigation. These thresholds are fully customizable and can be adjusted dynamically to align with the institution’s evolving security protocols, compliance requirements, and operational needs.",
    image: "/assets/usage-2.jpg"
  },
  {
    title: "Understanding The Customer",
    description: "A comprehensive understanding of the customer is fundamental to ensuring a secure and seamless financial experience. By analyzing behavioral patterns, transaction history, and risk indicators, institutions can build a holistic customer profile that enhances both security and service personalization. Our system continuously evaluates customer data, detecting anomalies and assessing risk levels in real-time. This approach enables financial institutions to proactively mitigate potential threats while improving user experience, ensuring compliance with regulatory standards, and fostering long-term trust between the institution and its customers.",
    image: "/assets/usage-3.jpg"
  },
  {
    title: "Reducing Data Backlogs",
    description: "Managing large volumes of customer data can often lead to inefficiencies, delays, and compliance risks if not handled effectively. Our system automates data processing, streamlining the classification, verification, and retrieval of information in real-time. By leveraging AI-powered data structuring and dynamic storage solutions, institutions can significantly reduce manual workloads, eliminate redundancies, and optimize operational efficiency. This proactive approach not only enhances regulatory compliance and audit readiness but also ensures that institutions can swiftly access critical data, reducing bottlenecks and enabling faster decision-making in high-risk scenarios.",
    image: "/assets/usage-4.jpg"
  }
];

const UseCase = () => {
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
        <h2 className="text-3xl font-bold text-gray-800">The Usage</h2>
        <p className="text-gray-600 mt-2 text-lg max-w-2xl">
         Get to know more about risk control and monitoring solution, and how the industry is utilizing it.
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

export default UseCase;

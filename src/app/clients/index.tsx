"use client"

import React from "react";
import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "Banking Innovation",
    description: "How our digital onboarding solution simplifies and accelerates the account opening process, reducing paperwork and ensuring a seamless customer experience. Our approach leverages automation and AI to streamline identity verification and compliance checks, making onboarding faster and more secure than ever before.",
    image: "/assets/banking-innovation.jpg"
  },
  {
    title: "Framework Designing",
    description: "How our real-time verifications and enhanced approach on customer profiling for onboarding helps regulators to structure a framework and set a benchmark to streamline a more concise, uniform, and trustworthy datasets for monitoring purposes. Our solutions enable better regulatory compliance and risk assessment, ensuring that businesses can operate within defined policies while minimizing fraudulent.",
    image: "/assets/framework-designing.jpg"
  },
  {
    title: "AI & Risk Monitoring",
    description: "How our behavioral artificial intelligence conducts risk-assessments based on background profile and activities. This approach increases efficiency in both continuous customer management and transaction monitoring, enhancing security and minimizing risks through behavioral judgement. Our AI-driven risk monitoring system adapts to evolving patterns, proactively identifying suspicious transactions and providing actionable insights.",
    image: "/assets/risk-monitoring.jpg"
  }
];

const CaseStudies = () => {
  return (
    <section className="w-full py-14 relative bg-[#F3F3F3] flex flex-col items-center z-50 select-none -mt-[5rem]">
      <div className="w-full px-6 md:px-12 lg:px-24 text-left mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Our Case Studies</h2>
        <p className="text-gray-600 mt-2 text-lg max-w-2xl">
         Explore on our past cases and how we addressed the problems given through our solutions.
        </p>
      </div>
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8 px-6 relative">
        {caseStudies.map((study, index) => (
          <motion.div 
            key={index} 
            className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer h-80"
            whileHover={{ scale: 1.05 }}
          >
            {/* Image */}
            <motion.img 
              src={study.image} 
              alt={study.title} 
              className="w-full h-full object-cover transition-transform duration-300"
            />
            
            {/* Overlay Layer Expanding */}
            <motion.div 
              className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 p-4 transition-all duration-300 flex flex-col justify-end"
              initial={{ height: "40%" }}
              whileHover={{ height: "100%" }}
              style={{ minHeight: "40%" }}
            >
              <div className="flex flex-col justify-start h-full transition-all duration-300">
                <motion.p className="text-lg font-semibold text-white min-h-[50px] flex items-center">{study.title}</motion.p>
                <motion.p 
                  className="text-gray-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {study.description}
                </motion.p>
                <motion.button 
                  className="mt-4 px-4 py-2 border border-white text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white hover:text-black"
                >
                  Discover More
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;

"use client";

import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Residency Status Tracking",
    description: "Our system keeps on track with the clients information by giving alerts to outdated information to be renewed on the defined timeframe. Minimize backlog data with our automated real-time tracker.",
    image: "/assets/risk-monitoring-feature-1.jpg"
  },
  {
    title: "Behavioral Pattern Reading",
    description: "An embedded artificial intelligence defined to read the trends and behavioral patterns of each customer through their transaction history and background information. Our system will raise flag and notify administrator when suspicious activities are detected.",
    image: "/assets/risk-monitoring-feature-2.jpg"
  },
  {
    title: "Automated Alert and Blocking",
    description: "Combination of residency status tracking and behavioral pattern reading, customers with outdated personal information or is defined to be at-risk will be automatically prevented from conducting further transactions.",
    image: "/assets/risk-monitoring-feature-3.jpg"
  }
];

const RiskMonitoringFeatures = () => {
  return (
    <section className="w-full py-14 relative bg-[#F3F3F3] flex flex-col items-center z-50 select-none -mt-[5rem]">
      <div className="w-full px-6 md:px-12 lg:px-24 text-left mb-8">
        <h2 className="text-3xl font-bold text-gray-800">The Features</h2>
        <p className="text-gray-600 mt-2 text-lg max-w-2xl">
         Get to know more about the highlight features of our risk control and monitoring solution to secure your customer transaction.
        </p>
      </div>
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8 px-6 relative">
        {features.map((study, index) => (
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
              className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 p-4 transition-all duration-300 flex flex-col justify-end opacity-100 group-hover:opacity-100 h-[40%] group-hover:h-full"
            >
              <div className="flex flex-col justify-start h-full transition-all duration-300">
                <motion.p className="text-lg font-semibold text-white min-h-[50px] flex items-center">{study.title}</motion.p>
                <motion.p 
                  className="text-gray-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {study.description}
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RiskMonitoringFeatures;

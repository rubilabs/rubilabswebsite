"use client";

import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Decent Work and Economic Growth",
    description: "Our risk and monitoring solutions helps financial institutions onboard businesses and individuals securely, preventing fraud and ensuring a safer economic environment, leading to higher traffic for cross-border payments due to easier access.",
    image: "/assets/sdg-8.jpg"
  },
  {
    title: "Industry, Innovation, and Infrastructure",
    description: "Our system applies AI and digital security measures, strengthening financial infrastructure and reducing compliance costs for financial institutions.",
    image: "/assets/sdg-9.jpg"
  },
  {
    title: "Reduced Inequalities",
    description: "Our solutions ensures fair access to financial services by enabling risk-based onboarding instead of blanket exclusions, preventing financial discrimination.",
    image: "/assets/sdg-10.jpg"
  },
  {
    title: "Peace, Justice, and Strong Institutions",
    description: "We plays a critical role in anti-money laundering (AML) and counter-terrorism financing (CTF) efforts, helping financial institutions assess risks more effectively. By improving security and compliance, it strengthens institutions and prevents illicit financial activities.",
    image: "/assets/sdg-16.jpg"
  },
  {
    title: "Partnerships for The Goals",
    description: "We as an entity enhances cooperation between financial institutions, regulators, and governments in creating a more secure financial ecosystem.",
    image: "/assets/sdg-17.jpg"
  }
];

const Values= () => {
  return (
    <section className="w-full py-14 relative bg-[#F3F3F3] flex flex-col items-center z-50 select-none -mt-[5rem]">
      <div className="w-full px-6 md:px-12 lg:px-24 text-left mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Our Values</h2>
        <p className="text-gray-600 mt-2 text-lg max-w-2xl">
         How our values contributes to the social through the following SDGs.
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

export default Values;

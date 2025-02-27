"use client"

import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Real-Time Document Verification",
    description: "Our system will take supplied documents and verify its validity instantly. Only upon successful verification will the system allow users to move forward with the onboarding process.",
    image: "/assets/feature-1.jpg"
  },
  {
    title: "Face Matching Indicator",
    description: "A real-time biometric face matching will be processed by comparing facial structures detected in the supplied document and picture taken in real-time photoshoot. A similarity level indicator will be returned for judgement purposes.",
    image: "/assets/feature-2.jpg"
  },
  {
    title: "OCR & Dynamic Auto-Filling",
    description: "Information detected from the supplied document will be extracted as it is, and will be filled to the forms accordingly. Depending on the structure of the form, the autofilling process may adjust to each specific needs.",
    image: "/assets/ocr-autofill.jpg"
  }
];

const Features = () => {
  return (
    <section className="w-full py-14 relative bg-[#F3F3F3] flex flex-col items-center z-50 select-none -mt-[5rem]">
      <div className="w-full px-6 md:px-12 lg:px-24 text-left mb-8">
        <h2 className="text-3xl font-bold text-gray-800">The Features</h2>
        <p className="text-gray-600 mt-2 text-lg max-w-2xl">
         Get to know more about the highlight features of our digital onboarding solution to simplify your customer onboarding process.
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
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;

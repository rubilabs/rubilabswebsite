"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Define The Landscape",
    description: "We always begin our journey by researching and comprehend our clients. Understanding the needs and requirements and researching on the key factors are an important aspect for a successful delivery. A thorough and well-defined landscape pertaining to the requirements and assistance sought will enhance the smoothness and overall quality of the project.",
    image: "/assets/integration-process-1.jpg"
  },
  {
    title: "Request and Receive Documentation",
    description: "Our technical documentation are defined and has been approved by third-parties integrator, and principles. Upon mutual understanding on the project landscape, a well-defined technical document elaborating on the integration method will be shared across accordingly. Depending on the tweaks and adjustments required, we may provide different documentations.",
    image: "/assets/integration-process-2.jpg"
  },
  {
    title: "Security and Penetration Test",
    description: "We highly value trust and security, especially in this industry where trust is the pinnacle of business. We treat our clients project as our own, and we ensure that the integrated system will be encrypted thoroughly, enhancing security and taking advanced measures to prevent data leakage and potential cyber attacks. In this scope, we typically recommend a third-party penetration tester to conduct the overall evaluation of the system to maintain transparency.",
    image: "/assets/integration-process-3.jpg"
  },
  {
    title: "Deploy Your Application",
    description: "Upon successful integration and penetration testing, the system is ready for roll out at any moment. Upon successful deployment of your application or system, we will follow up with our after-care services, conducting maintenance to ensure that the system are healthy and is running as expected.",
    image: "/assets/integration-process-4.jpg"
  }
];

const Process = () => {
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
        <h2 className="text-3xl font-bold text-gray-800">Integration Process</h2>
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

export default Process;

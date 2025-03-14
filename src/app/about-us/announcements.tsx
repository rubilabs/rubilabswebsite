"use client";

import React from "react";
import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "Middle East Digital Onboarding",
    slug: "middle-east",
    description: "How our participation in the latest event held by the Financial Services Authorities of Oman contributes to the landscape.",
    image: "/assets/announcement-1.jpg"
  },
  {
    title: "Business Matching in Southeast Asia",
    slug: "southeast-asia",
    description: "How our participation in driving synergies with global bank headquartered in Jakarta, Indonesia contributes to the landscape.",
    image: "/assets/announcement-2.jpg"
  },
  {
    title: "Rebranding Brand Image",
    slug: "brand-image",
    description: "How we change the way we bring ourselves to the podium, and how we announce our vision and mission to the global stage.",
    image: "/assets/about-1.jpeg"
  }
];

const Announcements = () => {
  return (
    <section className="w-full py-14 relative bg-[#F3F3F3] flex flex-col items-center z-50 select-none -mt-[3rem]">
      <div className="w-full px-6 md:px-12 lg:px-24 text-left mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Recent Announcements</h2>
        <p className="text-gray-600 mt-2 text-lg max-w-2xl">
          Follow our updates and track our recent participations in events, or any news updates regarding our products.
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
              className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 p-4 transition-all duration-300 flex flex-col justify-end opacity-100 group-hover:opacity-100 h-[40%] group-hover:h-full"
            >
              <div className="flex flex-col justify-start h-full transition-all duration-300">
                <motion.p className="text-lg font-semibold text-white min-h-[50px] flex items-center">{study.title}</motion.p>
                <motion.p 
                  className="text-gray-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {study.description}
                </motion.p>
                {/* <Link href={`/case-studies/${study.slug}`}>
                  <motion.button 
                    className="mt-4 px-4 py-2 border border-white text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white hover:text-black"
                  >
                    Read More
                  </motion.button>
                </Link> */}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Announcements;

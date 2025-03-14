"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const members = [
  {
    title: "Qais Al-Lamki",
    description: "Qais Al Lamki (“Qais”) currently serves as the partner of Meridian Financials Oman, the board member of Meridian Financials, and is the Founder and Executive Board Member of National Eastern Oasis, SPC. Over the past 17 years, Qais has been honing his expertise in the banking and financial sector, as well as building government relations.",
    image: "/assets/board-1.jpeg",
    slug: "in/qais-al-lamki-6338811a",
  },
];

const Board = () => {
  return (
    <section className="w-full py-14 relative bg-[#F3F3F3] flex flex-col items-center z-50 select-none -mt-[3rem]">
      <div className="w-full px-6 md:px-12 lg:px-24 text-left mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Our Governance</h2>
        <p className="text-gray-600 mt-2 text-lg max-w-2xl">
         Learn more on the members governing and overseeing our business conducts.
        </p>
      </div>
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8 px-6 relative">
        {members.map((study, index) => (
          <motion.div 
            key={index} 
            className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer h-80"
            whileHover={{ scale: 1 }}
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
                <Link href={`https://linkedin.com/${study.slug}`}>
                  <motion.button 
                    className="mt-4 px-4 py-2 border border-white text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white hover:text-black"
                  >
                    Discover More
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Board;

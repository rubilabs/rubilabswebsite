"use client";

import React from "react";
import { motion } from "framer-motion";

const products = [
  {
    title: "On-Premise Hosting",
    slug: "/digital-onboarding",
    description: "Deploy and host our system at your local premises to fit in your security standards.",
    image: "/assets/on-premise.jpg"
  },
  {
    title: "Cloud-Based Hosting",
    slug: "/risk",
    description: "Fetch data to be stored in your premises by connecting through our API. Our system will secure both data on move and data on rest.",
    image: "/assets/cloud.jpg"
  }
];

const Edge = () => {
  return (
    <section className="w-full py-14 bg-[#F3F3F3] flex flex-col items-center select-none">
      {/* Section Title */}
      <div className="w-full px-6 md:px-12 lg:px-24 text-left mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Our Edge</h2>
        <p className="text-gray-600 mt-2 text-lg max-w-2xl">
          Discover how our solution can adapt to your needs and environment. Depending on the necessity, we can accommodate swiftly.
        </p>
      </div>

      {/* Product Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl px-6">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer w-[500px] h-[500px] mx-auto"
            whileHover={{ scale: 1.05 }}
          >
            {/* Image */}
            <motion.img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover transition-transform duration-300"
            />

            {/* Overlay Layer Expanding */}
            <motion.div
              className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 p-6 transition-all duration-300 flex flex-col justify-end opacity-0 group-hover:opacity-100 group-hover:h-full"
            >
              <h3 className="text-xl font-semibold text-white">{product.title}</h3>
              <p className="text-gray-300 text-sm mt-2">{product.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Edge;
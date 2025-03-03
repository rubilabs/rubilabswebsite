"use client";

import React from "react";
import { motion } from "framer-motion";

const products = [
  {
    title: "Banking Industry",
    description: "Traditional and modern banks are required to regularly check, update, and maintain their customers data. Upon general purposes to understand the risk-level for each customer, a thorough and up-to-date information is mandatory.",
    image: "/assets/compatibility-1.jpg"
  },
  {
    title: "Insurance Companies",
    description: "Premium charges are calculated depending on the risks for each customer. Having the latest information and an understanding of customer behavior reduces the risk of potential fraudulence of insurance claims.",
    image: "/assets/compatibility-2.jpg"
  }
];

const Compatibility = () => {
  return (
    <section className="w-full py-14 bg-[#F3F3F3] flex flex-col items-center select-none overflow-hidden">
      {/* Section Title */}
      <div className="w-full px-6 md:px-12 lg:px-24 text-left mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Common Area of Practice</h2>
        <p className="text-gray-600 mt-2 text-lg max-w-2xl">
          Discover how our solution supports different industry according to their needs. We optimize your judgement capabilities.
        </p>
      </div>

      {/* Product Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl px-6 w-full overflow-hidden">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer w-full max-w-[400px] md:max-w-[500px] h-[500px] mx-auto"
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

export default Compatibility;

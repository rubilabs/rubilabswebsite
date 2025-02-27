"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const products = [
  {
    title: "Digital Onboarding",
    slug: "/digital-onboarding",
    description: "Our digital onboarding solution in SDK or web-based plugins, for a seamless integration with your system. Our digital onboarding solution requires little to no code for integration and deployment, making it user-friendly and easily accessible by any entities who wish to adopt.",
    image: "/assets/digital-onboarding.jpeg"
  },
  {
    title: "Risk Control & Monitoring",
    slug: "/risk",
    description: "A powerful AI-driven tool that enhances digital onboarding, fraud detection, and customer verification with unparalleled accuracy and security.",
    image: "/assets/risk-monitoring-landing.jpg"
  }
];

const Products = () => {
  return (
    <section className="w-full py-14 bg-[#F3F3F3] flex flex-col items-center select-none overflow-hidden">
      {/* Section Title */}
      <div className="w-full px-6 md:px-12 lg:px-24 text-left mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Our Solutions</h2>
        <p className="text-gray-600 mt-2 text-lg max-w-2xl">
          Discover more about the solutions that we are offering to enhance the security and efficiency of your back office operations.
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
              <Link href={product.slug}>
                <motion.button
                  className="mt-4 px-4 py-2 border border-white text-white rounded-full transition-opacity duration-300 hover:bg-white hover:text-black"
                >
                  Discover More
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Products;

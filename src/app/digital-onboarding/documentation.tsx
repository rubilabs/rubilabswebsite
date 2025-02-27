"use client"

import React from "react";
import Link from "next/link";

const Documentation = () => {
  return (
    <section className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center select-none" style={{ backgroundImage: "url('/assets/contact.jpg')" }}>
      {/* Overlay Layer */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 md:px-12">
        <h2 className="text-4xl font-bold">Interested To Learn More?</h2>
        <p className="text-lg mt-4 max-w-2xl mx-auto">
          Reach out to us for inquiries, partnerships, or support. We are here to help and collaborate.
        </p>
        <Link href="mailto:sales@rubilabs.com?subject=Information Request&body=Hello, I would like to inquire about...">
        <button className="border text-white border-gray-300 px-6 py-3 mt-[2rem] rounded-full text-lg font-normal hover:bg-black hover:text-white transition duration-200 ease-in-out">
          Get Quotation
        </button>
        </Link>
      </div>
    </section>
  );
};

export default Documentation;

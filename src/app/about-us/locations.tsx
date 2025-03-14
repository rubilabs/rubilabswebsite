"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const locations = [
  {
    country: "Japan",
    company: "Rubi Labs Inc",
    address: "Jsquare Nihonbashi 2F, Nihonbashi Koamicho 18-10, Chuo-ku, Tokyo 103-0016, Japan",
    contact: "+81(3)-3527-3536",
    image: "/assets/location-1.jpg",
    description: "A FinTech company, and the parent company of overseas subsidiaries. Rubi Labs Inc specializes in delivering digital onboarding and solutions related to risk control and monitoring tailored for financial institutions and banks.",
  },
  {
    country: "Sultanate of Oman",
    company: "Meridian Financials LLC",
    address: "Muscat Hills, Business Tower 1, 4th Floor 406, PO 921, PC 133 Al Khuwair, Sultanate of Oman",
    contact: "",
    image: "/assets/location-2.jpg",
    description: "Meridian Financials LLC is a subsidiary of Rubi Labs Inc, Japan, joint with National Eastern Oasis PLC. A strategic-joint company for the purpose of delivering Rubi Labs technologies for the use in the Oman domestic market, and its surrounding Gulf region.",
  },
];

const Locations = () => {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  return (
    <section className="w-full py-14 relative bg-[#F3F3F3] flex flex-col items-center z-50 select-none -mt-[1rem]">
      <div className="w-full px-6 md:px-12 lg:px-24 text-left mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Our Locations</h2>
        <p className="text-gray-600 mt-2 text-lg max-w-2xl">
          Explore our presence and our overseas offices.
        </p>
      </div>

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8 px-6 relative">
        {/* Locations List */}
        <div className="flex flex-col space-y-4">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                selectedLocation.country === location.country ? "bg-gray-800 text-white" : "border-gray-100 text-gray-800"
              }`}
              onClick={() => setSelectedLocation(location)}
              whileHover={{ scale: 1 }}
            >
              <h3 className="text-lg font-semibold">{location.country}</h3>
              <p className="text-md font-semibold mt-1">{location.company}</p>
              <p className="text-sm mt-1">{location.address}</p>
              <p className="text-sm mt-1">{location.contact}</p>
            </motion.div>
          ))}
        </div>

        {/* Image Display with Moving Overlay Text */}
        <motion.div
          className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer h-80 w-full col-span-2"
          whileHover={{ scale: 1 }}
        >
          {/* Image */}
          <motion.img
            key={selectedLocation.image}
            src={selectedLocation.image}
            alt={selectedLocation.country}
            className="w-full h-full object-cover transition-transform duration-300"
          />

          {/* Moving Overlay */}
          <motion.div
            className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 p-4 transition-all duration-300 flex flex-col justify-end opacity-100 group-hover:opacity-100 h-[40%] group-hover:h-full"
          >
            <motion.div
              className="flex flex-col justify-start h-full"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              whileHover={{ y: -10 }}
            >
              <motion.p className="text-lg font-semibold text-white min-h-[50px] flex items-center">
                {selectedLocation.company}
              </motion.p>
              {/* Ensure opacity transition for description */}
              <motion.p
                className="text-white text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                {selectedLocation.description}
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Locations;

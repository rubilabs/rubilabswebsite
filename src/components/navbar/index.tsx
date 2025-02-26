"use client"

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#F3F3F3] bg-opacity-80 backdrop-blur-lg text-white px-6 py-4 z-50 select-none">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold cursor-pointer"
          >
            <img src="/logo/logo-dark.svg" alt="RubiLabs" className="h-10" />
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-md text-gray-800">
          <Link href="/digital-onboarding" className="hover:text-gray-300 ease-in-out">Digital Onboarding</Link>
          <Link href="/omnilens" className="hover:text-gray-300 ease-in-out">Discover OmniLens</Link>
          <Link href="/about-us" className="hover:text-gray-300 ease-in-out">Discover RubiLabs</Link>
        </div>

        {/* Language Selector & CTA Button */}
        <div className="hidden md:flex items-center space-x-6">
          <select className="bg-transparent text-gray-800 border-none cursor-pointer">
            <option className="text-black">English</option>
            <option className="text-black">日本語</option>
          </select>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden flex flex-col space-y-4 mt-4 bg-black p-4 rounded-lg"
        >
          <Link href="#network" className="hover:text-gray-300">Payment Network</Link>
          <Link href="#card" className="hover:text-gray-300">Card</Link>
          <Link href="#discover" className="hover:text-gray-300">Discover NAKA</Link>
          <Link href="#news" className="hover:text-gray-300">News</Link>
          <Link href="#acquirers" className="hover:text-gray-300">2025 Acquirers Program</Link>
          <select className="w-full bg-black text-gray-800 border-none mt-2">
            <option className="text-black">English</option>
            <option className="text-black">日本語</option>
          </select>
          <button className="bg-blue-600 px-6 py-2 rounded-full hover:bg-blue-500 transition">Launch App</button>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
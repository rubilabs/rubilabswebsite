"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What services does RubiLabs offer?",
    answer: "RubiLabs specializes in financial technology, AI-driven risk monitoring, digital onboarding, and compliance solutions tailored for financial institutions."
  },
  {
    question: "How does digital onboarding work?",
    answer: "Our digital onboarding solution enables seamless user verification through document scanning, biometric authentication, and AI-driven risk assessment to ensure compliance and security."
  },
  {
    question: "Is RubiLabs' solution customizable?",
    answer: "Yes, our solutions are highly customizable to meet the unique needs of financial institutions and businesses while maintaining compliance with local and global regulations."
  },
  {
    question: "How does RubiLabs ensure security?",
    answer: "We use state-of-the-art encryption, AI-driven fraud detection, and continuous risk monitoring to ensure maximum security and compliance for our clients."
  },
  {
    question: "How to start using RubiLabs service?",
    answer: "There is no commitment necessary. However, prior to in-depth initiation, we typically require few pieces of information such as needs and requirements to understand the landscape better."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-14 bg-[#F3F3F3] flex flex-col items-center select-none">
      <div className="w-full px-6 md:px-12 lg:px-24 text-left mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Frequently Asked Questions</h2>
        <p className="text-gray-600 mt-2 text-lg max-w-2xl">
          Find answers to common questions about our solutions and services.
        </p>
      </div>
      
      {/* FAQ List */}
      <div className="w-full max-w-5xl flex flex-col gap-4 px-6">
        {faqs.map((faq, index) => (
          <div key={index} className="p-4 cursor-pointer border-b" onClick={() => toggleFAQ(index)}>
            <div className="flex justify-between items-center">
              <p className="text-gray-800 font-semibold">{faq.question}</p>
              {openIndex === index ? <ChevronUp size={24} className="text-gray-600" /> : <ChevronDown size={24} className="text-gray-600" />}
            </div>
            {openIndex === index && (
              <motion.p 
                className="text-gray-600 mt-2"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
              >
                {faq.answer}
              </motion.p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;

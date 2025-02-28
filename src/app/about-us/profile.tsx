"use client";

import React from "react";

const profileData = [
  { category: "Company Name", value: "Rubi Labs Inc" },
  { category: "Founded", value: "18 October 2022" },
  { category: "Headquarters", value: "Jsquare Nihonbashi 2F, Nihonbashi Koamicho 18-10, Chuo-ku, Tokyo 103-0016, Japan" },
  { category: "Business Category", value: "FinTech" },
  { category: "Representative Director", value: "Juan M. Tjahjono" },
  { category: "Other Director(s)", value: "James W. Winoto" },
];

const Profile = () => {
  return (
    <section className="w-full py-14 bg-[#F3F3F3] flex flex-col items-center select-none">
      {/* Section Title and Subtitle Aligned Left */}
      <div className="w-full px-6 md:px-12 lg:px-24 text-left mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Our Company</h2>
        <p className="text-gray-600 mt-2 text-lg max-w-2xl">
          Our reach is global, we do not limit ourselves only to our jurisdiction.
        </p>
      </div>
      
      {/* Profile Table Layout (1 Column) */}
      <div className="w-full max-w-5xl flex flex-col gap-4 px-6">
        {profileData.map((item, index) => (
          <div key={index} className="flex flex-col bg-transparent p-4 border-b border-gray-300 last:border-b-0">
            <p className="text-gray-800 font-semibold">{item.category}</p>
            <p className="text-gray-600 mt-1">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Profile;

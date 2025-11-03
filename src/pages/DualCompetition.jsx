import React from "react";
import { ArrowDown, ArrowRight } from "lucide-react"; // npm install lucide-react

const DualCompetition = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white relative py-10 overflow-hidden">
      {/* ==== Background Shapes ==== */}
      <div className="absolute top-8 left-8 w-16 h-16 bg-purple-200 rotate-12 rounded-lg"></div>
      <div className="absolute bottom-10 right-8 w-16 h-16 bg-purple-200 -rotate-12 rounded-lg"></div>
      <div className="absolute bottom-8 left-20 w-12 h-12 bg-cyan-400 rounded-full"></div>

      {/* ==== Heading ==== */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 relative z-10">
        Dual Competition
      </h2>

      {/* ==== Dual Hierarchy ==== */}
      <div className="flex flex-col items-center space-y-10 relative z-10">
        {/* ==== Top Section: Dual Columns ==== */}
        <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-10 sm:gap-24">
          {/* Left Column */}
          <div className="flex flex-col items-center space-y-4 sm:space-y-6">
            <BlueBox title="One Side Student" />
            <ArrowDown className="text-purple-500 w-5 h-5" />
            <BlueBox title="Qualifying Exam" />
            <ArrowDown className="text-purple-500 w-5 h-5" />
            <BlueBox title="School & College Level (Online)" />
            <ArrowDown className="text-purple-500 w-5 h-5" />
            <BlueBox title="Block Level (Online)" />
          </div>

          {/* Middle Arrow (visible only on larger screens) */}
          <div className="hidden sm:flex flex-col items-center justify-center">
            <div className="w-10 h-[2px] bg-purple-500"></div>
            <ArrowRight className="text-purple-500 w-6 h-6 my-2" />
            <div className="w-10 h-[2px] bg-purple-500"></div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center space-y-4 sm:space-y-6">
            <BlueBox title="Another Side Public" />
            <ArrowDown className="text-purple-500 w-5 h-5" />
            <BlueBox title="Qualifying Exam" />
            <ArrowDown className="text-purple-500 w-5 h-5" />
            <BlueBox title="School & College Level (Online)" />
            <ArrowDown className="text-purple-500 w-5 h-5" />
            <BlueBox title="Block Level (Online)" />
          </div>
        </div>

        {/* ==== Connector (Responsive) ==== */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
          <div className="w-20 sm:w-28 h-[2px] bg-purple-500"></div>
          <ArrowRight className="text-purple-500 w-6 h-6" />
          <div className="w-20 sm:w-28 h-[2px] bg-purple-500"></div>
        </div>

        {/* ==== Center Path ==== */}
        <div className="flex flex-col items-center space-y-4 sm:space-y-6">
          <ArrowDown className="text-purple-500 w-6 h-6" />
          <BlueBox title="Offline Exam" />
          <ArrowDown className="text-purple-500 w-6 h-6" />
          <BlueBox title="District Level" />
          <ArrowDown className="text-purple-500 w-6 h-6" />
          <BlueBox title="Final Level (National Level)" />
        </div>
      </div>
    </div>
  );
};

// Reusable Box
const BlueBox = ({ title }) => (
  <div className="relative bg-white border border-purple-500 rounded-xl px-4 py-3 w-56 sm:w-64 text-center font-semibold text-purple-700 shadow-[5px_5px_0px_0px_rgba(59,130,246,0.7)] hover:shadow-[7px_7px_0px_0px_rgba(59,130,246,0.9)] transition-all duration-300 text-sm sm:text-base">
    {title}
  </div>
);

export default DualCompetition;

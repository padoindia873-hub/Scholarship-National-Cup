import React from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight } from "lucide-react";

const Member = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white relative py-10 overflow-hidden">
      <div className="flex flex-col items-center space-y-10 relative z-10">
        <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-10 sm:gap-24">
          <div className="flex flex-row flex-wrap justify-center gap-4 sm:gap-6">

            <Link to="/finance"><BlueBox title="Finance Committee" /></Link>
            <Link to="/core"><BlueBox title="Core Committee" /></Link>
            <Link to="/exam"><BlueBox title="Exam Committee" /></Link>
            <Link to="/research"><BlueBox title="Research and Monitoring Committee" /></Link>
            <Link to="/marketing"><BlueBox title="Marketing Committee" /></Link>
            <Link to="/technical"><BlueBox title="Technical Committee" /></Link>
            <Link to="/legal"><BlueBox title="Legal Committee" /></Link>

          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Box
const BlueBox = ({ title }) => (
  <div className="relative bg-white border border-purple-500 rounded-xl 
                  px-4 py-3 w-56 sm:w-64 h-20 
                  flex items-center justify-center text-center 
                  font-semibold text-purple-700 cursor-pointer
                  shadow-[5px_5px_0px_0px_rgba(59,130,246,0.7)]
                  hover:shadow-[7px_7px_0px_0px_rgba(59,130,246,0.9)] 
                  transition-all duration-300 text-sm sm:text-base">
    {title}
  </div>
);

export default Member;

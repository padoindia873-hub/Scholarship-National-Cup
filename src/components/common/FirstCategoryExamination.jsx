import React from "react";
import { Link } from "react-router-dom";
const FirstCategoryExamination =() =>{
  return (
      <div className="p-4 sm:p-6 md:p-10 bg-gray-50 min-h-screen flex flex-col items-center">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-2">
          Scholarship Cup
        </h2>
  
        {/* Blinking Registration Button */}
        <Link
          to="/"
          className="mt-4 mb-4 inline-block text-black text-sm sm:text-base font-semibold px-6 py-3 shadow-lg animate-blinkYellow"
        >
          Registration Now Open
        </Link>
        <div className="my-3 w-px h-8 bg-gray-400" />
  
        <Link
          to="/register"
          className="mt-2 mb-2 inline-block text-black text-sm sm:text-base font-semibold px-6 py-3 shadow-lg bg-green-400"
        >
          3 Categories
        </Link>
        <div className="my-3 w-px h-8 bg-gray-400" />
  
        <Link
          to="/"
          className="mt-2 mb-8 inline-block text-black text-sm sm:text-base font-semibold px-6 py-3 shadow-lg bg-green-400"
        >
          Any One Can Take The Exam Here
        </Link>
          <div className="my-3 w-px h-8 bg-gray-400" />

        {/* FLOW STRUCTURE */}
        <div className="w-full max-w-6xl mx-auto ">
<div className="p-4 sm:p-6 md:p-10 bg-gray-50 min-h-screen flex flex-col items-center justify-center">
            {/* ===== CATEGORY 1 ===== */}
            <div className="flex flex-col items-center w-full md:w-1/2 lg:w-1/3 ">
              <Link
                to="/"
                className="block" // ensures it behaves like a full div
              >
                <div className="bg-blue-100 p-4 rounded-lg shadow-md text-center w-full hover:scale-[1.02] transition">
                  <p className="text-base sm:text-lg font-semibold text-blue-800">
                    First Category Examination will
                  </p>
                  <p className="text-base sm:text-lg font-semibold text-blue-800">
                    be till 23th District Champions.
                  </p>
                </div>
              </Link>
  
              <div className="my-3 w-px h-8 bg-gray-400" />
  
              <div className="bg-purple-200 border border-blue-500 p-3 rounded text-sm sm:text-base w-full text-center">
                Only Rupees 321 is being charged for exam maintenance, lodging,
                fooding & travel of examiners.
              </div>
  
              <div className="my-3 w-px h-8 bg-gray-400" />
  
              <div className="bg-green-100 text-green-700 font-semibold px-4 py-2 rounded shadow">
                Maintains Fees: 321/-
              </div>
  
              <div className="my-3 w-px h-8 bg-gray-400" />
  
              <div className="bg-blue-200  border border-blue-500 p-3 rounded w-full text-center">
                First you must qualify to go to school or college level.
              </div>
  
              <div className="my-3 w-px h-8 bg-gray-400" />
  
              {[
                "Qualify Exam (Online)",
                "School & College Level (Online)",
                "Block Level (Online)",
                "District or State Level (Offline)",
                "National Level",
              ].map((item, index) => {
                const colors = [
                  "bg-green-200",
                  "bg-blue-200",
                  "bg-yellow-200",
                  "bg-purple-200",
                  "bg-pink-200",
                ];
  
                return (
                  <div
                    key={item}
                    className={`${colors[index]} border border-blue-500 p-3 rounded w-full text-center text-sm sm:text-base my-2`}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
            </div>
        </div>
      </div>
    );
}
export default FirstCategoryExamination;


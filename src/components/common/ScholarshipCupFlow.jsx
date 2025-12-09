import React from "react";
import { Link } from "react-router-dom";

const ScholarshipCupFlow = () => {
  return (
    <div className="p-4 sm:p-6 md:p-10 bg-gray-50 min-h-screen flex flex-col items-center">
      {/* Header */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-2">
        Scholarship Cup
      </h2>

      {/* Blinking Registration Button */}
      <Link
        to="/register"
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

      {/* FLOW STRUCTURE */}
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-8">
          {/* ===== CATEGORY 1 ===== */}
          <div className="flex flex-col items-center w-full md:w-1/2 lg:w-1/3">
            <Link
              to="/FirstCategoryExamination"
              className="block" // ensures it behaves like a full div
            >
              <div className="bg-blue-100 p-4 rounded-lg shadow-md text-center w-full hover:scale-[1.02] transition ">
                <p className="mt-4 mb-4 inline-block text-black text-sm sm:text-base font-semibold px-6 py-3 shadow-lg animate-blinkYellow">
                 First Category ₹121/-
                </p>
                {/* <p className="text-base sm:text-lg font-semibold text-blue-800">
                  be till 13th District Champions.
                </p> */}
              </div>
            </Link>

            {/* <div className="my-3 w-px h-8 bg-gray-400" />

            <div className="bg-purple-200 border border-blue-500 p-3 rounded text-sm sm:text-base w-full text-center">
              Only Rupees 121 is being charged for exam maintenance, lodging,
              fooding & travel of examiners.
            </div>

            <div className="my-3 w-px h-8 bg-gray-400" />

            <div className="bg-green-100 text-green-700 font-semibold px-4 py-2 rounded shadow">
              Maintains Fees: 121/-
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
            })} */}
          </div>
          {/* ===== CATEGORY 2 ===== */}
          <div className="flex flex-col items-center w-full md:w-1/2 lg:w-1/3">
           <Link
              to="/SecondCategoryExamination"
              className="block" // ensures it behaves like a full div
            >
            <div className="bg-blue-100 p-4 rounded-lg shadow-md text-center w-full">
              <p className="mt-4 mb-4 inline-block text-black text-sm sm:text-base font-semibold px-6 py-3 shadow-lg animate-blinkYellow">
                Second Category ₹171/-
              </p>
            </div>
            </Link>

            {/* <div className="my-3 w-px h-8 bg-gray-400" />

            <div className="bg-yellow-200 border border-blue-500 p-3 rounded w-full text-center">
              Only Rupees 171 is being charged for exam maintenance, lodging,
              fooding & travel of examiners.
            </div>

            <div className="my-3 w-px h-8 bg-gray-400" />

            <div className="bg-green-100 text-green-700 font-semibold px-4 py-2 rounded shadow">
              Maintains Fees: 171/-
            </div>

            <div className="my-3 w-px h-8 bg-gray-400" />

            <div className="bg-orange-400 border border-blue-500 p-3 rounded w-full text-center">
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
              const levelColors = [
                "bg-red-200", // Level 1
                "bg-yellow-200", // Level 2
                "bg-green-200", // Level 3
                "bg-blue-200", // Level 4
                "bg-purple-200", // Level 5
              ];

              return (
                <div
                  key={item}
                  className={`${levelColors[index]} border border-blue-500 p-3 rounded w-full text-center text-sm sm:text-base my-2`}
                >
                  {item}
                </div>
              );
            })} */}
          </div>

          {/* ===== CATEGORY 3 ===== */}
          <div className="flex flex-col items-center w-full md:w-full lg:w-1/3">
          <Link
              to="/ThirdCategoryExamination"
              className="block" // ensures it behaves like a full div
            >
            <div className="bg-blue-100 p-4 rounded-lg shadow-md text-center w-full">
              <p className="mt-4 mb-4 inline-block text-black text-sm sm:text-base font-semibold px-6 py-3 shadow-lg animate-blinkYellow">
                Third Category ₹221/-

              </p>
            </div>
            </Link>

            {/* <div className="my-3 w-px h-8 bg-gray-400" />

            <div className="bg-pink-100 border border-blue-600 p-3 rounded w-full text-center">
              Only Rupees 221 is being charged for exam maintenance, lodging,
              fooding & travel of examiners.
            </div>

            <div className="my-3 w-px h-8 bg-gray-400" />

            <div className="bg-green-100 text-green-700 font-semibold px-4 py-2 rounded shadow">
              Maintains Fees: 221/-
            </div>

            <div className="my-3 w-px h-8 bg-gray-400" />

            <div className="bg-sky-500 border border-blue-500 p-3 rounded w-full text-center">
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
              const bgColors = [
                "bg-red-200", // Level 1
                "bg-yellow-200", // Level 2
                "bg-green-200", // Level 3
                "bg-blue-200", // Level 4
                "bg-purple-200", // Level 5
              ];

              return (
                <div
                  key={item}
                  className={`${bgColors[index]} border border-blue-500 p-3 rounded w-full text-center text-sm sm:text-base my-2`}
                >
                  {item}
                </div>
              );
            })} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipCupFlow;

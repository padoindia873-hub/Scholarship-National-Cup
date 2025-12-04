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
        className="mt-4 mb-8 inline-block text-black text-sm sm:text-base font-semibold px-6 py-3 shadow-lg transition duration-300 animate-blinkYellow"
      >
        Registration Now Open
      </Link>
      <div className="w-0.5 h-10 bg-gray-400" />
      <Link
        to="/register"
        className="mt-4 mb-8 inline-block text-black text-sm xs:text-base font-semibold px-6 py-3 shadow-lg transition duration-300 bg-green-400 "
      >
        3 Categories
      </Link>
      <div className="w-0.5 h-10 bg-gray-400" />

      <Link
        to="/"
        className="mt-4 mb-8 inline-block text-black text-sm xs:text-base font-semibold px-6 py-3 shadow-lg transition duration-300 bg-green-400 "
      >
        Any One Can Take The Exam here.{" "}
      </Link>

      {/* Flow structure */}
      <div className="relative w-full max-w-5xl flex flex-col items-center">
        {/* Vertical line down from the button */}

        <div className="w-0.5 h-10 bg-gray-400" />

        {/* Horizontal split */}
        <div className="w-full flex justify-between items-start relative">
          {/* Horizontal connecting line */}
          <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-300 z-0" />

          {/* Govt student Option */}
          <div className="flex flex-col items-center w-1/2 px-2 sm:px-4 z-10">
            <div className="bg-blue-100 p-4 rounded-lg shadow-md text-center">
              <p className="text-base sm:text-lg font-semibold text-blue-800">
                First Category Examination will be till 13th District Champions.
              </p>
              {/* <p className="font-bold text-gray-800">Direct Gold Card</p> */}
            </div>

            <div className="w-0.5 h-10 bg-gray-400 my-1" />

            <div className="bg-white border border-blue-500 p-3 rounded text-sm sm:text-base w-full text-center">
              Only Rupees 121 is being charged for Online & Offline Examination
              Maintenance Charges, Lodging, Fooding and Traveling Expenses of
              Examiners and Guardians.{" "}
            </div>

            <div className="w-0.5 h-10 bg-gray-400 my-1" />

            <div className="bg-green-100 text-green-700 font-semibold px-4 py-2 rounded shadow">
              Maintains Fees.121/-
            </div>
            <div className="w-0.5 h-10 bg-gray-400 my-1" />
            <div className="bg-white border border-blue-500 p-3 rounded text-sm sm:text-base w-full text-center">
              First you have to get qualified then you will get chance in
              school college level{" "}
            </div>
            <div className="w-0.5 h-10 bg-gray-400 my-1" />
            <div className="bg-white border border-blue-500 p-3 rounded text-sm sm:text-base w-full text-center">
              Qualify Exam (Online)
            </div>
            <div className="w-0.5 h-10 bg-gray-400 my-1" />
            <div className="bg-white border border-blue-500 p-3 rounded text-sm sm:text-base w-full text-center">
              School & College Level (Online)
            </div>
            <div className="w-0.5 h-10 bg-gray-400 my-1" />

            <div className="bg-white border border-blue-500 p-3 rounded text-sm sm:text-base w-full text-center">
              Block Level (Online)
            </div>
            <div className="w-0.5 h-10 bg-gray-400 my-1" />

            {/* <div className="bg-white border border-blue-500 p-3 rounded text-sm sm:text-base w-full text-center">
             State Level (Offline)
            </div> */}

            {/* <div className="w-0.5 h-10 bg-gray-400 my-1" /> */}
            <div className="bg-white border border-blue-500 p-3 rounded text-sm sm:text-base w-full text-center">
              District or State Level (Offline)
            </div>
            <div className="w-0.5 h-10 bg-gray-400 my-1" />
            <div className="bg-white border border-blue-500 p-3 rounded text-sm sm:text-base w-full text-center">
              National Level
            </div>
          </div>

          {/* Private Student Option */}
          <div className="flex flex-col items-center w-1/2 px-2 sm:px-4 z-10">
            <div className="bg-blue-100 p-4 rounded-lg shadow-md text-center">
              <p className="text-base sm:text-lg font-semibold text-blue-800">
                Second Category Examination will be till Next 20th
                District Champions.
              </p>
              {/* <p className="font-bold text-gray-800">Direct Gold Card</p> */}
            </div>

            <div className="w-0.5 h-10 bg-gray-400 my-1" />

            <div className="bg-white border border-blue-500 p-3 rounded text-sm sm:text-base w-full text-center">
              Only Rupees 171 is being charged for Online & Offline Examination
              Maintenance Charges, Lodging, Fooding and Traveling Expenses of
              Examiners and Guardians.
            </div>

            <div className="w-0.5 h-10 bg-gray-400 my-1" />

            <div className="bg-green-100 text-green-700 font-semibold px-4 py-2 rounded shadow">
              Maintains Fees.171/-
            </div>
            <div className="w-0.5 h-10 bg-gray-400 my-1" />
            <div className="bg-white border border-blue-500 p-3 rounded text-sm sm:text-base w-full text-center">
              First you have to get qualified then you will get chance in school college level
            </div>
            <div className="w-0.5 h-10 bg-gray-400 my-1" />
            <div className="bg-white border border-blue-500 p-3 rounded text-sm sm:text-base w-full text-center">
              Qualify Exam (Online)
            </div>
            <div className="w-0.5 h-10 bg-gray-400 my-1" />
            <div className="bg-white border border-blue-500 p-3 rounded text-sm sm:text-base w-full text-center">
              School & College Level (Online)
            </div>
            <div className="w-0.5 h-10 bg-gray-400 my-1" />

            <div className="bg-white border border-blue-500 p-3 rounded text-sm sm:text-base w-full text-center">
              Block Level (Online)
            </div>
            <div className="w-0.5 h-10 bg-gray-400 my-1" />
            {/* 
            <div className="bg-white border border-blue-500 p-3 rounded text-sm sm:text-base w-full text-center">
             State Level (Offline)
            </div>
            <div className="w-0.5 h-10 bg-gray-400 my-1" /> */}
            <div className="bg-white border border-blue-500 p-3 rounded text-sm sm:text-base w-full text-center">
              District or State Level (Offline)
            </div>
            <div className="w-0.5 h-10 bg-gray-400 my-1" />
            <div className="bg-white border border-blue-500 p-3 rounded text-sm sm:text-base w-full text-center">
              National Level
            </div>
          </div>

          {/* Public */}

          <div className="flex flex-col items-center w-1/2 px-2 sm:px-4 z-10">
            <div className="bg-blue-100 p-4 rounded-lg shadow-md text-center">
              <p className="text-base sm:text-lg font-semibold text-blue-800">
                Third Category Examination will be till Next 20th
                District Champions.
              </p>
              {/* <p className="font-bold text-gray-800">Direct Gold Card</p> */}
            </div>

            <div className="w-0.5 h-10 bg-gray-400 my-1" />

            <div className="bg-white border border-blue-600 p-2 rounded text-sm sm:text-base w-full text-center">
              Only Rupees 221 is being charged for Online & Offline Examination
              Maintenance Charges, Lodging, Fooding and Traveling Expenses of
              Examiners and Guardians.
            </div>

            <div className="w-0.5 h-10 bg-gray-400 my-1" />

            <div className="bg-green-100 text-green-700 font-semibold px-4 py-2 rounded shadow">
              Maintains Fees.221/-
            </div>
            <div className="w-0.5 h-10 bg-gray-400 my-1" />
            <div className="bg-white border border-blue-500 p-3 rounded text-sm sm:text-base w-full text-center">
              First you have to get qualified then you will get chance in school college level
            </div>
            <div className="w-0.5 h-10 bg-gray-400 my-1" />
            <div className="bg-white border border-blue-500 p-3 rounded text-sm sm:text-base w-full text-center">
              Qualify Exam (Online)
            </div>
            <div className="w-0.5 h-10 bg-gray-400 my-1" />
            <div className="bg-white border border-blue-500 p-3 rounded text-sm sm:text-base w-full text-center">
              School & College Level (Online)
            </div>
            <div className="w-0.5 h-10 bg-gray-400 my-1" />

            <div className="bg-white border border-blue-500 p-3 rounded text-sm sm:text-base w-full text-center">
              Block Level (Online)
            </div>
            <div className="w-0.5 h-10 bg-gray-400 my-1" />

            {/* <div className="bg-white border border-blue-500 p-3 rounded text-sm sm:text-base w-full text-center">
             State Level (Offline)
            </div>
            <div className="w-0.5 h-10 bg-gray-400 my-1" /> */}
            <div className="bg-white border border-blue-500 p-3 rounded text-sm sm:text-base w-full text-center">
              District or State Level (Offline)
            </div>
            <div className="w-0.5 h-10 bg-gray-400 my-1" />
            <div className="bg-white border border-blue-500 p-3 rounded text-sm sm:text-base w-full text-center">
              National Level
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipCupFlow;

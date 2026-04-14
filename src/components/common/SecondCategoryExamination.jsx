import React from "react";
import { Link } from "react-router-dom";

const SecondCategoryExamination = () => {
  const steps = [
    { name: "Qualify Exam", type: "Online", color: "bg-red-500", icon: "📝" },
    { name: "School & College Level", type: "Online", color: "bg-yellow-500", icon: "🎓" },
    { name: "Block Level", type: "Online", color: "bg-green-500", icon: "🏘️" },
    { name: "District or State Level", type: "Offline", color: "bg-blue-500", icon: "🏛️" },
    { name: "Global Level", type: "Final", color: "bg-purple-500", icon: "🏆" },
  ];

  return (
    <div className="min-h-screen py-8 px-4 bg-gradient-to-br from-purple-100 via-pink-100 to-green-100" style={{ background: "linear-gradient(145deg, #052658, #4dffb596)" }}>
      
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 shadow-xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3">
            🏆 Scholarship Cup 🏆
          </h1>
          <p className="text-white/90 text-lg">Second Category - Private School Student</p>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-3 rounded-full"></div>
        </div>
      </div>

      {/* Registration Button */}
      <div className="text-center mb-6">
        <Link
          to="/register"
          className="inline-block px-8 py-4 text-lg sm:text-xl font-bold text-white bg-gradient-to-r from-red-500 to-green-500 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-pulse"
        >
          🔥 Registration Now Open 🔥
        </Link>
      </div>

      {/* Category Badge */}
      <div className="text-center mb-6">
        <span className="inline-block px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold shadow-lg">
          🎯 Second Category - Private School Student
        </span>
      </div>

      {/* Info Labels */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <div className="px-4 py-2 bg-blue-500 rounded-full text-white text-sm font-semibold shadow-md">
          📋 3 Categories
        </div>
        <div className="px-4 py-2 bg-green-500 rounded-full text-white text-sm font-semibold shadow-md">
          🎯 Any One Can Take The Exam Here
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          
          {/* Examination Info */}
          <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50" style={{ background: "linear-gradient(176deg, rgb(228 192 249), rgb(79 69 239 / 59%))" }}>
            <div className="text-center mb-6">
              <div className="text-5xl mb-3">📋</div>
              <h2 className="text-2xl font-bold text-white-800">Second Category Examination</h2>
              <p className="text-gray-600 mt-1">will be till Next 23rd District Champions</p>
            </div>

            {/* Fee Information */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-yellow-100 rounded-xl p-4 text-center border border-yellow-300">
                <p className="text-yellow-700 text-sm mb-1 font-semibold">Maintenance Fee</p>
                <p className="text-gray-800 text-3xl font-bold">₹444/-</p>
                <p className="text-gray-500 text-xs mt-1">For exam maintenance, lodging, fooding & travel</p>
              </div>
              <div className="bg-blue-100 rounded-xl p-4 text-center border border-blue-300">
                <p className="text-blue-700 text-sm mb-1 font-semibold">Qualification</p>
                <p className="text-gray-800 text-base font-semibold">First you must qualify</p>
                <p className="text-gray-500 text-xs mt-1">to go to school or college level</p>
              </div>
            </div>

            {/* Competition Flow */}
            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-800 text-center mb-4 flex items-center justify-center gap-2">
                <span>🏁</span> Competition Flow <span>🏁</span>
              </h3>
              
              {/* Desktop Flow */}
              <div className="hidden md:flex justify-between items-center">
                {steps.map((step, index) => (
                  <div key={index} className="flex-1 text-center">
                    <div className={`w-16 h-16 ${step.color} rounded-2xl flex flex-col items-center justify-center mx-auto mb-2 shadow-lg`}>
                      <span className="text-2xl">{step.icon}</span>
                      <span className="text-white font-bold text-xs">{index + 1}</span>
                    </div>
                    <p className="text-gray-800 text-sm font-semibold">{step.name}</p>
                    <p className="text-gray-500 text-xs">{step.type}</p>
                    {index < steps.length - 1 && (
                      <div className="absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-gradient-to-r from-purple-400 to-transparent -z-10"></div>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Flow */}
              <div className="md:hidden space-y-3">
                {steps.map((step, index) => (
                  <div key={index} className={`flex items-center gap-4 ${step.color} rounded-xl p-3 shadow-md`}>
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">{step.icon}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-semibold">{step.name}</p>
                      <p className="text-white/80 text-xs">{step.type}</p>
                    </div>
                    <div className="text-white/70 text-xl font-bold">{index + 1}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
          <Link
            to="/register"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-semibold text-center hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Register Now 🚀
          </Link>
          <Link
            to="/AllPrizeExam"
            className="px-6 py-3 bg-gradient-to-r from-green-500 to-red-500 rounded-xl text-white font-semibold text-center hover:from-green-600 hover:to-red-600 transition-all duration-300 shadow-lg"
          >
            View Prize List 🏆
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-10">
        <p className="text-black-500 text-sm">
          India's Biggest Scholarship Competition
        </p>
      </div>
    </div>
  );
};

export default SecondCategoryExamination;
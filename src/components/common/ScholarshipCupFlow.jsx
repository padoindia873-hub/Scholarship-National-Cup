import React from "react";
import { Link } from "react-router-dom";

const ScholarshipCupFlow = () => {
  const categories = [
    {
      id: 1,
      to: "/FirstCategoryExamination",
      amount: "₹333/-",
      title: "First Category",
      type: "Government Student",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      icon: "🏛️",
      features: ["Online Exam", "School Level", "Block Level", "District Level", "Global Level"]
    },
    {
      id: 2,
      to: "/SecondCategoryExamination",
      amount: "₹444/-",
      title: "Second Category",
      type: "Private School Student",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      icon: "🏫",
      features: ["Online Exam", "School Level", "Block Level", "District Level", "Global Level"]
    },
    {
      id: 3,
      to: "/ThirdCategoryExamination",
      amount: "₹555/-",
      title: "Third Category",
      type: "Public",
      color: "from-green-500 to-teal-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      icon: "🌍",
      features: ["Online Exam", "School Level", "Block Level", "District Level", "Global Level"]
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4" style={{ background: "linear-gradient(145deg, rgb(41 52 183), rgb(154 77 255 / 59%))" }}>
      
      {/* Header Section */}
      <div className="text-center mb-6">
        <div className="inline-block bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3">
            🏆 Scholarship Cup 🏆
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
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

      {/* Labels Section */}
      <div className="text-center mb-8">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* 3 Categories Label */}
          <span className="inline-block px-4 py-2 bg-blue-500 text-white text-sm sm:text-base font-semibold rounded-full shadow-md">
            📋 3 Categories
          </span>
          
          {/* Separator Dot */}
          <span className="text-white text-xl">•</span>
          
          {/* Any One Can Take The Exam Here Label */}
          <span className="inline-block px-4 py-2 bg-green-500 text-white text-sm sm:text-base font-semibold rounded-full shadow-md">
            🎯 Any One Can Take The Exam Here
          </span>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6">
          Select Your Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link key={category.id} to={category.to} className="block group">
              <div className={`${category.bgColor} rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border ${category.borderColor}`}>
                
                {/* Card Header */}
                <div className={`bg-gradient-to-r ${category.color} p-4 text-center`}>
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <h3 className="text-white text-xl font-bold">{category.title}</h3>
                </div>
                
                {/* Card Body */}
                <div className="p-6 text-center">
                  <div className="mb-4">
                    <span className="text-3xl sm:text-4xl font-black text-gray-800">
                      {category.amount}
                    </span>
                  </div>
                  
                  <div className="inline-block bg-white rounded-full px-4 py-2 shadow-md mb-4">
                    <span className="text-sm font-semibold text-gray-700">
                      {category.type}
                    </span>
                  </div>
                  
                 
                  
                  {/* View Details Button */}
                  <div className="mt-6">
                    <span className="inline-block px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg group-hover:from-gray-800 group-hover:to-black transition-all duration-300">
                      View Details →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Competition Flow Section */}
      <div className="max-w-6xl mx-auto mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
          Competition Flow
        </h2>
        <div className="relative">
          {/* Desktop Flow */}
          <div className="hidden md:flex justify-between items-center">
            {["Qualify Exam", "School Level", "Block Level", "District Level", "Global Level"].map((step, index) => (
              <div key={index} className="flex-1 text-center">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <p className="text-white text-sm font-semibold">{step}</p>
                  {index < 4 && (
                    <div className="absolute top-5 left-full w-full h-0.5 bg-yellow-400/50 -z-10"></div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Flow */}
          <div className="md:hidden space-y-4">
          {["Qualify Exam (Online)", "School & College Level (Online)", "Block Level (Online)", "District or State Level (Offline)", "Global Level"].map((step, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 rounded-lg p-3 shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${index === 0 ? '#1e3a8a' : index === 1 ? '#1e40af' : index === 2 ? '#1d4ed8' : index === 3 ? '#2563eb' : '#3b82f6'}, ${index === 0 ? '#3b82f6' : index === 1 ? '#60a5fa' : index === 2 ? '#818cf8' : index === 3 ? '#a78bfa' : '#c084fc'})`
              }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-green-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                <span className="text-white font-bold text-sm">{index + 1}</span>
              </div>
              <span className="text-white text-sm font-medium flex-1">{step}</span>
              {index < 4 && (
                <div className="text-yellow-300 text-lg font-bold">↓</div>
              )}
            </div>
          ))}
        </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-12">
        <p className="text-black/60 text-sm">
          India's Biggest Scholarship Competition
        </p>
      </div>
    </div>
  );
};

export default ScholarshipCupFlow;
import React from "react";
import { Link } from "react-router-dom";

const Member = () => {
  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen py-10 px-4"
      style={{ background: "linear-gradient(176deg, rgb(92, 90, 255), rgb(79 69 239 / 59%))" }}
    >
      {/* Header Section */}
      <div className="text-center mb-12 animate-slideDown">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
          Our Committees
        </h1>
        <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto">
          Meet the dedicated teams working behind the scenes to make this competition a grand success
        </p>
        <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Committees Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        <Link to="/finance">
          <CommitteeCard 
            title="Finance Committee" 
            icon="💰"
            description="Managing funds and budgets"
          />
        </Link>
        
        <Link to="/core">
          <CommitteeCard 
            title="Core Committee" 
            icon="⭐"
            description="Strategic planning & leadership"
          />
        </Link>
        
        <Link to="/exam">
          <CommitteeCard 
            title="Exam Committee" 
            icon="📝"
            description="Question papers & evaluation"
          />
        </Link>
        
        <Link to="/research">
          <CommitteeCard 
            title="Research and Monitoring Committee" 
            icon="🔬"
            description="Research & quality control"
          />
        </Link>
        
        <Link to="/marketing">
          <CommitteeCard 
            title="Marketing Committee" 
            icon="📢"
            description="Promotion & outreach"
          />
        </Link>
        
        <Link to="/technical">
          <CommitteeCard 
            title="Technical Committee" 
            icon="💻"
            description="IT infrastructure & support"
          />
        </Link>
        
        <Link to="/legal">
          <CommitteeCard 
            title="Legal Committee" 
            icon="⚖️"
            description="Legal compliance & documentation"
          />
        </Link>
      </div>

      {/* Footer Note */}
      <div className="text-center mt-12">
        <p className="text-white/70 text-sm animate-pulse">
          🇮🇳 Click on any committee to learn more about the team members 🇮🇳
        </p>
      </div>
    </div>
  );
};

// Enhanced Committee Card Component
const CommitteeCard = ({ title, icon, description }) => {
  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-green-500 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
      <div className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-purple-200">
        
        {/* Icon */}
        <div className="text-4xl mb-3">{icon}</div>
        
        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold text-purple-700 mb-2">
          {title}
        </h3>
        
        {/* Description */}
        {description && (
          <p className="text-gray-500 text-sm">
            {description}
          </p>
        )}
        
        {/* Hover Arrow Effect */}
        <div className="mt-3 flex items-center text-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <span className="text-sm font-medium">View Details</span>
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Member;
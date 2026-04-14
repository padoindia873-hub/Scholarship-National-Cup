import React, { useState } from "react";

// Flip Card Component
const FlipBenefitCard = ({ benefit, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Different gradient colors for each card
  const gradients = [
    { front: "from-blue-500 to-cyan-500", back: "from-cyan-500 to-blue-500", icon: "👑" },
    { front: "from-green-500 to-emerald-500", back: "from-emerald-500 to-green-500", icon: "🏫" },
    { front: "from-purple-500 to-pink-500", back: "from-pink-500 to-purple-500", icon: "🎓" },
    { front: "from-orange-500 to-red-500", back: "from-red-500 to-orange-500", icon: "🎟️" }
  ];

  const gradient = gradients[index % gradients.length];

  return (
    <div 
      className="flip-card-wrapper w-full cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
        {/* Front Side */}
        <div className={`flip-card-front bg-gradient-to-br ${gradient.front}`}>
          <div className="absolute top-3 right-3">
            <span className="bg-yellow-400 text-black text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse">
              ✨ BENEFIT ✨
            </span>
          </div>
          <div className="text-6xl mb-3 animate-bounce">{gradient.icon}</div>
          <h3 className="text-white font-bold text-lg md:text-xl mb-2 px-2">
            {benefit.title}
          </h3>
          <div className="mt-4 text-white/70 text-xs flex items-center justify-center gap-1">
            <span>👆 Hover to flip</span>
            <span className="text-base">🔄</span>
          </div>
        </div>

        {/* Back Side */}
        <div className={`flip-card-back bg-gradient-to-br ${gradient.back}`}>
          <div className="absolute top-3 left-3">
            <span className="bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
              🎁 DETAILS 🎁
            </span>
          </div>
          <div className="text-center w-full px-3">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">{gradient.icon}</span>
              </div>
            </div>
            <h4 className="text-white font-bold text-md mb-2">{benefit.title}</h4>
            <p className="text-white/90 text-sm leading-relaxed">
              {benefit.desc}
            </p>
          </div>
          <div className="mt-3 flex gap-1">
            <span className="text-[10px] text-white/70">✓ Guaranteed Benefit</span>
            <span className="text-[10px] text-white/70">✓ State Level</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const StateLevelCandidatesBenefits = () => {
  const benefits = [
    {
      title: "Guaranteed Crorepati Assurance",
      desc: "Whether the state level exam candidate passes or fails, he will definitely become a Crorepati.",
      highlight: "100% Crorepati Guarantee"
    },
    {
      title: "₹5 Lakhs for School Development",
      desc: "Five lakhs cash will be given to develop 10 primary schools of the block from which you will participate in this competition and your own school gets 20 lakhs.",
      highlight: "Total ₹25 Lakhs for Schools"
    },
    {
      title: "₹2 Lakhs Scholarship",
      desc: "Two lakhs rupees scholarship will be given to 10 higher secondary pass poor and brilliant students from your school among state level examinees.",
      highlight: "10 Students Benefit"
    },
    {
      title: "Ceremony Hall Access",
      desc: "Four guardians or guests can enter the final examination ceremony hall with every state level candidate.",
      highlight: "4 Guests Allowed"
    },
  ];

  return (
    <div className="w-full min-h-screen py-12 px-4 overflow-hidden" style={{ background: "linear-gradient(176deg, rgb(92, 90, 255), rgb(79 69 239 / 59%))" }}>
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header Section */}
      <div className="relative text-center mb-12">
        <div className="inline-block bg-white/10 backdrop-blur-md rounded-2xl px-8 py-4 shadow-2xl">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-3xl">🏆</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              State Level Benefits
            </h1>
            <span className="text-3xl">🎁</span>
          </div>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-2 rounded-full"></div>
          <p className="text-white/80 text-sm mt-3">Exclusive benefits for State Level Candidates</p>
        </div>
      </div>

      {/* Stats Row */}
      <div className="relative max-w-4xl mx-auto mb-10">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-yellow-400">100%</div>
              <div className="text-white/70 text-xs">Crorepati Guarantee</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400">₹25L+</div>
              <div className="text-white/70 text-xs">School Development</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400">10</div>
              <div className="text-white/70 text-xs">Scholarships</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400">4</div>
              <div className="text-white/70 text-xs">Guest Passes</div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Cards Grid */}
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <FlipBenefitCard key={index} benefit={benefit} index={index} />
          ))}
        </div>
      </div>

      {/* Additional Info Banner */}
      <div className="relative max-w-4xl mx-auto mt-12">
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-5 text-center shadow-xl">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className="text-2xl">🎯</span>
            <p className="text-white font-semibold text-sm md:text-base">
              All state level candidates automatically qualify for these benefits!
            </p>
            <span className="text-2xl">🏅</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative text-center mt-10">
        <p className="text-black/60 text-sm">
          India's Biggest Scholarship Competition
        </p>
      </div>

      {/* Custom CSS for Flip Cards and Animations */}
      <style jsx>{`
        .flip-card-wrapper {
          background-color: transparent;
          height: 320px;
          perspective: 1000px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.6s;
          transform-style: preserve-3d;
          border-radius: 1rem;
        }
        .flip-card-inner.flipped {
          transform: rotateY(180deg);
        }
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 1rem;
          padding: 1.2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
        
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce {
          animation: bounce 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default StateLevelCandidatesBenefits;
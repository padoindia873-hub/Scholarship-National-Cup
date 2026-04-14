import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Award, Trophy, Medal, Star, Gift, Sparkles, TrendingUp, Target, Zap, Crown } from "lucide-react";

export default function PrizeListCompetitionExam({ prizes }) {
  const scrollRef = useRef(null);

  const defaultPrizes = [
    {
      id: 1,
      rank: "1st Level",
      title: "🏆 Champion's Glory",
      amount: 100000,
      description: "School & College Level",
      Details: "Online Exam",
      type: "🥇 1,93,821 Candidates",
      icon: <Crown className="w-6 h-6 text-yellow-300" />,
    },
    {
      id: 2,
      rank: "2nd Level",
      title: "🚀 Rising Star",
      amount: 200000,
      description: "Block Level Championship",
      Details: "Online Exam",
      type: "🥈 10,971 Candidates",
      icon: <Medal className="w-6 h-6 text-gray-300" />,
    },
    {
      id: 3,
      rank: "3rd Level",
      title: "💫 Future Icon",
      amount: 1000000,
      description: "District Level Battle",
      Details: "Offline Exam",
      type: "🥉 9,039 Candidates",
      icon: <Award className="w-6 h-6 text-amber-600" />,
    },
    {
      id: 4,
      rank: "4th Level",
      title: "👑 Ultimate Failure",
      amount: 10000000,
      description: "State Level Showdown",
      Details: "Grand Championship",
      type: "🏅 1,900",
      icon: <Trophy className="w-6 h-6 text-yellow-400" />,
    },
    {
      id: 5,
      rank: "5th Level",
      title: "👑 Ultimate Winner",
      amount: 20000000,
      description: "Global Level Final",
      Details: "Grand Final",
      type: "🏅 29 Candidates",
      icon: <Trophy className="w-6 h-6 text-yellow-400" />,
    },
  ];

  const list = prizes && prizes.length ? prizes : defaultPrizes;

  const formatCurrency = (n) => {
    try {
      return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
      }).format(n);
    } catch {
      return `₹${n}`;
    }
  };

  // Auto scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationId;
    let scrollSpeed = 1;

    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    const pauseScroll = () => cancelAnimationFrame(animationId);
    const resumeScroll = () => {
      animationId = requestAnimationFrame(scroll);
    };

    if (scrollContainer) {
      animationId = requestAnimationFrame(scroll);
      scrollContainer.addEventListener("mouseenter", pauseScroll);
      scrollContainer.addEventListener("mouseleave", resumeScroll);
    }

    return () => {
      cancelAnimationFrame(animationId);
      if (scrollContainer) {
        scrollContainer.removeEventListener("mouseenter", pauseScroll);
        scrollContainer.removeEventListener("mouseleave", resumeScroll);
      }
    };
  }, []);

  const cardStyles = [
    { bg: "from-green-500 to-red-500", badge: "from-yellow-300 to-amber-500" },
    { bg: "from-green-500 to-teal-500", badge: "from-blue-300 to-cyan-400" },
    { bg: "from-blue-500 to-indigo-500", badge: "from-pink-300 to-rose-400" },
    { bg: "from-purple-500 to-fuchsia-500", badge: "from-amber-300 to-green-400" },
    { bg: "from-pink-500 to-rose-500", badge: "from-green-300 to-emerald-400" },
  ];

  return (
    <div 
      className="py-8 px-4 overflow-hidden"
      style={{ 
        background: "linear-gradient(176deg, rgb(92, 90, 255), rgb(79 69 239 / 59%))",
        minHeight: "60vh"
      }}
    >
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-block bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3">
            Prize Paradise
          </h1>
          <p className="text-white/80 text-lg">Level Up & Win Big</p>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-3 rounded-full"></div>
        </div>
      </div>

      {/* Infinite Scroll Row */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[rgb(92,90,255)] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[rgb(92,90,255)] to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 py-8 px-4 animate-slideFromRight"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            overflowX: "auto",
          }}
        >
          {/* Duplicate cards for seamless infinite scroll */}
          {[...list, ...list].map((p, idx) => {
            const style = cardStyles[idx % cardStyles.length];
            return (
              <div
                key={`${p.id}-${idx}`}
                className="flex-shrink-0 w-80 group"
              >
                <Link
                  to={`/prize/${p.id}`}
                  className={`block relative rounded-2xl p-5 shadow-xl bg-gradient-to-br ${style.bg} 
                    transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 overflow-hidden h-full`}
                >
                  {/* Glass overlay */}
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Content */}
                  <div className="relative">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div className={`flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${style.badge} text-black font-bold shadow-lg text-sm`}>
                        {p.icon}
                        <span>{p.rank}</span>
                      </div>
                      <div className="flex gap-0.5">
                        {[...Array(3)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-yellow-300 fill-current" />
                        ))}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white mb-1">
                      {p.title}
                    </h3>
                    <p className="text-xs text-white/80 mb-3 flex items-center gap-1">
                      <Target className="w-3 h-3" />
                      {p.description}
                    </p>

                    {/* Prize Amount */}
                    <div className="mb-3 p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                      <div className="text-[10px] text-white/90 uppercase">Prize Pool</div>
                      <div className="text-xl font-black text-white flex items-center gap-1">
                        <span className="text-2xl">🏆</span>
                        {formatCurrency(p.amount)}
                      </div>
                    </div>

                    {/* Badge */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-white/90 bg-black/20 px-2 py-0.5 rounded-full">
                        {p.type}
                      </span>
                      <span className="text-[10px] text-white/70 bg-white/20 px-2 py-0.5 rounded-full">
                        {p.rank.replace(/\s+/g, '')}
                      </span>
                    </div>

                    {/* Buttons */}
                    <div className="grid grid-cols-2 gap-2">
                      <button className="px-2 py-1.5 bg-white/20 rounded-lg text-xs text-white font-medium border border-white/30 hover:bg-white/30 transition-all">
                        {p.Details}
                      </button>
                      <Link to={`/PrizeListsDetails/${p.id}`}>
                        <button className="w-full px-2 py-1.5 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-lg text-xs text-black font-bold hover:from-yellow-500 hover:to-amber-600 transition-all flex items-center justify-center gap-1">
                          <Gift className="w-3 h-3" />
                          All Prize
                        </button>
                      </Link>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
  

      <style>{`
        .flex.overflow-x-auto {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .flex.overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
        
        @keyframes slideFromRight {
          0% {
            transform: translateX(100px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .animate-slideFromRight {
          animation: slideFromRight 0.6s ease-out;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        
        .animate-pulse {
          animation: pulse 2s infinite;
        }
      `}</style>
    </div>
  );
}
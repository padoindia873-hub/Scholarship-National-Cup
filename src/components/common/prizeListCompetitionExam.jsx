import React from "react";
import { Link } from "react-router-dom";
import { Award, Trophy, Medal, Star, Gift, Sparkles, TrendingUp, Target, Zap, Crown } from "lucide-react";

export default function PrizeListCompetitionExam({ prizes }) {
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
      title: "👑 Ultimate Failure",
      amount: 20000000,
      description: "State Level Showdown",
      Details: "Grand Semi Final",
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

  // 🎨 Enhanced gradient backgrounds with patterns
  const cardStyles = [
    {
      bg: "bg-gradient-to-br from-orange-400 via-orange-500 to-pink-500",
      shadow: "shadow-orange-200/50",
      badge: "bg-gradient-to-r from-yellow-300 to-amber-500",
    },
    {
      bg: "bg-gradient-to-br from-green-400 via-emerald-500 to-teal-500",
      shadow: "shadow-green-200/50",
      badge: "bg-gradient-to-r from-blue-300 to-cyan-400",
    },
    {
      bg: "bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-500",
      shadow: "shadow-blue-200/50",
      badge: "bg-gradient-to-r from-pink-300 to-rose-400",
    },
    {
      bg: "bg-gradient-to-br from-purple-400 via-fuchsia-500 to-pink-500",
      shadow: "shadow-purple-200/50",
      badge: "bg-gradient-to-r from-amber-300 to-orange-400",
    },
  ];

  // Rank icons mapping
  const rankIcons = {
    "1st Level": <Crown className="w-5 h-5 text-yellow-300" />,
    "2nd Level": <Medal className="w-5 h-5 text-gray-300" />,
    "3rd Level": <Award className="w-5 h-5 text-amber-600" />,
    "4th Level": <Trophy className="w-5 h-5 text-yellow-400" />,
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header with Animation */}
      <header className="relative mb-12">
        <Link to="/prize-list" className="block group">
          <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
            {/* Animated background patterns */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-white rounded-full animate-pulse"></div>
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-yellow-300 rounded-full animate-pulse animation-delay-1000"></div>
            </div>
            
            {/* Sparkle effects */}
            <div className="absolute top-4 right-4 animate-bounce">
              <Sparkles className="w-8 h-8 text-yellow-300" />
            </div>
            <div className="absolute bottom-4 left-4 animate-spin-slow">
              <Gift className="w-8 h-8 text-pink-300" />
            </div>

            {/* Main title */}
            <div className="relative text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-white to-green-300">
                  Prize Paradise
                </span>
              </h1>
              <div className="flex items-center justify-center gap-2 text-white/90 text-lg">
                <Target className="w-5 h-5" />
                <span>Level Up & Win Big</span>
                <TrendingUp className="w-5 h-5" />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent rounded-full"></div>
          </div>
        </Link>
      </header>

      {/* Prize Grid with Enhanced Cards */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
        {list.map((p, i) => {
          const style = cardStyles[i % cardStyles.length];
          const Icon = p.icon || rankIcons[p.rank] || <Zap className="w-5 h-5 text-white" />;
          
          return (
            <li key={p.id} className="group">
              <Link
                to={`/prize/${p.id}`}
                className={`block relative rounded-3xl p-6 shadow-xl ${style.bg} ${style.shadow} 
                  transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 overflow-hidden`}
              >
                {/* Glossy overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/20"></div>
                
                {/* Animated shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute -inset-full top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 group-hover:animate-shine"></div>
                </div>

                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }}></div>

                {/* Content */}
                <div className="relative">
                  {/* Header with rank and icon */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${style.badge} text-black font-bold shadow-lg`}>
                      {Icon}
                      <span className="text-sm">{p.rank}</span>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(3)].map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 text-yellow-300 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Title and description */}
                  <h3 className="text-xl font-bold text-white mb-1 line-clamp-1">
                    {p.title}
                  </h3>
                  <p className="text-sm text-white/80 mb-3 flex items-center gap-1">
                    <Target className="w-4 h-4" />
                    {p.description}
                  </p>

                  {/* Prize amount with animation */}
                  <div className="mb-4 p-3 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30">
                    <div className="text-xs text-white/90 uppercase tracking-wider">Prize Pool</div>
                    <div className="text-2xl font-black text-white flex items-center gap-1">
                      <span className="text-3xl">🏆</span>
                      {formatCurrency(p.amount)}
                    </div>
                  </div>

                  {/* Badge and type */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-white/90 bg-black/20 px-3 py-1 rounded-full">
                      {p.type}
                    </span>
                    <span className="text-xs text-white/70 bg-white/20 px-2 py-1 rounded-full">
                      #{p.rank.replace(/\s+/g, '')}
                    </span>
                  </div>

                  {/* Action buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <button className="px-3 py-2 bg-white/20 backdrop-blur-sm rounded-xl text-sm text-white font-medium border border-white/30 hover:bg-white/30 transition-all flex items-center justify-center gap-1">
                      <span>{p.Details}</span>
                    </button>
                    <Link to={`/PrizeListsDetails/${p.id}`}>
                      <button className="w-full px-3 py-2 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-xl text-sm text-black font-bold hover:from-yellow-500 hover:to-amber-600 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-1">
                        <Gift className="w-4 h-4" />
                        All Prize
                      </button>
                    </Link>
                  </div>

                  {/* Level indicator */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                    <div className="absolute top-0 right-0 transform rotate-45 translate-x-8 translate-y-[-8px] bg-white/20 backdrop-blur-sm px-12 py-1 text-xs text-white font-bold">
                      Level {i + 1}
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Footer with enhanced styling */}
      <footer className="mt-12 text-center relative">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">
          <Sparkles className="w-5 h-5 text-purple-500" />
          <p className="text-sm text-gray-700">
            💡 <span className="font-semibold">Pro Tip:</span> Pass a{' '}
            <code className="px-2 py-1 bg-purple-100 text-purple-700 rounded-md font-mono text-xs">
              prizes
            </code>{' '}
            prop to customize the list
          </p>
        </div>
      </footer>

      {/* Add custom CSS for animations */}
      <style jsx>{`
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
        @keyframes shine {
          from { left: -100%; }
          to { left: 200%; }
        }
        .animate-shine {
          animation: shine 1.5s ease-in-out;
        }
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
      `}</style>
    </section>
  );
}
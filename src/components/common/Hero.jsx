import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Trophy, Award, Users, ArrowRight, ChevronRight, Sparkles, Star, Crown, 
  Gem, Wallet, GraduationCap
} from "lucide-react";
import heroVideo from "../../assets/live3.mp4";
import fireworkVideo from "../../assets/firework.mp4";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Set target date to May 10, 2026
  const targetDate = new Date("May 10, 2026 00:00:00").getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    // Calculate time left function
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    };
    
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(timer);
    };
  }, []);

  const stats = [
    { 
      icon: Crown, 
      title: "Govt. Of India Approved", 
      color: "text-emerald-400",
      gradient: "from-orange-500 via-white to-green-500",
      description: "Official Recognition",
      fireColor: "emerald"
    },
    { 
      icon: Trophy, 
      title: "1Kg Pure Gold Trophy", 
      color: "text-blue-400",
      gradient: "from-blue-500 to-cyan-500",
      description: "Premium Quality",
      fireColor: "blue"
    },
    { 
      icon: Star, 
      title: "1932 Crorepaties", 
      color: "text-purple-400",
      gradient: "from-purple-500 to-pink-500",
      description: "Life Changing Prize",
      fireColor: "purple"
    },
    { 
      icon: Gem, 
      title: "9000 Milliore", 
      color: "text-yellow-400",
      gradient: "from-yellow-500 to-green-500",
      description: "Top Achievers",
      fireColor: "yellow"
    },
    { 
      icon: Wallet, 
      title: "1,90,000 Lakhpatis", 
      color: "text-green-400",
      gradient: "from-green-500 to-emerald-500",
      description: "Life Changing Prize",
      fireColor: "green"
    },
    { 
      icon: GraduationCap, 
      title: "11,000 Candidates", 
      color: "text-blue-400",
      gradient: "from-blue-500 to-cyan-500",
      description: "Get Offline Exam For Grand Final",
      fireColor: "cyan"
    }
  ];

  return (
    <>
      <div className="relative min-h-screen overflow-hidden">
        {/* Main Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
        </div>

        {/* Firework Video Behind Cards */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
          >
            <source src={fireworkVideo} type="video/mp4" />
          </video>
        </div>

        {/* Animated Glow Effect */}
        <div 
          className="absolute w-96 h-96 rounded-full bg-blue-500/20 blur-3xl animate-pulse"
          style={{
            left: `${mousePosition.x * 0.05}px`,
            top: `${mousePosition.y * 0.05}px`,
            transition: 'all 0.3s ease-out'
          }}
        ></div>

        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 min-h-screen flex items-center">
            <div className="w-full text-center">
              {/* Badge - Centered */}
              <div className="mb-6 animate-fade-in">
                <div className="bg-white/10 backdrop-blur-md rounded-full px-8 py-3 md:px-10 md:py-3.5 border border-white/20 inline-block shadow-lg">
                  <span className="text-blue-400 font-bold text-base md:text-lg lg:text-xl tracking-wide">🏆  KK PADHO INDIA PRESENTS</span>
                </div>
              </div>
              
              {/* Main Heading - Centered */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-5 animate-slide-up">
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent text-3xl md:text-4xl">
                  GLOBAL SCHOLARSHIP
                </span>
                <br />
                <span className="text-white text-3xl md:text-4xl">COMPETITION</span>
              </h1>
              
              {/* Description with Attractive 1932 */}
              <div className="mb-8 animate-slide-up-delay-1">
                <div className="text-center">
                  {/* Large Attractive 1932 Number */}
                  <div className="mb-4">
                    <span className="inline-block">
                      <span className="text-7xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-yellow-400 via-green-500 to-red-500 bg-clip-text text-transparent animate-pulse drop-shadow-2xl">
                        1932
                      </span>
                    </span>
                   <span className="text-3xl md:text-4xl lg:text-5xl font-bold ml-3 bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 to-blue-400 bg-clip-text text-transparent">
  Crorepaties
</span>
                  </div>
                   
                  <div className="mt-3 inline-block bg-gradient-to-r from-yellow-500/20 to-green-500/20 rounded-full px-6 py-2 backdrop-blur-sm">
                    <span className="text-blue-300 text-lg md:text-xl">✨ Join the revolution in education! ✨</span>
                  </div>
                </div>
              </div>
              
              {/* Stats Cards - Grid Layout: 3 cards per row on desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10 animate-slide-up-delay-2 max-w-[50rem] mx-auto">
                {stats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div key={idx} className="group relative">
                      {/* Card Gradient Background */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} rounded-xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-300`}></div>
                      
                      {/* Main Card */}
                      <div className="relative bg-white/10 backdrop-blur-lg px-5 py-4 rounded-xl shadow-lg text-center border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer hover:bg-white/20 h-full overflow-hidden">
                        {/* Sparkles on hover */}
                        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Sparkles className="absolute top-2 left-3 w-3 h-3 text-yellow-400 animate-ping" />
                          <Sparkles className="absolute top-4 right-4 w-2 h-2 text-yellow-400 animate-ping animation-delay-300" />
                          <Sparkles className="absolute bottom-3 left-5 w-2.5 h-2.5 text-yellow-400 animate-ping animation-delay-600" />
                          <Sparkles className="absolute bottom-5 right-3 w-2 h-2 text-yellow-400 animate-ping animation-delay-900" />
                        </div>
                        
                        <Icon className={`h-10 w-10 ${stat.color} mx-auto mb-2 group-hover:scale-110 transition-transform duration-300 relative z-10`} />
                        <h3 className="font-semibold text-base text-white mb-1 relative z-10">{stat.title}</h3>
                        <p className="text-xs text-gray-300 relative z-10">{stat.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA Buttons - Centered - Larger Size */}
              <div className="flex flex-wrap justify-center gap-6 animate-slide-up-delay-3">
                <Link
                  to="/BuyRoll"
                  className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full hover:from-blue-400 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span className="relative z-10 flex items-center gap-2 text-base md:text-lg">
                    🚀 Get Exam Now
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                
                <Link
                  to="/awards"
                  className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 text-base md:text-lg"
                >
                  🏆 View Awards
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </div>

              {/* Countdown Timer - Centered - Target: May 10, 2026 */}
              <div className="mt-10 animate-slide-up-delay-3">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 inline-flex items-center gap-5 border border-white/20 flex-wrap justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">{String(timeLeft.days).padStart(2, '0')}</div>
                    <div className="text-xs text-gray-300">Days</div>
                  </div>
                  <div className="text-2xl font-bold text-white">:</div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">{String(timeLeft.hours).padStart(2, '0')}</div>
                    <div className="text-xs text-gray-300">Hours</div>
                  </div>
                  <div className="text-2xl font-bold text-white">:</div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">{String(timeLeft.minutes).padStart(2, '0')}</div>
                    <div className="text-xs text-gray-300">Minutes</div>
                  </div>
                  <div className="text-2xl font-bold text-white">:</div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">{String(timeLeft.seconds).padStart(2, '0')}</div>
                    <div className="text-xs text-gray-300">Seconds</div>
                  </div>
                  <div className="ml-3 text-sm text-gray-300">⏰ Registration Closing Soon!</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-9 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
          opacity: 0;
          animation-delay: 0.2s;
        }
        .animate-slide-up-delay-1 {
          animation: slide-up 0.6s ease-out forwards;
          opacity: 0;
          animation-delay: 0.4s;
        }
        .animate-slide-up-delay-2 {
          animation: slide-up 0.6s ease-out forwards;
          opacity: 0;
          animation-delay: 0.6s;
        }
        .animate-slide-up-delay-3 {
          animation: slide-up 0.6s ease-out forwards;
          opacity: 0;
          animation-delay: 0.8s;
        }
        .animate-bounce {
          animation: bounce 1.5s infinite;
        }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-900 { animation-delay: 0.9s; }
      `}</style>
    </>
  );
};

export default HeroSection;
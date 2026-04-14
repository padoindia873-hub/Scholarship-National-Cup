import React from "react";
import { 
  ArrowDown, 
  ArrowRight, 
  Users, 
  GraduationCap, 
  Trophy,
  Medal,
  Award,
  Sparkles,
  Target,
  Zap,
  Globe,
  MapPin,
  Crown,
  Star,
  Rocket,
  Shield,
  CheckCircle2,
  TrendingUp,
  BarChart3,
  GitMerge,
  GitFork,
  Layers,
  Network,
  Activity,
  Gauge,
  Flame,
  Gem,
  Diamond,
  ChefHat,
  Handshake,
  HeartHandshake,
  BookOpen
} from "lucide-react";

const DualCompetition = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: "linear-gradient(176deg, rgb(90 202 255), rgba(79, 69, 239, 0.59))" }}>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #6366f1 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Header Section - Desktop unchanged, mobile responsive */}
      <div className="relative max-w-7xl mx-auto mb-12 text-center">
        {/* Title badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-4 border border-purple-200">
          <GitFork className="w-5 h-5 text-purple-600" />
          <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Competition Structure 2026
          </span>
          <Network className="w-4 h-4 text-pink-500" />
        </div>

        {/* Main title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-blue-800">
            Tripple Competition
          </span>
          <br />
          <span className="text-2xl sm:text-3xl text-gray-600 mt-2 block">
            Govt. Students vs Private Students vs Public – One Ultimate Challenge
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Three paths, one destination. Watch how students and public participants 
          compete through multiple levels to reach the Global Championship.
        </p>

        {/* Stats - Responsive wrap */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {[
            { icon: <Users className="w-4 h-4" />, label: 'Govt. Students Track', color: 'green' },
            { icon: <Users className="w-4 h-4" />, label: 'Public Students Track', color: 'blue' },
            { icon: <HeartHandshake className="w-4 h-4" />, label: 'Public Track', color: 'purple' },
            { icon: <Trophy className="w-4 h-4" />, label: '4 Levels Each', color: 'pink' },
            { icon: <Crown className="w-4 h-4" />, label: 'Global Final', color: 'green' },
          ].map((stat, idx) => (
            <div key={idx} className={`flex items-center gap-2 px-4 py-2 bg-${stat.color}-100 rounded-full shadow-sm`}>
              <span className={`text-${stat.color}-600`}>{stat.icon}</span>
              <span className={`text-${stat.color}-700 font-medium text-sm`}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Flowchart - Desktop unchanged */}
      <div className="relative max-w-7xl mx-auto">
        {/* Three Paths Section - Centered */}
        <div className="relative max-w-5xl mx-auto">
          {/* Three parallel paths at the top - Stack on mobile, row on desktop */}
          <div className="flex flex-col sm:flex-row justify-center items-center sm:items-stretch gap-6 mb-8">
            {/* Left Path - Govt. Student */}
            <div className="w-full sm:w-72">
              <PathCard 
                title="Govt. Student Path" 
                icon={<GraduationCap className="w-6 h-6" />}
                gradient="from-blue-400 to-indigo-400"
                badge="Entry Point"
                delay="200"
              />
            </div>
            
            {/* Center Path - Public Student */}
            <div className="w-full sm:w-72">
              <PathCard 
                title="Private Student Path" 
                icon={<Users className="w-6 h-6" />}
                gradient="from-green-400 to-teal-400"
                badge="Entry Point"
                delay="300"
              />
            </div>
            
            {/* Right Path - Another Side Public */}
            <div className="w-full sm:w-72">
              <PathCard 
                title="Public Path" 
                icon={<HeartHandshake className="w-6 h-6" />}
                gradient="from-purple-400 to-pink-400"
                badge="Entry Point"
                delay="400"
              />
            </div>
          </div>

          {/* Convergence arrows - Responsive */}
          <div className="relative h-24 mb-4">
            {/* Left diagonal line */}
            <div className="absolute left-1/4 sm:left-1/3 top-0 w-20 sm:w-32 h-8 sm:h-12 border-t-2 border-r-2 border-purple-400 rounded-tr-xl sm:rounded-tr-2xl" style={{ transform: 'translateX(-50%)' }}></div>
            
            {/* Center vertical line */}
            <div className="absolute left-1/2 top-0 w-0.5 h-8 sm:h-12 bg-purple-400 transform -translate-x-1/2"></div>
            
            {/* Right diagonal line */}
            <div className="absolute right-1/4 sm:right-1/3 top-0 w-20 sm:w-32 h-8 sm:h-12 border-t-2 border-l-2 border-purple-400 rounded-tl-xl sm:rounded-tl-2xl" style={{ transform: 'translateX(50%)' }}></div>
            
            {/* Meeting point - horizontal line */}
            <div className="absolute left-1/2 top-6 sm:top-12 w-32 sm:w-64 h-0.5 bg-purple-400 transform -translate-x-1/2"></div>
            
            {/* Meeting point dot */}
            <div className="absolute left-1/2 top-6 sm:top-12 w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg"></div>
            
            {/* Down arrow from meeting point */}
            <div className="absolute left-1/2 top-6 sm:top-12 transform -translate-x-1/2">
              <div className="w-0.5 h-4 sm:h-8 bg-purple-400 mx-auto"></div>
              <ArrowDown className="text-purple-500 w-3 h-3 sm:w-5 sm:h-5 mx-auto mt-0.5 sm:mt-1 animate-bounce" />
            </div>
          </div>

          {/* Online Exam - Converged point */}
          <div className="flex justify-center mb-6">
            <PathCard 
              title="Online Exam" 
              icon={<Globe className="w-6 h-6" />}
              gradient="from-green-400 to-red-400"
              badge="Common Path"
              delay="500"
              isCenter
            />
          </div>
          
          <ConnectorArrow direction="down" color="purple" isCenter />
          
          <div className="flex justify-center mb-6">
            <PathCard 
              title="Qualifying Exam" 
              icon={<Target className="w-6 h-6" />}
              gradient="from-purple-400 to-pink-400"
              badge="Level 1"
              delay="600"
              isCenter
            />
          </div>
          
          <ConnectorArrow direction="down" color="purple" isCenter />
          
          <div className="flex justify-center mb-6">
            <PathCard 
              title="School & College Level" 
              subtitle="Online"
              icon={<BookOpen className="w-6 h-6" />}
              gradient="from-purple-400 to-pink-400"
              badge="Level 2"
              delay="700"
              isCenter
            />
          </div>
          
          <ConnectorArrow direction="down" color="purple" isCenter />
          
          <div className="flex justify-center mb-6">
            <PathCard 
              title="Block Level" 
              subtitle="Online"
              icon={<Globe className="w-6 h-6" />}
              gradient="from-purple-400 to-pink-400"
              badge="Level 3"
              delay="800"
              isCenter
            />
          </div>
        </div>

        {/* Common Path - Final Levels */}
        <div className="relative mt-8 space-y-4">
          <div className="flex justify-center">
            <PathCard 
              title="Offline Exam" 
              icon={<Shield className="w-6 h-6" />}
              gradient="from-green-400 to-red-400"
              badge="Level 4"
              delay="800"
              isCenter
            />
          </div>
          <ConnectorArrow direction="down" color="green" isCenter />
          
          <div className="flex justify-center">
            <PathCard 
              title="District Level" 
              subtitle="Offline"
              icon={<MapPin className="w-6 h-6" />}
              gradient="from-green-400 to-red-400"
              badge="Level 5"
              delay="900"
              isCenter
            />
          </div>
          <ConnectorArrow direction="down" color="green" isCenter />
          
          <div className="flex justify-center">
            <PathCard 
              title="Final Level" 
              subtitle="Global Level Championship"
              icon={<Crown className="w-6 h-6" />}
              gradient="from-green-400 to-emerald-600"
              badge="GRAND FINALE"
              delay="1000"
              isCenter
              isFinal
            />
          </div>
        </div>

        {/* Victory Animation - Green */}
        <div className="flex justify-center mt-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full filter blur-xl opacity-50 animate-pulse"></div>
            <div className="relative bg-gradient-to-r from-green-400 to-emerald-600 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-3">
              <Trophy className="w-6 h-6" />
              <span className="font-bold text-lg">Global Champion Crowned</span>
              <Sparkles className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <footer className="relative max-w-7xl mx-auto mt-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">
          <CheckCircle2 className="w-4 h-4 text-green-500" />
          <span className="text-sm text-gray-600">
            Three paths converge at Online Exam for the ultimate showdown to Global Championship
          </span>
        </div>
      </footer>

      {/* Custom Animations */}
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
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce {
          animation: bounce 0.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

// Enhanced Path Card Component - Desktop unchanged
const PathCard = ({ title, subtitle, icon, gradient, badge, delay, isCenter, isFinal }) => (
  <div 
    className={`
      group relative max-w-md mx-auto ${isCenter ? 'mx-auto' : ''}
      animate-fadeInUp
    `}
    style={{ animationDelay: `${delay}ms` }}
  >
    {/* Main card */}
    <div className={`
      relative bg-white/90 backdrop-blur-sm 
      rounded-2xl shadow-xl 
      border-2 border-transparent
      transition-all duration-300
      overflow-hidden
      ${isFinal ? 'transform hover:scale-105' : ''}
    `}>
      {/* Gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
      
      {/* Top accent line */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient}`}></div>
      
      <div className="relative p-5">
        <div className="flex items-start gap-4">
          {/* Icon container */}
          <div className={`
            relative p-3 rounded-xl bg-gradient-to-r ${gradient} 
            shadow-lg transform -rotate-3 group-hover:rotate-0 
            transition-all duration-300
            ${isFinal ? 'animate-pulse-slow' : ''}
          `}>
            <span className="text-white">{icon}</span>
            {/* Glow effect */}
            <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-xl filter blur-md opacity-50`}></div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-800 mb-1">{title}</h3>
            {subtitle && (
              <p className="text-sm text-gray-500 mb-2">{subtitle}</p>
            )}
            
            {/* Badge */}
            <div className={`
              inline-flex items-center gap-1 px-3 py-1 
              bg-gradient-to-r ${gradient} text-white text-xs 
              rounded-full shadow-sm
            `}>
              <Award className="w-3 h-3" />
              <span className="font-semibold">{badge}</span>
            </div>
          </div>

          {/* Decorative element */}
          <div className="absolute top-2 right-2 opacity-10">
            <Target className="w-8 h-8" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Connector Arrow Component - Desktop unchanged
const ConnectorArrow = ({ direction, color, isCenter }) => {
  const getColorClasses = (color) => {
    switch(color) {
      case 'purple':
        return {
          gradient: 'from-purple-400 to-purple-600',
          text: 'text-purple-500'
        };
      case 'green':
        return {
          gradient: 'from-green-400 to-green-600',
          text: 'text-green-500'
        };
      default:
        return {
          gradient: 'from-purple-400 to-purple-600',
          text: 'text-purple-500'
        };
    }
  };

  const colorClasses = getColorClasses(color);

  return (
    <div className={`flex justify-center ${isCenter ? 'mb-6' : ''}`}>
      <div className="relative">
        {direction === 'down' ? (
          <div className="relative">
            <div className={`w-1 h-10 bg-gradient-to-b ${colorClasses.gradient} mx-auto rounded-full animate-pulse`}></div>
            <ArrowDown className={`${colorClasses.text} w-5 h-5 mx-auto mt-1 animate-bounce`} />
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <div className={`w-10 h-1 bg-gradient-to-r ${colorClasses.gradient} rounded-full`}></div>
            <ArrowRight className={`${colorClasses.text} w-5 h-5 animate-pulse`} />
            <div className={`w-10 h-1 bg-gradient-to-r ${colorClasses.gradient} rounded-full`}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DualCompetition;
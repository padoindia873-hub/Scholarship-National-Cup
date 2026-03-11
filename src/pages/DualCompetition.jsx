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
  HeartHandshake
} from "lucide-react";

const DualCompetition = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
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

      {/* Header Section */}
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
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600">
            Dual Competition
          </span>
          <br />
          <span className="text-2xl sm:text-3xl text-gray-600 mt-2 block">
            Students vs Public – One Ultimate Challenge
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Two paths, one destination. Watch how students and public participants 
          compete through multiple levels to reach the National Championship.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {[
            { icon: <Users className="w-4 h-4" />, label: 'Students Track', color: 'blue' },
            { icon: <HeartHandshake className="w-4 h-4" />, label: 'Public Track', color: 'purple' },
            { icon: <Trophy className="w-4 h-4" />, label: '4 Levels Each', color: 'pink' },
            { icon: <Crown className="w-4 h-4" />, label: 'National Final', color: 'orange' },
          ].map((stat, idx) => (
            <div key={idx} className={`flex items-center gap-2 px-4 py-2 bg-${stat.color}-100 rounded-full shadow-sm`}>
              <span className={`text-${stat.color}-600`}>{stat.icon}</span>
              <span className={`text-${stat.color}-700 font-medium text-sm`}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Flowchart */}
      <div className="relative max-w-7xl mx-auto">
        {/* Two Paths Section */}
        <div className="relative flex flex-col lg:flex-row justify-center items-start gap-8 lg:gap-16">
          
          {/* Left Path - Students */}
          <div className="flex-1 relative">
            {/* Path label */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 lg:left-0 lg:translate-x-0">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full shadow-lg inline-flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span className="font-semibold">Student Path</span>
              </div>
            </div>
            
            <div className="mt-8 space-y-4">
              <PathCard 
                title="One Side Student" 
                icon={<Users className="w-6 h-6" />}
                gradient="from-blue-400 to-cyan-400"
                badge="Entry Point"
                delay="0"
              />
              <ConnectorArrow direction="down" color="blue" />
              <PathCard 
                title="Qualifying Exam" 
                icon={<GraduationCap className="w-6 h-6" />}
                gradient="from-blue-400 to-cyan-400"
                badge="Level 1"
                delay="100"
              />
              <ConnectorArrow direction="down" color="blue" />
              <PathCard 
                title="School & College Level" 
                subtitle="Online"
                icon={<BookOpen className="w-6 h-6" />}
                gradient="from-blue-400 to-cyan-400"
                badge="Level 2"
                delay="200"
              />
              <ConnectorArrow direction="down" color="blue" />
              <PathCard 
                title="Block Level" 
                subtitle="Online"
                icon={<Globe className="w-6 h-6" />}
                gradient="from-blue-400 to-cyan-400"
                badge="Level 3"
                delay="300"
              />
            </div>
          </div>

          {/* Center Connector for Desktop */}
          <div className="hidden lg:flex flex-col items-center justify-center pt-24">
            <div className="relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-xl animate-pulse">
                  <GitMerge className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="w-1 h-32 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400"></div>
            </div>
          </div>

          {/* Right Path - Public */}
          <div className="flex-1 relative">
            {/* Path label */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 lg:left-0 lg:translate-x-0">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full shadow-lg inline-flex items-center gap-2">
                <HeartHandshake className="w-4 h-4" />
                <span className="font-semibold">Public Path</span>
              </div>
            </div>
            
            <div className="mt-8 space-y-4">
              <PathCard 
                title="Another Side Public" 
                icon={<HeartHandshake className="w-6 h-6" />}
                gradient="from-purple-400 to-pink-400"
                badge="Entry Point"
                delay="400"
              />
              <ConnectorArrow direction="down" color="purple" />
              <PathCard 
                title="Qualifying Exam" 
                icon={<GraduationCap className="w-6 h-6" />}
                gradient="from-purple-400 to-pink-400"
                badge="Level 1"
                delay="500"
              />
              <ConnectorArrow direction="down" color="purple" />
              <PathCard 
                title="School & College Level" 
                subtitle="Online"
                icon={<BookOpen className="w-6 h-6" />}
                gradient="from-purple-400 to-pink-400"
                badge="Level 2"
                delay="600"
              />
              <ConnectorArrow direction="down" color="purple" />
              <PathCard 
                title="Block Level" 
                subtitle="Online"
                icon={<Globe className="w-6 h-6" />}
                gradient="from-purple-400 to-pink-400"
                badge="Level 3"
                delay="700"
              />
            </div>
          </div>
        </div>

        {/* Mobile Connector */}
        <div className="lg:hidden flex justify-center items-center my-4">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-xl">
            <ArrowDown className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Desktop Horizontal Connector */}
        <div className="hidden lg:flex justify-center items-center my-8 relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>
          </div>
          <div className="relative bg-white px-8 py-3 rounded-full shadow-xl border-2 border-purple-200">
            <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              MERGE PATHS
            </span>
          </div>
        </div>

        {/* Common Path - Final Levels */}
        <div className="relative mt-8 space-y-4">
          <div className="flex justify-center">
            <PathCard 
              title="Offline Exam" 
              icon={<Shield className="w-6 h-6" />}
              gradient="from-orange-400 to-red-400"
              badge="Level 4"
              delay="800"
              isCenter
            />
          </div>
          <ConnectorArrow direction="down" color="orange" isCenter />
          
          <div className="flex justify-center">
            <PathCard 
              title="District Level" 
              subtitle="Offline"
              icon={<MapPin className="w-6 h-6" />}
              gradient="from-orange-400 to-red-400"
              badge="Level 5"
              delay="900"
              isCenter
            />
          </div>
          <ConnectorArrow direction="down" color="orange" isCenter />
          
          <div className="flex justify-center">
            <PathCard 
              title="Final Level" 
              subtitle="National Level Championship"
              icon={<Crown className="w-6 h-6" />}
              gradient="from-yellow-400 to-orange-400"
              badge="GRAND FINALE"
              delay="1000"
              isCenter
              isFinal
            />
          </div>
        </div>

        {/* Victory Animation */}
        <div className="flex justify-center mt-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full filter blur-xl opacity-50 animate-pulse"></div>
            <div className="relative bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-3">
              <Trophy className="w-6 h-6" />
              <span className="font-bold text-lg">National Champion Crowned</span>
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
            Both paths converge at the National Level for the ultimate showdown
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
      `}</style>
    </div>
  );
};

// Enhanced Path Card Component
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
      hover:border-${gradient.split(' ')[1].replace('from-', '').replace('-400', '')}-400
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

// Connector Arrow Component
const ConnectorArrow = ({ direction, color, isCenter }) => (
  <div className={`flex justify-center ${isCenter ? '' : ''}`}>
    <div className="relative">
      {/* Pulse effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      {direction === 'down' ? (
        <div className="relative">
          <div className={`w-1 h-10 bg-gradient-to-b from-${color}-400 to-${color}-600 mx-auto rounded-full animate-pulse`}></div>
          <ArrowDown className={`text-${color}-500 w-5 h-5 mx-auto mt-1 animate-bounce`} />
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <div className={`w-10 h-1 bg-gradient-to-r from-${color}-400 to-${color}-600 rounded-full`}></div>
          <ArrowRight className={`text-${color}-500 w-5 h-5 animate-pulse`} />
          <div className={`w-10 h-1 bg-gradient-to-r from-${color}-400 to-${color}-600 rounded-full`}></div>
        </div>
      )}
    </div>
  </div>
);

// Missing import for BookOpen
import { BookOpen } from 'lucide-react';

export default DualCompetition;
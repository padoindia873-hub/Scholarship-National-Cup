import React from 'react'
import { Card, Progress, Tag } from 'antd'
import { 
  GraduationCap, 
  BookOpen, 
  Globe2, 
  Trophy, 
  Medal,
  Award,
  Sparkles,
  Target,
  Brain,
  Music,
  Users,
  Flag,
  Landmark,
  Dumbbell,
  Calculator,
  Globe,
  MapPin,
  Building2,
  Fish,
  Flower2,
  Apple,
  BookMarked,
  Languages,
  PenTool,
  ScrollText,
  Crown,
  Star,
  Rocket,
  Zap
} from 'lucide-react'

// Custom SVG icons (defined before they're used)
const Bird = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    {...props}
  >
    <path d="M3 12h3l3-3 3 3 3-3 3 3h3" />
    <path d="M3 15h3l3-3 3 3 3-3 3 3h3" />
    <path d="M6 9V6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v3" />
  </svg>
)

const PawPrint = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="11" cy="4" r="2" />
    <circle cx="18" cy="8" r="2" />
    <circle cx="20" cy="16" r="2" />
    <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 16.992 4 16a5 5 0 0 1 5-6Z" />
  </svg>
)

// Alternative: Use emoji fallbacks if you don't want custom SVGs
// const Bird = () => <span className="text-lg">🐦</span>
// const PawPrint = () => <span className="text-lg">🐾</span>

const syllabusData = [
  {
    level: 'Qualifying Exam',
    mode: 'Online Based',
    icon: <GraduationCap className="w-6 h-6" />,
    color: 'from-blue-400 to-cyan-500',
    badgeColor: 'blue',
    subjects: [
      { name: 'Flower', icon: <Flower2 className="w-4 h-4" /> },
      { name: 'Vegetable', icon: <Apple className="w-4 h-4" /> },
      { name: 'Fish', icon: <Fish className="w-4 h-4" /> },
      { name: "Math's", icon: <Calculator className="w-4 h-4" /> },
      { name: 'Synonym', icon: <Languages className="w-4 h-4" /> },
      { name: 'Words', icon: <BookMarked className="w-4 h-4" /> },
      { name: 'First Women India', icon: <Users className="w-4 h-4" /> },
      { name: 'First India', icon: <Flag className="w-4 h-4" /> },
      { name: 'First Bengal', icon: <MapPin className="w-4 h-4" /> },
      { name: 'GK', icon: <Globe className="w-4 h-4" /> }
    ],
  },
  {
    level: '1st Level',
    subtitle: 'School College Level',
    mode: 'Online Based',
    icon: <BookOpen className="w-6 h-6" />,
    color: 'from-green-400 to-emerald-500',
    badgeColor: 'green',
    subjects: [
      { name: 'National Flag', icon: <Flag className="w-4 h-4" /> },
      { name: 'National Bird', icon: <Bird className="w-4 h-4" /> }, // Now Bird is defined
      { name: 'National Animal', icon: <PawPrint className="w-4 h-4" /> }, // Now PawPrint is defined
      { name: 'National Anthem', icon: <Music className="w-4 h-4" /> },
      { name: 'Government Projects', icon: <Building2 className="w-4 h-4" /> },
      { name: 'Phrasal Verbs', icon: <PenTool className="w-4 h-4" /> },
      { name: 'Human Body', icon: <Dumbbell className="w-4 h-4" /> },
      { name: 'GK', icon: <Globe className="w-4 h-4" /> }
    ],
  },
  {
    level: '2nd Level',
    subtitle: 'Block Level',
    mode: 'Online Based',
    icon: <Trophy className="w-6 h-6" />,
    color: 'from-purple-400 to-pink-500',
    badgeColor: 'purple',
    subjects: [
      { name: 'All Prime Minister', icon: <Users className="w-4 h-4" /> },
      { name: 'All Chief Minister', icon: <Landmark className="w-4 h-4" /> },
      { name: 'Full Form', icon: <ScrollText className="w-4 h-4" /> },
      { name: 'World First', icon: <Globe2 className="w-4 h-4" /> },
      { name: 'National Agencies', icon: <Building2 className="w-4 h-4" /> },
      { name: 'Pseudonym', icon: <PenTool className="w-4 h-4" /> },
      { name: 'Indian Dances', icon: <Music className="w-4 h-4" /> },
      { name: 'Capital & Currency', icon: <Landmark className="w-4 h-4" /> },
      { name: 'Awards', icon: <Award className="w-4 h-4" /> },
      { name: 'News Agencies', icon: <Globe className="w-4 h-4" /> },
      { name: 'Games', icon: <Target className="w-4 h-4" /> },
      { name: 'GK', icon: <Globe className="w-4 h-4" /> }
    ],
  },
  {
    level: '3rd Level',
    subtitle: 'District Level',
    mode: 'Offline Competition',
    icon: <Medal className="w-6 h-6" />,
    color: 'from-green-400 to-red-500',
    badgeColor: 'green',
    subjects: [
      { name: 'GK', icon: <Globe className="w-4 h-4" /> },
      { name: 'Academy', icon: <GraduationCap className="w-4 h-4" /> }
    ],
  },
  {
    level: '4th Level',
    subtitle: 'State Level',
    mode: 'Offline Competition',
    icon: <Crown className="w-6 h-6" />,
    color: 'from-yellow-400 to-amber-500',
    badgeColor: 'gold',
    subjects: [
      { name: 'All Subjects', icon: <BookOpen className="w-4 h-4" /> },
      { name: 'Advanced GK', icon: <Brain className="w-4 h-4" /> },
      { name: 'Current Affairs', icon: <Zap className="w-4 h-4" /> }
    ],
  },
]

// Subject Card Component
const SubjectCard = ({ subject, index, color }) => {
  // Handle both icon components and string emojis
  const IconComponent = subject.icon
  
  return (
    <div
      className={`
        group relative px-3 py-2.5
        bg-gradient-to-br ${color} 
        text-white rounded-xl 
        font-medium text-xs sm:text-sm 
        transform hover:scale-105 
        transition-all duration-300 
        cursor-pointer
        shadow-lg hover:shadow-xl
        flex items-center gap-2
        overflow-hidden
        min-h-[48px]
      `}
    >
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      
      {/* Shine effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      
      {/* Icon */}
      <span className="relative z-10 flex-shrink-0">
        {IconComponent}
      </span>
      
      {/* Subject name */}
      <span className="relative z-10 truncate">{subject.name}</span>
      
      {/* Index number badge */}
      <span className="absolute top-1 right-2 text-[10px] opacity-30 font-bold">
        #{index + 1}
      </span>
    </div>
  )
}

// Level Progress Component
const LevelProgress = ({ level }) => {
  const getProgress = (level) => {
    switch(level) {
      case 'Qualifying Exam': return 20
      case '1st Level': return 40
      case '2nd Level': return 60
      case '3rd Level': return 80
      case '4th Level': return 100
      default: return 0
    }
  }

  return (
    <div className="w-24">
      <Progress 
        percent={getProgress(level)} 
        showInfo={false} 
        size="small"
        strokeColor={{
          '0%': '#108ee9',
          '100%': '#87d068',
        }}
      />
    </div>
  )
}

const Syllabus = () => {
  // Fix for dynamic Tailwind classes
  const getStatsBarClass = (color) => {
    const colorClasses = {
      blue: 'bg-blue-100 text-blue-600 text-blue-700',
      purple: 'bg-purple-100 text-purple-600 text-purple-700',
      yellow: 'bg-yellow-100 text-yellow-600 text-yellow-700',
    }
    return colorClasses[color] || 'bg-black-100 text-black-600 text-black-700'
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: "linear-gradient(176deg, rgb(72 139 243), rgb(0 68 43 / 59%))" }} >
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header Section */}
      <div className="relative mb-12 text-center">
        {/* Decorative elements */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-32 h-32 bg-gradient-to-r from-yellow-400 to-green-400 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-4">
          <Sparkles className="w-5 h-5 text-yellow-500" />
          <span className="text-sm font-semibold text-black-700">2024 Edition</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
            KK Padho India
          </span>
          <br />
          <span className="text-2xl sm:text-3xl text-blue-700">Global Scholarship Competition</span>
        </h1>

        <div className="flex items-center justify-center gap-2 text-black-600">
          <Rocket className="w-5 h-5 text-purple-500" />
          <p className="text-lg">
            From <span className="font-bold text-blue-600">School</span> to{' '}
            <span className="font-bold text-blue-600">State Level</span>
          </p>
          <Target className="w-5 h-5 text-purple-500" />
        </div>

        <p className="text-black-500 mt-2 italic">
          Unlock Knowledge at Every Step
        </p>

        {/* Stats bar - Fixed dynamic classes */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full shadow-sm">
            <BookOpen className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 font-medium">5 Levels</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full shadow-sm">
            <Brain className="w-4 h-4 text-purple-600" />
            <span className="text-purple-700 font-medium">35+ Subjects</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full shadow-sm">
            <Trophy className="w-4 h-4 text-yellow-600" />
            <span className="text-yellow-700 font-medium">Grand Prize</span>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="relative grid gap-8 lg:grid-cols-2 xl:grid-cols-3" >
        {syllabusData.map((section, index) => (
          <div
            key={index}
            className="group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <Card
              bordered={false}
              className={`
                relative h-full
                bg-white/90 backdrop-blur-sm
                rounded-3xl shadow-xl
                border-2 border-transparent
                hover:border-${section.badgeColor}-400
                transition-all duration-500
                overflow-hidden
                animate-fadeInUp
              `}
              bodyStyle={{ padding: '1.5rem' }}
            style={{ background: "linear-gradient(176deg, rgb(79 69 239 / 59%), rgb(90, 217, 255))" }}>
              {/* Card header with gradient */}
              <div className="relative mb-6">
                {/* Background decoration */}
                <div className={`absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br ${section.color} rounded-full opacity-20 blur-2xl`}></div>
                
                {/* Level badge and icon */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 bg-gradient-to-br ${section.color} rounded-2xl shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-300`}>
                      <span className="text-white">{section.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black-800">{section.level}</h3>
                      {section.subtitle && (
                        <p className="text-sm text-black-500">{section.subtitle}</p>
                      )}
                    </div>
                  </div>
                  
                  {/* Mode tag */}
                  <Tag
                    color={section.mode.includes('Offline') ? 'red' : 'blue'}
                    className="px-3 py-1 rounded-full font-semibold text-xs border-0 shadow-sm"
                  >
                    {section.mode}
                  </Tag>
                </div>

                {/* Progress indicator */}
                <div className="mt-4 flex items-center gap-2">
                  <LevelProgress level={section.level} />
                  <span className="text-xs text-black-400">Level Progress</span>
                </div>
              </div>

              {/* Subjects grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {section.subjects.map((subject, i) => (
                  <SubjectCard 
                    key={i} 
                    subject={subject} 
                    index={i}
                    color={section.color}
                  />
                ))}
              </div>

              {/* Footer stats */}
              <div className="mt-6 pt-4 border-t border-black-100 flex items-center justify-between text-sm text-black-500">
                <div className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  <span>{section.subjects.length} Subjects</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>Level {index + 1}</span>
                </div>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 transform rotate-45 translate-x-8 translate-y-[-8px] bg-gradient-to-r from-yellow-400 to-green-400 px-8 py-1 text-xs text-white font-bold shadow-lg">
                  {index + 1}
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>

      {/* Footer with additional info */}
      <footer className="relative mt-12 text-center">
        <div className="inline-flex flex-wrap items-center justify-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
          <div className="flex items-center gap-2 px-3 py-1 bg-blue-100 rounded-full">
            <GraduationCap className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-blue-700">School to State Level</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-green-100 rounded-full">
            <Trophy className="w-4 h-4 text-green-600" />
            <span className="text-sm text-green-700">Win Exciting Prizes</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-purple-100 rounded-full">
            <Zap className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-purple-700">Test Your Knowledge</span>
          </div>
        </div>

        {/* Tip message */}
        <p className="mt-6 text-sm text-black-400">
          💡 Click on any subject to explore detailed syllabus
        </p>
      </footer>

      {/* Custom animations */}
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
          opacity: 0;
        }
      `}</style>
    </div>
  )
}

export default Syllabus
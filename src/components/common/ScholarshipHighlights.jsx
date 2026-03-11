import React from 'react'
import { Card, Tag, Divider } from 'antd'
import 'antd/dist/reset.css'
import { 
  GraduationCap, 
  Globe2, 
  Trophy, 
  Medal,
  Award,
  Sparkles,
  Target,
  Brain,
  Users,
  Landmark,
  BookOpen,
  Heart,
  Shield,
  Clock,
  Zap,
  Gift,
  Star,
  Rocket,
  CheckCircle2,
  AlertCircle,
  Coins,
  IndianRupee,
  Truck,
  Home,
  Users2,
  Baby,
  School,
  Globe,
  Lock,
  Scale,
  FileText,
  Eye,
  TrendingUp,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Link2
} from 'lucide-react'

const scholarshipPoints = [
  {
    id: 1,
    title: "Revolutionary Scholarship Format",
    icon: <Rocket className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-400",
    text: 'In the Scholarship National Cup you will win one label and one zero will increase in your account. No one has seen or heard such an interesting competition in the world. But only Padho India has been able to organize such an interesting competition.',
    highlight: 'Scholarship National Cup you will win one label and one zero will increase in your account',
    stats: { views: '10K+', participants: '5K+' }
  },
  {
    id: 2,
    title: "Equal Opportunity & Transparency",
    icon: <Users className="w-6 h-6" />,
    color: "from-green-500 to-emerald-400",
    text: 'If your child is a student of class one to class twelve, then in order to maintain the equality of examination, to keep transparency, and to give equal rights to all students, a teacher or guardian must sit with the student at the examination table, and how many levels of online examination You will be able to use also google master in that exam. Even too offline must sit the exam with that associate.',
    highlight: 'a teacher or guardian must sit with the student at the examination table',
    stats: { classes: '1-12', mode: 'Online/Offline' }
  },
  {
    id: 3,
    title: "Multiple Attempts Policy",
    icon: <Clock className="w-6 h-6" />,
    color: "from-purple-500 to-pink-400",
    text: 'Students from any state can appear in this Scholarship National Cup Competition while the state in which the exam will be conducted is for the state. Can take the Exam not once but more than once To participate in the final. There will be no restrictions on anyone here.',
    highlight: 'Can take the Exam not once but more than once To participate in the final.',
    stats: { attempts: 'Unlimited', states: 'All India' }
  },
  {
    id: 4,
    title: "Path to Millionaire",
    icon: <Trophy className="w-6 h-6" />,
    color: "from-yellow-500 to-orange-400",
    text: 'In this competition there will be qualifying exam and two more levels 1) School / College Level and 2) Block Level online exam. If you can qualify these labels online, then all Two levels 1) District Level and 2) National Level will be offline, all the students who come to take the exam offline will be benefited. At least you will become a millionaire and a Crorepati will definitely be a multi-participant. Coming to take the exam offline means opening up his luck',
    highlight: 'all the students who come to take the exam offline will be benefited. At least you will become a millionaire and a Crorepati',
    stats: { prize: '₹1Cr+', levels: '4 Levels' }
  },
  {
    id: 5,
    title: "Universal Participation",
    icon: <Globe2 className="w-6 h-6" />,
    color: "from-indigo-500 to-blue-400",
    text: 'In this Competition students or public any person can take the exam. If the public champion in this test, then he can use the scholarship for his/her children to study abroad, and if his/her Children does not reach the appropriate place, then he/she will not get this scholarship. This scholarship will then be used for others poor brilliant students.',
    highlight: 'If the public champion in this test, then he can use the scholarship for his/her children to study abroad',
    stats: { age: 'All Ages', benefit: 'Study Abroad' }
  },
  {
    id: 6,
    title: "Instant Rewards System",
    icon: <Zap className="w-6 h-6" />,
    color: "from-amber-500 to-yellow-400",
    text: 'This competition is full level Based competition, Online Exam winners of each level must get prize within minutes. If there is no level test then no candidate can claim for the next test. That is why those who are winning in each label are being awarded attractively ... as ordered by the authority of KK Padho India Company.',
    highlight: 'Online Exam winners of each level must get prize within minutes',
    stats: { payout: 'Instant', type: 'Level Based' }
  },
  {
    id: 7,
    title: "Quota Based System",
    icon: <Target className="w-6 h-6" />,
    color: "from-red-500 to-pink-400",
    text: 'The exam will be conducted as long as the quota limit of this exam is available, if the exam percentage decreases due to any reason then all clear will be distributed according to that percentage, otherwise no commitment will be accepted.',
    highlight: 'if the exam percentage decreases due to any reason then all clear will be distributed according to that percentage',
    stats: { quota: 'Limited', fairness: 'Proportional' }
  },
  {
    id: 8,
    title: "Tax Compliant",
    icon: <Scale className="w-6 h-6" />,
    color: "from-teal-500 to-green-400",
    text: 'According to the government rules, all the prize money will be paid to the candidates after deducting the tax. In this case, the plea of any candidate will not be accepted in any way.',
    highlight: 'all the prize money will be paid to the candidates after deducting the tax',
    stats: { compliance: '100%', legal: 'Govt Approved' }
  },
  {
    id: 9,
    title: "Social Impact Initiative",
    icon: <Heart className="w-6 h-6" />,
    color: "from-rose-500 to-pink-400",
    text: 'Half of the prize money available to all National Level candidates for this examination will be given to orphans Sick Children and destitute Children Those who will be used for education and food. In this case, all the recipients of the money can also search the details of the donors from our website',
    highlight: 'National Level candidates for this examination will be given to orphans Sick Children and destitute Children',
    stats: { donation: '50%', beneficiaries: 'Orphans & Sick' }
  },
  {
    id: 10,
    title: "Transparent Fee Structure",
    icon: <IndianRupee className="w-6 h-6" />,
    color: "from-emerald-500 to-teal-400",
    text: 'The entry fee that is being taken in this competition is not for any betting or gambling, this little money is being taken for the traveling, lodging, fooding, online maintenance expenses of the students. No student can make any claim for payment of this amount, no person or guardian can make any kind of claim and if they do it will be completely ignored. No one can take legal aid in any form, every student is willing, healthy and able to pay this money. All students are committed to this. And whoever (KK PADHO INDIA) is accepting this money in India is completely legal.',
    highlight: 'this little money is being taken for the traveling, lodging, fooding, online maintenance expenses of the students',
    stats: { purpose: 'Expenses', legal: 'Fully Compliant' }
  },
]

// Floating decoration component
const FloatingElement = ({ icon, className }) => (
  <div className={`absolute animate-float ${className}`}>
    <div className="text-white/20">{icon}</div>
  </div>
)

const ScholarshipHighlights = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Floating icons */}
        <FloatingElement icon={<GraduationCap size={40} />} className="top-20 left-10" />
        <FloatingElement icon={<Trophy size={50} />} className="bottom-20 right-10" />
        <FloatingElement icon={<BookOpen size={30} />} className="top-40 right-20" />
        <FloatingElement icon={<Heart size={35} />} className="bottom-40 left-20" />
      </div>

      {/* Header Section */}
      <div className="relative max-w-7xl mx-auto mb-16 text-center">
        {/* Title badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-6 border border-blue-200">
          <Sparkles className="w-5 h-5 text-yellow-500" />
          <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Scholarship Program 2024
          </span>
          <Gift className="w-4 h-4 text-purple-500" />
        </div>

        {/* Main title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
            KK Padho India's
          </span>
          <br />
          <span className="text-3xl sm:text-4xl text-gray-800">
            Global Scholarship Competition
          </span>
        </h1>

        {/* Subtitle with animated underline */}
        <div className="relative inline-block">
          <p className="text-xl text-gray-600 mb-2">
            Empowering dreams through{' '}
            <span className="relative">
              <span className="relative z-10 font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                education
              </span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse"></span>
            </span>
            ,{' '}
            <span className="relative">
              <span className="relative z-10 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                support
              </span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full animate-pulse"></span>
            </span>
            , and{' '}
            <span className="relative">
              <span className="relative z-10 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                opportunity
              </span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></span>
            </span>
          </p>
        </div>

        {/* Quick stats */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <div className="px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full shadow-sm border border-blue-100">
            <span className="text-sm font-medium text-gray-700">🎓 10+ Scholarship Rules</span>
          </div>
          <div className="px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full shadow-sm border border-green-100">
            <span className="text-sm font-medium text-gray-700">💰 Up to ₹1 Crore Prize</span>
          </div>
          <div className="px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full shadow-sm border border-purple-100">
            <span className="text-sm font-medium text-gray-700">🌍 Pan India Participation</span>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {scholarshipPoints.map((item, index) => (
            <div
              key={item.id}
              className="group animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card
                bordered={false}
                className="relative h-full bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-transparent hover:border-blue-200"
                bodyStyle={{ padding: '24px' }}
              >
                {/* Gradient background decoration */}
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${item.color} rounded-full filter blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                {/* Top decorative line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`}></div>

                {/* Header with icon */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`relative p-3 bg-gradient-to-br ${item.color} rounded-2xl shadow-lg transform -rotate-3 group-hover:rotate-0 transition-all duration-300`}>
                      <span className="text-white">{item.icon}</span>
                      {/* Glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl filter blur-md opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Tag color="blue" className="text-xs px-2 py-0.5 rounded-full">
                          Rule #{item.id}
                        </Tag>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs text-gray-500">Updated 2024</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Priority badge */}
                  <div className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-lg shadow-sm">
                    <Star className="w-4 h-4 text-white fill-white" />
                  </div>
                </div>

                {/* Main content */}
                <div className="relative mb-4">
                  <div className="absolute -left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
                  <p className="text-gray-700 text-base leading-relaxed pl-4">
                    {item.text.split(item.highlight).map((part, i, arr) => (
                      <React.Fragment key={i}>
                        {part}
                        {i < arr.length - 1 && (
                          <span className="relative inline-block mx-1">
                            <span className="relative z-10 font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                              {item.highlight}
                            </span>
                            <span className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-green-200 to-emerald-200 rounded-full -z-10"></span>
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </p>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  {Object.entries(item.stats).map(([key, value]) => (
                    <div key={key} className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-2 text-center">
                      <span className="text-xs text-gray-500 capitalize">{key}:</span>
                      <span className="block text-sm font-bold text-gray-800">{value}</span>
                    </div>
                  ))}
                </div>

                {/* Footer actions */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-xs text-gray-500">Verified Rule</span>
                  </div>
                  <button className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 transition-colors group/btn">
                    <span>Learn More</span>
                    <span className="transform group-hover/btn:translate-x-1 transition-transform">→</span>
                  </button>
                </div>

                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className={`absolute top-0 right-0 transform rotate-45 translate-x-8 translate-y-[-8px] bg-gradient-to-r ${item.color} px-8 py-1 text-xs text-white font-bold shadow-lg opacity-75`}>
                    #{item.id}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="relative max-w-7xl mx-auto mt-16">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-blue-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Contact info */}
            <div className="text-center md:text-left">
              <h4 className="font-bold text-gray-800 mb-3 flex items-center justify-center md:justify-start gap-2">
                <Phone className="w-4 h-4 text-blue-500" />
                Contact Support
              </h4>
              <p className="text-sm text-gray-600 mb-1">📞 +91 1234567890</p>
              <p className="text-sm text-gray-600">✉️ support@kkpadhoindia.com</p>
            </div>

            {/* Website link */}
            <div className="text-center">
              <h4 className="font-bold text-gray-800 mb-3 flex items-center justify-center gap-2">
                <Globe className="w-4 h-4 text-green-500" />
                Official Website
              </h4>
              <a 
                href="https://www.kkpadhoindia.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg"
              >
                <Link2 className="w-4 h-4" />
                www.kkpadhoindia.com
              </a>
            </div>

            {/* Social impact */}
            <div className="text-center md:text-right">
              <h4 className="font-bold text-gray-800 mb-3 flex items-center justify-center md:justify-end gap-2">
                <Heart className="w-4 h-4 text-red-500" />
                Social Initiative
              </h4>
              <p className="text-sm text-gray-600">Supporting Orphans & Destitute Children</p>
              <p className="text-xs text-gray-400 mt-1">50% Prize Money Donated</p>
            </div>
          </div>

          {/* Divider */}
          <Divider className="my-6 border-gray-200" />

          {/* Bottom note */}
          <div className="text-center">
            <p className="text-xs text-gray-400">
              ⚖️ This scholarship program is fully compliant with Government of India regulations. 
              All prizes are subject to applicable tax deductions.
            </p>
            <p className="text-xs text-gray-400 mt-2">
              © 2024 KK Padho India. All rights reserved. | v2.0.0
            </p>
          </div>
        </div>
      </footer>

      {/* Custom CSS animations */}
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
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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

export default ScholarshipHighlights
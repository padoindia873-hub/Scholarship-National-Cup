import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";

const VideoPlayer = () => {
  const videos = [
    {
      id: 1,
      title: "KK PADHO INDIA SCHOLARSHIP",
      url: "https://www.youtube.com/embed/LBLPIdj3Z5Y",
    },
    {
      id: 2,
      title: "KK PADHO INDIA SCHOLARSHIP",
      url: "https://www.youtube.com/embed/n2GaqHRRUcU",
    },
  ];

  const cards = [
    {
      to: "/DemoQuestions",
      title: "Demo Question",
      icon: "📝",
      description: "Practice with sample questions",
      color: "from-green-500 to-blue-500"
    },
    {
      to: "/AllPrizeExam",
      title: "All Prize List",
      icon: "🏆",
      description: "View all competition prizes",
      color: "from-purple-500 to-green-500"
    },
    {
      to: "/GetMemberShipCard",
      title: "Competition System",
      icon: "⚙️",
      description: "Learn how competition works",
      color: "from-green-500 to-teal-500"
    },
    {
      to: "/StateLevelCandidatesBenefits",
      title: "State Level Benefits",
      icon: "🎯",
      description: "Benefits for state level candidates",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="flex flex-col justify-center items-center p-6 w-full min-h-screen" style={{ background: "linear-gradient(145deg, #052658, #4dffb596)" }}>
      
      {/* Header Section */}
    <div className="bg-blue-900 p-3 sm:p-4 rounded-xl shadow-lg text-center mt-[20px] mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3" style={{ background: "linear-gradient(145deg, rgb(60 70 195), rgb(120 27 243 / 59%))", width: "95%", maxWidth: "70%" }}>
    <img 
        src="https://flagcdn.com/w320/in.png" 
        alt="India Flag" 
        className="w-7 h-5 sm:w-10 sm:h-6 object-cover rounded shadow-md flex-shrink-0 sm:-mt-[60px]"
    />
    <h1 className="text-[16px] sm:text-[20px] md:text-[28px] lg:text-[32px] xl:text-[35px] font-extrabold leading-tight bg-[linear-gradient(90deg,#FF7F00_10%,#FFFFFF_66%,#FFFFFF_66%,#008000_100%)] bg-clip-text text-transparent">
        GLOBAL SCHOLARSHIP COMPETITION  
        <span className="hidden sm:inline"> </span>
        <br className="block sm:hidden" />
        RECOGNITION BY GOVT. OF INDIA
    </h1>
    <img 
        src="https://flagcdn.com/w320/in.png" 
        alt="India Flag" 
        className="w-7 h-5 sm:w-10 sm:h-6 object-cover rounded shadow-md flex-shrink-0 sm:-mt-[60px]"
    />
</div>

      {/* 4 Cards Section - Same Height */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mt-8 animate-slideDown">
        {cards.map((card, index) => (
          <Link key={index} to={card.to} className="block h-full">
            <div className={`group relative bg-gradient-to-br ${card.color} rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden h-full min-h-[220px] flex flex-col`}>
              
              {/* Animated Background */}
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Icon */}
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
                {card.title}
              </h3>
              
              {/* Description */}
              <p className="text-white/80 text-sm flex-grow">
                {card.description}
              </p>
              
              {/* Arrow Indicator */}
              <div className="absolute bottom-4 right-4 text-white/50 group-hover:text-white/100 transform group-hover:translate-x-1 transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              
              {/* Shine Effect */}
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-white/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
            </div>
          </Link>
        ))}
      </div>

      {/* Video Slider */}
      <div className="mt-12 w-full max-w-4xl">
        <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-6">Watch Our Journey</h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="w-full rounded-2xl overflow-hidden"
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id}>
              <div className="flex flex-col justify-center items-center p-4">
                <h3 className="font-bold text-white text-xl sm:text-2xl mb-4 text-center">
                  {video.title}
                </h3>
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    src={video.url}
                    title={video.title}
                    className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-lg"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Footer */}
      <div className="text-center mt-10">
        <p className="text-black/70 text-sm animate-pulse">
          India's Biggest Scholarship Competition
        </p>
      </div>
    </div>
  );
};

export default VideoPlayer;
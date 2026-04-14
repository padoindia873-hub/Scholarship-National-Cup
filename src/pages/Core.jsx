import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import m1 from "../assets/board1.jpg";
import m2 from "../assets/board2.jpg";
import m3 from "../assets/board3.jpg";
import m4 from "../assets/board4.jpg";
import m5 from "../assets/board5.jpg";
import m6 from "../assets/board6.jpg";
import m7 from "../assets/board7.jpg";
import m8 from "../assets/board8.jpg";
import m9 from "../assets/board9.jpg";

const Core = () => {
  const members = [
    {
      name: "Amitaba Chaudhuri (Ex-Army Brigadier)",
      designation: "Secretary",
      photo: m8,
    },
    {
      name: "Bipul Mondal",
      designation: "Vice Secretary",
      photo: m2,
    },
    {
      name: "Pradip Kumar Goswami",
      designation: "President",
      photo: m5,
    },
    {
      name: "Afsasur Rahaman Sardar",
      designation: "Treasurer",
      photo: m3,
    },
    {
      name: "Anirban Saha",
      designation: "Assistant Treasurer",
      photo: m4,
    },
    {
      name: "Jaggu Sahani",
      designation: "Member",
      photo: m6,
    },
    {
      name: "Kiran Mondal",
      designation: "Member",
      photo: m7,
    },
    {
      name: "Swpan Kummer Das (Ex-Army Sub Major)",
      designation: "Member",
      photo: m9,
    },
  ];

  return (
    <div 
      className="min-h-screen py-10 px-5"
      style={{ background: "linear-gradient(176deg, rgb(92, 90, 255), rgb(79 69 239 / 59%))" }}
    >
      {/* Header Section */}
      <div className="text-center mb-12 animate-slideDown">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
          Core Committee Members
        </h1>
        <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto">
          Meet our dedicated core team leading the competition to success
        </p>
        <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Swiper Carousel with Infinite Loop */}
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: { 
            slidesPerView: 2,
            spaceBetween: 20
          },
          768: { 
            slidesPerView: 3,
            spaceBetween: 25
          },
          1024: { 
            slidesPerView: 4,
            spaceBetween: 30
          },
        }}
        className="px-12 pb-12"
      >
        {members.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer group h-full">
              {/* Image with Glow Effect */}
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-white shadow-lg relative z-10"
                />
              </div>
              
              {/* Name */}
              <h2 className="text-lg font-bold text-white mb-1">
                {member.name}
              </h2>
              
              {/* Designation with Badge */}
              <div className="inline-block bg-yellow-400/20 backdrop-blur-sm px-3 py-1 rounded-full">
                <p className="text-sm text-yellow-200 font-semibold">
                  {member.designation}
                </p>
              </div>
              
              {/* Decorative Line */}
              <div className="w-12 h-0.5 bg-yellow-400/50 mx-auto mt-3 rounded-full"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Footer Note */}
      <div className="text-center mt-8">
        <p className="text-white/60 text-sm animate-pulse">
          🔄 Infinite Loop • Swipe or use arrows to navigate • Auto-sliding every 2 seconds 🔄
        </p>
      </div>
    </div>
  );
};

export default Core;
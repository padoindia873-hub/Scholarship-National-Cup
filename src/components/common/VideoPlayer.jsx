import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import FlyingFlag from "./FlyingFlag"; // <-- IMPORT FLAG COMPONENT

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

  return (
    <div className="flex flex-col justify-center items-center p-6 w-full">
      {/* 🇮🇳 Flying Flag Component */}
      <FlyingFlag
        src="https://wallpapercave.com/wp/wp9678253.jpg"
        width={400}
        height={260}
        speed={5}
        amplitude={20}
      />
      <div className="bg-blue-900 p-6 rounded-xl shadow-lg text-center mt-[20px]">
        <h1
          className="
      text-[15px] sm:text-[45px] md:text-[50px]
      font-extrabold leading-tight
      bg-[linear-gradient(90deg,#FF7F00_10%,#FFFFFF_66%,#FFFFFF_66%,#008000_100%)]
      bg-clip-text text-transparent
    "
        >
          SCHOLARSHIP NATIONAL CUP RECOGNITION BY GOVT. OF INDIA
        </h1>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-col gap-4 w-full items-center mt-6">
        <Link
          to="/DemoQuestions"
          className="bg-blue-900 text-lg md:text-2xl font-semibold px-6 py-3 rounded-md shadow-lg hover:scale-105 w-[80%] sm:w-auto text-center flex justify-center"
        >
          <span
            className="text-[20px] sm:text-[45px] md:text-[50px] font-extrabold leading-tight 
      bg-[linear-gradient(90deg,#FF7F00_10%,#FFFFFF_66%,#FFFFFF_66%,#008000_100%)]
    bg-clip-text text-transparent"
          >
            Demo Question
          </span>
        </Link>

        <Link
          to="/prize-list"
          className="bg-blue-900 text-lg md:text-2xl font-semibold px-6 py-3 rounded-md shadow-lg hover:scale-105 w-[80%] sm:w-auto text-center flex justify-center"
        >
          <span
            className="text-[20px] sm:text-[45px] md:text-[50px] font-extrabold leading-tight 
      bg-[linear-gradient(90deg,#FF7F00_10%,#FFFFFF_66%,#FFFFFF_66%,#008000_100%)]
    bg-clip-text text-transparent"
          >
            All Prize List
          </span>
        </Link>

        <Link
          to="/GetMemberShipCard"
          className="bg-blue-900 text-lg md:text-2xl font-semibold px-6 py-3 rounded-md shadow-lg hover:scale-105 w-[80%] sm:w-auto text-center flex justify-center"
        >
          <span
            className="text-[20px] sm:text-[45px] md:text-[50px] font-extrabold leading-tight 
      bg-[linear-gradient(90deg,#FF7F00_10%,#FFFFFF_66%,#FFFFFF_66%,#008000_100%)]
    bg-clip-text text-transparent"
          >
            Competition System
          </span>
        </Link>

        <Link
          to="/StateLevelCandidatesBenefits"
          className="bg-blue-900 text-lg md:text-2xl font-semibold px-6 py-3 rounded-md shadow-lg hover:scale-105 w-[80%] sm:w-auto text-center flex justify-center"
        >
          <span
            className="text-[20px] sm:text-[45px] md:text-[50px] font-extrabold leading-tight 
      bg-[linear-gradient(90deg,#FF7F00_10%,#FFFFFF_66%,#FFFFFF_66%,#008000_100%)]
    bg-clip-text text-transparent"
          >
            State Level Candidates Benefits
          </span>
        </Link>
      </div>

      {/* Video Slider */}
      <div className="mt-8 w-full max-w-3xl">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="w-full"
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id}>
              <div className="flex flex-col justify-center items-center">
                <h3 className="font-bold text-xl sm:text-2xl mb-4 text-center">
                  {video.title}
                </h3>

                <iframe
                  width="640"
                  height="360"
                  src={video.url}
                  title={video.title}
                  className="rounded-2xl shadow-lg w-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default VideoPlayer;

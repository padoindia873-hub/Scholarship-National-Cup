import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom"; // <-- FIXED

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

      {/* Buttons Section */}
      <div className="flex flex-col gap-4 w-full items-center">
        <Link
          to="/DemoQuestions"
          className="text-black bg-green-400 text-lg md:text-2xl font-semibold px-6 py-3 rounded-md shadow-lg hover:scale-105 w-[80%] sm:w-auto text-center"
        >
          Demo Question
        </Link>

        <Link
          to="/prize-list"
          className="text-black bg-blue-400 text-lg md:text-2xl font-semibold px-6 py-3 rounded-md shadow-lg hover:scale-105 w-full sm:w-[310px] text-center"
        >
          All Prize List
        </Link>

        <Link
          to="/GetMemberShipCard"
          className="text-black bg-green-400 text-lg md:text-2xl font-semibold px-6 py-3 rounded-md shadow-lg hover:scale-105 w-full sm:w-[310px] text-center"
        >
          Competition System
        </Link>

         <Link
          to="/StateLevelCandidatesBenefits"
          className="text-black bg-blue-400 text-lg md:text-2xl font-semibold px-6 py-3 rounded-md shadow-lg hover:scale-105 w-full sm:w-[310px] text-center"
        >
          State Level Candidates Benefits
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

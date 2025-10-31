import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const VideoPlayer = () => {
  const videos = [
    {
      id: 1,
      title: "PADHO INDIA SCHOLARSHIP",
      url: "https://www.youtube.com/embed/LBLPIdj3Z5Y",
    },
    {
      id: 2,
      title: "PADHO INDIA SCHOLARSHIP",
      url: "https://www.youtube.com/embed/n2GaqHRRUcU",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center p-6 w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full max-w-3xl"
      >
        {videos.map((video) => (
          <SwiperSlide key={video.id}>
            <div className="flex flex-col justify-center items-center">
              <h3 className="font-bold text-2xl mb-4 text-center">
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
  );
};

export default VideoPlayer;

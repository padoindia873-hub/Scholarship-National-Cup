import React from "react";

const VideoPlayer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 p-6">
      {/* First Video */}
      <div className="flex flex-col justify-center items-center">
        <h3 className="font-bold text-2xl mb-4">PADHO INDIA SCHOLARSHIP</h3>
        <iframe
          width="640"
          height="360"
          src="https://www.youtube.com/embed/LBLPIdj3Z5Y"
          title="YouTube video player"
          className="rounded-2xl shadow-lg"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Second Video */}
      <div className="flex flex-col justify-center items-center">
        <h3 className="font-bold text-2xl mb-4">PADHO INDIA SCHOLARSHIP</h3>
        <iframe
          width="640"
          height="360"
          src="https://www.youtube.com/embed/n2GaqHRRUcU"
          title="YouTube video player"
          className="rounded-2xl shadow-lg"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;

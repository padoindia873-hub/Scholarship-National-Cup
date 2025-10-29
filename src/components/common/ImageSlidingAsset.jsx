import React, { useEffect, useState } from "react";
import images from "./images.js";

const ImageSlidingAsset = () => {
  const [next, setNext] = useState(0);

  const handleNext = () => {
    setNext((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePre = () => {
    setNext((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const slider = setInterval(handleNext, 3000);
    return () => clearInterval(slider);
  }, [next]);

  return (
    <div className="w-full flex flex-col justify-center items-center py-8">
      <div className="relative">
        
        {/* Prev Button */}
        <button
          onClick={handlePre}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
        >
          {"<"}
        </button>

        {/* Image */}
        <img
          src={images[next].src}
          alt="gallery"
          className="rounded-lg shadow-xl w-[500px] h-auto"
        />

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
        >
          {">"}
        </button>

      </div>

      {/* Bottom Dots */}
      <div className="flex space-x-2 mt-5">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setNext(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              next === index ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      <h3 className="font-bold text-xl mt-6">Add Gallery</h3>
    </div>
  );
};

export default ImageSlidingAsset;

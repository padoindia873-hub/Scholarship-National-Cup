import React, { useEffect, useState, useRef } from "react";
import images from "./images.js";

const ImageSlidingAsset = () => {
  const [currentIndex, setCurrentIndex] = useState(2); // Start with middle card
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const containerRef = useRef(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePre = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto slide
  useEffect(() => {
    const slider = setInterval(() => {
      if (!isDragging) {
        handleNext();
      }
    }, 3000);
    return () => clearInterval(slider);
  }, [isDragging, currentIndex]);

  // Get card size based on position
  const getCardStyle = (index) => {
    let diff = (index - currentIndex + images.length) % images.length;
    if (diff > images.length / 2) diff = diff - images.length;
    
    const absDiff = Math.abs(diff);
    
    let scale = 1;
    let opacity = 1;
    let zIndex = 10;
    let translateX = 0;
    let translateY = 0;
    let blur = "blur(0px)";
    
    if (absDiff === 0) {
      // Center card - Biggest
      scale = 1.2;
      zIndex = 30;
      opacity = 1;
      translateX = 0;
      translateY = 0;
      blur = "blur(0px)";
    } else if (absDiff === 1) {
      // Adjacent cards - Medium
      scale = 0.85;
      zIndex = 20;
      opacity = 0.7;
      translateX = diff > 0 ? 180 : -180;
      translateY = 20;
      blur = "blur(1px)";
    } else {
      // Far cards - Small
      scale = 0.6;
      zIndex = 10;
      opacity = 0.4;
      translateX = diff > 0 ? 320 : -320;
      translateY = 50;
      blur = "blur(2px)";
    }
    
    return {
      transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`,
      opacity,
      zIndex,
      transition: "all 0.5s cubic-bezier(0.4, 0.2, 0.2, 1)",
      filter: blur,
      cursor: absDiff === 0 ? "default" : "pointer",
    };
  };

  // Swipe handlers
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - startX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handlePre();
      } else {
        handleNext();
      }
      setIsDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleMouseDown = (e) => {
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handlePre();
      } else {
        handleNext();
      }
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div 
      className="w-full min-h-screen flex flex-col justify-center items-center py-8 overflow-hidden"
      style={{ background: "linear-gradient(176deg, rgb(92, 90, 255), rgb(79 69 239 / 59%))" }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-block bg-white/10 backdrop-blur-md rounded-2xl px-8 py-4 shadow-2xl">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Media Gallery</h1>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mt-2 rounded-full"></div>
        </div>
      </div>

      {/* Coverflow Carousel */}
      <div className="relative flex items-center justify-center w-full min-h-[500px]">
        
        {/* Prev Button */}
        <button
          onClick={handlePre}
          className="absolute left-4 z-40 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
        >
          {"<"}
        </button>

        {/* Cards Container */}
        <div className="relative flex items-center justify-center w-full h-[450px]">
          {images.map((image, index) => {
            const style = getCardStyle(index);
            const isCenter = Math.abs((index - currentIndex + images.length) % images.length) === 0;
            
            return (
              <div
                key={index}
                className="absolute transition-all duration-500"
                style={style}
                onClick={() => {
                  if (!isCenter) {
                    setCurrentIndex(index);
                  }
                }}
              >
                <div className={`bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-1 shadow-2xl ${
                  isCenter ? 'ring-4 ring-yellow-400' : ''
                }`}>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt || `Gallery ${index + 1}`}
                      className={`w-80 h-64 object-cover rounded-xl transition-all duration-300 ${
                        isCenter ? 'scale-100' : ''
                      }`}
                    />
                    <div className="p-3 text-center">
                      <p className="text-white font-semibold text-sm">
                        {image.alt || `Image ${index + 1}`}
                      </p>
                      {isCenter && (
                        <p className="text-yellow-300 text-xs mt-1">
                          ✨ Featured ✨
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-4 z-40 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
        >
          {">"}
        </button>
      </div>

      {/* Bottom Dots */}
      <div className="flex space-x-2 mt-8">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
              currentIndex === index ? "bg-yellow-400 w-8" : "bg-white/50 w-2 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Title */}
      <h3 className="font-bold text-2xl text-white mt-6">Add Gallery</h3>
 

      {/* Footer */}
      <div className="text-center mt-8">
        <p className="text-black/60 text-sm">
          India's Biggest Scholarship Competition
        </p>
      </div>
    </div>
  );
};

export default ImageSlidingAsset;
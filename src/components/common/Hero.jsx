import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/hero1.jpg";
import cupImage from "../../assets/cups.png";

const Hero = () => {
  return (
    <div
      className="relative min-h-screen sm:h-[120vh] md:h-[140vh] lg:h-[160vh] bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">
          {/* Headings */}
          <h1 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold text-green-300 mb-2 sm:mb-3">
            PADHO INDIA PRESENTS
          </h1>
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-yellow-300 mb-4 leading-tight">
            NATIONAL SCHOLARSHIP CUP
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-xs sm:text-sm md:text-lg lg:text-xl mb-6 leading-relaxed font-medium">
            159 Candidates Will Become{" "}
            <span className="text-yellow-400 font-semibold">Crorepatis</span>.
            <br className="hidden sm:block" />
            Over 2 Lakh Students will get{" "}
            <span className="text-blue-400 font-semibold">Scholarships</span>...
            <br className="hidden sm:block" />
            And Millions will build their careers through{" "}
            <span className="text-green-400 font-semibold">Higher Studies</span>.
          </p>

          {/* Cup Image + Text */}
          <div className="flex flex-col items-center mb-6">
            <img
              src={cupImage}
              alt="Cup"
              className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto mb-4"
            />
            <h1 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold text-green-300 mb-6">
              1Kg Pure Gold Trophy
            </h1>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
              <Link
                to="/register"
                className="text-black bg-yellow-400 text-base sm:text-lg md:text-2xl font-semibold px-6 py-3 rounded-md shadow-lg transition transform hover:scale-105 animate-blinkYellow w-[80%] sm:w-auto text-center"
              >
                Registration Now Open
              </Link>

              <Link
                to="/GetMemberShipCard"
                className="text-black bg-blue-400 text-base sm:text-lg md:text-2xl font-semibold px-6 py-3 rounded-md shadow-lg transition transform hover:scale-105 animate-blinkBlue w-[80%] sm:w-auto text-center"
              >
                Get Competition Exam
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

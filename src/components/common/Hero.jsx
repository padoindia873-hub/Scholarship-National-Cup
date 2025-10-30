import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/hero1.jpg";
import cupImage from "../../assets/cups.png";

const Hero = () => {
  return (
    <div
      className="relative h-[165vh] bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center">
        <div className="text-center px-6 md:px-12 lg:px-20 max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-green-300 leading-relaxed mb-4">
            PADHO INDIA PRESENTS
          </h1>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-yellow-300 leading-relaxed mb-4 text-center whitespace-nowrap">
            NATIONAL SCHOLARSHIP CUP
          </h1>
          {/* Updated Description */}
          <p className="text-gray-300 text-sm md:text-lg lg:text-xl mb-4 leading-relaxed font-medium">
            159 Candidates Will Become{" "}
            <span className="text-yellow-400 font-semibold">Crorepatis</span>.
            <br />
            Over 2 Lakh Students will get{" "}
            <span className="text-blue-400 font-semibold">Scholarship</span>...
            <br />
            And Millions of Students will make career by{" "}
            <span className="text-green-400 font-semibold">Higher study</span>.
          </p>

          {/* Cup Image and Text */}
          <div className="mb-6 flex flex-col items-center">
            <img
              src={cupImage}
              alt="Cup"
              className="w-[200px] h-auto object-contain mb-2"
            />
            {/* <span className="text-white px-6 py-2 font-bold text-lg animate-blinkBg">
              Scholarship Cup
            </span> */}
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-green-300 leading-relaxed mb-4">
              1Kg Pure gold trophy
            </h1>
            <Link
              to="/register"
              className="mt-4 mb-8 inline-block text-black text-[60px] font-semibold px-6 py-3 shadow-lg transition duration-300 animate-blinkYellow"
            >
              Registration Now Open
            </Link>
             <Link
              to="/GetMemberShipCard"
              className="mt-4 mb-8 inline-block text-black text-[60px] font-semibold px-6 py-3 shadow-lg transition duration-300 animate-blinkBlue"
            >
              Get Competition Exam
            </Link>
          </div>
          {/*  */}

          {/* Buttons */}
            {/* <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
              <Link to="/prize-list" className="w-full sm:w-auto">
                <button className="min-w-[20rem] text-black text-xs md:text-base px-6 py-3 rounded-md font-semibold shadow-lg animate-blinkYellow hover:scale-105 transition-transform duration-300">
                  Prize List
                </button>
              </Link>

              <Link to="/register" className="w-full sm:w-auto">
                <button className="min-w-[20rem] text-white text-sm md:text-base px-6 py-3 rounded-md font-semibold shadow-lg animate-blinkBlue hover:scale-105 transition-transform duration-300">
                  Competitor Registration
                </button>
              </Link>
            </div> */}
          {/* <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <Link to="/register" className="w-full sm:w-auto">
              <button className="min-w-[20rem] text-white text-sm md:text-base px-6 py-3 rounded-md font-semibold shadow-lg animate-blinkBlue hover:scale-105 transition-transform duration-300">
                Competition System
              </button>
            </Link>

            <button className="min-w-[20rem] text-black text-sm md:text-base px-6 py-3 rounded-md font-semibold shadow-lg animate-blinkYellow hover:scale-105 transition-transform duration-300">
              Level Details
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;

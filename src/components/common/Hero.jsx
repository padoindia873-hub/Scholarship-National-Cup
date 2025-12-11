import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/hero1.jpg";
import cupImage from "../../assets/cups.png";
import FlyingFlag from "./FlyingFlag"; // <-- IMPORT FLAG COMPONENT

const Hero = () => {
  return (
    <div
      className="relative h-[1050px] bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">
          <FlyingFlag
            src="https://wallpapercave.com/wp/wp9678253.jpg"
            width={400}
            height={260}
            speed={5}
            amplitude={20}
          />
          {/* Headings */}
          <h1
            className="
    text-[20px] 
    sm:text-[45px] 
    md:text-[50px] 
    lg:text-[35px] 
    font-semibold 
    mb-2 sm:mb-3

      sm:text-[45px] md:text-[50px]
      font-extrabold leading-tight
      bg-[linear-gradient(90deg,#FF7F00_10%,#FFFFFF_66%,#4CBD0BFF_66%,#008000_100%)]
      bg-clip-text text-transparent
  "
          >
            KK PADHO INDIA PRESENTS
          </h1>

          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-yellow-300 mb-4 leading-tight">
            SCHOLARSHIP NATIONAL CUP
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-xs sm:text-sm md:text-lg lg:text-xl mb-6 leading-relaxed font-medium">
            636 Candidates Will Become{" "}
            <span className="text-yellow-400 font-semibold">
              Crorepatis in this Competition
            </span>
            .
            {/* <br className="hidden sm:block" />
            Over 2 Lakh Students will get{" "}
            <span className="text-blue-400 font-semibold">Scholarships</span>...
            <br className="hidden sm:block" />
            And Millions will build their careers through{" "}
            <span className="text-green-400 font-semibold">Higher Studies</span>
            . */}
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
            <h1
              className="text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold text-yellow-300 mb-6 animate-blink"
              style={{ fontSize: "45px" }}
            >
              636 Crorepatis
            </h1>
            <h1
              className="font-semibold text-green-300 mb-6"
              style={{ fontSize: "30px" }}
            >
              Recognition By Govt. Of India
            </h1>
            {/* <h1 className="text-base sm:text-lg md:text-5xl lg:text-5xl font-semibold text-green-300 mb-6">
              Recognition By Govt. Of India
            </h1> */}
            {/* Call to Action Buttons */}
            <div className="mt-10 text-[100px] flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
              {/* <Link
                to="/BuyRollNumber"
                className="text-black bg-yellow-400 text-base sm:text-lg md:text-2xl font-semibold px-6 py-3 rounded-md shadow-lg transition transform hover:scale-105 animate-blinkYellow w-[80%] sm:w-auto text-center"
              >
                Buy Roll Number
              </Link> */}
              {/* <Link
                to="/DemoQuestions"
                className="text-black bg-yellow-400 text-base sm:text-lg md:text-2xl font-semibold px-6 py-3 rounded-md shadow-lg transition transform hover:scale-105 animate-blinkYellow w-[80%] sm:w-auto text-center"
              >
                Demo Question
              </Link>
              <Link
                to="/prize-list"
                className="text-black bg-blue-400 text-base sm:text-lg md:text-2xl font-semibold px-6 py-3 rounded-md shadow-lg transition transform hover:scale-105 animate-blinkBlue w-full sm:w-[310px] text-center"
              >
                All Prize List
              </Link>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
              <Link
                to="/GetMemberShipCard"
                className="text-black bg-yellow-400 text-base sm:text-lg md:text-2xl font-semibold px-6 py-3 rounded-md shadow-lg transition transform hover:scale-105 animate-blinkYellow w-full sm:w-[310px] text-center"
              >
                Competition System
              </Link> */}
              {/* <Link
                to="/GetCompetitionExam"
                className="text-black bg-blue-400 text-base sm:text-lg md:text-2xl font-semibold px-6 py-3 rounded-md shadow-lg transition transform hover:scale-105 w-[80%] sm:w-auto text-center animate-blink"
                style={{ fontSize: "40px" }}
              >
                Get Exam
              </Link> */}
              <Link
                to="/BuyRoll"
                className="text-black bg-green-300 text-base sm:text-lg md:text-2xl font-semibold px-6 py-3 rounded-md shadow-lg transition transform hover:scale-105 w-[80%] sm:w-auto text-center animate-blink"
                style={{ fontSize: "40px" }}
              >
                Get Exam
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

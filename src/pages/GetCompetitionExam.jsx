import React from "react";

const GetCompetitionExam = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center overflow-hidden">
      {/* ===== SECTION 1: Learn to Code ===== */}
      <div className="relative flex flex-col items-center justify-center min-h-screen w-full bg-[#2b2f3a] text-white p-6">
        <div className="z-10">
          <h1 className="text-4xl font-bold mb-3">Scholarship National Cup </h1>
          <p className="text-yellow-400 mb-10 text-lg">
          159 Crorepatis Will Become in a Competition  
          </p>

          {/* Search bar */}
          <div className="flex w-full max-w-md bg-white rounded-full overflow-hidden shadow-lg mb-8">
            <input
              type="text"
              placeholder="Search our Account"
              className="flex-1 px-5 py-3 text-gray-700 focus:outline-none"
            />
            <button className="bg-green-500 hover:bg-green-600 px-5 flex items-center justify-center transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="white"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.2-5.2M10.8 18a7.2 7.2 0 110-14.4 7.2 7.2 0 010 14.4z"
                />
              </svg>
            </button>
          </div>

          <a
            href="#"
            className="text-white font-semibold underline hover:text-yellow-400 transition"
          >
            World's Number One Competition
          </a>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-[#d7f5d8] rounded-t-[100%]"></div>
      </div>

      {/* ===== SECTION 2: HTML Section ===== */}
      <div className="flex flex-col items-center justify-center min-h-screen w-full bg-[#d8ede1] text-center p-6">
        <h1 className="text-5xl font-extrabold text-black mb-4">Qualifying Exam</h1>
        <p className="text-gray-800 text-lg mb-10">
          Chance For School And Collage Level (Online)
        </p>

        <div className="flex flex-col gap-4 w-full max-w-xs">
          <button className="bg-green-500 text-white font-semibold py-3 rounded-full hover:bg-green-600 transition">
            Input Pin Number
          </button>

          <button className="bg-[#fff2a8] text-black font-semibold py-3 rounded-full hover:bg-[#ffe97a] transition">
            Exam Date And Time
          </button>

          <button className="bg-[#2b2f3a] text-white font-semibold py-3 rounded-full hover:bg-[#3d424e] transition">
           Won Result
          </button>

          <button className="bg-[#fbc8c8] text-black font-semibold py-3 rounded-full hover:bg-[#ffb3b3] transition">
            Group Result
          </button>
        </div>
      </div>
      {/* ===== SECTION 3: HTML Section ===== */}
      <div className="flex flex-col items-center justify-center min-h-screen w-full bg-[#ffe97a] text-center p-6">
        <h1 className="text-5xl font-extrabold text-black mb-4">School And Collage Level</h1>
        <p className="text-gray-800 text-lg mb-10">
        Chance For Block Level (Online)

        </p>

        
        <div className="flex flex-col gap-4 w-full max-w-xs">
          <button className="bg-green-500 text-white font-semibold py-3 rounded-full hover:bg-green-600 transition">
           All Prize List
          </button>

          <button className="bg-[#fff2a8] text-black font-semibold py-3 rounded-full hover:bg-[#ffe97a] transition">
            Exam Date And Time
          </button>

          <button className="bg-[#2b2f3a] text-white font-semibold py-3 rounded-full hover:bg-[#3d424e] transition">
           Won Result
          </button>

          <button className="bg-[#fbc8c8] text-black font-semibold py-3 rounded-full hover:bg-[#ffb3b3] transition">
            Group Result
          </button>

          <button className="bg-green-500 text-white font-semibold py-3 rounded-full hover:bg-green-600 transition">
            Wining Prize Amount
          </button>
           <button className="bg-[#2b2f3a] text-white font-semibold py-3 rounded-full hover:bg-[#3d424e] transition">
            Withdraw Amount
          </button>
        </div>
      </div>
       {/* ===== SECTION 4: HTML Section ===== */}
      <div className="flex flex-col items-center justify-center min-h-screen w-full bg-[#C9FFB3FF] text-center p-6">
        <h1 className="text-5xl font-extrabold text-black mb-4">Block Level</h1>
        <p className="text-gray-800 text-lg mb-10">
          Chance For District Level (Online)
        </p>

    <div className="flex flex-col gap-4 w-full max-w-xs">
          <button className="bg-green-500 text-white font-semibold py-3 rounded-full hover:bg-green-600 transition">
           All Prize List
          </button>

          <button className="bg-[#fff2a8] text-black font-semibold py-3 rounded-full hover:bg-[#ffe97a] transition">
            Exam Date And Time
          </button>

          <button className="bg-[#2b2f3a] text-white font-semibold py-3 rounded-full hover:bg-[#3d424e] transition">
           Won Result
          </button>

          <button className="bg-[#fbc8c8] text-black font-semibold py-3 rounded-full hover:bg-[#ffb3b3] transition">
            Group Result
          </button>

          <button className="bg-green-500 text-white font-semibold py-3 rounded-full hover:bg-green-600 transition">
            Wining Prize Amount
          </button>
           <button className="bg-[#2b2f3a] text-white font-semibold py-3 rounded-full hover:bg-[#3d424e] transition">
            Withdraw Amount
          </button>
        </div>
      </div>
       {/* ===== SECTION 5: HTML Section ===== */}
      <div className="flex flex-col items-center justify-center min-h-screen w-full bg-[#ffb3b3] text-center p-6">
        <h1 className="text-5xl font-extrabold text-black mb-4">District Level (Offline)</h1>
        <p className="text-gray-800 text-lg mb-10">
         Chance For National Level
        </p>
<div className="flex flex-col gap-4 w-full max-w-xs">
          <button className="bg-green-500 text-white font-semibold py-3 rounded-full hover:bg-green-600 transition">
           All Prize List
          </button>

          <button className="bg-[#fff2a8] text-black font-semibold py-3 rounded-full hover:bg-[#ffe97a] transition">
            Exam Date And Time
          </button>

          <button className="bg-[#2b2f3a] text-white font-semibold py-3 rounded-full hover:bg-[#3d424e] transition">
           Won Result
          </button>

          <button className="bg-[#fbc8c8] text-black font-semibold py-3 rounded-full hover:bg-[#ffb3b3] transition">
            Group Result
          </button>

          <button className="bg-green-500 text-white font-semibold py-3 rounded-full hover:bg-green-600 transition">
            Wining Prize Amount
          </button>
           <button className="bg-[#2b2f3a] text-white font-semibold py-3 rounded-full hover:bg-[#3d424e] transition">
            Withdraw Amount
          </button>
           <button className="bg-Pink-500 text-white font-semibold py-3 rounded-full hover:bg-green-600 transition">
           Exam Venue
          </button>
           <button className="bg-blue-500 text-white font-semibold py-3 rounded-full hover:bg-blue-600 transition">
           Chief Guest List
           </button>
        </div>
      </div>
        {/* ===== SECTION 6: HTML Section ===== */}
      <div className="flex flex-col items-center justify-center min-h-screen w-full bg-[#C9FFB3FF] text-center p-6">
        <h1 className="text-5xl font-extrabold text-black mb-4">National Level (Offline)</h1>
        <p className="text-gray-800 text-lg mb-10">
          Chance For Scholarship Asia Cup 
        </p>

        <div className="flex flex-col gap-4 w-full max-w-xs">
            <button className="bg-green-500 text-white font-semibold py-3 rounded-full hover:bg-green-600 transition">
           All Prize List
          </button>

          <button className="bg-[#fff2a8] text-black font-semibold py-3 rounded-full hover:bg-[#ffe97a] transition">
            Exam Date And Time
          </button>

          <button className="bg-[#2b2f3a] text-white font-semibold py-3 rounded-full hover:bg-[#3d424e] transition">
           Won Result
          </button>

          <button className="bg-[#fbc8c8] text-black font-semibold py-3 rounded-full hover:bg-[#ffb3b3] transition">
            Group Result
          </button>

          <button className="bg-green-500 text-white font-semibold py-3 rounded-full hover:bg-green-600 transition">
            Wining Prize Amount
          </button>
           <button className="bg-[#2b2f3a] text-white font-semibold py-3 rounded-full hover:bg-[#3d424e] transition">
            Withdraw Amount
          </button>
           <button className="bg-Pink-500 text-white font-semibold py-3 rounded-full hover:bg-green-600 transition">
           Exam Venue
          </button>
          <button className="bg-blue-500 text-white font-semibold py-3 rounded-full hover:bg-blue-600 transition">
           Chief Guest List
           </button>
        </div>
      </div>

      {/* ===== SECTION 7: Programming Languages Section ===== */}
<div className="flex flex-col items-center justify-center min-h-screen w-full bg-[#2b2f3a] text-center p-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
    {/* Card 1: PHP */}
    <div className="bg-[#fbc8c8] rounded-lg shadow-lg text-center p-10">
      <h1 className="text-4xl font-extrabold text-black mb-4">Participate Schools List </h1>
      <p className="text-gray-800 text-lg mb-8">
       Chance Every State Schools And 50 Bengal Schools      </p>
      <button className="bg-[#2b2f3a] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#3d424e] transition">
        Click Hear
      </button>
    </div>

    {/* Card 2: jQuery */}
    <div className="bg-[#fff2a8] rounded-lg shadow-lg text-center p-10">
      <h1 className="text-4xl font-extrabold text-black mb-4">Event Details</h1>
      <p className="text-gray-800 text-lg mb-8">
        About All Events 
      </p>
      <button className="bg-[#2b2f3a] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#3d424e] transition">
        Click Hear
      </button>
    </div>

    {/* Card 3: Java */}
    <div className="bg-[#fffaf5] rounded-lg shadow-lg text-center p-10">
      <h1 className="text-4xl font-extrabold text-black mb-4">Spacial Foreign Guest</h1>
      <p className="text-gray-800 text-lg mb-8">
       Country Details
      </p>
      <button className="bg-[#2b2f3a] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#3d424e] transition">
        Click Hear
      </button>
    </div>

    {/* Card 4: C++ */}
    <div className="bg-[#d8ede1] rounded-lg shadow-lg text-center p-10">
      <h1 className="text-4xl font-extrabold text-black mb-4">Gift Candidates Details</h1>
      <p className="text-gray-800 text-lg mb-8">
        Spacial Gift
      </p>
      <button className="bg-[#2b2f3a] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#3d424e] transition">
        Click Hear
      </button>
    </div>

   
  </div>
</div>

    </div>
  );
};

export default GetCompetitionExam;

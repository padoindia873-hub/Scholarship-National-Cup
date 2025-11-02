import React from "react";

const GetCompetitionExam = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center overflow-hidden">
      {/* ===== SECTION 1: Learn to Code ===== */}
      <div className="relative flex flex-col items-center justify-center min-h-screen w-full bg-[#2b2f3a] text-white p-6">
        <div className="z-10">
          <h1 className="text-4xl font-bold mb-3">Learn to Code</h1>
          <p className="text-yellow-400 mb-10 text-lg">
            With the world's largest web developer site.
          </p>

          {/* Search bar */}
          <div className="flex w-full max-w-md bg-white rounded-full overflow-hidden shadow-lg mb-8">
            <input
              type="text"
              placeholder="Search our tutorials, e.g. HTML"
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
            Not Sure Where To Begin?
          </a>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-[#d7f5d8] rounded-t-[100%]"></div>
      </div>

      {/* ===== SECTION 2: HTML Section ===== */}
      <div className="flex flex-col items-center justify-center min-h-screen w-full bg-[#d8ede1] text-center p-6">
        <h1 className="text-5xl font-extrabold text-black mb-4">HTML</h1>
        <p className="text-gray-800 text-lg mb-10">
          The language for building web pages
        </p>

        <div className="flex flex-col gap-4 w-full max-w-xs">
          <button className="bg-green-500 text-white font-semibold py-3 rounded-full hover:bg-green-600 transition">
            Learn HTML
          </button>

          <button className="bg-[#fff2a8] text-black font-semibold py-3 rounded-full hover:bg-[#ffe97a] transition">
            Video Tutorial
          </button>

          <button className="bg-[#2b2f3a] text-white font-semibold py-3 rounded-full hover:bg-[#3d424e] transition">
            HTML Reference
          </button>

          <button className="bg-[#fbc8c8] text-black font-semibold py-3 rounded-full hover:bg-[#ffb3b3] transition">
            Get Certified
          </button>
        </div>
      </div>
      {/* ===== SECTION 3: HTML Section ===== */}
      <div className="flex flex-col items-center justify-center min-h-screen w-full bg-[#ffe97a] text-center p-6">
        <h1 className="text-5xl font-extrabold text-black mb-4">CSS</h1>
        <p className="text-gray-800 text-lg mb-10">
          The language for building web pages
        </p>

        <div className="flex flex-col gap-4 w-full max-w-xs">
          <button className="bg-green-500 text-white font-semibold py-3 rounded-full hover:bg-green-600 transition">
            Learn HTML
          </button>

          <button className="bg-[#fff2a8] text-black font-semibold py-3 rounded-full hover:bg-[#ffe97a] transition">
            Video Tutorial
          </button>

          <button className="bg-[#2b2f3a] text-white font-semibold py-3 rounded-full hover:bg-[#3d424e] transition">
            HTML Reference
          </button>

          <button className="bg-[#fbc8c8] text-black font-semibold py-3 rounded-full hover:bg-[#ffb3b3] transition">
            Get Certified
          </button>
        </div>
      </div>
       {/* ===== SECTION 4: HTML Section ===== */}
      <div className="flex flex-col items-center justify-center min-h-screen w-full bg-[#3d424e] text-center p-6">
        <h1 className="text-5xl font-extrabold text-black mb-4">Python</h1>
        <p className="text-gray-800 text-lg mb-10">
          The language for building web pages
        </p>

        <div className="flex flex-col gap-4 w-full max-w-xs">
          <button className="bg-green-500 text-white font-semibold py-3 rounded-full hover:bg-green-600 transition">
            Learn HTML
          </button>

          <button className="bg-[#fff2a8] text-black font-semibold py-3 rounded-full hover:bg-[#ffe97a] transition">
            Video Tutorial
          </button>

          <button className="bg-[#2b2f3a] text-white font-semibold py-3 rounded-full hover:bg-[#3d424e] transition">
            HTML Reference
          </button>

          <button className="bg-[#fbc8c8] text-black font-semibold py-3 rounded-full hover:bg-[#ffb3b3] transition">
            Get Certified
          </button>
        </div>
      </div>
       {/* ===== SECTION 5: HTML Section ===== */}
      <div className="flex flex-col items-center justify-center min-h-screen w-full bg-[#ffb3b3] text-center p-6">
        <h1 className="text-5xl font-extrabold text-black mb-4">JavaScript</h1>
        <p className="text-gray-800 text-lg mb-10">
          The language for building web pages
        </p>

        <div className="flex flex-col gap-4 w-full max-w-xs">
          <button className="bg-green-500 text-white font-semibold py-3 rounded-full hover:bg-green-600 transition">
            Learn HTML
          </button>

          <button className="bg-[#fff2a8] text-black font-semibold py-3 rounded-full hover:bg-[#ffe97a] transition">
            Video Tutorial
          </button>

          <button className="bg-[#2b2f3a] text-white font-semibold py-3 rounded-full hover:bg-[#3d424e] transition">
            HTML Reference
          </button>

          <button className="bg-[#fbc8c8] text-black font-semibold py-3 rounded-full hover:bg-[#ffb3b3] transition">
            Get Certified
          </button>
        </div>
      </div>
        {/* ===== SECTION 6: HTML Section ===== */}
      <div className="flex flex-col items-center justify-center min-h-screen w-full bg-[#C9FFB3FF] text-center p-6">
        <h1 className="text-5xl font-extrabold text-black mb-4">SQL</h1>
        <p className="text-gray-800 text-lg mb-10">
          The language for building web pages
        </p>

        <div className="flex flex-col gap-4 w-full max-w-xs">
          <button className="bg-green-500 text-white font-semibold py-3 rounded-full hover:bg-green-600 transition">
            Learn HTML
          </button>

          <button className="bg-[#fff2a8] text-black font-semibold py-3 rounded-full hover:bg-[#ffe97a] transition">
            Video Tutorial
          </button>

          <button className="bg-[#2b2f3a] text-white font-semibold py-3 rounded-full hover:bg-[#3d424e] transition">
            HTML Reference
          </button>

          <button className="bg-[#fbc8c8] text-black font-semibold py-3 rounded-full hover:bg-[#ffb3b3] transition">
            Get Certified
          </button>
        </div>
      </div>

      {/* ===== SECTION 7: Programming Languages Section ===== */}
<div className="flex flex-col items-center justify-center min-h-screen w-full bg-[#2b2f3a] text-center p-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
    {/* Card 1: PHP */}
    <div className="bg-[#fbc8c8] rounded-lg shadow-lg text-center p-10">
      <h1 className="text-4xl font-extrabold text-black mb-4">PHP</h1>
      <p className="text-gray-800 text-lg mb-8">
        A web server programming language
      </p>
      <button className="bg-[#2b2f3a] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#3d424e] transition">
        Learn PHP
      </button>
    </div>

    {/* Card 2: jQuery */}
    <div className="bg-[#fff2a8] rounded-lg shadow-lg text-center p-10">
      <h1 className="text-4xl font-extrabold text-black mb-4">jQuery</h1>
      <p className="text-gray-800 text-lg mb-8">
        A JS library for developing web pages
      </p>
      <button className="bg-[#2b2f3a] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#3d424e] transition">
        Learn jQuery
      </button>
    </div>

    {/* Card 3: Java */}
    <div className="bg-[#fffaf5] rounded-lg shadow-lg text-center p-10">
      <h1 className="text-4xl font-extrabold text-black mb-4">Java</h1>
      <p className="text-gray-800 text-lg mb-8">
        A programming language
      </p>
      <button className="bg-[#2b2f3a] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#3d424e] transition">
        Learn Java
      </button>
    </div>

    {/* Card 4: C++ */}
    <div className="bg-[#d8ede1] rounded-lg shadow-lg text-center p-10">
      <h1 className="text-4xl font-extrabold text-black mb-4">C++</h1>
      <p className="text-gray-800 text-lg mb-8">
        A programming language
      </p>
      <button className="bg-[#2b2f3a] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#3d424e] transition">
        Learn C++
      </button>
    </div>

    {/* Card 5: W3.CSS */}
    <div className="bg-[#b8e6e1] rounded-lg shadow-lg text-center p-10">
      <h1 className="text-4xl font-extrabold text-black mb-4">W3.CSS</h1>
      <p className="text-gray-800 text-lg mb-8">
        A CSS framework for faster responsive web pages
      </p>
      <button className="bg-[#2b2f3a] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#3d424e] transition">
        Learn W3.CSS
      </button>
    </div>

    {/* Card 6: Bootstrap */}
    <div className="bg-[#e9e9e9] rounded-lg shadow-lg text-center p-10">
      <h1 className="text-4xl font-extrabold text-black mb-4">Bootstrap</h1>
      <p className="text-gray-800 text-lg mb-8">
        A CSS framework for designing better web pages
      </p>
      <button className="bg-[#2b2f3a] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#3d424e] transition">
        Learn Bootstrap
      </button>
    </div>
  </div>
</div>

    </div>
  );
};

export default GetCompetitionExam;

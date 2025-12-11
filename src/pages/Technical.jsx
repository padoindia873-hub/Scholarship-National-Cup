
import React from 'react';
import m1 from "../assets/board1.jpg";
import m2 from "../assets/board2.jpg";
import m3 from "../assets/board3.jpg";
import m4 from "../assets/board4.jpg";
import m5 from "../assets/board5.jpg";
import m6 from "../assets/board6.jpg";
import m7 from "../assets/board7.jpg"
import m8 from "../assets/board8.jpg"
import m9 from "../assets/board9.jpg"

const Technical = () => {
  // Sample Data (Replace image URLs with real photos)
  const members = [
    {
      name: "Amitaba Chaudhuri (Ex-Armi Brigadier)",
      designation: "Secretary",
      photo: m8,
    },
    {
          name: "Bipul Mondal",
          designation: "Vice Secretary",
          photo: m2,
        },
        {
          name: "Pradip Kumar Goswami",
          designation: "President",
          photo: m5,
        },
        {
          name: "Afsasur Rahaman Sardar",
          designation: "Treasurer",
          photo: m3,
        },
        {
          name: "Anirban Saha",
          designation: "Assistant Treasurer",
          photo: m4,
        },
         {
          name: "Jaggu Sahani",
          designation: "Member",
          photo: m6,
        },
        {
          name: "Kiran Mondal",
          designation: "Member",
          photo: m7,
        },
         {
          name: "Swpan Kummer Das (Ex- Armi Sub Mejor)",
          designation: "Member",
          photo: m9,
        },
  ];

  return (
    <div className="min-h-screen bg-white py-10 px-5">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-10">
        Core Committee Members
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
        {members.map((member, index) => (
          <div
            key={index}
            className="bg-white border border-purple-300 shadow-lg rounded-xl p-4 w-48 text-center hover:shadow-2xl transition-all"
          >
            <img
              src={member.photo}
              alt={member.name}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <h2 className="text-lg font-semibold text-purple-800">
              {member.name}
            </h2>
            <p className="text-sm text-gray-600">{member.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technical;




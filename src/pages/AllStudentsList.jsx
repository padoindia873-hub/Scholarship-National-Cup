import React, { useState } from "react";
import { Link } from "react-router-dom";

const students = [
  {
    id: 1,
    name: "Mr Khan",
    school_name: "ABC School",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Mr Roy",
    school_name: "Gandhi High School",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Mr Das",
    school_name: "Sunrise School",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Mr Paul",
    school_name: "River View School",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/4.jpg",
  },

  {
    id: 5,
    name: "Mr Singh",
    school_name: "Modern HS",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "Mr Gupta",
    school_name: "ABC School",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    id: 7,
    name: "Mr Bose",
    school_name: "Gandhi High School",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    id: 8,
    name: "Mr Dey",
    school_name: "Sunrise School",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/8.jpg",
  },

  {
    id: 9,
    name: "Mr Ghosh",
    school_name: "Modern HS",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    id: 10,
    name: "Mr Ali",
    school_name: "River View School",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    id: 11,
    name: "Mr Yadav",
    school_name: "ABC School",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: 12,
    name: "Mr Patel",
    school_name: "Gandhi High School",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/12.jpg",
  },

  {
    id: 13,
    name: "Mr Rana",
    school_name: "Sunrise School",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    id: 14,
    name: "Mr Malik",
    school_name: "Modern HS",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    id: 15,
    name: "Mr Ahmed",
    school_name: "River View School",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    id: 16,
    name: "Mr Khan",
    school_name: "ABC School",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/16.jpg",
  },

  {
    id: 17,
    name: "Mr Nath",
    school_name: "Gandhi High School",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/17.jpg",
  },
  {
    id: 18,
    name: "Mr Das",
    school_name: "Sunrise School",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/18.jpg",
  },
  {
    id: 19,
    name: "Mr Pal",
    school_name: "Modern HS",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/19.jpg",
  },
  {
    id: 20,
    name: "Mr Mondal",
    school_name: "River View School",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/20.jpg",
  },

  {
    id: 21,
    name: "Mr Sarkar",
    school_name: "ABC School",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/21.jpg",
  },
  {
    id: 22,
    name: "Mr Dasgupta",
    school_name: "Gandhi High School",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    id: 23,
    name: "Mr Chowdhury",
    school_name: "Sunrise School",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/23.jpg",
  },
  {
    id: 24,
    name: "Mr Ghosal",
    school_name: "Modern HS",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/24.jpg",
  },

  {
    id: 25,
    name: "Mr Tripathi",
    school_name: "River View School",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/25.jpg",
  },
  {
    id: 26,
    name: "Mr Pandey",
    school_name: "ABC School",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/26.jpg",
  },
  {
    id: 27,
    name: "Mr Mehta",
    school_name: "Gandhi High School",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/27.jpg",
  },
  {
    id: 28,
    name: "Mr Saha",
    school_name: "Sunrise School",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/28.jpg",
  },

  {
    id: 29,
    name: "Mr Roy",
    school_name: "Modern HS",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/29.jpg",
  },
  {
    id: 30,
    name: "Mr Paul",
    school_name: "River View School",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/30.jpg",
  },
  {
    id: 31,
    name: "Mr Jain",
    school_name: "ABC School",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/31.jpg",
  },
  {
    id: 32,
    name: "Mr Bose",
    school_name: "Gandhi High School",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },

  {
    id: 33,
    name: "Mr Banerjee",
    school_name: "Sunrise School",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    id: 34,
    name: "Mr Sinha",
    school_name: "Modern HS",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    id: 35,
    name: "Mr Alam",
    school_name: "River View School",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/35.jpg",
  },
  {
    id: 36,
    name: "Mr Hossain",
    school_name: "ABC School",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/36.jpg",
  },

  {
    id: 37,
    name: "Mr Kundu",
    school_name: "Gandhi High School",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/37.jpg",
  },
  {
    id: 38,
    name: "Mr Barman",
    school_name: "Sunrise School",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/38.jpg",
  },
  {
    id: 39,
    name: "Mr Dutta",
    school_name: "Modern HS",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/39.jpg",
  },
  {
    id: 40,
    name: "Mr Bhatt",
    school_name: "River View School",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/40.jpg",
  },

  {
    id: 41,
    name: "Mr Sen",
    school_name: "ABC School",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    id: 42,
    name: "Mr Reddy",
    school_name: "Gandhi High School",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/42.jpg",
  },
  {
    id: 43,
    name: "Mr Rao",
    school_name: "Sunrise School",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/43.jpg",
  },
  {
    id: 44,
    name: "Mr Nair",
    school_name: "Modern HS",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/44.jpg",
  },

  {
    id: 45,
    name: "Mr Shetty",
    school_name: "River View School",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 46,
    name: "Mr Pillai",
    school_name: "ABC School",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    id: 47,
    name: "Mr Swain",
    school_name: "Gandhi High School",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/47.jpg",
  },
  {
    id: 48,
    name: "Mr Pradhan",
    school_name: "Sunrise School",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/48.jpg",
  },

  {
    id: 49,
    name: "Mr Mishra",
    school_name: "Modern HS",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/49.jpg",
  },
  {
    id: 50,
    name: "Mr Samanta",
    school_name: "River View School",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    id: 51,
    name: "Mr Barik",
    school_name: "ABC School",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/51.jpg",
  },
  {
    id: 52,
    name: "Mr Patra",
    school_name: "Gandhi High School",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/52.jpg",
  },

  {
    id: 53,
    name: "Mr Sardar",
    school_name: "Sunrise School",
    district: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/53.jpg",
  },
];

const AllStudentsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 27;

  const totalPages = Math.ceil(students.length / itemsPerPage);

  // page slice
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentStudents = students.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="p-5">
      <div className="overflow-x-auto border rounded-lg shadow-sm bg-white">
        <table className="w-full text-left">
          <thead className="bg-white">
            <tr className="border-b">
              <th className="px-4 py-3 font-medium text-gray-700">Sr No</th>
              <th className="px-4 py-3 font-medium text-gray-700">
                Candidate Name
              </th>
              <th className="px-4 py-3 font-medium text-gray-700">
                School Name
              </th>
              <th className="px-4 py-3 font-medium text-gray-700">
                District Name
              </th>

              <th className="px-4 py-3 font-medium text-gray-700">Pictures</th>
            </tr>
          </thead>

          <tbody>
            {currentStudents.map((s, index) => (
              <tr
                key={s.id}
                className={index % 2 === 0 ? "bg-blue-50" : "bg-white"}
              >
                <td className="px-4 py-3">{s.id}</td>
                <td className="px-4 py-3">{s.name}</td>
                <td className="px-4 py-3">{s.school_name}</td>
                <td className="px-4 py-3">{s.district}</td>
                <td className="px-4 py-3 flex items-center gap-2">
                  <img
                    src={s.img}
                    alt="profile"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-gray-700">Kristin Watson</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom Controls */}
      <div className="flex justify-between items-center mt-5">
        {/* LEFT SIDE: Start Exam */}
        <Link to="/QuestionPopUp">
          <button className="px-5 py-2 bg-green-500 text-white rounded-lg shadow">
            Start Exam
          </button>
        </Link>
        <Link to="/QuestionPopUp">
          <button className="px-5 py-2 bg-green-500 text-white rounded-lg shadow">
            Exam Date & Time
          </button>
        </Link>
        
        {/* RIGHT SIDE: Pagination */}
        <div className="flex items-center gap-3">
          <button
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            Previous
          </button>

          <button
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllStudentsList;

import React, { useState } from "react";

export const schools = [
  {
    id: 1,
    name: "Delhi Public School, RK Puram",
    address: "Sector XII, Rama Krishna Puram, New Delhi",
    website: "https://www.dpsrkp.net/",
    image: "https://i.imgur.com/Tljcz7y.jpeg",
  },
  {
    id: 2,
    name: "The Doon School",
    address: "Mall Road, Dehradun, Uttarakhand",
    website: "https://www.doonschool.com/",
    image: "https://i.imgur.com/UvQ46vz.jpeg",
  },
  {
    id: 3,
    name: "La Martiniere for Boys",
    address: "11 Loudon Street, Kolkata, West Bengal",
    website: "https://www.lmbcal.ac.in/",
    image: "https://i.imgur.com/95H6gBd.jpeg",
  },
  {
    id: 4,
    name: "Sainik School",
    address: "Korukonda, Vizianagaram, Andhra Pradesh",
    website: "http://sainikschoolkorukonda.org/",
    image: "https://i.imgur.com/TEWy0DU.jpeg",
  },
  {
    id: 5,
    name: "St. Xavier’s Collegiate School",
    address: "30 Mother Teresa Sarani, Kolkata, West Bengal",
    website: "https://www.sxcs.edu.in/",
    image: "https://i.imgur.com/dcDnM9U.jpeg",
  },

  {
    id: 6,
    name: "Mother's International School",
    address: "Sri Aurobindo Marg, Delhi",
    website: "https://themis.in/",
    image: "https://i.imgur.com/3RPNM1J.jpeg",
  },
  {
    id: 7,
    name: "Mallya Aditi International School",
    address: "Yelahanka, Bangalore",
    website: "https://www.aditi.edu.in/",
    image: "https://i.imgur.com/e0OEZ7H.jpeg",
  },
  {
    id: 8,
    name: "Bishop Cotton Boys’ School",
    address: "St. Mark’s Road, Bangalore",
    website: "https://www.cottonboys.com/",
    image: "https://i.imgur.com/l8pu0Et.jpeg",
  },
  {
    id: 9,
    name: "Dhirubhai Ambani International School",
    address: "Bandra Kurla Complex, Mumbai",
    website: "https://www.da-is.org/",
    image: "https://i.imgur.com/F3mNPlx.jpeg",
  },
  {
    id: 10,
    name: "Cathedral and John Connon School",
    address: "Fort, Mumbai",
    website: "https://www.cathedral-school.com/",
    image: "https://i.imgur.com/ziPOkSu.jpeg",
  },

  // Rest 21 - 100 dummy items
  ...Array.from({ length: 90 }).map((_, i) => ({
    id: i + 11,
    name: `Model Public School ${i + 11}`,
    address: `Sample Address, City ${i + 11}, India`,
    website: `https://school${i + 11}.edu.in/`,
    image: "https://i.imgur.com/8QpRGIY.jpeg",
  })),
];

const TopSchoolList = () => {
  const [page, setPage] = useState(1);
  const perPage = 10;

  const totalPages = Math.ceil(schools.length / perPage);

  const startIndex = (page - 1) * perPage;
  const currentSchools = schools.slice(startIndex, startIndex + perPage);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">🏫 India Top Schools</h2>

      <table className="w-full border-collapse shadow-lg">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-3 border">Image</th>
            <th className="p-3 border">School Name</th>
            <th className="p-3 border">Address</th>
            <th className="p-3 border">Website</th>
          </tr>
        </thead>

        <tbody>
          {currentSchools.map((school) => (
            <tr key={school.id} className="hover:bg-gray-100">
              <td className="p-3 border">
                <img
                  src={school.image}
                  alt={school.name}
                  className="w-20 h-14 rounded-md object-cover"
                />
              </td>

              <td className="p-3 border font-semibold">{school.name}</td>
              <td className="p-3 border text-gray-700">{school.address}</td>

              <td className="p-3 border">
                <a
                  href={school.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Visit
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Buttons */}
      <div className="flex justify-end mt-4 gap-3">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className={`px-4 py-2 rounded ${
            page === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Previous
        </button>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className={`px-4 py-2 rounded ${
            page === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TopSchoolList;

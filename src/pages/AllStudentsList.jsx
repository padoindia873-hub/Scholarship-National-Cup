import React from "react";
import TermsAndConditionsPage from "../pages/TermsAndConditionsPage";

const students = [
  { id: 1, name: "Mr XXXX", roll: "1234567890", img: "/images/user1.png" },
  { id: 2, name: "Mr XXXX", roll: "1234567890", img: "/images/user1.png" },
  { id: 3, name: "Mr XXXX", roll: "1234567890", img: "/images/user1.png" },
  { id: 4, name: "Mr XXXX", roll: "1234567890", img: "/images/user1.png" },
];

const AllStudentsList = () => {
  return (
    <div className="p-5">
      <div className="overflow-x-auto border rounded-lg shadow-sm bg-white">
        <table className="w-full text-left">
          <thead className="bg-white">
            <tr className="border-b">
              <th className="px-4 py-3 font-medium text-gray-700">Sr No</th>
              <th className="px-4 py-3 font-medium text-gray-700">Candidate Name</th>
              <th className="px-4 py-3 font-medium text-gray-700">Roll No</th>
              <th className="px-4 py-3 font-medium text-gray-700">Pictures</th>
            </tr>
          </thead>

          <tbody>
            {students.map((s, index) => (
              <tr
                key={s.id}
                className={index % 2 === 0 ? "bg-blue-50" : "bg-white"}
              >
                <td className="px-4 py-3">{s.id}</td>
                <td className="px-4 py-3">{s.name}</td>
                <td className="px-4 py-3">{s.roll}</td>
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
    </div>
  );
};

export default AllStudentsList;

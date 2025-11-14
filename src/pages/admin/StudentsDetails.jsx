import React from "react";

const StudentsDetails = () => {
  const users = [
    {
      firstName: "subhasish",
      lastName: "singha",
      email: "pinkuu.subhasish@gmail.com",
      country: "India",
      phone: "09804044940",
      userType: "ADMIN",
      district: "Kolkata",
      state: "West Bengal",
      pin: "700001",
    },
    {
      firstName: "Riya",
      lastName: "Sharma",
      email: "riya@gmail.com",
      country: "India",
      phone: "7778889990",
      userType: "STUDENT",
      district: "Delhi",
      state: "Delhi",
      pin: "110001",
    },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
        All Users List
      </h2>

      {/* ✅ Table View for Desktop */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border border-gray-200">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-2">Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Country</th>
              <th>User Type</th>
              <th>State</th>
              <th>District</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, i) => (
              <tr key={i} className="text-center border-b hover:bg-gray-100">
                <td className="p-2">
                  {user.firstName} {user.lastName}
                </td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.country}</td>
                <td className="font-semibold text-blue-600">{user.userType}</td>
                <td>{user.state || "—"}</td>
                <td>{user.district || "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ Card View for Mobile */}
      <div className="md:hidden space-y-4">
        {users.map((user, i) => (
          <div key={i} className="bg-gray-100 p-4 rounded-lg shadow">
            <p className="text-lg font-bold text-blue-700">
              {user.firstName} {user.lastName}
            </p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Country: {user.country}</p>
            <p>User Type: <span className="font-semibold">{user.userType}</span></p>
            <p>State: {user.state || "—"}</p>
            <p>District: {user.district || "—"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentsDetails;
